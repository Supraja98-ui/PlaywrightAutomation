import{Page,expect} from '@playwright/test'
import{Base} from '../Core/Base';
export class SignIn extends Base {
    username_loc = "//input[@name='username']";//Xpath
    password_loc = "//input[@name='password']";
    usernameLabel_CSS = "label[class='oxd-label']";//Page username label before username Input box using CSS 
    passwordLabel_CSS = "label[class='oxd-label']";//Page password label before password Input box using CSS 
    username_label = "Username"; //getByLabel
    password_label = "Password";//getByLabel
    loginbutton_loc = "//button[@type='submit']";
    adminTab_xpath = "//span[text()='Admin']";//Xpath// if htmml page has span getByLabel, getByheader cannot be used. can use it using XPATH & getByRole
    adminTab_Label = "Admin";
    pimTab_Xpath = "//span[text()='PIM']";
    leaveTab_Xpath = "//span[text()='Leave']";
    timeTab_Xpath = "//span[text()='Time']";
    recruitmentTab_Xpath = "//span[text()='Recruitment']";
    myinfoTab_Xpath = "//span[text()='My Info']";
    performanceTab_Xpath = "//span[text()='Performance']";
    dashboardTab_Xpath = "//span[text()='Dashboard']";
    directoryTab_Xpath = "//span[text()='Directory']";
    maintenanceTab_Xpath = "//span[text()='Maintenance']";
    claimTab_Xpath = "//span[text()='Claim']";
    buzzTab_Xpath = "//span[text()='Buzz']";
    


    async openurl(page: Page, url: string) {
        await this.openWebsite(page, url);  
    }

    async signintoAccount(page: Page, testdata: Record<string, string>) {
        await this.enterText(page, this.username_loc, testdata.username);
        await this.enterText(page, this.password_loc, testdata.password);
        //await this.enterText(page, this.loginbutton_loc, "9");
        await this.clickelement(page, this.loginbutton_loc);
    }

    async signintoAccount2(page: Page, testdata: Record<string, string>) {
        await this.enterTextByGetByLabel(page, this.username_label, testdata.username);
        await this.enterTextByGetByLabel(page, this.password_label, testdata.password);

        //await this.enterText(page, this.loginbutton_loc, "9");
        await this.clickelement(page, this.loginbutton_loc);
    }

    async verifyLabels(page: Page) {
        await expect(page.locator(this.usernameLabel_CSS).nth(0)).toHaveText(this.username_label);
        await expect(page.locator(this.passwordLabel_CSS).nth(1)).toHaveText(this.password_label);
    }

     /*async signin(page: Page, testdata: Record<string, string>) {
        await this.enterTextByGetByRole_TextBox(page, this.username_Input, testdata.username);
        await this.enterTextByGetByRole_TextBox(page, this.password_Input, testdata.password);
        //await this.enterText(page, this.loginbutton_loc, "9");
        await this.clickelement(page, this.loginbutton_loc);
    }*/

    async clickAdminTab(page: Page) {
        await this.clickelement(page, this.adminTab_xpath);
    
    }

    async clickAdminTab_Label(page: Page) {
        await this.clickelement(page, this.adminTab_Label);
    
    }

    async clickPimTab(page: Page) {
        await this.clickelement(page, this.pimTab_Xpath);
    }

    async clickLeaveTab(page : Page){
        await this.clickelement(page, this.leaveTab_Xpath);
    }
        

    async clickMenuTab(page : Page, loc: string){//in place of loc we  can use any thing eg abc, value1 etc
        await this.clickelement(page, loc);
    }


    async menulables(page: Page) {
        // Implementation for verifying sidebar menu labels
        const menuLabels = [
            'Admin',
            'PIM',
            'Leave',
            'Time',
            'Recruitment',
            'My Info',
            'Performance',
            'Dashboard',
            'Directory',
            'Maintenance',
            'Claim',
            'Buzz',
  ];
  const sidebar = page.getByRole('navigation', { name: 'Sidepanel' });

    for (const label of menuLabels) {
        await expect(sidebar.getByRole('link', { name: label })).toBeVisible();
    }
}

async verifymenutaburl(page: Page, expectedUrl: string) {
    await expect(page).toHaveURL(new RegExp(expectedUrl));
}

}


