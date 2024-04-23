const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('1 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
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
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional'
      ).contains('Full')
      cy.get(
        '#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional'
      ).contains('Outline')
      cy.get(
        '#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional'
      ).contains('Hybrid')
      cy.get(
        '#main-content > fieldset > div > div.govuk-radios.govuk-radios--conditional'
      ).contains('Other')
      cy.get('#planning-type').click()
      commonElement.clickContinueButton()
      cy.get('#reference').fill(faker.name.firstName())
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning permission'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning authority'
      )
      cy.get('#main-content > fieldset > dl > div').contains('Planning type')
      cy.get('#main-content > fieldset > dl > div').contains('Reference')
      cy.get('#main-content > fieldset > dl > div').contains('Change')
      cy.get('#main-content > fieldset > dl > div').contains('Remove')
      cy.get('#add-another-permission').click()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check-5').click()
      commonElement.clickContinueButton()

      // commonElement.clickContinueButton();
      // cy.get("#conditions-not-met-reason").fill(faker.lorem.words(5));
      // commonElement.clickContinueButton();
      // cy.get("#potential-conflicts").click();
      // commonElement.clickContinueButton();
      // cy.get("#describe-potential-conflicts").fill(faker.lorem.words(4));
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();

      cy.get('#authority-name').type('b')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#reference').type(faker.name.firstName())
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning permission'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning authority'
      )
      cy.get('#main-content > fieldset > dl > div').contains('Planning type')
      cy.get('#main-content > fieldset > dl > div').contains('Reference')
      cy.get('#main-content > fieldset > dl > div').contains('Change')
      cy.get('#main-content > fieldset > dl > div').contains('Remove')
      cy.get('#add-another-permission').click()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check-5').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('b')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#reference').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning permission'
      )
      cy.get('#main-content > fieldset > dl > div').contains(
        'Planning authority'
      )
      cy.get('#main-content > fieldset > dl > div').contains('Planning type')
      cy.get('#main-content > fieldset > dl > div').contains('Reference')
      cy.get('#main-content > fieldset > dl > div').contains('Change')
      cy.get('#main-content > fieldset > dl > div').contains('Remove')

      cy.get('#main-content > fieldset > dl > div').contains('Mineral consent')

      cy.get('#add-another-permission-2').click()
      // cy.get("#potential-conflicts").click();
      // commonElement.clickContinueButton();
      // cy.get("#describe-potential-conflicts").fill(faker.lorem.words(4));
      // commonElement.clickContinueButton();
      commonElement.clickContinueButton()
      cy.get('#main-content > fieldset').contains(
        'Have all other wildlife or habitat-related conditions been met?'
      )
      cy.get('#main-content > fieldset').contains('These include:')
      cy.get('#main-content > fieldset').contains('planning conditions')
      cy.get('#main-content > fieldset').contains('reserved matters')
      cy.get('#main-content > fieldset').contains('Section 106 agreements')
      cy.get('#main-content > fieldset').contains(
        'commitments made at a Public Enquiry or in an Environmental Statement'
      )
      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > div > div > div.govuk-error-summary.display-wrapped > div > ul > li > a'
      ).contains(
        'You have not described the potential conflicts between this application and other legal commitments'
      )
      cy.get('#describe-potential-conflicts-error').contains(
        'Describe the potential conflicts'
      )
      cy.get('#describe-potential-conflicts').fill(
        faker.random.alphaNumeric(40)
      )
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
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
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check-2').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      //   cy.get("#reference").click();
      //   commonElement.clickContinueButton();
      cy.get('#reference').fill(faker.name.firstName())
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-not-met-reason').fill(faker.lorem.words(5))
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(4))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('3 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check-3').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      //   cy.get("#planning-fill").click();
      //           commonElement.clickContinueButton();
      cy.get('#reference').fill(faker.random.alphaNumeric(5))
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-not-met-reason').fill(faker.lorem.words(5))
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(4))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('4 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check-4').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      //    cy.get("#planning-fill").click();
      //   commonElement.clickContinueButton();
      cy.get('#reference').fill(faker.name.firstName())
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-not-met-reason').fill(faker.lorem.words(5))
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(4))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('5 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      // two ways remaining
      commonElement.clickContinueButton()
      cy.get('#no-permission').click()
      commonElement.clickContinueButton() // no option remaining
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton() // 4000 words remaining
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(200))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('6 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()

      // two ways remaining
      cy.get('#no-permission-2').click()
      commonElement.clickContinueButton() // no option remaining
      cy.get('#potential-conflicts-2').click()
      commonElement.clickContinueButton() // 4000 words remaining
      //   cy.get("#describe-potential-conflicts").fill(faker.lorem.words(200));
      //   commonElement.clickContinueButton();
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('7 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()

      // two ways remaining
      cy.get('#no-permission-3').click()
      cy.get('#other-reason').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      // no option remaining
      //   cy.get("#potential-conflicts-2").click();
      //   commonElement.clickContinueButton();
      // 4000 words remaining
      cy.get('#potential-conflicts-2').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
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
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()

      // two ways remaining
      cy.get('#no-permission-3').click()
      cy.get('#other-reason').fill(faker.lorem.words(2))
      commonElement.clickContinueButton()
      // no option remaining
      //   cy.get("#conditions-met-2").click();
      //   commonElement.clickContinueButton();
      // 4000 words remaining
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(200))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('9 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#planning-type-2').click()
      commonElement.clickContinueButton()
      cy.get('#reference').fill('text')
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts-2').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('10 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#planning-type-3').click()
      commonElement.clickContinueButton()
      cy.get('#reference').fill('text')
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts-2').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
  it('11 and verify application season period screen', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give details of permissions to start work').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#planning-type-4').click()
      commonElement.clickContinueButton()
      cy.get('#other-description').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      cy.get('#reference').fill('text')
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met').click()
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts-2').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
    })
  })
})
