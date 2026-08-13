import{ test,expect, Locator} from '@playwright/test'
import{Login} from '../Pages/Login';
import{LoginData} from '../Testdata/logindata';//foldername/file name


const login = new Login();
const logindata = new LoginData();

test('Verify user can register an account', async ({ page }) => {
    await login.openEcommerce(page, logindata.url)
    await login.createAccount(page, logindata.data)

    await page.waitForTimeout(5000)
}
);