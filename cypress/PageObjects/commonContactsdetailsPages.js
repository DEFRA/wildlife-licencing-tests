
cy.get('#is-organisation').click()
cy.get('#organisation-name').fill(faker.company.bs())
cy.get('#postcode').fill('M24 6DH')
cy.get('#address').select(
  '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
)
cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
cy.get('#email-address').fill(faker.internet.email())

cy.get('#phone-number').fill(faker.phone.phoneNumber())
cy.get('#change-email').click()
cy.get('#address-line-1').fill('I test drive')
cy.get('#address-line-2').fill('ford street')
cy.get('#address-town').fill('manchester UK')
cy.get('#address-county').fill('Lancashire')
