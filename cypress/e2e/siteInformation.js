const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

describe('Site Information', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill(faker.random.alphaNumeric(100))
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('M24 6dh')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select(
      '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
    )
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const yourFixturePath = 'virusfile.pdf'
    const sbnFixturePath = 'magic_polygons.sbn'

    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(sbnFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
    ).click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
    ).click()
    cy.get('#site-name').fill(faker.name.firstName())
    commonElement.clickContinueButton()
    // cy.get("#address-line-1").fill("3");
    // cy.get("#address-line-2").fill("man");
    // cy.get("#address-town").fill("manchester");
    // cy.get("#address-county").fill("Manchester");
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select(
      '10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
    )
    commonElement.clickContinueButton()
    commonElement.clickContinueButton() // cy.scrollTo(0, 1000)
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 2 Verify happy path - site information', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('M24 6dh')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select(
      '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
    )
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const yourFixturePath = 'virusfile.pdf'
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').fill('NY395557')
    commonElement.clickContinueButton()
    cy.get('#address-and-grid-reference-mismatch').click()
    commonElement.clickContinueButton()
    cy.get('#site-postcode').clear()
    cy.get('#site-postcode').fill('M9 7bq')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, OSTERLEY ROAD, MANCHESTER, M9 7BQ')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()

    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
    ).click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 3 Verify happy path - site information', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('M24 6dh')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select(
      '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
    )
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const yourFixturePath = 'virusfile.pdf'
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get('#address-and-grid-reference-mismatch-2').click()
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='correct']").click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})

it(' 4 Verify happy path - site information and selected all answers are correct', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check-2').click()
    commonElement.clickContinueButton()
    cy.get('#address-line-1').fill('3')
    cy.get('#address-line-2').fill('man')
    cy.get('#address-town').fill('manchester')
    cy.get('#address-county').fill('Manchester')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const yourFixturePath = 'virusfile.pdf'
    const sbxFixturePath = 'magic_polygons.sbx'
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(sbxFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
    ).click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
    ).click()
    cy.get('#site-name').fill('test2')
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#address-line-1').fill('3')
    cy.get('#address-line-2').fill('man')
    cy.get('#address-town').fill('manchester')
    cy.get('#address-county').fill('Manchester')
    commonElement.clickContinueButton()
    // cy.get("#siteAddress").select(
    //   "10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
    // );
    // commonElement.clickContinueButton();

    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it('5 Verify happy path - site information', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check-2').click()
    commonElement.clickContinueButton()
    cy.get('#address-line-1').fill('3')
    cy.get('#address-line-2').fill('man')
    cy.get('#address-town').fill('manchester')
    cy.get('#address-county').fill('Manchester')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const yourFixturePath = 'virusfile.pdf'
    const typewritterFixturePath = 'typewriter.jpg'
    const shpxmlFixturePath = 'magic_polygons.shp.xml'
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(typewritterFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(shpxmlFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get('#address-and-grid-reference-mismatch').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#address-line-1').fill('33')
    cy.get('#address-line-2').fill('mantest')
    cy.get('#address-town').fill('manchester')
    cy.get('#address-county').fill('Manchester')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(typewritterFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(shpxmlFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
    ).click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 6 Verify happy path - site information', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check-2').click()
    commonElement.clickContinueButton()
    cy.get('#address-line-1').fill(faker.random.alpha(80))
    cy.get('#address-line-2').fill(faker.random.alpha(80))
    cy.get('#address-town').fill(faker.random.alpha(80))
    cy.get('#address-county').fill(faker.random.alpha(20))
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
    cy.get('#address-and-grid-reference-mismatch').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#address-line-1').clear()
    cy.get('#address-line-1').fill('4')
    cy.get('#address-line-2').clear()
    cy.get('#address-line-2').fill('manchester')
    cy.get('#address-town').clear()
    cy.get('#address-town').fill('manchestertown')
    cy.get('#address-county').clear()
    cy.get('#address-county').fill('Manchester')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
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
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 7a Verify happy path - site information - close proximity', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('B38 9SH')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const emptyFixturePath = 'magic_polygons.shp'

    const dbfFixturePath = 'magic_polygons.dbf'
    const prjFixturePath = 'magic_polygons.prj'
    uploadElement.uploadFileField().attachFile(emptyFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(dbfFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(prjFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='correct']").click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 7b Verify happy path - site information - close proximity', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('B38 9SH')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const CpgFixturePath = 'magic_polygons.cpg'
    const sbnFixturePath = 'magic_polygons.sbn'
    const sbxFixturePath = 'magic_polygons.sbx'
    uploadElement.uploadFileField().attachFile(CpgFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(sbnFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(sbxFixturePath)
    commonElement.clickContinueButton() // cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='correct']").click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 7c Verify happy path - site information - close proximity', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('B38 9SH')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    const untitledFolderPath = 'untitled folder.zip'
    const virusFixturePath = 'virus.doc'
    const viruspdfFixturePath = 'virus.pdf'
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(untitledFolderPath)
    commonElement.clickContinueButton()
    commonElement.VerifyPage(
      'The selected file contains a virus. Upload a different file.'
    )
    uploadElement.uploadFileField().attachFile(viruspdfFixturePath)
    commonElement.clickContinueButton()
    commonElement.VerifyPage(
      'The selected file contains a virus. Upload a different file.'
    )
    uploadElement.uploadFileField().attachFile(virusFixturePath)
    commonElement.clickContinueButton()
    commonElement.VerifyPage(
      'The selected file must be a JPG, PNG, KML, Shape, GeoJSON, PDF or ZIP.'
    )
  })
})
it(' 7d Verify happy path - site information - close proximity', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('B38 9SH')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    // uploadElement.clickOnUploadField()
    const overviewFixturePath = 'OVERVIEW.jpg'
    const typewritterFixturePath = 'typewriter.jpg'
    const dbfFixturePath = 'magic_polygons.cpg'
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(dbfFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(overviewFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(typewritterFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='correct']").click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
  })
})
it(' 7e Verify happy path - site information - close proximity', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('B38 9SH')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    const CpgFixturePath = 'magic_polygons.cpg'
    const dbfFixturePath = 'magic_polygons.dbf'
    const prjFixturePath = 'magic_polygons.prj'

    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(CpgFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(dbfFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(prjFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='correct']").click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it(' 7f Verify happy path - site information - close proximity', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('B38 9SH')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const Geojson = 'GeoJSON.GeoJSON'
    const kml = 'filee.KML'
    const shpFixturePath = 'magic_polygons.shp'
    uploadElement.uploadFileField().attachFile(Geojson)
    uploadElement.clickOnUploadField()
    commonElement.clickContinueButton()
    uploadElement.uploadFileField().attachFile(kml)
    uploadElement.clickOnUploadField()
    commonElement.clickContinueButton()
    uploadElement.uploadFileField().attachFile(shpFixturePath)
    uploadElement.clickOnUploadField()
    commonElement.clickContinueButton() //  cy.get('#site-grid-ref').fill('SP039775')
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').clear()
    cy.get('#site-grid-ref').fill(
      'NY' + faker.datatype.number({ min: 100000 }).toString()
    )
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
    ).click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
    ).click()
    cy.get('#site-name').fill(faker.name.firstName())
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
    ).contains('Give site information')
  })
})
it('7g Verify happy path - site information', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.fixture('users.json').then((users) => {
    eligibilityfunctionPage.enterIdmUsername(users.email1)
    eligibilityfunctionPage.enterIdmPassword(users.password1)
    commonElement.clickContinueButton()
    commonElement.verifyHeaderPage(users.nextpage)
    commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('Give site information').click()
    cy.get('#site-name').fill('test')
    commonElement.clickContinueButton()
    cy.get('#site-postcode-check').click()
    cy.get('#site-postcode').fill('M24 6dh')
    commonElement.clickContinueButton()
    cy.get('#siteAddress').select(
      '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
    )
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    const yourFixturePath = 'virusfile.pdf'
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    uploadElement.clickOnUploadField()
    uploadElement.uploadFileField().attachFile(yourFixturePath)
    commonElement.clickContinueButton()
    cy.get('#site-grid-ref').fill('NY3955578939555789083955578908')
    commonElement.clickContinueButton()
    commonElement.VerifyPage(
      'The grid reference you have entered is not in the right format'
    )
    commonElement.VerifyPage(
      'Enter a national grid reference for the site'
    )
  })
})
