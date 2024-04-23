const faker = require('faker')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const commonElement = require('../pageObjects/common.js')

describe('Give ecologist details', () => {
  beforeEach(() => {
    //   cy.visit(Cypress.env('login'))
    //   cy.fixture('users.json').then((users) => {
    //     cy.get('#username').fill(users.email1)
    //     cy.get('#password').fill(users.password1)
    //     commonElement.clickContinueButton();

    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.wait(2000)
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#user-role-4').click()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
    })
  })
  it('1 Verify happy path - Give ecologist details', () => {
    commonElement.GetApplicationTasklist('Give ecologist details')
    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton() // new

    // commonElement.clickOnYesOption();
    // commonElement.clickContinueButton();
    // cy.get("input[value='new']").click();
    // commonElement.clickContinueButton();
    commonElement.SelectYesOptionaOnIsOrganisation
    commonElement.EnterOrganisationName(faker.company.bs())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    cy.get(':nth-child(5) > .govuk-summary-list__actions > .govuk-link').click()
    commonElement.clickOnChangeEmailOption()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('Give ecologist details')
  })

  it('2 Verify happy path - Give ecologist details', () => {
    commonElement.GetApplicationTasklist('Give ecologist details')
    commonElement.EnterName(
      faker.name.firstName() + ' ' + faker.name.lastName()
    )
    commonElement.clickContinueButton()
    cy.get('#is-organisation-2').click()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()

    // commonElement.clickOnNoOption();
    // commonElement.clickContinueButton();
    // cy.get("#contact").click();
    // commonElement.clickContinueButton();
    // cy.get("#account").click();
    // commonElement.clickContinueButton();
    // commonElement.clickContinueButton();
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('Give ecologist details')
  })

  it('3 Verify happy path - Give ecologist details', () => {
    commonElement.GetApplicationTasklist('Give ecologist details')
    // commonElement.clickOnNoOption();
    // commonElement.clickContinueButton();
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.EnterName(
      faker.name.firstName() + ' ' + faker.name.lastName()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.SelectYesOptionaOnIsOrganisation
    commonElement.EnterOrganisationName(faker.company.bs())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('Give ecologist details')
  })

  it('3a Verify happy path - Give ecologist details', () => {
    commonElement.GetApplicationTasklist('Give ecologist details')
    // commonElement.clickOnNoOption();
    // commonElement.clickContinueButton();
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.EnterName(
      faker.name.firstName() + ' ' + faker.name.lastName()
    )
    commonElement.clickContinueButton()
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.SelectYesOptionaOnIsOrganisation
    commonElement.EnterOrganisationName(faker.company.bs())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode.fill(faker.random.alphaNumeric(20))
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul > li > a'
    ).contains('Enter a correct UK postcode')
    cy.get('#main-content > div > div').contains('Enter the postcode')
  })

  it('4 Verify happy path - Give ecologist details', () => {
    commonElement.GetApplicationTasklist('Give ecologist details')
    // commonElement.clickOnNoOption();
    // commonElement.clickContinueButton();
    cy.get('#contact').click()
    commonElement.clickContinueButton()
    cy.get('#account').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)'
    ).contains('Give ecologist details')
  })
})
