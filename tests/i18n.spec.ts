import { test, expect } from '@playwright/test';

test.describe('i18n: Language and Locales', () => {
  test('The default language should be French', async ({ page }) => {
    await page.goto('/');
    // Check redirection
    await expect(page).toHaveURL(/\/fr\//);
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  });

  test('The language switcher should work correctly', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Language switcher is hidden on mobile');
    await page.goto('/fr/');
    
    // Find the EN link in the language switcher
    const enLink = page.locator('.lang-switcher a').filter({ hasText: 'EN' });
    await expect(enLink).toBeVisible();
    
    await enLink.click();
    
    // Check URL and html lang
    await expect(page).toHaveURL(/\/en\//);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    
    // Verify some content is translated
    // FR: 'nav.arts-numeriques': 'ARTS NUMERIQUES'
    // EN: 'nav.arts-numeriques': 'DIGITAL ARTS'
    const header = page.locator('.header-container');
    await expect(header).toContainText('DIGITAL ARTS');
  });

  test('Alternate language links should be present in the head', async ({ page }) => {
    await page.goto('/fr/');
    
    const frAlternate = page.locator('link[rel="alternate"][hreflang="fr"]');
    const enAlternate = page.locator('link[rel="alternate"][hreflang="en"]');
    const defaultAlternate = page.locator('link[rel="alternate"][hreflang="x-default"]');
    
    await expect(frAlternate).toHaveAttribute('href', /.*\/fr\//);
    await expect(enAlternate).toHaveAttribute('href', /.*\/en\//);
    await expect(defaultAlternate).toHaveAttribute('href', /.*\/fr\//);
  });
});
