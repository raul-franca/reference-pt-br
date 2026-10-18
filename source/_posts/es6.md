---
title: ES6
date: 2023-01-08 18:26:55
background: bg-[#edc545]
tags:
  - config
  - format
categories:
  - Programação
intro: |
  Um cheat sheet de referência rápida sobre o que há de novo no JavaScript em ES2015, ES2016, ES2017, ES2018 e além.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Escopo de bloco {.row-span-2}

#### Let

```js{2,4}
function fn () {
  let x = 0
  if (true) {
    let x = 1 // only inside this `if`
  }
}
```

#### Const

```js
const a = 1;
```

`let` é o novo `var`. Constantes (`const`) funcionam como `let`, mas não podem ser reatribuídas. Veja:
[Let and const](https://babeljs.io/learn-es2015/#let--const)

### Template Strings {.row-span-2}

#### Interpolação

```js
const message = `Hello ${name}`;
```

#### String multilinha

```js
const str = `
hello
the world
`;
```

Templates e strings multilinha. Veja: [template strings](https://babeljs.io/learn-es2015/#template-strings)

### Literais binários e octais

```js
let bin = 0b1010010;
let oct = 0o755;
```

Veja: [Binary and Octal Literals](https://babeljs.io/learn-es2015/#binary-and-octal-literals)

### Operador exponencial

```js {1}
const byte = 2 ** 8;
```

Equivalente a: Math.pow(2, 8)

### Novas adições à biblioteca

#### Novos métodos de string

```js
'hello'.repeat(3);
'hello'.includes('ll');
'hello'.startsWith('he');
'hello'.padStart(8); // "hello"
'hello'.padEnd(8); // "hello"
'hello'.padEnd(8, '!'); // hello!!!
'\u1E9B\u0323'.normalize('NFC');
```

#### Novos métodos de Number

```js
Number.EPSILON;
Number.isInteger(Infinity); // false
Number.isNaN('NaN'); // false
```

#### Novos métodos de Math

```js
Math.acosh(3); // 1.762747174039086
Math.hypot(3, 4); // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2); // 2
```

#### Novos métodos de Array

```js
//return a real array
Array.from(document.querySelectorAll('*'));
//similar to new Array(...), but without the special single-argument behavior
Array.of(1, 2, 3);
```

Veja: [New library additions](https://babeljs.io/learn-es2015/#math--number--string--object-apis)

### kind

```js
class Circle extends Shape {
```

#### Constructor

```js {1}
constructor (radius) {
  this.radius = radius
}
```

#### method

```js {1}
getArea () {
  return Math.PI *2 *this.radius
}
```

#### Chamar o método da superclasse

```js {2}
expand(n) {
  return super.expand(n) *Math.PI
}
```

#### Métodos estáticos

```js {1}
static createFromDiameter(diameter) {
  return new Circle(diameter /2)
}
```

Açúcar sintático para prototypes. Veja: [classes](https://babeljs.io/learn-es2015/#classes)

### Classe privada

O campo padrão do javascript é público (`public`); se precisar indicar que é privado, use (`#`)

```js
class Dog {
  #name;
  constructor(name) {
    this.#name = name;
  }
  printName() {
    // Only private fields can be called inside the class
    console.log(`Your name is ${this.#name}`);
  }
}

const dog = new Dog('putty');
//console.log(this.#name)
//Private identifiers are not allowed outside class bodies.
dog.printName();
```

#### Classe privada estática

```js
class ClassWithPrivate {
  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

## Promises

### Criar a promise

```js {1}
new Promise((resolve, reject) => {
  if (ok) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

para programação assíncrona. Veja: [Promises](https://babeljs.io/learn-es2015/#promises)

### Usar Promises

```js{2,3}
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
```

### Usar Promises no finally

```js {4}
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
  .finally(() => {
    /*logic independent of success/error */
  })
```

O handler é chamado quando a promise é resolvida ou rejeitada

### Funções de Promise

```js
Promise.all(···)
Promise.race(···)
Promise.reject(···)
Promise.resolve(···)
```

### Async-await

```js{2,3}
async function run () {
  const user = await getUser()
  const tweets = await getTweets(user)
  return [user, tweets]
}
```

Funções `async` são outra forma de usar funções. Veja:
[Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Destructuring

### Atribuição por desestruturação

#### Arrays

```js {1}
const [first, last] = ['Nikola', 'Tesla'];
```

#### Objetos

```js {1}
let { title, author } = {
  title: 'The Silkworm',
  author: 'R. Galbraith'
};
```

Suporta correspondência de arrays e objetos. Veja: [Destructuring](https://babeljs.io/learn-es2015/#destructuring)

### Valores padrão

```js
const scores = [22, 33];
const [math = 50, sci = 50, arts = 50] = scores;
```

---

```js
//Result:
//math === 22, sci === 33, arts === 50
```

Um valor padrão pode ser atribuído ao desestruturar um array ou objeto

### Parâmetros de função

```js {1}
function greet({ name, greeting }) {
  console.log(`${greeting}, ${name}!`);
}
```

---

```js
greet({ name: 'Larry', greeting: 'Ahoy' });
```

A desestruturação de objetos e arrays também pode ser feita nos parâmetros de função

### Valores padrão

```js {1}
function greet({ name = 'Rauno' } = {}) {
  console.log(`Hi ${name}!`);
}
```

---

```js
greet(); // Hi Rauno!
greet({ name: 'Larry' }); // Hi Larry!
```

### Renomear chaves

```js {1}
function printCoordinates({ left: x, top: y }) {
  console.log(`x: ${x}, y: ${y}`);
}
```

---

```js
printCoordinates({ left: 25, top: 90 });
```

Este exemplo atribui `x` ao valor da chave `left`

### Loop

```js {1}
for (let {title, artist} of songs) {
  ···
}
```

Expressões de atribuição também funcionam em loops

### Desestruturação de objetos

```js {1}
const { id, ...detail } = song;
```

Use o operador `rest(...)` para extrair algumas chaves individualmente e o restante das chaves do objeto

## Operador Spread {.cols-2}

### Extensões de objeto

#### com extensões de objeto

```js {2}
const options = {
  ...defaults,
  visible: true
};
```

#### Sem extensão de objeto

```js
const options = Object.assign({}, defaults, { visible: true });
```

O operador spread de objeto permite construir novos objetos a partir de outros objetos. Veja:
[Object Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### Expansão de array

#### com expansão de array

```js{2,3}
const users = [
  ...admins,
  ...editors,
  'rstacruz'
]
```

#### Sem expansão de array

```js
const users = admins.concat(editors).concat(['rstacruz']);
```

O operador spread permite construir novos arrays da mesma forma. Veja:
[Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Funções

### Parâmetros de função {.row-span-3}

#### Parâmetros padrão

```js {1}
function greet(name = 'Jerry') {
  return `Hello ${name}`;
}
```

#### Parâmetros rest

```js {1}
function fn(x, ...y) {
  // y is an array
  return x * y.length;
}
```

#### Extensões

```js {1}
fn(...[1, 2, 3]);
//same as fn(1, 2, 3)
```

Default (padrão), rest, spread (extensão). Veja:
[function parameters](https://babeljs.io/learn-es2015/#default--rest--spread)

### Arrow function {.row-span-3}

#### Arrow functions

```js {1}
setTimeout(() => {
  ···
})
```

#### com parâmetros

```js {1}
readFile('text.txt', (err, data) => {
  ...
})
```

#### retorno implícito

```js{1,4,5,6}
arr.map(n => n*2)
//no curly braces = implicit return
//Same as: arr.map(function (n) { return n*2 })
arr.map(n => ({
  result: n*2
}))
//Implicitly returning an object requires parentheses around the object
```

Como uma função, mas preserva o `this`. Veja: [Arrow functions](https://babeljs.io/learn-es2015/#arrows-and-lexical-this)

### Definição de valor padrão em parâmetro

```js
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', ''); // Hello
```

### Uso em conjunto com valores padrão na desestruturação

```js
function foo({ x, y = 5 } = {}) {
  console.log(x, y);
}

foo(); // undefined 5
```

### atributo name

```js
function foo() {}
foo.name; // "foo"
```

### propriedade length

```js
function foo(a, b) {}
foo.length; // 2
```

## Objetos

### Sintaxe abreviada

```js
module.exports = { hello, bye };
```

o mesmo que:

```js
module.exports = {
  hello: hello,
  bye: bye
};
```

Veja: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### method

```js {2}
const App = {
  start() {
    console.log('running');
  }
};
//Same as: App = { start: function () {···} }
```

Veja: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Getters e setters

```js{2,5}
const App = {
  get closed () {
    return this.status === 'closed'
  },
  set closed (value) {
    this.status = value ? 'closed' : 'open'
  }
}
```

Veja: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Nome de propriedade computado

```js {3}
let event = 'click';
let handlers = {
  [`on${event}`]: true
};
//Same as: handlers = { 'onclick': true }
```

Veja: [Object Literals Enhanced](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Extrair valores

```js{3,5}
const fatherJS = { age: 57, name: "Zhang San" }
Object.values(fatherJS)
//[57, "Zhang San"]
Object.entries(fatherJS)
//[["age", 57], ["name", "Zhang San"]]
```

## Módulos

### Imports

```js
import 'helpers';
//aka: require('···')
```

---

```js
import Express from 'express';
//aka: const Express = require('···').default || require('···')
```

---

```js
import { indent } from 'helpers';
//aka: const indent = require('···').indent
```

---

```js
import * as Helpers from 'helpers';
//aka: const Helpers = require('···')
```

---

```js
import { indentSpaces as indent } from 'helpers';
//aka: const indent = require('···').indentSpaces
```

`import` é o novo `require()`. Veja: [Module imports](https://babeljs.io/learn-es2015/#modules)

### Exports

```js
export default function () { ··· }
//aka: module.exports.default = ···
```

---

```js
export function mymethod () { ··· }
//aka: module.exports.mymethod = ···
```

---

```js
export const pi = 3.14159;
//aka: module.exports.pi = ···
```

---

```js
const firstName = 'Michael';
const lastName = 'Jackson';
const year = 1958;
export { firstName, lastName, year };
```

---

```js
export * from 'lib/math';
```

`export` é o novo `module.exports`. Veja: [Module exports](https://babeljs.io/learn-es2015/#modules)

### Renomeação com a palavra-chave `as`

```js{2,8,12-14}
import {
  lastName as surname // import rename
} from './profile.js';

function v1() { ... }
function v2() { ... }

export { v1 as default };
//Equivalent to export default v1;

export {
  v1 as streamV1, // export rename
  v2 as streamV2, // export rename
  v2 as streamLatestVersion // export rename
};
```

### Carregar módulos dinamicamente

```js
button.addEventListener('click', (event) => {
  import('./dialogBox.js')
    .then((dialogBox) => {
      dialogBox.open();
    })
    .catch((error) => {
      /*Error handling */
    });
});
```

A [ES2020 Proposal](https://github.com/tc39/proposal-dynamic-import) introduz a função `import()`

### import() permite que paths de módulos sejam gerados dinamicamente

```js
const main = document.querySelector('main');

import(`./modules/${someVariable}.js`)
  .then((module) => {
    module.loadPageInto(main);
  })
  .catch((err) => {
    main.textContent = err.message;
  });
```

### import.meta

A [ES2020](https://github.com/tc39/proposal-import-meta) adicionou a meta propriedade `import.meta` ao comando `import`,
que retorna as metainformações do módulo atual

```js
new URL('data.txt', import.meta.url);
```

No ambiente Node.js, `import.meta.url` sempre retorna um path local, ou seja, uma string do protocolo `file:URL`,
como `file:/// home/user/foo.js`

### Import Assertions {.col-span-2}

#### import estático

```js
import json from './package.json' assert { type: 'json' };
//Import all objects in the json file
```

#### Import dinâmico

```js
const json = await import('./package.json', { assert: { type: 'json' } });
```

## Generators

### Função generator

```js
function* idMaker() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
```

---

```js
let gen = idMaker();
gen.next().value; // → 0
gen.next().value; // → 1
gen.next().value; // → 2
```

é complicado. Veja: [Generators](https://babeljs.io/learn-es2015/#generators)

### For..of + iterator {.row-span-2}

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      }
    };
  }
};

for (var n of fibonacci) {
  // truncate sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
```

Para iterar sobre generators e arrays. Veja: [For..of iteration](https://babeljs.io/learn-es2015/#iterators--forof)

### Relação com a interface Iterator

```js
var gen = {};
gen[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...gen]; // => [1, 2, 3]
```

A função `Generator` é atribuída à propriedade `Symbol.iterator`, de modo que o objeto `gen` tenha a interface `Iterator`,
que pode ser percorrida pelo operador `...`

### Propriedade Symbol.iterator

```js
function* gen() {
  /*some code */
}
var g = gen();

g[Symbol.iterator]() === g; // true
```

`gen` é uma função `Generator`; chamá-la gera um objeto iterador `g`. Sua propriedade `Symbol.iterator`, que também é
uma função geradora de objeto iterador, retorna a si mesma após a execução

## veja também

- [Learn ES2015](https://babeljs.io/docs/en/learn/)_(babeljs.io)_
- [ECMAScript 6 Features Overview](https://github.com/lukehoban/es6features#readme) _(github.com)_
