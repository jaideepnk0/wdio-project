const { assert } = require('chai');
const alertsDemo = require('../pageobjects/alerts');


describe("should demo alert pop up handeelling", () => {

    it("Should handle alert prompt", () => {

        browser.url("http://the-internet.herokuapp.com/javascript_alerts");

        alertsDemo.clickOnAlertButton(3);
        const alertText = browser.getAlertText();
        console.log("=========>", alertText);

        //browser.sendAlertText("Hi");
        //browser.pause(2000);

        //browser.acceptAlert();


        browser.dismissAlert();
        browser.pause(2000);
        //expect(alertsDemo.getResultText()).toEqual("You entered: Hi");

        assert.equal("You entered: null", alertsDemo.getResultText());

    });
});