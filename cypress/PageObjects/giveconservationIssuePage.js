
'use strict'

class converservativeIssueElement {
  // METHODS AND FUNCTIONS

  enterSiteName () {
    const enterSiteName = cy.get('#site-name')
    return enterSiteName
  }

  clickOnSiteOption () {
    const clickOnSiteOption = cy.get('#site-name__option--0').click()
    return clickOnSiteOption
  }

  enterPermissionDetail () {
    const enterPermissionDetail = cy.get('#permission-details')
    return enterPermissionDetail
  }

  enterAdviseDescription () {
    const enterAdviseDescription = cy.get('#advice-description')
    return enterAdviseDescription
  }

  enterAdviceFromWho () {
    const enterAdviceFromWho = cy.get('#advice-from-who')
    return enterAdviceFromWho
  }

  ContainBack (backText) {
    const ClickOnSecondRoleOption = cy.get('div.govuk-width-container').contains(backText)
    return ClickOnSecondRoleOption
  }

  ContainContinue (continueText) {
    const ContainContinue = cy.get('div.govuk-width-container').contains(continueText)
    return ContainContinue
  }
  // ClickOnNewApplicationButton() {
  //   const ClickOnNewApplicationButton =   cy.get("a.govuk-button").click();
  //   return ClickOnNewApplicationButton
  //  }

  EnterEmailAddress () {
    const EnterEmailAddress = cy.get('#email-address')
    return EnterEmailAddress
  }

  EnterPostCode () {
    const EnterPostCode = cy.get('#postcode')
    return EnterPostCode
  }

  SelectYesOptionaOnIsOrganisation () {
    const SelectYesOptionaOnIsOrganisation = cy.get('#is-organisation').click()
    return SelectYesOptionaOnIsOrganisation
  }
}

module.exports = new converservativeIssueElement()

// cy.get("a").contains("Give details of conservation issues").click();
// cy.get("#site-name").fill("a");
//     cy.get("#site-name__option--0").click();
//     cy.get("#permission-details").fill(faker.random.alphaNumeric(4000));
//     cy.get("#advice-from-who").fill(faker.random.alphaNumeric(100));
//     cy.get("#advice-description").fill(faker.random.alphaNumeric(4000));
//     cy.get("#proximity").click();
//     cy.get("#proximity-2").click();
