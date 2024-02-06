
it('selecting the correct slide', ()=> {
    cy.visit('https://www.awsomecreations.com/experiment_1.html')
    //cy.get('.slider-carousel')
    cy.clock()
    cy.get('.slider-carousel')
    .contains('UI Document').wait(10000)
    .should('have.attr', 'href', '/Samples_Assets/Sample-Redact-UI-1-7.pdf/')
    .wait(10000)
 
})