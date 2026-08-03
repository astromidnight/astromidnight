/*
  Fases principais da Lua — algoritmo de Jean Meeus, "Astronomical Algorithms"
  (cap. 49). Devolve o instante das 4 fases principais (Lua Nova, Quarto
  Crescente, Lua Cheia, Quarto Minguante) com precisão de minutos, sem API.
  Os instantes são convertidos para a hora local (por omissão Europe/Lisbon)
  para decidir em que dia do calendário cai cada fase.
*/

export type PhaseType = 'new' | 'first' | 'full' | 'last';

export interface MoonPhase {
  day: number; // dia do mês (hora local)
  type: PhaseType;
  label: string; // rótulo no idioma pedido a moonPhasesInMonth (pt por omissão)
  time: string; // "HH:MM" hora local
}

const PHASE_LABEL: Record<'pt' | 'en', Record<PhaseType, string>> = {
  pt: {
    new: 'Lua Nova',
    first: 'Quarto Crescente',
    full: 'Lua Cheia',
    last: 'Quarto Minguante',
  },
  en: {
    new: 'New Moon',
    first: 'First Quarter',
    full: 'Full Moon',
    last: 'Last Quarter',
  },
};

const PHASE_OFFSET: Record<PhaseType, number> = {
  new: 0,
  first: 0.25,
  full: 0.5,
  last: 0.75,
};

const RAD = Math.PI / 180;
const sin = (deg: number) => Math.sin(deg * RAD);
const cos = (deg: number) => Math.cos(deg * RAD);

// ΔT (TD − UTC) em segundos, aproximado para a década de 2020. Ao nível do dia
// é irrelevante, mas mantém a conversão para UTC honesta.
const DELTA_T_SECONDS = 69;

/** Julian Ephemeris Day (TD) do instante da fase para a lunação `k`. */
function phaseJDE(k: number, type: PhaseType): number {
  k += PHASE_OFFSET[type];
  const T = k / 1236.85;

  let jde =
    2451550.09766 +
    29.530588861 * k +
    0.00015437 * T ** 2 -
    0.00000015 * T ** 3 +
    0.00000000073 * T ** 4;

  const E = 1 - 0.002516 * T - 0.0000074 * T ** 2;
  const M = 2.5534 + 29.1053567 * k - 0.0000014 * T ** 2 - 0.00000011 * T ** 3;
  const Mp =
    201.5643 +
    385.81693528 * k +
    0.0107582 * T ** 2 +
    0.00001238 * T ** 3 -
    0.000000058 * T ** 4;
  const F =
    160.7108 +
    390.67050284 * k -
    0.0016118 * T ** 2 -
    0.00000227 * T ** 3 +
    0.000000011 * T ** 4;
  const Om =
    124.7746 - 1.56375588 * k + 0.0020672 * T ** 2 + 0.00000215 * T ** 3;

  if (type === 'new' || type === 'full') {
    jde +=
      (type === 'new' ? -0.4072 : -0.40614) * sin(Mp) +
      0.17241 * E * sin(M) +
      0.01608 * sin(2 * Mp) +
      0.01039 * sin(2 * F) +
      0.00739 * E * sin(Mp - M) -
      0.00514 * E * sin(Mp + M) +
      0.00208 * E * E * sin(2 * M) -
      0.00111 * sin(Mp - 2 * F) -
      0.00057 * sin(Mp + 2 * F) +
      0.00056 * E * sin(2 * Mp + M) -
      0.00042 * sin(3 * Mp) +
      0.00042 * E * sin(M + 2 * F) +
      0.00038 * E * sin(M - 2 * F) -
      0.00024 * E * sin(2 * Mp - M) -
      0.00017 * sin(Om) -
      0.00007 * sin(Mp + 2 * M) +
      0.00004 * sin(2 * Mp - 2 * F) +
      0.00004 * sin(3 * M) +
      0.00003 * sin(Mp + M - 2 * F) +
      0.00003 * sin(2 * Mp + 2 * F) -
      0.00003 * sin(Mp + M + 2 * F) +
      0.00003 * sin(Mp - M + 2 * F) -
      0.00002 * sin(Mp - M - 2 * F) -
      0.00002 * sin(3 * Mp + M) +
      0.00002 * sin(4 * Mp);
  } else {
    jde +=
      -0.62801 * sin(Mp) +
      0.17172 * E * sin(M) -
      0.01183 * E * sin(Mp + M) +
      0.00862 * sin(2 * Mp) +
      0.00804 * sin(2 * F) +
      0.00454 * E * sin(Mp - M) +
      0.00204 * E * E * sin(2 * M) -
      0.0018 * sin(Mp - 2 * F) -
      0.0007 * sin(Mp + 2 * F) -
      0.0004 * sin(3 * Mp) -
      0.00034 * E * sin(2 * Mp - M) +
      0.00032 * E * sin(M + 2 * F) +
      0.00032 * E * sin(M - 2 * F) -
      0.00028 * E * E * sin(Mp + 2 * M) +
      0.00027 * E * sin(2 * Mp + M) -
      0.00017 * sin(Om) -
      0.00005 * sin(Mp - M - 2 * F) +
      0.00004 * sin(2 * Mp + 2 * F) -
      0.00004 * sin(Mp + M + 2 * F) +
      0.00004 * sin(Mp - 2 * M) +
      0.00003 * sin(Mp + M - 2 * F) +
      0.00003 * sin(3 * M) +
      0.00002 * sin(2 * Mp - 2 * F) +
      0.00002 * sin(Mp - M + 2 * F) -
      0.00002 * sin(3 * Mp + M);

    const W =
      0.00306 -
      0.00038 * E * cos(M) +
      0.00026 * cos(Mp) -
      0.00002 * cos(Mp - M) +
      0.00002 * cos(Mp + M) +
      0.00002 * cos(2 * F);
    jde += type === 'first' ? W : -W;
  }

  // Correções planetárias (A1..A14)
  const A = [
    299.77 + 0.107408 * k - 0.009173 * T ** 2,
    251.88 + 0.016321 * k,
    251.83 + 26.651886 * k,
    349.42 + 36.412478 * k,
    84.66 + 18.206239 * k,
    141.74 + 53.303771 * k,
    207.14 + 2.453732 * k,
    154.84 + 7.30686 * k,
    34.52 + 27.261239 * k,
    207.19 + 0.121824 * k,
    291.34 + 1.844379 * k,
    161.72 + 24.198154 * k,
    239.56 + 25.513099 * k,
    331.55 + 3.592518 * k,
  ];
  const Acoef = [
    0.000325, 0.000165, 0.000164, 0.000126, 0.00011, 0.000062, 0.00006,
    0.000056, 0.000047, 0.000042, 0.00004, 0.000037, 0.000035, 0.000023,
  ];
  for (let i = 0; i < A.length; i++) jde += Acoef[i] * sin(A[i]);

  return jde;
}

/** JD (TD) → timestamp Unix em ms (UTC), descontando ΔT. */
function jdeToUnixMs(jde: number): number {
  const jdUtc = jde - DELTA_T_SECONDS / 86400;
  return (jdUtc - 2440587.5) * 86400000;
}

/** Extrai dia/hora locais de um timestamp UTC, num fuso arbitrário. */
function localParts(ms: number, timeZone: string) {
  const fmt = new Intl.DateTimeFormat('pt-PT', {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const p = Object.fromEntries(
    fmt.formatToParts(new Date(ms)).map((x) => [x.type, x.value])
  );
  return {
    year: Number(p.year),
    month: Number(p.month),
    day: Number(p.day),
    time: `${p.hour}:${p.minute}`,
  };
}

const norm360 = (x: number) => ((x % 360) + 360) % 360;

/** Fração iluminada do disco lunar (0..1) num instante JD, + se está a crescer. */
function illuminatedFractionAtJD(jd: number): {
  fraction: number;
  waxing: boolean;
} {
  const T = (jd - 2451545) / 36525;

  // Longitude do Sol (baixa precisão, Meeus cap. 25)
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const Ms = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const Csun =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * sin(Ms) +
    (0.019993 - 0.000101 * T) * sin(2 * Ms) +
    0.000289 * sin(3 * Ms);
  const sunLon = L0 + Csun;

  // Longitude da Lua (termos principais, Meeus cap. 47)
  const Lp = 218.3164477 + 481267.88123421 * T;
  const D = 297.8501921 + 445267.1114034 * T;
  const Mm = 134.9633964 + 477198.8675055 * T;
  const Msun = 357.5291092 + 35999.0502909 * T;
  const F = 93.272095 + 483202.0175233 * T;
  const moonLon =
    Lp +
    6.288774 * sin(Mm) +
    1.274027 * sin(2 * D - Mm) +
    0.658314 * sin(2 * D) +
    0.213618 * sin(2 * Mm) -
    0.185116 * sin(Msun) -
    0.114332 * sin(2 * F) +
    0.058793 * sin(2 * D - 2 * Mm) +
    0.057066 * sin(2 * D - Msun - Mm) +
    0.053322 * sin(2 * D + Mm) +
    0.045758 * sin(2 * D - Msun);

  const elong = norm360(moonLon - sunLon);
  return { fraction: (1 - cos(elong)) / 2, waxing: elong < 180 };
}

export interface DayMoon {
  day: number;
  illum: number; // % iluminado (0-100)
  waxing: boolean;
}

/**
 * Iluminação lunar (%) por dia do mês, avaliada ~22h de Lisboa (~21h UTC).
 * A fração muda ~3%/dia, por isso a hora exacta é irrelevante para o mapa.
 */
export function moonIlluminationByDay(
  year: number,
  month: number
): Map<number, DayMoon> {
  const days = new Date(year, month, 0).getDate();
  const map = new Map<number, DayMoon>();
  for (let d = 1; d <= days; d++) {
    const jd = Date.UTC(year, month - 1, d, 21, 0, 0) / 86400000 + 2440587.5;
    const { fraction, waxing } = illuminatedFractionAtJD(jd);
    map.set(d, { day: d, illum: Math.round(fraction * 100), waxing });
  }
  return map;
}

/** Nome da fase num idioma -- mesma fonte usada em moonPhasesInMonth, para a
 * legenda do calendário (Calendar.astro) nunca ficar dessincronizada. */
export function phaseLabel(type: PhaseType, lang: 'pt' | 'en' = 'pt'): string {
  return PHASE_LABEL[lang][type];
}

/**
 * Fases principais da Lua que ocorrem no mês indicado (1-12), ordenadas por dia.
 */
export function moonPhasesInMonth(
  year: number,
  month: number,
  timeZone = 'Europe/Lisbon',
  lang: 'pt' | 'en' = 'pt'
): MoonPhase[] {
  const decimalYear = year + (month - 0.5) / 12;
  const kBase = Math.round((decimalYear - 2000) * 12.3685);
  const types: PhaseType[] = ['new', 'first', 'full', 'last'];

  const out: MoonPhase[] = [];
  for (let k = kBase - 2; k <= kBase + 2; k++) {
    for (const type of types) {
      const { year: y, month: m, day, time } = localParts(
        jdeToUnixMs(phaseJDE(k, type)),
        timeZone
      );
      if (y === year && m === month) {
        out.push({ day, type, label: PHASE_LABEL[lang][type], time });
      }
    }
  }
  return out.sort((a, b) => a.day - b.day);
}
