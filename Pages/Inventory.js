export class InventoryPage{

    constructor(page){

        this.page = page 

        //hamberger Menu
        this.hambergerButton = page.locator("//button[@id='react-burger-menu-btn']")
        this.hambergerAllItems = page.locator("//a[text()='All Items']")
        this.hambergerAbout= page.locator("//a[text()='About']")
        this.hambergerLogout = page.locator("//a[text()='Logout']")
        this.hambergerRest = page.locator("//a[text()='Reset App State']")

        //adding Product to cart
        this.addToCartButton = page.locator("//div[@class='inventory_list']//div[1]//button[text()='Add to cart']")
        
        //sorting option
        this.sortOption = page.locator("//select[@class='product_sort_container']")
        
        //cart icon
        this.cartIcon = page.locator("//a [@class='shopping_cart_link']")

    }

    async addingProduct(){

        await this.addToCartButton.click()
    }

    async gointoCart(){

        await this.cartIcon.click()
    }

    async sorting(num){

        await this.sortOption.selectOption({index:num})
    }

}