

const Page = require('./page');


class CareersPage extends Page {


    //Link Open positions
    get linkOpenPositionsCareersPage () {
        return $('[href="#positions"]');
    }
    
    // Click Link Open positions
    async clickLinkOpenPositionsCareersPage () {
        await this.linkOpenPositionsCareersPage.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new CareersPage();
