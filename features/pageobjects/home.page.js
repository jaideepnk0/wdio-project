class HomePage {

    get documentList() {
        return $('#documentList li');
    }

    get pieChartElement() {
        return $('#div_ohrmReportVisualizer_Display_emp_distribution');
    }

    get newsItemsList() {
        return $('#newsOnDashboard ul li');
    }

    get pieChartTitle() {
        return $('//*[@id="panel_resizable_0_4"]/div[1]');
    }

    get leaveChartTitle() {
        return $('//*[@id="panel_resizable_0_5"]/div[1]');
    }

    get adminMenu() {
        return $('#menu_admin_viewAdminModule');
    }

    get userMgmtMenu() {
        return $('#menu_admin_UserManagement');
    }

    get userRolesMenuOption() {
        return $('#menu_admin_viewUserRoles');
    }

    get loginButton() {
        return $("input[name='Submit']");
    }

    login() {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

}

module.exports = new HomePage();