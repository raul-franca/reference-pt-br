---
title: Chmod
date: 2021-07-01 10:51:44
background: bg-indigo-600
tags:
  - permission
categories:
  - Comandos Linux
intro: |
  Este cheat sheet de referência rápida oferece uma visão geral das permissões de arquivo e da operação do comando chmod
plugins:
  - copyCode
---

## Primeiros passos

### Sintaxe

```shell script
$ chmod [options] <permissions> <file>
```

#### Exemplo

```shell
$ chmod 755 foo.txt
$ chmod +x cheatsheets.py
$ chmod u-x cheatsheets.py
$ chmod u=rwx,g=rx,o= cheatsheets.sh
```

#### Alterar arquivos e diretórios recursivamente

```shell
$ chmod -R 755 my_directory
```

O comando `chmod` significa "change mode" (alterar modo)

### Gerador de chmod

<widget name="chmod"/>

O Gerador de chmod permite criar permissões rapidamente e de forma visual, tanto em formato numérico quanto simbólico.

### Permissões comuns

| Comando | s         | Significado                            |
| ------- | --------- | -------------------------------------- |
| `400`   | r-------- | Legível apenas pelo proprietário       |
| `500`   | r-x------ | Evitar alterações                      |
| `600`   | rw------- | Alterável pelo usuário                 |
| `644`   | rw-r--r-- | Leitura e alteração pelo usuário       |
| `660`   | rw-rw---- | Alterável pelo usuário e pelo grupo    |
| `700`   | rwx------ | Apenas o usuário tem acesso total      |
| `755`   | rwxr-xr-x | Alterável apenas pelo usuário          |
| `775`   | rwxrwxr-x | Modo de compartilhamento para um grupo |
| `777`   | rwxrwxrwx | Todos podem fazer tudo                 |

### Explicação

```shell
$ ls -l
-rw-r--r--  1 root root 3 Jun 29 15:35 a.log
drwxr-xr-x  2 root root 2 Jun 30 18:06 dir
```

#### Análise das permissões de "dir"

```text
d  rwx  r-x  r-x
┬  ─┬─  ─┬─  ─┬─
│   │    │    │
│   │    │    └─ 4. Other｜5 (4+0+1)
│   │    └────── 3. Group｜5 (4+0+1)
│   └─────────── 2. User ｜7 (4+2+1)
└─────────────── 1. File Type | directory
```

### Modos de permissão {.col-span-2}

| Permissão | Descrição              | Octal | Decimal   |
| --------- | ---------------------- | ----- | --------- |
| `---`     | Sem permissão          | 000   | 0 (0+0+0) |
| `--x`     | Executar               | 001   | 1 (0+0+1) |
| `-w-`     | Gravar                 | 010   | 2 (0+2+0) |
| `-wx`     | Executar e gravar      | 011   | 3 (0+2+1) |
| `r--`     | Ler                    | 100   | 4 (4+0+0) |
| `r-x`     | Ler e executar         | 101   | 5 (4+0+1) |
| `rw-`     | Ler e gravar           | 110   | 6 (4+2+0) |
| `rwx`     | Ler, gravar e executar | 111   | 7 (4+2+1) |

{.show-header}

### Objetos

| Quem (abrev.) | Significado                  |
| ------------- | ---------------------------- |
| `u`           | `U`suário                    |
| `g`           | `G`rupo                      |
| `o`           | `O`utros                     |
| `a`           | Todos (`A`), o mesmo que ugo |

{.show-header}

### Permissões

| Abreviação | Permissão      | Valor |
| ---------- | -------------- | ----- |
| `r`        | Leitura (`R`)  | 4     |
| `w`        | Gravação (`W`) | 2     |
| `x`        | Execução (`x`) | 1     |
| `-`        | Sem permissão  | 0     |

{.show-header}

### Tipos de arquivo

| Abreviação | Tipo de arquivo  |
| ---------- | ---------------- |
| `d`        | `D`iretório      |
| `-`        | Arquivo comum    |
| `l`        | `L`ink simbólico |

{.show-header}

## Exemplos de chmod

### Operadores

| Símbolo | Descrição |
| ------- | --------- |
| `+`     | Adicionar |
| `-`     | Remover   |
| `=`     | Definir   |

### chmod 600

```shell
$ chmod 600 example.txt
$ chmod u=rw,g=,o= example.txt
$ chmod a+rwx,u-x,g-rwx,o-rwx example.txt
```

### chmod 664

```shell
$ chmod 664 example.txt
$ chmod u=rw,g=rw,o=r example.txt
$ chmod a+rwx,u-x,g-x,o-wx example.txt
```

### chmod 777

```shell
$ chmod 777 example.txt
$ chmod u=rwx,g=rwx,o=rwx example.txt
$ chmod a=rwx example.txt
```

### Modo simbólico {.row-span-3}

Nega permissão de execução para todos.

```shell
$ chmod a-x chmodExampleFile.txt
```

Concede permissão de leitura para todos.

```shell
$ chmod a+r chmodExampleFile.txt
```

Torna um arquivo legível e gravável pelo grupo e por outros.

```shell
$ chmod go+rw chmodExampleFile.txt
```

Torna um shell script executável pelo usuário/proprietário.

```shell
$ chmod u+x chmodExampleScript.sh
```

Permite que todos leiam, gravem e executem o arquivo e ativa o set group-ID.

```shell
$ chmod =rwx,g+s chmodExampleScript.sh
```

### Removendo permissões {.row-span-3}

Para remover as permissões de leitura e gravação concedidas a um arquivo, use a seguinte sintaxe:

```shell
$ chmod o-rw example.txt
```

Para o nosso arquivo example.txt, podemos remover as permissões de leitura e gravação do grupo executando o seguinte comando:

```shell
$ chmod  g-rx example.txt
```

Para remover as permissões de leitura e gravação do grupo enquanto adicionamos permissão de leitura e gravação para o público/outros, podemos usar
o seguinte comando:

```shell
$ chmod g-rx, o+rx example.txt
```

Mas, se você quiser remover todas as permissões do grupo e de outros, pode fazer isso usando go=:

```shell
$ chmod go= example.txt
```

### Executável

```shell
$ chmod +x ~/example.py
$ chmod u+x ~/example.py
$ chmod a+x ~/example.py
```

### chmod 754

```shell
$ chmod 754 foo.sh
$ chmod u=rwx,g=rx,o=r foo.sh
```

## Práticas com chmod

### Permissões de SSH

```shell script
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/authorized_keys
$ chmod 600 ~/.ssh/id_rsa
$ chmod 600 ~/.ssh/id_rsa.pub
$ chmod 400 /path/to/access_key.pem
```

### Permissões web

```shell script
$ chmod -R 644 /var/www/html/
$ chmod 644 .htaccess
$ chmod 644 robots.txt
$ chmod 755 /var/www/uploads/
$ find /var/www/html -type d -exec chmod 755 {} \;
```

### Alteração em lote

```shell script
$ chmod -R 644 /your_path
$ find /path -type d -exec chmod 755 {} \;
$ find /path -type f -exec chmod 644 {} \;
```

Veja: [Substituição de comandos](https://tldp.org/LDP/abs/html/commandsub.html)

## Veja também

- [Modificar permissões de arquivo com chmod](https://www.linode.com/docs/guides/modify-file-permissions-with-chmod/)
  _(linode.com)_
