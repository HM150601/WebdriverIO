const Page = require('./page');

class PortalPage extends Page {
    
    get btnScheduler () { return $('//*[@id="appmenu-schedule"]/a') }

    async accessScheduler () {
        await this.btnScheduler.click();
    }

}

module.exports = new PortalPage();
