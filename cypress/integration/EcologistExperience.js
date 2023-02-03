const faker = require("faker");

describe("Ecologist experience", () => {
  it(" 1 Verify happy path - ecologist experience", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-01T17:48:00.000Z");
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

      // Give ecologist’s experience

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input#enter-licence-details").type("NY123456");
      cy.get("#continue").click();
      cy.get("#licence-2").click();
      // cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#enter-methods").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#enter-class-mitigation-details").type("BAD-2022-agsss1");
      cy.get("#continue").click();
      cy.get("#continue").click();
    });
  });
  it(" 2 Verify happy path - ecologist experience", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-01T17:48:00.000Z");
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

      // Give ecologist’s experience

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input#enter-licence-details").type("NY123456");
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("input#enter-licence-details").type("NY123457");
      cy.get("#continue").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#enter-methods").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("#enter-class-mitigation-details").type("BAD-2022-agsss1");
      cy.get("#continue").click();
      cy.get("#continue").click();
    });
  });
  it(" 3 Verify happy path - ecologist experience", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-01T17:48:00.000Z");
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

      // Give ecologist’s experience

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#enter-methods").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
    });
  });
  it(" 4 Verify happy path - ecologist experience", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-01T17:48:00.000Z");
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

      // Give ecologist’s experience

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("input#enter-licence-details").type("NY123456");
      cy.get("#continue").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#enter-methods").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
    });
  });
  it(" 5 Verify happy path - ecologist experience", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-01T17:48:00.000Z");
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

      // Give ecologist’s experience

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#enter-methods").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("#enter-class-mitigation-details").type("BAD-2022-agsss1");
      cy.get("#continue").click();
      cy.get("#continue").click();
    });
  });
});
