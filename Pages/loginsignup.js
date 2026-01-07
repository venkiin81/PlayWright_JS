export class LoginPage {

    constructor(page){
        this.page = page
        this.UserNameInput = page.locator("//input[@id='user-name']")
        this.PasswordInput = page.locator("//input[@id='password']")
        this.LoginButton = page.locator("//input[@id='login-button']")
    }

    async goto(){

        await this.page.goto("https://www.saucedemo.com/")
    }

    async LoginUSer(username,password){

        await this.UserNameInput.fill(username)
        await this.PasswordInput.fill(password)
        await this.LoginButton.click()
    }
}
