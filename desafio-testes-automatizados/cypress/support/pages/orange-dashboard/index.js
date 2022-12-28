const el = require("./elements").ELEMENTS;

class OrangeDashboard{
    verificarAcessoPagina(){
        cy.get(el.title).contains("Dashboard")
    }
}

export default new OrangeDashboard()