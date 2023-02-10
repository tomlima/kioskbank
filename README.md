# Boilerplate JS

### Sobre o projeto

- Contruído com [Nuxt.js](https://nuxtjs.org/) v5.13.6
- Rodando com [Node.js](https://nodejs.org/) v14.15.1
- Iconografia com [Boxicons](https://boxicons.com/)
- CMS com [Strapi](https://strapi.io/v4) v4.2.2
- Sistema simples de grid com 3 colunas
- Porta padrão: 3000

### Instalação

Instalar dependências do Frontend/backend.

```sh
cd /app && npm i
```

Instalar dependências do CMS.

```sh
cd /backend && npm i
```

### Estrutura dos assets

O diretório assets é responsável por armazenar os arquivos de SCSS/CSS que serão utilizados globalmente na aplicação.

```sh
assets
   css
     - normalize.css
   scss
     - global.scss
     - variables.scss
```

> **normalize.css** : Arquivo responsável por aplicar algumas normalizações aos comportamentos padrões do css. [Normalize](https://necolas.github.io/normalize.css/).
> Obs: não é necessário editar este arquivo.

> **variables.scss** : Arquivo que contém variáveis globais que serão utilizadas duante toda a aplicação.

> **global.scss** : Arquivo que contém classes globais que poderão ser utilizadas por toda a aplicação.

### Estrutura dos componentes

Todos os componentes devem estar dentro de um subdiretório que identifique o seu tipo.

```sh
components
   cards
     - PostCardFull.vue
     - PostCardMinimal.vue
```

> O nome de todos os componentes devem estar em PascalCase.

### Estrutura do backend

Diretório que contém uma REST API simples contruída com [Express.js](https://expressjs.com/pt-br/). As chamadas são executadas em `http://localhost:3000/api/${endpoint}`

### Setup inicial

- [x] Adicionar repositório remoto com: git add remote origin [endereço do repositório aqui]
- [x] Editar variáveis de ambiente do CMS em `/cms/.env`.
- [x] Realizar o push do projeto para o repositório remoto
- [x] Editar arquivo de variáveis em `/app/assets/scss/variables.scss`
- [x] Adicionar fontes ao arquivo `/app/nuxt.config.js`
- [x] Adicionar código do GTM ao arquivo `/app//nuxt.config.js`
- [x] Se necessário, alterar o valor de `strapiURL` no arquivo `/app/nuxt.config.js`
- [x] Adicionar os endereços da API de staging e produção na propriedade `baseURL` em `/app/nuxt.config.js`
- [x] Edite o objeto head do arquivo `/app/nuxt.config.js` com as informações pertinentes ao seu projeto
- [x] Crie o arquivo .env com base no .env.example em `/cms`

### Inicializar o projeto

Em ambiente de produção.

```sh
npm run build
npm run start
```

Em ambiente de desenvolvimento.

```sh
npm run dev
```
