import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { logger, attachLogToTest } from '../utils/logger';

// Use a fallback URL when environment variable is missing to avoid runtime errors
const UPLOAD_URL = process.env.Url_Upload_Herou || 'https://the-internet.herokuapp.com/upload';

test('upload_File', async ({ page }, testInfo) => {

  logger.info('Starting upload_File test');
  await page.goto(UPLOAD_URL);
  await page.pause();
  // upload file
  await page.locator("//input[@id='file-upload']").setInputFiles("C://Users//WELCOME//Desktop//Test//Playwright//testupload.txt");
  await page.locator("//input[@id='file-submit']").click();
  logger.info('file uploaded successfully');
  // assertion
  await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();

  // Attach logs (handled by logger helper)
  await attachLogToTest(testInfo);
});

test('multiple_page', async ({ browser }, testInfo) => {

  logger.info('Starting multiple_page test');
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/');
  await page.pause();

  await page.locator("//a[text()='Multiple Windows']").click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/windows');

  await page.locator("//a[text()='Click Here']").click();
  // not shifted focus on next page
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/windows/new');

  await page.locator("//h3[text()='New Window']").textContent();

  // Attach logs (handled by logger helper)
  await attachLogToTest(testInfo);
});

test('navigations', async ({ page }, testInfo) => {

  logger.info('Starting navigations test');
  await page.goto('https://the-internet.herokuapp.com/');
  await page.pause();
  await page.locator("//a[text()='Multiple Windows']").click();

  await page.goBack();
  await page.goForward();
  await page.reload();

  // Attach logs (handled by logger helper)
  await attachLogToTest(testInfo);
});


test('take_a_screenshot', async ({page})=>{

   await page.goto("https://www.makemytrip.com/");
   await page.pause()
   await page.screenshot({path:'screenshot.png'})
})

test('visual_testing',async ({page})=>{

   await page.goto("https://mssit2.lntsufin.com/buyer/#/")
   expect (await page.screenshot()).toMatchSnapshot('Expected.png')
})

