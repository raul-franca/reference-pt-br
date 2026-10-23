---
title: Perl
date: 2024-05-22 9:03:44
background: bg-[#31719d]
tags:
categories:
  - Programação
intro: |
  O cheat sheet de referência rápida de Perl, criado para ajudar a escrever a sintaxe básica e os métodos.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Instalação no Unix e Linux

- Abra um navegador web e acesse https://www.perl.org/get.html.

- Siga o link para baixar o código-fonte compactado disponível para Unix/Linux.

- Baixe o arquivo perl-5.x.y.tar.gz e execute os seguintes comandos no prompt $.

```shell
$tar -xzf perl-5.x.y.tar.gz
$cd perl-5.x.y
$./Configure -de
$make
$make test
$make install
```

### Instalação no Windows

- Siga o link para a instalação do Strawberry Perl no Windows http://strawberryperl.com

- Baixe a versão de 32 ou 64 bits da instalação.

- Execute o arquivo baixado com um duplo clique no Windows Explorer. Isso abre o assistente de instalação do Perl, que é
  muito fácil de usar. Basta aceitar as configurações padrão, aguardar o fim da instalação e pronto!

### Instalação no Macintosh

- Abra um navegador web e acesse https://www.perl.org/get.html.

- Siga o link para baixar o código-fonte compactado disponível para Mac OS X.

- Baixe o arquivo perl-5.x.y.tar.gz e execute os seguintes comandos no prompt $

```shell
$tar -xzf perl-5.x.y.tar.gz
$cd perl-5.x.y
$./Configure -de
$make
$make test
$make install
```

### Executando Perl

```shell
# Unix/Linux
$perl  -e <perl code>
# Windows/DOS
C:>perl -e <perl code>
```

### Opções de linha de comando disponíveis

|     Opção     |                                     Descrição |
| :-----------: | --------------------------------------------: |
| -d[:debugger] |            Executa o programa sob o depurador |
|  -Idirectory  |          Especifica o diretório @INC/#include |
|      -T       |                         Ativa avisos de taint |
|      -U       |                   Permite operações inseguras |
|      -w       |                     Ativa vários avisos úteis |
|      -W       |                         Ativa todos os avisos |
|      -X       |                      Desativa todos os avisos |
|  -e program   |   Executa o script Perl enviado como programa |
|     file      | Executa o script Perl de um arquivo informado |

### Script pela linha de comando

```shell
# Unix/Linux
$perl  script.pl
# Windows/DOS
C:>perl script.pl
```

### Primeiro programa em Perl

```shell
$perl -e 'print "Hello World\n"'

# #!/usr/bin/perl

# This will print "Hello, World"
print "Hello, world\n";
$chmod 0755 hello.pl
$./hello.pl

```

### Comentários em Perl

```perl
# This is a comment in perl
=begin comment
This is all part of multiline comment.
You can use as many lines as you like
These comments will be ignored by the
compiler until the next =cut is encountered.
=cut

```

### Espaços em branco em Perl

```perl
#!/usr/bin/perl

# This would print with a line break in the middle
print "Hello
          world\n";
#output
#Hello
#         world

```

### Aspas simples e duplas em Perl

```perl
#!/usr/bin/perl

print "Hello, world\n";
print 'Hello, world\n';

#Hello, world
#Hello, world\n$
```

## Tipos de dados

### Criando variáveis

```perl
$age = 25;             # An integer assignment
$name = "John Paul";   # A string
$salary = 1445.50;     # A floating point
```

### Variáveis escalares

```perl
#!/usr/bin/perl

$age = 25;             # An integer assignment
$name = "John Paul";   # A string
$salary = 1445.50;     # A floating point

print "Age = $age\n";
print "Name = $name\n";
print "Salary = $salary\n";
```

### Variáveis de array

```perl
#!/usr/bin/perl

@ages = (25, 30, 40);
@names = ("John Paul", "Lisa", "Kumar");

print "\$ages[0] = $ages[0]\n";
print "\$ages[1] = $ages[1]\n";
print "\$ages[2] = $ages[2]\n";
print "\$names[0] = $names[0]\n";
print "\$names[1] = $names[1]\n";
print "\$names[2] = $names[2]\n";
```

### Variáveis de hash

```perl
#!/usr/bin/perl

%data = ('John Paul', 45, 'Lisa', 30, 'Kumar', 40);

print "\$data{'John Paul'} = $data{'John Paul'}\n";
print "\$data{'Lisa'} = $data{'Lisa'}\n";
print "\$data{'Kumar'} = $data{'Kumar'}\n";
```

### Contexto de variável

```perl
#!/usr/bin/perl

@names = ('John Paul', 'Lisa', 'Kumar');

@copy = @names;
$size = @names;

print "Given names are : @copy\n";
print "Number of names are : $size\n";
```

### Escalares numéricos

```perl
#!/usr/bin/perl

$integer = 200;
$negative = -300;
$floating = 200.340;
$bigfloat = -1.2E-23;

# 377 octal, same as 255 decimal
$octal = 0377;

# FF hex, also 255 decimal
$hexa = 0xff;

print "integer = $integer\n";
print "negative = $negative\n";
print "floating = $floating\n";
print "bigfloat = $bigfloat\n";
print "octal = $octal\n";
print "hexa = $hexa\n";
```

### Escalares de string

```perl
#!/usr/bin/perl

$var = "This is string scalar!";
$quote = 'I m inside single quote - $var';
$double = "This is inside single quote - $var";

$escape = "This example of escape -\tHello, World!";

print "var = $var\n";
print "quote = $quote\n";
print "double = $double\n";
print "escape = $escape\n";
```

### Operações com escalares

```perl
#!/usr/bin/perl

$str = "hello" . "world";       # Concatenates strings.
$num = 5 + 10;                  # adds two numbers.
$mul = 4 * 5;                   # multiplies two numbers.
$mix = $str . $num;             # concatenates string and number.

print "str = $str\n";
print "num = $num\n";
print "mul = $mul\n";
print "mix = $mix\n";
```

### Strings multilinha

```perl
#!/usr/bin/perl

$string = 'This is
a multiline
string';

print "$string\n";

##########################
print <<EOF;
This is
a multiline
string
EOF
```

### V-Strings

```perl
#!/usr/bin/perl

$smile  = v9786;
$foo    = v102.111.111;
$martin = v77.97.114.116.105.110;

print "smile = $smile\n";
print "foo = $foo\n";
print "martin = $martin\n";
```

### Literais especiais

```perl
#!/usr/bin/perl

print "File name ". __FILE__ . "\n";
print "Line Number " . __LINE__ ."\n";
print "Package " . __PACKAGE__ ."\n";

# they can not be interpolated
print "__FILE__ __LINE__ __PACKAGE__\n";
```

### Arrays de números sequenciais

```perl
#!/usr/bin/perl

@var_10 = (1..10);
@var_20 = (10..20);
@var_abc = (a..z);

print "@var_10\n";   # Prints number from 1 to 10
print "@var_20\n";   # Prints number from 10 to 20
print "@var_abc\n";  # Prints number from a to z
```

### Tamanho do array

```perl
#!/usr/bin/perl

@array = (1,2,3);
$array[50] = 4;

$size = @array;
$max_index = $#array;

print "Size:  $size\n";
print "Max Index: $max_index\n";
```

## Operações com arrays

### Adicionando e removendo elementos do array

| types                |                                                   Descrição                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------: |
| push @ARRAY, LIST    |                                Adiciona os valores da lista ao final do array.                                 |
| pop @ARRAY           |                                   Remove e retorna o último valor do array.                                    |
| shift @ARRAY         | Remove o primeiro valor do array e o retorna, encurtando o array em 1 e deslocando todo o restante para baixo. |
| unshift @ARRAY, LIST |                Insere a lista no início do array e retorna o número de elementos no novo array.                |

### Operações com arrays

```perl
#!/usr/bin/perl

# create a simple array

@coins = ("Quarter","Dime","Nickel");
print "1. \@coins = @coins\n";

# add one element at the end of the array

push(@coins, "Penny");
print "2. \@coins = @coins\n";

# add one element at the beginning of the array

unshift(@coins, "Dollar");
print "3. \@coins = @coins\n";

# remove one element from the last of the array.

pop(@coins);
print "4. \@coins = @coins\n";

# remove one element from the beginning of the array.

shift(@coins);
print "5. \@coins = @coins\n";

```

### Fatiando elementos do array

```perl
#!/usr/bin/perl

@days = qw/Mon Tue Wed Thu Fri Sat Sun/;

@weekdays = @days[3,4,5];

print "@weekdays\n";
```

### Substituindo elementos do array

```perl
#!/usr/bin/perl

@nums = (1..20);
print "Before - @nums\n";

splice(@nums, 5, 5, 21..25);
print "After - @nums\n";
```

### Transformando strings em arrays

```perl
#!/usr/bin/perl

# define Strings

$var_string = "Rain-Drops-On-Roses-And-Whiskers-On-Kittens";
$var_names = "Larry,David,Roger,Ken,Michael,Tom";

# transform above strings into arrays.

@string = split('-', $var_string);
@names = split(',', $var_names);

print "$string[3]\n";  # This will print Roses
print "$names[4]\n"; # This will print Michael
```

### Transformando arrays em strings

```perl
#!/usr/bin/perl

# define Strings
$var_string = "Rain-Drops-On-Roses-And-Whiskers-On-Kittens";
$var_names = "Larry,David,Roger,Ken,Michael,Tom";

# transform above strings into arrays.
@string = split('-', $var_string);
@names  = split(',', $var_names);

$string1 = join( '-', @string );
$string2 = join( ',', @names );

print "$string1\n";
print "$string2\n";
```

### Ordenando arrays

```perl
#!/usr/bin/perl

# define an array
@foods = qw(pizza steak chicken burgers);
print "Before: @foods\n";

# sort this array
@foods = sort(@foods);
print "After: @foods\n";
```

### A variável especial $[

```perl
#!/usr/bin/perl

# define an array
@foods = qw(pizza steak chicken burgers);
print "Foods: @foods\n";

# Let's reset first index of all the arrays.
$[ = 1;

print "Food at \@foods[1]: $foods[1]\n";
print "Food at \@foods[2]: $foods[2]\n";
```

### Mesclando arrays

```perl
#!/usr/bin/perl

@odd = (1,3,5);
@even = (2, 4, 6);

@numbers = (@odd, @even);

print "numbers = @numbers\n";
```

### Selecionando elementos de listas

```perl
#!/usr/bin/perl

@list = (5,4,3,2,1)[1..3];

print "Value of list = @list\n";
```

### Acessando elementos de hash

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);

print "$data{'John Paul'}\n";
print "$data{'Lisa'}\n";
print "$data{'Kumar'}\n";
```

### Extraindo slices

```perl
#!/uer/bin/perl


%data = (-JohnPaul => 45, -Lisa => 30, -Kumar => 40);

@array = @data{-JohnPaul, -Lisa};

print "Array : @array\n";
```

### Extraindo chaves e valores

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);

@names = keys %data;

print "$names[0]\n";
print "$names[1]\n";
print "$names[2]\n";
```

### Obtendo o tamanho do hash

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);

@keys = keys %data;
$size = @keys;
print "1 - Hash size:  is $size\n";

@values = values %data;
$size = @values;
print "2 - Hash size:  is $size\n";
```

### Adicionando e removendo elementos em hashes

```perl
#!/usr/bin/perl

%data = ('John Paul' => 45, 'Lisa' => 30, 'Kumar' => 40);
@keys = keys %data;
$size = @keys;
print "1 - Hash size:  is $size\n";

# adding an element to the hash;
$data{'Ali'} = 55;
@keys = keys %data;
$size = @keys;
print "2 - Hash size:  is $size\n";

# delete the same element from the hash;
delete $data{'Ali'};
@keys = keys %data;
$size = @keys;
print "3 - Hash size:  is $size\n";
```

## Controle de fluxo

### if-else

```perl
#!/usr/bin/perl

# Perl program to illustrate
# Decision-Making statements

$a = 10;
$b = 15;

# if condition to check
# for even number
if($a % 2 == 0 )
{
	printf "Even Number";
}

# if-else condition to check
# for even number or odd number
if($b % 2 == 0 )
{
	printf "\nEven Number";
}
else
{
	printf "\nOdd Number";
}
```

### O operador ? :

```perl
#!/usr/local/bin/perl

$name = "Ali";
$age = 10;

$status = ($age > 60 )? "A senior citizen" : "Not a senior citizen";

print "$name is  - $status\n";
```

### Laço for

```perl
#!/usr/bin/perl

# Perl program to illustrate
# the use of for Loop

# for loop
print("For Loop:\n");
for ($count = 1 ; $count <= 3 ; $count++)
{
	print "GeeksForGeeks\n"
}
```

### Laço foreach

```perl
#!/usr/bin/perl

# Perl program to illustrate
# the use of foreach Loop

# Array
@data = ('GEEKS', 4, 'GEEKS');

# foreach loop
print("For-each Loop:\n");
foreach $word (@data)
{
	print ("$word ");
}

```

### while e do-while

```perl
#!/usr/bin/perl

# Perl program to illustrate
# the use of foreach Loop

# while loop
$count = 3;

print("While Loop:\n");
while ($count >= 0)
{
	$count = $count - 1;
	print "GeeksForGeeks\n";
}

print("\ndo...while Loop:\n");
$a = 10;

# do..While loop
do {

	print "$a ";
	$a = $a - 1;
} while ($a > 0);

```

## Programação orientada a objetos

### Classe e objeto

```perl
#!/usr/bin/perl

# Perl Program for creation of a
# Class and its object
use strict;
use warnings;

package student;

# constructor
sub student_data
{

	# shift will take package name 'student'
	# and assign it to variable 'class'
	my $class_name = shift;
	my $self = {
				'StudentFirstName' => shift,
				'StudentLastName' => shift
			};
	# Using bless function
	bless $self, $class_name;

	# returning object from constructor
	return $self;
}

# Object creating and constructor calling
my $Data = student_data student("Geeks", "forGeeks");

# Printing the data
print "$Data->{'StudentFirstName'}\n";
print "$Data->{'StudentLastName'}\n";

```

### Sub-rotinas

```perl
#!/usr/bin/perl

# Perl Program to demonstrate the
# subroutine declaration and calling

# defining subroutine
sub ask_user
{
	print "Hello Geeks!\n";
}

# calling subroutine
# you can also use
# &ask_user();
ask_user();
```

### Módulos e pacotes

```perl
#!/usr/bin/perl

# Using the Package 'Calculator'
use Calculator;

print "Enter two numbers to multiply";

# Defining values to the variables
$a = 5;
$b = 10;

# Subroutine call
Calculator::multiplication($a, $b);

print "\nEnter two numbers to divide";

# Defining values to the variables
$a = 45;
$b = 5;

# Subroutine call
Calculator::division($a, $b);
```

### Referências

```perl
# Perl program to illustrate the
# Referencing and Dereferencing
# of an Array

# defining an array
@array = ('1', '2', '3');

# making an reference to an array variable
$reference_array = \@array;

# Dereferencing
# printing the value stored
# at $reference_array by prefixing
# @ as it is a array reference
print @$reference_array;
```

### Expressão regular

```perl
# Perl program to demonstrate
# the m// and =~ operators

# Actual String
$a = "GEEKSFORGEEKS";

# Prints match found if
# its found in $a
if ($a =~ m[GEEKS])
{
	print "Match Found\n";
}

# Prints match not found
# if its not found in $a
else
{
	print "Match Not Found\n";
}
```

### Manipulação de arquivos

```perl
# Opening the file
open(fh, "GFG2.txt") or die "File '$filename' can't be opened";

# Reading First line from the file
$firstline = <fh>;
print "$firstline\n";
```

### Operadores de teste de arquivo

```perl
#!/usr/bin/perl

# Using predefined modules
use warnings;
use strict;

# Providing path of file to a variable
my $filename = 'C:\Users\GeeksForGeeks\GFG.txt';

# Checking for the file existence
if(-e $filename)
{

	# If File exists
	print("File $filename exists\n");
}

else
{

	# If File doesn't exists
	print("File $filename does not exists\n");
}
```

### Trabalhando com arquivos Excel

```perl
#!/usr/bin/perl
use Excel::Writer::XLSX;

my $Excelbook = Excel::Writer::XLSX->new( 'GFG_Sample.xlsx' );
my $Excelsheet = $Excelbook->add_worksheet();

$Excelsheet->write( "A1", "Hello!" );
$Excelsheet->write( "A2", "GeeksForGeeks" );
$Excelsheet->write( "B1", "Next_Column" );

$Excelbook->close;
```

### Lendo de um arquivo Excel:

```perl
use 5.016;
use Spreadsheet::Read qw(ReadData);
my $book_data = ReadData (‘new_excel.xlsx');
say 'A2: ' . $book_data->[1]{A2};

```

### Tratamento de erros

```perl
if(open(DATA, $file)) {
   ...
} else {
   die "Error: Couldn't open the file - $!"
}
#example
open(DATA, $file) || die "Error: Couldn't open the file $!";
## example
unless(chdir("/etc")) {
   die "Error: Can't change directory - $!";
}
##example
print(exists($hash{value}) ? 'There' : 'Missing',"\n");

```

### A função warn

```perl
chdir('/etc') or warn "Can't change directory";


```

### A função die

```perl
chdir('/etc') or die "Can't change directory";

```

### Erros dentro de módulos

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   warn "Error in module!";
}
1;
#use T;
#function();
# all below code call the funtion

```

### A função carp

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   carp "Error in module!";
}
1;

```

### A função cluck

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp qw(cluck);

sub function {
   cluck "Error in module!";
}
1;

```

### A função croak

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   croak "Error in module!";
}
1;

```

### A função confess

```perl
package T;

require Exporter;
@ISA = qw/Exporter/;
@EXPORT = qw/function/;
use Carp;

sub function {
   confess "Error in module!";
}
1;
```

## Data e hora

### Data e hora atuais

```perl
#!/usr/local/bin/perl

@months = qw( Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec );
@days = qw(Sun Mon Tue Wed Thu Fri Sat Sun);

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();
print "$mday $months[$mon] $days[$wday]\n";
#or
#!/usr/local/bin/perl

$datestring = localtime();
print "Local date and time $datestring\n";
```

### Hora GMT

```perl
#!/usr/local/bin/perl

$datestring = gmtime();
print "GMT date and time $datestring\n";
```

### Formatando data e hora

```perl
#!/usr/local/bin/perl

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();

printf("Time Format - HH:MM:SS\n");
printf("%02d:%02d:%02d", $hour, $min, $sec);
```

### Tempo epoch

```perl
#!/usr/local/bin/perl

$epoc = time();

print "Number of seconds since Jan 1, 1970 - $epoc\n";
#or
#!/usr/local/bin/perl

$datestring = localtime();
print "Current date and time $datestring\n";

$epoc = time();
$epoc = $epoc - 24 * 60 * 60;   # one day before of current date.

$datestring = localtime($epoc);
print "Yesterday's date and time $datestring\n";
```

### Função POSIX strftime()

| Specifier | Replaced by                                                                                                                            |         Example          |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------: |
| %a        | Nome abreviado do dia da semana                                                                                                        |           Thu            |
| %A        | Nome completo do dia da semana                                                                                                         |         Thursday         |
| %b        | Nome abreviado do mês                                                                                                                  |           Aug            |
| %B        | Nome completo do mês                                                                                                                   |          August          |
| %c        | Representação de data e hora                                                                                                           | Thu Aug 23 14:55:02 2001 |
| %C        | Ano dividido por 100 e truncado para inteiro (00-99)                                                                                   |            20            |
| %d        | Dia do mês, preenchido com zero (01-31)                                                                                                |            23            |
| %D        | Data curta MM/DD/YY, equivalente a %m/%d/%y                                                                                            |         08/23/01         |
| %e        | Dia do mês, preenchido com espaço ( 1-31)                                                                                              |            23            |
| %F        | Data curta YYYY-MM-DD, equivalente a %Y-%m-%d                                                                                          |        2001-08-23        |
| %g        | Ano baseado na semana, dois últimos dígitos (00-99)                                                                                    |            01            |
| %G        | Ano baseado na semana                                                                                                                  |           2001           |
| %h        | Nome abreviado do mês (igual a %b)                                                                                                     |           Aug            |
| %H        | Hora no formato 24h (00-23)                                                                                                            |            14            |
| %I        | Hora no formato 12h (01-12)                                                                                                            |            02            |
| %j        | Dia do ano (001-366)                                                                                                                   |           235            |
| %m        | Mês como número decimal (01-12)                                                                                                        |            08            |
| %M        | Minuto (00-59)                                                                                                                         |            55            |
| %n        | Caractere de nova linha ('\n')                                                                                                         |
| %p        | Indicação AM ou PM                                                                                                                     |            PM            |
| %r        | Hora no relógio de 12 horas                                                                                                            |       02:55:02 pm        |
| %R        | Hora HH:MM de 24 horas, equivalente a %H:%M                                                                                            |          14:55           |
| %S        | Segundo (00-61)                                                                                                                        |            02            |
| %t        | Caractere de tabulação horizontal ('\t')                                                                                               |
| %T        | Formato de hora ISO 8601 (HH:MM:SS), equivalente a %H:%M:%S                                                                            |          14:55           |
| %u        | Dia da semana ISO 8601 como número, com segunda-feira como 1 (1-7)                                                                     |            4             |
| %U        | Número da semana com o primeiro domingo como primeiro dia da semana um (00-53)                                                         |            33            |
| %V        | Número da semana ISO 8601 (00-53)                                                                                                      |            34            |
| %w        | Dia da semana como número decimal, com domingo como 0 (0-6)                                                                            |            4             |
| %W        | Número da semana com a primeira segunda-feira como primeiro dia da semana um (00-53)                                                   |            34            |
| %x        | Representação de data                                                                                                                  |         08/23/01         |
| %X        | Representação de hora                                                                                                                  |         14:55:02         |
| %y        | Ano, dois últimos dígitos (00-99)                                                                                                      |            01            |
| %Y        | Ano                                                                                                                                    |           2001           |
| %z        | Deslocamento ISO 8601 em relação a UTC no fuso horário (1 minuto = 1, 1 hora = 100)Se o fuso não puder ser determinado, sem caracteres |           +100           |
| %Z        | Nome ou abreviação do fuso horário Se o fuso não puder ser determinado, sem caracteres                                                 |           CDT            |
| %%        | Um sinal de %                                                                                                                          |            %             |

```perl
#!/usr/local/bin/perl
use POSIX qw(strftime);

$datestring = strftime "%a %b %e %H:%M:%S %Y", localtime;
printf("date and time - $datestring\n");

# or for GMT formatted appropriately for your locale:
$datestring = strftime "%a %b %e %H:%M:%S %Y", gmtime;
printf("date and time - $datestring\n");
```
