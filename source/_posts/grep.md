---
title: Grep
date: 2020-11-25 18:28:43
background: bg-indigo-400
tags:
  - egrep
  - search
  - pattern
  - text
categories:
  - Comandos Linux
intro:
  Este cheat sheet tem o objetivo de ser um lembrete rápido dos principais conceitos envolvidos no uso do programa de linha de comando
  grep e assume que você já entende como usá-lo.
plugins:
  - copyCode
---

## Primeiros passos {.cols-5}

### Uso {.col-span-2}

Busca na saída padrão (ou seja, um fluxo de texto)

```shell script
$ grep [options] search_string
```

Buscar uma string exata em um arquivo:

```shell script
$ grep [options] search_string path/to/file
```

Imprime as linhas de myfile.txt que contêm a string "mellon"

```shell script
$ grep 'mellon' myfile.txt
```

Curingas são aceitos no nome do arquivo.

### Exemplos de opções {.col-span-3}

| Opção | Exemplo                                   | Operação                                                   |
| ----- | ----------------------------------------- | ---------------------------------------------------------- |
| `-i`  | grep -i ^DA demo.txt                      | Ignora a diferenciação entre maiúsculas e minúsculas       |
| `-w`  | grep -w "of" demo.txt                     | Busca apenas pela palavra completa                         |
| `-A`  | grep -A 3 'Exception' error.log           | Exibe 3 linhas após a string correspondente                |
| `-B`  | grep -B 4 'Exception' error.log           | Exibe 4 linhas antes da string correspondente              |
| `-C`  | grep -C 5 'Exception' error.log           | Exibe 5 linhas ao redor da string correspondente           |
| `-r`  | grep -r 'cheatsheets.zip' /var/log/nginx/ | Busca recursiva _(dentro de subdiretórios)_                |
| `-v`  | grep -v 'warning' /var/log/syslog         | Retorna todas as linhas que não correspondem ao padrão     |
| `-e`  | grep -e '^al' filename                    | Usa regex _(linhas que começam com 'al')_                  |
| `-E`  | grep -E 'ja(s\|cks)on' filename           | Usa regex estendida _(linhas que contêm jason ou jackson)_ |
| `-c`  | grep -c 'error' /var/log/syslog           | Conta o número de correspondências                         |
| `-l`  | grep -l 'robot' /var/log/\*               | Imprime o nome do(s) arquivo(s) com correspondências       |
| `-o`  | grep -o search_string filename            | Mostra apenas a parte correspondente da string             |
| `-n`  | grep -n "go" demo.txt                     | Mostra os números das linhas correspondentes               |

## Expressões regulares do grep

### Referência

- [Sintaxe de regex](/regex) _(cheatsheets.zip)_
- [Exemplos de regex](/regex#regex-examples) _(cheatsheets.zip)_

Consulte a versão completa do cheat sheet de regex para requisitos mais complexos.

### Curingas

| -               | -                                           |
| --------------- | ------------------------------------------- |
| .               | Qualquer caractere.                         |
| `?            ` | Opcional e pode ocorrer apenas uma vez.     |
| `*            ` | Opcional e pode ocorrer mais de uma vez.    |
| `+            ` | Obrigatório e pode ocorrer mais de uma vez. |

### Quantificadores

| -               | -                                           |
| --------------- | ------------------------------------------- |
| `{n}          ` | O item anterior aparece exatamente n vezes. |
| `{n,}         ` | O item anterior aparece n vezes ou mais.    |
| `{,m}         ` | O item anterior aparece no máximo n vezes.  |
| `{n,m}        ` | O item anterior aparece entre n e m vezes.  |

### POSIX

| -               | -                                                |
| --------------- | ------------------------------------------------ |
| `[:alpha:]   `  | Qualquer letra maiúscula ou minúscula.           |
| `[:digit:]   `  | Qualquer número.                                 |
| `[:alnum:]   `  | Qualquer letra maiúscula ou minúscula ou dígito. |
| `[:space:]    ` | Qualquer espaço em branco.                       |

### Caractere

| -               | -                                                |
| --------------- | ------------------------------------------------ |
| `[A-Z­a-z]    ` | Qualquer letra maiúscula ou minúscula.           |
| `[0-9]        ` | Qualquer número.                                 |
| `[0-9­A-Z­a-z]` | Qualquer letra maiúscula ou minúscula ou dígito. |

### Posição

|      |                    |
| ---- | ------------------ |
| `^ ` | Início da linha.   |
| `$ ` | Fim da linha.      |
| `^$` | Linha vazia.       |
| `\<` | Início de palavra. |
| `\>` | Fim de palavra.    |
