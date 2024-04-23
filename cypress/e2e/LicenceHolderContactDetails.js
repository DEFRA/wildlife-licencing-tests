const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

describe('Page title verification', () => {
  it('1a Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })
  it('2a Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('The address doesn’t have a postcode')
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('2 Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName())
      cy.url().should('include', '/licence-holder-name')
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      cy.get('#is-organisation-2').click()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      cy.url().should('include', '/licence-holder-email')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })
  it('2a Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
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
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName())
      cy.url().should('include', '/licence-holder-name')
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      cy.get('#is-organisation-2').click()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      cy.url().should('include', '/licence-holder-email')
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('The address doesn’t have a postcode')
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('test')
      cy.get('#address-county').fill('Manchester')
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('3 Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role-2').click()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      cy.get('#is-organisation-2').click()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('3a Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      cy.get('#is-organisation-2').click()
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('4 Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName())
      cy.url().should('include', '/licence-holder-name')
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      cy.url().should('include', '/licence-holder-email')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      cy.get('select').select('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('4a Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName())
      cy.url().should('include', '/licence-holder-name')
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      cy.url().should('include', '/licence-holder-email')
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('The address doesn’t have a postcode')
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('5 Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      cy.get('#change-email').click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('LB1 2CD')
      commonElement.clickContinueButton()
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Leeds')
      cy.get('#address-postcode').fill('LB1 2CD')

      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('5a Verify happy path - Licence holder contact', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.clickOnChangeEmailOption()
      commonElement.EnterEmailAddress(faker.internet.email())
      cy.url().should('include', '/licence-holder-email')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('LB1 2CD')
      commonElement.clickContinueButton()
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Leeds')
      cy.get('#address-postcode').fill('LB1 2CD')

      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('COMPLETED')
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(1)'
        ).contains('Give licence holder details')
      })
    })
  })

  it('SDDSIP-613 Back button on postcode going showing what is the  name of user organisation', () => {
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
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-organisation')
      commonElement.SelectYesOptionaOnIsOrganisation
      cy.url().should('include', '/licence-holder-organisation-name')
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > div > div > form > fieldset > dl > div:nth-child(5) > dd.govuk-summary-list__actions > a'
      ).click()
      cy.get('#main-content > div > div > form > fieldset > p > a').click()
      cy.url().should('include', '/licence-holder-check-answers')
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        commonElement.assertPageText().contains(
          eligibility2.text14
        )
        commonElement.assertPageText().contains(
          eligibility2.text15
        )
        commonElement.assertPageText().contains(
          eligibility2.text16
        )
        commonElement.assertPageText().contains(
          eligibility2.text17
        )
      })
    })
  })

  it('SDDSIP-617 Name and organisation option is not updating', () => {
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
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName())
      cy.url().should('include', '/licence-holder-name')
      commonElement.clickContinueButton()
      cy.get("input[value='new']").click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      cy.url().should('include', '/licence-holder-email')
      commonElement.clickContinueButton()
      cy.url().should('include', '/licence-holder-postcode')
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.get(
        ' #main-content > div > div > form > fieldset > dl > div:nth-child(2) > dd.govuk-summary-list__actions> a'
      ).click()
    })
  })
})
// });
