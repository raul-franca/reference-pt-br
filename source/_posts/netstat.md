---
title: Netstat
date: 2021-01-27 11:44:21
background: bg-slate-700
tags:
  - network
  - utility
  - port
categories:
  - Comandos Linux
intro: |
  Este cheat sheet de referência rápida traz vários exemplos de uso do comando netstat.
plugins:
  - copyCode
---

## Primeiros passos

### Estatísticas

Todas as conexões na porta 80

```shell script
$ netstat -anp | grep :80
```

Ajuda do Netstat

```shell script
$ netstat -h
```

### Escuta

| Opção            | Exemplo                   |
| ---------------- | ------------------------- |
| `netstat -ltunp` | Todas as portas em escuta |
| `netstat -ltn`   | Portas TCP em escuta      |
| `netstat -lun`   | Portas UDP em escuta      |
| `netstat -lx`    | Portas Unix em escuta     |

### Conexões

| Opção         | Exemplo               |
| ------------- | --------------------- |
| `netstat -a`  | Todas as conexões     |
| `netstat -at` | Todas as conexões TCP |
| `netstat -au` | Todas as conexões UDP |

### Estatísticas

| Opção         | Exemplo                |
| ------------- | ---------------------- |
| `netstat -s`  | Exibe estatísticas     |
| `netstat -st` | Exibe estatísticas TCP |
| `netstat -su` | Exibe estatísticas UDP |

### Redes

| Opção         | Exemplo                                              |
| ------------- | ---------------------------------------------------- |
| `netstat -i`  | Mostra as interfaces de rede                         |
| `netstat -ie` | Mostra informações estendidas das interfaces de rede |

### IP público

Verifica o IP público desta máquina

```shell script
$ curl myip.dog
```

Mais ferramentas de IP: [myip.dog](https://myip.dog/)

### Roteamento

| Opção         | Exemplo                                           |
| ------------- | ------------------------------------------------- |
| `netstat -r`  | Mostra a tabela de roteamento                     |
| `netstat -rn` | Mostra a tabela de roteamento, sem resolver hosts |
