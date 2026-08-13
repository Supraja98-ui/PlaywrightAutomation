import{ test,expect, Locator} from '@playwright/test'
//import Base from "./Core"
//import{Login} from '../Pages/Login';


//const base = new Base()
//const Login = new login()


//1. USING CSS ID SELECTOR('#')
test('Validating Email & Password fill using ID Seletor', async({page}) => {
    //await page.goto('https://www.facebook.com/')
    //base.openWebsite(page, 'https://www.facebook.com/')
 
    //to fill supraja in  place of emailaddress/phonenumber
   //const Email = page.locator('#_R_1h6kqsqppb6amH1_');//id is dynamic so using label is suggestabel
   // await Email.fill('suprajaperaka1998@gmail.com')
    //base.enterText(page, '#_R_1h6kqsqppb6amH1_', 'suprajaperaka1998@gmail.com')
    //await page.waitForTimeout(5000)

    //to fill password in password field
      //const Password = page.locator('#_R_1hmkqsqppb6amH1_')
      //await expect(Password).toBeVisible()
      //base.enterText(page, '#_R_1hmkqsqppb6amH1_', 'supraja@1998')
    //await page.waitForTimeout(5000)

    //login.fblogin(page, 'suprajaperaka1998@gmail.com', 'supraja@1998')


}
);

// // //2. USING CLASS SELECTOR ('.')
// // test('class Selector', async({page}) => {
// //   await page.goto('https://www.verizon.com/') 
// //     const logo = page.locator('.gnav20-logoWhiteBg').first()
// //     await expect(logo).toBeVisible()
// //     const logoexist = await logo.isVisible()
// //     console.log(logoexist)
// // }
// // );

//3. USING CLASS SELECTOR TO VALIDATE "LOG INTO FACEBOOK"
test('Validate "Log into Facebook" text using class selector' , async({page})=>
{
    await page.goto('https://www.facebook.com/')
    const heading = page.locator('.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.xyejjpt.x15dsfln.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xlh3980.xvmahel.x1ejgnnb.xza2c7i.x1apb90u.x1gbch0d.xzsf02u.x1yc453h.xudqn12.x41vudc')
    const headingExist = await heading.isVisible()
    console.log(headingExist)
});

//USING TEXT SELECTOR TO VALIDATE TEXT IN PAGE
test('Text selector', async({page}) =>{
    await page.goto('https://www.facebook.com/')
    const text = page.locator('text = Explore the things you love')
    const textExist = await text.isEnabled()
    await page.waitForTimeout(5000)
    console.log(textExist)
});

//USING TEXT SELECTOR TO VALIDATE CONTINUE BUTTON IN PAGE
test ('Using Text selector for Login button' , async({page}) =>
{
    await page.goto('https://www.facebook.com/')
    const LoginButton = page.locator('text = Log in').first()
   const LoginButtonExist = await LoginButton.isEnabled()
    console.log(LoginButtonExist)
});

//USING TEXT SELECTOR TO VALIDATE FORGOT PASSWORD 
test('validate Forgetten Password using TEXT Selector', async({page})=>{
    await page.goto('https://www.facebook.com/')
     const ForgottenPassword = page.locator('text = Forgot password?')
    const ForgottenPasswordlink = await ForgottenPassword.isEnabled()
    console.log(ForgottenPasswordlink)
}
);

// //USING CLASS SELECTOT TO VALIDTAE CREATE ACCOUNT
// /*test('validate create account',async({page})=>{
// await page.goto('https://www.facebook.com/')
// const createaccount = page.locator('.x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.x9f619.x1qhmfi1.x12ezzi8.xk7q072.x7uw254.x1xjjfxs.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.x178xt8z.x1lun4ml.xso031l.xpilrb4.xqbgfmv.xbe3n85.x7a1id4.x1d9i5bo.x1xila8y.x1bumbmr.xc8cyl1')
// await expect(createaccount).toBeVisible()
// await page.waitForTimeout(5000)
// await createaccount.click()
// console.log("Create account clicked")
// }
// );*/

//UISNG CSS SELCTOR ID,NAME,TYPE 
test('validate create account using CSS SELECTORS',async({page})=>{
await page.goto('https://www.facebook.com/')
const createaccount = page.locator('.x1ja2u2z.x78zum5.x2lah0s.x1n2onr6.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.x9f619.x1qhmfi1.x12ezzi8.xk7q072.x7uw254.x1xjjfxs.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.x178xt8z.x1lun4ml.xso031l.xpilrb4.xqbgfmv.xbe3n85.x7a1id4.x1d9i5bo.x1xila8y.x1bumbmr.xc8cyl1')
await expect(createaccount).toBeVisible()
await page.waitForTimeout(5000)
await createaccount.click()
console.log("Create account clicked")

//using CSS SELECTORS TO CREATE ACCOUNT FIRST NAME, LAST NAME,
const Firstname = page.locator('text = First name')//using Text selector
await Firstname.fill('Supraja') 
await page.waitForTimeout(5000)
const Lastname = page.locator('text = Last Name')//using Text selector
await Lastname.fill('peraka')
await page.waitForTimeout(5000)
//const email = page.locator('css=input#_R_6ad8p4jikacppb6amH1_')//UISNG CSS ID SELECTOR
const email = page.locator('css=input[id= "_R_6ad8p4jikacppb6amH1_"]')//UISNG CSS ID SELECTOR
await email.fill('suprajaperaka1998@gmail.com')
await page.waitForTimeout(5000)
const password = page.locator('css=input[type="password"]')//UISNG CSS TYPE SELECTOR
await password.fill('supraja@1998')
await page.waitForTimeout(5000)
}
);

// //XPATH 
// test('Validate search using XPATH',async({page})=>{
//     await page.goto('https://playwright.dev/')
// const search = page.locator('xpath=//input[@type = "search"]')
// await expect(search).toBeVisible()
// await search.fill('locators')
// await page.waitForTimeout(5000)

// }
// );

