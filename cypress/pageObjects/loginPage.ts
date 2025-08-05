class LoginPage {
    private readonly usernameInput = '.div-form-login input[placeholder="usuário"]';
    private readonly passwordInput = 'input[placeholder="senha"]';
    private readonly loginButton = '#buttonLogin';
    private readonly errorMessage = '#lbl-login-feedback';
    private readonly baseUrl = 'https://prod-guanabara-frontoffice-smartbus.smarttravelit.com/';
  
    visitarPaginaLogin(): void {
      cy.visit(this.baseUrl);
      cy.wait(2000);
    }
  
    preencherUsuario(usuario: string): void {
      cy.get(this.usernameInput).should('be.visible').type(usuario);
    }
  
    preencherSenha(senha: string): void {
      cy.get(this.passwordInput).should('be.visible').type(senha);
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
      cy.get(this.errorMessage, { timeout: 10000 }).should('contain', 'Usuário ou senha inválidos');
    }

    // Método para login completo
    fazerLogin(usuario: string, senha: string): void {
      this.visitarPaginaLogin();
      this.preencherUsuario(usuario);
      this.preencherSenha(senha);
      this.clicarBotaoLogin();
      this.validarRedirecionamento();
    }

    // Método para validar campos obrigatórios
    validarCamposObrigatorios(): void {
      cy.get(this.usernameInput).should('be.visible');
      cy.get(this.passwordInput).should('be.visible');
      cy.get(this.loginButton).should('be.visible');
    }
  }
  
  export default new LoginPage();