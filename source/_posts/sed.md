---
title: Sed
date: 2020-12-27 18:34:08
background: bg-red-400
tags:
  - editor
  - replace
  - text
  - utility
categories:
  - Comandos Linux
intro: |
  [Sed](https://www.gnu.org/software/sed/manual/sed.html) é um stream editor; este cheat sheet do sed reúne comandos sed e alguns truques comuns.
plugins:
  - copyCode
---

## Primeiros passos

### Uso do sed

Sintaxe

```shell script
$ sed [options] command [input-file]
```

Com pipeline

```shell script
$ cat report.txt | sed 's/Nick/John/g'
```

```shell script
$ echo '123abc' | sed 's/[0-9]+//g'
```

### Exemplos de opções {.col-span-2}

| Opção | Exemplo                                    | Descrição                               |
| ------ | ------------------------------------------ | --------------------------------------- |
| `-i`   | sed -ibak 's/On/Off/' php.ini              | Faz backup e modifica o arquivo de entrada diretamente |
| `-E`   | sed -E 's/[0-9]+//g' input-file            | Usa expressões regulares estendidas     |
| `-n`   | sed -n '3 p' config.conf                   | Suprime a impressão padrão do pattern space |
| `-f`   | sed -f script.sed config.conf              | Executa o arquivo de script sed         |
| `-e`   | sed -e 'command1' -e 'command2' input-file | Executa vários comandos sed             |

{.show-header}

### Vários comandos

```shell script {.wrap}
$ echo "hello world" | sed -e 's/h/H/g' -e 's/w/W/g'
Hello World
```

Use `-e` para executar vários comandos sed

### Script sed

```shell script
$ echo 's/h/H/g' >> hello.sed
$ echo 's/w/W/g' >> hello.sed
$ echo "hello world" | sed -f hello.sed
Hello World
```

Use `-f` para executar o arquivo de script sed

### Exemplos

```shell script
$ sed 's/old/new/g' file.txt
$ sed 's/old/new/g' file.txt > new.txt

$ sed 's/old/new/g' -i file.txt
$ sed 's/old/new/g' -i.backup file.txt
```

Veja: [Exemplos de sed](#sed-examples)

## Comandos do sed

### Comandos {.col-span-2}

| Comando | Exemplo                                | Descrição                   |
| ------- | -------------------------------------- | --------------------------- |
| `p`     | sed -n '1,4 p' input.txt               | Imprime as linhas 1-4       |
| `p`     | sed -n -e '1,4 p' -e '6,7 p' input.txt | Imprime as linhas 1-4 e 6-7 |
| `d`     | sed '1,4 d' input.txt                  | Imprime as linhas exceto 1-4 |
| `w`     | sed -n '1,4 w output.txt' input.txt    | Grava o pattern space em um arquivo |
| `a`     | sed '2 a new-line' input.txt           | Anexa a linha depois        |
| `i`     | sed '2 i new-line' input.txt           | Insere a linha antes        |

{.show-header}

### Comandos de espaço

| Comando | Descrição                                                    |
| ------- | ------------------------------------------------------------ |
| `n`     | Imprime o pattern space, esvazia-o e lê a próxima linha       |
| `x`     | Troca o pattern space pelo hold space                        |
| `h`     | Copia o pattern space para o hold space                      |
| `H`     | Anexa o pattern space ao hold space                          |
| `g`     | Copia o hold space para o pattern space                      |
| `G`     | Anexa o hold space ao pattern space                          |

Veja também: [Espaçamento de arquivo](#file-spacing)

### Flags

```shell script
$ sed 's/old/new/[flags]' [input-file]
```

---

| Flag     | Descrição                                  |
| -------- | ------------------------------------------ |
| `g`      | Substituição global                        |
| `1,2...` | Substitui a n-ésima ocorrência             |
| `p`      | Imprime apenas a linha substituída         |
| `w`      | Grava apenas a linha substituída em um arquivo |
| `I`      | Ignora maiúsculas/minúsculas na busca      |
| `e`      | Substitui e executa na linha de comando    |

### Comandos de loop

| Comando   | Descrição                                                          |
| --------- | ------------------------------------------------------------------ |
| `b label` | Desvia para um label (para loop)                                   |
| `t label` | Desvia para um label apenas em substituição bem-sucedida<br>(para loop) |
| `:label`  | Label para os comandos b e t (para loop)                           |
| `N`       | Anexa a próxima linha ao pattern space                             |
| `P`       | Imprime a 1ª linha em multilinha                                   |
| `D`       | Exclui a 1ª linha em multilinha                                    |

### Flags diversas

| Flag                      | Descrição                                                                    |
| ------------------------- | ---------------------------------------------------------------------------- |
| <code>/ \| ^ @ ! #</code> | O delimitador de substituição pode ser qualquer caractere                    |
| `&`                       | Obtém o padrão correspondente                                                |
| `( ) \1 \2 \3`            | Agrupa usando `(` e `)`.<br>Use `\1`, `\2` na substituição para se referir ao grupo |

## Exemplos de sed

### Substituindo texto {.row-span-2}

Substitui todas as ocorrências de uma string

```shell script
$ sed 's/old/new/g' file.txt
```

Substitui apenas a n-ésima ocorrência de uma string

```shell script
$ sed 's/old/new/2' file.txt
```

Substitui uma string apenas na 5ª linha

```shell script
$ sed '5 s/old/new/' file.txt
```

Substitui "world" por "universe" apenas se a linha começar com "hello"

```shell script
$ sed '/hello/s/world/universe/' file.txt
```

Remove "\" do final de cada linha

```shell script
$ sed 's/\\$//' file.txt
```

Remove todos os espaços em branco do início de cada linha

```shell script
$ sed 's/^\s*//' file.txt
```

Remove comentários. Inclusive os que estão no final de uma linha

```shell script
$ sed 's/#.*$//' file.txt
```

### Buscando texto

Busca uma string e imprime apenas as linhas correspondentes

```shell script
$ sed -n '/hello/p' file.txt
```

Busca sem diferenciar maiúsculas de minúsculas

```shell script
$ sed -n '/hello/Ip' file.txt
```

Busca uma string, mas imprime apenas as linhas que não correspondem

```shell script
$ sed -n '/hello/!p' file.txt
```

### Anexando linhas

Anexa uma linha após a linha 2

```shell script
$ sed '2a Text after line 2' file.txt
```

Anexa uma linha no final do arquivo

```shell script
$ sed '$a THE END!' file.txt
```

Anexa uma linha após cada 3ª linha, começando pela linha 3

```shell script
$ sed '3~3a Some text' file.txt
```

### Numeração {.col-span-2}

Numera as linhas de um arquivo (alinhamento à esquerda simples)

```shell script
$ sed = file.txt | sed 'N;s/\n/\t/'
```

Numera as linhas de um arquivo (número à esquerda, alinhado à direita)

```shell script
$ sed = file.txt | sed 'N; s/^/   /; s/ *\(.\{6,\}\)\n/\1  /'
```

Numera as linhas do arquivo, mas só imprime números se a linha não estiver em branco

```shell script
$ sed '/./=' file.txt | sed '/./N; s/\n/ /'
```

Conta linhas (emula "wc -l")

```shell script
$ sed -n '$='
```

### Inserindo linhas no início

Insere texto antes da linha 5

```shell script
$ sed '5i line number five' file.txt
```

Insere "Example: " antes de cada linha que contenha "hello"

```shell script
$ sed '/hello/i Example: ' file.txt
```

### Excluindo linhas

Exclui as linhas 5-7 do arquivo

```shell script
$ sed '5,7d' file.txt
```

Exclui cada 2ª linha, começando pela linha 3

```shell script
$ sed '3~2d' file.txt
```

Exclui a última linha do arquivo

```shell script
$ sed '$d' file.txt
```

Exclui as linhas que começam com "Hello"

```shell script
$ sed '/^Hello/d' file.txt
```

Exclui todas as linhas vazias

```shell script
$ sed '/^$/d' file.txt
```

Exclui as linhas que começam com "#"

```shell script
$ sed '/^#/d' file.txt
```

### Espaçamento de arquivo

Espaçamento duplo

```shell script
$ sed G
```

Exclui todas as linhas em branco e aplica espaçamento duplo

```shell script
$ sed '/^$/d;G'
```

Aplica espaçamento triplo em um arquivo

```shell script
$ sed 'G;G'
```

Desfaz o espaçamento duplo

```shell script
$ sed 'n;d'
```

Insere uma linha em branco acima da linha que corresponde a "regex"

```shell script
$ sed '/regex/{x;p;x;}'
```

Insere uma linha em branco abaixo da linha que corresponde a "regex"

```shell script
$ sed '/regex/G'
```

Insere uma linha em branco ao redor da linha que corresponde a "regex"

```shell script
$ sed '/regex/{x;p;x;G;}'
```

## Veja também {.cols-1}

- [Cheat sheet do sed](https://gist.github.com/ssstonebraker/6140154) _(gist.github.com)_
