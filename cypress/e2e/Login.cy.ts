import LoginPage from '../pageObjects/loginPage'

const usuario = Cypress.env("Usuario de login")
const senha = Cypress.env("Senha de login")

describe('Teste de Login no SmartBus', () => {
 
  beforeEach(() => {
    LoginPage.visitarPaginaLogin();
  });

  it('Deve fazer login com credenciais válidas', () => {
    LoginPage.preencherUsuario(usuario)
    LoginPage.preencherSenha(senha)
    LoginPage.clicarBotaoLogin()
    LoginPage.validarRedirecionamento()
  });

  it('Deve exibir mensagem de erro para login inválido', () => {
    LoginPage.preencherUsuario('usuarioInvalido')
    LoginPage.preencherSenha('senhaInvalida')
    LoginPage.clicarBotaoLogin()
    LoginPage.validarErroLogin()
  });
});