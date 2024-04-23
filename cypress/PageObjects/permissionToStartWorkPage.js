cy.get('a').contains('Give details of permissions to start work').click()
cy.get('#consent-type-check').click()
cy.get('#authority-name').fill('a')
cy.get('#authority-name__option--0').click()
cy.get('#planning-type').click()
cy.get('#reference').fill(faker.name.firstName())
cy.get('#consent-type-check-5').click()
cy.get('#authority-name').fill('b')
cy.get('#authority-name__option--0').click()
cy.get('#add-another-permission-2').click()
cy.get('#potential-conflicts').click()
cy.get('#conditions-met').click()
cy.get('#describe-potential-conflicts').fill(
  faker.random.alphaNumeric(40)
)
cy.get('#site-grid-ref').clear()
cy.get('#site-grid-ref').fill(
  'NY' + faker.datatype.number({ min: 100000 }).toString()
)