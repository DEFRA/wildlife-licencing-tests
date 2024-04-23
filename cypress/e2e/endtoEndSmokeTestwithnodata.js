const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const addSettsfunctionPage = require('../pageObjects/addSettsPage.js')
const addInvoiceDetailsfunctionPage = require('../pageObjects/addInvoiceDetailsPage.js')
const uploadElement = require('../pageObjects/uploadPage.js')
const convictionElement = require('../pageObjects/convictionPage.js')
const converservativeIssueElement = require('../pageObjects/giveconservationIssuePage.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('SDDSIP-509 and verify Licence application screen', () => {
    cy.request(
      '/reset?username=delelookman%2B2@gmail.com'
    )
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email6)
      eligibilityfunctionPage.enterIdmPassword(users.password6)
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();
      cy.wait(7000)
      eligibilityfunctionPage.selectBadgerOption()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      cy.get('#user-role-4').click()
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.GetApplicationTasklist('Give licence holder details')
      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.SelectYesOptionaOnIsOrganisation()
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email()) // new
      commonElement.clickContinueButton() // new
      cy.get('#phone-number').fill(faker.phone.phoneNumber())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
      // commonElement.clickContinueButton();

      //   Give ecologist details
      commonElement.GetApplicationTasklist('Give ecologist details')
      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton() // new
      commonElement.SelectYesOptionaOnIsOrganisation()
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      // cy.get("#change-email").click();
      // commonElement.clickContinueButton();
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email()) // new
      commonElement.clickContinueButton() // new
      commonElement.clickContinueButton()

      // Authorised person
      commonElement.GetApplicationTasklist('Add authorised people')
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.clickOnNoOption()
      commonElement.clickContinueButton()

      //   Add additional contacts
      commonElement.GetApplicationTasklist('Add alternative licence holder contact details')

      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      // commonElement.clickOnYesOption();
      // commonElement.clickContinueButton();
      // commonElement.EnterName(faker.name.firstName() + " " + faker.name.lastName());
      // commonElement.clickContinueButton();
      // commonElement.EnterEmailAddress().clear();
      // commonElement.EnterEmailAddress.fill(faker.internet.email());
      // commonElement.clickContinueButton();
      // commonElement.clickContinueButton();
      commonElement.GetApplicationTasklist('Add alternative ecologist contact details')
      commonElement.verifyHeaderPage().should(
        'contain',
        'Do you want to add an alternative ecologist contact?'
      )
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()

      commonElement
        .EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      // cy.get("#new").click();
      // commonElement.clickContinueButton();
      commonElement.EnterEmailAddress().clear()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()
      // commonElement.SelectYesOptionaOnIsOrganisation();
      // commonElement.EnterOrganisationName().fill(faker.company.bs());
      // commonElement.clickContinueButton();
      // commonElement.EnterEmailAddress().clear();
      // commonElement.EnterEmailAddress.fill(faker.internet.email());
      // commonElement.clickContinueButton();
      // commonElement.EnterPostCode("M24 6DH");
      // commonElement.clickContinueButton();
      // commonElement.SelectAddress(
      //   "12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      // commonElement.clickContinueButton();
      // commonElement.EnterEmailAddress().clear();
      // commonElement.EnterEmailAddress.fill(faker.internet.email());
      commonElement.clickContinueButton()
      // cy.get('#yes-no-2').click()
      commonElement.GetApplicationTasklist('Add invoice details')
      cy.get("input[value='other']").click()
      commonElement.clickContinueButton()
      commonElement.EnterName(faker.name.firstName() + ' ' + faker.name.lastName())
      commonElement.clickContinueButton()
      // cy.get("#new").click();
      // commonElement.clickContinueButton();
      commonElement.SelectYesOptionaOnIsOrganisation()
      commonElement.EnterOrganisationName(faker.company.bs())
      commonElement.clickContinueButton()
      // commonElement.EnterEmailAddress().clear();
      // commonElement.EnterEmailAddress(faker.internet.email());
      // commonElement.clickContinueButton();
      commonElement.EnterPostCode('M24 6DH')
      commonElement.clickContinueButton()
      commonElement.SelectAddress(
        '12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      commonElement.clickContinueButton()
      commonElement.EnterEmailAddress().clear()
      commonElement.EnterEmailAddress(faker.internet.email())
      commonElement.clickContinueButton()

      addInvoiceDetailsfunctionPage.enterPurchaseOrderdetails(
        faker.internet.email()
      )

      commonElement.clickContinueButton()
      commonElement.clickContinueButton()
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
      converservativeIssueElement.enterPermissionDetail().fill(faker.random.alphaNumeric(40))
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
      cy.get('#site-postcode-check-2').click()
      commonElement.clickContinueButton()
      cy.get('#address-line-1').fill(faker.random.alpha(80))
      cy.get('#address-line-2').fill(faker.random.alpha(80))
      cy.get('#address-town').fill(faker.random.alpha(80))
      cy.get('#address-county').fill(faker.random.alpha(20))
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      // const yourFixturePath = 'magic_polygonsOne.cpg'
      // const dbfFixturePath = 'magic_polygonsTwo.dbf'
      // const prjFixturePath = 'magic_polygonsThree.prj'

      cy.writeFile(
        'cypress/fixtures/magic_polygons.cpg',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.cpg')
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      cy.writeFile(
        'cypress/fixtures/magic_polygons.dbf',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.dbf')
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      cy.writeFile(
        'cypress/fixtures/magic_polygons.prj',
        '<html>Hello world</html>'
      )
      uploadElement.uploadFileField().attachFile('magic_polygons.prj')
      commonElement.clickContinueButton()
      //  commonElement.clickContinueButton();      // uploadElement.clickOnUploadField()
      // const shpFixturePath = 'magic_polygons.shp'
      // const yourFixturePath = 'virusfile.pdf'
      // const shpxmlFixturePath = 'magic_polygons.shp.xml'
      // cy.get('#scan-file').attachFile(yourFixturePath)
      // commonElement.clickContinueButton();      // uploadElement.clickOnUploadField()
      // cy.get('#scan-file').attachFile(shpFixturePath)
      // commonElement.clickContinueButton();      // uploadElement.clickOnUploadField()
      // cy.get('#scan-file').attachFile(shpxmlFixturePath)
      // commonElement.clickContinueButton();      // cy.get('#site-grid-ref').clear()
      // cy.get('#site-grid-ref').fill(
      //   'NY' + faker.datatype.number({ min: 100000 }).toString()
      // )
      // commonElement.clickContinueButton();      // cy.get('#address-and-grid-reference-mismatch').click()
      // commonElement.clickContinueButton();
      cy.get('#site-grid-ref')
        .clear()
        .fill('NY' + faker.datatype.number({ min: 100000 }).toString())
      commonElement.clickContinueButton()
      cy.get('#address-and-grid-reference-mismatch-4').click()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Give ecologist’s experience')
      cy.get("input[value='no']").click()
      commonElement.clickContinueButton()
      cy.get('#enter-experience').fill(faker.random.alphaNumeric(20))
      commonElement.clickContinueButton()
      cy.get('#enter-methods').fill(faker.random.alphaNumeric(21))
      commonElement.clickContinueButton()
      commonElement.clickOnYesOption()
      commonElement.clickContinueButton()
      cy.get('#enter-class-mitigation-details').fill('BAD-2022-agsss1')
      commonElement.clickContinueButton()
      commonElement.clickContinueButton()

      commonElement.GetApplicationTasklist('Upload supporting information')
      const yourFixturePath1 = 'virusfile.pdf'
      const yourFixturePath2 = 'Thirtysample.jpg'
      const yourFixturePath3 = 'OVERVIEW.jpg'
      uploadElement.uploadFileField().attachFile(yourFixturePath1)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(yourFixturePath2)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(yourFixturePath3)
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
          cy.get('#habitat-types-3').click()
          commonElement.clickContinueButton()
          cy.get("input[value='true']").click()
          commonElement.clickContinueButton()
          cy.get('#habitat-entrances').fill('7')
          commonElement.clickContinueButton()
          cy.get('#habitat-active-entrances').fill('5')
          commonElement.clickContinueButton()
          cy.get('#habitat-grid-ref').clear()
          cy.get('#habitat-grid-ref').fill('NY123456')
          commonElement.clickContinueButton()
          cy.get('#habitat-work-start-day').fill('1')
          cy.get('#habitat-work-start-month').fill('11')
          cy.get('#habitat-work-start-year').fill('2024')
          commonElement.clickContinueButton()
          cy.get('#habitat-work-end-day').fill('30')
          cy.get('#habitat-work-end-month').fill('11')
          cy.get('#habitat-work-end-year').fill('2024')
          commonElement.clickContinueButton()
          cy.get('#habitat-activities').click()
          cy.get('#habitat-activities-2').click()
          cy.get('#habitat-activities-3').click()
          cy.get('#habitat-activities-4').click()
          cy.get('#habitat-activities-5').click()
          commonElement.clickContinueButton()
          cy.get("input[value='no']").click()
          commonElement.clickContinueButton()
          commonElement.GetApplicationTasklist('Declare convictions')
          cy.get('#convictions-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.GetApplicationTasklist('Agree to terms and send application')
          commonElement.assertPageText().contains(
            users.text18
          )
          commonElement.assertPageText().contains(
            'By sending the application you agree that you have given complete and correct information.'
          )
          commonElement.assertPageText().contains(
            'If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:'
          )
          commonElement.assertPageText().contains(
            'will uphold any conditions applied to my licence if granted'
          )
          commonElement.assertPageText().contains(
            'will abide by the terms and conditions of this service'
          )
          commonElement.assertPageText().contains(
            'will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges'
          )
          commonElement.assertPageText().contains(
            'By sending the application you confirm that:'
          )
          commonElement.assertPageText().contains(
            'an appropriate ecologist has been involved in the application and design of any mitigations'
          )
          commonElement.assertPageText().contains(
            'the ecologist supports the application'
          )
          commonElement.assertPageText().contains(
            'the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment'
          )
          commonElement.assertPageText().contains(
            'you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action'
          )
          commonElement.assertPageText().contains(
            'you will pay any charges that apply'
          )
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()

          commonElement.VerifyPagetext().contains(
            'SUBMITTED'
          )
          commonElement.VerifyPagetext().contains(
            'Badger mitigation'
          )
          commonElement.VerifyPagetext().contains(
            'Site'
          )
          commonElement.VerifyPagetext().contains(
            'Applicant'
          )

          commonElement.VerifyPagetext().contains(
            'Application reference'
          )

          commonElement.VerifyPagetext().contains(
            'Submitted'
          )
        }
      )
    })
  })
})
