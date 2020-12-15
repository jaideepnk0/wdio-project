describe("should operate on window handels", () => {

    it("should handle windows", () => {
        browser.url("https://www.kotak.com/en.html");

        browser.fullscreenWindow();
        var parentHandle = browser.getWindowHandle();
        console.log("my parent window handle ID is ========>", parentHandle);

        $("=Login").click(); //clicking on Login will open a page in new window
        var newHandle = browser.getWindowHandle();
        console.log("my new window handle ID is ========>", newHandle);
        browser.pause(5000);

        //even though the control is on the new window, we get same window handle ID as pervious one
        //so to get two window handle ID's, use windowHandels method

        var allWindowHandles = browser.getWindowHandles();
        console.log("All handles are **=====>", allWindowHandles);

        // code for switch to parent window

        browser.switchToWindow(parentHandle);
        browser.pause(2000);
    });
});