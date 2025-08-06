# 📼 Video Manager API

Uma aplicação backend em **Node.js** com o framework **Fastify** para gerenciamento de vídeos através de uma **API RESTful**. Com ela, é possível **criar**, **ler**, **atualizar** e **deletar** vídeos, com persistência de dados em banco de dados online através do **Neon** (PostgreSQL).

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [PostgreSQL (Neon)](https://neon.tech/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 📚 O que aprendi com esse projeto

Durante o desenvolvimento, pude adquirir e aprofundar conhecimentos em:
- ✅ Criação de **APIs REST** com Node.js e o framework Fastify.
- ✅ Conceitos de **encapsulamento** e **programação orientada a objetos** com JavaScript.
- ✅ Métodos HTTP: `GET`, `POST`, `PUT`, `DELETE`
- ✅ Utilização de métodos assíncronos com async/await.
- ✅ Diferença entre **Query Parameters** e **Route Parameters**
- ✅ Como retornar e consumir dados no formato **JSON**
- ✅ Armazenamento de dados em **memória local** para testes iniciais
- ✅ Migração para **banco de dados online** usando **Neon (PostgreSQL)**
- ✅ Processo de deploy de aplicações Node.js usando o **Render**.


Esse processo me proporcionou uma visão prática de como evoluir uma API do ambiente local até uma estrutura mais robusta com banco de dados real.

## 📦 Funcionalidades da API

| Método | Rota           | Descrição                        |
|--------|----------------|----------------------------------|
| GET    | /videos        | Lista todos os vídeos            |
| POST   | /videos        | Cria um novo vídeo               |
| PUT    | /videos/:id    | Atualiza um vídeo existente      |
| DELETE | /videos/:id    | Deleta um vídeo                  |

> Todas as rotas trabalham com dados em JSON e utilizam boas práticas de desenvolvimento de API RESTful.

🚀 Como Executar o Projeto

Siga os passos abaixo para clonar o repositório, instalar as dependências e iniciar o servidor.

1. Clonar o Repositório
   
Abra seu terminal e execute os seguintes comandos:

- git clone https://github.com/seu-usuario/seu-repositorio.git
- cd seu-repositorio
  
2. Instalar as Dependências
   
Em seguida, instale todas as dependências do projeto com o seguinte comando:
npm install

3. Configurar o Banco de Dados
   
Configure as variáveis de ambiente com os dados de conexão do seu banco de dados Neon. Você pode fazer isso criando um arquivo .env na raiz do projeto, por exemplo:
DATABASE_URL= "sua_string_de_conexao_do_neon"

4. Iniciar o Servidor
   
Após a configuração, você pode iniciar o servidor de desenvolvimento:
npm run dev

## A API estará acessível em http://localhost:3333.
☁️ Deploy: Este projeto foi implantado na plataforma Render, garantindo que a aplicação esteja disponível online de forma contínua.
