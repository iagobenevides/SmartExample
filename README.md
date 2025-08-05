# SmartBus - Automação de Testes

Projeto de automação de testes end-to-end para o sistema SmartBus da Guanabara utilizando Cypress e TypeScript.

## 🚀 Tecnologias Utilizadas

- **Cypress** (v14.5.2) - Framework de testes E2E
- **TypeScript** (v5.7.3) - Linguagem de programação
- **dotenv** (v16.4.7) - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
smartbus/
├── cypress/
│   ├── e2e/                    # Testes end-to-end
│   │   ├── Login.cy.ts
│   │   ├── LoginMelhorado.cy.ts
│   │   ├── PesquisaTrecho.cy.ts
│   │   ├── CarrocelOrigem.cy.ts
│   │   └── CarrocelDestino.cy.ts
│   ├── pageObjects/            # Page Object Pattern
│   │   ├── loginPage.ts
│   │   └── mainPage.ts
│   ├── support/                # Configurações e utilitários
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   └── testConfig.ts
│   ├── fixtures/               # Dados de teste
│   │   ├── example.json
│   │   └── testData.json
│   └── downloads/              # Downloads dos testes
├── cypress.config.js           # Configuração do Cypress
├── package.json                # Dependências do projeto
├── example.env                 # Exemplo de variáveis de ambiente
└── README.md                   # Documentação
```

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd smartbus
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp example.env .env
```
Edite o arquivo `.env` com suas credenciais:
```
USERLOGIN = "sua_matricula"
PASSWORD = "sua_senha"
```

## 🧪 Executando os Testes

### Executar todos os testes
```bash
npx cypress run
```

### Executar testes específicos
```bash
npx cypress run --spec "cypress/e2e/Login.cy.ts"
```

### Abrir interface do Cypress
```bash
npx cypress open
```

### Executar testes em modo headless
```bash
npx cypress run --headless
```

## 📋 Padrões Utilizados

### 1. Page Object Pattern
- Separação entre lógica de teste e seletores
- Métodos reutilizáveis para ações comuns
- Encapsulamento de elementos da página

### 2. Configuração Centralizada
- Variáveis de ambiente para credenciais
- Configuração centralizada no `testConfig.ts`
- Fixtures para dados de teste

### 3. Comandos Customizados
- Comandos reutilizáveis no `commands.js`
- Redução de código duplicado
- Melhor manutenibilidade

### 4. TypeScript
- Tipagem estática para melhor manutenibilidade
- Configuração específica para Cypress
- Melhor IntelliSense

## 🎯 Funcionalidades Testadas

### Sistema de Login
- ✅ Login com credenciais válidas
- ✅ Validação de credenciais inválidas
- ✅ Validação de campos obrigatórios
- ✅ Testes de responsividade
- ✅ Testes de acessibilidade

### Pesquisa de Trechos
- ✅ Preenchimento de origem e destino
- ✅ Seleção de data de viagem
- ✅ Busca de trechos disponíveis

### Carrosséis de Seleção
- ✅ Testes específicos para carrossel de origem
- ✅ Testes específicos para carrossel de destino

## 🔧 Melhorias Implementadas

### 1. Estrutura e Organização
- [x] Comandos customizados reutilizáveis
- [x] Configuração centralizada de dados
- [x] Page Objects melhorados com tipagem
- [x] Fixtures para dados de teste

### 2. Configuração do Cypress
- [x] Timeouts configuráveis
- [x] Retry automático em falhas
- [x] Screenshots e vídeos automáticos
- [x] Configuração de viewport

### 3. Qualidade de Código
- [x] Tipagem TypeScript
- [x] Comentários explicativos
- [x] Estrutura modular
- [x] Nomenclatura consistente

## 📊 Relatórios e Evidências

O Cypress gera automaticamente:
- Screenshots em caso de falha
- Vídeos dos testes executados
- Logs detalhados de execução

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe de QA. 