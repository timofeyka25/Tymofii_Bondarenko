import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { uploadFile, getFileSize, isFileExists } from "../../api";
import { getFileSizeFromFS } from "../../utils";

Given("I upload file {string} in {string}", async function (fileName: string, dir: string) {
    await uploadFile(fileName, dir).catch((err: any) => {
        throw new Error(JSON.stringify(err));
    });
});

When("I check {string} uploaded to {string}", async function (fileName: string, dir: string) {
    const isUploaded = await isFileExists(fileName, dir).catch((err: any) => {
        throw new Error(`Error in checking file upload status: ${JSON.stringify(err)}`);
    });

    assert.strictEqual(isUploaded, true);
});

Then("check file {string} in {string} size is equal to filesize of initial file", async function (fileName: string, dir: string) {
    const actualFileSize = await getFileSize(fileName, dir).catch((err: any) => {
        throw new Error(`Error in getting file size: ${JSON.stringify(err)}`);
    });

    assert.equal(actualFileSize, await getFileSizeFromFS(fileName));
});
