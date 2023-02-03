const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it.only("Verify CD1 - Landowner copy-deck", () => {
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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get('a[href*="/upload"]').click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.wait(2000);
      cy.fixture("uploadWorkSchedule-copydeck.json").then(
        (uploadWorkSchedule) => {
          cy.get("#continue").click();
          cy.get("input[value='yes']").click();
          cy.get("#continue").click();
          cy.get("#scan-file").attachFile(yourFixturePath);
          cy.get("#continue").click();
          cy.get("input[value='no']").click();
          cy.get("main[id*='main-']").contains("Uploaded file 1");
          cy.get("#continue").click();
          cy.get(".govuk-heading-l").contains(uploadWorkSchedule.siteInfoText);
        }
      );
    });
  });
});

it.only("Verify CD2 - Landowner copy-deck", () => {
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
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get('a[href*="/upload"]').click();
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
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get('a[href*="/upload"]').click();
    const yourFixturePath = "virusfile.pdf";
    cy.get("#scan-file").attachFile(yourFixturePath);
    cy.wait(2000);
    cy.fixture("uploadWorkSchedule-copydeck.json").then(
      (uploadWorkSchedule) => {
        cy.get("#continue").click();
        cy.get("input[value='yes']").click();
        cy.get("#continue").click();
        cy.get("#scan-file").attachFile(yourFixturePath);
            cy.get("#continue").click();
            cy.get("main[id*='main-']").contains("Uploaded file 2");
            cy.get(".govuk-heading-xl").contains(
              uploadWorkSchedule.siteInfoText
            );
            cy.get("#continue").click();
          }
        );
      }
    );


  it("Verify CD4 - no additional upload Landowner copy-deck", () => {
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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get('a[href*="/upload"]').click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.wait(2000);
      cy.fixture("uploadWorkSchedule-copydeck.json").then(
        (uploadWorkSchedule) => {
          cy.get("#continue").click();
          cy.get("main[id*='main-']").contains("Uploaded file 1");
          cy.get(".govuk-heading-xl").contains(
            uploadWorkSchedule.siteInfoText
          );
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
        }
      );
    });
  });
});
