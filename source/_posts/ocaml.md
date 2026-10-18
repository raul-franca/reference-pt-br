---
title: OCaml
date: 2024-08-14 21:12:00
background: bg-[#ec670f]
tags:
  - scientific
  - functional
categories:
  - Programação
intro: |
  O cheat sheet do [OCaml](https://www.ocaml.org/) é uma folha de referência de uma página para a linguagem de programação OCaml.
plugins:
  - copyCode
---

## Primeiros passos

### hello.ml

```ml
let () =
  let message = "Hello, World!" in
  Printf.printf "%s\n" message
```

#### Compile e execute

```bash
$ ocamlc -o hello.byte hello.ml
$ ./hello.byte
```

#### Compile e execute com Dune

```bash
$ dune build hello.exe
$ _build/default/hello.exe

# you can also just run
$ dune exec ./hello.exe
```

Consulte a documentação do [dune](https://dune.build/) para mais informações.

### Imports

Instale módulos com opam

```bash
$ opam install hex
```

#### Abertura global

```ml
open Hex
```

#### Abertura local

```ml
Hex.of_string "hex string"

let open Hex in
  of_string "to hex"
```

### Comentários

#### Comentários de linha e de bloco

```ml
(* A single line comment *)

(* A multi-line comment
* where we want to explain
* something complex *)

(* Outer comment
   (* Nested comment *)
   End of outer comment *)
```

#### Comentários de documentação

```ml
val sum : int -> int -> int
(** [sum x y] returns the sum
 of two integers [x] and [y] *)
```

## Tipos de dados

### Tipos predefinidos

#### Unit

Nota: `#` indica execução no toplevel seguida da saída

```ml
# ();; (* equivalent to void in C *)
- : unit = ()
```

#### Tipos básicos

```ml
# 5 ;; (* integer *)
- : int = 5

# 3.14 ;;  (* float *)
- : float = 3.14

# true ;; (* bool *)
- : bool = true

# false ;;
- : bool = false

# 'a' ;; (* char *)
- : char = 'a'

# "a string" ;; (* string *)
- : string = "a string"

# String.to_bytes "hello" ;; (* bytes *)
- : bytes = Bytes.of_string "hello"

# (3, 5);; (* tuple *)
- : int * int = (3, 5)

# ref 0;; (* reference *)
- : int ref = {contents = 0}
```

#### Options e Results

```ml
# Some 42;;
- : int option = Some 42

# Ok 42;;
- : (int, 'a) result = Ok 42

# Error "404";;
- : ('a, int) result = Error 404
```

### Arrays e listas

#### Arrays

```ml
# [|0; 1; 2; 3|];; (* create an array *)
- : int array = [|0; 1; 2; 3|]

# [|'u'; 's'; 'c'|].(1);; (* array access *)
- char = 's'
```

Arrays são mutáveis

```ml
let scores = [|97; 85; 99|];;
- : int array = [|97; 85; 99|]

# scores.(2) <- 89;; (* update an element *)
- unit = ()

# scores;;
- : int array = [|97; 85; 89|]
```

#### Listas

```ml
# [1; 2; 3];;
- : int list = [1; 2; 3;]

# ["a"; "str"; "lst"];;
- : string list = ["a"; "str"; "lst"]
```

Listas são imutáveis

```ml
# let lst = [1; 2; 3];;
- : int list = [1; 2; 3]

# let new_lst =  0 :: lst;; (* prepend to a new list *)
- : int list = [0; 1; 2; 3]

# new_lst @ [4;5;6];; (* combine two lists *)
- : int list = [0; 1; 2; 3; 4; 5; 6]
```

### Tipos definidos pelo usuário

#### Records

Agrupa dados relacionados

```ml
type person = {
  name: string;
  age: int
}

# let zeno = {name = "Zeno"; age = 30};;
val zeno : person = {name = "Zeno"; age = 30}
```

#### Variants

Vários tipos diferentes, mas relacionados

```ml
type shape =
  | Circle of float
  | Rectangle of float * float

# let my_shape = Circle 5.0;;
- : shape = Circle 5.
```

#### Aliases

Dê um nome significativo a tipos complexos ou usados com frequência

```ml
type point = float * float

# let origin: point = (0.0, 0.0);;
val origin : point = (0., 0.)
```

## Funções

### Funções

#### Parâmetro único

```ml
let add_one x =
  let result = x + 1 in
  result

# add_one 1;;
- : int = 2
```

#### Vários parâmetros

```ml
let sum x y =
  let result = x + y in
  result

# sum 1 2;;
- : int = 3
```

#### Parâmetro tupla

```ml
let str_concat (x, y) =
  x ^ " " ^ y

# str_concat ("Hello", "OCaml") ;;
- : string = "Hello Ocaml"
```

### Funções recursivas

#### Palavra-chave rec

Todas as funções recursivas usam a palavra-chave rec

```ml
let rec factorial n =
  if n < 1 then 1 else n * factorial (n - 1)
```

O exemplo acima pode causar stack overflow.

#### Recursão de cauda

Usa uma função auxiliar e o argumento acc.

```ml
let rec factorial_helper n acc =
  if n = 0 then acc
  else factorial_helper (n - 1) (n * acc)
```

Observe que a última chamada é a função recursiva.

```ml
let factorial n = factorial_helper n 1
```

### Encadeamento

#### Operador de aplicação

Lido da direita para a esquerda, a primeira operação é `sum 2 3`

```ml
(* find log(2 + 3) *)
# log @@ float_of_int @@ sum 2 3 ;;
- : float = 1.609...
```

#### Pipeline

```ml
(* find log((x + y)!) *)
# sum 2 3
  |> factorial
  |> float_of_int
  |> log ;;
- : float = 4.787...
```

`|>` pega a saída da função e a passa como entrada para a próxima função do pipeline

## Fluxo de controle

### Instruções if

#### Instrução if

```ml
let is_pos x =
  if x > 0 then "positive" else "negative"
```

#### If, else if

```ml
let f x =
  if x > 3 then "gt 3"
  else if x < 3 then "lt 3"
  else "eq 3"
```

#### Pattern matching

```ml
let is_pos x =
  match x > 0 with
  | true  -> "positive"
  | false -> "negative"
```

### Laços

#### Laço for

```ml
for i = 1 to 5 do
  print_int i
done
```

#### Laço while

Observe que o `ref` é necessário para que a condição do while eventualmente se torne falsa.

```ml
let i = ref 0 in
  while !i < 5 do
    print_int !i;
    i := !i + 1
  done
```

### Operadores

#### Operadores de comparação

```ml
=         (* equal to *)
<>        (* not equal to *)
>         (* greater than *)
<         (* less than *)
>=        (* greater than or eq to *)
<=        (* less than or eq to *)
```

#### Operadores aritméticos

```ml
(* int operator   float operator *)
+                 +.  (* addition *)
-                 -.  (* subtraction *)
*                 *.  (* multiplication *)
/                 /.  (* division *)
                  **  (* power *)
```

## Ferramentas úteis

### List

#### Busca e filtragem

```ml
# let lst = [1; 2; 3];;
val lst : int list = [1; 2; 3]

# List.filter (fun x -> x mod 2 = 0) lst;;
- : int list = [2]

# List.find (fun x -> x = 4) lst;;
Exception: Not_found

# List.sort compare [2; 1; 3];;
- : int list = [1; 2; 3]
```

#### Aplicando transformações

```ml
(* Loop over list and apply fun f *)
List.iter f lst

(* map a function to each elem *)
(* Ex. double each element x in lst *)
List.map (fun x -> x + x) lst

(* Apply an operator between elements *)
(* Ex. 1 + 2 + 3 *)
List.fold_left (+) 0 lst
```

### Listas de associação

#### Definição e acesso

```ml
let scores =
  [("math", 91); ("phil", 89); ("stats", 94)]

# List.assoc "stats" scores;;
- : int = 94

# List.mem_assoc "math" scores;;
- : bool = true
```

#### Divisão e combinação

```ml
# List.split scores;;
- : string list * int list = (["math"; "phil"; "stats"], [91; 89; 94])

# List.combine [1;2;3] [4; 5; 6];;
- : (int * int) list = [(1, 4); (2, 5); (3, 6)]
```

Listas de associação são semelhantes a dicionários ou hashmaps

### Tabelas hash

Tabelas hash são mutáveis.

#### Inicializar e adicionar dados

```ml

# let my_htable = Hashtbl.create 3;;
val my_htable : ('_weak1, '_weak2) Hashtbl.t = <abstr>

# Hashtbl.add my_htable "A" "John";
  Hashtbl.add my_htable "A" "Jane";
  Hashtbl.add my_htable "B" "Max";;
```

#### Buscar dados

```ml
# Hashtbl.find my_htable "A";;
- : string = "Jane"

(* find all *)
# Hashtbl.find_all my_htable "A";;
- : string list = ["Jane"; "John"]
```

### Maps

Maps são tabelas de associação chave-valor imutáveis.

#### Inicialização e adição de dados

```ml
(* the Map.Make functor creates the custom map module *)
# module StringMap = Map.Make(String);;

let books =
  StringMap.empty
  |> StringMap.add "Dune" ("Herbet", 1965)
  |> StringMap.add "Neuromancer" ("Gibson", 1984)
```

#### Buscando entradas

```ml
(* find_opt returns assoc val wrapped in an option else None *)
# StringMap.find_opt "Dune" books;;
- : (string * int) option = Some ("Herbet", 1965)

(* find returns the association else Not_Found *)
# StringMap.find "Dune" books;;
- : string * int = ("Herbet", 1965)
```

#### Adicionando e removendo entradas

Cria um novo map, já que maps são imutáveis

```ml
let more_books = books
  |> StringMap.add "Foundation" ("Isaac Asimov", 1951)

let less_books =
  |> StringMap.remove "Dune"
```

Filtragem

```ml
let eighties_books =
    StringMap.filter
      (fun _ (_, year) -> year > 1980 & number < 1990) books
```

#### Imprimindo dados

```ml
let print_books map =
  StringMap.iter (fun title (author, year) ->
    Printf.printf "Title: %s, Author: %s, Year: %d\n" title author year
  ) map

# let () = print_books eighties_books;;
Title: Neuromancer, Author: Gibson, Year: 1984
```
