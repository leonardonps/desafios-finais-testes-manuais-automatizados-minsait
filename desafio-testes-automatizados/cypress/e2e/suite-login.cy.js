/* 
  Formação Testes Manuais e Automatizados - Minsait
  Autor: Leonardo do Nascimento Peixoto da Silva
*/

///<reference types="cypress"/>
import Login from '../support/pages/login/'
import Orange from '../support/pages/orange/'
import ResetPassword from '../support/pages/login-request-password-reset-code'
import ResetPasswordRequested from '../support/pages/login-send-password-reset'

describe('Suite 1 - Verificando a tela de login', () => {
  beforeEach(() => {
    Login.acessarPagina()
  })

  it('Caso 1 - Deve realizar o login com sucesso, usando credenciais válidas.', () => {
    Login.fazerLogin("Admin", "admin123")

    //Validação
    Orange.verificarLoginValido()
  })

  it('Caso 2 - Deve bloquear o login falho com credenciais inválidas ou nulas.', () => {
    Login.fazerLogin("teste", "teste")
    Login.verificarLoginInvalido()
    Login.recarregarPagina()
    Login.fazerLogin()

    //Validação
    Login.verificarCamposNulos()
  })

  it('Caso 3 - Deve realizar a opção Forget your password com sucesso - caminho feliz.', () => {
    Login.acessarPaginaForgetPassword()
    ResetPassword.verificarAcessoPagina()
    ResetPassword.inserirUsuario("teste")
    ResetPassword.clicarBtnResetPassword()

    //Validação
    ResetPasswordRequested.verificarAcessoPagina()
  })

  it('Caso 4 - Deve cancelar a opção Forget your password com credencial nula.', () => {
    Login.acessarPaginaForgetPassword()
    ResetPassword.verificarAcessoPagina()
    ResetPassword.clicarBtnResetPassword()
    ResetPassword.verificarUsuarioNulo()
    ResetPassword.cancelarRequisicao()

    //Validação
    Login.verificarAcessoPagina()
  })
  
})