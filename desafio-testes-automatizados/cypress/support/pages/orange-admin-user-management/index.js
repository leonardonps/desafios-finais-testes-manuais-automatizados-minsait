const el = require("./elements").ELEMENTS;

class OrangeAdminUserManagement{
    visitarPagina(){
        cy.visit(el.url)
    }
   
    verificarAcessoPagina(){
        cy.get(el.title).should('be.visible').and('contain','Admin')
        cy.get(el.levelTitle).should('be.visible').and('contain','User Management')
    }

    inserirUsername(username){
        if(username){
            cy.get(el.inputs).eq(1).type(username)
        }
    }

    pesquisarUsuario(){
        cy.get(el.btnSearch).click({force: true})
    }

    removerUsuario(){
        cy.get(el.actionDelete).click()
    }

    confirmarRemocaoUsuario(){
        cy.get(el.confirmDelete).click()
    }
}

export default new OrangeAdminUserManagement()