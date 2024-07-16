# API RESTful de Produtos com Node.js e Express

## Descrição

Este projeto é uma API RESTful simples criada usando Node.js e Express. A API permite operações CRUD (Create, Read, Update, Delete) em uma entidade chamada "Produtos". Cada produto possui os seguintes campos: `id`, `name`, `description`, `price` e `createdAt`.

## Requisitos

- Use o Express para criar as rotas.
- Utilize um banco de dados (Mysql) para armazenar os dados.
- Implemente validação de dados na criação e atualização de produtos.
- Adicione tratamento de erros adequados.

## Configuração

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
### 2. Instalar Dependências
```bash
npm install
```
### 3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente:

`DATABASE_URL=postgres://default:HU1yLnZfws3C@ep-restless-bush-790320.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require`

`PORT=3000`

### 4. Configurar o Prisma

Execute as migrações do Prisma para configurar seu banco de dados:
```bash
npx prisma migrate dev --name init
```
### 5. Iniciar o Servidor
```bash
npm run dev
```
## Documentação da API

#### Retorna todos os itens

```http
  GET /products
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Retorna todos os produtos |

#### Retorna um item

```http
  GET /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Cria um item

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome do produto que você quer Criar |
| `description`      | `string` | **Obrigatório**. A descricao do produto que você quer criar |
| `price`      | `string` | **Obrigatório**. O Preço do produto que você quer criar |

#### Atualiza um item

```http
  PUT /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O Id do produto que quer editar |
| `name`      | `string` | **Obrigatório**. O Nome do produto |
| `description`      | `string` | **Obrigatório**. A descricao do produto |
| `price`      | `string` | **Obrigatório**. O Preço do produto  |

#### Deletar um item

```http
  DELETE /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar |


## Aviso

Acabei usando o Postgress porque nao achei nenhum banco de dados mysql que se encaixasse em producao e fosse de graça!

Desde ja agradeço!
