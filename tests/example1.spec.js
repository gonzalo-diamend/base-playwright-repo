const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('link').withText('Get started').click();
  await expect(page).toHaveURL(/.*intro/);
});

test('check Java page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('link').withText('Get started').click();
  await page.locator('button').withText('Node.js').hover();
  await page.locator('text').withText('Java').click();
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.locator('text').withText('Installing Playwright')).not.toHaveAttribute('hidden');
  const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
  await expect(page.locator('text').withText(javaDescription)).toBeVisible();
});
