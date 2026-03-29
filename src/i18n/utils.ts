import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

interface SortableProject {
  id: string;
  data: {
    order?: number;
    date: string | Date;
    [key: string]: unknown;
  };
}

/**
 * Shared sorting logic for project collections
 */
export function sortProjects<T extends SortableProject>(projects: T[]): T[] {
  return [...projects].sort((a, b) => {
    // 1. Sort by order (if available)
    if (a.data.order !== undefined && b.data.order !== undefined) {
      return a.data.order - b.data.order;
    }
    if (a.data.order !== undefined) return -1;
    if (b.data.order !== undefined) return 1;

    // 2. Sort by date (descending)
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    if (dateB !== dateA) return dateB - dateA;

    // 3. Fallback to id
    return a.id.localeCompare(b.id);
  });
}
