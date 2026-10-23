---
title: XPath
date: 2020-12-19 22:15:43
background: bg-[#77aeeb]
tags:
  - document
  - expression
  - select
categories:
  - Ferramentas
intro: |
  Este é um cheat sheet de seletores [XPath](https://en.wikipedia.org/wiki/XPath), que lista os métodos de posicionamento XPath e seletores CSS mais usados
plugins:
  - copyCode
---

## Seletores XPath {.cols-6}

### Primeiros passos {.col-span-2}

- [Xpath test bed](http://www.whitebeam.org/library/guide/TechNotes/xpathtestbed.rhtm) _(whitebeam.org)_

Teste no console do Firefox ou de um navegador baseado em Chromium:

```console
$x('/html/body')
$x('//h1')
$x('//h1')[0].innerText
$x('//a[text()="XPath"]')[0].click()
```

### Seletores descendentes {.col-span-2}

| Xpath        | CSS          |
| ------------ | ------------ |
| `//h1`       | h1           |
| `//div//p`   | div p        |
| `//ul/li`    | ul > li      |
| `//ul/li/a`  | ul > li > a  |
| `//div/*`    | div > \*     |
| `/`          | :root        |
| `/html/body` | :root > body |

{.show-header}

### Seletores de ordem {.col-span-2}

| Xpath               | CSS                  |
| ------------------- | -------------------- |
| `//ul/li[1]`        | ul > li:first-child  |
| `//ul/li[2]`        | ul > li:nth-child(2) |
| `//ul/li[last()]`   | ul > li:last-child   |
| `//li[@id="id"][1]` | li#id:first-child    |
| `//a[1]`            | a:first-child        |
| `//a[last()]`       | a:last-child         |

{.show-header}

### Seletores de atributo {.col-span-3 .row-span-2}

| Xpath                           | CSS                  |
| ------------------------------- | -------------------- |
| `//*[@id="id"]`                 | #id                  |
| `//*[@class="class"]`           | .class               |
| `//input[@type="submit"]`       | input[type="submit"] |
| `//a[@id="abc"][@for="xyz"]`    | a#abc[for="xyz"]     |
| `//a[@rel]`                     | a[rel]               |
| `//a[starts-with(@href, '/')]`  | a[href^='/']         |
| `//a[ends-with(@href, '.pdf')]` | a[href$='pdf']       |
| `//a[contains(@href, '://')]`   | a[href*='`:`//']     |
| `//a[contains(@rel, 'help')]`   | a[rel~='help']       |

{.show-header}

### Irmãos {.col-span-3}

| Xpath                                | CSS      |
| ------------------------------------ | -------- |
| `//h1/following-sibling::ul`         | h1 ~ ul  |
| `//h1/following-sibling::ul[1]`      | h1 + ul  |
| `//h1/following-sibling::[@id="id"]` | h1 ~ #id |

{.show-header}

### jQuery {.col-span-3}

| Xpath                            | CSS                        |
| -------------------------------- | -------------------------- |
| `//ul/li/..`                     | $('ul > li').parent()      |
| `//li/ancestor-or-self::section` | $('li').closest('section') |
| `//a/@href`                      | $('a').attr('href')        |
| `//span/text()`                  | $('span').text()           |

{.show-header}

### Seletores diversos {.col-span-3}

| Xpath                             | CSS                       |
| --------------------------------- | ------------------------- | --------------------- |
| `//h1[not(@id)]`                  | h1:not([id])              |
| `//button[text()="Submit"]`       | Text match                |
| `//button[contains(text(),"Go")]` | Text contains (substring) |
| `//product[@price > 2.50]`        | Arithmetic                |
| `//ul[*]`                         | Has children              |
| `//ul[li]`                        | Has children (specific)   |
| `//a[@name or @href]`             | Or logic                  |
| `//a                              | //div`                    | Union (joins results) |

{.show-header}

## Expressões XPath

### Steps e eixos {.secondary}

<br/>

| -    | -    | -    | -               |
| ---- | ---- | ---- | --------------- |
| `//` | `ul` | `/`  | `a[@id='link']` |
| Eixo | Step | Eixo | Step            |

{.left-text}

### Prefixos

| Prefixo | Exemplo               | Significado       |
| ------- | --------------------- | ----------------- |
| `//`    | `//hr[@class='edge']` | Em qualquer lugar |
| `/`     | `/html/body/div`      | Raiz              |
| `./`    | `./div/p`             | Relativo          |

{.show-header}

### Eixos

| Eixo | Exemplo             | Significado |
| ---- | ------------------- | ----------- |
| `/`  | `//ul/li/a`         | Filho       |
| `//` | `//[@id="list"]//a` | Descendente |

{.show-header}

## Predicados XPath

### Predicados

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Restringe um nodeset apenas se alguma condição for verdadeira. Eles podem ser encadeados.

### Operadores

```bash
# Comparison
//a[@id = "xyz"]
//a[@id != "xyz"]
//a[@price > 25]
```

```bash
# Logic (and/or)
//div[@id="head" and position()=2]
//div[(x and y) or not(z)]
```

### Usando nodes

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# Returns `<ul>` that has a `<li>` child
//ul[li]
```

Você pode usar nodes dentro de predicados.

### Indexação

```bash
//a[1]                # first <a>
//a[last()]           # last <a>
//ol/li[2]            # second <li>
//ol/li[position()=2] # same as above
//ol/li[position()>1] #:not(:first-child)
```

Use `[]` com um número, ou `last()` ou `position()`.

### Ordem de encadeamento

```bash
a[1][@href='/']
a[@href='/'][1]
```

A ordem importa: estas duas expressões são diferentes.

### Aninhando predicados

```
//section[.//h1[@id='hi']]
```

Retorna `<section>` se ele tiver um descendente `<h1>` com `id='hi'`.

## Funções XPath {.cols-2}

### Funções de node

```bash
name()            # //[starts-with(name(), 'h')]
text()            # //button[text()="Submit"]
                  # //button/text()
lang(str)
namespace-uri()
```

```bash
count()           # //table[count(tr)=1]
position()        # //ol/li[position()=2]
```

### Funções de string

```bash
contains()        # font[contains(@class,"head")]
starts-with()     # font[starts-with(@class,"head")]
ends-with()       # font[ends-with(@class,"head")]
```

```bash
concat(x,y)
substring(str, start, len)
substring-before("01/02", "/")  #=> 01
substring-after("01/02", "/")   #=> 02
translate()
normalize-space()
string-length()
```

### Funções booleanas

```bash
not(expr)         # button[not(starts-with(text(),"Submit"))]
```

### Conversão de tipo

```bash
string()
number()
boolean()
```

## Eixos XPath {.cols-2}

### Usando eixos

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

---

|      |      |            |      |
| ---- | ---- | ---------- | ---- |
| `//` | `ul` | `/child::` | `li` |
| Eixo | Step | Eixo       | Step |

{.left-text}

Os steps de uma expressão são separados por `/`, geralmente usados para selecionar nodes filhos. Isso nem sempre é
verdade: você pode especificar um "eixo" diferente com `::`.

### Eixo child

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` é o eixo padrão. É isso que faz `//a/b/c` funcionar.

```bash
# both the same
# this works because `child::li` is truthy
//ul[li]
//ul[child::li]
```

```bash
# both the same
//ul[count(li) > 2]
//ul[count(child::li) > 2]
```

### Eixo descendant-or-self

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` é a forma abreviada do eixo `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Outros eixos {.row-span-2}

| Eixo                 | Abreviação | Observações                                         |
| -------------------- | ---------- | --------------------------------------------------- |
| `ancestor`           |            |                                                     |
| `ancestor-or-self`   |            |                                                     |
| `attribute`          | `@`        | `@href` é abreviação de `attribute::href`           |
| `child`              |            | `div` é abreviação de `child::div`                  |
| `descendant`         |            |                                                     |
| `descendant-or-self` | `//`       | `//` é abreviação de `/descendant-or-self::node()/` |
| `namespace`          |            |                                                     |
| `self`               | `.`        | `.` é abreviação de `self::node()`                  |
| `parent`             | `..`       | `..` é abreviação de `parent::node()`               |
| `following`          |            |                                                     |
| `following-sibling`  |            |                                                     |
| `preceding`          |            |                                                     |
| `preceding-sibling`  |            |                                                     |

{.headers}

Existem outros eixos que você pode usar.

### Uniões

```bash
//a | //span
```

Use `|` para unir duas expressões.

## Mais exemplos de XPath {.cols-2}

### Exemplos

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Encontrar um pai

```bash
//section[h1[@id='section-name']]
```

Encontra um `<section>` que contém diretamente `h1#section-name`

```bash
//section[//h1[@id='section-name']]
```

Encontra um `<section>` que contém `h1#section-name`. (Igual ao anterior, mas usa descendant-or-self em vez de child)

### Closest

```bash
./ancestor-or-self::[@class="box"]
```

Funciona como o `$().closest('.box')` do jQuery.

### Atributos

```bash
//item[@price > 2*@discount]
```

Encontra `<item>` e verifica seus atributos

## Veja também

- [Devhints](https://devhints.io/xpath) _(devhints.io)_
- [Xpath test bed](http://www.whitebeam.org/library/guide/TechNotes/xpathtestbed.rhtm) _(whitebeam.org)_
