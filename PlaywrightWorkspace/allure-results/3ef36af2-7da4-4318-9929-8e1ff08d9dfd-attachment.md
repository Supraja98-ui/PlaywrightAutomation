# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: VerizonVerifyCheckbox.spec.ts >> Verify Checkbox Status.
- Location: tests/VerizonVerifyCheckbox.spec.ts:11:5

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  getByRole('button', { name: 'Continue' })
Expected: disabled
Received: enabled
Timeout:  5000ms

Call log:
  - Expect "toBeDisabled" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Continue' })
    13 × locator resolved to <button tabindex="0" role="button" type="button" data-testid="button" id="createProfileBtn" aria-label="Continue" aria-disabled="false" class="VDS__MON__button-module__3kKdo VDS__MON__button-module__i-UBD VDS__MON__button-module__hH-Lr">…</button>
       - unexpected value "enabled"

```

```yaml
- button "Continue"
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
  11 | test('Verify Checkbox Status.', async ({ page }) => {
  12 |     await signIn.openurl(page, "https://secure.verizon.com/account/register/start")
  13 |     const Checkbox = page.locator('input[type="checkbox"]');
  14 |      
  15 |     // Verify it is initially unchecked
  16 |     await expect(Checkbox).not.toBeChecked();
  17 |     //TO CHECK IT
  18 |     await Checkbox.check();
  19 |     //TO VERIFY THE CHECKED CHECKBOX
  20 |     await expect(Checkbox).toBeChecked();
  21 |   
  22 |     //to verify continue button. 
  23 |     //created constant locator for continue button
  24 |     const ContinueButton = page.getByRole('button', { name: 'Continue' });
  25 |     
  26 |     // Verify button is initially disabled
> 27 |     await expect(ContinueButton).toBeDisabled();
     |                                  ^ Error: expect(locator).toBeDisabled() failed
  28 | 
  29 |     
  30 |     
  31 | 
  32 | }
  33 | );
  34 | 
  35 | 
```