---
title: Lsof
date: 2021-02-05 16:12:47
background: bg-blue-400
tags:
  - port
  - processes
  - utility
categories:
  - Comandos Linux
intro: |
  Este cheat sheet de referência rápida traz vários exemplos de uso do comando lsof.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

**lsof**, de `L`i`S`t `O`pen `F`iles, serve para descobrir quais arquivos estão abertos por qual processo

```shell script
$ lsof
$ sudo lsof -u root
```

### Por porta

```shell script
$ lsof -i :8080
$ lsof -i :80 -i :22
$ lsof -i TCP:22
$ lsof -i TCP:1-1024
$ lsof -i UDP
$ lsof -i @192.168.1.5
```

### Por processo

```shell script
$ lsof -c mysql
$ lsof -c java
$ lsof -c ssh
$ lsof -c nginx
$ lsof -c ssh -c httpd
```

### Por usuário

```shell script
$ lsof -u www-data
$ lsof -u www-data -u ubuntu
$ lsof -i -u ^root # Except certain user
```

### Por rede

```shell script
$ lsof -i 4   # IPv4 only
$ lsof -i 6   # IPv6 only
```

### Por PID

```shell script
$ lsof -p 1753
$ lsof -p ^3  # Except certain pids
```

### Por nome de arquivo

```shell script
$ lsof /var/log/messages
$ lsof /etc/passwd
```

### Por diretório

```shell script
$ lsof +D /var/log # Within a directory
```

### Matar processo

```shell script
$ kill -9 `lsof -t -u apache`
$ kill -9 $(lsof -t -i :8080)
```
