const faker = require('faker')

describe('Returns', () => {
    it('Return TS ID 1.3- No short path 1', () => {
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email1)
        cy.get('#password').fill(users.password1)
        cy.get('#continue').click()
        cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
        // cy.get("//*[@class='govuk-table__row']").last.click();
        cy.get("#main-content > fieldset > table").find("tr").then((row) => {
      //row.length will give you the row count
      cy.log(row.length);
      
 
        // cy.get('tbody>tr').find(href).last.click()
        // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
        // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
       cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
      cy.get('#email-or-return-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#why-nil').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#submit-return').click()
      cy.get('#continue').click()
      cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
      cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
      cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
      cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
      cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
      cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
  });
});
});
    it('Return TS ID 1.4 - No short path 1', () => {
      cy.visit(Cypress.env('login'))
      cy.fixture('users.json').then((users) => {
        cy.get('#username').fill(users.email1)
        cy.get('#password').fill(users.password1)
        cy.get('#continue').click()
        cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
        // cy.get("//*[@class='govuk-table__row']").last.click();
        cy.get("#main-content > fieldset > table").find("tr").then((row) => {
      //row.length will give you the row count
      cy.log(row.length);
      
 
        // cy.get('tbody>tr').find(href).last.click()
        // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
        // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
       cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
      cy.get('#email-or-return-2').click()
      cy.get('#continue').click()
      cy.get('#yes-no-2').click()
      cy.get('#continue').click()
      cy.get('#why-nil').click()
      cy.get('#continue').click()
      cy.get('#yes-no').click()
      cy.get('#continue').click()
      cy.get('#continue').click()
      cy.get('#submit-return').click()
      cy.get('#continue').click()
      cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
      cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
      cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
      cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
      cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
      cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
  });
});
});
it('Return TS ID 1.7 - No short path 2', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    //row.length will give you the row count
    cy.log(row.length);
    

      // cy.get('tbody>tr').find(href).last.click()
      // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
      // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#why-nil-3').click()
    cy.get('#other-details').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});

it('Return TS ID 1.8 - No short path 2', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    //row.length will give you the row count
    cy.log(row.length);
    

      // cy.get('tbody>tr').find(href).last.click()
      // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
      // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#why-nil-3').click()
    cy.get('#other-details').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});
it('Return TS ID 1.6 - No short path 3', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    //row.length will give you the row count
    cy.log(row.length);
    

      // cy.get('tbody>tr').find(href).last.click()
      // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
      // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#why-nil-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});

it('Return TS ID 1.5- No short path 3', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    //row.length will give you the row count
    cy.log(row.length);
    

      // cy.get('tbody>tr').find(href).last.click()
      // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
      // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#why-nil-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});
it('Return - No short path 4', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      // cy.get("//*[@class='govuk-table__row']").last.click();
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    //row.length will give you the row count
    cy.log(row.length);
    

      // cy.get('tbody>tr').find(href).last.click()
      // cy.contains('2022-501800-A24-BAD-LIC').parents('tr').find('link').click()
      // cy.get('#main-content').contains('Badger mitigation 2022-501800-A24-BAD-LIC').click()
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#why-nil-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#submit-return').click()
    cy.get('#continue').click()
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});
it('Return - Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get('#create-artificial-sett-check').click()
    cy.get('#continue').click()
    cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#artificial-sett-grid-reference').fill('NY395557')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()

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

    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(bmpFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check-2').click()
    cy.get('#continue').click()

    cy.get('#continue').click()
   
    cy.get('#submit-return').click()
    cy.get('#continue').click()
   
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});

it('Return TS ID 1.0 - Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get('#create-artificial-sett-check').click()
    cy.get('#continue').click()
    cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#artificial-sett-grid-reference').fill('NY395557')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
cy.get('#continue').click()
cy.get('#continue').click()
cy.get('#submit-return').click()
cy.get('#continue').click()
});
});
});

it('Return TS ID 1.2- Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
cy.fixture('users.json').then((users) => {
  cy.get('#username').fill(users.email1)
  cy.get('#password').fill(users.password1)
  cy.get('#continue').click()
  cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
  cy.get("#main-content > fieldset > table").find("tr").then((row) => {
cy.log(row.length);
 cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
cy.get('#email-or-return-2').click()
cy.get('#continue').click()
cy.get('#yes-no').click()
cy.get('#continue').click()
cy.get('#outcome-check-2').click()
cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get('#create-artificial-sett-check').click()
    cy.get('#continue').click()
    cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#artificial-sett-grid-reference').fill('NY395557')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no-2').click()
cy.get('#continue').click()
cy.get('#continue').click()
cy.get('#submit-return').click()
cy.get('#continue').click()
});
});
});
it('Return - Yes short path 6', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check-2').click()
    cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
        cy.get('#yes-no').click()
        cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
        cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
        cy.get('#continue').click()
        // cy.get('#yes-no').click()
        // cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
        cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
        cy.get('#continue').click()
    
        cy.get("#destroy-date-day").fill('30')
        cy.get("#destroy-date-month").fill('11')
        cy.get("#destroy-date-year").fill('2022')
        cy.get('#continue').click()
        cy.get('#yes-no').click()
        cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
        cy.get('#continue').click()
    
    cy.get('#create-artificial-sett-check').click()
    cy.get('#continue').click()
    cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#artificial-sett-grid-reference').fill('NY395557')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()

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

    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(bmpFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check-2').click()
    cy.get('#continue').click()

    cy.get('#continue').click()
   
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});
it('Return TS ID 1.13 - Yes short path 7', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check-2').click()
    cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get('#create-artificial-sett-check-2').click()
    cy.get('#continue').click()
    cy.get('#why-no-artificial-sett-check').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()

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

    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(bmpFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check-2').click()
    cy.get('#continue').click()

    cy.get('#continue').click()
   
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});
it('Return TS ID 1.12 - Yes short path 7', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check-2').click()
    cy.get('#no-outcome').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get('#create-artificial-sett-check-2').click()
    cy.get('#continue').click()
    cy.get('#why-no-artificial-sett-check-2').click()
    cy.get('#why-sett-not-made').fill(faker.random.alphaNumeric(4000)) 
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()

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

    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(bmpFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check-2').click()
    cy.get('#continue').click()

    cy.get('#continue').click()
   
    cy.get('#submit-return-2').click()
    cy.get('#continue').click()
    
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});

it('Return TS ID 1.9- Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
cy.get('#create-artificial-sett-check-2').click()
cy.get('#continue').click()
cy.get('#why-no-artificial-sett-check-2').click()
cy.get('#why-sett-not-made').fill(faker.random.alphaNumeric(4000)) 
cy.get('#continue').click()
cy.get('#yes-no').click()
cy.get('#continue').click()
cy.get('#yes-no').click()
cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
cy.get('#continue').click()
cy.get('#yes-no-2').click()
cy.get('#continue').click()
cy.get('#continue').click()
cy.get('#submit-return-2').click()
cy.get('#continue').click()
});
});
});
it('Return TS ID 1.10- Yes short path 5', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#outcome-check').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#why-nil-2').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
cy.get('#create-artificial-sett-check-2').click()
cy.get('#continue').click()
cy.get('#why-no-artificial-sett-check').click()
cy.get('#continue').click()
cy.get('#yes-no').click()
cy.get('#continue').click()
cy.get('#yes-no').click()
cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
cy.get('#continue').click()
cy.get('#yes-no-2').click()
cy.get('#continue').click()
cy.get('#continue').click()
cy.get('#submit-return').click()
cy.get('#continue').click()
});
});
});
it('Return - Yes Negative test 1', () => {
    cy.visit(Cypress.env('login'))
    cy.fixture('users.json').then((users) => {
      cy.get('#username').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.get('h1.govuk-fieldset__heading').contains(users.nextpage)
      cy.get("#main-content > fieldset > table").find("tr").then((row) => {
    cy.log(row.length);
     cy.get("#main-content > fieldset > table > tbody > tr:nth-child(" + (row.length - 4) + ") > th > p > a").click()
     cy.get('#continue').click()
     cy.get('#main-content').contains('You have not selected an option')
     cy.get('#main-content').contains('Select an option')
    cy.get('#email-or-return-2').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#outcome-check').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no').click()
    cy.get('#continue').click()

    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described why you did not do this licensed activity')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described the work that was done')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described why you did not do this licensed activity')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described the work that was done')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described why you did not do this licensed activity')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described the work that was done')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()

    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described why you did not do this licensed activity')
    cy.get('#main-content').contains('Enter a description')
    // cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described the work that was done')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not entered the date you destroyed the vacant sett')
    cy.get('#main-content').contains('Enter the date you destroyed the vacant sett')
    // cy.get('#yes-no').click()
    // cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    // cy.get('#continue').click()

    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not entered the date you destroyed the vacant sett')
    cy.get('#main-content').contains('Enter the date you destroyed the vacant sett')

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not entered the date you destroyed the vacant sett')
    cy.get('#main-content').contains('Enter the date you destroyed the vacant sett')

    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not entered the date you destroyed the vacant sett')
    cy.get('#main-content').contains('Enter the date you destroyed the vacant sett')
//bug
    // cy.get("#destroy-date-day").fill('30')
    // cy.get("#destroy-date-month").fill('11')
    // cy.get("#destroy-date-year").fill('2026')
    // cy.get('#continue').click()
    // cy.get('#main-content').contains('The date must be in the past')
    // cy.get('#main-content').contains('Enter a date that is in the past')
    
    cy.get("#destroy-date-day").fill('30')
    cy.get("#destroy-date-month").fill('11')
    cy.get("#destroy-date-year").fill('2022')
    cy.get('#continue').click()

    cy.get('#continue').click()

    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')

    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    // cy.get('#create-artificial-sett-check').click()
    // cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described the evidence you have that badgers were disturbed')
    cy.get('#main-content').contains('Enter a description')
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    //cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#create-artificial-sett-check').click()
    cy.get('#continue').click()
    cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
   // cy.get('#create-artificial-sett-check').click()

    // cy.get('#describe-artificial-sett').fill(faker.random.alphaNumeric(4000))
    // cy.get('#continue').click()

    cy.get('#main-content').contains('You have not entered evidence that badgers found the artificial sett')
    cy.get('#main-content').contains('Enter evidence that badgers found the artificial sett')
    // cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    // cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#located-artificial-sett').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not entered a grid reference')
    cy.get('#main-content').contains('Enter a national grid reference that is 2 letters and 6 digits')
    cy.get('#artificial-sett-grid-reference').fill('NY3955')
    cy.get('#main-content').contains('You have not entered a grid reference')
    cy.get('#main-content').contains('Enter a national grid reference that is 2 letters and 6 digits')
    cy.get('#artificial-sett-grid-reference').fill('NY395557')
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no-2').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described why were you not able to comply with the conditions')
    // bugcy.get('#main-content').contains('Describe why were you not able to comply with the conditions')
    cy.get('#continue').click()
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not described the welfare concerns')
    cy.get('#main-content').contains('Describe the welfare concerns')
    cy.get('#yes-conditional-input').fill(faker.random.alphaNumeric(4000))
    cy.get('#continue').click()
   // cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#yes-no').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected a file to upload.')
    cy.get('#main-content').contains(' Select a file to upload.')
    // cy.get('#yes-no').click()
    // cy.get('#continue').click()
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
    cy.get('#continue').click()
    // cy.get('#main-content').contains('You must choose a file to upload.')
    // cy.get('#main-content').contains('Upload a different file.')
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

    cy.get('#scan-file').click()
    cy.get('#scan-file').attachFile(bmpFixturePath)
    cy.get('#continue').click()
    cy.get('#another-file-check-2').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#continue').click()
    cy.get('#main-content').contains('You have not selected an option')
    cy.get('#main-content').contains('Select an option')
    cy.get('#submit-return').click()
    cy.get('#continue').click()
   
    cy.get('#main-content > div > div > form > fieldset').contains('Report of action sent')
    cy.get('#main-content > div > div > form > fieldset').contains('our reference number')
    cy.get('#main-content > div > div > form > fieldset').contains('2022-501600-A24-BAD-LIC-ROA')
    cy.get('#main-content > div > div > form > fieldset').contains('What happens next')
    cy.get('#main-content > div > div > form > fieldset').contains('Natural England will review your report of action.')
    cy.get('#main-content > div > div > form > fieldset').contains('View licences and applications')
});
});
});
});