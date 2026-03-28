import { test, expect } from '@playwright/test';

test.describe('Exploration: Moving through the portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Home Screen Interaction', () => {
    test('The visitor uses the home arrow to scroll down', async ({ page, isMobile }) => {
      await page.evaluate(() => window.scrollTo(0, 0));
      
      const arrow = page.locator('#home-arrow');
      await expect(arrow).toBeVisible();
      
      await arrow.click();
      await page.waitForTimeout(1000); // Smooth scroll time
      
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThan(50);
      
      if (!isMobile) {
        const header = page.locator('#description');
        await expect(header).toBeInViewport();
      } else {
        const introText = page.locator('#intro-text');
        await expect(introText).toBeVisible();
      }
    });
  });

  test.describe('Direct Navigation (Desktop only)', () => {
    test.skip(({ isMobile }) => isMobile, 'Navigation menu is hidden on mobile');

    const sections = [
      { id: '#stage-design', name: 'STAGE DESIGN' },
      { id: '#arts-numeriques', name: 'ARTS NUMERIQUES' },
      { id: '#on-tour', name: 'ON TOUR' },
      { id: '#videos', name: 'VIDEOS' },
      { id: '#conception-3d', name: 'CONCEPTION 3D' }
    ];

    for (const section of sections) {
      test(`The visitor navigates directly to ${section.name} via the menu`, async ({ page }) => {
        const link = page.locator(`a[href="/${section.id}"]`).first();
        await link.click();
        await page.waitForTimeout(1000); // Wait for smooth scroll
        
        const target = page.locator(section.id);
        await expect(target).toBeInViewport();
      });
    }
  });
});
