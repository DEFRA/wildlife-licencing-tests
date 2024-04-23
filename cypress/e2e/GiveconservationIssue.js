const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const converservativeIssueElement = require('../pageObjects/giveconservationIssuePage.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//  */ 1.1
//  1	Will the activity take place on or next to any designated sites?	Yes   commonElement.clickOnYesOption();
//  2	Tell us about each designated site the activity will affect	Tell us about the first designated site
//  3	What is the name of the designated site? 	Add site  cy.get('#site-name').fill('a')
//  4	Do you have permission from the owner or occupier of the designated site?	 Yes  commonElement.clickOnYesOption();
//  5	Give details of the permission	4000 Characters free text       cy.get('#permission-details').fill(faker.random.alphaNumeric(4000))

//  6	Have you had advice or permission for the activity from Natural England?	 Yes       commonElement.clickOnYesOption();

//  7	"Advice about the activity
//  Who did you receive the advice from"	100 Characters free text // cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))

//  8	"Advice about the activity
//  Describe the outcome of the advice"	4000 Characters free text //       cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))

//  9	Will the activity happen on the site or next to it	On the site       cy.get('#proximity').click()

//  10	Do you want to add another site?	No       cy.get('#yes-no-2').click()

// 1.2
// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	Yes
// Give details of the permission	 4000 Characters free text
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	On the site
// Do you want to add another site?	No
// 1.3
// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site? 	Add site
// Do you have permission from the owner or occupier of the designated site?	 Yes
// Give details of the permission	 4000 Characters free text
// Have you had advice or permission for the activity from Natural England?	 Yes
// "Advice about the activity
// Who did you receive the advice from"	100 Characters free text
// "Advice about the activity
// Describe the outcome of the advice"	4000 Characters free text
// Will the activity happen on the site or next to it	Next to Site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site? 	Add site
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	 Yes
// "Advice about the activity
// Who did you receive the advice from"	100 Characters free text
// "Advice about the activity
// Describe the outcome of the advice"	4000 Characters free text
// Will the activity happen on the site or next to it	On the site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site? 	Add site
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	 Yes
// "Advice about the activity
// Who did you receive the advice from"	100 Characters free text
// "Advice about the activity
// Describe the outcome of the advice"	4000 Characters free text
// Will the activity happen on the site or next to it	Next to Site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	Yes
// Give details of the permission	 4000 Characters free text
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	Next to site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	Next to site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	On the site
// Do you want to add another site?	No

describe('Page title verification', () => {
  beforeEach(() => {
    //   cy.visit(Cypress.env('login'))
    //   cy.fixture('users.json').then((users) => {
    //     cy.get('#username').fill(users.email1)
    //     cy.get('#password').fill(users.password1)
    //     commonElement.clickContinueButton();
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-4').click()
      commonElement.clickContinueButton()
      // cy.get('#user-role-4').click();
      // cy.get('#continue').click();
      // cy.get('#continue').click();
      cy.wait(500)
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
    })
  })

  it('1.1 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton() //   cy.get("#advice-from-who").fill(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })
  //  })
  it('1.2 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#proximity-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })
  it('1.3 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })
  it('1.4 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton() //   cy.get("#advice-from-who").fill(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('1.5 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton() //   cy.get("#advice-from-who").fill(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('2 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })
  // })
  it('3 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains('Select an option')
    cy.get('#main-content > div > div').contains('Select an option')
  })

  it('4 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton() //   cy.get("#advice-from-who").fill(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get('#main-content > div > div').contains(
      'You have not selected an option'
    )
    cy.get('#main-content > div > div').contains(
      'You have not selected an option'
    )
  })

  it('5 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have not entered a designated site name'
    )
    cy.get('#main-content > div > div').contains(
      'Enter a designated site name'
    )
  })

  it('6 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have not selected an option'
    )
    cy.get('#main-content > div > div').contains('Select an option')
  })

  it('7 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4001))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have entered too many characters'
    )
    cy.get('#main-content > div > div').contains(
      'Enter details of the permission'
    )
  })

  it('8 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have not entered details of the permission'
    )
    cy.get('#main-content > div > div').contains(
      'Enter details of the permission'
    )
  })

  it('9 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton() //   cy.get("#advice-from-who").fill(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton() //   cy.get("#advice-from-who").fill(
    //     faker.name.firstName() + faker.name.lastName()
    //   );
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('10 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4001))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have entered too many characters'
    )
    // cy.get(
    //   '#main-content > div > div'
    // ).contains('Enter the name of who gave you the advice')
    cy.get('#main-content > div > div').contains(
      'Enter a description of the outcome'
    )
  })

  it('11 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(300))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'Enter the name of who gave you the advice'
    )
    cy.get('#main-content > div > div').contains(
      'Enter a description of the outcome'
    )
    cy.get('#main-content > div > div').contains(
      'You have not entered a description of the outcome'
    )
    cy.get('#main-content > div > div').contains(
      'You have entered too many characters'
    )
  })

  it('12 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(301))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(400))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have entered too many characters'
    )
    cy.get('#main-content > div > div').contains(
      'Enter the name of who gave you the advice'
    )
  })

  it('13 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#proximity-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('13a and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton() // commonElement.clickContinueButton();
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('14 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#proximity-2').click()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
    cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('15 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get('#proximity').click()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('Give details of conservation issues')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
    ).contains('COMPLETED')
  })

  it('16 and verify application season period screen', () => {
    commonElement.GetApplicationTasklist('Give details of conservation issues')
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    cy.get('#site-name').fill('a')
    converservativeIssueElement.clickOnSiteOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(4000))
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.get('#advice-description').fill(faker.random.alphaNumeric(400))
    commonElement.clickContinueButton()
    cy.get('#main-content > div > div').contains(
      'You have not entered who gave you the advice'
    )
    cy.get('#main-content > div > div').contains(
      'Enter the name of who gave you the advice'
    )
  })
})
