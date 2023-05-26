import { By, until, WebDriver } from "selenium-webdriver";

export class LoginPage {
    driver: WebDriver;
    loginFieldSelector: By = By.name("username");
    passwordFieldSelector: By = By.name("password");
    loginButtonSelector: By = By.className("orangehrm-login-button");

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async enterCredentials(login: string, password: string) {
        await this.driver.wait(until.elementLocated(this.loginFieldSelector));

        await this.driver.findElement(this.loginFieldSelector).sendKeys(login);
        await this.driver.findElement(this.passwordFieldSelector).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.wait(until.elementLocated(this.loginButtonSelector));

        await this.driver.findElement(this.loginButtonSelector).click();
    }
}