class PortalPage {
    
    get btnScheduler () { return $('//*[@id="appmenu-schedule"]/a') }

    async accessScheduler () {
        await this.btnScheduler.waitForDisplayed(5000);
        await this.btnScheduler.click();
    }

}

module.exports = new PortalPage();
