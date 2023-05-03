const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('1 and verify application season period screen', () => {
    cy.request(
      '/reset?username=user1@email.com'
    )
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email3)
      cy.get('#password').fill(users.password2)
      cy.get('#continue').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#permission-details').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      //   cy.get("#advice-from-who").fill(
      //     faker.name.firstName() + faker.name.lastName()
      //   );
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(40))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(40))
      cy.get('#continue').click()
      cy.get('#proximity').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      // cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('Give details of conservation issues')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
    })
  })
})




// Will the activity take place on or next to any designated sites? NO
// Check your answer
// Continue to task list


// Will the activity take place on or next to any designated sites? 
// continue
// Erorr is displayed


// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 100
// Describe the outcome of the advice add 4000 words
// continue
// Will the activity happen on the site or next to it? on the site
// continue
// Check your answer
// Do you want to add another site? NO


// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 100
// Describe the outcome of the advice add 4000 words
// continue
// Will the activity happen on the site or next to it? on the site
// continue
// Check your answer
// Do you want to add another site? 
// continue  error is displayed



// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? 
// continue
// Error is displayed


// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site?
// continue
// error is displayed

// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4001 words
// validate error message

// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// coninue
// validate error message


// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 100
// Describe the outcome of the advice add 4000 words
// continue
// Will the activity happen on the site or next to it? Next to the site
// continue
// Check your answer
// Do you want to add another site? Yes

// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 100
// Describe the outcome of the advice add 4001 words
// continue
// validate error message

// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 100
// continue
// Error is displayed for only Give permission's field


// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 101
// continue
// Error is displayed on the above field and empty erorr on Describe the outcome of the advice




// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// continue
// Have you had advice or permission for the activity from Natural England? No
// continue
// Will the activity happen on the site or next to it? Next to the site
// continue
// Check your answer
// Do you want to add another site? no

// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? No
// continue
// Have you had advice or permission for the activity from Natural England? NO
// continue
// Will the activity happen on the site or next to it? Next to the site
// continue
// Check your answer
// Do you want to add another site? Yes

// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? No
// continue
// Have you had advice or permission for the activity from Natural England? NO
// continue
// Will the activity happen on the site or next to it? on the site
// continue
// Check your answer
// Do you want to add another site? No