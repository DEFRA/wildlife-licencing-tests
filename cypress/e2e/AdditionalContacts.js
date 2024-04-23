const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

describe('Add an additional contact', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
    })
  })

  it(' 1 Verify happy path - Add an additional contact', () => {
    // cy.visit(Cypress.env("baseUrl"));
    // cy.fixture("users.json").then((users) => {
    //   eligibilityfunctionPage.enterIdmUsername(users.email1);
    //   eligibilityfunctionPage.enterIdmPassword(users.password1);
    //   commonElement.clickContinueButton();
    //   commonElement.verifyHeaderPage(users.nextpage);
    //   commonElement.ClickOnNewApplicationButton()
    //   eligibilityfunctionPage.selectBadgerOption();
    //   commonElement.clickContinueButton();
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
    //  Give licence holder details
    commonElement
      .GetApplicationTasklist('Give licence holder details')

    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#phone-number').fill(faker.phone.phoneNumber())
    commonElement.clickContinueButton()
    cy.get('#account').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    //   Give ecologist details
    commonElement
      .GetApplicationTasklist
      ('Give ecologist details')

    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#account').click()
    commonElement.clickContinueButton()
    cy.get('#change-email').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    // Authorised person
    commonElement
      .GetApplicationTasklist
      ('Add authorised people')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    //   Add additional contacts
    commonElement.GetApplicationTasklist
    ('Add alternative contacts')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#contact').click()
    commonElement.clickContinueButton()
    // commonElement.EnterEmailAddress(faker.internet.email());
    // commonElement.clickContinueButton();
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('Add alternative contacts')
  })
  // });
  it('2 Verify happy path - Add an additional contact', () => {
    // Cypress.env("baseUrl");
    // cy.fixture("users.json").then((users) => {
    //   eligibilityfunctionPage.enterIdmUsername(users.email1);
    //   eligibilityfunctionPage.enterIdmPassword(users.password1);
    //   commonElement.clickContinueButton();
    //   commonElement.verifyHeaderPage(users.nextpage);
    //   commonElement.ClickOnNewApplicationButton()
    //   eligibilityfunctionPage.selectBadgerOption();
    //   commonElement.clickContinueButton();
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
    //   Give licence holder details
    commonElement
      .GetApplicationTasklist
      ('Give licence holder details')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.SelectYesOptionaOnIsOrganisation
    commonElement.EnterOrganisationName(faker.company.bs())
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    //   Give ecologist details
    commonElement
      .GetApplicationTasklist('Give ecologist details')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#account').click()
    commonElement.clickContinueButton()
    cy.get('#change-email').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    // Authorised person
    commonElement
      .GetApplicationTasklist('Add authorised people')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    //   Add additional contacts
    commonElement
      .GetApplicationTasklist('Add alternative contacts')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('Add alternative contacts')
  })
  // });
  it('3 Verify happy path - Add an additional contact', () => {
    // cy.request( ("/set-sysdate?iso-string=2023-03-30T17:48:00.000Z"));
    // Cypress.env("baseUrl");
    // cy.fixture("users.json").then((users) => {
    //   eligibilityfunctionPage.enterIdmUsername(users.email1);
    //   eligibilityfunctionPage.enterIdmPassword(users.password1);
    //   commonElement.clickContinueButton();
    //   commonElement.verifyHeaderPage(users.nextpage);
    //   commonElement.ClickOnNewApplicationButton()
    //   eligibilityfunctionPage.selectBadgerOption();
    //   commonElement.clickContinueButton();
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#user-role-4').click()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    //   Give licence holder details
    commonElement
      .GetApplicationTasklist('Give licence holder details')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.SelectYesOptionaOnIsOrganisation
    commonElement.EnterOrganisationName(faker.company.bs())
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    //   Give ecologist details
    commonElement
      .GetApplicationTasklist
      ('Give ecologist details')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#account').click()
    commonElement.clickContinueButton()
    cy.get('#change-email').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    // Authorised person
    commonElement
      .GetApplicationTasklist('Add authorised people')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    //   Add additional contacts
    commonElement
      .GetApplicationTasklist('Add alternative contacts')

    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('Add alternative contacts')
  })
  // });
  it('4 Verify happy path - Add an additional contact', () => {
    // cy.request( ("/set-sysdate?iso-string=2023-03-30T17:48:00.000Z"));
    // Cypress.env("baseUrl");
    // cy.fixture("users.json").then((users) => {
    //   eligibilityfunctionPage.enterIdmUsername(users.email1);
    //   eligibilityfunctionPage.enterIdmPassword(users.password1);
    //   commonElement.clickContinueButton();
    //   commonElement.verifyHeaderPage(users.nextpage);
    //   commonElement.ClickOnNewApplicationButton()
    //   eligibilityfunctionPage.selectBadgerOption();
    //   commonElement.clickContinueButton();
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#user-role-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton() //   Give licence holder details
    commonElement
      .GetApplicationTasklist('Give licence holder details')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get("input[value='new']").click()
    commonElement.clickContinueButton()
    commonElement.SelectYesOptionaOnIsOrganisation
    commonElement.EnterOrganisationName(faker.company.bs())
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickContinueButton() //   Give ecologist details
    commonElement
      .GetApplicationTasklist('Give ecologist details')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#account').click()
    commonElement.clickContinueButton()
    cy.get('#change-email').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    // Authorised person
    commonElement
      .GetApplicationTasklist
      ('Add authorised people')

    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
    commonElement.clickContinueButton()
    commonElement.EnterEmailAddress(faker.internet.email())
    commonElement.clickContinueButton()
    cy.get('body > div.govuk-width-container').should('not.have.text', 'e.g. SW1W 0NY')
    commonElement.EnterPostCode('M24 6DH')
    commonElement.clickContinueButton()
    commonElement
      .SelectAddress()
      .select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    //   Add additional contacts
    commonElement
      .GetApplicationTasklist('Add alternative contacts')

    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.contains('Blaine Gutierrez').click()
    commonElement.clickContinueButton()
    // commonElement.EnterEmailAddress().clear();
    // commonElement.EnterEmailAddress(faker.internet.email());
    // commonElement.clickContinueButton();
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('COMPLETED')
    cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(7)'
    ).contains('Add alternative contacts')
  })
})
// });
