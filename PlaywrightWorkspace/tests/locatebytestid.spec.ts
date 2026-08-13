import{test,expect} from '@playwright/test'
test('Test using test ID', async({page}) => {
    await page.goto('https://www.facebook.com/')
    const email = page.locator('[data-testid="email"]')
    await email.fill('suprajaperaka1998@gmail.com')
})

// using getByTestID
test('Test using getByTestID', async({page}) => {
    await page.goto('https://www.facebook.com/')
    await page.getByTestId('email').fill('suprajaperaka1998@gmail.com')
    await page.waitForTimeout(5000)
    await page.getByTestId('password').fill('supraja@1998')
    await page.waitForTimeout(5000)
    await page.getByTestId('login').click()
})