// /**
//  * This spec needs to run first to make sure the user is logged in before accessing
//  * the normal flow of the application. Renaming the file to '01_[filename]' does the trick :).
//  */
//  describe('Google Login', () => {
//   /**
//    * 2nd param replaces the global config (cypress.dev.json) only in the scope of the current .spec.
//    * Similar to: Cypress.config('baseUrl', 'https://accounts.google.com');
//    */
//   it('should input email and password', {  }, function() {
//         // Handling all errors and 'skipping' test to avoid global failure.
//         cy.on('uncaught:exception', (err, runnable) => {
//           console.error('Google Login -> uncaught:exception', err);
//           // Skip test from https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/fundamentals__errors
//           return false;
//         });

//         cy.visit('https://accounts.google.com/v3/signin/identifier?ifkv=ASKXGp0mrpCjV2QfgWA3BzuJ0qcqL23w3lLBrodl-d0dJ3VPwfG7Fr-E88GY_0GiKw8tdQlz-TRWiQ&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1022738322%3A1707323077604290&theme=glif');
//         // cy.get('//*[text()="SIGN IN TO GMAIL"]').click();

//         cy.wait(3000);

//         // Google Login Redirection: Email Input
//         cy.url().should('contain', 'accounts.google.com')
//           .get('input[type="email"]').type('tauto0606@gmail.com')
//           .type('{enter}').wait(3000);

//         // Google Login Redirection: Password Input
//         cy.url().should('contain', 'accounts.google.com')
//           .get('input[type="password"]').type('Testtest1@')
//           .type('{enter}').wait(5000);
//           // cy.get("#hcfe-content > section > div > div.main-content > article > section > div > div.article-content-container > div > p:nth-child(5) > a").click();
//       });
// });


// // describe('Gmail Automation with Cypress', () => {
// //   beforeEach(() => {
// //     cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKXGp0fo11vM_ee4FgfVZItfrePZP9VfBtpEPoGYBP31xhHUjmV036bTdxDDj3f48Wo9zc7-u7HGw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-99891011%3A1707320418486389&theme=glif');
// //   });

// //   it('Logs in to Gmail account', () => {
// //           // cy.url().should('contain', '')
// //           //   .get('body > header > div > div > div > a.button.button--medium.button--mobile-before-hero-only').click();

// //           cy.get('input[type="email"]').type('tauto0606@gmail.com')
// //             .type('{enter}')
// // cy.wait(500);
// //           // Google Login Redirection: Password Input
          
// //          // cy.get('input[type="password"]').trigger('mousedown').type('Testtest1@').type('{enter}')
// //           cy.get('input[type="password"]').focus().type('Testtest1').type('{enter}');
// //     cy.get('.Wixet').should('be.visible');
// //   });

//   // it('Sends an email', () => {
//   //   cy.get('[role="button"][aria-label="Compose"]').click();
//   //   cy.get('textarea[name="to"]').type('recipient_email@gmail.com');
//   //   cy.get('input[name="subjectbox"]').type('Test email from Cypress');
//   //   cy.get('.Am.Al.editable.LW-avf').type('This is a test email sent from Cypress.');
//   //   cy.get('[aria-label="Send ‪(Ctrl-Enter)‬"]').click();
//   //   cy.get('.bAq').should('contain', 'Your message has been sent.');
//   // });

//   // it('Checks the sent email', () => {
//   //   cy.get('a[title="Sent Mail"]').click();
//   //   cy.get('.yO').should('contain', 'Test email from Cypress');
//   // });
// // });
