export type ServiceType = 'stargazing' | 'retratos' | 'mentorship' | 'editing-mentorship';
export type StargazingAdults = 1 | 2 | 3 | 4;

// Por atividade: conjunto de datas ("AAAA-MM-DD") com pelo menos um
// horário livre no Cal.com. `null` = a consulta falhou para esta
// atividade (sem chave, API em baixo, etc.) -- nesse caso assume-se
// sempre disponível (fail-open), ver isAvailable().
export type Availability = Record<ServiceType, Set<string> | null>;

// Stargazing: só adultos pagam (crianças entram grátis, perguntado no
// próprio formulário do Cal.com). Em vez de "offer seats", cada noite é um
// só event type -- 4 no total, um por nº de adultos -- e reservar qualquer
// um bloqueia os outros 3 nessa data porque todos escrevem no mesmo
// calendário do Cal.com (conflict-checking cruzado entre event types é o
// comportamento por omissão, ver help.cal.com/event-types/
// eventtype-specific-checking-for-conflicts). Por isso a disponibilidade só
// precisa de ser consultada numa das 4 variantes (usa-se a de 1 adulto).
export const STARGAZING_PRICE_PER_ADULT = 45;

export const STARGAZING_LINKS: Record<StargazingAdults, string> = {
  1: 'https://cal.eu/astromidnight/stargazing',
  2: 'https://cal.eu/astromidnight/stargazing-2-people',
  3: 'https://cal.eu/astromidnight/stargazing-3-adults',
  4: 'https://cal.eu/astromidnight/stargazing-4-adults',
};

// Links diretos de reserva, versão europeia do Cal.com (cal.eu, dados
// alojados na UE) -- não cal.com. `stargazing` aponta à variante de 1
// adulto -- serve de base para a consulta de disponibilidade e como
// fallback para quem não passar por um seletor de quantidade.
export const CAL_LINKS: Record<ServiceType, string> = {
  stargazing: STARGAZING_LINKS[1],
  retratos: 'https://cal.eu/astromidnight/portrait-session-under-the-stars',
  mentorship: 'https://cal.eu/astromidnight/astrophotography-mentorship',
  'editing-mentorship': 'https://cal.eu/astromidnight/deepsky-image-processing',
};

const CAL_USERNAME = 'astromidnight';

// Cobre a janela de meses que o calendário do site mostra para a frente
// (MONTHS_AHEAD em Calendar.astro = 6 meses + o atual).
const HORIZON_DAYS = 215;

// Não confirmado se a instância EU do Cal.com serve a API em api.cal.eu ou
// se continua em api.cal.com -- tenta a primeira, cai para a segunda.
const API_BASES = ['https://api.cal.eu/v2', 'https://api.cal.com/v2'];

function slugFromLink(href: string): string {
  return href.split('/').filter(Boolean).pop()!;
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// Datas (AAAA-MM-DD) com pelo menos um horário livre, dentro da janela.
// Um dia ausente da resposta do Cal.com é lido como sem vagas nesse dia --
// é a leitura literal da própria API deles (range sem nada devolve
// "data: {}"), por isso um dia sem chave dentro do range pedido significa
// "sem horários livres esse dia".
async function fetchSlotDates(base: string, slug: string, apiKey: string): Promise<Set<string>> {
  const start = new Date();
  const end = new Date(start.getTime() + HORIZON_DAYS * 24 * 60 * 60 * 1000);
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
  const data = json?.data ?? {};
  return new Set(
    Object.keys(data).filter((day) => Array.isArray(data[day]) && data[day].length > 0)
  );
}

async function fetchOneType(slug: string, apiKey: string): Promise<Set<string>> {
  let lastErr: unknown;
  for (const base of API_BASES) {
    try {
      return await fetchSlotDates(base, slug, apiKey);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

// Consulta a disponibilidade real dos 4 event types do Cal.com no momento
// do build, dia a dia, para toda a janela de meses do calendário. Fail-open
// por atividade: se a consulta falhar, essa atividade fica com `null` e
// isAvailable() assume sempre disponível em vez de bloquear o build ou
// mostrar "esgotado" por engano -- a reserva real é sempre validada pelo
// próprio Cal.com no destino.
export async function getAvailability(): Promise<Availability> {
  const apiKey = import.meta.env.CAL_API_KEY as string | undefined;
  const types = Object.keys(CAL_LINKS) as ServiceType[];

  if (!apiKey) {
    console.warn('[cal.com] CAL_API_KEY não definida, a assumir disponível para todas as noites.');
    return Object.fromEntries(types.map((t) => [t, null])) as Availability;
  }

  const entries = await Promise.all(
    types.map(async (type) => {
      try {
        return [type, await fetchOneType(slugFromLink(CAL_LINKS[type]), apiKey)] as const;
      } catch (err) {
        console.warn(`[cal.com] falha ao consultar disponibilidade de "${type}", a assumir disponível:`, err);
        return [type, null] as const;
      }
    })
  );

  return Object.fromEntries(entries) as Availability;
}

export function isAvailable(availability: Availability, type: ServiceType, dateKey: string): boolean {
  const dates = availability[type];
  return dates === null ? true : dates.has(dateKey);
}
