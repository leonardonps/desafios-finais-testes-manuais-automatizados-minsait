/* 
  Formação Testes Manuais e Automatizados - Minsait
  Autor: Leonardo do Nascimento Peixoto da Silva
  Github do projeto: https://github.com/leonardonps/desafios-finais-testes-manuais-automatizados-minsait
*/

///<reference types="cypress"/>
import Login from '../support/pages/login/'
import OrangeAdminUserManagement from '../support/pages/orange-admin-user-management'
import OrangeDashboard from '../support/pages/orange-dashboard'
import OrangePimUpdatePassword from '../support/pages/orange-pim-updatepassword'
import Orange from '../support/pages/orange/'

describe('Suite 3 - Verificando funcionalidades gerais da página principal Orange HRM', () => {

  beforeEach(() => {
    Login.acessarPagina()
    Login.fazerLogin("Admin", "admin123")
    Orange.verificarLoginValido()
  })

  it('Caso 1 - Deve examinar as características (expansão, quantidade e quais items) e funcionalidades (procurar item) do menu principal.', () => {
    Orange.retrairMenuPrincipal()
    Orange.expandirMenuPrincipal()
    Orange.verificarQtdElementosMenuPrincipal()
    Orange.verificarElementosMenuPrincipal()
    Orange.pesquisarMenuPrincipal('Admin')

    //Validação
    OrangeAdminUserManagement.verificarAcessoPagina()
  })

  it('Caso 2 - Deve realizar a operação Change Password do menu drop-down do perfil do usuário com sucesso com inputs válidos.', () => {
    const senhaNova = 'TESTEteste123!'

    OrangePimUpdatePassword.visitarPagina()
    OrangePimUpdatePassword.verificarAcessoPagina()
    OrangePimUpdatePassword.inserirSenhaAtual('admin123')
    OrangePimUpdatePassword.inserirSenhaNova(senhaNova)
    OrangePimUpdatePassword.confirmarSenhaNova(senhaNova)
    OrangePimUpdatePassword.clicarSalvar()

    //Validação
    OrangePimUpdatePassword.verificarMudancaSenha()
    Orange.verificarToastSucessfullySaved()
  })

  it('Caso 3 - Deve cancelar com sucesso a operação Change Password do menu drop-down do perfil do usuário com inputs nulos e inválidos.', () => {
    const senhaNova = 'teste'

    OrangePimUpdatePassword.visitarPagina()
    OrangePimUpdatePassword.verificarAcessoPagina()
    
    //Testando a entrada de inputs nulos
    OrangePimUpdatePassword.clicarSalvar()
    OrangePimUpdatePassword.verificarCamposRequeridos()

    //Testando a entrada de inputs inválidos
    OrangePimUpdatePassword.inserirSenhaAtual('admin123')
    OrangePimUpdatePassword.inserirSenhaNova(senhaNova)
    OrangePimUpdatePassword.confirmarSenhaNova(senhaNova)
    OrangePimUpdatePassword.clicarSalvar()

    //Validando e cancelando operação
    OrangePimUpdatePassword.verificarNaoMudancaSenha()
    OrangePimUpdatePassword.clicarCancelar()
    OrangeDashboard.verificarAcessoPagina()
  })

  it('Caso 4 - Deve realizar o LogOut do usuário no sistema.', () => {
    Orange.expandirRetrairMenuUsuario()
    Orange.clicarMenuUsuarioLogOut()
    
    //Validação
    Login.verificarAcessoPagina()
  })
  
})