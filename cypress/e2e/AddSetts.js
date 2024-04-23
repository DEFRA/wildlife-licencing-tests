const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const addSettsfunctionPage = require('../pageObjects/addSettsPage.js')

describe('Add sett', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      eligibilityfunctionPage.ClickOnOtherRoleOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton() // cy.injectAxe()
      // cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    })
  })

  it(' 1 Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    cy.url().should('include', '/sett-start')
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-name')
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(100))
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-use-category')
    addSettsfunctionPage.clickOnHabitattypeOne()
    // cy.get("#habitat-types").click();
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-reopened-after-development')

    cy.get("input[value='true']").click()
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-entrances-value')
    addSettsfunctionPage.enterAmountOfHabitatEntrance('100')
    // cy.get("#habitat-entrances").fill("100");
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-active-entrance-total')
    addSettsfunctionPage.enterAmountOfActivEntrance('100')
    // cy.get("#habitat-active-entrances").fill("100");
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-grid-reference')
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    // cy.get("#habitat-grid-ref").fill("NY123456");
    commonElement.clickContinueButton()
    cy.url().should('include', '/start-date-licensed-activity-on-this-sett')
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    // addSettsfunctionPage.enterWorkStartDay().fill("1");
    // addSettsfunctionPage.enterWorkStartMonth().fill("05");
    // cy.get("input[id='habitat-work-start-year']").fill("2024");
    commonElement.clickContinueButton()
    cy.url().should('include', '/end-date-licensed-activity-on-this-sett')
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')
    // cy.get("input[id='habitat-work-end-day']").fill("30");
    // cy.get("input[id='habitat-work-end-month']").fill("11");
    // cy.get("input[id='habitat-work-end-year']").fill("2024");
    commonElement.clickContinueButton()
    cy.url().should('include', '/sett-disturbance-methods')
    addSettsfunctionPage.clickOnHabitatActivities()
    // cy.get("input[id='habitat-activities']").click();
    commonElement.clickContinueButton()
    cy.url().should('include', '/check-habitat-answers')

    cy.get("input[value='no']").click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('Add setts the work will affect')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('COMPLETED')
  })

  it(' 2 Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(1))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeTwo()
    // cy.get("#habitat-types-2").click();
    commonElement.clickContinueButton()
    cy.get("input[value='true']").click()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfHabitatEntrance('7')
    // cy.get("#habitat-entrances").fill("7");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('5')
    // cy.get("#habitat-active-entrances").fill("5");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    // cy.get("#habitat-grid-ref").fill("NY123456");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    // addSettsfunctionPage.enterWorkStartDay().fill("1");
    // addSettsfunctionPage.enterWorkStartMonth().fill("05");
    // cy.get("input[id='habitat-work-start-year']").fill("2024");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')
    // cy.get("input[id='habitat-work-end-day']").fill("30");
    // cy.get("input[id='habitat-work-end-month']").fill("11");
    // cy.get("input[id='habitat-work-end-year']").fill("2024");
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatActivities()
    // cy.get("input[id='habitat-activities']").click();
    commonElement.clickContinueButton()
    cy.get("input[value='no']").click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('Add setts the work will affect')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('COMPLETED')
  })

  it(' 3 Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(99))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeThree()
    // cy.get("#habitat-types-3").click();
    commonElement.clickContinueButton()
    cy.get("input[value='true']").click()
    commonElement.clickContinueButton()

    addSettsfunctionPage.enterAmountOfHabitatEntrance('7')
    // cy.get("#habitat-entrances").fill("7");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('5')
    // cy.get("#habitat-active-entrances").fill("5");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    // addSettsfunctionPage.enterWorkStartDay().fill("1");
    // addSettsfunctionPage.enterWorkStartMonth().fill("05");
    // cy.get("input[id='habitat-work-start-year']").fill("2024");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatActivities()
    commonElement.clickContinueButton()
    cy.get("input[value='no']").click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('Add setts the work will affect')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('COMPLETED')
  })

  it('4 Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(50))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeFour()
    // cy.get("#habitat-types-4").click();
    commonElement.clickContinueButton()
    cy.get("input[value='true']").click()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfHabitatEntrance('7')
    // cy.get("#habitat-entrances").fill("7");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('5')
    // cy.get("#habitat-active-entrances").fill("5");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    // addSettsfunctionPage.enterWorkStartDay().fill("1");
    // addSettsfunctionPage.enterWorkStartMonth().fill("05");
    // cy.get("input[id='habitat-work-start-year']").fill("2024");
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')

    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatActivities()
    commonElement.clickContinueButton()
    cy.get("input[value='no']").click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('Add setts the work will affect')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('COMPLETED')
  })

  it('5 Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(50))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeFour()
    commonElement.clickContinueButton()
    cy.get("input[value='true']").click()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfHabitatEntrance('7')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('5')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatActivities()
    commonElement.clickContinueButton()
    cy.get('#additional-sett').click()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(50))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeFour()
    commonElement.clickContinueButton()
    cy.get("input[value='false']").click()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfHabitatEntrance('7')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('5')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatActivitiesTwo()
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatAdditionalSett()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(50))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeFour()
    commonElement.clickContinueButton()
    cy.get("input[value='true']").click()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfHabitatEntrance('7')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('5')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY123456')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay('1')
    addSettsfunctionPage.enterWorkStartMonth('05')
    addSettsfunctionPage.enterWorkStartYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkEndDay('30')
    addSettsfunctionPage.enterWorkEndMonth('11')
    addSettsfunctionPage.enterWorkEndYear('2024')
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatActivitiesThree()
    // cy.get("input[id='habitat-activities-3']").click();
    commonElement.clickContinueButton()
    cy.get('#main-content > fieldset > div:nth-child(6) > a').click()
    cy.get('#confirm-delete').click()
    commonElement.clickContinueButton()
    cy.get("input[value='no']").click()
    commonElement.clickContinueButton()
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('Add setts the work will affect')
    cy.get(
      '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(9)'
    ).contains('COMPLETED')
  })

  it('6 Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(50))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeOne()
    // cy.get("#habitat-types").click();
    commonElement.clickContinueButton()
    cy.get('#habitat-reopen').click()
    commonElement.clickContinueButton()
    cy.get('#habitat-entrances').fill('3')
    commonElement.clickContinueButton()
    cy.get('#habitat-active-entrances').fill('0')
    commonElement.clickContinueButton()
    cy.get('#habitat-grid-ref').fill('NY395557')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterWorkStartDay().fill('1')
    addSettsfunctionPage.enterWorkStartMonth().fill('05')
    cy.get("input[id='habitat-work-start-year']").fill('2024')
    commonElement.clickContinueButton()
    cy.get("input[id='habitat-work-end-day']").fill('30')
    cy.get("input[id='habitat-work-end-month']").fill('11')
    cy.get("input[id='habitat-work-end-year']").fill('2024')
    commonElement.clickContinueButton()
    cy.get('#habitat-activities-4').click()
    commonElement.clickContinueButton()
    cy.get('#additional-sett-2').click()
    commonElement.clickContinueButton()
    cy.get('body > div').contains('Back')
    cy.get('body > div').contains(
      'You cannot apply for this licence if the badger sett is inactive'
    )
    cy.get('body > div').contains(
      'To apply for a license the badger sett must be active.'
    )
  })
  // })
  it('6a Verify happy path -  Add setts ', () => {
    commonElement.GetApplicationTasklist('Add setts the work will affect')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatName(faker.random.alphaNumeric(50))
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitattypeOne()
    commonElement.clickContinueButton()
    addSettsfunctionPage.clickOnHabitatReopen()
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfHabitatEntrance('3')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterAmountOfActivEntrance('0')
    commonElement.clickContinueButton()
    addSettsfunctionPage.enterHabitatGridRef('NY3955578939555789083955578908')
    commonElement.clickContinueButton()
    commonElement.VerifyPage(
      'Enter a national grid reference that is 2 letters and 6 digits. '
    )
    commonElement.VerifyPage(
      'The grid reference you have entered is not in the right format'
    )
  })
})
