---
title: C
date: 2022-12-30 09:51:44
background: bg-[#2a338a]
tags:
categories:
  - Programação
intro: |
  Cheat sheet de referência rápida de C com sintaxe e métodos básicos.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### hello.c {.row-span-2}

```c
#include <stdio.h>

int main(void) {
  printf("Hello World!\n");

  return 0;
}
```

Compile o arquivo `hello.c` com `gcc`

```bash
$ gcc -Wall -g hello.c -o hello
```

Execute o binário compilado `hello`

```bash
$ ./hello
```

Saída => Hello World!

### Variáveis {.row-span-2}

```c
int myNum = 15;

int myNum2; // do not assign, then assign
myNum2 = 15;

int myNum3 = 15; // myNum3 is 15
myNum3 = 10;     // myNum3 is now 10

float myFloat = 5.99; // floating point number
char myLetter = 'D';  // character

int x = 5;
int y = 6;
int sum = x + y; // add variables to sum

// declare multiple variables
int a = 5, b = 6, c = 50;
```

### Constantes

```c
const int minutesPerHour = 60;
const float PI = 3.14;
```

Boas práticas

```c
const int BIRTHYEAR = 1980;
```

### Comentários

```c
// this is a comment
printf("Hello World!\n"); // Can comment anywhere in file

/*Multi-line comment, print Hello World!
to the screen, it's awesome */
```

### Imprimir texto

```c
printf("I am learning C.\n");
int testInteger = 5;
printf("Number = %d\n", testInteger);

float f = 5.99; // floating point number
printf("Value = %f\n", f);

short a = 0b1010110; // binary number
int b = 02713; // octal number
long c = 0X1DAB83; // hexadecimal number

// output in octal form
printf("a=%ho, b=%o, c=%lo\n", a, b, c);
// output => a=126, b=2713, c=7325603

// Output in decimal form
printf("a=%hd, b=%d, c=%ld\n", a, b, c);
// output => a=86, b=1483, c=1944451

// output in hexadecimal form (letter lowercase)
printf("a=%hx, b=%x, c=%lx\n", a, b, c);
// output => a=56, b=5cb, c=1dab83

// Output in hexadecimal (capital letters)
printf("a=%hX, b=%X, c=%lX\n", a, b, c);
// output => a=56, b=5CB, c=1DAB83
```

### Controlar o número de espaços

```c
int a1 = 20, a2 = 345, a3 = 700;
int b1 = 56720, b2 = 9999, b3 = 20098;
int c1 = 233, c2 = 205, c3 = 1;
int d1 = 34, d2 = 0, d3 = 23;

printf("%-9d %-9d %-9d\n", a1, a2, a3);
printf("%-9d %-9d %-9d\n", b1, b2, b3);
printf("%-9d %-9d %-9d\n", c1, c2, c3);
printf("%-9d %-9d %-9d\n", d1, d2, d3);
```

resultado da saída

```bash
20        345       700
56720     9999      20098
233       205       1
34        0         23
```

Em `%-9d`, `d` significa exibir em base `10`, `9` significa ocupar pelo menos `9` caracteres de largura, e se a largura não
for suficiente, preencha com espaços; `-` significa alinhamento à esquerda

### Strings

```c
char greetings[] = "Hello World!";
printf("%s", greetings);
```

Acessar string

```c
char greetings[] = "Hello World!";
printf("%c", greetings[0]);
```

Modificar string

```c
char greetings[] = "Hello World!";
greetings[0] = 'J';

printf("%s", greetings);
// prints "Jello World!"
```

Outra forma de criar uma string

```c
char greetings[] = {'H','e','l','l','\0'};

printf("%s", greetings);
// print "Hell!"
```

Criar string usando ponteiro de caractere (String Literals)

```c
char *greetings = "Hello";
printf("%s", greetings);
// print "Hello!"
```

**NOTA**: String literals podem ser armazenadas em uma seção de memória somente leitura. Modificar um string literal causa
comportamento indefinido. Você não pode modificá-lo!

`C` **não tem** um tipo String; use o tipo `char` e crie um `array` de caracteres

### Condição {.row-span-2}

```c
int time = 20;
if (time < 18) {
  printf("Goodbye!\n");
} else {
  printf("Good evening!\n");
}
// Output -> "Good evening!"
int time = 22;
if (time < 10) {
  printf("Good morning!\n");
} else if (time < 20) {
  printf("Goodbye!\n");
} else {
  printf("Good evening!\n");
}
// Output -> "Good evening!"
```

### Operador ternário {.col-span-2}

```c
int age = 20;
(age > 19) ? printf("Adult\n") : printf("Teenager\n");
```

### Switch

```c
int day = 4;

switch (day) {
  case 3: printf("Wednesday\n"); break;
  case 4: printf("Thursday\n"); break;
  default:
    printf("Weekend!\n");
}
// output -> "Thursday" (day 4)
```

### Loop while

```c
int i = 0;

while (i < 5) {
  printf("%d\n", i);
  i++;
}
```

**NOTA**: Não esqueça de incrementar a variável usada na condição, caso contrário o loop nunca termina e vira um
"loop infinito"!

### Loop do/while

```c
int i = 0;

do {
  printf("%d\n", i);
  i++;
} while (i < 5);
```

### Laço for

```c
for (int i = 0; i < 5; i++) {
  printf("%d\n", i);
}
```

### Sair do loop: break/continue {.row-span-2}

```c
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  printf("%d\n", i);
}
```

Saia do loop quando `i` for igual a `4`

```c
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  printf("%d\n", i);
}
```

Exemplo para pular o valor `4`

### Exemplo de break com while

```c
int i = 0;

while (i < 10) {
  if (i == 4) {
    break;
  }
  printf("%d\n", i);

  i++;
}
```

### Exemplo de continue com while

```c
int i = 0;

while (i < 10) {
  i++;

  if (i == 4) {
    continue;
  }
  printf("%d\n", i);
}
```

### Arrays {.row-span-2}

```c
int myNumbers[] = {25, 50, 75, 100};

printf("%d", myNumbers[0]);
// output 25
```

Alterar elementos do array

```c
int myNumbers[] = {25, 50, 75, 100};
myNumbers[0] = 33;

printf("%d", myNumbers[0]);
```

Percorrer o array

```c
int myNumbers[] = {25, 50, 75, 100};
int i;

for (i = 0; i < 4; i++) {
  printf("%d\n", myNumbers[i]);
}
```

Definir o tamanho do array

```c
// Declare an array of four integers:
int myNumbers[4];

// add element
myNumbers[0] = 25;
myNumbers[1] = 50;
myNumbers[2] = 75;
myNumbers[3] = 100;
```

### Enumeração (enum) {.col-span-2}

```c
enum week { Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun };
```

Definir variável enum

```c
enum week a, b, c;
enum week { Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun } a, b, c;
```

Com uma variável de enumeração, você pode atribuir a ela um valor da lista

```c
enum week { Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun };
enum week a = Mon, b = Wed, c = Sat;
// or
enum week{ Mon = 1, Tues, Wed, Thurs, Fri, Sat, Sun } a = Mon, b = Wed, c = Sat;
```

### Exemplos de aplicação de enum

```c
enum week {Mon = 1, Tues, Wed, Thurs} day;

scanf("%d", &day);

switch(day) {
  case Mon: puts("Monday"); break;
  case Tues: puts("Tuesday"); break;
  case Wed: puts("Wednesday"); break;
  case Thurs: puts("Thursday"); break;
  default: puts("Error!");
}
```

### Entrada do usuário

```c
// Create an integer variable to store the number we got from the user
int myNum;

// Ask the user to enter a number
printf("Enter a number: ");

// Get and save the number entered by the user
scanf("%d", &myNum);

// Output the number entered by the user
printf("The number you entered: %d\n", myNum);
```

### Entrada de string do usuário

```c
// create a string
char firstName[30];
// Ask the user to enter some text
printf("Enter your name: ");
// get and save the text
scanf("%s", &firstName);
// output text
printf("Hello %s.\n", firstName);
```

### Endereço de memória

Quando uma variável é criada, ela recebe um endereço de memória

```c
int myAge = 43;

printf("%p", &myAge);
// Output: 0x7ffe5367e044
```

Para acessá-lo, use o operador de referência (`&`)

### Criar ponteiro

```c
int myAge = 43; // an int variable
printf("%d\n", myAge); // output the value of myAge(43)

// Output the memory address of myAge (0x7ffe5367e044)
printf("%p\n", &myAge);
```

### Variável de ponteiro {.col-span-2}

```c
int myAge = 43; // an int variable
int*ptr = &myAge; // pointer variable named ptr, used to store the address of myAge

printf("%d\n", myAge); // print the value of myAge (43)

printf("%p\n", &myAge); // output the memory address of myAge (0x7ffe5367e044)
printf("%p\n", ptr); // use the pointer (0x7ffe5367e044) to output the memory address of myAge
```

### Desreferenciar

```c
int myAge = 43; // variable declaration
int*ptr = &myAge; // pointer declaration

// Reference: output myAge with a pointer
// memory address (0x7ffe5367e044)
printf("%p\n", ptr);
// dereference: output the value of myAge with a pointer (43)
printf("%d\n", *ptr);
```

## Operadores

### Operadores aritméticos

```c
int myNum = 100 + 50;
int sum1 = 100 + 50; // 150 (100 + 50)
int sum2 = sum1 + 250; // 400 (150 + 250)
int sum3 = sum2 + sum2; // 800 (400 + 400)
```

---

| Operador | Nome          | Exemplo |
| -------- | ------------- | ------- |
| `+`      | Soma          | `x + y` |
| `-`      | Subtração     | `x - y` |
| `*`      | Multiplicação | `x * y` |
| `/`      | Divisão       | `x / y` |
| `%`      | Módulo        | `x % y` |
| `++`     | Incremento    | `++x`   |
| `--`     | Decremento    | `--x`   |

### Operador de atribuição

| Exemplo              | Equivale a                |
| -------------------- | ------------------------- |
| x `=` 5              | x `=` 5                   |
| x `+=` 3             | x `=` x `+` 3             |
| x `-=` 3             | x `=` x `-` 3             |
| x `*=` 3             | x `=` x `*` 3             |
| x `/=` 3             | x `=` x `/` 3             |
| x `%=` 3             | x `=` x `%` 3             |
| x `&=` 3             | x `=` x `&` 3             |
| x <code>\|=</code> 3 | x `=` x <code>\|</code> 3 |
| x `^=` 3             | x `=` x `^` 3             |
| x `>>=` 3            | x `=` x `>>` 3            |
| x `<<=` 3            | x `=` x `<<` 3            |

### Operadores de comparação

```c
int x = 5;
int y = 3;

printf("%d", x > y);
// returns 1 (true) because 5 is greater than 3
```

---

| Símbolo | Nome             | Exemplo  |
| ------ | ---------------- | -------- |
| `==`   | igual a          | x `==` y |
| `!=`   | diferente de     | x `!=` y |
| `>`    | maior que        | x `>` y  |
| `<`    | menor que        | x `<` y  |
| `>=`   | maior ou igual a | x `>=` y |
| `<=`   | menor ou igual a | x `<=` y |

Operadores de comparação são usados para comparar dois valores

### Operadores lógicos {.col-span-2}

| Símbolo            | Nome          | Descrição                                      | Exemplo                       |
| ----------------- | ------------- | ---------------------------------------------- | ----------------------------- |
| `&&`              | `and` lógico  | retorna true se ambas as instruções forem true | `x < 5 && x < 10`             |
| <code>\|\|</code> | `or` lógico   | retorna true se uma das instruções for true    | <code>x < 5 \|\| x < 4</code> |
| `!`               | `not` lógico  | Inverte o resultado, retorna false se for true | `!(x < 5 && x < 10)`          |

{.show-header}

### Exemplos de operadores {.row-span-2}

```c
unsigned int a = 60; /*60 = 0011 1100 */
unsigned int b = 13; /*13 = 0000 1101 */
int c = 0;

c = a & b; /*12 = 0000 1100 */
printf("Line 1 -the value of c is %d\n", c);

c = a | b; /*61 = 0011 1101 */
printf("Line 2 -the value of c is %d\n", c);
c = a ^ b; /*49 = 0011 0001 */
printf("Line 3 -the value of c is %d\n", c);
c = ~a; /*-61 = 1100 0011 */
printf("Line 4 -The value of c is %d\n", c);
c = a << 2; /*240 = 1111 0000 */
printf("Line 5 -the value of c is %d\n", c);
c = a >> 2; /*15 = 0000 1111 */
printf("Line 6 -The value of c is %d\n", c);
```

### Operadores bit a bit {.col-span-2}

| Operador        | Descrição                                                      | Instância                                             |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------- |
| `&`             | Operação AND bit a bit, "AND" por dígitos binários              | `(A & B)` retorna `12`, que é 0000 1100               |
| <code>\|</code> | Operador OR bit a bit, "or" por dígito binário                 | <code>(A \| B)</code> retorna `61`, que é 0011 1101   |
| `^`             | Operador XOR, realiza operação "XOR" por dígitos binários       | `(A ^ B)` retorna `49`, que é 0011 0001               |
| `~`             | Operador de inversão, realiza operação de "inversão" bit a bit  | `(~A)` retorna `-61`, que é 1100 0011                 |
| `<<`            | operador de deslocamento binário à esquerda                     | `A << 2` retorna `240`, que é 1111 0000               |
| `>>`            | operador de deslocamento binário à direita                      | `A >> 2` retorna `15`, que é 0000 1111                |

{.show-header}

## Tipos de dados

### Tipos de dados básicos {.col-span-2}

| Tipo de dados        | Tamanho          | Intervalo                          | Descrição                          |
| -------------------- | ---------------- | ---------------------------------- | :---------------------------------- |
| `char`               | 1 byte           | `−128` ~ `127`                     | caractere único/alfanumérico/ASCII |
| `signed char`        | 1 byte           | `−128` ~ `127`                     |                                    |
| `unsigned char`      | 1 byte           | `0` ~ `255`                        |                                    |
| `int`                | `2` a `4` bytes  | `−32,768` ~ `32,767`               | armazena inteiros                  |
| `signed int`         | 2 bytes          | `−32,768` ~ `32,767`               |                                    |
| `unsigned int`       | 2 bytes          | `0` ~ `65,535`                     |                                    |
| `short int`          | 2 bytes          | `−32,768` ~ `32,767`               |                                    |
| `signed short int`   | 2 bytes          | `−32,768` ~ `32,767`               |                                    |
| `unsigned short int` | 2 bytes          | `0` ~ `65,535`                     |                                    |
| `long int`           | 4 bytes          | `-2,147,483,648` ~ `2,147,483,647` |                                    |
| `signed long int`    | 4 bytes          | `-2,147,483,648` ~ `2,147,483,647` |                                    |
| `unsigned long int`  | 4 bytes          | `0` ~ `4,294,967,295`              |                                    |
| `float`              | 4 bytes          | `3.4E-38` ~ `3.4E+38`              |                                    |
| `double`             | 8 bytes          | `1.7E-308` ~ `1.7E+308`            |                                    |
| `long double`        | 10 bytes         | `3.4E-4932` ~ `1.1E+4932`          |                                    |

{.show-header}

### Tipos de dados

```c
// create variables
int myNum = 5; // integer
float myFloatNum = 5.99; // floating point number
char myLetter = 'D'; // string
// High precision floating point data or numbers
double myDouble = 3.2325467;
// print output variables
printf("%d\n", myNum);
printf("%f\n", myFloatNum);
printf("%c\n", myLetter);
printf("%lf\n", myDouble);
```

---

| Tipo de dados | Descrição                                   |
| :-------- | :----------------------------------- |
| `char`    | tipo caractere                       |
| `short`   | inteiro curto                        |
| `int`     | tipo inteiro                         |
| `long`    | inteiro longo                        |
| `float`   | tipo de ponto flutuante de precisão simples |
| `double`  | tipo de ponto flutuante de precisão dupla   |
| `void`    | sem tipo                             |

### Especificadores de formato básicos

| Especificador de formato | Tipo de dados                                              |
| ---------------- | :---------------------------------------------------- |
| `%d` ou `%i`     | `int` inteiro                                         |
| `%f`             | `float` tipo decimal de precisão simples              |
| `%lf`            | `double` dado ou número de ponto flutuante de alta precisão |
| `%c`             | `char` caractere                                      |
| `%s`             | para `strings` strings                                |

{.show-header}

### Especificadores de formato por base

| Formato      | Curto         | Inteiro     | Longo         |
| ----------- | ------------- | ----------- | :------------ |
| Octal       | `%ho`         | `%o`        | `%lo`         |
| Decimal     | `%hd`         | `%d`        | `%ld`         |
| Hexadecimal | `%hx` / `%hX` | `%x` / `%X` | `%lx` / `%lX` |

{.show-header}

### Exemplo de formato de dados

```c
int myNum = 5;
float myFloatNum = 5.99; // floating point number
char myLetter = 'D';     // string
// print output variables
printf("%d\n", myNum);
printf("%f\n", myFloatNum);
printf("%c\n", myLetter);
```

## Pré-processador C

### Diretivas do pré-processador {.row-span-2}

| Diretiva   | Descrição                                                          |
| ---------- | :------------------------------------------------------------------- |
| `#define`  | define uma macro                                                       |
| `#include` | inclui um arquivo de código-fonte                                      |
| `#undef`   | remove a definição da macro                                            |
| `#ifdef`   | Retorna true se a macro estiver definida                               |
| `#ifndef`  | Retorna true se a macro não estiver definida                           |
| `#if`      | Compila o código a seguir se a condição informada for verdadeira       |
| `#else`    | Alternativa ao `#if`                                                   |
| `#elif`    | Se a condição do `#if` for falsa, a condição atual é `true`            |
| `#endif`   | Encerra um bloco de compilação condicional `#if...#else`               |
| `#error`   | Imprime uma mensagem de erro quando um erro padrão é encontrado        |
| `#pragma`  | Emite comandos especiais ao compilador usando o método padronizado     |

{.show-header}

```c
// replace all MAX_ARRAY_LENGTH with 20
#define MAX_ARRAY_LENGTH 20
// Get stdio.h from the system library
#include <stdio.h>
// Get myheader.h in the local directory
#include "myheader.h"
#undef FILE_SIZE
#define FILE_SIZE 42 // undefine and define to 42
```

### Macros predefinidas {.row-span-2}

| Macro      | Descrição                                                            |
| ---------- | :-------------------------------------------------------------------- |
| `__DATE__` | A data atual, uma constante de caractere no formato "MMM DD YYYY"     |
| `__TIME__` | A hora atual, uma constante de caractere no formato "HH:MM:SS"        |
| `__FILE__` | Contém o nome do arquivo atual, uma constante de string               |
| `__LINE__` | Contém o número da linha atual, uma constante decimal                 |
| `__STDC__` | Definida como `1` quando o compilador compila segundo o padrão `ANSI` |

{.show-header}

`ANSI C` define várias macros que você pode usar, mas não é possível modificar diretamente essas macros predefinidas

#### Exemplo de macro predefinida

```c
#include <stdio.h>

int main(void) {
  printf("File: %s\n", __FILE__);
  printf("Date: %s\n", __DATE__);
  printf("Time: %s\n", __TIME__);
  printf("Line: %d\n", __LINE__);
  printf("ANSI: %d\n", __STDC__);
}
```

### Operador de continuação de macro (\\)

Uma macro geralmente é escrita em uma única linha.

```c
#define message_for(a, b) \
    printf(#a " and " #b ": We love you!\n")
```

Se a macro for longa demais para caber em uma única linha, use o operador de continuação de macro `\`

### Operador de constantização de string (#)

```c
#include <stdio.h>

#define message_for(a, b) \
  printf(#a " and " #b ": We love you!\n")

int main(void) {
  message_for(Carole, Debra);

  return 0;
}
```

Quando o código acima é compilado e executado, ele produz o seguinte resultado:

```
Carole and Debra: We love you!
```

Quando precisar converter um parâmetro de macro em uma string constante, use o operador de string constante `#`

### Operador de colagem de tag (##)

```c
#include <stdio.h>

#define tokenpaster(n) printf ("Token " #n " = %d\n", token##n)

int main(void) {
  int token34 = 40;
  tokenpaster(34);

  return 0;
}
```

### Operador defined()

```c
#include <stdio.h>

#if !defined (MESSAGE)
   #define MESSAGE "You wish!"
#endif

int main(void) {
  printf("Here is the message: %s\n", MESSAGE);

  return 0;
}
```

### Macros parametrizadas

```c
int square(int x) {
  return x * x;
}
```

A macro reescreve o código acima da seguinte forma:

```c
#define square(x) ( (x) * (x) )
```

Não são permitidos espaços entre o nome da macro e o parêntese de abertura

```c
#include <stdio.h>
#define MAX(x,y) ( (x) > (y) ? (x) : (y) )

int main(void) {
  printf("Max between 20 and 10 is %d\n", MAX(10, 20));

  return 0;
}
```

## Funções em C

### Declaração e definição de função {.row-span-2}

```c
int main(void) {
  printf("Hello World!\n");

  return 0;
}
```

A função consiste em duas partes

```c
void myFunction() { // declaration declaration
  // function body (code to be executed) (definition)
}
```

---

- `Declaration` declara o nome da função, o tipo de retorno e os parâmetros _(se houver)_
- `Definition` corpo da função _(código a executar)_

---

```c
// function declaration
void myFunction();
// main method
int main() {
  myFunction(); // --> call the function

  return 0;
}

void myFunction() {// Function definition
  printf("Good evening!\n");
}
```

### Chamar função

```c
// create function
void myFunction() {
  printf("Good evening!\n");
}

int main() {
  myFunction(); // call the function
  myFunction(); // can be called multiple times

  return 0;
}
// Output -> "Good evening!"
// Output -> "Good evening!"
```

### Parâmetros de função

```c
void myFunction(char name[]) {
  printf("Hello %s\n", name);
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");

  return 0;
}
// Hello Liam
// Hello Jenny
```

### Vários parâmetros

```c
void myFunction(char name[], int age) {
  printf("Hi %s, you are %d years old.\n",name,age);
}
int main() {
  myFunction("Liam", 3);
  myFunction("Jenny", 14);

  return 0;
}
// Hi Liam you are 3 years old.
// Hi Jenny you are 14 years old.
```

### Valor de retorno {.row-span-2}

```c
int myFunction(int x) {
  return 5 + x;
}

int main() {
  printf("Result: %d\n", myFunction(3));
  return 0;
}
// output 8 (5 + 3)
```

Dois parâmetros

```c
int myFunction(int x, int y) {
  return x + y;
}

int main() {
  printf("Result: %d\n", myFunction(5, 3));
  // store the result in a variable
  int result = myFunction(5, 3);
  printf("Result = %d\n", result);

  return 0;
}
// result: 8 (5 + 3)
// result = 8 (5 + 3)
```

### Exemplo recursivo

```c
int sum(int k);

int main() {
  int result = sum(10);
  printf("%d\n", result);

  return 0;
}

int sum(int k) {
  if (k > 0) {
    return k + sum(k -1);
  } else {
    return 0;
  }
}
```

### Funções matemáticas

```c
#include <math.h>

void main(void) {
  printf("%f\n", sqrt(16)); // square root
  printf("%f\n", ceil(1.4)); // round up (round)
  printf("%f\n", floor(1.4)); // round down (round)
  printf("%f\n", pow(4, 3)); // x(4) to the power of y(3)
}
```

---

- `abs(x)` valor absoluto
- `acos(x)` valor do arco cosseno
- `asin(x)` arco seno
- `atan(x)` arco tangente
- `cbrt(x)` raiz cúbica
- `cos(x)` cosseno
- o valor de `exp(x)` Ex
- `sin(x)` o seno de x
- tangente do ângulo `tan(x)`

## Estruturas em C

### Criar estrutura

```c
struct MyStructure { // structure declaration
  int myNum; // member (int variable)
  char myLetter; // member (char variable)
}; // end the structure with a semicolon
```

Crie uma variável struct chamada `s1`

```c{7}
struct myStructure {
  int myNum;
  char myLetter;
};

int main() {
  struct myStructure s1;

  return 0;
}
```

### Strings na estrutura

```c{9}
struct myStructure {
  int myNum;
  char myLetter;
  char myString[30]; // String
};

int main() {
  struct myStructure s1;
  strcpy(s1. myString, "Some text");
  // print value
  printf("My string: %s\n", s1.myString);

  return 0;
}
```

Atribuindo valores a strings com a função `strcpy`

### Acessar membros da estrutura {.row-span-2}

```c{11,12,16}
// create a structure called myStructure
struct myStructure {
  int myNum;
  char myLetter;
};

int main() {
  // Create a structure variable called myStructure called s1
  struct myStructure s1;
  // Assign values ​​to the members of s1
  s1.myNum = 13;
  s1.myLetter = 'B';

  // Create a structure variable of myStructure called s2
  // and assign it a value
  struct myStructure s2 = {13, 'B'};
  // print value
  printf("My number: %d\n", s1.myNum);
  printf("My letter: %c\n", s1.myLetter);

  return 0;
}
```

Crie variáveis de estrutura diferentes

```c
struct myStructure s1;
struct myStructure s2;
// Assign values ​​to different structure variables
s1.myNum = 13;
s1.myLetter = 'B';

s2.myNum = 20;
s2.myLetter = 'C';
```

### Copiar estrutura

```c{6}
struct myStructure s1 = {
  13, 'B', "Some text"
};

struct myStructure s2;
s2 = s1;
```

No exemplo, o valor de `s1` é copiado para `s2`

### Modificar valor

```c{6,7}
// Create a struct variable and assign it a value
struct myStructure s1 = {
  13, 'B'
};
// modify the value
s1.myNum = 30;
s1.myLetter = 'C';
// print value
printf("%d %c",
    s1.myNum,
    s1.myLetter);
```

## Processamento de arquivos

### Funções de processamento de arquivos

| Função      | Descrição                                              |
| ----------- | :----------------------------------------------------- |
| `fopen()`   | `open` (abre) um arquivo novo ou existente              |
| `fprintf()` | grava dados em um `file` (arquivo)                      |
| `fscanf()`  | `read` (lê) dados de um arquivo                         |
| `fputc()`   | grava um caractere em `file` (arquivo)                  |
| `fgetc()`   | `read` (lê) um caractere de um arquivo                  |
| `fclose()`  | `close` (fecha) o arquivo                               |
| `fseek()`   | posiciona o ponteiro do arquivo em `the given position` |
| `fputw()`   | Grava um inteiro `to` (em) um arquivo                   |
| `fgetw()`   | `read` (lê) um inteiro de um arquivo                    |
| `ftell()`   | retorna a `position` (posição) atual                    |
| `rewind()`  | posiciona o ponteiro do arquivo no início do arquivo    |

{.show-header}

A biblioteca C tem muitas funções para `open`/`read`/`write`/`search` e `close` arquivos

### Parâmetro de modo de abertura

| Modo  | Descrição                                                                                                   |
| ----- | :---------------------------------------------------------------------------------------------------------- |
| `r`   | Abre um arquivo de texto no modo `read` (leitura), permitindo ler o arquivo                                 |
| `w`   | Abre um arquivo de texto no modo `write` (escrita), permitindo escrever no arquivo                          |
| `a`   | Abre um arquivo de texto no modo `append` (anexar)<br /><small>Se o arquivo não existir, um novo será criado</small> |
| `r+`  | Abre um arquivo de texto no modo `read-write`, permitindo ler e escrever o arquivo                          |
| `w+`  | Abre um arquivo de texto no modo `read-write`, permitindo ler e escrever o arquivo                          |
| `a+`  | Abre um arquivo de texto no modo `read-write`, permitindo ler e escrever o arquivo                          |
| `rb`  | Abre um arquivo binário no modo `read`                                                                      |
| `wb`  | Abre arquivo binário no modo `write`                                                                        |
| `ab`  | Abre um arquivo binário no modo `append`                                                                    |
| `rb+` | Abre arquivo binário no modo `read-write`                                                                   |
| `wb+` | Abre arquivo binário no modo `read-write`                                                                   |
| `ab+` | Abre arquivo binário no modo `read-write`                                                                   |

{.show-header}

### Abrir o arquivo: fopen()

```c{6}
#include <stdio.h>

void main() {
  FILE *fp;
  char ch;

  fp = fopen("file_handle.c", "r");

  while (1) {
    ch = fgetc(fp);
    if (ch == EOF)
      break;
    printf("%c", ch);
  }
  fclose(fp);
}
```

Após executar todas as operações no arquivo, ele deve ser fechado com `fclose()`

### Gravar no arquivo: fprintf()

```c{7}
#include <stdio.h>

void main() {
  FILE *fp;
  fp = fopen("file.txt", "w"); // open the file

  // write data to file
  fprintf(fp, "Hello file for fprintf..\n");
  fclose(fp); // close the file
}
```

### Ler o arquivo: fscanf()

```c{6}
#include <stdio.h>

void main() {
  FILE *fp;

  char buff[255]; // Create a char array to store file data
  fp = fopen("file.txt", "r");

  while(fscanf(fp, "%s", buff) != EOF) {
    printf("%s ", buff);
  }
  fclose(fp);
}
```

### Gravar no arquivo: fputc()

```c{6}
#include <stdio.h>

void main() {
  FILE *fp;
  fp = fopen("file1.txt", "w"); // open the file
  fputc('a',fp); // write a single character to the file
  fclose(fp); // close the file
}
```

### Ler o arquivo: fgetc()

```c{8}
#include <stdio.h>

void main() {
  FILE *fp;
  char c;


  fp = fopen("myfile.txt", "r");

  while( (c = fgetc(fp) ) != EOF) {
    printf("%c", c);
  }
  fclose(fp);

}
```

### Gravar no arquivo: fputs()

```c {8}
#include<stdio.h>

void main() {
  FILE *fp;


  fp = fopen("myfile2.txt","w");
  fputs("hello c programming",fp);
  fclose(fp);

}
```

### Ler arquivos: fgets()

```c {10}
#include<stdio.h>

void main() {
  FILE *fp;
  char text[300];


  fp = fopen("myfile2.txt", "r");
  printf("%s", fgets(text, 200, fp));
  fclose(fp);

}
```

### fseek()

```c{8}
#include <stdio.h>

void main(void) {
  FILE *fp;

  fp = fopen("myfile.txt","w+");
  fputs("This is Book", fp);

  // Set file pointer to the given position
  fseek(fp, 7, SEEK_SET);

  fputs("Kenny Wong", fp);
  fclose(fp);
}
```

Define o ponteiro do arquivo para a posição informada

### rewind()

```c{11}
#include <stdio.h>

void main() {
  FILE *fp;
  char c;


  fp = fopen("file.txt", "r");

  while( (c = fgetc(fp) ) != EOF) {
    printf("%c", c);
  }

  rewind(fp); // move the file pointer to the beginning of the file

  while( (c = fgetc(fp) ) != EOF) {
    printf("%c", c);
  }
  fclose(fp);

}
// output
// Hello World! Hello World!
```

### ftell()

```c{11}
#include <stdio.h>

void main () {
   FILE *fp;
   int length;


   fp = fopen("file.txt", "r");

   fseek(fp, 0, SEEK_END);
   length = ftell(fp); // return current position
   fclose(fp);

   printf("File size: %d bytes", length);

}
// output
// file size: 18 bytes
```
