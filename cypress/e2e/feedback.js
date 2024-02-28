
const faker = require('faker')

describe("Feedback", () => {
  beforeEach(() =>{
    cy.visit(Cypress.env('login'))
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
      cy.get("#continue").click();
      cy.get('a').contains("Your feedback (opens in new tab)")
      .invoke('removeAttr', 'target').click()
      cy.url()
      .should('include', 'https://new-tst.aws.defra.cloud/feedback')
     
    });
  });
  it("1 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });


  it("2 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-2").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
  });

  it("3 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-3").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });
 
  it("4 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-4").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
            cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });

  it("5 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-5").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });

  it("6 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });

  it("7 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-2").click();
      cy.get("#continue").click();
            cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });

  it("8 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-3").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });
 
  it("9 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-4").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });
 
  it("10 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-5").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });

  it("11 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(1));
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback");
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.");
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.");
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.");
    });

    it("12 Feedback screen - verify error message ", () => {
      cy.get("#continue").click();
      cy.get("#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul > li > a").contains("You have not selected an option")
      cy.get("#nps-satisfaction-error").contains("Select a rating")
      cy.get("#nps-satisfaction").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("Thank you for your feedback")
      cy.get("#main-content > div > div").contains("We will use your feedback to improve our services.")
      cy.get("#main-content > div > div").contains("You can now view all your wildlife licences and applications or close this browser tab to return to the service at the same point.")
      cy.get("#main-content > div > div").contains("If you want to leave this service, you can sign out or close this browser window.")
    });
    it("13 Feedback screen - very satisfied flow", () => {
      cy.get("#nps-satisfaction-5").click();
      cy.get("#with-hint").fill(faker.random.alphaNumeric(4001));
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("You have entered too many characters");
      cy.get("#main-content > div > div").contains("Feedback must be 4000 characters or less");
      cy.get("#main-content > div > div").contains("You have 1 character too many");
    });
    it("14 Feedback screen - very satisfied flow", () => {
      cy.get('div.govuk-phase-banner').should('not.contain', 'Your feedback (opens in new tab) can help us to improve this new service.')
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains("You have not selected an option");
      cy.get("a").contains("You have not selected an option").click();
    });
});
 