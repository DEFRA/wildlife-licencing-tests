cy.get('a').contains('Give ecologist’s experience').click()
cy.get('input#enter-licence-details').fill('NY123456')
cy.get('#licence').click()
cy.get('input#enter-licence-details').fill('NY123457')
cy.get('#licence-2').click()
cy.get('#enter-experience').fill(faker.random.alphaNumeric(40))
cy.get('#enter-methods').fill(faker.random.alphaNumeric(40))
cy.get('#enter-class-mitigation-details').fill('BAD-2022-agsss1')

cy.get('#licence-2').click()
