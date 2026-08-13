# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validateTable.spec.ts >> Verify First, Last, previous, next buttons are disabled
- Location: tests/validateTable.spec.ts:90:5

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator: getByText('First')
Expected: disabled
Error: strict mode violation: getByText('First') resolved to 2 elements:
    1) <th>First Name</th> aka getByRole('columnheader', { name: 'First Name' })
    2) <button disabled type="button" class="mr-2 btn btn-secondary">First</button> aka getByRole('button', { name: 'First' })

Call log:
  - Expect "toBeDisabled" with timeout 5000ms
  - waiting for getByText('First')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e125]:
      - heading "Web Tables" [level=1] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]:
          - button "Add" [ref=e132] [cursor=pointer]
          - generic [ref=e134]:
            - textbox "Type to search" [ref=e135]
            - button [ref=e136] [cursor=pointer]:
              - img [ref=e137]
        - table [ref=e139]:
          - rowgroup [ref=e140]:
            - row "First Name Last Name Age Email Salary Department Action" [ref=e141]:
              - columnheader "First Name" [ref=e142]
              - columnheader "Last Name" [ref=e143]
              - columnheader "Age" [ref=e144]
              - columnheader "Email" [ref=e145]
              - columnheader "Salary" [ref=e146]
              - columnheader "Department" [ref=e147]
              - columnheader "Action" [ref=e148]
          - rowgroup [ref=e149]:
            - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete" [ref=e150]:
              - cell "Cierra" [ref=e151]
              - cell "Vega" [ref=e152]
              - cell "39" [ref=e153]
              - cell "cierra@example.com" [ref=e154]
              - cell "10000" [ref=e155]
              - cell "Insurance" [ref=e156]
              - cell "EditDelete" [ref=e157]:
                - generic [ref=e158]:
                  - generic "Edit" [ref=e159] [cursor=pointer]:
                    - img [ref=e160]
                  - generic "Delete" [ref=e162] [cursor=pointer]:
                    - img [ref=e163]
            - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete" [ref=e165]:
              - cell "Alden" [ref=e166]
              - cell "Cantrell" [ref=e167]
              - cell "45" [ref=e168]
              - cell "alden@example.com" [ref=e169]
              - cell "12000" [ref=e170]
              - cell "Compliance" [ref=e171]
              - cell "EditDelete" [ref=e172]:
                - generic [ref=e173]:
                  - generic "Edit" [ref=e174] [cursor=pointer]:
                    - img [ref=e175]
                  - generic "Delete" [ref=e177] [cursor=pointer]:
                    - img [ref=e178]
            - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete" [ref=e180]:
              - cell "Kierra" [ref=e181]
              - cell "Gentry" [ref=e182]
              - cell "29" [ref=e183]
              - cell "kierra@example.com" [ref=e184]
              - cell "2000" [ref=e185]
              - cell "Legal" [ref=e186]
              - cell "EditDelete" [ref=e187]:
                - generic [ref=e188]:
                  - generic "Edit" [ref=e189] [cursor=pointer]:
                    - img [ref=e190]
                  - generic "Delete" [ref=e192] [cursor=pointer]:
                    - img [ref=e193]
        - generic [ref=e196]:
          - group [ref=e198]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e199]:
            - text: Page
            - strong [ref=e200]: 1 of 1
          - combobox [ref=e202]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e209]:
    - generic [ref=e210]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1   | import{test,expect,Page} from '@playwright/test';
  2   | import { DemoTable } from '../Pages/demoTable'; 
  3   | 
  4   | const demoTable = new DemoTable();
  5   | 
  6   | 
  7   | test.skip('Verify first name,last name, age and salary of users', async({page}) => {
  8   |     await page.goto('https://demoqa.com/webtables');
  9   |     
  10  |     //Validate all firstnames and their corresponding age and salaries in the table
  11  |     
  12  |     const firstNames = await page.locator('//table/tbody/tr/td[1]').allTextContents();
  13  |     for (const name of firstNames) {
  14  |     const { age, salary } = await demoTable.getUserAgeandSalary(page, name);
  15  | 
  16  |     console.log(`Name   : ${name}`);
  17  |     console.log(`Age    : ${age}`);
  18  |     console.log(`Salary : ${salary}`);
  19  |     console.log(); 
  20  |     }
  21  | }
  22  | );
  23  | 
  24  | test.skip('Add new user "John Doe" to table', async({page}) => {
  25  | await page.goto('https://demoqa.com/webtables');
  26  | 
  27  | // Click Add button
  28  |     await page.locator('#addNewRecordButton').click();
  29  | 
  30  |     // Fill the registration form
  31  |     await page.locator('#firstName').fill('John');
  32  |     await page.locator('#lastName').fill('Doe');
  33  |     await page.locator('#userEmail').fill('john.doe@gmail.com');
  34  |     await page.locator('#age').fill('30');
  35  |     await page.locator('#salary').fill('50000');
  36  |     await page.locator('#department').fill('QA');
  37  | 
  38  |     // Submit the form
  39  |     await page.locator('#submit').click();
  40  | 
  41  |     // Verify the new record is added
  42  |     await expect(page.getByText('John', { exact: true })).toBeVisible();
  43  |     await expect(page.getByText('Doe', { exact: true })).toBeVisible();
  44  |     console.log('New user "John Doe" added successfully.');
  45  | });
  46  | 
  47  | 
  48  | test.skip('Edit user Cierra department from Insurance to Development using Edit action', async({page}) => {
  49  |     await page.goto('https://demoqa.com/webtables');
  50  | 
  51  |     // Click Edit button for the user
  52  | 
  53  |    //await page.locator('//table/tbody/tr[1]/td[7]//span[@title="Edit"]').click();
  54  |    //await page.locator('//table/tbody/tr/td[text()="${firstColumnValue}"]/..//span[@title="Edit"]')
  55  |     await demoTable.clickEditIcon(page, 'Cierra');
  56  |     // Fill the edit form
  57  |     await page.locator('#department').fill('Development');//changing department from Insurance to 
  58  |     // Submit the form
  59  |     await page.locator('#submit').click();
  60  | 
  61  |     // Verify department updated
  62  |   await expect( page.locator('//table/tbody/tr[1]')).toContainText('Development');
  63  |     console.log('Department of Cierra from Insurance to Development edited successfully.');
  64  | 
  65  |     
  66  |     
  67  | 
  68  | });
  69  | 
  70  | test.skip('Delete user Cierra using Delete action', async({page}) => {
  71  |     await page.goto('https://demoqa.com/webtables');
  72  |     //Delete user
  73  |     await demoTable.clickDeleteIcon(page, 'Cierra');
  74  |     //Verify deleted user is not visible
  75  |     await expect(page.locator('//table/tbody/tr/td[text()="Cierra"]')).not.toBeVisible();
  76  |     console.log('User "Cierra" deleted successfully.');
  77  | });
  78  | 
  79  | test.skip('Search for user "Cierra" and verify results', async({page}) => {
  80  |     await page.goto('https://demoqa.com/webtables');
  81  | 
  82  |    // await expect(demoTable.verifySearchBoxPlaceholderText(page, 'Type to search')).toBe(true);
  83  |     await expect(await demoTable.verifySearchBoxPlaceholderText(page)).toBe('Type to search');
  84  |     await demoTable.enterSearchText(page, 'Cierra');
  85  |     await expect(await demoTable.verifySearchResults(page)).toBe(1);
  86  |     console.log('Search results for "Cierra" verified successfully.');
  87  | });
  88  | 
  89  | // to verify First, Previous, Next, last are disbaled
  90  | test('Verify First, Last, previous, next buttons are disabled', async({page}) => {
  91  |     await page.goto('https://demoqa.com/webtables');
  92  |     // verify First Button is disabled
> 93  |     await expect(await page.getByText('First')).toBeDisabled();
      |                                                 ^ Error: expect(locator).toBeDisabled() failed
  94  |     await page.waitForTimeout(1000);
  95  |     /*//verify Previous Button is disabled
  96  |     await expect(await page.locator('Previous')).toBeDisabled();
  97  |     //verify Next Button is disabled
  98  |     await expect(await page.locator('Next')).toBeDisabled();
  99  |     //verify Last Button is disabled
  100 |     await expect(await page.locator('Last')).toBeDisabled();
  101 |     */
  102 | });
  103 | 
  104 | 
  105 | //Add 10 records to the table and verify next , last should be enabled
  106 | //click next or last buttons 
  107 | //verify First and Previous buttons should be enabled
  108 | //Verify next and last buttons are disbaled
```