import { it, expect } from "@playwright/test"

it("EA Demo site login", async ({ page }) => {
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://executeautomation.com/demosite/Login.html");

    await page.screenshot({path: `ea-${Date.now}.png`});

    await browser.close();

})();