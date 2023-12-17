// @ts-check
const { test, expect } = require('@playwright/test');
const homeURL = 'http://localhost:3000';
// const aboutURL = 'http://localhost:3000/about.html';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

