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
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give details of permissions to start work").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#consent-type-check").click(); 
      cy.get("#continue").click();
      cy.get("#authority-name").type("a");
      cy.get("#authority-name__option--0").click(); 
      cy.get("#continue").click();
      cy.get("#planning-type").click();
      cy.get("#continue").click();
      cy.get("#reference").type(faker.name.firstName());
      cy.get("#continue").click();
      cy.get("#add-another-permission-2").click();
      cy.get("#continue").click();
      cy.get("#conditions-met-2").click();
      cy.get("#continue").click();
      cy.get("#conditions-not-met-reason").type(faker.lorem.words(5));
      cy.get("#continue").click();
      cy.get("#potential-conflicts").click();
     cy.get("#continue").click();
     cy.get("#describe-potential-conflicts").type(faker.lorem.words(4));
     cy.get("#continue").click();
     cy.get("#continue").click();
     cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("COMPLETED");
    cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("Give details of permissions to start work");
        

    })
    });

    it("2 and verify application season period screen", () => {
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
          cy.get("#yes-no").click();
          cy.get("#continue").click();
          cy.get("#yes-no").click();
          cy.get("#continue").click();
          cy.get("#yes-no").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Give details of permissions to start work").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#consent-type-check-2").click(); 
          cy.get("#continue").click();
          cy.get("#authority-name").type("a");
          cy.get("#authority-name__option--0").click(); 
          cy.get("#continue").click();
        //   cy.get("#reference").click();
        //   cy.get("#continue").click();
          cy.get("#reference").type(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#add-another-permission-2").click();
          cy.get("#continue").click();
          cy.get("#conditions-met-2").click();
          cy.get("#continue").click();
          cy.get("#conditions-not-met-reason").type(faker.lorem.words(5));
          cy.get("#continue").click();
          cy.get("#potential-conflicts").click();
         cy.get("#continue").click();
         cy.get("#describe-potential-conflicts").type(faker.lorem.words(4));
         cy.get("#continue").click();
         cy.get("#continue").click();
         cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("COMPLETED");
        cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("Give details of permissions to start work");
            
    
        })
        });
        it("3 and verify application season period screen", () => {
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
              cy.get("#yes-no").click();
              cy.get("#continue").click();
              cy.get("#yes-no").click();
              cy.get("#continue").click();
              cy.get("#yes-no").click();
              cy.get("#continue").click();
              cy.get("#continue").click();
              cy.get("#continue").click();
              cy.get("a").contains("Give details of permissions to start work").click();
              cy.get("#continue").click();
              cy.get("#continue").click();
              cy.get("#consent-type-check-3").click(); 
              cy.get("#continue").click();
              cy.get("#authority-name").type("a");
              cy.get("#authority-name__option--0").click(); 
              cy.get("#continue").click();
    //   cy.get("#planning-type").click();
    //           cy.get("#continue").click();
              cy.get("#reference").type(faker.name.firstName());
              cy.get("#continue").click();
              cy.get("#add-another-permission-2").click();
              cy.get("#continue").click();
              cy.get("#conditions-met-2").click();
              cy.get("#continue").click();
              cy.get("#conditions-not-met-reason").type(faker.lorem.words(5));
              cy.get("#continue").click();
              cy.get("#potential-conflicts").click();
             cy.get("#continue").click();
             cy.get("#describe-potential-conflicts").type(faker.lorem.words(4));
             cy.get("#continue").click();
             cy.get("#continue").click();
             cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("COMPLETED");
            cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("Give details of permissions to start work");
                
        
            })
            });
            it("4 and verify application season period screen", () => {
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
                  cy.get("#yes-no").click();
                  cy.get("#continue").click();
                  cy.get("#yes-no").click();
                  cy.get("#continue").click();
                  cy.get("#yes-no").click();
                  cy.get("#continue").click();
                  cy.get("#continue").click();
                  cy.get("#continue").click();
                  cy.get("a").contains("Give details of permissions to start work").click();
                  cy.get("#continue").click();
                  cy.get("#continue").click();
                  cy.get("#consent-type-check-4").click(); 
                  cy.get("#continue").click();
                  cy.get("#authority-name").type("a");
                  cy.get("#authority-name__option--0").click(); 
                  cy.get("#continue").click();
                //    cy.get("#planning-type").click();
                //   cy.get("#continue").click();
                  cy.get("#reference").type(faker.name.firstName());
                  cy.get("#continue").click();
                  cy.get("#add-another-permission-2").click();
                  cy.get("#continue").click();
                  cy.get("#conditions-met-2").click();
                  cy.get("#continue").click();
                  cy.get("#conditions-not-met-reason").type(faker.lorem.words(5));
                  cy.get("#continue").click();
                  cy.get("#potential-conflicts").click();
                 cy.get("#continue").click();
                 cy.get("#describe-potential-conflicts").type(faker.lorem.words(4));
                 cy.get("#continue").click();
                 cy.get("#continue").click();
                 cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("COMPLETED");
                cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("Give details of permissions to start work");
                    
            
                })
                });
    it("5 and verify application season period screen", () => {
      cy.request(
        "https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-30T01:00:00.000Z"
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
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no-2").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("a").contains("Give details of permissions to start work").click();
        // two ways remaining
        cy.get("#continue").click();
        cy.get("#no-permission").click(); 
        cy.get("#continue").click();
        // no option remaining
        cy.get("#potential-conflicts").click();
        cy.get("#continue").click();
        // 4000 words remaining
        cy.get("#describe-potential-conflicts").type(faker.lorem.words(200));
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get(
            "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
          ).contains("COMPLETED");
          cy.get(
            "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
          ).contains("Give details of permissions to start work");

      });
    });
    it("6 and verify application season period screen", () => {
        cy.request(
          "https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-30T01:00:00.000Z"
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
          cy.get("#yes-no").click();
          cy.get("#continue").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Give details of permissions to start work").click();
          cy.get("#continue").click();

          // two ways remaining
          cy.get("#no-permission-2").click(); 
          cy.get("#continue").click();
          // no option remaining
          cy.get("#potential-conflicts-2").click();
          cy.get("#continue").click();
          // 4000 words remaining
        //   cy.get("#describe-potential-conflicts").type(faker.lorem.words(200));
        //   cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get(
              "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
            ).contains("COMPLETED");
            cy.get(
              "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
            ).contains("Give details of permissions to start work");
  
        });
      });
      it("7 and verify application season period screen", () => {
        cy.request(
          "https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-30T01:00:00.000Z"
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
          cy.get("#yes-no").click();
          cy.get("#continue").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Give details of permissions to start work").click();
          cy.get("#continue").click();

          // two ways remaining
          cy.get("#no-permission-3").click(); 
          cy.get("#other-reason").type(faker.lorem.words(2));
          cy.get("#continue").click();
          // no option remaining
        //   cy.get("#potential-conflicts-2").click();
        //   cy.get("#continue").click();
          // 4000 words remaining
          cy.get("#potential-conflicts-2").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get(
              "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
            ).contains("COMPLETED");
            cy.get(
              "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
            ).contains("Give details of permissions to start work");
  
        });
      });

// Yes

      it("8 and verify application season period screen", () => {
        cy.request(
          "https://new-tst.aws.defra.cloud/set-sysdate?iso-string=2023-04-30T01:00:00.000Z"
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
          cy.get("#yes-no").click();
          cy.get("#continue").click();
          cy.get("#yes-no-2").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Give details of permissions to start work").click();
          cy.get("#continue").click();

          // two ways remaining
          cy.get("#no-permission-3").click(); 
          cy.get("#other-reason").type(faker.lorem.words(2));
          cy.get("#continue").click();
          // no option remaining
        //   cy.get("#conditions-met-2").click();
        //   cy.get("#continue").click();
          // 4000 words remaining
          cy.get("#potential-conflicts").click();
          cy.get("#continue").click();
          cy.get("#describe-potential-conflicts").type(faker.lorem.words(200));
        cy.get("#continue").click();
        cy.get("#continue").click();
          cy.get(
              "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
            ).contains("COMPLETED");
            cy.get(
              "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
            ).contains("Give details of permissions to start work");
  
        });
      });
      
});