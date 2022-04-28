

const Page = require('./page');


class PricingPage extends Page {


    //Join for free 
    get linkJoinForFreePricingPage () {
        return $('[class="btn-mktg d-block btn-muted-mktg"]');
    }
    
    // Click Plans
    async clickLinkJoinForFreePricingPage () {
        await this.linkJoinForFreePricingPage.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new PricingPage();
