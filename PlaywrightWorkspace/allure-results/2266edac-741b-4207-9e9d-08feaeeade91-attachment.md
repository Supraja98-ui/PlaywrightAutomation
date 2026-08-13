# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrmgetByLabel.spec.ts >> login to account & Verify menu tabs, headings and url of each tab.
- Location: tests/orangehrmgetByLabel.spec.ts:11:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('label[class="oxd-label"]')
Expected: "Username"
Error: strict mode violation: locator('label[class="oxd-label"]') resolved to 2 elements:
    1) <label class="oxd-label" data-v-30ff22b1="" data-v-957b4417="">Username</label> aka getByText('Username', { exact: true })
    2) <label class="oxd-label" data-v-30ff22b1="" data-v-957b4417="">Password</label> aka getByText('Password', { exact: true })

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('label[class="oxd-label"]')

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
> 13 |     await expect(page.locator('label[class="oxd-label"]')).toHaveText('Username');
     |                                                            ^ Error: expect(locator).toHaveText(expected) failed
  14 | 
  15 | }
  16 | 
  17 | );
```