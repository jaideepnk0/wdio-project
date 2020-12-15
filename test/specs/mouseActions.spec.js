
const spiceJet = require('../pageobjects/actionPage');

describe.skip("Verify spiceJet Login functionality", () => {

    it("should hover mouse on Login/SignUp link on Homepage", () => {
        browser.url('https://www.spicejet.com/');
        browser.maximizeWindow();
        // amazon.moveToElement(amazon.AccountsMenu);
        // browser.pause(5000);
        spiceJet.moveToElement(spiceJet.loginEle);
        //browser.pause(5000);
        //browser.setTimeout(page)
        //browser.waitUntil(() => browser.getTimeouts()
        //)
        //browser.pause(10000);
        //spiceJet.loginEle
        //browser.pause(5000);

        // spiceJet.moveToElement(spiceJet.spiceClubMembers);
        // spiceJet.clickElement(spiceJet.membersLogin);

    })
})

describe.skip("check send keys operations", () => {
    it("should pass the Tab key", () => {
        browser.url('http://the-internet.herokuapp.com/key_presses');
        $('#target').click();
        //spiceJet.enterSearch("Tab");
        browser.keys('F1');
        browser.pause(3000);
        expect($("#result")).toHaveText("You entered: F1");

    });
});

describe.skip("drag and drop feature text", () => {
    it("perform drag and drop operation on target and source elements", () => {
        browser.url('https://jqueryui.com/resources/demos/droppable/default.html');
        spiceJet.sourceEle.waitForDisplayed();
        spiceJet.sourceEle.dragAndDrop(spiceJet.targetEle);
        browser.pause(5000);
    });
});

describe("Check drop down operations", () => {

    it("Should select element by visible text", () => {

        browser.url("https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504238004%7Ce%7Cfacebook%20login%7C&placement=&creative=318504238004&keyword=facebook%20login&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066388443%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409285535%26loc_physical_ms%3D9062091%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAnvj9BRA4EiwAuUMDf1GzdIjtv9YNZ-rlU22uIo8y72tI7dq7ThzMAkGpPAUS0W6G2uoJQBoCPEsQAvD_BwE");

        $("#day").selectByIndex("3");
        console.log("value is ===>", $("#day").getValue());
        //console.log("attribute is ===>", $("#day").getAttribute("value"));
        //expect($("#day").getValue()).toHaveValue("5");
    })
})