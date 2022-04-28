

const Page = require('./page');


class DocsPage extends Page {

    get pageDocs () {
        return $('[class="navbar__item navbar__link"][href="/docs/gettingstarted"]');
    }

    async clickDocs () {
        await this.pageDocs.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new DocsPage();
