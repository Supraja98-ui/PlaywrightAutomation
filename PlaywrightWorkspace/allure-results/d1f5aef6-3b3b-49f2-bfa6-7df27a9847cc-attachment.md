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

Locator: locator('label[class=\'oxd-label\']')
Expected: "Username"
Error: strict mode violation: locator('label[class=\'oxd-label\']') resolved to 2 elements:
    1) <label class="oxd-label" data-v-30ff22b1="" data-v-957b4417="">Username</label> aka getByText('Username', { exact: true })
    2) <label class="oxd-label" data-v-30ff22b1="" data-v-957b4417="">Password</label> aka getByText('Password', { exact: true })

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('label[class=\'oxd-label\']')

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
  1   | import{Page,expect} from '@playwright/test'
  2   | import{Base} from '../Core/Base';
  3   | export class SignIn extends Base {
  4   |     username_loc = "//input[@name='username']";//Xpath
  5   |     password_loc = "//input[@name='password']";
  6   |     usernameLabel_CSS = "label[class='oxd-label']";//Page username label before username Input box using CSS 
  7   |     passwordLabel_CSS = "label[class='oxd-label']";//Page password label before password Input box using CSS 
  8   |     username_label = "Username"; //getByLabel
  9   |     password_label = "Password";//getByLabel
  10  |     loginbutton_loc = "//button[@type='submit']";
  11  |     adminTab_xpath = "//span[text()='Admin']";//Xpath// if htmml page has span getByLabel, getByheader cannot be used. can use it using XPATH & getByRole
  12  |     adminTab_Label = "Admin";
  13  |     pimTab_Xpath = "//span[text()='PIM']";
  14  |     leaveTab_Xpath = "//span[text()='Leave']";
  15  |     timeTab_Xpath = "//span[text()='Time']";
  16  |     recruitmentTab_Xpath = "//span[text()='Recruitment']";
  17  |     myinfoTab_Xpath = "//span[text()='My Info']";
  18  |     performanceTab_Xpath = "//span[text()='Performance']";
  19  |     dashboardTab_Xpath = "//span[text()='Dashboard']";
  20  |     directoryTab_Xpath = "//span[text()='Directory']";
  21  |     maintenanceTab_Xpath = "//span[text()='Maintenance']";
  22  |     claimTab_Xpath = "//span[text()='Claim']";
  23  |     buzzTab_Xpath = "//span[text()='Buzz']";
  24  |     
  25  | 
  26  | 
  27  |     async openurl(page: Page, url: string) {
  28  |         await this.openWebsite(page, url);  
  29  |     }
  30  | 
  31  |     async signintoAccount(page: Page, testdata: Record<string, string>) {
  32  |         await this.enterText(page, this.username_loc, testdata.username);
  33  |         await this.enterText(page, this.password_loc, testdata.password);
  34  |         //await this.enterText(page, this.loginbutton_loc, "9");
  35  |         await this.clickelement(page, this.loginbutton_loc);
  36  |     }
  37  | 
  38  |     async signintoAccount2(page: Page, testdata: Record<string, string>) {
  39  |         await this.enterTextByGetByLabel(page, this.username_label, testdata.username);
  40  |         await this.enterTextByGetByLabel(page, this.password_label, testdata.password);
  41  | 
  42  |         //await this.enterText(page, this.loginbutton_loc, "9");
  43  |         await this.clickelement(page, this.loginbutton_loc);
  44  |     }
  45  | 
  46  |     async verifyLabels(page: Page) {
> 47  |         await expect(page.locator(this.usernameLabel_CSS)).toHaveText(this.username_label);
      |                                                            ^ Error: expect(locator).toHaveText(expected) failed
  48  |         await expect(page.locator(this.passwordLabel_CSS)).toHaveText(this.password_label);
  49  |     }
  50  | 
  51  |      /*async signin(page: Page, testdata: Record<string, string>) {
  52  |         await this.enterTextByGetByRole_TextBox(page, this.username_Input, testdata.username);
  53  |         await this.enterTextByGetByRole_TextBox(page, this.password_Input, testdata.password);
  54  |         //await this.enterText(page, this.loginbutton_loc, "9");
  55  |         await this.clickelement(page, this.loginbutton_loc);
  56  |     }*/
  57  | 
  58  |     async clickAdminTab(page: Page) {
  59  |         await this.clickelement(page, this.adminTab_xpath);
  60  |     
  61  |     }
  62  | 
  63  |     async clickAdminTab_Label(page: Page) {
  64  |         await this.clickelement(page, this.adminTab_Label);
  65  |     
  66  |     }
  67  | 
  68  |     async clickPimTab(page: Page) {
  69  |         await this.clickelement(page, this.pimTab_Xpath);
  70  |     }
  71  | 
  72  |     async clickLeaveTab(page : Page){
  73  |         await this.clickelement(page, this.leaveTab_Xpath);
  74  |     }
  75  |         
  76  | 
  77  |     async clickMenuTab(page : Page, loc: string){//in place of loc we  can use any thing eg abc, value1 etc
  78  |         await this.clickelement(page, loc);
  79  |     }
  80  | 
  81  | 
  82  |     async menulables(page: Page) {
  83  |         // Implementation for verifying sidebar menu labels
  84  |         const menuLabels = [
  85  |             'Admin',
  86  |             'PIM',
  87  |             'Leave',
  88  |             'Time',
  89  |             'Recruitment',
  90  |             'My Info',
  91  |             'Performance',
  92  |             'Dashboard',
  93  |             'Directory',
  94  |             'Maintenance',
  95  |             'Claim',
  96  |             'Buzz',
  97  |   ];
  98  |   const sidebar = page.getByRole('navigation', { name: 'Sidepanel' });
  99  | 
  100 |     for (const label of menuLabels) {
  101 |         await expect(sidebar.getByRole('link', { name: label })).toBeVisible();
  102 |     }
  103 | }
  104 | 
  105 | async verifymenutaburl(page: Page, expectedUrl: string) {
  106 |     await expect(page).toHaveURL(new RegExp(expectedUrl));
  107 | }
  108 | 
  109 | }
  110 | 
  111 | 
  112 | 
```