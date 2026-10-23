---
title: YAML
date: 2020-12-29 18:26:55
background: bg-[#b42e28]
tags:
  - config
  - format
categories:
  - Programação
intro: |
  Este é um cheat sheet de referência rápida para entender e escrever arquivos de configuração no formato YAML.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

[YAML](https://yaml.org/) é uma linguagem de serialização de dados projetada para ser escrita e lida diretamente por humanos

- O YAML não permite o uso de tabs
- Deve haver espaço entre as partes do elemento
- O YAML diferencia maiúsculas de minúsculas (CASE sensitive)
- Termine o arquivo YAML com a extensão `.yaml` ou `.yml`
- O YAML é um superconjunto de JSON
- Playbooks do Ansible são arquivos YAML {.marker-round}

### Tipos escalares {.row-span-2}

<!-- prettier-ignore -->
```yaml
n1: 1            # integer
n2: 1.234        # float

s1: 'abc'        # string
s2: "abc"        # string
s3: abc          # string

b: false         # boolean type

d: 2015-04-05    # date type
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "n1": 1,
  "n2": 1.234,
  "s1": "abc",
  "s2": "abc",
  "s3": "abc",
  "b": false,
  "d": "2015-04-05"
}
```

Use espaços para indentar. Deve haver espaço entre as partes do elemento.

### Variáveis

```yaml
some_thing: &VAR_NAME foobar
other_thing: *VAR_NAME
```

#### ↓ JSON equivalente

<!-- prettier-ignore -->
```json {.wrap}
{
  "some_thing": "foobar",
  "other_thing": "foobar"
}
```

### Comentários

```yaml
# A single line comment example

# block level comment example
# comment line 1
# comment line 2
# comment line 3
```

### Strings multilinha

```yaml
description: |
  hello
  world
```

#### ↓ JSON equivalente

```json {.wrap}
{ "description": "hello\nworld\n" }
```

### Herança {.row-span-2}

```yaml
parent: &defaults
  a: 2
  b: 3

child:
  <<: *defaults
  b: 4
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "parent": {
    "a": 2,
    "b": 3
  },
  "child": {
    "a": 2,
    "b": 4
  }
}
```

### Referência {.row-span-2}

```yaml
values: &ref
  - Will be
  - reused below

other_values:
  i_am_ref: *ref
```

#### ↓ JSON equivalente

<!-- prettier-ignore -->
```json {.wrap}
{
  "values": [
    "Will be",
    "reused below"
  ],
  "other_values": {
    "i_am_ref": [
      "Will be",
      "reused below"
    ]
  }
}
```

### Strings folded

```yaml
description: >
  hello world
```

#### ↓ JSON equivalente

```json {.wrap}
{ "description": "hello world\n" }
```

### Dois documentos

```yaml
---
document: this is doc 1
---
document: this is doc 2
```

O YAML usa `---` para separar diretivas do conteúdo do documento.

## Coleções YAML

### Sequência

```yaml
- Mark McGwire
- Sammy Sosa
- Ken Griffey
```

#### ↓ JSON equivalente

<!-- prettier-ignore -->
```json {.wrap}
[
  "Mark McGwire",
  "Sammy Sosa",
  "Ken Griffey"
]
```

### Mapeamento

<!-- prettier-ignore -->
```yaml
hr:  65       # Home runs
avg: 0.278    # Batting average
rbi: 147      # Runs Batted In
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "hr": 65,
  "avg": 0.278,
  "rbi": 147
}
```

### Mapeamento para sequências

```yaml
attributes:
  - a1
  - a2
methods: [getter, setter]
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "attributes": ["a1", "a2"],
  "methods": ["getter", "setter"]
}
```

### Sequência de mapeamentos

<!-- prettier-ignore -->
```yaml
children:
  - name: Jimmy Smith
    age: 15
  - name: Jimmy Smith
    age: 15
  -
    name: Sammy Sosa
    age: 12
```

#### ↓ JSON equivalente

<!-- prettier-ignore -->
```json {.wrap}
{
  "children": [
    {"name": "Jimmy Smith", "age": 15},
    {"name": "Jimmy Smith", "age": 15},
    {"name": "Sammy Sosa", "age": 12}
  ]
}
```

### Sequência de sequências

<!-- prettier-ignore -->
```yaml
my_sequences:
  - [1, 2, 3]
  - [4, 5, 6]
  -
    - 7
    - 8
    - 9
    - 0 
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "my_sequences": [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 0]
  ]
}
```

### Mapeamento de mapeamentos

```yaml
Mark McGwire: { hr: 65, avg: 0.278 }
Sammy Sosa: { hr: 63, avg: 0.288 }
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "Mark McGwire": {
    "hr": 65,
    "avg": 0.278
  },
  "Sammy Sosa": {
    "hr": 63,
    "avg": 0.288
  }
}
```

### Coleções aninhadas

```yaml
Jack:
  id: 1
  name: Franc
  salary: 25000
  hobby:
    - a
    - b
  location: { country: 'A', city: 'A-A' }
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "Jack": {
    "id": 1,
    "name": "Franc",
    "salary": 25000,
    "hobby": ["a", "b"],
    "location": {
      "country": "A",
      "city": "A-A"
    }
  }
}
```

### Conjuntos não ordenados

```yaml
set1: !!set
  ? one
  ? two
set2: !!set { 'one', 'two' }
```

#### ↓ JSON equivalente

```json {.wrap}
{
  "set1": { "one": null, "two": null },
  "set2": { "one": null, "two": null }
}
```

Conjuntos são representados como um mapeamento em que cada chave está associada a um valor null

### Mapeamentos ordenados

```yaml
ordered: !!omap
  - Mark McGwire: 65
  - Sammy Sosa: 63
  - Ken Griffy: 58
```

#### ↓ JSON equivalente

<!-- prettier-ignore -->
```json {.wrap}
{
  "ordered": [
    { "Mark McGwire": 65 },
    { "Sammy Sosa": 63 },
    { "Ken Griffy": 58 }
  ]
}
```

## Referência YAML

### Termos

- Sequências, também conhecidas como arrays ou listas
- Escalares, também conhecidos como strings ou números
- Mapeamentos, também conhecidos como hashes ou dicionários {.marker-round}

Baseado no [refcard](https://yaml.org/refcard.html) do YAML.org.

### Indicadores de documento

|       |                         |
| ----- | ----------------------- |
| `%`   | Indicador de diretiva   |
| `---` | Cabeçalho do documento  |
| `...` | Terminador do documento |

### Indicadores de coleção {.row-span-2}

|      |                                         |
| ---- | --------------------------------------- |
| `?`  | Indicador de chave                      |
| `:`  | Indicador de valor                      |
| `-`  | Indicador de entrada de série aninhada  |
| `,`  | Separa entradas de ramificação em linha |
| `[]` | Delimita ramificação de série em linha  |
| `{}` | Delimita ramificação com chave em linha |

### Indicadores de alias

|     |                       |
| --- | --------------------- |
| `&` | Propriedade de âncora |
| `*` | Indicador de alias    |

### Chaves especiais

|      |                                    |
| ---- | ---------------------------------- |
| `=`  | Chave de mapeamento "value" padrão |
| `<<` | Mescla chaves de outro mapeamento  |

### Indicadores escalares

|       |                                        |
| ----- | -------------------------------------- | ------------------------------------------------------ | ----------- |
| `''`  | Delimita escalar em linha sem escape   |
| `"`   | Delimita escalar em linha com escape   |
| `     | `                                      | Indicador de escalar de bloco                          |
| `>`   | Indicador de escalar folded            |
| `-`   | Modificador de chomp strip (`          | -`or`>-`)                                              |
| `+`   | Modificador de chomp keep (`           | +`or`>+`)                                              |
| `1-9` | Modificador de indentação explícita (` | 1`or`>2`). <br/> Modificadores podem ser combinados (` | 2-`, `>+1`) |

### Propriedade de tag (geralmente não especificada) {.col-span-2}

|          |                                                                 |
| -------- | --------------------------------------------------------------- |
| `none`   | Tag não especificada (resolvida automaticamente pela aplicação) |
| `!`      | Tag não específica (por padrão, `!!map`/`!!seq`/`!!str`)        |
| `!foo`   | Primária (por convenção, significa uma tag local `!foo`)        |
| `!!foo`  | Secundária (por convenção, significa `tag:yaml.org,2002:foo`)   |
| `!h!foo` | Requer `%TAG !h! <prefix>` (e então significa `<prefix>foo`)    |
| `!<foo>` | Tag verbatim (sempre significa `foo`)                           |

### Indicadores diversos

|                  |                                     |
| ---------------- | ----------------------------------- |
| `#`              | Indicador de comentário descartável |
| <code>\`@</code> | Ambos reservados para uso futuro    |

### Tipos principais (tags automáticas padrão) {.row-span-2}

|         |                                          |
| ------- | ---------------------------------------- |
| `!!map` | `{Hash table, dictionary, mapping}`      |
| `!!seq` | `{List, array, tuple, vector, sequence}` |
| `!!str` | String Unicode                           |

### Códigos de escape {.row-span-3}

#### Numéricos

- `\x12` (8 bits)
- `\u1234` (16 bits)
- `\U00102030` (32 bits)

{.cols-2 .marker-none}

#### Protetivos

- `\\` (\\)
- `\"` (")
- `\ ` ( )
- `\<TAB>` (TAB)

{.cols-3 .marker-none}

#### C

- `\0` (NUL)
- `\a` (BEL)
- `\b` (BS)
- `\f` (FF)
- `\n` (LF)
- `\r` (CR)
- `\t` (TAB)
- `\v` (VTAB)

{.cols-3 .marker-none}

#### Adicionais

- `\e` (ESC)
- `\_` (NBSP)
- `\N` (NEL)
- `\L` (LS)
- `\P` (PS)

{.cols-3 .marker-none}

### Mais tipos

|          |                             |
| -------- | --------------------------- |
| `!!set`  | `{cherries, plums, apples}` |
| `!!omap` | `[one: 1, two: 2]`          |

### Tipos escalares independentes de linguagem {.col-span-2}

|                           |                                                       |
| ------------------------- | ----------------------------------------------------- |
| `{~, null}`               | Null (sem valor).                                     |
| `[1234, 0x4D2, 02333]`    | [Inteiro decimal, inteiro hexadecimal, inteiro octal] |
| `[1_230.15, 12.3015e+02]` | [Float fixo, float exponencial]                       |
| `[.inf, -.Inf, .NAN]`     | [Infinito (float), negativo, não é um número]         |
| `{Y, true, Yes, ON}`      | Booleano verdadeiro                                   |
| `{n, FALSE, No, off}`     | Booleano falso                                        |

## Veja também

- [Referência rápida do YAML](https://yaml.org/refcard.html) _(yaml.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/yaml/) _(learnxinyminutes.com)_
- [YAML lint online](http://www.yamllint.com/) _(yamllint.com)_
