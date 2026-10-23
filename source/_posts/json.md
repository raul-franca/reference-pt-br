---
title: JSON
date: 2021-09-14 18:26:55
background: bg-[#646464]
tags:
  - config
  - format
categories:
  - Programação
intro: |
  Este é um cheat sheet de referência rápida para entender e escrever arquivos de configuração no formato JSON.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

[JSON](https://json.org/) é um padrão aberto leve baseado em texto, projetado para a troca de dados legível por humanos.

- JSON significa JavaScript Object Notation
- JSON é fácil de ler e escrever.
- JSON é um formato de troca de dados independente de linguagem
- A extensão de arquivo JSON é `.json`
- O tipo de mídia de Internet do JSON é `application/json`

{.marker-round}

### Exemplos

```json
{
  "name": "Jason",
  "age": 39,
  "height": 1.92,
  "gender": "M",
  "salary": 70000,
  "married": true,
  "children": [
    { "name": "Tom", "age": 9, "gender": "M" },
    { "name": "Ava", "age": 7, "gender": "F" }
  ]
}
```

### Tipos

| Tipo      | Descrição                                 |
| --------- | :---------------------------------------- |
| `Number`  | Ponto flutuante de precisão dupla         |
| `String`  | Sequência de caracteres                   |
| `Boolean` | `true` ou `false`                         |
| `Array`   | Sequência ordenada de valores             |
| `Value`   | String, Number, Boolean, null etc         |
| `Object`  | Coleção não ordenada de pares chave/valor |
| `null`    | Nulo ou vazio                             |

### String {.row-span-3}

|      |                                |
| ---- | :----------------------------- |
| `\"` | Aspas duplas                   |
| `\\` | Barra invertida                |
| `\/` | Barra normal                   |
| `\b` | Backspace                      |
| `\f` | Form feed                      |
| `\n` | Nova linha                     |
| `\r` | Retorno de carro               |
| `\t` | Tabulação                      |
| `\u` | Seguido por quatro dígitos hex |

#### Exemplos

```json {.wrap}
{
  "url": "https://cheatsheets.zip",
  "msg": "Hi,\n\"CheatSheets.zip\"",
  "intro": "Share quick reference and cheat sheet for developers."
}
```

#### String inválida

```json
{ "foo": "bar" }
```

Precisa ser delimitada por aspas duplas

### Number {.row-span-2}

| Tipo       | Descrição                             |
| ---------- | :------------------------------------ |
| `Integer`  | Dígitos 1-9, 0 e positivo ou negativo |
| `Fraction` | Frações como 0.3, 3.9                 |
| `Exponent` | Expoente como e, e+, e-, E, E+, E     |

#### Exemplos

```json
{
  "positive": 12,
  "negative": -1,
  "fraction": 10.25,
  "exponent": 1.0e2,
  "zero": 0
}
```

#### Número inválido

```json
{ "foo": 0xff }
```

Em JSON você só pode usar literais decimais

### Objetos

```json
{
  "color": "Purple",
  "id": "210",
  "composition": {
    "R": 70,
    "G": 39,
    "B": 89
  },
  "empty_object": {}
}
```

Múltiplos pares chave/valor separados por vírgula

### Arrays

```json
[1, 2, 3, 4, 5]
```

Começa com `[` e termina com `]`

### Array de objetos

```json
{
  "children": [
    { "name": "Jimmy Smith", "age": 15 },
    { "name": "Sammy Sosa", "age": 12 }
  ]
}
```

### Objeto de arrays

```json
{
  "attributes": ["a1", "a2"],
  "methods": ["getter", "setter"],
  "empty_array": []
}
```

### Array 2D

```json
{
  "my_sequences": [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 0],
    [10, 11]
  ]
}
```

### Objeto de objetos

```json
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

### Aninhado

```json
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

## Acessar JSON em JavaScript

### Acessar objeto

```javascript
let myObject = {
  name: 'Jason',
  last: 'Doe',
  age: 39,
  gender: 'M',
  salary: 70000,
  married: true
};
```

---

|                    |           |
| ------------------ | :-------- |
| `myObject.name`    | "Jason"   |
| `myObject["name"]` | "Jason"   |
| `myObject.age`     | 39        |
| `myObject.other`   | undefined |
| `myObject[0]`      | undefined |

### Acessar aninhado {.row-span-2}

```javascript
let myObject = {
  ref: {
    name: 0,
    last: 1,
    age: 2,
    gender: 3,
    salary: 4,
    married: 5
  },
  jdoe: ['Jason', 'Doe', 39, 'M', 70000, true],
  jsmith: ['Tom', 'Smith', 42, 'F', 80000, true]
};
```

---

|                          |                          |
| ------------------------ | :----------------------- |
| `myObject.ref.age`       | 2                        |
| `myObject["ref"]["age"]` | 2                        |
| `myObject.jdoe`          | ["Jason", "Doe", 39 ...] |
| `myObject.jsmith[3]`     | "F"                      |
| `myObject[1]`            | undefined                |

### Acessar array de objetos {.row-span-2}

```javascript
let myArray = [
  {
    name: 'Jason',
    last: 'Doe',
    age: 39,
    gender: 'M',
    salary: 70000,
    married: true
  },
  {
    name: 'Tom',
    last: 'Smith',
    age: 42,
    gender: 'F',
    salary: 80000,
    married: true
  },
  {
    name: 'Amy',
    last: 'Burnquist',
    age: 29,
    gender: 'F',
    salary: 60000,
    married: false
  }
];
```

---

|                     |                            |
| ------------------- | :------------------------- |
| `myArray[0]`        | `{`"name": "Jason", ...`}` |
| `myArray[1].name`   | "Tom"                      |
| `myArray[1][2]`     | 42                         |
| `myArray[3]`        | undefined                  |
| `myArray[3].gender` | TypeError: Cannot read...  |

### Acessar array

```javascript
let myArray = ['Jason', 'Doe', 39, 'M', 70000, true];
```

---

|              |           |
| ------------ | :-------- |
| `myArray[1]` | "Doe"     |
| `myArray[5]` | true      |
| `myArray[6]` | undefined |

## Veja também {.cols-1}

- [JSON](https://www.json.org/json-en.html) _(json.org)_
- [JSON Editor Online](http://jsoneditoronline.org/) _(jsoneditoronline.org)_
- [Converter array JSON para tabela Markdown, CSV e mais](https://tableconvert.com/json-to-markdown) _(tableconvert.com)_
