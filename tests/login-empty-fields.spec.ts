import { test, expect } from '@playwright/test';

test('Login should fail when fields are empty', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Do NOT fill username or password
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
});