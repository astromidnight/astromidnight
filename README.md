# Astromidnight

Site em Astro 5 + Tailwind CSS 4, com Work Sans auto-alojada via `@fontsource/work-sans`. Construído a partir do `Brief-Claude-Code.md` e do `Brief-Claude-Code-Calendario.md` (fora deste repo, na pasta-mãe do projeto).

O calendário (`src/components/Calendar.astro`) usa dados reais no momento do build: eventos de data fixa vêm do feed público do Luma, e a disponibilidade "disponível/esgotado" de cada atividade vem de uma consulta à API do Cal.com. Não há servidor nem base de dados — o site é 100% estático, reconstruído de hora a hora via GitHub Action (`.github/workflows/deploy.yml`) e publicado no GitHub Pages.

## Correr localmente

```bash
cd site
npm install
cp .env.example .env   # cola a tua CAL_API_KEY do Cal.com, se quiseres testar a disponibilidade real
npm run dev             # http://localhost:4321
```

`npm run build` gera a versão estática em `dist/`. Sem `CAL_API_KEY`, o indicador de disponibilidade assume sempre "disponível" (fail-open) — não bloqueia o build.

## Estrutura

- `src/pages/index.astro` — homepage, ordem das secções do wireframe
- `src/components/` — Header, Hero, About, Calendar, Meteoblue, Pillar, Testimonials, Shop, Community, Footer
- `src/lib/luma.ts` — parser do feed iCal público do Luma (eventos de data fixa)
- `src/lib/calcom.ts` — consulta de disponibilidade à API do Cal.com (`cal.eu`) para os 4 event types
- `src/data/` — `calendar.json` (bloco evergreen), `luma-prices.json` (mapeamento manual título → preço para eventos do Luma), `prints.json`, `workshops.json`
- `src/styles/global.css` — paleta do site original astromidnight.pt (monocromática: #121212 / #1c1c1c / #e8e8e8 / branco), botões, starfield, animações de revelação
- `public/videos/` + `public/posters/` — vídeos e frames de poster extraídos com ffmpeg

## Pontos que precisam de validação

Ver o relatório da sessão / brief: texto do hero "a dois passos de Lisboa" vs. Alentejo, loja com 3 prints (sem calendário), coordenadas meteoblue em falta, `Logo.png` ainda não é SVG. A paleta segue o site original astromidnight.pt (decisão do David, 2026-07-20).
