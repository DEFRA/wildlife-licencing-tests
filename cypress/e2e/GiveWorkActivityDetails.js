const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Work activities details', () => {
  it('1 - verify user can complete work activity section when Preserving public health', () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason").click();
      cy.get("#continue").click();
      cy.get("#work-category").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
    })
  })

  it("2 - verify user can complete work activity section when Preventing damage to livestock, crops, timber or property is selected", () => {
    cy.request(
      "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("3 - verify user can complete work activity section when Preventing disease spreading is selected", () => {
    cy.request(
   "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-3").click();
      cy.get("#continue").click();
      cy.get("#work-category-3").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("4 - verify user can complete work activity section when Home improvement through householder planning permission or permitted development is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-4").click();
      cy.get("#continue").click();
      cy.get("#work-category-4").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("5 - verify user can complete work activity section when Scientific, research or educational purposes  is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-5").click();
      cy.get("#continue").click();
      cy.get("#work-category-5").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("6 - verify user can complete work activity section when Conservation of protected species, including protection of bat roosts  is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-6").click();
      cy.get("#continue").click();
      cy.get("#work-category-6").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("7 - verify user can complete work activity section when Conserve scheduled monuments, listed buildings, places of worship, or traditional farm buildings  is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-6").click();
      cy.get("#continue").click();
      cy.get("#work-category-7").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
    })
  })

  it("8 - verify user can complete work activity section when Other is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-8").click();
      cy.get("#exempt-details").fill(faker.random.alphaNumeric(400));
      cy.get("#continue").click();
      cy.get("#work-category-9").click();
      cy.get("#continue").click();
      cy.get("#main-content > fieldset").contains("Cost of this licence");
      cy.get("#main-content > fieldset").contains(
        "The cost of this licence typically ranges from £300 to £800."
      );
      cy.get("#main-content > fieldset").contains(
        "More complex licences cost more. Things that can increase the cost of a licence include:"
      );
      cy.get("#main-content > fieldset").contains(
        "if the development affects a protected site"
      );
      cy.get("#main-content > fieldset").contains("if badgers are present");
      cy.get("#main-content > fieldset").contains(
        "greater impact on badgers, such as disconnecting territories, affecting more setts, and proposals to close setts"
      );
      cy.get("#main-content > fieldset").contains("new or more complex methods being used");
      cy.get("#main-content > fieldset").contains(
        "incomplete, inaccurate or unnecessary information in the application"
      );
      cy.get("#main-content > fieldset").contains("poor quality surveys");
      cy.get("#main-content > fieldset").contains("issues with ecologist experience");
      cy.get("#main-content > fieldset").contains(
        "phased or multi-plot developments"
      );
      cy.get("#main-content > fieldset").contains(
        "planning permission is not fully in place"
      );
      cy.get("#main-content > fieldset").contains(
        "The cost will be more if you need to make a change in your application once you have submitted it."
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
    })
  })

  it("9 - verify user can complete work activity section when Barn conversion is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("10 - verify user can complete work activity section when Commercial is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-2").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("11 - verify user can complete work activity section when Communications is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-3").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("12 - verify user can complete work activity section when Energy generation and supply is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-4").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("13 - verify user can complete work activity section when Flood and coastal defences is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-5").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("14 - verify user can complete work activity section when Residential housing (not householder improvements) is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-6").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("15 - verify user can complete work activity section when Residential housing (not householder improvements) is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-7").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("16 - verify user can complete work activity section when Quarrying and mining is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-8").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("17 - verify user can complete work activity section when Nationally significant infrastructure projects is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-8").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("18 - verify user can complete work activity section when Public buildings and public land is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-10").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("19 - verify user can complete work activity section when Tourism and leisure is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-11").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("20 - verify user can complete work activity section when Transport, including roads is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-12").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("21 - verify user can complete work activity section when Waste management is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-13").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("22 - verify user can complete work activity section when Water bodies, water supply and treatment is selected", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-14").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
    });
  });
  it("Unhappy path - 23 verify too many characters error is displayed when 4001 is entered into What activity or development work do you plan to do?", () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(4001));
      cy.get("#continue").click();
      cy.get(
        '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul'
      ).contains('The description must be 4,000 characters or less')
      // You have entered too many characters
    })
  })
  it("Unhappy path - 24 Verify that continue without select an option on What kind of development is happening at the site? returns error", () => {
      cy.request(
        "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
      );
      cy.visit(Cypress.env("login"));
      cy.fixture("users.json").then((users) => {
        cy.get("#username").fill(users.email3);
        cy.get("#password").fill(users.password2);
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
        cy.get("a").contains("Give work activity details").click();
        cy.get("#continue").click();
        cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
        cy.get("#continue").click();
        cy.get("#yes-no-2").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("#main-content > div > div").contains(
          "You have not selected an option"
        );
      });
  });
  it("Unhappy path - 25 Verify that continue without selecting an option on What activity or development work do you plan to do?", () => {
    cy.request(
      "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul'
      ).contains(
        'You have not entered the activity or development work you plan to do'
      )
    })
  })

  it("Unhappy path - 26 Verify that continue without any text on Other option while on What reason do you think your development is exempt from licence payments?returns error", () => {
    cy.request(
      "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-8").click();
      cy.get("#continue").click();
      cy.get(
        '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul'
      ).contains(
        'You have not provided more detail on why your development is exempt'
      )
    })
  })

  it("Unhappy path - 27 verify continue on Do you think the purpose of your project is exempt from payment? returns an error", () => {
      cy.request(
        "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
      );
      cy.visit(Cypress.env("login"));
      cy.fixture("users.json").then((users) => {
        cy.get("#username").fill(users.email3);
        cy.get("#password").fill(users.password2);
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
        cy.get("a").contains("Give work activity details").click();
        cy.get("#continue").click();
        cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
              cy.get("#continue").click();
              cy.get("#continue").click();
        cy.get("#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul").contains(
          "You have not selected an option"
        );
      });
  });

  it("Unhappy path - 28 Verify that continue without selecting an option on What reason do you think your development is exempt from licence payments? returns error", () => {
    cy.request(
      "https://new-tst.aws.defra.cloud/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
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
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-8").click();
      cy.get("#exempt-details").fill(faker.random.alphaNumeric(4001));
      cy.get("#continue").click();
      cy.get(
        '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul'
      ).contains('You have entered too many characters')
    })
  })
})
