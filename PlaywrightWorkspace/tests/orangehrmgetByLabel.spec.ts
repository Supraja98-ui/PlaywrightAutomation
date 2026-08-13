import{test,expect, Locator} from '@playwright/test'
import {SignIn} from'../Pages/orangehrmSignIn';
import{LoginData} from '../Testdata/logindata';//foldername/file name


const signIn = new SignIn();
const logindata = new LoginData();



test('login to account & Verify menu tabs, headings and url of each tab.', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    //await expect(page.locator('label[class="oxd-label"]').first()).toHaveText('Username');
    //await expect(page.locator('label[class="oxd-label"]').nth(1)).toHaveText('Password');
    await signIn.verifyLabels(page);
    await signIn.signintoAccount(page, logindata.data1)
    await page.waitForTimeout(5000)
    await expect(page.getByLabel('Topbar Menu')).toBeVisible();


}
);

