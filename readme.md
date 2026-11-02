# 🎙️ API Podcast

API desenvolvida com **Node.js e TypeScript** para gerenciamento e consulta de episódios de podcasts, permitindo listar episódios e realizar filtros pelo nome do podcast.

O projeto tem como objetivo centralizar informações de diferentes podcasts, organizando seus episódios por categorias, como saúde, esporte, programação e entretenimento.

## 🚀 Tecnologias utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **TypeScript** – Tipagem estática e organização do código.
- **HTTP nativo do Node.js** – Criação e gerenciamento do servidor HTTP.
- **JSON** – Armazenamento dos dados dos episódios.
- **TSX** – Execução de arquivos TypeScript durante o desenvolvimento.

## 📌 Funcionalidades

- Listagem de episódios de podcasts.
- Busca de episódios pelo nome do podcast.
- Organização dos dados em formato JSON.
- Separação de responsabilidades utilizando arquitetura em camadas.

## 📂 Estrutura do projeto

```text
apiPodcast/
│
├── docs/
│   └── app.md
│
├── src/
│   ├── controller/
│   │   └── podcasts-controller.ts
│   │
│   ├── models/
│   │   ├── filter-podcast-model.ts
│   │   └── podcast-models.ts
│   │
│   ├── repositories/
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json
│   │
│   ├── routes/
│   │   └── routes.ts
│   │
│   ├── services/
│   │   ├── filter-episodes-services.ts
│   │   └── list-episodes-services.ts
│   │
│   ├── utils/
│   │   ├── content-type.ts
│   │   ├── http-methods.ts
│   │   └── status-code.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .gitignore
├── package.json
└── tsconfig.json
```

## ⚙️ Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd apiPodcast
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
```

### 5. Execute a aplicação

Para iniciar o servidor:

```bash
npm run start:dev
```

Para executar com reinicialização automática durante o desenvolvimento:

```bash
npm run start:watch
```

## 🌐 Endpoints

A API disponibiliza os seguintes endpoints:

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/list` | Listagem de episódios |
| GET | `/api/episode?p=flow` | Filtro de episódios pelo nome do podcast |

### Exemplo de requisição

**Buscar episódios do Flow Podcast:**

```http
GET http://localhost:3000/api/episode?p=flow
```

**Resposta esperada:**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categorias": [
      "saúde",
      "esporte",
      "bodybuilder"
    ]
  }
]
```

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes de desenvolvimento backend:

- Criação de servidores HTTP com Node.js.
- Utilização de TypeScript em projetos backend.
- Organização de rotas e controllers.
- Separação de responsabilidades entre services e repositories.
- Manipulação e leitura de arquivos JSON.
- Utilização de métodos HTTP e códigos de status.
- Configuração de variáveis de ambiente.
- Modularização utilizando ES Modules.