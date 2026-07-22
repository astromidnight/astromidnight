import prices from '../data/luma-prices.json';

export type LumaEvent = {
  year: number;
  month: number;
  day: number;
  dateLabel: string;
  title: string;
  type: 'eventos' | 'workshops';
  typeLabel: string;
  price: string;
  cta: string;
  href: string;
};

const FEED_URL = 'https://api.luma.com/ics/get?entity=calendar&id=cal-vRu1Ypkg1PtcOi1';

const MONTH_ABBR_PT = [
  'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ',
];

// Convenção: título a começar por "[Workshop]" no Luma -> workshop com data
// fixa (ex.: Nightscape). Sem prefixo -> Evento (ex.: Kube Star Party).
const WORKSHOP_PREFIX = /^\[workshop\]\s*/i;

const LUMA_URL_RE = /https:\/\/luma\.com\/\S+/;

function unfoldLines(raw: string): string[] {
  const lines = raw.split(/\r\n|\n|\r/);
  const out: string[] = [];
  for (const line of lines) {
    if ((line.startsWith(' ') || line.startsWith('\t')) && out.length > 0) {
      out[out.length - 1] += line.slice(1);
    } else if (line.length > 0) {
      out.push(line);
    }
  }
  return out;
}

function unescapeIcsText(s: string): string {
  return s
    .replace(/\\n/gi, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function parseProperty(line: string): { name: string; value: string } {
  const colonIdx = line.indexOf(':');
  if (colonIdx === -1) return { name: '', value: '' };
  const head = line.slice(0, colonIdx);
  const value = line.slice(colonIdx + 1);
  const name = head.split(';')[0].toUpperCase();
  return { name, value };
}

type RawEvent = {
  summary?: string;
  dtstart?: string;
  status?: string;
  description?: string;
};

function parseIcsEvents(raw: string): RawEvent[] {
  const lines = unfoldLines(raw);
  const events: RawEvent[] = [];
  let current: RawEvent | null = null;
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      current = {};
      continue;
    }
    if (line === 'END:VEVENT') {
      if (current) events.push(current);
      current = null;
      continue;
    }
    if (!current) continue;
    const { name, value } = parseProperty(line);
    if (name === 'SUMMARY') current.summary = unescapeIcsText(value);
    else if (name === 'DTSTART') current.dtstart = value;
    else if (name === 'STATUS') current.status = value;
    else if (name === 'DESCRIPTION') current.description = unescapeIcsText(value);
  }
  return events;
}

function parseDateDigits(dtstart: string) {
  const digits = dtstart.replace(/[^0-9]/g, '');
  if (digits.length < 8) return null;
  const year = Number(digits.slice(0, 4));
  const month = Number(digits.slice(4, 6));
  const day = Number(digits.slice(6, 8));
  if (!year || !month || !day) return null;
  return { year, month, day };
}

function extractLumaUrl(description: string | undefined): string {
  const match = description?.match(LUMA_URL_RE);
  return match ? match[0].replace(/[.,]+$/, '') : 'https://lu.ma';
}

// Lê o feed público do Luma no momento do build e devolve os eventos de
// data fixa (Eventos + Workshop Nightscape), já classificados e com preço.
// Nunca rebenta o build: se o feed falhar, devolve lista vazia (o
// calendário simplesmente não mostra nenhum item de data fixa nesse build).
export async function getLumaEvents(): Promise<LumaEvent[]> {
  let raw: string;
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.text();
  } catch (err) {
    console.warn('[luma] falha ao obter o feed do Luma, sem eventos de data fixa neste build:', err);
    return [];
  }

  const rawEvents = parseIcsEvents(raw);
  const now = new Date();
  const todayKey = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  const priceMap = prices as Record<string, string>;

  const events: LumaEvent[] = [];
  for (const ev of rawEvents) {
    if (!ev.summary || !ev.dtstart) continue;
    if (ev.status && ev.status.toUpperCase() === 'CANCELLED') continue;

    const date = parseDateDigits(ev.dtstart);
    if (!date) continue;
    const dateKey = date.year * 10000 + date.month * 100 + date.day;
    if (dateKey < todayKey) continue; // só eventos futuros (ou hoje)

    const isWorkshop = WORKSHOP_PREFIX.test(ev.summary);
    const title = ev.summary.replace(WORKSHOP_PREFIX, '').trim();

    events.push({
      year: date.year,
      month: date.month,
      day: date.day,
      dateLabel: `${date.day} ${MONTH_ABBR_PT[date.month - 1]}`,
      title,
      type: isWorkshop ? 'workshops' : 'eventos',
      typeLabel: isWorkshop ? 'Workshop' : 'Evento',
      price: priceMap[title] ?? 'Consultar',
      cta: 'Reservar',
      href: extractLumaUrl(ev.description),
    });
  }

  events.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day);
  return events;
}
