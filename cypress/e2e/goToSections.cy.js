describe('Go to different sections', function(){

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Go to Women Section', function(){
        cy.get('[class=sf-with-ul]').first().click();  //Selecciona el primer elemento que contenga class="sf-with-ul
    })

    it ("Go to Drasses sections", function(){
        cy.get('[class=sf-with-ul]').eq(3).click();  // Selecciona el elemento 3

    })
})
