---
title: JavaScript
date: 2020-12-24 17:12:25
background: bg-[#ebd94e]
tags:
  - js
  - web
categories:
  - Programação
intro: |
  Um cheat sheet de JavaScript com os conceitos, funções, métodos e muito mais. Uma referência rápida e completa para iniciantes.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Introdução

JavaScript é uma linguagem de programação leve e interpretada.

- [Cheat sheet de JSON](/json) _(cheatsheets.zip)_
- [Regex em JavaScript](/regex#regex-in-javascript) _(cheatsheets.zip)_

### Console

```javascript
// => Hello world!
console.log('Hello world!');

// => Hello CheatSheets.zip
console.warn('hello %s', 'CheatSheets.zip');

// Prints error message to stderr
console.error(new Error('Oops!'));
```

### Números

```javascript
let amount = 6;
let price = 4.99;
```

### Variáveis

```javascript
let x = null;
let name = 'Tammy';
const found = false;

// => Tammy, false, null
console.log(name, found, x);

var a;
console.log(a); // => undefined
```

### Strings

```javascript
let singleQuotes = 'Wheres my bandit hat?';
let doubleQuotes = "Wheres my bandit hat?";
// this is used to embed expressions or for creating multi-line strings
let backTicks = `Wheres my bandit hat? ${some_value}`;

// they can also be mixed,
// NOTE: if you need the functionality of the backticks, use it as the surrounding quotes
let mixedQuotes = `hello ${'dear' + name}, "let's have a great day today`;

// => 21
console.log(singleQuotes.length);
```

### Operadores aritméticos

```javascript
5 + 5 = 10     // Addition
10 - 5 = 5     // Subtraction
5 * 10 = 50    // Multiplication
10 / 5 = 2     // Division
10 % 5 = 0     // Modulo
```

### Comentários

```javascript
// This line will denote a comment

/*
The below configuration must be
changed before deployment.
*/
```

### Operadores de atribuição

```javascript
let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number);
// => 120
```

### Interpolação de strings

```javascript
let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;
```

### Palavra-chave let

```javascript
let count;
console.log(count); // => undefined
count = 10;
console.log(count); // => 10
```

### Palavra-chave const

```javascript
const numberOfColumns = 4;

// TypeError: Assignment to constant...
numberOfColumns = 8;
```

## Condicionais em JavaScript

### Instrução if

```javascript
const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}
```

### Operador ternário

```javascript
// The ternary operator is a concise way to write an if-else statement in a single line: condition ? exprIfTrue : exprIfFalse.

var x = 1;

// true, (condition) ? value_if_true : value_if_false
result = x == 1 ? true : false;
```

### Operadores {.row-span-2}

```javascript
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false
```

#### Operador lógico &&

```javascript
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true
```

#### Operadores de comparação

```javascript
1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === '1'; // false
```

#### Operador lógico !

```javascript
let lateToWork = true;
let oppositeValue = !lateToWork;

// => false
console.log(oppositeValue);
```

#### Operador de coalescência nula ??

```javascript
null ?? 'I win'; //  'I win'
undefined ?? 'Me too'; //  'Me too'

false ?? 'I lose'; //  false
0 ?? 'I lose again'; //  0
'' ?? 'Damn it'; //  ''
```

#### Encadeamento opcional ?.

```javascript
const obj = {
  name: 'John Doe',
  age: 8
};

console.log(obj?.address);
```

### else if

```javascript
const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small
```

### Instrução switch

```javascript
const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}
```

### Consulta em objeto

```javascript
const food = 'salad';

const foods = {
  oyster: 'The taste of the sea',
  pizza: 'A delicious pie'
};

console.log(foods[food] || 'Enjoy your meal');
```

### == vs ===

```javascript
0 == false; // true
0 === false; // false, different type
1 == '1'; // true,  automatic type conversion
1 === '1'; // false, different type
null == undefined; // true
null === undefined; // false
'0' == false; // true
'0' === false; // false
```

O operador `==` apenas verifica o valor; o `===` verifica tanto o valor quanto o tipo.

## Funções em JavaScript

### Funções

```javascript
// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9
```

### Funções anônimas

```javascript
// Named function
function rocketToMars() {
  return 'BOOM!';
}

// Anonymous function
const rocketToMars = function () {
  return 'BOOM!';
};
```

### Arrow functions (ES6) {.row-span-2}

#### Com dois argumentos

```javascript
const sum = (param1, param2) => {
  return param1 + param2;
};
console.log(sum(2, 5)); // => 7
```

#### Sem argumentos

```javascript
const printHello = () => {
  console.log('hello');
};
printHello(); // => hello
```

#### Com um único argumento

```javascript
const checkWeight = (weight) => {
  console.log(`Weight : ${weight}`);
};
checkWeight(25); // => Weight : 25
```

#### Arrow functions concisas

```javascript
const multiply = (a, b) => a * b;
// => 60
console.log(multiply(2, 30));
```

[Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) disponível
a partir do ES2015

### Palavra-chave return

```javascript
// With return
function sum(num1, num2) {
  return num1 + num2;
}

// The function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}
```

### Chamando funções

```javascript
// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function
sum(2, 4); // 6
```

### Expressões de função

```javascript
const dog = function () {
  return 'Woof!';
};
```

### Parâmetros de função

```javascript
// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}
```

### Declaração de função

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

## Escopo em JavaScript

### Escopo

```javascript
function myFunction() {
  var pizzaName = 'Margarita';
  // Code here can use pizzaName
}

// Code here can't use pizzaName
```

### Variáveis com escopo de bloco

```javascript
const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage = 'Logged in.';
}

// Uncaught ReferenceError...
console.log(statusMessage);
```

### Variáveis globais

```javascript
// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // => blue
```

### let vs var

```javascript
for (let i = 0; i < 3; i++) {
  // This is the Max Scope for 'let'
  // i accessible ✔️
}
// i not accessible ❌
```

---

```javascript
for (var i = 0; i < 3; i++) {
  // i accessible ✔️
}
// i accessible ✔️
```

`var` tem escopo no bloco de função mais próximo, e `let` tem escopo no bloco envolvente mais próximo.

### Loops com closures

```javascript{.wrap}
// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
}
```

---

```javascript{.wrap}
// Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) {
  setTimeout(_ => console.log(j), 10);
}
```

A variável tem sua própria cópia com `let`, e tem uma cópia compartilhada com `var`.

## Arrays em JavaScript

### Arrays

```javascript
const fruits = ['apple', 'orange', 'banana'];

// Different data types
const data = [1, 'chicken', false];
```

### Propriedade .length

```javascript
const numbers = [1, 2, 3, 4];

numbers.length; // 4
```

### Índice

```javascript
// Accessing an array element
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
```

### Tabela de mutabilidade

|           | adicionar | remover | início | fim |
| :-------- | :-------: | :-----: | :----: | :--: |
| `push`    |  ✔  |        |       |  ✔  |
| `pop`     |     |   ✔    |       |  ✔  |
| `unshift` |  ✔  |        |   ✔   |     |
| `shift`   |     |   ✔    |   ✔   |     |

{.show-header}

### Array.push()

```javascript
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear');

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);
```

Adiciona itens ao final e retorna o novo comprimento do array.

### Array.pop()

```javascript
const fruits = ['apple', 'orange', 'banana'];

const fruit = fruits.pop(); // 'banana'
console.log(fruits); // ["apple", "orange"]
```

Remove um item do final e retorna o item removido.

### Array.shift()

```javascript
let cats = ['Bob', 'Willy', 'Mini'];

cats.shift(); // ['Willy', 'Mini']
```

Remove um item do início e retorna o item removido.

### Array.unshift()

```javascript
let cats = ['Bob'];

// => ['Willy', 'Bob']
cats.unshift('Willy');

// => ['Puff', 'George', 'Willy', 'Bob']
cats.unshift('Puff', 'George');
```

Adiciona itens ao início e retorna o novo comprimento do array.

### Array.concat()

```javascript
const numbers = [3, 2, 1];
const newFirstNumber = 4;

// => [ 4, 3, 2, 1 ]
[newFirstNumber].concat(numbers);

// => [ 3, 2, 1, 4 ]
numbers.concat(newFirstNumber);
```

Se você quiser evitar mutar o array original, pode usar concat.

### Desestruturação

```javascript
const [name, age] = ['John Doe', 8];

console.log(name);
console.log(age);
```

## Set em JavaScript

### Criar Set

```javascript
// Empty Set Object
const emptySet = new Set();

// Set Object with values
const setObj = new Set([1, true, 'hi']);
```

### Add

```javascript
const emptySet = new Set();

// add values
emptySet.add('a'); // 'a'
emptySet.add(1); // 'a', 1
emptySet.add(true); // 'a', 1, true
emptySet.add('a'); // 'a', 1, true
```

### Delete

```javascript
const emptySet = new Set([1, true, 'a']);

// delete values
emptySet.delete('a'); // 1, true
emptySet.delete(true); // 1
emptySet.delete(1); //
```

### Has

```javascript
const setObj = new Set([1, true, 'a']);

// returns true or false
setObj.has('a'); // true
setObj.has(1); // true
setObj.has(false); // false
```

### Clear

```javascript
const setObj = new Set([1, true, 'a']);

// clears the set
console.log(setObj); // 1, true, 'a'
setObj.clear(); //
```

### Size

```javascript
const setObj = new Set([1, true, 'a']);

consoloe.log(setObj.size); // 3
```

### ForEach

```javascript
const setObj = new Set([1, true, 'a']);

setObj.forEach(function (value) {
  console.log(value);
});

// 1
// true
// 'a'
```

## Loops em JavaScript

### Loop while

```javascript
while (condition) {
  // code block to be executed
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Loop reverso

```javascript
const fruits = ['apple', 'orange', 'banana'];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruits[i]}`);
}

// => 2. banana
// => 1. orange
// => 0. apple
```

### Instrução do…while

```javascript
x = 0;
i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5);
// => 0 1 3 6 10
```

### Laço for

```javascript
for (let i = 0; i < 4; i += 1) {
  console.log(i);
}

// => 0, 1, 2, 3
```

### Percorrendo arrays

```javascript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// => Every item in the array
```

### Break

```javascript
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);
}
// => 0 1 2 3 4 5
```

### Continue

```javascript
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += 'The number is ' + i + '<br>';
}
```

### Loops aninhados

```javascript
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}
```

### Laço for...in

```javascript
const fruits = ['apple', 'orange', 'banana'];

// 1. Print only indexes
for (let index in fruits) {
  console.log(index);
}
// => 0
// => 1
// => 2

// 2. Print only values
for (let index in fruits) {
  console.log(fruits[index]);
}
// => apple
// => orange
// => banana

// 3. Print index with value
for (let index in fruits) {
  console.log(index, fruits[index]);
}
// => 0 apple
// => 1 orange
// => 2 banana
```

### Laço for...of

```javascript
const fruits = ['apple', 'orange', 'banana'];

for (let fruit of fruits) {
  console.log(fruit);
}
// => apple
// => orange
// => banana

for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}
// => 0 apple
// => 1 orange
// => 2 banana
```

## Iterators em JavaScript {.cols-2}

### Funções atribuídas a variáveis

```javascript
let plusFive = (number) => {
  return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked.
f(9); // 14
```

### Funções de callback

```javascript
const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`);
};

// Pass in isEven as the callback function
printMsg(isEven, 4);
// => 4 is an even number: True.
```

### Array.reduce()

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, curVal) => {
  return accumulator + curVal;
});

console.log(sum); // 10
```

### Array.map()

```javascript
const members = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

const announcements = members.map((member) => {
  return member + ' joined the contest.';
});

console.log(announcements);
```

### Array.forEach()

```javascript
const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});
```

### Array.filter()

```javascript
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => {
  return n > 5;
});
```

## Objetos em JavaScript {.cols-2}

### Acessando propriedades

```javascript
const apple = {
  color: 'Green',
  price: { bulk: '$3/kg', smallQty: '$4/kg' }
};
console.log(apple.color); // => Green
console.log(apple.price.bulk); // => $3/kg
```

### Nomeando propriedades

```javascript
// Example of invalid key names
const trainSchedule = {
  // Invalid because of the space between words.
  platform num: 10,
  // Expressions cannot be keys.
  40 - 10 + 2: 30,
  // A + sign is invalid unless it is enclosed in quotations.
  +compartment: 'C'
}
```

### Propriedades inexistentes

```javascript
const classElection = {
  date: 'January 12'
};

console.log(classElection.place); // undefined
```

### Mutável {.row-span-2}

```javascript
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A'
};

console.log(student);
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score;
student.grade = 'F';
console.log(student);
// { name: 'Sheldon', grade: 'F' }

student = {};
// TypeError: Assignment to constant variable.
```

### Sintaxe abreviada de atribuição

```javascript
const person = {
  name: 'Tom',
  age: '22'
};
const { name, age } = person;
console.log(name); // 'Tom'
console.log(age); // '22'
```

### Operador delete

```javascript
const person = {
  firstName: 'Matilda',
  age: 27,
  hobby: 'knitting',
  goal: 'learning JavaScript'
};

delete person.hobby; // or delete person[hobby];

console.log(person);
/*
{
  firstName: "Matilda"
  age: 27
  goal: "learning JavaScript"
}
*/
```

### Objetos como argumentos

```javascript
const origNum = 8;
const origObj = { color: 'blue' };

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed
// by reference and are therefore mutable.
console.log(origObj.color);
```

### Criação abreviada de objetos

```javascript
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }
```

### Palavra-chave this

```javascript
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name;
  }
};
console.log(cat.whatName()); // => Pipey
```

### Funções factory

```javascript
// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');
    }
  };
};
```

### Métodos de objeto

```javascript
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  }
};

engine.start('noisily');
engine.sputter();
```

### Getters e setters

```javascript
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  }
};

// Reference invokes the getter
console.log(myCat.name);

// Assignment invokes the setter
myCat.name = 'Yankee';
```

### Desestruturação

```javascript
const obj = {
  name: 'John Doe',
  age: 8
};

const { name, age } = obj;

console.log(name);
console.log(age);
```

## Classes em JavaScript

### Métodos estáticos

```javascript
class Dog {
  constructor(name) {
    this._name = name;
  }

  introduce() {
    console.log('This is ' + this._name + ' !');
  }

  // A static method
  static bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog('Buster');
myDog.introduce();

// Calling the static method
Dog.bark();
```

### Classe

```javascript
class Song {
  constructor() {
    this.title;
    this.author;
  }

  play() {
    console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();
```

### Construtor de classe

```javascript
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);
```

### Métodos de classe

```javascript
class Song {
  play() {
    console.log('Playing!');
  }

  stop() {
    console.log('Stopping!');
  }
}
```

### extends

```javascript
// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}

// Child class
class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}

const mySong = new Song({
  artist: 'Queen',
  name: 'Bohemian Rhapsody',
  publishDate: 1975
});
```

## Módulos em JavaScript {.cols-2}

### Export

```javascript
// myMath.js

// Default export
export default function add(x, y) {
  return x + y;
}

// Normal export
export function subtract(x, y) {
  return x - y;
}

// Multiple exports
function multiply(x, y) {
  return x * y;
}
function duplicate(x) {
  return x * 2;
}
export { multiply, duplicate };
```

### Import

```javascript
// main.js
import add, { subtract, multiply, duplicate } from './myMath.js';

console.log(add(6, 2)); // 8
console.log(subtract(6, 2)) // 4
console.log(multiply(6, 2)); // 12
console.log(duplicate(5)) // 10

// index.html
<script type="module" src="main.js"></script>
```

### Exportar módulo

```javascript
// myMath.js

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function duplicate(x) {
  return x * 2;
}

// Multiple exports in node.js
module.exports = {
  add,
  subtract,
  multiply,
  duplicate
};
```

### Módulo require

```javascript
// main.js
const myMath = require('./myMath.js');

console.log(myMath.add(6, 2)); // 8
console.log(myMath.subtract(6, 2)); // 4
console.log(myMath.multiply(6, 2)); // 12
console.log(myMath.duplicate(5)); // 10
```

## Promises em JavaScript {.cols-2}

### Estados de uma promise {.row-span-2}

```javascript
const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve('Resolved!');
  } else {
    reject(Error('Error'));
  }
});

promise.then(
  (res) => console.log(res),
  (err) => console.error(err)
);
```

### Função executor

```javascript
const executorFn = (resolve, reject) => {
  resolve('Resolved!');
};

const promise = new Promise(executorFn);
```

### setTimeout()

```javascript
const loginAlert = () => {
  console.log('Login');
};

setTimeout(loginAlert, 6000);
```

### Método .then()

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Result');
  }, 200);
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.error(err);
  }
);
```

### Promise.catch()

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise Rejected Unconditionally.'));
  }, 1000);
});

promise.then((res) => {
  console.log(value);
});

promise.catch((err) => {
  console.error(err);
});
```

### Promise.all()

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
```

### Promise.allSettled()

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 100);
});

Promise.allSettled([promise1, promise2]).then((res) => {
  console.log(res[0].status);
  console.log(res[1].status);
});
```

### Evitando promises aninhadas e .then()

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('*');
  }, 1000);
});

const twoStars = (star) => {
  return star + star;
};

const oneDot = (star) => {
  return star + '.';
};

const print = (val) => {
  console.log(val);
};

// Chaining them all together
promise.then(twoStars).then(oneDot).then(print);
```

### Criando

```javascript
const executorFn = (resolve, reject) => {
  console.log('The executor function of the promise!');
};

const promise = new Promise(executorFn);
```

### Encadeando múltiplos .then()

```javascript
const promise = new Promise((resolve) =>
  setTimeout(() => resolve('dAlan'), 100)
);

promise
  .then((res) => {
    return res === 'Alan'
      ? Promise.resolve('Hey Alan!')
      : Promise.reject('Who are you?');
  })
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.error(err);
    }
  );
```

### Request HTTP fake com Promise

```javascript
const mock = (success, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, data: {} });
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};
const someEvent = async () => {
  try {
    await mock(true, 1000);
  } catch (e) {
    console.log(e.message);
  }
};
```

## Async/await em JavaScript {.cols-2}

### Assíncrono

```javascript
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

const msg = async function () {
  //Async Function Expression
  const msg = await helloWorld();
  console.log('Message:', msg);
};

const msg1 = async () => {
  //Async Arrow Function
  const msg = await helloWorld();
  console.log('Message:', msg);
};

msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds
```

### Resolvendo promises

```javascript
let pro1 = Promise.resolve(5);
let pro2 = 44;
let pro3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([pro1, pro2, pro3]).then(function (values) {
  console.log(values);
});
// expected => Array [5, 44, "foo"]
```

### Promises com async/await

```javascript
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
```

### Tratamento de erros

```javascript
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  console.log(user.name); // no name!
} catch (e) {
  console.error('Invalid JSON data!');
}
```

### Operador async/await

```javascript
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
```

## Requests em JavaScript

### JSON

```json
const jsonObj = {
  "name": "Rick",
  "id": "11A",
  "level": 4
};
```

Veja também: [cheat sheet de JSON](/json)

### XMLHttpRequest

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'mysite.com/getjson');
```

`XMLHttpRequest` é uma API de nível de navegador que permite ao cliente programar transferências de dados via JavaScript, e NÃO faz parte da
linguagem JavaScript.

### GET

```javascript
const req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '/getdata?id=65');
req.onload = () => {
  console.log(xhr.response);
};

req.send();
```

### POST {.row-span-2}

```javascript
const data = {
  fish: 'Salmon',
  weight: '1.5 KG',
  units: 5
};
const xhr = new XMLHttpRequest();
xhr.open('POST', '/inventory/add');
xhr.responseType = 'json';
xhr.send(JSON.stringify(data));

xhr.onload = () => {
  console.log(xhr.response);
};
```

### API fetch {.row-span-2}

```javascript
fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}
```

### JSON formatado

```javascript
fetch('url-that-returns-JSON')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Parâmetro de URL de promise na API fetch

```javascript
fetch('url')
.then(
  response  => {
    console.log(response);
  },
 rejection => {
    console.error(rejection.message);
);
```

### Função da API fetch

```javascript
fetch('https://api-xxx.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({ id: '200' })
})
  .then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    (networkError) => {
      console.log(networkError.message);
    }
  )
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Sintaxe async/await {.col-span-2}

```javascript
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, { cache: 'no-cache' });
    if (response.ok) {
      const jsonResponse = await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
```
