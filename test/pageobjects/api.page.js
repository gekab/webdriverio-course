const Page = require('./page');


class ApiPage extends Page {


    get pageApi () {
        return $('[class="navbar__item navbar__link"][href="/docs/api"]');
    }

    get linkApiContribute () {
        return $('[href="#contribute"][class*=table]');
    }

    async clickApi () {
        await this.pageApi.click();
    }

    async clickApiContribute () {
        await this.linkApiContribute.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new ApiPage();
