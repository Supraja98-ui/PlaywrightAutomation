# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validateTable.spec.ts >> Verify Radio Button status
- Location: tests/validateTable.spec.ts:2:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('sam')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('sam')

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Web Tables" [level=1]
- button "Add"
- textbox "Type to search"
- button:
  - img
- table:
  - rowgroup:
    - row "First Name Last Name Age Email Salary Department Action":
      - columnheader "First Name"
      - columnheader "Last Name"
      - columnheader "Age"
      - columnheader "Email"
      - columnheader "Salary"
      - columnheader "Department"
      - columnheader "Action"
  - rowgroup:
    - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete":
      - cell "Cierra"
      - cell "Vega"
      - cell "39"
      - cell "cierra@example.com"
      - cell "10000"
      - cell "Insurance"
      - cell "EditDelete":
        - img
        - img
    - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete":
      - cell "Alden"
      - cell "Cantrell"
      - cell "45"
      - cell "alden@example.com"
      - cell "12000"
      - cell "Compliance"
      - cell "EditDelete":
        - img
        - img
    - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete":
      - cell "Kierra"
      - cell "Gentry"
      - cell "29"
      - cell "kierra@example.com"
      - cell "2000"
      - cell "Legal"
      - cell "EditDelete":
        - img
        - img
- group:
  - button "First" [disabled]
  - button "Previous" [disabled]
  - button "Next" [disabled]
  - button "Last" [disabled]
- text: Page
- strong: 1 of 1
- combobox:
  - option "Show 10" [selected]
  - option "Show 20"
  - option "Show 30"
  - option "Show 40"
  - option "Show 50"
- iframe
- iframe
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | test('Verify Radio Button status', async({page}) => {
  3  |     await page.goto('https://demoqa.com/webtables');
  4  |     
  5  |     //print all firstnames from all rows in the table
> 6  |     await expect(page.getByText("sam")).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  7  |     await page.waitForTimeout(5000);
  8  |     const firstNames = await page.locator('//table/tbody/tr/td[1]').allTextContents();
  9  |     console.log(firstNames);
  10 | 
  11 | }
  12 | );
  13 | 
```