const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 180000,
  defaultCommandTimeout: 30000,
  retries: 1,
  e2e: {
    baseUrl: 'https://stg.platform.creatingly.com/apps/',
     chromeWebSecurity: false,
  specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
      viewportWidth: 1920,
      viewportHeight: 1080,
    chromeWebSecurity: false,
    video: false
  }
})
