describe("check ", () => {

    it("selects a date", () => {

        browser.url("https://www.phptravels.net/home");
        $(".datepicker--cells-days :nth-child(6)").click();
    })
})