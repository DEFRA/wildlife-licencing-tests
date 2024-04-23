const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const addSettsfunctionPage = require('../pageObjects/addSettsPage.js')
const addInvoiceDetailsfunctionPage = require('../pageObjects/addInvoiceDetailsPage.js')
const uploadElement = require('../pageObjects/uploadPage.js')
const convictionElement = require('../pageObjects/convictionPage.js')
const converservativeIssueElement = require('../pageObjects/giveconservationIssuePage.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
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
      commonElement.EnterEmailAddress(faker.internet.email()) // new
      commonElement.clickContinueButton() // new
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      // Alternnative ecologist details
      commonElement.GetApplicationTasklist('Add alternative ecologist contact details')
      commonElement.verifyHeaderPage('Do you want to add an alternative ecologist contact?')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickContinueButton()
      // work activity
      commonElement.GetApplicationTasklist('Give work activity details')
      commonElement.verifyHeaderPage(
        'What activity or development work do you plan to do?'
      )
      cy.get('#work-proposal').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Exemptions from paying for a wildlife licence')
      // cy.get("#main-content > fieldset > div > fieldset > legend").should("Do you think the purpose of your project is exempt from payment?");
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Why do you think your project is exempt from payment?')
      cy.get('#work-payment-exempt-reason-8').click()
      cy.get('#exempt-details').fill(faker.random.alphaNumeric(400))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('What kind of development is happening at the site?')
      cy.get('#work-category').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Cost of this licence')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
      // conser
      commonElement.GetApplicationTasklist('Give details of conservation issues')
      commonElement.verifyHeaderPage('Designated sites')
      // cy.get('#main-content > fieldset > div > fieldset > legend').should('contain', 'Will the activity take place on or next to any designated sites?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Tell us about each designated site the development will affect')
      cy.get('#continue')
        .should('contain', ' Tell us about the first designated site')
        .click()
      commonElement.verifyHeaderPage('What is the name of the designated site?')
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Do you have permission from the owner or occupier of the designated site?')

      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Give details of the permission')
      converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Have you had advice or permission for the activity from Natural England?')
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
      commonElement.verifyHeaderPage('Will the activity happen on the site or next to it?')
      cy.get('#proximity').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Check your answers')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      // Permission
      commonElement.GetApplicationTasklist('Give details of permissions to start work')
      commonElement.verifyHeaderPage('Does the project need any permissions?')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('Tell us about each permission the project has got')
      cy.get('#continue').should('contain', 'Add the first permission').click()
      commonElement.verifyHeaderPage(
        'What permission has the project got?'
      )
      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Which planning authority granted the planning permission for this development?'
      )
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage('What type of planning permission was granted?')
      cy.get('#planning-type-4').click()
      // commonElement.clickContinueButton();
      cy.get('#other-description').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What is the Planning permission reference?'
      )
      cy.get('#reference').fill('text')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'You have added 1 permission'
      )
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Have all other wildlife or habitat-related conditions been met?'
      )
      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Are there any potential conflicts between this application and other legal commitments?'
      )
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
      commonElement.verifyHeaderPage(
        'Do you want to add an authorised person?'
      )
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
      commonElement.verifyHeaderPage('Who is responsible for paying the invoice?')
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
      commonElement.verifyHeaderPage(
        'What is the name of the site for planned work activity?'
      )
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
      commonElement.verifyHeaderPage(
        'Have you or any person listed in the application been convicted of any wildlife-related or animal welfare offence?'
      )
      convictionElement.clickOnConvictionsCheck()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Convictions for animal or wildlife offences'
      )
      convictionElement.enterCovictionDetail().fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )

      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Agree to terms and send application')

      commonElement.assertPageText().contains(
        users.text18
      )
      commonElement.assertPageText().contains(
        'By sending the application you agree that you have given complete and correct information.'
      )
      commonElement.assertPageText().contains(
        'If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:'
      )
      commonElement.assertPageText().contains(
        'will uphold any conditions applied to my licence if granted'
      )
      commonElement.assertPageText().contains(
        'will abide by the terms and conditions of this service'
      )
      commonElement.assertPageText().contains(
        'will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges'
      )
      commonElement.assertPageText().contains(
        'By sending the application you confirm that:'
      )
      commonElement.assertPageText().contains(
        'an appropriate ecologist has been involved in the application and design of any mitigations'
      )
      commonElement.assertPageText().contains(
        'the ecologist supports the application'
      )
      commonElement.assertPageText().contains(
        'the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment'
      )
      commonElement.assertPageText().contains(
        'you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action'
      )
      commonElement.assertPageText().contains(
        'you will pay any charges that apply'
      )
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > table > tbody > tr:nth-child(1) > th > p > a').click()

      commonElement.VerifyPagetext('SUBMITTED')
      commonElement.VerifyPagetext('Badger mitigation')
      commonElement.VerifyPagetext('Site')
      commonElement.VerifyPagetext('Applicant')

      commonElement.VerifyPagetext('Application reference')
      // const text1 = commonElement.VerifyPagetext().text();
      // expect(text).include(text1);
      commonElement.VerifyPagetext('Submitted')
    })
  })

  it('SDDSIP-509 and 2 verify Licence application screen', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.wait(3000)
      //       cy.origin('https://new-tst.aws.defra.cloud/', () => {
      //       cy.on('uncaught:exception', (e) => {
      //       if (e.message.includes('Things went bad')) {
      // // we expected this error, so let's ignore it
      // // and let the test continue
      //      return false
      // }
      // })
      // })
      // commonElement.verifyHeaderPage(users.nextpage);
      commonElement.verifyHeaderPage(users.nextpage)
      // commonElement.ClickOnNewApplicationButton()
      commonElement.ClickOnNewApplicationButton()
      cy
        .get('h1.govuk-fieldset__heading')
        .should('contain', 'Which species will the work affect?')
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Is the development a Nationally Significant Infrastructure Project?'
      )
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      //  commonElement.verifyHeaderPage(
      //   "contain",
      //   "Licences are typically issued between July and November to protect badger welfare"
      // );
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Your application role'
      )
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Does the applicant own the land?'
      )
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Does the project need any permissions?'
      )
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Has the project got all permissions for work to start?'
      )
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'You’re eligible to apply for a licence'
      )
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      //       commonElement.clickOnYesOption()
      // commonElement.clickContinueButton();
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName()) // new
      // commonElement.EnterName(faker.name.firstName() + " " + faker.name.lastName()); //new
      commonElement.clickContinueButton() // new
      cy.get('#is-organisation-2').click() // new
      commonElement.clickContinueButton() // new
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      cy.get('#phone-number').fill(faker.phone.phoneNumber()) // new
      commonElement.clickContinueButton() // uncomment
      //   cy.get('#main-content > fieldset > div > label').should('contain', 'Postcode')
      //   commonElement.EnterPostCode("M24 6DH");
      //   commonElement.clickContinueButton();
      //   cy.get('#main-content > fieldset > div > label').should('contain', 'Select an address')
      //   commonElement.SelectAddress(
      //   "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      //   commonElement.clickContinueButton();
      // cy.get("#main-content > fieldset > dl > div:nth-child(4) > dd.govuk-summary-list__actions > a").click();
      // cy.get("#change-email").click();
      //   commonElement.clickOnChangeEmailOption()
      //  commonElement.clickContinueButton();

      //  commonElement.EnterEmailAddress(faker.internet.email());
      //   commonElement.clickContinueButton();
      //   cy.get("#phone-number").fill(faker.phone.phoneNumber()) // new
      //    commonElement.clickContinueButton();  //uncomment
      //   // commonElement.SelectYesOptionaOnIsOrganisation(); // comment
      //   // commonElement.EnterOrganisationName().fill(faker.company.bs()); //commeent
      //   // commonElement.clickContinueButton(); //comment
      //  // commonElement.clickContinueButton();  //comment
      //   commonElement.EnterPostCode("M24 6DH");
      //   commonElement.clickContinueButton();
      //   commonElement.SelectAddress(
      //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      //   );
      //   commonElement.clickContinueButton();
      commonElement.clickContinueButton()
      //   Give ecologist details
      // commonElement.GetApplicationTasklist("Give ecologist details");
      //   cy.get('h1.govuk-fieldset__heading').should('contain', 'Who is the ecologist?')
      //   commonElement.EnterName(faker.name.firstName() + " " + faker.name.lastName()); //new
      //   commonElement.clickContinueButton(); // new
      //   cy.get("#is-organisation-2").click();  //new
      //   commonElement.clickContinueButton();  //new
      //  commonElement.EnterEmailAddress(faker.internet.email());
      //   commonElement.clickContinueButton();
      //   cy.get('#main-content > fieldset > div > label').should('contain', 'Postcode')
      //   commonElement.EnterPostCode("M24 6DH");
      //   commonElement.clickContinueButton();
      //   cy.get('#main-content > fieldset > div > label').should('contain', 'Select an address')
      //   commonElement.SelectAddress(
      //   "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      //   commonElement.clickContinueButton();
      //   cy.get("#main-content > fieldset > dl > div:nth-child(4) > dd.govuk-summary-list__actions > a").click();
      //   cy.get("#change-email").click();
      //   commonElement.clickContinueButton();
      // commonElement.clickContinueButton();

      //       commonElement.clickOnYesOption()
      // commonElement.clickContinueButton();
      // cy.get("#account").click();
      // commonElement.clickContinueButton();
      // cy.get("#change-email").click();
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();

      // work activity
      commonElement.GetApplicationTasklist('Give work activity details')
      commonElement.verifyHeaderPage(
        'What activity or development work do you plan to do?'
      )
      cy.get('#work-proposal').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Exemptions from paying for a wildlife licence'
      )
      // cy.get("#main-content > fieldset > div > fieldset > legend").should(
      //   "contain",
      //   "Do you think the purpose of your project is exempt from payment?"
      // );
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Why do you think your project is exempt from payment?'
      )
      cy.get('#work-payment-exempt-reason-8').click()
      cy.get('#exempt-details').fill(faker.random.alphaNumeric(400))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What kind of development is happening at the site?'
      )
      cy.get('#work-category').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Cost of this licence'
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
      // conser
      commonElement.GetApplicationTasklist('Give details of conservation issues')
      commonElement.verifyHeaderPage(
        'Designated sites'
      )
      // cy.get('#main-content > fieldset > div > fieldset > legend').should('contain', 'Will the activity take place on or next to any designated sites?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      cy.get('#proximity').click()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      // Permission
      commonElement.GetApplicationTasklist('Give details of permissions to start work')
      commonElement.verifyHeaderPage(
        'Does the project need any permissions?'
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Tell us about each permission the project has got'
      )
      cy.get('#continue').should('contain', 'Add the first permission').click()
      commonElement.verifyHeaderPage(
        'What permission has the project got?'
      )
      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Which planning authority granted the planning permission for this development?'
      )
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What type of planning permission was granted?'
      )
      cy.get('#planning-type-4').click()
      commonElement.clickContinueButton()
      cy.get('#other-description').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What is the Planning permission reference?'
      )
      cy.get('#reference').fill('text')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'You have added 1 permission'
      )
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Have all other wildlife or habitat-related conditions been met?'
      )
      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Are there any potential conflicts between this application and other legal commitments?'
      )
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
      commonElement.verifyHeaderPage(
        'Do you want to add an authorised person?'
      )
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
      commonElement.assertPageText('The address doesn’t have a postcode')
      commonElement.GetApplicationTasklist('The address doesn’t have a postcode')
      // commonElement.clickContinueButton();
      cy.get('#address-line-1').fill('I test drive')
      cy.get('#address-line-2').fill('ford street')
      cy.get('#address-town').fill('manchester UK')
      cy.get('#address-county').fill('Lancashire')
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      //   Add additional contacts
      commonElement.GetApplicationTasklist('Add alternative licence holder contact details')
      commonElement.clickOnYesOption() // new
      commonElement.clickContinueButton() // new
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress().clear()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      // commonElement.clickOnNoOption();();
      // commonElement.clickContinueButton();
      //       commonElement.clickOnYesOption()
      // commonElement.clickContinueButton();
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
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      cy.get('#is-organisation-2').click() // new
      commonElement.clickContinueButton() // new
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

      // cy.get("#account").click();
      // commonElement.clickContinueButton();
      // commonElement.clickOnChangeEmailOption()
      // commonElement.EnterEmailAddress.fill(faker.internet.email());
      // commonElement.clickContinueButton();
      // cy.get("#purchase-order").fill(faker.internet.email());
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();

      commonElement.GetApplicationTasklist('Give site information')
      commonElement.verifyHeaderPage(
        'What is the name of the site for planned work activity?'
      )
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
      uploadElement.clickOnUploadField()
      const Geojson = 'GeoJSON.GeoJSON'
      const kml = 'filee.KML'
      const ShpFixturePath = 'magic_polygons.shp'
      uploadElement.uploadFileField().attachFile(Geojson)
      uploadElement.clickOnUploadField()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(kml)
      uploadElement.clickOnUploadField()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(ShpFixturePath)
      uploadElement.clickOnUploadField()
      commonElement.clickContinueButton()
      //  cy.get('#site-grid-ref').fill('SP039775')
      commonElement.clickContinueButton()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      commonElement.clickContinueButton()
      cy.get("input[value='correct']").click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      // Add alternative ecologist contact details
      commonElement.GetApplicationTasklist('Add alternative ecologist contact details')
      // cy.get('h1.govuk-fieldset__heading').should('contain', 'Do you want to add an alternative contact?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give ecologist’s experience')
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get('#enter-experience').fill(faker.random.alphaNumeric(4000))
      commonElement.clickContinueButton()
      cy.get('#enter-methods').fill(faker.random.alphaNumeric(4000))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#enter-class-mitigation-details').fill('BAD-2022-agsss1')
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Upload supporting information')
      const yourFixturePath = 'virusfile.pdf'
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      const sbnFixturePath = 'magic_polygons.sbn'
      const sbxFixturePath = 'magic_polygons.sbx'
      const shpFixturePath = 'magic_polygons.shp'
      const shxFixturePath = 'magic_polygons.shx'
      const shpxmlFixturePath = 'magic_polygons.shp.xml'
      const kmlFixturePath = 'GeoJSON.geojson'
      const geojsonFixturePath = 'filee.kml'
      const untitledFolderPath = 'virusfile.zip'
      const virusFolderPath = 'virusfile.zip'

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(CpgFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(dbfFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(prjFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(sbnFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(sbxFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shpxmlFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shpFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shxFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(kmlFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(untitledFolderPath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(virusFolderPath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(geojsonFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      cy.get('#another-file-check-2').click()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Add setts the work will affect')
      commonElement.clickContinueButton()
      addSettsfunctionPage.enterHabitatName(faker.name.firstName())
      commonElement.clickContinueButton()
      addSettsfunctionPage.clickOnHabitattypeFour()
      // cy.get("#habitat-types-4").click();
      commonElement.clickContinueButton()
      cy.get("input[value='true']").click()
      commonElement.clickContinueButton()
      cy.get('#habitat-entrances').fill('100')
      commonElement.clickContinueButton()
      cy.get('#habitat-active-entrances').fill('100')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        "What is the badger sett's grid reference?"
      )
      cy.get('#habitat-grid-ref').clear()
      cy.get('#habitat-grid-ref').fill('NY123456')
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
      commonElement.verifyHeaderPage(
        'Have you or any person listed in the application been convicted of any wildlife-related or animal welfare offence?'
      )
      convictionElement.clickOnConvictionsCheck()
      commonElement.clickContinueButton()
      convictionElement.enterCovictionDetail().fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Agree to terms and send application')

      commonElement.assertPageText().contains(
        users.text18
      )
      commonElement.assertPageText().contains(
        'By sending the application you agree that you have given complete and correct information.'
      )
      commonElement.assertPageText().contains(
        'If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:'
      )
      commonElement.assertPageText().contains(
        'will uphold any conditions applied to my licence if granted'
      )
      commonElement.assertPageText().contains(
        'will abide by the terms and conditions of this service'
      )
      commonElement.assertPageText().contains(
        'will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges'
      )
      commonElement.assertPageText().contains(
        'By sending the application you confirm that:'
      )
      commonElement.assertPageText().contains(
        'an appropriate ecologist has been involved in the application and design of any mitigations'
      )
      commonElement.assertPageText().contains(
        'the ecologist supports the application'
      )
      commonElement.assertPageText().contains(
        'the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment'
      )
      commonElement.assertPageText().contains(
        'you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action'
      )
      commonElement.assertPageText().contains(
        'you will pay any charges that apply'
      )
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > table > tbody > tr:nth-child(1) > th > p > a').click()

      commonElement.VerifyPagetext().contains(
        'SUBMITTED'
      )
      commonElement.VerifyPagetext().contains(
        'Badger mitigation'
      )
      commonElement.VerifyPagetext().contains(
        'Site'
      )
      commonElement.VerifyPagetext().contains(
        'Applicant'
      )

      commonElement.VerifyPagetext().contains(
        'Application reference'
      )
      // const text1 = commonElement.VerifyPagetext().text();
      // expect(text).include(text1);
      commonElement.VerifyPagetext().contains(
        'Submitted'
      )
    })
  })
  it('SDDSIP-509 and 3 verify Licence application screen', () => {
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
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-4').click()
      commonElement.clickContinueButton()

      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.SelectYesOptionaOnIsOrganisation()
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      cy.get('#phone-number').fill(faker.phone.phoneNumber())
      commonElement.clickContinueButton()

      // commonElement.clickContinueButton();

      commonElement.clickContinueButton()
      // work activity
      commonElement.GetApplicationTasklist('Give work activity details')
      commonElement.verifyHeaderPage(
        'What activity or development work do you plan to do?'
      )
      cy.get('#work-proposal').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Exemptions from paying for a wildlife licence'
      )
      // cy.get("#main-content > fieldset > div > fieldset > legend").should(
      //   "contain",
      //   "Do you think the purpose of your project is exempt from payment?"
      // );
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'What kind of development is happening at the site?'
      )
      cy.get('#work-category-13').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Cost of this licence'
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
      commonElement.GetApplicationTasklist('Give details of conservation issues')
      commonElement.verifyHeaderPage(
        'Designated sites'
      )
      // cy.get('#main-content > fieldset > div > fieldset > legend').should('contain', 'Will the activity take place on or next to any designated sites?')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      //   cy.get("#advice-from-who").fill(
      //     faker.name.firstName() + faker.name.lastName()
      //   );
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(40))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      commonElement.clickContinueButton()
      cy.get('#proximity').click()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      // permission details
      commonElement.GetApplicationTasklist('Give details of permissions to start work')
      commonElement.verifyHeaderPage(
        'Does the project need any permissions?'
      )
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Tell us about each permission the project has got'
      )
      cy.get('#continue').should('contain', 'Add the first permission').click()
      commonElement.verifyHeaderPage(
        'What permission has the project got?'
      )
      cy.get('#consent-type-check-2').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Which planning authority granted the planning permission for this development?'
      )
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      // cy.get('h1.govuk-fieldset__heading').should('contain', 'What is the Planning permission reference?')
      cy.get('#reference').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'You have added 1 permission'
      )
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Have all other wildlife or habitat-related conditions been met?'
      )
      cy.get('#conditions-met-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-not-met-reason').fill(faker.lorem.words(5))
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(4))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      //   Give ecologist details
      commonElement.GetApplicationTasklist('Give ecologist details')
      //       commonElement.clickOnYesOption()
      // commonElement.clickContinueButton();
      commonElement.verifyHeaderPage(
        'Who is the ecologist?'
      )
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.SelectYesOptionaOnIsOrganisation() // new
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      // cy.get('#main-content > fieldset > div > label').should('contain', 'Postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      // cy.get('#main-content > fieldset > div > label').should('contain', 'Select an address')
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      // cy.get("#change-email").click();
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()

      // cy.get("#account").click();
      // commonElement.clickContinueButton();
      // cy.get("#change-email").click();
      // commonElement.clickContinueButton();
      commonElement.clickContinueButton()

      // Authorised person
      commonElement.GetApplicationTasklist('Add authorised people')
      commonElement.verifyHeaderPage(
        'Do you want to add an authorised person?'
      )
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
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      //   Add additional contacts
      commonElement.GetApplicationTasklist('Add alternative licence holder contact details')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      //       commonElement.clickOnYesOption()
      // commonElement.clickContinueButton();
      // cy.get("input[value='new']").click();
      // commonElement.clickContinueButton();
      // commonElement.EnterName(faker.name.firstName() + " " + faker.name.lastName());
      // commonElement.clickContinueButton();
      // commonElement.EnterEmailAddress().clear();
      // commonElement.EnterEmailAddress.fill(faker.internet.email());
      // commonElement.clickContinueButton();
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Add invoice details')
      cy.get('#responsible').click()
      commonElement.clickContinueButton()
      cy.get('#main-content > div > div').contains(
        'Individual responsible for paying the invoice'
      )
      commonElement.clickOnYesOption()
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
      //  Alternnative ecologist details
      commonElement.GetApplicationTasklist('Add alternative ecologist contact details')
      // cy.get('h1.govuk-fieldset__heading').should('contain', 'Do you want to add an alternative contact?')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        'Check your answers'
      )
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give site information')
      commonElement.verifyHeaderPage(
        'What is the name of the site for planned work activity?'
      )
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
      uploadElement.clickOnUploadField()
      const shpFixturePath = 'magic_polygons.shp'
      const yourFixturePath = 'virusfile.pdf'
      const shpxmlFixturePath = 'magic_polygons.shp.xml'
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shpFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shpxmlFixturePath)
      commonElement.clickContinueButton()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      commonElement.clickContinueButton()
      cy.get("input[value='correct']").click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give ecologist’s experience')
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get('#enter-experience').fill(faker.lorem.words(200))
      commonElement.clickContinueButton()
      cy.get('#enter-methods').fill(faker.lorem.words(200))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#enter-class-mitigation-details').fill(
        faker.random.alphaNumeric(100)
      )
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Upload supporting information')
      const jpgFixturePath = 'file.jpg'
      const docFixturePath = 'file.doc'
      const docxFixturePath = 'file.docx'
      const odtFixturePath = 'file.odt'
      const odsFixturePath = 'file.ods'
      const xlsFixturePath = 'file.xls'
      const xlsxFixturePath = 'file.xlsx'
      const pngFixturePath = 'file.png'
      const tifFixturePath = 'file.tif'
      const bmpFixturePath = 'file.bmp'

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(jpgFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(docFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()

      uploadElement.uploadFileField().attachFile(docxFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(odtFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(odsFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(xlsFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(xlsxFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(pngFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(tifFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(bmpFixturePath)
      commonElement.clickContinueButton()
      cy.get('#another-file-check-2').click()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Add setts the work will affect')
      commonElement.clickContinueButton()
      addSettsfunctionPage.enterHabitatName(faker.name.firstName())
      commonElement.clickContinueButton()
      addSettsfunctionPage.clickOnHabitattypeFour()
      // cy.get("#habitat-types-4").click();
      commonElement.clickContinueButton()
      cy.get("input[value='true']").click()
      commonElement.clickContinueButton()
      cy.get('#habitat-entrances').fill('7')
      commonElement.clickContinueButton()
      cy.get('#habitat-active-entrances').fill('5')
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(
        "What is the badger sett's grid reference?"
      )
      cy.get('#habitat-grid-ref').clear()
      cy.get('#habitat-grid-ref').fill('NY123456')
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
      commonElement.verifyHeaderPage(
        'Have you or any person listed in the application been convicted of any wildlife-related or animal welfare offence?'
      )
      cy.get('#convictions-check-2').click()
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      // commonElement.GetApplicationTasklist("Agree to terms and send application");
      commonElement.assertPageText().contains(
        users.text18
      )

      //           By sending the application you agree that you have given complete and correct information.

      // If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:

      // will uphold any conditions applied to my licence if granted
      // will abide by the terms and conditions of this service
      // will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges
      // By sending the application you confirm that:

      // an appropriate ecologist has been involved in the application and design of any mitigations
      // the ecologist supports the application
      // the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment
      // you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action
      // you will pay any charges that apply

      commonElement.assertPageText().contains(
        'By sending the application you agree that you have given complete and correct information.'
      )
      commonElement.assertPageText().contains(
        'If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:'
      )
      commonElement.assertPageText().contains(
        'will uphold any conditions applied to my licence if granted'
      )
      commonElement.assertPageText().contains(
        'will abide by the terms and conditions of this service'
      )
      commonElement.assertPageText().contains(
        'will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges'
      )
      commonElement.assertPageText().contains(
        'By sending the application you confirm that:'
      )
      commonElement.assertPageText().contains(
        'an appropriate ecologist has been involved in the application and design of any mitigations'
      )
      commonElement.assertPageText().contains(
        'the ecologist supports the application'
      )
      commonElement.assertPageText().contains(
        'the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment'
      )
      commonElement.assertPageText().contains(
        'you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action'
      )
      commonElement.assertPageText().contains(
        'you will pay any charges that apply'
      )
      commonElement.assertPageText().contains(
        'you will pay any charges that apply'
      )

      commonElement.clickContinueButton()
      cy.get('#main-content > div > div > form').contains('Application sent')
      cy.get('#main-content > div > div > form').contains(
        'Your reference number'
      )

      commonElement.clickContinueButton()
      // cy.get("#main-content > fieldset > table")
      //   .find("tr")
      //   .then((row) => {
      //     //row.length will give you the row count
      //     cy.log(row.length);

      // cy.get('tbody>tr').find(href).last.click()
      // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
      // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
      cy.wait(3000)
      cy.get('#main-content > fieldset > table > tbody > tr:nth-child(1) > th > p > a').click()

      commonElement.VerifyPagetext().contains(
        'SUBMITTED'
      )

      commonElement.VerifyPagetext().contains(
        'Badger mitigation'
      )
      commonElement.VerifyPagetext().contains(
        'Site'
      )
      commonElement.VerifyPagetext().contains(
        'Applicant'
      )

      commonElement.VerifyPagetext().contains(
        'Application reference'
      )
      // const text1 = commonElement.VerifyPagetext().text();
      // expect(text).include(text1);
      commonElement.VerifyPagetext().contains(
        'Submitted'
      )
    })
  })
})
