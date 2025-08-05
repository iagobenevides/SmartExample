// Configurações centralizadas para testes
export const TestConfig = {
  // URLs
  baseUrl: 'https://prod-guanabara-frontoffice-smartbus.smarttravelit.com/',
  
  // Timeouts
  timeouts: {
    default: 10000,
    long: 30000,
    short: 5000
  },
  
  // Dados de teste
  testData: {
    usuarios: {
      valido: {
        login: Cypress.env('USERLOGIN'),
        senha: Cypress.env('PASSWORD')
      },
      invalido: {
        login: 'usuarioInvalido',
        senha: 'senhaInvalida'
      }
    },
    trechos: {
      origem: 'benedito',
      destino: 'inhucu'
    }
  },
  
  // Mensagens de erro esperadas
  errorMessages: {
    loginInvalido: 'Usuário ou senha inválidos',
    campoObrigatorio: 'Campo obrigatório'
  },
  
  // Seletores comuns
  selectors: {
    carrossel: '.form-input-select',
    busca: '.select2-search__field',
    resultados: '.select2-results__options'
  }
};

// Utilitários para datas
export const DateUtils = {
  getDataFutura(dias: number = 30): string {
    return new Date(new Date().setDate(new Date().getDate() + dias))
      .toLocaleDateString('pt-BR');
  },
  
  getDataFormatada(data: Date): string {
    return data.toLocaleDateString('pt-BR');
  }
}; 