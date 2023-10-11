<div align='center'>

<h1>Backend Model</h1>
<p>Uma construção backend utilizando Node.js, Express, Sequelize e MySQL ja configurados</p>

<h4> <span> · </span> <a href="https://github.com/gabgaleski/mybackend-model/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/gabgaleski/mybackend-model/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/gabgaleski/mybackend-model/issues"> Request Feature </a> </h4>


</div>

# :notebook_with_decorative_cover: Purpose
Building a model backend, using CMS layered architecture, the Object-Oriented Programming paradigm and creating a Restfull API.


## :star2: About the Project
<details> <summary>Database</summary> <ul>
<li><a href="">MySQL</a></li>
</ul> </details>
<details> <summary>DevOps</summary> <ul>
<li><a href="">Docker Compose</a></li>
</ul> </details>

### :dart: Features
- Node.js
- Typescript
- Express
- Sequelize
- MySQL
- Docker



### :key: Environment Variables
O projeto ja esta com as variaveis de ambiente exemplificada, porem o que sera preciso para rodar o projeto é um arquivo .env com as seguinter informaçoes

`APP_PORT`

`JWT_SECRET`

`DB_USER`

`DB_PASS`

`DB_HOST`

`DB_PORT`

### Init

- `docker-compose up -d --build`
- `npm run db:reset`
- `docker exec -it backend bash`