export type ServiceType = 'stargazing' | 'retratos' | 'mentorship' | 'editing-mentorship';

export type Availability = Record<ServiceType, boolean>;

// Links diretos de reserva, versão europeia do Cal.com (cal.eu, dados
// alojados na UE) -- não cal.com.
export const CAL_LINKS: Record<ServiceType, string> = {
  stargazing: 'https://cal.eu/astromidnight/stargazing',
  retratos: 'https://cal.eu/astromidnight/portrait-session-under-the-stars',
  mentorship: 'https://cal.eu/astromidnight/astrophotography-mentorship',
  'editing-mentorship': 'https://cal.eu/astromidnight/image-editing-mentorship',
};

const CAL_USERNAME = 'astromidnight';
const AVAILABILITY_WINDOW_DAYS = 30;

// Não confirmado se a instância EU do Cal.com serve a API em api.cal.eu ou
// se continua em api.cal.com -- tenta a primeira, cai para a segunda.
const API_BASES = ['https://api.cal.eu/v2', 'https://api.cal.com/v2'];

const FALLBACK_AVAILABILITY: Availability = {
  stargazing: true,
  retratos: true,
  mentorship: true,
  'editing-mentorship': true,
};

function slugFromLink(href: string): string {
  return href.split('/').filter(Boolean).pop()!;
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

async function hasAvailableSlots(base: string, slug: string, apiKey: string): Promise<boolean> {
  const start = new Date();
  const end = new Date(start.getTime() + AVAILABILITY_WINDOW_DAYS * 24 * 60 * 60 * 1000);
  const params = new URLSearchParams({
    eventTypeSlug: slug,
    username: CAL_USERNAME,
    start: isoDate(start),
    end: isoDate(end),
    timeZone: 'Europe/Lisbon',
  });

  const res = await fetch(`${base}/slots?${params}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'cal-api-version': '2024-09-04',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return Object.keys(json?.data ?? {}).length > 0;
}

async function checkOneType(slug: string, apiKey: string): Promise<boolean> {
  let lastErr: unknown;
  for (const base of API_BASES) {
    try {
      return await hasAvailableSlots(base, slug, apiKey);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

// Consulta a disponibilidade real dos 4 event types do Cal.com no momento
// do build (pelo menos um horário livre nos próximos 30 dias). Fail-open:
// qualquer falha (sem chave, API em baixo, endpoint errado, etc.) assume
// "disponível" em vez de bloquear o build ou mostrar "esgotado" por engano
// -- a reserva real é sempre validada pelo próprio Cal.com no destino.
export async function getAvailability(): Promise<Availability> {
  const apiKey = import.meta.env.CAL_API_KEY as string | undefined;

  if (!apiKey) {
    console.warn('[cal.com] CAL_API_KEY não definida, a assumir disponível para todas as atividades.');
    return FALLBACK_AVAILABILITY;
  }

  const entries = await Promise.all(
    (Object.keys(CAL_LINKS) as ServiceType[]).map(async (type) => {
      try {
        const available = await checkOneType(slugFromLink(CAL_LINKS[type]), apiKey);
        return [type, available] as const;
      } catch (err) {
        console.warn(`[cal.com] falha ao consultar disponibilidade de "${type}", a assumir disponível:`, err);
        return [type, true] as const;
      }
    })
  );

  return Object.fromEntries(entries) as Availability;
}
