import{test,expect,Page} from '@playwright/test';
import { DemoTable } from '../Pages/demoTable'; 

const demoTable = new DemoTable();


test.skip('Verify first name,last name, age and salary of users', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    
    //Validate all firstnames and their corresponding age and salaries in the table
    
    const firstNames = await page.locator('//table/tbody/tr/td[1]').allTextContents();
    for (const name of firstNames) {
    const { age, salary } = await demoTable.getUserAgeandSalary(page, name);

    console.log(`Name   : ${name}`);
    console.log(`Age    : ${age}`);
    console.log(`Salary : ${salary}`);
    console.log();
    
    }
}
);

test.skip('Add new user "John Doe" to table', async({page}) => {
await page.goto('https://demoqa.com/webtables');

// Click Add button
    await page.locator('#addNewRecordButton').click();

    // Fill the registration form
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Doe');
    await page.locator('#userEmail').fill('john.doe@gmail.com');
    await page.locator('#age').fill('30');
    await page.locator('#salary').fill('50000');
    await page.locator('#department').fill('QA');

    // Submit the form
    await page.locator('#submit').click();

    // Verify the new record is added
    await expect(page.getByText('John', { exact: true })).toBeVisible();
    await expect(page.getByText('Doe', { exact: true })).toBeVisible();
    console.log('New user "John Doe" added successfully.');
});


test.skip('Edit user Cierra department from Insurance to Development using Edit action', async({page}) => {
    await page.goto('https://demoqa.com/webtables');

    // Click Edit button for the user

   //await page.locator('//table/tbody/tr[1]/td[7]//span[@title="Edit"]').click();
   //await page.locator('//table/tbody/tr/td[text()="${firstColumnValue}"]/..//span[@title="Edit"]')
    await demoTable.clickEditIcon(page, 'Cierra');
    // Fill the edit form
    await page.locator('#department').fill('Development');//changing department from Insurance to 
    // Submit the form
    await page.locator('#submit').click();

    // Verify department updated
  await expect( page.locator('//table/tbody/tr[1]')).toContainText('Development');
    console.log('Department of Cierra from Insurance to Development edited successfully.');

    
    

});

test.skip('Delete user Cierra using Delete action', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    //Delete user
    await demoTable.clickDeleteIcon(page, 'Cierra');
    //Verify deleted user is not visible
    await expect(page.locator('//table/tbody/tr/td[text()="Cierra"]')).not.toBeVisible();
    console.log('User "Cierra" deleted successfully.');
});

test.skip('Search for user "Cierra" and verify results', async({page}) => {
    await page.goto('https://demoqa.com/webtables');

   // await expect(demoTable.verifySearchBoxPlaceholderText(page, 'Type to search')).toBe(true);
    await expect(await demoTable.verifySearchBoxPlaceholderText(page)).toBe('Type to search');
    await demoTable.enterSearchText(page, 'Cierra');
    await expect(await demoTable.verifySearchResults(page)).toBe(1);
    console.log('Search results for "Cierra" verified successfully.');
});

// to verify First, Previous, Next, last are disbaled
test('Verify First, Last, previous, next buttons are disabled', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    // verify First Button is disabled
    await expect(await page.getByRole('button', { name: 'First' })).toBeDisabled();
    await page.waitForTimeout(1000);
    //verify Previous Button is disabled
    await expect(await page.getByRole('button', { name: 'Previous' })).toBeDisabled();
    //verify Next Button is disabled
    await expect(await page.getByRole('button', { name: 'Next' })).toBeDisabled();
    //verify Last Button is disabled
    await expect(await page.getByRole('button', { name: 'Last' })).toBeDisabled();
});


