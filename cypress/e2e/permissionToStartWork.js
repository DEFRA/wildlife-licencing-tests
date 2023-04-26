const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('1 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2023-07-01T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#main-content > fieldset > div > div').contains(
        'Planning permission'
      )
      cy.get('#main-content > fieldset > div > div').contains(
        'Demolition consent'
      )
      cy.get('#main-content > fieldset > div > div').contains(
        'Listed building consent'
      )
      cy.get('#main-content > fieldset > div > div').contains(
        'Highways Act consent'
      )
      cy.get('#main-content > fieldset > div > div').contains(
        'Mineral consent'
      )
      cy.get('#main-content > fieldset > div > div').contains(
        'Tree preservation order'
      )
      cy.get('#consent-type-check').click()
      cy.get('#continue').click()
      cy.get('#authority-name').type('a')
      cy.get('#authority-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional').contains(
        'Full'
      )
      cy.get('#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional').contains(
        'Outline'
      )
      cy.get('#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional').contains(
        'Hybrid'
      )
      cy.get('#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional').contains(
        'Other'
      )
      cy.get('#planning-type').click()
      cy.get('#continue').click()
      cy.get('#reference').type(faker.name.firstName())
      cy.get('#continue').click()
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning permission'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning authority'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning type'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Reference'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Change'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Remove'
      )
      cy.get('#add-another-permission').click()
      cy.get('#continue').click()
      cy.get('#consent-type-check-5').click()
      cy.get('#continue').click()

      // cy.get("#continue").click();
      // cy.get("#conditions-not-met-reason").type(faker.lorem.words(5));
      // cy.get("#continue").click();
      // cy.get("#potential-conflicts").click();
      // cy.get("#continue").click();
      // cy.get("#describe-potential-conflicts").type(faker.lorem.words(4));
      // cy.get("#continue").click();
      // cy.get("#continue").click();

      cy.get('#authority-name').type('b')
      cy.get('#authority-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#reference').type(faker.name.firstName())
      cy.get('#continue').click()
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning permission'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning authority'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning type'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Reference'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Change'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Remove'
      )

      cy.get('#main-content > fieldset > dl > div').contains(
        'Mineral consent'
      )

      cy.get('#add-another-permission-2').click()
      // cy.get("#potential-conflicts").click();
      // cy.get("#continue").click();
      // cy.get("#describe-potential-conflicts").type(faker.lorem.words(4));
      // cy.get("#continue").click();
      cy.get('#continue').click()
      cy.get('#main-content > fieldset').contains(
        'Have all other wildlife or habitat-related conditions been met?'
      )
      cy.get('#main-content > fieldset').contains(
        'These include:'
      )
      cy.get('#main-content > fieldset').contains(
        'planning conditions'
      )
      cy.get('#main-content > fieldset').contains(
        'reserved matters'
      )
      cy.get('#main-content > fieldset').contains(
        'Section 106 agreements'
      )
      cy.get('#main-content > fieldset').contains(
        'commitments made at a Public Enquiry or in an Environmental Statement'
      )
      cy.get('#conditions-met').click()
      cy.get('#continue').click()

      cy.get('#potential-conflicts').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul > li > a'
      ).contains('You have not described the potential conflicts between this application and other legal commitments')
      cy.get(
        '#describe-potential-conflicts-error'
      ).contains('Describe the potential conflicts')
      cy.get('#describe-potential-conflicts').type(faker.random.alphaNumeric(40))
      cy.get('#continue').click()
      cy.get('#continue').click()
      // cy.get(
      //   "#error-summary-title"
      // ).contains("You have entered too many characters");
      // cy.get(
      //   "#describe-potential-conflicts-error"
      // ).contains("Describe the potential conflicts");
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })

  it('2 and verify application season period screen', () => {
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#consent-type-check-2').click()
      cy.get('#continue').click()
      cy.get('#authority-name').type('a')
      cy.get('#authority-name__option--0').click()
      cy.get('#continue').click()
      //   cy.get("#reference").click();
      //   cy.get("#continue").click();
      cy.get('#reference').type(faker.name.firstName())
      cy.get('#continue').click()
      cy.get('#add-another-permission-2').click()
      cy.get('#continue').click()
      cy.get('#conditions-met-2').click()
      cy.get('#continue').click()
      cy.get('#conditions-not-met-reason').type(faker.lorem.words(5))
      cy.get('#continue').click()
      cy.get('#potential-conflicts').click()
      cy.get('#continue').click()
      cy.get('#describe-potential-conflicts').type(faker.lorem.words(4))
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('3 and verify application season period screen', () => {
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#consent-type-check-3').click()
      cy.get('#continue').click()
      cy.get('#authority-name').type('a')
      cy.get('#authority-name__option--0').click()
      cy.get('#continue').click()
      //   cy.get("#planning-type").click();
      //           cy.get("#continue").click();
      cy.get('#reference').type(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#add-another-permission-2').click()
      cy.get('#continue').click()
      cy.get('#conditions-met-2').click()
      cy.get('#continue').click()
      cy.get('#conditions-not-met-reason').type(faker.lorem.words(5))
      cy.get('#continue').click()
      cy.get('#potential-conflicts').click()
      cy.get('#continue').click()
      cy.get('#describe-potential-conflicts').type(faker.lorem.words(4))
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('4 and verify application season period screen', () => {
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#consent-type-check-4').click()
      cy.get('#continue').click()
      cy.get('#authority-name').type('a')
      cy.get('#authority-name__option--0').click()
      cy.get('#continue').click()
      //    cy.get("#planning-type").click();
      //   cy.get("#continue").click();
      cy.get('#reference').type(faker.name.firstName())
      cy.get('#continue').click()
      cy.get('#add-another-permission-2').click()
      cy.get('#continue').click()
      cy.get('#conditions-met-2').click()
      cy.get('#continue').click()
      cy.get('#conditions-not-met-reason').type(faker.lorem.words(5))
      cy.get('#continue').click()
      cy.get('#potential-conflicts').click()
      cy.get('#continue').click()
      cy.get('#describe-potential-conflicts').type(faker.lorem.words(4))
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('5 and verify application season period screen', () => {

    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
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
      cy.get('a').contains('Give details of permissions to start work').click()
      // two ways remaining
      cy.get('#continue').click()
      cy.get('#no-permission').click()
      cy.get('#continue').click()
      // no option remaining
      cy.get('#potential-conflicts').click()
      cy.get('#continue').click()
      // 4000 words remaining
      cy.get('#describe-potential-conflicts').type(faker.lorem.words(200))
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('6 and verify application season period screen', () => {
  
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
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
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()

      // two ways remaining
      cy.get('#no-permission-2').click()
      cy.get('#continue').click()
      // no option remaining
      cy.get('#potential-conflicts-2').click()
      cy.get('#continue').click()
      // 4000 words remaining
      //   cy.get("#describe-potential-conflicts").type(faker.lorem.words(200));
      //   cy.get("#continue").click();
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('7 and verify application season period screen', () => {

    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
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
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()

      // two ways remaining
      cy.get('#no-permission-3').click()
      cy.get('#other-reason').type(faker.lorem.words(2))
      cy.get('#continue').click()
      // no option remaining
      //   cy.get("#potential-conflicts-2").click();
      //   cy.get("#continue").click();
      // 4000 words remaining
      cy.get('#potential-conflicts-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })

  // Yes

  it('8 and verify application season period screen', () => {
  
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').type(users.email3)
      cy.get('#password').type(users.password2)
      cy.get('#continue').click()
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
      cy.get('a').contains('Give details of permissions to start work').click()
      cy.get('#continue').click()

      // two ways remaining
      cy.get('#no-permission-3').click()
      cy.get('#other-reason').type(faker.lorem.words(2))
      cy.get('#continue').click()
      // no option remaining
      //   cy.get("#conditions-met-2").click();
      //   cy.get("#continue").click();
      // 4000 words remaining
      cy.get('#potential-conflicts').click()
      cy.get('#continue').click()
      cy.get('#describe-potential-conflicts').type(faker.lorem.words(200))
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
})
