import {test, expect} from '@playwright/test'

test('Upload verification', async ({page}) => {

await page.goto("https://letcode.in/file");
await page.locator('input#resume').setInputFiles('D:/Testdata/file_example_XLS_10.xls')
await expect(page.getByText('file_example_XLS_10.xls')).toBeVisible();
const fileName = await page.locator('#resume').evaluate(
  input => (input as HTMLInputElement).files?.[0]?.name);
expect(fileName).toBe('file_example_XLS_10.xls');

})

test.only('Multiple Upload verification', async ({page}) => {
await page.goto("https://letcode.in/file");
await page.locator('input#resume').setInputFiles(['D:/Testdata/file_example_XLS_10.xls', 'D:/Testdata/file_example_XLS_50.xls'])
const files = await page.locator('#resume').evaluate(
  (input: HTMLInputElement) =>
    Array.from(input.files || []).map(file => file.name)
);
expect(files).toEqual(['file_example_XLS_10.xls', 'file_example_XLS_50.xls'])

})