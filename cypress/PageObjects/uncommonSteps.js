// export default addInvoiceDetails;

// class addInvoiceDetails {
//   clickGiveLicenceHodleDetail() {
//     return cy.get("a").contains("Give licence holder details").click();
//   }
//   clickYes() {
//     return cy.get("#yes-no").click();
//   }

//   clickResponsibleFour() {
//     return cy.get("#responsible-4").click();
//   }




//   clickYesOrgainisation() {
//     return cy.get("#is-organisation").click();
//   }

//   fillInOrganisationName() {
//     return cy.get("#organisation-name").fill(faker.company.bs());
//   }

//   containAddInvoiceDetails() {
//     return cy
//       .get(
//         "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)"
//       )
//       .contains("Add invoice details");
//   }



//   fillInPostCode() {
//     return cy.get("#postcode").fill("M24 6DH");
//   }

//   selectAddress() {
//     return cy
//       .get("#address")
//       .select("1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH");
//   }

//   containCompleted() {
//     return cy
//       .get(
//         "#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(9)"
//       )
//       .contains("COMPLETED");
//   }
//   clickResponsible() {
//     return cy.get("#responsible").click();
//   }
//   clickGiveEcologistDetails() {
//     return cy.get("a").contains("Give ecologist details").click();
//   }


//   fillInPurchaseOrder() {
//     return cy.get("#purchase-order").fill(faker.internet.email());
//   }

//   clickContact() {
//     return cy.get("#contact").click();
//   }

//   clickResponsibleTwo() {
//     return cy.get("#responsible-2").click();
//   }

//   clickAccount() {
//     return cy.get("#account").click();
//   }

//   containIndividualResponsibleForPaying() {
//     return cy
//       .get("#main-content > div > div")
//       .contains("Individual responsible for paying the invoice");
//   }

//   clickAddInvoiceDetails() {
//     return cy.get("a").contains("Add invoice details").click();
//   }

//   clickContinue() {
//     return cy.get("#continue").click();
//   }
//   clickAddAuthorisedPeople() {
//     return cy.get("a").contains("Add authorised people").click();
//   }

//   fillInName() {
//     return cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
//   }

//   clickContinue() {
//     return cy.get("#email-address").fill(faker.internet.email());
//   }
//   clickAddAlternativeContact() {
//     return cy.get("a").contains("Add alternative contacts").click();
//   }
//   fillInEmail() {
//     return cy.get("#email-address").fill(faker.internet.email());
//   }
//   clickOther() {
//     cy.get("input[value='other']").click();
//   }

//   clickChangeEmail() {
//     cy.get("#change-email").click();
//   }
//   clickChangeEmailThree() {
//     cy.get("#change-email").click();
//   }
// }

// //export default addInvoiceDetails;
