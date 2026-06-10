export const SITE_NAME = 'NEON';
export const SITE_DESCRIPTION = 'NEON - Arts Numériques et Scénographie';

export interface Category {
  id: string;
  pictoClass: string;
}

export interface Video {
  url: string;
  alt: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'stage-design',
    pictoClass: 'picto-sd',
  },
  {
    id: 'on-tour',
    pictoClass: 'picto-sd',
  },
  {
    id: 'conception-3d',
    pictoClass: 'picto-3d',
  },
  {
    id: 'arts-numeriques',
    pictoClass: 'picto-an',
  },
];

export const VIDEOS: Video[] = [
  { url: 'https://www.youtube.com/embed/U-vAoyMSEMA', alt: 'video la box' },
  { url: 'https://www.youtube.com/embed/ZVFyFldJ_cg', alt: 'video la box' },
  {
    url: 'https://www.youtube.com/embed/jRSDdidMYIg',
    alt: 'video encore 10 ans',
  },
  {
    url: 'https://www.youtube.com/embed/ozKajoF5cCs',
    alt: 'video encore 10 ans',
  },
  { url: 'https://www.youtube.com/embed/eMwfGLwFUdg', alt: 'video la box' },
  { url: 'https://www.youtube.com/embed/no7WoxHUdUc', alt: 'video la box' },
  { url: 'https://www.youtube.com/embed/PXtcdyT_gHo', alt: 'video la box' },
  { url: 'https://www.youtube.com/embed/qgDZD6eusyo', alt: 'video la box' },
  { url: 'https://www.youtube.com/embed/TKWSi-PNjHU', alt: 'video la box' },
];
