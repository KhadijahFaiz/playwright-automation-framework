import { test, expect } from '@playwright/test';
test('Successful login', async ({ page }) => {
await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.locator('#username').fill('student');
await page.locator('#password').fill('Password123');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page).toHaveURL(/logged-in-successfully/);
await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});
