import { faker } from '@faker-js/faker';


describe('Page title verification', () => {
  it('the login page loads', () => {
      cy.visit(Cypress.env('URL'))
      cy.fixture('users.json').then(users => {
        cy.get('body > div').contains(users.signInText);
        console.log(users.email)
        cy.get('#user-id').type(users.email);
      })
    })

    it('the login page loads', () => {
      cy.visit(Cypress.env('URL'))
      cy.fixture('users.json').then(users => {
        cy.get('body > div').contains(users.signInText);
        console.log(users.email)
        cy.get('#user-id').type(users.email);
      })
    })
      it('the login page loads', () => {
        cy.visit(Cypress.env('URL'))
        cy.fixture('users.json').then(users => {
          cy.get('#user-id').type(users.email);
          cy.get('#continue').click();
          cy.get('.govuk-heading-xl').contains(users.nextpage);
        })
    
  })
  it('the login page loads', () => {
    cy.visit(Cypress.env('URL'))
    const email = faker.internet.email(); // Kassandra.Haley@erich.biz
      cy.get('#user-id').type(email);
      cy.get('a.govuk-link govuk-body-m').click();
      cy.get('#user-id').type(email);
      cy.get('#continue').click();
      // cy.get('a.govuk-link govuk-body-m').click();
      cy.get('#main-content > div > div > form > fieldset > table > tbody > tr > th > p.govuk-body.govuk-\!-font-weight-bold.govuk-\!-margin-bottom-2 > a').click();
      cy.get('#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a').click();
  
})


it.only('Verify CD49 - Landowner permission copy-deck', () => {
  cy.visit(Cypress.env('URL'))
  cy.fixture('users.json').then(users => {
    cy.get('#user-id').type(users.email);
    cy.get('#continue').click();
    cy.get('.govuk-heading-xl').contains(users.nextpage);
  cy.get('#yes-no').check("2"); 
  cy.get('#continue').click();
  cy.fixture('eligibility-copydeck.json').then(eligibility => {
  // cy.get('.#main-content > div > div > form > fieldset > legend > h1').contains(eligibility.text1)
})
})
})
})