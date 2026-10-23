---
title: Java
date: 2021-03-10 19:50:01
background: bg-[#d33731]
tags:
  - object-oriented
  - class
categories:
  - Programação
intro: |
  Este cheat sheet é um curso intensivo para iniciantes em Java e ajuda a revisar a sintaxe básica da linguagem Java.
plugins:
  - tooltip
  - copyCode
---

## Primeiros passos

### Hello.java {.row-span-2}

```java
public class Hello {
  // main method
  public static void main(String[] args)
  {
    // Output: Hello, world!
    System.out.println("Hello, world!");
  }
}
```

Compilando e executando

```bash
$ javac Hello.java
$ java Hello
Hello, world!
```

### Variáveis

```java
int num = 5;
float floatNum = 5.99f;
char letter = 'D';
boolean bool = true;
String site = "cheatsheets.zip";
```

### Tipos de dados primitivos {.row-span-2}

| Tipo de dados | Tamanho | Padrão  | Intervalo           |
| ------------- | ------- | ------- | :------------------ |
| `byte`        | 1 byte  | 0       | -128 ^to^ 127       |
| `short`       | 2 byte  | 0       | -2^15^ ^to^ 2^15^-1 |
| `int`         | 4 byte  | 0       | -2^31^ ^to^ 2^31^-1 |
| `long`        | 8 byte  | 0       | -2^63^ ^to^ 2^63^-1 |
| `float`       | 4 byte  | 0.0f    | _N/A_               |
| `double`      | 8 byte  | 0.0d    | _N/A_               |
| `char`        | 2 byte  | \\u0000 | 0 ^to^ 65535        |
| `boolean`     | _N/A_   | false   | true / false        |

{.show-header}

### Strings

```java
String first = "John";
String last = "Doe";
String name = first + " " + last;
System.out.println(name);
```

Veja: [Strings](#java-strings)

### Loops

```java
String word = "CheatSheets";
for (char c: word.toCharArray()) {
  System.out.print(c + "-");
}
// Outputs: C-h-e-a-t-S-h-e-e-t-s-
```

Veja: [Loops](#java-loops)

### Arrays

```java
char[] chars = new char[10];
chars[0] = 'a'
chars[1] = 'b'

String[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
boolean[] answers = {true, false};
```

Veja: [Arrays](#java-arrays)

### Troca

```java
int a = 1;
int b = 2;
System.out.println(a + " " + b); // 1 2

int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b); // 2 1
```

### Conversão de tipos

```java
// Widening
// byte<short<int<long<float<double
int i = 10;
long l = i;               // 10

// Narrowing
double d = 10.02;
long l = (long)d;         // 10

String.valueOf(10);       // "10"
Integer.parseInt("10");   // 10
Double.parseDouble("10"); // 10.0
```

### Condicionais

```java
int j = 10;

if (j == 10) {
  System.out.println("I get printed");
} else if (j > 10) {
  System.out.println("I don't");
} else {
  System.out.println("I also don't");
}
```

Veja: [Condicionais](#java-conditionals)

### Entrada do usuário

```java
Scanner in = new Scanner(System.in);
String str = in.nextLine();
System.out.println(str);

int num = in.nextInt();
System.out.println(num);
```

## Java Strings

### Básico

```java
String str1 = "value";
String str2 = new String("value");
String str3 = String.valueOf(123);
```

### Concatenação

```java
String s = 3 + "str" + 3;     // 3str3
String s = 3 + 3 + "str";     // 6str
String s = "3" + 3 + "str";   // 33str
String s = "3" + "3" + "23";  // 3323
String s = "" + 3 + 3 + "23"; // 3323
String s = 3 + 3 + 23;        // Incompatible types
```

### StringBuilder {.row-span-3}

`StringBuilder sb = new StringBuilder(10);`

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
|   |   |   |   |   |   |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

`sb.append("QuickRef");`

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| Q | u | i | c | k | R | e | f |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

`sb.delete(5, 9);`

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| Q | u | i | c | k |   |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

`sb.insert(0, "My ");`

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| M | y |   | Q | u | i | c | k |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

`sb.append("!");`

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| M | y |   | Q | u | i | c | k | ! |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

### Comparação

```java
String s1 = new String("cheatsheets.zip");
String s2 = new String("cheatsheets.zip");

s1 == s2          // false
s1.equals(s2)     // true

"AB".equalsIgnoreCase("ab")  // true
```

### Manipulação

```java
String str = "Abcd";

str.toUpperCase();     // ABCD
str.toLowerCase();     // abcd
str.concat("#");       // Abcd#
str.replace("b", "-"); // A-cd

"  abc ".trim();       // abc
"ab".toCharArray();    // {'a', 'b'}
```

### Informações

```java
String str = "abcd";

str.charAt(2);       // c
str.indexOf("a")     // 0
str.indexOf("z")     // -1
str.length();        // 4
str.toString();      // abcd
str.substring(2);    // cd
str.substring(2,3);  // c
str.contains("c");   // true
str.endsWith("d");   // true
str.startsWith("a"); // true
str.isEmpty();       // false
```

### Imutável

```java
String str = "hello";
str.concat("world");

// Outputs: hello
System.out.println(str);
```

---

```java
String str = "hello";
String concat = str.concat("world");

// Outputs: helloworld
System.out.println(concat);
```

Uma vez criada, não pode ser modificada; qualquer modificação cria uma nova String

## Java Arrays

### Declaração

```java
int[] a1;
int[] a2 = {1, 2, 3};
int[] a3 = new int[]{1, 2, 3};

int[] a4 = new int[3];
a4[0] = 1;
a4[2] = 2;
a4[3] = 3;
```

### Modificação

```java
int[] a = {1, 2, 3};
System.out.println(a[0]); // 1

a[0] = 9;
System.out.println(a[0]); // 9

System.out.println(a.length); // 3
```

### Loop (leitura e modificação)

```java
int[] arr = {1, 2, 3};
for (int i=0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
    System.out.print(arr[i] + " ");
}
// Outputs: 2 4 6
```

### Loop (leitura)

```java
String[] arr = {"a", "b", "c"};
for (String a: arr) {
    System.out.print(a + " ");
}
// Outputs: a b c
```

### Arrays multidimensionais

```java
int[][] matrix = { {1, 2, 3}, {4, 5} };

int x = matrix[1][0];  // 4
// [[1, 2, 3], [4, 5]]
Arrays.deepToString(matrix);

int[][] a = matrix;
for (int i = 0; i < a.length; ++i) {
  for(int j = 0; j < a[i].length; ++j) {
    System.out.println(a[i][j]);
  }
}
// Outputs: 1 2 3 4 5 6 7
```

### Ordenação

```java
char[] chars = {'b', 'a', 'c'};
Arrays.sort(chars);

// [a, b, c]
Arrays.toString(chars);
```

## Condicionais em Java

### Operadores {.row-span-2}

- <a data-tooltip="Operador de adição (também usado para concatenação de strings)">+</a>
- <a data-tooltip="Operador de subtração">-</a>
- <a data-tooltip="Operador de multiplicação">\*</a>
- <a data-tooltip="Operador de divisão">/</a>
- <a data-tooltip="Operador de resto">%</a>
- <a data-tooltip="Operador de atribuição simples">=</a>
- <a data-tooltip="Operador de incremento; incrementa um valor em 1">++</a>
- <a data-tooltip="Operador de decremento; decrementa um valor em 1">--</a>
- <a data-tooltip="Operador de complemento lógico; inverte o valor de um boolean">!</a>

{.marker-none .cols-4}

---

- <a data-tooltip="Igual a">==</a>
- <a data-tooltip="Diferente de">!=</a>
- <a data-tooltip="Maior que">></a>
- <a data-tooltip="Maior ou igual a">>=</a>
- <a data-tooltip="Menor que"><</a>
- <a data-tooltip="Menor ou igual a"><=</a>

{.marker-none .cols-4}

---

- <a data-tooltip="AND condicional">&&</a>
- <a data-tooltip="OR condicional">||</a>
- [?:](#ternary-operator){data-tooltip="Ternário (forma abreviada da instrução if-then-else)"}

{.marker-none .cols-4}

---

- <a data-tooltip="Compara um objeto com um tipo especificado">instanceof</a>

{.marker-none}

---

- <a data-tooltip="Complemento bit a bit unário">~</a>
- <a data-tooltip="Deslocamento à esquerda com sinal"><<</a>
- <a data-tooltip="Deslocamento à direita com sinal">>></a>
- <a data-tooltip="Deslocamento à direita sem sinal">>>></a>
- <a data-tooltip="AND bit a bit">&</a>
- <a data-tooltip="OR exclusivo bit a bit">^</a>
- <a data-tooltip="OR inclusivo bit a bit">|</a>

{.marker-none .cols-4}

### If else

```java
int k = 15;
if (k > 20) {
  System.out.println(1);
} else if (k > 10) {
  System.out.println(2);
} else {
  System.out.println(3);
}
```

### Switch {.row-span-2}

```java
int month = 3;
String str;
switch (month) {
  case 1:
    str = "January";
    break;
  case 2:
    str = "February";
    break;
  case 3:
    str = "March";
    break;
  default:
    str = "Some other month";
    break;
}

// Outputs: Result March
System.out.println("Result " + str);
```

### Operador ternário

```java
int a = 10;
int b = 20;
int max = (a > b) ? a : b;

// Outputs: 20
System.out.println(max);
```

## Loops em Java

### Laço for

```java
for (int i = 0; i < 10; i++) {
  System.out.print(i);
}
// Outputs: 0123456789
```

---

```java
for (int i = 0,j = 0; i < 3; i++,j--) {
  System.out.print(j + "|" + i + " ");
}
// Outputs: 0|0 -1|1 -2|2
```

### Laço for aprimorado

```java
int[] numbers = {1,2,3,4,5};

for (int number: numbers) {
  System.out.print(number);
}
// Outputs: 12345
```

Usado para percorrer arrays ou Lists

### Loop while

```java
int count = 0;

while (count < 5) {
  System.out.print(count);
  count++;
}
// Outputs: 01234
```

### Loop do while

```java
int count = 0;

do {
  System.out.print(count);
  count++;
} while (count < 5);
// Outputs: 01234
```

### Instrução continue

```java
for (int i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  System.out.print(i);
}
// Outputs: 0124
```

### Instrução break

```java
for (int i = 0; i < 5; i++) {
  System.out.print(i);
  if (i == 3) {
    break;
  }
}
// Outputs: 0123
```

## Java Collections Framework

### Coleções Java {.col-span-2}

| Coleção                                                                                                            | Interface   | Ordenada | Sorted | Thread safe | Duplicata | Aceita null       |
| ------------------------------------------------------------------------------------------------------------------ | ----------- | -------- | ------ | ----------- | --------- | ----------------- |
| [ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)                                    | List        | Y        | _N_    | _N_         | Y         | Y                 |
| [Vector](https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html)                                          | List        | Y        | _N_    | Y           | Y         | Y                 |
| [LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)                                  | List, Deque | Y        | _N_    | _N_         | Y         | Y                 |
| [CopyOnWriteArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArrayList.html)   | List        | Y        | _N_    | Y           | Y         | Y                 |
| [HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html)                                        | Set         | _N_      | _N_    | _N_         | _N_       | Um `null`         |
| [LinkedHashSet](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html)                            | Set         | Y        | _N_    | _N_         | _N_       | Um `null`         |
| [TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html)                                        | Set         | Y        | Y      | _N_         | _N_       | _N_               |
| [CopyOnWriteArraySet](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArraySet.html)     | Set         | Y        | _N_    | Y           | _N_       | Um `null`         |
| [ConcurrentSkipListSet](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListSet.html) | Set         | Y        | Y      | Y           | _N_       | _N_               |
| [HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)                                        | Map         | _N_      | _N_    | _N_         | _N (key)_ | Um `null` _(key)_ |
| [HashTable](https://docs.oracle.com/javase/8/docs/api/java/util/Hashtable.html)                                    | Map         | _N_      | _N_    | Y           | _N (key)_ | _N (key)_         |
| [LinkedHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html)                            | Map         | Y        | _N_    | _N_         | _N (key)_ | Um `null` _(key)_ |
| [TreeMap](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html)                                        | Map         | Y        | Y      | _N_         | _N (key)_ | _N (key)_         |
| [ConcurrentHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)         | Map         | _N_      | _N_    | Y           | _N (key)_ | _N_               |
| [ConcurrentSkipListMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html) | Map         | Y        | Y      | Y           | _N (key)_ | _N_               |
| [ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html)                                  | Deque       | Y        | _N_    | _N_         | Y         | _N_               |
| [PriorityQueue](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html)                            | Queue       | Y        | _N_    | _N_         | Y         | _N_               |
| [ConcurrentLinkedQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedQueue.html) | Queue       | Y        | _N_    | Y           | Y         | _N_               |
| [ConcurrentLinkedDeque](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedDeque.html) | Deque       | Y        | _N_    | Y           | Y         | _N_               |
| [ArrayBlockingQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ArrayBlockingQueue.html)       | Queue       | Y        | _N_    | Y           | Y         | _N_               |
| [LinkedBlockingDeque](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/LinkedBlockingDeque.html)     | Deque       | Y        | _N_    | Y           | Y         | _N_               |
| [PriorityBlockingQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/PriorityBlockingQueue.html) | Queue       | Y        | _N_    | Y           | Y         | _N_               |

{.show-header .left-text}

### ArrayList

```java
List<Integer> nums = new ArrayList<>();

// Adding
nums.add(2);
nums.add(5);
nums.add(8);

// Retrieving
System.out.println(nums.get(0));

// Indexed for loop iteration
for (int i = 0; i < nums.size(); i++) {
    System.out.println(nums.get(i));
}

nums.remove(nums.size() - 1);
nums.remove(0); // VERY slow

for (Integer value : nums) {
    System.out.println(value);
}
```

### HashMap

```java
Map<Integer, String> m = new HashMap<>();
m.put(5, "Five");
m.put(8, "Eight");
m.put(6, "Six");
m.put(4, "Four");
m.put(2, "Two");

// Retrieving
System.out.println(m.get(6));

// Lambda forEach
m.forEach((key, value) -> {
    String msg = key + ": " + value;
    System.out.println(msg);
});
```

### HashSet

```java
Set<String> set = new HashSet<>();
if (set.isEmpty()) {
    System.out.println("Empty!");
}

set.add("dog");
set.add("cat");
set.add("mouse");
set.add("snake");
set.add("bear");

if (set.contains("cat")) {
    System.out.println("Contains cat");
}

set.remove("cat");
for (String element : set) {
    System.out.println(element);
}
```

### ArrayDeque

```java
Deque<String> a = new ArrayDeque<>();

// Using add()
a.add("Dog");

// Using addFirst()
a.addFirst("Cat");

// Using addLast()
a.addLast("Horse");

// [Cat, Dog, Horse]
System.out.println(a);

// Access element
System.out.println(a.peek());

// Remove element
System.out.println(a.pop());
```

## Diversos

### Modificadores de acesso {.col-span-2}

| Modificador     | Classe | Pacote | Subclasse | Mundo |
| --------------- | ------ | ------ | --------- | ----- |
| public          | Y      | Y      | Y         | Y     |
| protected       | Y      | Y      | Y         | _N_   |
| sem modificador | Y      | Y      | _N_       | _N_   |
| private         | Y      | _N_    | _N_       | _N_   |

{.show-header .left-text}

### Expressões regulares

```java
String text = "I am learning Java";
// Removing All Whitespace
text.replaceAll("\\s+", "");

// Splitting a String
text.split("\\|");
text.split(Pattern.quote("|"));
```

Veja: [Regex em Java](/regex#regex-in-java)

### Comentários

```java
// I am a single line comment!

/*
And I am a
multi-line comment!
*/

/**
 * This
 * is
 * documentation
 * comment
 */
```

### Palavras-chave {.col-span-2}

- `abstract`
- `continue`
- `for`
- `new`
- `switch`
- `assert`
- `default`
- `goto`
- `package`
- `synchronized`
- `boolean`
- `do`
- `if`
- `private`
- `this`
- `break`
- `double`
- `implements`
- `protected`
- `throw`
- `byte`
- `else`
- `import`
- `public`
- `throws`
- `case`
- `enum`
- `instanceof`
- `return`
- `transient`
- `catch`
- `extends`
- `int`
- `short`
- `try`
- `char`
- `final`
- `interface`
- `static`
- `void`
- `class`
- `finally`
- `long`
- `strictfp`
- `volatile`
- `const`
- `float`
- `native`
- `super`
- `while`

{.marker-none .cols-6}

### Métodos de Math

| Método                | Descrição              |
| --------------------- | :--------------------- |
| `Math.max(a,b)`       | Máximo entre a e b     |
| `Math.min(a,b)`       | Mínimo entre a e b     |
| `Math.abs(a)`         | Valor absoluto de a    |
| `Math.sqrt(a)`        | Raiz quadrada de a     |
| `Math.pow(a,b)`       | Potência de b          |
| `Math.round(a)`       | Inteiro mais próximo   |
| `Math.sin(ang)`       | Seno de ang            |
| `Math.cos(ang)`       | Cosseno de ang         |
| `Math.tan(ang)`       | Tangente de ang        |
| `Math.asin(ang)`      | Seno inverso de ang    |
| `Math.log(a)`         | Logaritmo natural de a |
| `Math.toDegrees(rad)` | Ângulo rad em graus    |
| `Math.toRadians(deg)` | Ângulo deg em radianos |

### Try/Catch/Finally

```java
try {
  // something
} catch (Exception e) {
  e.printStackTrace();
} finally {
  System.out.println("always printed");
}
```
