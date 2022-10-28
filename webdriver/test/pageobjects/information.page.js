class InformationPage {
   
    get btnGaroon () { return $('/html/body/div[5]/div/div[1]/div/a[2]') }

    async accessGaroon () {
        await this.btnGaroon.click();
    }

}

module.exports = new InformationPage();
