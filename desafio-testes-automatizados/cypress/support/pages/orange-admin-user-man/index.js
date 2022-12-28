const el = require("./elements").ELEMENTS;

class OrangeAdminUserManagement{
    verificarAcessoPagina(){
        cy.get(el.title).should('be.visible').and('contain','Admin')
    }
}

export default new OrangeAdminUserManagement()