---
title: Find
date: 2020-12-28 16:52:20
tags:
  - search
  - file
  - directory
categories:
  - Comandos Linux
intro: |
  Esta é uma lista de referência rápida em cheat sheet do comando find do Linux, com opções e exemplos comuns.
plugins:
  - copyCode
---

## Primeiros passos

### Uso

```shell script
$ find [path...] [options] [expression]
```

Curinga (wildcard)

```shell script
$ find . -name "*.txt"
$ find . -name "2020*.csv"
$ find . -name "json_*"
```

---

- [Referência de regex](/regex) _(cheatsheets.zip)_
- [Cheat sheet de find](https://gist.github.com/gr1ev0us/3a9b9d9dbdd38f6379288eb2686fc538) _(gist.github.com)_

### Exemplos de opções {.col-span-2}

| Opção       | Exemplo                                    | Descrição                                   |
| ----------- | ------------------------------------------ | ------------------------------------------- |
| `-type`     | find . -type d                             | Localiza apenas diretórios                  |
| `-name`     | find . -type f -name "\*.txt"              | Localiza arquivo por nome                   |
| `-iname`    | find . -type f -iname "hello"              | Localiza arquivo por nome (sem diferenciar maiúsculas) |
| `-size`     | find . -size +1G                           | Localiza arquivos maiores que 1G            |
| `-user`     | find . -type d -user jack                  | Localiza o arquivo do jack                  |
| `-regex`    | find /var -regex '.\*/tmp/.\*[0-9]\*.file' | Usa regex com o find. Veja [regex](/regex)  |
| `-maxdepth` | find . -maxdepth 1 -name "a.txt"           | No diretório atual e nos subdiretórios      |
| `-mindepth` | find / -mindepth 3 -maxdepth 5 -name pass  | Entre os níveis 2 e 4 de subdiretório       |

{.show-header}

### Tipo

|           |                      |
| --------- | -------------------- |
| `-type d` | Diretório            |
| `-type f` | Arquivo              |
| `-type l` | Link simbólico       |
| `-type b` | Bloco com buffer     |
| `-type c` | Caractere sem buffer |
| `-type p` | Pipe nomeado         |
| `-type s` | Socket               |

### Tamanho

|           |                           |
| --------- | ------------------------- |
| `-size b` | Blocos de 512 bytes (padrão) |
| `-size c` | Bytes                     |
| `-size k` | Quilobytes                |
| `-size M` | Megabytes                 |
| `-size G` | Gigabytes                 |
| `-size T` | Terabytes _(somente BSD)_    |
| `-size P` | Petabytes _(somente BSD)_    |

### Tamanho +/-

Localiza todos os arquivos maiores que 10MB

```shell script
$ find / -size +10M
```

Localiza todos os arquivos menores que 10MB

```shell script
$ find / -size -10M
```

Localiza todos os arquivos com exatamente 10M

```shell script
$ find / -size 10M
```

Localiza arquivos com tamanho entre 100MB e 1GB

```shell script
$ find / -size +100M -size -1G
```

Os prefixos `+` e `-` significam maior que e menor que, como de costume.

### Nomes

Localiza arquivos pelo nome no diretório atual

```shell script
$ find . -name tecmint.txt
```

Localiza arquivos no diretório home

```shell script
$ find /home -name tecmint.txt
```

Localiza arquivos pelo nome ignorando maiúsculas e minúsculas

```shell script
$ find /home -iname tecmint.txt
```

Localiza diretórios pelo nome

```shell script
$ find / -type d -name tecmint
```

Localiza arquivos php pelo nome

```shell script
$ find . -type f -name tecmint.php
```

Localiza todos os arquivos php no diretório

```shell script
$ find . -type f -name "*.php"
```

### Permissões

Localiza os arquivos cujas permissões são 777.

```shell script
$ find . -type f -perm 0777 -print
```

Localiza os arquivos sem a permissão 777.

```shell script
$ find / -type f ! -perm 777
```

Localiza arquivos com SUID definido.

```shell script
$ find / -perm /u=s
```

Localiza arquivos com SGID definido.

```shell script
$ find / -perm /g=s
```

Localiza arquivos somente leitura.

```shell script
$ find / -perm /u=r
```

Localiza arquivos executáveis.

```shell script
$ find / -perm /a=x
```

### Proprietários e grupos

Localiza um único arquivo com base no usuário

```shell script
$ find / -user root -name tecmint.txt
```

Localiza todos os arquivos com base no usuário

```shell script
$ find /home -user tecmint
```

Localiza todos os arquivos com base no grupo

```shell script
$ find /home -group developer
```

Localiza arquivos específicos do usuário

```shell script
$ find /home -user tecmint -iname "*.txt"
```

### Múltiplos nomes de arquivo

```shell script {.wrap}
$ find . -type f \( -name "*.sh" -o -name "*.txt" \)
```

Localiza arquivos com extensões `.sh` e `.txt`

### Múltiplos diretórios

```shell script {.wrap}
$ find /opt /usr /var -name foo.scala -type f
```

Localiza arquivos em múltiplos diretórios

### Vazios

```shell script
$ find . -type d -empty
```

Exclui todos os arquivos vazios de um diretório

```shell script
$ find . -type f -empty -delete
```

## Find com data e hora

### Significados {.col-span-2}

| Opção  | Descrição                                                     |
| ------- | --------------------------------------------------------------- |
| `atime` | tempo de acesso (última vez que o arquivo foi <yel>aberto</yel>) |
| `mtime` | tempo de modificação (última vez que o <yel>conteúdo do arquivo foi modificado</yel>) |
| `ctime` | tempo de alteração (última vez que o <yel>inode foi alterado</yel>)      |

#### Exemplo

| Opção          | Descrição                                                |
| --------------- | ---------------------------------------------------------- |
| `-mtime +0`     | Modificado há mais de 24 horas                            |
| `-mtime 0`      | Modificado entre agora e 1 dia atrás                      |
| `-mtime -1`     | Modificado há menos de 1 dia (o mesmo que `-mtime 0`)     |
| `-mtime 1`      | Modificado entre 24 e 48 horas atrás                      |
| `-mtime +1`     | Modificado há mais de 48 horas                            |
| `-mtime +1w`    | Última modificação há mais de 1 semana                    |
| `-atime 0`      | Último acesso entre agora e 24 horas atrás                |
| `-atime +0`     | Acessado há mais de 24 horas                              |
| `-atime 1`      | Acessado entre 24 e 48 horas atrás                        |
| `-atime +1`     | Acessado há mais de 48 horas                              |
| `-atime -1`     | Acessado há menos de 24 horas (o mesmo que `-atime 0`)    |
| `-ctime -6h30m` | Status do arquivo alterado nas últimas 6 horas e 30 minutos |

### Exemplos

Localiza arquivos modificados nos últimos 50 dias

```shell script
$ find / -mtime 50
```

localiza arquivos acessados nos últimos 50 dias

```shell script
$ find / -atime 50
```

localiza arquivos modificados nos últimos 50 a 100 dias

```shell script
$ find / -mtime +50 –mtime -100
```

localiza arquivos alterados na última 1 hora

```shell script
$ find / -cmin -60
```

localiza arquivos modificados na última 1 hora

```shell script
$ find / -mmin -60
```

localiza arquivos acessados na última 1 hora

```shell script
$ find / -amin -60
```

## Find com {.cols-2}

### Find e excluir {.row-span-2}

Localiza e remove múltiplos arquivos

```shell script
$ find . -type f -name "*.mp3" -exec rm -f {} \;
```

Localiza e remove um único arquivo

```shell script
$ find . -type f -name "tecmint.txt" -exec rm -f {} \;
```

Localiza e exclui arquivos de 100mb

```shell script
$ find / -type f -size +100m -exec rm -f {} \;
```

Localiza arquivos específicos e exclui

```shell script
$ find / -type f -name *.mp3 -size +10m -exec rm {} \;
```

### Find e substituir

Localiza todos os arquivos e altera o conteúdo `const` para `let`

```shell script {.wrap}
$ find ./ -type f -exec sed -i 's/const/let/g' {} \;
```

Localiza arquivos legíveis e graváveis e altera o conteúdo `old` para `new`

```shell script {.wrap}
$ find ./ -type f -readable -writable -exec sed -i "s/old/new/g" {} \;
```

Veja também: [cheat sheet de sed](/sed)

### Find e renomear

Localiza e adiciona sufixo (`.bak`)

```shell script {.wrap}
$ find . -type f -name 'file*' -exec mv {} {}.bak\;
```

Localiza e renomeia a extensão (`.html` => `.gohtml`)

```shell script {.wrap}
$ find ./ -depth -name "*.html" -exec sh -c 'mv "$1" "${1%.html}.gohtml"' _ {} \;
```

### Find e mover

```shell script
$ find . -name '*.mp3' -exec mv {} /tmp/music \;
```

Localiza e move para um diretório específico (`/tmp/music`)

### Find e copiar

```shell script
$ find . -name '*2020*.xml' -exec cp -r "{}" /tmp/backup \;
```

Localiza arquivos correspondentes e copia para um diretório específico (`/tmp/backup`)

### Find e concatenar

Junta todos os arquivos csv do diretório download em `merged.csv`

```shell script
$ find download -type f -iname '*.csv' | xargs cat > merged.csv
```

Junta todos os arquivos csv ordenados do diretório download em `merged.csv`

```shell script {.wrap}
$ find download -type f -iname '*.csv' | sort | xargs cat > merged.csv
```

### Find e ordenar

Localiza e ordena em ordem crescente

```shell script
$ find . -type f | sort
```

localiza e ordena em ordem decrescente

```shell script
$ find . -type f | sort -r
```

### Find e chmod {.row-span-1}

Localiza arquivos e define as permissões como 644.

```shell script
$ find / -type f -perm 0777 -print -exec chmod 644 {} \;
```

Localiza diretórios e define as permissões como 755.

```shell script
$ find / -type d -perm 777 -print -exec chmod 755 {} \;
```

### Find e compactar

Localiza todos os arquivos `.java` e os compacta em `java.tar`

```shell script
$ find . -type f -name "*.java" | xargs tar cvf java.tar
```

Localiza todos os arquivos `.csv` e os compacta em `cheatsheets.zip`

```shell script
$ find . -type f -name "*.csv" | xargs zip cheatsheets.zip
```
