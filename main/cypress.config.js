const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://qa-test.ticto.io/',
    setupNodeEvents(on, config) {
    },
  },
});
