import { test, expect, Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to target page and verify
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await expect(page.getByText('Dynamically Loaded Page Elements')).toBeVisible();
});

test.describe('Dynamic loading element', () => {
  test('Verify "Hello World!" text becomes visible', async ({ page }) => {
    // Click Start button
    await page.click('#start button'); 
    // Wait for the "Hello World!" text element to become visible
    await page.waitForSelector('#finish', { state: 'visible' }); 
    // Verify that the text element contains "Hello World!"
    const helloWorldText = await page.textContent('#finish');
    expect(helloWorldText).toContain('Hello World!'); 
  });
});
