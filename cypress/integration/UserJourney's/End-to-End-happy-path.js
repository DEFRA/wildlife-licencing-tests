describe('End - to - End',function(){
    it('End - to - End',function(){
        
        cy.visit('https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=goo&aqs=chrome.1.69i57j46i131i199i433i465i512j35i39j0i433i512l2j69i60l3.1603j0j7&sourceid=chrome&ie=UTF-8');
      cy.get('[type="radio"].govuk-radios__input').first().check()
      cy.get('button[id="continue"]').click()
      cy.wait(2000)
// Select RMI 
cy.get('#whatTypeOfItemIsIt-5').check()
cy.get('button[id="continue"]').click()

//Already Certified
//AB12CD34
cy.get('[type="radio"].govuk-radios__input').first().check()
cy.get('#certificateNumber').type('AB12CD34');
cy.get('button[id="continue"]').click()

//Can Continue
cy.get('button[id="continue"]').click()

//Legal Halt//
cy.get('button[id="continue"]').click()
cy.wait(2000)

// //Who Owns the item

// cy.get('[type="radio"].govuk-radios__input').first().check()
// cy.get("#continue").click();

// //Photo upload

// const yourFixturePath = 'Elephant.jpg';
// cy.get('#files').attachFile(yourFixturePath);
// cy.get("#continue").click();
// cy.wait(2000)

// //Your photos
// cy.get("#continue").click();

// //Tell us about the item

// cy.get('#whatIsItem').type('Ivory jewellery');
// cy.get('#whereIsIvory').type('necklace');
// cy.get('#uniqueFeatures').type('very unique 15th century item');
// cy.get('#whereMade').type('Japan');
// cy.get('#whenMade').type('14th Century');
// cy.get("#continue").click();

// //Why is item RMI

// cy.get('#whyRmi').type('14th century unique item from Japan');
// cy.get("#continue").click();

// //Ivory age
// cy.get('input[type="checkbox"]').check()
// cy.get("#continue").click();
// cy.get('#otherReason').type('I have so many reasons');
// cy.get("#continue").click();

// // Add Documents

// cy.get('[type="radio"].govuk-radios__input').first().check()
// cy.get('button[id="continue"]').click()
// cy.wait(2000)

   
//       //Add documents

// const yourFixturePath01 = 'sample-docx-file-for-testing.docx';
// cy.get('#files').attachFile(yourFixturePath01);
// cy.get("#continue").click();
// cy.wait(2000)
      
//       //Your documents
//       cy.get("#continue").click();

      //Who Owns the item
      cy.get('[type="radio"].govuk-radios__input').first().check()
      cy.get("#continue").click();

      //Contact details
      cy.get('#fullName').type('Shaun Test');
      cy.get('#emailAddress').type('ali.akar@outlook.com');
      cy.get('#confirmEmailAddress').type('ali.akar@outlook.com');
      cy.get("#continue").click();

      //Address 
      cy.get('#nameOrNumber').type('6');
      cy.get('#postcode').type('BS16 2LL');
      cy.get("#findAddress").click();
      cy.get("#confirmAndContinue").click();

      //Intention for item
      cy.get('[type="radio"].govuk-radios__input').first().check()
      cy.get("#continue").click();
    
      //Declaration & submission//
      cy.get('#agree').check()
      //cy.get('form input').check(['agree'])
      cy.get("#agreeAndSubmit").click();
// comments///
    })
})

