export const SITE_NAME = "NEON";
export const SITE_DESCRIPTION = "NEON - Arts Numériques et Scénographie";

export interface Category {
  id: string;
  name: string;
  description: string;
  pictoClass: string;
}

export interface Video {
  url: string;
  alt: string;
}

export const CATEGORIES: Category[] = [
  { 
    id: 'stage-design',
    name: 'STAGE DESIGN', 
    description: 'Conception et exploitation de scénographies.',
    pictoClass: 'picto-sd'
  },
  { 
    id: 'on-tour',
    name: 'ON TOUR', 
    description: 'Création lumière & video sur des tournées.',
    pictoClass: 'picto-sd'
  },
  { 
    id: 'arts-numeriques',
    name: 'ARTS NUMERIQUES', 
    description: 'Installations artistiques et création de contenu génératif.',
    pictoClass: 'picto-an'
  },
  {
    id: 'conception-3d',
    name: 'CONCEPTION 3D',
    description: 'Réalisation de plans techniques & rendus 3D',
    pictoClass: 'picto-3d'
  }
];

export const VIDEOS: Video[] = [
  { url: "https://www.youtube.com/embed/U-vAoyMSEMA", alt: "video la box" },
  { url: "https://www.youtube.com/embed/ZVFyFldJ_cg", alt: "video la box" },
  { url: "https://www.youtube.com/embed/jRSDdidMYIg", alt: "video encore 10 ans" },
  { url: "https://www.youtube.com/embed/ozKajoF5cCs", alt: "video encore 10 ans" },
  { url: "https://www.youtube.com/embed/eMwfGLwFUdg", alt: "video la box" },
  { url: "https://www.youtube.com/embed/no7WoxHUdUc", alt: "video la box" },
  { url: "https://www.youtube.com/embed/PXtcdyT_gHo", alt: "video la box" },
  { url: "https://www.youtube.com/embed/qgDZD6eusyo", alt: "video la box" },
  { url: "https://www.youtube.com/embed/TKWSi-PNjHU", alt: "video la box" }
];

export const NAV_LINKS = [
  ...CATEGORIES.map(cat => ({ name: cat.name, href: `/#${cat.id}` })),
  { name: 'VIDEOS', href: '/#videos' }
];
