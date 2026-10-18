---
title: SSH
date: 2021-01-27 11:48:05
background: bg-blue-400
tags:
  - protocol
  - remote
  - network
  - 22
categories:
  - Comandos Linux
intro: |
  Este cheat sheet de referência rápida apresenta várias formas de usar o SSH.
plugins:
  - copyCode
---

## Primeiros passos

### Conexão

Conecte-se a um servidor (porta padrão 22)

```shell script
$ ssh root@192.168.1.5
```

Conecte-se em uma porta específica

```shell script
$ ssh root@192.168.1.5 -p 6222
```

Conecte-se via arquivo pem (permissões 0400)

```shell script
$ ssh -i /path/file.pem root@192.168.1.5
```

Veja: [Permissões do SSH](/chmod#ssh-permissions)

### Executando

Executa um comando remoto

```shell script
$ ssh root@192.168.1.5 'ls -l'
```

Invoque um script local

```shell script
$ ssh root@192.168.1.5 bash < script.sh
```

Compacta e baixa de um servidor

```shell script {.wrap}
$ ssh root@192.168.1.5 "tar cvzf - ~/source" > output.tgz
```

### IP público

Verifique o IP público desta máquina

```shell script
$ curl myip.dog
```

Verifique o IP público de um servidor remoto (requer curl no servidor)

```shell script
$ ssh user@server 'curl myip.dog'
```

Mais ferramentas de IP: [myip.dog](https://myip.dog/)

### SCP {.row-span-2}

Copia do remoto para o local

```shell script
$ scp user@server:/dir/file.ext dest/
```

Copia entre dois servidores

```shell script
$ scp user@server:/file user@server:/dir
```

Copia do local para o remoto

```shell script
$ scp dest/file.ext user@server:/dir
```

Copia uma pasta inteira

```shell script
$ scp -r user@server:/dir dest/
```

Copia todos os arquivos de uma pasta

```shell script
$ scp user@server:/dir/* dest/
```

Copia de uma pasta do servidor para a pasta atual

```shell script
$ scp user@server:/dir/* .
```

### Localização da configuração

| Caminho do arquivo       | Descrição                          |
| ------------------------ | ---------------------------------- |
| `/etc/ssh/ssh_config`    | Configuração global do sistema     |
| `~/.ssh/config`          | Configuração específica do usuário |
| `~/.ssh/id_{type}`       | Chave privada                      |
| `~/.ssh/id_{type}.pub`   | Chave pública                      |
| `~/.ssh/known_hosts`     | Servidores conhecidos              |
| `~/.ssh/authorized_keys` | Chave de login autorizada          |

### Opções do SCP

| Opções        | Descrição                                           |
| ------------- | --------------------------------------------------- |
| scp `-r`      | Copia <yel>r</yel>ecursivamente diretórios inteiros |
| scp `-C`      | <yel>C</yel>ompacta os dados                        |
| scp `-v`      | Exibe saída <yel>v</yel>erbosa                      |
| scp `-P` 8080 | Usa uma <yel>p</yel>orta específica                 |
| scp `-B`      | Modo <yel>b</yel>atch _(evita a senha)_             |
| scp `-p`      | <yel>p</yel>reserva tempos e modos                  |

### Exemplo de configuração

```toml
Host server1
    HostName 192.168.1.5
    User root
    Port 22
    IdentityFile ~/.ssh/server1.key
```

Inicie pelo alias

```shell script
$ ssh server1
```

Veja: todas as [opções de configuração](https://linux.die.net/man/5/ssh_config)

### ProxyJump

```shell script
$ ssh -J proxy_host1 remote_host2
```

```shell script {.wrap}
$ ssh -J user@proxy_host1 user@remote_host2
```

Vários saltos

```shell script {.wrap}
$ ssh -J user@proxy_host1:port1,user@proxy_host2:port2 user@remote_host3
```

### ssh-copy-id

```shell script {.wrap}
$ ssh-copy-id user@server
```

Copia para o servidor de alias

```shell script {.wrap}
$ ssh-copy-id server1
```

Copia uma chave específica

```shell script {.wrap}
$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server
```

## SSH keygen {.cols-5}

### ssh-keygen {.col-span-2}

```shell script
$ ssh-keygen -t rsa -b 4096 -C "your@mail.com"
```

---

| --- | ---- | -------------------------- |
| --- | ---- | -------------------------- |
|     | `-t` | [Tipo](#key-type) da chave |
|     | `-b` | O número de bits da chave  |
|     | `-C` | Fornece um novo comentário |

{.left-text}

Gere uma chave RSA de 4096 bits com o e-mail como comentário, ou use o [SSH Key Generator](https://sshkeygenerator.com/) online

### Gerar {.col-span-2 .row-span-2}

Gere uma chave de forma interativa

```shell script
$ ssh-keygen
```

Especifique o nome do arquivo

```shell script
$ ssh-keygen -f ~/.ssh/filename
```

Gere a chave pública a partir da chave privada

```shell script
$ ssh-keygen -y -f private.key > public.pub
```

Altere o comentário

```shell script
$ ssh-keygen -c -f ~/.ssh/id_rsa
```

Altere a passphrase da chave privada

```shell script
$ ssh-keygen -p -f ~/.ssh/id_rsa
```

### Tipo de chave

- rsa
- ed25519
- dsa
- ecdsa

### known_hosts {.col-span-2}

Pesquise em known_hosts

```shell script
$ ssh-keygen -F <ip/hostname>
```

Remova de known_hosts

```shell script
$ ssh-keygen -R <ip/hostname>
```

### Formato da chave

- PEM
- PKCS8

## Túneis SSH

### Opções de túnel SSH {.row-span-2}

| Opção | Descrição                                                           |
| ----- | ------------------------------------------------------------------- |
| `-L`  | Encaminhamento de porta local                                       |
| `-R`  | Encaminhamento de porta remota                                      |
| `-D`  | Encaminhamento de porta dinâmico                                    |
| `-f`  | Executa em segundo plano                                            |
| `-N`  | Não executa um comando remoto                                       |
| `-g`  | Permite que hosts remotos se conectem às portas locais encaminhadas |

{.left-text}

mais detalhes sobre as flags acima com `man ssh`

### Encaminhamento de porta local {.col-span-2}

```bash
# Forward a local port to a remote server
ssh -L local_port:remote_host:remote_port user@ssh_server

# Example: Forward local port 8080 to remote port 80 on example.com
ssh -L 8080:example.com:80 user@ssh_server
```

### Encaminhamento de porta dinâmico {.col-span-2}

```bash
# Create a SOCKS proxy on a local port
ssh -D local_port user@ssh_server

# Create a SOCKS proxy on local port 1080 in the background
ssh -f -N -D 1080 user@ssh_server
```

### Túnel em segundo plano {.col-span-3}

```bash
# Create a local port forwarding tunnel in the background
ssh -f -N -L local_port:remote_host:remote_port user@ssh_server
```

### Vários túneis {.col-span-3}

```bash
# Create multiple tunnels in a single SSH command
ssh -L 8080:example.com:80 -L 3306:db.example.com:3306 user@ssh_server
```

### Combinando opções {.col-span-3}

```bash
# In background, no command, allow remote host, local port forward, identity_file
ssh -f -N -g -L 8080:example.com:80 -i ~/.ssh/custom_key user@ssh_server
```

## Veja também

- [Exemplos de arquivo de configuração do OpenSSH](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/) _(cyberciti.biz)_
- [ssh_config](https://linux.die.net/man/5/ssh_config) _(linux.die.net)_
- [man-ssh](https://man7.org/linux/man-pages/man1/ssh.1.html)
