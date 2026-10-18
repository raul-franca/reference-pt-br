---
title: Pandoc
date: 2023-03-21 13:26:00
background: bg-red-400
tags:
  - convert
  - document
  - utility
categories:
  - Comandos Linux
intro: |
  [Pandoc](https://pandoc.org) é um conversor de documentos; este cheat sheet do pandoc traz comandos do pandoc e alguns truques comuns do pandoc.
plugins:
  - copyCode
---

## Primeiros passos

### Uso do Pandoc

Sintaxe

```shell script
$ pandoc -s [source file] -o [output file]
```

## Exemplos do Pandoc

### LaTeX para MS Word {.col-span-2}

Conversão simples de .tex para .docx

```shell script
$ pandoc -s file.tex -o file.docx
```

.tex para .docx com citações padrão

```shell script
$ pandoc -s file.tex --citeproc --bibliography=bib_library.bib -o file.docx
```

.tex para .docx com citações específicas

```shell script
$ pandoc -s file.tex --citeproc --bibliography=bib_library.bib --csl=apa.csl -o file.docx
```

Obtenha o arquivo `.csl` [aqui](https://github.com/citation-style-language/styles)

.tex para .docx com referências cruzadas

```shell script
$ pandoc -s file.tex --filter pandoc-crossref -o file.docx
```

Obtenha o filtro `pandoc-crossref` [aqui](https://github.com/lierdakil/pandoc-crossref/releases)

## Veja também {.cols-1}

- [pandoc examples](https://pandoc.org/demos.html)
