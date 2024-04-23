// const { isEmpty } = require('cypress/types/lodash')
const faker = require('faker')
const commonElement = require('../pageObjects/common.js')
const eligibilityfunctionPage = require('../pageObjects/eligibility.js')
const uploadElement = require('../pageObjects/uploadPage.js')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('Verify CD1 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      cy.get('a[href*="/upload"]').click()
      const yourFixturePath = 'virusfile.pdf'
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      const sbnFixturePath = 'magic_polygons.sbn'
      const sbxFixturePath = 'magic_polygons.sbx'
      const shpFixturePath = 'magic_polygons.shx'
      const shxFixturePath = 'magic_polygons.shp'
      const shpxmlFixturePath = 'magic_polygons.shp.xml'
      const kmlFixturePath = 'GeoJSON.geojson'
      const geojsonFixturePath = 'filee.kml'
      const untitledFolderPath = 'virusfile.zip'
      const virusFolderPath = 'virusfile.zip'

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(CpgFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(dbfFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(prjFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(sbnFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shpxmlFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shpFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(shxFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()

      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(kmlFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(untitledFolderPath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(virusFolderPath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(geojsonFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      commonElement.clickContinueButton() // cy.get("input[value='yes']").click()
      // commonElement.clickContinueButton();          cy.get('#main-content').contains('Upload files that support your application.')
      commonElement.VerifyPage('You can upload:')
      commonElement.VerifyPage('a works schedule')
      commonElement.VerifyPage('a methods statement')
      commonElement.VerifyPage('maps, diagrams or drawings')
      commonElement.VerifyPage('evidence of permissions or consents')
      commonElement.VerifyPage('any other supporting information')
      commonElement.VerifyPage('You should include information on:')
      commonElement.VerifyPage(
        'how and when each badger sett will be affected'
      )
      commonElement.VerifyPage(
        'types of machinery or tools that will be used and their distance from each badger sett'
      )
      commonElement.VerifyPage(
        'justification for why each badger sett will be affected'
      )
      commonElement.VerifyPage('dates of any proposed mitigation work')
      commonElement.VerifyPage('Upload a file')
      commonElement.VerifyPage('an image (JPG, PNG, TIF or BMP)')
      commonElement.VerifyPage('map data (GeoJSON, KML or Shape)')
      commonElement.VerifyPage('text (DOC, DOCX, PDF or ODT)')
      commonElement.VerifyPage('a spreadsheet (XLS, XLSX or ODS)')
      commonElement.VerifyPage('ZIP files')

      commonElement.VerifyPage('Upload a file')
      commonElement.VerifyPage('Upload a file')
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      commonElement.clickContinueButton()
      cy.get('#another-file-check-2').click()
      cy.get("main[id*='main-']").contains('Uploaded file 1')
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)'
      ).contains('Upload supporting information')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)'
      ).contains('COMPLETED')
    })
  })
  it('Verify CD2 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      commonElement.GetApplicationTasklist('Upload supporting information').click()
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

      commonElement.clickContinueButton() // cy.get("input[value='yes']").click()
      // commonElement.clickContinueButton();          cy.get('#main-content').contains('Upload files that support your application.')
      commonElement.VerifyPage('You can upload:')
      commonElement.VerifyPage('a works schedule')
      commonElement.VerifyPage('a methods statement')
      commonElement.VerifyPage('maps, diagrams or drawings')
      commonElement.VerifyPage('evidence of permissions or consents')
      commonElement.VerifyPage('any other supporting information')
      commonElement.VerifyPage('You should include information on:')
      commonElement.VerifyPage(
        'how and when each badger sett will be affected'
      )
      commonElement.VerifyPage(
        'types of machinery or tools that will be used and their distance from each badger sett'
      )
      commonElement.VerifyPage(
        'justification for why each badger sett will be affected'
      )
      commonElement.VerifyPage('dates of any proposed mitigation work')
      commonElement.VerifyPage('Upload a file')
      commonElement.VerifyPage('an image (JPG, PNG, TIF or BMP)')
      commonElement.VerifyPage('map data (GeoJSON, KML or Shape)')
      commonElement.VerifyPage('text (DOC, DOCX, PDF or ODT)')
      commonElement.VerifyPage('a spreadsheet (XLS, XLSX or ODS)')
      commonElement.VerifyPage('Upload a file')
      commonElement.VerifyPage('Upload a file')
      uploadElement.uploadFileField().attachFile(bmpFixturePath)
      commonElement.clickContinueButton()
      cy.get('#another-file-check-2').click()
      cy.get("main[id*='main-']").contains('Uploaded file 1')
      commonElement.clickContinueButton()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)'
      ).contains('Upload supporting information')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)'
      ).contains('COMPLETED')
    })
  })
  it('Verify CD3 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      cy.get('a[href*="/upload"]').click()
      uploadElement.uploadFileField().selectFile('cypress/fixtures/empty.pdf')
      commonElement.clickContinueButton()
      commonElement.VerifyPage('The selected file is empty.')
    })
  })

  it('Verify CD4 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      cy.get('a[href*="/upload"]').click()
      const toolargeFixturePath = 'largefolder.zip'
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(toolargeFixturePath)
      commonElement.clickContinueButton()
      commonElement.VerifyPage('The selected file is too big.')
    })
  })

  it('Verify CD5 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      cy.get('a[href*="/upload"]').click()
      const xmlFixturePath = 'magic_polygons.xml'
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(xmlFixturePath)
      commonElement.clickContinueButton()
      commonElement.VerifyPage(
        'The selected file must be a JPG, BMP, PNG, TIF, KML, Shape, DOC, DOCX, ODT, XLS, XLSX, GeoJSON, ODS, PDF or ZIP.'
      )
    })
  })
  it('Verify CD6 - Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      cy.get('a[href*="/upload"]').click()
      const yourFixturePath = 'virus.pdf'
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(CpgFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(dbfFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(prjFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(yourFixturePath)

      cy.fixture('uploadWorkSchedule-copydeck.json').then(
        (uploadWorkSchedule) => {
          commonElement.clickContinueButton()
          cy.get('#main-content > div.govuk-error-summary > div > ul').contains(
            uploadWorkSchedule.errorSummary
          )
        }
      )
    })
  })

  it('Verify CD7 - multi-file upload Landowner copy-deck', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users.json').then((users) => {
      eligibilityfunctionPage.enterIdmUsername(users.email1)
      eligibilityfunctionPage.enterIdmPassword(users.password1)
      commonElement.clickContinueButton()
      commonElement.verifyHeaderPage(users.nextpage)
      commonElement.ClickOnNewApplicationButton()
      eligibilityfunctionPage.selectBadgerOption()
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
      cy.get('a[href*="/upload"]').click()
      const yourFixturePath = 'virusfile.pdf'
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(CpgFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(dbfFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.clickOnUploadField()
      uploadElement.uploadFileField().attachFile(prjFixturePath)
      commonElement.clickContinueButton()
      uploadElement.clickUploadAnotherFile()
      commonElement.clickContinueButton()
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      uploadElement.uploadFileField().attachFile(yourFixturePath)
      cy.wait(2000)
      cy.fixture('uploadWorkSchedule-copydeck.json').then(
        (uploadWorkSchedule) => {
          commonElement.clickContinueButton()
          uploadElement.clickUploadAnotherFile()
          commonElement.clickContinueButton()
          uploadElement.uploadFileField().attachFile(yourFixturePath)
          commonElement.clickContinueButton()
          cy.get("main[id*='main-']").contains('Uploaded file 2')
          commonElement.VerifyPage(uploadWorkSchedule.siteInfoText)
          commonElement.clickContinueButton()
        }
      )
    })

    it('Verify CD8- no additional upload Landowner copy-deck', () => {
      cy.visit(Cypress.env('baseUrl'))
      cy.fixture('users.json').then((users) => {
        eligibilityfunctionPage.enterIdmUsername(users.email1)
        eligibilityfunctionPage.enterIdmPassword(users.password1)
        commonElement.clickContinueButton()
        commonElement.verifyHeaderPage(users.nextpage)
        commonElement.ClickOnNewApplicationButton()
        eligibilityfunctionPage.selectBadgerOption()
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
        cy.get('a[href*="/upload"]').click()
        const yourFixturePath = 'virusfile.pdf'
        uploadElement.uploadFileField().attachFile(yourFixturePath)
        cy.fixture('uploadWorkSchedule-copydeck.json').then(
          (uploadWorkSchedule) => {
            cy.get("main[id*='main-']").contains('Uploaded file 1')
            commonElement.VerifyPage(uploadWorkSchedule.siteInfoText)
            cy.get('#another-file-check-2').click()
            commonElement.clickContinueButton()
          }
        )
      })
    })
  })
})
