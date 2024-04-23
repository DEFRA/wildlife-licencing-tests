const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const addSettsfunctionPage = require('../pageObjects/addSettsPage.js')
const addInvoiceDetailsfunctionPage = require('../pageObjects/addInvoiceDetailsPage.js')
const uploadElement = require('../pageObjects/uploadPage.js')
const convictionElement = require('../pageObjects/convictionPage.js')
const converservativeIssueElement = require('../pageObjects/giveconservationIssuePage.js')

describe('Feedback', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.get('a').contains('Your feedback (opens in new tab)')
        .invoke('removeAttr', 'target').click()
      cy.url()
        .should('include', 'https://new-tst.aws.defra.cloud/feedback')
    })
  })
  it('1 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('2 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-2').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('3 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-3').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('4 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-4').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('5 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-5').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('6 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction').click()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('7 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-2').click()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('8 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-3').click()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('9 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-4').click()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('10 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-5').click()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('11 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(1))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })

  it('12 Feedback screen - verify error message ', () => {
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul > li > a').contains('You have not selected an option')
    cy.get('#nps-satisfaction-error').contains('Select a rating')
    cy.get('#nps-satisfaction').click()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Thank you for your feedback')
    cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
    cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
    cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
  })
  it('13 Feedback screen - very satisfied flow', () => {
    cy.get('#nps-satisfaction-5').click()
    cy.get('#with-hint').fill(faker.random.alphaNumeric(4001))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Feedback must be 4000 characters or less')
    cy.get('#main-content > div > div').contains('Feedback must be 4000 characters or less')
    cy.get('#main-content > div > div').contains('You have 1 character too many')
  })
  it('14 Feedback screen - very satisfied flow', () => {
    cy.get('div.govuk-phase-banner').should('not.contain', 'Your feedback (opens in new tab) can help us to improve this new service.')
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('You have not selected an option')
    commonElement.GetApplicationTasklist('You have not selected an option')
  })
  it('SDDSIP-509 and 1 verify Licence application screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.wait(3000)
      //       cy.origin('https://new-tst.aws.defra.cloud', () => {
      // cy.on('uncaught:exception', (e) => {
      // if (e.message.includes('Things went bad')) {
      // // we expected this error, so let's ignore it
      // // and let the test continue
      // return false
      // }
      // })
      // })
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      cy
        .get('h1.govuk-fieldset__heading')
        .should('contain', 'Which species will the work affect?')
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Is the development a Nationally Significant Infrastructure Project?'
      )
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Your application role')
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Does the applicant own the land?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Does the project need any permissions?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Has the project got all permissions for work to start?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('You’re eligible to apply for a licence')
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickContinueButton()
      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      // cy.get('h2.govuk-fieldset__heading').should('contain', 'For international numbers include the country code.')
      // cy.get('#phone-number').fill(faker.phone.phoneNumber())
      // commonElement.clickContinueButton();      //       commonElement.clickOnYesOption()
      // commonElement.clickContinueButton();
      // cy.get("input[value='new']").click();
      // commonElement.clickContinueButton();
      // commonElement.SelectYesOptionaOnIsOrganisation();
      // commonElement.EnterOrganisationName().fill(faker.company.bs());
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();
      // cy.get('#main-content > fieldset > div > label').should('contain', 'Postcode')
      // commonElement.EnterPostCode("M24 6DH");
      // commonElement.clickContinueButton();
      // cy.get('#main-content > fieldset > div > label').should('contain', 'Select an address ')
      // commonElement.SelectAddress(
      //   "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      // commonElement.clickContinueButton();
      // cy.get('h1.govuk-fieldset__heading').should('contain', 'Check your answers')
      // commonElement.clickContinueButton();

      //   Give ecologist details
      commonElement.GetApplicationTasklist('Give ecologist details')
      commonElement.verifyHeaderPage(
        'Who is the ecologist?'
      )

      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      // commonElement.clickOnYesOption(); // existing
      // commonElement.SelectYesOptionaOnIsOrganisation(); //new
      commonElement.SelectYesOptionaOnIsOrganisation() // new
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      //  cy.get("#account").click();

      // cy.get("#change-email").click();
      // commonElement.clickContinueButton();

      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()

      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email()) // new
      commonElement.clickContinueButton() // new
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      // Alternnative ecologist details
      commonElement.GetApplicationTasklist('Add alternative ecologist contact details')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickContinueButton()
      // work activity
      commonElement.GetApplicationTasklist('Give work activity details')

      cy.get('#work-proposal').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Exemptions from paying for a wildlife licence')
      // cy.get("#main-content > fieldset > div > fieldset > legend").should("Do you think the purpose of your project is exempt from payment?");
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#work-payment-exempt-reason-8').click()
      cy.get('#exempt-details').fill(faker.random.alphaNumeric(400))
      commonElement.clickContinueButton()
      cy.get('#work-category').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Cost of this licence')
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
      // conser
      commonElement.GetApplicationTasklist('Give details of conservation issues')
      // cy.get('#main-content > fieldset > div > fieldset > legend').should('contain', 'Will the activity take place on or next to any designated sites?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#continue')
        .should('contain', ' Tell us about the first designated site')
        .click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      commonElement.clickContinueButton()

      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Give details of the permission')
      converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Advice about the activity')
      // cy.get('#main-content > fieldset > div:nth-child(3) > label').should('contain', 'Who did you receive the advice from?')
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#main-content > fieldset > div:nth-child(3) > label').should(
        'contain',
        'Describe the outcome of the advice'
      )
      cy.get('#advice-description').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      cy.get('#proximity').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      // Permission
      commonElement.GetApplicationTasklist('Give details of permissions to start work')
      commonElement.clickContinueButton()
      cy.get('#continue').should('contain', 'Add the first permission').click()

      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#planning-type-4').click()
      // commonElement.clickContinueButton();
      cy.get('#other-description').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()

      cy.get('#reference').fill('text')
      commonElement.clickContinueButton()

      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()

      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()

      cy.get('#potential-conflicts-2').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')

      // Authorised person
      commonElement.GetApplicationTasklist('Add authorised people')

      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        "What is the authorised person's name?"
      )
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()

      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > div > label').should(
        'contain',
        'Select an address'
      )
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      //   Add additional contacts
      commonElement.GetApplicationTasklist('Add alternative licence holder contact details')

      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      //       commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      // cy.get("input[value='new']").click();
      // commonElement.clickContinueButton();
      // commonElement.EnterName(faker.name.firstName() + " " + faker.name.lastName());
      // commonElement.clickContinueButton();
      // commonElement.EnterEmailAddress().clear();
      // commonElement.EnterEmailAddress.fill(faker.internet.email());
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();

      commonElement.GetApplicationTasklist('Add invoice details')
      cy.get("input[value='other']").click()
      commonElement.clickContinueButton()
      // cy.get("#new").click();
      // commonElement.clickContinueButton();
      commonElement.verifyHeaderPage('Invoice payer details')
      commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      // cy.get("#account").click();
      // commonElement.clickContinueButton();
      commonElement.SelectYesOptionaOnIsOrganisation() // new
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      cy.get('body > div.govuk-width-container').should('not.have.text', 'e.g. SW1W 0NY')
      cy.get('#main-content > fieldset > div > label').should(
        'contain',
        'Postcode'
      )
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > div > label').should(
        'contain',
        'Select an address'
      )
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()

      // cy.get("#change-email").click();
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Enter a reference or purchase order number'
      )
      addInvoiceDetailsfunctionPage.enterPurchaseOrderdetails(
        faker.internet.email()
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give site information')

      cy.get('#site-name').fill(faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Does the site have a postcode?'
      )
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What is the site address?'
      )
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      commonElement.clickContinueButton()
      cy.get('#main-content > div:nth-child(1) > div > h1').should(
        'contain',
        'Map of your activity at the development site'
      )
      uploadElement.clickOnUploadField()

      cy.writeFile(
        'cypress/fixtures/magic_polygons.shp.xml',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.shp.xml')
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      cy.writeFile(
        'cypress/fixtures/magic_polygons.shp copy.png',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.shp copy.png')
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      cy.writeFile('cypress/fixtures/map.shx', '<html>Hello world</html>')
      uploadElement.uploadFileField().attachFile('map.shx')
      commonElement.clickContinueButton()
      // uploadElement.clickOnUploadField()
      // cy.writeFile('cypress/fixtures/GeoJSON.geojson', '<html>Hello world</html>')
      // cy.get('#scan-file').attachFile('GeoJSON.geojson')
      // commonElement.clickContinueButton();
      // uploadElement.clickOnUploadField()
      // cy.writeFile('cypress/fixtures/filee.KML', '<html>Hello world</html>')
      // cy.get('#scan-file').attachFile('filee.KML')
      // commonElement.clickContinueButton();      // uploadElement.clickOnUploadField()
      // cy.writeFile('cypress/fixtures/magic_polygons.shp', '<html>Hello world</html>')
      // cy.get('#scan-file').attachFile('magic_polygons.shp')
      // commonElement.clickContinueButton();
      // const Geojson = "GeoJSON.geojson";
      // const kml = "filee.KML";
      // const ShpFixturePath = "magic_polygons.shp";

      // cy.writeFile('cypress/fixtures/GeoJSON.geoJson', '<html>Hello world</html>')
      // uploadElement.uploadFileField().attachFile('GeoJSON.geoJson');

      // // uploadElement.uploadFileField().attachFile({ filePath: Geojson, encoding: 'utf-8' });

      // uploadElement.clickOnUploadField();
      // commonElement.clickContinueButton();
      // cy.writeFile('cypress/fixtures/filee.KML', '<html>Hello world</html>')
      // uploadElement.uploadFileField().attachFile('filee.KML');

      // // uploadElement.uploadFileField().attachFile(kml, utf8);
      // uploadElement.clickOnUploadField();
      // commonElement.clickContinueButton();
      // cy.writeFile('cypress/fixtures/magic_polygons.shp', '<html>Hello world</html>')
      // uploadElement.uploadFileField().attachFile('magic_polygons.shp');

      // const yourFixturePath = "magic_polygons.shp.xml";
      //  const dbfFixturePath = "magic_polygons.shp copy.png";
      //  const prjFixturePath = "map.shx";
      //  file = dbfFixturePath.split(".");
      // const Content = 'test'
      //  cy.fixture('map.shp').then((Content) => {
      //    // Use cy.get() to select the file input element
      //    cy.get('#scan-file').attachFile({
      //      fileContent: Content,
      //      fileName: 'map.shp',
      //      mimeType: 'application/octet-stream', // Set the MIME type of the file
      //    });
      //  });
      //   cy.writeFile('cypress/fixtures/magic_polygons.prj', '<html>Hello world</html>')

      //   uploadElement.uploadFileField().attachFile('magic_polygons.prj');
      //   // uploadElement.uploadFileField().attachFile({ fileContent, filePath: yourFixturePath, encoding: 'utf-8' });
      //   // uploadElement.uploadFileField().selectFile(yourFixturePath, {force: true});

      //  // uploadElement.uploadFileField().selectFile('cypress/fixtures/magic_polygons.cpg');
      //   // uploadElement.uploadFileField().attachFile(yourFixturePath);

      //   commonElement.clickContinueButton();
      //   uploadElement.clickOnUploadField();

      // dbfFixturePathOne = file[0]+".dbf";
      // uploadElement.uploadFileField().attachFile({ filePath: dbfFixturePath, encoding: '' });
      // cy.writeFile('cypress/fixtures/magic_polygons.dbf', '<html>Hello world</html>')

      // uploadElement.uploadFileField().attachFile('magic_polygons.dbf');
      // commonElement.clickContinueButton();
      // uploadElement.clickOnUploadField();
      // // uploadElement.uploadFileField().attachFile({ filePath: prjFixturePath, encoding: '' });
      // cy.writeFile('cypress/fixtures/magic_polygons.prj', '<html>Hello world</html>')

      // uploadElement.uploadFileField().attachFile('magic_polygons.prj');

      // // uploadElement.uploadFileField().attachFile(prjFixturePathOne);
      // commonElement.clickContinueButton();

      // uploadElement.uploadFileField().attachFile(ShpFixturePath, utf8);
      // uploadElement.clickOnUploadField();
      // commonElement.clickContinueButton();
      //  cy.get('#site-grid-ref').fill('SP039775')
      // commonElement.clickContinueButton();
      commonElement.verifyHeaderPage(
        'What is the site’s National Grid Reference?'
      )

      cy.get('#site-grid-ref')
        .clear()
        .fill('NY' + faker.datatype.number({ min: 100000 }).toString())
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Site address and National Grid Reference do not match'
      )

      cy.get("input[value='correct']").click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give ecologist’s experience')
      commonElement.verifyHeaderPage(
        'Has the ecologist previously held a badger mitigation licence?'
      )
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        "Enter the ecologist's experience of badger ecology and surveying"
      )
      cy.get('#enter-experience').fill(faker.random.alphaNumeric(4000))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        "Enter the ecologist's experience of using the methods to be licensed"
      )
      cy.get('#enter-methods').fill(faker.random.alphaNumeric(4000))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Does the ecologist have a badger mitigation class licence?'
      )
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Enter the class licence reference number'
      )
      cy.get('#enter-class-mitigation-details').fill('BAD-2022-agsss1')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Upload supporting information')
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      const yourFixturePath = 'virusfile.pdf'
      // const CpgFixturePath = 'magic_polygonsOne.cpg'
      // const dbfFixturePath = 'magic_polygons.dbf'
      // const prjFixturePath = 'magic_polygons.prj'
      // const sbnFixturePath = 'magic_polygonsFour.sbn'
      // const sbxFixturePath = 'magic_polygonsSix.sbx'
      // const shpFixturePath = 'magic_polygonsFive.shp'
      // const shxFixturePath = 'magic_polygonsSeven.shx'
      const shpxmlFixturePath = 'magic_polygons.shp.xml'
      // const kmlFixturePath = 'GeoJSON.geojson'
      // const geojsonFixturePath = 'filee.kml'
      const untitledFolderPath = 'virusfile.zip'
      const virusFolderPath = 'virusfile.zip'

      cy.writeFile(
        'cypress/fixtures/magic_polygons.sbn',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.sbn')
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      cy.writeFile(
        'cypress/fixtures/magic_polygons.sbx',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.sbx')
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.writeFile(
        'cypress/fixtures/magic_polygons.shx',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.shx')
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.writeFile(
        'cypress/fixtures/GeoJSON.geojson',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('GeoJSON.geojson')
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.writeFile('cypress/fixtures/filee.KML', '<html>Hello world</html>')
      uploadElement.uploadFileField().attachFile('filee.KML')
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.writeFile(
        'cypress/fixtures/magic_polygons.shp',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.shp')
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      cy.writeFile(
        'cypress/fixtures/magic_polygons.cpg',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.cpg')

      // uploadElement.clickOnUploadField()
      // cy.get('#scan-file').attachFile(CpgFixturePath)
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile('magic_polygons.dbf')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('magic_polygons.prj')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('magic_polygons.sbn')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('magic_polygons.sbx')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile(shpxmlFixturePath)
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('magic_polygons.shp')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('magic_polygons.shx')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('filee.KML')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile(untitledFolderPath)
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile(virusFolderPath)
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile('GeoJSON.geojson')
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should(
        'contain',
        'Upload supporting information'
      )

      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      cy.get('h1.govuk-heading-l').should('contain', 'Supporting information')

      cy.get('#another-file-check-2').click()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Add setts the work will affect')
      commonElement.verifyHeaderPage(
        'Tell us about each badger sett the work will affect'
      )

      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What is this sett called?'
      )

      addSettsfunctionPage.enterHabitatName(faker.name.firstName())
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What are the badgers using this sett for?'
      )
      addSettsfunctionPage.clickOnHabitattypeFour()
      // cy.get("#habitat-types-4").click();
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Will the badger sett be reopened once development is complete?'
      )

      cy.get("input[value='true']").click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('How many entrance holes does the badger sett have?')

      cy.get('#habitat-entrances').fill('100')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'How many of the entrance holes are active?'
      )

      cy.get('#habitat-active-entrances').fill('100')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        "What is the badger sett's grid reference?"
      )
      addSettsfunctionPage.enterHabitatGridRef('NY123456')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'When will the work start?'
      )

      cy.get('#habitat-work-start-day').fill('1')
      cy.get('#habitat-work-start-month').fill('11')
      cy.get('#habitat-work-start-year').fill('2024')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'When will the work end?'
      )
      cy.get('#habitat-work-end-day').fill('30')
      cy.get('#habitat-work-end-month').fill('11')
      cy.get('#habitat-work-end-year').fill('2024')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'How will you affect the badgers in this sett?'
      )
      cy.get('#habitat-activities').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )

      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Declare convictions')

      convictionElement.clickOnConvictionsCheck()
      commonElement.clickContinueButton()

      convictionElement.enterCovictionDetail().fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )

      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Agree to terms and send application')
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      cy.get('a')
        .contains(
          'What did you think of this service? (opens in a new tab)'
        )
        .invoke('removeAttr', 'target')
        .click()
      cy.url().should(
        'include',
        'https://new-tst.aws.defra.cloud/feedback'
      )
      commonElement.clickContinueButton()
      cy.get('#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul > li > a').contains('You have not selected an option')
      cy.get('#nps-satisfaction-error').contains('Select a rating')
      cy.get('#nps-satisfaction').click()
      commonElement.clickContinueButton()
      cy.get('#main-content > div > div').contains('Thank you for your feedback')
      cy.get('#main-content > div > div').contains('We will use your feedback to improve our services.')
      cy.get('#main-content > div > div').contains('You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.')
      cy.get('#main-content > div > div').contains('If you want to leave this service, you can sign out or close this browser window.')
    })
  })
})
