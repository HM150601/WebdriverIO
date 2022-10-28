const LoginPage = require('../pageobjects/login.page');
const InformationPage = require('../pageobjects/information.page');
const PortalPage = require('../pageobjects/portal.page');
const GWViewPage = require('../pageobjects/gwview.page');
const NewAptPage = require('../pageobjects/newapt.page');
const AptDetailPage = require('../pageobjects/aptdetails.page');
const DeletePage = require('../pageobjects/askdelete.page');
const CreateUnsuccessfull = require('../pageobjects/createunsuccessful.page');

describe('Scheduler', () => {

    before(async () => {
        await LoginPage.open();
        await LoginPage.login('minhthu', '123');
        await expect(browser).toHaveTitle('Information');
    });
    it('Create a regular appointment SUCCESSFULLY', async () => {
        await InformationPage.accessGaroon();
        await expect(browser).toHaveTitle('Portal');
        await PortalPage.accessScheduler();
        await expect(browser).toHaveTitle('Group week view');
        await GWViewPage.createNewApt();
        await expect(browser).toHaveTitle('New appointment');
        await NewAptPage.addAppointment();
    });
    it('Create a regular appointment UNSUCCESSFULLY', async () => {
        await GWViewPage.createNewApt();
        await CreateUnsuccessful.createUnsuccessful();
    });
    after(async()=>{
        await PortalPage.accessScheduler();
        

        await AptDetailPage.deleteAppointment();
        await DeletePage.confirmDelete();
        await expect(browser).toHaveTitle('Group week view');
        await GWViewPage.dropDown();
        await GWViewPage.logOut();
        await expect(browser).toHaveTitle('Login');
    }) 
        
});