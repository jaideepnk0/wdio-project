class alertsDemo {

    //alert3 = $(`#content >div >ul :nth-child (${index}) button`);

    getalertButtons(index) {
        return $(`ul :nth-child(${index}) button`);
    }

    get result() {
        return $('#result');
    }

    clickOnAlertButton(index) {
        this.getalertButtons(index).waitForDisplayed();
        this.getalertButtons(index).click();
    }


    getResultText() {
        //this.result.waitForDisplayed();
        return this.result.getText();
    }
}

module.exports = new alertsDemo();