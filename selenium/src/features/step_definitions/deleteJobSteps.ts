import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { PageFactory } from "../../pages/pageFactory";
import { driver } from "../../driver";

import "dotenv/config";

Given("I delete job", { timeout: 2 * 50000 }, async function () {
    const jobTitlesPage = PageFactory.createJobPage(driver);
    let jobs = await jobTitlesPage.getJobs();
    for (let job of jobs) {
        const jobTitle = await jobTitlesPage.getTitle(job);
        if (jobTitle === "My new job") {
            await jobTitlesPage.deleteJob(job);
            break;
        }
    }
});

Then("there is no deleted job", { timeout: 2 * 50000 }, async function () {
    const jobTitlesPage = PageFactory.createJobPage(driver);
    let foundJob = null;
    for (let job of this.jobs) {
        const jobTitle = await jobTitlesPage.getTitle(job);
        if (jobTitle === "My new job") {
            foundJob = job;
            break;
        }
    }
    assert.equal(foundJob, null);
});