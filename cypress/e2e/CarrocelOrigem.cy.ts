import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";


const origem = 'benedito'
const usuario = Cypress.env("USERLOGIN");
const senha = Cypress.env("PASSWORD");

describe('Teste responsivo do carrocel de origem', () => {
    
    beforeEach(() => {
        LoginPage.visitarPaginaLogin();
        LoginPage.preencherUsuario(usuario)
        LoginPage.preencherSenha(senha)
        LoginPage.clicarBotaoLogin()
        LoginPage.validarRedirecionamento()
    })
    
    it('Deve buscar um trecho no carrocel de origem selecionar', () => {
        MainPage.preencherOrigem(origem)
    })
});