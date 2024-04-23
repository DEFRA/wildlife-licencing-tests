const faker = require('faker')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const commonElement = require('../pageObjects/common.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('1 and verify application season period screen', () => {
    // cy.request("/reset-sysdate");

    // cy.request("/set-sysdate?iso-string=2024-12-01T01:00:00.000Z");
    // cy.request("/reset?username=user1@email.com");
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
      cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains(eligibility1.text2)
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Yes')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('No')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Back')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
  })
  it('2 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2024-04-30T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains(eligibility1.text2)
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Yes')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('No')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Back')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
  })
  it('3 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2024-12-01T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage().contains(
        'Licences are typically issued between July and November to protect badger welfare'
      )
    })
  })
  it('4 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2024-12-01T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains(eligibility1.text2)
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Yes')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('No')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Back')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
  })
  it('5 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2024-03-31T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage().contains(
        'Licences are typically issued between July and November to protect badger welfare'
      )
    })
  })
  it('6 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2024-03-31T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage().contains(
        'Licences are typically issued between July and November to protect badger welfare'
      )
    })
  })
  it('7 and verify application season period screen', () => {
    cy.request('/set-sysdate?iso-string=2024-04-01T01:00:00.000Z')
    cy.request('/reset?username=user1@email.com')
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.fixture('eligibility-copydeck.json').then((eligibility1) => {
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains(eligibility1.text2)
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Yes')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('No')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Back')
        eligibilityfunctionPage.verifyApplicantownaLandtext().contains('Continue')
        cy.request('/reset-sysdate')
      })
    })
  })
})
