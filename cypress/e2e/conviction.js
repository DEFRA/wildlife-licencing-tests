const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const convictionElement = require('../pageObjects/convictionPage.js')
// const converservativeIssueElement = require("../pageObjects/giveconservationIssuePage.js");
// const uploadElement = require("../pageObjects/uploadPage.js");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  beforeEach(() => {
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
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
    })
  })

  it('1 verify conviction details', () => {
    commonElement
      .GetApplicationTasklist('Declare convictions')
    cy.get('#convictions-check-2').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    convictionElement.Verifypage().contains('COMPLETED')
  })

  it('2 Verify conviction detail', () => {
    commonElement.GetApplicationTasklist('Declare convictions')
    cy.get('#convictions-check-2').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
  })

  it('3 and verify application season period screen', () => {
    commonElement
      .GetApplicationTasklist('Declare convictions')
    convictionElement.clickOnConvictionsCheck()
    commonElement.clickContinueButton()
    convictionElement
      .enterCovictionDetail()
      .fill(faker.random.alphaNumeric(30))
    commonElement.clickContinueButton()
  })

  it('4 and verify application season period screen', () => {
    commonElement
      .GetApplicationTasklist('Declare convictions')
    convictionElement.clickOnConvictionsCheck()
    commonElement.clickContinueButton()
    convictionElement
      .enterCovictionDetail()
      .fill(faker.random.alphaNumeric(40))
    commonElement.clickContinueButton()
  })

  it('5 and verify application season period screen', () => {
    commonElement
      .GetApplicationTasklist('Declare convictions')
    convictionElement.clickOnConvictionsCheck()
    commonElement.clickContinueButton()
    convictionElement
      .enterCovictionDetail()
      .fill(faker.random.alphaNumeric(300))
    commonElement.clickContinueButton()
  })

  it('6 and verify application season period screen', () => {
    commonElement
      .GetApplicationTasklist('Declare convictions')

    convictionElement.clickOnConvictionsCheck()
    commonElement.clickContinueButton()
    convictionElement
      .enterCovictionDetail()
      .fill(faker.random.alphaNumeric(301))
    commonElement.clickContinueButton()
    commonElement
      .VerifyPage('You have entered too many characters')
    commonElement
      .VerifyPage('Convictions for animal or wildlife offences')
    commonElement
      .VerifyPage(
        'You only need to tell us about convictions within the last 5 years or unspent convictions. Check whether your convictions are spent.'
      )
    commonElement
      .VerifyPage(
        'If people listed on this application have animal related or wildlife convictions the application may:'
      )
    commonElement.VerifyPage('be subject to more checks')
    commonElement.VerifyPage('take more time to process')
    commonElement
      .VerifyPage(
        'You may need to give Natural England more information about these offences.'
      )
    commonElement
      .VerifyPage('Describe the convictions and their dates')
  })
})
