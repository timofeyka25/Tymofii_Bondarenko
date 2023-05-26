import { WebDriver, until, By, WebElement } from 'selenium-webdriver';

export class JobPage {
    driver: WebDriver;
    addButtonSelector: By = By.css("button.oxd-button.oxd-button--medium.oxd-button--secondary");
    deleteButtonSelector: By = By.css('button.oxd-icon-button.oxd-table-cell-action-space:nth-child(1)');
    deleteConfirmButtonSelector: By = By.css('button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin');
    deleteLocator = By.css("i.oxd-icon.bi-trash");
    titleLocator = By.css("div:not([class])");
    jobsLocator: By = By.css(".oxd-table-card");

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async clickAddButton() {
        await this.driver.wait(until.elementLocated(this.addButtonSelector));
        await this.driver.findElement(this.addButtonSelector).click();
    }

    async isJobTitleDisplayed(title: string) {
        await this.driver.wait(until.elementLocated(this.deleteButtonSelector));
        return (await this.driver.getPageSource()).includes(title);
    }

    async getTitle(card: WebElement): Promise<string> {
        const title = await card.findElement(this.titleLocator).getText();
        return title;
    }
    async getDeleteButton(card: WebElement) {
        const deleteButton = await card.findElement(this.deleteLocator);
        return deleteButton;
    }

    async getJobs() {
        await this.driver.wait(until.elementLocated(this.jobsLocator));
        const jobs = await this.driver.findElements(this.jobsLocator);
        return jobs;
    }

    async deleteJob(job: WebElement) {
        const deleteButton = await this.getDeleteButton(job);
        await deleteButton.click();

        await this.driver.wait(until.elementLocated(this.deleteConfirmButtonSelector));
        await this.driver.findElement(this.deleteConfirmButtonSelector).click();
    }
}