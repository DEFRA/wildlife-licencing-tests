const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it.only("Verify CD1 - Landowner copy-deck", () => {
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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get('a[href*="/upload"]').click();
      // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(11) > span > a").click();
      // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9) > span > a").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.wait(2000);
      cy.fixture("uploadWorkSchedule-copydeck.json").then(
        (uploadWorkSchedule) => {
          cy.get("#continue").click();
          cy.get("input[value='yes']").click();
          cy.get("#continue").click();
          cy.get("#scan-file").attachFile(yourFixturePath);
          cy.wait(2000);
          cy.fixture("uploadWorkSchedule-copydeck.json").then(
            (uploadWorkSchedule) => {
              cy.get("#continue").click();
              cy.get("input[value='no']").click();
              cy.get("main[id*='main-']").contains("Uploaded file 1");
              cy.get("#continue").click();
              //cy.get(".govuk-heading-xl").contains(uploadWorkSchedule.checkAnswerHeader);
            }
          );
        }
      );
    });
  });
});
it.only("Verify CD2 - Landowner copy-deck", () => {
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
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get('a[href*="/upload"]').click();
    // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(11) > span > a").click();
    //  cy.get('a[href*="/previous-license"]').click();
    const yourFixturePath = "virus.doc";
    cy.get("#scan-file").attachFile(yourFixturePath);
    cy.fixture("uploadWorkSchedule-copydeck.json").then(
      (uploadWorkSchedule) => {
        cy.get("#continue").click();
        cy.get("#main-content > div.govuk-error-summary > div > ul").contains(
          uploadWorkSchedule.errorSummary
        );
      }
    );
  });
});

it("Verify CD3 - multi-file upload Landowner copy-deck", () => {
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
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get('a[href*="/upload"]').click();
    // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(11) > span > a").click();
    // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9) > span > a").click();
    const yourFixturePath = "virusfile.pdf";
    cy.get("#scan-file").attachFile(yourFixturePath);
    cy.wait(2000);
    cy.fixture("uploadWorkSchedule-copydeck.json").then(
      (uploadWorkSchedule) => {
        cy.get("#continue").click();
        cy.get("input[value='yes']").click();
        cy.get("#continue").click();
        cy.get("#scan-file").attachFile(yourFixturePath);
        cy.wait(2000);
        // cy.fixture("uploadWorkSchedule-copydeck.json").then(
        //   (uploadWorkSchedule) => {
        cy.get("#continue").click();
        cy.get("main[id*='main-']").contains("Uploaded file 2");
        // cy.get(".govuk-heading-xl").contains(
        //     uploadWorkSchedule.checkAnswerHeader
        // );
        cy.get("#continue").click();
      }
    );
  });
});

it("Verify CD4 - no additional upload Landowner copy-deck", () => {
  ccy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
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
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get('a[href*="/upload"]').click();
    // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(11) > span > a").click();
    // cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9) > span > a").click();
    const yourFixturePath = "virusfile.pdf";
    cy.get("#scan-file").attachFile(yourFixturePath);
    cy.wait(2000);
    cy.fixture("uploadWorkSchedule-copydeck.json").then(
      (uploadWorkSchedule) => {
        cy.get("#continue").click();
        cy.get("main[id*='main-']").contains("Uploaded file 1");
        //     cy.get(".govuk-heading-xl").contains(
        //       uploadWorkSchedule.checkAnswerHeader
        //     );
        cy.get("input[value='no']").click();
        cy.get("#continue").click();
      }
    );
  });
});
