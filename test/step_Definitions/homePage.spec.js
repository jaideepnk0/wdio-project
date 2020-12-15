const { Given, When, Then } = require('cucumber');

Given(/^user is on home page$/, () => {
    browser.url("https://abstracta.us/");
});

When(/^user should see Abtracta Logo$/, () => {
    $(".logo-menu").isDisplayed();
});

Then(/^user clicks on it$/, () => {
    $(".logo-menu").click();
});