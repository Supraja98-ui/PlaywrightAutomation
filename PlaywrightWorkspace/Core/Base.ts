import{Page, expect} from '@playwright/test'
export class Base {
  async openWebsite(page: Page, url: string) {
    await page.goto(url);
  }
  async clickelement(page: Page, locator: string) {
    await page.locator(locator).click();
  }
  async enterText(page: Page, locator: string, enteringtext: string) {
    await page.locator(locator).fill(enteringtext);
     }

     async enterTextByGetByLabel(page: Page, labelName: string, enteringtext: string) {
    await expect(page.getByLabel(labelName)).toBeVisible();
     }

     async enterTextByLocator(page: Page, locator: string, enteringtext: string) {
    await page.locator(locator).fill(enteringtext);
     }


    async enterTextByGetByRole_TextBox(page: Page, u_name: string, enteringtext: string) {
    await page.getByRole('textbox', { name: u_name }).fill(enteringtext);
     }

     async clickLinkGetByRole(page : Page, val: string){
     await page.getByRole('link', { name: val }).click();
     }



     async enterTextGetByLabel(page: Page, locator: string, enteringtext: string) {
    await page.getByLabel('locator').fill(enteringtext);
     }




     async enterNumber(page: Page, locator: string, enteringnumber: number) {
    await page.locator(locator).fill(enteringnumber.toString());
     }


  async selectDropdown(page: Page, locator: string, value: string) {   //page ,locator(country), value:India
    await page.locator (locator).selectOption(value);
  }
     
}
