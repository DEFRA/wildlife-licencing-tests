const faker = require('faker')

describe('Add sett', () => {
   it(' 1 Verify happy path -  Add setts ', () => {
    cy.request(
      '/set-sysdate?iso-string=2023-04-01T01:00:00.000Z'
    )
});
  beforeEach(() =>{ 
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
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
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    
  });
});


  it(' 1 Verify happy path -  Add setts ', () => {
   
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(100))
      cy.get('#continue').click()
      cy.get('#habitat-types').click()
      cy.get('#continue').click()
      cy.get("input[value='true']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('100')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('100')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-activities']").click()
      cy.get('#continue').click()
      cy.get("input[value='no']").click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })
  
  it(' 2 Verify happy path -  Add setts ', () => {
 
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get("input[id='habitat-name']").fill(faker.random.alphaNumeric(1))
      cy.get('#continue').click()
      cy.get('#habitat-types-2').click()
      cy.get('#continue').click()
      cy.get("input[value='true']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('7')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('5')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-activities']").click()
      cy.get('#continue').click()
      cy.get("input[value='no']").click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })

  it(' 3 Verify happy path -  Add setts ', () => {
   
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get("input[id='habitat-name']").fill(faker.random.alphaNumeric(99))
      cy.get('#continue').click()
      cy.get('#habitat-types-3').click()
      cy.get('#continue').click()
      cy.get("input[value='true']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('7')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('5')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-activities']").click()
      cy.get('#continue').click()
      cy.get("input[value='no']").click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })

  it('4 Verify happy path -  Add setts ', () => { 
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(50))
      cy.get('#continue').click()
      cy.get('#habitat-types-4').click()
      cy.get('#continue').click()
      cy.get("input[value='true']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('7')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('5')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')

      cy.get('#continue').click()
      cy.get("input[id='habitat-activities']").click()
      cy.get('#continue').click()
      cy.get("input[value='no']").click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })


  it('5 Verify happy path -  Add setts ', () => {
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(50))
      cy.get('#continue').click()
      cy.get('#habitat-types-4').click()
      cy.get('#continue').click()
      cy.get("input[value='true']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('7')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('5')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-activities']").click()
      cy.get('#continue').click()
      cy.get("input[value='yes']").click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(50))
      cy.get('#continue').click()
      cy.get('#habitat-types-4').click()
      cy.get('#continue').click()
      cy.get("input[value='false']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('7')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('5')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-activities-2']").click()
      cy.get('#continue').click()
      cy.get("input[value='yes']").click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(50))
      cy.get('#continue').click()
      cy.get('#habitat-types-4').click()
      cy.get('#continue').click()
      cy.get("input[value='true']").click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('7')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('5')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY123456')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-activities-3']").click()
      cy.get('#continue').click()
      cy.get("#main-content > fieldset > div:nth-child(6) > a").click()
      cy.get("#confirm-delete").click()
      cy.get('#continue').click()

      cy.get("input[value='no']").click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('Add setts the work will affect')
      cy.get(
       '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
      ).contains('COMPLETED')
    })

  it('6 Verify happy path -  Add setts ', () => {
   
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(50))
      cy.get('#continue').click()
      cy.get('#habitat-types').click()
      cy.get('#continue').click()
      cy.get('#habitat-reopen').click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('3')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('0')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY395557')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-start-day']").fill('1')
      cy.get("input[id='habitat-work-start-month']").fill('05')
      cy.get("input[id='habitat-work-start-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("input[id='habitat-work-end-day']").fill('30')
      cy.get("input[id='habitat-work-end-month']").fill('11')
      cy.get("input[id='habitat-work-end-year']").fill('2024')
      cy.get('#continue').click()
      cy.get("#habitat-activities-4").click()
      cy.get('#continue').click()
      cy.get("#additional-sett-2").click()
      cy.get('#continue').click()
      cy.get('body > div:nth-child(5)').contains('Back')
      cy.get('body > div:nth-child(5)').contains('You cannot apply for this licence if the badger sett is inactive')
      cy.get('body > div:nth-child(5)').contains('To apply for a license the badger sett must be active.')
      })
  //})
  it('6a Verify happy path -  Add setts ', () => {
      cy.get('a').contains('Add setts the work will affect').click()
      cy.get('#continue').click()
      cy.get('#habitat-name').fill(faker.random.alphaNumeric(50))
      cy.get('#continue').click()
      cy.get('#habitat-types').click()
      cy.get('#continue').click()
      cy.get('#habitat-reopen').click()
      cy.get('#continue').click()
      cy.get('#habitat-entrances').fill('3')
      cy.get('#continue').click()
      cy.get('#habitat-active-entrances').fill('0')
      cy.get('#continue').click()
      cy.get('#habitat-grid-ref').fill('NY3955578939555789083955578908')
      cy.get('#continue').click()
      cy.get('#main-content').contains('Enter a national grid reference that is 2 letters and 6 digits. ')
      cy.get('#main-content').contains('The grid reference you have entered is not in the right format')

 }) 
})