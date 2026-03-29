# Projet NEON Portfolio Clone - Pixel Perfect

## Stack Technique
- **Framework** : Astro v5+ (SSG)
- **Langage** : TypeScript
- **CSS** : Tailwind CSS v4 + Custom CSS
- **Images** : Composant `<Image />` d'Astro pour l'optimisation (LCP eager loading sur Home)
- **Données** : 67 projets via Astro Content Collections (Markdown + JSON source).

## Architecture & Structure
- **Pages** :
  - `index.astro` : Page principale (Home, Sections, Vidéos)
  - `legal-mentions.astro` : Mentions légales
- **Composants** :
  - `Home.astro` : Section héro plein écran avec logo et flèche de scroll
  - `Header.astro` : Menu de navigation avec ancres standardisées (`#stage-design`, etc.)
  - `ProjectSection.astro` / `ProjectCard.astro` : Grille de projets et vignettes
  - `ProjectDialog.astro` : Modal de détail des projets (via `<dialog>`)
  - `VideoSection.astro` : Grille d'iframes YouTube optimisées (lazy-loading)

## Optimisations & Accessibilité
- **Performance** : Lazy-loading des iframes et images sous la ligne de flottaison.
- **Accessibilité** : Noms accessibles (`aria-label`) sur les icônes sociales et liens vides.
- **Navigation** : Liens absolus dans le header pour fonctionner depuis toutes les pages.
- **IDs** : Standardisation en kebab-case (`#arts-numeriques`, `#conception-3d`).

## Workflows
- **Linter** : Lancer le linter (`npm run lint`) à la fin de chaque itération pour assurer la qualité du code.

## Notes Importantes
- **Mise à jour** : Ce fichier doit être mis à jour après chaque évolution structurelle.
