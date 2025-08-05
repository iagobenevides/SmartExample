// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comando customizado para login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://prod-guanabara-frontoffice-smartbus.smarttravelit.com/');
  cy.wait(2000);
  cy.get('.div-form-login input[placeholder="usuário"]').type(username);
  cy.get('input[placeholder="senha"]').type(password);
  cy.get('#buttonLogin').should('be.visible').click();
  cy.url().should('not.include', 'login');
  cy.get('.slick-track', { timeout: 10000 }).should('be.visible');
});

// Comando para aguardar carregamento de elementos
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

// Comando para limpar e preencher campos
Cypress.Commands.add('clearAndType', (selector, text) => {
  cy.get(selector).clear().type(text);
});

// Comando para validar mensagens de erro
Cypress.Commands.add('validateErrorMessage', (expectedMessage) => {
  cy.get('#lbl-login-feedback', { timeout: 10000 }).should('contain', expectedMessage);
});

// Comando para selecionar opção do carrossel
Cypress.Commands.add('selectFromCarousel', (inputSelector, searchText) => {
  cy.get(inputSelector).find('.form-input-select').click();
  cy.get('.select2-search__field').type(searchText);
  cy.get('.select2-results__options').contains(' - ').click();
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })