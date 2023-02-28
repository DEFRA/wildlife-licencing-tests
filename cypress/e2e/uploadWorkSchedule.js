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
          cy.get("#main-content").contains("Upload files that support your application.");
          cy.get("#main-content").contains("You can upload:");
          cy.get("#main-content").contains("a works schedule");
          cy.get("#main-content").contains("a methods statement");
          cy.get("#main-content").contains("maps, diagrams or drawings");
          cy.get("#main-content").contains("evidence of permissions or consents");
          cy.get("#main-content").contains("any other supporting information");
          cy.get("#main-content").contains("You should include information on:");
          cy.get("#main-content").contains("how and when each badger sett will be affected");
          cy.get("#main-content").contains("types of machinery or tools that will be used and their distance from each badger sett");
          cy.get("#main-content").contains("justification for why each badger sett will be affected");
          cy.get("#main-content").contains("dates of any proposed mitigation work");
          cy.get("#main-content").contains("Upload a file");
          cy.get("#main-content").contains("an image (JPG, PNG, TIF or BMP)");
          cy.get("#main-content").contains("map data (GeoJSON, KML or Shape)");
          cy.get("#main-content").contains("text (DOC, DOCX, PDF or ODT)");
          cy.get("#main-content").contains("a spreadsheet (XLS, XLSX or ODS)");
          cy.get("#main-content").contains("Upload a file");
          cy.get("#main-content").contains("Upload a file");
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
        cy.get(".govuk-heading-xl").contains(uploadWorkSchedule.siteInfoText);
        cy.get("#continue").click();
      }
    );
  });

  it("Verify CD4 - no additional upload Landowner copy-deck", () => {
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
          cy.get(".govuk-heading-xl").contains(uploadWorkSchedule.siteInfoText);
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
        }
      );
    });
  });
});
