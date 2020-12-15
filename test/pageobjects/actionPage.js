const Page = require('./page');


/* class Amazon {
    get AccountsMenu() {
        return $('#nav-link-accountList');
    }


    moveToElement(element) {
         browser.waitUntil(function () {
             element.waitForDisplayed()
         }), 100, "Element not found";
        element.moveTo();
    } 

} */

class SpiceJet {

    get loginEle() {
        return $('#ctl00_HyperLinkLogin');
    }

    get spiceClubMembers() {
        return $('=SpiceClub Members');
    }

    get membersLogin() {
        return $('=Member Login');
    }

    moveToElement(element) {
        browser.waitUntil(
            () => element.isDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'element is not displayed'
            }
        )
        element.moveTo();
    }

    clickElement(element) {
        element.waitForClickble();
        element.click();
    }


    enterSearch(text) {
        $('#target').setValue(text);
    }

    get sourceEle() {
        return $("#draggable");
    }

    get targetEle() {
        return $("#droppable");
    }



}

module.exports = new SpiceJet();