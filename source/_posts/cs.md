---
title: C#
date: 2021-12-14 12:22:00
background: bg-[#8c4c8a]
tags:
  - object-oriented
  - class
categories:
  - Programação
intro: |
  Cheat sheet de referência rápida de C# que apresenta a sintaxe básica e os métodos.
plugins:
  - copyCode
---

## Primeiros passos

### Hello.cs

```cs
class Hello {
  // main method
  static void Main(string[] args)
  {
    // Output: Hello, world!
    Console.WriteLine("Hello, world!");
  }
}
```

Cria um diretório de projeto para uma nova aplicação de console

```cs
$ dotnet new console
```

Lista todos os templates de aplicações

```cs
$ dotnet new list
```

Compilando e executando (certifique-se de estar no diretório do projeto)

```shell script
$ dotnet run
Hello, world!
```

### Variáveis

```cs
int intNum = 9;
long longNum = 9999999;
float floatNum = 9.99F;
double doubleNum = 99.999;
decimal decimalNum = 99.9999M;
char letter = 'D';
bool @bool = true;
string site = "cheatsheets.zip";

var num = 999;
var str = "999";
var bo = false;
```

### Tipos de dados primitivos

| Tipo de dados | Tamanho               | Intervalo                  |
| ------------- | --------------------- | -------------------------- |
| `int`         | 4 bytes               | -2^31^ ^a^ 2^31^-1         |
| `long`        | 8 bytes               | -2^63^ ^a^ 2^63^-1         |
| `float`       | 4 bytes               | 6 ^a^ 7 dígitos decimais   |
| `double`      | 8 bytes               | 15 dígitos decimais        |
| `decimal`     | 16 bytes              | 28 ^a^ 29 dígitos decimais |
| `char`        | 2 bytes               | 0 ^a^ 65535                |
| `bool`        | 1 bit                 | true / false               |
| `string`      | 2 bytes por caractere | _N/A_                      |

{.show-header}

### Comentários

```cs
// Single-line comment

/* Multi-line
   comment */

// TODO: Adds comment to a task list in Visual Studio

/// Single-line comment used for documentation

/** Multi-line comment
    used for documentation **/

```

### Strings

```cs
string first = "John";
string last = "Doe";

// string concatenation
string name = first + " " + last;
Console.WriteLine(name); // => John Doe
```

Veja: [Strings](#c-strings)

### Entrada do usuário

```cs
Console.WriteLine("Enter number:");
if(int.TryParse(Console.ReadLine(),out int input))
{
  // Input validated
  Console.WriteLine($"You entered {input}");
}
```

### Condicionais

```cs
int j = 10;

if (j == 10) {
  Console.WriteLine("I get printed");
} else if (j > 10) {
  Console.WriteLine("I don't");
} else {
  Console.WriteLine("I also don't");
}
```

### Arrays

```cs
char[] chars = new char[10];
chars[0] = 'a';
chars[1] = 'b';

string[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
bool[] answers = {true, false};
```

### Loops

```cs
int[] numbers = {1, 2, 3, 4, 5};

for(int i = 0; i < numbers.Length; i++) {
  Console.WriteLine(numbers[i]);
}
```

---

```cs
foreach(int num in numbers) {
  Console.WriteLine(num);
}
```

## C# Strings

### Concatenação de strings

```cs
string first = "John";
string last = "Doe";

string name = first + " " + last;
Console.WriteLine(name); // => John Doe
```

### Interpolação de strings

```cs
string first = "John";
string last = "Doe";

string name = $"{first} {last}";
Console.WriteLine(name); // => John Doe
```

### Membros de string {.row-span-2}

| Membro     | Descrição                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Length     | Uma propriedade que retorna o comprimento da string.                                                                               |
| Compare()  | Um método estático que compara duas strings.                                                                                       |
| Contains() | Determina se a string contém uma substring específica.                                                                             |
| Equals()   | Determina se as duas strings têm os mesmos dados de caractere.                                                                     |
| Format()   | Formata uma string por meio da notação {0} e do uso de outros primitivos.                                                          |
| Trim()     | Remove todas as ocorrências de caracteres específicos do início e do fim da string. Por padrão, remove espaços no início e no fim. |
| Split()    | Remove o caractere fornecido e cria um array com os caracteres restantes de cada lado.                                             |

{.show-header}

### Strings verbatim

```cs {.wrap}
string longString = @"I can type any characters in here !#@$%^&*()__+ '' \n \t except double quotes and I will be taken literally. I even work with multiple lines.";
```

### Exemplo de membro

```cs
// Using property of System.String
string lengthOfString = "How long?";
lengthOfString.Length           // => 9

// Using methods of System.String
lengthOfString.Contains("How"); // => true
```

## Diversos

### Termos gerais do .NET {.col-span-2}

| Termo                         | Definição                                                                                                                                                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Runtime                       | Uma coleção de serviços necessários para executar uma determinada unidade de código compilada.                                                                                                                                                  |
| Common Language Runtime (CLR) | Principalmente localiza, carrega e gerencia objetos .NET. O CLR também cuida do gerenciamento de memória, da hospedagem de aplicações, da coordenação de threads, da execução de verificações de segurança e de outros detalhes de baixo nível. |
| Managed code                  | Código que compila e executa no runtime do .NET. C#/F#/VB são exemplos.                                                                                                                                                                         |
| Unmanaged code                | Código que compila diretamente para código de máquina e não pode ser hospedado diretamente pelo runtime do .NET. Não tem gerenciamento de memória, garbage collection etc. DLLs criadas em C/C++ são exemplos.                                  |

{.show-header}
