import { folio } from "@playwright/test"
import { devices } from "playwright";


const fixtures = folio.extend();

//extending code exist here
fixtures.browserOptions.override(async ({ }, run) => {

    await run({
        headless: false,
        slowMo: 2500,
        devtools: true
    });
});

fixtures.contextOptions.override (async ({contextOptions}, run) => {

    await run({
        ...contextOptions,
        ...devices["iPhone 11 Pro Max"]
    });
});
const folios = fixtures.build();
export const it = folios.it;
export const test = folio.test;