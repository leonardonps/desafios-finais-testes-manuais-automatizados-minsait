const el = require("./elements").ELEMENTS;

class OrangePimAddEmployee{
    visitarPagina(){
        cy.visit(el.url)
    }
  
    verificarAcessoPagina(){
        cy.get(el.title).should('be.visible').and('contain', 'Add Employee')
    }

    inserirPrimeiroNome(primeiroNome){
        if(primeiroNome){
            cy.get(el.firstName).type(primeiroNome)
        }
    }

    inserirMeioNome(meioNome){
        if(meioNome){
            cy.get(el.middleName).type(meioNome)
        }
    }

    inserirUltimoNome(ultimoNome){
        if(ultimoNome){
            cy.get(el.lastName).type(ultimoNome)
        }
    }

    clicarCriarDetalhesLogin(){
        cy.get(el.btnCreateLoginDetails).click()
    }

    clicarStatusAtivado(){
        cy.get(el.statusEnabled).click()
    }

    clicarStatusDesativado(){
        cy.get(el.statusDisabled).click()
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

    salvarNovoFuncionario(){
        cy.get(el.btnSave).click()
    }

}

export default new OrangePimAddEmployee()