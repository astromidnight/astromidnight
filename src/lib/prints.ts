import { supabase } from './supabase';

export type Print = {
  slug: string;
  title: string;
  category: 'deep-sky' | 'nightscape';
  location: string | null;
  constellation: string | null;
  exposure_minutes: number | null;
  distance_ly: number | null;
  distance_unit: string | null;
  capture_date_start: string | null;
  capture_date_end: string | null;
  size: string | null;
  price_cents: number | null;
  currency: string;
  free_shipping: boolean;
  order_url: string | null;
  thumb_url: string;
  detail_image_1_url: string | null;
  detail_image_2_url: string | null;
  published: boolean;
  display_order: number;
};

// Nunca rebenta o build: se o Supabase falhar, devolve lista vazia (a loja
// simplesmente não mostra itens nesse build) em vez de falhar o deploy todo.
export async function getPublishedPrints(): Promise<Print[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('prints')
    .select('*')
    .eq('published', true)
    .order('display_order', { ascending: true });

  if (error) {
    console.warn('[prints] falha ao obter a loja do Supabase:', error.message);
    return [];
  }
  return data as Print[];
}

// Últimos `n` itens publicados, em ordem ascendente de display_order (para
// a mostra na homepage ficar pela ordem natural da loja).
export async function getLatestPrints(n: number): Promise<Print[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('prints')
    .select('*')
    .eq('published', true)
    .order('display_order', { ascending: false })
    .limit(n);

  if (error) {
    console.warn('[prints] falha ao obter os últimos itens da loja:', error.message);
    return [];
  }
  return (data as Print[]).reverse();
}

export async function getPrintBySlug(slug: string): Promise<Print | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('prints')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.warn(`[prints] falha ao obter o print "${slug}":`, error.message);
    return null;
  }
  return data as Print | null;
}

export function formatPrice(cents: number, currency = 'EUR'): string {
  const symbol = currency === 'EUR' ? '€' : `${currency} `;
  return `${symbol}${(cents / 100).toFixed(2).replace('.', ',')}`;
}

const DISTANCE_UNIT_PT: Record<string, string> = {
  ly: 'anos-luz',
  'million ly': 'milhões de anos-luz',
  'million km': 'milhões de km',
};

// Separador de milhar manual: o CLDR mais recente do Node usa espaço (não
// ponto) para agrupar em pt-PT, o que não bate certo com o resto do site.
function groupThousands(value: number): string {
  return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Colunas `numeric` do Postgres vêm como string via API (PostgREST evita
// perder precisão) -- converte sempre antes de formatar.
export function formatDistance(value: number, unit: string): string {
  const label = DISTANCE_UNIT_PT[unit] ?? unit;
  return `${groupThousands(Number(value))} ${label} da Terra`;
}

export function formatExposure(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${m ? ` ${m}min` : ''} de exposição`;
}

const MONTHS_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

function parseDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number);
  return { year, month, day };
}

export function formatDateRange(startIso: string, endIso: string): string {
  const start = parseDate(startIso);
  const end = parseDate(endIso);

  if (startIso === endIso) {
    return `${start.day} ${MONTHS_PT[start.month - 1]} ${start.year}`;
  }
  if (start.year === end.year && start.month === end.month) {
    return `${start.day} - ${end.day} ${MONTHS_PT[start.month - 1]} ${start.year}`;
  }
  return `${start.day} ${MONTHS_PT[start.month - 1]} ${start.year} - ${end.day} ${MONTHS_PT[end.month - 1]} ${end.year}`;
}

export function printSubtitle(print: Print): string {
  const categoryLabel = print.category === 'deep-sky' ? 'Deep-sky' : 'Nightscape';
  return print.category === 'nightscape' && print.location
    ? `${categoryLabel} · ${print.location}`
    : categoryLabel;
}
