export class CheckOutDonePage{
    
    constructor(page){

        this.page = page 
        this.completCheckoutText = page.locator("//span[text()='Checkout: Complete!']")
        this.backToHomeButton  = page.locator("//button[text()='Back Home']")
    }

    async BackToHome(){
        await this.backToHomeButton.click()
    }

}