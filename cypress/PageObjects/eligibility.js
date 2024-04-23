
'use strict'

class eligibilityfunctionPage {
  // METHODS AND FUNCTIONS
  enterIdmUsername (username) {
    const loginusername = cy.get('#user_id').fill(username)
    return loginusername
  }

  enterIdmPassword (password) {
    const loginPassword = cy.get('#password').fill(password)
    return loginPassword
  }

  ClickOnSecondRoleOption () {
    const ClickOnSecondRoleOption = cy.get('#user-role-2').click()
    return ClickOnSecondRoleOption
  }

  verifyApplicantownaLandtext (text) {
    const verifyApplicantownaLandtext = cy.get('div.govuk-width-container').contains(text)
    return verifyApplicantownaLandtext
  }

  ClickOnEcologistRoleOption () {
    const ClickOnEcologistRoleOption = cy.get('#user-role').click()
    return ClickOnEcologistRoleOption
  }

  ClickOnOtherRoleOption () {
    const ClickOnOtherRoleOption = cy.get('#user-role-4').click()
    return ClickOnOtherRoleOption
  }

  selectBadgerOption () {
    const selectBadgerOption = cy.get('#species').click()
    return selectBadgerOption
  }
}

module.exports = new eligibilityfunctionPage()
