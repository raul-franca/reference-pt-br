---
title: Rust
date: 2022-01-01 11:51:44
background: bg-black
tags:
categories:
  - Programação
intro: |
  O cheat sheet de referência rápida do Rust que ajuda a escrever a sintaxe básica e os métodos.
plugins:
  - copyCode
---

## Primeiros passos

### Hello_World.rs

```rust
fn main() {
    println!("Hello, World!");
}
```

#### Compilando e executando

```shell
$ rustc Hello_World.rs
$ ./Hello_World
Hello, World!
```

### Tipos primitivos

|                           |                                              |
| ------------------------- | :------------------------------------------- |
| `bool`                    | Booleano (`true` _/_ `false`)                |
| `char`                    | caractere                                    |
| `f32`, `f64`              | floats de 32 bits e 64 bits                  |
| `i64`, `i32`, `i16`, `i8` | inteiros com sinal de 16 bits...             |
| `u64`, `u32`, `u16`, `u8` | inteiros sem sinal de 16 bits...             |
| `isize`                   | inteiros com sinal do tamanho de um ponteiro |
| `usize`                   | inteiros sem sinal do tamanho de um ponteiro |

Veja: [Tipos do Rust](#rust-types)

### Formatação {.row-span-2}

```rust {.wrap}
// Single Placeholder
println!("{}", 1);

// Multiple Placeholder
println!("{} {}", 1, 3);

// Positional Arguments
println!(
    "{0} is a {1} {2}, also {0} is a {3} programming language",
    "Rust", "cool", "language", "safe"
);

// Named Arguments
println!(
    "{country} is a diverse nation with unity.",
    country = "India"
);

// Placeholder traits :b for binary, :0x is for hex and :o is octal
println!("Let us print 76 is binary which is {:b} , and hex equivalent is {:0x} and octal equivalent is {:o}", 76, 76, 76);

// Debug Trait
println!(
    "Print whatever we want to here using debug trait {:?}",
    (76, 'A', 90)
);

// New Format Strings in 1.58
let x = "world";
println!("Hello {x}!");
```

### Estilos de impressão

```rust
// Prints the output
print!("Hello World\n");

// Appends a new line after printing
println!("Appending a new line");

// Prints as an error
eprint!("This is an error\n");

// Prints as an error with new line
eprintln!("This is an error with new line");
```

### Variáveis

```rust
// Initializing and declaring a variable
let some_variable = "This_is_a_variable";

// Making a variable mutable
let mut mutable_variable = "Mutable";

// Assigning multiple variables
let (name, age) = ("ElementalX", 20);

// (Global) constant
const SCREAMING_SNAKE_CASE: i64 = 9;
```

### Comentários

```rust
// Line Comments
/*.............Block Comments */
/// Outer doc comments
//! Inner doc comments
```

Veja: [Comentários](https://doc.rust-lang.org/reference/comments.html)

### Funções

```rust
fn test() {
    println!("This is a function!");
}

fn main() {
    test();
}
```

Veja: [Funções](#rust-functions)

## Tipos do Rust

### Inteiros

```rust
let mut a: u32 = 8;
let b: u64 = 877;
let c: i64 = 8999;
let d = -90;
```

### Ponto flutuante

```rust
let mut sixty_bit_float: f64 = 89.90;
let thirty_two_bit_float: f32 = 7.90;
let just_a_float = 69.69;
```

### Booleano

```rust {.wrap}
let true_val: bool = true;
let false_val: bool = false;
let just_a_bool = true;
let is_true = 8 < 5; // => false
```

### Caractere

```rust
let first_letter_of_alphabet = 'a';
let explicit_char: char = 'F';
let implicit_char = '8';
let emoji = "\u{1f600}"; // => 😀
```

### String literal

```rust {.wrap}
let community_name = "AXIAL";
let no_of_members: &str = "ten";

println!("The name of the community is {community_name} and it has {no_of_members} members");
```

Veja: [Strings](#rust-strings)

### Arrays

```rust
┌─────┬─────┬─────┬─────┬─────┬─────┐
| 92  | 97  | 98  | 99  | 98  | 94  |
└─────┴─────┴─────┴─────┴─────┴─────┘
   0     1     2     3     4     5
```

---

```rust
let array: [i64; 6] = [92, 97, 98, 99, 98, 94];
```

### Array multidimensional {.row-span-2}

```rust
     j0   j1   j2   j3   j4   j5
   ┌────┬────┬────┬────┬────┬────┐
i0 | 1  | 2  | 3  | 4  | 5  | 6  |
   ├────┼────┼────┼────┼────┼────┤
i1 | 6  | 5  | 4  | 3  | 2  | 1  |
   └────┴────┴────┴────┴────┴────┘
```

---

```rust
let array: [[i64; 6]; 2] = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1]
];
```

### Array mutável

```rust
let mut array: [i32; 3] = [2, 6, 10];

array[1] = 4;
array[2] = 6;
```

Use a palavra-chave `mut` para torná-lo mutável.

### Slices

```rust
let mut array: [i64; 4] = [1, 2, 3, 4];
let mut slices: &[i64] = &array[0..3]; // Lower range is inclusive and upper range is exclusive

println!("The elements of the slices are : {slices:?}");
```

### Vetores

```rust
let some_vector = vec![1, 2, 3, 4, 5];
```

Um vetor é declarado usando a macro `vec!`.

### Tuplas

```rust
let tuple = (1, 'A', "Cool", 78, true);
```

## Strings do Rust

### String literal

```rust
let cs: &str = "cheat sheet";

// => Share cheat sheet for developers
println!("Share {cs} for developers");
```

### Objeto String

```rust
// Creating an empty string object
let my_string = String::new();

// Converting to a string object
let S_string = a_string.to_string();

// Creating an initialized string object
let lang = String::from("Rust");
println!("First language is {lang}");
```

### .capacity()

```rust
let rand = String::from("Random String");
rand.capacity() // => 13
```

Calcula a capacidade da string em bytes.

### .contains()

```rust
let name = String::from("ElementalX");
name.contains("Element") // => true
```

Verifica se a substring está contida na string original.

### Adicionando um único caractere

```rust
let mut half_text = String::from("Hal");
half_text.push('f'); // => Half
```

### Adicionando uma String inteira

```rust
let mut hi = String::from("Hey there...");
hi.push_str("How are you doing??");

// => Hey there...How are you doing??
println!("{hi}");
```

## Operadores do Rust

### Operadores de comparação

|          |                            |
| -------- | :------------------------- |
| `e == f` | `e` é igual a `f`          |
| `e != f` | `e` NÃO é igual a `f`      |
| `e < f`  | `e` é menor que `f`        |
| `e > f`  | `e` é maior que `f`        |
| `e <= f` | `e` é menor ou igual a `f` |
| `e >= f` | `e` é maior ou igual a `f` |

---

```rust
let (e, f) = (1, 100);

let greater = f > e;        // => true
let less = f < e;           // => false
let greater_equal = f >= e; // => true
let less_equal = e <= f;    // => true
let equal_to = e == f;      // => false
let not_equal_to = e != f;  // => true
```

### Operadores aritméticos

|          |                                         |
| -------- | :-------------------------------------- |
| `a +  b` | `a` é somado a `b`                      |
| `a -  b` | `b` é subtraído de `a`                  |
| `a /  b` | `a` é dividido por `b`                  |
| `a % b`  | Obtém o resto da divisão de `a` por `b` |
| `a * b`  | `a` é multiplicado por `b`              |

---

```rust {.wrap}
let (a, b) = (4, 5);

let sum: i32 = a + b;            // => 9
let subtractions: i32 = a - b;   // => -1
let multiplication: i32 = a * b; // => 20
let division: i32 = a / b;       // => 0
let modulus: i32 = a % b;        // => 4
```

### Operadores bit a bit

| Operador            | Descrição                       |
| ------------------- | ------------------------------- |
| `g & h`             | AND binário                     |
| <code>g \| h</code> | OR binário                      |
| `g ^ h`             | XOR binário                     |
| `!g`                | Complemento de um binário       |
| `g << h`            | Deslocamento binário à esquerda |
| `g >> h`            | Deslocamento binário à direita  |

---

```rust {.wrap}
let (g, h) = (0x1, 0x2);

let bitwise_and = g & h;  // => 0
let bitwise_or = g | h;   // => 3
let bitwise_xor = g ^ h;  // => 3
let right_shift = g >> 2; // => 0
let left_shift = h << 4;  // => 32
```

### Operadores lógicos

| Exemplo               | Significado                     |
| --------------------- | ------------------------------- |
| `c && d`              | Ambos são verdadeiros _(AND)_   |
| <code>c \|\| d</code> | Qualquer um é verdadeiro _(OR)_ |
| `!c`                  | `c` é falso _(NOT)_             |

---

```rust
let (c, d) = (true, false);

let and = c && d;  // => false
let or = c || d;   // => true
let not = !c;      // => false
```

### Operador de atribuição composta

```rust
let mut k = 9;
let mut l = k;
```

---

| Operador             | Descrição                                 |
| -------------------- | ----------------------------------------- |
| `k += l`             | Soma um valor e atribui, então k=18       |
| `k -= l`             | Subtrai um valor e atribui, então k=0     |
| `k /= l`             | Divide um valor e atribui, então k=1      |
| `k *= l`             | Multiplica um valor e atribui, então k=81 |
| <code>k \|= l</code> | OR bit a bit e atribui, então k=89        |

## Controle de fluxo do Rust

### Expressão if

```rust
let case1: i32 = 81;
let case2: i32 = 82;

if case1 < case2 {
  println!("case1 is less than case2");
}
```

### Expressão if...else

```rust
let case3 = 8;
let case4 = 9;

if case3 >= case4 {
    println!("case3 is better than case4");
} else {
    println!("case4 is greater than case3");
}
```

### Expressão if...else...if...else

```rust
let foo = 12;
let bar = 13;

if foo == bar {
    println!("foo is equal to bar");
} else if foo < bar {
    println!("foo less than bar");
} else if foo != bar {
    println!("foo is not equal to bar");
} else {
    println!("Nothing");
}
```

### Expressão if...let {.row-span-3}

```rust
let mut arr1: [i64; 3] = [1, 2, 3];
if let [1, 2, _] = arr1 {
    println!("Works with array");
}

let mut arr2: [&str; 2] = ["one", "two"];
if let ["Apple", _] = arr2 {
    println!("Works with str array too");
}
```

---

```rust
let tuple_1 = ("India", 7, 90, 90.432);
if let (_, 7, 9, 78.99) = tuple_1 {
    println!("Works with tuples too");
}

let tuple_2 = (9, 7, 89, 12, "Okay");
if let (9, 7, 89, 12, blank) = tuple_2 {
    println!("Everything {blank} mate?");
}

let tuple_3 = (89, 90, "Yes");
if let (9, 89, "Yes") = tuple_3 {
    println!("Pattern did match");
} else {
    println!("Pattern did not match");
}
```

### Expressão match {.row-span-3}

```rust
let day_of_week = 2;
match day_of_week {
    1 => {
        println!("Its Monday my dudes");
    }
    2 => {
        println!("It's Tuesday my dudes");
    }
    3 => {
        println!("It's Wednesday my dudes");
    }
    4 => {
        println!("It's Thursday my dudes");
    }
    5 => {
        println!("It's Friday my dudes");
    }
    6 => {
        println!("It's Saturday my dudes");
    }
    7 => {
        println!("It's Sunday my dudes");
    }
    _ => {
        println!("Default!")
    }
};
```

### Expressão if aninhada

```rust
let nested_conditions = 89;
if nested_conditions == 89 {
    let just_a_value = 98;
    if just_a_value >= 97 {
        println!("Greater than 97");
    }
}
```

### Laço for

```rust
for mut i in 0..15 {
    i -= 1;
    println!("The value of i is : {i}");
}
```

### Laço while

```rust
let mut check = 0;
while check < 11 {
    println!("Check is : {check}");
    check += 1;
    println!("After incrementing: {check}");

    if check == 10 {
        break; // stop while
    }
}
```

### Palavra-chave loop

```rust
loop {
    println!("hello world forever!");
}
```

Indica um loop infinito.

### Instrução break

```rust
let mut i = 1;
loop {
    println!("i is {i}");
    if i > 100 {
        break;
    }
    i *= 2;
}
```

### Instrução continue

```rust
for (v, c) in (0..10 + 1).enumerate() {
    println!("The {c} number loop");
    if v == 9 {
        println!("Here we go continue?");
        continue;
    }
    println!("The value of v is : {v}");
}
```

## Funções do Rust

### Função básica

```rust
fn print_message() {
    println!("Hello, CheatSheets.zip!");
}

fn main() {
    //Invoking a function in Rust.
    print_message();
}
```

### Passagem por valor

```rust
fn main() {
    let x: u32 = 10;
    let y: u32 = 20;

    // => 200
    println!("Calc: {}", cal_rect(x, y));
}

fn cal_rect(x: u32, y: u32) -> u32 {
    x * y
}
```

### Passagem por referência

```rust
fn main() {
    let mut by_ref = 3; // => 3
    power_of_three(&mut by_ref);
    println!("{by_ref}"); // => 9
}

fn power_of_three(by_ref: &mut i32) {
    // de-referencing is important
    *by_ref = *by_ref * *by_ref;
    println!("{by_ref}"); // => 9
}
```

### Retornos

```rust {.wrap}
fn main() {
    let (mut radius, mut pi) = (3.0, 3.14);
    let (area, _perimeter) = calculate(
        &mut radius,
        &mut pi
    );
    println!("The area and the perimeter of the circle are: {area} & {_perimeter}");
}

fn calculate(radius: &mut f64, pi: &mut f64) -> (f64, f64) {
    let perimeter = 2.0 * *pi * *radius;
    let area = *pi * *radius * *radius;
    return (area, perimeter);
}
```

### Arrays como argumentos

```rust
fn main() {
    let mut array: [i32; 5] = [1, 2, 3, 4, 6];
    print_arrays(array);
    println!("The elements: {array:?}");
}

fn print_arrays(mut array: [i32; 5]) {
    array[0] = 89;
    array[1] = 90;
    array[2] = 91;
    array[3] = 92;
    array[4] = 93;
    println!("The elements: {array:?}");
}
```

### Retornando arrays

```rust
fn main() {
    let mut arr: [i32; 5] = [2, 4, 6, 8, 10];
    multiply(arr);
    println!("The array is : {:?}", multiply(arr));
}

fn multiply(mut arr: [i32; 5]) -> [i32; 5] {
    arr[2] = 90;
    for mut i in 0..5 {
        arr[i] = arr[i] * arr[2];
    }
    return arr;
}
```

## Diversos

### Conversão de tipos

```rust
let a_int = 90; // int
// int to float
let mut type_cast = (a_int as f64);
```

---

```rust
let original: char = 'I';
// char to int => 73
let type_casted: i64 = original as i64;
```

Para fazer conversão de tipos em Rust, é preciso usar a palavra-chave `as`.

### Empréstimo (borrowing)

```rust
let mut foo = 4;
let mut borrowed_foo = &foo;
println!("{borrowed_foo}");
```

---

```rust
let mut bar = 3;
let mut mutable_borrowed_bar = &mut bar;
println!("{mutable_borrowed_bar}");
```

Aqui, o valor emprestado pega o valor da primeira variável usando o operador `&`.

### Desreferenciação

```rust
let mut borrow = 10;
let deref = &mut borrow;

println!("{}", *deref);
```

A desreferenciação em Rust pode ser feita usando o operador `*`

### Escopo de variável

```rust
{
    // The scope limited to this braces
    let a_number = 1;
}
println!("{a_number}");
```

Isso produzirá erro, pois o escopo da variável `a_number` termina nas chaves

## Veja também

- [O livro do Rust](https://doc.rust-lang.org/book/ch00-00-introduction.html) _(doc.rust-lang.org)_
- [A referência do Rust](https://doc.rust-lang.org/reference/introduction.html) _(doc.rust-lang.org)_
- [Cheat sheet do Rust](https://phaiax.github.io/rust-cheatsheet/) _(phaiax.github.io)_
