const Page = require('./page');

class HomePageFreshworks extends Page {


    get newlyLaunched() {
        return $('.//div/h1/span');
    }

    get menuList() {
        return $('ul.l-nav-list.nav-main-menu');
    }

    selectSingleMenuOption(index) {
        return this.menuList.$(`li:nth-child(${index})`);
    }



}

module.exports = new HomePageFreshworks();