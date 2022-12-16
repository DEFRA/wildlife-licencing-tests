describe("Add sett", () => {
  it(" Verify happy path -  Add setts ", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("h1[class*='govuk-heading']").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a"
      ).click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7) > span > a"
      ).click();
      cy.get("#continue").click();
      cy.get("input[id='habitat-name']").type("NY123456");
      cy.get("#continue").click();
      cy.get("input[id='habitat-types']").click();
      cy.get("#continue").click();
      cy.get("input[value='true']").click();
      cy.get("#continue").click();
      cy.get("#habitat-entrances").type("7");
      cy.get("#continue").click();
      cy.get("#habitat-active-entrances").type("5");
      cy.get("#continue").click();
      cy.get("#habitat-grid-ref").type("NY123456");
      cy.get("#continue").click();
      cy.get("input[id='habitat-work-start-day']").type("1");
      cy.get("input[id='habitat-work-start-month']").type("11");
      cy.get("input[id='habitat-work-start-year']").type("2024");
      cy.get("#continue").click();
      cy.get("input[id='habitat-work-end-day']").type("20");
      cy.get("input[id='habitat-work-end-month']").type("11");
      cy.get("input[id='habitat-work-end-year']").type("2024");
      cy.get("#continue").click();
      cy.get("input[id='habitat-activities']").click();
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
    });
  });
});
