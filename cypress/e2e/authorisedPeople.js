const faker = require('faker')

describe('Add authorised People', () => {
  
  beforeEach(() =>{
    // cy.visit(Cypress.env('login'))
    // cy.fixture('users.json').then((users) => {
    //   cy.get('#username').fill(users.email1)
    //   cy.get('#password').fill(users.password1)
    //   cy.get('#continue').click()
    //   cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)

    cy.visit('/');
    cy.fixture('users.json').then((users) => {
      cy.get('#user_id').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.origin('https://new-tst.aws.defra.cloud', () => {
cy.on('uncaught:exception', (e) => {
if (e.message.includes('Things went bad')) {
// we expected this error, so let's ignore it
// and let the test continue
return false
}
})
})
      cy.get('#main-content > div > div > form > fieldset > a').click()
      cy.get('#species').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
    
  });
});
  it(' 1 Verify happy path - Add an authorised People', () => {
      // Add authorised people
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('a').contains('Add authorised people').click()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('#main-content > div > div').contains(
        'This is a person who will be responsible for everything done under the licence.'
      )
      cy.get('#main-content > div > div').contains(
        'It does not include any assistants who will work under the direct supervision of the licence holder or any authorised people.'
      )
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('Add authorised people')
    })

  it(' 2 Verify happy path - Add multiple authorised People', () => {
   
      // Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('Add authorised people')
    })

  it(' 3 Verify happy path - Add an authorised People and remove then select no', () => {
      // Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#main-content > div > div > form > fieldset > p > a').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('Add authorised people')
    })


  it(' 4 Verify happy path - Add multiple authorised People and change name', () => {
      // Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > dl:nth-child(9) > div:nth-child(1) > dd.govuk-summary-list__actions > a'
      ).click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('Add authorised people')
    })

  it(' 2 Verify happy path - Add multiple authorised People', () => {
      // Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('#postcode').fill('M24 6DH')
      cy.get('#continue').click()
      cy.get('#address').select(
        '2, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('Add authorised people')
    })

  it(' 6 Verify happy path - Add an authorised People using manual address', () => {
      // Add authorised people

      cy.get('a').contains('Add authorised people').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#name').fill(faker.name.firstName() + faker.name.lastName())
      cy.get('#continue').click()
      cy.get('#email-address').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get('a').contains('The address doesn’t have a postcode').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill('I test drive')
      cy.get('#address-line-2').fill('ford street')
      cy.get('#address-town').fill('manchester UK')
      cy.get('#address-county').fill('Lancashire')
      cy.get('#continue').click()
      cy.get('#main-content > div > div > form > fieldset > p > a').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > div > div > form > fieldset > span > ol > li:nth-child(2) > ul > li:nth-child(5)'
      ).contains('Add authorised people')
    })
  })

