/*
  Eventos do céu para o calendário: chuvas de meteoros (datas aproximadamente
  fixas ano após ano), visibilidade do núcleo da Via Láctea e o "veredicto"
  de qualidade de cada noite em função da iluminação lunar.
*/

export interface MeteorShower {
  name: string;
  peak: [month: number, day: number];
  active: [start: [number, number], end: [number, number]];
  zhr: number; // taxa horária zenital no pico
  note?: string;
}

// Datas de referência (hemisfério norte). Variam ±1 dia conforme o ano.
const SHOWERS: MeteorShower[] = [
  { name: 'Quadrântidas', peak: [1, 3], active: [[12, 28], [1, 12]], zhr: 120 },
  { name: 'Líridas', peak: [4, 22], active: [[4, 16], [4, 25]], zhr: 18 },
  { name: 'Eta Aquáridas', peak: [5, 6], active: [[4, 19], [5, 28]], zhr: 50 },
  { name: 'Delta Aquáridas', peak: [7, 30], active: [[7, 12], [8, 23]], zhr: 25 },
  { name: 'Perseidas', peak: [8, 12], active: [[7, 17], [8, 24]], zhr: 100, note: 'A rainha do verão' },
  { name: 'Dracónidas', peak: [10, 8], active: [[10, 6], [10, 10]], zhr: 10 },
  { name: 'Oriónidas', peak: [10, 21], active: [[10, 2], [11, 7]], zhr: 20 },
  { name: 'Leónidas', peak: [11, 17], active: [[11, 6], [11, 30]], zhr: 15 },
  { name: 'Gemínidas', peak: [12, 14], active: [[12, 4], [12, 17]], zhr: 150, note: 'A mais intensa do ano' },
  { name: 'Úrsidas', peak: [12, 22], active: [[12, 17], [12, 26]], zhr: 10 },
];

const ord = (m: number, d: number) => m * 100 + d;

/** True se a chuva está activa nalgum dia do mês indicado (trata a virada do ano). */
function activeInMonth(s: MeteorShower, month: number): boolean {
  const [[sm, sd], [em, ed]] = s.active;
  const start = ord(sm, sd);
  const end = ord(em, ed);
  const wraps = start > end; // ex.: Quadrântidas 28/12 → 12/01
  for (let d = 1; d <= 31; d++) {
    const cur = ord(month, d);
    if (wraps ? cur >= start || cur <= end : cur >= start && cur <= end) return true;
  }
  return false;
}

export interface ActiveShower {
  name: string;
  peakDay: number | null; // dia do pico, se cair neste mês
  peakLabel: string; // ex. "Pico 12 Ago" ou "Activa"
  zhr: number;
  note?: string;
}

/** Chuvas de meteoros visíveis no mês (1-12), com o dia de pico quando aplicável. */
export function meteorShowersInMonth(month: number): ActiveShower[] {
  return SHOWERS.filter((s) => activeInMonth(s, month)).map((s) => {
    const peakDay = s.peak[0] === month ? s.peak[1] : null;
    return {
      name: s.name,
      peakDay,
      peakLabel: peakDay ? `Pico ${peakDay}` : 'Activa',
      zhr: s.zhr,
      note: s.note,
    };
  });
}

/** Dias do mês com pico de alguma chuva → Map<dia, nomes[]>. */
export function meteorPeaksByDay(month: number): Map<number, string[]> {
  const map = new Map<number, string[]>();
  for (const s of SHOWERS) {
    if (s.peak[0] === month) {
      const list = map.get(s.peak[1]) ?? [];
      list.push(s.name);
      map.set(s.peak[1], list);
    }
  }
  return map;
}

/** Núcleo da Via Láctea: visível de Lisboa ~Março a Outubro. */
export function milkyWayVisible(month: number): boolean {
  return month >= 3 && month <= 10;
}

export type NightTone = 'dark' | 'good' | 'bright';

export interface NightQuality {
  tone: NightTone;
  verdict: string; // rótulo curto
  activity: string; // o que se faz melhor
}

/** Veredicto de qualidade de uma noite a partir da iluminação lunar (%). */
export function nightQuality(illum: number): NightQuality {
  if (illum <= 15)
    return {
      tone: 'dark',
      verdict: 'Céu escuro',
      activity: 'Deep-sky, Via Láctea e Retratos sob as Estrelas',
    };
  if (illum <= 60)
    return {
      tone: 'good',
      verdict: 'Boa observação',
      activity: 'Planetas, enxames e objetos brilhantes',
    };
  return {
    tone: 'bright',
    verdict: 'Noite de luar',
    activity: 'Observação da Lua e dos planetas',
  };
}

/**
 * Melhor janela de céu escuro do mês: sequência contígua de dias com
 * iluminação ≤ 15% (à volta da lua nova).
 */
export function darkSkyWindow(
  illumByDay: Map<number, { illum: number }>
): { start: number; end: number } | null {
  const days = [...illumByDay.keys()].sort((a, b) => a - b);
  let best: { start: number; end: number } | null = null;
  let run: number[] = [];
  const flush = () => {
    if (run.length && (!best || run.length > best.end - best.start + 1)) {
      best = { start: run[0], end: run[run.length - 1] };
    }
    run = [];
  };
  for (const d of days) {
    if ((illumByDay.get(d)!.illum ?? 100) <= 15) run.push(d);
    else flush();
  }
  flush();
  return best;
}
