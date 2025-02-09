import LoginPage from "../pageObjects/loginPage";
import MainPage from "../pageObjects/mainPage";

const origem = 'benedito'
const destino = 'inhucu'
const dataIda = new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString('pt-BR');
const usuario = Cypress.env("Usuario de login")
const senha = Cypress.env("Senha de login")

describe('Teste responsivo do carrocel de origem', () => {
    
    beforeEach(() => {
        LoginPage.visitarPaginaLogin();
        LoginPage.preencherUsuario(usuario)
        LoginPage.preencherSenha(senha)
        LoginPage.clicarBotaoLogin()
        LoginPage.validarRedirecionamento()
    })
    
    it('Deve buscar um trecho definindo origem, destino e data', () => {
        MainPage.preencherOrigem(origem)
        MainPage.preencherDestino(destino)
        MainPage.escolherData(dataIda)
        MainPage.pesquisarTrecho()
    })
});