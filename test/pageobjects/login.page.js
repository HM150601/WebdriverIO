const Page = require('./page');

class LoginPage extends Page {
    get inputUsername () { return $('//*[@id="username-:0-text"]') }
    get inputPassword () { return $('//*[@id="password-:1-text"]') }
    get btnSubmit () { return $('input[type="submit"]') }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
