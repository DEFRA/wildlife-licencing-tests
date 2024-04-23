const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const authorisedPeopleElement = require('../pageObjects/authorisedPeoplePage.js')

describe('Add authorised People', () => {
  beforeEach(() => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email1)
    //   cy.get('#password').fill(users.password1)
    //   commonElement.clickContinueButton();    //   cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)

    cy.visit(Cypress.env('baseUrl'))

    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton(),
      cy.get('#main-content > fieldset > legend > h1').should(
        'contain',
        'Which species will the work affect?'
      )
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
    })
  })
  it(' 1 Verify happy path - Add an authorised People', () => {
    // Add authorised people
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    commonElement.GetApplicationTasklist('Add authorised people')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    cy.get('#main-content > div > div').contains(
      'This is a person who will be responsible for everything done under the licence.'
    )
    cy.get('#main-content > div > div').contains(
      'It does not include any assistants who will work under the direct supervision of the licence holder or any authorised people.'
    )
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    // authorisedPeopleElement.assertPage("COMPLETED");
    // authorisedPeopleElement.assertPage("Add authorised people");
  })

  it(' 2 Verify happy path - Add multiple authorised People', () => {
    // Add authorised people

    commonElement.GetApplicationTasklist('Add authorised people')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    // authorisedPeopleElement.assertPage("COMPLETED");
    // authorisedPeopleElement.assertPage("Add authorised people");
  })

  it(' 3 Verify happy path - Add an authorised People and remove then select no', () => {
    // Add authorised people

    commonElement.GetApplicationTasklist('Add authorised people')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div > form > fieldset > p > a').click()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    // authorisedPeopleElement.assertPage("COMPLETED");
    // authorisedPeopleElement.assertPage("Add authorised people");
  })

  it(' 4 Verify happy path - Add multiple authorised People and change name', () => {
    // Add authorised people

    commonElement.GetApplicationTasklist('Add authorised people')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > dl:nth-child(9) > div:nth-child(1) > dd.govuk-summary-list__actions > a'
    ).click()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    // authorisedPeopleElement.assertPage("COMPLETED");
    // authorisedPeopleElement.assertPage("Add authorised people");
  })

  it(' 5 Verify happy path - Add multiple authorised People', () => {
    // Add authorised people

    commonElement.GetApplicationTasklist('Add authorised people')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement.SelectAddress('2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    authorisedPeopleElement.assertPage('COMPLETED')
    authorisedPeopleElement.assertPage('Add authorised people')
  })

  it(' 6 Verify happy path - Add an authorised People using manual address', () => {
    // Add authorised people

    commonElement.GetApplicationTasklist('Add authorised people')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName()
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.GetApplicationTasklist('The address doesn’t have a postcode')
    commonElement.clickContinueButton()
    cy.get('#address-line-1').fill('I test drive')
    cy.get('#address-line-2').fill('ford street')
    cy.get('#address-town').fill('manchester UK')
    cy.get('#address-county').fill('Lancashire')
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div > form > fieldset > p > a').click()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    // authorisedPeopleElement.assertPage("COMPLETED");
    // authorisedPeopleElement.assertPage("Add authorised people");
  })
})
