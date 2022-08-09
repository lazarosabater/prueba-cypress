import indexPage from '../support/pages/index.cy';
import articlesPage from '../support/pages/articles.cy';

describe('Search test case', function(){

    before(function(){   
        cy.log('Ejecutando precondiciones a las pruebas');      //Los before y after se ejecutan antes y despues que los beforeEach/afterEach y antes y despues de todo
    })

    after(function(){
        cy.log('Ejecutando todas las postcondiciones a las pruebas');
    })

    beforeEach(function(){                                       //Los beforeEach y los afterEach se ejecutan antes y despues de cada it(..)
        cy.visit('http://automationpractice.com/index.php');
    })

    afterEach (function(){
        cy.log('Poniendo datos en su estado original');          //Los beforeEach y los afterEach se ejecutan antes y despues de cada it(..)
    })

    it('Search with results', function(){    
        indexPage.search('dress');
        cy.logSpecFormat('Searching for dresses');              //Aqui usamos en command logSpecFormat (ver commands.js)
        articlesPage.verifyArticle('"dress"');
      })

    it('Search with results', function(){
        indexPage.search('"hat"');
        articlesPage.verifyArticle('"hat"');
    })
})