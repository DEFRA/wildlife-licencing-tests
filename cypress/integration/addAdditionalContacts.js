
// Add additional contacts

// Do you want to add an additional applicant contact? YES

// Who is the person we should contact? Someone else
// What is the name of the person we should contact? Tester data
// What is Munmun Chowdhurysss's email address?tester

// Do you want to add an additional ecologist contact? YES
// Who is the person we should contact? Exist name
// What is Munmun Chowdhuryd's email address at testss? Add or use existing email
// Continue from Check your answer



// Do you want to add an additional applicant contact? YES

// Who is the person we should contact? Existing user
// What is the name of the person we should contact? Tester data
// What is Munmun Chowdhurysss's email address?tester
// Do you want to add an additional ecologist contact? YES
// Who is the person we should contact? Exist name
// What is Munmun Chowdhuryd's email address at testss? Add or use existing email
// Continue from Check your answer




// Add an additional applicant contact? NO
// Add an additional ecologist contact? NO
// Continue from Check your answer



// Add an additional applicant contact? NO
// Add an additional ecologist contact? YES
// Do you want to add an additional ecologist contact? Yes

// Are you the additional ecologist contact?NO
// Add full name What is the name of the person we should contact?
// What is Lukuman Oyedeleff's email address? Add email address
const faker = require("faker");

describe("Add an additional contact", () => {
  it(" 1 Verify happy path - Add an additional contact", () => {
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
    //   Give licence holder details
      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      // cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      // cy.get("#continue").click();
      // cy.get("#is-organisation").click();
      // cy.get("#organisation-name").type(faker.company.bs());
      // cy.get("#continue").click();
            // cy.get("#change-email").click();
            // cy.get("#continue").click();
      //  cy.get("#email-address").type(faker.internet.email());
      // cy.get("#continue").click();
      // cy.get("#main-content > div > div > form > fieldset > div > div > div:nth-child(7) > label").click();
      
      // cy.get("#is-organisation").click();
      // cy.get("#organisation-name").type(faker.company.bs());
      // cy.get("#continue").click();
        cy.get("#account").click();
     cy.get("#continue").click();
      cy.get("#continue").click();
      // cy.get("#postcode").type("M24 6DH");
      // cy.get("#continue").click();
      // cy.get("#address").select(
      //   "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      // cy.get("#continue").click();
      // cy.get("#change-email").click();
      cy.get("#continue").click();
    //   Give ecologist details
    cy.get("a").contains("Give ecologist details").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
     cy.get("#account").click();
     cy.get("#continue").click();
    // cy.get("#is-organisation").click();
    // cy.get("#organisation-name").type(faker.company.bs());
    // cy.get("#continue").click();
    cy.get("#change-email").click();
    cy.get("#continue").click();

    // cy.get("#main-content > div > div > form > fieldset > div > div > div:nth-child(1) > label").click();
    cy.get("#continue").click();

// Authorised person
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      
    //   Add additional contacts
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#contact").click();
      cy.get("#continue").click();
    //   cy.get("#yes-no-2").click();
    //   cy.get("#continue").click();
      // cy.get("#email-address").type(faker.internet.email());
      // cy.get("#continue").click();
        cy.get("#yes-no-2").click();
      cy.get("#continue").click();
    //   cy.get("#postcode").type("M24 6DH");
    //   cy.get("#continue").click();
    //   cy.get("#address").select(
    //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
    //   );
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
        "COMPLETED");
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
          "Add additional contacts");
    //   cy.get("#email-address").type(faker.internet.email());
    //   cy.get("#continue").click();
    //   cy.get("#postcode").type("M24 6DH");
    //   cy.get("#continue").click();
    //   cy.get("#address").select(
    //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
    //   );
     
    });
});
it("2 Verify happy path - Add an additional contact", () => {
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
    //   Give licence holder details
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
    //   Give ecologist details
    cy.get("a").contains("Give ecologist details").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
     cy.get("#account").click();
     cy.get("#continue").click();
    cy.get("#change-email").click();
    cy.get("#continue").click();

    // cy.get("#main-content > div > div > form > fieldset > div > div > div:nth-child(1) > label").click();
    cy.get("#continue").click();
    

// Authorised person
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
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      
    //   Add additional contacts
      cy.get("a").contains("Add additional contacts").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();

      cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();

    //   cy.get("input[value='new']").click();
    //   cy.get("#continue").click();
    //   cy.get("#is-organisation").click();
    //   cy.get("#organisation-name").type(faker.company.bs());
    //   cy.get("#continue").click();
      cy.get("#email-address").type(faker.internet.email());
      cy.get("#continue").click();
    //   cy.get("#yes-no-2").click();
    //   cy.get("#continue").click();
    //   cy.get("#email-address").type(faker.internet.email());
    //   cy.get("#continue").click();
        cy.get("#yes-no-2").click();
      cy.get("#continue").click();
    //   cy.get("#postcode").type("M24 6DH");
    //   cy.get("#continue").click();
    //   cy.get("#address").select(
    //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
    //   );
      cy.get("#continue").click();
      cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
        "COMPLETED");
        cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
          "Add additional contacts");
       

    });

    //   cy.get("#email-address").type(faker.internet.email());
    //   cy.get("#continue").click();
    //   cy.get("#postcode").type("M24 6DH");
    //   cy.get("#continue").click();
    //   cy.get("#address").select(
    //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        
    //   );
     
    });
    it("3 Verify happy path - Add an additional contact", () => {
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
        //   Give licence holder details
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
        //   Give ecologist details
        cy.get("a").contains("Give ecologist details").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
         cy.get("#account").click();
         cy.get("#continue").click();
        cy.get("#change-email").click();
        cy.get("#continue").click();
    
        // cy.get("#main-content > div > div > form > fieldset > div > div > div:nth-child(1) > label").click();
        cy.get("#continue").click();
    
    // Authorised person
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
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          
        //   Add additional contacts
          cy.get("a").contains("Add additional contacts").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
        //   cy.get("#contact").click();
        //   cy.get("#continue").click();
        //   cy.get("#yes-no-2").click();
        //   cy.get("#continue").click();
        //   cy.get("#email-address").type(faker.internet.email());
        //   cy.get("#continue").click();
            cy.get("#yes-no-2").click();
          cy.get("#continue").click();
        //   cy.get("#postcode").type("M24 6DH");
        //   cy.get("#continue").click();
        //   cy.get("#address").select(
        //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
            
        //   );
          cy.get("#continue").click();
          cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
            "COMPLETED");
            cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
              "Add additional contacts");
        //   cy.get("#email-address").type(faker.internet.email());
        //   cy.get("#continue").click();
        //   cy.get("#postcode").type("M24 6DH");
        //   cy.get("#continue").click();
        //   cy.get("#address").select(
        //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
            
        //   );
         
        });
    });
    it("4 Verify happy path - Add an additional contact", () => {
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
        //   Give licence holder details
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
        //   Give ecologist details
        cy.get("a").contains("Give ecologist details").click();
        cy.get("#yes-no").click();
    cy.get("#continue").click();
     cy.get("#account").click();
     cy.get("#continue").click();
    cy.get("#change-email").click();
    cy.get("#continue").click();

        // cy.get("#main-content > div > div > form > fieldset > div > div > div:nth-child(1) > label").click();
        cy.get("#continue").click();
    
    // Authorised person
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
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          
        //   Add additional contacts
          cy.get("a").contains("Add additional contacts").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
        //   cy.get("#contact").click();
        //   cy.get("#continue").click();
        // //   cy.get("#yes-no-2").click();
        //   cy.get("#continue").click();
          // cy.get("#email-address").type(faker.internet.email());
          // cy.get("#continue").click();
            cy.get("#yes-no").click();
          cy.get("#continue").click();
          // cy.get("#name").type(faker.name.firstName() + faker.name.lastName());
          // cy.get("#continue").click();
          cy.get("#contact").click();
            cy.get("#continue").click();
            cy.get("#email-address").clear();
            cy.get("#email-address").type(faker.internet.email());
          cy.get("#continue").click();
        //   cy.get("#postcode").type("M24 6DH");
        //   cy.get("#continue").click();
        //   cy.get("#address").select(
        //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
            
        //   );
        //   cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
            "COMPLETED");
            cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
              "Add additional contacts");
        //   cy.get("#email-address").type(faker.internet.email());
        //   cy.get("#continue").click();
        //   cy.get("#postcode").type("M24 6DH");
        //   cy.get("#continue").click();
        //   cy.get("#address").select(
        //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
            
        //   );
        //   cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
        //     "COMPLETED");
        //     cy.get("#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)").contains(
        //       "Add additional contacts");
         
        });
    });
});
