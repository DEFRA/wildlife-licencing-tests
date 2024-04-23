const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')

describe('Returns', () => {
  it('Return TS ID 1.3- No short path 1', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return TS ID 1.4 - No short path 1', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return TS ID 1.7 - No short path 2', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil-3').click()
          cy.get('#other-details').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })

  it('Return TS ID 1.8 - No short path 2', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil-3').click()
          cy.get('#other-details').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return TS ID 1.6 - No short path 3', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })

  it('Return TS ID 1.5- No short path 3', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return - No short path 4', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          // row.length will give you the row count
          cy.log(row.length)

          // cy.get('tbody>tr').find(href).last.click()
          // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
          // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          cy.get('#why-nil-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return - Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check').click()
          commonElement.clickContinueButton()
          cy.get('#describe-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#located-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#artificial-sett-grid-reference').fill('NY395557')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          const jpgFixturePath = 'file.jpg'
          const docFixturePath = 'file.doc'
          const docxFixturePath = 'file.docx'
          const odtFixturePath = 'file.odt'
          const odsFixturePath = 'file.ods'
          const xlsFixturePath = 'file.xls'
          const xlsxFixturePath = 'file.xlsx'
          const pngFixturePath = 'file.png'
          const tifFixturePath = 'file.tif'
          const bmpFixturePath = 'file.bmp'

          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(jpgFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(docFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()

          uploadElement.uploadFileField().attachFile(docxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odtFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(pngFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(tifFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(bmpFixturePath)
          commonElement.clickContinueButton()
          cy.get('#another-file-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })

  it('Return TS ID 1.0 - Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check').click()
          commonElement.clickContinueButton()
          cy.get('#describe-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#located-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#artificial-sett-grid-reference').fill('NY395557')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
        })
    })
  })

  it('Return TS ID 1.2- Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check-2').click()
          cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check').click()
          commonElement.clickContinueButton()
          cy.get('#describe-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#located-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#artificial-sett-grid-reference').fill('NY395557')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
        })
    })
  })
  it('Return - Yes short path 6', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check-2').click()
          cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();        commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check').click()
          commonElement.clickContinueButton()
          cy.get('#describe-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#located-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#artificial-sett-grid-reference').fill('NY395557')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          const jpgFixturePath = 'file.jpg'
          const docFixturePath = 'file.doc'
          const docxFixturePath = 'file.docx'
          const odtFixturePath = 'file.odt'
          const odsFixturePath = 'file.ods'
          const xlsFixturePath = 'file.xls'
          const xlsxFixturePath = 'file.xlsx'
          const pngFixturePath = 'file.png'
          const tifFixturePath = 'file.tif'
          const bmpFixturePath = 'file.bmp'

          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(jpgFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(docFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()

          uploadElement.uploadFileField().attachFile(docxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odtFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(pngFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(tifFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(bmpFixturePath)
          commonElement.clickContinueButton()
          cy.get('#another-file-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return TS ID 1.13 - Yes short path 7', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check-2').click()
          cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check-2').click()
          commonElement.clickContinueButton()
          cy.get('#why-no-artificial-sett-check').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          const jpgFixturePath = 'file.jpg'
          const docFixturePath = 'file.doc'
          const docxFixturePath = 'file.docx'
          const odtFixturePath = 'file.odt'
          const odsFixturePath = 'file.ods'
          const xlsFixturePath = 'file.xls'
          const xlsxFixturePath = 'file.xlsx'
          const pngFixturePath = 'file.png'
          const tifFixturePath = 'file.tif'
          const bmpFixturePath = 'file.bmp'

          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(jpgFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(docFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()

          uploadElement.uploadFileField().attachFile(docxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odtFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(pngFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(tifFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(bmpFixturePath)
          commonElement.clickContinueButton()
          cy.get('#another-file-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
  it('Return TS ID 1.12 - Yes short path 7', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check-2').click()
          cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check-2').click()
          commonElement.clickContinueButton()
          cy.get('#why-no-artificial-sett-check-2').click()
          cy.get('#why-sett-not-made').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          const jpgFixturePath = 'file.jpg'
          const docFixturePath = 'file.doc'
          const docxFixturePath = 'file.docx'
          const odtFixturePath = 'file.odt'
          const odsFixturePath = 'file.ods'
          const xlsFixturePath = 'file.xls'
          const xlsxFixturePath = 'file.xlsx'
          const pngFixturePath = 'file.png'
          const tifFixturePath = 'file.tif'
          const bmpFixturePath = 'file.bmp'

          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(jpgFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(docFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()

          uploadElement.uploadFileField().attachFile(docxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odtFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(pngFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(tifFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(bmpFixturePath)
          commonElement.clickContinueButton()
          cy.get('#another-file-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })

  it('Return TS ID 1.9- Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check-2').click()
          commonElement.clickContinueButton()
          cy.get('#why-no-artificial-sett-check-2').click()
          cy.get('#why-sett-not-made').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return-2').click()
          commonElement.clickContinueButton()
        })
    })
  })
  it('Return TS ID 1.10- Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          cy.get('#outcome-check').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#why-nil-2').click()
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton() // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    commonElement.clickOnYesOption();
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check-2').click()
          commonElement.clickContinueButton()
          cy.get('#why-no-artificial-sett-check').click()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
        })
    })
  })
  it('Return - Yes Negative test 1', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      cy.get('#main-content > fieldset > table')
        .find('tr')
        .then((row) => {
          cy.log(row.length)
          cy.get(
            '#main-content > fieldset > table > tbody > tr:nth-child(' +
              (row.length - 4) +
              ') > th > p > a'
          ).click()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          cy.get('#email-or-return-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          cy.get('#outcome-check').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described why you did not do this licensed activity'
          )
          commonElement.VerifyPage('Enter a description')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described the work that was done'
          )
          commonElement.VerifyPage('Enter a description')
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described why you did not do this licensed activity'
          )
          commonElement.VerifyPage('Enter a description')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described the work that was done'
          )
          commonElement.VerifyPage('Enter a description')
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described why you did not do this licensed activity'
          )
          commonElement.VerifyPage('Enter a description')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described the work that was done'
          )
          commonElement.VerifyPage('Enter a description')
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described why you did not do this licensed activity'
          )
          commonElement.VerifyPage('Enter a description')
          // cy.get('#main-content').contains('Select an option')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described the work that was done'
          )
          commonElement.VerifyPage('Enter a description')
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not entered the date you destroyed the vacant sett'
          )
          commonElement.VerifyPage(
            'Enter the date you destroyed the vacant sett'
          )
          // commonElement.clickOnYesOption();
          // cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
          // commonElement.clickContinueButton();
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not entered the date you destroyed the vacant sett'
          )
          commonElement.VerifyPage(
            'Enter the date you destroyed the vacant sett'
          )

          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not entered the date you destroyed the vacant sett'
          )
          commonElement.VerifyPage(
            'Enter the date you destroyed the vacant sett'
          )

          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not entered the date you destroyed the vacant sett'
          )
          commonElement.VerifyPage(
            'Enter the date you destroyed the vacant sett'
          )
          // bug
          // cy.get("#destroy-date-day").fill('30')
          // cy.get("#destroy-date-month").fill('11')
          // cy.get("#destroy-date-year").fill('2026')
          // commonElement.clickContinueButton();    // cy.get('#main-content').contains('The date must be in the past')
          // cy.get('#main-content').contains('Enter a date that is in the past')

          cy.get('#destroy-date-day').fill('30')
          cy.get('#destroy-date-month').fill('11')
          cy.get('#destroy-date-year').fill('2022')
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')

          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton() // cy.get('#create-artificial-sett-check').click()
          // commonElement.clickContinueButton();    commonElement.clickContinueButton();    cy.get('#main-content').contains('You have not described the evidence you have that badgers were disturbed')
          commonElement.VerifyPage('Enter a description')
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          // cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          cy.get('#create-artificial-sett-check').click()
          commonElement.clickContinueButton()
          cy.get('#describe-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton() // cy.get('#create-artificial-sett-check').click()

          // cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
          // commonElement.clickContinueButton();
          commonElement.VerifyPage(
            'You have not entered evidence that badgers found the artificial sett'
          )
          commonElement.VerifyPage(
            'Enter evidence that badgers found the artificial sett'
          )
          // cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
          // cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          cy.get('#located-artificial-sett').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not entered a grid reference'
          )
          commonElement.VerifyPage(
            'Enter a national grid reference that is 2 letters and 6 digits'
          )
          cy.get('#artificial-sett-grid-reference').fill('NY3955')
          commonElement.VerifyPage(
            'You have not entered a grid reference'
          )
          commonElement.VerifyPage(
            'Enter a national grid reference that is 2 letters and 6 digits'
          )
          cy.get('#artificial-sett-grid-reference').fill('NY395557')
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnNoOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described why were you not able to comply with the conditions'
          )
          // bugcy.get('#main-content').contains('Describe why were you not able to comply with the conditions')
          commonElement.clickContinueButton()
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not described the welfare concerns'
          )
          commonElement.VerifyPage('Describe the welfare concerns')
          cy.get('#yes-conditional-input').fill(
            faker.random.alphaNumeric(4000)
          )
          commonElement.clickContinueButton()
          // commonElement.clickContinueButton();
          //  commonElement.clickContinueButton();
          //  cy.get('#main-content').contains('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          commonElement.clickOnYesOption()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage(
            'You have not selected a file to upload.'
          )
          commonElement.VerifyPage(' Select a file to upload.')
          // commonElement.clickOnYesOption();
          // commonElement.clickContinueButton();    const jpgFixturePath = 'file.jpg'
          const docFixturePath = 'file.doc'
          const docxFixturePath = 'file.docx'
          const odtFixturePath = 'file.odt'
          const odsFixturePath = 'file.ods'
          const xlsFixturePath = 'file.xls'
          const xlsxFixturePath = 'file.xlsx'
          const pngFixturePath = 'file.png'
          const tifFixturePath = 'file.tif'
          const bmpFixturePath = 'file.bmp'

          uploadElement.clickOnUploadField()
          commonElement.clickContinueButton() // cy.get('#main-content').contains('You must choose a file to upload.')
          // cy.get('#main-content').contains('Upload a different file.')
          uploadElement.uploadFileField().attachFile(jpgFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(docFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()

          uploadElement.uploadFileField().attachFile(docxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odtFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(odsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(xlsxFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(pngFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(tifFixturePath)
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.clickOnUploadField()
          uploadElement.uploadFileField().attachFile(bmpFixturePath)
          commonElement.clickContinueButton()
          cy.get('#another-file-check-2').click()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.clickContinueButton()
          commonElement.VerifyPage('You have not selected an option')
          commonElement.VerifyPage('Select an option')
          cy.get('#submit-return').click()
          commonElement.clickContinueButton()
          commonElement.assertPageText().contains(
            'Report of action sent'
          )
          commonElement.assertPageText().contains(
            'our reference number'
          )
          commonElement.assertPageText().contains(
            '2022-501600-A24-BAD-LIC-ROA'
          )
          commonElement.assertPageText().contains(
            'What happens next'
          )
          commonElement.assertPageText().contains(
            'Natural England will review your report of action.'
          )
          commonElement.assertPageText().contains(
            'View licences and applications'
          )
        })
    })
  })
})
