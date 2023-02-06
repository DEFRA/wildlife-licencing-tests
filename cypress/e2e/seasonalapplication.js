const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it("SDDSIP-509 and verify Licence application screen", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-12-01T17:48:00.000Z");
    cy.request("https://new-tst.aws.defra.cloud/reset?username=user1@email.com");
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
    //   cy.get("h1[class*='govuk-heading']").contains(users.nextpage);
      // cy.get("a").contains("Check if you’re eligible to apply").click();
    //   cy.get(
    //     "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a"
    //   ).click();
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
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
    //   cy.get("input[value='new']").click();
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
    //   cy.get("#account").click();
    //   cy.get("#continue").click();
    cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
    //   cy.get("input[value='new']").click();
    //   cy.get("#continue").click();
    cy.get("#yes-no").click();
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
      // cy.get("#new").click();
      // cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
           cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      // cy.get("#account").click();
      // cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
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
          cy.get(".govuk-heading-l").contains(
            uploadWorkSchedule.siteInfoText
          );
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").type(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types-3").click();
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
        //   cy.get(
        //     "#main-content > div > div > form > fieldset > span > ol > li:nth-child(4) > ul > li.app-task-list__item > span > a"
        //   ).click();
        cy.get("a").contains("Declare convictions").click();
        cy.get("#convictions-check").click();
        cy.get("#continue").click();
        cy.get("#conviction-details").type(faker.random.alphaNumeric(1));
        cy.get("#continue").click();
        
          
   
        
        }
      );
    });
  });
  it("SDDSIP-509 and verify Licence application screen", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-12-01T17:48:00.000Z");
    cy.request("https://new-tst.aws.defra.cloud/reset?username=user1@email.com");
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
    //   cy.get("h1[class*='govuk-heading']").contains(users.nextpage);
      // cy.get("a").contains("Check if you’re eligible to apply").click();
    //   cy.get(
    //     "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a"
    //   ).click();
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
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
    //   cy.get("input[value='new']").click();
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
    //   cy.get("#account").click();
    //   cy.get("#continue").click();
    cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
    //   cy.get("input[value='new']").click();
    //   cy.get("#continue").click();
    cy.get("#yes-no").click();
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
      // cy.get("#new").click();
      // cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
           cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      // cy.get("#account").click();
      // cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
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
          cy.get(".govuk-heading-l").contains(
            uploadWorkSchedule.siteInfoText
          );
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").type(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types-3").click();
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
        //   cy.get(
        //     "#main-content > div > div > form > fieldset > span > ol > li:nth-child(4) > ul > li.app-task-list__item > span > a"
        //   ).click();
        cy.get("a").contains("Declare convictions").click();
        cy.get("#convictions-check").click();
        cy.get("#continue").click();
        cy.get("#conviction-details").type(faker.random.alphaNumeric(300));
        cy.get("#continue").click();
        
          
   
        
        }
      );
    });
});
it("SDDSIP-509 and verify Licence application screen", () => {
    cy.request("https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-12-01T17:48:00.000Z");
    cy.request("https://new-tst.aws.defra.cloud/reset?username=user1@email.com");
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
    //   cy.get("h1[class*='govuk-heading']").contains(users.nextpage);
      // cy.get("a").contains("Check if you’re eligible to apply").click();
    //   cy.get(
    //     "#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul > li.app-task-list__item > span > a"
    //   ).click();
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
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
    //   cy.get("input[value='new']").click();
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
    //   cy.get("#account").click();
    //   cy.get("#continue").click();
    cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + ' ' + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
    //   cy.get("input[value='new']").click();
    //   cy.get("#continue").click();
    cy.get("#yes-no").click();
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
      // cy.get("#new").click();
      // cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
           cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").type(faker.company.bs());
      cy.get("#continue").click();
      // cy.get("#account").click();
      // cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
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
          cy.get(".govuk-heading-l").contains(
            uploadWorkSchedule.siteInfoText
          );
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").type(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types-3").click();
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
        //   cy.get(
        //     "#main-content > div > div > form > fieldset > span > ol > li:nth-child(4) > ul > li.app-task-list__item > span > a"
        //   ).click();
        cy.get("a").contains("Declare convictions").click();
        cy.get("#convictions-check").click();
        cy.get("#continue").click();
        cy.get("#conviction-details").type(faker.random.alphaNumeric(301));
        cy.get("#continue").click();
        cy.get("#continuew").click();
        
          
   
        
        }
      );
    });
});
});
