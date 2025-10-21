# Pandita Studio — Astro site

This repository contains the source for the Pandita Studio website, built with Astro.

## Quick start

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start local dev server:

   ```sh
   npm run dev
   ```

   The site will be available at [http://localhost:4321](http://localhost:4321)

3. Build for production:

   ```sh
   npm run build
   ```

4. Preview the production build locally:

   ```sh
   npm run preview
   ```

## Project structure

- `public/` — static assets (favicons, images, robots.txt, etc.)
- `src/`
  - `assets/` — images, svgs, and other media used by the site
  - `components/` — reusable UI components (Astro/React/Vue/Svelte files)
  - `layouts/` — layout wrappers used by pages
  - `pages/` — site pages (Astro files); edit `index.astro` to change the homepage
- `package.json` — scripts and dependencies

## Where to edit content

- Homepage: edit `src/pages/index.astro`
- Shared layout: edit `src/layouts/Layout.astro`
- Components: edit or add files under `src/components/`
- Blog posts and authors:
  - Blog posts are stored as Markdown files in `src/content/blog/` (edit or add `.md` files to create or update posts).
  - Author metadata is stored in `src/content/authors/` (edit `.md` files to update author profiles).

## Deployment

- Deploy to Vercel or Netlify by connecting the repo and using the standard Astro build command.
- For GitHub Pages, run:

  ```sh
  npm run build
  ```

  and publish the contents of the generated `dist/` directory (use your preferred deploy action or script).

- GitHub Actions: this repository already includes a workflow at `.github/workflows/astro.yml` that builds the site and deploys to GitHub Pages on pushes to the `main` branch. Edit that file to customize triggers, node version, or build settings, or disable it if you prefer another deployment method.

## Notes

- This README is tailored for the Pandita Studio site. Remove or expand sections as you add custom tooling (Tailwind, image optimizers, CMS integrations, etc.).
