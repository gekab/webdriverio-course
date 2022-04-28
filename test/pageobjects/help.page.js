const Page = require('./page');


class HelpPage extends Page {

    get pageHelp () {
        return $('.footer__link-item[href="/community/support"]');
    }

    get linkHelpStackOverflow () {
        return $('[id="stack-overflow"]');
    }

    async clickHelp () {
        await this.pageHelp.click();
    }


    async helpStackOverflowIsDisplayed () {
        console.log(await this.linkHelpStackOverflow.getText() + ' IS DISPLAYED: '+ await this.linkHelpStackOverflow.isDisplayed());
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new HelpPage();
