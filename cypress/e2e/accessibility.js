const faker = require('faker')

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe('Page title verification', () => {
  it('SDDSIP-509 and verify Licence application screen', () => {
    cy.request(
      "/reset?username=user1@email.com"
    );
    cy.visit(Cypress.env("baseUrl") + Cypress.env("login"));
    cy.injectAxe()
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email3);
      cy.get("#password").fill(users.password2);
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("a").contains("Give licence holder details").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
    //   cy.injectAxe()
    //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#name").fill(
        faker.name.firstName() + " " + faker.name.lastName()
      );
      cy.get("#continue").click();
    //   cy.injectAxe()
    //   cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").fill(faker.company.bs());
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   Give ecologist details
      cy.get("a").contains("Give ecologist details").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").fill(faker.company.bs());
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#change-email").click();
      cy.get("#continue").click();
      // cy.get("#continue").click();

      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#name").fill(
        faker.name.firstName() + " " + faker.name.lastName()
      );
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      //   Add additional contacts
      cy.get("a").contains("Add alternative contacts").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#name").fill(
        faker.name.firstName() + " " + faker.name.lastName()
      );
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#email-address").clear();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("#continue").click();
      cy.injectAxe()
      cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
      cy.get("a").contains("Add invoice details").click();
      cy.get("input[value='other']").click();
      cy.get("#continue").click();
      cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").fill(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "12, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get('#purchase-order').fill(faker.internet.email())
      cy.get('#continue').click()
      cy.get("#continue").click();
      // work activity
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#work-payment-exempt-reason-8").click();
      cy.get("#exempt-details").fill(faker.random.alphaNumeric(400));
      cy.get("#continue").click();
      cy.get("#work-category-13").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)").contains(
        "Give work activity details"
      );
      cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)").contains(
        "COMPLETED"
      );
      cy.get("a").contains("Give details of conservation issues").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#site-name").fill("a");
      cy.get("#site-name__option--0").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#permission-details").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      //   cy.get("#advice-from-who").fill(
      //     faker.name.firstName() + faker.name.lastName()
      //   );
      cy.get("#advice-from-who").fill(faker.random.alphaNumeric(40));
      cy.get("#advice-description").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#proximity").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      // cy.get("#continue").click();
// permisssion details
cy.get("a").contains("Give details of permissions to start work").click();
cy.get("#continue").click();
cy.get("#continue").click();
cy.get("#consent-type-check").click(); 
cy.get("#continue").click();
cy.get("#authority-name").fill("a");
cy.get("#authority-name__option--0").click(); 
cy.get("#continue").click();
cy.get("#planning-type").click();
cy.get("#continue").click();
cy.get("#reference").fill(faker.name.firstName());
cy.get("#continue").click();
cy.get("#add-another-permission-2").click();
cy.get("#continue").click();
cy.get("#conditions-met-2").click();
cy.get("#continue").click();
cy.get("#conditions-not-met-reason").fill(faker.lorem.words(5));
cy.get("#continue").click();
cy.get("#potential-conflicts").click();
cy.get("#continue").click();
cy.get("#describe-potential-conflicts").fill(faker.lorem.words(4));
cy.get("#continue").click();
cy.get("#continue").click();
cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("COMPLETED");
cy.get("#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)").contains("Give details of permissions to start work");
  // site info
      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").fill(faker.random.alphaNumeric(100))
      cy.get("#continue").click();
     cy.get('#continue').click()
      cy.get('#site-postcode-check-2').click()
      cy.get('#continue').click()
      cy.get('#address-line-1').fill(faker.random.alpha(80))
      cy.get('#address-line-2').fill(faker.random.alpha(80))
      cy.get('#address-town').fill(faker.random.alpha(80))
      cy.get('#address-county').fill(faker.random.alpha(20))
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      const yourFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj'
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(dbfFixturePath)
      cy.get('#continue').click()
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(prjFixturePath)
      cy.get('#continue').click()

      //  cy.get('#continue').click()
      // cy.get('#scan-file').click()
      // const shpFixturePath = 'magic_polygons.shp'
      // const yourFixturePath = 'virusfile.pdf'
      // const shpxmlFixturePath = 'magic_polygons.shp.xml'
      // cy.get('#scan-file').attachFile(yourFixturePath)
      // cy.get('#continue').click()
      // cy.get('#scan-file').click()
      // cy.get('#scan-file').attachFile(shpFixturePath)
      // cy.get('#continue').click()
      // cy.get('#scan-file').click()
      // cy.get('#scan-file').attachFile(shpxmlFixturePath)
      // cy.get('#continue').click()
      // cy.get('#site-grid-ref').clear()
      // cy.get('#site-grid-ref').fill(
      //   'NY' + faker.datatype.number({ min: 100000 }).toString()
      // )
      // cy.get('#continue').click()
      // cy.get('#address-and-grid-reference-mismatch').click()
      // cy.get('#continue').click()
      cy.get('#site-grid-ref').clear()
      cy.get('#site-grid-ref').fill(
        'NY' + faker.datatype.number({ min: 100000 }).toString()
      )
      cy.get('#continue').click()
      cy.get('#address-and-grid-reference-mismatch-4').click()
      cy.get('#continue').click()
      cy.get("#continue").click();

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").fill(faker.random.alphaNumeric(20));
      cy.get("#continue").click();
      cy.get("#enter-methods").fill(faker.random.alphaNumeric(21));
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("#enter-class-mitigation-details").fill("BAD-2022-agsss1");
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get('a').contains('Upload supporting information').click()
      const yourFixturePath1 = 'virusfile.pdf'
      const yourFixturePath2 = 'Thirtysample.jpg'
      const yourFixturePath3 = 'OVERVIEW.jpg'
      cy.get('#scan-file').attachFile(yourFixturePath1)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
    cy.get('#continue').click()
      cy.get('#scan-file').attachFile(yourFixturePath2)
      cy.get('#continue').click()
      cy.get('#another-file-check').click()
    cy.get('#continue').click()
      cy.get('#scan-file').attachFile(yourFixturePath3)
      cy.fixture('uploadWorkSchedule-copydeck.json').then(
        (uploadWorkSchedule) => {
          cy.get("#continue").click();
          cy.get("main[id*='main-']").contains("Uploaded file 1");
          cy.get(".govuk-heading-l").contains(uploadWorkSchedule.siteInfoText);
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").fill(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types-3").click();
          cy.get("#continue").click();
          cy.get("input[value='true']").click();
          cy.get("#continue").click();
          cy.get("#habitat-entrances").fill("7");
          cy.get("#continue").click();
          cy.get("#habitat-active-entrances").fill("5");
          cy.get("#continue").click();
          cy.get("#habitat-grid-ref").clear();
          cy.get("#habitat-grid-ref").fill("NY123456");
          cy.get("#continue").click();
          cy.get("#habitat-work-start-day").fill("1");
          cy.get("#habitat-work-start-month").fill("11");
          cy.get("#habitat-work-start-year").fill("2024");
          cy.get("#continue").click();
          cy.get("#habitat-work-end-day").fill("30");
          cy.get("#habitat-work-end-month").fill("11");
          cy.get("#habitat-work-end-year").fill("2024");
          cy.get("#continue").click();
          cy.get("#habitat-activities").click();
          cy.get("#continue").click();
          cy.get("input[value='no']").click();
          cy.get("#continue").click();
          cy.get("a").contains("Declare convictions").click();
          cy.get("#convictions-check-2").click();
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Agree to terms and send application").click();
          cy.get("#main-content > div > div > form > fieldset").contains(
            users.text18
          )
         cy.get("#main-content > div > div > form > fieldset").contains(
            "By sending the application you agree that you have given complete and correct information."
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "will uphold any conditions applied to my licence if granted"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "will abide by the terms and conditions of this service"
          );
            cy.get("#main-content > div > div > form > fieldset").contains(
            "will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "By sending the application you confirm that:"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "an appropriate ecologist has been involved in the application and design of any mitigations"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "the ecologist supports the application"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action"
          );
          cy.get("#main-content > div > div > form > fieldset").contains(
            "you will pay any charges that apply"
          );
          cy.get('#continue').click()
          cy.get('#continue').click()
          const ls = cy.get('a').contains('Badger mitigation').first()
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
