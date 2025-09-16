const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 15000,
  retries: 1,
  e2e: {
    baseUrl: 'https://stg.platform.creatingly.com/apps/',
     chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.spec.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    video: false
  }
})
