const el = require("./elements").ELEMENTS;

class OrangeDashboard{
    verificarAcessoPagina(){
        cy.get(el.title).should('contain', 'Dashboard')
    }
}

export default new OrangeDashboard()