// Charges
// Select existing  to Who is responsible for paying the invoice?
// Confirm on check your answer


// Charges
// Select somebody else  to Who is responsible for paying the invoice?
// Select add some else Who is responsible for paying the invoice?
// Eneter new  full name Who is responsible for paying the invoice?
// Select existing org What is the name of Munmun Chowdhury's organisation?
// Continue
// Select first option What is Munmun Chowdhury's email address at testy?
// Continue
// Confirm on check your answer

// Charges
// Select somebody else  to Who is responsible for paying the invoice?
// Select add some else Who is responsible for paying the invoice?
// Eneter new  full name Who is responsible for paying the invoice?
// Select existing org What is the name of Munmun Chowdhury's organisation?
// Continue
// Select second option What is Munmun Chowdhury's email address at testy?
// Enter new email
// Continue

// Confirm on check your answer



// Select somebody else  to Who is responsible for paying the invoice?
// Select add some else Who is responsible for paying the invoice?
// Eneter new  full name Who is responsible for paying the invoice?
// Select add new What is the name of Munmun Chowdhury's organisation?
// Select yes Is Munmun Chowdhuryd part of an organisation?
// Enter name of the org
// Continue
// Enter new email What is Matt Fulford's email address?
// Enter postcode
// Continue
// Select a address
// Continue
// Confirm on check your answer

const faker = require("faker");

describe("Add Invoice Details", () => {
  it(" 1 Verify happy path - Add Invoice Details", () => {
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
      // cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#contact").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
    
        cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
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
      cy.get("#responsible").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
        "COMPLETED");
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
          "Add invoice details");
       
});
});
  it(" 2 Verify happy path - Add Invoice Details", () => {
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
          cy.get("#continue").click();
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#contact").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
    
        cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
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
    //   cy.get("#responsible").click();
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
      cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
        "COMPLETED");
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
          "Add invoice details");
       
});
});
it(" 3 Verify happy path - Add Invoice Details", () => {
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
          // cy.get("#change-email").click();
          cy.get("#continue").click();
          cy.get("a").contains("Give ecologist details").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          cy.get("#contact").click();
          cy.get("#continue").click();
          cy.get("#account").click();
          cy.get("#continue").click();
              cy.get("#continue").click();
              cy.get("#continue").click();
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
    
        cy.get("#yes-no").click();
      cy.get("#continue").click();

      cy.get("#yes-no-2").click();
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
    //   cy.get("#responsible").click();
      cy.get("#continue").click();
      cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email-2").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
        "COMPLETED");
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
          "Add invoice details");
       
});
});
it(" 4 Verify happy path - Add Invoice Details", () => {
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
          // cy.get("#change-email").click();
          cy.get("#continue").click();
          cy.get("a").contains("Give ecologist details").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          cy.get("#contact").click();
          cy.get("#continue").click();
          cy.get("#account").click();
          cy.get("#continue").click();
              cy.get("#continue").click();
              cy.get("#continue").click();
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").type("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("a").contains("Add invoice details").click();
      cy.get("input[value='other']").click();
    //   cy.get("#responsible").click();
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
      cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
        "COMPLETED");
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)").contains(
          "Add invoice details");
       
});
});

});


