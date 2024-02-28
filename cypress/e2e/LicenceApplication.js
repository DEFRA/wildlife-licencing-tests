const faker = require("faker");

/**
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Function Testing
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 */

describe("Page title verification", () => {
  it("SDDSIP-509 and 1 verify Licence application screen", () => {
    cy.visit("/");
    cy.fixture('users.json').then((users) => {
      cy.get('#user_id').fill(users.email1)
      cy.get('#password').fill(users.password1)
      cy.get('#continue').click()
      cy.origin('https://new-tst.aws.defra.cloud', () => {
cy.on('uncaught:exception', (e) => {
if (e.message.includes('Things went bad')) {
// we expected this error, so let's ignore it
// and let the test continue
return false
}
})
})
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get('#user-role-2').click()
      cy.get('#continue').click()
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("a").contains("Give licence holder details").click();
      cy.get('#continue').click()
      // cy.get('#yes-no').click()
      // cy.get('#continue').click()
      cy.get('#phone-number').fill(faker.phone.phoneNumber())
      cy.get('#continue').click()
      // cy.get("#yes-no").click();
      // cy.get("#continue").click();
      // cy.get("input[value='new']").click();
      // cy.get("#continue").click();
      // cy.get("#is-organisation").click();
      // cy.get("#organisation-name").fill(faker.company.bs());
      // cy.get("#continue").click();
      // cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      //   Give ecologist details
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#name").fill(
        faker.name.firstName() + " " + faker.name.lastName()
      );
      cy.get("#continue").click();
      // cy.get('#yes-no').click() // existing
      //cy.get("#is-organisation").click(); //new
      cy.get("#is-organisation-2").click();  //new
      cy.get("#continue").click();
     // cy.get("#account").click();
     cy.get("#email-address").fill(faker.internet.email()); //new
      cy.get("#continue").click();  //new
      cy.get("#continue").click();
      // cy.get("#change-email").click();
      // cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
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
      cy.get("#work-category").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("Give work activity details");
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
      // conser
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
      cy.get("#advice-from-who").fill(faker.random.alphaNumeric(100));
      cy.get("#advice-description").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#proximity").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();

      // Permission
       cy.get("a").contains("Give details of permissions to start work").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#consent-type-check").click();
      cy.get("#continue").click();
      cy.get("#authority-name").fill("a");
      cy.get("#authority-name__option--0").click();
      cy.get("#continue").click();
      cy.get("#planning-type-4").click();
      cy.get("#continue").click();
       cy.get("#other-description").fill(faker.random.alphaNumeric(100))
      cy.get("#continue").click();
      cy.get("#reference").fill('text');
      cy.get("#continue").click();
      cy.get("#add-another-permission-2").click();
      cy.get("#continue").click();
      cy.get("#conditions-met").click();
      cy.get("#continue").click();
      cy.get("#potential-conflicts-2").click()
      cy.get("#continue").click();
      cy.get('#continue').click()
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
      ).contains("COMPLETED");
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
      ).contains("Give details of permissions to start work");

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").fill(
        faker.name.firstName() + " " + faker.name.lastName()
      );
      cy.get("#continue").click();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();

      //   Add additional contacts
      cy.get("a").contains("Add alternative contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Add invoice details").click();
      cy.get("input[value='other']").click();
      cy.get("#continue").click();
      cy.get("#new").click();
      cy.get("#continue").click();
      cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email-3").click();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#purchase-order").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").fill(faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#site-postcode-check").click();
      cy.get("#site-postcode").fill("B38 9SH");
      cy.get("#continue").click();
      cy.get("#siteAddress").select("2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const Geojson = "GeoJSON.GeoJSON";
      const kml = "filee.KML";
      const ShpFixturePath = "magic_polygons.shp";
      cy.get("#scan-file").attachFile(Geojson);
      cy.get("#scan-file").click();
      cy.get("#continue").click();
      cy.get("#scan-file").attachFile(kml);
      cy.get("#scan-file").click();
      cy.get("#continue").click();
      cy.get("#scan-file").attachFile(ShpFixturePath);
      cy.get("#scan-file").click();
      cy.get("#continue").click();
      //  cy.get('#site-grid-ref').fill('SP039775')
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").fill(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("input[value='correct']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#enter-methods").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get("#enter-class-mitigation-details").fill("BAD-2022-agsss1");
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Upload supporting information").click();
      const yourFixturePath = 'virusfile.pdf'
      const CpgFixturePath = 'magic_polygons.cpg'
      const dbfFixturePath = 'magic_polygons.dbf'
      const prjFixturePath = 'magic_polygons.prj' 
      const sbnFixturePath = 'magic_polygons.sbn'
      const sbxFixturePath = 'magic_polygons.sbx'
      const shpFixturePath = 'magic_polygons.shp' 
      const shxFixturePath = 'magic_polygons.shx' 
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
      cy.get('#scan-file').attachFile(sbxFixturePath)
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
      
      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(yourFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check-2').click()
      cy.get('#continue').click()

          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").fill(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types-4").click();
          cy.get("#continue").click();
          cy.get("input[value='true']").click();
          cy.get("#continue").click();
          cy.get("#habitat-entrances").fill("100");
          cy.get("#continue").click();
          cy.get("#habitat-active-entrances").fill("100");
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
          cy.get("#convictions-check").click();
          cy.get("#continue").click();
          cy.get("#conviction-details").fill(faker.random.alphaNumeric(100));
          cy.get("#continue").click();
          cy.get("#continue").click();
          cy.get("a").contains("Agree to terms and send application").click();
          cy.get("#main-content > div > div > form > fieldset").contains(
            users.text18
          );
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
          cy.get("#continue").click();
          cy.get("#continue").click();
          const ls = cy.get("a").contains("Badger mitigation").first();
          ls.click();
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "SUBMITTED"
          );
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Badger mitigation"
          );
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Site"
          );
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Applicant"
          );

          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Application reference"
          );
          // const text1 = cy.get("#main-content > div > div > form > fieldset > dl").text();
          // expect(text).include(text1);
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Submitted"
          );
        }
      );
    });
    it("SDDSIP-509 and 2 verify Licence application screen", () => {
      cy.visit("/");
      cy.fixture('users.json').then((users) => {
        cy.get('#user_id').fill(users.email1)
        cy.get('#password').fill(users.password1)
        cy.get('#continue').click()
        cy.origin('https://new-tst.aws.defra.cloud', () => {
  cy.on('uncaught:exception', (e) => {
  if (e.message.includes('Things went bad')) {
  // we expected this error, so let's ignore it
  // and let the test continue
  return false
  }
  })
  })
        cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
        cy.get("#main-content > div > div > form > fieldset > a").click();
        cy.get("#species").click();
        cy.get("#continue").click();
        cy.get("#yes-no-2").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get('#user-role-2').click()
        cy.get('#continue').click()
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("a").contains("Give licence holder details").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("input[value='new']").click();
        cy.get("#continue").click();
        cy.get("#is-organisation").click();
        cy.get("#organisation-name").fill(faker.company.bs());
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("#postcode").fill("M24 6DH");
        cy.get("#continue").click();
        cy.get("#address").select(
          "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
        );
        cy.get("#continue").click();
        cy.get("#continue").click();
        //   Give ecologist details
        cy.get("a").contains("Give ecologist details").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#account").click();
        cy.get("#continue").click();
        cy.get("#change-email").click();
        cy.get("#continue").click();
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
        cy.get("#work-category").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get(
          "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
        ).contains("Give work activity details");
        cy.get(
          "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
        ).contains("COMPLETED");
        // conser
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
        cy.get("#advice-from-who").fill(faker.random.alphaNumeric(100));
        cy.get("#advice-description").fill(faker.random.alphaNumeric(40));
        cy.get("#continue").click();
        cy.get("#proximity").click();
        cy.get("#continue").click();
        cy.get("#yes-no-2").click();
        cy.get("#continue").click();
  
        // Permission
         cy.get("a").contains("Give details of permissions to start work").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
        cy.get("#consent-type-check").click();
        cy.get("#continue").click();
        cy.get("#authority-name").fill("a");
        cy.get("#authority-name__option--0").click();
        cy.get("#continue").click();
        cy.get("#planning-type-4").click();
        cy.get("#continue").click();
         cy.get("#other-description").fill(faker.random.alphaNumeric(100))
        cy.get("#continue").click();
        cy.get("#reference").fill('text');
        cy.get("#continue").click();
        cy.get("#add-another-permission-2").click();
        cy.get("#continue").click();
        cy.get("#conditions-met").click();
        cy.get("#continue").click();
        cy.get("#potential-conflicts-2").click()
        cy.get("#continue").click();
        cy.get('#continue').click()
        cy.get(
          "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
        ).contains("COMPLETED");
        cy.get(
          "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(3)"
        ).contains("Give details of permissions to start work");
  
        // Authorised person
        cy.get("a").contains("Add authorised people").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
        cy.get("#continue").click();
        cy.get("#email-address").fill(faker.internet.email());
        cy.get("#continue").click();
        cy.get("a").contains("The address doesn’t have a postcode").click();
        cy.get("#continue").click();
        cy.get("#address-line-1").fill("I test drive");
        cy.get("#address-line-2").fill("ford street");
        cy.get("#address-town").fill("manchester UK");
        cy.get("#address-county").fill("Lancashire");
        cy.get("#continue").click();
        cy.get("#yes-no-2").click();
        cy.get("#continue").click();

        //   Add additional contacts
        cy.get("a").contains("Add alternative contacts").click();
        cy.get("#yes-no-2").click();
        cy.get("#continue").click();
        cy.get("#yes-no").click();
        cy.get("#continue").click();
        cy.get("input[value='new']").click();
        cy.get("#continue").click();
        cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
        cy.get("#continue").click();
        cy.get("#email-address").clear();
        cy.get("#email-address").fill(faker.internet.email());
        cy.get("#continue").click();
        cy.get("#continue").click();

        cy.get("a").contains("Add invoice details").click();
        cy.get("input[value='other']").click();
        cy.get("#continue").click();
        cy.get("#new").click();
        cy.get("#continue").click();
        cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
        cy.get("#continue").click();
        cy.get("#account").click();
        cy.get("#continue").click();
        cy.get("#change-email-3").click();
        cy.get("#email-address").fill(faker.internet.email());
        cy.get("#continue").click();
        cy.get("#purchase-order").fill(faker.internet.email());
        cy.get("#continue").click();
        cy.get("#continue").click();

        cy.get("a").contains("Give site information").click();
        cy.get("#site-name").fill(faker.name.lastName());
        cy.get("#continue").click();
        cy.get("#site-postcode-check").click();
        cy.get("#site-postcode").fill("B38 9SH");
        cy.get("#continue").click();
        cy.get("#siteAddress").select("2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH");
        cy.get("#continue").click();
        cy.get("#scan-file").click();
        const Geojson = "GeoJSON.GeoJSON";
        const kml = "filee.KML";
        const ShpFixturePath = "magic_polygons.shp";
        cy.get("#scan-file").attachFile(Geojson);
        cy.get("#scan-file").click();
        cy.get("#continue").click();
        cy.get("#scan-file").attachFile(kml);
        cy.get("#scan-file").click();
        cy.get("#continue").click();
        cy.get("#scan-file").attachFile(ShpFixturePath);
        cy.get("#scan-file").click();
        cy.get("#continue").click();
        //  cy.get('#site-grid-ref').fill('SP039775')
        cy.get("#continue").click();
        cy.get("#site-grid-ref").clear();
        cy.get("#site-grid-ref").fill(
          "NY" + faker.datatype.number({ min: 100000 }).toString()
        );
        cy.get("#continue").click();
        cy.get("input[value='correct']").click();
        cy.get("#continue").click();
        cy.get("#continue").click();
  
        cy.get("a").contains("Give ecologist’s experience").click();
        cy.get("input[value='no']").click();
        cy.get("#continue").click();
        cy.get("#enter-experience").fill(faker.random.alphaNumeric(4000));
        cy.get("#continue").click();
        cy.get("#enter-methods").fill(faker.random.alphaNumeric(4000));
        cy.get("#continue").click();
        cy.get("input[value='yes']").click();
        cy.get("#continue").click();
        cy.get("#enter-class-mitigation-details").fill("BAD-2022-agsss1");
        cy.get("#continue").click();
        cy.get("#continue").click();
  
        cy.get("a").contains("Upload supporting information").click();
        const yourFixturePath = 'virusfile.pdf'
        const CpgFixturePath = 'magic_polygons.cpg'
        const dbfFixturePath = 'magic_polygons.dbf'
        const prjFixturePath = 'magic_polygons.prj' 
        const sbnFixturePath = 'magic_polygons.sbn'
        const sbxFixturePath = 'magic_polygons.sbx'
        const shpFixturePath = 'magic_polygons.shp' 
        const shxFixturePath = 'magic_polygons.shx' 
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
        cy.get('#scan-file').attachFile(sbxFixturePath)
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
        
        cy.get('#scan-file').click()
        cy.get('#scan-file').attachFile(yourFixturePath)
        cy.get('#continue').click()
        cy.get('#another-file-check-2').click()
        cy.get('#continue').click()
  
            cy.get("a").contains("Add setts the work will affect").click();
            cy.get("#continue").click();
            cy.get("input[id='habitat-name']").fill(faker.name.firstName());
            cy.get("#continue").click();
            cy.get("#habitat-types-4").click();
            cy.get("#continue").click();
            cy.get("input[value='true']").click();
            cy.get("#continue").click();
            cy.get("#habitat-entrances").fill("100");
            cy.get("#continue").click();
            cy.get("#habitat-active-entrances").fill("100");
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
            cy.get("#convictions-check").click();
            cy.get("#continue").click();
            cy.get("#conviction-details").fill(faker.random.alphaNumeric(100));
            cy.get("#continue").click();
            cy.get("#continue").click();
            cy.get("a").contains("Agree to terms and send application").click();
            cy.get("#main-content > div > div > form > fieldset").contains(
              users.text18
            );
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
            cy.get("#continue").click();
            cy.get("#continue").click();
            const ls = cy.get("a").contains("Badger mitigation").first();
            ls.click();
            cy.get("#main-content > div > div > form > fieldset > dl").contains(
              "SUBMITTED"
            );
            cy.get("#main-content > div > div > form > fieldset > dl").contains(
              "Badger mitigation"
            );
            cy.get("#main-content > div > div > form > fieldset > dl").contains(
              "Site"
            );
            cy.get("#main-content > div > div > form > fieldset > dl").contains(
              "Applicant"
            );
  
            cy.get("#main-content > div > div > form > fieldset > dl").contains(
              "Application reference"
            );
            // const text1 = cy.get("#main-content > div > div > form > fieldset > dl").text();
            // expect(text).include(text1);
            cy.get("#main-content > div > div > form > fieldset > dl").contains(
              "Submitted"
            );
          }
        );
      });
  it("SDDSIP-509 and 3 verify Licence application screen", () => {
    cy.visit('/');
    cy.fixture("users.json").then((users) => {
      cy.get("#username").fill(users.email1);
      cy.get("#password").fill(users.password1);
      cy.get("#continue").click();
      cy.get("h1.govuk-fieldset__heading").contains(users.nextpage);
      cy.get("#main-content > div > div > form > fieldset > a").click();
      cy.get("#species").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Give licence holder details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#is-organisation").click();
      cy.get("#organisation-name").fill(faker.company.bs());
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#continue").click();
      // work activity
      cy.get("a").contains("Give work activity details").click();
      cy.get("#work-proposal").fill(faker.random.alphaNumeric(40));
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#work-category-13").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("Give work activity details");
      cy.get(
        "#main-content > fieldset > span > ol > li:nth-child(3) > ul > li:nth-child(1)"
      ).contains("COMPLETED");
      cy.get("a").contains("Give details of conservation issues").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#site-name").fill("a");
      cy.get("#site-name__option--0").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#permission-details").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      //   cy.get("#advice-from-who").fill(
      //     faker.name.firstName() + faker.name.lastName()
      //   );
      cy.get("#advice-from-who").fill(faker.random.alphaNumeric(40));
      cy.get("#advice-description").fill(faker.random.alphaNumeric(4000));
      cy.get("#continue").click();
      cy.get("#proximity").click();
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      // permission details
      cy.get("a").contains("Give details of permissions to start work").click();
      cy.get("#continue").click();
      cy.get("#continue").click();
      cy.get("#consent-type-check-2").click();
      cy.get("#continue").click();
      cy.get("#authority-name").fill("a");
      cy.get("#authority-name__option--0").click();
      cy.get("#continue").click();
      cy.get("#reference").fill(faker.random.alphaNumeric(100));
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
      //   Give ecologist details
      cy.get("a").contains("Give ecologist details").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#account").click();
      cy.get("#continue").click();
      cy.get("#change-email").click();
      cy.get("#continue").click();
      cy.get("#continue").click();

      // Authorised person
      cy.get("a").contains("Add authorised people").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#name").fill(
        faker.name.firstName() + " " + faker.name.lastName()
      );
      cy.get("#continue").click();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#postcode").fill("M24 6DH");
      cy.get("#continue").click();
      cy.get("#address").select(
        "1, SATIN DRIVE, MIDDLETON, MANCHESTER, M24 6DH"
      );
      cy.get("#continue").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();

      //   Add additional contacts
      cy.get("a").contains("Add alternative contacts").click();
      cy.get("#yes-no-2").click();
      cy.get("#continue").click();
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("input[value='new']").click();
      cy.get("#continue").click();
      cy.get("#name").fill(faker.name.firstName() + faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#email-address").clear();
      cy.get("#email-address").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Add invoice details").click();
      cy.get("#responsible").click();
      cy.get("#continue").click();
      cy.get("#main-content > div > div").contains(
        "Individual responsible for paying the invoice"
      );
      cy.get("#yes-no").click();
      cy.get("#continue").click();
      cy.get("#purchase-order").fill(faker.internet.email());
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Give site information").click();
      cy.get("#site-name").fill(faker.name.lastName());
      cy.get("#continue").click();
      cy.get("#site-postcode-check").click();
      cy.get("#site-postcode").fill("B38 9SH");
      cy.get("#continue").click();
      cy.get("#siteAddress").select("2, BAY TREE CLOSE, BIRMINGHAM, B38 9SH");
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      const shpFixturePath = "magic_polygons.shp";
      const yourFixturePath = "virusfile.pdf";
      const shpxmlFixturePath = "magic_polygons.shp.xml";
      cy.get("#scan-file").attachFile(yourFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(shpFixturePath);
      cy.get("#continue").click();
      cy.get("#scan-file").click();
      cy.get("#scan-file").attachFile(shpxmlFixturePath);
      cy.get("#continue").click();
      cy.get("#site-grid-ref").clear();
      cy.get("#site-grid-ref").fill(
        "NY" + faker.datatype.number({ min: 100000 }).toString()
      );
      cy.get("#continue").click();
      cy.get("input[value='correct']").click();
      cy.get("#continue").click();
      cy.get("#continue").click();

      cy.get("a").contains("Give ecologist’s experience").click();
      cy.get("input[value='no']").click();
      cy.get("#continue").click();
      cy.get("#enter-experience").fill(faker.lorem.words(200));
      cy.get("#continue").click();
      cy.get("#enter-methods").fill(faker.lorem.words(200));
      cy.get("#continue").click();
      cy.get("input[value='yes']").click();
      cy.get("#continue").click();
      cy.get('#enter-class-mitigation-details').fill(faker.random.alphaNumeric(100))
      cy.get("#continue").click();
      cy.get("#continue").click();
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

      cy.get('#scan-file').click()
      cy.get('#scan-file').attachFile(bmpFixturePath)
      cy.get('#continue').click()
      cy.get('#another-file-check-2').click()
      cy.get('#continue').click()


          cy.get("a").contains("Add setts the work will affect").click();
          cy.get("#continue").click();
          cy.get("input[id='habitat-name']").fill(faker.name.firstName());
          cy.get("#continue").click();
          cy.get("#habitat-types-4").click();
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
          );


//           By sending the application you agree that you have given complete and correct information.

// If you are making this application on behalf of another person, you confirm that you have their permission to do so. By sending the application, they agree they will:

// will uphold any conditions applied to my licence if granted
// will abide by the terms and conditions of this service
// will abide by the terms and conditions of paying for wildlife licences (opens in new tab) and agree to pay relevant charges
// By sending the application you confirm that:

// an appropriate ecologist has been involved in the application and design of any mitigations
// the ecologist supports the application
// the ecologist is content that the proposed methods, actions and mitigation are appropriate to address the findings of the ecologist’s site assessment
// you will report any actions you took using this licence within 2 weeks of your licence expiring, even if you have taken no action
// you will pay any charges that apply

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
          cy.get("#main-content > div > div > form > fieldset").contains(
            "you will pay any charges that apply"
          );
          
          cy.get("#continue").click();
          cy.get("#main-content > div > div > form").contains("Application sent");
          cy.get("#main-content > div > div > form").contains("Your reference number");

          cy.get("#continue").click();
          const ls = cy.get("a").contains("Badger mitigation").first();
          ls.click();
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "SUBMITTED"
          );
        
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Badger mitigation"
          );
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Site"
          );
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Applicant"
          );

          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Application reference"
          );
          // const text1 = cy.get("#main-content > div > div > form > fieldset > dl").text();
          // expect(text).include(text1);
          cy.get("#main-content > div > div > form > fieldset > dl").contains(
            "Submitted"
        
      );
    });
  });
});

