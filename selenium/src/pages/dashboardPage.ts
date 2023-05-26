import { WebDriver, until, By } from "selenium-webdriver";

export class DashboardPage {
    driver: WebDriver;
    adminTabSelector: By = By.css('a[href$="/viewAdminModule"]');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async clickAdminTab() {
        await this.driver.wait(until.elementLocated(this.adminTabSelector));

        await this.driver.findElement(this.adminTabSelector).click();
    }
}