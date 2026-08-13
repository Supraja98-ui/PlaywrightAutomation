import{test,expect, Locator} from '@playwright/test'
import {SignIn} from'../Pages/orangehrmSignIn';
import{LoginData} from '../Testdata/logindata';//foldername/file name


const signIn = new SignIn();
const logindata = new LoginData();


/*test('Verify user can navigate to all tabs in dashboard', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signintoAccount(page, logindata.data1)
    //await signIn.clickAdminTab(page)
    //await signIn.clickPimTab(page)
    //await signIn.clickLeaveTab(page)
    await signIn.clickMenuTab(page, signIn.adminTab_xpath)
    await signIn.clickMenuTab(page, signIn.pimTab_Xpath)
    await signIn.clickMenuTab(page, signIn.leaveTab_Xpath)
    await signIn.clickMenuTab(page, signIn.timeTab_Xpath)
    await signIn.clickMenuTab(page, signIn.recruitmentTab_Xpath)
    await signIn.clickMenuTab(page, signIn.myinfoTab_Xpath)
    await signIn.clickMenuTab(page, signIn.performanceTab_Xpath)
    await signIn.clickMenuTab(page, signIn.dashboardTab_Xpath)
    await signIn.clickMenuTab(page, signIn.directoryTab_Xpath)
    await signIn.clickMenuTab(page, signIn.maintenanceTab_Xpath)
    await signIn.clickMenuTab(page, signIn.claimTab_Xpath)
    await signIn.clickMenuTab(page, signIn.buzzTab_Xpath)

    await signIn.clickLinkGetByRole(page, 'Admin')
    await page.waitForTimeout(5000)
}
);

test('Verify the header labels in all pages', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signintoAccount(page, logindata.data1)
    await signIn.clickMenuTab(page, signIn.adminTab_xpath)
     await page.waitForTimeout(5000)
    //await expect (await page.getByRole('heading', { name: 'Admin' })).toBeVisible();
    //await expect (await page.locator('h6').first()).toHaveText("Admin");
    //await expect (await page.locator('h6').nth(1)).toHaveText("User Management");
    //await expect(page.locator('h6')).toContainText([ 'Admin', 'User Management']);
    await expect(page.getByRole('heading', { name: 'Admin' })).toContainText('Admin');
    await expect(page.getByRole('heading', { name: 'User Management' })).toContainText('User Management');
    await expect(page.getByRole('heading', { name: 'PIM' })).toContainText('PIM');
    await expect(page.getByRole('heading', { name: 'Leave' })).toContainText('Leave');
    await expect(page.locator('h6')).toContainText([ 'Time', 'Timesheets']);
    await expect(page.getByRole('heading', { name: 'Recruitment' })).toContainText('Recruitment');
    await expect(page.getByRole('heading', { name: 'My Info' })).toContainText('PIM');
    await expect(page.getByRole('heading', { name: 'Performance' })).toContainText('Performance');
    await expect(page.getByRole('heading', { name: 'Manage Reviews' })).toContainText('Manage Reviews');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toContainText('Dashboard');
    await expect(page.getByRole('heading', { name: 'Directory' })).toContainText('Directory');
    //await expect(page.getByRole('heading', { name: 'Maintenance' })).toContainText('Maintenance');
    await expect(page.getByRole('heading', { name: 'Claim' })).toContainText('Claim');
    await expect(page.getByRole('heading', { name: 'Buzz' })).toContainText('Buzz');


   // expect (await page.getByRole('heading', { name: 'Admin' })).toHaveText('Admin/User Management');
    //await signIn.clickMenuTab(page, signIn.pimTab_Xpath)
    //await signIn.clickMenuTab(page, signIn.leaveTab_Xpath)
    //await signIn.clickLinkGetByRole(page, 'Admin')
    //await page.waitForTimeout(5000)
}
);
*/


test('login to account & Verify menu tabs, headings and url of each tab.', async ({ page }) => {
    await signIn.openurl(page, logindata.url1)
    await signIn.signintoAccount(page, logindata.data1)
    await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.adminTab_xpath)
    await expect (await page.getByRole('heading', { name: 'Admin' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Admin' })).toContainText('Admin');
    await expect(page.getByRole('heading', { name: 'User Management' })).toContainText('User Management');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Adminurl);
    await page.waitForTimeout(5000)


    await signIn.clickMenuTab(page, signIn.pimTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'PIM' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'PIM' })).toContainText('PIM');
    await signIn.verifymenutaburl(page, logindata.menutaburls.PIMurl);
   // await page.waitForTimeout(5000)


    await signIn.clickMenuTab(page, signIn.leaveTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'Leave',exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Leave',exact: true })).toContainText('Leave');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Leaveurl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.timeTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'Time',exact: true })).toBeVisible();
    await expect(page.locator('h6')).toContainText([ 'Time', 'Timesheets']);
    await signIn.verifymenutaburl(page, logindata.menutaburls.Timeurl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.recruitmentTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'Recruitment',exact: true })).toBeVisible();
     await expect(page.getByRole('heading', { name: 'Recruitment',exact: true })).toContainText('Recruitment');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Recruitmenturl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.myinfoTab_Xpath)
    await expect (page.getByRole('heading', { name: 'PIM',exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'PIM',exact: true })).toContainText('PIM');
    await signIn.verifymenutaburl(page, logindata.menutaburls.MyInfourl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.performanceTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'Performance',exact: true  })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Performance',exact: true })).toContainText('Performance');
    await expect(await page.getByRole('heading', { name: 'Manage Reviews'})).toContainText('Manage Reviews');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Performanceurl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.dashboardTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'Dashboard',exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dashboard',exact: true   })).toContainText('Dashboard');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Dashboardurl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.directoryTab_Xpath)
    await expect (page.getByRole('heading', { name: 'Directory',exact: true, level : 6 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Directory',exact: true, level: 6})).toContainText('Directory');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Directoryurl);
    //await page.waitForTimeout(5000)

   // await signIn.clickMenuTab(page, signIn.maintenanceTab_Xpath)
    //await expect (page.getByRole('heading', { name: 'Maintenance',exact: true })).toBeVisible();
   // await signIn.verifymenutaburl(page, logindata.menutaburls.Maintenanceurl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.claimTab_Xpath)
    await expect (await page.getByRole('heading', { name: 'Claim',exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Claim',exact: true })).toContainText('Claim');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Claimurl);
    //await page.waitForTimeout(5000)

    await signIn.clickMenuTab(page, signIn.buzzTab_Xpath)
    await expect (page.getByRole('heading', { name: 'Buzz',exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Buzz',exact: true })).toContainText('Buzz');
    await signIn.verifymenutaburl(page, logindata.menutaburls.Buzzurl);
    //await page.waitForTimeout(5000)


    
}
);

