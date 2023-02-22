describe("Page title verification", () => {
  it("1 Verify happy path - other species", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species-3").click();
      cy.get("#continue").click();
      cy.fixture("testdata.json").then((testdata) => {
        cy.get("fieldset.govuk-fieldset").contains(testdata.otherspecies);
        cy.get("fieldset.govuk-fieldset").contains(testdata.otherspeciestext1);
        cy.get("fieldset.govuk-fieldset").contains(testdata.otherspeciestext2);
      });
    });
  });
  it("2 Verify happy path - other species", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.fixture("testdata.json").then((testdata) => {
        cy.get("fieldset.govuk-fieldset").contains(
          testdata.checkdevelopmentlinktext
        );
        cy.get("fieldset.govuk-fieldset").contains(testdata.checkdevelopment);
      });
    });
  });
});
