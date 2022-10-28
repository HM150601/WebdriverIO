class AptDetailPage {
    get btnDelete () { return $('//*[@id="main_menu_part"]/div[1]/span[2]/span/a') }
    get titleApt () { return $('//*[@id="event_list"]/h2') }

    async deleteAppointment () {
        await expect(this.titleApt).toHaveText('Team 1');
        await this.btnDelete.click();
    }
}

module.exports = new AptDetailPage();
