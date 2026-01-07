export class CheckoutStep1Page {

    constructor(page){

        this.page = page 
        this.firstNameInput = page.locator("//input [@id='first-name']")
        this.lastNameInput = page.locator("//input [@id='last-name']")
        this.pincodeInput = page.locator("//input [@id='postal-code']")
        this.continueButton = page.locator("//input [@id='continue']")
        this.cancelButton=page.locator("//button [@id='cancel']")
    }

    async checkoutOneInputs(firstName,lastName,pincode){

        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.pincodeInput.fill(pincode)
        await this.continueButton.click()
    }
    

}