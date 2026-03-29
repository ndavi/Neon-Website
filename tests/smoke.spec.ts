import { test, expect } from '@playwright/test';

test.describe('Discovery: First Impression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/fr/');
  });

  test('The visitor should see the brand identity immediately', async ({ page }) => {
    await test.step('Check the page title and metadata', async () => {
      await expect(page).toHaveTitle(/NEON/);
    });

    await test.step('Verify the main landing logo is visible', async () => {
      const logo = page.locator('img[alt="logo-neon"]');
      await expect(logo).toBeVisible();
    });

    await test.step('Verify SEO H1 exists', async () => {
      const h1 = page.locator('h1.sr-only');
      await expect(h1).toHaveText(/NEON - Stage Design/);
    });

    await test.step('Ensure the landing background image is loaded', async () => {
      const bgImage = page.locator('.home-image');
      await expect(bgImage).toBeVisible();
      const isLoaded = await bgImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
      expect(isLoaded).toBeTruthy();
    });
  });
});
