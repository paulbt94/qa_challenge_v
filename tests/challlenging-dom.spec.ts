import { test, expect } from '@playwright/test';
//import { describe } from 'node:test';

test.beforeEach(async ({ page }) => {
  // Navigate to target page and verify
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    await expect(page.getByText('Challenging DOM')).toBeVisible();
  });
  
test.describe('Challenging DOM - Click Buttons',async () => {

    // Here I am comparing screenshots before and after clicking the button
    // Why? because I needed to validate wether or not the click was successful
    // I notice that button text changes on click but sometimes it does not change, so test might be flaky
    // Also, I notice that Answer canva changes its value, but couldn't find a way to extract the text from that element

    test('Click button (light blue)', async ({ page }) => {
        // Capture a screenshot before clicking the button
        const beforeScreenshot = await page.screenshot();
        // Click the button
        await page.locator('div[class="large-2 columns"] a[class="button"]').click({ force: true });
        // Wait for navigation to complete
        await page.waitForLoadState();
        // Capture a screenshot after the page reloads
        const afterScreenshot = await page.screenshot();
        // Compare the buffer lengths
        expect(beforeScreenshot.length).not.toEqual(afterScreenshot.length);
    });

    test('Click alert button (red)', async ({ page }) => {
        // Capture a screenshot before clicking the button
        const beforeScreenshot = await page.screenshot();
        // Click alert button 
        await page.locator('div[class="large-2 columns"] a[class="button alert"]').click({ force: true });
        // Wait for navigation to complete
        await page.waitForLoadState();
        // Capture a screenshot after the page reloads
        const afterScreenshot = await page.screenshot();
        // Compare the buffer lengths
        expect(beforeScreenshot.length).not.toEqual(afterScreenshot.length);
    });

    test('Click success button (green)', async ({ page }) => {
        // Capture a screenshot before clicking the button
        const beforeScreenshot = await page.screenshot();
        // Click success button 
        await page.locator('div[class="large-2 columns"] a[class="button success"]').click({ force: true });
        // Wait for navigation to complete
        await page.waitForLoadState();
        // Capture a screenshot after the page reloads
        const afterScreenshot = await page.screenshot();
        // Compare the buffer lengths
        expect(beforeScreenshot.length).not.toEqual(afterScreenshot.length);
    });
});


test.describe('Click edit and delete links', async () => {
  test('Click each edit/delete button on table', async ({ page }) => {
    // Get the number of rows in the table
    const rowCount = (await page.$$('tr')).length;
  
    for (let i = 1; i < rowCount; i++) { // Start from 1 to skip the header row
      const rows = await page.$$('tr');
  
      // Get the 'edit' button in the current row
      const editButton = await rows[i].$('td:nth-child(7) a');
      if (editButton) {
        // Click the 'edit' button
        await editButton.click();
        // Wait for a short delay
        await page.waitForTimeout(500);
        // Assert the URL has been updated to include '#edit'
        expect(page.url()).toContain('#edit');
      };
      const rowsAfterEdit = await page.$$('tr');
      // Get the 'delete' button in the current row
      const deleteButton = await rowsAfterEdit[i].$('td:nth-child(8) a');
      if (deleteButton) {
        // Click the 'delete' button
        await deleteButton.click();
        // Wait for a short delay
        await page.waitForTimeout(500);
        // Assert the URL has been updated to include '#delete'
        expect(page.url()).toContain('#delete');
      };
    };
  });
});
