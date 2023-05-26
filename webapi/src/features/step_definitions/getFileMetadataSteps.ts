import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { uploadFile, getFileMetaDataById } from "../../api";

Given("I upload {string} in {string}", async function (fileName: string, path: string) {
    const response = await uploadFile(fileName, path).catch((err: any) => {
        throw new Error(JSON.stringify(err));
    });
    const { id } = (response as any);
    this.fileId = id;
});

When("I get metadata of uploaded file", async function () {
    const metaData = await getFileMetaDataById(this.fileId).catch((err: any) => {
        throw new Error(JSON.stringify(err));
    });
    this.fileName = metaData.name;
});

Then("uploaded file has {string} name", function (expectedFileName: string) {
    assert.equal(this.fileName, expectedFileName);
});