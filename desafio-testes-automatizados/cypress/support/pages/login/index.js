const el = require("./elements").ELEMENTS;

class Login{
    fazerLogin(usuario, senha){
        if(usuario){
            cy.get(el.usuario).type(usuario)
        }
        if(senha){
            cy.get(el.senha).type(senha)  
        }
        cy.get(el.btnLogin).click()   
    }

    acessarPagina(){
        cy.visit(el.url)
    }

    verificarAcessoPagina(){
        cy.get(el.imgCompanyBranding).should("be.visible")
    }

    acessarPaginaForgetPassword(){
        cy.get(el.forgetPassword).click()
    }

    recarregarPagina(){
        cy.reload()
    }

    verificarLoginInvalido(){
        cy.get(el.errorInvalidCredentials).should('be.visible')
    }

    verificarCamposNulos(){
        cy.get(el.errorRequired).should('be.visible')
    }
}

export default new Login()