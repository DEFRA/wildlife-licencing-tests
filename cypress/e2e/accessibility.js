const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const addSettsfunctionPage = require('../pageObjects/addSettsPage.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('SDDSIP-509 and verify Licence application screen', () => {
    // cy.request(
    //   "/reset?username=user1@email.com"
    // );
    cy.visit(Cypress.env('baseUrl'))
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.wait(3000)
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get('#main-content > div > div > form > fieldset > a').click()
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('#user-role').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.GetApplicationTasklist('Give licence holder details')
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      // commonElement.clickOnYesOption();
      //       commonElement.clickContinueButton();
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterName()
      commonElement.clickContinueButton()
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.SelectYesOptionaOnIsOrganisation
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickContinueButton()
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.SelectAddress('1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterEmailAddress(faker.internet.email()) // new
      commonElement.clickContinueButton() // new
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get('#phone-number').fill(faker.phone.phoneNumber())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      //   commonElement.clickContinueButton();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   Give ecologist details
      commonElement.GetApplicationTasklist('Give ecologist details')
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      // commonElement.clickOnYesOption();
      commonElement.clickContinueButton()
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.SelectYesOptionaOnIsOrganisation;
      //   commonElement.EnterOrganisationName(faker.company.bs());
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.clickContinueButton();
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   cy.get("#change-email").click();
      //   commonElement.clickContinueButton();
      //   // commonElement.clickContinueButton();

      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.EnterPostCode("M24 6DH");
      //   commonElement.clickContinueButton();
      //   commonElement.SelectAddress(
      //     "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      //   );
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.clickContinueButton();
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.clickContinueButton();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      // Authorised person
      commonElement.GetApplicationTasklist('Add authorised people')
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterName()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   Add additional contacts
      commonElement.GetApplicationTasklist('Add alternative licence holder contact details')
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickOnYesOption()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterName()
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      // commonElement.clickOnYesOption();
      commonElement.clickContinueButton()
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.EnterName();
      //   commonElement.clickContinueButton();
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //  commonElement.EnterEmailAddress()().clear();
      //  commonElement.EnterEmailAddress(faker.internet.email());
      //   commonElement.clickContinueButton();
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   commonElement.clickContinueButton();
      //   cy.injectAxe()
      //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      commonElement.GetApplicationTasklist('Add invoice details')
      cy.get("input[value='other']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName() + faker.name.lastName())
      commonElement.clickContinueButton()
      //   cy.get("#new").click();
      //   commonElement.clickContinueButton();
      commonElement.SelectYesOptionaOnIsOrganisation
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      cy.get('#purchase-order').fill(faker.internet.email())
      commonElement.clickContinueButton() //       commonElement.clickContinueButton();
      // work activity
      commonElement.GetApplicationTasklist('Give work activity details')
      cy.get('#work-proposal').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#work-payment-exempt-reason-8').click()
      cy.get('#exempt-details').fill(faker.random.alphaNumeric(400))
      commonElement.clickContinueButton()
      cy.get('#work-category-13').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('Give work activity details')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)'
      ).contains('COMPLETED')
      commonElement.GetApplicationTasklist('Give details of conservation issues')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#site-name').fill('a')
      cy.get('#site-name__option--0').click()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#permission-details').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      //   cy.get("#advice-from-who").fill(
      //     faker.name.firstName() + faker.name.lastName()
      //   );
      cy.get('#advice-from-who').fill(faker.random.alphaNumeric(40))
      cy.get('#advice-description').fill(faker.random.alphaNumeric(40))
      commonElement.clickContinueButton()
      cy.get('#proximity').click()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      // permisssion details
      commonElement.GetApplicationTasklist('Give details of permissions to start work')
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#consent-type-check').click()
      commonElement.clickContinueButton()
      cy.get('#authority-name').fill('a')
      cy.get('#authority-name__option--0').click()
      commonElement.clickContinueButton()
      cy.get('#planning-type').click()
      commonElement.clickContinueButton()
      cy.get('#reference').fill(faker.name.firstName())
      commonElement.clickContinueButton()
      cy.get('#add-another-permission-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-met-2').click()
      commonElement.clickContinueButton()
      cy.get('#conditions-not-met-reason').fill(faker.lorem.words(5))
      commonElement.clickContinueButton()
      cy.get('#potential-conflicts').click()
      commonElement.clickContinueButton()
      cy.get('#describe-potential-conflicts').fill(faker.lorem.words(4))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)'
      ).contains('Give details of permissions to start work')
      // site info
      commonElement.GetApplicationTasklist('Give site information')
      cy.get('#site-name').fill(faker.random.alphaNumeric(100))
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      //       cy.get('#site-postcode-check-2').click()
      commonElement.clickContinueButton()
      //       cy.get('#address-line-1').fill(faker.random.alpha(80))
      cy.get('#address-line-2').fill(faker.random.alpha(80))
      cy.get('#address-town').fill(faker.random.alpha(80))
      cy.get('#address-county').fill(faker.random.alpha(20))
      commonElement.clickContinueButton()
      //       cy.get('#scan-file').click()
      const yourFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      cy.get('#scan-file').attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      //       cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      commonElement.clickContinueButton()
      //       cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(prjFixturePath)
      commonElement.clickContinueButton()
      //  commonElement.clickContinueButton();
      //       // cy.get('#scan-file').click()
      // const shpFixturePath = 'magic_polygons.shp'
      // const yourFixturePath = 'virusfile.pdf'
      // const shpxmlFixturePath = 'magic_polygons.shp.xml'
      // cy.get('#scan-file').attachFile(yourFixturePath)
      // commonElement.clickContinueButton();
      //       // cy.get('#scan-file').click()
      // cy.get('#scan-file').attachFile(shpFixturePath)
      // commonElement.clickContinueButton();
      //       // cy.get('#scan-file').click()
      // cy.get('#scan-file').attachFile(shpxmlFixturePath)
      // commonElement.clickContinueButton();
      //       // cy.get('#site-grid-ref').clear()
      // cy.get('#site-grid-ref').fill(
      //   'NY' + faker.datatype.number({ min: 100000 }).toString()
      // )
      // commonElement.clickContinueButton();
      //       // cy.get('#address-and-grid-reference-mismatch').click()
      // commonElement.clickContinueButton();
      //       cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      commonElement.clickContinueButton()
      //       cy.get('#address-and-grid-reference-mismatch-4').click()
      commonElement.clickContinueButton()
      //       commonElement.clickContinueButton();

      commonElement.GetApplicationTasklist('Give ecologist’s experience')
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get('#enter-experience').fill(faker.random.alphaNumeric(20))
      commonElement.clickContinueButton()
      cy.get('#enter-methods').fill(faker.random.alphaNumeric(21))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      //       commonElement.clickContinueButton();
      cy.get('#enter-class-mitigation-details').fill('BAD-2022-agsss1')
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Upload supporting information')
      const yourFixturePath1 = 'virusfile.pdf'
      const yourFixturePath2 = 'Thirtysample.jpg'
      const yourFixturePath3 = 'OVERVIEW.jpg'
      cy.get('#scan-file').attachFile(yourFixturePath1)
      commonElement.clickContinueButton()
      //       cy.get('#another-file-check').click()
      commonElement.clickContinueButton()
      //       cy.get('#scan-file').attachFile(yourFixturePath2)
      commonElement.clickContinueButton()
      //       cy.get('#another-file-check').click()
      commonElement.clickContinueButton()
      //       cy.get('#scan-file').attachFile(yourFixturePath3)
      cy.fixture('uploadWorkSchedule-copydeck.json').then(
        (uploadWorkSchedule) => {
          commonElement.clickContinueButton()
          cy.get("main[id*='main-']").contains('Uploaded file 1')
          cy.get('.govuk-heading-l').contains(uploadWorkSchedule.siteInfoText)
          cy.get("input[value='no']").click()
          commonElement.clickContinueButton()
          commonElement.GetApplicationTasklist('Add setts the work will affect')
          commonElement.clickContinueButton()
          addSettsfunctionPage.enterHabitatName(faker.name.firstName())
          commonElement.clickContinueButton()
          addSettsfunctionPage.clickOnHabitattypeThree()
          //   cy.get("#habitat-types-3").click();
          commonElement.clickContinueButton()
          cy.get("input[value='true']").click()
          commonElement.clickContinueButton()
          addSettsfunctionPage.enterAmountOfHabitatEntrance(7)
          //   cy.get("#habitat-entrances").fill("7");
          commonElement.clickContinueButton()
          addSettsfunctionPage.enterAmountOfActivEntrance(5)
          //   cy.get("#habitat-active-entrances").fill("5");
          commonElement.clickContinueButton()
          addSettsfunctionPage.enterHabitatGridRef('NY123456')

          //   cy.get("#habitat-grid-ref").fill("NY123456");
          commonElement.clickContinueButton()
          addSettsfunctionPage.enterWorkStartDay('1')
          //   cy.get("#habitat-work-start-day").fill("1");
          addSettsfunctionPage.enterWorkStartMonth('11')
          //   cy.get("#habitat-work-start-month").fill("11");
          addSettsfunctionPage.enterWorkStartYear('2024')
          //   cy.get("#habitat-work-start-year").fill("2024");
          commonElement.clickContinueButton()
          addSettsfunctionPage.enterWorkEndDay('30')
          addSettsfunctionPage.enterWorkEndMonth('11')
          addSettsfunctionPage.enterWorkEndYear('2024')
          //   cy.get("#habitat-work-end-day").fill("30");
          //   cy.get("#habitat-work-end-month").fill("11");
          //   cy.get("#habitat-work-end-year").fill("2024");
          commonElement.clickContinueButton()
          addSettsfunctionPage.clickOnHabitatActivities()
          //   cy.get("#habitat-activities").click();
          commonElement.clickContinueButton()
          cy.get("input[value='no']").click()
          commonElement.clickContinueButton()
          commonElement.GetApplicationTasklist('Declare convictions')
          cy.get('#convictions-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.GetApplicationTasklist('Agree to terms and send application')
          cy.get('#main-content > div > div > form > fieldset').contains(
            users.text18
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'By sending the application you agree that you have given complete and correct information.'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'will uphold any conditions applied to my licence if granted'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'will abide by the terms and conditions of this service'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'By sending the application you confirm that:'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'an appropriate ecologist has been involved in the application and design of any mitigations'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'the ecologist supports the application'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action'
          )
          cy.get('#main-content > div > div > form > fieldset').contains(
            'you will pay any charges that apply'
          )
          commonElement.clickContinueButton()
          //           commonElement.clickContinueButton();
          //           const ls = cy.get('a').contains('Badger mitigation').first()
          ls.click()
          cy.get('#main-content > div > div > form > fieldset > dl').contains(
            'SUBMITTED'
          )
          cy.get('#main-content > div > div > form > fieldset > dl').contains(
            'Badger mitigation'
          )
          cy.get('#main-content > div > div > form > fieldset > dl').contains(
            'Site'
          )
          cy.get('#main-content > div > div > form > fieldset > dl').contains(
            'Applicant'
          )

          cy.get('#main-content > div > div > form > fieldset > dl').contains(
            'Application reference'
          )

          cy.get('#main-content > div > div > form > fieldset > dl').contains(
            'Submitted'
          )
        }
      )
    })
  })
})
