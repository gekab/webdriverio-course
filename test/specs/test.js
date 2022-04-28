
const signupPage = require('../pageobjects/signup.page');
const loginPage = require('../pageobjects/login.page');
const modulPage = require('../pageobjects/commons.page.js');
const mainPage = require('../pageobjects/main.page');
const contactPage = require('../pageobjects/contact.page');
const pricingPage = require('../pageobjects/pricing.page');
const topicsPage = require('../pageobjects/topics.page');
const trialPage = require('../pageobjects/trial.page');
const careersPage = require('../pageobjects/careers.page');
const enterprisePlanPage = require('../pageobjects/enterprise_plan.page');
const passwordResetPage = require('../pageobjects/password_reset.page');
const username = modulPage.createLogin();
const email = modulPage.createEmail();
const password = modulPage.createPassword();


describe('Sign Up Test #1', () => {
    it('should open page github.com - Test #1', async () => {
        await browser.url('https://github.com/signup');
        await signupPage.signup(email, password, username, 'y');
        console.log('Label Verify is Displayed: ' + await signupPage.lableVerify.isDisplayed());
        await browser.pause(3000);
    });

    it('Contact Sales - Test #2', async () => {
        const company = modulPage.createPassword();
        const client = email.split('\@')[0];
        await mainPage.openPage('https://github.com/');
        await mainPage.linkMakeYourContribution.scrollIntoView();
        console.log('buttonContactSales Is Displayed In Viewport: ' + await mainPage.buttonContactSalesIsDisplayedInViewport());
        await mainPage.clickButtonContactSales();
        await contactPage.sendLetterToSaleTeam(client, company, email, '+380991112233', 'Hello!! It\'s me:)');
        await mainPage.verifyIframe();
        await browser.pause(2000);

    });

    it('Sign In - Test #3', async () => {
        const login = 'your@email.com';
        const password = 'yourpassword';
        await loginPage.openLoginPage();
        await mainPage.clickSignIn();
        await loginPage.login(login, password);
        await mainPage.clickProfileOverlay();
        await mainPage.clickProfileMainPage();
        console.log('Profile NickName Main Page Is Displayed: ' + await mainPage.profileNickNameMainPageIsDisplayed());
        console.log(await mainPage.profileGetUrlGetTitle());
    });

    it('Sign out - Test #3.1', async () => {

        await mainPage.clickProfileOverlay();
        await $('[class="dropdown-item dropdown-signout"]').click();
    });

    it('Reset your password - Negativ Test #4.1', async () => {
        await mainPage.openPage('https://github.com/')
        await mainPage.clickSignIn();
        await loginPage.clicklinkForgotPassword();
        await passwordResetPage.setValueInputEmail();
        await mainPage.verifyIframe();
    });

    it('Reset your password - Negativ Test #4.2', async () => {
        await mainPage.openPage('https://github.com/')
        await mainPage.clickSignIn();
        await loginPage.clicklinkForgotPassword();
        await passwordResetPage.setEmptyDataInputEmail();
        await mainPage.verifyIframe();
    });

    it('Reset your password - Pozitiv Test #4.3', async () => {
        await mainPage.openPage('https://github.com/')
        await mainPage.clickSignIn();
        await loginPage.clicklinkForgotPassword();
        await passwordResetPage.setValidDataInputEmail('your@email.net');
        await mainPage.verifyIframe();
    });

    it('Mouse Hover - Pozitiv Test #5', async () => {
        await mainPage.openPage('https://github.com/')
        //Mouse Hover - Product
        await mainPage.selectorIsDisplayed(await mainPage.linkHeaderMenuProduct)
        await mainPage.moveToLinkHeaderMenuProduct();
        await browser.pause(2000);
        await mainPage.selectorIsDisplayed(await mainPage.linkHeaderMenuProductMobile)
        await mainPage.selectorMoveTo(await mainPage.linkHeaderMenuProductMobile);
        await browser.pause(2000);
        //Mouse Hover - Explore
        await mainPage.selectorIsDisplayed(await mainPage.linkHeaderMenuExplore)
        await mainPage.moveToLinkHeaderMenuExplore()
        await browser.pause(2000);
        await mainPage.selectorIsDisplayed(await mainPage.linkHeaderMenuExploreTopic)
        await mainPage.selectorMoveTo(await mainPage.linkHeaderMenuExploreTopic);
        await browser.pause(2000);
        //Mouse Hover - Pricing
        await mainPage.selectorIsDisplayed(await mainPage.linkHeaderMenuPricing)
        await mainPage.moveToLinkHeaderMenuPricing();
        await browser.pause(2000);
        await mainPage.selectorIsDisplayed(await mainPage.linkHeaderMenuPricingContactSales)
        await mainPage.selectorMoveTo(await mainPage.linkHeaderMenuPricingContactSales);
        await browser.pause(2000);
        //не могу понять, почему навод мышкой срабатывает через 1. Тоесть, все елменты Product, Explore, Pricing активны.
        //если делать навод по сценарию: 
        //Product(меню раскроется), Pricing(меню не раскроется), Explore(меню раскроется), Product(меню не раскроется), Pricing(меню раскроется),

    });

    it('Select Free Plan - Test #6', async () => {
        //await mainPage.openPage('https://github.com/')
        await mainPage.moveToLinkHeaderMenuPricing();
        await mainPage.clickLinkHeaderMenuPricingPlans();
        await pricingPage.clickLinkJoinForFreePricingPage();
        await browser.pause(2000);
        await mainPage.login(username, email, password);
        await browser.pause(3000);
        //await mainPage.verifyIframe();
        
    });

    it('Check Topics isDisplayed  - Test #7', async () => {
        await mainPage.openPage('https://github.com/')
        await mainPage.githubWaitUntil(await mainPage.linkHeaderMenuExplore);
        await mainPage.moveToLinkHeaderMenuExplore();
        await mainPage.clickLinkHeaderMenuExploreTopic();
        console.log('H1 "Topics" isDisplayed: ' + await topicsPage.isDisplayedH1Topics());
        await browser.pause(3000)
    });

    it('Find text webdriverio - Test #8', async () => {
        let typeScript = $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
        let firstLinkSearchResults  = $('[class="repo-list"] li:nth-of-type(1) [class="f4 text-normal"] a:nth-of-type(1)')
        await mainPage.openPage('https://github.com/');
        await mainPage.inputSearchGitHub.setValue('webdriverio');
        await mainPage.clickInputSearchAllGitHub()
        await typeScript.click();
        await firstLinkSearchResults.click();
        let webriverString = 'webdriverio'
        let url = await browser.getUrl()
        res = modulPage.checkSubString(webriverString, url); // find substring in string
        console.log('Current URL is made up of "webdriverio" : ' + res);
        await browser.pause(2000);

    });

    it('Build like the best with GitHub Enterprise - Test #9', async () => {
        await mainPage.openPage('https://github.com/');
        await mainPage.buttonStartTrial.scrollIntoView();
        await mainPage.clickButtonStartTrial();
        await enterprisePlanPage.clickLinkEnterpriseCloudEnterprisePlanPage()
        await mainPage.login(username,email,password);
        await browser.pause(2000);
        await browser.back();
        await browser.pause(2000);
    });

    it('Start your 45-day free trial of Enterprise Server - Test #10', async () => {
        //await mainPage.openPage('https://github.com/');
        await enterprisePlanPage.clickLinkEnterpriseServerEnterprisePlanPage();
        await trialPage.setValueInputNameTrialPage(username);
        await trialPage.setValueInputCompanyTrialPage(username + ' Company');
        await trialPage.setValueInputWorkEmailTrialPage(email);
        await browser.pause(1000);
        await trialPage.setValueInputPhoneNumberTrialPage('099-111-22-33');
        await browser.pause(1000);
        await trialPage.clickInput4RadioButtonInstallationType();
        await browser.pause(1000);
        await trialPage.clickInputYesRadioButtonAnyQuestions();
        await browser.pause(1000);
        await trialPage.setValueTextareaYourQuestions(username + ' ' + email);
        await browser.pause(1000);
        await trialPage.clickInputCheckboxAcceptCustomerAgreement();
        await browser.pause(10000);

    });

    it('Select and Print Open positions - Test #11', async () => {
        await mainPage.openPage('https://github.com/');
        await mainPage.linkCareersFooterMainPage.scrollIntoView();
        await mainPage.clickLinkCareersFooterMainPage();
        await careersPage.clickLinkOpenPositionsCareersPage();
        let countPositions = await $('[class="pb-md-6"]').getProperty('childElementCount');
        let openPositions = []
        for(let i = 1; i < countPositions + 1; i++){
            let position = $(`div[class="Details js-details-container"]:nth-of-type(${i}) h3:nth-of-type(1)`)
            openPositions.push(await position.getText())
        }
        console.log('Open positions is:');
        console.log(openPositions);
    });

});
