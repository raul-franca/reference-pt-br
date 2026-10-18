---
title: Go
date: 2020-12-17 21:51:44
background: bg-[#4ba4cc]
tags:
  - Go
categories:
  - Programação
intro: |
  Este cheat sheet traz a sintaxe básica e os métodos para ajudar você a usar [Go](https://go.dev/).
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### hello.go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

Execute diretamente

```shell script
$ go run hello.go
Hello, world!
```

Ou experimente no [Go repl](https://repl.it/languages/go)

### Variáveis

```go
var s1 string
s1 = "Learn Go!"

// declare multiple variables at once
var b, c int = 1, 2
var d = true
```

Declaração curta

```go
s1 := "Learn Go!"        // string
b, c := 1, 2             // int
d := true                // bool
```

Veja: [Tipos básicos](#go-basic-types)

### Funções

```go
package main

import "fmt"

// The entry point of the programs
func main() {
    fmt.Println("Hello world!")
    say("Hello Go!")
}

func say(message string) {
    fmt.Println("You said: ", message)
}
```

Veja: [Funções](#go-functions)

### Comentários

```go
// Single line comment

/* Multi-
 line comment */
```

### Instrução if

```go
if true {
    fmt.Println("Yes!")
}
```

Veja: [Controle de fluxo](#go-flow-control)

## Tipos básicos do Go

### Strings

```go
s1 := "Hello" + "World"

s2 := `A "raw" string literal
can include line breaks.`

// Outputs: 10
fmt.Println(len(s1))

// Outputs: Hello
fmt.Println(string(s1[0:5]))
```

Strings são do tipo `string`.

### Números

```go
num := 3         // int
num := 3.        // float64
num := 3 + 4i    // complex128
num := byte('a') // byte (alias: uint8)

var u uint = 7        // uint (unsigned)
var p float32 = 22.7  // 32-bit float
```

#### Operadores

```go
x := 5
x++
fmt.Println("x + 4 =", x + 4)
fmt.Println("x * 4 =", x * 4)
```

Veja: [Mais operadores](#go-operators-and-punctuation)

### Booleanos

```go
isTrue   := true
isFalse  := false
```

#### Operadores

```go
fmt.Println(true && true)   // true
fmt.Println(true && false)  // false
fmt.Println(true || true)   // true
fmt.Println(true || false)  // true
fmt.Println(!true)          // false
```

Veja: [Mais operadores](#go-operators-and-punctuation)

### Arrays {.row-span-2}

```go
┌────┬────┬────┬────┬─────┬─────┐
| 2  | 3  | 5  | 7  | 11  | 13  |
└────┴────┴────┴────┴─────┴─────┘
  0    1    2    3     4     5
```

---

```go
primes := [...]int{2, 3, 5, 7, 11, 13}
fmt.Println(len(primes)) // => 6

// Outputs: [2 3 5 7 11 13]
fmt.Println(primes)

// Same as [:3], Outputs: [2 3 5]
fmt.Println(primes[0:3])
```

---

```go
var a [2]string
a[0] = "Hello"
a[1] = "World"

fmt.Println(a[0], a[1]) //=> Hello World
fmt.Println(a)   // => [Hello World]
```

#### Array 2D

```go
var twoDimension [2][3]int
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
        twoDimension[i][j] = i + j
    }
}
// => 2d:  [[0 1 2] [1 2 3]]
fmt.Println("2d: ", twoDimension)
```

### Ponteiros

```go
func main () {
  b := *getPointer()
  fmt.Println("Value is", b)
}
```

```go
func getPointer () (myPointer *int) {
  a := 234
  return &a
}
```

```go
a := new(int)
*a = 234
```

Veja: [Ponteiros](https://tour.go.dev/moretypes/1)

### Slices

```go
s := make([]string, 3)
s[0] = "a"
s[1] = "b"
s = append(s, "d")
s = append(s, "e", "f")

fmt.Println(s)
fmt.Println(s[1])
fmt.Println(len(s))
fmt.Println(s[1:3])

slice := []int{2, 3, 4}
```

Veja também: [Exemplo de slices](https://gobyexample.com/slices)

### Constantes

```go
const s string = "constant"
const Phi = 1.618
const n = 500000000
const d = 3e20 / n
fmt.Println(d)
```

### Conversões de tipo

```go
i := 90
f := float64(i)
u := uint(i)

// Will be equal to the character Z
s := string(i)
```

#### Como obter uma string a partir de um int?

```go
i := 90

// need import "strconv"
s := strconv.Itoa(i)
fmt.Println(s) // Outputs: 90
```

## Strings em Go

### Funções de strings

```go
package main

import (
	"fmt"
	s "strings"
)

func main() {
    /* Need to import strings as s */
	fmt.Println(s.Contains("test", "e"))

    /* Build in */
    fmt.Println(len("hello"))  // => 5
    // Outputs: 101
	fmt.Println("hello"[1])
    // Outputs: e
	fmt.Println(string("hello"[1]))

}
```

### fmt.Printf {.row-span-2 .col-span-2}

```go
package main

import (
	"fmt"
	"os"
)

type point struct {
	x, y int
}

func main() {
	p := point{1, 2}
	fmt.Printf("%v\n", p)                        // => {1 2}
	fmt.Printf("%+v\n", p)                       // => {x:1 y:2}
	fmt.Printf("%#v\n", p)                       // => main.point{x:1, y:2}
	fmt.Printf("%T\n", p)                        // => main.point
	fmt.Printf("%t\n", true)                     // => TRUE
	fmt.Printf("%d\n", 123)                      // => 123
	fmt.Printf("%b\n", 14)                       // => 1110
	fmt.Printf("%c\n", 33)                       // => !
	fmt.Printf("%x\n", 456)                      // => 1c8
	fmt.Printf("%f\n", 78.9)                     // => 78.9
	fmt.Printf("%e\n", 123400000.0)              // => 1.23E+08
	fmt.Printf("%E\n", 123400000.0)              // => 1.23E+08
	fmt.Printf("%s\n", "\"string\"")             // => "string"
	fmt.Printf("%q\n", "\"string\"")             // => "\"string\""
	fmt.Printf("%x\n", "hex this")               // => 6.86578E+15
	fmt.Printf("%p\n", &p)                       // => 0xc00002c040
	fmt.Printf("|%6d|%6d|\n", 12, 345)           // => |    12|   345|
	fmt.Printf("|%6.2f|%6.2f|\n", 1.2, 3.45)     // => |  1.20|  3.45|
	fmt.Printf("|%-6.2f|%-6.2f|\n", 1.2, 3.45)   // => |1.20  |3.45  |
	fmt.Printf("|%6s|%6s|\n", "foo", "b")        // => |   foo|     b|
	fmt.Printf("|%-6s|%-6s|\n", "foo", "b")      // => |foo   |b     |

	s := fmt.Sprintf("a %s", "string")
	fmt.Println(s)

	fmt.Fprintf(os.Stderr, "an %s\n", "error")
}

```

Veja também: [fmt](https://go.dev/pkg/fmt/)

### Exemplos de funções

| Exemplo                       | Resultado   |
| ----------------------------- | ----------- |
| Contains("test", "es")        | true        |
| Count("test", "t")            | 2           |
| HasPrefix("test", "te")       | true        |
| HasSuffix("test", "st")       | true        |
| Index("test", "e")            | 1           |
| Join([]string{"a", "b"}, "-") | a-b         |
| Repeat("a", 5)                | aaaaa       |
| Replace("foo", "o", "0", -1)  | f00         |
| Replace("foo", "o", "0", 1)   | f0o         |
| Split("a-b-c-d-e", "-")       | [a b c d e] |
| ToLower("TEST")               | test        |
| ToUpper("test")               | TEST        |

## Controle de fluxo do Go

### Condicional

```go

a := 10

if a > 20 {
    fmt.Println(">")
} else if a < 20 {
    fmt.Println("<")
} else {
    fmt.Println("=")
}
```

### Instruções no if

```go
x := "hello go!"

if count := len(x); count > 0 {
    fmt.Println("Yes")
}

```

---

```go

if _, err := doThing(); err != nil {
    fmt.Println("Uh oh")
}
```

### Switch

```go {.wrap}
x := 42.0
switch x {
case 0:
case 1, 2:
    fmt.Println("Multiple matches")
case 42:   // Don't "fall through".
    fmt.Println("reached")
case 43:
    fmt.Println("Unreached")
default:
    fmt.Println("Optional")
}
```

Veja: [Switch](https://github.com/golang/go/wiki/Switch)

### Laço for

```go
for i := 0; i <= 10; i++ {
  fmt.Println("i: ", i)
}
```

### Laço for-range

```go {.wrap}
nums := []int{2, 3, 4}
sum := 0
for _, num := range nums {
    sum += num
}
fmt.Println("sum:", sum)
```

### Laço while

```go
i := 1
for i <= 3 {
    fmt.Println(i)
    i++
}
```

### Palavra-chave continue

```go
for i := 0; i <= 5; i++ {
    if i % 2 == 0 {
        continue
    }
    fmt.Println(i)
}
```

### Palavra-chave break

```go
for {
    fmt.Println("loop")
    break
}
```

## Structs e maps do Go

### Definindo {.row-span-2}

```go
package main

import (
	"fmt"
)

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X, v.Y) // => 4 2
}
```

Veja: [Structs](https://tour.go.dev/moretypes/2)

### Literais

```go
v := Vertex{X: 1, Y: 2}
// Field names can be omitted
v := Vertex{1, 2}
// Y is implicit
v := Vertex{X: 1}
```

Você também pode informar os nomes dos campos.

### Maps {.row-span-2}

```go
m := make(map[string]int)
m["k1"] = 7
m["k2"] = 13
fmt.Println(m) // => map[k1:7 k2:13]

v1 := m["k1"]
fmt.Println(v1)     // => 7
fmt.Println(len(m)) // => 2

delete(m, "k2")
fmt.Println(m) // => map[k1:7]

_, prs := m["k2"]
fmt.Println(prs) // => false

n := map[string]int{"foo": 1, "bar": 2}
fmt.Println(n) // => map[bar:2 foo:1]
```

### Ponteiros para structs

```go
v := &Vertex{1, 2}
v.X = 2
```

Fazer `v.X` é o mesmo que fazer `(*v).X`, quando `v` é um ponteiro.

## Funções em Go

### Múltiplos argumentos

```go
func plus(a int, b int) int {
    return a + b
}
func plusPlus(a, b, c int) int {
    return a + b + c
}
fmt.Println(plus(1, 2))
fmt.Println(plusPlus(1, 2, 3))
```

### Múltiplos retornos

```go
func vals() (int, int) {
    return 3, 7
}

a, b := vals()
fmt.Println(a)    // => 3
fmt.Println(b)    // => 7
```

### Funções literais

```go
r1, r2 := func() (string, string) {
    x := []string{"hello", "cheatsheets.zip"}
    return x[0], x[1]
}()

// => hello cheatsheets.zip
fmt.Println(r1, r2)
```

### Retornos nus (naked returns)

```go
func split(sum int) (x, y int) {
  x = sum * 4 / 9
  y = sum - x
  return
}

x, y := split(17)
fmt.Println(x)   // => 7
fmt.Println(y)   // => 10
```

Observe que usar naked returns prejudica a legibilidade.

### Funções variádicas

```go
func sum(nums ...int) {
    fmt.Print(nums, " ")
    total := 0
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}
sum(1, 2)     //=> [1 2] 3
sum(1, 2, 3)  // => [1 2 3] 6

nums := []int{1, 2, 3, 4}
sum(nums...)  // => [1 2 3 4] 10
```

### Função init

```go
import --> const --> var --> init()
```

---

```go
var num = setNumber()

func setNumber() int {
    return 42
}
func init() {
    num = 0
}
func main() {
    fmt.Println(num) // => 0
}
```

### Funções como valores

```go
func main() {
    // assign a function to a name
    add := func(a, b int) int {
        return a + b
    }
    // use the name to call the function
    fmt.Println(add(3, 4)) // => 7
}
```

### Closures 1

```go
func scope() func() int{
    outer_var := 2
    foo := func() int {return outer_var}
    return foo
}

// Outpus: 2
fmt.Println(scope()())
```

### Closures 2

```go
func outer() (func() int, int) {
    outer_var := 2
    inner := func() int {
        outer_var += 99
        return outer_var
    }
    inner()
    return inner, outer_var
}
inner, val := outer()
fmt.Println(inner()) // => 200
fmt.Println(val)     // => 101
```

## Pacotes do Go

### Importando {.row-span-2}

```go
import "fmt"
import "math/rand"
```

#### Equivalente a

```go
import (
  "fmt"        // gives fmt.Println
  "math/rand"  // gives rand.Intn
)
```

Veja: [Importando](https://tour.go.dev/basics/1)

### Aliases {.row-span-2}

```go
import r "math/rand"
```

---

```go
import (
    "fmt"
    r "math/rand"
)
```

---

```go
r.Intn()
```

### Pacotes

```go
package main

// An internal package may be imported only by another package
// that is inside the tree rooted at the parent of the internal directory
package internal
```

Veja: [Pacotes internos](https://go.dev/doc/go1.4#internalpackages)

### Exportando nomes

```go
// Begin with a capital letter
func Hello () {
  ···
}
```

Veja: [Nomes exportados](https://tour.go.dev/basics/3)

## Concorrência do Go

### Goroutines {.row-span-2}

```go
package main

import (
	"fmt"
	"time"
)

func f(from string) {
	for i := 0; i < 3; i++ {
		fmt.Println(from, ":", i)
	}
}

func main() {
	f("direct")
	go f("goroutine")

	go func(msg string) {
		fmt.Println(msg)
	}("going")

	time.Sleep(time.Second)
	fmt.Println("done")
}
```

Veja: [Goroutines](https://tour.go.dev/concurrency/1), [Channels](https://tour.go.dev/concurrency/2)

### WaitGroup {.row-span-2}

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func w(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("%d starting\n", id)

	time.Sleep(time.Second)
	fmt.Printf("%d done\n", id)
}

func main() {
	var wg sync.WaitGroup
	for i := 1; i <= 5; i++ {
		wg.Add(1)
		go w(i, &wg)
	}
	wg.Wait()
}
```

Veja: [WaitGroup](https://go.dev/pkg/sync/#WaitGroup)

### Fechando channels

```go
ch <- 1
ch <- 2
ch <- 3
close(ch) // Closes a channel
```

---

```go
// Iterate the channel until closed
for i := range ch {
  ···
}
```

---

```go
// Closed if `ok == false`
v, ok := <- ch
```

Veja: [Range e close](https://tour.go.dev/concurrency/4)

### Channels com buffer

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3
// fatal error:
// all goroutines are asleep - deadlock
```

Veja: [Channels com buffer](https://tour.go.dev/concurrency/3)

## Controle de erros do Go

### Adiando funções

```go
func main() {
  defer func() {
    fmt.Println("Done")
  }()
  fmt.Println("Working...")
}
```

### Lambda defer

```go
func main() {
  var d = int64(0)
  defer func(d *int64) {
    fmt.Printf("& %v Unix Sec\n", *d)
  }(&d)
  fmt.Print("Done ")
  d = time.Now().Unix()
}
```

A func de defer usa o valor atual de d, a menos que usemos um ponteiro para obter o valor final no fim de main.

### Defer

```go
func main() {
  defer fmt.Println("Done")
  fmt.Println("Working...")
}
```

Veja: [Defer, panic e recover](https://blog.go.dev/defer-panic-and-recover)

## Métodos do Go {.cols-2}

### Receivers

```go
type Vertex struct {
  X, Y float64
}
```

```go
func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}
```

```go
v := Vertex{1, 2}
v.Abs()
```

Veja: [Métodos](https://tour.go.dev/methods/1)

### Mutação

```go
func (v *Vertex) Scale(f float64) {
  v.X = v.X * f
  v.Y = v.Y * f
}
```

```go
v := Vertex{6, 12}
v.Scale(0.5)
// `v` is updated
```

Veja: [Receivers de ponteiro](https://tour.go.dev/methods/4)

## Interfaces do Go {.cols-2}

### Uma interface básica

```go
type Shape interface {
  Area() float64
  Perimeter() float64
}
```

### Struct

```go
type Rectangle struct {
  Length, Width float64
}
```

A struct `Rectangle` implementa implicitamente a interface `Shape` ao implementar todos os seus métodos.

### Métodos

```go
func (r Rectangle) Area() float64 {
  return r.Length * r.Width
}

func (r Rectangle) Perimeter() float64 {
  return 2 * (r.Length + r.Width)
}
```

Os métodos definidos em `Shape` são implementados em `Rectangle`.

### Exemplo de interface

```go {.wrap}
func main() {
  var r Shape = Rectangle{Length: 3, Width: 4}
  fmt.Printf("Type of r: %T, Area: %v, Perimeter: %v.", r, r.Area(), r.Perimeter())
}

```

## Generics do Go {.cols-2}

### Exemplo 1

```go
// comparable represents types that can be compared.
type comparable interface {
	int | float64 | string
}

// Max returns the maximum of two comparable values.
func Max[T comparable](a, b T) T {
	if a > b {
		return a
	}
	return b
}

func main() {
	// Find the maximum of two integers.
	maxInt := Max(10, 20)
	fmt.Println("Max integer:", maxInt)

	// Find the maximum of two floats.
	maxFloat := Max(3.14, 2.71)
	fmt.Println("Max float:", maxFloat)

	// Find the maximum of two strings.
	maxString := Max("apple", "banana")
	fmt.Println("Max string:", maxString)
}

```

### Exemplo 2

```go

// Pair[T, U] represents a generic pair of values.
type Pair[T, U any] struct {
	First  T
	Second U
}

func main() {
	pair := Pair[int, string]{First: 42, Second: "hello"}

	fmt.Println("First:", pair.First)
	fmt.Println("Second:", pair.Second)

	// Print the types of the values in the pair.
	fmt.Println("Type of First:", reflect.TypeOf(pair.First))
	fmt.Println("Type of Second:", reflect.TypeOf(pair.Second))
}

```

## I/O de arquivos no Go {.cols-2}

### Lendo um arquivo

Leia o conteúdo de um arquivo na memória.

```go
data, err := os.ReadFile("file.txt")
if err != nil {
    log.Fatal(err)
}
```

### Escrevendo em um arquivo

Grave dados em um arquivo com permissões específicas (por exemplo, 0644 para leitura e escrita).

```go
err := os.WriteFile("file.txt", []byte("Hello, Go!"), 0644)
```

## Testes no Go {.cols-2}

### Teste unitário

Teste unitário: um teste unitário básico segue a convenção de nomes abaixo e usa t.Errorf() para relatar falhas.

```go
func TestAdd(t *testing.T) {
    result := add(2, 3)
    if result != 5 {
        t.Errorf("Expected 5, got %d", result)
    }
}
```

### Teste unitário

Benchmark: testes de benchmark medem desempenho, usando b.N para controlar as iterações.

```go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        add(1, 2)
    }
}
```

## Manipulação de JSON no Go {.cols-2}

### Codificação JSON

Converta uma struct Go em JSON.

```go
data, _ := json.Marshal(person)
```

### Decodificação JSON

Faça o parse de dados JSON em uma struct Go.

```go
json.Unmarshal(data, &person)
```

## Servidor Go {.cols-2}

### net/http (biblioteca padrão)

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello from net/http!")
}

func main() {

    http.HandleFunc("/", handler)

    http.ListenAndServe(":8080", nil)
}

```

### gorilla/mux

```go
package main

import (
    "fmt"
    "net/http"
    "github.com/gorilla/mux"
)

func main() {

    r := mux.NewRouter()

    r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "Hello from Gorilla Mux!")
    })

    http.ListenAndServe(":8081", r)
}

```

### chi

```go
package main

import (
    "fmt"
    "net/http"
    "github.com/go-chi/chi/v5"
)

func main() {

    r := chi.NewRouter()

    r.Get("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, "Hello from Chi!")
    })

    http.ListenAndServe(":8082", r)
}
```

### gin

```go
package main

import (
    "github.com/gin-gonic/gin"
)

func main() {

    r := gin.Default()

    r.GET("/", func(c *gin.Context) {
        c.String(200, "Hello from Gin!")
    })

    r.Run(":8083")
}
```

### fiber

```go
package main

import (
    "github.com/gofiber/fiber/v3"
)

func main() {

    app := fiber.New()

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello from Fiber!")
    })

    app.Listen(":8084")
}
```

### beego

```go
package main

import (
    "github.com/beego/beego/v2/server/web"
)

func main() {

    web.Get("/", func(ctx *web.Context) {
        ctx.Output.Body([]byte("Hello from Beego!"))
    })

    web.Run()
}

```

## Diversos

### Palavras-chave

- `break`
- `default`
- `func`
- `interface`
- `select`
- `case`
- `defer`
- `go`
- `map`
- `struct`
- `chan`
- `else`
- `goto`
- `package`
- `switch`
- `const`
- `fallthrough`
- `if`
- `range`
- `type`
- `continue`
- `for`
- `import`
- `return`
- `var`
- `iota`

{.cols-3 .marker-none}

### Operadores e pontuação

|                 |                 |                  |                  |                   |      |       |     |     |
| --------------- | --------------- | ---------------- | ---------------- | ----------------- | ---- | ----- | --- | --- |
| `+`             | `&`             | `+=`             | `&=`             | `&&`              | `==` | `!=`  | `(` | `)` |
| `-`             | <code>\|</code> | `-=`             | <code>\|=</code> | <code>\|\|</code> | `<`  | `<=`  | `[` | `]` |
| <code>\*</code> | `^`             | <code>\*=</code> | `^=`             | `<-`              | `>`  | `>=`  | `{` | `}` |
| `/`             | `<<`            | `/=`             | `<<=`            | `++`              | `=`  | `:=`  | `,` | `;` |
| `%`             | `>>`            | `%=`             | `>>=`            | `--`              | `!`  | `...` | `.` | `:` |
|                 | `&^`            | `&^=`            |                  |                   |      |       |     |     |

## Veja também {.cols-1}

- [Devhints](https://devhints.io/go) _(devhints.io)_
- [A tour of Go](https://tour.go.dev/welcome/1) _(tour.go.dev)_
- [Wiki do Go](https://github.com/golang/go/wiki/) _(github.com)_
- [Effective Go](https://go.dev/doc/effective_go) _(go.dev)_
- [Go by Example](https://gobyexample.com/) _(gobyexample.com)_
- [Awesome Go](https://awesome-go.com/) _(awesome-go.com)_
- [JustForFunc Youtube](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw) _(youtube.com)_
- [Guia de estilo](https://github.com/golang/go/wiki/CodeReviewComments) _(github.com)_
