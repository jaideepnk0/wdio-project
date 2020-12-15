const { Given, When, Then } = require("cucumber");
const { Before, After, BeforeAll, AfterAll } = require("cucumber");
//const { addFeature } = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page');

Before(() => {
    browser.url('/');
    //browser.maximizeWindow();
    browser.setWindowSize(300, 400);
})

Given('User login to the website', () => {
    //HomePage.login();
    $("button[type='button']").scrollIntoView();
    browser.saveScreenshot('./features/myTest.png');

})

When('User is on the home page', () => {
    browser.pause(5000);
    const result = browser.getUrlAndTitle();
    expect(result.title).toContain('OrangeHRM');
    expect(result.url).toContain('/dashboard');
});

Then('User see a pie chart', () => {
    HomePage.pieChartElement.isDisplayed();
    expect(HomePage.pieChartTitle.getText()).toEqual('Employee Distribution by Subunit');
});

Given('I am on the home page', () => {
    expect(browser.getUrl()).toContain('/dashboard');
})

Then('I see Leave chart', () => {
    HomePage.leaveChartTitle.isDisplayed();
    expect(HomePage.leaveChartTitle.getText()).toEqual('Leave Taken from January by Subunit');
});

Given('User navigates on the home page', () => {
    browser.pause(5000);
    HomePage.pieChartElement.isDisplayed();
})

When('User clicks on Admin tab', () => {
    //HomePage.adminMenu.click();
    browser.checkAndClick(HomePage.adminMenu);
})

Then('User clicks on User Roles menu', () => {
    browser.checkAndClick(HomePage.userMgmtMenu);
    //HomePage.userMgmtMenu.waitForDisplayed
    browser.checkAndClick(HomePage.userRolesMenuOption);
})

Then('User naviagtes on User Roles page', () => {
    const result = browser.getUrlAndTitle();
    expect(result.url).toContain('admin/user_roles');
})

