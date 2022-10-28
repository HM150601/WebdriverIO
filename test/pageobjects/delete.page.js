const Page = require('./page');

class DeletePage extends Page {
    get btnYes () { return $('//*[@id="schedule_button_save"]/a') }

    async confirmDelete () {
        await this.btnYes.click();
    }

}

module.exports = new DeletePage();
