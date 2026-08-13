import{test,expect, Locator} from '@playwright/test'
import {SignIn} from'../Pages/orangehrmSignIn';
import{LoginData} from '../Testdata/logindata';//foldername/file name


const signIn = new SignIn();
const logindata = new LoginData();

test('Verify user can Signin to account', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signintoAccount(page, logindata.data1)

    await page.waitForTimeout(5000)
}
);

test('Verify user can navigate to homepage', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signintoAccount(page, logindata.data1)
    //await signIn.clickAdminTab(page)
    //await signIn.clickPimTab(page)
    //await signIn.clickLeaveTab(page)
    await signIn.clickMenuTab(page, signIn.adminTab_xpath)
    await signIn.clickMenuTab(page, signIn.pimTab_Xpath)
    await signIn.clickMenuTab(page, signIn.leaveTab_Xpath)
    await signIn.clickLinkGetByRole(page, 'Admin')
    await page.waitForTimeout(5000)
}
);

test('Verify sidebar menu labels on homepage', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signintoAccount(page, logindata.data1)
    //await signIn.homepage(page)
    await signIn.menulables(page)
    

    await page.waitForTimeout(5000)
}
);

test('Verify sidebar menu labels on homepage2', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signin(page, logindata.data1)
    //await signIn.homepage(page)
    await signIn.menulables(page)
    

    await page.waitForTimeout(5000)
}
);
