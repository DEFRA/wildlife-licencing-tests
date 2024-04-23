// cy.get("#responsible").click();

// cy.get("#purchase-order").fill(faker.internet.email());

// cy.get("#responsible-2").click();

// cy.get("#responsible-4").click();

'use strict'

class addInvoiceDetails {
  // METHODS AND FUNCTIONS

  clickOnIndividualResponsible () {
    const clickOnIndividualResponsible = cy.get('#responsible').click()
    return clickOnIndividualResponsible
  }

  clickOnResponsibleTwo () {
    const clickOnResponsibleTwo = cy.get('#responsible-2').click()
    return clickOnResponsibleTwo
  }

  clickOnResponsibleFour () {
    const clickOnResponsibleFour = cy.get('#responsible-4').click()
    return clickOnResponsibleFour
  }

  enterPurchaseOrderdetails (purchaseRef) {
    const enterPurchaseOrderdetails = cy.get('#purchase-order').fill(purchaseRef)
    return enterPurchaseOrderdetails
  }

  Verifypage () {
    const Verifypage = cy.get(
      '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)'
    )
    return Verifypage
  }
}

module.exports = new addInvoiceDetails()
