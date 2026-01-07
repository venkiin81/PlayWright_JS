import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginsignup'
import {InventoryPage} from '../Pages/Inventory'
import { CartPage } from '../Pages/YourCart'
import { CheckoutStep1Page } from '../Pages/CheckoutStepone'
import { CheckoutOverviewPage } from '../Pages/ChecoutOverview'
import { CheckOutDonePage } from '../Pages/ChecouComplete'

import { logger } from '../utils/logger'
import 'dotenv/config'


test('Loginusing_validUsername', async ({page})=>{

    const lp = new LoginPage(page)

    await lp.goto() 
    logger.info("navigated to screen")
    await lp.LoginUSer('standard_user','secret_sauce')
    
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

})

test('addingProducttocart',async ({page})=>{

    const lp = new LoginPage(page)
    const ip = new InventoryPage(page)

    //goto
    await lp.goto()

    //login
    await lp.LoginUSer('standard_user','secret_sauce')

    //adding to cart
    await ip.addingProduct()

    await page.pause()

    //click on cart icon 
    await ip.gointoCart()

})

test ('e2eflow', async ({page})=>{

    const lp = new LoginPage(page)
    const ip = new InventoryPage(page)
    const cp = new CartPage(page)
    const csp = new CheckoutStep1Page(page)
    const cop = new CheckoutOverviewPage(page)
    const cod = new CheckOutDonePage(page)

    await lp.goto()
    await lp.LoginUSer(process.env.User_Name, process.env.Password)
    await ip.addingProduct()
    await ip.gointoCart()
    await cp.checkoutStep()
    await csp.checkoutOneInputs('venkatesh','prasad','560091')
    await cop.checotStep2proceed()
    await page.pause()
    await expect(cod.completCheckoutText).toBeVisible()
    await page.pause()
    await cod.BackToHome()
    
})

test ('Using_select_option',async ({page})=>{

    const lp = new LoginPage(page)
    const ip = new InventoryPage(page)

    await lp.goto()
    await lp.LoginUSer('standard_user','secret_sauce')

    await page.pause()
    await ip.sorting(2)


})