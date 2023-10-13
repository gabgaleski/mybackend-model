<div align='center'>

<h1>Backend Model</h1>
<p>Uma construção backend utilizando Node.js, Express, Sequelize e MySQL ja configurados</p>

<h4> <span> · </span> <a href="https://github.com/gabgaleski/mybackend-model/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/gabgaleski/mybackend-model/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/gabgaleski/mybackend-model/issues"> Request Feature </a> </h4>


</div>

# :notebook_with_decorative_cover: Objetivo
O objetivo é criar um modelo de API Restfull em um backend que segue uma arquitetura e modelo expansivos para serem implementados.


## :star2: Sobre o Projeto
Um modelo de API Restfull com um backend configurado no sequelize para o banco de dados MySQL, utilizando Typescript com POO seguindo o SOLID.
O Backend conta um endpoint para /users com todo o CRUD e criptografia na senha para exemplificar, e um para login com retorno de JWT.

O backend e o banco de dados estao configurados tambem em um docker compose, facilitando o desenvolvimento e permitindo a criação de um frontend no mesmo arquivo

### :dart: Features
- Node.js
- Typescript
- Express
- Sequelize
- MySQL
- Docker



### :key: Environment Variables
O projeto ja esta com as variaveis de ambiente exemplificada, porem o que sera preciso para rodar o projeto é um arquivo .env com as seguintes chaves

`APP_PORT`

`JWT_SECRET`

`DB_USER`

`DB_PASS`

`DB_HOST`

`DB_PORT`

### Init
Para iniciar o projeto basta copiar e colar os codigos no terminal logo apos rodar o `npm install`. È importante seguir a ordem dos comandos para 
rodar tudo corretamente

- `docker-compose up -d --build`
- `npm run db:reset`

Pode rodar o comando `docker exec -it backend bash` para entrar no terminal do container `backend`
