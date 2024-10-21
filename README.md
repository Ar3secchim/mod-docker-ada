# Projeto Final do Módulo de Conteinerização

Este projeto é um "Sistema de Casa de Eventos", eventos e vendas de ingressos. A aplicação é composta por um backend em Node.js com Express e um frontend em React, ambos conteinerizados usando Docker.

# Estrutura do Projeto

## Pré-requisitos

- Docker e Docker Compose instalados

## Construção das Imagens Docker

Para construir as imagens Docker do backend e frontend, execute o seguinte comando na raiz do projeto:

```sh
docker-compose build
```

## Execução dos Contêineres

Para iniciar os contêineres, execute o seguinte comando:

```sh
docker-compose up
```

A aplicação estará disponível em <http://localhost:3000> para o frontend e <http://localhost:5000> para o backend.

### Links das imagens no Docker Hub

frontend - <https://hub.docker.com/repository/docker/ar3secchim/frontend-events-app/general>

backend - <https://hub.docker.com/repository/docker/ar3secchim/backend-events-app/general>

database- <https://hub.docker.com/repository/docker/ar3secchim/db-events-app/general>
