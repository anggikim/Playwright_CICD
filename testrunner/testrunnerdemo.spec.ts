import {it,describe,expect} from "@playwright/test"


it("first test for simple demo", () => {
    console.log("hello test")
})

it("first test for to navigate a site demo", async({context}) => {
    var page = await context.newPage();
    await page.goto("http://www.neowin.net");
})