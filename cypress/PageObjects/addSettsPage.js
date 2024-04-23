'use strict'

class addSetts {
  // METHODS AND FUNCTIONS

  clickContinueButton () {
    const clickContinue = cy.get('#continue').click()
    return clickContinue
  }

  clickOnYesOption () {
    const clickOnYesOption = cy.get('#yes-no').click()
    return clickOnYesOption
  }

  clickOnNoOption () {
    const clickOnNoOption = cy.get('#yes-no-2').click()
    return clickOnNoOption
  }

  ContainYes (yesOption) {
    const ClickOnSecondRoleOption = cy.get('div.govuk-width-container ').contains(yesOption)
    return ClickOnSecondRoleOption
  }

  ContainNo (noOption) {
    const ClickOnSecondRoleOption = cy.get('div.govuk-width-container').contains(noOption)
    return ClickOnSecondRoleOption
  }

  ContainBack (backText) {
    const ClickOnSecondRoleOption = cy.get('div.govuk-width-container').contains(backText)
    return ClickOnSecondRoleOption
  }

  ContainContinue (continueText) {
    const ContainContinue = cy.get('div.govuk-width-container').contains(continueText)
    return ContainContinue
  }

  enterHabitatName (habitatName) {
    const enterHabitatName = cy.get('#habitat-name').fill(habitatName)
    return enterHabitatName
  }

  clickOnHabitattypeOne () {
    const clickOnHabitattypeOne = cy.get('#habitat-types').click()

    return clickOnHabitattypeOne
  }

  clickOnHabitattypeTwo () {
    const clickOnHabitattypeTwo = cy.get('#habitat-types-2').click()

    return clickOnHabitattypeTwo
  }

  clickOnHabitattypeThree () {
    const clickOnHabitattypeThree = cy.get('#habitat-types-3').click()

    return clickOnHabitattypeThree
  }

  clickOnHabitattypeFour () {
    const clickOnHabitattypeFour = cy.get('#habitat-types-4').click()

    return clickOnHabitattypeFour
  }

  // cy.get("#habitat-name").fill(faker.random.alphaNumeric(100));
  // cy.get("#habitat-types").click();
  // cy.get("#habitat-types-2").click();
  // cy.get("#habitat-types-3").click();
  // cy.get("#habitat-types-4").click();
  enterAmountOfHabitatEntrance (habitatEntrance) {
    const enterAmountOfHabitatEntrance = cy.get('#habitat-entrances').fill(habitatEntrance)
    return enterAmountOfHabitatEntrance
  }

  enterAmountOfActivEntrance (activeEntrance) {
    const enterAmountOfActivEntrance = cy.get('#habitat-active-entrances').fill(activeEntrance)
    return enterAmountOfActivEntrance
  }

  enterHabitatGridRef (habitatGridRef) {
    const enterHabitatGridRef = cy.get('#habitat-grid-ref').fill(habitatGridRef)
    return enterHabitatGridRef
  }

  enterWorkStartDay (workStartDayValue) {
    const enterWorkStartDay = cy.get("input[id='habitat-work-start-day']").fill(workStartDayValue)
    return enterWorkStartDay
  }

  enterWorkStartMonth (workStartMonthValue) {
    const enterWorkStartMonth = cy.get("input[id='habitat-work-start-month']").fill(workStartMonthValue)
    return enterWorkStartMonth
  }

  enterWorkStartYear (workStartYearValue) {
    const enterWorkStartYear = cy.get("input[id='habitat-work-start-year']").fill(workStartYearValue)
    return enterWorkStartYear
  }

  enterWorkEndDay (workEndDayValue) {
    const enterWorkEndDay = cy.get("input[id='habitat-work-end-day']").fill(workEndDayValue)
    return enterWorkEndDay
  }

  enterWorkEndMonth (workEndMonthValue) {
    const enterWorkEndMonth = cy.get("input[id='habitat-work-end-month']").fill(workEndMonthValue)
    return enterWorkEndMonth
  }

  enterWorkEndYear (workEndYearValue) {
    const enterWorkEndYear = cy.get("input[id='habitat-work-end-year']").fill(workEndYearValue)
    return enterWorkEndYear
  }

  clickOnHabitatActivities () {
    const clickOnHabitatActivities = cy.get("input[id='habitat-activities']").click()

    return clickOnHabitatActivities
  }

  clickOnHabitatAdditionalSett () {
    const clickOnHabitatAdditionalSett = cy.get('#additional-sett').click()

    return clickOnHabitatAdditionalSett
  }

  clickOnHabitatReopen () {
    const clickOnHabitatReopen = cy.get('#habitat-reopen').click()

    return clickOnHabitatReopen
  }

  clickOnHabitatActivitiesTwo () {
    const clickOnHabitatActivitiesTwo = cy.get("input[id='habitat-activities-2']").click()

    return clickOnHabitatActivitiesTwo
  }

  clickOnHabitatActivitiesThree () {
    const clickOnHabitatActivitiesThree = cy.get("input[id='habitat-activities-3']").click()

    return clickOnHabitatActivitiesThree
  }

  clickOnAdditionalSett () {
    const clickOnAdditionalSett = cy.get('#additional-sett').click()

    return clickOnAdditionalSett
  }

  // cy.get("#habitat-entrances").fill("100");
  // cy.get("#additional-sett").click();

  // cy.get("#habitat-active-entrances").fill("100");
  // cy.get("#habitat-grid-ref").fill("NY123456");
  // cy.get("input[id='habitat-work-start-day']").fill("1");
  // cy.get("input[id='habitat-work-start-month']").fill("05");
  // cy.get("input[id='habitat-work-start-year']").fill("2024");

  // cy.get("input[id='habitat-work-end-day']").fill("30");
  // cy.get("input[id='habitat-work-end-month']").fill("11");
  // cy.get("input[id='habitat-work-end-year']").fill("2024");
  // cy.get("input[id='habitat-activities']").click();
}

module.exports = new addSetts()
