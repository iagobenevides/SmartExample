const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      USERLOGIN: process.env.USERLOGIN,
      PASSWORD: process.env.PASSWORD,
    }
  },
});