const faker = require("faker");

describe("Site Information", () => {
  it("1a change date1", () => {
    cy.request(
      Cypress.env("baseUrl") + "set-sysdate?iso-string=2023-04-01T01:00:00.000Z"
    );
  });
  it(" 1 Verify happy path - site information and selected all answers are correct", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type(faker.name.firstName());
      cy.get("#continue").click();
      cy.get("#site-postcode-check").click();
      cy.get("#site-postcode").type("M24 6dh");
      cy.get("#continue").click();
      cy.get("#siteAddress").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label"
      ).click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a"
      ).click();
      cy.get("#site-name").type(faker.name.firstName());
      cy.get("#continue").click();

      // cy.get("#address-line-1").type("3");
      // cy.get("#address-line-2").type("man");
      // cy.get("#address-town").type("manchester");
      // cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.get("#siteAddress").select(
        "10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      // cy.scrollTo(0, 1000)
      cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)").contains("COMPLETED");
      cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5) > span > a").contains("Give site information");
    });
  });
  it(" 2 Verify happy path - site information", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type("test");
      cy.get("#continue").click();
      cy.get("#site-postcode-check").click();
      cy.get("#site-postcode").type("M24 6dh");
      cy.get("#continue").click();
      cy.get("#siteAddress").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").type("NY395557");
      cy.get("#continue").click();
      cy.get("#address-and-grid-reference-mismatch").click();
      cy.get("#continue").click();
      cy.get("#site-postcode").clear();
      cy.get("#site-postcode").type("M9 7bq");
      cy.get("#continue").click();
      cy.get("#siteAddress").select("2, OSTERLEY ROAD, MANCHESTER, M9 7BQ");
      cy.get("#continue").click();
      cy.get("#scan-file").click();

      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label"
      ).click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give site information");
    });
  });
  it(" 3 Verify happy path - site information", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type("test");
      cy.get("#continue").click();
      cy.get("#site-postcode-check").click();
      cy.get("#site-postcode").type("M24 6dh");
      cy.get("#continue").click();
      cy.get("#siteAddress").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("#address-and-grid-reference-mismatch-2").click();
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("input[value='correct']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give site information");
    });
  });

  it(" 4 Verify happy path - site information and selected all answers are correct", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type("test");
      cy.get("#continue").click();
      cy.get("#site-postcode-check-2").click();
      cy.get("#continue").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label"
      ).click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a"
      ).click();
      cy.get("#site-name").type("test2");
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();

      // cy.get("#siteAddress").select(
      //   "10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      // cy.get("#continue").click();
      
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give site information");
    });
  });
  it("5 Verify happy path - site information", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type("test");
      cy.get("#continue").click();
      cy.get("#site-postcode-check-2").click();
      cy.get("#continue").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("#address-and-grid-reference-mismatch").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#address-line-1").type("33");
      cy.get("#address-line-2").type("mantest");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label"
      ).click();
      cy.get("#continue").click();

      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give site information");
    });
  });
  it(" 6 Verify happy path - site information", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type("test");
      cy.get("#continue").click();
      cy.get("#site-postcode-check-2").click();
      cy.get("#continue").click();
      cy.get("#address-line-1").type("3");
      cy.get("#address-line-2").type("man");
      cy.get("#address-town").type("manchester");
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.get("#scan-file").click();

      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("#address-and-grid-reference-mismatch").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#address-line-1").clear();
      cy.get("#address-line-1").type("4");
      cy.get("#address-line-2").clear();
      cy.get("#address-line-2").type("manchester");
      cy.get("#address-town").clear();
      cy.get("#address-town").type("manchestertown");
      cy.get("#address-county").clear();
      cy.get("#address-county").type("Manchester");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").type(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("input[value='correct']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give site information");
    });
  });
  it(" 7 Verify happy path - site information - close proximity", () => {
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
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").type("test");
      cy.get("#continue").click();
      cy.get("#site-postcode-check").click();
      cy.get("#site-postcode").type("B38 9SH");
      cy.get("#continue").click();
      cy.get("#siteAddress").select("2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const yourFixturePath = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").type("SP039775");
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give site information");
    });
  });
});
