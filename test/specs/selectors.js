describe('verify demoqa website', function () {

    it('should click on selenium URL', function () {
        driver.url('https://demoqa.com');
        expect(browser).toHaveTitle('ToolsQA');
        const link = $('= selenium-training');

    });

});

