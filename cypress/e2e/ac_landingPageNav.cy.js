//cy.visit('https://www.awsomecreations.com')
beforeEach(() => {
    cy.visit('https://www.awsomecreations.com/')
})

it ('upper nav should work', function(){
    
    //Home anchor
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

//eLearning portal to contain the form, not yet completed. Date = 02/05/2024
// it ('eLearning nav should work', function(){
//     cy.contains('eLearning Portal').click()
//     .url().should('eq', 'https://www.awsomecreations.com/')    
// })

it ('Samples nav should work', function(){
    cy.contains('Samples').click()
    .url().should('eq', 'https://www.awsomecreations.com/samples.html')    
})
    
it ('Experiment nav should work', function(){
    cy.contains('Experiment_1').click()
    .url().should('eq', 'https://www.awsomecreations.com/experiment_1.html')    
})

