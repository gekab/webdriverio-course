

const Page = require('./page');


class TrialPage extends Page {


    //Name
    get inputNameTrialPage () {
        return $('[id="contact_request_name"]');
    }

    //Company
    get inputCompanyTrialPage () {
        return $('[id="contact_request_organization_name"]');
    }

    //Work email
    get inputWorkEmailTrialPage () {
        return $('[id="contact_request_email"]');
    }

    //Phone number
    get inputPhoneNumberTrialPage () {
        return $('[id="contact_request_phone"]');
    }

    //Input Check Radio Button Deploy GitHub on your own servers / Choose your installation type
    get input4RadioButtonInstallationType () {
        return $('[id="contact_request_instance_type_onprem"]');
    }
    
    //Input Radio Button Yes / Do you have any other questions about GitHub Enterprise?
    get inputYesRadioButtonAnyQuestions () {
        return $('[id="questions_yes"]');
    }

    //Please list your questions 
    get textareaYourQuestions () {
        return $('[id="questions-list"]');
    }

    //Accept terms of use
    get inputCheckboxAcceptCustomerAgreement   () {
        return $('[id="contact_request_agreed_to_terms"]');
    }

    // Name setValue
    async setValueInputNameTrialPage (text) {
        await this.inputNameTrialPage.setValue(text);
    }

    //Company
    async setValueInputCompanyTrialPage (text) {
        await this.inputCompanyTrialPage.setValue(text);
    }

    //Work email
    async setValueInputWorkEmailTrialPage (text) {
        await this.inputWorkEmailTrialPage.setValue(text);
    }

    //Phone number
    async setValueInputPhoneNumberTrialPage (text) {
        await this.inputPhoneNumberTrialPage.setValue(text);
    }

    //Input Check Radio Button Deploy GitHub on your own servers / Choose your installation type
    async clickInput4RadioButtonInstallationType () {
        await this.input4RadioButtonInstallationType.click();
    }
    
    //Input Radio Button Yes / Do you have any other questions about GitHub Enterprise?
    async clickInputYesRadioButtonAnyQuestions () {
        await this.inputYesRadioButtonAnyQuestions.click();
    }

    //Please list your questions 
    async setValueTextareaYourQuestions (text) {
        await this.textareaYourQuestions.setValue(text);
    }

    //Accept terms of use
    async clickInputCheckboxAcceptCustomerAgreement   () {
        await this.inputCheckboxAcceptCustomerAgreement.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new TrialPage();
