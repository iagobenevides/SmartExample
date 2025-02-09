class LoginPage {
    private usernameInput = '.div-form-login input[placeholder="usuário"]';
    private passwordInput = 'input[placeholder="senha"]';
    private loginButton = '#buttonLogin';
  
    visitarPaginaLogin(): void {
      cy.visit('https://prod-guanabara-frontoffice-smartbus.smarttravelit.com/');
      cy.wait(2000);
    }
  
    preencherUsuario(usuario: string): void {
      cy.get(this.usernameInput).type(usuario);
    }
  
    preencherSenha(senha: string): void {
      cy.get(this.passwordInput).type(senha);
    }
  
    clicarBotaoLogin(): void {
      cy.get(this.loginButton).should('be.visible').click();
    }
  
    validarRedirecionamento(): void {
      cy.url().should('not.include', 'login');
      cy.get('.slick-track', { timeout: 10000 }).should('be.visible');
    }

    validarErroLogin(): void {
      cy.url().should('include', 'login');
      cy.get('#lbl-login-feedback', { timeout: 10000 }).should('contain', 'Usuário ou senha inválidos');
    }
  }
  
  export default new LoginPage();