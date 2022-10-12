import googlePage from '../pageobjects/google.page';
import wikipediaPage from '../pageobjects/wikipedia.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await googlePage.open()
        await googlePage.buscarText("Automatización")
        await googlePage.txtResultWikipedia.click()
        await expect(wikipediaPage.paragrafhtextautomatizacion).toHaveTextContaining("1801")
    });
});


