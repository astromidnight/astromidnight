// Canais de contacto, num sítio só para não ficarem meio-atualizados
// espalhados pelo site (secção da comunidade na homepage + página /contacto).

// WhatsApp Business ainda por definir. Assim que houver número, trocar por
// 'https://wa.me/351XXXXXXXXX' e os botões passam a funcionar em todo o
// lado sozinhos -- ver hasWhatsapp() para o estado desativado.
export const WHATSAPP_URL: string | null = null;

// Email que está publicado no site atual (astromidnight.pt/contacts). Por
// decidir se passa para um do domínio, ex. ola@astromidnight.pt.
export const EMAIL = 'davidbernardocruz@gmail.com';

export const INSTAGRAM_HANDLE = '@astro.midnight';
export const INSTAGRAM_URL = 'https://www.instagram.com/astro.midnight/';

export const LOCATION = 'São Pedro da Gafanhoeira, Alentejo';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Pedro+da+Gafanhoeira';

export const hasWhatsapp = () => WHATSAPP_URL !== null;
