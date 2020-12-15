const LoginPage = require('../pageobjects/login.page');

describe('check Login Functionality', () => {


    it('should set and clear values in input box', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('jaideep');
        LoginPage.inputPassword.setValue('naik');
        browser.pause(3000);
        expect(LoginPage.inputUsername).toHaveValue('jaideep');
        expect(LoginPage.inputPassword).toHaveValue('naik');
        console.log('Entered Username ===> ', LoginPage.inputUsername.getValue());
        //console.log('Entered Password ===> ', LoginPage.inputPassword.getValue());
        /* expect(LoginPage.inputUsername).toHaveValue(LoginPage.inputUsername.getValue());
        expect(LoginPage.inputPassword).toHaveValue(LoginPage.inputPassword.getValue()); */
        LoginPage.inputUsername.clearValue();
        browser.pause(2000);
        LoginPage.inputPassword.clearValue();
    });

    it('should login user successfully', () => {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });
});