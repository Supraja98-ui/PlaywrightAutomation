import{Page} from '@playwright/test'
import{Base} from '../Core/Base';
export class Login extends Base {

    signin_loc = "(//a[@class='nav-link'])[2]";
    registerbutton_loc = "//a[@aria-label='Register your account']";
    firstname_loc = "//input[@id='first_name']";
    //lastname_loc = "//input[@id='last_name']";


    async openEcommerce(page: Page, url10: string){
        await this.openWebsite(page, url10);

    }



    async createAccount(page: Page, testdata: Record<string, string>) {
        await this.clickelement(page, this.signin_loc);
        await this.clickelement(page, this.registerbutton_loc);
        await this.enterText(page,this.firstname_loc, testdata['Firstname']);
        
        
    }

    /*async getUserAgeandSalary(page: Page, firstColumnValue: string) {
        // Implementation for getting user age
       
        const agevalue = await page.locator(`//table/tbody/tr[td[1]='${firstColumnValue}']/td[3]`).textContent();
        const salaryvalue = await page.locator(`//table/tbody/tr[td[1]='${firstColumnValue}']/td[5]`).textContent();

        console.log(agevalue?.trim());
        console.log(salaryvalue?.trim());
    }

}
//print all firstnames from all rows in the table
//edit the email using firstname using edit action