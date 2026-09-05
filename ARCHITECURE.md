# Architecture

This document explains how the app is structured, how data flows through it, and why each major technical decision was made.

## Overview

This is a fully static, client-side React application. There is no backend, no database, and no server rendering. All content lives in a single JS data file, and the contact form is handled by a third-party form service (Formspree) instead of a custom API.

## Component Tree
```
App
├── Sidebar (profile photo, bio, social links, resume download)
├── Navbar (sticky nav, dock-on-scroll effect, scrollspy)
├── Hero (id="hero")
├── About (id="about")
├── Projects (id="projects")
│ └── ProjectCard (repeated per project)
├── Experience (id="experience")
├── Skills (id="skills")
├── Contact (id="contact")
└── Footer
```

`ProjectCard` is split out from `Projects` because it repeats once per project, keeping the repeated markup isolated from the section that lays them out.

## Data Flow

All content (profile info, projects, skills, experience) lives in `src/data/portfolioData.js`, exported as plain JS objects/arrays. Components import directly from this file rather than receiving data via props, because:

- Every section component is used exactly once (no reuse that would need prop configuration)
- There's no state that changes this data at runtime — it's static content, not application state

Editing the portfolio's content means editing this one file and redeploying — there is no database or admin panel.

## Custom Hooks

Three custom hooks handle scroll-driven behavior, each an independent concern:

| Hook | Purpose | Used by |
|---|---|---|
| `useScrollReveal` | Fades/slides a section in when it enters the viewport | Every section component |
| `useNavbarDock` | Tracks scroll position to toggle the navbar's "docked" pill shape | `Navbar` |
| `useScrollSpy` | Tracks which section is currently in view to highlight the matching nav link | `Navbar` |

All three use the browser's `IntersectionObserver` or scroll events directly — no animation library was added, since this behavior doesn't need a heavier dependency to implement in React.

## Assets

- **`src/assets/`** — images imported directly in component code (profile photo, project screenshots, experience logos). Vite processes, hashes, and bundles these at build time.
- **`public/`** — files referenced by direct URL without import (resume PDF, favicon). Served as-is, unprocessed.
- Project and experience images are looked up dynamically by filename (since the filename comes from `portfolioData.js`, not a hardcoded import) using Vite's `import.meta.glob`.

## Styling

Tailwind CSS v4, integrated via the official `@tailwindcss/vite` plugin (no `tailwind.config.js` needed — v4 auto-detects content). Nearly all styling is done with Tailwind utility classes directly in JSX. A small amount of custom global CSS remains in `src/index.css` for effects Tailwind utilities can't express directly: the scroll-reveal transition states and the fixed grain-texture overlay.

## Contact Form

The contact form is a controlled React form (state tracked via `useState`) that submits to a Formspree endpoint via `fetch`. This was a deliberate scope decision: a full backend (or serverless function) would add real learning value but wasn't necessary to reach a working, deployable contact form, and API keys/secrets in a static site are more complexity than a personal portfolio needs (see `README.md` env variable table).

## Deployment

The app is a static Vite build (`npm run build` outputs to `dist/`), deployed on Vercel. No server, no environment other than the build step and the `VITE_FORMSPREE_FORM_ID` environment variable configured in the Vercel dashboard.

## Deliberately Not Included

- **React Router** — this is a single scrolling page with anchor-link navigation (`#hero`, `#about`, etc.), not multiple routes. Adding a router would be an unused dependency.
- **A backend/serverless API** — Formspree covers the one form on the site; building a custom endpoint would duplicate what a free third-party service already solves.
- **TypeScript** — the goal of this rebuild is reinforcing JavaScript/React fundamentals; adding a type system would add a second thing to learn at the same time.