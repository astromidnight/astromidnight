import { ui, defaultLang, type languages } from './ui';

export type Lang = keyof typeof languages;

// t('chave') no idioma corrente, com fallback para pt se a chave faltar em en.
export function useTranslations(lang: string | undefined) {
  const l = (lang && lang in ui ? lang : defaultLang) as Lang;
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[l][key] ?? ui[defaultLang][key];
  };
}

// Páginas com versão /en já publicada. Tradução é feita página a página --
// enquanto uma página aqui não estiver, qualquer link para ela em lang=en
// fica de propósito na versão pt (ver localizeHref), para nunca apontar
// para um /en/xxx que ainda não existe. Adicionar aqui à medida que cada
// página for traduzida.
const translatedPaths = new Set<string>(['/', '/contacto', '/sobre', '/observacao-noturna', '/retratos', '/astrofotografia', '/edicao-de-imagem', '/loja', '/termos', '/privacidade']);

// Rotas dinâmicas espelhadas 1:1 em pt/en (os dados vêm do Supabase e são os
// mesmos nos dois idiomas, só a interface à volta muda) -- basta o prefixo
// estar traduzido para qualquer slug funcionar em /en.
const translatedPrefixes = ['/loja/'];

function pathIsTranslated(bare: string): boolean {
  return translatedPaths.has(bare) || translatedPrefixes.some((p) => bare.startsWith(p));
}

// Só prefixa com /en caminhos internos reais ("/loja", "/#alojamentos") E já
// traduzidos. Deixa em paz âncoras puras ("#calendario"), links
// externos/mailto/tel, e qualquer caminho ainda sem versão /en.
export function localizeHref(href: string, lang: string | undefined): string {
  if (!href.startsWith('/') || lang !== 'en') return href;
  const bare = href.split('#')[0] || '/';
  if (!pathIsTranslated(bare)) return href;
  return `/en${href}`;
}

export function isTranslated(pathname: string): boolean {
  return pathIsTranslated(pathname);
}

// Link do seletor de idioma: troca /en/retratos <-> /retratos mantendo o
// resto do caminho intacto -- SE a página tiver versão nos dois idiomas.
// Ir de pt para en numa página ainda não traduzida cai na /en (home) em vez
// de num /en/xxx inexistente; ir de en para pt é sempre seguro (toda a
// página pt já existe).
export function switchLocalePath(pathname: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const rest = pathname.slice(3);
    return rest === '' ? '/' : rest;
  }
  if (!pathIsTranslated(pathname)) return '/en';
  return `/en${pathname === '/' ? '' : pathname}`;
}
