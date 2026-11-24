import { SITE_NAME } from '../config/site';

export interface PhotoCredit {
  name: string;
  url?: string;
}

/**
 * Returns the photo credit to display on the site, if any.
 * In-house photos are credited to the studio in the content data but stay
 * unlabelled on the site; only external photographers are shown.
 */
export function getDisplayedCredit(project: {
  credit?: string;
  lienCredit?: string;
}): PhotoCredit | undefined {
  const { credit, lienCredit } = project;
  if (!credit || credit === SITE_NAME) return undefined;
  return { name: credit, url: lienCredit };
}
