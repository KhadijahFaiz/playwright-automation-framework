// Import Playwright's testing functions.
// 'test' is used to define a test case.
// 'expect' is used to verify that the application behaves as expected.
import { test, expect } from '@playwright/test';

// Define a test case named "Login should fail with invalid credentials".
test('Login should fail with invalid credentials', async ({ page }) => {

  // Open the login page in the browser and wait until it loads.
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Find the username textbox (using its id) and enter an invalid username.
  await page.locator('#username').fill('wronguser');

  // Find the password textbox (using its id) and enter an invalid password.
  await page.locator('#password').fill('wrongpassword');

  // Find the button whose accessible role is "button"
  // and whose accessible name is "Submit", then click it.
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify that an element with the id "error" is visible on the page.
  // This confirms that an error message appeared after the failed login.
  await expect(page.locator('#error')).toBeVisible();

  // Verify that the error message contains the expected text.
  // This ensures the application is showing the correct validation message,
  // not just any error.
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
});