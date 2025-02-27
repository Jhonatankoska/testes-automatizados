# 🧪 Testes Automatizados com Cypress - Padrão POM

Este repositório contém testes automatizados utilizando **Cypress** com o padrão **Page Object Model (POM)**. O fluxo testado envolve o fechamento de pop-ups e o preenchimento de um formulário de contato.

---

## 📂 Estrutura de Pastas

```
/cypress
 ├── e2e/
 │    ├── pages/
 │    │    ├── adaptliviu/
 │    │    │    ├── EntrarEmContatoPage.js  # Page Object do Formulário de Contato
 │    │    │    ├── PopUpInicioPage.js      # Page Object dos Pop-ups
 │    ├── tests/
 │    │    ├── adaptliviu/
 │    │    │    ├── contatoTest.cy.js       # Teste automatizado      
 ├── support/
 │    ├── commands.js                       # Comandos customizados (opcional)
 ├── cypress.config.js                      # Configurações do Cypress
 ├── package.json                           # Dependências do projeto
 ├── README.md                              # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ **Instalar dependências**
Certifique-se de que possui o Node.js instalado. Em seguida, instale as dependências do projeto:
```sh
npm install
```

### 2️⃣ **Executar os testes no modo interativo**
```sh
npx cypress open
```
Isso abrirá o **Cypress Test Runner**, onde você pode selecionar e rodar os testes manualmente.

### 3️⃣ **Executar os testes no modo headless**
```sh
npx cypress run
```
Isso executará todos os testes em segundo plano, sem interface gráfica.

---

## 🎯 Padrão Utilizado - Page Object Model (POM)
O **Page Object Model (POM)** é uma abordagem que organiza os testes criando classes para representar páginas, tornando os testes mais reutilizáveis e fáceis de manter.

- **Vantagens:**
  - Separar a lógica da interface dos testes.
  - Facilitar a manutenção e reutilização do código.
  - Melhor legibilidade e organização dos testes.


---

## 🔄 Fluxo Automatizado
O teste cobre o seguinte fluxo:

1. **Acessa a página inicial**.
2. **Fecha os pop-ups iniciais** (pop-up principal e do WhatsApp).
3. **Clica no botão "Fale com Nossa Equipe"**.
4. **Preenche o formulário de contato** com:
   - Nome
   - E-mail dinâmico (para evitar duplicidade)
   - Mensagem
   - Selecionação de um campo dropdown
   - Campo numérico dinâmico
   - Campo de texto longo
5. **Marca a caixa de aceitação de e-mails**.
6. **Submete o formulário**.
7. **Valida a mensagem de sucesso**.

---

## 🛠 Tecnologias Utilizadas
- **Cypress** (framework de testes E2E)
- **JavaScript**
- **Page Object Model (POM)**

---



