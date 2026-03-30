import { test, expect } from '@playwright/test';

test.describe('Image Loader and Interaction', () => {
  test.use({ offline: false }); // Ensure we're not offline

  test('Project card should show a loader and be unclickable until image is loaded', async ({
    page,
    context,
  }) => {
    // Disable cache to force image loading
    await context.addCookies([]);

    // Intercept BEFORE page.goto
    await page.route('**/*.{png,jpg,jpeg,webp,avif}', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await route.continue();
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const firstProject = page.locator('.project-trigger').first();
    const loader = firstProject.locator('.loader');

    // 1. Loader should be visible initially
    await expect(loader).toBeVisible();

    // 2. Project should be unclickable (pointer-events: none)
    await expect(firstProject).toHaveCSS('pointer-events', 'none');

    // 3. Wait for image to load (and loader to disappear)
    await expect(loader).not.toBeVisible({ timeout: 10000 });

    // 4. Project should now be clickable
    await expect(firstProject).not.toHaveCSS('pointer-events', 'none');

    // 5. Clicking should open the dialog
    await firstProject.click();
    const dialog = page.locator('#project-dialog');
    await expect(dialog).toBeVisible();
  });

  test('Project dialog should show a loader and block navigation until image is loaded', async ({
    page,
  }) => {
    // Intercept images and disable cache
    await page.route('**/*.{png,jpg,jpeg,webp,avif}*', async (route) => {
      const headers = {
        ...route.request().headers(),
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await route.continue({ headers });
    });

    await page.goto('/');

    // Wait for the card loader to disappear first (to be able to click)
    const firstProject = page.locator('.project-trigger').first();
    await expect(firstProject.locator('.loader')).not.toBeVisible({
      timeout: 10000,
    });

    // Force a fresh request for the dialog image to ensure it gets intercepted and delayed
    const originalImage = await firstProject.getAttribute('data-image');
    await firstProject.evaluate((el, url) => {
      (el as HTMLElement).dataset.image = url + '?t=' + Date.now();
    }, originalImage);

    await firstProject.click();

    const dialog = page.locator('#project-dialog');
    const modalLoader = dialog.locator('#modal-loader');
    const nextBtn = dialog.locator('#next-project');

    // 1. Modal loader should be visible
    await expect(modalLoader).toBeVisible();

    // 2. Navigation buttons should still have pointer-events auto (to capture events and prevent dialog closing)
    await expect(nextBtn).not.toHaveCSS('pointer-events', 'none');

    // 3. Wait for load
    await expect(modalLoader).not.toBeVisible({ timeout: 10000 });

    // 4. Buttons should be enabled
    await expect(nextBtn).not.toHaveCSS('pointer-events', 'none');
  });
});
