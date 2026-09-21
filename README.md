# Beacon & Bean — Cafe Website

A Next.js marketing site built for a Boston coffee shop client: Home, Menu, About, Gallery,
Reservations, and Contact pages, with a warm coffee-themed design and interactive 3D tilt
cards on photos.

**Live site:** https://boston-cafe-site.vercel.app

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com/)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ and npm (on Windows, [nvm-for-windows](https://github.com/coreybutler/nvm-windows) works well: `nvm install lts && nvm use <version>`)

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

### Other scripts

| Command         | Description                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the local dev server (Turbopack)         |
| `npm run build` | Production build (also type-checks)            |
| `npm run start` | Serve the production build locally             |
| `npm run lint`  | Run ESLint                                     |

Always run `npm run lint && npm run build` before deploying to catch type or lint errors early.

## Editing content

Nearly all editable business content — name, address, phone, hours, menu items and prices,
team bios, testimonials, and photo URLs — lives in one file:

```
src/lib/content.ts
```

Update the values there and every page that references them (nav, footer, home, menu, about,
contact, reservations) updates automatically. No need to hunt through individual page files.

### Photos

Photos currently come from free-to-use Unsplash URLs as placeholders. Before launch, replace
the URLs in `src/lib/content.ts` (`heroImage`, `storyImage`, `featuredMenu[].image`,
`team[].image`, `galleryImages[].image`, etc.) with real photography of the client's cafe.
If you host images elsewhere, add that domain to `remotePatterns` in `next.config.ts`.

### Forms

The contact form (`src/components/ContactForm.tsx`) and reservation form
(`src/components/ReservationForm.tsx`) currently only simulate a submission client-side. Before
launch, wire them to a real backend — e.g. an email service like
[Resend](https://resend.com) or [Formspree](https://formspree.io), or a Next.js API route.

## Project structure

```
src/
  app/                 Pages (App Router): /, /menu, /about, /gallery, /reservations, /contact
  components/          Header, Footer, forms, PhotoImage, Button, icons
  components/ui/       Tilt-card 3D hover effect (from the 21st.dev registry)
  lib/content.ts        All editable business content and image URLs
  lib/utils.ts          Small shared helpers
```

## Deployment

The project is linked to a Vercel project (`.vercel/project.json`, gitignored). To deploy:

```bash
npm install -g vercel   # first time only
vercel login            # first time only, opens a browser to sign in
vercel --prod --yes
```

This builds and deploys straight from your local machine — no GitHub connection required.
If you'd rather auto-deploy on every push, connect this GitHub repo to the Vercel project
from the [Vercel dashboard](https://vercel.com/dashboard) (Project Settings → Git).
