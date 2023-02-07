const faker = require("faker");

describe("Add sett", () => {
  it(" 1 Verify happy path -  Add setts ", () => {
    cy.visit('/')
    cy.request('/set-sysdate?iso-string=2023-04-01T17:48:00.000Z');
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
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
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7) > span > a"
      ).click();
      cy.get("#continue").click();
      cy.get("input[id='habitat-name']").type(faker.random.alphaNumeric(100));
      cy.get("#continue").click();
      cy.get("#habitat-types").click();
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
      cy.get("input[id='habitat-work-start-month']").type("05");
      cy.get("input[id='habitat-work-start-year']").type("2024");
      cy.get("#continue").click();
      cy.get("input[id='habitat-work-end-day']").type("30");
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
  it(" 2 Verify happy path -  Add setts ", () => {
    cy.visit('/')
    cy.request('/set-sysdate?iso-string=2023-04-01T17:48:00.000Z');
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
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
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7) > span > a"
      ).click();
      cy.get("#continue").click();
      cy.get("input[id='habitat-name']").type(faker.random.alphaNumeric(1));
      cy.get("#continue").click();
      cy.get("#habitat-types-2").click();
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
      cy.get("input[id='habitat-work-start-month']").type("05");
      cy.get("input[id='habitat-work-start-year']").type("2024");
      cy.get("#continue").click();
      cy.get("input[id='habitat-work-end-day']").type("30");
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
  it(" 3 Verify happy path -  Add setts ", () => {
    cy.visit('/')
    cy.request('/set-sysdate?iso-string=2023-04-01T17:48:00.000Z');
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
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
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7) > span > a"
      ).click();
      cy.get("#continue").click();
      cy.get("input[id='habitat-name']").type(faker.random.alphaNumeric(99));
      cy.get("#continue").click();
      cy.get("#habitat-types-3").click();
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
      cy.get("input[id='habitat-work-start-month']").type("05");
      cy.get("input[id='habitat-work-start-year']").type("2024");
      cy.get("#continue").click();
      cy.get("input[id='habitat-work-end-day']").type("30");
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
  it("4 Verify happy path -  Add setts ", () => {
    cy.visit('/')
    cy.request('/set-sysdate?iso-string=2023-04-01T17:48:00.000Z');
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
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
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7) > span > a"
      ).click();
      cy.get("#continue").click();
      cy.get("input[id='habitat-name']").type(faker.random.alphaNumeric(50));
      cy.get("#continue").click();
      cy.get("#habitat-types-4").click();
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
      cy.get("input[id='habitat-work-start-month']").type("05");
      cy.get("input[id='habitat-work-start-year']").type("2024");
      cy.get("#continue").click();
      cy.get("input[id='habitat-work-end-day']").type("30");
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
