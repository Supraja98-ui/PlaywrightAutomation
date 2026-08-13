# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: VerizonVerifyCheckbox.spec.ts >> Verify Checkbox Status.
- Location: tests/VerizonVerifyCheckbox.spec.ts:11:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.verizon.com/support/my-verizon-terms/"
Received: "https://secure.verizon.com/account/register/start"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    11 × unexpected value "https://secure.verizon.com/account/register/start"

```

```yaml
- alert
- banner:
  - link "Accessibility Resource Center":
    - /url: https://www.verizon.com/accessibility
  - link "Skip to main content":
    - /url: "#gnav20-header-end"
  - link "Verizon Personal Services HomePage":
    - /url: https://www.verizon.com/
    - text: Personal
  - link "Verizon Business Services HomePage":
    - /url: https://www.verizon.com/business/?cmp=vcgref_naveyebrow
    - text: Business
  - link "Call Verizon 1-833-VERIZON for sales and support assistance.":
    - /url: _tel_+18338374966
    - text: 1-833-VERIZON
  - link "Contact us":
    - /url: https://www.verizon.com/support/contact-us/
  - link "Support":
    - /url: https://www.verizon.com/support/
  - link "Stores":
    - /url: https://www.verizon.com/stores/
  - link "Coverage map":
    - /url: https://www.verizon.com/coverage-map/
  - link "Cámbiate al sitio web en español":
    - /url: https://espanol.verizon.com/
    - text: Español
  - link "Verizon Home Page":
    - /url: https://www.verizon.com/
  - button "Mobile Menu List": Mobile
  - button "Home Menu List": Home
  - button "Save Menu List": Save
  - button "Search Verizon"
  - button "Sign in dropdown menu": Sign in
  - button "Shopping Cart Menu 0 items in the cart"
- main:
  - heading "Connect to everything Verizon" [level=1]
  - heading "Create a profile to manage your Verizon services online." [level=2]
  - paragraph: Email address
  - textbox "Email address"
  - paragraph: This will be your user ID for signing in.
  - paragraph: Create password
  - textbox "Create password"
  - text: "Password requirements: 8-20 characters (symbols allowed, no spaces), At least 1 letter (case sensitive), At least 1 number, No commonly used words (e.g. Verizon or password)"
  - checkbox "I agree to the My Verizon Terms & Conditions and Privacy Policy.California residents can also review our California Privacy Notice." [checked]
  - text: I agree to the My Verizon
  - button "Terms & Conditions"
  - text: and
  - button "Privacy Policy."
  - text: California residents can also review our
  - button "California Privacy Notice."
  - button "Continue"
  - iframe
- contentinfo:
  - text: Shop
  - list "Shop menu list":
    - listitem:
      - link "Devices":
        - /url: https://www.verizon.com/smartphones/
    - listitem:
      - link "Accessories":
        - /url: https://www.verizon.com/products/
    - listitem:
      - link "Simplicity Plan":
        - /url: https://www.verizon.com/plans/unlimited/
    - listitem:
      - link "Verizon Prepaid":
        - /url: https://www.verizon.com/prepaid/
    - listitem:
      - link "Home Internet & TV":
        - /url: https://www.verizon.com/home/internet/
    - listitem:
      - link "Verizon One - Mobile & Internet":
        - /url: https://www.verizon.com/phone-home-internet-bundle/verizon-one/
    - listitem:
      - link "Bring your phone":
        - /url: https://www.verizon.com/bring-your-own-device/
    - listitem:
      - link "TracFone":
        - /url: https://www.tracfonewirelessinc.com/
  - text: Most Popular
  - list "Most Popular menu list":
    - listitem:
      - link "Apple iPhone 17":
        - /url: https://www.verizon.com/smartphones/apple-iphone-17/
    - listitem:
      - link "Apple iPhone 17e":
        - /url: https://www.verizon.com/smartphones/apple-iphone-17e/
    - listitem:
      - link "Samsung Galaxy S26 Ultra":
        - /url: https://www.verizon.com/smartphones/samsung-galaxy-s26-ultra/
    - listitem:
      - link "Apple AirPods Max":
        - /url: https://www.verizon.com/products/apple-airpods-max-headphones/
    - listitem:
      - link "Disney+, Hulu, & ESPN+ (With Ads)":
        - /url: https://www.verizon.com/solutions-and-services/disneyplus/
    - listitem:
      - link "Apple Watch Series 11":
        - /url: https://www.verizon.com/connected-smartwatches/apple-watch-series-11/
    - listitem:
      - link "Fios":
        - /url: https://www.verizon.com/home/internet/
    - listitem:
      - link "Verizon Visa® Card":
        - /url: https://www.verizon.com/financial-services/verizon-visa-card/?origin=gnavFooter
  - text: Top Accessory Brands
  - list "Top Accessory Brands menu list":
    - listitem:
      - link "Otterbox":
        - /url: https://www.verizon.com/products/otterbox/
    - listitem:
      - link "ZAGG":
        - /url: https://www.verizon.com/products/zagg/
    - listitem:
      - link "Beats":
        - /url: https://www.verizon.com/products/beats/
    - listitem:
      - link "Mophie":
        - /url: https://www.verizon.com/products/mophie/
    - listitem:
      - link "JBL":
        - /url: https://www.verizon.com/products/jbl/
    - listitem:
      - link "Fitbit":
        - /url: https://www.verizon.com/products/fitbit/
    - listitem:
      - link "Elizabeth James":
        - /url: https://www.verizon.com/products/phone-accessories/elizabeth-james/
  - text: Support
  - list "Support menu list":
    - listitem:
      - link "Support overview":
        - /url: https://www.verizon.com/support/
    - listitem:
      - link "Return policy":
        - /url: https://www.verizon.com/support/return-policy/
    - listitem:
      - link "Contact us":
        - /url: https://www.verizon.com/support/contact-us/
    - listitem:
      - link "Business support":
        - /url: https://www.verizon.com/business/support/?cmp=int:int:aw:smb:my_business:nav_business_support
    - listitem:
      - link "Sign in":
        - /url: https://secure.verizon.com/signin
    - listitem:
      - link "Download My Verizon App":
        - /url: https://www.verizon.com/solutions-and-services/my-verizon-mobile/
    - listitem:
      - link "Lifeline":
        - /url: https://www.verizon.com/support/lifeline/
    - listitem:
      - link "Accessibility":
        - /url: https://www.verizon.com/accessibility/
    - listitem:
      - link "Network support":
        - /url: https://www.verizon.com/support/network/
    - listitem:
      - link "Speed Test":
        - /url: https://www.verizon.com/speedtest/
  - text: About Verizon
  - list "About Verizon menu list":
    - listitem:
      - link "About us":
        - /url: https://www.verizon.com/about
    - listitem:
      - link "Careers":
        - /url: https://mycareer.verizon.com/
    - listitem:
      - link "News":
        - /url: https://www.verizon.com/about/news
    - listitem:
      - link "Responsibility":
        - /url: https://www.verizon.com/about/responsibility
    - listitem:
      - link "Verizon Innovative Learning":
        - /url: https://www.verizon.com/about/responsibility/digital-inclusion/verizon-innovative-learning
    - listitem:
      - link "Articles":
        - /url: https://www.verizon.com/articles/
    - listitem:
      - link "Brochures":
        - /url: https://www.verizon.com/support/collateraldownload/
    - listitem:
      - link "5G overview":
        - /url: https://www.verizon.com/5g/
    - listitem:
      - link "Innovation Labs":
        - /url: https://www.verizon.com/about/our-company/innovation-labs
  - text: Important Consumer Information
  - list "Important Consumer Information menu list":
    - listitem:
      - link "Legal Terms & Notices":
        - /url: https://www.verizon.com/about/terms-conditions/overview
    - listitem:
      - link "Device Payment Terms & Conditions":
        - /url: https://ss7.vzw.com/is/content/VerizonWireless/Device-Payment-Agreement-Template
    - listitem:
      - link "Report a security vulnerability":
        - /url: https://www.verizon.com/solutions-and-services/report-security-vulnerability/
  - text: Follow Verizon
  - list "Follow Verizon menu list":
    - listitem:
      - link "Follow Verizon on Facebook":
        - /url: https://www.facebook.com/verizon
        - text: facebook-official
        - img
    - listitem:
      - link "Follow Verizon on Twitter":
        - /url: https://twitter.com/verizon
        - text: twitter
        - img
    - listitem:
      - link "Follow Verizon on Youtube":
        - /url: https://www.youtube.com/user/verizon
        - text: you-tube
        - img
    - listitem:
      - link "Follow Verizon on Instagram":
        - /url: https://www.instagram.com/verizon/
        - text: instagram
        - img
    - listitem:
      - link "Follow Verizon on TikTok":
        - /url: https://www.tiktok.com/@verizon
        - text: TikTok
        - img
  - text: Verizon Support
  - list "Verizon Support menu list":
    - listitem:
      - link "Verizon Support on Twitter":
        - /url: https://x.com/verizonsupport
        - text: twitter
        - img
  - link "Verizon Home Page":
    - /url: https://www.verizon.com/
  - list "Policies and notices menu list":
    - listitem:
      - link "Privacy Policy":
        - /url: https://www.verizon.com/about/privacy/
    - listitem:
      - link "Your Privacy Choices":
        - /url: https://www.verizon.com/privacy/your-privacy-choices
        - text: Your Privacy Choices
        - img
    - listitem:
      - link "Accessibility":
        - /url: https://www.verizon.com/accessibility/
    - listitem:
      - link "Open Internet":
        - /url: https://www.verizon.com/about/our-company/open-internet
    - listitem:
      - link "Website Terms of Use":
        - /url: https://www.verizon.com/support/website-use-legal/
  - text: © 2026 Verizon
- button "Let's Chat"
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
  15 |     // Verify checkbox is initially unchecked
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
  27 |     //await expect(ContinueButton).toBeDisabled();
  28 | 
  29 |     //Verify button is enabled
  30 |     await expect(ContinueButton).toBeEnabled();
  31 | 
  32 |     //to verify button name/text
  33 |     await expect(ContinueButton).toBeVisible();
  34 |     await expect(ContinueButton).toHaveText('Continue');
  35 | 
  36 | 
  37 |     //To verify "product/devices/accessoriues link url"
  38 |     const devicelink = page.getByRole('link', { name: 'Devices' });
  39 |     
  40 |     //await expect(product link).toBeVisible();
  41 |     await expect(devicelink).toHaveAttribute(
  42 |        'href',
  43 |        'https://www.verizon.com/smartphones/'
  44 |        );
  45 | 
  46 |     const acclink = page.getByRole('link', { name: 'Accessories' });
  47 | 
  48 |     await expect(acclink).toHaveAttribute(
  49 |         'href',
  50 |         'https://www.verizon.com/products/'
  51 |     )
  52 | 
  53 |     //to verify "Terms and conditions" text is visible
  54 |         
  55 |         const termsText = page.getByText('Terms & Conditions').first();
  56 |         await expect(termsText).toBeVisible();
  57 |         await expect(termsText).toHaveText('Terms & Conditions');//toHaveText assertion works only with locator
  58 |         await expect(termsText).toBeEnabled();
  59 |         await termsText.click();//expect is used for assertions not for methods
> 60 |         await expect(page).toHaveURL('https://www.verizon.com/support/my-verizon-terms/');// cannot use termsTextlocator as it is a locator having text
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  61 | 
  62 |          
  63 | }
  64 | );
  65 | 
  66 | 
```