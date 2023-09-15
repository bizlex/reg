const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 60_000,
  downloadsFolder: 'downloads',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  fixturesFolder: 'fixtures',
  includeShadowDom: true,
  numTestsKeptInMemory: 1,
  requestTimeout: 60_000,
  responseTimeout: 60_000,
  screenshotsFolder: 'screenshots',
  video: false,
  videosFolder: 'videos',
  viewportHeight: 720,
  viewportWidth: 1280,
});
