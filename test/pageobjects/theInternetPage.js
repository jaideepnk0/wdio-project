const Page = require('./page');

class TheInternetPage extends Page {

    get checkBoxLink() {
        return $(".//a[text()='Checkboxes']");
    }

    get checkBoxesHeader() {
        return $(".//h3[text()='Checkboxes']");
    }

    /* get checkBoxesHeading() {
        return $('form#checkboxes');
    } */

    getCheckBoxElement(index) {
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickCheckBoxElement(index) {
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }

    get frameEle() {
        return $(".//a[@href='/frames']");
    }


}

module.exports = new TheInternetPage();