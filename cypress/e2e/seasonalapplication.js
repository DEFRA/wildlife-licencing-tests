const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('1 and verify application season period screen', () => {
    cy.request(

      '/set-sysdate?iso-string=2024-12-01T01:00:00.000Z'
    )
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email3)
      cy.get('#password').fill(users.password2)
      cy.get('#continue').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        cy.get('div.govuk-width-container ').contains(eligibility1.text2)
        cy.get('div.govuk-width-container ').contains('Yes')
        cy.get('div.govuk-width-container ').contains('No')
        cy.get('div.govuk-width-container ').contains('Back')
        cy.get('div.govuk-width-container ').contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
     })
    it('2 and verify application season period screen', () => {
      cy.request(
        '/set-sysdate?iso-string=2024-04-30T01:00:00.000Z'
      )
      cy.request(
        '/reset?username=user1@email.com'
      )
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email3)
        cy.get('#password').fill(users.password2)
        cy.get('#continue').click()
        cy.get('#species').click()
        cy.get('#continue').click()
        cy.get('#yes-no-2').click()
        cy.get('#continue').click()
        cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
          cy.get('div.govuk-width-container ').contains(eligibility1.text2)
          cy.get('div.govuk-width-container ').contains('Yes')
          cy.get('div.govuk-width-container ').contains('No')
          cy.get('div.govuk-width-container ').contains('Back')
          cy.get('div.govuk-width-container ').contains('Continue')
          cy.request('/reset-sysdate')
        })
      })
    })
    it('3 and verify application season period screen', () => {
      cy.request(

        '/set-sysdate?iso-string=2024-12-01T01:00:00.000Z'
      )
      cy.request(
        '/reset?username=user1@email.com'
      )
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email3)
        cy.get('#password').fill(users.password2)
        cy.get('#continue').click()
        cy.get('#species').click()
        cy.get('#continue').click()
        cy.get('#yes-no-2').click()
        cy.get('#continue').click()
        cy.get('h1.govuk-fieldset__heading').contains(
          'Licences are typically issued between July and November to protect badger welfare'
        )
      })
    })
    it('4 and verify application season period screen', () => {
      cy.request(

        '/set-sysdate?iso-string=2024-12-01T01:00:00.000Z'
      )
      cy.request(
        '/reset?username=user1@email.com'
      )
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email3)
        cy.get('#password').fill(users.password2)
        cy.get('#continue').click()
        cy.get('#species').click()
        cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#continue').click()
        cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        cy.get('div.govuk-width-container ').contains(eligibility1.text2)
        cy.get('div.govuk-width-container ').contains('Yes')
        cy.get('div.govuk-width-container ').contains('No')
        cy.get('div.govuk-width-container ').contains('Back')
        cy.get('div.govuk-width-container ').contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
    })
    it('5 and verify application season period screen', () => {
      cy.request(

        '/set-sysdate?iso-string=2024-03-31T01:00:00.000Z'
      )
      cy.request(
        '/reset?username=user1@email.com'
      )
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email3)
        cy.get('#password').fill(users.password2)
        cy.get('#continue').click()
        cy.get('#species').click()
        cy.get('#continue').click()
        cy.get('#yes-no-2').click()
        cy.get('#continue').click()
        cy.get('h1.govuk-fieldset__heading').contains(
          'Licences are typically issued between July and November to protect badger welfare'
        )
      })
    })
    it('6 and verify application season period screen', () => {
      cy.request(

        '/set-sysdate?iso-string=2024-03-31T01:00:00.000Z'
      )
      cy.request(
        '/reset?username=user1@email.com'
      )
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email3)
        cy.get('#password').fill(users.password2)
        cy.get('#continue').click()
        cy.get('#species').click()
        cy.get('#continue').click()
        cy.get('#yes-no-2').click()
        cy.get('#continue').click()
        cy.get('h1.govuk-fieldset__heading').contains(
          'Licences are typically issued between July and November to protect badger welfare'
        )
      })
    })
    it('7 and verify application season period screen', () => {
      cy.request(

        '/set-sysdate?iso-string=2024-04-01T01:00:00.000Z'
      )
      cy.request(
        '/reset?username=user1@email.com'
      )
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email3)
        cy.get('#password').fill(users.password2)
        cy.get('#continue').click()
        cy.get('#species').click()
        cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#continue').click()
        cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        cy.get('div.govuk-width-container ').contains(eligibility1.text2)
        cy.get('div.govuk-width-container ').contains('Yes')
        cy.get('div.govuk-width-container ').contains('No')
        cy.get('div.govuk-width-container ').contains('Back')
        cy.get('div.govuk-width-container ').contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
  }) 
 })
