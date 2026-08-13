# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: VerizonVerifyCheckbox.spec.ts >> Verify Checkbox Status.
- Location: tests/VerizonVerifyCheckbox.spec.ts:12:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('button', { name: 'Privacy Policy' })
Expected: "Privacy Policy"
Received: "Privacy Policy."
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Privacy Policy' })
    14 × locator resolved to <a tabindex="0" role="button" data-testid="text-link" aria-label="Privacy Policy." class="VDS__MON__text-link-module__Cq8Mx VDS__MON__text-link-module__oq94s VDS__MON__text-link-module__i1Yk6">…</a>
       - unexpected value "Privacy Policy."

```

```yaml
- button "Privacy Policy."
```

# Test source

```ts
  1   | import{test,expect, Locator} from '@playwright/test'
  2   | import {SignIn} from'../Pages/orangehrmSignIn';
  3   | import{LoginData} from '../Testdata/logindata';//foldername/file name
  4   | 
  5   | 
  6   | 
  7   | const signIn = new SignIn();
  8   | const logindata = new LoginData();
  9   | 
  10  | 
  11  | 
  12  | test('Verify Checkbox Status.', async ({ page, context }) => {
  13  |     await signIn.openurl(page, "https://secure.verizon.com/account/register/start")
  14  |     const Checkbox = page.locator('input[type="checkbox"]');
  15  |      
  16  |     // Verify checkbox is initially unchecked
  17  |     await expect(Checkbox).not.toBeChecked();
  18  |     //TO CHECK IT
  19  |     await Checkbox.click();
  20  |     //TO VERIFY THE CHECKED CHECKBOX
  21  |     await expect(Checkbox).toBeChecked();
  22  |   
  23  |     //to verify continue button. 
  24  |     //created constant locator for continue button
  25  |     const ContinueButton = page.getByRole('button', { name: 'Continue' });
  26  |     
  27  |     // Verify button is initially disabled
  28  |     //await expect(ContinueButton).toBeDisabled();
  29  | 
  30  |     //Verify button is enabled
  31  |     await expect(ContinueButton).toBeEnabled();
  32  | 
  33  |     //to verify button name/text
  34  |     await expect(ContinueButton).toBeVisible();
  35  |     await expect(ContinueButton).toHaveText('Continue');
  36  | 
  37  | 
  38  |     //To verify "product/devices/accessoriues link url"
  39  |     const devicelink = page.getByRole('link', { name: 'Devices' });
  40  |     
  41  |     //await expect(product link).toBeVisible();
  42  |     await expect(devicelink).toHaveAttribute(
  43  |        'href',
  44  |        'https://www.verizon.com/smartphones/'
  45  |        );
  46  | 
  47  |     const acclink = page.getByRole('link', { name: 'Accessories' });
  48  | 
  49  |     await expect(acclink).toHaveAttribute(
  50  |         'href',
  51  |         'https://www.verizon.com/products/'
  52  |     )
  53  | 
  54  |     //to verify "Terms and conditions" text is visible
  55  |         
  56  |         
  57  |         const termsButton = page.getByRole('button', {name: 'Terms & Conditions'});
  58  |         await expect(termsButton).toBeVisible();
  59  |         await expect(termsButton).toBeEnabled();
  60  |         await expect(termsButton).toHaveText('Terms & Conditions');//toHaveText assertion works only with locator
  61  |         
  62  |         await termsButton.click();//expect is used for assertions not for methods
  63  |         const newTab = context.waitForEvent('page');
  64  | 
  65  |         const termsPage = await newTab;
  66  |         await termsPage.waitForLoadState();
  67  | 
  68  |         await expect(termsPage).toHaveURL('https://www.verizon.com/support/my-verizon-terms/');// cannot use termsTextlocator as it is a locator having text
  69  |         await page.waitForTimeout(2000);
  70  |         console.log(termsPage.url());
  71  | 
  72  |         await termsPage.close();
  73  |         await page.bringToFront();
  74  |         
  75  |         
  76  |         //TO VERIFY PRIVACY POLICY BUTTON
  77  |         const privacypolicyButton = await page.getByRole('button', {name: 'Privacy Policy'});
  78  |         await expect(privacypolicyButton).toBeVisible();
  79  |         await expect(privacypolicyButton).toBeEnabled();
> 80  |         await expect(privacypolicyButton).toHaveText('Privacy Policy');//toHaveText assertion works only with locator
      |                                           ^ Error: expect(locator).toHaveText(expected) failed
  81  |         
  82  |         await privacypolicyButton.click();//expect is used for assertions not for methods
  83  |         const newTab1 = context.waitForEvent('page');
  84  | 
  85  |         const privacypolicyPage = await newTab1;
  86  |         await privacypolicyPage.waitForLoadState();
  87  | 
  88  |         await expect(privacypolicyPage).toHaveURL('https://www.verizon.com/about/privacy/full-privacy-policy');// cannot use termsTextlocator as it is a locator having text
  89  |         await page.waitForTimeout(2000);
  90  |         console.log(privacypolicyPage.url());
  91  | 
  92  |         await termsPage.close();
  93  |         await page.bringToFront();
  94  |         
  95  |         
  96  |          
  97  | }
  98  | );
  99  | 
  100 | 
```