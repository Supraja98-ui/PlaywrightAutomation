# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrmgetByLabel.spec.ts >> login to account & Verify menu tabs, headings and url of each tab.
- Location: tests/orangehrmgetByLabel.spec.ts:11:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Username')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByLabel('Username')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import{test,expect, Locator} from '@playwright/test'
  2  | import {SignIn} from'../Pages/orangehrmSignIn';
  3  | import{LoginData} from '../Testdata/logindata';//foldername/file name
  4  | 
  5  | 
  6  | const signIn = new SignIn();
  7  | const logindata = new LoginData();
  8  | 
  9  | 
  10 | 
  11 | test('login to account & Verify menu tabs, headings and url of each tab.', async ({ page }) => {
  12 |     await signIn.openurl(page, logindata.url1)
> 13 |     await expect(page.getByLabel('Username')).toBeVisible({timeout: 5000});
     |                                               ^ Error: expect(locator).toBeVisible() failed
  14 | 
  15 | }
  16 | 
  17 | );
```