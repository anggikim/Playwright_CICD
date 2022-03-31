import { folio as base } from "@playwright/test"
export { expect } from 'folio';

type Browsers = {
    chrome:string,
    firefox:string,
    edge:string
}

const fixtures = base.extend<Browsers>();

fixtures.chrome.init(async ({}, run) => {
    await run("C:\\program files\\google\\chrome\\chrome.exe");
});

fixtures.firefox.init( async({}, run) => {
    const browserPath = "C:\\program files\\mozilla\\firefox\\firefox.exe";
    await run(browserPath);
});

fixtures.edge.init( async({}, run) => {
    const browserPath = "C:\\program files\\microsoft\\edge\\edge.exe";
    await run(browserPath);
});

const folio = fixtures.build();
export const it = folio.it;
export const describe = folio.describe;