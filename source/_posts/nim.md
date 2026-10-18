---
title: Nim
date: 2025-11-23 1:04:20
background: bg-[#eed547]
tags:
categories:
  - Programação
intro: |
  O cheat sheet de referência rápida do Nim, que tem como objetivo ajudar a escrever a sintaxe básica e os métodos.
plugins:
  - copyCode
---

## Primeiros passos

### helloworld.nim {.row-span-2}

```nim
echo "Hello World!"

# This is a comment
echo "What's your name? "
var name: string = readLine(stdin)
# readLine(stdin) asks you to type in a string.

echo "Hi, ", name, "!"
```

Compile `helloworld.nim` com `nim compile`

```bash
$ nim compile helloworld.nim
```

Execute o binário compilado `helloworld` (ou `helloworld.exe` se estiver no Windows)

```
./helloworld
Hello, World!
What's your name?
Hi, <name>!
```

Também é possível
compilar e executar o
programa com apenas um comando.
Basta digitar:
`$ nim c -r helloworld.nim`

#### Comandos de compilação comuns (terminal)

```sh
nim c -r main.nim          # debug build, run after compile
nim c -d:release main.nim  # optimized release build
nim c --mm:arc main.nim    # ARC memory management (Nim 2 default)
```

### Recursos úteis {.col-span-2}

- [Nim](https://www.nim-lang.org/) _(nim-lang.org)_
- [O manual do Nim](https://nim-lang.org/docs/manual.html) _(../docs/manual.html)_
- [Nim Basics](https://narimiran.github.io/nim-basics/) _(narimiran.github.io)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/nim/) _(learnxinyminutes.com)_

### Variáveis {.row-span-1}

```nim
# 'var' declares mutable variables.

var number: int = 100 # Single line declaration

# A 'var' block can declare multiple variables at once.

var
  letter: char = 'n'
  lang = "N" & "im"
  length = len(lang)
  counter: int = 7
  boat: float
  truth = true
```

### Variáveis imutáveis (let)

```nim
# 'let' declares immutable variables.
let
  salute: string = "Hello!"
  x: int = 10
  y = x + 5

let z = 20
z = 500   # Error: 'z' is immutable
```

### Comentários

```nim
# This is a comment

#[
  This is a multiline comment.
  In Nim, multiline comments can be nested, beginning with #[
  ... and ending with ]#
]#
```

### Constantes {.row-span-1}

```nim
const
  debug = true
  compileBadCode = false

# Constants are declared at compile time and cannot be changed.
```

### Laços for

```nim
for item in (1 ..< 6):
  if item == 3: break
  echo item

echo "All done!"
```

Veja: [Loops](#loops)

### Instruções if

```nim
import std/strutils
let number = parseInt(readLine(stdin))

if number <= 5:
  echo "Small sized number."
elif number > 5 and number <= 25:
  echo "Medium sized number."
else:
  echo "Big number."
```

Veja: [Controle de fluxo](#flow-control)

### Procedures / Funções

```nim
proc myFunction() =
  echo "Hello, this is my function"

myFunction()

# prints "Hello, this is my function"
```

Veja: [Procedures](#procedures)

### Strings formatadas

```nim
import std/strformat

let
  a = "Hello there."
  b = "How's it going?"
  c = "These are variables."

echo fmt"{a} {b} {c}" # "Hello there. How's it going? These are variables."
```

Veja: [Imports](#imports-and-modules)

## Tipos de dados

### Inteiros

```nim
let
  a = 11
  b = 4

echo "a + b = ", a + b # 15
echo "a - b = ", a - b # 7
echo "a * b = ", a * b # 44
echo "a / b = ", a / b # 2.75
echo "a div b = ", a div b # 2
echo "a mod b = ", a mod b # 3
```

### Floats

```nim
let
  c = 6.75
  d = 2.25

echo "c + d = ", c + d # 9.0
echo "c - d = ", c - d # 4.5
echo "c * d = ", c * d # 15.1875
echo "c / d = ", c / d # 3.0
```

### Strings {.row-span-3}

```nim
let
  m = "word"
  n = "A sentence with punctuation."
  o = ""
  p = "32"
  q = "!"

echo m
# prints "word"
echo p, " is a string."
# prints "32 is a string."
```

#### Concatenação de strings

```nim
var
  p = "abc"
  q = "xy"
  r = 'z'

p.add("def")   # modifies p
q.add(r)       # chars can be added to strings

echo p         # "abcdef"
echo q         # "xyz"

# `&` creates a new string:
echo p & q     # "abcdefxyz"
```

#### Sequências de escape especiais

```nim
echo "line1\nline2"     # newline
echo "col1\tcol2"       # tab
echo "A\\B\\C"          # backslash

# Raw strings ignore escapes:
echo r"line1\nline2"
```

Veja também: [Sequências de escape](https://nim-lang.org/docs/manual.html#lexical-analysis-string-literals)

### Caracteres

```nim
let
  h = 'z'
  i = '+'
  j = '2'
  k = '35'   # error: too many characters
  l = 'xy'   # error: too many characters
```

### Booleanos

```nim
let x = true
let y = false

# Boolean literals are lowercase.
```

### Conversão de tipos {.col-span-2}

```nim

let e = 5
let f = 23.987

# Converting between ints and floats:
echo float(e)    # 5.0
echo int(f)      # 23

# Mixed operations require explicit conversion:
echo float(e) + f    # 28.987
echo e + int(f)      # 28
```

## Tipos compostos

### Arrays

```nim
type IntArray = array[0..3, int]

let a: IntArray = [10, 20, 30, 40]

echo a[0]      # 10
echo a.len     # 4
```

### Sequências

```nim
var s: seq[int] = @[1, 2, 3]
s.add(4)

echo s         # @[1, 2, 3, 4]
echo s.len     # 4
```

### Objetos

```nim
type Person = object
  name: string
  age: int

let p = Person(name: "Ana", age: 20)
echo p.name
```

### Tuplas

```nim
var person = (name: "Sophie", age: 18)

echo person.name # Sophie
echo person.age  # 18

# swapping values:
var (x, y) = (1, 2)
(x, y) = (y, x)
echo x, " ", y     # 2 1
```

### Conjuntos

```nim
type CharSet = set[char]

let letters: CharSet = {'a'..'z'}

echo 'a' in letters    # true
echo 'Z' in letters    # false
```

### Objetos de referência

```nim
type Node = ref object
  value: int
  next: Node     # linked list style

var n = Node(value: 10)
echo n.value
```

Necessário para programação orientada a objetos no Nim.

### Fatiamento de sequências e strings {.col-span-2}

```nim
let xs = @[10, 20, 30, 40]

echo xs[1..2]    # @[20, 30]
echo xs[^2..^1]  # @[30, 40]
```

---

```nim
let s = "abcdef"

echo s[0..2]     # "abc"
echo s[3..^1]    # "def" (^1 = last char)
echo s[1..<4]    # "bcd"
```

### Tabelas/Dicionários

```nim
import std/tables

var ages = initTable[string, int]()
ages["Ana"] = 20
ages["Sophie"] = 18

echo ages["Ana"]                 # 20
echo ages.getOrDefault("X", -1)  # -1

for name, age in ages:
  echo name, ": ", age
```

## Operadores

### Operadores aritméticos {.row-span-1}

```nim
var
  a = 10
  b = 3

echo a + b      # 13
echo a - b      # 7
echo a * b      # 30
echo a / b      # 3.333333
echo a div b    # 3
echo a mod b    # 1
echo a ^ b      # 1000
```

---

| Operador | Nome            | Exemplo   |
| -------- | --------------- | --------- |
| `+`      | Soma            | `x + y`   |
| `-`      | Subtração       | `x - y`   |
| `*`      | Multiplicação   | `x * y`   |
| `/`      | Divisão float   | `x / y`   |
| `div`    | Divisão inteira | `x div y` |
| `mod`    | Módulo          | `x mod y` |
| `^`      | Potência        | `x ^ y`   |

{.show-header}

### Atribuição

Só funcionam em variáveis mutáveis (`var`), não em `let` ou `const`.

```nim
var value = 1990
echo value # 1990

value = 2
echo value # 2
```

---

| Operador | Descrição     | Exemplo |
| -------- | ------------- | ------- |
| `=`      | Atribui valor | `x = y` |

{.show-header}

#### Operações de atualização

| Sintaxe  | Expande para | Significado         |
| -------- | ------------ | ------------------- |
| `x += y` | `x = x + y`  | soma, atribui       |
| `x -= y` | `x = x - y`  | subtrai, atribui    |
| `x *= y` | `x = x * y`  | multiplica, atribui |

{.show-header}

Outras variantes como `/=` ou `mod=` não existem,  
então escreva-as explicitamente, por exemplo `x = x / y`.

### Operadores de comparação {.row-span-2}

```nim
let
  x = 5
  y = 3

echo x > y
# prints "true" because 5 is greater than 3
```

---

| Símbolo | Significado      | Exemplo        |
| ------- | ---------------- | -------------- |
| `==`    | igual a          | `if x == y`... |
| `!=`    | diferente de     | `if x != y`... |
| `>`     | maior que        | `if x > y`...  |
| `<`     | menor que        | `if x < y`...  |
| `>=`    | maior ou igual a | `if x >= y`... |
| `<=`    | menor ou igual a | `if x <= y`... |

{.show-header}

Os operadores de comparação são usados para comparar dois valores.

#### Comparação lexicográfica

Eles também funcionam em valores `char` e `string` por ordem lexicográfica.

```nim
echo "apple" < "banana"  # true
echo "axyz" < "axyb"     # true
echo "ooooo" > "o"       # true
echo "abc" < "ab"        # false

echo 'a' < 'd'           # true
echo 'a' < 'Z'           # false
```

### Operadores lógicos {.row-span-2} {.col-span-2}

| Operador | Exemplo                | Significado               |
| -------- | ---------------------- | ------------------------- |
| `and`    | `if a > 0 and a < 10:` | De 1 a 9                  |
| `or`     | `if x == 0 or y == 0:` | Um dos dois é 0           |
| `not`    | `if not isValid:`      | Se `isValid` não for true |
| `xor`    | `if flagA xor flagB:`  | Apenas um deles é true    |

{.show-header}

Operadores lógicos trabalham com `bool`.

#### Operadores bit a bit extras

| Operador | Exemplo   | Resultado (com a = 60, b = 13) |
| -------- | --------- | ------------------------------ |
| `and`    | `a and b` | `12`                           |
| `or`     | `a or b`  | `61`                           |
| `xor`    | `a xor b` | `49`                           |
| `not`    | `not a`   | `-61`                          |
| `shl`    | `a shl 2` | `240`                          |
| `shr`    | `a shr 2` | `15`                           |

{.show-header}

Eles operam em inteiros bit a bit; use-os para flags, máscaras, código de baixo nível etc.

## Controle de fluxo

### Case de correspondência {.row-span-3}

```nim
let x = 5
case x:
of 0, 1:
  echo "small"
of 2, 3, 4:
  echo "medium"
else:
  echo "large"
```

---

`case of` também pode buscar intervalos.

```nim
let age = 17

case age:
of 0..12:
  echo "child"
of 13..19:
  echo "teen"
else:
  echo "adult"
```

---

...e também `strings` e `chars`

```nim
let cmd = "quit"

case cmd:
of "help":
  echo "show help"
of "quit", "exit":
  echo "bye!"
else:
  echo "unknown command"
```

---

```nim
let ch = 'g'
case ch:
of {'a', 'e', 'i', 'o', 'u'}:
  echo "vowel"
else:
  echo "consonant or symbol"
```

### If-else básico {.col-span-2}

```nim
let num = 5

if num > 10:
  echo "num is bigger than 10"
elif num < 10:
  echo "num is smaller than 10"
else:
  echo "num is exactly 10"
```

### One-liners {.col-span-2}

```nim
let
  a = 330
  b = 200

let r = if a > b: a else: b

echo r # 330
```

### Condições em tempo de compilação {.col-span-2}

```nim
when defined(linux):
  echo "Compiled on Linux"
elif defined(windows):
  echo "Compiled on Windows"
else:
  echo "Unknown OS"
```

## Loops

### Loops for {.row-span-2}

```nim
for i in 1..5:
  echo i
# 1 2 3 4 5
```

---

```nim
for i in 0..<3:
  echo i
# 0 1 2
```

---

```nim
# i = index, v = value in sequence
for i, v in @[10, 20, 30]:
  echo i, ": ", v
# 0: 10
# 1: 20
# 2: 30
```

**Lembre-se**: \
1..5 = Inclusivo (1 2 3 4 5) \
1..<5 = Exclusivo (1 2 3 4)

### Loops while

```nim
var counter = 0

while counter <= 10:
  counter = counter + 1
  echo counter # prints 1..10
```

### Loops infinitos

```nim
while true:
  echo "ay! "
```

---

```nim
while 1 > 0:
  echo "echo... "
```

### Instruções break

```nim
var query = ""
while true:
  echo "Do you want out?"
  query = readLine(stdin)
  if query == "yes":
    echo "Well then."
    break
  else:
    echo "I'll ask again."

```

### Instruções continue

```nim
for i in 1..5:
  if i mod 2 == 0: continue
  echo i
# prints only odd numbers: 1 3 5
```

## Procedures

### Procedure simples

```nim
proc salute() =
  echo "Hello!"

salute() # prints "Hello!"
```

### Procedures com parâmetros

```nim
proc addition(a: int, b: int): int =
  a + b

echo addition(20, 30) # returns 50
```

### Usando result {.row-span-2}

```nim
proc double(x: int): int =
  result = x * 2

echo double(5) # returns 10
```

---

Útil ao montar resultados passo a passo:

```nim
proc sumAll(xs: seq[int]): int =
  for n in xs:
    result += n

echo sumAll(@[1,1,1,1,1]) # returns 5
```

### Parâmetros padrão {.col-span-2}

```nim
proc welcome(name = "stranger") =
  echo "Hi, ", name

welcome("Sophie") # prints "Hi, Sophie"
welcome()         # uses default, prints "Hi, stranger"
```

### Procedures que retornam vários valores

```nim
proc divmod(a, b: int): (int, int) =
  (a div b, a mod b)

let (q, r) = divmod(10, 3)
echo q, " ", r   # 3 1
```

### Procedures anônimas (lambdas)

```nim
let square = proc(x: int): int = x * x
echo square(5) # 25
```

### Procedures dentro de procedures {.row-span-2}

```nim
proc outer() =
  var count = 0

  proc inner() =
    inc(count)
    echo count

  inner()
  inner()

outer()   # prints 1 then 2
```

### Sobrecarga

```nim
proc show(x: int) = echo "int: ", x
proc show(x: string) = echo "string: ", x

show(10)
show("hi")
```

### Retornos descartáveis de procedures

```nim
proc doSomething(): int {.discardable.} =
  123

doSomething()      # allowed now
```

## Programação orientada a objetos

### Objetos ref e herança {.row-span-2}

```nim
type
  Animal = ref object of RootObj
    name: string

  Dog = ref object of Animal
    breed: string

method speak(a: Animal) {.base.} =
  echo a.name, " makes a sound."

method speak(d: Dog) =
  echo d.name, " barks!"

var
  a: Animal = Animal(name: "Creature")
  d: Animal = Dog(name: "Fido", breed: "Mutt")  # Dog upcasted to Animal

speak(a)  # Creature makes a sound.
speak(d)  # Fido barks!
```

Use `ref object of RootObj` + `method` quando precisar de polimorfismo em runtime.

### Procs como métodos

```nim
type
  Counter = ref object
    value: int

proc inc(c: var Counter) =
  inc c.value

var c = Counter(value: 0)
inc(c)
echo c.value  # 1
```

### Procs construtoras

```nim
type
  Dog = ref object
    name: string
    age: int

proc newDog(name: string; age: int): Dog =
  Dog(name: name, age: age)

let d = newDog("Fido", 3)
echo d.name, " is ", d.age, " years old"
```

### Testes de tipo e downcasting {.col-span-2}

```nim
type
  Animal = ref object of RootObj
    name: string

  Dog = ref object of Animal
    breed: string

proc newDog(name, breed: string): Dog =
  Dog(name: name, breed: breed)

var a: Animal = newDog("Fido", "mutt")

if a of Dog:                       # runtime type check
  let d = Dog(a)                   # downcast
  echo d.name, " is a ", d.breed

```

`x of Type` verifica o tipo dinâmico; `Type(x)` faz downcast (inseguro se você mentir).

## Imports e módulos

### Imports básicos

```nim
import std/math

echo sqrt(9.0) # 3.0
```

Veja também: [Biblioteca padrão](https://nim-lang.org/docs/lib.html)

### Importando vários módulos

```nim
import std/[strutils, sequtils]

echo "hi".toUpperAscii()    # "HI"
echo @[1,2,3].mapIt(it * 2) # @[2, 4, 6]
```

### Importando módulos específicos

```nim
from std/strutils import toLowerAscii

echo toLowerAscii("ABC")  # "abc"
```

### Renomeando módulos

```nim
import std/random as rng

rng.randomize()

echo rng.rand(1..10) # anywhere from 1 to 10
```

_Não esqueça de usar randomize() se estiver usando a biblioteca std/random, senão você não terá aleatoriedade._

### Criando módulos {.col-span-2}

```nim
# utils.nim
proc greet*(name: string) =
  echo "Hello, ", name
```

(O asterisco significa "exportar este procedure do módulo".)

---

```nim
# main.nim
import utils

greet("John") # prints "Hello, John"
```

### `when isMainModule`

```nim
proc run() =
  echo "Running..."

when isMainModule:
  run()  # Only runs when this file is the program entry point
```

_O código dentro de when isMainModule: é ignorado quando o arquivo é importado._

### Reexportando {.col-span-2}

```nim
# utils.nim
import std/strutils
export strutils    # re-export everything from strutils
```

---

Agora o main.nim pode usar toUpperAscii diretamente, através de utils.

```nim
# main.nim
import utils

echo "hi".toUpperAscii()
```

### Módulo prelude {.col-span-3}

```nim
import std/prelude
include std/prelude
  # same as:
  # import std/[os, strutils, times, parseutils, hashes, tables, sets, sequtils, parseopt, strformat]
let x = 1
assert "foo $# $#" % [$x, "bar"] == "foo 1 bar"
assert toSeq(1..3) == @[1, 2, 3]
when not defined(js) or defined(nodejs):
  assert getCurrentDir().len > 0
  assert ($now()).startsWith "20"
```

## Tratamento de erros

### Try - Except - Finally {.row-span-2}

```nim
import std/strutils

try:
  let x = parseInt("42a")         # invalid integer
  echo x
except ValueError as e:
  echo "Value error: ", e.msg     # catch conversion error
except IOError:
  echo "I/O error!"
finally:
  echo "This always runs"
```

### Lançando exceções

```nim
type
  MyError* = object of Exception

proc loadData(name: string) =
  if name == "":
    raise newException(MyError, "No name provided")
  # ... else proceed

loadData("")  # raises MyError
```

### `defer` para limpeza

```nim
proc processFile(path: string) =
  var f = open(path, fmRead)
  defer:
    close(f)
  # work with f …
```

### Try como exceção

```nim
import std/strutils

let result = try: parseInt("bad")
             except ValueError: -1

echo result  # prints -1
```

### Rastreamento de exceções com raises

```nim
proc riskyOperation() {.raises: [IOError].} =
  # this proc may raise IOError
  raise newException(IOError, "fail")

# A proc with {.raises: []} must not raise any catchable exception.
```

## Enums

### Uso básico

```nim
type
  Direction = enum
    north, east, south, west

var d = north

if d == north:
  echo "Going up!"
```

### Enums e `case`

```nim
# with the same Direction enum:

var d = north

case d:
  of north: echo "N"
  of south: echo "S"
  of east:  echo "E"
  of west:  echo "W"
```

### Enum como ordinal

```nim
# with the same Direction enum:
echo ord(north)   # 0
echo succ(north)  # east
echo pred(south)  # east
```

## Iteradores

### Iterador básico {.row-span-2}

```nim
iterator countUp(a, b: int): int =
  var i = a
  while i <= b:
    yield i      # `yield` produces a value for the `for` loop
    inc i

for n in countUp(1, 5):
  echo n
# 1 2 3 4 5
```

### Iteradores embutidos comuns

```nim
for i in countup(1, 3):
  echo i               # 1 2 3

for i in countdown(3, 1):
  echo i               # 3 2 1
```

### Definindo seu próprio iterador {.row-span-2}

```nim
iterator evensUpTo(n: int): int =
  var x = 0
  while x <= n:
    yield x
    x += 2

for e in evensUpTo(10):
  echo e        # 0 2 4 6 8 10
```

## Arquivos e IO

### Verificar paths e existência {.row-span-2}

```nim
import std/os

if fileExists("data.txt"):
  echo "File exists!"

if dirExists("configs"):
  echo "Directory exists!"

echo getCurrentDir()
echo absolutePath("data.txt")
```

### Ler / escrever o arquivo inteiro {.row-span-1}

```nim
# Write whole file
writeFile("out.txt", "Hello Nim!\n")

# Read whole file
let text = readFile("out.txt")
echo text
```

### Abrir/fechar manualmente com `defer` {.row-span-2}

```nim
import std/syncio

proc writeLog() =
  var f = open("log.txt", fmWrite)
  defer: f.close()
  f.writeLine("entry 1")
  f.writeLine("entry 2")

when isMainModule:
  writeLog()
```

### Ler um arquivo linha a linha

```nim
for line in lines("data.txt"):
  echo line
```

## Generics

### Tipos e procedures genéricos {.col-span-3}

```nim
type
  Box[T] = object
    value: T

proc wrap[T](x: T): Box[T] =
  Box[T](value: x)

let a = wrap(10)        # Box[int]
let b = wrap("hello")   # Box[string]

echo a.value            # 10
echo b.value            # hello
```

## Templates e macros

### Templates

```nim
# Template = macro-like, expanded at compile time
template times2(x: untyped): untyped = (x) * 2
echo times2(21)  # 42
```

### Macros {.row-span-2} {.col-span-2}

```nim
import std/macros

macro dbg(expr: untyped): untyped =
  # prints both the expression and its value
  result = quote do:
    echo astToStr(`expr`), " = ", `expr`

let x = 10
dbg(x * 2)
# prints: x * 2 = 20
```
