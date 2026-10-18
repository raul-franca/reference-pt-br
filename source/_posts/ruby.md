---
title: Ruby
date: 2024-04-25 09:50:25
background: bg-red-500
tags:
  - script
  - interpret
categories:
  - Programação
intro: |
  O cheat sheet de [Ruby](https://www.ruby-lang.org/) é uma folha de referência de uma página para a linguagem de programação Ruby.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Instalar

```bash
# Debian, Ubuntu
$ sudo apt-get install ruby-full
# Windows
$ winget install RubyInstallerTeam.Ruby
$ brew install ruby # macOS
$ docker run -it --rm ruby:latest # Docker
```

### O que é Gemfile e Gemfile.lock {.row-span-2}

- O [Gemfile](https://bundler.io/v2.3/man/gemfile.5.html) é o arquivo de configuração do Bundler (também gem) que contém a
  lista de gems (dependências) do projeto

```ruby
# Specify gem in the Gemfile in the project root directory
ruby '3.1.2'

source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~>3.0.10'
gem 'rspec', :require => 'spec'
```

Instale todas as gems do Gemfile

```bash
$ bundle install
```

Resolva o problema de inconsistência do Gemfile.lock entre mac no desenvolvimento e linux em produção

```bash
bundle lock --add-platform x86_64-linux
```

### Instalar uma versão específica de um gem específico do Ruby

```bash
$ gem install bundler -v 2.4.20
$ gem install minitest -v 5.22.3
```

### Atualizar gems usando o Bundler

```bash
# Updating a single gem using Bundler
$ bundle update nokogiri
# Use Bundler to update each gem in the Gemfile
$ bundle update
```

### Comentários {.row-span-1}

```ruby
# This is a single line comments.
=begin
Multi-line
Comment
=end
puts "Hello world!"  # Inline comments for code
```

### Palavras reservadas {.col-span-1}

| Palavras reservadas | Descrição |
| :------------------ | :--------- |
| `__ENCODING__` | A codificação do script do arquivo atual |
| `__LINE__`     | O número da linha desta palavra-chave no arquivo atual |
| `__FILE__`     | O caminho do arquivo atual |
| `BEGIN`        | O código entre { } é executado antes da execução do programa |
| `END`          | O código entre { } é executado ao final do programa |
| `alias`        | Cria um alias para um método, operador ou variável global existente |
| `and`          | Operador lógico AND |
| `begin`        | Inicia um bloco de código |
| `break`        | Encerra um loop |
| `case`         | Compara uma expressão com cláusulas `when` correspondentes, terminando com <br/> `end` |
| `class`        | Define uma classe |
| `def`          | Define uma função/método |
| `defined?`     | Verifica se uma variável ou função existe |
| `do`           | Inicia um bloco de código, terminado pela palavra-chave <br/> `end` |
| `else`         | Executa o código a seguir se as condições anteriores não forem atendidas |
| `elsif`        | Condição alternativa para expressões if |
| `end`          | Encerra blocos de código iniciados por palavras-chave como `begin`, `class`,`def`,`do`,`if`, etc. |
| `ensure`       | Sempre executa ao final de um bloco |
| `false`        | Valor booleano lógico falso |
| `for`          | Inicia um loop `for` |
| `if`           | Executa o bloco de código `if` a condição for `true` |
| `in`           | Usado com o loop `for` |
| `module`       | Define um módulo |
| `next`         | Salta para o ponto anterior à avaliação da condição do loop |
| `nil`          | Representa nulo, inválido ou sempre falso |
| `not`          | Operador lógico NOT |
| `or`           | Operador lógico OR |
| `redo`         | Volta para a avaliação da condição do loop |
| `rescue`       | Avalia expressões depois que uma exceção é lançada |
| `retry`        | Repete chamadas de método quando chamado fora de `rescue`; salta para o topo do bloco quando chamado dentro de `rescue` |
| `return`       | Retorna um valor de um método ou bloco |
| `self`         | Refere-se ao objeto atual |
| `super`        | Chama o método de mesmo nome na superclasse |
| `then`         | Usado como separador com`if`,`unless`,`when`,`case`,`rescue` |
| `true`         | Valor booleano lógico verdadeiro |
| `undef`        | Remove a definição de métodos/funções na classe atual |
| `until`        | Executa o bloco de código até que a condição seja falsa |
| `when`         | Inicia uma cláusula dentro de uma instrução `case` |
| `while`        | Executa o bloco de código enquanto a condição for verdadeira |
| `yield`        | Executa o bloco de código passado para um método |

### Operadores {.row-span-7}

#### Operadores lógicos

- `and`
- `or`
- `not`
- `&&`
- `||`
- `!`

#### Operadores bit a bit

- `&`
- `|`
- `^`
- `~`
- `<<`
- `>>`

#### Operadores aritméticos

- `+`
- `-`
- `*`
- `/`
- `%`
- `**`

#### Operadores de comparação

- `==`
- `!=`
- `>`
- `<`
- `>=`
- `<=`
- `<=>`
- `===`
- `eql?`
- `equal?`

#### Exemplos de operadores

```bash
# Addition
1 + 1   #=> 2
# Subtraction
2 - 1   #=> 1
# Multiplication
2 * 2   #=> 4
# Division
10 / 5  #=> 2
17 / 5    #=> 3, not 3.4
17 / 5.0  #=> 3.4
# Exponentiation
2 ** 2  #=> 4
3 ** 4  #=> 81
# Modulus (remainder of division)
8 % 2   #=> 0  (8 / 2 = 4; no remainder)
10 % 4  #=> 2  (10 / 4 = 2 remainder 2)
a = 10
b = 20
a == b #=> false
a != b #=> true
a > b #=> false
a < b #=> true
a >= b #=> false
a <= b #=> true

# Comparison operators
a <=> b #=> -1
c = 20
c <=> b #=> 0
c <=> a  #=> 1
# Equality used in when clauses for case statements
(1...10) === 5 #=> true
# True if the receiver and the argument have the same type and equal values
1.eql?(1.0) #=> false
c = a + b  #=> 30
c += a #=> 40
c -= a #=> 30
c *= a #=> 300
c /= a #=> 30
c %= a #=> 3
c **= a #=> 59049

# Ruby parallel assignment
a = 10
b = 20
c = 30
a, b, c = 10, 20, 30
# Ruby bitwise operators
a = 60
b = 13
# & Binary AND operator copies a bit to the result if it exists in both operands.
a & b #=> 12
# | Binary OR operator copies a bit if it exists in either operand.
a | b #=> 61
# ^ Binary XOR operator copies a bit if it is set in one operand but not both.
a ^ b #=> 49
# ~ Binary Ones Complement is unary and has the effect of 'flipping' bits.
~a
# << Binary Left Shift Operator. The left operand's value is moved
# left by the number of bits specified by the right operand.
a << 2
# >> Binary Right Shift Operator. The left operand's value is moved
# right by the number of bits specified by the right operand.
a >> 2

# Ruby logical operators
a and b #=> true.
a or b #=> true.
a && b #=> true.
(a || b) #=> true.
!(a && b) #=> false.
not(a && b) #=> false.
# Ruby ternary operator
# ? :
# If condition is true ? Then value X : Otherwise value Y
a == 10 ? puts 'Right' : puts 'Wrong'
# Ruby range operators
# .. Creates a range from the start point to the end point (inclusive)
1..10 #=> Creates a range from 1 to 10 (inclusive of 1 and 10)
# ... Creates an exclusive range from the start point to the end point
1...10 #=> Creates an exclusive range from 1 to 10
```

### Tabela de precedência de operadores

Da maior para a menor precedência, esta é a tabela de precedência do Ruby. Operações de maior precedência acontecem antes
das de menor precedência.

- !, ~, unary +
- \*\*
- unary -
- \*, /, %
- +, -
- <<, >>
- &
- |, ^
- > , >=, <, <=
- <=>, ==, ===, !=, =~, !~
- &&
- ||
- .., ...
- ?, :
- modifier-rescue
- =, +=, -=, etc.
- defined?
- not
- or, and
- modifier-if, modifier-unless, modifier-while, modifier-until
- { } blocks

### Variáveis e escopo {.col-span-2}

| -              | -                     | -                             | -                                                                                                |
| -------------- | --------------------- | ----------------------------- | :----------------------------------------------------------------------------------------------- |
| Nome           | Escopo                | Exemplo                       | Explicação                                                                                       |
| `[a-z]` or `_` | Local                 | `count = 10` or `_count = 10` | Variáveis locais devem ser inicializadas                                                         |
| `@`            | Variável de instância | `@id = []`                    | Variáveis de instância têm valor "nil" antes da inicialização                                    |
| `@@`           | Variável de classe    | `@@name = []`                 | Variáveis de classe devem ser inicializadas                                                      |
| `$`            | Variável global       | `$version = "0.8.9"`          | Variáveis globais têm valor "nil" antes da inicialização                                         |
| `[A-Z]`        | Constante             | `PI = 3.14`                   | Variáveis constantes devem ser inicializadas; você pode alterar constantes, mas receberá um aviso |

Existem cinco tipos diferentes de variáveis. O primeiro caractere determina o escopo. Para se aprofundar no assunto,
consulte o [User Guide](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/) cap. 19, 20, 21, 22, 23
[Pre-Defined Variables and Constants](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/variable.html)

### Verificar o escopo de uma variável

```ruby
defined? count
"local-variable"
defined? @id
"instance-variable"
defined? @@name
"class variable"
defined? $version
"global-variable"
defined? PI
"constant"
```

### Tipos de dados {.col-span-2}

| -         | -                            | -                                                  | -                                                                                                               |
| :-------- | :--------------------------- | :------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| Tipo      | Exemplo                      | Classe                                             | Documentação                                                                                                    |
| `Integer` | a = 17                       | a.class > Integer <br>a.class.superclass > Numeric | [#](<(https://ruby-doc.org/3.3.1/Integer.html)>)                                                                |
| `Float`   | a = 87.23                    | a.class > Float <br>a.class.superclass > Numeric   | [#](https://ruby-doc.org/3.3.1/Float.html)                                                                      |
| `String`  | a = "Hello universe"         | a.class > String                                   | [#](https://ruby-doc.org/3.3.1/String.html)                                                                     |
| `Array`   | a = [12, 34]                 | a.class > Array                                    | [#](https://ruby-doc.org/3.3.1/Array.html)                                                                      |
| `Hash`    | a = {type: "tea", count: 10} | a.class > Hash                                     | [#](https://ruby-doc.org/3.3.1/Hash.html)                                                                       |
| `Boolean` | a = false<br>a = true        | a.class > FalseClass <br>a.class > TrueClass       | [TrueClass](https://ruby-doc.org/3.3.1/TrueClass.html) [FalseClass](https://ruby-doc.org/3.3.1/FalseClass.html) |
| `Symbol`  | a = :status                  | a.class > Symbol                                   | [#](https://ruby-doc.org/3.3.1/Symbol.html)                                                                     |
| `Range`   | a = 1..3                     | a.class > Range                                    | [#](https://ruby-doc.org/3.3.1/Range.html)                                                                      |
| `Nil`     | a = nil                      | a.class > NilClass                                 | [#](https://ruby-doc.org/3.3.1/NilClass.html)                                                                   |

[leitura adicional](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-ruby)

### Verificar o tipo de dado

```ruby
# Both are synonyms
a = 37
a.kind_of? Integer
# true
a.is_a? Integer
# true
```

### Symbol

```ruby
week_days = {sunday: 11, monday: 222}
```

### Métodos úteis de Integer

```ruby
2.even?
# true
3.even?
# false
```

### Range

`..` Usado para criar ranges inclusivos

```ruby
range = 1..10
range.to_a
# output => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

`...` Usado para criar ranges exclusivos

```ruby
range = 1...10
range.to_a
# output => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

alguns métodos úteis

| Nome do método | Saída                                 |
| :------------- | :------------------------------------ |
| `cover?`    | `(1..5).cover?(5)` => `true`          |
| `end`       | `('a'..'z').end` => `"z"`             |
| `first`     | `(1..5).first` => `1`                 |
| `first(3)`  | `('A'..'Z').first(2)` => `["A", "B"]` |
| `eql?`      | `((0..2).eql?(0..5)` => `false`       |

### Usando `step` em Range

```ruby
(1..20).step(2) { |number| puts "#{number}"}
# output
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 15
# 17
# 19
```

## Controle de fluxo em Ruby

### if

```ruby
num = 2
puts 'two' if num == 2
```

Se a condição for verdadeira, execute o código

### if elsif else

```ruby
temp = 19
if temp >= 25
  puts "hot"
elsif temp < 25 && temp >= 18
  puts "normal"
else
  puts "cold"
end
# output => normal
```

### unless

```ruby
# Unless contrary to if , evaluates when the statement is false
name = "rob"
# if name != "bob"
unless name == "bob"
  puts "hello stranger"
else
  puts "hello bob"
end
# output => hello stranger
num = 6
puts 'not two' unless num == 2
# output => not two
```

### case {.row-span-2}

```ruby
# case returns the value of the last expression executed
case input
# Check for an integer, 19
when 19
  puts "It's 19"
  # Check for an exact string，“Zaman”
when "Zaman"
  puts "Hi Zaman"
when 7..11
  puts "It's between 7 and 11"
  # Check multiple values, "coffee"
when "tea", "coffee"
  puts "Happy days"
end
```

### case (sintaxe curta)

```ruby
case input
  when 19 then puts "It's 19"
end
```

### case (falha opcional)

```ruby
case input
  when 19 then puts "It's 19"
else
  puts "It's not 19"
end
```

### case (obter valor de retorno)

```ruby
marks = 86
result = case marks
        when 0..49 then "Fail"
        when 50..64 then "Pass"
        when 65..74 then "Credit"
        when 75..84 then "Distinction"
        when 85..100 then "High Distinction"
        else "Invalid marks"
        end

puts result
# High Distinction
```

## String

### Interpolação de strings

```ruby
name = "World"
puts "Hello #{name}"
puts "The total is #{1+1}"
# "the total is 2"
```

A interpolação de strings permite combinar strings

### Extrair substring

```ruby
string = "abc123"
string[0,3]
# "abc"
string[3,3]
# "123"
string[0..-2]
# "abc12"
#remove or replace the substring
string[0..2] = ""
puts string
# "123"
```

Uma substring é uma parte pequena de uma string, útil quando você quer apenas essa parte específica, como o início,
o meio ou o fim

### Converter uma string para minúsculas ou maiúsculas

```ruby
"HELLO World".downcase  # "hello world"
"hello worlD".upcase    # "HELLO WORLD"
"hEllo wOrlD".capitalize # "Hello world"
"hEllo WOrlD".swapcase  # "HeLLO woRLd"
```

### Métodos úteis {.col-span-3}

| Nome da função                | Saída                                                                                                | Observação                                                                                                                                                                          |
| :----------------------------- | :---------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| length or size                 | `"HELLO World".length` => `11` <br> `"HELLO World".size` => `11`                                      | Retorna o comprimento da string                                                                                                                                                     |
| reverse                        | `"hello worlD".reverse` => `"Dlrow olleh"`                                                            | Retorna a string invertida                                                                                                                                                          |
| include? other_str             | `"hEllo wOrlD".include? "w"` => `true`                                                                | Retorna true se a string ou o caractere existir; caso contrário, retorna false                                                                                                      |
| gsub(pattern, replacement)     | `"hEllo wOrlD".gsub(" ", "_")` => `"hEllo_wOrlD"`                                                     | gsub ou substituição global substitui uma ou mais strings pela string fornecida                                                                                                     |
| gsub(pattern, hash)            | `"organization".gsub("z", 'z' => 's')` => `"organisation"`                                            | gsub ou substituição global substitui uma ou mais strings pelo hash fornecido                                                                                                       |
| gsub(pattern) {\|match\|block} | `"Price of the phone is 1000 AUD".gsub(/\d+/) {\| s\| '$'+s }`<br>`"Price of the phone is $1000 AUD"` | gsub ou substituição global substitui uma ou mais strings pelo bloco fornecido                                                                                                      |
| strip                          | `" hEllo WOrlD ".strip` <br> `"hEllo WOrlD"`                                                          | Remove (trim) caracteres no início e no fim: null ("\x00"), tabulação horizontal ("\t"), nova linha (\n), tabulação vertical ("\v"), form feed (f), retorno de carro (\r), espaço (" ") |
| prepend                        | `a = "world" <br> a.prepend("hello ")` <br> `"hello world"`                                           | Adiciona a string antes de outra string                                                                                                                                             |
| insert                         | `a = "hello" <br> a.insert(a.length, " world")` <br> `"hello world"`                                  | Insere a string em uma posição específica                                                                                                                                           |
| start_with?                    | `string = "ruby programming"` <br> `string.start_with? "ruby"` <br> `true`                            | Verifica se a string começa com um prefixo específico                                                                                                                               |
| end_with?                      | `string = "ruby programming"` <br> `string.end_with? "ruby"` <br> `false`                             | Verifica se a string termina com um sufixo específico                                                                                                                               |
| delete_suffix                  | `string = "sausage is expensive"` <br> `string.delete_suffix(" is expensive")` <br> `"sausage"`       | Remove o sufixo da string                                                                                                                                                           |
| delete_prefix                  | `string = "sausage is expensive"` <br> `string.delete_prefix("sausage")` <br> `" is expensive"`       | Remove o prefixo da string                                                                                                                                                          |
| split                          | `string = "a b c d" <br> string.split` <br> `["a", "b", "c", "d"]`                                    | Converte a string em um array de caracteres                                                                                                                                         |
| join                           | `arr = ['a', 'b', 'c'] <br> arr.join` => `"abc"`                                                      | Converte um array em uma string                                                                                                                                                     |
| to_i                           | `a = "49" <br> a.to_i` => `49`                                                                        | Converte a string em um inteiro                                                                                                                                                     |
| chop                           | `"abcd?".chop("?")` => `"abcd"`                                                                       | Remove o último caractere da string                                                                                                                                                 |
| count                          | `str = "aaab" <br> str.count("a")` <br> `3`                                                           | Conta os caracteres na string                                                                                                                                                       |
| to_f                           | `a = "49"` <br> `a.to_f` <br> `49.0`                                                                  | Converte a string em um número de ponto flutuante                                                                                                                                   |
| to_sym                         | `a = "key"` <br> `a.to_sym` <br> `:key`                                                               | Converte a string em um symbol                                                                                                                                                      |
| match                          | `"abcd?".match(/ab/)` => `#<MatchData "ab">`                                                          | Converte o padrão em uma expressão regular e chama seu método match na string                                                                                                       |
| empty?                         | `"hello".empty?` => `false`                                                                           | Retorna true se o comprimento da string for zero                                                                                                                                    |
| squeeze                        | `"Booook".squeeze` => `"Bok"`                                                                         | Retorna uma cópia da string em que sequências do mesmo caractere são substituídas por um único caractere                                                                            |
| \*                             | `puts "Ruby " * 4` => `Ruby Ruby Ruby Ruby`                                                           | Retorna a concatenação de várias cópias de self                                                                                                                                     |
| +                              | `"sammy " + "shark"` => `"sammyshark"`                                                                | Retorna a concatenação de self com a outra string fornecida                                                                                                                         |
| eql?                           | `s = 'foo'` => `true` <br> `s.eql?('foo')` => `true`                                                  | Retorna true se os objetos têm o mesmo comprimento e conteúdo; caso contrário, false                                                                                                |

## Métodos

### Declarar um método {.row-span-3}

```ruby
def method_name(parameter1, parameter2)
    puts "#{parameter1} #{parameter2}"
    parameter1 + parameter2
end
```

---

```ruby
res = method_name(20, 10)
# output => 30
def method_name(parameter1, parameter2)
    puts "#{parameter1} #{parameter2}"
    return parameter1 + parameter2
end
# output => 30
```

### Chamar um método

```ruby
res = method_name(parameter1, parameter2)
# Methods can be called without parentheses
res = method_name parameter1, parameter2
```

### Método de classe {.row-span-4}

Métodos de classe são métodos no nível da classe. Existem várias formas de definir métodos de classe

```ruby
class Mobile
    def self.ring
        "ring ring ring..."
    end
end

Mobile.ring
```

---

```ruby
class Mobile
    def Mobile.ring
        "ring ring ring..."
    end
end
Mobile.ring
```

---

```ruby
class Mobile
    class << self
    def ring
        "ring ring ring..."
       end
    end
end
Mobile.ring
```

Métodos de classe são métodos de instância de objetos de classe. Quando uma nova classe é criada, um objeto do tipo "Class"
é inicializado e atribuído a uma constante global (neste caso, Mobile)

```ruby
Mobile = Class.new do
    def self.ring
        "ring ring ring..."
    end
end
Mobile.ring
```

```ruby
Mobile = Class.new
class << Mobile
    def ring
        "ring ring ring..."
    end
end
Mobile.ring
```

### Usar outro parâmetro como valor padrão

```ruby
def method_name(num1, num2 = num1)
    return num1 + num2
end
res = method_name(10)
# output => 20
```

### Definir valores padrão para parâmetros de método

```ruby
def method_name(parameter1, parameter2, type = "ADD")
    puts "#{parameter1} #{parameter2}"
    return parameter1 + parameter2 if type == "ADD"
    return parameter1 - parameter2 if type == "SUB"
end
res = method_name(20, 10)
# output => 30
```

### Passar argumentos de tamanho variável para parâmetros de método

```ruby
def method_name(type, *values)
    return values.reduce(:+) if type == "ADD"
    return values.reduce(:-) if type == "SUB"
end
numbers = [2, 2, 2, 3, 3, 3]
res = method_name("ADD", *numbers)
# output => 15
res = method_name("SUB", *numbers)
# output => -11
# Or you can provide a value like this
res = method_name("ADD", 2, 2, 2, 3, 3, 3)
# output => 15
```

### Modificar objeto

```ruby
a = ["Drama", "Mystery", "Crime",
"Sci-fi", "Disaster", "Thriller"]
a.sort
puts a
# We did not modify the object
# Drama
# Mystery
# Crime
# Sci-fi
# Disaster
# Thriller
a.sort!
puts a
# Modify object
# Crime
# Disaster
# Drama
# Mystery
# Sci-fi
# Thriller
```

Quando quiser modificar o objeto, use `!` após o método

### Método booleano

No Ruby, métodos terminados com ponto de interrogação (?) são chamados de métodos booleanos, que retornam `true` ou `false`

```ruby
"some text".nil?
# false
nil.nil?
# true
```

Você pode criar seu próprio método booleano

```ruby
def is_vowel?(char)
    ['a','e','i','o','u'].include? char
end
is_vowel? 'a'
# true
is_vowel? 'b'
# false
```

## Blocos

### Exemplo de bloco

```ruby
# return value
def give_me_data
    data = yield
    puts "data = #{data}"
end
give_me_data { "Big data" }
# output => data = Big data
```

O código entre `do` e `end` (para várias linhas) ou entre chaves `{` e `}` (para uma única linha) é chamado de bloco,
e eles podem definir vários parâmetros entre dois pipes `( |arg1, arg2|)`

### Bloco de uma linha

```ruby
salary = [399, 234, 566, 533, 233]
salary.each { |s| puts s }
# puts s = block body
# |s| = block arguments
```

### Bloco de várias linhas

```ruby
salary.each do |s|
    a = 10
    res = a * s
    puts res
end
# Block
# a = 10
# res = a * s
# puts res
# block parameters
# |s|
```

Blocos podem ser passados como parâmetros de método ou associados a chamadas de método. O bloco retorna a última instrução avaliada

### Passar um bloco implicitamente

```ruby
def give_me_data
    puts "I am inside give_me_data method"
    yield
    puts "I am back in give_me_data method"
end

give_me_data { puts "Big data" }

# output
# I am inside give_me_data method
# Big data
# I am back in give_me_data method
```

### Chamado várias vezes

```ruby
def give_me_data
    yield
    yield
    yield
end

give_me_data { puts "Big data" }

# output
# Big data
# Big data
# Big data
```

### Chamado com parâmetros de bloco

```ruby
def give_me_data
    yield 10
    yield 100
    yield 30
end

give_me_data { |data| puts "Big data #{data} TB" }

# output
# Big data 10 TB
# Big data 100 TB
# Big data 30 TB
```

### Chamado com vários parâmetros de bloco

```ruby
def give_me_data
    yield "Big data", 10, "TB"
    yield "Big data", 100, "GB"
    yield "Big data", 30, "MB"
end

give_me_data { |text, data, unit| puts "#{text} #{data} #{unit}" }

# output
# Big data 10 TB
# Big data 100 GB
# Big data 30 MB
```

### O bloco tenta retornar do contexto atual

```ruby
give_me_data
    puts "I'm inside the give_me_data method"
end

def test
  puts "I'm inside the test method"
  give_me_data { return 10 } # Code returns from here
  puts "I am back in test method"
end

return_value = test

# output
# I'm inside the test method
# I'm inside the give_me_data method
# 10
```

### Passar o bloco explicitamente usando o parâmetro &

```ruby
def give_me_data(&block)
    block.call
    block.call
end

give_me_data { puts "Big data" }

# output
# Big data
# Big data
```

### Verificar se um bloco foi passado

```ruby
def give_me_data
    yield
end

give_me_data

# output
# LocalJumpError: no block given (yield)
```

### Formas de tratar exceções e tornar blocos opcionais

```ruby
def give_me_data
    return "no block" unless block_given?
    yield
end

give_me_data { puts "Big data" }
give_me_data

# output
# Big data
```

## Procs

### Procs

```ruby
p = Proc.new { puts "Hello World" }

def give_me_data(proc)
    proc.call
end

give_me_data p

# output
# Hello World
```

proc é como um bloco que pode ser armazenado em uma variável

### Qualquer parâmetro {.col-span-2}

```ruby
p = Proc.new { |count| "Hello World " * count }

def give_me_data(proc)
    proc.call 5, 2
end

give_me_data p

# output
# "Hello World Hello World Hello World Hello World Hello World "
```

### O proc tenta retornar do contexto atual

```ruby
p = Proc.new { return 10 }
p.call
# output
LocalJumpError: unexpected return
```

### Não é possível retornar do contexto de nível superior

```ruby
def give_me_data
    puts "I'm inside the give_me_data method"
    p = Proc.new { return 10 }
    p.call # Code returns from here
    puts "I am back in give_me_data method"
end

return_value = give_me_data
puts return_value

# output
# I'm inside the give_me_data method
# 10
```

## Lambdas

### Declarar uma lambda{.row-span-2}

```ruby
l = lambda { puts "Hello World" }
# shorthand
l = -> { puts "Hello World" }
# transfer lambda
l.call
# output => Hello World
```

Existem várias formas de chamar uma lambda

```ruby
l.()
l[]
```

### Argumentos estritos

```ruby
l = -> (count) { "Hello World " * count }
l.call 5
# output
# "Hello World Hello World Hello World Hello World Hello World "
l.call 5, 2
# output
wrong number of arguments (given 2, expected 1)
```

### Declarar uma lambda em um bloco {.row-span-2}

```ruby
def give_me_data
    puts "I am inside give_me_data method"
    l = -> { return 10 }
    l.call
    puts "I am back in give_me_data method"
end

return_value = give_me_data
puts return_value

# output
# I am inside give_me_data method
# I am back in give_me_data method
# nil # because puts return nil
```

### As lambdas retornam da própria lambda, assim como métodos comuns

```ruby
l = -> { return 10 }
l.call

# output => 10
```

## Array

### Inicializar um array vazio

```ruby
array = Array.new   #=> []
# or
array = []
```

### Array com objetos de tipos diferentes

```ruby
array = [1, "two", 3.0]
#=> [1, "two", 3.0]
```

### Preencher um array com tamanho inicial e objetos padrão {.row-span-2}

```ruby
numbers = Array.new(3)
#=> [nil, nil, nil]
numbers = Array.new(3, 7)
#=> [7, 7, 7]
numbers = Array.new(3, true)
#=> [true, true, true]
numbers = []
numbers.fill(7, 0..2)   #=> [7, 7, 7]
```

### Array de hashes diferentes {.col-span-2}

```ruby
array_with_hashes = Array.new(2) { {} } #=> [{}, {}]
array_with_hashes[0][:name] = "Bob"
array_with_hashes[0][:id] = 10          #=> [{:name=>"Bob", :id=>10}, {}]
```

### Array bidimensional

```ruby
temperature_data = [
              ["A908", 38],
              ["A909", 37],
              ["A910", 38],
          ]
temperature_data[0]    #=> ["A908", 38]
temperature_data[0][0] #=> "A908"
temperature_data[0][1] #=> 38
```

### Índice de array

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]
str_array[0]            #=> "This"
str_array[1]            #=> "is"
str_array[4]            #=> "array"
```

### Índice negativo

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]
# Index -1 represents the last element
str_array[-1]        #=> "array"
# Index -2 represents the second to last element
str_array[-2]        #=> "small"
str_array[-6]        #=> nil
```

### Método at de array

```ruby
str_array = [
  "This", "is", "a", "small", "array"
]

puts str_array.at(0)      #=> "This"
```

### Obtenção de range

```ruby
arr = [1, 2, 3, 4, 5, 6]
arr[100]                  #=> nil
arr[-3]                   #=> 4
arr[2, 3]                 #=> [3, 4, 5]
arr[1..4]                 #=> [2, 3, 4, 5]
arr[1..-3]                #=> [2, 3, 4]
```

### Método fetch de array

```ruby
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.fetch(100)
#=> IndexError: Index outside array bounds 100：-6...6
arr.fetch(100, "oops")    #=> "oops"
```

Fora dos limites, retorna o valor padrão

### Obter elementos do array

```ruby
arr = [1, 2, 3, 4, 5, 6]

arr.first     # first value => 1
arr.last      # last value => 6
# take Returns the first n elements
arr.take(3)   #=> [1, 2, 3]
# drop after n elements have been deleted
arr.drop(3)   #=> [4, 5, 6]
```

### Adicionar valor ao final do array com push

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.push(11)
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
numbers.push(12, 13, 14)
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

### Remover o valor ao final do array com pop

```ruby
num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num_array.pop             #=> 10
num_array
#=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Adicionar valor ao início do array com unshift

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(0)
#=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.unshift(-3, -2, -1)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Recuperar e remover ao mesmo tempo o primeiro elemento com shift

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.shift #=> 1
numbers
#=> [2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Remover elemento em índice específico com delete_at

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete_at(2) #=> 4
numbers
#=> [2, 3, 5, 6, 7, 8, 9, 10]
```

### Remover um elemento específico em qualquer posição do array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete(2) #=> 2
numbers           #=> [3, 5, 6, 7, 8, 9, 10]
```

### Inserir valor no índice indicado com insert {.row-span-2}

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.insert(0, 0)
#=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.insert(0, -3, -2, -1)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.insert(-1, 12, 13, 14)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14]
numbers.insert(-4, 11)
#=> [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

### Um bloco para preencher o array com valores

```ruby
numbers = Array.new(10) { |n| n = n * 2 }
#=> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### Preencher arrays fica mais fácil

```ruby
numbers = Array(100..110)
#=> [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]

# Or we can convert the range to an array
(100..110).to_a
#=> [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
```

### Remover valores nil do array

```ruby
arr = ['foo', 0, nil, 'bar', 7, nil]
arr.compact  #=> ['foo', 0, 'bar', 7]
arr      #=> ['foo', 0, nil, 'bar', 7, nil]
arr.compact! #=> ['foo', 0, 'bar', 7]
arr      #=> ['foo', 0, 'bar', 7]
```

### Remover duplicatas com uniq

```ruby
arr = [2, 5, 6, 556, 6, 6, 8, 9, 0, 123, 556]
arr.uniq #=> [2, 5, 6, 556, 8, 9, 0, 123]
arr # => [2, 5, 6, 556, 6, 6, 8, 9, 0, 123, 556]
arr.uniq! #=> [2, 5, 6, 556, 8, 9, 0, 123]
arr #=> [2, 5, 6, 556, 8, 9, 0, 123]
```

### Verificar se um valor existe em um array（`include？`）

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.include? "Mars"
# output => true
planets.include? "Pluto"
# output => false
```

### Obter o tamanho do array

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.size
# output => 8
planets.length
# output => 8
```

Você pode usar size ou length; ambos são sinônimos

### Limpar array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.clear
# output => []
```

### Obter o primeiro elemento do array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers[0]
# or
numbers.first
# output => 1
```

### Obter o último elemento do array

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers[-1]
# or
numbers.last
# output => 10
```

### Mesclar dois arrays

```ruby
a = ["tom", "mot", "otm"]
b = [2, 3, 5]
a.zip(b)
# output
# [["tom", 2], ["mot", 3], ["otm", 5]]
```

### Ordenar array {.row-span-3}

```ruby
primes = [7, 2, 3, 5]
sorted_primes = primes.sort
puts "#{sorted_primes}"
# output => [2, 3, 5, 7]
```

ou ordenação in-place

```ruby
primes = [7, 2, 3, 5]
primes.sort!
puts "#{primes}"
# output => [2, 3, 5, 7]
```

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.sort
# output
# ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]
planets.sort_by { |p| p }
# output
# ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]
planets.sort_by { |p| p.length }
# output
# ["Mars", "Earth", "Venus", "Saturn", "Uranus", "Neptune", "Jupiter", "Mercury"]
```

### Obter o valor máximo de um array

```ruby
primes = [7, 2, 3, 5]
primes.max_by { |p| p }
# output => 7
```

### Obter elementos do array usando range {.row-span-2}

```ruby
# numbers[start..end], both index are inclusive
puts numbers[0..3]
# 1
# 2
# 3
# 4
# numbers[start..end], end index is exclusive
puts numbers[0...3]
# 1
# 2
# 3
# or numbers[start..length]
puts numbers[0, 1]
# 1
```

### Obter os primeiros n elementos do array

```ruby
primes = [7, 2, 3, 5]
primes.take(3)
# [7, 2, 3]
```

### Acessar elemento

```ruby
primes = [7, 2, 3, 5]
primes.fetch(3)
# 5
# Fetch will throw an error if the element does not exist
primes.fetch(10)
# (index 10 outside of array bounds: -4...4)
# or get an default value
primes.fetch(10, -1)
# -1
```

### Remover os primeiros n elementos

```ruby
primes = [7, 2, 3, 5]
primes.drop(3)
# [5]
```

### Remover o primeiro elemento

```ruby
primes = [7, 2, 3, 5]
primes.shift
# [2, 3, 5]
```

### Remover o último elemento

```ruby
primes = [7, 2, 3, 5]
primes.pop
# [7, 2, 3]
```

### Remover elemento por índice

```ruby
primes = [7, 2, 3, 5]
primes.delete_at(-1)
# [7, 2, 3]
```

### Remover todas as ocorrências de um elemento

```ruby
primes = [7, 2, 3, 5, 5]
primes.delete(5)
# [7, 2, 3]
```

### each {.row-span-3}

```ruby
# When you have single line blocks
salary = [399, 234, 566, 533, 233]
salary.each { |s| puts s }
# output
# 399
# 234
# 566
# 533
# 233
```

Em um bloco de várias linhas, você pode substituir as chaves `{}` por `do` e `end`

```ruby
salary.each do |s|
  a = 10
  res = a * s
  puts res
end
# output
# 3990
# 2340
# 5660
# 5330
# 2330
```

Ou você pode fazer o mesmo usando chaves {} e ponto e vírgula como separador em vez de quebra de linha

```ruby
salary.each { |s| a = 10 ; res = a * s ; puts res }
```

### each_with_index

```ruby
salary = [399, 234, 566, 533, 233]
salary.each_with_index { |value, index| puts "#{index} #{value}" }
# output
# 0 399
# 1 234
# 2 566
# 3 533
# 4 233
```

### each_index

```ruby
salary = [399, 234, 566, 533, 233]
salary.each_index { |i| puts i}
# output
# 0
# 1
# 2
# 3
# 4
```

### map

```ruby
salary = [399, 234, 566, 533, 233]
salary.map { |s|  s * 10  }
# return
# [3990, 2340, 5660, 5330, 2330]
# On the other hand, each returns the original value
salary = [399, 234, 566, 533, 233]
salary.each { |s|  s * 10  }
# return
# [399, 234, 566, 533, 233]
```

### collect

```ruby
salary = [399, 234, 566, 533, 233]
salary.collect { |s| s > 400 }
# output
# [false, false, true, true, false]
```

### for

```ruby
for value in [2, 3, 5, 7]
    puts value
end
```

### each_with_object {.col-span-2}

```ruby
colors = [
  {color: "red", count: 3}, {color: "red", count: 5}, {color: "black", count: 4}
]
colors.each_with_object(Hash.new(0)) { |color, hash| hash["color_"+color[:color]] = color[:color].upcase; hash["count_"+color[:color]] += color[:count] }
# output
{"color_red"=>"RED", "count_red"=>8, "color_black"=>"BLACK", "count_black"=>4}

[1, 2, 3].each_with_object(0) { |number, sum| sum += number}
# output
# 0
# Because 0 is immutable, and since the initial object is 0, the method returns 0
```

### while

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = 0
while index < planets.size
    puts "#{planets[index]}"
    index += 1
end
```

---

```ruby
a = 1
star = '*'
while a <= 10
    puts star
    star += '*'
    a += 1
end
```

### do while

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = 0
loop do
    puts "#{planets[index]}"
    index += 1
    break if planets[index] == "Mars" or index > planets.size
end
```

### until

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
index = planets.size - 1
until index < 0
    puts "#{planets[index]}"
    index -= 1
end
```

```ruby
a = 1
star = '*'
until star.length > 10
    puts star
    star += '*'
    a += 1
end
```

### times

```ruby
10.times { puts "#{rand(1..100)}"}
# output
# will print 10 random numbers
```

Só porque é possível não significa que você deva iterar sobre um array assim

```ruby
data_sample = [2, 3, 5, 7]
data_sample.size.times { |index| puts "#{data_sample[index]}" }
# output
# 2
# 3
# 5
# 7
```

### upto

```ruby
data_sample = [2, 3, 5, 7]
0.upto((data_sample.size - 1) / 2) { |index| puts "#{data_sample[index]}" }
# output
# 2
# 3
```

### downto

```ruby
data_sample = [2, 3, 5, 7]
(data_sample.size - 1).downto(data_sample.size / 2) { |index| puts "#{data_sample[index]}" }
# output
# 7
# 5
```

### step {.row-span-2}

```ruby
1.step(20, 2) { |number| puts "#{number}"}
# output
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 15
# 17
# 19
```

---

```ruby
19.step(1, -2) { |number| puts "#{number}"}
# output
# 19
# 17
# 15
# 13
# 11
# 9
# 7
# 5
# 3
# 1
```

### inject {.row-span-2}

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.inject{ |res, n| res + n }
# The output is the sum of all numbers
# If no initial value is set for res, the first element of the array is used as the initial value of res.
#10
# Now set the value of res to 11
numbers = [2, 2, 2, 2, 2]
numbers.inject(11) { |res, n| res + n }
# so 11 + 2, 13 + 2, 15 + 2, 17 + 2 and 19 + 2
# 21
# using symbol
numbers = [2, 2, 2, 2, 2]
numbers.inject(:+)
# output
# 10
```

Use valores iniciais e símbolos

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.inject(11, :+)
# output
# 21
```

### reduce

```ruby
numbers = [2, 2, 2, 2, 2]
numbers.reduce(11, :+)
# output
# 21
```

### detect

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.detect { |name| name.start_with?("E") and name.end_with?("h") }
# output
# Earth
salary = [399, 234, 566, 533, 233]
salary.detect { |s| s > 1000 }
# output
# nil
```

### find

```ruby
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets.find { |name| name.start_with?("E") and name.end_with?("h") }
# output
# Earth
```

### select

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.select { |n| n % 2 == 0 }
# Now you have an even array
# [2, 4, 6, 8, 10]
# If there are no values that satisfy your logic, return an empty array
[1, 1, 1].select { |n| n % 2 == 0 }
# no even numbers
# []
```

### reject

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reject { |n| n % 2 == 0 }
# Reject if the number is even, so now we have an odd array
# [1, 3, 5, 7, 9]
```

### keep_if

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.keep_if { |n| n % 2 == 0 }
# numbers Array contains only even numbers
# [2, 4, 6, 8, 10]
```

### delete_if

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.delete_if { |n| n % 2 == 0 }
# numbers Array contains only odd numbers
# [1, 3, 5, 7, 9]
```

### drop_while

```ruby
numbers = [1, 2, 3, 1, 2, 3, 0]
numbers.drop_while { |n| n < 3 }
# is 3 less than 3, returns false, so delete 1, 2
# [3, 1, 2, 3, 0]
```

### reverse_each

```ruby
words = %w[first second third fourth fifth sixth]
str = ""
words.reverse_each {|word| str += "#{word} "}
p str #=> "sixth fifth fourth third second first "
```

## Métodos booleanos de enumerable

### Métodos booleanos de enumerable {.row-span-2}

| Nome       | Quando usar                                                             |
| :--------- | :---------------------------------------------------------------------- |
| `all?`     | Quando quiser verificar se todos os elementos atendem à sua condição    |
| `any?`     | Quando quiser verificar se pelo menos um item atende à sua condição     |
| `one?`     | Quando quiser verificar se um elemento atende ao seu requisito          |
| `none?`    | Quando quiser verificar se nenhum item atende à sua condição, o oposto de? |
| `empty?`   | Quando quiser verificar se um objeto está vazio                         |
| `include?` | Quando quiser verificar se um elemento existe no objeto                 |

### all?

```ruby
[2, 4, 6, 8, 10].all? { |num| num % 2 == 0 }
# true
[1, 4, 6, 8, 10].all? { |num| num % 2 == 0 }
# false
```

### any?

```ruby
[1, 3, 5, 7, 10].any? { |num| num % 2 == 0 }
# true
[1, 3, 5, 7, 19].any? { |num| num % 2 == 0 }
# false
```

### one?

```ruby
[1, 3, 2, 5, 7].one? { |num| num % 2 == 0 }
# true
[1, 3, 2, 5, 4].one? { |num| num % 2 == 0 }
# false
```

### none?

```ruby
[1, 3, 5, 7, 9].none? { |num| num % 2 == 0 }
# true
[2, 3, 5, 7, 9].none? { |num| num % 2 == 0 }
# false
```

### empty?

```ruby
[].empty?
# true
[1, 3, 5, 7, 9].empty?
# false
```

## Métodos de combinação

### Métodos de combinação {.row-span-2}

- `&` Retorna um novo array contendo cada elemento presente no array e em other_array; duplicatas são omitidas; use eql? para comparar itens
- `intersection` Retorna um novo array contendo cada elemento presente em self e em todos os arrays informados em other_arrays; duplicatas são omitidas; use eql? para comparar itens
- `+` Retorna um array contendo todos os elementos de self seguidos de todos os elementos do array informado
- `-` Retorna um array contendo todos os elementos de self não encontrados no array informado
- `union` Retorna um array contendo todos os elementos de self e todos os elementos do array informado, sem duplicatas
- `difference` Retorna um array contendo todos os elementos de self não encontrados em nenhum dos arrays informados
- `product` self Retorna ou produz todas as combinações de elementos de self com o array informado

### &

```ruby
[0, 1, 2, 3] & [1, 2] # => [1, 2]
[0, 1, 0, 1] & [0, 1] # => [0, 1]
```

### intersection

```ruby
[0, 1, 2, 3].intersection([0, 1, 2], [0, 1, 3])
# => [0, 1]
[0, 0, 1, 1, 2, 3].intersection([0, 1, 2], [0, 1, 3])
# => [0, 1]
```

### +

```ruby
a = [0, 1] + [2, 3]
a # => [0, 1, 2, 3]
```

### -

```ruby
[0, 1, 1, 2, 1, 1, 3, 1, 1] - [1]
# => [0, 2, 3]
[0, 1, 2, 3] - [3, 0]
# => [1, 2]
[0, 1, 2] - [4]
# => [0, 1, 2]
```

### union

```ruby
[0, 1, 2, 3].union([4, 5], [6, 7])
# => [0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 1].union([2, 1], [3, 1])
# => [0, 1, 2, 3]
[0, 1, 2, 3].union([3, 2], [1, 0])
# => [0, 1, 2, 3]
```

### difference

```ruby
[0, 1, 1, 2, 1, 1, 3, 1, 1].difference([1])
# => [0, 2, 3]
[0, 1, 2, 3].difference([3, 0], [1, 3])
# => [2]
[0, 1, 2].difference([4])
# => [0, 1, 2]
```

### product

```ruby
a = [0, 1, 2]
a1 = [3, 4]
p = a.product(a1)
p.size # => 6 # a.size * a1.size
p # => [[0, 3], [0, 4], [1, 3], [1, 4], [2, 3], [2, 4]]
```

## Loops

### Loop while

```ruby
# variable count
count = 4
# using while loop
# here conditional is count i.e. 4
while count >= 1
  # statements to be executed
  puts "Ruby Cheatsheet"
  count = count - 1
  # while loop ends here
end
```

saída

```
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
```

### Laço for

```ruby
# loop using range as expression
text = "Ruby Cheatsheet"
# using for loop with the range
for count in 1..5 do
  puts text
end
```

saída

```
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
Ruby Cheatsheet
```

### Loop do..while

```ruby
# starting of do..while loop
loop do
  puts "Ruby Cheatsheet"
  val = '7'
  # using boolean expressions
  if val == '7'
    break
  end
  # ending of ruby do..while loop
end
```

saída

```
Ruby Cheatsheet
```

### Loop until

```ruby
var = 7
# here do is optional
until var == 11 do
  # code to be executed
  puts var * 10
  var = var + 1
  # here loop ends
end
```

saída

```
70
80
90
100
```

### Sair do loop

```ruby
salary = [399, 234, 566, 533, 233]
salary.each do |s|
  break if s == 566
  puts s
end
# output
# 399
# 234
```

Usando a palavra-chave `break`

### Pular dentro do loop

```ruby
salary = [399, 234, 566, 533, 233]
salary.each do |s|
  next if s == 533
  puts s
end
# output
# 399
# 234
# 566
# 233
```

Usando a palavra-chave next

### Repetir a iteração atual

```ruby
data = [456, 3000]
retry_count = 0
status = "network failure"
sum = 0
data.each do |d|
    if retry_count == 3
        status = "connection established"
        retry_count = 0
        redo
    elsif status == "network failure" and retry_count < 5
        puts "network failure #{retry_count}"
        retry_count += 1
        redo
    elsif status == "connection established"
        puts d
        sum += d
    end
end
# output of sum
# 3456
```

### Começar o ciclo novamente

```ruby
numbers = [2, 2, 44, 44]
sum = 0
begin
    numbers.each do |s|
        if rand(1..10) == 5
            puts "hi 5, let's do it again!"
            sum = 0
            raise "hi 5"
        end
        puts s
        sum += s
    end
rescue
    retry
end
```

## Classes

### Exemplo de classes {.row-span-2}

```ruby
class Person
    # when you create a new object, it looks for a method named initialize and executes it, like a constructor in java
    # def initialize(name, number)
    #    @name = name
    #    @number = number
    # end
    # instance variable
    # @name
    # class variable
    # @@count
    # attr_accessor acts as a getter and setter for the following instance attributes
    attr_accessor :name, :number
    # class variable must be initialized
    @@count = 0
    def self.count
        @@count
    end
    def self.count=(count)
        @@count = count
    end
    def initialize
        @@count += 1
    end
end
# create an instance of the Person class
p1 = Person.new
# set attributes of the Person class
p1.name = "Yukihiro Matsumoto"
p1.number = 9999999999
# get attributes of the Person class
puts "#{p1.name}"
puts "#{p1.number}"
puts "#{Person.count}"
# Yukihiro Matsumoto
# 9999999999
# 1
p2 = Person.new
p2.name = "Yukihiro Matsumoto"
p2.number = 9999999999
# get attributes of the Person class
puts "#{p2.name}"
puts "#{p2.number}"
puts "#{Person.count}"
# Yukihiro Matsumoto
# 9999999999
# 2
# set class variable
Person.count = 3
puts "#{Person.count}"
# 3
```

### Herdar uma classe

```ruby
class Person
    attr_accessor :name, :number
end
# Inherit methods and properties from parent class using < symbol
class Student < Person
    attr_accessor :id
end
s = Student.new
s.name = "James Bond"
s.number = 700
s.id = 678
puts "#{p.name}"
James Bond
puts "#{p.number}"
700
puts "#{p.id}"
678
```

### Verificar o tipo da instância

```ruby
class Vehicle; end
class Car < Vehicle; end
class Audi < Car; end
car = Car.new
car.instance_of? Vehicle
false
car.instance_of? Car
true
car.instance_of? Audi
false
a = 7
a.instance_of? Integer
true
a.instance_of? Numeric
false
```

Retorna true se o objeto for uma instância da classe informada e não de uma subclasse ou superclasse

### Imprimir todos os nomes de métodos de uma classe

```ruby
puts (String.methods).sort
# Exclude methods inherited from Object class
puts (String.methods - Object.public_instance_methods).sort
```

### Verificar se uma classe tem um método específico

```ruby
String.respond_to?(:prepend)
true
String.respond_to?(:append)
false
```

## Veja também

- [Ruby](https://www.ruby-lang.org/en/) _(ruby-lang.org)_
- [Ruby Cheatsheet](https://github.com/lifeparticle/Ruby-Cheatsheet) _(github.com)_
