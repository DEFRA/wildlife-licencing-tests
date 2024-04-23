const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

describe('Page title verification', () => {
  it('1 Verify happy path - other species', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      cy.get('#species-3').click()
      commonElement.clickContinueButton()
      cy.fixture('testdata.json').then((testdata) => {
        cy.get('fieldset.govuk-fieldset').contains(testdata.otherspecies)
        cy.get('fieldset.govuk-fieldset').contains(testdata.otherspeciestext1)
        cy.get('fieldset.govuk-fieldset').contains(testdata.otherspeciestext2)
      })
    })
  })
  it('2 Verify happy path - other species', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      cy.fixture('testdata.json').then((testdata) => {
        cy.get('fieldset.govuk-fieldset').contains(
          testdata.checkdevelopmentlinktext
        )
        cy.get('fieldset.govuk-fieldset').contains(testdata.checkdevelopment)
      })
    })
  })
})
