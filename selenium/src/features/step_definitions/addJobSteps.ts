import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { PageFactory } from "../../pages/pageFactory";
import { driver } from "../../driver";

import "dotenv/config";
const { USERNAME_, PASSWORD, LOGIN_ENDPOINT } = process.env;

Given("I add new job", { timeout: 2 * 50000 }, async function () {
    await driver.get(LOGIN_ENDPOINT!);

    const loginPage = PageFactory.createLoginPage(driver);
    const dashboardPage = PageFactory.createDashboardPage(driver);
    const adminPage = PageFactory.createAdminPage(driver);
    const jobPage = PageFactory.createJobPage(driver);
    const addJobPage = PageFactory.createAddJobPage(driver);

    await loginPage.enterCredentials('Admin', 'admin123');
    await loginPage.clickLoginButton();

    await dashboardPage.clickAdminTab();
    await adminPage.clickJobTab();
    await jobPage.clickAddButton();

    await addJobPage.enterJobData(
        'My new job',
        'My job description',
        'My job note'
    );
    await addJobPage.clickSaveButton();
});

When("check available jobs", { timeout: 2 * 50000 }, async function () {
    const jobPage = PageFactory.createJobPage(driver);
    this.jobs = await jobPage.getJobs();
});

Then("there is added job", { timeout: 2 * 50000 }, async function () {
    const jobPage = PageFactory.createJobPage(driver);

    let foundJob = null;
    for (let job of this.jobs) {
        const jobTitle = await jobPage.getTitle(job);
        if (jobTitle === "My new job") {
            foundJob = job;
            break;
        }
    }
    assert.notEqual(foundJob, null);
});