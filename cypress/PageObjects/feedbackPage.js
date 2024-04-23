cy.get('#nps-satisfaction').click()
cy.get('#with-hint').fill(faker.random.alphaNumeric(4000))
cy.get('#nps-satisfaction-2').click()
cy.get('#nps-satisfaction-3').click()

cy.get('#nps-satisfaction-4').click()
cy.get('#nps-satisfaction-5').click()
