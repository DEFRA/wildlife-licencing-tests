const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

describe('cookies', () => {
  it('1 verify cookies', () => {
    cy.request(
      '/reset?username=delelookman%2B2@gmail.com'
    )
    cy.visit(Cypress.env('baseUrl'))

    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email6)
      eligibilityfunctionPage.enterIdmPassword(users.password6)
      commonElement.clickContinueButton()
      cy.wait(7000)
      cy.get('body > div.govuk-cookie-banner'
      ).contains('Cookies on apply for and manage a wildlife licence')

      // commonElement.clickContinueButton();
      // eligibilityfunctionPage.enterIdmPassword(users.password1);
      // commonElement.clickContinueButton();

      cy.get('body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a').click()
      cy.get('#yes-no').should('not.checked')
      cy.get('#yes-no-2').should('not.checked')
      // cy.clearAllCookies();
      // cy.getCookies().should('be.empty');

      // cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();

      // cy.get("#main-content > fieldset > div > div").should('not.be.visible');

      // cy.get("#yes-no").should('not.be.selected')
      // cy.get("#yes-no").should('not.be.selected')
      // eligibilityfunctionPage.selectBadgerOption();
      // commonElement.clickContinueButton();
      // commonElement.clickOnNoOption();
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();
      // cy.get("#yes-no").click()
      // commonElement.clickContinueButton();
      // commonElement.clickOnYesOption();
    })
  })
  it('1a verify cookies', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email6)
      eligibilityfunctionPage.enterIdmPassword(users.password6)
      commonElement.clickContinueButton()
      cy.get('body > div.govuk-cookie-banner > div > div.govuk-grid-row > div > h2').contains('Cookies on apply for and manage a wildlife licence')
      cy.get('.govuk-button-group > .govuk-link').click()
      // cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();

      cy.get('#yes-no').should('not.checked')
      cy.get('#yes-no-2').should('not.checked')
      // cy.clearAllCookies();
      // cy.getCookies().should('be.empty');

      // cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();

      // cy.get("#main-content > fieldset > div > div").should('not.be.visible');

      // cy.get("#yes-no").should('not.be.selected')
      // cy.get("#yes-no").should('not.be.selected')
      // eligibilityfunctionPage.selectBadgerOption();
      // commonElement.clickContinueButton();
      // commonElement.clickOnNoOption();
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();
      // cy.get("#yes-no").click()
      // commonElement.clickContinueButton();
      // commonElement.clickOnYesOption();
    })
  })
  it('2 verify cookies', () => {
    cy.request(
      '/reset?username=delelookman%2B2@gmail.com'
    )
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email6)
      eligibilityfunctionPage.enterIdmPassword(users.password6)
      commonElement.clickContinueButton()
      cy.wait(7000)
      cy.get('body > div.govuk-cookie-banner > div > div.govuk-button-group > a:nth-child(1)').click()
      //   cy.clearCookies()
      cy.get('body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a').click()
      cy.get('#yes-no').should('be.checked')
      cy.get('#yes-no-2').should('not.checked')
    })
  })
  it('3 verify cookies', () => {
    cy.request(
      '/reset?username=delelookman%2B2@gmail.com'
    )

    cy.visit(Cypress.env('baseUrl'))

    // cy.clearCookies();

    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email6)
      eligibilityfunctionPage.enterIdmPassword(users.password6)
      commonElement.clickContinueButton()
      cy.wait(7000)
      cy.get('body > div.govuk-cookie-banner > div > div.govuk-button-group > a:nth-child(2)').click()

      cy.get('body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a').click()
      cy.get('#yes-no-2').should('be.checked')
      cy.get('#yes-no').should('not.checked')
    })
  })
  it('4 verify cookies', () => {
    cy.request(
      '/reset?username=delelookman%2B2@gmail.com'
    )
    cy.visit(Cypress.env('baseUrl'))
    // cy.clearCookies();
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email6)
      eligibilityfunctionPage.enterIdmPassword(users.password6)
      commonElement.clickContinueButton()
      cy.wait(7000)
      cy.get('body > div.govuk-cookie-banner > div > div.govuk-button-group > a.govuk-link').click()
      cy.get('body > div:nth-child(5)').contains('Cookies')
      cy.get('body > div:nth-child(5)').contains('Essential cookies')
      cy.get('body > div:nth-child(5)').contains('Analytics cookies (optional)')
      cy.get('body > div:nth-child(5)').contains('Back')
      cy.get('body > div:nth-child(5)').contains('Do you want to accept analytics cookies?')
    })
    it('5 verify cookies', () => {
      cy.request(
        '/reset?username=delelookman%2B2@gmail.com'
      )
      cy.visit(Cypress.env('baseUrl'))
      cy.clearCookies()
      cy.fixture('users.json').then((users) => {
        eligibilityfunctionPage.enterIdmUsername(users.email6)
        eligibilityfunctionPage.enterIdmPassword(users.password6)
        commonElement.clickContinueButton()
        cy.wait(7000)
        cy.get('body > div.govuk-cookie-banner > div > div.govuk-button-group > a.govuk-link').click()
        cy.get('#backlink-div > a').click()
        cy.get('#main-content > fieldset').contains('Sign in')
      })
    })
    it('6 verify cookies', () => {
      cy.request(
        '/reset?username=delelookman%2B2@gmail.com'
      )
      cy.visit(Cypress.env('baseUrl'))
      // cy.clearCookies();
      cy.fixture('users.json').then((users) => {
        eligibilityfunctionPage.enterIdmUsername(users.email6)
        eligibilityfunctionPage.enterIdmPassword(users.password6)
        commonElement.clickContinueButton()
        //  cy.wait(7000)
        cy.get('body > div.govuk-cookie-banner > div > div.govuk-button-group > a:nth-child(1)').click()
        cy.get('#backlink-div > a').click()
        cy.get('#main-content > fieldset').contains('Sign in')
      })
    })
  })
})
