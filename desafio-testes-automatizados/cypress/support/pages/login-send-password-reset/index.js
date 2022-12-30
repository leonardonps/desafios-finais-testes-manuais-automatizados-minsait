const el = require("./elements").ELEMENTS;

class ResetPasswordRequested{
    verificarAcessoPagina(){
        cy.get(el.header).should('contain', 'Reset Password link sent successfully')
    }
}

export default new ResetPasswordRequested()