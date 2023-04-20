const faker = require("faker");

describe("Give ecologist details", () => {
  it("1 Verify happy path - Give ecologist details", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email1);
      cy.get("#password").fill(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").fill(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("Give ecologist details");
    });
  });
  it("2 Verify happy path - Give ecologist details", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email1);
      cy.get("#password").fill(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#contact").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("Give ecologist details");
    });
  });
  it("3 Verify happy path - Give ecologist details", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email1);
      cy.get("#password").fill(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").fill(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("Give ecologist details");
    });
  });
  it("4 Verify happy path - Give ecologist details", () => {
    // cy.request(Cypress.env("baseUrl") + ('/set-sysdate?iso-string=2023-04-01T17:48:00.000Z'));
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email1);
      cy.get("#password").fill(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#contact").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(3)"
      ).contains("Give ecologist details");
    });
  });
});
