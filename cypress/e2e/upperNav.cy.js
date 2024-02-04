//cy.visit('https://www.awsomecreations.com')

it ('upper nave should work', function(){
    cy.visit('https://www.awsomecreations.com/')//navigate to site
    
    // //Home anchor
    cy.contains('Home').should('be.visible').click()
    cy.url().should('include', '#intro')

    //About anchor
    cy.contains('About').click()
    cy.url().should('include','#about')

    //Contact anchor
    cy.contains('Contact').click()
    cy.url().should('include','#contact')

})
