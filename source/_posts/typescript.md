---
title: TypeScript
date: 2024-05-28 22:12:25
background: bg-[#4476c0]
tags:
  - ts
  - web
categories:
  - Programação
intro: |
  Um cheat sheet de TypeScript com os conceitos, funções, métodos e muito mais importantes. Uma referência rápida completa para iniciantes.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Instalando o compilador

```shell
npm install typescript --save-dev
npm tsc
```

### Introdução

TypeScript é um superset do JavaScript que adiciona **tipagem estática**, **interfaces** e **verificação de erros em tempo de compilação**. Ele compila para JavaScript puro.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tipos básicos

```typescript
let age: number = 25;
let name: string = "Alice";
let isOnline: boolean = true;
let notSure: any = "Could be anything";
let nothingHere: null = null;
let notDefined: undefined = undefined;
let symbolValue: symbol = Symbol("unique");
let bigIntValue: bigint = 9007199254740991n;
```

### Arrays

```typescript
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];
let mixed: (string | number)[] = ["one", 2, "three"];
```

### Tuplas

```typescript
let person: [string, number];
person = ["John", 30]; // ✅
person = [30, "John"]; // ❌ Error
```

### Enums

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}
```

### Aliases de tipo

```typescript
type ID = string | number;
let userId: ID = 123;

type Callback = () => void;
```

### Interfaces

```typescript
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
  readonly id: number; // readonly
}

const user: User = { name: "Bob", age: 25, id: 1 };
```

### Estendendo interfaces

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Fido", breed: "Labrador" };
```

### Funções

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

const add = (a: number, b: number): number => a + b;
```

### Parâmetros opcionais e padrão

```typescript
function log(message: string, userId?: string) {
  console.log(message, userId ?? "Guest");
}

function multiply(a: number, b: number = 2) {
  return a * b;
}
```

### Parâmetros rest

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

### Sobrecargas de função

```typescript
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
```

### Tipos de união e interseção

```typescript
type Status = "success" | "error" | "loading";

type UserInfo = { name: string };
type AdminInfo = { admin: boolean };

type AdminUser = UserInfo & AdminInfo;
```

### Tipos literais

```typescript
type Alignment = "left" | "center" | "right";
let align: Alignment = "left";
```

### Generics

```typescript
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);
let str = identity("Hello");
```

### Restrições de generics

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}
```

### Interfaces genéricas

```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}

const myIdentity: GenericIdentityFn<number> = identity;
```

### Classes

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const alice = new Person("Alice");
alice.greet();
```

### Modificadores de acesso

```typescript
class Car {
  public brand: string;
  private speed: number;
  protected year: number;

  constructor(brand: string, speed: number, year: number) {
    this.brand = brand;
    this.speed = speed;
    this.year = year;
  }
}
```

### Classes abstratas

```typescript
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

### Implementa interface

```typescript
interface Vehicle {
  start(): void;
}

class Bike implements Vehicle {
  start() {
    console.log("Bike starting...");
  }
}
```

### Asserções de tipo

```typescript
let someValue: unknown = "Hello TypeScript";
let strLength: number = (someValue as string).length;
```

### Coalescência nula

```typescript
let input: string | null = null;
let result = input ?? "Default";
```

### Encadeamento opcional

```typescript
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // Alice
console.log(user.address?.street); // undefined
```

### Namespaces

```typescript
namespace Utils {
  export function log(msg: string) {
    console.log(msg);
  }
}

Utils.log("Hello");
```

### Módulos

```typescript
// math.ts
export function add(a: number, b: number) {
  return a + b;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));
```

### Export default

```typescript
// logger.ts
export default class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

// main.ts
import Logger from "./logger";
const logger = new Logger();
logger.log("Info");
```

### Promises e async/await

```typescript
async function fetchData(): Promise<string> {
  return "Data loaded";
}

fetchData().then(console.log);
```

### Tipagem de funções assíncronas

```typescript
interface User {
  id: number;
  name: string;
}

async function getUser(id: number): Promise<User> {
  // Simulate fetch
  return { id, name: "User" };
}
```

### Readonly e Record

```typescript
interface Config {
  readonly apiKey: string;
}

type Point = Record<"x" | "y", number>;
const origin: Point = { x: 0, y: 0 };
```

## Recursos avançados

### Type guards

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### Assinaturas de índice

```typescript
interface Dictionary {
  [key: string]: string;
}

const dict: Dictionary = { hello: "world" };
```

### Tipos mapeados

```typescript
type Flags = { [K in "option1" | "option2"]: boolean };
const flags: Flags = { option1: true, option2: false };
```

### Tipos condicionais

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type SafeString = NonNullable<string | null>; // string
```

### Unknown vs Any

```typescript
let value: unknown;
value = 5; // OK
// console.log(value.length); // Error

let anyValue: any;
anyValue = 5;
console.log(anyValue.length); // No error, but risky
```

### Tipo never

```typescript
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### Decorators (experimental)

```typescript
function sealed(target: any) {
  Object.seal(target);
  Object.seal(target.prototype);
}

@sealed
class SealedClass {}
```

### Tipos utilitários

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial
type PartialTodo = Partial<Todo>;

// Required
type RequiredTodo = Required<PartialTodo>;

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit
type TodoWithoutDesc = Omit<Todo, "description">;

// ReturnType
function f() { return { x: 10, y: 3 }; }
type P = ReturnType<typeof f>;

// Parameters
type Params = Parameters<(a: number, b: string) => void>;
```

### Keyof e Typeof

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

const person = { name: "Alice", age: 30 };
type PersonType = typeof person; // { name: string; age: number }
```

### Palavra-chave infer

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```

## Condicionais e loops

### Instrução if

```typescript
const max: number = 100;
if (max > 50) {
  console.log("Large");
}
```

### Operador ternário

```typescript
const isEven: boolean = (10 % 2 === 0) ? true : false;
```

### Instrução switch

```typescript
const color: string = "red";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("Go");
}
```

### Laço for

```typescript
for (let i: number = 0; i < 5; i++) {
  console.log(i);
}
```

### Loop while

```typescript
let count: number = 0;
while (count < 5) {
  console.log(count++);
}
```

### Laço for...of

```typescript
const arr: number[] = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}
```

### Laço for...in

```typescript
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key);
}
```

## Arrays e iteráveis

### Métodos de array

```typescript
const nums: number[] = [1, 2, 3];

// Map
const doubled: number[] = nums.map(n => n * 2);

// Filter
const evens: number[] = nums.filter(n => n % 2 === 0);

// Reduce
const sum: number = nums.reduce((acc, curr) => acc + curr, 0);
```

### Arrays readonly

```typescript
const readOnlyNums: ReadonlyArray<number> = [1, 2, 3];
// readOnlyNums.push(4); // Error
```

### Sets

```typescript
const set: Set<number> = new Set([1, 2, 3]);
set.add(4);
set.delete(1);
```

### Maps

```typescript
const map: Map<string, number> = new Map();
map.set("one", 1);
map.get("one"); // 1
```

## Objetos

### Tipos de objeto

```typescript
const car: { type: string, mileage?: number } = {
  type: "Toyota"
};
```

### Tipos indexáveis

```typescript
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];
```

### Verificação de propriedades em excesso

```typescript
interface Square {
  color: string;
  width: number;
}

// const redSquare = { color: "red", width: 100, height: 100 }; // Error if strict
```

## Módulos e namespaces

### Namespace com módulos internos

```typescript
namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }
  export function distance(p1: Point, p2: Point): number {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}
```

### Resolução de módulos

// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}

## Tratamento de erros

### Try catch

```typescript
try {
  throw new Error("Oops");
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}
```

### Erros customizados

```typescript
class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}
```

## TypeScript com recursos do JavaScript

### Desestruturação

```typescript
const [first, second]: [number, number] = [1, 2];
const { name: userName, age }: { name: string, age: number } = { name: "Alice", age: 30 };
```

### Operador spread

```typescript
const arr1: number[] = [1, 2];
const arr2: number[] = [...arr1, 3, 4];
```

### Template literals

```typescript
const greeting: string = `Hello, ${name}`;
```

### Arrow functions

```typescript
const square = (x: number): number => x * x;
```
