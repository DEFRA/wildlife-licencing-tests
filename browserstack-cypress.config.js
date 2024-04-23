const { defineConfig } = require('cypress')
const browserstack = require('browserstack-local')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'wildlife test',
  env: {
    baseUrl: 'https://new-tst.aws.defra.cloud/',
    // experimentalSessionAndOrigin: true,
    // experimentalInteractiveRunEvents: true,
    // experimentalOriginDependencies: true,
    tasklist: 'tasklist',
    login: 'login',
    'which-species': 'which-species',
    signInText: 'Dealing in exempted ivory items privacy not'
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents (on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    // fixturesFolder: "../wildlife-licencing-tests/cypress/fixtures/",
    specPattern: 'cypress/**/*.{js,jsx,ts,tsx}'
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/cypress_reports',
    charts: true,
    html: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,

    inlineAssets: true
  }
})

// Initialize the BrowserStack Local client
// const bsLocal = new browserstack.Local();

// module.exports = (on, config) => {
// on('after:run', () => {
// const bsLocalArgs = { key: 'pnoAaMxp4GVeCNZwFbB5', verbose: true, onlyAutomate: true, forceLocal: true,force: true}; // Replace with your BrowserStack access key
// bsLocal = new BrowserStackLocal(bsLocalArgs);

// Configuration options for BrowserStack Local
const bsLocalArgs = {
  key: 'pnoAaMxp4GVeCNZwFbB5', // Replace with your BrowserStack access key
  verbose: true,
  onlyAutomate: true,
  forceLocal: true,
  force: true
}

const bsLocal = new browserstack.Local(bsLocalArgs)

// Instantiate BrowserStack Local with the provided configuration options
// const bsLocal = new browserstack.Local(bsLocalArgs);

// Code to execute after all tests have finished running
// Ensure you have access to the bsLocal variable here if it's defined outside this scope
//   if (typeof bsLocal !== 'undefined') {
//     bsLocal.start(() => {
//             console.log('BrowserStack Local stopped');
//                 });
//   }
// // });
// };

// const bsLocal = new browserstack.Local();
// bsLocal.start(bsLocalArgs, (error) => {
//   if (error) {
//     console.error('Error starting BrowserStack Local:', error)
//     return
//   }

//   console.log('BrowserStack Local started successfully')
//   // Run your Cypress tests here
// })

bsLocal.stop(function(error) {
  if (error) {
      console.error('Error stopping BrowserStack Local:', error);
      return;
  }

//   console.log('BrowserStack Local stopped successfully');
// });

// // Start BrowserStack Local
// bsLocal.start(function(error) {
//   if (error) {
//     console.error('Error starting BrowserStack Local:', error);
//   } else {
//     console.log('BrowserStack Local is running');
//     // Perform any actions that require BrowserStack Local here
//   }
// });

// module.exports = (on, config) => {
// on('before:run', () => {
//   // Code to execute before Cypress starts running tests
//   // Ensure you have access to the bsLocal variable here if it's defined outside this scope
//   if (typeof bsLocal !== 'undefined') {
//     bsLocal.start(() => {
//       console.log('BrowserStack Local started');
//     });
//   }
// });
// };
