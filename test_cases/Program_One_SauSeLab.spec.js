import { test, expect } from '@playwright/test';
import 'dotenv/config';

test('Login_Test',async function({page}){

   await page.goto(process.env.Url);
   await console.log("login1");

})

test('Login_2_Test',async ({page})=>{

   await page.goto(process.env.Url);//url navigation
   
   await page.locator("//input[@placeholder='Username']").fill(process.env.User_Name)
   await page.locator("//input[@placeholder='Password']").fill(process.env.Password)
   await page.locator("//input[@id='login-button']").click();
   await console.log("login2");
   await page.waitForTimeout(Number(process.env.CustomTimeout));

})

test('one_flow',async ({page})=>{

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

test("Fetching_all_products",async ({page})=>{

   //URL navigation
   await page.goto("https://www.saucedemo.com/");//url navigation
   //Login
   await page.locator("//input[@placeholder='Username']").fill("standard_user")
   await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
   await page.locator("//input[@id='login-button']").click();
   //Login asssertion
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
   //tittle assertion
   await expect(page).toHaveTitle("Swag Labs")
   //fetch all itms name 
   const items = await page.locator("//div[@class='inventory_item_name ']").allTextContents();
   console.log("the items listed are : "+items)
   //fetch all prices
   const price = await page.locator("//div[@class='inventory_item_description']//div[@class='pricebar']//div[1]").allTextContents();
   console.log("all the prices: "+price)

   // adding second product to cart 
   await page.locator("//div[@class='inventory_list']//div[@class='inventory_item'][2]//button").click();
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

test('upload_a_file',async({page})=>{

   await page.goto(process.env.Url_Upload_Herou)
   page.pause()
   await page.locator("//input[@id='file-upload']").setInputFiles("C:/Users/WELCOME/Desktop/Test/testupload.txt")

   page.pause()
   await page.locator("//input[@id='file-submit']").click();

   await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible()

})


