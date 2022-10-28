

const LoginPage = require('../pageobjects/login.page');
const InformationPage = require('../pageobjects/information.page');
const PortalPage = require('../pageobjects/portal.page');
const GWViewPage = require('../pageobjects/gwview.page');
const NewAptPage = require('../pageobjects/newapt.page');
const AptDetailPage = require('../pageobjects/aptdetails.page');
const DeletePage = require('../pageobjects/askdelete.page');


describe('Verify Creating A Regular Appointment', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('minhthu', '123');
        await expect(browser).toHaveUrl('https://internship-qa-1.s.cybozu-dev.com/');
        await expect(browser).toHaveTitle('Information');
    });
    it('Create a regular appointment SUCCESSFULLY', async () => {
        await InformationPage.accessGaroon();
        await expect(browser).toHaveTitle('Portal');
        await PortalPage.accessScheduler();
        await expect(browser).toHaveTitle('Group week view');
        await GWViewPage.createNewApt();
        await expect(browser).toHaveTitle('New appointment');
        //await browser.pause(3000);
        await NewAptPage.addAppointment();
        await AptDetailPage.deleteAppointment();
        await DeletePage.confirmDelete();
        await expect(browser).toHaveTitle('Group week view');
    });
    it('Create a regular appointment UNSUCCESSFULLY', async () => {
        await InformationPage.accessGaroon();
        await expect(browser).toHaveTitle('Portal');
        await PortalPage.accessScheduler();
        await expect(browser).toHaveTitle('Group week view');
        await GWViewPage.createNewApt();
        await expect(browser).toHaveTitle('New appointment');
        await NewAptPage.createUnsuccessful(); // nhap cac gia tri khong thanh cong
        
    });
    afterEach(async()=>{
        
        await GWViewPage.dropDown();
        await GWViewPage.logOut();
        await expect(browser).toHaveTitle('Login');
    }) 
        
});

