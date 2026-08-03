// Canais de contacto, num sítio só para não ficarem meio-atualizados
// espalhados pelo site (secção da comunidade na homepage + página /contacto).

const WHATSAPP_NUMBER = '351966702498';
const WHATSAPP_MESSAGE: Record<'pt' | 'en', string> = {
  pt: 'Olá! Vim do site da Astromidnight e tenho uma dúvida.',
  en: 'Hi! I came from the Astromidnight website and I have a question.',
};

// Mensagem pré-preenchida no idioma da página de onde se clica -- ver
// chamadas em Community.astro e ContactChannels.astro.
export function getWhatsappUrl(lang: 'pt' | 'en' = 'pt'): string | null {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE[lang])}`;
}

export const WHATSAPP_URL: string | null = getWhatsappUrl('pt');

export const EMAIL = 'info@astromidnight.pt';

export const INSTAGRAM_HANDLE = '@astro.midnight';
export const INSTAGRAM_URL = 'https://www.instagram.com/astro.midnight/';

export const LOCATION = 'São Pedro da Gafanhoeira, Alentejo';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Pedro+da+Gafanhoeira';

export const hasWhatsapp = () => WHATSAPP_URL !== null;
