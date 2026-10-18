---
title: TOML
date: 2020-12-29 20:36:35
background: bg-[#848484]
tags:
  - config
  - format
categories:
  - Programação
intro: |
  Esta é uma cheat sheet de referência rápida para a sintaxe de arquivos de configuração no formato TOML.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

[TOML](https://toml.io/en/) é um formato minimalista de arquivo de configuração, fácil de ler graças a uma semântica óbvia.

- [Documentação](https://toml.io/en/latest) _(toml.io)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/toml/) _(learnxinyminutes.com)_

### Exemplos

```toml
bool = true
date = 2006-05-27T07:32:00Z
string = "hello"
number = 42
float = 3.14
scientificNotation = 1e+12
```

### Comentários

```yaml
# A single line comment example

# block level comment example
# comment line 1
# comment line 2
# comment line 3
```

### Inteiro

```toml
int1 = +42
int2 = 0
int3 = -21
integerRange = 64
```

### Ponto flutuante

```toml
float2 = 3.1415
float4 = 5e+22
float7 = 6.626e-34
```

### Booleano

```toml
bool1 = true
bool2 = false
boolMustBeLowercase = true
```

### Data e hora

```toml
date1 = 1989-05-27T07:32:00Z
date2 = 1989-05-26T15:32:00-07:00
date3 = 1989-05-27T07:32:00
date4 = 1989-05-27
time1 = 07:32:00
time2 = 00:32:00.999999
```

### String

```toml
str1 = "I'm a string."
str2 = "You can \"quote\" me."
str3 = "Name\tJos\u00E9\nLoc\tSF."
```

Veja: [Strings](#toml-strings)

### Tabela

```toml
[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00
```

Veja: [Tabelas](#toml-tables)

### Array

```toml
array1 = [1, 2, 3]
array2 = ["Commas", "are", "delimiter"]
array3 = [8001, 8001, 8002]
```

### Array amigável {.col-span-2}

```toml
array1 = [ "Don't mix", "different", "types" ]
array2 = [ [ 1.2, 2.4 ], ["all", 'strings', """are the same""", '''type'''] ]
array3 = [
  "Whitespace", "is",
  "ignored"
]
```

## Strings TOML

### String multilinha

```toml
multiLineString = """
Multi-line basic strings are surrounded
by three quotation marks on each side
and allow newlines.
"""
```

### String literal

```toml {.wrap}
path = 'C:\Users\nodejs\templates'
path2 = '\\User\admin$\system32'
quoted = 'Tom "Dubs" Preston-Werner'
regex = '<\i\c*\s*>'
```

Delimitada por aspas simples. Escapes não são permitidos.

### String literal multilinha

```toml
re = '''\d{2} apps is t[wo]o many'''
lines = '''
The first newline is
trimmed in raw strings.
All other whitespace
is preserved.
'''
```

## Tabelas TOML

### Básico

```toml
[name]
foo = 1
bar = 2
```

`foo` e `bar` são chaves na tabela chamada `name`

### Aninhada

```toml
[table1]
	foo = "bar"

[table1.nested_table]
	baz = "bat"
```

### Semelhante a array {.row-span-2}

```toml
[[comments]]
author = "Nate"
text = "Great Article!"

[[comments]]
author = "Anonymous"
text = "Love it!"
```

#### ↓ JSON equivalente

```json
{
  "comments": [
    {
      "author": "Nate",
      "text": "Great Article!"
    },
    {
      "author": "Anonymous",
      "text": "Love It!"
    }
  ]
}
```

### Separadas por ponto

```toml
[dog."tater.man"]
type = "pug"
```

#### ↓ JSON equivalente

```json
{
  "dog": {
    "tater.man": {
      "type": "pug"
    }
  }
}
```

### Multianinhada

```toml
[foo.bar.baz]
bat = "hi"
```

#### ↓ JSON equivalente

```json
{
  "foo": {
    "bar": {
      "baz": {
        "bat": "hi"
      }
    }
  }
}
```

### Ignorar espaços em branco

```toml
[a.b.c]          # this is best practice
[ d.e.f ]        # same as [d.e.f]
[ g .  h  .i ]   # same as [g.h.i]
[ j . "ʞ" .'l' ] # same as [j."ʞ".'l']
```

### Tabela inline {.col-span-2}

```toml
name = { first = "Tom", last = "Preston-Werner" }
point = { x = 1, y = 2 }
animal = { type.name = "pug" }
```
