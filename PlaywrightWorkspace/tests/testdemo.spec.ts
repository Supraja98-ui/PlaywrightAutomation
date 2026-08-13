import { test, expect } from '@playwright/test';

test('my test demo', async ({ page }) => {
  await page.goto('https://www.verizon.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Verizon: Wireless, Internet, TV and Phone Services | Official Site");

await expect(page.getByRole('button', { name: 'Mobile Menu List' })).toBeVisible();
  await page.locator('#gnav20-Mobile-L1').click();
});
test('my test demo2', async ({ page }) => {
  await page.goto('https://www.fb.com/');

await page.getByLabel('Email or mobile number').fill('john')
await page.waitForTimeout(5000)
await page.locator('#_R_1h6kqsqppb6amH1_').fill('apple')
await page.waitForTimeout(5000)
});

