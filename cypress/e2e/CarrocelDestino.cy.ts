import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";

const destino = 'inhucu'
const usuario = Cypress.env("Usuario de login")
const senha = Cypress.env("Senha de login")

describe('Teste responsivo do carrocel de destino', () => {
    
    beforeEach(() => {
        LoginPage.visitarPaginaLogin();
        LoginPage.preencherUsuario(usuario)
        LoginPage.preencherSenha(senha)
        LoginPage.clicarBotaoLogin()
        LoginPage.validarRedirecionamento()
    })
    
    it('Deve buscar um trecho no carrocel de destino e selecionar', () => {
        MainPage.preencherDestino(destino)
    })
});