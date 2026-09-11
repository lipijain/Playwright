const {test} = require('@playwright/test');

test('Browser context Playright test case',async ({browser})=>
{
const context =await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.marksandspencer.com/');
});

test('Page Playright test case',async ({page})=>
{
await page.goto('https://www.google.com/');
});