// @ts-check
const { test, expect } = require('@playwright/test');
const homeURL = 'http://localhost:3000';
const menuURL = 'http://localhost:3000/Menu';
const galleryURL = 'http://localhost:3000/Gallery';
const expectedMetaKeywords = 'CAFE, cafe, JR, jr, cafe with a twist, jr cafe, JR CAFE';
const expectedMetaDescription = 'Fuel your late night study session with a free coffee';

test('Check Title - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page).toHaveTitle("JR Cafe - Home");
});

test('Check Navbar - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.locator('nav').first()).toBeVisible();
});

test('Check Hero Section - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.locator('section').nth(1)).toHaveId('herosection');
});

test('Check About Section - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.locator('section').nth(2)).toHaveId('subsection');
});

test('Check Call to Action - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.getByText('Sign up to receive coffee on the house!')).toBeVisible();
});

test('Check Email Input Box - Homepage', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.getByPlaceholder('Enter your email').first()).toBeVisible();
});

test('Check Menu Section - Menu page', async ({ page }) => {
  await page.goto(menuURL);

  await expect(page.locator('section').nth(1)).toHaveId('MenuSection');
});

test('Check Accordian Element - Menu page', async ({ page }) => {
  await page.goto(menuURL);

  await expect(page.locator('#accordian')).toBeVisible();
});

test('Check Gallery Section - Gallery page', async ({ page }) => {
  await page.goto(galleryURL);

  await expect(page.locator('section').nth(1)).toHaveId('gallerySection');
});

test('Check Social Section - all pages', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.locator('#socialsection')).toBeVisible();
  await page.goto(menuURL);

  await expect(page.locator('#socialsection')).toBeVisible();
  await page.goto(galleryURL);

  await expect(page.locator('#socialsection')).toBeVisible();
});

test('Check Location - all pages', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page.locator('#location')).toBeVisible();
  await page.goto(menuURL);

  await expect(page.locator('#location')).toBeVisible();
  await page.goto(galleryURL);

  await expect(page.locator('#location')).toBeVisible();
});

test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(homeURL);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  expect(metaKeywords).toBe(expectedMetaKeywords);
});

test('Check SEO Description', async ({ page }) => {
  await page.goto(homeURL);
  const metaKeywords = await page.getAttribute('meta[name="description"]', 'content');
  expect(metaKeywords).toBe(expectedMetaDescription);
});

test('Check Email Link', async ({ page }) => {
  await page.goto(homeURL);
  await expect(page.locator('#Mail')).toBeVisible();
});

test('Check Instagram Link', async ({ page }) => {
  await page.goto(homeURL);
  await expect(page.locator('#InLink')).toBeVisible();
});