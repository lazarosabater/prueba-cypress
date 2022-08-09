class indexPage{
    
    search = (element) => {                    // search es el nombre del metodo y element es el nombre cualquiera de un parametro que va a recibir
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.searchInput).type(element);
            cy.get(locators.searchButton).click();
        })
       

    }
    
}

export default new indexPage();