import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { deleteFile, isFileExists } from "../../api";

When("I delete file {string} in {string}", async function (fileName: string, dir: string) {
    await deleteFile(fileName, dir).catch((err: any) => {
        throw new Error(JSON.stringify(err));
    });
});

Then("there is no {string} in {string}", async function (fileName: string, dir: string) {
    const isExists = await isFileExists(fileName, dir).catch((err: any) => {
        throw new Error(JSON.stringify(err));
    });
    assert.strictEqual(isExists, false);
});