# Angular 2, Express, Redis and Docker Compose project starter

## Getting started

    $ git clone https://github.com/ducksoupdev/angular2-express-docker.git my-project

## Development

    $ docker-compose up -d

The following services will be available:

* Angular 2 webapp - http://localhost:4200
* Express webapp - http://localhost:3000
* Redis - localhost:4201

### Angular 2

This is built with `@angular/cli` v1.0.0-beta.32.3. It runs `ng serve` command to start in development mode with livereload. 
A volume is linked to the `client/src` directory for local development.

### Express

This runs using `nodemon` to provide livereload. A volume is link to the `express/routes` directory for local development.

### Redis

Redis is available on port 4201 for local queries.

## Production

    $ docker-compose -f docker-compose-prod.yml up -d

All services are locked down except for the express webapp running on port 80.
