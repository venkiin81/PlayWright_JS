const {test, expect} = require('@playwright/test');

test('Login_Test',async function({page}){

   await page.goto("https://www.saucedemo.com/");
   await console.log("login1");

})

test('Login_2_Test',async ({page})=>{

   await page.goto("https://www.saucedemo.com/");
   
   await page.locator("//input[@placeholder='Username']").fill("standard_user")
   await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
   await page.locator("//input[@id='login-button']").click();
   await console.log("login2");
   await page.waitForTimeout(5000);

})

test.only('one_flow',async ({page})=>{

   await page.goto("https://www.saucedemo.com/");//url navigation
   //Login
   await page.locator("//input[@placeholder='Username']").fill("standard_user")
   await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
   await page.locator("//input[@id='login-button']").click();
   //add to cart
   await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();//not one of one xpath
   await page.locator("//a [@class='shopping_cart_link']").click()

   //checkout1
   await page.locator("//button [@id='checkout']").click()
   await page.locator("//input[@placeholder='First Name']").fill("Name1233")
   await page.locator("//input[@placeholder='Last Name']").fill("LastName")
   await page.locator("//input[@placeholder='Zip/Postal Code']").fill("560001")
   await page.locator("//input [@type='submit']").click();

   //validation for final page 
   await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")

   //checkou2
   await page.locator("//button [@id='finish']").click();

   //getting text at last
   let order =await page.locator("//h2").textContent();
   console.log(order)

   //validation for complete checkout
   await expect(page.locator("//span[text()='Checkout: Complete!']")).toBeVisible();

   //end 
   await page.locator("//button [@id='back-to-products']").click()


})

