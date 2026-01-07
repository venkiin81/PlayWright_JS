export class CartPage {

    constructor(page){

        this.page = page 
        this.removeButton = page.locator("//button[text()='Remove']")
        this.contineShopimg = page.locator("//button[@id='continue-shopping']")
        this.checkoutButton = page.locator("//button[@id='checkout']")
    }

    async checkoutStep(){

        await this.checkoutButton.click()
    }

}