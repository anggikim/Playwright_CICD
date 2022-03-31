import {it,expect} from "./fixture"


it("getting the browser path", ({chrome, firefox}) => {
    console.log(`${chrome} .. ${firefox}`);
    expect(`${chrome}`).toBe('C:\\program files\\google\\chrome\\chrome.exe');
});