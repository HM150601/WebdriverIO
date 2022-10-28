class AskDeletePage {
    get checkAllAttendees () { return $('//*[@id="schedule/delete"]/table/tbody/tr[1]/td/div[2]/span/label') }
    get btnYes () { return $('//*[@id="schedule_button_save"]/a') }

    async confirmDelete () {
        await this.checkAllAttendees.click();
        await this.btnYes.click();
    }

}
module.exports = new AskDeletePage();
