cy.get('a').contains('Give work activity details').click()
cy.get('#work-proposal').fill(faker.random.alphaNumeric(40))
cy.get('#work-payment-exempt-reason-2').click()
cy.get('#work-category-2').click()
cy.get('#work-payment-exempt-reason-3').click()// 8
cy.get('#work-category-3').click() // 14
cy.get('#work-payment-exempt-reason-8').click()
cy.get('#exempt-details').fill(faker.random.alphaNumeric(4001))
