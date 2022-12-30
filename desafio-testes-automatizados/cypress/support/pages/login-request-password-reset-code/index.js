const el = require("./elements").ELEMENTS;

class ResetPassword{
    verificarAcessoPagina(){
        cy.get(el.header).should('contain', 'Reset Password')
    }

    inserirUsuario(username){
        if(username){
          cy.get(el.username).type(username)
        }
    }

    verificarUsuarioNulo(){
        cy.get(el.errorRequired).should("be.visible")
    }

    clicarBtnResetPassword(){
        cy.get(el.btnReset).click()
    }

    cancelarRequisicao(){
        cy.get(el.btnCancel).click()
    }
}

export default new ResetPassword()