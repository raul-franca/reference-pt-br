---
title: Hook
date: 2024-03-13 18:20:00
icon: icon-style
background: bg-[#1131e2]
tags:
  - script
  - interpret
categories:
  - Programação
intro: |
  A cheat sheet do [Hook](https://github.com/hook-lang/hook/) é uma folha de referência de uma página para a linguagem de programação Hook.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

- [GitHub](https://github.com/hook-lang/hook)
- [Playground](https://hook-lang.github.io/hook-playground)
- [Exemplos](https://github.com/hook-lang/hook/tree/main/examples)
- [Extensão para VS Code](https://marketplace.visualstudio.com/items?itemName=fabiosvm.hook)

### Como é o Hook?

```rs
fn factorial(n) {
  if (n == 0)
    return 1;
  return n * factorial(n - 1);
}
```

O Hook tem uma sintaxe moderna, semelhante a `C`.

### Hello, world!

```js
println('Hello, World!');
// Hello, World!
```

O programa `Hello, World!` em Hook.

### Instalação com Homebrew

```text
brew tap hook-lang/hook
brew install hook
hook --help
```

O interpretador está disponível no [`Homebrew`](https://brew.sh).

### Instalação no Windows {.col-span-2}

```text
cd %tmp%
curl -sSLO https://raw.githubusercontent.com/hook-lang/hook/main/scripts/install.bat
install
```

É assim que você instala no `Windows`.

## Tipos e valores

### Tipos básicos

|          |           |
| -------- | :-------- |
| `Nil`    | `Bool`    |
| `Number` | `String`  |
| `Range`  | `Array`   |
| `Record` | `Closure` |

Lista de tipos básicos.

### Bool

```js
let x = true;
let y = false;
```

Bool é um tipo booleano. Ou seja, pode ser `true` ou `false`.

### Números

```js
let x = 0;
let degree = 45; // integer number
let pi = 3.14; // floating-point number
```

Números podem ser inteiros ou de ponto flutuante.

### Strings

```js
let empty = '';

let name = 'John';

let message = 'Hello, "John"!';
```

Strings podem usar aspas simples ou duplas.

### Ranges

```js
let range = 1..5;

println(range);
// 1..5
```

Ranges são uma sequência de inteiros.

### Arrays

```js
let fruits = ['apple', 'banana', 'cherry'];

println(fruits);
// ["apple", "banana", "cherry"]
```

Arrays são uma sequência de elementos.

### Records

```js
let p = { x: 5, y: 10 };

println(p);
// {x: 5, y: 10}
```

Records mapeiam campos para valores.

### O valor **nil**

```swift
let x = nil;
var y;
```

```js
println(x); // nil
println(y); // nil
```

`nil` é a ausência de um valor.

### Valores falsy

```swift
if (nil) "true" else "false";   // false
if (false) "true" else "false"; // false
if (true) "true" else "false";  // true
if (0) "true" else "false";     // true
if (1) "true" else "false";     // true
if ("") "true" else "false";    // true
if ([]) "true" else "false";    // true
if ({}) "true" else "false";    // true
```

Apenas `nil` e `false` são falsy.

## Sintaxe

### Comentários

```js
// This is a single-line comment.

// And this is
// a multi-line
// comment. ;)
```

O Hook suporta apenas comentários de uma linha. Desculpe!

### Ponto e vírgula {.col-span-2}

<!-- prettier-ignore -->
```js
println(1) ; println(2) ; println(3) ;
println(4) ; println(5)
; println(6) ;
;                                      // error: unexpected token `;`
```

Ponto e vírgula são obrigatórios e instruções vazias não são permitidas.

### Blocos

```js
{
  println('Hello');
  {
    println('World');
  }
}
```

Blocos são usados para definir um escopo.

### Palavras reservadas

|         |          |            |         |
| ------- | :------- | :--------- | :------ |
| `as`    | `break`  | `continue` | `do`    |
| `else`  | `false`  | `fn`       | `for`   |
| `from`  | `if`     | `import`   | `in`    |
| `inout` | `let`    | `loop`     | `match` |
| `nil`   | `return` | `struct`   | `trait` |
| `true`  | `var`    | `while`    |         |

Existem poucas palavras reservadas.

### Identificadores

```php
var lowercase;
var CAPS_LOCK;
var camelCase;
var PascalCase;
var snake_case;
var _123;
```

Identificadores diferenciam maiúsculas de minúsculas.

## Variáveis

### Variáveis

```js
var x; // x contains nil
x = 5; // now, x contains a number
x = 'foo'; // a string

println(x);
```

Valores têm tipos, mas variáveis não.

### Variáveis imutáveis {.col-span-2}

```js
let x = 5;

x = 10; // error: cannot assign to immutable variable `x`

let y; // error: unexpected token `;`
```

Variáveis imutáveis precisam ser inicializadas na declaração.

### Escopos {.col-span-2}

```js
let x = 5;
{
  let y = 15;
  println(x); // 10
  println(y); // 15
}
println(x); // 5
println(y); // error: variable `y` is used but not defined
```

Quando uma variável alocada no heap sai de escopo, ela é desalocada automaticamente.

### Shadowing

```js
let x = 5;
{
  let x = 10; // shadows the outer `x`
  println(x); // 10
}
println(x); // 5
```

Variáveis podem sofrer shadowing.

## Operadores e expressões

### Aritmética

```js
println(5 + 10); // 15
println(5 - 10); // -5
println(5 * 10); // 50
println(5 / 10); // 0.5
println(5 % 10); // 5
println(-5); // -5
```

Os operadores aritméticos básicos.

### Comparação

```js
println(5 == 10); // false
println(5 != 10); // true
println(5 < 10); // true
println(5 > 10); // false
println(5 <= 10); // true
println(5 >= 10); // false
```

Os operadores de comparação.

### Lógicos

```js
println(true && false); // false
println(true || false); // true
println(!true); // false
```

Os operadores lógicos.

### Bitwise e shift

```js
println(5 & 10); // 0
println(5 | 10); // 15
println(5 ^ 10); // 15
println(~5); // -6
println(5 << 1); // 10
println(5 >> 1); // 2
```

Os operadores bitwise e de shift.

### Atribuições

```js
var x = 5; // 5
x += 10; // 15
x -= 10; // 5
x *= 10; // 50
x /= 10; // 5
x %= 10; // 5
x &= 10; // 0
x |= 10; // 10
x ^= 5; // 15
x <<= 5; // 480
x >>= 5; // 15
x++; // 16
x--; // 15
```

Os operadores de atribuição.

### O operador ternário

```js
let x = 5;
let y = if (x > 5) 10 else 20;

println(y);
// 20
```

No Hook, o operador ternário é `if else`.

## Desvios condicionais

### If

```js
let x = 10;

if (x > 5) {
  println('x is greater than 5');
}
// x is greater than 5
```

A instrução `if`.

### If else

```js
let x = 11;

if (x == 5) {
  println('x is 5');
} else if (x == 10) {
  println('x is 10');
} else {
  println('x is neither 5 nor 10');
}
// x is neither 5 nor 10
```

A instrução `if else`.

### Match

```rs
let x = 5;

match (x) {
  1 => println("one");
  2 => println("two");
  3 => println("three");
  _ => println("other");
}
// other
```

A instrução `match`.

## Laços

### While

```js
var x = 0;

while (x < 5) {
  print(x);
  x += 1;
}
// 01234
```

O laço `while`.

### Do while

```js
var x = 0;

do {
  print(x);
  x += 1;
} while (x < 5);
// 01234
```

O laço `do while`.

### For

```js
for (var i = 0; i < 5; i++) {
  print(i);
}
// 01234
```

O laço `for` clássico.

### Loop

```rs
loop {
  println("Press Ctrl+C to stop");
}
```

O `loop` incondicional.

### Break

```js
var i = 0;
```

```rs
loop {
  if (i == 5) break;

  print(i);
  i += 1;
}
// 01234
```

Use `break` para sair de um laço.

### Continue

```js
var i = 0;
```

```rs
loop {
  i += 1;
  if (i % 2 == 0) continue;

  print(i);

if (i == 5) break;
}
// 135
```

Use `continue` para pular o restante do corpo do laço.

## Strings

### Indexar uma string

```js
let s = 'Hello';

println(s[0]); // H
println(s[1]); // e
println(s[4]); // o
```

Indexar uma string retorna uma string de 1 caractere.

### Fatiar uma string

```js
let s = "Hello, World!";

println(s[0..5]);        // Hello,
println(s[7..12]);       // World!
```

Passe um range para fatiar uma string.

### Concatenar strings

```js
let greeting = 'Hi' + ' there!';

println(greeting);
// Hi there!
```

Use o operador `+` para concatenar strings.

## Arrays

### Indexar um array

```js
let a = [1, 2, 3];

println(a[0]); // 1
println(a[1]); // 2
println(a[2]); // 3
```

Indexar um array retorna um elemento.

### Fatiar um array

```js
let a = [1, 2, 3, 4];

println(a[0..2]);            // [1, 2, 3]
println(a[1..3]);            // [2, 3, 4]
println(a[2 .. len(a) - 1]); // [3, 4]
```

Arrays são indexados a partir de zero.

### Adicionar um elemento

```js
var a = [1, 2];

a[] = 3;

println(a);
// [1, 2, 3]
```

Arrays são mutáveis. Use `[]` para adicionar um elemento.

### Atribuição de elemento

```js
var a = [1, 2, 3];

a[0] = 4;

println(a);
// [4, 2, 3]
```

Atualize um elemento em um array.

### Concatenar arrays

```js
let a = [1, 2];
let b = [3];
let c = a + b;

println(c);
// [1, 2, 3]
```

Use o operador `+` para concatenar arrays.

### Subtrair arrays

```js
let a = [1, 2, 2, 3];
let b = [2];
let c = a - b;

println(c);
// [1, 3]
```

Obtenha a diferença entre dois arrays.

## Funções e closures

### Declaração de função

```rs
fn sum(a, b) {
  return a + b;
}

println(sum(5, 10));
// 15
```

Funções são cidadãs de primeira classe.

### Chamada de função

```rs
fn greet(name) {
  println("Hi, " + name + "!");
}

greet("John", "Doe");
// Hi, John!
```

O número de argumentos é ajustado.

### Funções anônimas

```js
let sum = |a, b| {
  return a + b;
};

println(sum(5, 10));
// 15
```

Funções anônimas também são suportadas.

### Closures

```js
let pi = 3.14;
```

```rs
fn area(r) {
  return pi * r * r;
}

println(area(5));
// 78.5
```

Closures no Hook capturam apenas valores.

### Funções de ordem superior

```rs
fn apply(f, x) {
  return f(x);
}

fn double(x) {
  return x * 2;
}

println(apply(double, 5));
// 10
```

Funções podem ser passadas como argumentos ou retornadas.

### Açúcar sintático para funções

```rs
fn factorial(n) =>
  if (n == 0) 1
  else n * factorial(n - 1);

println(factorial(5));
// 120
```

Use `=>` quando o corpo for uma única expressão.

### Recursão

```rs
fn fib(n) {
  if (n < 2)
    return n;
  return fib(n - 1) + fib(n - 2);
}

println(fib(10));
// 55
```

Recursão é suportada.

### Funções nativas

```js
println(type(5));
// number
println('1' + to_string(2));
// 12
println(len('foo'));
// 3
```

Existem muitas funções nativas.

### Mais funções nativas

|             |           |             |
| ----------- | :-------- | :---------- |
| `print`     | `println` | `type`      |
| `is_nil`    | `is_bool` | `to_number` |
| `to_string` | `hex`     | `len`       |
| `exit`      | `assert`  | `panic`     |

Veja: [Funções nativas](https://github.com/hook-lang/hook/blob/main/docs/built-in.md)

## Structs

### Structs

```rs
struct Point {
  x, y
}
```

```js
let p = Point { 5, 10 };

println(p);
// {x: 5, y: 10}
```

Uma struct é um protótipo para um record.

### Acessar campos

```js
println(p.x); // 5
println(p.y); // 10
```

Use `.` para acessar um campo em um record.

### Atribuição de campo

```js
p.x = 10;
p.y = 20;

println(p);
// {x: 10, y: 20}
```

Atualize o valor de um campo em um record.

## Desestruturação

### Desestruturar um array

```js
let a = [1, 2];
let [x, y] = a;

println(x); // 1
println(y); // 2
```

Variáveis são declaradas e atribuídas.

### Desestruturar um record

```js
let p = { x: 5, y: 10 };
let { x } = p;

println(x);
// 5
```

Use `{}` para desestruturar um record.

### Placeholder

```js
let a = [1, 2];
let [x] = a;
let [_, y] = a;

println(x); // 1
println(y); // 2
```

Use `_` para ignorar elementos iniciais ou do meio.

## Modularidade

### Importar um módulo

```js
import math;
```

```js
println(math.sqrt(25));
// 5
```

Use `import` para trazer um módulo para o escopo.

### Exportar símbolos

```rs
// my_module.hk
fn useful_fn() {
  return "Nothing";
}

return { useful: useful_fn };
```

Retorne um record com os símbolos a exportar.

### Importar módulos locais

```python
import "./my_module.hk" as my;
```

```js
println(my.useful());
// Nothing
```

Especifique o path do módulo local.

### Importação seletiva

```js
import { pow, sqrt } from math;

let [ b, c ] = [ 4, 3 ];
let a = sqrt(pow(b, 2) + pow(c, 2));

println(a);
// 5
```

Use `{}` para importar símbolos específicos.

### Módulos core

|            |          |        |           |
| ---------- | :------- | :----- | :-------- |
| `math`     | `os`     | `io`   | `numbers` |
| `strings`  | `arrays` | `utf8` | `hashing` |
| `encoding` | `socket` | `json` | `lists`   |

Veja: [Módulos core](https://github.com/hook-lang/hook/blob/main/docs/core-modules.md)

### Módulos de extensão

|           |           |         |           |
| --------- | :-------- | :------ | :-------- |
| `bigint`  | `crypto`  | `curl`  | `fastcgi` |
| `geohash` | `leveldb` | `mysql` | `redis`   |
| `regex`   | `sqlite`  | `uuid`  | `zeromq`  |

Esta é uma lista de módulos de extensão.

### Módulo **io**

```js
import { stderr, writeln } from io;

writeln(stderr, "Something went wrong");
// Something went wrong
```

Imprimindo em `stderr` com o módulo `io`.

### Módulo **hashing**

```python
import hashing as h;
```

```js
let d = h.sha256('Hello, world!');

println(hex(d));
// 315f5bdb76d078c43b8ac0064e4a...
```

O módulo `hashing` fornece funções de hash.

### Módulo **json**

```js
import json;
```

```js
let j = '{"x": 1, "y": 2}';
let p = json.decode(j);

println(p.x); // 1

let k = json.encode(p);
println(type(k)); // string
```

Use o módulo `json` para trabalhar com JSON.

## Tratamento de erros

### Erros {.col-span-2}

```js
println(to_int('foo'));

// runtime error: type error: argument #1 is not a convertible string
//   at to_int() in <native>
//   at main() in example.hk:1
```

O Hook usa modo panic para tratamento de erros. Quando ocorre um erro, o interpretador para.

### Erro de sintaxe

```js
println('Hello, World!');

// syntax error: unexpected end of file
//   at main() in example.hk:1,25
```

O Hook tem sintaxe estrita.

### Panic

```js
panic('Something went wrong');

// panic: Something went wrong
//   at main() in example.hk:1
```

Use a função nativa `panic` para lançar um erro.

### Assert {.col-span-2}

```js
assert(5 > 10, '5 is not greater than 10');

// assert: 5 is not greater than 10
//   at main() in example.hk:1
```

Use a função nativa `assert` para verificar uma condição.

### Retornar erros {.col-span-2}

```rs
fn divide(a, b) {
  if (b == 0)
    return [nil, "division by zero"];
  return a / b;
}

if (let [ok, err] = divide(5, 0); ok) {
  println(ok);
} else {
  println(err);
}
// division by zero
```

Use um par para retornar um valor e um erro.

### Propagar erros

```rs
if (let [ok, err] = divide(5, 0); err) {
  return [nil, err];
}
```

Passe um erro adiante sem tratá-lo.
