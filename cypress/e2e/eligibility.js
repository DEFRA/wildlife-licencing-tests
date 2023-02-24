const faker = require("faker");
/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Copy Deck Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it("1 change date", () => {
    cy.request(
      Cypress.env("baseUrl") + "set-sysdate?iso-string=2023-04-01T01:00:00.000Z"
    );
  });
  it("Verify CD48 - Landowner copy-deck", () => {
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
      cy.fixture("eligibility-copydeck.json").then((eligibility1) => {
        cy.get("div.govuk-width-container ").contains(eligibility1.text2);
        cy.get("div.govuk-width-container ").contains("Yes");
        cy.get("div.govuk-width-container ").contains("No");
        cy.get("div.govuk-width-container ").contains("Back");
        cy.get("div.govuk-width-container ").contains("Continue");
      });
    });
  });

  it("Verify CD49 - Landowner permission copy-deck", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text7);
        cy.get("div.govuk-width-container ").contains("Yes");
        cy.get("div.govuk-width-container ").contains("No");
        cy.get("div.govuk-width-container ").contains("Back");
        cy.get("div.govuk-width-container ").contains("Continue");
      });
    });
  });

  it("Verify CD51 - Project permissions copy-deck", () => {
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
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text1);
        cy.get("div.govuk-width-container ").contains(eligibility2.text8);
        cy.get("div.govuk-width-container ").contains("Yes");
        cy.get("div.govuk-width-container ").contains("No");
        cy.get("div.govuk-width-container ").contains("Back");
        cy.get("div.govuk-width-container ").contains("Continue");
      });
    });
  });
  it("Verify CD50 - Not eligible (landowner) copy-deck", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text6);
        cy.get("div.govuk-width-container ").contains(eligibility2.text9a);
        cy.get("div.govuk-width-container ").contains(eligibility2.text10a);
        cy.get("div.govuk-width-container ").contains("Back");
      });
    });
  });
  it("Verify CD52 - Project permissions granted copy-deck3", () => {
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
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text1);
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text3);
        cy.get("div.govuk-width-container ").contains("Yes");
        cy.get("div.govuk-width-container ").contains("No");
        cy.get("div.govuk-width-container ").contains("Back");
        cy.get("div.govuk-width-container ").contains("Continue");
      });
    });
  });
  it("Verify CD53 - Not eligible (project) copy-deck", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text6);
        cy.get("div.govuk-width-container").contains(eligibility2.text12a);
        cy.get("div.govuk-width-container").contains(eligibility2.text10a);
        cy.get("div.govuk-width-container ").contains("Back");
      });
    });
  });
  it("Verify CD54 - Check your answers (eligibility) copy-deck", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text1);
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text3);
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("div.govuk-width-container ").contains("Yes");
        cy.get("div.govuk-width-container ").contains("Change");
        cy.get("div.govuk-width-container ").contains("Confirm");
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
        cy.get("#continue").click();
        cy.get("h1.govuk-fieldset__heading").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul"
        ).contains("COMPLETED");
      });
    });
  });
  it("Verify CD62 - Eligible (Applicant) copy-deck - when user is not logged in  to Government gateway", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("which-species"));
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
    cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
      cy.get(
        "#main-content > div > div > form > fieldset > legend > h1"
      ).contains(eligibility2.text4);
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > legend > h1"
      ).contains(eligibility2.text5);
      cy.get("div.govuk-width-container ").contains(eligibility2.text13);
      cy.get("div.govuk-width-container ").contains("Back");
      cy.get("div.govuk-width-container ").contains("Continue");
      cy.get("#continue").click();
      cy.fixture("users.json").then((users) => {
        cy.fixture("users.json").then((users) => {
          cy.get("#username").type(users.email3);
          cy.get("#password").type(users.password2);
          cy.get("#continue").click();
          cy.get("h1.govuk-fieldset__heading").contains(
            users.taskListHeaderText
          );
          cy.get(
            "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul"
          ).contains("COMPLETED");
        });
      });
    });
  });

  it("Verify CD62a - Eligible (Applicant) copy-deck - when user is logged in  to Government gateway", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email3);
      cy.get("#password").type(users.password2);
      cy.get("#continue").click();
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
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
        cy.get("div.govuk-width-container ").contains(eligibility2.text13a);
        cy.get("div.govuk-width-container ").contains("Back");
        cy.get("div.govuk-width-container ").contains("Continue");
        cy.get("#continue").click();
      });
    });
  });
  /**
   * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   * Functional testing
   * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   */
  it(" 1 Verify Unhappy path - eligibility check after user logged in - user select ‘No’ to Land owner permission question", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text6);
      });
    });
  });
  it("1b Verify Unhappy path - eligibility check after user logged in - user select No to Project permissions granted", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text6);
      });
    });
  });
  it("2a Verify Happy path - eligibility check after user logged in - user select No to Project permissions", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
      });
    });
  });
  it("2b Verify Happy path - eligibility check after user logged in - user select No to Project permissions", () => {
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
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
      });
    });
  });
  it("3a Verify Happy path - eligibility check after user logged in - user select Yes to Project permissions granted", () => {
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
      });
    });
  });
  it("3b Verify Happy path - eligibility check after user logged in - user select Yes to Project permissions granted", () => {
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
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
      });
    });
  });
  it("4a Verify Happy path - eligibility check before user logged in - user select 'No' to 'Project permissions’", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
        cy.get("#continue").click();
        cy.get("h1.govuk-fieldset__heading").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul"
        ).contains("COMPLETED");
      });
    });
  });
  it("4b Verify Happy path - eligibility check before user logged in - user select 'No' to 'Project permissions'", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
        cy.get("#continue").click();
        cy.get("h1.govuk-fieldset__heading").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul"
        ).contains("COMPLETED");
      });
    });
  });

  it("5a Verify Happy path - eligibility check before user logged in - user select 'Yes' to 'Project permissions granted'", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
        cy.get("#continue").click();
        cy.get("h1.govuk-fieldset__heading").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul"
        ).contains("COMPLETED");
      });
    });
  });

  it("5b Verify Happy path - eligibility check before user logged in - user select 'Yes' to 'Project permissions granted", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
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
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text5);
        cy.get("#continue").click();
        cy.get("h1.govuk-fieldset__heading").contains(users.taskListHeaderText);
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul"
        ).contains("COMPLETED");
      });
    });
  });
  // });

  it("SDDSIP-650 - Not answered should be displaying on Check your answer screen…..", () => {
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email1);
      cy.get("#password").type(users.password1);
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a"
      ).click();
      cy.get("input[value='no']").click();
      cy.get("#backlink-div > a").click();
      cy.get("fieldset[class='govuk-fieldset']").contains("Yes");
      cy.get("fieldset[class='govuk-fieldset']").contains("No");
      cy.get("fieldset[class='govuk-fieldset']").contains("Confirm");
      cy.get("fieldset[class='govuk-fieldset']").contains("Change");
      cy.get("fieldset[class='govuk-fieldset']").should(
        "not.include.text",
        "Not answered"
      );
    });
  });
});
