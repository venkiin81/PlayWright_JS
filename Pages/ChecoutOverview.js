export class CheckoutOverviewPage{

    constructor(page){
        this.page = page
        this.finishButton = page.locator("//button [text()='Finish']")
        this.cancelButton = page.locator("//button [@id='cancel']")
    }

    async checotStep2proceed(){
        await this.finishButton.click()
    }
}