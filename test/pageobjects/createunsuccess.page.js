const Page = require('./page');
class CreateUnsuccessful extends Page {
    
    get start_month() { return $('//*[@id="start_month"]'); }
    get start_day() { return $('//*[@id="start_day"]'); }
    get start_year() { return $('//*[@id="start_year"]'); }
    get end_month() { return $('//*[@id="end_month"]'); }
    get end_day() { return $('//*[@id="end_day"]'); }
    get end_year() { return $('//*[@id="end_year"]'); }

    get start_hour() { return $('//*[@id="start_hour"]'); }
    get end_hour() { return $('//*[@id="end_hour"]'); }
    get start_minute() { return $('//*[@id="start_minute"]'); }
    get end_minute() { return $('//*[@id="end_minute"]'); }

    get inputSubject() { return $('//*[@id="main_table"]/tbody/tr[2]/td/div/div[2]/input'); }
    get inputFacilities() { return $('//*[@id="selectlist_cITEM_member_facility_7"]'); }
    get btnAddFacilities() { return $('//*[@id="btn_add_cITEM"]'); }
    get btnAddAppointment() { return $('//*[@id="schedule_submit_button"]/a'); }

    async createUnsuccessful () {

        // ngay ket thuc < ngay bat dau
        await this.start_month.getValue();
        await this.start_day.getValue();
        await this.start_year.getValue();
        await this.end_month.getValue();
        await this.end_day.getValue();
        await this.end_year.setValue("2021"); 

        await this.start_hour.selectByAttribute('value', '8'); 
        await this.end_hour.selectByAttribute('value', '9');
        await this.start_minute.selectByAttribute('value', '0');
        await this.end_minute.selectByAttribute('value', '0');

        await this.inputSubject.setValue('888888');

        // await this.inputFacilities.click();
        // await this.btnAddFacilities.click();
        await this.btnAdd.click();

        // khong de gio

        await this.start_month.getValue();
        await this.start_day.getValue();
        await this.start_year.getValue();
        await this.end_month.getValue();
        await this.end_day.getValue();
        await this.end_year.getValue(); 

        await this.start_hour.selectByAttribute('value', ''); 
        await this.end_hour.selectByAttribute('value', '');
        await this.start_minute.selectByAttribute('value', '');
        await this.end_minute.selectByAttribute('value', '');

        await this.inputSubject.setValue('888888');

        // await this.inputFacilities.click();
        // await this.btnAddFacilities.click();
        await this.btnAdd.click();

        // trung phong
        await this.start_month.getValue();
        await this.start_day.getValue();
        await this.start_year.getValue();
        await this.end_month.getValue();
        await this.end_day.getValue();
        await this.end_year.getValue(); 

        await this.start_hour.selectByAttribute('value', '9'); 
        await this.end_hour.selectByAttribute('value', '10');
        await this.start_minute.selectByAttribute('value', '0');
        await this.end_minute.selectByAttribute('value', '0');

        await this.inputSubject.setValue('888888');

        await this.inputFacilities.click();
        await this.btnAddFacilities.click();
        await this.btnAdd.click();

    }
}

module.exports = new CreateUnsuccessful();