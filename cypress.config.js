const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ver7cb",
  e2e: {
    viewportHeight: 960,
    viewportWidth: 1536,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
