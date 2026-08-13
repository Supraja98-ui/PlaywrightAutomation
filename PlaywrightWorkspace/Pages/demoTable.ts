import{Page} from '@playwright/test'
import{Base} from '../Core/Base';
export class DemoTable extends Base {
    
        async getUserAgeandSalary(page: Page, firstColumnValue: string) {
        // Implementation for getting user age
       
        const agevalue = await page.locator(`//table/tbody/tr[td[1]='${firstColumnValue}']/td[3]`).textContent();
        const salaryvalue = await page.locator(`//table/tbody/tr[td[1]='${firstColumnValue}']/td[5]`).textContent();

        return {
        age: agevalue?.trim(),
        salary: salaryvalue?.trim()
           };
    }

    async clickEditIcon(page: Page, firstColumnValue: string) {
        await page.locator(`//table/tbody/tr/td[text()="${firstColumnValue}"]/..//span[@title="Edit"]`).click();
    }
    
     async clickDeleteIcon(page: Page, firstColumnValue: string) {
        await page.locator(`//table/tbody/tr/td[text()="${firstColumnValue}"]/..//span[@title="Delete"]`).click();
    }

    async verifySearchBoxPlaceholderText(page: Page) {
        const searchBoxPlaceholderText = await page.locator('#searchBox').getAttribute('placeholder');
        //await expect(placeholderText).toBe(expectedText);
        return searchBoxPlaceholderText;
    }

    async enterSearchText(page: Page, searchText: string) {
        await page.locator('#searchBox').fill(searchText);
    }

    async verifySearchResults(page: Page) {
        const results = await page.locator('//table/tbody/tr').count();
        return results;
        //await expect(results).toBe(expectedCount);
    }
    
}
