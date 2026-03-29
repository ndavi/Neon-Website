import fr from './locales/fr.json';
import en from './locales/en.json';

export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr,
  en,
} as const;
