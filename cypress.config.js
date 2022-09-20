// {
//     "chromeWebSecurity" : false,
//     "$schema": "https://on.cypress.io/cypress.schema.json",
//     "projectId": "ioceso",
//     "experimentalStudio": true,
//     "screenshotOnRunFailure": true,
//     "reporter": "cypress-mochawesome-reporter",
//     "reporterOptions": {
//         "reportDir": "cypress/report",
//         "charts": true,
//         "reportPageTitle": "DEvSecOps",
//         "embeddedScreenshots": true
//       }
// }
const { defineConfig } = require("cypress");

module.exports = defineConfig({
   e2e: {
    setupNodeEvents(on, config) {
       // implement node event listeners here
   },
//   },
});
