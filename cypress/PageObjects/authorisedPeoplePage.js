
'use strict'

class authorisedPeopleElement {
  // METHODS AND FUNCTIONS

  assertPage () {
    const assertPage = cy.get('#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)').contains(tasklist).click()
    return assertPage
  }
}

module.exports = new authorisedPeopleElement()
