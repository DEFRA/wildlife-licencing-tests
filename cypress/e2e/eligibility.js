// const faker = require('faker')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const commonElement = require('../pageObjects/common.js')
/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Copy Deck Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('Verify CD48 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.wait(3000)
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnSecondRoleOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        eligibilityfunctionPage.verifyApplicantownaLandtext(eligibility1.text2)
        commonElement.ContainYes('Yes')
        commonElement.ContainNo('No')
        commonElement.ContainBack('Back')
        commonElement.ContainContinue('Continue')
      })
    })
  })

  it('Verify CD49 - Landowner permission copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()

      cy.wait(5000)
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnSecondRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text7)
        commonElement.ContainYes('Yes')
        commonElement.ContainNo('No')
        commonElement.ContainBack('Back')
        commonElement.ContainContinue('Continue')
      })
    })
  })
  it('Verify CD51 - Project permissions copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      // cy.origin('https://new-tst.aws.defra.cloud', () => {
      //   cy.on('uncaught:exception', (e) => {
      //   if (e.message.includes('Things went bad')) {
      //   // we expected this error, so let's ignore it
      //   // and let the test continue
      //   return false
      //   }
      //   })
      //   })
      //   })
      // commonElement.verifyHeaderPage(users.nextpage);
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnSecondRoleOption()
      commonElement.clickContinueButton()
      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      // cy.get('#user-role-2').click()
      // commonElement.clickContinueButton();
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text1)
        cy.get('div.govuk-width-container').contains(eligibility2.text8)
        commonElement.ContainYes('Yes')
        commonElement.ContainNo('No')
        commonElement.ContainBack('Back')
        commonElement.ContainContinue('Continue')
      })
    })
  })
  it('Verify CD50 - Not eligible (landowner) copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      // commonElement.verifyHeaderPage(users.nextpage);
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      // cy.get('#user-role-4').click()
      // commonElement.clickContinueButton();
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnSecondRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      // commonElement.clickOnNoOption();
      // commonElement.clickContinueButton();
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text6)
        eligibilityfunctionPage
          .verifyApplicantownaLandtext(eligibility2.text9a)
        eligibilityfunctionPage
          .verifyApplicantownaLandtext(eligibility2.text10a)
        eligibilityfunctionPage.verifyApplicantownaLandtext('Back')
      })
    })
  })
  it('Verify CD52 - Project permissions granted copy-deck3', () => {
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
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      // commonElement.clickOnNoOption();
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();
      // cy.get('#user-role-2').click()
      // commonElement.clickContinueButton();
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text1)
        commonElement.clickOnYesOption()
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text3)
        commonElement.ContainYes('Yes')
        commonElement.ContainNo('No')
        commonElement.ContainBack('Back')
        commonElement.ContainContinue('Continue')
      })
    })
  })
  it('Verify CD53 - Not eligible (project) copy-deck', () => {
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
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text6)
        cy.get('div.govuk-width-container').contains(eligibility2.text12a)
        cy.get('div.govuk-width-container').contains(eligibility2.text10a)
        eligibilityfunctionPage.verifyApplicantownaLandtext('Back')
      })
    })
  })
  it('Verify CD54 - Check your answers (eligibility) copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text1)
        commonElement.clickOnYesOption()
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text3)
        commonElement.clickOnYesOption()
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        eligibilityfunctionPage.verifyApplicantownaLandtext('Yes')
        eligibilityfunctionPage.verifyApplicantownaLandtext('Change')
        eligibilityfunctionPage.verifyApplicantownaLandtext('Continue')
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
        commonElement.clickContinueButton()
        commonElement
          .verifyHeaderPage(users.taskListHeaderText)
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul'
        ).contains('COMPLETED')
      })
    })
  })

  it('Verify CD62 - Eligible (Applicant) copy-deck - when user is not logged in  to Government gateway', () => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('which-species'))

    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    eligibilityfunctionPage.ClickOnEcologistRoleOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
      cy.get(
        '#main-content > div > div > form > fieldset > legend > h1'
      ).contains(eligibility2.text4)
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > div > div > form > fieldset > legend > h1'
      ).contains(eligibility2.text5)
      eligibilityfunctionPage
        .verifyApplicantownaLandtext(eligibility2.text13)
      eligibilityfunctionPage.verifyApplicantownaLandtext('Back')
      eligibilityfunctionPage
        .verifyApplicantownaLandtext('Continue')
      commonElement.clickContinueButton()
    })
  })
  // })

  it('Verify CD62a - Eligible (Applicant) copy-deck - when user is logged in  to Government gateway', () => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('which-species'))
    // ccy.fixture('users.json').then((users) => {
    //   commonElement.clickContinueButton();
    //  eligibilityfunctionPage.enterIdmPassword(users.password1);
    //   commonElement.clickContinueButton();
    // commonElement.verifyHeaderPage(users.nextpage);
    // commonElement.ClickOnNewApplicationButton()
    eligibilityfunctionPage.selectBadgerOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickContinueButton()
    eligibilityfunctionPage.ClickOnEcologistRoleOption()
    commonElement.clickContinueButton()
    commonElement.clickOnNoOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()
    commonElement.clickOnYesOption()
    commonElement.clickContinueButton()

    cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
      cy.get(
        '#main-content > div > div > form > fieldset > legend > h1'
      ).contains(eligibility2.text4)
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > div > div > form > fieldset > legend > h1'
      ).contains(eligibility2.text5)
      // eligibilityfunctionPage.verifyApplicantownaLandtext(eligibility2.text13a);
      eligibilityfunctionPage.verifyApplicantownaLandtext('Back')
      eligibilityfunctionPage
        .verifyApplicantownaLandtext('Continue')
      commonElement.clickContinueButton()
    })
  })
  // });
  /**
   * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   * Functional testing
   * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   */
  it(' 1 Verify Unhappy path - eligibility check after user logged in - user select ‘No’ to Land owner permission question', () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      // commonElement.clickOnNoOption();
      // commonElement.clickContinueButton();
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text6)
      })
    })
  })
  it('1b Verify Unhappy path - eligibility check after user logged in - user select No to Project permissions granted', () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text6)
      })
    })
  })
  it('2a Verify Happy path - eligibility check after user logged in - user select No to Project permissions', () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnSecondRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      // commonElement.clickOnNoOption();
      // commonElement.clickContinueButton();
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get('#main-content > div > div > form > fieldset > legend > h1').contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get('#main-content > div > div > form > fieldset > legend > h1').contains(eligibility2.text6a)
      })
    })
  })
  it('2b Verify Happy path - eligibility check after user logged in - user select No to Project permissions', () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
      })
    })
  })
  it('3a Verify Happy path - eligibility check after user logged in - user select Yes to Project permissions granted', () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
      })
    })
  })
  it('3b Verify Happy path - eligibility check after user logged in - user select Yes to Project permissions granted', () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
      })
    })
  })
  it("4a Verify Happy path - eligibility check before user logged in - user select 'No' to 'Project permissions’", () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
        commonElement.clickContinueButton()
        commonElement
          .verifyHeaderPage(users.taskListHeaderText)
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul'
        ).contains('COMPLETED')
      })
    })
  })
  it("4b Verify Happy path - eligibility check before user logged in - user select 'No' to 'Project permissions'", () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
        commonElement.clickContinueButton()
        commonElement
          .verifyHeaderPage(users.taskListHeaderText)
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul'
        ).contains('COMPLETED')
      })
    })
  })

  it("5a Verify Happy path - eligibility check before user logged in - user select 'Yes' to 'Project permissions granted'", () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
        commonElement.clickContinueButton()
        commonElement
          .verifyHeaderPage(users.taskListHeaderText)
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul'
        ).contains('COMPLETED')
      })
    })
  })

  it("5b Verify Happy path - eligibility check before user logged in - user select 'Yes' to 'Project permissions granted", () => {
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
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility2) => {
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text4)
        commonElement.clickContinueButton()
        cy.get(
          '#main-content > div > div > form > fieldset > legend > h1'
        ).contains(eligibility2.text5)
        commonElement.clickContinueButton()
        commonElement
          .verifyHeaderPage(users.taskListHeaderText)
        cy.get(
          '#main-content > div > div > form > fieldset > span > ol > li:nth-child(1) > ul'
        ).contains('COMPLETED')
      })
    })
  })

  it('SDDSIP-650 - Not answered should be displaying on Check your answer screen…..', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.wait(2000)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnEcologistRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
      ).click()
      cy.get("input[value='no']").click()
      cy.get('#backlink-div > a').click()
      cy.get("fieldset[class='govuk-fieldset']").contains('Yes')
      cy.get("fieldset[class='govuk-fieldset']").contains('No')
      cy.get("fieldset[class='govuk-fieldset']").contains('Continue')
      cy.get("fieldset[class='govuk-fieldset']").contains('Change')
      cy.get("fieldset[class='govuk-fieldset']").should(
        'not.include.text',
        'Not answered'
      )
    })
  })
  it('SDDSIP-2200 - NSIP test-1', () => {
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
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('body > div.govuk-width-container').contains(
        'You’re eligible to apply for a licence'
      )
      cy.get('body > div.govuk-width-container').contains('Continue')
      cy.get('body > div.govuk-width-container').contains('Back')
    })
  })
  it('SDDSIP-2200 - NSIP test-2', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.wait(3000)
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      cy.get('a')
        .contains(
          'Check if your development is listed as a Nationally Significant Infrastructure Project (opens in new tab)'
        )
        .invoke('removeAttr', 'target')
        .click()
      cy.url().should(
        'include',
        'https://infrastructure.planninginspectorate.gov.uk/projects/register-of-applications/'
      )
    })
  })
})
// });
// });
// });
