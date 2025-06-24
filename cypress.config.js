const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    specPattern: "cypress/e2e/**/*.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      user_email: process.env.CYPRESS_USER_EMAIL,
      user_password: process.env.CYPRESS_USER_PASSWORD
    }
  }
});
