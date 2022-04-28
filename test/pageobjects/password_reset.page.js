
const Page = require('./page');
const modulPage = require('./commons.page');


class PasswordResetPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputEmail () {
        return $('[id="email_field"]');
    }

    async setValueInputEmail () {
        await this.inputEmail.setValue('qscfre@vfdfd.com');
    }

    async setEmptyDataInputEmail () {
        await this.inputEmail.setValue('');
    }

    async setValidDataInputEmail (data) {
        await this.inputEmail.setValue(data);
    }

}

module.exports = new PasswordResetPage();
