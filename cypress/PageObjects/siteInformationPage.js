cy.get('a').contains('Give site information').click()
cy.get('#site-name').fill(faker.random.alphaNumeric(100))
cy.get('#site-postcode-check').click()
cy.get('#site-postcode').fill('M24 6dh')
cy.get('#scan-file').click()
cy.get('#siteAddress').select(
  '10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
)
