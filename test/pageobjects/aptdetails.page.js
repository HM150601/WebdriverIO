const Page = require('./page');

class AptDetailPage extends Page {
    get btnDelete () { return $('//*[@id="main_menu_part"]/div[1]/span[2]/span/a') }

    async deleteAppointment () {
        await this.btnDelete.click();
    }
}

module.exports = new AptDetailPage();
