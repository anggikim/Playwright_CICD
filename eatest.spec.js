import { it, expect } from "@playwright/test";

it("E2E User creation test", async ({ page }) => {
    //Go to http://eaapp.somee.com/
    await page.goto('http://eaapp.somee/', {waitUntil: 'networkidle'});

    // Click text="Login"
    await page.click('text="Login"');
    // assert.equal(page.url(), 'http://eaapp.somee.com/Account/Login);

    //Click input[name="UserName"]
    await page.click('input[name="UserName"]');

    // Fill input[name="UserName"]
    await page.fill('input[name="UserName"]', 'admin');

    // Press Tab
    await page.press('input[name="UserName"]', 'Tab');

    //Fill input[name="Password"]
    await page.fill('input[name="Password"]', 'Password');

     // Click input [type="submit"]
     await page.click("input:text('Log in')");
     // assert.equal(page.url(), 'http://eaapp.somee.com/');

     await page.waitForSelector('text="Employee List"');
     // Click test="Employee List"
     await page.click('text="Employee Lit"');
     // assert.equal(page.url(), 'http://eaapp.somee.com/Employee');

     // Click input[name="searchTeha"]
     await page.click('input[name="searchTeha"]');

     //Click text="Create New"
     await page.click('text="Create New"');
     // assert.equal(page.url(), 'http://eaapp.somee.com/Employee/create);

     //Click input[name="Name"]
     await page.click('input[name="Name"');

     //Fill input[name="Name"]
     await page.fill('input[name="Name"]', 'admin');

     //Press Tab
     await page.press('input[name="Name"]', 'Tab');

     //Fill input[name="Salary"]
     await page.fill('input[name="Salary"]', '123');

     //Press Tab
     await page.press('input[name="Salary"]', 'Tab');

     //Fill input[name="DurationWorked"]
     await page.fill('input[name="DurationWorked"]', '222');

     //Click input[name="Grade"]
     await page.click('input[name="Grade"]');

     //Fill input[name="Grade"]
     await page.fill('input[name="Grade"]');

     //Click input[name="Email"]
     await page.click('input[name="Email"]');

      //Fill input[name="Email"]
      await page.fill('input[name="Email"]', 'auto@auto.com');

      //Click input[type="submit"]
      await page.click('input[type="submit"]');
      //assert.equal(page.url(), 'http://eaapp.somee.com/Employee/index/102');

      //Click //tr[9]/td[8]/a[normalize-space(.)='Delete']
      await page.click('//tr[9]/td[8]/a[normalize-space(.)=\'Delete\']');
      // assert.equal(page.url(), 'http://eaapp.somee.com/Employee/Delete/102');

      //Click input[type="submit"]
      await page.click('input[type="submit"]');
      //assert.equal(page.url(), 'http://eaapp.somee.com/Employee/index/102');

      // Click text="Log off"
      await Promise.all([
          page.waitForNavigation(/*{ url: 'http://eaapp.somee.com/' }*/),
          page.click('text="Log off"')
      ]);

      // Close page
      await page.close();
});