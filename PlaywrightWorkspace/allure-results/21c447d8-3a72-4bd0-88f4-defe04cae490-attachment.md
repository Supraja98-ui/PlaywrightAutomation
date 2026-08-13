# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrmgetByLabel.spec.ts >> login to account & Verify menu tabs, headings and url of each tab.
- Location: tests/orangehrmgetByLabel.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Username')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import{Page} from '@playwright/test'
  2  | export class Base {
  3  |   async openWebsite(page: Page, url: string) {
  4  |     await page.goto(url);
  5  |   }
  6  |   async clickelement(page: Page, locator: string) {
  7  |     await page.locator(locator).click();
  8  |   }
  9  |   async enterText(page: Page, locator: string, enteringtext: string) {
  10 |     await page.locator(locator).fill(enteringtext);
  11 |      }
  12 | 
  13 |      async enterTextByGetByLabel(page: Page, labelName: string, enteringtext: string) {
> 14 |     await page.getByLabel(labelName).fill(enteringtext);
     |                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  15 |      }
  16 | 
  17 |      async enterTextByLocator(page: Page, locator: string, enteringtext: string) {
  18 |     await page.locator(locator).fill(enteringtext);
  19 |      }
  20 | 
  21 | 
  22 |     async enterTextByGetByRole_TextBox(page: Page, u_name: string, enteringtext: string) {
  23 |     await page.getByRole('textbox', { name: u_name }).fill(enteringtext);
  24 |      }
  25 | 
  26 |      async clickLinkGetByRole(page : Page, val: string){
  27 |      await page.getByRole('link', { name: val }).click();
  28 |      }
  29 | 
  30 | 
  31 | 
  32 |      async enterTextGetByLabel(page: Page, locator: string, enteringtext: string) {
  33 |     await page.getByLabel('locator').fill(enteringtext);
  34 |      }
  35 | 
  36 | 
  37 | 
  38 | 
  39 |      async enterNumber(page: Page, locator: string, enteringnumber: number) {
  40 |     await page.locator(locator).fill(enteringnumber.toString());
  41 |      }
  42 | 
  43 | 
  44 |   async selectDropdown(page: Page, locator: string, value: string) {   //page ,locator(country), value:India
  45 |     await page.locator (locator).selectOption(value);
  46 |   }
  47 |      
  48 | }
  49 | 
```