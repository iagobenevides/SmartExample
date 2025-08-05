import LoginPage from '../pageObjects/loginPage';
import { TestConfig } from '../support/testConfig';

describe('Testes de Login - SmartBus', () => {
  beforeEach(() => {
    cy.visit(TestConfig.baseUrl);
  });

  describe('Cenários Positivos', () => {
    it('Deve fazer login com credenciais válidas', () => {
      const { login, senha } = TestConfig.testData.usuarios.valido;
      
      LoginPage.fazerLogin(login, senha);
      
      // Validações adicionais
      cy.url().should('not.include', 'login');
      cy.get('.slick-track').should('be.visible');
    });

    it('Deve validar campos obrigatórios na página de login', () => {
      LoginPage.validarCamposObrigatorios();
    });
  });

  describe('Cenários Negativos', () => {
    it('Deve exibir mensagem de erro para login inválido', () => {
      const { login, senha } = TestConfig.testData.usuarios.invalido;
      
      LoginPage.preencherUsuario(login);
      LoginPage.preencherSenha(senha);
      LoginPage.clicarBotaoLogin();
      LoginPage.validarErroLogin();
    });

    it('Deve validar campos vazios', () => {
      LoginPage.clicarBotaoLogin();
      cy.get('#lbl-login-feedback').should('be.visible');
    });

    it('Deve validar apenas usuário vazio', () => {
      LoginPage.preencherSenha('senha123');
      LoginPage.clicarBotaoLogin();
      cy.get('#lbl-login-feedback').should('be.visible');
    });

    it('Deve validar apenas senha vazia', () => {
      LoginPage.preencherUsuario('usuario123');
      LoginPage.clicarBotaoLogin();
      cy.get('#lbl-login-feedback').should('be.visible');
    });
  });

  describe('Testes de Interface', () => {
    it('Deve validar responsividade da página de login', () => {
      // Teste em diferentes resoluções
      cy.viewport(375, 667); // Mobile
      LoginPage.validarCamposObrigatorios();
      
      cy.viewport(768, 1024); // Tablet
      LoginPage.validarCamposObrigatorios();
      
      cy.viewport(1280, 720); // Desktop
      LoginPage.validarCamposObrigatorios();
    });

    it('Deve validar acessibilidade dos campos', () => {
      cy.get('.div-form-login input[placeholder="usuário"]').should('have.attr', 'placeholder');
      cy.get('input[placeholder="senha"]').should('have.attr', 'type', 'password');
      cy.get('#buttonLogin').should('be.visible').and('be.enabled');
    });
  });
}); 