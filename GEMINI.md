# Projet NEON Portfolio Clone - Pixel Perfect

## Stack Technique
- **Framework** : Astro v5+ (SSG)
- **Langage** : TypeScript
- **CSS** : Tailwind CSS v4 + Original CSS (classes `photos`, `image-div`, `header-container`)
- **Animations** : Réduites au minimum (CSS transitions originales de 0.4s)
- **Données** : 67 projets générés depuis les fichiers originaux `photoList.json` et `photosDescriptions.json`.

## Fidélité à l'original (copie conforme)
- **Structure** : Recopie exacte de l'architecture React en composants Astro (`Header`, `ProjectCard`, `Footer`).
- **Assets** : Toutes les images originales (`.jpeg`, `.jpg`) ont été copiées dans `public/img/`.
- **Style** : Reprise pixel pour pixel du CSS original (fond `#dbdbdb`, grille `calc(100vw/3.5)`, espacements header `5rem`).
- **Correctifs** : Rétablissement des marges latérales originales, espacement entre images (95% width) et redimensionnement des icônes "+" (max-width 25%).
- **Interactivité** : Implémentation du système de `dialog` original (modal) avec assombrissement de l'arrière-plan (`app-opacity`).
- **Données complètes** : Les projets incluent désormais les crédits photos, descriptions détaillées et liens externes.

## Notes Importantes
- **Mise à jour obligatoire** : Ce fichier doit être mis à jour après chaque itération.
- **Contrainte de taille** : Doit rester court (moins de 100 lignes).
- **Génération** : Utilisation de `gen-projects.cjs` pour peupler les Content Collections avec les métadonnées complètes.
