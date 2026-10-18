---
title: RegEX
date: 2020-11-25 18:28:43
background: bg-[#e56d2d]
tags:
  - regular expression
  - regexp
  - pattern
categories:
  - Ferramentas
intro: |
  Uma referência rápida de expressões regulares (regex), incluindo símbolos, intervalos, agrupamento, asserções e alguns padrões de exemplo para começar.
plugins:
  - copyCode
---

<!-- Nota do editor: esta página usa <yel> (spans amarelos do tailwind) para colorir o texto que corresponde e <red>
para colorir o texto que não corresponde -->

## Primeiros passos

### Introdução

Este é um cheat sheet rápido para começar com expressões regulares.

- [Regex no Python](#regex-in-python) _(cheatsheets.zip)_
- [Regex no JavaScript](#regex-in-javascript) _(cheatsheets.zip)_
- [Regex no PHP](#regex-in-php) _(cheatsheets.zip)_
- [Regex no Java](#regex-in-java) _(cheatsheets.zip)_
- [Regex no MySQL](#regex-in-mysql) _(cheatsheets.zip)_
- [Regex no Vim](/vim#search-and-replace) _(cheatsheets.zip)_
- [Regex no Emacs](/emacs#search) _(cheatsheets.zip)_
- [Testador de regex online](https://regex101.com/) _(regex101.com)_

{.cols-2 .marker-round}

### Classes de caracteres

| Padrão        | Descrição                                                                  |
| ------------- | :------------------------------------------------------------------------- |
| `[abc]`       | Um único caractere entre: <yel>a</yel>, <yel>b</yel> ou <yel>c</yel>       |
| `[^abc]`      | Um caractere exceto: <yel>a</yel>, <yel>b</yel> ou <yel>c</yel>            |
| `[a-z]`       | Um caractere no intervalo: <yel>a-z</yel>                                  |
| `[^a-z]`      | Um caractere fora do intervalo: <red>a-z</red>                             |
| `[0-9]`       | Um dígito no intervalo: <yel>0-9</yel>                                     |
| `[a-zA-Z]`    | Um caractere no intervalo: <yel>a-z</yel> ou <yel>A-Z</yel>                |
| `[a-zA-Z0-9]` | Um caractere no intervalo: <yel>a-z</yel>, <yel>A-Z</yel> ou <yel>0-9</yel> |

{.style-list}

### Quantificadores

| Padrão   | Descrição             |
| -------- | :-------------------- |
| `a?`     | Zero ou um a          |
| `a*`     | Zero ou mais a        |
| `a+`     | Um ou mais a          |
| `[0-9]+` | Um ou mais de 0-9     |
| `a{3}`   | Exatamente 3 de a     |
| `a{3,}`  | 3 ou mais de a        |
| `a{3,6}` | Entre 3 e 6 de a      |
| `a*`     | Quantificador guloso  |
| `a*?`    | Quantificador preguiçoso |
| `a*+`    | Quantificador possessivo |

### Metacaracteres comuns

| Padrão  | Descrição                                                    |
| ------- | :----------------------------------------------------------- | -------------------------------------------- |
| `^`     | Corresponde ao início de uma string.                         |
| `{`     | Inicia um quantificador para o número de ocorrências.        |
| `+`     | Corresponde a um ou mais do elemento anterior.               |
| `<`     | Não é um metacaractere padrão de regex (usado comumente em HTML). |
| `[`     | Inicia uma classe de caracteres.                             |
| `*`     | Corresponde a zero ou mais do elemento anterior.              |
| `)`     | Encerra um grupo de captura.                                  |
| `>`     | Não é um metacaractere padrão de regex (usado comumente em HTML). |
| `.`     | Corresponde a qualquer caractere, exceto nova linha.          |
| `(`     | Inicia um grupo de captura.                                   |
| `       | `                                                            | Atua como um OR lógico dentro de um padrão regex. |
| `$`     | Corresponde ao fim de uma string.                             |
| `\`     | Escapa um metacaractere, dando a ele significado literal.     |
| `?`     | Corresponde a zero ou um do elemento anterior.                |

{.cols-3 .marker-none}

Escape estes caracteres especiais com `\`

### Metasequências {.row-span-4}

| Padrão       | Descrição                                                   |
| ------------ | :---------------------------------------------------------- |
| `.`          | Qualquer caractere único                                    |
| `\s`         | Qualquer caractere de espaço em branco                      |
| `\S`         | Qualquer caractere que não seja espaço em branco            |
| `\d`         | Qualquer dígito, o mesmo que [0-9]                          |
| `\D`         | Qualquer não dígito, o mesmo que [^0-9]                     |
| `\w`         | Qualquer caractere de palavra                               |
| `\W`         | Qualquer caractere que não seja de palavra                  |
| `\X`         | Quaisquer sequências Unicode, incluindo quebras de linha    |
| `\C`         | Corresponde a uma unidade de dados                          |
| `\R`         | Quebras de linha Unicode                                    |
| `\v`         | Caractere de espaço vertical                                |
| `\V`         | Negação de \v — tudo, exceto novas linhas e tabulações verticais |
| `\h`         | Caractere de espaço horizontal                              |
| `\H`         | Negação de \h                                               |
| `\K`         | Redefine a correspondência                                  |
| `\n`         | Corresponde ao n-ésimo subpadrão                            |
| `\pX`        | Propriedade Unicode X                                       |
| `\p{...}`    | Propriedade Unicode ou categoria de script                  |
| `\PX`        | Negação de \pX                                              |
| `\P{...}`    | Negação de \p                                               |
| `\Q...\E`    | Escapa; trata como literais                                 |
| `\k<name>`   | Corresponde ao subpadrão `name`                             |
| `\k'name'`   | Corresponde ao subpadrão `name`                             |
| `\k{name}`   | Corresponde ao subpadrão `name`                             |
| `\gn`        | Corresponde ao n-ésimo subpadrão                            |
| `\g{n}`      | Corresponde ao n-ésimo subpadrão                            |
| `\g<n>`      | Recursa o n-ésimo grupo de captura                          |
| `\g'n'`      | Recursa o n-ésimo grupo de captura.                         |
| `\g{-n}`     | Corresponde ao n-ésimo subpadrão anterior relativo          |
| `\g<+n>`     | Recursa o n-ésimo subpadrão seguinte relativo               |
| `\g'+n'`     | Corresponde ao n-ésimo subpadrão seguinte relativo          |
| `\g'letter'` | Recursa o grupo de captura nomeado `letter`                 |
| `\g{letter}` | Corresponde ao grupo de captura previamente nomeado `letter` |
| `\g<letter>` | Recursa o grupo de captura nomeado `letter`                 |
| `\xYY`       | Caractere hexadecimal YY                                    |
| `\x{YYYY}`   | Caractere hexadecimal YYYY                                  |
| `\ddd`       | Caractere octal ddd                                         |
| `\cY`        | Caractere de controle Y                                     |
| `[\b]`       | Caractere de backspace                                      |
| `\`          | Torna qualquer caractere literal                            |

### Âncoras

| Padrão  | Descrição              |
| ------- | :--------------------- |
| `\G`    | Início da correspondência |
| `^`     | Início da string       |
| `$`     | Fim da string          |
| `\A`    | Início da string       |
| `\Z`    | Fim da string          |
| `\z`    | Fim absoluto da string |
| `\b`    | Limite de palavra      |
| `\B`    | Não é limite de palavra |

### Substituição

| Padrão     | Descrição                       |
| ---------- | :------------------------------ |
| `\0`       | Conteúdo completo da correspondência |
| `\1`       | Conteúdo do grupo de captura 1  |
| `$1`       | Conteúdo do grupo de captura 1  |
| `${foo}`   | Conteúdo do grupo de captura `foo` |
| `\x20`     | Valores de substituição hexadecimais |
| `\x{06fa}` | Valores de substituição hexadecimais |
| `\t`       | Tabulação                       |
| `\r`       | Retorno de carro                |
| `\n`       | Nova linha                      |
| `\f`       | Form-feed                       |
| `\U`       | Transformação para maiúsculas   |
| `\L`       | Transformação para minúsculas   |
| `\E`       | Encerra qualquer transformação  |

### Construções de grupo

| Padrão                | Descrição                             |
| --------------------- | :------------------------------------ |
| `(...)`               | Captura tudo o que está entre parênteses |
| <code>(a\|b)</code>   | Corresponde a a ou b                  |
| `(?:...)`             | Corresponde a tudo o que está entre parênteses, sem capturar |
| `(?>...)`             | Grupo atômico (sem captura)           |
| <code>(?\|...)</code> | Duplica o número do grupo do subpadrão |
| `(?#...)`             | Comentário                            |
| `(?'name'...)`        | Grupo de captura nomeado              |
| `(?<name>...)`        | Grupo de captura nomeado              |
| `(?P<name>...)`       | Grupo de captura nomeado              |
| `(?imsxXU)`           | Modificadores inline                  |
| `(?(DEFINE)...)`      | Pré-define padrões antes de usá-los   |

### Asserções

| -                               | -                               |
| ------------------------------- | :------------------------------ |
| <code>(?(1)yes\|no)</code>      | Instrução condicional           |
| <code>(?(R)yes\|no)</code>      | Instrução condicional           |
| <code>(?(R#)yes\|no)</code>     | Instrução condicional recursiva |
| <code>(?(R&name\yes\|no)</code> | Instrução condicional           |
| <code>(?(?=...)yes\|no)</code>  | Condicional com lookahead       |
| <code>(?(?<=...)yes\|no)</code> | Condicional com lookbehind      |

### Lookarounds

| -          | -                   |
| ---------- | :------------------ |
| `(?=...)`  | Lookahead positivo  |
| `(?!...)`  | Lookahead negativo  |
| `(?<=...)` | Lookbehind positivo |
| `(?<!...)` | Lookbehind negativo |

Lookaround permite corresponder a um grupo antes (lookbehind) ou depois (lookahead) do seu padrão principal sem incluí-lo no
resultado.

### Flags/modificadores

| Padrão  | Descrição             |
| ------- | :-------------------- |
| `g`     | Global                |
| `m`     | Multilinha            |
| `i`     | Sem distinção de maiúsculas/minúsculas |
| `x`     | Ignora espaços em branco |
| `s`     | Linha única           |
| `u`     | Unicode               |
| `X`     | Estendido             |
| `U`     | Não guloso            |
| `A`     | Âncora                |
| `J`     | Nomes de grupo duplicados |

### Recursão

| -           | -                                 |
| ----------- | :-------------------------------- |
| `(?R)`      | Recursa o padrão inteiro          |
| `(?1)`      | Recursa o primeiro subpadrão      |
| `(?+1)`     | Recursa o primeiro subpadrão relativo |
| `(?&name)`  | Recursa o subpadrão `name`        |
| `(?P=name)` | Corresponde ao subpadrão `name`   |
| `(?P>name)` | Recursa o subpadrão `name`        |

### Classes de caracteres POSIX {.col-span-2}

| Classe de caractere | Equivalente a                                     | Significado                    |
| --------------- | -------------------------------------------------- | :----------------------------- |
| `[[:alnum:]]`   | `[0-9A-Za-z]`                                      | Letras e dígitos               |
| `[[:alpha:]]`   | `[A-Za-z]`                                         | Letras                         |
| `[[:ascii:]]`   | `[\x00-\x7F]`                                      | Códigos ASCII 0-127            |
| `[[:blank:]]`   | `[\t ]`                                            | Apenas espaço ou tabulação     |
| `[[:cntrl:]]`   | `[\x00-\x1F\x7F]`                                  | Caracteres de controle         |
| `[[:digit:]]`   | `[0-9]`                                            | Dígitos decimais               |
| `[[:graph:]]`   | `[[:alnum:][:punct:]]`                             | Caracteres visíveis (sem espaço) |
| `[[:lower:]]`   | `[a-z]`                                            | Letras minúsculas              |
| `[[:print:]]`   | `[ -~] == [ [:graph:]]`                            | Caracteres visíveis            |
| `[[:punct:]]`   | <code>[!"#$%&’()\*+,-./:;<=>?@[]^\_\`{\|}~]</code> | Caracteres de pontuação visíveis |
| `[[:space:]]`   | <code>[\t\n\v\f\r ]</code>                         | Espaço em branco               |
| `[[:upper:]]`   | `[A-Z]`                                            | Letras maiúsculas              |
| `[[:word:]]`    | `[0-9A-Za-z_]`                                     | Caracteres de palavra          |
| `[[:xdigit:]]`  | `[0-9A-Fa-f]`                                      | Dígitos hexadecimais           |
| `[[:<:]]`       | `[\b(?=\w)]`                                       | Início de palavra              |
| `[[:>:]]`       | `[\b(?<=\w)]`                                      | Fim de palavra                 |

{.show-header}

### Verbos de controle

| -                      | -                     |
| ---------------------- | :-------------------- |
| `(*ACCEPT)`            | Verbo de controle     |
| `(*FAIL)`              | Verbo de controle     |
| `(*MARK:NAME)`         | Verbo de controle     |
| `(*COMMIT)`            | Verbo de controle     |
| `(*PRUNE)`             | Verbo de controle     |
| `(*SKIP)`              | Verbo de controle     |
| `(*THEN)`              | Verbo de controle     |
| `(*UTF)`               | Modificador de padrão |
| `(*UTF8)`              | Modificador de padrão |
| `(*UTF16)`             | Modificador de padrão |
| `(*UTF32)`             | Modificador de padrão |
| `(*UCP)`               | Modificador de padrão |
| `(*CR)`                | Modificador de quebra de linha |
| `(*LF)`                | Modificador de quebra de linha |
| `(*CRLF)`              | Modificador de quebra de linha |
| `(*ANYCRLF)`           | Modificador de quebra de linha |
| `(*ANY)`               | Modificador de quebra de linha |
| `\R`                   | Modificador de quebra de linha |
| `(*BSR_ANYCRLF)`       | Modificador de quebra de linha |
| `(*BSR_UNICODE)`       | Modificador de quebra de linha |
| `(*LIMIT_MATCH=x)`     | Modificador do motor de regex |
| `(*LIMIT_RECURSION=d)` | Modificador do motor de regex |
| `(*NO_AUTO_POSSESS)`   | Modificador do motor de regex |
| `(*NO_START_OPT)`      | Modificador do motor de regex |

## Exemplos de regex{.cols-3}

### Caracteres

| Padrão         | Correspondências                                          |
| -------------- | :-------------------------------------------------------- |
| `ring        ` | Corresponde a <yel>ring</yel> em sp<yel>ring</yel>board etc. |
| `.           ` | Corresponde a <yel>a</yel>, <yel>9</yel>, <yel>+</yel> etc. |
| `h.o         ` | Corresponde a <yel>hoo</yel>, <yel>h2o</yel>, <yel>h/o</yel> etc. |
| `ring\?      ` | Corresponde a <yel>ring?</yel>                            |
| `\(quiet\)   ` | Corresponde a <yel>(quiet)</yel>                          |
| `c:\\windows ` | Corresponde a <yel>c:\windows</yel>                       |

Use `\` para pesquisar estes caracteres especiais: <br> `[ \ ^ $ . | ? * + ( ) { }`

### Alternativas

| Padrão                    | Correspondências                           |
| ------------------------- | :----------------------------------------- |
| <code>cat\|dog</code>     | Corresponde a <yel>cat</yel> ou <yel>dog</yel> |
| <code>id\|identity</code> | Corresponde a <yel>id</yel> ou <yel>id</yel>entity |
| <code>identity\|id</code> | Corresponde a <yel>id</yel> ou <yel>identity</yel> |

Ordene do mais longo para o mais curto quando as alternativas se sobrepõem

### Classes de caracteres

| Padrão            | Correspondências                                                      |
| ----------------- | :--------------------------------------------------------------------- |
| `[aeiou]`         | Corresponde a qualquer vogal                                           |
| `[^aeiou]`        | Corresponde a uma NÃO vogal                                            |
| `r[iau]ng`        | Corresponde a <yel>ring</yel>, w<yel>rang</yel>le, sp<yel>rung</yel>, etc. |
| `gr[ae]y`         | Corresponde a <yel>gray</yel> ou <yel>grey</yel>                       |
| `[a-zA-Z0-9]`     | Corresponde a qualquer letra ou dígito                                 |
| `[\u3a00-\ufa99]` | Corresponde a qualquer caractere [Unicode Hàn (中文)](https://unicode.org/charts/unihan.html) |

Em `[ ]`, sempre escape `. \ ]` e, às vezes, `^ - .`

### Classes abreviadas

| Padrão           | Significado                                           |
| ---------------- | :---------------------------------------------------- |
| `\w            ` | Caractere "de palavra" <br>_(letra, dígito ou sublinhado)_ |
| `\d            ` | Dígito                                                |
| `\s            ` | Espaço em branco <br>_(espaço, tabulação, vtab, nova linha)_ |
| `\W, \D, or \S ` | Não é palavra, dígito nem espaço em branco            |
| `[\D\S]        ` | Significa não dígito ou espaço em branco; ambos correspondem |
| `[^\d\s]       ` | Não permite dígito nem espaço em branco               |

### Ocorrências

| Padrão              | Correspondências                                                  |
| ------------------- | :----------------------------------------------------------------- |
| `colou?r`           | Corresponde a <yel>color</yel> ou <yel>colour</yel>                |
| `[BW]ill[ieamy's]*` | Corresponde a <yel>Bill</yel>, <yel>Willy</yel>, <yel>William's</yel> etc. |
| `[a-zA-Z]+`         | Corresponde a 1 ou mais letras                                     |
| `\d{3}-\d{2}-\d{4}` | Corresponde a um SSN                                               |
| `[a-z]\w{1,7}`      | Corresponde a um UW NetID                                          |

### Guloso versus preguiçoso

| Padrão                   | Significado                                     |
| ------------------------ | :------------------------------------------------------ |
| `*  + {n,}`<br>_greedy_  | Corresponde ao máximo possível                          |
| `<.+>   `                | Encontra 1 grande correspondência em <yel>\<b>bold\<\/b></yel> |
| `*?  +? {n,}?`<br>_lazy_ | Corresponde ao mínimo possível                          |
| `<.+?>`                  | Encontra 2 correspondências em \<<yel>b</yel>>bold\<<yel>\/b</yel> |

### Escopo {.col-span-2}

| Padrão             | Significado                                                                             |
| ------------------ | :-------------------------------------------------------------------------------------- |
| `\b              ` | Limite de "palavra" (ao lado de um caractere que não é de palavra)                      |
| `\bring          ` | Palavra começa com "ring", ex. <yel>ringtone</yel>                                      |
| `ring\b          ` | Palavra termina com "ring", ex. <yel>spring</yel>                                       |
| `\b9\b           ` | Corresponde ao dígito único <yel>9</yel>, não a <red>19</red>, <red>91</red>, <red>99</red>, etc. |
| `\b[a-zA-Z]{6}\b ` | Corresponde a palavras de 6 letras                                                     |
| `\B              ` | Não é limite de palavra                                                                 |
| `\Bring\B        ` | Corresponde a <yel>springs</yel> e <yel>wringer</yel>                                   |
| `^\d*$           ` | A string inteira deve conter apenas dígitos                                             |
| `^[a-zA-Z]{4,20}$` | A string deve ter de 4 a 20 letras                                                     |
| `^[A-Z]          ` | A string deve começar com letra maiúscula                                               |
| `[\.!?"')]$      ` | A string deve terminar com pontuação final                                              |

### Modificadores

| Padrão               | Significado                                              |
| -------------------- | :------------------------------------------------------- |
| `(?i)`[a-z]\*`(?-i)` | Ignora maiúsculas/minúsculas LIGADO / DESLIGADO          |
| `(?s)`.\*`(?-s)`     | Corresponde a várias linhas (faz . corresponder a nova linha) |
| `(?m)`^.\*;$`(?-m)`  | <yel>^</yel> e <yel>$</yel> correspondem a linhas, não à string inteira |
| `(?x)`               | #modo free-spacing, este comentário de fim de linha é ignorado |
| `(?-x)`              | modo free-spacing DESLIGADO                              |
| /regex/`ismx`        | Modifica o modo para a string inteira                    |

### Grupos

| Padrão                    | Significado                                 |
| ------------------------- | :------------------------------------------ |
| <code>(in\|out)put</code> | Corresponde a <yel>input</yel> ou <yel>output</yel> |
| `\d{5}(-\d{4})?`          | CEP dos EUA _("+ 4" opcional)_              |

O parser tenta CADA alternativa se a correspondência falhar após o grupo. <br> Isso pode levar a backtracking catastrófico.

### Backreferences

| Padrão                   | Correspondências                                                            |
| ------------------------ | :-------------------------------------------------------------------------- |
| `(to) (be) or not \1 \2` | Corresponde a <yel>to be or not to be</yel>                                 |
| `([^\s])\1{2}`           | Corresponde a um não espaço, seguido de mais duas iguais &nbsp; <yel>aaa</yel>, <yel>...</yel> |
| `\b(\w+)\s+\1\b`         | Corresponde a palavras duplicadas                                           |

### Grupo sem captura

| Padrão                         | Significado                        |
| ------------------------------ | :--------------------------------- |
| <code>on(?:click\|load)</code> | Mais rápido que: <br>`on(click\|load)` |

Use grupos sem captura ou atômicos quando possível

### Grupos atômicos

| Padrão                            | Significado                                      |
| --------------------------------- | :----------------------------------------------- |
| <code>(?>red\|green\|blue)</code> | Mais rápido que um grupo sem captura             |
| <code>(?>id\|identity)\b</code>   | Corresponde a <yel>id</yel>, mas não a <red>id</red>entity |

"id" corresponde, mas `\b` falha após o grupo atômico; o parser não faz backtracking para dentro do grupo para tentar 'identity'

Se as alternativas se sobrepõem, ordene da mais longa para a mais curta.

### Lookaround {.row-span-2 .col-span-2}

| Padrão                  | Significado                                                           |
| ----------------------- | :-------------------------------------------------------------------- |
| `(?= )`                 | Lookahead, se você consegue encontrar à frente                        |
| `(?! )`                 | Lookahead, se você não consegue encontrar à frente                    |
| `(?<= )`                | Lookbehind, se você consegue encontrar atrás                          |
| `(?<! )`                | Lookbehind, se você NÃO consegue encontrar atrás                      |
| `\b\w+?(?=ing\b)`       | Corresponde a <yel>warbl</yel>ing, <yel>str</yel>ing, <yel>fish</yel>ing, ... |
| `\b(?!\w+ing\b)\w+\b`   | Palavras que NÃO terminam em <red>ing</red>                           |
| `(?<=\bpre).*?\b `      | Corresponde a pre<yel>tend</yel>, pre<yel>sent</yel>, pre<yel>fix</yel>, ... |
| `\b\w{3}(?<!pre)\w*?\b` | Palavras que NÃO começam com <red>pre</red>                           |
| `\b\w+(?<!ing)\b`       | Corresponde a palavras que NÃO terminam em <red>ing</red>             |

### If-then-else

Corresponda a "Mr." ou "Ms." se a palavra "her" aparecer mais adiante na string

```regex
M(?(?=.*?\bher\b)s|r)\.
```

exige lookaround para a condição IF

## RegEx no Python

### Primeiros passos

Importe o módulo de expressões regulares

```python
import re
```

### Exemplos {.col-span-2 .row-span-3}

#### re.search()

```python
>>> sentence = 'This is a sample string'
>>> bool(re.search(r'this', sentence, flags=re.I))
True
>>> bool(re.search(r'xyz', sentence))
False
```

#### re.findall()

```python
>>> re.findall(r'\bs?pare?\b', 'par spar apparent spare part pare')
['par', 'spar', 'spare', 'pare']
>>> re.findall(r'\b0*[1-9]\d{2,}\b', '0501 035 154 12 26 98234')
['0501', '154', '98234']
```

#### re.finditer()

```python
>>> m_iter = re.finditer(r'[0-9]+', '45 349 651 593 4 204')
>>> [m[0] for m in m_iter if int(m[0]) < 350]
['45', '349', '4', '204']
```

#### re.split()

```python
>>> re.split(r'\d+', 'Sample123string42with777numbers')
['Sample', 'string', 'with', 'numbers']
```

#### re.sub()

```python
>>> ip_lines = "catapults\nconcatenate\ncat"
>>> print(re.sub(r'^', r'* ', ip_lines, flags=re.M))
* catapults
* concatenate
* cat
```

#### re.compile()

```python
>>> pet = re.compile(r'dog')
>>> type(pet)
<class '_sre.SRE_Pattern'>
>>> bool(pet.search('They bought a dog'))
True
>>> bool(pet.search('A cat crossed their path'))
False
```

### Funções

| Função        | Descrição                                                         |
| ------------- | :---------------------------------------------------------------- |
| `re.findall`  | Retorna uma lista com todas as correspondências                   |
| `re.finditer` | Retorna um iterável de objetos de correspondência (um para cada correspondência) |
| `re.search`   | Retorna um objeto Match se houver correspondência em qualquer parte da string |
| `re.split`    | Retorna uma lista com a string dividida em cada correspondência   |
| `re.sub`      | Substitui uma ou várias correspondências por uma string           |
| `re.compile`  | Compila um padrão de expressão regular para uso posterior         |
| `re.escape`   | Retorna a string com todos os não alfanuméricos escapados com barra invertida |

### Flags

| -      | -               | -                                            |
| ------ | --------------- | :------------------------------------------- |
| `re.I` | `re.IGNORECASE` | Ignora maiúsculas/minúsculas                 |
| `re.M` | `re.MULTILINE`  | Multilinha                                   |
| `re.L` | `re.LOCALE`     | Torna `\w`,`\b`,`\s` _dependentes de locale_ |
| `re.S` | `re.DOTALL`     | O ponto corresponde a tudo _(incluindo nova linha)_ |
| `re.U` | `re.UNICODE`    | Torna `\w`,`\b`,`\d`,`\s` _dependentes de Unicode_ |
| `re.X` | `re.VERBOSE`    | Estilo legível                               |

## Regex no JavaScript

### test()

```javascript
let textA = 'I like APPles very much';
let textB = 'I like APPles';
let regex = /apples$/i;

// Output: false
console.log(regex.test(textA));

// Output: true
console.log(regex.test(textB));
```

### search()

```javascript
let text = 'I like APPles very much';
let regexA = /apples/;
let regexB = /apples/i;

// Output: -1
console.log(text.search(regexA));

// Output: 7
console.log(text.search(regexB));
```

### exec()

```javascript
let text = 'Do you like apples?';
let regex = /apples/;

// Output: apples
console.log(regex.exec(text)[0]);

// Output: Do you like apples?
console.log(regex.exec(text).input);
```

### match()

```javascript
let text = 'Here are apples and apPleS';
let regex = /apples/gi;

// Output: [ "apples", "apPleS" ]
console.log(text.match(regex));
```

### split() {.col-span-2}

```javascript
let text = 'This 593 string will be brok294en at places where d1gits are.';
let regex = /\d+/g;

// Output: [ "This ", " string will be brok", "en at places where d", "gits are." ]
console.log(text.split(regex));
```

### matchAll()

```javascript
let regex = /t(e)(st(\d?))/g;
let text = 'test1test2';
let array = [...text.matchAll(regex)];

// Output: ["test1", "e", "st1", "1"]
console.log(array[0]);

// Output: ["test2", "e", "st2", "2"]
console.log(array[1]);
```

### replace()

```javascript {.wrap}
let text = 'Do you like aPPles?';
let regex = /apples/i;

// Output: Do you like mangoes?
let result = text.replace(regex, 'mangoes');
console.log(result);
```

### replaceAll()

```javascript
let regex = /apples/gi;
let text = 'Here are apples and apPleS';

// Output: Here are mangoes and mangoes
let result = text.replaceAll(regex, 'mangoes');
console.log(result);
```

## Regex no PHP

### Funções {.col-span-2}

| -                         | -                                                                |
| ------------------------- | :--------------------------------------------------------------- |
| `preg_match()`            | Executa uma correspondência de regex                             |
| `preg_match_all()`        | Executa uma correspondência global de expressão regular          |
| `preg_replace_callback()` | Executa uma busca e substituição de expressão regular usando um callback |
| `preg_replace()`          | Executa uma busca e substituição de expressão regular            |
| `preg_split()`            | Divide uma string pelo padrão de regex                           |
| `preg_grep()`             | Retorna as entradas do array que correspondem a um padrão        |

### preg_replace

```php {.wrap}
$str = "Visit Microsoft!";
$regex = "/microsoft/i";

// Output: Visit CheatSheets!
echo preg_replace($regex, "CheatSheets", $str);
```

### preg_match

```php
$str = "Visit CheatSheets";
$regex = "#cheatsheets#i";

// Output: 1
echo preg_match($regex, $str);
```

### preg_matchall {.col-span-2 .row-span-2}

```php
$regex = "/[a-zA-Z]+ (\d+)/";
$input_str = "June 24, August 13, and December 30";
if (preg_match_all($regex, $input_str, $matches_out)) {

    // Output: 2
    echo count($matches_out);

    // Output: 3
    echo count($matches_out[0]);

    // Output: Array("June 24", "August 13", "December 30")
    print_r($matches_out[0]);

    // Output: Array("24", "13", "30")
    print_r($matches_out[1]);
}
```

### preg_grep

```php
$arr = ["Jane", "jane", "Joan", "JANE"];
$regex = "/Jane/";

// Output: Jane
echo preg_grep($regex, $arr);
```

### preg_split {.col-span-2}

```php
$str = "Jane\tKate\nLucy Marion";
$regex = "@\s@";

// Output: Array("Jane", "Kate", "Lucy", "Marion")
print_r(preg_split($regex, $str));
```

## Regex no Java

### Estilos {.col-span-2}

#### Primeira forma

```java
Pattern p = Pattern.compile(".s", Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher("aS");
boolean s1 = m.matches();
System.out.println(s1);   // Outputs: true
```

#### Segunda forma

```java
boolean s2 = Pattern.compile("[0-9]+").matcher("123").matches();
System.out.println(s2);   // Outputs: true
```

#### Terceira forma

```java
boolean s3 = Pattern.matches(".s", "XXXX");
System.out.println(s3);   // Outputs: false
```

### Campos de Pattern

| -                  | -                               |
| ------------------ | :------------------------------ |
| `CANON_EQ`         | Equivalência canônica           |
| `CASE_INSENSITIVE` | Correspondência sem distinção de maiúsculas/minúsculas |
| `COMMENTS`         | Permite espaços em branco e comentários |
| `DOTALL`           | Modo dotall                     |
| `MULTILINE`        | Modo multilinha                 |
| `UNICODE_CASE`     | Dobramento de maiúsculas/minúsculas ciente de Unicode |
| `UNIX_LINES`       | Modo de linhas Unix             |

### Métodos

#### Pattern

- Pattern compile(String regex [, int flags])
- boolean matches([String regex, ] CharSequence input)
- String[] split(String regex [, int limit])
- String quote(String s)

#### Matcher

- int start([int group | String name])
- int end([int group | String name])
- boolean find([int start])
- String group([int group | String name])
- Matcher reset()

#### String

- boolean matches(String regex)
- String replaceAll(String regex, String replacement)
- String[] split(String regex[, int limit])

Existem mais métodos ...

### Exemplos {.col-span-2}

Substituir frase:

```java
String regex = "[A-Z\n]{5}$";
String str = "I like APP\nLE";

Pattern p = Pattern.compile(regex, Pattern.MULTILINE);
Matcher m = p.matcher(str);

// Outputs: I like Apple!
System.out.println(m.replaceAll("pple!"));
```

Array com todas as correspondências:

```java
String str = "She sells seashells by the Seashore";
String regex = "\\w*se\\w*";

Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher(str);

List<String> matches = new ArrayList<>();
while (m.find()) {
    matches.add(m.group());
}

// Outputs: [sells, seashells, Seashore]
System.out.println(matches);
```

## Regex no MySQL {.cols-2}

### Funções

| Nome               | Descrição                                                                |
| ------------------ | :----------------------------------------------------------------------- |
| `REGEXP          ` | Verifica se a string corresponde à regex                                 |
| `REGEXP_INSTR()  ` | Índice inicial da substring que corresponde à regex <br>_(NOTA: apenas MySQL 8.0+)_ |
| `REGEXP_LIKE()   ` | Verifica se a string corresponde à regex <br>_(NOTA: apenas MySQL 8.0+)_ |
| `REGEXP_REPLACE()` | Substitui substrings que correspondem à regex <br>_(NOTA: apenas MySQL 8.0+)_ |
| `REGEXP_SUBSTR() ` | Retorna a substring que corresponde à regex <br>_(NOTA: apenas MySQL 8.0+)_ |

### REGEXP

```sql {.wrap}
expr REGEXP pat
```

#### Exemplos

```sql
mysql> SELECT 'abc' REGEXP '^[a-d]';
1
mysql> SELECT name FROM cities WHERE name REGEXP '^A';
mysql> SELECT name FROM cities WHERE name NOT REGEXP '^A';
mysql> SELECT name FROM cities WHERE name REGEXP 'A|B|R';
mysql> SELECT 'a' REGEXP 'A', 'a' REGEXP BINARY 'A';
1   0
```

### REGEXP_REPLACE

```{.wrap}
REGEXP_REPLACE(expr, pat, repl[, pos[, occurrence[, match_type]]])
```

#### Exemplos

```sql
mysql> SELECT REGEXP_REPLACE('a b c', 'b', 'X');
a X c
mysql> SELECT REGEXP_REPLACE('abc ghi', '[a-z]+', 'X', 1, 2);
abc X
```

### REGEXP_SUBSTR

```{.wrap}
REGEXP_SUBSTR(expr, pat[, pos[, occurrence[, match_type]]])
```

#### Exemplos

```sql
mysql> SELECT REGEXP_SUBSTR('abc def ghi', '[a-z]+');
abc
mysql> SELECT REGEXP_SUBSTR('abc def ghi', '[a-z]+', 1, 3);
ghi
```

### REGEXP_LIKE

```
REGEXP_LIKE(expr, pat[, match_type])
```

#### Exemplos

```sql
mysql> SELECT regexp_like('aba', 'b+')
1
mysql> SELECT regexp_like('aba', 'b{2}')
0
mysql> # i: case-insensitive
mysql> SELECT regexp_like('Abba', 'ABBA', 'i');
1
mysql> # m: multi-line
mysql> SELECT regexp_like('a\nb\nc', '^b$', 'm');
1
```

### REGEXP_INSTR

```{.wrap}
REGEXP_INSTR(expr, pat[, pos[, occurrence[, return_option[, match_type]]]])
```

#### Exemplos

```sql
mysql> SELECT regexp_instr('aa aaa aaaa', 'a{3}');
2
mysql> SELECT regexp_instr('abba', 'b{2}', 2);
2
mysql> SELECT regexp_instr('abbabba', 'b{2}', 1, 2);
5
mysql> SELECT regexp_instr('abbabba', 'b{2}', 1, 3, 1);
7
```
