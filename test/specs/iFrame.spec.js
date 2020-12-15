
describe("handle iFrame", () => {

    it("should find element inside a frame and should enter a value", () => {
        browser.url("https://chercher.tech/practice/frames");

        //get window size
        console.log("========>", browser.getWindowSize());

        //enter text in text box in Frame 1
        browser.switchToFrame($('iframe[id="frame1"]'));
        browser.pause(3000);
        $('input[type="text"]').setValue("abc");

        // select a checkbox in Frame 3
        browser.switchToFrame($('iframe[id="frame3"]'));
        browser.pause(2000);
        $('#a').click();

        browser.switchToParentFrame(); //switching back to parent Frame 1
        browser.pause(2000);

        browser.switchToParentFrame(); //switching back to main Page
        browser.pause(2000);

        // Getting a text from main frame for header
        console.log("=========>", $('.card label span').getText());
    });

});