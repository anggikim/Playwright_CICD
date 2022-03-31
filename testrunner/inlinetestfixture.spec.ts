import {it, test} from "./fixture"

it.skip("run the basic test of neowin", async ({context}) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net/");
})


it.skip("should be skipped for the firefox test", (test, {browserName}) => {
    test.skip(browserName === "firefox", "Skip the as it doesn't support isMobile option")
}, async ({page}) => {
    await page.goto("https://www.neowin.net/")
});