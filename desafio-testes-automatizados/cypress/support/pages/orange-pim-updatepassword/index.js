const el = require("./elements").ELEMENTS;

class OrangePimUpdatePassword{
    verificarAcessoPagina(){
        cy.get(el.title).contains("Update Password")
    }

    inserirSenhaAtual(senhaAtual){
        if(senhaAtual){
            cy.get(el.inputsPassword).eq(0).type(senhaAtual)
        }
    }

    inserirSenhaNova(senhaNova){
        if(senhaNova){
            cy.get(el.inputsPassword).eq(1).type(senhaNova)
        }    
    }

    confirmarSenhaNova(senhaNova){
        if(senhaNova){
            cy.get(el.inputsPassword).eq(2).type(senhaNova)
        }
    }

    clicarSalvar(){
        cy.get(el.btnSave).click()
    }

    clicarCancelar(){
        cy.get(el.btnCancel).click()
    }

    verificarMudancaSenha(){
        cy.get(el.toastPasswordChanged).should('be.visible').and('contain','Success')
        cy.get(el.inputsPassword).invoke('val').should('be.empty')
    }

    verificarNaoMudancaSenha(){
        cy.get(el.inputsPassword).invoke('val').should('not.be.empty')
    }

    verificarCamposRequeridos(){
        cy.get(el.requiredError).should('be.visible')
    }
}

export default new OrangePimUpdatePassword()