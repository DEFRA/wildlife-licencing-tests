const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it("1 and verify application season period screen", () => {
    cy.request(
      Cypress.env("baseUrl") +
        "/set-sysdate?iso-string=2023-12-01T01:00:00.000Z"
    );
    cy.request(
      "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").type(users.email3);
      cy.get("#password").type(users.password2);
      cy.get("#continue").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give details of conservation issues").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#site-name").type("a");
      cy.get("#site-name__option--0").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#permission-details").type(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
    //   cy.get("#advice-from-who").type(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
      cy.get("#advice-from-who").type(faker.random.alphaNumeric(40))
      cy.get("#advice-description").type(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#proximity").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      // cy.get("#continue").click();
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("Give details of conservation issues");
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)"
      ).contains("COMPLETED");
    });
  });
});
