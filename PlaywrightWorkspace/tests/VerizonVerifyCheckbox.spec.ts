import{test,expect, Locator} from '@playwright/test'
//import {SignIn} from'../Pages/orangehrmSignIn';
import{Login} from'../Pages/Login.ts';
import{LoginData} from '../Testdata/logindata';//foldername/file name



const signIn = new Login();
const logindata = new LoginData();



test('Verify Checkbox Status.', async ({ page, context }) => {
    await signIn.openurl(page, "https://secure.verizon.com/account/register/start")
    const Checkbox = page.locator('input[type="checkbox"]');
     
    // Verify checkbox is initially unchecked
    await expect(Checkbox).not.toBeChecked();
    //TO CHECK IT
    await Checkbox.click();
    //TO VERIFY THE CHECKED CHECKBOX
    await expect(Checkbox).toBeChecked();
  
    //to verify continue button. 
    //created constant locator for continue button
    const ContinueButton = page.getByRole('button', { name: 'Continue' });
    
    // Verify button is initially disabled
    //await expect(ContinueButton).toBeDisabled();

    //Verify button is enabled
    await expect(ContinueButton).toBeEnabled();

    //to verify button name/text
    await expect(ContinueButton).toBeVisible();
    await expect(ContinueButton).toHaveText('Continue');


    //To verify "product/devices/accessoriues link url"
    const devicelink = page.getByRole('link', { name: 'Devices' });
    
    //await expect(product link).toBeVisible();
    await expect(devicelink).toHaveAttribute(
       'href',
       'https://www.verizon.com/smartphones/'
       );

    const acclink = page.getByRole('link', { name: 'Accessories' });

    await expect(acclink).toHaveAttribute(
        'href',
        'https://www.verizon.com/products/'
    )

    //to verify "Terms and conditions" text is visible
        const termsButton = page.getByRole('button', {name: 'Terms & Conditions'});
        await expect(termsButton).toBeVisible();
        await expect(termsButton).toBeEnabled();
        await expect(termsButton).toHaveText('Terms & Conditions');//toHaveText assertion works only with locator
        
        await termsButton.click();//expect is used for assertions not for methods
        const newTab = context.waitForEvent('page');

        const termsPage = await newTab;
        await termsPage.waitForLoadState();

        await expect(termsPage).toHaveURL('https://www.verizon.com/support/my-verizon-terms/');// cannot use termsTextlocator as it is a locator having text
        await page.waitForTimeout(2000);
        console.log(termsPage.url());

        //await termsPage.close();
        await page.bringToFront();
        
        
        //TO VERIFY PRIVACY POLICY BUTTON
        const privacypolicyButton = await page.getByRole('button', {name: 'Privacy Policy.'});
        await expect(privacypolicyButton).toBeVisible();
        await expect(privacypolicyButton).toBeEnabled();
        await expect(privacypolicyButton).toHaveText('Privacy Policy.');//toHaveText assertion works only with locator
        
        await privacypolicyButton.click();//expect is used for assertions not for methods
        const newTab1 = context.waitForEvent('page');

        const privacypolicyPage = await newTab1;
        await privacypolicyPage.waitForLoadState();

        await expect(privacypolicyPage).toHaveURL('https://www.verizon.com/about/privacy/full-privacy-policy');// cannot use termsTextlocator as it is a locator having text
        await page.waitForTimeout(2000);
        console.log(privacypolicyPage.url());

        await privacypolicyPage.close();
        
       // await page.bringToFront(); 
        await context.close();
       // await termsPage.close();

       //getting data from WEB Table dynamically
       signIn.getUserAgeandSalary(page, "sam");
       signIn.getUserAgeandSalary(page, "Cierra");
       signIn.getUserAgeandSalary(page, "Alden");


}
);

