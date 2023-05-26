// const { isEmpty } = require('cypress/types/lodash')
const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('Verify CD1 - Landowner copy-deck', () => {
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
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
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

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(CpgFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(prjFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(sbnFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpxmlFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shxFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

 
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(kmlFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(untitledFolderPath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(virusFolderPath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(geojsonFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
        
          cy.get('#continue').click()
          // cy.get("input[value='yes']").click()
          // cy.get('#continue').click()
          cy.get('#main-content').contains('Upload files that support your application.')
          cy.get('#main-content').contains('You can upload:')
          cy.get('#main-content').contains('a works schedule')
          cy.get('#main-content').contains('a methods statement')
          cy.get('#main-content').contains('maps, diagrams or drawings')
          cy.get('#main-content').contains('evidence of permissions or consents')
          cy.get('#main-content').contains('any other supporting information')
          cy.get('#main-content').contains('You should include information on:')
          cy.get('#main-content').contains('how and when each badger sett will be affected')
          cy.get('#main-content').contains('types of machinery or tools that will be used and their distance from each badger sett')
          cy.get('#main-content').contains('justification for why each badger sett will be affected')
          cy.get('#main-content').contains('dates of any proposed mitigation work')
          cy.get('#main-content').contains('Upload a file')
          cy.get('#main-content').contains('an image (JPG, PNG, TIF or BMP)')
          cy.get('#main-content').contains('map data (GeoJSON, KML or Shape)')
          cy.get('#main-content').contains('text (DOC, DOCX, PDF or ODT)')
          cy.get('#main-content').contains('a spreadsheet (XLS, XLSX or ODS)')
          cy.get('#main-content').contains('ZIP files')
          
          cy.get('#main-content').contains('Upload a file')
          cy.get('#main-content').contains('Upload a file')
          cy.get('#scan-file').attachFile(yourFixturePath)
          cy.get('#continue').click()
          cy.get('#another-file-check-2').click()
          cy.get("main[id*='main-']").contains('Uploaded file 1')
          cy.get('#continue').click()
          cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)').contains("Upload supporting information")
          cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)').contains("COMPLETED")

    
    })
  })
  it('Verify CD2 - Landowner copy-deck', () => {
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
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a').contains('Upload supporting information').click()
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
     

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(jpgFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(docFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
     cy.get('#scan-file').click()

      cy.get('#scan-file').attachFile(docxFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(odtFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(odsFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(xlsFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(xlsxFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(pngFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(tifFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()

 

     
      
          cy.get('#continue').click()
          // cy.get("input[value='yes']").click()
          // cy.get('#continue').click()
          cy.get('#main-content').contains('Upload files that support your application.')
          cy.get('#main-content').contains('You can upload:')
          cy.get('#main-content').contains('a works schedule')
          cy.get('#main-content').contains('a methods statement')
          cy.get('#main-content').contains('maps, diagrams or drawings')
          cy.get('#main-content').contains('evidence of permissions or consents')
          cy.get('#main-content').contains('any other supporting information')
          cy.get('#main-content').contains('You should include information on:')
          cy.get('#main-content').contains('how and when each badger sett will be affected')
          cy.get('#main-content').contains('types of machinery or tools that will be used and their distance from each badger sett')
          cy.get('#main-content').contains('justification for why each badger sett will be affected')
          cy.get('#main-content').contains('dates of any proposed mitigation work')
          cy.get('#main-content').contains('Upload a file')
          cy.get('#main-content').contains('an image (JPG, PNG, TIF or BMP)')
          cy.get('#main-content').contains('map data (GeoJSON, KML or Shape)')
          cy.get('#main-content').contains('text (DOC, DOCX, PDF or ODT)')
          cy.get('#main-content').contains('a spreadsheet (XLS, XLSX or ODS)')
          cy.get('#main-content').contains('Upload a file')
          cy.get('#main-content').contains('Upload a file')
          cy.get('#scan-file').attachFile(bmpFixturePath)
          cy.get('#continue').click()
          cy.get('#another-file-check-2').click()
          cy.get("main[id*='main-']").contains('Uploaded file 1')
          cy.get('#continue').click()
          cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)').contains("Upload supporting information")
          cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(13)').contains("COMPLETED")

        
      
    })
  })
  it('Verify CD3 - Landowner copy-deck', () => {
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
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a[href*="/upload"]').click()
      cy.get('#scan-file').selectFile('cypress/fixtures/empty.pdf')
      cy.get('#continue').click()
      cy.get('#main-content').contains("The selected file is empty.")
    })
  })

  // it('Verify CD4 - Landowner copy-deck', () => {
  //   cy.visit(Cypress.env('login'))
  //   cy.fixture('users.json').then((users) => {
  //     cy.get('#username').fill(users.email1)
  //     cy.get('#password').fill(users.password1)
  //     cy.get('#continue').click()
  //     cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
  //     cy.get('#main-content > div > div > form > fieldset > a').click()
  //     cy.get('#species').click()
  //     cy.get('#continue').click()
  //     cy.get('#yes-no-2').click()
  //     cy.get('#continue').click()
  //     cy.get('#yes-no').click()
  //     cy.get('#continue').click()
  //     cy.get('#yes-no').click()
  //     cy.get('#continue').click()
  //     cy.get('#yes-no').click()
  //     cy.get('#continue').click()
  //     cy.get('#continue').click()
  //     cy.get('#continue').click()
  //     cy.get('a[href*="/upload"]').click()
  //     const toolargeFixturePath = 'largefolder.zip'
  //     cy.get('#scan-file').click()
  //     cy.get('#scan-file').attachFile(toolargeFixturePath)
  //     cy.get('#continue').click()
  //     cy.get('#main-content').contains("Supporting information")
  //   })
  // })

  it('Verify CD5 - Landowner copy-deck', () => {
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
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a[href*="/upload"]').click()
      const xmlFixturePath = 'magic_polygons.xml' 
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(xmlFixturePath)
      cy.get('#continue').click()
      cy.get('#main-content').contains("The selected file must be a JPG, BMP, PNG, TIF, KML, Shape, DOC, DOCX, ODT, XLS, XLSX, GeoJSON, ODS, PDF or ZIP.")
    })
  })
it('Verify CD6 - Landowner copy-deck', () => {
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
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
   cy.get('a[href*="/upload"]').click()
    const yourFixturePath = 'virus.pdf'
    const CpgFixturePath = 'magic_polygons.cpg'
    const dbfFixturePath = 'magic_polygons.dbf'
    const prjFixturePath = 'magic_polygons.prj' 
    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(CpgFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check').click()
    cy.get('#continue').click()
    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(dbfFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check').click()
    cy.get('#continue').click()
    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(prjFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check').click()
    cy.get('#continue').click()

    cy.get('#scan-file').attachFile(yourFixturePath)
    
    cy.fixture('uploadWorkSchedule-copydeck.json').then(
      (uploadWorkSchedule) => {
        cy.get('#continue').click()
        cy.get('#main-content > div.govuk-error-summary > div > ul').contains(
          uploadWorkSchedule.errorSummary
        )
      }
    )
  })
})

it('Verify CD7 - multi-file upload Landowner copy-deck', () => {
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
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('a[href*="/upload"]').click()
    const yourFixturePath = 'virusfile.pdf'
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj' 
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(CpgFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(prjFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
      cy.get('#continue').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
    cy.get('#scan-file').attachFile(yourFixturePath)
    cy.wait(2000)
    cy.fixture('uploadWorkSchedule-copydeck.json').then(
      (uploadWorkSchedule) => {
        cy.get('#continue').click()
        cy.get("#another-file-check").click()
        cy.get('#continue').click()
        cy.get('#scan-file').attachFile(yourFixturePath)
        cy.get('#continue').click()
        cy.get("main[id*='main-']").contains('Uploaded file 2')
        cy.get('#main-content').contains(uploadWorkSchedule.siteInfoText)
        cy.get('#continue').click()
      }
    )
  })

  it('Verify CD8- no additional upload Landowner copy-deck', () => {
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
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('a[href*="/upload"]').click()
      const yourFixturePath = 'virusfile.pdf'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.fixture('uploadWorkSchedule-copydeck.json').then(
        (uploadWorkSchedule) => {
          cy.get("main[id*='main-']").contains('Uploaded file 1')
          cy.get('#main-content').contains(uploadWorkSchedule.siteInfoText)
          cy.get("#another-file-check-2").click()
          cy.get('#continue').click()
        }
      )
    })
  })
})
})
