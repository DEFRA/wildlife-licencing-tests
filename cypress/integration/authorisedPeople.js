const faker = require("faker");

describe("Add authorised People", () => {
  it(" 1 Verify happy path - Add an authorised People", () => {
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

      // Add authorised people

      cy.get("a").contains("Add authorised people").click();
      cy.get("#main-content > div > div").contains("This is a person who will be responsible for everything done under the licence.");
      cy.get("#main-content > div > div").contains("It does not include any assistants who will work under the direct supervision of the licence holder or any authorised people.");
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("Add authorised people");
    });
  });
  it(" 2 Verify happy path - Add multiple authorised People", () => {
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

      // Add authorised people

      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("Add authorised people");
    });
  });
  it(" 3 Verify happy path - Add an authorised People and remove then select no", () => {
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

      // Add authorised people

      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > p > a").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("Add authorised people");
    });
  });

  it(" 4 Verify happy path - Add multiple authorised People and change name", () => {
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

      // Add authorised people

      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > dl:nth-child(9) > div:nth-child(1) > dd.govuk-summary-list__actions > a"
      ).click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)"
      ).contains("Add authorised people");
    });
  });
});
