import LoginPage from '../pageObjects/loginPage'

const usuario = Cypress.env("USERLOGIN");
const senha = Cypress.env("PASSWORD");

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