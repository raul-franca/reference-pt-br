---
title: PHP
date: 2021-01-04 15:23:28
background: bg-[#7477a9]
tags:
  - web
categories:
  - Programação
intro: |
  Este cheat sheet de [PHP](https://www.php.net/manual/en/) oferece uma referência para consultar rapidamente a sintaxe correta do código que você usa com mais frequência.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### hello.php

```php
<?php // begin with a PHP open tag.

echo "Hello World\n";
print("Hello cheatsheets.zip");

?>
```

Comando para executar PHP

```shell script
$ php hello.php
```

### Variáveis

```php
$boolean1 = true;
$boolean2 = True;

$int = 12;
$float = 3.1415926;
unset($float);  // Delete variable

$str1 = "How are you?";
$str2 = 'Fine, thanks';
```

Veja: [Tipos](#php-types)

### Strings

```php
$url = "cheatsheets.zip";
echo "I'm learning PHP at $url";

// Concatenate strings
echo "I'm learning PHP at " . $url;

$hello = "Hello, ";
$hello .= "World!";
echo $hello;   # => Hello, World!
```

Veja: [Strings](#php-strings)

### Arrays

```php
$num = [1, 3, 5, 7, 9];
$num[5] = 11;
unset($num[2]);    // Delete variable
print_r($num);     # => 1 3 7 9 11
echo count($num);  # => 5
```

Veja: [Arrays](#php-arrays)

### Operadores

```php
$x = 1;
$y = 2;

$sum = $x + $y;
echo $sum;   # => 3
```

Veja: [Operadores](#php-operators)

### Include {.row-span-3}

#### vars.php

```php
<?php // begin with a PHP open tag.
$fruit = 'apple';
echo "I was imported";
return 'Anything you like.';
?>
```

#### test.php

```php
<?php
include 'vars.php';
echo $fruit . "\n";   # => apple

/* Same as include,
cause an error if cannot be included*/
require 'vars.php';

// Also works
include('vars.php');
require('vars.php');

// Include through HTTP
include 'http://x.com/file.php';

// Include and the return statement
$result = include 'vars.php';
echo $result;  # => Anything you like.
?>
```

### Funções

```php
function add($num1, $num2 = 1) {
    return $num1 + $num2;
}
echo add(10);    # => 11
echo add(10, 5); # => 15
```

Veja: [Funções](#php-functions)

### Comentários

```php
# This is a one line shell-style comment

// This is a one line c++ style comment

/* This is a multi line comment
   yet another line of comment */
```

### Constantes

```php
const MY_CONST = "hello";

echo MY_CONST;   # => hello

# => MY_CONST is: hello
echo 'MY_CONST is: ' . MY_CONST;
```

### Classes

```php
class Student {
    public function __construct($name) {
        $this->name = $name;
    }
}
$alex = new Student("Alex");
```

Veja: [Classes](#php-classes)

## Tipos em PHP

### Boolean {.row-span-2}

```php
$boolean1 = true;
$boolean2 = TRUE;
$boolean3 = false;
$boolean4 = FALSE;

$boolean5 = (boolean) 1;   # => true
$boolean6 = (boolean) 0;   # => false
```

Boolean não diferencia maiúsculas de minúsculas

### Integer {.row-span-2}

```php
$int1 = 28;    # => 28
$int2 = -32;   # => -32
$int3 = 012;   # => 10 (octal)
$int4 = 0x0F;  # => 15 (hex)
$int5 = 0b101; # => 5  (binary)

# => 2000100000 (decimal, PHP 7.4.0)
$int6 = 2_000_100_000;
```

Veja também: [Integers](https://www.php.net/manual/en/language.types.integer.php)

### Strings

```php
echo 'this is a simple string';
```

Veja: [Strings](#php-strings)

### Arrays

```php
$arr = array("hello", "world", "!");
```

Veja: [Arrays](#php-arrays)

### Float (Double)

```php
$float1 = 1.234;
$float2 = 1.2e7;
$float3 = 7E-10;

$float4 = 1_234.567;  // as of PHP 7.4.0
var_dump($float4);    // float(1234.567)

$float5 = 1 + "10.5";   # => 11.5
$float6 = 1 + "-1.3e3"; # => -1299
```

### Null

```php
$a = null;
$b = 'Hello php!';
echo $a ?? 'a is unset'; # => a is unset
echo $b ?? 'b is unset'; # => Hello php

$a = array();
$a == null    # => true
$a === null   # => false
is_null($a)   # => false
```

### Iteráveis

```php
function bar(): iterable {
    return [1, 2, 3];
}
function gen(): iterable {
    yield 1;
    yield 2;
    yield 3;
}
foreach (bar() as $value) {
    echo $value;   # => 123
}
```

## Strings em PHP

### String

```php
# => '$String'
$sgl_quotes = '$String';

# => 'This is a $String.'
$dbl_quotes = "This is a $sgl_quotes.";

# => a 	 tab character.
$escaped   = "a \t tab character.";

# => a slash and a t: \t
$unescaped = 'a slash and a t: \t';
```

### Multilinha

```php
$str = "foo";

// Uninterpolated multi-liners
$nowdoc = <<<'END'
Multi line string
$str
END;

// Will do string interpolation
$heredoc = <<<END
Multi line
$str
END;
```

### Manipulação

```php
$s = "Hello Phper";
echo strlen($s);       # => 11

echo substr($s, 0, 3); # => Hel
echo substr($s, 1);    # => ello Phper
echo substr($s, -4, 3);# => hpe

echo strtoupper($s);   # => HELLO PHPER
echo strtolower($s);   # => hello phper

echo strpos($s, "l");      # => 2
var_dump(strpos($s, "L")); # => false
```

Veja: [String Functions](https://www.php.net/manual/en/ref.strings.php)

## Arrays em PHP

### Definindo {.row-span-2}

```php
$a1 = ["hello", "world", "!"]
$a2 = array("hello", "world", "!");
$a3 = explode(",", "apple,pear,peach");
```

#### Chaves mistas de int e string

```php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
    100   => -100,
    -100  => 100,
);
var_dump($array);
```

#### Sintaxe curta de array

```php
$array = [
    "foo" => "bar",
    "bar" => "foo",
];
```

### Multi array

```php
$multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

print_r($multiArray[0][0]) # => 1
print_r($multiArray[0][1]) # => 2
print_r($multiArray[0][2]) # => 3
```

### Multi tipo {.row-span-2}

```php
$array = array(
    "foo" => "bar",
    42    => 24,
    "multi" => array(
         "dim" => array(
             "a" => "foo"
         )
    )
);

# => string(3) "bar"
var_dump($array["foo"]);

# => int(24)
var_dump($array[42]);

# =>  string(3) "foo"
var_dump($array["multi"]["dim"]["a"]);
```

### manipulação

```php
$arr = array(5 => 1, 12 => 2);
$arr[] = 56;      // Append
$arr["x"] = 42;   // Add with key
sort($arr);       // Sort
unset($arr[5]);   // Remove
unset($arr);      // Remove all
```

Veja: [Array Functions](https://www.php.net/manual/en/ref.array.php)

### Iteração por índice

```php
$array = array('a', 'b', 'c');
$count = count($array);

for ($i = 0; $i < $count; $i++) {
    echo "i:{$i}, v:{$array[$i]}\n";
}
```

### Iteração por valor

```php
$colors = array('red', 'blue', 'green');

foreach ($colors as $color) {
    echo "Do you like $color?\n";
}
```

### Iteração por chave

```php
$arr = ["foo" => "bar", "bar" => "foo"];

foreach ( $arr as $key => $value )
{
  	echo "key: " . $key . "\n";
    echo "val: {$arr[$key]}\n";
}
```

### Concatenando arrays

```php
$a = [1, 2];
$b = [3, 4];

// PHP 7.4 later
# => [1, 2, 3, 4]
$result = [...$a, ...$b];
```

### Em funções

```php
$array = [1, 2];

function foo(int $a, int $b) {
	echo $a; # => 1
  	echo $b; # => 2
}
foo(...$array);
```

### Operador Splat

```php
function foo($first, ...$other) {
	var_dump($first); # => a
  	var_dump($other); # => ['b', 'c']
}
foo('a', 'b', 'c' /*, ...*/ );
// or
function foo($first, string ...$other){}
```

## Operadores do PHP {.cols-4}

### Aritmética

| -    | -              |
| ---- | -------------- |
| `+`  | Adição         |
| `-`  | Subtração      |
| `*`  | Multiplicação  |
| `/`  | Divisão        |
| `%`  | Módulo         |
| `**` | Exponenciação  |

### Atribuição

| -        | -                   |
| -------- | ------------------- |
| `a += b` | Igual a `a = a + b` |
| `a -= b` | Igual a `a = a – b` |
| `a *= b` | Igual a `a = a * b` |
| `a /= b` | Igual a `a = a / b` |
| `a %= b` | Igual a `a = a % b` |

### Comparação {.row-span-2}

| -     | -                            |
| ----- | ---------------------------- |
| `==`  | Igual                        |
| `===` | Idêntico                     |
| `!=`  | Diferente                    |
| `<>`  | Diferente                    |
| `!==` | Não idêntico                 |
| `<`   | Menor que                    |
| `>`   | Maior que                    |
| `<=`  | Menor ou igual               |
| `>=`  | Maior ou igual               |
| `<=>` | Menor/igual/maior que        |

### Lógicos

| -     | -            |
| ----- | ------------ | --- | --- |
| `and` | E            |
| `or`  | Ou           |
| `xor` | Ou exclusivo |
| `!`   | Não          |
| `&&`  | E            |
| `     |              | `   | Ou  |

### Aritmética {.col-span-2}

```php
// Arithmetic
$sum        = 1 + 1; // 2
$difference = 2 - 1; // 1
$product    = 2 * 2; // 4
$quotient   = 2 / 1; // 2

// Shorthand arithmetic
$num = 0;
$num += 1;       // Increment $num by 1
echo $num++;     // Prints 1 (increments after evaluation)
echo ++$num;     // Prints 3 (increments before evaluation)
$num /= $float;  // Divide and assign the quotient to $num
```

### Bit a bit

| -    | -                  |
| ---- | ------------------ | ----------------- |
| `&`  | E                  |
| `    | `                  | Ou (or inclusivo) |
| `^`  | Xor (ou exclusivo) |
| `~`  | Não                |
| `<<` | Deslocamento à esquerda |
| `>>` | Deslocamento à direita  |

## Condicionais do PHP

### If elseif else

```php
$a = 10;
$b = 20;

if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}
```

### Switch

```php
$x = 0;
switch ($x) {
    case '0':
        print "it's zero";
        break;
    case 'two':
    case 'three':
        // do something
        break;
    default:
        // do something
}
```

### Operador ternário

```php
# => Does
print (false ? 'Not' : 'Does');

$x = false;
# => Does
print($x ?: 'Does');

$a = null;
$b = 'Does print';
# => a is unset
echo $a ?? 'a is unset';
# => print
echo $b ?? 'b is unset';
```

### Match

```php
$statusCode = 500;
$message = match($statusCode) {
  200, 300 => null,
  400 => 'not found',
  500 => 'server error',
  default => 'known status code',
};
echo $message; # => server error
```

Veja: [Match](https://www.php.net/manual/en/control-structures.match.php)

### Expressões match

```php
$age = 23;

$result = match (true) {
    $age >= 65 => 'senior',
    $age >= 25 => 'adult',
    $age >= 18 => 'young adult',
    default => 'kid',
};

echo $result; # => young adult
```

## Laços do PHP

### while

```php
$i = 1;
# => 12345
while ($i <= 5) {
    echo $i++;
}
```

### do while

```php
$i = 1;
# => 12345
do {
    echo $i++;
} while ($i <= 5);
```

### for i

```php
# => 12345
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
```

### break

```php
# => 123
for ($i = 1; $i <= 5; $i++) {
    if ($i === 4) {
        break;
    }
    echo $i;
}
```

### continue

```php
# => 1235
for ($i = 1; $i <= 5; $i++) {
    if ($i === 4) {
        continue;
    }
    echo $i;
}
```

### foreach

```php
$a = ['foo' => 1, 'bar' => 2];
# => 12
foreach ($a as $k) {
    echo $k;
}
```

Veja: [Iteração de array](#php-value-iteration)

## Funções do PHP

### Retornando valores

```php
function square($x)
{
    return $x * $x;
}

echo square(4);  # => 16
```

### Tipos de retorno

```php
// Basic return type declaration
function sum($a, $b): float {/*...*/}
function get_item(): string {/*...*/}

class C {}
// Returning an object
function getC(): C { return new C; }
```

### Tipos de retorno anuláveis

```php
// Available in PHP 7.1
function nullOrString(int $v) : ?string
{
    return $v % 2 ? "odd" : null;
}
echo nullOrString(3);       # => odd
var_dump(nullOrString(4));  # => NULL
```

Veja: [Nullable types](https://www.php.net/manual/en/migration71.new-features.php)

### Funções void

```php
// Available in PHP 7.1
function voidFunction(): void
{
	echo 'Hello';
	return;
}

voidFunction();  # => Hello
```

### Funções variáveis

```php
function bar($arg = '')
{
    echo "In bar(); arg: '$arg'.\n";
}

$func = 'bar';
$func('test'); # => In bar(); arg: test
```

### Funções anônimas

```php
$greet = function($name)
{
    printf("Hello %s\r\n", $name);
};

$greet('World'); # => Hello World
$greet('PHP');   # => Hello PHP
```

### Funções recursivas

```php
function recursion($x)
{
    if ($x < 5) {
        echo "$x";
        recursion($x + 1);
    }
}
recursion(1);  # => 1234
```

### Parâmetros padrão

```php
function coffee($type = "cappuccino")
{
    return "Making a cup of $type.\n";
}
# => Making a cup of cappuccino.
echo coffee();
# => Making a cup of .
echo coffee(null);
# => Making a cup of espresso.
echo coffee("espresso");
```

### Arrow Functions

```php
$y = 1;

$fn1 = fn($x) => $x + $y;

// equivalent to using $y by value:
$fn2 = function ($x) use ($y) {
    return $x + $y;
};
echo $fn1(5);   # => 6
echo $fn2(5);   # => 6
```

## Classes do PHP

### Construtor

```php
class Student {
    public function __construct($name) {
        $this->name = $name;
    }
  	public function print() {
        echo "Name: " . $this->name;
    }
}
$alex = new Student("Alex");
$alex->print();    # => Name: Alex
```

### Herança

```php
class ExtendClass extends SimpleClass
{
    // Redefine the parent method
    function displayVar()
    {
        echo "Extending class\n";
        parent::displayVar();
    }
}

$extended = new ExtendClass();
$extended->displayVar();
```

### Variáveis de classe {.row-span-2}

```php
class MyClass
{
    const MY_CONST       = 'value';
    static $staticVar    = 'static';

    // Visibility
    public static $var1  = 'pubs';

    // Class only
    private static $var2 = 'pris';

    // The class and subclasses
    protected static $var3 = 'pros';

    // The class and subclasses
    protected $var6      = 'pro';

    // The class only
    private $var7        = 'pri';
}
```

Acesse estaticamente

```php
echo MyClass::MY_CONST;   # => value
echo MyClass::$staticVar; # => static
```

### Métodos mágicos

```php
class MyClass
{
    // Object is treated as a String
    public function __toString()
    {
        return $property;
    }
    // opposite to __construct()
    public function __destruct()
    {
        print "Destroying";
    }
}
```

### Interface

```php
interface Foo
{
    public function doSomething();
}
interface Bar
{
    public function doSomethingElse();
}
class Cls implements Foo, Bar
{
    public function doSomething() {}
    public function doSomethingElse() {}
}
```

## Trait do PHP

### Declaração e caso de uso de Trait {.col-span-3}
```php
// Declare Trait allows reuse of code
// across multiple classes for common characteristics or use cases

<?php
trait Logger {
    public function log($message) {
    	$date = new DateTime();
        echo "| ".  $date->format('Y-m-d H:i:s') . " | " . $message;
    }
}

// Use case : 
// Call trait with "use <trait name> in Class"

class User {
    use Logger; 

    public function createUser() {
        // User creation logic
        $this->log("User created.");
    }
}

class Product {
    use Logger;

    public function createProduct() {
        // Product creation logic
        $this->log("Product created.");
    }
}

$user = new User();
$user->createUser(); // Output ex: | 2025-06-18 14:06:09 | User created.

$product = new Product();
$product->createProduct(); // Output ex: | 2025-06-18 14:06:09 | Product created.
```

## Enums do PHP (PHP 8.1)

### Declaração e caso de uso de Enum {.col-span-3}

```php
<?php
// enum is a data type that allows you to define a set of named constants,
// representing a fixed group of related values

enum Status {
    case Pending;
    case Approved;
    case Rejected;
}

// Use case

function getStatusMessage(Status $status): string {
    return match($status) {
        Status::Pending => "Waiting for approval.",
        Status::Approved => "Your request has been approved.",
        Status::Rejected => "Your request has been rejected.",
    };
}

$currentStatus = Status::Approved;
echo getStatusMessage($currentStatus); // Output : Your request has been approved.
```

## Data e hora no PHP

### Data e hora atuais
```php
// DateTime in PHP handles both date and time

<?php
$now = new DateTime();
echo $now->format('Y-m-d H:i:s.u'); 

// Output ex: 2024-04-27 14:35:22.123456
```


### Criando objetos de data/hora específicos
```php
<?php
// Create a date object
$d = new DateTime('2024-04-27');
echo $d->format('Y-m-d'); 

// Output : 2024-04-27

// Create a time object 
$t = new DateTime('15:30:45');
echo $t->format('H:i:s'); 

// Output : 15:30:45

// Create a datetime object
$dt = new DateTime('2024-04-27 15:30:45');
echo $dt->format('Y-m-d H:i:s'); 

// Output :  2024-04-27 15:30:45
```

### Convertendo entre formatos de data
```php
<?php
// Convert a string to a DateTime object
$date_str = "2024-04-27 14:00";
$dt_obj = new DateTime($date_str);
echo $dt_obj->format('Y-m-d H:i:s'); 

// Output : 2024-04-27 14:00:0027

// Convert a DateTime object to a string
$formatted_str = $dt_obj->format('d/m/Y H:i');
echo $formatted_str;
 
// Output :  27/04/2024 14:00
```
### Timestamps e hora Unix {.col-span-2}
```php
<?php
// Get current timestamp
$timestamp = time();
echo $timestamp; 

// Output ex:  1750253583

// Convert timestamp back to DateTime
$dt_from_timestamp = (new DateTime())->setTimestamp($timestamp);
echo $dt_from_timestamp->format('Y-m-d H:i:s');

// Output ex : 2025-06-18 13:33:03
```


### Diferença entre datas e timedelta {.col-span-1}
```php
<?php
$date1 = new DateTime('2024-04-27');
$date2 = new DateTime('2024-05-01');

$interval = $date1->diff($date2);
echo $interval->days; 

// Output : 4

// Using DateInterval for date arithmetic
$new_date = clone $date1;
$new_date->add(new DateInterval('P10D'));
echo $new_date->format('Y-m-d'); 

// Output : 2024-05-07
```

## Diversos

### Tratamento básico de erros

```php
try {
    // Do something
} catch (Exception $e) {
    // Handle exception
} finally {
    echo "Always print!";
}
```

### Exceções no PHP 8.0 {.col-span-2}

```php {.wrap}
$nullableValue = null;

try {
	$value = $nullableValue ?? throw new InvalidArgumentException();
} catch (InvalidArgumentException) { // Variable is optional
    // Handle my exception
    echo "print me!";
}
```

### Exceção personalizada {.row-span-2}

```php
class MyException extends Exception {
    // do something
}
```

Uso

```php
try {
    $condition = true;
    if ($condition) {
        throw new MyException('bala');
    }
} catch (MyException $e) {
    // Handle my exception
}
```

### Operador Nullsafe {.row-span-2}

```php
// As of PHP 8.0.0, this line:
$result = $repo?->getUser(5)?->name;

// Equivalent to the following code:
if (is_null($repo)) {
    $result = null;
} else {
    $user = $repository->getUser(5);
    if (is_null($user)) {
        $result = null;
    } else {
        $result = $user->name;
    }
}
```

Veja também: [Nullsafe Operator](https://wiki.php.net/rfc/nullsafe_operator)

### Expressões regulares

```php
$str = "Visit cheatsheets.zip";
echo preg_match("/ch/i", $str); # => 1
```

Veja: [Regex em PHP](/regex#regex-in-php)

### Modos do fopen()

| -    | -                        |
| ---- | ------------------------ |
| `r`  | Leitura                  |
| `r+` | Leitura e escrita, prepend |
| `w`  | Escrita, truncate        |
| `w+` | Leitura e escrita, truncate |
| `a`  | Escrita, append          |
| `a+` | Leitura e escrita, append |

### Super Global Variables {.col-span-2}

| Variável     | Descrição                                                  |
|--------------|:-------------------------------------------------------------|
| `$_SERVER`   | Armazena informações sobre headers, paths e localizações de script |
| `$_GET`      | Contém dados enviados via parâmetros de URL (query string)   |
| `$_POST`     | Contém dados enviados pelo método HTTP POST                  |
| `$_FILES`    | Contém informações sobre arquivos enviados                   |
| `$_COOKIE`   | Contém dados de cookie                                       |
| `$_SESSION`  | Armazena variáveis de sessão                                 |
| `$_REQUEST`  | Contém dados de `$_GET`, `$_POST` e `$_COOKIE`               |
| `$_ENV`      | Contém variáveis de ambiente                                 |
| `$GLOBALS`   | Referencia todas as variáveis globais disponíveis no script  |

{.left-text}

Super Global Variables são variáveis embutidas sempre disponíveis em todos os escopos.


### Constantes definidas em runtime

```php
define("CURRENT_DATE", date('Y-m-d'));

// One possible representation
echo CURRENT_DATE;   # => 2021-01-05

# => CURRENT_DATE is: 2021-01-05
echo 'CURRENT_DATE is: ' . CURRENT_DATE;
```

## Veja também

- [PHP Docs](https://www.php.net/manual/en/index.php)
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/php/)
