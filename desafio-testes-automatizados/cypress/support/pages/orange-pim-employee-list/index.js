const el = require("./elements").ELEMENTS;

class OrangePimEmployeeList{
    visitarPagina(){
        cy.visit(el.url)
    }

    verificarAcessoPagina(){
        cy.get(el.titleSearch).should('contain', 'Employee Information')
    }

    inserirNomeFuncionario(nomeFuncionario){
        if(nomeFuncionario){
            cy.get(el.searchFieldNames).eq(0).type(nomeFuncionario)
        }
    }

    inserirIdFuncionario(idFuncionario){
        if(idFuncionario){
            cy.get(el.searchField).eq(1).type(idFuncionario)
        }
    }

    pesquisarFuncionario(){
        cy.get(el.btnSearch).click({force: true})
    }

    
    removerUsuario(){
        cy.get(el.actionDelete).click()
    }

    confirmarRemocaoUsuario(){
        cy.get(el.confirmDelete).click()
    }
}

export default new OrangePimEmployeeList()