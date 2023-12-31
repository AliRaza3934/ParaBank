import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    defaultCommandTimeout: 3000,
    experimentalSourceRewriting: false,
    //experimentalSessionAndOrigin: false,
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 760,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    charts: true,
    reportPageTitle: 'sauceReport',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
  },
});
