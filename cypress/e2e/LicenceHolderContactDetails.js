const faker = require("faker");

describe("Page title verification", () => {
  it("1a Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });
  it("2a Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("The address doesn’t have a postcode").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("2 Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation-2").click();
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });
  it("2a Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation-2").click();
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("a").contains("The address doesn’t have a postcode").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("test");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("3 Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation-2").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("3a Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation-2").click();
      cy.get("#continue").click();

      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("4 Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("select").select("1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH");
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("4a Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("a").contains("The address doesn’t have a postcode").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("5 Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("LB1 2CD");
      cy.get("#continue").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Leeds");
      cy.get("#address-postcode").type("LB1 2CD");

      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("5a Verify happy path - Licence holder contact", () => {
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
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#change-email-2").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("LB1 2CD");
      cy.get("#continue").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Leeds");
      cy.get("#address-postcode").type("LB1 2CD");

      cy.get("#continue").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get(
          "#main-content > div > div > form > fieldset > legend > h1"
        ).contains(eligibility2.text4);
        cy.get("#continue").click();
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)"
        ).contains("Give licence holder details");
      });
    });
  });

  it("SDDSIP-613 Back button on postcode going showing what is the  name of user organisation", () => {
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
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > dl > div:nth-child(5) > dd.govuk-summary-list__actions > a"
      ).click();
      cy.get("#main-content > div > div > form > fieldset > p > a").click();
      cy.fixture("eligibility-copydeck.json").then((eligibility2) => {
        cy.get("#main-content > div > div > form > fieldset").contains(
          eligibility2.text14
        );
        cy.get("#main-content > div > div > form > fieldset").contains(
          eligibility2.text15
        );
        cy.get("#main-content > div > div > form > fieldset").contains(
          eligibility2.text16
        );
        cy.get("#main-content > div > div > form > fieldset").contains(
          eligibility2.text17
        );
      });
    });
  });

  it("SDDSIP-617 Name and organisation option is not updating", () => {
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
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give licence holder details").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("input[type='text']").type(
        faker.name.firstName() + faker.name.lastName()
      );
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();

      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();

      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get(
        " #main-content > div > div > form > fieldset > dl > div:nth-child(2) > dd.govuk-summary-list__actions> a"
      ).click();
    });
  });
});
