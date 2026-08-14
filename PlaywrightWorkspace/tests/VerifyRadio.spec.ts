import{test,expect} from '@playwright/test'
test('Verify Radio Button status', async({page}) => {
    await page.goto('https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio')
    //await page.waitForTimeout(5000)
    
    // Locate the iframe that contains the demo
  const demoFrame = page.locator('iframe').first();

  // Select the Huey radio button
  //await demoFrame.getByLabel('Huey').check();

  /*for (let i = 0; i < await page.locator('iframe').count(); i++) {
  const frame = page.locator('iframe').nth(i);

  const count = await frame.locator('#dewey').count();
  console.log(`Frame ${i}: ${count}`);
}*/
  /*await demoFrame.locator('//div/input[@id="dewey"]').click();

  await expect(demoFrame.locator('//div/label[@for="dewey"]')).toBeChecked();*/

  const frame = page.frames().find(f => f.url().includes('mdnplay.dev'));
  await page.waitForTimeout(5000)

//await page.waitForLoadState('load');
//await expect(frame!.locator('#dewey')).toBeVisible();
await frame?.locator('#dewey').click();
//await page.waitForTimeout(5000)
await frame?.locator('#dewey').isChecked();
/*await expect(frame!.locator('#huey')).not.toBeChecked();
await frame?.locator('#huey').click();
await frame?.locator('#huey').isChecked();
await expect(frame!.locator('#dewey')).not.toBeChecked();*/
    
});