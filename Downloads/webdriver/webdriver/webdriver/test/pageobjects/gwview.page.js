class GWViewPage {

    get btnNew () { return $('//*[@id="smart_main_menu_part"]/span[1]/a') }
    get btnUserName () { return $('#cloudHeader-userName-grn') }
    get btnLogOut () { return $('#com-header-logout-link') }
    
    async createNewApt () {
        await this.btnNew.click();
    }

    async dropDown () {
        await this.btnUserName.click();
    }

    async logOut () {
        await this.btnLogOut.click();
    }
}

module.exports = new GWViewPage();
