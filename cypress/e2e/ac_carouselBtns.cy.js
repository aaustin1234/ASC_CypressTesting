
//cy.visit('https://www.awsomecreations.com')
beforeEach(() => {
    cy.visit('https://www.awsomecreations.com/experiment_1.html')
})

it ('Intro is visible', function(){    
    cy.contains('Samples Slider').should('be.visible')
})

it ('back button works', function(){
    cy.get('.navigation-buttons')
    .find('.previous')
    .click
})

it('next button works', function(){
    cy.get('.navigation-buttons')
    .find('.next')
    .click
})

//clicking opens files
//cy.clock kills the test when placed above cy.visit - and doesn't work locally. 
//may have to explore breaking the slider documents into their own test.
// it('clicking on main image', function(){
//     cy.clock()
//     .get('.main > :nth-child(1) > a > img')
//     .find('.images')
//     .tick(5000)
//     .click
// })
