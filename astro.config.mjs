// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages: repo de projeto (astromidnight/astromidnight), não
  // user-page, por isso o site fica sob /astromidnight até o domínio
  // próprio (astromidnight.pt) ser ligado.
  site: 'https://astromidnight.github.io/astromidnight',
  base: '/astromidnight/',
  vite: {
    plugins: [tailwindcss()],
  },
});
