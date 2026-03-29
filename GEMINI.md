# Projet NEON Portfolio - Technical Documentation

## Overview

This project is a pixel-perfect clone of the NEON portfolio, built as a high-performance static site using Astro. It showcases creative work across four main categories: Stage Design, On Tour, Arts Numériques, and Conception 3D.

## Technical Stack

- **Framework**: [Astro v6+](https://astro.build/) (Static Site Generation)
- **Language**: TypeScript
- **CSS**: [Tailwind CSS v4](https://tailwindcss.com/) with Vite integration
- **Animations**: [GSAP](https://gsap.com/) for motion and interactions
- **Data Management**: Astro Content Collections (JSON based)
- **i18n**: Multi-language support (French/English) with prefix-based routing
- **Testing**: [Playwright](https://playwright.dev/) for E2E and smoke tests
- **Images**: Astro's `<Image />` component for automatic optimization

## Project Structure

- `src/components/`: Reusable UI components (Home, Header, ProjectCard, ProjectDialog, etc.)
- `src/content/`: Project data organized by categories in JSON files
- `src/i18n/`: Localization configuration, logic, and translation files (`fr.json`, `en.json`)
- `src/layouts/`: `BaseLayout.astro` for consistent page structure and SEO
- `src/pages/`:
  - `index.astro`: Redirects to default locale (`/fr/`)
  - `[lang]/index.astro`: Main localized landing page
  - `legal-mentions.astro`: Static legal information page
- `src/styles/`: Global CSS and Tailwind directives
- `public/`: Static assets (images, icons, etc.)

## Key Commands

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Locally preview the production build
- `npm run lint`: Run Astro check for type safety and code quality
- `npm run test`: Run E2E tests with Playwright
- `npm run test:ui`: Open Playwright test runner UI

## Development Conventions

- **Naming**: Use kebab-case for filenames and CSS IDs.
- **Styling**: Prefer Tailwind CSS classes; use `global.css` for complex custom animations.
- **Content**: Projects are defined in `src/content/projects/`. Each project must follow the schema defined in `src/content.config.ts`.
- **i18n**: All UI text should be managed via `src/i18n/locales/`.
- **Components**: Use standalone Astro components. Client-side interactivity is handled via standard `<script>` tags within components or GSAP.

## Workflow

- **Validation**: Run `npm run lint` and `npm run test` before proposing significant changes.
- **Updates**: Keep this `GEMINI.md` updated as the project evolves.
