---
title: Nix
date: 2025-08-24 23:33:40
background: bg-[#304673]
tags:
categories:
  - Programação
intro: |
  O cheat sheet de referência rápida do Nix, que tem como objetivo ajudar a escrever código nix básico.
plugins:
  - copyCode
---

## Tipos e sintaxe

### String

```nix
let
  x = "single-line string";
  y = ''
    multi-line string
  '';
in
```

### Integer

```nix
let
  x = -123;
  y - 123;
in
```

### Float

```nix
let
  x = -0.32;
  y = 0.45;
in
```

### Boolean

```nix
let
  x = true;
  y = false;
in
```

### Null

```nix
let
  x = null;
in
```

### Path

```nix
let
  x = /absolute/path;
  y = ./relative/path;
in
```

### Conjunto de atributos

```nix
let
  x = {
    a = 1;
    b = 2;
  };
  y = { c = 3; };
in
```

veja [Conjuntos de atributos](#attribute-sets)

### Lista

```nix
let
  x = [ 1 2.0 ];
  y = [
    1
    "this is a string"
    23.0
    null
  ];
in
```

### Comentário

#### ↓ comentário de linha única

```nix
# your comment
```

#### ↓ comentário de várias linhas

```nix
/*
  your comment
*/
```

## Escopo

### Definir variável local

```nix
let
  x = 1;
  y = 2;
in
  x + y # -> returns 3
```

### Adicionar variáveis ao escopo

```nix
let
  x = 1;
in
  { inherit x; }
```

#### ↓ equivale a

```nix
let
  x = 1;
in
  { x = x; }
```

### Adicionar atributos ao escopo

```nix
let
  x = { y = 1; };
in
  { inherit (x) y; }
```

#### ↓ equivale a

```nix
let
  x = { y = 1; };
in
  { y = x.y; }
```

### Adicionar todos os atributos ao escopo

```nix
let
  x = { y = 1; z = 2;  };
in
  with x;
  y + z # -> returns 3
```

## Condicionais

### Definir condicionais

```nix
if x > 0
then 1
else -1
```

## Conjuntos de atributos

### Definir conjuntos de atributos

```nix
let
  x = {
    a = 1;
    b = 2;
  };
  y = { c = 3; };
in
```

### Atualizar conjuntos de atributos

```nix
{ x = 1; } // { y = 2; } # -> returns { x = 1; y = 2; }
{ x = 1; } // { x = 2; } # -> returns { x = 2; }
```

### Verificar a existência de um atributo

```nix
let
  x = { y = 1; };
in
  x ? y # -> returns true
```

### Referenciar chaves de atributos

```nix
let
  x = { y = 1; };
in
  x.y # -> returns 1
```

#### ↓ opcional

```nix
let
  x = { y = 1; };
in
  x.z or 2 # -> returns 2
```

## Concatenação e interpolação

### Concatenar listas

```nix
[ 1 2 ] ++ [ 3 4 ] # -> returns [ 1 2 3 4 ]
```

### Concatenar paths e strings

```nix
/bin + /sh # -> returns /bin/sh
/bin + "/sh" # -> returns /bin/sh
"/bin" + "/sh" # -> returns "/bin/sh"
```

### Interpolar strings

```nix
let
  x = "bar";
in
  "foo ${x} baz" # -> returns "foo bar baz"
```

## Funções

### Função simples

```nix
let
  f = x: x + 1;
in
  f 1 # -> returns 2
```

### Múltiplos argumentos

```nix
let
  f = x: y: [ x  y ];
in
  f 1 2 # -> returns [ 1 2 ]
```

### Argumentos nomeados

```nix
let
  f = {x, y}: x + y;
in
  f { x=1; y=2; } # -> returns 3
```

#### ↓ ignorando argumentos

```nix
let
  f = {x, y, ... }: x + y;
in
  f { x=1; y=2; z=3; } # -> returns 3
```

#### ↓ valores padrão

```nix
let
  f = {x, y ? 2 }: x + y;
in
  f { x=1; } # -> returns 3
```

#### ↓ vincular a uma variável

```nix
let
  f = {x, y}@args: args.x + args.y;
in
  f { x=1; y=2; } # -> returns 3
```

## Fontes

- [NixOS/marketing](https://github.com/nixos/marketing) _(github.com)_
