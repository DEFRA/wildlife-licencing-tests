const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,
  projectId: 'wildlife test',
  env: {
    baseUrl: 'https://new-tst.aws.defra.cloud/',
    tasklist: 'tasklist',
    login: 'login',
    'which-species': 'which-species',
    signInText: 'Dealing in exempted ivory items privacy not',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
