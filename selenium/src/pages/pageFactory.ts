import { WebDriver } from 'selenium-webdriver';

const { LoginPage } = require('./loginPage');
const { DashboardPage } = require('./dashboardPage');
const { AdminPage } = require('./adminPage');
const { JobPage } = require('./jobPage');
const { AddJobPage } = require('./addJobPage');

export class PageFactory {
    static createLoginPage(driver: WebDriver) {
        return new LoginPage(driver);
    }

    static createDashboardPage(driver: WebDriver) {
        return new DashboardPage(driver);
    }

    static createAdminPage(driver: WebDriver) {
        return new AdminPage(driver);
    }

    static createJobPage(driver: WebDriver) {
        return new JobPage(driver);
    }

    static createAddJobPage(driver: WebDriver) {
        return new AddJobPage(driver);
    }
}