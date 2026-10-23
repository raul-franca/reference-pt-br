---
title: Docker
date: 2020-12-30 10:55:24
background: bg-[#488fdf]
tags:
  - container
  - virtual
categories:
  - Programação
intro: |
  Este é um cheat sheet de referência rápida para o [Docker](https://docs.docker.com/get-started/). Aqui você encontra os comandos Docker mais comuns.
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Primeiros passos

Crie e execute um container em segundo plano

```shell script
$ docker run -d -p 80:80 docker/getting-started
```

---

- `-d` - Executa o container em modo detached
- `-p 80:80` - Mapeia a porta 80 para a porta 80 no container
- `docker/getting-started` - A imagem a usar

{.marker-none}

Crie e execute um container em primeiro plano

```shell script
$ docker run -it -p 8001:8080 --name my-nginx nginx
```

---

- `-it` - Modo bash interativo
- `-p 8001:8080` - Mapeia a porta 8001 para a porta 8080 no container
- `--name my-nginx` - Especifica um nome
- `nginx` - A imagem a usar

{.marker-none}

### Comandos gerais

| Exemplo                             | Descrição                                                |
| ----------------------------------- | -------------------------------------------------------- |
| `docker ps`                         | Lista os containers em execução                          |
| `docker ps -a`                      | Lista todos os containers                                |
| `docker ps -s`                      | Lista os containers em execução<br>_(com CPU / memória)_ |
| `docker images`                     | Lista todas as imagens                                   |
| `docker exec -it <container>  bash` | Conecta ao container                                     |
| `docker logs <container>`           | Mostra o log do console do container                     |
| `docker stop <container>`           | Para um container                                        |
| `docker restart <container>`        | Reinicia um container                                    |
| `docker rm <container>`             | Remove um container                                      |
| `docker port <container>`           | Mostra o mapeamento de portas do container               |
| `docker top <container>`            | Lista os processos                                       |
| `docker kill <container>`           | Mata um container                                        |

O parâmetro `<container>` pode ser o id ou o nome do container

## Containers Docker {.cols-2}

### Iniciando e parando

| Descrição                 | Exemplo                             |
| ------------------------- | ----------------------------------- |
| `docker start my-nginx`   | Iniciando                           |
| `docker stop my-nginx`    | Parando                             |
| `docker restart my-nginx` | Reiniciando                         |
| `docker pause my-nginx`   | Pausando                            |
| `docker unpause my-nginx` | Despausando                         |
| `docker wait my-nginx`    | Bloqueando um container             |
| `docker kill my-nginx`    | Enviando um SIGKILL                 |
| `docker attach my-nginx`  | Conectando a um container existente |

### Informações

| Exemplo                   | Descrição                                   |
| ------------------------- | ------------------------------------------- |
| `docker ps`               | Lista os containers em execução             |
| `docker ps -a`            | Lista todos os containers                   |
| `docker logs my-nginx`    | Logs do container                           |
| `docker inspect my-nginx` | Inspecionando containers                    |
| `docker events my-nginx`  | Eventos de containers                       |
| `docker port my-nginx`    | Portas públicas                             |
| `docker top my-nginx`     | Processos em execução                       |
| `docker stats my-nginx`   | Uso de recursos do container                |
| `docker diff my-nginx`    | Lista as alterações feitas em um container. |

### Criando

```yaml
docker create [options] IMAGE
  -a, --attach               # attach stdout/err
  -i, --interactive          # attach stdin (interactive)
  -t, --tty                  # pseudo-tty
      --name NAME            # name your image
  -p, --publish 5000:5000    # port map (host:container)
      --expose 5432          # expose a port to containers
  -P, --publish-all          # publish all ports
      --link container:alias # linking
  -v, --volume `pwd`:/app    # mount (absolute paths needed)
  -e, --env NAME=hello       # env vars
```

#### Exemplo

```shell script
$ docker create --name my_redis --expose 6379 redis:3.0.2
```

### Manipulando

Renomeando um container

```shell script
docker rename my-nginx my-nginx
```

Removendo um container

```shell script
docker rm my-nginx
```

Atualizando um container

```shell script
docker update --cpu-shares 512 -m 300M my-nginx
```

## Imagens Docker {.cols-2}

### Manipulando

| `Example`                          | Descrição                          |
| ---------------------------------- | ---------------------------------- |
| `docker images`                    | Listando imagens                   |
| `docker rmi nginx`                 | Removendo uma imagem               |
| `docker load < ubuntu.tar.gz`      | Carregando um repositório em tar   |
| `docker load --input ubuntu.tar`   | Carregando um repositório em tar   |
| `docker save busybox > ubuntu.tar` | Salva uma imagem em um arquivo tar |
| `docker history`                   | Mostra o histórico de uma imagem   |
| `docker commit nginx`              | Salva um container como imagem.    |
| `docker tag nginx eon01/nginx`     | Aplicando tag em uma imagem        |
| `docker push eon01/nginx`          | Fazendo push de uma imagem         |

### Criando imagens

```shell script
$ docker build .
$ docker build github.com/creack/docker-firefox
$ docker build - < Dockerfile
$ docker build - < context.tar.gz
$ docker build -t eon/my-nginx .
$ docker build -f myOtherDockerfile .
$ curl example.com/remote/Dockerfile | docker build -f - .
```

## Redes Docker {.cols-2}

### Manipulando

Removendo uma rede

```shell script
docker network rm MyOverlayNetwork
```

Listando redes

```shell script
docker network ls
```

Obtendo informações sobre uma rede

```shell script
docker network inspect MyOverlayNetwork
```

Conectando um container em execução a uma rede

```shell script
docker network connect MyOverlayNetwork nginx
```

Conectando um container a uma rede na inicialização

```shell script
docker run -it -d --network=MyOverlayNetwork nginx
```

Desconectando um container de uma rede

```shell script
docker network disconnect MyOverlayNetwork nginx
```

### Criando redes

```shell script
docker network create -d overlay MyOverlayNetwork

docker network create -d bridge MyBridgeNetwork

docker network create -d overlay \
  --subnet=192.168.0.0/16 \
  --subnet=192.170.0.0/16 \
  --gateway=192.168.0.100 \
  --gateway=192.170.0.100 \
  --ip-range=192.168.1.0/24 \
  --aux-address="my-router=192.168.1.5" \
  --aux-address="my-switch=192.168.1.6" \
  --aux-address="my-printer=192.170.1.5" \
  --aux-address="my-nas=192.170.1.6" \
  MyOverlayNetwork
```

## Limpeza {.cols-2}

### Limpar tudo

Limpa imagens dangling, containers, volumes e redes (ou seja, não associados a um container)

```shell
docker system prune
```

---

Além disso, remove todos os containers parados e todas as imagens não utilizadas (não apenas as dangling)

```shell
docker system prune -a
```

### Containers

Para todos os containers em execução

```shell
docker stop $(docker ps -a -q)
```

Exclui os containers parados

```shell
docker container prune
```

### Imagens

Remove todas as imagens dangling (sem tag e não associadas a um container):

```shell
docker image prune
```

Remove todas as imagens que não são usadas por containers existentes

```shell
docker image prune -a
```

### Volumes

```shell
docker volume prune
```

Remove todos os volumes não utilizados por pelo menos um container

## Diversos {.cols-2}

### Docker Hub

| Sintaxe Docker              | Descrição                           |
| --------------------------- | ----------------------------------- |
| `docker search search_word` | Busca imagens no docker hub.        |
| `docker pull user/image   ` | Baixa uma imagem do docker hub.     |
| `docker login             ` | Autentica no docker hub             |
| `docker push user/image   ` | Envia uma imagem para o docker hub. |

### Comandos de registry {.row-span-3}

Login em um registry

```shell script
$ docker login
$ docker login localhost:8080
```

Logout de um registry

```shell script
$ docker logout
$ docker logout localhost:8080
```

Buscando uma imagem

```shell script
$ docker search nginx
$ docker search nginx --stars=3 --no-trunc busybox
```

Baixando uma imagem (pull)

```shell script
$ docker pull nginx
$ docker pull eon01/nginx localhost:5000/myadmin/nginx
```

Enviando uma imagem (push)

```shell script
$ docker push eon01/nginx
$ docker push eon01/nginx localhost:5000/myadmin/nginx
```

### Limpeza em lote

| Exemplo                             | Descrição                  |
| ----------------------------------- | -------------------------- |
| `docker stop -f $(docker ps -a -q)` | Para todos os containers   |
| `docker rm -f $(docker ps -a -q)`   | Remove todos os containers |
| `docker rmi -f $(docker images -q)` | Remove todas as imagens    |

### Volumes

Verifica os volumes

```shell script
$ docker volume ls
```

Limpa volumes não utilizados

```shell script
$ docker volume prune
```
