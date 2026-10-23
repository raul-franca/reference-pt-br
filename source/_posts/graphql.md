---
title: GraphQL
date: 2021-07-15 20:51:44
background: bg-[#cc44a2]
tags:
  - query
  - API
categories:
  - Programação
intro: |
  Esta cheat sheet de referência rápida oferece uma visão geral do GraphQL.
plugins:
  - copyCode
---

## Primeiros passos

### Visão geral

- Uma abordagem alternativa às APIs RESTful
- GraphQL é uma linguagem de consulta para APIs
- Descreva facilmente o formato da API GraphQL usando termos compartilhados e claros.
- Os clientes enviam queries/mutations para ler e atualizar dados
- A sintaxe do GraphQL consegue expressar relações complexas entre entidades
- Bibliotecas para implementar GraphQL em [diferentes linguagens](https://graphql.org/code/)

[GraphQL](https://graphql.org/) {.link-arrow}

### Schema

|                |                                           |
| -------------- | ----------------------------------------- |
| `schema`       | Definição de schema GraphQL               |
| `query`        | Lê e percorre dados                       |
| `mutation`     | Modifica dados ou dispara uma ação        |
| `subscription` | Executa uma query quando um evento ocorre |

### Tipos escalares nativos

|           |                                                      |
| --------- | ---------------------------------------------------- |
| `Int`     | Inteiro de 32 bits com sinal                         |
| `Float`   | Valor de ponto flutuante de precisão dupla com sinal |
| `String`  | Sequência de caracteres UTF-8                        |
| `Boolean` | true ou false                                        |
| `ID`      | Um identificador único                               |

### Definições de tipo

|             |                        |
| ----------- | ---------------------- |
| `scalar`    | Tipo escalar           |
| `type`      | Tipo objeto            |
| `interface` | Tipo interface         |
| `union`     | Tipo união             |
| `enum`      | Tipo enum              |
| `input`     | Tipo objeto de entrada |

### Modificadores de tipo

|              |                                                  |
| ------------ | ------------------------------------------------ |
| `String`     | String que aceita valor nulo                     |
| `String!`    | String que não aceita valor nulo                 |
| `[String]`   | Lista de Strings que aceitam valor nulo          |
| `[String]!`  | Lista não nula de Strings que aceitam valor nulo |
| `[String!]!` | Lista não nula de Strings não nulas              |

### Argumentos de entrada {.row-span-2}

#### Entrada básica

```js
type Query {
    users(limit: Int): [User]
}
```

#### Entrada com valor padrão

```js
type Query {
    users(limit: Int = 10): [User]
}
```

#### Entrada com vários argumentos

```js
type Query {
    users(limit: Int, sort: String): [User]
}
```

#### Entrada com vários argumentos e valores padrão

```js {.wrap}
type Query {
    users(limit: Int = 10, sort: String): [User]
}
type Query {
    users(limit: Int, sort: String = "asc"): [User]
}
type Query {
    users(limit: Int = 10, sort: String = "asc"): [User]
}
```

### Tipos de entrada

```js
input ListUsersInput {
    limit: Int
    since_id: ID
}
```

```js
type Mutation {
    users(params: ListUsersInput): [User]!
}
```

### Escalares personalizados

```js
scalar Url
type User {
    name: String
    homepage: Url
}
```

### Interfaces

```js
interface Foo {
    is_foo: Boolean
}
interface Goo {
    is_goo: Boolean
}
type Bar implements Foo {
    is_foo: Boolean
    is_bar: Boolean
}
type Baz implements Foo, Goo {
    is_foo: Boolean
    is_goo: Boolean
    is_baz: Boolean
}
```

Objeto que implementa uma ou mais interfaces

### Uniões

```js
type Foo {
    name: String
}
type Bar {
    is_bar: String
}
union SingleUnion = Foo
union MultipleUnion = Foo | Bar
type Root {
    single: SingleUnion
    multiple: MultipleUnion
}
```

União de um ou mais objetos

### Enums

```js {.wrap}
enum USER_STATE {
    NOT_FOUND
    ACTIVE
    INACTIVE
    SUSPENDED
}
type Root {
    stateForUser(userID: ID!): USER_STATE!
    users(state: USER_STATE, limit: Int = 10): [User]
}
```

## Veja também

- [Cheat sheet da linguagem de schema do GraphQL](https://github.com/sogko/graphql-schema-language-cheat-sheet) _(github.com)_
