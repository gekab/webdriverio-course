

const Page = require('./page');


class TopicsPage extends Page {


    // H1 Topics 
    get h1Topics () {
        return $('//h1[contains(text(),"Topics")]');
    }
    
    // Click Plans
    async isDisplayedH1Topics () {
        return await this.h1Topics.isDisplayed();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    openPage (link) {
        return browser.url(link);
    }
}

module.exports = new TopicsPage();
