const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it("SDDSIP-509 and verify Licence application screen", () => {
    // cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    // cy.get("#main-content > div > div > form > fieldset > a").click();
    // cy.fixture("users.json").then((users) => {
    //   const email = faker.internet.email();
    //   console.log(email);
    //   cy.get("#user-id").type(email);
    //   cy.get("#continue").click();
    //   cy.get("#user-id").type(email);
    //   cy.get("#continue").click();

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

      cy.get(
        "#main-content > div > div > form > fieldset > span > ol > li:nth-child(4) > ul > li.app-task-list__item > span > a"
      ).click();
      cy.get("#main-content > div > div > form > fieldset").contains(
        users.text18
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "By sending the application you agree that you have given complete and correct information."
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree that they will:"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "will uphold any conditions applied to my licence if granted"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "will abide by the terms and conditions of this service"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "By sending the application you confirm that:"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "an appropriate ecologist has been involved in the application and the design of any mitigations"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "the ecologist supports the application"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist's site assessment"
      );
      cy.get("#main-content > div > div > form > fieldset").contains(
        "you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you've taken no action"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      //cy.wait(2000);
      // cy.get("#main-content > div > div > form > fieldset > table > tbody > tr > th > p > a").click();
      cy.get(
        "//a[@class='govuk-link govuk-link--no-visited-state'] [1]"
      ).click();
      cy.get(
        "#main-content > div > div > form > fieldset > table > tbody > tr:nth-child(2) > th > p.govuk-body.govuk-!-font-weight-bold.govuk-!-margin-bottom-2 > a"
      ).click();
      cy.get("#main-content > div > div > form > fieldset > dl").contains(
        "SUBMITTED"
      );
      cy.get("#main-content > div > div > form > fieldset > dl").contains(
        "Bat mitigation"
      );
      cy.get("#main-content > div > div > form > fieldset > dl").contains(
        "Reference"
      );
      cy.get("#main-content > div > div > form > fieldset > dl").contains(
        "Licence holder"
      );
      cy.get("#main-content > div > div > form > fieldset > dl").contains(
        "Submitted"
      );
    });
  });
});
