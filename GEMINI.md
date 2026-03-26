# Projet NEON Portfolio Clone - Pixel Perfect

## Stack Technique
- **Framework** : Astro v5+ (SSG)
- **Langage** : TypeScript
- **CSS** : Tailwind CSS v4 + Original CSS (classes `photos`, `image-div`, `header-container`)
- **Animations** : Réduites au minimum (CSS transitions originales de 0.4s)
- **Données** : 67 projets générés depuis les fichiers originaux `photoList.json` et `photosDescriptions.json`.

## Fidélité à l'original (copie conforme)
- **Structure** : Recopie exacte de l'architecture React en composants Astro (Home, Header, ProjectCard, Footer).
- **Correctifs** : Rétablissement de la section Home plein écran avec flèche de scroll animée et logo original.
- **Assets** : Toutes les images originales (`.jpeg`, `.jpg`) copiées. Utilisation du logo image `neon-noir-baseline.png`.
- **Style** : Reprise pixel pour pixel du CSS original (fond `#dbdbdb`, grille `calc(100vw/3.5)`, espacements header `5rem`).
- **Typographie** : Utilisation exclusive de **"M PLUS Rounded 1c"** (weights 100, 300, 400, 500, 700) pour tout le site.
- **Interactivité** : Système de `dialog` original (modal) avec assombrissement de l'arrière-plan (`app-opacity`).
- **Correctifs** : Alignement menu header (space-around + 5rem), positionnement absolu des pictos de section, taille des titres (1.5rem * 1.5), centrage global, correction des tailles de paragraphes de description (annulation reset Tailwind).

## Notes Importantes
- **Mise à jour obligatoire** : Ce fichier doit être mis à jour après chaque itération.
- **Contrainte de taille** : Doit rester court (moins de 100 lignes).
- **Génération** : Utilisation de `gen-projects.cjs` pour peupler les Content Collections.
