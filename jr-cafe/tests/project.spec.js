// @ts-check
const { test, expect } = require('@playwright/test');
const homeURL = 'http://localhost:3000';
// const aboutURL = 'http://localhost:3000/about.html';

test('Check Title - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("JR Cafe - Home");
});

