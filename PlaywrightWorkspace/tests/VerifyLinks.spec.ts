import {test,expect} from '@playwright/test'

test('Verify Home link text and URL', async ({ page }) => {
    await page.goto('https://demoqa.com/links');

    // Verify Home text
    await expect(page.locator('#simpleLink')).toHaveText('Home');

    // Click Home and capture the new tab
    const newPagePromise = page.waitForEvent('popup');

    await page.locator('#simpleLink').click();

    const newPage = await newPagePromise;

    // Wait for the new page to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://demoqa.com/');

    // Verify page title/text if needed
    console.log(await newPage.url());
});