import { WebDriver, until, By } from 'selenium-webdriver';

export class AddJobPage {
    driver: WebDriver;
    jobTitleFieldSelector: By = By.css("input.oxd-input.oxd-input--active:nth-child(1)");
    jobDescriptionFieldSelector: By = By.css("textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical:nth-child(1)");
    jobNoteFieldSelector: By = By.css("textarea.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical:nth-child(1)");
    saveButtonSelector: By = By.css("button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space");

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async enterJobData(title: string, description: string, note: string) {
        await this.driver.wait(until.elementLocated(this.jobTitleFieldSelector));
        await this.driver.findElement(this.jobTitleFieldSelector).sendKeys(title);
        await this.driver.findElement(this.jobDescriptionFieldSelector).sendKeys(description);
        await this.driver.findElement(this.jobNoteFieldSelector).sendKeys(note);
    }

    async clickSaveButton() {
        await this.driver.wait(until.elementLocated(this.saveButtonSelector));
        await this.driver.findElement(this.saveButtonSelector).click();
    }
}