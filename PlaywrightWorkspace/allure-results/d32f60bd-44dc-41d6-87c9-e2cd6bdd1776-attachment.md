# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validateTable.spec.ts >> Search for user "Cierra" and verify results
- Location: tests/validateTable.spec.ts:79:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: Promise {}
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
            - textbox "Type to search" [active] [ref=e135]: Cierra
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
        - generic [ref=e166]:
          - group [ref=e168]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e169]:
            - text: Page
            - strong [ref=e170]: 1 of 1
          - combobox [ref=e172]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e179]:
    - generic [ref=e180]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect,Page} from '@playwright/test';
  2  | import { DemoTable } from '../Pages/demoTable'; 
  3  | 
  4  | const demoTable = new DemoTable();
  5  | 
  6  | 
  7  | test.skip('Verify first name,last name, age and salary of users', async({page}) => {
  8  |     await page.goto('https://demoqa.com/webtables');
  9  |     
  10 |     //Validate all firstnames and their corresponding age and salaries in the table
  11 |     
  12 |     const firstNames = await page.locator('//table/tbody/tr/td[1]').allTextContents();
  13 |     for (const name of firstNames) {
  14 |     const { age, salary } = await demoTable.getUserAgeandSalary(page, name);
  15 | 
  16 |     console.log(`Name   : ${name}`);
  17 |     console.log(`Age    : ${age}`);
  18 |     console.log(`Salary : ${salary}`);
  19 |     console.log(); 
  20 |     }
  21 | }
  22 | );
  23 | 
  24 | test.skip('Add new user "John Doe" to table', async({page}) => {
  25 | await page.goto('https://demoqa.com/webtables');
  26 | 
  27 | // Click Add button
  28 |     await page.locator('#addNewRecordButton').click();
  29 | 
  30 |     // Fill the registration form
  31 |     await page.locator('#firstName').fill('John');
  32 |     await page.locator('#lastName').fill('Doe');
  33 |     await page.locator('#userEmail').fill('john.doe@gmail.com');
  34 |     await page.locator('#age').fill('30');
  35 |     await page.locator('#salary').fill('50000');
  36 |     await page.locator('#department').fill('QA');
  37 | 
  38 |     // Submit the form
  39 |     await page.locator('#submit').click();
  40 | 
  41 |     // Verify the new record is added
  42 |     await expect(page.getByText('John', { exact: true })).toBeVisible();
  43 |     await expect(page.getByText('Doe', { exact: true })).toBeVisible();
  44 |     console.log('New user "John Doe" added successfully.');
  45 | });
  46 | 
  47 | 
  48 | test.skip('Edit user Cierra department from Insurance to Development using Edit action', async({page}) => {
  49 |     await page.goto('https://demoqa.com/webtables');
  50 | 
  51 |     // Click Edit button for the user
  52 | 
  53 |    //await page.locator('//table/tbody/tr[1]/td[7]//span[@title="Edit"]').click();
  54 |    //await page.locator('//table/tbody/tr/td[text()="${firstColumnValue}"]/..//span[@title="Edit"]')
  55 |     await demoTable.clickEditIcon(page, 'Cierra');
  56 |     // Fill the edit form
  57 |     await page.locator('#department').fill('Development');//changing department from Insurance to 
  58 |     // Submit the form
  59 |     await page.locator('#submit').click();
  60 | 
  61 |     // Verify department updated
  62 |   await expect( page.locator('//table/tbody/tr[1]')).toContainText('Development');
  63 |     console.log('Department of Cierra from Insurance to Development edited successfully.');
  64 | 
  65 |     
  66 |     
  67 | 
  68 | });
  69 | 
  70 | test.skip('Delete user Cierra using Delete action', async({page}) => {
  71 |     await page.goto('https://demoqa.com/webtables');
  72 |     //Delete user
  73 |     await demoTable.clickDeleteIcon(page, 'Cierra');
  74 |     //Verify deleted user is not visible
  75 |     await expect(page.locator('//table/tbody/tr/td[text()="Cierra"]')).not.toBeVisible();
  76 |     console.log('User "Cierra" deleted successfully.');
  77 | });
  78 | 
  79 | test('Search for user "Cierra" and verify results', async({page}) => {
  80 |     await page.goto('https://demoqa.com/webtables');
  81 | 
  82 |    // await expect(demoTable.verifySearchBoxPlaceholderText(page, 'Type to search')).toBe(true);
  83 |     await expect(await demoTable.verifySearchBoxPlaceholderText(page)).toBe('Type to search');
  84 |     await demoTable.enterSearchText(page, 'Cierra');
> 85 |     await expect(demoTable.verifySearchResults(page)).toBe(1);
     |                                                       ^ Error: expect(received).toBe(expected) // Object.is equality
  86 |     console.log('Search results for "Cierra" verified successfully.');
  87 | });
  88 | 
```