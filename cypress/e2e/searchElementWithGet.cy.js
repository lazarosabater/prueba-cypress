describe('Formas de encontrar un elemento', function(){
    it('Buscar en el buscador',function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola'); //Buscamos por clase
        cy.get('#search_query_top').type(' Como te va'); //Buscamos por id
        cy.get('[name="search_query"]').type(' Me va muy bien'); // Buscamos por cualquier otra propidad
        cy.get('[placeholder="Search"]').clear(); //Clear borra lo que está en el elemento

    })
})