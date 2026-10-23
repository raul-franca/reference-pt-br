---
title: Telnet
date: 2025-08-10 18:28:43
background: bg-indigo-400
tags:
  - network
  - scan
  - port
categories:
  - Comandos Linux
intro:
  Este cheat sheet serve como lembrete rápido dos principais conceitos envolvidos no uso do programa de linha de comando
  telnet e pressupõe que você já conhece sua utilização.
plugins:
  - copyCode
---

## Primeiros passos

### Uso

Uso padrão (ou seja, um host para se conectar pode ser por IP ou por domínio)

```shell script
$ telnet [options] target [port]
```

comunique-se pelo protocolo http

```shell script
$ telnet example.com 80
```

crie um arquivo de traceroute

```shell script
$ telnet example.com 80
```

### Exemplos de opções

| Opção | Exemplo               | Operação                                                         |
| ----- | --------------------- | ---------------------------------------------------------------- |
| `-E`  | telnet -E target port | Trata todos os caracteres como dados e evita cair para o comando |
| `-e`  | telnet -e '^C' host   | Define um caractere de escape personalizado em vez do padrão ^]  |
| `-l`  | telnet -l alice host  | Passa um nome de usuário para o host remoto                      |
| `-d`  | telnet -d host        | Ativa o modo de depuração                                        |
| `-l`  | telnet -n host        | Cria um arquivo de trace                                         |

## Veja também

- [Telnet manpage](https://www.commandlinux.com/man-page/man1/telnet.1.html)
