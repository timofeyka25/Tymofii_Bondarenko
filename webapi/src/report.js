const reporter = require("cucumber-html-reporter");
const options = {
  theme: "bootstrap",
  jsonFile: "testsResults.json",
  output: "cucumberReport.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
