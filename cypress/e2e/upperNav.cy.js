//cy.visit('https://www.awsomecreations.com')

it ('upper nave should work', function(){
    cy.visit('https://www.awsomecreations.com/')//navigate to site
    
    //Home anchor
    cy.contains('Home').should('be.visible').click()
    //cy.click
    cy.location('pathname').should('contain', '#')

    //About anchor
    cy.contains('About').click()
    cy.location('pathname').should('eq','/index.html#about')

    //Contact anchor
    cy.contains('Contact').click()
    cy.location('pathname').should('eq','/index.html#contact')

})
