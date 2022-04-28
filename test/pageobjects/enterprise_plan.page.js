

const Page = require('./page');


class EnterprisePlanPage extends Page {


    //Enterprise Cloud 
    get linkEnterpriseCloudEnterprisePlanPage () {
        return $('[class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]');
    }

    //Enterprise Server
    get linkEnterpriseServerEnterprisePlanPage () {
        return $('[class="rounded-3 px-2 pt-5 pb-2"]');
    }
    
    // Click Enterprise Server
    async clickLinkEnterpriseServerEnterprisePlanPage () {
        await this.linkEnterpriseServerEnterprisePlanPage.click();
    }

    // Click Enterprise Cloud
    async clickLinkEnterpriseCloudEnterprisePlanPage () {
        await this.linkEnterpriseCloudEnterprisePlanPage.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new EnterprisePlanPage();
