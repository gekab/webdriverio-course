
const Page = require('./page');


class ContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputName () {
        return $('[id="site_enterprise_contact_request_full_name"]');
    }

    get inputCompany () {
        return $('[id="site_enterprise_contact_request_company"]');
    }

    get inputWorkEmail () {
        return $('[id="site_enterprise_contact_request_email"]');
    }

    get inputWorkPhoneNumber
    () {
        return $('[id="site_enterprise_contact_request_phone"]');
    }

    get inputMessage
    () {
        return $('[id="site_enterprise_contact_request_request_details"]');
    }

    get inputCheckBox
    () {
        return $('[id="site_enterprise_contact_request_marketing_email_opt_in"]');
    }


    async clickInputCheckBox () {
        await this.inputCheckBox.click();
    }


    async sendLetterToSaleTeam (username, company, email, phone, messege) {
        await this.inputName.setValue(username);
        await this.inputCompany.setValue(company);
        await this.inputWorkEmail.setValue(email);
        await this.inputWorkPhoneNumber.setValue(phone);
        await this.inputMessage.setValue(messege);
        await this.clickInputCheckBox();
    }


}

module.exports = new ContactPage();
