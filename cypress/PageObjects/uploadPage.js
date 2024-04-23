
'use strict'

class uploadElement {
  // METHODS AND FUNCTIONS

  clickOnUploadField () {
    const clickOnUploadField = cy.get('#scan-file').click()
    return clickOnUploadField
  }

  uploadFileField () {
    const uploadFileField = cy.get('#scan-file')
    return uploadFileField
  }

  clickUploadAnotherFile () {
    const clickUploadAnotherFile = cy.get('#another-file-check').click()
    return clickUploadAnotherFile
  }

  ContainYes (yesOption) {
    const ClickOnSecondRoleOption = cy.get('div.govuk-width-container ').contains(yesOption)
    return ClickOnSecondRoleOption
  }
}

module.exports = new uploadElement()
