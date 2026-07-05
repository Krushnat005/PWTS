
import { test, expect, Locator } from '@playwright/test';


test('Normal Alert', async ({page}) =>{
await page.goto('https://letcode.in/alert')
page.on('dialog', async (dialog) => {
  console.log(dialog.message()); 
  await dialog.accept(); // Clicks OK 
});
await page.getByRole('button', {name : 'Simple Alert'}).click();
})


test('multiple alerts in one test', async ({page}) =>{
await page.goto('https://letcode.in/alert')
const dialogPromise = page.waitForEvent('dialog');
await page.getByRole('button', {name : 'Simple Alert'}).click();
const dialog = await dialogPromise
await dialog.accept();
})

test.only('multiple alerts in one test with promise', async ({page}) =>{

await page.goto('https://letcode.in/alert')

const[dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    await page.getByRole('button', {name : 'Simple Alert'}).click()
])
console.log(dialog.message());
await dialog.accept();

}
)