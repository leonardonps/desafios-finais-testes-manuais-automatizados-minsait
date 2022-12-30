const el = require("./elements").ELEMENTS;

class OrangeAdminSaveSystemUser{
    visitarPagina(){
        cy.visit(el.url)
    }
    
    verificarAcessoPagina(){
        cy.get(el.title).should('be.visible').and('contain', 'Add User')
    }
    
    selecionarFuncaoUsuario(funcao){
        if(funcao){
            cy.get(el.selectFields).eq(0).click()
            cy.get(el.selectOptions).contains(funcao).click()
        }
    }

    inserirNomeCompleto(nomeCompleto){
        if(nomeCompleto){
            cy.get(el.fullNameField).type(nomeCompleto)
            cy.get(el.selectOptions).eq(0).contains(nomeCompleto).click()
        }
    }

    selecionarStatus(status){
        if(status){
            cy.get(el.selectFields).eq(1).click()
            cy.get(el.selectOptions).contains(status).click()
        }
    }

    inserirUsername(username){
        if(username){
            cy.get(el.loginFields).eq(0).type(username)
        }
    }

    inserirSenha(senha){
        if(senha){
            cy.get(el.loginFields).eq(1).type(senha)
        }
    }

    confirmarSenha(senha){
        if(senha){
            cy.get(el.loginFields).eq(2).type(senha)
        }
    }

    salvarNovoUsuario(){
        cy.get(el.btnSave).click()
    }


}

export default new OrangeAdminSaveSystemUser()