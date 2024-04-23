'use strict'

class commonElement {
  // METHODS AND FUNCTIONS

  clickContinueButton () {
    const clickContinue = cy.get('#continue').click()
    return clickContinue
  }

  clickOnYesOption () {
    const clickOnYesOption = cy.get('#yes-no').click()
    return clickOnYesOption
  }

  clickOnNoOption () {
    const clickOnNoOption = cy.get('#yes-no-2').click()
    return clickOnNoOption
  }

  ContainYes (yesOption) {
    const ClickOnSecondRoleOption = cy
      .get('div.govuk-width-container ')
      .contains(yesOption)
    return ClickOnSecondRoleOption
  }

  ContainNo (noOption) {
    const ClickOnSecondRoleOption = cy
      .get('div.govuk-width-container')
      .contains(noOption)
    return ClickOnSecondRoleOption
  }

  ContainBack (backText) {
    const ClickOnSecondRoleOption = cy
      .get('div.govuk-width-container')
      .contains(backText)
    return ClickOnSecondRoleOption
  }

  ContainContinue (continueText) {
    const ContainContinue = cy
      .get('div.govuk-width-container')
      .contains(continueText)
    return ContainContinue
  }

  ClickOnNewApplicationButton () {
    const clickOnNewApplicationButton = cy.contains('New application').click()
    return clickOnNewApplicationButton
  }

  EnterEmailAddress (emailAddress) {
    const EnterEmailAddress = cy.get('#email-address').fill(emailAddress)
    return EnterEmailAddress
  }

  EnterPostCode (postcode) {
    const EnterPostCode = cy.get('#postcode').fill(postcode)
    return EnterPostCode
  }

  SelectYesOptionaOnIsOrganisation () {
    const SelectYesOptionaOnIsOrganisation = cy.get('#is-organisation').click()
    return SelectYesOptionaOnIsOrganisation
  }

  SelectAddress (address) {
    const SelectAddreess = cy.get('#address').select(address)
    return SelectAddreess
  }

  EnterName (name) {
    const EnterName = cy.get('#name').fill(name)
    return EnterName
  }

  VerifyPage (data) {
    const VerifyPage = cy.get('#main-content').contains(data)
    return VerifyPage
  }

  EnterOrganisationName (orgName) {
    const EnterOrganisationName = cy.get('#organisation-name').fill(orgName)
    return EnterOrganisationName
  }

  GetApplicationTasklist (tasklist) {
    const GetApplicationTasklist = cy.get('a').contains(tasklist).click()
    return GetApplicationTasklist
  }

  verifyHeaderPage (data) {
    const verifyHeaderPage = cy.get('h1.govuk-fieldset__heading').contains(data)
    return verifyHeaderPage
  }

  containViewLicenceApp (data) {
    const containViewLicenceApp = cy.get('h1.govuk-fieldset__heading').contains(data)
    return containViewLicenceApp
  }

  VerifyPagetext () {
    const VerifyPagetext = cy.get(
      '#main-content > div > div > form > fieldset > dl'
    )
    return VerifyPagetext
  }

  assertPageText () {
    const assertPageText = cy.get('body > div.govuk-width-container')
    return assertPageText
  }

  clickOnChangeEmailOption () {
    const clickOnChangeEmailOption = cy.get('#change-email-3').click()
    return clickOnChangeEmailOption
  }
}

module.exports = new commonElement()
