import { test, expect } from '@playwright/test';

test.describe('Interactions: Exploring project details', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('The visitor opens a project and verifies its content', async ({ page }) => {
    // Pick a random project to test its card
    const index = 4;
    const projectCard = page.locator('.project-trigger').nth(index);
    const expectedTitle = await projectCard.getAttribute('data-title');
    
    await test.step('Click on a project card', async () => {
      await projectCard.click();
    });

    const dialog = page.locator('#project-dialog');
    
    await test.step('Check if the project dialog is displayed', async () => {
      await expect(dialog).toBeVisible();
    });

    await test.step('Verify that the modal content matches the project clicked', async () => {
      const modalTitle = await page.locator('#modal-title').textContent();
      expect(modalTitle?.trim()).toBe(expectedTitle?.trim());
      
      const modalImage = page.locator('#modal-image');
      await expect(modalImage).toBeVisible();
      const isImageLoaded = await modalImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
      expect(isImageLoaded).toBeTruthy();
    });
  });

  test('The visitor closes the details view', async ({ page }) => {
    const firstProject = page.locator('.project-trigger').first();
    await firstProject.click();
    
    const dialog = page.locator('#project-dialog');
    await expect(dialog).toBeVisible();

    await test.step('Closing using the Escape key', async () => {
      await page.keyboard.press('Escape');
      await expect(dialog).not.toBeVisible();
    });

    await test.step('Reopening and closing by clicking outside', async () => {
      await firstProject.click();
      await expect(dialog).toBeVisible();
      // Click at the top corner of the dialog (which covers the screen)
      await dialog.click({ position: { x: 5, y: 5 } });
      await expect(dialog).not.toBeVisible();
    });
  });
});
