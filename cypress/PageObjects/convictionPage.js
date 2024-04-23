// cy.get("#responsible").click();

// cy.get("#purchase-order").fill(faker.internet.email());

// cy.get("#responsible-2").click();

// cy.get("#responsible-4").click();

'use strict'

class convictionElement {
  // METHODS AND FUNCTIONS

  clickOnConvictionsCheck () {
    const clickOnConvictionsCheck = cy.get('#convictions-check').click()
    return clickOnConvictionsCheck
  }

  enterCovictionDetail () {
    const enterCovictionDetail = cy.get('#conviction-details')
    return enterCovictionDetail
  }

  enterReference (ref) {
    const enterReference = cy.get('#reference').fill(ref)
    return enterReference
  }

  Verifypage () {
    const Verifypage = cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(4) > ul > li:nth-child(1)'
    )
    return Verifypage
  }
}

module.exports = new convictionElement()

//   cy.get("a").contains("Declare convictions").click();
// cy.get("#convictions-check").click();
// cy.get("#conviction-details").fill(faker.random.alphaNumeric(30));
