const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
    supportFile: 'cypress/support/index.js'
  },
  video: true,
  videosFolder: "videos"
})