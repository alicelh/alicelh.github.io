# alicelh.github.io

Personal website of Linhao Meng, built with [Astro](https://astro.build).

## Edit content

Almost everything on the page comes from **`src/data/profile.ts`** — intro, current work,
selected projects, publications, timeline, visits, talks, awards and skills.
Edit that file; the components only handle layout.

Project thumbnails live in `src/assets/work/` (referenced by file name in `profile.ts`).
Static files served as-is (PDFs, favicon) live in `public/`.

## Run locally

Requires Node.js ≥ 22.12.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds the site and
publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

Manual fallback: `npm run deploy` (builds and pushes `dist/` to `gh-pages` from your machine).

## Structure

```
src/
  data/profile.ts          ← content
  components/Hero.astro    ← hero: 1,017 kinds of work from the Anthropic Economic Index, laid out with Class-Constrained t-SNE
scripts/hero-data/         ← how public/hero-data.json is generated
  components/Journey.astro ← SVG career timeline
  components/Publications.astro
  pages/index.astro        ← page sections
  styles/global.css        ← colors, type, shared styles
```
