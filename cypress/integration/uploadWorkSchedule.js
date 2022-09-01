const faker = require('faker');

/**
   * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   * Function Testing
   * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   */

describe("Page title verification", () => {
    it("Verify CD1 - Landowner copy-deck", () => {
      cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.fixture("users.json").then((users) => {
        const email = faker.internet.email()
        console.log(email)
        cy.get("#user-id").type(email);
        cy.get("#continue").click();
        cy.get("#user-id").type(email);
        cy.get("#continue").click();
        cy.get(".govuk-heading-xl").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a"
        ).click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();

        cy.get("#continue").click();

        cy.get("#continue").click();
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9) > span > a").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get('#scan-file').attachFile(yourFixturePath);
      cy.wait(2000)
      cy.fixture("uploadWorkSchedule-copydeck.json").then((uploadWorkSchedule) => {
      cy.get("#continue").click();
      cy.get(".govuk-heading-xl").contains(uploadWorkSchedule.checkAnswerHeader);
  
      }); 
      
    });
  }); 
    it("Verify CD2 - Landowner copy-deck", () => {
      cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.fixture("users.json").then((users) => {
        const email = faker.internet.email()
        console.log(email)
        cy.get("#user-id").type(email);
        cy.get("#continue").click();
        cy.get("#user-id").type(email);
        cy.get("#continue").click();
        cy.get(".govuk-heading-xl").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a"
        ).click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();

        cy.get("#continue").click();

        cy.get("#continue").click();
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9) > span > a").click();
      const yourFixturePath = "virus.docs";
      cy.get('#scan-file').attachFile(yourFixturePath);
      cy.fixture("uploadWorkSchedule-copydeck.json").then((uploadWorkSchedule) => {
      cy.get("#continue").click();
      cy.get("#main-content > div.govuk-error-summary > div > ul").contains(uploadWorkSchedule.errorSummary);
      
    });
    });

  });
}); 