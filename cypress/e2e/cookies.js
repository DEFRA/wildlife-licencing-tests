describe('cookies', () => {
    it("1 verify cookies", () => {
      cy.visit(Cypress.env("login"));
      cy.get(
        "body > div.govuk-cookie-banner > div > div.govuk-grid-row > div > h2"
        ).contains('Cookies on the wildlife licencing service');
        cy.fixture("users.json").then((users) => {
        cy.get("#username").fill(users.email9);
        cy.get("#password").fill(users.password9);
        cy.get("#continue").click()
        cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();
        cy.get("#yes-no").should('not.checked')
        cy.get("#yes-no-2").should('not.checked')
        // cy.clearAllCookies();
        // cy.getCookies().should('be.empty');
       
        // cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();
      
       // cy.get("#main-content > fieldset > div > div").should('not.be.visible');

        // cy.get("#yes-no").should('not.be.selected')
        // cy.get("#yes-no").should('not.be.selected')
        // cy.get("#species").click();
        // cy.get("#continue").click();
        // cy.get("#yes-no-2").click();
        // cy.get("#continue").click();
        // cy.get("#continue").click();
        // cy.get("#yes-no").click()
        // cy.get("#continue").click();
        // cy.get("#yes-no").click();
    })
})
it("1a verify cookies", () => {
    cy.visit(Cypress.env("login"));
    cy.get(
      "body > div.govuk-cookie-banner > div > div.govuk-grid-row > div > h2"
      ).contains('Cookies on the wildlife licencing service');
      cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();
      cy.get("#yes-no").should('not.checked')
      cy.get("#yes-no-2").should('not.checked')
      // cy.clearAllCookies();
      // cy.getCookies().should('be.empty');
     
      // cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();
    
     // cy.get("#main-content > fieldset > div > div").should('not.be.visible');

      // cy.get("#yes-no").should('not.be.selected')
      // cy.get("#yes-no").should('not.be.selected')
      // cy.get("#species").click();
      // cy.get("#continue").click();
      // cy.get("#yes-no-2").click();
      // cy.get("#continue").click();
      // cy.get("#continue").click();
      // cy.get("#yes-no").click()
      // cy.get("#continue").click();
      // cy.get("#yes-no").click();
})
it("2 verify cookies", () => {
    cy.visit(Cypress.env("login"));
       cy.get("body > div.govuk-cookie-banner > div > div.govuk-button-group > a:nth-child(1)").click()
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email6);
      cy.get("#password").fill(users.password6);
      cy.get("#continue").click();
    //   cy.clearCookies()
      cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();
     cy.get("#yes-no").should('be.checked')
     cy.get("#yes-no-2").should('not.checked')

})
})
it("3 verify cookies", () => {
    cy.visit(Cypress.env("login"));
    cy.clearCookies();
  
       cy.get("body > div.govuk-cookie-banner > div > div.govuk-button-group > a:nth-child(2)").click()
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email6);
      cy.get("#password").fill(users.password6);
      cy.get("#continue").click();
    
          cy.get("body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li > a").click();
      cy.get("#yes-no-2").should('be.checked')
      cy.get("#yes-no").should('not.checked')

  
})
})
it("4 verify cookies", () => {
    cy.visit(Cypress.env("login"));
    cy.clearCookies();

       cy.get("body > div.govuk-cookie-banner > div > div.govuk-button-group > a.govuk-link").click()
  cy.get('body > div:nth-child(5)').contains('Cookies')
  cy.get('body > div:nth-child(5)').contains('Essential cookies')
  cy.get('body > div:nth-child(5)').contains('Analytics cookies (optional)')
  cy.get('body > div:nth-child(5)').contains('Back')
  cy.get('body > div:nth-child(5)').contains('Do you want to accept analytics cookies?')
})
it("5 verify cookies", () => {
    cy.visit(Cypress.env("login"));
    cy.clearCookies();
       cy.get("body > div.govuk-cookie-banner > div > div.govuk-button-group > a.govuk-link").click()
       cy.get("#backlink-div > a").click()
  cy.get('#main-content > fieldset').contains('Sign in')
  
})
})