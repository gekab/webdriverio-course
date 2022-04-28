

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputLogin () {
        return $('[id="login_field"]');
    }
    get inputPassword () {
        return $('[id="password"]');
    }
    
    get buttonCommit () {
        return $('[name="commit"]');
    }

    get linkForgotPassword () {
        return $('[class="label-link position-absolute top-0 right-0"]');
    }

    async clicklinkForgotPassword () {
        await this.linkForgotPassword.click();
    }

    async clickCommit () {
        await this.buttonCommit.click();
    }

    async openLoginPage () {
        await browser.url('https://github.com');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputLogin.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickCommit();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index.php');
    }
}

module.exports = new SigninPage();
