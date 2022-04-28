

const Page = require('./page');



class MainPage extends Page {

    // Username
    get inputUsername () {
        return $('input[name="user[login]"]');
    }

    // Email address
    get inputEmail () {
        return $('input[name="user[email]"');
    }

    // Password
    get inputPassword () {
        return $('input[name="user[password]"');
    }

    get pageMain () {
        return $('[alt="WebdriverIO"]');
    }

    get pageSignIn () {
        return $('[href="/login"]');
    }

    //
    get profileOverlay () {
        return $('[class="Header-item position-relative mr-0 d-none d-md-flex"]');
    }

    get profileMainPage () {
        return $('[class="header-nav-current-user css-truncate"] a[href="/evgenybondar"]');
    }

    get profileNickNameMainPage () {
        return $('[class="p-nickname vcard-username d-block"]');
    }

    get buttonContactSales () {
        return $('[class="btn-mktg mr-2 mb-2 width-full width-sm-auto btn-muted-mktg"]');
    }

    get linkMakeYourContribution () {
        return $('[class="h1-mktg color-fg-default mb-2 mb-sm-3"]');
    }

    // HeaderMenu Product, Explore, Pricing
    get linkHeaderMenuProduct () {
        return $('//summary[contains(text(),"Product")]');
    }

    get linkHeaderMenuExplore () {
        return $('//summary[contains(text(),"Explore")]');
    }

    get linkHeaderMenuPricing () {
        return $('//summary[contains(text(),"Pricing")]');
    }

    //sub item Mobile
    get linkHeaderMenuProductMobile () {
        return $('//a[contains(text(),"Mobile") and @class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"]');
    }

    //sub item Topic
    get linkHeaderMenuExploreTopic () {
        return $('//a[contains(text(),"Topic") and @class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"]');
    }

    //sub item Contact Sales
    get linkHeaderMenuPricingContactSales () {
        return $('//a[contains(text(),"Contact Sales") and @class="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"]');
    }

    ////sub item Plans
    get linkHeaderMenuPricingPlans () {
        return $('//a[contains(text(),"Plans") and @class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"]');
    }

    //Search GitHub
    get inputSearchGitHub () {
        return $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]');
    }

    //Search GitHub All global
    get inputSearchAllGitHub () {
        return $('[class="js-jump-to-badge-search-text-global"');
    }

    // Sign up 
    get linkSignUpMainPage () {
        return $('[class="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block btn-signup-mktg"]');
    }

    //start-trial-button
    get buttonStartTrial () {
        return $('[class="btn-mktg mb-3 mb-sm-0 mr-sm-2 btn-muted-mktg"]');
    }

    //Careers FooterMainPage 
    get linkCareersFooterMainPage () {
        return $('[class="d-flex flex-wrap py-5 mb-5"] div:nth-of-type(5) li:nth-of-type(3) a');
    }
    
    // Click Careers FooterMainPage
    async clickLinkCareersFooterMainPage () {
        await this.linkCareersFooterMainPage.click();
    }

    // Click start-trial-button
    async clickButtonStartTrial () {
        await this.buttonStartTrial.click();
    }

    // Click Search GitHub All global
    async clickInputSearchAllGitHub () {
        await this.inputSearchAllGitHub.click();
    }

    // Click linkHeaderMenuExploreTopic
    async clickLinkHeaderMenuExploreTopic () {
        await this.linkHeaderMenuExploreTopic.click();
    }

    // Click Sign up 
    async clickLinkSignUpMainPage () {
        await this.linkSignUpMainPage.click();
    }
    
    // Click Plans
    async clickLinkHeaderMenuPricingPlans () {
        await this.linkHeaderMenuPricingPlans.click();
    }

    // HeaderMenu Product, Explore, Pricing
    async moveToLinkHeaderMenuProduct () {
        await this.linkHeaderMenuProduct.moveTo();
    }

    async moveToLinkHeaderMenuExplore () {
        await this.linkHeaderMenuExplore.moveTo();
    }

    async moveToLinkHeaderMenuPricing () {
        await this.linkHeaderMenuPricing.moveTo();
    }

    //Search GitHub
    async setValueInputSearchGitHub () {
        await this.inputSearchGitHub.setValue('a');
    }

    async selectorMoveTo (selecto) {
        await selecto.moveTo();
    }

    async isDisplayedLinkHeaderMenu (selecto) {
        console.log('\"' + await selecto.getText() + '\"' + ' isDisplayed: ' + await selecto.isDisplayed());
    }

    async clickMain () {
        await this.pageMain.click();
    }

    async clickSignIn () {
        await this.pageSignIn.click();
    }

    async clickProfileOverlay () {
        await this.profileOverlay.click();
    }

    async clickProfileMainPage () {
        await this.profileMainPage.click();
    }

    async profileNickNameMainPageIsDisplayed () {
        return await this.profileNickNameMainPage.isDisplayed();
    }
    async profileGetUrlGetTitle () {
        return 'Current URL: ' + await browser.getUrl() + '. Title Page: ' + await browser.getTitle()
    }

    async clickButtonContactSales () {
        await this.buttonContactSales.click();
    }

    async buttonContactSalesIsDisplayedInViewport () {
        return await this.buttonContactSales.isDisplayedInViewport();
    }

    async selectorIsDisplayed (selectorIs) {
         console.log(await selectorIs.getText() +  ' Selector Is Displayed: ' + await selectorIs.isDisplayed());
         return await selectorIs.isDisplayed();
    }

    // Verify your account
    async verifyIframe() {
        let frame1 = await $("//iframe[@title='Please verify by completing this captcha.']");

        await browser.switchToFrame(frame1);

        await browser.waitUntil(async function () {
            return await $("//iframe[@id='fc-iframe-wrap']").isEnabled()
        }, {
            timeout: 5000,
            timeoutMsg: 'frame2 is not Enabled'
        });

        let frame2 = await $("//iframe[@id='fc-iframe-wrap']");
        await browser.switchToFrame(frame2);

        await browser.waitUntil(async function () {
            return await $("//iframe[@id='CaptchaFrame']").isEnabled()
        }, {
            timeout: 5000,
            timeoutMsg: 'frame3 is not Enabled'
        });
        let frame3 = await $("//iframe[@id='CaptchaFrame']");

        await browser.switchToFrame(frame3);
        await browser.pause(3000);

        await browser.waitUntil(async function () {
            return await $('[id="home_children_button"]').isEnabled()
        }, {
            timeout: 5000,
            timeoutMsg: 'buttonVirify is not Enabled'
        });

        
        let buttonVirify = await $('[id="home_children_button"]');
        await buttonVirify.click();
        await browser.pause(5000);
    }

    async setValueInputUsername (username) {
        return await this.inputUsername.setValue(username);
   }
   
    async setValueInputEmail (email) {
        return await this.inputEmail.setValue(email);
    }

    async setValuePassword (password) {
        return await this.inputPassword.setValue(password);
    }

    async login (username, email, password) {
        await this.setValueInputUsername(username)
        await this.setValueInputEmail(email);
        await this.setValuePassword(password);
    }

    async githubWaitUntil (selector) {
        await browser.waitUntil(async function () {
                return await selector.isDisplayed()
            }, {
                timeout: 5000,
                timeoutMsg: await selector + ' is not Enabled'
            });
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new MainPage();
