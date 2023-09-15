const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 60_000,
  downloadsFolder: 'downloads',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support/support.js',
  },
  fixturesFolder: 'fixtures',
  includeShadowDom: true,
  numTestsKeptInMemory: 1,
  requestTimeout: 60_000,
  responseTimeout: 60_000,
  screenshotsFolder: 'screenshots',
  // trashAssetsBeforeRuns: true,
  video: false,
  videosFolder: 'videos',
  viewportHeight: 720,
  viewportWidth: 1280,
});
