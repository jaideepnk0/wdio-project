const TheInternetPage = require('../pageobjects/theInternetPage');

describe.skip('Verify element states', () => {

    it('verify if element is Displayed', () => {
        browser.url('http://the-internet.herokuapp.com/');
        console.log('isDisplayed ======>>', TheInternetPage.checkBoxLink.isDisplayed());
    });

    it('verify if element is Displayed', () => {
        browser.url('http://the-internet.herokuapp.com/');
        console.log('isClickable ======>>', TheInternetPage.checkBoxLink.isClickable());
    });

    it('verify if element is Enabled', () => {
        browser.url('http://the-internet.herokuapp.com/');
        console.log('isEnabled ======>>', TheInternetPage.checkBoxLink.isEnabled());
    });

    it('verify if element is Existing', () => {
        browser.url('http://the-internet.herokuapp.com/');
        console.log('isExisting ======>>', TheInternetPage.checkBoxLink.isExisting());
    });

    it('verify if element is Displayed In ViewPort', () => {
        browser.url('http://the-internet.herokuapp.com/');
        console.log('isDisplayedInViewport ======>>', TheInternetPage.frameEle.isDisplayedInViewport());
    });

});

describe.only('operations on checkboxes', () => {

    it('should click on checbox hyperlink', () => {
        browser.url('http://the-internet.herokuapp.com/');
        console.log('isClicable  ==========>>', TheInternetPage.checkBoxLink.isClickable());
        TheInternetPage.checkBoxLink.click();
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/checkboxes');
    })

    it('should check the state of checkbox1', () => {
        browser.url('http://the-internet.herokuapp.com/checkboxes');
        TheInternetPage.getCheckBoxElement(1).click();
    });

    it('should check the state of checkbox2 and uncheck it if checked by default', () => {
        browser.url('http://the-internet.herokuapp.com/checkboxes');
        console.log('checkbox 1 state before click ===> ', TheInternetPage.getCheckBoxElement(1).isSelected());
        TheInternetPage.clickCheckBoxElement(1);
        browser.pause(3000);
        console.log('checkbox 2 state after click ===> ', TheInternetPage.getCheckBoxElement(1).isSelected());
    });
});