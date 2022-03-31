import { folio as base } from "@playwright/test"
export { expect } from 'folio';

// Declare type for new fixture and parameters
const fixtures = base.extend<{}, {bro: string}, { version: number}>();

// Define browser parameter with description and default value
fixtures.version.initParameter('Browser version', 89);

fixtures.bro.init(async ({ version }, runTest) => {
    if(version > 80 ) {
        console.log("Running latest version of  browser and use new drive ")
    } else {
        console.log("Running older version of browser and us older frive")
    }
    await runTest(`Current version: ${version}`);
}, { scope: `worker` });

const folio = fixtures.build();
export const it = folio.it;