# Azat-site

Monorepo of site versions. Each version is a self-contained project in its own
folder.

- [`v1/`](v1/) — Sognatore atelier site (Next.js). Deployed to GitHub Pages at
  https://musa1756.github.io/sognatore-site/ via
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Working on v1

```bash
cd v1
npm install
npm run dev
```

## Adding a new site

Create a sibling folder (e.g. `v2/`) and add a build/deploy step for it. The
current deploy workflow builds `v1/` only.
