<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

<h1 align="center">API RESTful com NestJS, Prisma e JWT</h1>

<p align="center">
  API para autenticação de usuários, gerenciamento de dados e integração com banco de dados utilizando NestJS, Prisma e autenticação JWT.
</p>

---

## 📚 Sobre o projeto

Este projeto foi desenvolvido com fins educacionais e de aprendizado prático sobre o framework NestJS.
Trata-se de uma API RESTful desenvolvida com NestJS para autenticação de usuários, utilizando Prisma ORM para acesso ao banco de dados PostgreSQL. A aplicação implementa autenticação com JSON Web Tokens (JWT) e segue boas práticas de organização modular e segurança.

Foram implementadas as seguintes funcionalidades:
- Cadastro de usuários
- Autenticação de usuários com JWT
- Hash de senhas com Bcrypt
- Geração de tokens JWT
- Testes unitários e de integração (e2e) com Jest e SuperTest
- Organização modular usando boas práticas do NestJS

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL instalado e configurado
- Yarn ou NPM

### Clonando o repositório

```bash
git clone https://github.com/pettmedeiros/ProjetoNestJS
cd ProjetoNestJs

## Instalando as dependências

```bash
$ npm install
```

## Compilar e executar o projeto

```bash
# desenvolvimento
$ npm run start

# modo de observação
$ npm run start:dev

# modo de produção
$ npm run start:prod
```

## Execute testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

 # Autor
   Peterson Lisboa Medeiros

   https://www.linkedin.com/in/peterson-medeiros-b54307318/

