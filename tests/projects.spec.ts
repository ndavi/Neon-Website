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
      // Wait for fade in transition
      await expect(modalImage).toBeVisible();
      await expect(modalImage).toHaveCSS('opacity', '1');
      
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

    await test.step('Reopening and closing by clicking anywhere', async () => {
      await firstProject.click();
      await expect(dialog).toBeVisible();
      
      // Click at the center (on image/text) should close it
      await dialog.click(); 
      await expect(dialog).not.toBeVisible();
    });
  });

  test('The visitor navigates through the carousel', async ({ page }) => {
    // Open the 2nd project
    const projects = page.locator('.project-trigger');
    const firstProject = projects.nth(0);
    const secondProject = projects.nth(1);
    
    const title1 = await firstProject.getAttribute('data-title');
    const title2 = await secondProject.getAttribute('data-title');
    
    await secondProject.click();
    
    const dialog = page.locator('#project-dialog');
    await expect(dialog).toBeVisible();
    const modalTitle = page.locator('#modal-title');
    
    // Initial state check
    await expect(modalTitle).toHaveText(title2 || "");

    await test.step('Navigate to the next project using the UI button', async () => {
      await page.locator('button#next-project').click();
      // Title should have changed
      await expect(modalTitle).not.toHaveText(title2 || "");
    });

    await test.step('Navigate back to the previous project using the keyboard', async () => {
      await page.keyboard.press('ArrowLeft');
      await expect(modalTitle).toHaveText(title2 || "");
    });

    await test.step('Navigate to the project before (first project) using the UI button', async () => {
      await page.locator('button#prev-project').click();
      await expect(modalTitle).toHaveText(title1 || "");
    });
  });
});
