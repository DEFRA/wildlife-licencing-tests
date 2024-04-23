const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const addSettsfunctionPage = require('../pageObjects/addSettsPage.js')

describe('Add sett', () => {
  it(' 1 Verify happy path -  Add setts ', () => {
    cy.viewport(550, 750) // Set viewport to 550px x 750px
    cy.viewport('iphone-6') // Set viewport to 375px x 667px
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      commonElement.clickContinueButton()
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-4').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#yes-no-2').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement
        .GetApplicationTasklist('Add setts the work will affect')
        .click()
      cy.url().should('include', '/sett-start')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-name')
      addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-use-category')
      addSettsfunctionPage.clickOnHabitattypeOne()
      // cy.get("#habitat-types").click();
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-reopened-after-development')

      cy.get("input[value='true']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-entrances-value')

      cy.get('#habitat-entrances').fill('100')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-active-entrance-total')

      cy.get('#habitat-active-entrances').fill('100')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-grid-reference')

      cy.get('#habitat-grid-ref').fill('NY123456')
      commonElement.clickContinueButton()
      cy.url().should('include', '/start-date-licensed-activity-on-this-sett')

      cy.get("input[id='habitat-work-start-day']").fill('1')
      addSettsfunctionPage.enterWorkStartMonth().fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      commonElement.clickContinueButton()
      cy.url().should('include', '/end-date-licensed-activity-on-this-sett')

      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-disturbance-methods')

      cy.get("input[id='habitat-activities']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/check-habitat-answers')

      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })
  })
  it(' 1 Verify happy path -  Add setts ', () => {
    cy.viewport(414, 846) // Set viewport to 550px x 750px
    cy.viewport('samsung-note9', 'landscape') // Set viewport to 375px x 667px
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      commonElement.clickContinueButton()
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-4').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#yes-no-2').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement
        .GetApplicationTasklist('Add setts the work will affect')
        .click()
      cy.url().should('include', '/sett-start')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-name')
      addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-use-category')

      cy.get('#habitat-types').click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-reopened-after-development')

      cy.get("input[value='true']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-entrances-value')

      cy.get('#habitat-entrances').fill('100')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-active-entrance-total')

      cy.get('#habitat-active-entrances').fill('100')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-grid-reference')

      cy.get('#habitat-grid-ref').fill('NY123456')
      commonElement.clickContinueButton()
      cy.url().should('include', '/start-date-licensed-activity-on-this-sett')

      cy.get("input[id='habitat-work-start-day']").fill('1')
      addSettsfunctionPage.enterWorkStartMonth().fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      commonElement.clickContinueButton()
      cy.url().should('include', '/end-date-licensed-activity-on-this-sett')

      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      commonElement.clickContinueButton()
      cy.url().should('include', '/sett-disturbance-methods')

      cy.get("input[id='habitat-activities']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/check-habitat-answers')

      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })
  })
})
