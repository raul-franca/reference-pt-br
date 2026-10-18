---
title: Python
date: 2020-12-23 18:41:20
background: bg-[#436b97]
tags:
  - script
  - interpret
categories:
  - Programação
intro: |
  O cheat sheet de [Python](https://www.python.org/) é uma folha de referência de uma página para a linguagem de programação Python 3.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Introdução

- [Python](https://www.python.org/) _(python.org)_
- [Documentação do Python](https://docs.python.org/3/index.html) _(docs.python.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/python/) _(learnxinyminutes.com)_
- [Regex em Python](/regex#regex-in-python) _(cheatsheets.zip)_

### Hello World

```python
>>> print("Hello, World!")
Hello, World!
```

O famoso programa "Hello World" em Python

### Variáveis

```python
age = 18      # age is of type int
name = "John" # name is now of type str
print(name)
```

Python não permite declarar uma variável sem atribuição.

### Tipos de dados {.row-span-2}

|                                    |            |
| ---------------------------------- | ---------- |
| `str`                              | Texto      |
| `int`, `float`, `complex`          | Numérico   |
| `list`, `tuple`, `range`           | Sequência  |
| `dict`                             | Mapeamento |
| `set`, `frozenset`                 | Conjunto   |
| `bool`                             | Booleano   |
| `bytes`, `bytearray`, `memoryview` | Binário    |

Veja: [Tipos de dados](#python-built-in-data-types)

### Fatiamento de string

```python
>>> msg = "Hello, World!"
>>> print(msg[2:5])
llo
```

Veja: [Strings](#python-strings)

### Listas

```python
mylist = []
mylist.append(1)
mylist.append(2)
for item in mylist:
    print(item) # prints out 1,2
```

Veja: [Listas](#python-lists)

### If Else

```python
num = 200
if num > 0:
    print("num is greater than 0")
else:
    print("num is not greater than 0")
```

Veja: [Controle de fluxo](#python-flow-control)

### Laços

```python
for item in range(6):
    if item == 3: break
    print(item)
else:
    print("Finally finished!")
```

Veja: [Laços](#python-loops)

### Funções

```python
>>> def my_function():
...     print("Hello from a function")
...
>>> my_function()
Hello from a function
```

Veja: [Funções](#python-functions)

### Manipulação de arquivos {.col-span-2}

```python
with open("myfile.txt", "r", encoding='utf8') as file:
    for line in file:
        print(line)
```

Veja: [Manipulação de arquivos](#python-file-handling)

### Aritmética

```python
result = 10 + 30 # => 40
result = 40 - 10 # => 30
result = 50 * 5  # => 250
result = 16 / 4  # => 4.0 (Float Division)
result = 16 // 4 # => 4 (Integer Division)
result = 25 % 2  # => 1
result = 5 ** 3  # => 125
```

O `/` significa o quociente de x e y, e o `//` significa o quociente arredondado para baixo de x e y; veja também
[StackOverflow](https://stackoverflow.com/a/183870/13192320)

### Mais-igual

```python
counter = 0
counter += 10           # => 10
counter = 0
counter = counter + 10  # => 10

message = "Part 1."

# => Part 1.Part 2.
message += "Part 2."
```

### f-Strings (Python 3.6+)

```python
>>> website = 'cheatsheets.zip'
>>> f"Hello, {website}"
"Hello, cheatsheets.zip"

>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'
```

Veja: [F-Strings do Python](#python-f-strings-since-python-3-6)

## Tipos de dados embutidos do Python

### Strings

```python
hello = "Hello World"
hello = 'Hello World'

multi_string = """Multiline Strings
Lorem ipsum dolor sit amet,
consectetur adipiscing elit """
```

Veja: [Strings](#python-strings)

### Números

```python
x = 1    # int
y = 2.8  # float
z = 1j   # complex

>>> print(type(x))
<class 'int'>
```

### Booleanos

```python
my_bool = True
my_bool = False

bool(0)     # => False
bool(1)     # => True
```

### Listas

```python
list1 = ["apple", "banana", "cherry"]
list2 = [True, False, False]
list3 = [1, 5, 7, 9, 3]
list4 = list((1, 5, 7, 9, 3))
```

Veja: [Listas](#python-lists)

### Tuplas

```python
my_tuple = (1, 2, 3)
my_tuple = tuple((1, 2, 3))

tupla = (1, 2, 3, 'python')

print(tupla[0])       # Output: 1
print(tupla.count(1)) # Count occurrences
print(tupla.index(2)) # Find index

tupla1 = (1, 2, 3)
tupla2 = ('a', 'b')

len(tuple) → Returns the number of elements.
in → Checks if an element exists in the tuple.
Concatenation (+) → Combines two tuples.
Repetition (*) → Repeats a tuple.
Slicing (tuple[start:end]) → Extracts a subtuple.

print(len(tupla1))       # Output: 3
print(2 in tupla1)       # Output: True
print(tupla1 + tupla2)   # Output: (1, 2, 3, 'a', 'b')
print(tupla1[1:])        # Output: (2, 3)

# unpacking
a, b, c, d = tupla   # Each value goes into a variable

```

Semelhante a uma lista, mas imutável

### Set

```python
set1 = {"a", "b", "c"}
set2 = set(("a", "b", "c"))
```

Conjunto de itens/objetos únicos

### Dicionário

```python {.wrap}
>>> empty_dict = {}
>>> a = {"one": 1, "two": 2, "three": 3}
>>> a["one"]
1
>>> a.keys()
dict_keys(['one', 'two', 'three'])
>>> a.values()
dict_values([1, 2, 3])
>>> a.update({"four": 4})
>>> a.keys()
dict_keys(['one', 'two', 'three', 'four'])
>>> a['four']
4
```

Par chave: valor, objeto semelhante a JSON

### Casting

#### Inteiros

```python
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3
```

#### Ponto flutuante

```python
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2
```

#### Strings

```python
x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'
```

## Tipos de dados avançados do Python

### Heaps {.col-span-2 .row-span-3}

```python
import heapq

myList = [9, 5, 4, 1, 3, 2]
heapq.heapify(myList) # turn myList into a Min Heap
print(myList)    # => [1, 3, 2, 5, 9, 4]
print(myList[0]) # first value is always the smallest in the heap

heapq.heappush(myList, 10) # insert 10
x = heapq.heappop(myList)  # pop and return smallest item
print(x)                   # => 1
```

#### Negue todos os valores para usar um Min Heap como Max Heap

```python
myList = [9, 5, 4, 1, 3, 2]
myList = [-val for val in myList] # multiply by -1 to negate
heapq.heapify(myList)

x = heapq.heappop(myList)
print(-x) # => 9 (making sure to multiply by -1 again)
```

Heaps são árvores binárias nas quais todo nó pai tem um valor menor ou igual ao de qualquer um dos filhos. São úteis para
acessar rapidamente o valor mínimo/máximo. Complexidade de tempo: O(n) para heapify, O(log n) para push e pop. Veja:
[Heapq](https://docs.python.org/3/library/heapq.html)

### Pilhas e filas {.row-span-3}

```python
from collections import deque

q = deque()          # empty
q = deque([1, 2, 3]) # with values

q.append(4)     # append to right side
q.appendleft(0) # append to left side
print(q)    # => deque([0, 1, 2, 3, 4])

x = q.pop() # remove & return from right
y = q.popleft() # remove & return from left
print(x)    # => 4
print(y)    # => 0
print(q)    # => deque([1, 2, 3])

q.rotate(1) # rotate 1 step to the right
print(q)    # => deque([3, 1, 2])
```

Deque é uma fila de duas extremidades com tempo O(1) para operações append/pop em ambos os lados. Usado como pilhas e filas. Veja:
[Deque](https://docs.python.org/3/library/collections.html#collections.deque)

## Strings do Python

### Semelhante a array

```python
>>> hello = "Hello, World"
>>> print(hello[1])
e
>>> print(hello[-1])
d
```

Obtém o caractere na posição 1 ou o último

### Iteração

```python
>>> for char in "foo":
...     print(char)
f
o
o
```

Percorre as letras da palavra "foo"

### Fatiamento de string {.row-span-4}

```java
 ┌───┬───┬───┬───┬───┬───┬───┐
 | m | y | b | a | c | o | n |
 └───┴───┴───┴───┴───┴───┴───┘
 0   1   2   3   4   5   6   7
-7  -6  -5  -4  -3  -2  -1
```

---

```python
>>> s = 'mybacon'
>>> s[2:5]
'bac'
>>> s[0:2]
'my'
```

```python
>>> s = 'mybacon'
>>> s[:2]
'my'
>>> s[2:]
'bacon'
>>> s[:2] + s[2:]
'mybacon'
>>> s[:]
'mybacon'
```

```python
>>> s = 'mybacon'
>>> s[-5:-1]
'baco'
>>> s[2:6]
'baco'
```

#### Com passo

```python
>>> s = '12345' * 5
>>> s
'1234512345123451234512345'
>>> s[::5]
'11111'
>>> s[4::5]
'55555'
>>> s[::-5]
'55555'
>>> s[::-1]
'5432154321543215432154321'
```

### Comprimento da string

```python
>>> hello = "Hello, World!"
>>> print(len(hello))
13
```

A função len() retorna o comprimento de uma string

### Múltiplas cópias

```python
>>> s = '===+'
>>> n = 8
>>> s * n
'===+===+===+===+===+===+===+===+'
```

### Verificar string

```python
>>> s = 'spam'
>>> s in 'I saw spamalot!'
True
>>> s not in 'I saw The Holy Grail!'
True

```

### Concatenação

```python
>>> s = 'spam'
>>> t = 'egg'
>>> s + t
'spamegg'
>>> 'spam' 'egg'
'spamegg'
```

### Formatação {.col-span-2}

```python
name = "John"
print("Hello, %s!" % name)
```

```python
name = "John"
age = 23
print("%s is %d years old." % (name, age))
```

#### Método format()

```python
txt1 = "My name is {fname}, I'm {age}".format(fname="John", age=36)
txt2 = "My name is {0}, I'm {1}".format("John", 36)
txt3 = "My name is {}, I'm {}".format("John", 36)
```

### Entrada

```python
>>> name = input("Enter your name: ")
Enter your name: Tom
>>> name
'Tom'
```

Obtém dados de entrada do console

### Join

```python
>>> "#".join(["John", "Peter", "Vicky"])
'John#Peter#Vicky'
```

### Endswith

```python
>>> "Hello, world!".endswith("!")
True
```

## F-Strings do Python (desde Python 3.6+)

### Uso de f-Strings

```python
>>> website = 'cheatsheets.zip'
>>> f"Hello, {website}"
"Hello, cheatsheets.zip"

>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'

>>> f"""He said {"I'm John"}"""
"He said I'm John"

>>> f'5 {"{stars}"}'
'5 {stars}'
>>> f'{{5}} {"stars"}'
'{5} stars'

>>> name = 'Eric'
>>> age = 27
>>> f"""Hello!
...     I'm {name}.
...     I'm {age}."""
"Hello!\n    I'm Eric.\n    I'm 27."
```

está disponível desde o Python 3.6; veja também:
[Formatted string literals](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

### Alinhamento e preenchimento em f-Strings

```python
>>> f'{"text":10}'     # [width]
'text      '
>>> f'{"test":*>10}'   # fill left
'******test'
>>> f'{"test":*<10}'   # fill right
'test******'
>>> f'{"test":*^10}'   # fill center
'***test***'
>>> f'{12345:0>10}'    # fill with numbers
'0000012345'
```

### Tipos em f-Strings

```python
>>> f'{10:b}'        # binary type
'1010'
>>> f'{10:o}'        # octal type
'12'
>>> f'{200:x}'       # hexadecimal type
'c8'
>>> f'{200:X}'
'C8'
>>> f'{345600000000:e}' # scientific notation
'3.456000e+11'
>>> f'{65:c}'       # character type
'A'
>>> f'{10:#b}'      # [type] with notation (base)
'0b1010'
>>> f'{10:#o}'
'0o12'
>>> f'{10:#x}'
'0xa'
```

### Outros recursos de F-Strings

```python
>>> f'{-12345:0=10}'  # negative numbers
'-000012345'
>>> f'{12345:010}'    # [0] shortcut (no align)
'0000012345'
>>> f'{-12345:010}'
'-000012345'
>>> import math       # [.precision]
>>> math.pi
3.141592653589793
>>> f'{math.pi:.2f}'
'3.14'
>>> f'{1000000:,.2f}' # [grouping_option]
'1,000,000.00'
>>> f'{1000000:_.2f}'
'1_000_000.00'
>>> f'{0.25:0%}'      # percentage
'25.000000%'
>>> f'{0.25:.0%}'
'25%'
```

### Sinal em F-Strings

```python
>>> f'{12345:+}'      # [sign] (+/-)
'+12345'
>>> f'{-12345:+}'
'-12345'
>>> f'{-12345:+10}'
'    -12345'
>>> f'{-12345:+010}'
'-000012345'
```

## Listas do Python

### Definição

```python
>>> li1 = []
>>> li1
[]
>>> li2 = [4, 5, 6]
>>> li2
[4, 5, 6]
>>> li3 = list((1, 2, 3))
>>> li3
[1, 2, 3]
>>> li4 = list(range(1, 11))
>>> li4
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Geração {.col-span-2}

```python
>>> list(filter(lambda x : x % 2 == 1, range(1, 20)))
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

>>> [x ** 2 for x in range (1, 11) if  x % 2 == 1]
[1, 9, 25, 49, 81]

>>> [x for x in [3, 4, 5, 6, 7] if x > 5]
[6, 7]

>>> list(filter(lambda x: x > 5, [3, 4, 5, 6, 7]))
[6, 7]
```

### Append

```python
>>> li = []
>>> li.append(1)
>>> li
[1]
>>> li.append(2)
>>> li
[1, 2]
>>> li.append(4)
>>> li
[1, 2, 4]
>>> li.append(3)
>>> li
[1, 2, 4, 3]
```

### Fatiamento de listas {.col-span-2 .row-span-3}

Sintaxe do fatiamento de listas:

```python
a_list[start:end]
a_list[start:end:step]
```

#### Fatiamento

```python
>>> a = ['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[2:5]
['bacon', 'tomato', 'ham']
>>> a[-5:-2]
['egg', 'bacon', 'tomato']
>>> a[1:4]
['egg', 'bacon', 'tomato']
```

#### Omissão de índice

```python
>>> a[:4]
['spam', 'egg', 'bacon', 'tomato']
>>> a[0:4]
['spam', 'egg', 'bacon', 'tomato']
>>> a[2:]
['bacon', 'tomato', 'ham', 'lobster']
>>> a[2:len(a)]
['bacon', 'tomato', 'ham', 'lobster']
>>> a
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[:]
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
```

#### Com passo

```python
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[0:6:2]
['spam', 'bacon', 'ham']
>>> a[1:6:2]
['egg', 'tomato', 'lobster']
>>> a[6:0:-2]
['lobster', 'tomato', 'egg']
>>> a
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[::-1]
['lobster', 'ham', 'tomato', 'bacon', 'egg', 'spam']
```

### Remove

```python
>>> li = ['bread', 'butter', 'milk']
>>> li.pop()
'milk'
>>> li
['bread', 'butter']
>>> del li[0]
>>> li
['butter']
```

### Acesso

```python
>>> li = ['a', 'b', 'c', 'd']
>>> li[0]
'a'
>>> li[-1]
'd'
>>> li[4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

### Concatenação {.row-span-2}

```python
>>> odd = [1, 3, 5]
>>> odd.extend([9, 11, 13])
>>> odd
[1, 3, 5, 9, 11, 13]
>>> odd = [1, 3, 5]
>>> odd + [9, 11, 13]
[1, 3, 5, 9, 11, 13]
```

### Ordenação e inversão {.row-span-2}

```python
>>> li = [3, 1, 3, 2, 5]
>>> li.sort()
>>> li
[1, 2, 3, 3, 5]
>>> li.reverse()
>>> li
[5, 3, 3, 2, 1]
```

### Count

```python
>>> li = [3, 1, 3, 2, 5]
>>> li.count(3)
2
```

### Repetição

```python
>>> li = ["re"] * 3
>>> li
['re', 're', 're']
```

## Controle de fluxo do Python

### Básico

```python
num = 5
if num > 10:
    print("num is totally bigger than 10.")
elif num < 10:
    print("num is smaller than 10.")
else:
    print("num is indeed 10.")
```

### Uma linha (operador ternário)

```python
>>> a = 330
>>> b = 200
>>> r = "a" if a > b else "b"
>>> print(r)
a
```

### else if

```python
value = True
if not value:
    print("Value is False")
elif value is None:
    print("Value is None")
else:
    print("Value is True")
```

### match case

```python
x = 1
match x:
  case 0:
    print("zero")
  case 1:
    print("one")
  case _:
    print("multiple")
```

## Laços do Python

### Básico

```python
primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)
```

Imprime: 2 3 5 7

### Com índice

```python
animals = ["dog", "cat", "mouse"]
# enumerate() adds counter to an iterable
for i, value in enumerate(animals):
    print(i, value)
```

Imprime: 0 dog 1 cat 2 mouse

### While

```python
x = 0
while x < 4:
    print(x)
    x += 1  # Shorthand for x = x + 1
```

Imprime: 0 1 2 3

### Break

```python
x = 0
for index in range(10):
    x = index * 10
    if index == 5:
    	break
    print(x)
```

Imprime: 0 10 20 30 40

### Continue

```python
for index in range(3, 8):
    x = index * 10
    if index == 5:
    	continue
    print(x)
```

Imprime: 30 40 60 70

### Range

```python
for i in range(4):
    print(i) # Prints: 0 1 2 3

for i in range(4, 8):
    print(i) # Prints: 4 5 6 7

for i in range(4, 10, 2):
    print(i) # Prints: 4 6 8
```

### Com zip()

```python
words = ['Mon', 'Tue', 'Wed']
nums = [1, 2, 3]
# Use zip to pack into a tuple list
for w, n in zip(words, nums):
    print('%d:%s, ' %(n, w))
```

Imprime: 1:Mon, 2:Tue, 3:Wed,

### for/else

```python
nums = [60, 70, 30, 110, 90]
for n in nums:
    if n > 100:
        print("%d is bigger than 100" %n)
        break
else:
    print("Not found!")
```

Veja também: [Python Tips](https://book.pythontips.com/en/latest/for_-_else.html)

### Iterando sobre dicionário

```python
johndict = {
  "firstname": "John",
  "lastname": "Doe",
  "age": 30
  }

x = johndict.items()
print(x)

# Output: dict_items([('firstname', 'John'),
#                     ('lastname', 'Doe'),
#                     ('age', 30)])

for key, value in johndict.items():
	print(f"{key} : : {value}")

# Output: firstname : : John
# Output: lastname : : Doe
# Output: age : : 30
```

## Compreensões do Python

### Compreensão de lista {.col-span-2}

```python
languages = ["html", "go", "rust", "javascript", "python"]

newlist = [x for x in languages if "l" not in x]
# add language for language in languages if "l" not in language

print(newlist) #Output : [ 'go', 'rust', 'javascript', 'python']

# List comprehension avoid this :
oldlist = []
for x in languages:
    if  "l" not in x:
        oldlist.append(x)
print(oldlist) #Output :  [ 'go', 'rust', 'javascript', 'python']


```

### Compreensão de dicionário {.col-span-2}

```python
languages = ["html", "go", "rust", "javascript", "python"]

language_dict = {lang: ('l' not in lang) for lang in languages}
# Key is the language & bool is Value (no offense for html..)

print(language_dict)
# Output: {'html': False, 'go': True, 'rust': True,
#          'javascript': True, 'python': True}


# Dictionary comprehension avoid this :

language_dict2 = {}

for e in languages:
    if "l" not in e:
        language_dict2[e] = True
    else:
        language_dict2[e] = False

print(language_dict2)
# Output: {'html': False, 'go': True, 'rust': True,
#          'javascript': True, 'python': True}
```

## Funções do Python

### Básico

```python
def hello_world():
    print('Hello, World!')
```

### Retorno

```python
def add(x, y):
    print("x is %s, y is %s" %(x, y))
    return x + y

add(5, 6)    # => 11
```

### Argumentos posicionais

```python
def varargs(*args):
    return args

varargs(1, 2, 3)  # => (1, 2, 3)
```

O tipo de "args" é tupla.

### Argumentos nomeados

```python
def keyword_args(**kwargs):
    return kwargs

# => {"big": "foot", "loch": "ness"}
keyword_args(big="foot", loch="ness")
```

O tipo de "kwargs" é dict.

### Retorno múltiplo

```python
def swap(x, y):
    return y, x

x = 1
y = 2
x, y = swap(x, y)  # => x = 2, y = 1
```

### Valor padrão

```python
def add(x, y=10):
    return x + y

add(5)      # => 15
add(5, 20)  # => 25
```

### Funções anônimas

```python
# => True
(lambda x: x > 2)(3)

# => 5
(lambda x, y: x ** 2 + y ** 2)(2, 1)
```

### @decorator {.col-span-2}

```python
# Modify or extend behavior of function or class method,
# without changing their actual code.

# Define decorator that will wrap function or method
def handle_errors(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            return print(f"Error :  {e}")
    return wrapper

# Decorate function or method
@handle_errors
def divide(a, b):
    return a / b

divide(10, 0) # Output : Error : division by zero
```

## Módulos do Python

### Importar módulos

```python
import math
print(math.sqrt(16))  # => 4.0
```

### De um módulo

```python
from math import ceil, floor
print(ceil(3.7))   # => 4.0
print(floor(3.7))  # => 3.0
```

### Importar tudo

```python
from math import *
```

### Abreviar módulo

```python
import math as m

# => True
math.sqrt(16) == m.sqrt(16)
```

### Funções e atributos

```python
import math
dir(math)
```

## Manipulação de arquivos do Python

### Ler arquivo

#### Linha por linha

```python
with open("myfile.txt") as file:
    for line in file:
        print(line)
```

#### Com número da linha

```python
file = open('myfile.txt', 'r')
for i, line in enumerate(file, start=1):
    print("Number %s: %s" % (i, line))
```

### String

#### Escrever uma string

```python
contents = {"aa": 12, "bb": 21}
with open("myfile1.txt", "w+") as file:
    file.write(str(contents))
```

#### Ler uma string

```python
with open('myfile1.txt', "r+") as file:
    contents = file.read()
print(contents)
```

### Objeto

#### Escrever um objeto

```python
contents = {"aa": 12, "bb": 21}
with open("myfile2.txt", "w+") as file:
    file.write(json.dumps(contents))
```

#### Ler um objeto

```python
with open('myfile2.txt', "r+") as file:
    contents = json.load(file)
print(contents)
```

### Excluir um arquivo

```python
import os
os.remove("myfile.txt")
```

### Verificar e excluir

```python
import os
if os.path.exists("myfile.txt"):
    os.remove("myfile.txt")
else:
    print("The file does not exist")
```

### Excluir pasta

```python
import os
os.rmdir("myfolder")
```

## Classes e herança do Python

### Definição

```python
class MyNewClass:
    pass

# Class Instantiation
my = MyNewClass()
```

### Construtores

```python
class Animal:
    def __init__(self, voice):
        self.voice = voice

cat = Animal('Meow')
print(cat.voice)    # => Meow

dog = Animal('Woof')
print(dog.voice)    # => Woof
```

### Método

```python
class Dog:

    # Method of the class
    def bark(self):
        print("Ham-Ham")

charlie = Dog()
charlie.bark()   # => "Ham-Ham"
```

### Variáveis de classe {.row-span-2}

```python
class MyClass:
    class_variable = "A class variable!"

# => A class variable!
print(MyClass.class_variable)

x = MyClass()

# => A class variable!
print(x.class_variable)
```

### Função Super() {.row-span-2}

```python
class ParentClass:
    def print_test(self):
        print("Parent Method")

class ChildClass(ParentClass):
    def print_test(self):
        print("Child Method")
        # Calls the parent's print_test()
        super().print_test()
```

---

```python
>>> child_instance = ChildClass()
>>> child_instance.print_test()
Child Method
Parent Method
```

### Método repr()

```python
class Employee:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name

john = Employee('John')
print(john)  # => John
```

### Exceções personalizadas

```python
class CustomError(Exception):
    pass
```

### Polimorfismo

```python
class ParentClass:
    def print_self(self):
        print('A')

class ChildClass(ParentClass):
    def print_self(self):
        print('B')

obj_A = ParentClass()
obj_B = ChildClass()

obj_A.print_self() # => A
obj_B.print_self() # => B
```

### Sobrescrita

```python
class ParentClass:
    def print_self(self):
        print("Parent")

class ChildClass(ParentClass):
    def print_self(self):
        print("Child")

child_instance = ChildClass()
child_instance.print_self() # => Child
```

### Herança

```python
class Animal:
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs

class Dog(Animal):
    def sound(self):
        print("Woof!")

Yoki = Dog("Yoki", 4)
print(Yoki.name) # => YOKI
print(Yoki.legs) # => 4
Yoki.sound()     # => Woof!
```

### @staticmethod {.col-span-2}

```python
class MyClass:
    @staticmethod
    def greet(name):
        return f"Hello, {name}!"

# No instantiation nedded

# Call via class
print(MyClass.greet("Alice"))  # => Hello, Alice!

# Can still call via instance
obj = MyClass()
print(obj.greet("Bob"))        # => Hello, Bob!
```

## Type hints do Python (desde Python 3.5)

### Variável e parâmetro

```python
string: str = "ha"
times: int = 3


# wrong hit, but run correctly
result: str = 1 + 2
print(result)  # => 3


def say(name: str, start: str = "Hi"):
    return start + ", " + name

print(say("Python"))  # => Hi, Python
```

### Tipo de data embutido

```python
from typing import Dict, Tuple, List

bill: Dict[str, float] = {
    "apple": 3.14,
    "watermelon": 15.92,
    "pineapple": 6.53,
}
completed: Tuple[str] = ("DONE",)
succeeded: Tuple[int, str] = (1, "SUCCESS")
statuses: Tuple[str, ...] = (
    "DONE", "SUCCESS", "FAILED", "ERROR",
)
codes: List[int] = (0, 1, -1, -2)
```

### Tipo de data embutido (3.10+)

```python
bill: dict[str, float] = {
    "apple": 3.14,
    "watermelon": 15.92,
    "pineapple": 6.53,
}
completed: tuple[str] = ("DONE",)
succeeded: tuple[int, str] = (1, "SUCCESS")
statuses: tuple[str, ...] = (
    "DONE", "SUCCESS", "FAILED", "ERROR",
)
codes: list[int] = (0, 1, -1, -2)
```

### Argumento posicional

```python
def calc_summary(*args: int):
    return sum(args)

print(calc_summary(3, 1, 4))  # => 8
```

Indica que o tipo de todos os argumentos é int.

### Retorno

```python
def say_hello(name) -> str:
    return "Hello, " + name

var = "Python"
print(say_hello(var))  # => Hello, Python
```

### Retorno Union

```python
from typing import Union

def resp200(meaningful) -> Union[int, str]:
    return "OK" if meaningful else 200
```

Significa que o tipo do valor retornado pode ser int ou str.

### Argumento nomeado

```python
def calc_summary(**kwargs: int):
    return sum(kwargs.values())

print(calc_summary(a=1, b=2))  # => 3
```

Indica que o tipo do valor de todos os parâmetros é int.

### Retornos múltiplos

```python
def resp200() -> (int, str):
    return 200, "OK"

returns = resp200()
print(returns)  # => (200, 'OK')
print(type(returns))  # tuple
```

### Retorno Union (3.10+)

```python
def resp200(meaningful) -> int | str:
    return "OK" if meaningful else 200
```

Desde o Python 3.10

### Propriedade

```python
class Employee:
    name: str
    age: int

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.graduated: bool = False
```

### Instância própria (Self)

```python
class Employee:
    name: str

    def set_name(self, name) -> "Employee":
        self.name = name
        return self

    def copy(self) -> 'Employee':
        return type(self)(self.name)
```

### Instância própria (Self) (3.11+)

```python
from typing import Self

class Employee:
    name: str
    age: int

    def set_name(self: Self, name) -> Self:
        self.name = name
        return self
```

### Tipo e genérico {.col-span-2}

```python
from typing import TypeVar, Type

T = TypeVar("T")

# "mapper" is a type, like int, str, MyClass and so on.
# "default" is an instance of type T, such as 314, "string", MyClass() and so on.
# returned is an instance of type T too.
def converter(raw, mapper: Type[T], default: T) -> T:
    try:
        return mapper(raw)
    except:
        return default

raw: str = input("Enter an integer: ")
result: int = converter(raw, mapper=int, default=0)
```

### Função {.col-span-2}

```python
from typing import TypeVar, Callable, Any

T = TypeVar("T")

def converter(raw, mapper: Callable[[Any], T], default: T) -> T:
    try:
        return mapper(raw)
    except:
        return default

# Callable[[Any], ReturnType] means a function declare like:
# def func(arg: Any) -> ReturnType:
#     pass

# Callable[[str, int], ReturnType] means a function declare like:
# def func(string: str, times: int) -> ReturnType:
#     pass

# Callable[..., ReturnType] means a function declare like:
# def func(*args, **kwargs) -> ReturnType:
#     pass

def is_success(value) -> bool:
    return value in (0, "OK", True, "success")

resp = dict(code=0, message="OK", data=[])
successed: bool = converter(resp["message"], mapper=is_success, default=False)
```

## Operadores do Python

### Walrus (operador morsa) {.col-span-2}

```python
values = [1, "text", True, "", 2]
i = 0

# It assigns a value to a variable and compares it in a boolean expression
while (data := values[i]):

    print(data, end=",")
    i = i + 1

# Expected result: 1, "text", True
```

## Manipulação de data e hora

### Data e hora atuais

```python
import datetime

now = datetime.datetime.now()
print(now)  # e.g., 2024-04-27 14:35:22.123456
```

### Criando objetos de data/hora específicos

```python
import datetime

# Create a date object
d = datetime.date(2024, 4, 27)
print(d)  # 2024-04-27

# Create a time object
t = datetime.time(15, 30, 45)
print(t)  # 15:30:45

# Create a datetime object
dt = datetime.datetime(2024, 4, 27, 15, 30, 45)
print(dt)  # 2024-04-27 15:30:45
```

### Conversão entre formatos de data

```python
import datetime

# Convert a string to a datetime object
date_str = "2024-04-27 14:00"
dt_obj = datetime.datetime.strptime(date_str, "%Y-%m-%d %H:%M")
print(dt_obj)  # 2024-04-27 14:00:00

# Convert a datetime object to a string
formatted_str = dt_obj.strftime("%d/%m/%Y %H:%M")
print(formatted_str)  # 27/04/2024 14:00
```

### Timestamps e horário Unix

```python
import datetime

# Get current timestamp
timestamp = datetime.datetime.now().timestamp()
print(timestamp)  # e.g., 1714188922.123456

# Convert timestamp back to datetime
dt_from_timestamp = datetime.datetime.fromtimestamp(timestamp)
print(dt_from_timestamp)
```

### Diferença entre datas e timedelta {.col-span-2}

```python
import datetime

date1 = datetime.date(2024, 4, 27)
date2 = datetime.date(2024, 5, 1)

delta = date2 - date1
print(delta.days)  # 4

# Using timedelta for date arithmetic
new_date = date1 + datetime.timedelta(days=10)
print(new_date)  # 2024-05-07
```

## Diversos

### Comentários

```python
# This is a single line comments.
```

```python
""" Multiline strings can be written
    using three "s, and are often used
    as documentation.
"""
```

```python
''' Multiline strings can be written
    using three 's, and are often used
    as documentation.
'''
```

### Geradores

```python
def double_numbers(iterable):
    for i in iterable:
        yield i + i
```

Geradores ajudam a criar código lazy.

### Gerador para lista

```python
values = (-x for x in [1,2,3,4,5])
gen_to_list = list(values)

# => [-1, -2, -3, -4, -5]
print(gen_to_list)
```

### Tratamento de exceções {.col-span-3}

```python
try:
    # Use "raise" to raise an error
    raise IndexError("This is an index error")
except IndexError as e:
    pass                 # Pass is just a no-op. Usually you would do recovery here.
except (TypeError, NameError):
    pass                 # Multiple exceptions can be handled together, if required.
else:                    # Optional clause to the try/except block. Must follow all except blocks
    print("All good!")   # Runs only if the code in try raises no exceptions
finally:                 # Execute under all circumstances
    print("We can clean up resources here")
```

### Padrão Dispatcher {.col-span-3}

```python
# Dispatcher allows dynamic selection and execution of functions based on user input or other runtime conditions

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return 'Error: Division by zero'
    return x / y

# Dispatcher dictionary: maps operation names to their corresponding functions
operations = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'divide': divide
}

# Function to dispatch operation based on operation name
# Common use cases include executing different functions dynamically, such as in calculators, command interpreters, or event handling
def dispatcher(operation_name, x, y):
    func = operations.get(operation_name)
    if func:
        return func(x, y)
    else:
        return f"Unknown operation: {operation_name}"

# Usage examples
print(dispatcher('add', 5, 3))        # Output: 8
print(dispatcher('multiply', 4, 2))   # Output: 8
print(dispatcher('divide', 10, 0))    # Output: Error: Division by zero
print(dispatcher('mod', 10, 3))       # Output: Unknown operation: mod
```
