import { test, expect } from '@playwright/test';

test.describe('Content: Secondary media and legal info', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/fr/');
  });

  test('The visitor watches video showcases', async ({ page }) => {
    const videoSection = page.locator('#videos');
    await videoSection.scrollIntoViewIfNeeded();
    
    const iframes = videoSection.locator('iframe');
    const count = await iframes.count();
    
    await test.step('Confirm that video players are present', async () => {
      expect(count).toBeGreaterThan(0);
    });

    await test.step('Verify that videos are hosted on YouTube', async () => {
      const src = await iframes.first().getAttribute('src');
      expect(src).toContain('youtube.com/embed/');
    });
  });

  test('The visitor accesses legal mentions', async ({ page }) => {
    const legalLink = page.locator('a[href="/fr/legal-mentions"]');
    
    await test.step('Navigate to the legal mentions page via footer link', async () => {
      await legalLink.scrollIntoViewIfNeeded();
      await expect(legalLink).toBeVisible();
      await legalLink.click();
    });

    await test.step('Check that the legal page has the right content', async () => {
      await expect(page).toHaveURL(/\/fr\/legal-mentions/);
      const mainHeading = page.getByRole('heading', { name: /MENTIONS LÉGALES/i }).first();
      await expect(mainHeading).toBeVisible();
    });
  });
});
