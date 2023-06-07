const faker = require('faker')

describe('Site Information', () => {
  it(' 1 Verify happy path - site information and selected all answers are correct', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill(faker.name.firstName())
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('M24 6dh')
      cy.get('#continue').click()
      cy.get('#siteAddress').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const yourFixturePath = 'virusfile.pdf'
      const sbnFixturePath = 'magic_polygons.sbn'

      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(sbnFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
      ).click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
      ).click()
      cy.get('#site-name').fill(faker.name.firstName())
      cy.get('#continue').click()

      // cy.get("#address-line-1").fill("3");
      // cy.get("#address-line-2").fill("man");
      // cy.get("#address-town").fill("manchester");
      // cy.get("#address-county").fill("Manchester");
      cy.get('#continue').click()
      cy.get('#siteAddress').select(
        '10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#continue').click()
      // cy.scrollTo(0, 1000)
      cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)').contains('COMPLETED')
      cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)').contains('Give site information')
    })
  })
  it(' 2 Verify happy path - site information', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('M24 6dh')
      cy.get('#continue').click()
      cy.get('#siteAddress').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const yourFixturePath = 'virusfile.pdf'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').fill('NY395557')
      cy.get('#continue').click()
      cy.get('#address-and-grid-reference-mismatch').click()
      cy.get('#continue').click()
      cy.get('#site-postcode').clear()
      cy.get('#site-postcode').fill('M9 7bq')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, OSTERLEY ROAD, MANCHESTER, M9 7BQ')
      cy.get('#continue').click()
      cy.get('#scan-file').click()

      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
      ).click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it(' 3 Verify happy path - site information', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('M24 6dh')
      cy.get('#continue').click()
      cy.get('#siteAddress').select(
        '1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH'
      )
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const yourFixturePath = 'virusfile.pdf'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get('#address-and-grid-reference-mismatch-2').click()
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get("input[value='correct']").click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })

  it(' 4 Verify happy path - site information and selected all answers are correct', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check-2').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const yourFixturePath = 'virusfile.pdf'
      const sbxFixturePath = 'magic_polygons.sbx'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(sbxFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
      ).click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
      ).click()
      cy.get('#site-name').fill('test2')
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      cy.get('#continue').click()

      // cy.get("#siteAddress").select(
      //   "10, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      // );
      // cy.get("#continue").click();

      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it('5 Verify happy path - site information', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check-2').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const yourFixturePath = 'virusfile.pdf'
      const typewritterFixturePath = 'typewriter.jpg'
      const shpxmlFixturePath = 'magic_polygons.shp.xml'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(typewritterFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpxmlFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get('#address-and-grid-reference-mismatch').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill('33')
      cy.get('#address-line-2').fill('mantest')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(typewritterFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpxmlFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
      ).click()
      cy.get('#continue').click()

      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it(' 6 Verify happy path - site information', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check-2').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill('3')
      cy.get('#address-line-2').fill('man')
      cy.get('#address-town').fill('manchester')
      cy.get('#address-county').fill('Manchester')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const shpFixturePath = 'magic_polygons.shp'
      const yourFixturePath = 'virusfile.pdf'
      const shpxmlFixturePath = 'magic_polygons.shp.xml'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpxmlFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get('#address-and-grid-reference-mismatch').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').clear()
      cy.get('#address-line-1').fill('4')
      cy.get('#address-line-2').clear()
      cy.get('#address-line-2').fill('manchester')
      cy.get('#address-town').clear()
      cy.get('#address-town').fill('manchestertown')
      cy.get('#address-county').clear()
      cy.get('#address-county').fill('Manchester')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(shpxmlFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get("input[value='correct']").click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it(' 7a Verify happy path - site information - close proximity', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const emptyFixturePath = 'magic_polygons.shp'

      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      cy.get('#scan-file').attachFile(emptyFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(prjFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get("input[value='correct']").click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it(' 7b Verify happy path - site information - close proximity', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const CpgFixturePath = 'magic_polygons.cpg'
      const sbnFixturePath = 'magic_polygons.sbn'
      const sbxFixturePath = 'magic_polygons.sbx'
      cy.get('#scan-file').attachFile(CpgFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(sbnFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(sbxFixturePath)
      cy.get('#continue').click()
      // cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get("input[value='correct']").click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it(' 7c Verify happy path - site information - close proximity', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      cy.get('#continue').click()
      
      const untitledFolderPath = 'untitled folder.zip'
      const virusFixturePath = 'virus.doc'
      const viruspdfFixturePath = 'virus.pdf'
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(untitledFolderPath)
      cy.get('#continue').click()
      cy.get("#main-content").contains('The selected file contains a virus. Upload a different file.')
      cy.get('#scan-file').attachFile(viruspdfFixturePath)
      cy.get('#continue').click()
      cy.get("#main-content").contains('The selected file contains a virus. Upload a different file.')
      cy.get('#scan-file').attachFile(virusFixturePath)
      cy.get('#continue').click()
      cy.get("#main-content").contains('The selected file must be a JPG, PNG, KML, Shape, GeoJSON, PDF or ZIP.')
    
    })
  })
  it(' 7d Verify happy path - site information - close proximity', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      cy.get('#continue').click()
      // cy.get('#scan-file').click()
      const overviewFixturePath = 'OVERVIEW.jpg'
      const typewritterFixturePath = 'typewriter.jpg'
      const dbfFixturePath = 'magic_polygons.cpg'
       cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(overviewFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(typewritterFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get("input[value='correct']").click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
    
    })
  })
  it(' 7e Verify happy path - site information - close proximity', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      cy.get('#continue').click()
     
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj' 
     



      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(CpgFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(prjFixturePath)
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get("input[value='correct']").click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('COMPLETED')
      cy.get(
        '#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)'
      ).contains('Give site information')
    })
  })
  it(' 7f Verify happy path - site information - close proximity', () => {
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
      cy.get('a').contains('Give site information').click()
      cy.get('#site-name').fill('test')
      cy.get('#continue').click()
      cy.get('#site-postcode-check').click()
      cy.get('#site-postcode').fill('B38 9SH')
      cy.get('#continue').click()
      cy.get('#siteAddress').select('2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH')
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const Geojson = 'GeoJSON.GeoJSON'
      const kml = 'filee.KML'
      const shpFixturePath = 'magic_polygons.shp'
      cy.get('#scan-file').attachFile(Geojson)
      cy.get('#scan-file').click()
      cy.get('#continue').click()
      cy.get('#scan-file').attachFile(kml)
      cy.get('#scan-file').click()
      cy.get('#continue').click()
      cy.get('#scan-file').attachFile(shpFixturePath)
      cy.get('#scan-file').click()
      cy.get('#continue').click()
    //  cy.get('#site-grid-ref').fill('SP039775')
      cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > div > fieldset > div > div:nth-child(4) > label'
      ).click()
      cy.get('#continue').click()
      cy.get(
        '#main-content > div > div > form > fieldset > dl > div:nth-child(1) > dd.govuk-summary-list__actions > a'
      ).click()
      cy.get('#site-name').fill(faker.name.firstName())
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#siteAddress').select(
        '2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH'
      )
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)').contains('COMPLETED')
      cy.get('#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(7)').contains('Give site information')
    
    })
  })
})
