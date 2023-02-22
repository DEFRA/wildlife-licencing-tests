const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it("SDDSIP-509 and 1 verify Licence application screen", () => {
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
      cy.get("#continue").click();
      //   Give ecologist details
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#continue").click();

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(
        faker.name.firstName() + " " + faker.name.lastName()
      );
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

      //   Add additional contacts
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Add invoice details").click();
      cy.get("input[value='other']").click();
      cy.get("#continue").click();
      cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email").click();
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

      cy.get("a").contains("Upload supporting information").click();
      const yourFixturePath1 = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath1);
      cy.wait(2000);
      cy.fixture("uploadWorkSchedule-copydeck.json").then(
        (uploadWorkSchedule) => {
          cy.get("#continue").click();
          cy.get("main[id*='main-']").contains("Uploaded file 1");
          cy.get(".govuk-heading-l").contains(uploadWorkSchedule.siteInfoText);
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").type(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types").click();
          cy.get("#continue").click();
          cy.get("input[value='true']").click();
          cy.get("#continue").click();
          cy.get("#habitat-entrances").type("7");
          cy.get("#continue").click();
          cy.get("#habitat-active-entrances").type("5");
          cy.get("#continue").click();
          cy.get("#habitat-grid-ref").clear();
          cy.get("#habitat-grid-ref").type("NY123456");
          cy.get("#continue").click();
          cy.get("#habitat-work-start-day").type("1");
          cy.get("#habitat-work-start-month").type("11");
          cy.get("#habitat-work-start-year").type("2024");
          cy.get("#continue").click();
          cy.get("#habitat-work-end-day").type("30");
          cy.get("#habitat-work-end-month").type("11");
          cy.get("#habitat-work-end-year").type("2024");
          cy.get("#continue").click();
          cy.get("#habitat-activities").click();
          cy.get("#continue").click();
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Declare convictions").click();
          cy.get("#convictions-check").click();
          cy.get("#continue").click();
          cy.get("#conviction-details").type(faker.random.alphaNumeric(100));
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Send application").click();
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
          const ls = cy.get("a").contains("Badger mitigation").first();
          ls.click();
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
        }
      );
    });
  });
  it("SDDSIP-509 and 2 verify Licence application screen", () => {
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
      cy.get("#continue").click();
      //   Give ecologist details
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#continue").click();

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(
        faker.name.firstName() + " " + faker.name.lastName()
      );
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

      //   Add additional contacts
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Add invoice details").click();
      cy.get("input[value='other']").click();
      cy.get("#continue").click();
      cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email").click();
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

      cy.get("a").contains("Upload supporting information").click();
      const yourFixturePath1 = "virusfile.pdf";
      cy.get("#scan-file").attachFile(yourFixturePath1);
      cy.wait(2000);
      cy.fixture("uploadWorkSchedule-copydeck.json").then(
        (uploadWorkSchedule) => {
          cy.get("#continue").click();
          cy.get("main[id*='main-']").contains("Uploaded file 1");
          cy.get(".govuk-heading-l").contains(uploadWorkSchedule.siteInfoText);
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").type(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types").click();
          cy.get("#continue").click();
          cy.get("input[value='true']").click();
          cy.get("#continue").click();
          cy.get("#habitat-entrances").type("7");
          cy.get("#continue").click();
          cy.get("#habitat-active-entrances").type("5");
          cy.get("#continue").click();
          cy.get("#habitat-grid-ref").clear();
          cy.get("#habitat-grid-ref").type("NY123456");
          cy.get("#continue").click();
          cy.get("#habitat-work-start-day").type("1");
          cy.get("#habitat-work-start-month").type("11");
          cy.get("#habitat-work-start-year").type("2024");
          cy.get("#continue").click();
          cy.get("#habitat-work-end-day").type("30");
          cy.get("#habitat-work-end-month").type("11");
          cy.get("#habitat-work-end-year").type("2024");
          cy.get("#continue").click();
          cy.get("#habitat-activities").click();
          cy.get("#continue").click();
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Declare convictions").click();
          cy.get("#convictions-check-2").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Send application").click();
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
          const ls = cy.get("a").contains("Badger mitigation").first();
          ls.click();
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
        }
      );
    });
  });
});
