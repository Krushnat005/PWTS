import { test, expect, Locator } from '@playwright/test';

test('verify input box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const textbox: Locator = page.locator("#name")
    await textbox.fill('john canedy');
    const enteredValue: string = await textbox.inputValue();
    expect(enteredValue).toBe('john canedy')
    await page.waitForTimeout(3000)

    const maxLength: string | null = await textbox.getAttribute('maxlength');
    expect(maxLength).toBe('15')
});


test('verify radioBtn', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const maleRadio: Locator = page.locator("#male")
    expect(maleRadio).toBeVisible();
    expect(maleRadio).toBeEnabled();
    
   expect(await maleRadio.isChecked()).toBe(false);

   await maleRadio.check();
   expect(await maleRadio.isChecked()).toBe(true)
});

test('verify checkbox1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
   const sundayCheckbox:Locator = page.getByLabel('sunday');
   await sundayCheckbox.check();
   await expect(sundayCheckbox).toBeChecked();
});

test('verify checkbox2', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
   const checkboxes:Locator = page.locator(".form-check-inline input[type='checkbox']")
   const checkboxCount:number = await checkboxes.count();

   for(let i=0; i<checkboxCount; i++)
   {
    const checkbox = checkboxes.nth(i);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
   
   }



});



// test.only('select checkbox using its label text', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');

//   const dayToSelect:string = 'Tuesday';

//   // Get all checkbox inputs
//   const checkboxes = page.locator('.form-check-inline input[type="checkbox"]');
//   const count = await checkboxes.count();

//   for (let i = 0; i < count; i++) {
//     const checkbox = checkboxes.nth(i);

//     // Get the parent container (assuming label or text is inside parent)
//    const parentText:string = await checkbox.locator('..').locator('.form-check-label').textContent();

//     if (parentText?.trim() === dayToSelect) {  // exact match
//       await checkbox.check();
//       await expect(checkbox).toBeChecked();
//       break; // stop after finding the correct checkbox
//     }
//   }
// });

test('dropdown Count', async ({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/');

const dropdownOptions = page.locator("#country>option")
let count = await dropdownOptions.count();
console.log(count)



})