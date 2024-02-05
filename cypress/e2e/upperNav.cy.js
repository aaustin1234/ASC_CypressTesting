//cy.visit('https://www.awsomecreations.com')

it ('upper nave should work', function(){
    cy.visit('https://www.awsomecreations.com/')//navigate to site
    
    // //Home anchor
    cy.contains('Home').should('be.visible').click()
    .url().should('include', '#intro')
    

    //About anchor
    cy.contains('About').click()
    .url().should('include','#about')
    .get('#about').should('contain', 'About Me')

 
    //Contact anchor
    cy.contains('Contact').click()
    .url().should('include','#contact')
    .get('#contact').should('contain', 'Contact me')
})
