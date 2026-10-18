---
title: Swift
date: 2023-02-28 14:50:01
background: bg-[#eb4e38]
tags:
  - Apple
  - iOS
  - iPadOS
categories:
  - Programação
intro: |
  Este cheat sheet fornece exemplos de uso do Swift que cobrem conhecimentos básicos de Swift, fluxo de controle etc.
plugins:
  - copyCode
---

## Primeiros passos

### Variável {.row-span-2}

```swift
var score = 0  // Variable
let pi = 3.14  // Constant

var greeting = "Hello"
var numberOfToys = 8
var isMorning = true

var numberOfToys: Int = 8
numberOfToys += 1

print(numberOfToys)
// prints "9"
```

### Anotações de tipo

```swift
var greeting: String = "Hello"
var numberOfToys: Int = 8
var isMorning: Bool = true
var price: Double = 8.99
```

### Operadores aritméticos {.row-span-3}

- `+` Adição
- `-` Subtração
- `*` Multiplicação
- `/` Divisão
- `%` Resto

{.cols-2 .marker-none}

---

```swift
var x = 0
x = 4 + 2 // x is now 6
x = 4 - 2 // x is now 2
x = 4 * 2 // x is now 8
x = 4 / 2 // x is now 2
x = 4 % 2 // x is now 0
```

---

- `+=` Soma e atribui o resultado
- `-=` Subtrai e atribui a diferença
- `*=` Multiplica e atribui
- `/=` Divide e atribui o quociente
- `%=` Divide e atribui o resto

{.marker-none}

#### Operadores de atribuição composta

```swift
var numberOfDogs = 100
numberOfDogs += 1
print("There are \(numberOfDogs) Dalmatians!")

// print: There are 101 Dalmatians!
```

### Interpolação de string

```swift
var apples = 6
print("I have \(apples) apples!")

// print: I have 6 apples!
```

### String de múltiplas linhas

```swift
let myLongString = """
Swift?
This is my favorite language!
Yeah!
"""
```

### Comentários de código

```swift
// This line represents a comment in Swift.

/*
This is all commented out.
None will run!
*/
```

### Crie uma tupla {.col-span-2}

```swift
let player = ("Maya", 5, 150)

print(player) // ("Maya", 5, 150)
print("\(player.0): level \(player.1), \(player.2) pts") // Maya: level 5, 150 pts
```

### Decomponha uma tupla

```swift
let player = (name: "Maya", level: 5)
let (currentName, curLevel) = player
print("\(currentName): level \(curLevel)")
// print: Maya: level 5
```

### Sintaxe especial de comentário (MARK)

```swift
// MARK: -view settings
```

`MARK` pode ser usado para exibir comentários na coluna

### Sintaxe especial de comentário (TODO)

```swift
// TODO: update logic to accommodate data changes
```

`TODO` é usado para exibir lembretes de coisas que precisam ser feitas

### Sintaxe especial de comentário (FIXME)

```swift
// FIXME: Fix buggy behavior when making changes to existing entries
```

`FIXME` é usado para exibir lembretes sobre coisas que precisam ser corrigidas

## Variável

### Declaração de variável

Variáveis são declaradas com `var`:

```swift
var greeting = "Hello"
var numberOfToys = 8
var isMorning = true
```

Para maior clareza, declarações de variáveis podem conter anotações de tipo:

```swift
var greeting: String = "Hello"
var numberOfToys: Int = 8
var isMorning: Bool = true
```

Variáveis são mutáveis. Seus valores podem ser alterados:

```swift
var numberOfToys: Int = 8
numberOfToys += 1

print(numberOfToys)
// print "9"
```

### Constantes

Constantes são declaradas com `let`:

```swift
let greeting = "Hello"
let numberOfToys = 8
let isMorning = true
```

Para maior clareza, declarações de constantes podem conter anotações de tipo:

```swift
let greeting: String = "Hello"
let numberOfToys: Int = 8
let isMorning: Bool = true
```

Constantes são imutáveis. Seus valores não podem ser alterados:

```swift
let numberOfToys: Int = 8
numberOfToys += 1
// Error: numberOfToys is immutable
```

### Variáveis computadas (get e set) {.row-span-3}

```swift
import Foundation

let df = DateFormatter()
df.dateFormat = "d MMMM yyyy"

guard var birth = df.date(from: "5 June 1999") else {
    print("Date is not valid")
    return
}

var age: Int {
    Calendar.current
        .dateComponents([.year],
                        from: birth,
                        to: Date()).year!
}

print(age) // 23
guard let birth2 = df.date(from: "5 June 2002") else {
    print("Date is not valid")
    return
}
birth = birth2
print(age) // 20
```

No exemplo abaixo, distanceInFeet tem um `getter` e um `setter`. Por causa do `setter`, o `getter` exige a
palavra-chave `get`:

```swift
var distanceInMeters: Float = 100

var distanceInFeet: Float {
  get {
    distanceInMeters *3.28
  }
  set(newDistance) {
    distanceInMeters = newDistance /3.28
  }
}

print(distanceInMeters) // 100.0
print(distanceInFeet)   // 328.0

distanceInFeet = 250
print(distanceInMeters) // 76.21951
print(distanceInFeet)   // 250.0

distanceInMeters = 800
print(distanceInMeters) // 800.0
print(distanceInFeet)   // 2624.0
```

### willSet {.row-span-2}

```swift
var distance = 5 {
  willSet {
    print("The distance will be set")
  }
}

distance = 10 // print: distance will be set
```

O novo valor pode ser acessado em `willSet`:

```swift
var distance = 5 {
  willSet(newDistance) {
    print("The distance will be set \(newDistance)")
  }
}

distance = 10 // print: distance will be set to 10
```

`willSet` pode ser usado para executar algum código antes de definir o valor da variável

### didSet

```swift
var distance = 5 {
  didSet {
    print("The distance is set to \(distance)")
    print("Its old value is: \(oldValue)")
  }
}
distance = 10 // print: distance will be set to 10
              // print: its old value is: 5
```

### willSet e didSet

```swift
var distance = 5 {
  willSet(newDistance) {
    print("The distance will be set to \(newDistance)")
  }
  didSet {
    print("The distance is set to \(distance)")
    print("Its old value is: \(oldValue)")
  }
}
distance = 10
```

## Condições

### Instrução if

```swift
var halloween = true
if halloween {
  print("Trick or treat!")
}
// print: Trick or treat!
if 5 > 3 {
  print("5 is greater than 3")
} else {
  print("5 is not more than 3")
}
// output: "5 is greater than 3"
```

### Instrução else

```swift
var turbulence = false

if turbulence {
  print("Please sit down.")
} else {
  print("You are free to move around.")
}
// print: You are free to move around.
```

### Instrução else if

```swift
var weather = "rainy"
if weather == "sunny" {
  print("Get some sunscreen")
} else if weather == "rainy" {
  print("Take an umbrella")
} else if weather == "snowing" {
  print("Put on your snow boots")
} else {
  print("Invalid weather")
}
// print: take an umbrella
```

### Operadores de comparação

```swift
5 > 1      // true
6 < 10     // true
2 >= 3     // false
3 <= 5     // true
"A" == "a" // false
"B" != "b" // true
```

-`<` menor que <br> -`>` maior que <br> -`<=` menor ou igual a <br> -`>=` maior ou igual a <br> -`==` é
igual a <br> -`!=` não é igual a

### Operadores de intervalo

```swift
a...b      // numbers between a and b (including both a and b)
a..<b      // numbers between a and b (including a but excluding b)
...b      // numbers till b (including b)
```

-`a...b` Intervalo fechado <br> -`a..<b` Intervalo semiaberto <br> -`...b` Intervalo unilateral

### Operador condicional ternário

```swift
var driverLicense = true

driverLicense
    ? print("driver seat") : print("passenger seat")
// print: driver's seat
```

### Instrução switch

```swift
var secondaryColor = "green"

switch secondaryColor {
  case "orange":
    print("A mixture of red and yellow")
  case "purple":
    print("A mix of red and blue")
  default:
    print("This may not be a secondary color")
}
// print: mix of blue and yellow
```

### Instrução switch: correspondência de intervalos

```swift
let year = 1905
var artPeriod: String

switch year {
  case 1860...1885:
    artPeriod = "Impressionism"
  case 1886...1910:
    artPeriod = "Post-Impressionism"
  default:
    artPeriod = "Unknown"
}
// print: post-impressionism
```

### Instrução switch: case composto

```swift
let service = "Seamless"

switch service {
case "Uber", "Lyft":
    print("travel")
  case "DoorDash", "Seamless", "GrubHub":
    print("Restaurant delivery")
  case "Instacart", "FreshDirect":
    print("Grocery Delivery")
  default:
    print("Unknown service")
}
// print: restaurant takeaway
```

### Instrução switch: cláusula where

```swift
let num = 7

switch num {
  case let x where x % 2 == 0:
    print("\(num) is even")
  case let x where x % 2 == 1:
    print("\(num) odd number")
  default:
    print("\(num) is invalid")
}

// print: 7 odd
```

### Operadores lógicos

```swift
!true  // false
!false //true
```

### Operadores lógicos &&

```swift
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

### Operadores lógicos ||

```swift
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

### Operadores lógicos combinados

```swift
!false && true || false // true
```

`!false && true` é avaliado primeiro e retorna `true`. Em seguida, a expressão `true` || `false` é avaliada e retorna o
resultado final `true`

```swift
false || true && false // false
```

`true && false` é avaliado primeiro e retorna `false`. Em seguida, a expressão `false` || `false` é avaliada e retorna o
resultado final `false`

### Controle a ordem de execução

```swift

// without parentheses:
true || true && false || false
//----> true

// with brackets:
(true || true) && (false || false)
//----> false

```

### Guards simples

```swift
func greet(name: String?) {
  guard let unwrapped = name else {
    print("Hello guest!")
    return
  }
  print("Hello \(unwrapped)!")
}
greet(name: "Asma") // output: Hello Asma!
greet(name: nil)    // output: Hello guest!
```

## Ciclos

### Escopo

```swift
let zeroToThree = 0...3
//zeroToThree: 0, 1, 2, 3
```

### Função stride()

```swift
for oddNum in stride(from: 1, to: 5, by: 2) {
  print(oddNum)
}
// print: 1
// print: 3
```

### Laço for-in

```swift
for char in "hehe" {
  print(char)
}
// print: h
// print: e
// print: h
// print: e
```

### Palavra-chave continue

```swift
for num in 0...5 {
  if num % 2 == 0 {
    continue
  }
  print(num)
}
// print: 1
// print: 3
// print: 5
```

A palavra-chave `continue` força o loop a continuar para a próxima iteração

### Palavra-chave break

```swift
for char in "supercalifragilistic" {
if char == "c" {
    break
  }
  print(char)
}
// print: s
// print: u
// print: p
// print: e
// print: r
```

### Use sublinhados (_)

```swift
for _ in 1...3 {
  print("Ole")
}
// print: Ole
// print: Ole
// print: Ole
```

### Loop while

```swift
var counter = 1
var stopNum = Int.random(in: 1...10)

while counter < stopNum {
  print(counter)
  counter += 1
}
// loop to print until the stop condition is met
```

Um loop `while` aceita uma condição e continua executando o código do seu corpo enquanto a condição fornecida for `true`. Se a
condição nunca for falsa, o loop continuará rodando e o programa ficará preso em um `infinite loop`

## Arrays e coleções

### Array

```swift
var scores = [Int]()
// array is empty: []
```

### Propriedade .count

```swift
var grocery = ["🥓", "🥞", "🍪", "🥛", "🍊"]
print(grocery.count)
// print: 5
```

### Índice {.row-span-2}

O índice se refere à posição do item na lista ordenada, e um único elemento é recuperado do array usando a
sintaxe de subscript `array[index]`.

```swift
var vowels = ["a", "e", "i", "o", "u"]

print(vowels[0]) // prints: a
print(vowels[1]) // prints: e
print(vowels[2]) // print: i
print(vowels[3]) // prints: o
print(vowels[4]) // prints: u
```

Nota: arrays em Swift são indexados a partir de zero, ou seja, o primeiro elemento tem índice 0.

### Inicialize com literal de array

```swift
// use type inference:
var snowfall = [2.4, 3.6, 3.4, 1.8, 0.0]
// explicit type:
var temp: [Int] = [33, 31, 30, 38, 44]
```

### Inicialize com valor padrão

```swift
var teams = [Int](repeating: 0, count: 3)
print(teams) // prints: [0, 0, 0]
// or with Array type
var sizes = Array<Int>(repeating: 0, count: 3)
print(sizes) // prints: [0, 0, 0]
```

### Método .append() e operador +=

```swift
var gymBadges = ["Boulder", "Cascade"]
gymBadges.append("Thunder")
gymBadges += ["Rainbow", "Soul"]
// ["Boulder", "Cascade", "Thunder",
// "Rainbow", "Soul"]
```

### Métodos .insert() e .remove()

```swift
var moon = ["🌖", "🌗", "🌘", "🌑"]
moon.insert("🌕", at: 0)
// ["🌕", "🌖", "🌗", "🌘", "🌑"]

moon.remove(at: 4)
// ["🌕", "🌖", "🌗", "🌘"]
```

### Itere sobre um array

```swift
var employees = ["Peter", "Denial", "Jame"]
for person in employees {
  print(person)
}
// print: Peter
// print: Denial
// print: Jam
```

### Coleção (Set)

```swift
var paintingsInMOMA: Set = [
  "The Dream",
  "The Starry Night",
  "The False Mirror"
]
```

Podemos usar uma coleção (`Set`) para armazenar elementos `unique` do mesmo tipo de dado

### Coleção vazia (Set)

```swift
var team = Set<String>()

print(team)
// print: []
```

### Popule a coleção

```swift
var vowels: Set = ["a", "e", "i", "o","u"]
```

Para criar um set preenchido com valores, use a palavra-chave `Set` antes do operador de atribuição.

### .insert()

```swift
var cookieJar: Set = [
  "Chocolate Chip",
  "Oatmeal Raisin"
]
// add a new element
cookieJar.insert("Peanut Butter Chip")
```

### Métodos .remove() e .removeAll()

```swift
var oddNumbers: Set = [1, 2, 3, 5]

// remove existing element
oddNumbers.remove(2)
// remove all elements
oddNumbers.removeAll()
```

### .contains()

```swift
var names: Set = ["Rosa", "Doug", "Waldo"]
print(names.contains("Lola")) // print: false

if names.contains("Waldo"){
  print("There's Waldo!")
} else {
  print("Where's Waldo?")
}
// print: There's Waldo!
```

### Propriedade .isEmpty

```swift
var emptyList = [String]()
print(emptyList.isEmpty)     // print: true

var populatedList: [Int] = [1, 2, 3]
print(populatedList.isEmpty) // print: false
```

### Itere sobre uma coleção

```swift
var recipe: Set = ["Egg", "Flour", "Sugar"]

for ingredient in recipe {
  print ("Include \(ingredient) in the recipe")
}
```

### Propriedade .isEmpty

```swift
var emptySet = Set<String>()
print(emptySet.isEmpty)     // print: true

var populatedSet: Set = [1, 2, 3]
print(populatedSet.isEmpty) // print: false
```

### Propriedade .count

```swift
var band: Set = ["Peter", "Denial", "Jame"]

print("The band has \(band.count) players.")
// print: Band has 4 players.
```

### .intersection() Interseção

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.intersection(setB)
print(setC) // print: ["D", "C"]
```

### .union()

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.union(setB)
print(setC)
// print: ["B", "A", "D", "F", "C", "E"]
```

### .symmetricDifference() Diferença simétrica

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.symmetricDifference(setB)
print(setC)
// print: ["B", "E", "F", "A"]
```

### .subtracting() Subtração

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D"]

var setC = setA.subtracting(setB)
print(setC)
// print: ["B", "A"]
```

## Dicionário

### Dicionário básico

```swift
var dictionaryName = [
  "Key1": "Value1",
  "Key2": "Value2",
  "Key3": "Value3"
]
```

Uma coleção `unordered` de pares de dados ou pares chave-valor

### Chaves

```swift
var fruitStand = [
  "Coconuts": 12,
  "Pineapples": 12,
  "Papaya": 12
]
```

Cada `key` é `unique` mesmo que todas contenham o mesmo `value`

### Consistência de tipos

```swift
var numberOfSides = [
  "triangle": 3,
  "square": 4,
  "rectangle": 4
]
```

Contém apenas chaves `String` e valores `Int`

### Inicialize e popule o dicionário

```swift
var employeeID = [
  "Hamlet": 1367,
  "Horatio": 8261,
  "Ophelia": 9318
]
```

### Inicialize um dicionário vazio

```swift
// initializer syntax:
var yearlyFishPopulation = [Int: Int]()

// Empty dictionary literal syntax:
var yearlyBirdPopulation: [Int: Int] = [:]
```

### Adicione ao dicionário

```swift
var pronunciation = [
  "library": "lai·breh·ree",
  "apple": "a·pl"
]
// new key: "programming", new value: "prow gra"
pronunciation["programming"] = "prow·gra"
```

### Exclua par chave-valor {.row-span-2}

```swift
var bookShelf = [
  "Goodnight": "Margaret Wise Brown",
  "The BFG": "Roald Dahl",
  "Falling Up": "Shel Silverstein",
  "No, David!": "David Shannon"
]
// remove value by setting key to nil
bookShelf["The BFG"] = nil

// remove value using .removeValue()
bookShelf.removeValue(forKey: "Goodnight")

// remove all values
bookShelf.removeAll()
```

### Modifique o par chave-valor {.row-span-2}

```swift
var change = [
  "Quarter": 0.29,
  "Dime": 0.15,
  "Nickel": 0.05
]

// Change the value using subscript syntax
change["Quarter"] = .25

// Change the value using .updateValue()
change.updateValue(.10, forKey: "Dime")
```

Para alterar o valor de um par chave-valor, use o método `.updateValue()` ou a sintaxe de subscript, anexando colchetes
`[ ]` com as chaves existentes ao nome do dicionário e, em seguida, adicionando o operador de atribuição _(`= `)_ seguido
do valor modificado

### Propriedade .isEmpty

```swift
var bakery = [String:Int]()

// check if the dictionary is empty
print(bakery.isEmpty) // prints true
bakery["Cupcakes"] = 12
// check if the dictionary is empty
print(bakery.isEmpty) // print false
```

### Propriedade .count

```swift
var fruitStand = [
  "Apples": 12,
  "Oranges", 17
]
print(fruitStand.count) // print: 2
```

### Atribuindo valores a variáveis

```swift
var hex = [
  "red": "#ff0000",
  "yellow": "#ffff00",
  "blue": "#0000ff",
]

print("Blue hexadecimal code \(hex["blue"])")
// print: blue hex code Optional("#0000ff")

if let redHex = hex["red"] {
  print("red hexadecimal code \(redHex)")
}
// print: red hex code #ff0000
```

Atribuir o valor de um par chave-valor a uma variável retorna um valor opcional. Para extrair valores, use o desembrulho
do optional

### Percorrendo o dicionário

```swift
var emojiMeaning = [
  "🤔": "Thinking Face",
  "😪": "Sleepy Face",
  "😵": "Dizzy Face"
]
// loop through keys and values
for (emoji, meaning) in emojiMeaning {
  print("\(emoji) is called '\(meaning)Emoji'")
}
// iterate through keys only
for emoji in emojiMeaning.keys {
  print(emoji)
}
// iterate through values only
for meaning in emojiMeaning.values {
  print(meaning)
}
```

## Funções

### Funções básicas

```swift
func washCar() -> Void {
  print("Soap")
  print("Scrub")
  print("Rinse")
  print("Dry")
}
```

### Chame funções

```swift
func greetLearner() {
 print("Welcome to CheatSheets.zip!")
}
// function call:
greetLearner()
// print: Welcome to CheatSheets.zip!
```

### Valor de retorno

```swift
let birthYear = 1994
var currentYear = 2020

func findAge() -> Int {
  return currentYear-birthYear
}

print(findAge()) // prints: 26
```

### Múltiplos parâmetros {.col-span-2}

```swift
func convertFracToDec(numerator: Double, denominator: Double) -> Double {
  return numerator / denominator
}

let decimal = convertFracToDec(numerator: 1.0, denominator: 2.0)
print(decimal) // prints: 0.5
```

### Omita rótulos de parâmetros

```swift
func findDiff(_ a: Int, b: Int) -> Int {
  return a -b
}

print(findDiff(6, b: 4)) // prints: 2
```

### Retorne múltiplos valores {.col-span-2}

```swift
func smartphoneModel() -> (name: String, version: String, yearReleased: Int) {
  return ("iPhone", "8 Plus", 2017)
}
let phone = smartphoneModel()

print(phone.name)         // print: iPhone
print(phone.version)      // print: 8 Plus
print(phone.yearReleased) // print: 2017
```

### Parâmetros e argumentos

```swift
func findSquarePerimet(side: Int) -> Int {
  return side *4
}

let perimeter = findSquarePerimet(side: 5)
print(perimeter) // print: 20

// Parameter: side
// Argument: 5
```

### Retorno implícito

```swift
func nextTotalSolarEclipse() -> String {
  "April 8th, 2024 🌎"
}

print(nextTotalSolarEclipse())
// print: April 8th, 2024 🌎
```

### Parâmetros padrão

```swift
func greet(person: String = "guest") {
  print("Hello \(person)")
}
greet() // Hello guest
greet(person: "Aliya") // Hello Aliya
```

### Parâmetros de entrada e saída {.row-span-2}

```swift
var currentSeason = "Winter"

func season(month: Int, name: inout String) {
  switch month {
    case 1...2:
      name = "Winter ⛄️"
    case 3...6:
      name = "Spring 🌱"
    case 7...9:
      name = "Summer ⛱"
    case 10...11:
      name = "Autumn 🍂"
    default:
      name = "Unknown"
  }
}
season(month: 4, name: &currentSeason)

print(currentSeason) // Spring 🌱
```

### Parâmetro variável

```swift
func totalStudent(data: String...) -> Int {
  let numStudents = data.count
  return numStudents
}

print(totalStudent(data: "Denial", "Peter"))
// print: 2
```

### Parâmetros opcionais

```swift
func getFirstInitial(from name: String?) -> String? {
  return name?.first
}
```

Funções podem aceitar tipos opcionais e retornar tipos opcionais. Quando uma função não pode retornar uma instância
razoável do tipo solicitado, ela deve retornar `nil`

## Estruturas

### Criação de estrutura

```swift
struct Building {
  var address: String
  var floors: Int
  init(address: String, floors: Int) {
    self.address = address
    self.floors = floors
  }
}
```

Structs são usados para representar objetos do mundo real em código de forma programática. Uma estrutura é criada usando a
palavra-chave `struct`, seguida do seu nome e de um corpo contendo suas propriedades e métodos

### Valores padrão de propriedades

```swift
struct Car {
  var numOfWheels = 4
  var topSpeed = 80
}

var reliantRobin = Car(numOfWheels: 3)

print(reliantRobin.numOfWheels) // prints: 3
print(reliantRobin.topSpeed)    // print: 80
```

### Criação de instância de estrutura

```swift
struct Person {
  var name: String
  var age: Int

  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }
}

// Person instance:
var morty = Person(name: "Peter", age: 14)
```

### Método init() {.row-span-2}

```swift
struct TV {
  var size: Int
  var type: String

  init(size: Int, type: String) {
    self.size = size
    self.type = type
  }
}
```

Usando a classe `TV`

```swift
var newTV = TV(size: 65, type: "LED")
```

### Verifique o tipo

```swift
print(type(of: "abc")) // print: String
print(type(of: 123))   // print: 123
```

### Método de mutação (mutating) {.row-span-2}

```swift
struct Menu {
  var menuItems = ["Fries", "Burgers"]
  mutating func addToMenu(dish: String) {
    self.menuItems.append(dish)
  }
}
```

Usando a classe `Menu`

```swift
var dinerMenu = Menu()
dinerMenu.addToMenu(dish: "Toast")
print(dinerMenu.menuItems)
// prints: ["Fries", "Burgers", "Toast"]
```

### Métodos de estrutura

```swift
struct Dog {
  func bark() {
    print("Woof")
  }
}
let fido = Dog()
fido.bark() // prints: Woof
```

## Classes

### Tipo de referência (class) {.row-span-2}

```swift
class Player {
  var name: String

  init(name: String) {
    self.name = name
  }
}

var player1 = Player(name: "Tomoko")
var player2 = player1
player2.name = "Isabella"

print(player1.name) // Isabella
print(player2.name) // Isabella
```

### Instância da classe

```swift
class Person {
  var name = ""
  var age = 0
}

var sonny = Person()
// sonny is now an instance of Person
```

### Método init() {.row-span-2}

```swift
class Fruit {
  var hasSeeds = true
  var color: String

  init(color: String) {
    self.color = color
  }
}
```

Usando a classe Fruit

```swift
let apple = Fruit(color: "red")
```

Uma classe pode ser inicializada usando o método `init()` e as propriedades de inicialização correspondentes. No método `init()`,
a palavra-chave `self` é usada para se referir à instância real da classe ao atribuir valores às propriedades

### Atributos da classe

```swift
var ferris = Student()

ferris.name = "Ferris Bueller"
ferris.year = 12
ferris.gpa = 3.81
ferris.honors = false
```

### Herança {.row-span-2}

Suponha que temos uma classe BankAccount:

```swift
class BankAccount {
  var balance = 0.0
  func deposit(amount: Double) {
    balance += amount
  }
  func withdraw(amount: Double) {
    balance -= amount
  }
}
```

`SavingsAccount` estende a classe `BankAccount`

```swift
class SavingsAccount: BankAccount {
  var interest = 0.0

  func addInterest() {
    let interest = balance *0.005
    self.deposit(amount: interest)
  }
}
```

A nova classe `SavingsAccount` (subclasse) obtém automaticamente todas as características da classe `BankAccount`
(superclasse). Além disso, a classe `SavingsAccount` define uma propriedade `.interest` e um método `.addInterest()`.

### Exemplo

use tipo de dado

```swift
class Student {
  var name: String
  var year: Int
  var gpa: Double
  var honors: Bool
}
```

Use valores padrão de propriedades

```swift
class Student {
  var name = ""
  var gpa = 0.0
  var honors = false
}
```

### Este é um exemplo de definição de struct e de definição de classe

```swift
struct Resolution {
  var width = 0
  var height = 0
}
class VideoMode {
  var resolution = Resolution()
  var interlaced = false
  var frameRate = 0.0
  var name: String?
}
```

A definição da estrutura `Resolution` e a definição da classe `VideoMode` apenas descrevem a aparência de `Resolution`
ou `VideoMode`; para usar, crie uma instância da estrutura ou classe:

```swift
let resolution = Resolution(width: 1920)
let someVideoMode = VideoMode()
```

## Enumerações

### Defina a enumeração

```swift
enum Day {
  case monday
  case tuesday
  case wednesday
  case thursday
  case friday
  case saturday
  case sunday
}

let casualWorkday: Day = .friday
```

### Instrução switch

```swift
enum Dessert {
  case cake(flavor: String)
  case vanillaIceCream(scoops: Int)
  case brownie
}

let customerOrder: Dessert = .cake(flavor: "Red Velvet")
switch customerOrder {
  case let .cake(flavor):
    print("You ordered a \(flavor) cake")
  case .brownie:
    print("You ordered a chocolate cake")
}
// prints: "You ordered a red velvet cake"
```

### CaseIterable

```swift
enum Season: CaseIterable {
  case winter
  case spring
  case summer
  case falls
}

for season in Season.allCases {
  print(season)
}
```

Adicione conformidade ao protocolo `CaseIterable` para acessar a propriedade `allCases`, que retorna um array com todos os
casos da enumeração

### Valor original

```swift
enum Beatle: String {
  case john paul george ringo
}

print("The Beatles are \(Beatle.john.rawValue).")
// print: The Beatles are john.
```

### Valores relacionados

```swift
enum Dessert {
  case cake(flavor: String)
  case vanillaIceCream(scoops: Int)
  case brownie
}

let order: Dessert = .cake(flavor: "Red Velvet")
```

### Método de instância {.row-span-2}

```swift
enum Traffic {
  case light
  case heavy

  mutating func reportAccident() {
    self = .heavy
  }
}

var currentTraffic: Traffic = .light

currentTraffic.reportAccident()
// currentTraffic is now .heavy
```

Assim como classes e structs, enumerações podem ter métodos de instância. Se um método de instância altera o valor do
enum, ele precisa ser marcado como `mutating`

### Inicialize a partir de valor primitivo

```swift
enum Hello: String {
  case english = "Hello"
  case japanese = "Hello!"
  case emoji = "👋"
}
let hello1 = Hello(rawValue: "Hello!")
let hello2 = Hello(rawValue: "Привет")
print(hello1) // Optional(Hello.japanese)
print(hello2) // nil
```

### Propriedades computadas

```swift
enum ShirtSize: String {
  case small = "S"
  case medium = "M"
  case large = "L"
  case extraLarge = "XL"
  var description: String {
    return "The size of this shirt is \(self.rawValue)"
  }
}
```

## Extensões

### O que são extensões?

Extensões são uma forma de adicionar novas funcionalidades a classes, estruturas, enumerações ou tipos de protocolo
existentes. Isso inclui adicionar novos métodos, propriedades, inicializadores e muito mais.

### Por que usar extensões?

Extensões são particularmente úteis para organizar e modularizar nosso código sem precisar modificar o tipo original,
especialmente quando não temos acesso ao código-fonte original.

### Sintaxe de extensão

```swift
extension SomeType {
    // New functionalities to be added
}
```

### Propriedades computadas

```swift
extension Int {
    var isEven: Bool {
        self % 2 == 0
    }
}

print(4.isEven) // Outputs: true
print(7.isEven) // Outputs: false
```

### Métodos

```swift
extension String {
    func reverse() -> String {
        String(self.reversed())
    }
}

print("abc".reverse()) // Output: cba
```

### Métodos mutating

```swift
extension Int {
    mutating func square() {
        self = self * self
    }
}

var number = 5
number.square()
print(number) // Output: 25
```

### Inicializadores

```swift
extension Date {
    init?(timestamp: Double) {
        self.init(timeIntervalSince1970: timestamp)
    }
}

let timestamp = 1693982400.0 // Unix timestamp for 2023-09-06 06:40:00
if let date = Date(timestamp: timestamp) {
    print(date) // Output: 2023-09-06 06:40:00 +0000
}
```

### Subscripts

```swift
extension String {
    subscript(index: Int) -> Character {
        self[self.index(startIndex, offsetBy: index)]
    }
}

print("Swift"[0]) // Output: S
print("Swift"[1]) // Output: w
print("Swift"[2]) // Output: i
print("Swift"[3]) // Output: f
print("Swift"[4]) // Output: t
```

### Extensões de protocolo {.row-span-2}

Funciona praticamente como classes abstratas quando queremos que uma funcionalidade esteja disponível em todas as classes
que implementam determinado protocolo (sem precisar herdar de uma classe base comum).

```swift
// Define a protocol
protocol Describable {
    func describe() -> String
}

// Provide a default implementation using a protocol extension
extension Describable {
    func describe() -> String {
        "This is a generic description"
    }
}

// Define a struct that conforms Describable protocol
struct Person: Describable {
    var name: String
    var age: Int

    // Overriding the default implementation
    func describe() -> String {
        "My name is \(name) and I am \(age) years old."
    }
}

struct Employee: Describable {
    var name: String
    var age: Int

    // Using the default implementation
}

// By just implementing the protocol the describe() method is available

let person = Person(name: "Ivan", age: 21)
let employee = Employee(name: "Saul", age: 25)

print(person.describe()) // Output: My name is Ivan and I am 21 years old.
print(employee.describe()) // Output: This is a generic description
```

### Restrições para extensões

Isso é especialmente útil quando queremos adicionar funcionalidade a um tipo que conforma a um protocolo específico ou
atende a certas condições.

```swift
extension Array where Element: Numeric {
    func sum() -> Element {
        reduce(0, +)
    }
}

let numbers = [1, 2, 3, 4, 5]
print(numbers.sum()) // Output: 15

let doubles = [1.5, 2.5, 3.5]
print(doubles.sum()) // Output: 7.5

// This will not work because String is not Numeric
// let strings = ["a", "b", "c"]
// print(strings.sum()) // Error: Cannot invoke 'sum' with an array of strings
```

### Organizando código com extensões

Extensões não se limitam a adicionar funcionalidade; elas também são úteis para organizar o código. Podemos agrupar
métodos, propriedades ou views relacionados em extensões separadas.

```swift
import SwiftUI

struct HomeView: View {
    var body: some View {
        ScrollView {
            header
            // Add other views
        }
    }
}

extension HomeView {
    private var header: some View {
        Text("Header ...")
    }
}

#Preview {
    HomeView()
}
```

## Generics

### O que são generics?

Generics em Swift são um recurso que permite criar funções, classes, estruturas e protocolos que funcionam com qualquer
tipo de dado.

### Por que usar generics?

Generics nos permitem escrever código claro e conciso que funciona com qualquer tipo de dado. Usar placeholders (como `T`)
reduz o risco de introduzir bugs.

### Parâmetros de tipo {.row-span-2}

```swift
func foo<T, U>(a: T, b: U) {
  // ...
}

struct Foo<T, U> {
  var a: T
  // ...
}
```

O placeholder `T` é um exemplo de parâmetro de tipo, escrito entre sinais de menor e maior (como `<T>`).

### Estruturas de dados genéricas

```swift
struct Box<T> {
    var value: T
}
let intBox = Box(value: 10)
let stringBox = Box(value: "Hello")

print(intBox.value) // Output: 10
print(stringBox.value) // Output: "Hello"
```

### Funções genéricas {.row-span-2}

```swift
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

var a = 10
var b = 20
swapValues(&a, &b)
print(a) // Output: 20
print(b) // Output: 10

var c = "Hello"
var d = "World"
swapValues(&c, &d)
print(c) // Output: "World"
print(d) // Output: "Hello"
```

### Restrições em generics

```swift
func sum<T: Numeric>(_ array: [T]) -> T {
    array.reduce(0, +)
}

print(sum([1, 1.5, 2])) // Output: 4.5

// This will not work because String is not Numeric
// print(sum(["a", "b", "c"]))
// Error: function 'sum' requires that 'String' conform to 'Numeric'
```

### Tipos associados

```swift
protocol Foo {
    associatedtype T
    func foo() -> T
}
```

Tipos associados são usados em protocolos para definir um placeholder para um tipo que será especificado depois. Eles
funcionam como um placeholder genérico. O tipo exato não é definido no próprio protocolo; em vez disso, é determinado
quando uma classe, struct ou enum conforma ao protocolo.

### Protocolos genéricos {.row-span-2}

```swift
protocol Storage {
    associatedtype Item
    func store(item: Item)
    func retrieve() -> Item?
}

class SimpleStorage<T>: Storage {
    private var items: [T] = []

    func store(item: T) {
        items.append(item)
    }

    func retrieve() -> T? {
        return items.isEmpty ? nil : items.removeLast()
    }
}

let intStorage = SimpleStorage<Int>()
intStorage.store(item: 42)
print(intStorage.retrieve() ?? "Empty")  // Output: 42
```

### Typealiases genéricos

Typealiases genéricos permitem criar um novo nome para um tipo existente (ou seja, não introduzem um novo tipo).

```swift
typealias StringDictionary<T> = [String: T]
typealias IntFunction<T> = (Int) -> Int
typealias Vector<T> = (T, T, T)
```

## Veja também

- [Documentação do Swift (oficial)](https://www.swift.org/documentation/) _(swift.or)_
- [A linguagem de programação Swift (oficial)](https://docs.swift.org/swift-book/) _(swift.or)_
- [Referência rápida completa para desenvolvedores Swift](https://swiftly.dev/) _(swiftly.dev)_
