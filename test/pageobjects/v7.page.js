const Page = require('./page');


class V7Page extends Page {


    get pageV7 () {
        return $('[href="/versions"]');
    }

    get textPastVersions () {
        return $('//h2[text()="Past versions"]');

    }
    
    get docV6Versions () {
        return $('[href="https://v6.webdriver.io"]');
    }

    async clickV7 () {
        await this.pageV7.click();
    }

    async clickDocV6Versions () {
        await this.docV6Versions.click();
    }

    async scrollPastVersions () {
        await this.textPastVersions.scrollIntoView();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new V7Page();
