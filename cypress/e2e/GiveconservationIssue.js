const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//  */1.1
//  1	Will the activity take place on or next to any designated sites?	Yes   cy.get('#yes-no').click()
//  2	Tell us about each designated site the activity will affect	Tell us about the first designated site
//  3	What is the name of the designated site? 	Add site  cy.get('#site-name').fill('a')
//  4	Do you have permission from the owner or occupier of the designated site?	 Yes  cy.get('#yes-no').click()
//  5	Give details of the permission	4000 Characters free text       cy.get('#permission-details').fill(faker.random.alphaNumeric(4000))

//  6	Have you had advice or permission for the activity from Natural England?	 Yes       cy.get('#yes-no').click()

//  7	"Advice about the activity
//  Who did you receive the advice from"	100 Characters free text // cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))

//  8	"Advice about the activity
//  Describe the outcome of the advice"	4000 Characters free text //       cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))


//  9	Will the activity happen on the site or next to it	On the site       cy.get('#proximity').click()

//  10	Do you want to add another site?	No       cy.get('#yes-no-2').click()

//1.2
// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	Yes
// Give details of the permission	 4000 Characters free text
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	On the site
// Do you want to add another site?	No
//1.3
// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site? 	Add site
// Do you have permission from the owner or occupier of the designated site?	 Yes
// Give details of the permission	 4000 Characters free text
// Have you had advice or permission for the activity from Natural England?	 Yes
// "Advice about the activity
// Who did you receive the advice from"	100 Characters free text
// "Advice about the activity
// Describe the outcome of the advice"	4000 Characters free text
// Will the activity happen on the site or next to it	Next to Site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site? 	Add site
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	 Yes
// "Advice about the activity
// Who did you receive the advice from"	100 Characters free text
// "Advice about the activity
// Describe the outcome of the advice"	4000 Characters free text
// Will the activity happen on the site or next to it	On the site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site? 	Add site
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	 Yes
// "Advice about the activity
// Who did you receive the advice from"	100 Characters free text
// "Advice about the activity
// Describe the outcome of the advice"	4000 Characters free text
// Will the activity happen on the site or next to it	Next to Site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	Yes
// Give details of the permission	 4000 Characters free text
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	Next to site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	Next to site
// Do you want to add another site?	No

// Will the activity take place on or next to any designated sites?	Yes
// Tell us about each designated site the activity will affect	Tell us about the first designated site
// What is the name of the designated site?	Add site name
// Do you have permission from the owner or occupier of the designated site?	No
// Have you had advice or permission for the activity from Natural England?	No
// Will the activity happen on the site or next to it	On the site
// Do you want to add another site?	No

describe('Page title verification', () => {
  beforeEach(() =>{
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email3)
      cy.get('#password').fill(users.password2)
      cy.get('#continue').click()
      cy.get('#main-content > div > div > form > fieldset > a').click()
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
    
  });
});
   
  it('1.1 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
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
  //})
  it('1.2 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#proximity-2').click()
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
 // })
  it('1.3 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#proximity').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('Give details of conservation issues')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
    })
 // })
  it('1.4 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#proximity-2').click()
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
  //})
  it('1.5 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#proximity-2').click()
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
 // })
  it('2 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get("#continue").click();
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('Give details of conservation issues')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
    })
 // })
  it('3 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get("#continue").click();
      cy.get(
        '#main-content > div > div'
      ).contains('You have not selected an option')
      cy.get(
        '#main-content > div > div'
      ).contains('Select an option')
    })
 // })
  it('4 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#proximity').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      // cy.get("#continue").click();
      cy.get(
        '#main-content > div > div'
      ).contains('You have not selected an option')
      cy.get(
        '#main-content > div > div'
      ).contains('You have not selected an option')
    })
  //})
  it('5 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div'
      ).contains('You have not entered a designated site name')
      cy.get(
        '#main-content > div > div'
      ).contains('Enter a designated site name')
    })
 // })
  it('6 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div'
      ).contains('You have not selected an option')
      cy.get(
        '#main-content > div > div'
      ).contains('Select an option')
    })
  //})
  it('7 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#permission-details').fill(faker.random.alphaNumeric(4001))
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div'
      ).contains('You have entered too many characters')
      cy.get(
        '#main-content > div > div'
      ).contains('Enter details of the permission')
    })
 // })
  it('8 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div'
      ).contains('You have not entered details of the permission')
      cy.get(
        '#main-content > div > div'
      ).contains('Enter details of the permission')
    })
 // })
  it('9 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#proximity-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
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
 // })
  it('10 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4001))
      cy.get('#continue').click()
    
      cy.get(
        '#main-content > div > div'
      ).contains('You have entered too many characters')
      cy.get(
        '#main-content > div > div'
      ).contains('Enter a description of the outcome')
    })
 // })
  it('11 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(300))
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div'
      ).contains('You have entered too many characters')
      cy.get(
        '#main-content > div > div'
      ).contains('You have not entered a description of the outcome')
    })
//  })
  it('12 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(301))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(400))
      cy.get('#continue').click()
    
      cy.get(
        '#main-content > div > div'
      ).contains('You have entered too many characters')
      cy.get(
        '#main-content > div > div'
      ).contains('Enter the name of who gave you the advice')
    })
  //})
  it('13 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#proximity-2').click()
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
 // })
  it('13a and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#yes-no-2').click()
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
 // })
  it('14 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()

    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#proximity-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
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
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(100))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(4000))
      cy.get('#continue').click()
      cy.get('#proximity').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('Give details of conservation issues')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
    })
 // })
  it('15 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()

    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
      cy.get('a').contains('Give details of conservation issues').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#proximity').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('Give details of conservation issues')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
    })
 // })
  it('16 and verify application season period screen', () => {
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email3)
    //   cy.get('#password').fill(users.password2)
    //   cy.get('#continue').click()
    //   cy.get('#main-content > div > div > form > fieldset > a').click()
    //   cy.get('#species').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no-2').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#yes-no').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
    //   cy.get('#continue').click()
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
      cy.get('#advice-description').fill(faker.random.alphaNumeric(400))
      cy.get('#continue').click()
    
      cy.get(
        '#main-content > div > div'
      ).contains('You have not entered who gave you the advice')
      cy.get(
        '#main-content > div > div'
      ).contains('Enter the name of who gave you the advice')
    })
  })
//})

// 1
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

// 2
// Will the activity take place on or next to any designated sites? NO
// Check your answer
// Continue to task list

/3
// Will the activity take place on or next to any designated sites? 
// continue
// Erorr is displayed



// 4
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


/5
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? 
// continue
// Error is displayed

/6
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site?
// continue
// error is displayed
// 7
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4001 words
// validate error message
// 8
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// coninue
// validate error message

// 9
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
// 10
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
// 11
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 100
// continue
// Error is displayed for only Give permission's field

// 12
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 101
// continue
// Error is displayed on the above field and empty erorr on Describe the outcome of the advice



// 13
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
// 14
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
// 15
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
16
// Will the activity take place on or next to any designated sites? YES
// Tell us about each designated site the activity will affect continue button
// What is the name of the designated site? add a name
// Do you have permission from the owner or occupier of the designated site? Yes
// Give details of the permission added 4000 words
// Have you had advice or permission for the activity from Natural England? Yes
// Who did you receive the advice from? add 101
// Describe the outcome of the advice add 4000 words
// continue
// continue  error is displayed