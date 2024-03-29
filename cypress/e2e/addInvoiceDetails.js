const faker = require("faker");

describe('Add Invoice Details', () => {
  it(' 1 Verify happy path - Add Invoice Details', () => {
    cy.request(

      '/set-sysdate?iso-string=2023-08-30T17:48:00.000Z'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()

      cy.get('a').contains('Give licence holder details').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get("input[value='new']").click()
      cy.get('#continue').click()
      cy.get('#is-organisation').click()
      cy.get('#organisation-name').fill(faker.company.bs())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Give ecologist details').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#contact').click()
      cy.get('#continue').click()
      cy.get('#account').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Add authorised people').click()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      //   Add additional contacts
      cy.get('a').contains('Add alternative contacts').click()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#new').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').clear()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Add invoice details').click()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('#responsible').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div'
      ).contains('Individual responsible for paying the invoice')
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#purchase-order').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('Add invoice details')
    })
  })
  it(" 1a Verify happy path - Add Invoice Details", () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
    cy.get("a").contains("Give licence holder details").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("input[value='new']").click();
    cy.get("#continue").click();
    cy.get("#is-organisation").click();
    cy.get("#organisation-name").fill(faker.company.bs());
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("#postcode").fill("M24 6DH");
    cy.get("#continue").click();
    cy.get("#address").select("1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH");
    cy.get("#continue").click();
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
    cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
    cy.get("#continue").click();
    cy.get("#email-address").fill(faker.internet.email());
    cy.get("#continue").click();
    cy.get("#postcode").fill("M24 6DH");
    cy.get("#continue").click();
    cy.get("#address").select("1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH");
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
    cy.get("#continue").click();
    cy.get("#email-address").fill(faker.internet.email());
    cy.get("#continue").click();
    cy.get("#postcode").fill("M24 6DH");
    cy.get("#continue").click();
    cy.get("#address").select("2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH");
    cy.get("#continue").click();
    cy.get("#yes-no-2").click();
    cy.get("#continue").click();
    //   Add additional contacts
    cy.get("a").contains("Add alternative contacts").click();
    cy.get("#yes-no-2").click();
    cy.get("#continue").click();
    cy.get("#yes-no").click();
    cy.get("#continue").click();
    cy.get("#yes-no-2").click();
    cy.get("#continue").click();
    cy.get("#new").click();
    cy.get("#continue").click();
    cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
    cy.get("#continue").click();
    cy.get("#email-address").clear();
    cy.get("#email-address").fill(faker.internet.email());
    cy.get("#continue").click();
    cy.get("#continue").click();
    cy.get("a").contains("Add invoice details").click();
    cy.get("#responsible-2").click();
    cy.get("#continue").click();
    cy.get("#main-content > div > div").contains(
      "Individual responsible for paying the invoice"
    );
    cy.get("#yes-no-2").click();
    cy.get("#continue").click();
    cy.get("#responsible-4").click();
    cy.get("#continue").click();
    cy.get("#new").click();
    cy.get("#continue").click();

    // cy.get("input[value='new']").click()
    //     cy.get('#continue').click()
    //     cy.get('#is-organisation').click()
    //     cy.get('#organisation-name').fill(faker.company.bs())
    //     cy.get('#continue').click()
    //     cy.get('#continue').click()
    //     cy.get('#postcode').fill('M24 6DH')
    //     cy.get('#continue').click()
    //     cy.get('#address').select(
    //       '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
    //     )
    //     cy.get('#continue').click()
    cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
    cy.get("#continue").click();
    cy.get("input[value='new']").click();
    cy.get("#continue").click();
    cy.get("#is-organisation").click();
    cy.get("#organisation-name").fill(faker.company.bs());
    cy.get("#continue").click();
    cy.get("#email-address").fill(faker.internet.email());
    cy.get("#continue").click();

    //  cy.get('#continue').click()
    cy.get("#postcode").fill("M24 6DH");
    cy.get("#continue").click();
    cy.get("#address").select("1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH");
    cy.get("#continue").click();
    cy.get("#purchase-order").fill(faker.internet.email());
    cy.get("#continue").click();

    cy.get("#continue").click();
    cy.get(
      "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)"
    ).contains("COMPLETED");
    cy.get(
      "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)"
    ).contains("Add invoice details");
  });
  })

  it(' 2 Verify happy path - Add Invoice Details', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      //   Give licence holder details
      cy.get('a').contains('Give licence holder details').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get("input[value='new']").click()
      cy.get('#continue').click()
      cy.get('#is-organisation').click()
      cy.get('#organisation-name').fill(faker.company.bs())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#continue').click()
      //   Add authorised people
      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()

      //   Give ecologist details

      cy.get('a').contains('Give ecologist details').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#contact').click()
      cy.get('#continue').click()
      cy.get('#account').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Add additional contacts

      cy.get('a').contains('Add alternative contacts').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get("input[value='new']").click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').clear()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Add invoice details

      cy.get('a').contains('Add invoice details').click()
      cy.get("input[value='other']").click()
      cy.get('#continue').click()
      cy.get('#new').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#account').click()
      cy.get('#continue').click()
      cy.get('#change-email').click()
      cy.get('#continue').click()
      cy.get('#purchase-order').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('Add invoice details')
    })
  })
  it(' 3 Verify happy path - Add Invoice Details', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Give licence holder details

      cy.get('a').contains('Give licence holder details').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get("input[value='new']").click()
      cy.get('#continue').click()
      cy.get('#is-organisation').click()
      cy.get('#organisation-name').fill(faker.company.bs())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Give ecologist details

      cy.get('a').contains('Give ecologist details').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#contact').click()
      cy.get('#continue').click()
      cy.get('#account').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()

      //   Add additional contacts

      cy.get('a').contains('Add alternative contacts').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get("input[value='new']").click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').clear()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Add invoice details

      cy.get('a').contains('Add invoice details').click()
      cy.get("input[value='other']").click()
      cy.get('#continue').click()
      cy.get('#new').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#account').click()
      cy.get('#continue').click()
      cy.get('#change-email-3').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#purchase-order').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('Add invoice details')
    })
  })

  it(' 4 Verify happy path - Add Invoice Details', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Give licence holder details

      cy.get('a').contains('Give licence holder details').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get("input[value='new']").click()
      cy.get('#continue').click()
      cy.get('#is-organisation').click()
      cy.get('#organisation-name').fill(faker.company.bs())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Give ecologist details

      cy.get('a').contains('Give ecologist details').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#contact').click()
      cy.get('#continue').click()
      cy.get('#account').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()

      //   Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      //   Add invoice details
      cy.get('a').contains('Add invoice details').click()
      cy.get("input[value='other']").click()
      cy.get('#continue').click()
      cy.get('#new').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#new').click()
      cy.get('#continue').click()
      cy.get('#is-organisation').click()
      cy.get('#organisation-name').fill(faker.company.bs())
      cy.get('#continue').click()

      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#purchase-order').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
      ).contains('Add invoice details')
    })
  })
})
