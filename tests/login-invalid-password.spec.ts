import { test, expect } from '@playwright/test';

test('Login should fail with invalid password', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Enter a valid username
  await page.locator('#username').fill('student');

  // Enter an invalid password
  await page.locator('#password').fill('WrongPassword');

  // Click the Submit button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify the error message is displayed
  await expect(page.locator('#error')).toBeVisible();

  // Verify the correct error message is shown
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
});