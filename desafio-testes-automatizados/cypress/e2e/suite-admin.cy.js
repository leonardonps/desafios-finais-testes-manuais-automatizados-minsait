/* 
  Formação Testes Manuais e Automatizados - Minsait
  Autor: Leonardo do Nascimento Peixoto da Silva
*/

///<reference types="cypress"/>

import Login from "../support/pages/login"
import Orange from "../support/pages/orange"
import OrangeAdminAddSystemUser from "../support/pages/orange-admin-add-system-user"
import OrangeAdminUserManagement from "../support/pages/orange-admin-user-management"
import OrangePimAddEmployee from "../support/pages/orange-pim-add-employee"
import OrangePimEmployeeList from "../support/pages/orange-pim-employee-list"

describe('Suite 2 - Verificando principais funcionalidades fornecidas para um usuário ADMIN ', () => {
  beforeEach(() => {
    Login.acessarPagina()
    Login.fazerLogin("Admin", "admin123")
    Orange.verificarLoginValido()
  })
  
  it('Caso 1 - Deve adicionar um novo funcionário usando informações básicas e credenciais para login.', () => {
    const senha = 'TESTEteste123!'
    
    OrangePimAddEmployee.visitarPagina()
    OrangePimAddEmployee.verificarAcessoPagina()
    OrangePimAddEmployee.inserirPrimeiroNome('Antonio')
    OrangePimAddEmployee.inserirMeioNome('Maria')
    OrangePimAddEmployee.inserirUltimoNome('Fernandez')
    OrangePimAddEmployee.clicarCriarDetalhesLogin()
    OrangePimAddEmployee.inserirUsername('antoniomfernandez')
    OrangePimAddEmployee.inserirSenha(senha)
    OrangePimAddEmployee.confirmarSenha(senha)
    OrangePimAddEmployee.salvarNovoFuncionario()

    //Validação
    Orange.verificarToastSucessfullySaved()
  })

  it.only('Caso 2 - Deve pesquisar um funcionário utilizando seu nome e/ou ID e, depois, removê-lo do sistema usando o botão na seção Actions.', () => {
    OrangePimEmployeeList.visitarPagina()
    OrangePimEmployeeList.verificarAcessoPagina()
    OrangePimEmployeeList.inserirNomeFuncionario('Antonio Maria Fernandez')
    OrangePimEmployeeList.inserirIdFuncionario('')
    OrangePimEmployeeList.pesquisarFuncionario()
    OrangePimEmployeeList.removerUsuario()
    OrangePimEmployeeList.confirmarRemocaoUsuario()

    //Validações
    Orange.verificarToastSucessfullyDeleted()
    Orange.verificarToastINoRecordsFound()
  })

  it('Caso 3 - Deve adicionar um funcionário já existente, ainda sem credenciais para login e papel declarado, como um usuário no sistema. ', () =>{
    const senha = 'TESTEteste123!'

    OrangeAdminAddSystemUser.visitarPagina()
    OrangeAdminAddSystemUser.verificarAcessoPagina()
    OrangeAdminAddSystemUser.selecionarFuncaoUsuario('ESS')
    OrangeAdminAddSystemUser.inserirNomeCompleto('automation fc')
    OrangeAdminAddSystemUser.selecionarStatus('Enabled')
    OrangeAdminAddSystemUser.inserirUsername('automationfc')
    OrangeAdminAddSystemUser.inserirSenha(senha)
    OrangeAdminAddSystemUser.confirmarSenha(senha)
    OrangeAdminAddSystemUser.salvarNovoUsuario()

    //Validações
    Orange.verificarToastSucessfullySaved()
    OrangeAdminUserManagement.verificarAcessoPagina()
  })

  it('Caso 4 - Deve pesquisar um usuário por seu username e, depois, removê-lo do sistema usando o botão na seção Actions.', () =>{
    OrangeAdminUserManagement.visitarPagina()
    OrangeAdminUserManagement.verificarAcessoPagina()
    OrangeAdminUserManagement.inserirUsername('automationfc')
    OrangeAdminUserManagement.pesquisarUsuario()
    OrangeAdminUserManagement.removerUsuario()
    OrangeAdminUserManagement.confirmarRemocaoUsuario()
    
    //Validações
    Orange.verificarToastSucessfullyDeleted()
    Orange.verificarToastINoRecordsFound()
  })


})