import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputSearch () {
        return $('//input[@name="q"]');
    }

    public get inputBuscar () {
        return $('//input[@name="btnK"]');
    }

    public get txtResultWikipedia () {
        return $('//h3[contains(text(),"Wikipedia")]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async buscarText (text: string) {
        await this.inputSearch.setValue(text);
        await this.inputBuscar.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('');
    }
}

export default new GooglePage();
