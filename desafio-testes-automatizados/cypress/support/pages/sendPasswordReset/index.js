const el = require("./elements").ELEMENTS;

class ResetPasswordRequested{
    verificarAcessoPagina(){
        cy.get(el.header).contains("Reset Password link sent successfully")
    }
}

export default new ResetPasswordRequested()