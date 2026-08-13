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

Expected: true
Received: Promise {}
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
      - img
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e12] [cursor=pointer]:
          - generic [ref=e13]:
            - img [ref=e15]
            - text: Elements
          - img [ref=e20]
        - list [ref=e23]:
          - listitem [ref=e24] [cursor=pointer]:
            - link "Text Box" [ref=e25]:
              - /url: /text-box
              - img [ref=e26]
              - text: Text Box
          - listitem [ref=e28] [cursor=pointer]:
            - link "Check Box" [ref=e29]:
              - /url: /checkbox
              - img [ref=e30]
              - text: Check Box
          - listitem [ref=e32] [cursor=pointer]:
            - link "Radio Button" [ref=e33]:
              - /url: /radio-button
              - img [ref=e34]
              - text: Radio Button
          - listitem [ref=e36] [cursor=pointer]:
            - link "Web Tables" [ref=e37]:
              - /url: /webtables
              - img [ref=e38]
              - text: Web Tables
          - listitem [ref=e40] [cursor=pointer]:
            - link "Buttons" [ref=e41]:
              - /url: /buttons
              - img [ref=e42]
              - text: Buttons
          - listitem [ref=e44] [cursor=pointer]:
            - link "Links" [ref=e45]:
              - /url: /links
              - img [ref=e46]
              - text: Links
          - listitem [ref=e48] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e49]:
              - /url: /broken
              - img [ref=e50]
              - text: Broken Links - Images
          - listitem [ref=e52] [cursor=pointer]:
            - link "Upload and Download" [ref=e53]:
              - /url: /upload-download
              - img [ref=e54]
              - text: Upload and Download
          - listitem [ref=e56] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e57]:
              - /url: /dynamic-properties
              - img [ref=e58]
              - text: Dynamic Properties
      - generic [ref=e62] [cursor=pointer]:
        - generic [ref=e63]:
          - img [ref=e65]
          - text: Forms
        - img [ref=e71]
      - generic [ref=e75] [cursor=pointer]:
        - generic [ref=e76]:
          - img [ref=e78]
          - text: Alerts, Frame & Windows
        - img [ref=e83]
      - generic [ref=e87] [cursor=pointer]:
        - generic [ref=e88]:
          - img [ref=e90]
          - text: Widgets
        - img [ref=e96]
      - generic [ref=e100] [cursor=pointer]:
        - generic [ref=e101]:
          - img [ref=e103]
          - text: Interactions
        - img [ref=e108]
      - generic [ref=e112] [cursor=pointer]:
        - generic [ref=e113]:
          - img [ref=e115]
          - text: Book Store Application
        - img [ref=e120]
    - generic [ref=e123]:
      - heading "Web Tables" [level=1] [ref=e126]
      - generic [ref=e127]:
        - generic [ref=e128]:
          - button "Add" [ref=e130] [cursor=pointer]
          - generic [ref=e132]:
            - textbox "Type to search" [ref=e133]
            - button [ref=e134] [cursor=pointer]:
              - img [ref=e135]
        - table [ref=e137]:
          - rowgroup [ref=e138]:
            - row "First Name Last Name Age Email Salary Department Action" [ref=e139]:
              - columnheader "First Name" [ref=e140]
              - columnheader "Last Name" [ref=e141]
              - columnheader "Age" [ref=e142]
              - columnheader "Email" [ref=e143]
              - columnheader "Salary" [ref=e144]
              - columnheader "Department" [ref=e145]
              - columnheader "Action" [ref=e146]
          - rowgroup [ref=e147]:
            - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete" [ref=e148]:
              - cell "Cierra" [ref=e149]
              - cell "Vega" [ref=e150]
              - cell "39" [ref=e151]
              - cell "cierra@example.com" [ref=e152]
              - cell "10000" [ref=e153]
              - cell "Insurance" [ref=e154]
              - cell "EditDelete" [ref=e155]:
                - generic [ref=e156]:
                  - generic "Edit" [ref=e157] [cursor=pointer]:
                    - img [ref=e158]
                  - generic "Delete" [ref=e160] [cursor=pointer]:
                    - img [ref=e161]
            - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete" [ref=e163]:
              - cell "Alden" [ref=e164]
              - cell "Cantrell" [ref=e165]
              - cell "45" [ref=e166]
              - cell "alden@example.com" [ref=e167]
              - cell "12000" [ref=e168]
              - cell "Compliance" [ref=e169]
              - cell "EditDelete" [ref=e170]:
                - generic [ref=e171]:
                  - generic "Edit" [ref=e172] [cursor=pointer]:
                    - img [ref=e173]
                  - generic "Delete" [ref=e175] [cursor=pointer]:
                    - img [ref=e176]
            - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete" [ref=e178]:
              - cell "Kierra" [ref=e179]
              - cell "Gentry" [ref=e180]
              - cell "29" [ref=e181]
              - cell "kierra@example.com" [ref=e182]
              - cell "2000" [ref=e183]
              - cell "Legal" [ref=e184]
              - cell "EditDelete" [ref=e185]:
                - generic [ref=e186]:
                  - generic "Edit" [ref=e187] [cursor=pointer]:
                    - img [ref=e188]
                  - generic "Delete" [ref=e190] [cursor=pointer]:
                    - img [ref=e191]
        - generic [ref=e194]:
          - group [ref=e196]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e197]:
            - text: Page
            - strong [ref=e198]: 1 of 1
          - combobox [ref=e200]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e207]:
    - generic [ref=e208]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect,Page} from '@playwright/test';
  2  | import { DemoTable } from '../Pages/demoTable'; 
  3  | 
  4  | const demoTable = new DemoTable();
  5  | 
  6  | 
  7  | test('Verify first name,last name, age and salary of users', async({page}) => {
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
  24 | test('Add new user "John Doe" to table', async({page}) => {
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
  48 | test('Edit user Cierra department from Insurance to Development using Edit action', async({page}) => {
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
  70 | test('Delete user Cierra using Delete action', async({page}) => {
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
> 82 |     await expect(demoTable.verifySearchBoxPlaceholderText(page, 'Type to search')).toBe(true);
     |                                                                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  83 |     await demoTable.enterSearchText(page, 'Cierra');
  84 |     await expect(demoTable.verifySearchResults(page)).toBe(1);
  85 |     console.log('Search results for "Cierra" verified successfully.');
  86 | });
  87 | 
```