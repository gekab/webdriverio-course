

const Page = require('./page');
const mainPage = require('./main.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[id="email"]');
    }

    get inputPassword () {
        return $('[id="password"]');
    }

    get inputLogin () {
        return $('[id="login"]');
    }
    
    get inputOpt_in () {
        return $('[id="opt_in"]');
    }
    get btnSubmit2 () {
        return $('[class="position-relative js-octocaptcha-parent"] div:nth-child(2) div:nth-child(2) button[class*="js-continue-button"]');
    }

    get btnSubmit3 () {
        return $('[class="position-relative js-octocaptcha-parent"] div:nth-child(3) div:nth-child(2) button[class*="js-continue-button"]');
    }

    get btnSubmit4 () {
        return $('[class="position-relative js-octocaptcha-parent"] div:nth-child(4) div:nth-child(2) button[class*="js-continue-button"]');
    }
    get btnSubmit5 () {
        return $('[class="position-relative js-octocaptcha-parent"] div:nth-child(5) div:nth-child(2) button[class*="js-continue-button"]');
    }

    
    get lableVerify () {
        return $('//*[contains(text(),"Verify your account")]');
    }

    async labelVerufyIsDisplayed () {
        return await this.lableVerify.isDisplayed();
    }

    async signup (username, password, newlogin, optionin) {
        await this.inputUsername.setValue(username);
        await mainPage.githubWaitUntil(this.btnSubmit2);
        await browser.pause(1000)
        await this.btnSubmit2.click();
        await this.inputPassword.setValue(password);
        await mainPage.githubWaitUntil(this.btnSubmit3);
        await browser.pause(1000)
        await this.btnSubmit3.click();
        await this.inputLogin.setValue(newlogin);
        await mainPage.githubWaitUntil(this.btnSubmit4);
        await browser.pause(1000)
        await this.btnSubmit4.click();
        await this.inputOpt_in.setValue(optionin);
        await mainPage.githubWaitUntil(this.btnSubmit5);
        await browser.pause(1000)
        await this.btnSubmit5.click();
        await browser.pause(3000);
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index.php');
    }
}

module.exports = new SignupPage();
