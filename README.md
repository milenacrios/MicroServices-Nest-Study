<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
## Utilizando NestJS e Prisma para fazer um CRUD(Create, Read, Update e Delete)
### O que é o NestJS?
<ul> 
    <li> Um kit (framework ou sdk) de desenvolvimento completo para criar aplicativos escalonáveis do lado do servidor. </li>
    <li> permite  escalabilidade, portanto, trata-se de plataformas e sistemas que suportam um determinado volume de acessos/requisições e continua ativo. </li> 
    <li> processa no lado backend</li>
</ul>

### Principais Características
<ul> 
    <li> Extensível = foi construído e é mantido com pacotes </li>
    <li> Versátil = permite utilizar em diferentes arquiteturas/abordagens </li> 
    <li> Progressivo = foi construído a partir de boas práticas (clean code) da atualidade do mundo javascript </li>
</ul>

### Arquitetura 
<ul>
    <li> - SPA = single page application (separação clara de front end (programação do lado do cliente) e back end (controller e model do lado do servidor). </li>
    <li> Controladores são responsáveis por lidar com as solicitações recebidas e retornar as respostas ao cliente. Nesse caso, utilizamos classes e decoradores conforme o arquivo book.controller.ts. Os decoradores associam as classes aos metadados necessários e permitem que o nest crie um mapa de roteamento. </li>
    <li> Serviços são conceitos fundamentais do Nest. Muitas das classes Nest básicas podem ser tratadas como serviços, repositórios, fábricas, etc. A ideia principal é que ele possa ser injetado como uma dependência, isto é, os objetos podem criar vários relacionamentos entre si. Ness aplicação, criamos um serviço responsável por estabelecer os métodos de CRUD e usa o decorador @Injectable.  </li>
    <li> Um módulo é uma classe que possui o decorador @Module e serve para fornecer a estrutura do aplicativo pro Nest executar. No caso dessa aplicação, tanto o bookService quanto o BookController são relacionados e, por isso, faz sentido movê-los para um módulo de recurso, que será capaz de organizar o código relevante para um recurso específico</li>
</ul>


## Instalação do Nest:
O primeiro passo consiste na instalação, utilizando a dependência necessária:
<ul> 
    <li> npm i --save @nestjs/config </li>
</ul>

## Criando a aplicação
Para criar um novo projeto nest, dê:
<ul> 
    <li> nest new project-name </li>
</ul>

## Execução
Executando em ambiente de desenvolvimento:
<ul> 
    <li> npm run start </li>
</ul>

## Instalando a dependência do Prisma
Integre a dependência do prisma ao ambiente do nest, com: 
<ul> 
    <li> npx prisma </li>
</ul>

## Iniciando o prisma
O comando abaixo permitirá a criação de uma pasta prisma com um arquivo schema.prisma e contém as informações do provider. Além de um arquivo .env, que contém a url do database a  ser utilizado
<ul> 
    <li> npx prisma init </li>
</ul>

## Modificação no arquivo .env
Alteramos a url do arquivo .env para utilizar sqlite de acordo com a documentação. Essa url será chamada no arquivo schema.prisma 
<ul> 
    <li> DATABASE_URL="file:./dev.db" </li>
</ul>

## Criação do model
Ao utilizar o comando model table {colunas da tabela} você está criando uma nova tabela no seu banco de dados, mas precisa gerar os arquivos de migração no banco de dados, por isso o comando é válido:
<ul> 
    <li> npx prisma migrate dev --name init</li>
</ul>

## Gerando o model, server e controller do NestJS
O NestJS permite você criar os arquivos app.module.ts, app.controller.ts e app.service.ts dentro da aplicação. Para isso, utiliza-se o seguinte comando:
<ul> 
    <li> nest g resource {name} modules</li>
</ul>

## Criando Serviços
O arquivo service permite a instanciação do seu prismaClient e a conexão com o banco de dados. Assim, é possível escrever os serviços que podem ser usados para fazer chamadas de banco de dados para os modelos criados em schema.prisma. No caso dessa aplicação, definimos uma classe com o decorador @injectable e programamos as funções de CRUD

## Implementando rotas de API Rest no controller
Agora que os serviços estão criados, precisamos dizer ao controlados as rotas em que serão instanciados durante a nossa aplicação. Nesse caso, utilizamos os controladores de crud para definir as seguintes rotas:
<ul> 
    <li> Get: /boo = lista todos os livros do banco de dados e :id lista a informação do livro por id passado pela url</li>
    <li> Post: /book = insere um novo objeto ao banco de dados </li>
    <li> Put: :id = edita um objeto do banco de acordo com o id passado </li>
    <li> Delete: :id = apaga um objeto do banco de acordo com o id passado </li>
</ul>