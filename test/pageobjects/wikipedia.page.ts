import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WikipediaPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get paragrafhtextautomatizacion () {
        return $('//p[contains(text(),"En 1801, la patente de un telar automático utilizando tarjetas perforadas fue dada a ")]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('wiki');
    }
}

export default new WikipediaPage();
