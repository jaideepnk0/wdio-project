const HomepageFreshworks = require('../pageobjects/homePage.Freshworks');

describe('verify homepage elements on Freshworks', () => {

    it('should verify URL', () => {
        browser.url('https://www.freshworks.com');
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.freshworks.com/');

    });

    it('should verify text for Newly Launched element', () => {

        const newlyLaunchedEle = HomepageFreshworks.newlyLaunched;
        console.log(' text=>>>>', newlyLaunchedEle.getText());
        expect(newlyLaunchedEle.getText()).toEqual("NEWLY LAUNCHED");
    });

    it('should get Text of specific element from menu list using index', () => {

        console.log('==============>>>>>>>>>>>', HomepageFreshworks.selectSingleMenuOption(5).getText());

    });

});