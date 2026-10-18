---
title: Awk
date: 2020-12-31 15:18:34
background: bg-slate-600
tags:
  - bash
  - text
  - script
categories:
  - Comandos Linux
intro: |
  Este é um cheat sheet de referência rápida de uma página para o [GNU awk](https://www.gnu.org/software/gawk/manual/gawk.html), que cobre expressões e comandos awk usados com frequência.
plugins:
  - copyCode
---

## Primeiros passos

### Experimente

```shell script {.wrap}
$ awk -F: '{print $1, $NF}' /etc/passwd
```

---

| -             | -                           |
| ------------- | --------------------------- |
| `-F:`         | Dois-pontos como separador  |
| `{...}`       | Programa awk                |
| `print`       | Imprime o registro atual    |
| `$1`          | Primeiro campo              |
| `$NF`         | Último campo                |
| `/etc/passwd` | Arquivo de dados de entrada |

{.left-text}

### Programa awk

```
BEGIN          {<initializations>}
   <pattern 1> {<program actions>}
   <pattern 2> {<program actions>}
   ...
END            {< final actions >}
```

#### Exemplo

```
awk '
    BEGIN { print "\n>>>Start" }
    !/(login|shutdown)/ { print NR, $0 }
    END { print "<<<END\n" }
' /etc/passwd
```

### Variáveis {.row-span-2}

```bash
          $1      $2/$(NF-1)    $3/$NF
           ▼          ▼           ▼
        ┌──────┬──────────────────┬───────┐
$0/NR ▶ │  ID  │  WEBSITE         │  URI  │
        ├──────┼──────────────────┼───────┤
$0/NR ▶ │  1   │  cheatsheets.zip │  awk  │
        ├──────┼──────────────────┼───────┤
$0/NR ▶ │  2   │  google.com      │  25   │
        └──────┴──────────────────┴───────┘
```

---

```
# First and last field
awk -F: '{print $1,$NF}' /etc/passwd

# With line number
awk -F: '{print NR, $0}' /etc/passwd

# Second last field
awk -F: '{print $(NF-1)}' /etc/passwd

# Custom string
awk -F: '{print $1 "=" $6}' /etc/passwd
```

Veja: [Variáveis](#awk-variables)

### Exemplos de programas awk {.col-span-2 .row-span-2}

```
awk 'BEGIN {print "hello world"}'        # Prints "hello world"
awk -F: '{print $1}' /etc/passwd         # -F: Specify field separator

# /pattern/ Execute actions only for matched pattern
awk -F: '/root/ {print $1}' /etc/passwd

# BEGIN block is executed once at the start
awk -F: 'BEGIN { print "uid"} { print $1 }' /etc/passwd

# END block is executed once at the end
awk -F: '{print $1} END { print "-done-"}' /etc/passwd
```

### Condições

```
awk -F: '$3>30 {print $1}' /etc/passwd
```

Veja: [Condições](#awk-conditions)

### Gerar 1000 espaços

```
awk 'BEGIN{
    while (a++ < 1000)
        s=s " ";
    print s
}'
```

Veja: [Loops](#awk-loops)

### Arrays

```
awk 'BEGIN {
   fruits["mango"] = "yellow";
   fruits["orange"] = "orange"
   for(fruit in fruits) {
     print "The color of " fruit " is " fruits[fruit]
   }
}'
```

Veja: [Arrays](#awk-arrays)

### Funções

```
# => 5
awk 'BEGIN{print length("hello")}'
# => HELLO
awk 'BEGIN{print toupper("hello")}'
# => hel
awk 'BEGIN{print substr("hello", 1, 3)}'
```

Veja: [Funções](#awk-functions)

## Variáveis do Awk

### Variáveis internas

| -              | -                                                    |
| -------------- | ---------------------------------------------------- |
| `$0`           | Linha inteira                                        |
| `$1, $2...$NF` | Primeiro, segundo… último campo                      |
| `NR`           | `N`úmero de `R`egistros                              |
| `NF`           | `N`úmero de `F`ields (campos)                        |
| `OFS`          | `O`utput `F`ield `S`eparator <br> _(padrão " ")_     |
| `FS`           | `F`ield `S`eparator de entrada <br> _(padrão " ")_   |
| `ORS`          | `O`utput `R`ecord `S`eparator <br> _(padrão "\n")_   |
| `RS`           | `R`ecord `S`eparator de entrada <br> _(padrão "\n")_ |
| `FILENAME`     | Nome do arquivo                                      |

### Expressões

| -                   | -                                         |
| ------------------- | ----------------------------------------- |
| `$1 == "root"`      | Primeiro campo igual a root               |
| `{print $(NF-1)}`   | Penúltimo campo                           |
| `NR!=1{print $0}`   | A partir do 2º registro                   |
| `NR > 3`            | A partir do 4º registro                   |
| `NR == 1`           | Primeiro registro                         |
| `END{print NR}`     | Total de registros                        |
| `BEGIN{print OFMT}` | Formato de saída                          |
| `{print NR, $0}`    | Número da linha                           |
| `{print NR "	" $0}` | Número da linha (tab)                     |
| `{$1 = NR; print}`  | Substitui o 1º campo pelo número da linha |
| `$NF > 4`           | Último campo > 4                          |
| `NR % 2 == 0`       | Registros pares                           |
| `NR==10, NR==20`    | Registros de 10 a 20                      |
| `BEGIN{print ARGC}` | Total de argumentos                       |
| `ORS=NR%5?",":"\n"` | Concatena registros                       |

### Exemplos

Imprima a soma e a média

```
awk -F: '{sum += $3}
     END { print sum, sum/NR }
' /etc/passwd
```

Imprima os parâmetros

```
awk 'BEGIN {
    for (i = 1; i < ARGC; i++)
        print ARGV[i] }' a b c
```

Separador de campo de saída como vírgula

```
awk 'BEGIN { FS=":";OFS=","}
    {print $1,$2,$3,$4}' /etc/passwd
```

Posição da correspondência

```
awk 'BEGIN {
    if (match("One Two Three", "Tw"))
        print RSTART }'
```

Comprimento da correspondência

```
awk 'BEGIN {
    if (match("One Two Three", "re"))
        print RLENGTH }'
```

### Variáveis de ambiente

| -         | -                                                          |
| --------- | ---------------------------------------------------------- |
| `ARGC`    | Número de argumentos                                       |
| `ARGV`    | Array de argumentos                                        |
| `FNR`     | `F`ile `N`umber of `R`ecords                               |
| `OFMT`    | Formato para números <br> _(padrão "%.6g")_                |
| `RSTART`  | Localização na string                                      |
| `RLENGTH` | Comprimento da correspondência                             |
| `SUBSEP`  | Separador de array multidimensional <br> _(padrão "\034")_ |
| `ARGIND`  | Índice do argumento                                        |

### Somente GNU awk

| -             | -                            |
| ------------- | ---------------------------- |
| `ENVIRON`     | Variáveis de ambiente        |
| `IGNORECASE`  | Ignora maiúsculas/minúsculas |
| `CONVFMT`     | Formato de conversão         |
| `ERRNO`       | Erros do sistema             |
| `FIELDWIDTHS` | Campos de largura fixa       |

### Definindo variáveis

```
awk -v var1="Hello" -v var2="Wold" '
    END {print var1, var2}
' </dev/null
```

#### Usar variáveis do shell

```
awk -v varName="$PWD" '
    END {print varName}' </dev/null
```

## Operadores do Awk

### Operadores

| -                | -              |
| ---------------- | -------------- |
| `{print $1}`     | Primeiro campo |
| `$2 == "foo"`    | Igual          |
| `$2 != "foo"`    | Diferente      |
| `"foo" in array` | No array       |

#### Expressão regular

| -               | -                     |
| --------------- | --------------------- |
| `/regex/`       | Linha corresponde     |
| `!/regex/`      | Linha não corresponde |
| `$1 ~ /regex/`  | Campo corresponde     |
| `$1 !~ /regex/` | Campo não corresponde |

#### Mais condições

| -                        | -   |
| ------------------------ | --- |
| `($2 <= 4 \|\| $3 < 20)` | Ou  |
| `($1 == 4 && $3 < 20)`   | E   |

### Operações

#### Operações aritméticas

- `+`
- `-`
- `*`
- `/`
- `%`
- `++`
- `--`

{.cols-3 .marker-none}

#### Atribuições abreviadas

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`

{.cols-3 .marker-none}

#### Operadores de comparação

- `==`
- `!=`
- `<`
- `>`
- `<=`
- `>=`

{.cols-3 .marker-none}

### Exemplos

```
awk 'BEGIN {
    if ("foo" ~ "^fo+$")
        print "Fooey!";
}'
```

#### Não corresponde

```
awk 'BEGIN {
    if ("boo" !~ "^fo+$")
        print "Boo!";
}'
```

#### if em array

```
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    if ("foo" in assoc)
        print "Fooey!";
}'
```

## Funções do Awk

### Funções comuns {.col-span-2}

| Função                | Descrição                                                                               |
| --------------------- | --------------------------------------------------------------------------------------- |
| `index(s,t)`          | Posição na string s onde a string t ocorre, 0 se não encontrada                         |
| `length(s)`           | Comprimento da string s (ou $0 se não houver argumento)                                 |
| `rand`                | Número aleatório entre 0 e 1                                                            |
| `substr(s,index,len)` | Retorna a substring de s com len caracteres, começando em index (contado a partir de 1) |
| `srand`               | Define a semente de rand e retorna a semente anterior                                   |
| `int(x)`              | Trunca x para um valor inteiro                                                          |
| `split(s,a,fs)`       | Divide a string s no array a usando fs, retornando o comprimento de a                   |
| `match(s,r)`          | Posição na string s onde a regex r ocorre, ou 0 se não encontrada                       |
| `sub(r,t,s)`          | Substitui a primeira ocorrência da regex r em s por t (ou $0 se s não for informado)    |
| `gsub(r,t,s)`         | Substitui todas as ocorrências da regex r em s por t                                    |
| `system(cmd)`         | Executa cmd e retorna o status de saída                                                 |
| `tolower(s)`          | Converte a string s para minúsculas                                                     |
| `toupper(s)`          | Converte a string s para maiúsculas                                                     |
| `getline`             | Define $0 como o próximo registro de entrada do arquivo de entrada atual.               |

### Função definida pelo usuário

```
awk '
    # Returns minimum number
    function find_min(num1, num2){
       if (num1 < num2)
       return num1
       return num2
    }
    # Returns maximum number
    function find_max(num1, num2){
       if (num1 > num2)
       return num1
       return num2
    }
    # Main function
    function main(num1, num2){
       result = find_min(num1, num2)
       print "Minimum =", result

       result = find_max(num1, num2)
       print "Maximum =", result
    }
    # Script execution starts here
    BEGIN {
       main(10, 60)
    }
'
```

## Arrays do Awk

### Array com índice

```
awk 'BEGIN {
    arr[0] = "foo";
    arr[1] = "bar";
    print(arr[0]); # => foo
    delete arr[0];
    print(arr[0]); # => ""
}'
```

### Array com chave

```
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    print("baz" in assoc); # => 0
    print("foo" in assoc); # => 1
}'
```

### Array com split

```
awk 'BEGIN {
    split("foo:bar:baz", arr, ":");
    for (key in arr)
        print arr[key];
}'
```

### Array com asort

```
awk 'BEGIN {
    arr[0] = 3
    arr[1] = 2
    arr[2] = 4
    n = asort(arr)
    for (i = 1; i <= n ; i++)
        print(arr[i])
}'
```

### Multidimensional

```
awk 'BEGIN {
    multidim[0,0] = "foo";
    multidim[0,1] = "bar";
    multidim[1,0] = "baz";
    multidim[1,1] = "boo";
}'
```

### Iteração multidimensional

```
awk 'BEGIN {
    array[1,2]=3;
    array[2,3]=5;
    for (comb in array) {
        split(comb,sep,SUBSEP);
        print sep[1], sep[2],
        array[sep[1],sep[2]]
    }
}'
```

## Condições do Awk

### Instrução if-else

```
awk -v count=2 'BEGIN {
    if (count == 1)
        print "Yes";
    else
        print "Huh?";
}'
```

#### Operador ternário

```
awk -v count=2 'BEGIN {
    print (count==1) ? "Yes" : "Huh?";
}'
```

### Existe

```
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    if ("foo" in assoc)
        print "Fooey!";
}'
```

#### Não existe

```
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    if ("Huh" in assoc == 0 )
        print "Huh!";
}'
```

### switch

```
awk -F: '{
    switch (NR * 2 + 1) {
        case 3:
        case "11":
            print NR - 1
            break

        case /2[[:digit:]]+/:
            print NR

        default:
            print NR + 1

        case -1:
            print NR * -1
    }
}' /etc/passwd
```

## Loops do Awk

### for...i

```
awk 'BEGIN {
    for (i = 0; i < 10; i++)
        print "i=" i;
}'
```

#### Potências de dois entre 1 e 100

```
awk 'BEGIN {
    for (i = 1; i <= 100; i *= 2)
        print i
}'
```

### for...in

```
awk 'BEGIN {
    assoc["key1"] = "val1"
    assoc["key2"] = "val2"
    for (key in assoc)
        print assoc[key];
}'
```

#### Argumentos

```
awk 'BEGIN {
    for (argnum in ARGV)
        print ARGV[argnum];
}' a b c
```

### Exemplos {.row-span-3}

#### Inverter registros

```
awk -F: '{ x[NR] = $0 }
    END {
        for (i = NR; i > 0; i--)
        print x[i]
    }
' /etc/passwd
```

#### Inverter campos

```
awk -F: '{
    for (i = NF; i > 0; i--)
        printf("%s ",$i);
    print ""
}' /etc/passwd
```

#### Soma por registro

```
awk -F: '{
    s=0;
    for (i = 1; i <= NF; i++)
        s += $i;
    print s
}' /etc/passwd
```

#### Soma do arquivo inteiro

```
awk -F: '
    {for (i = 1; i <= NF; i++)
        s += $i;
    };
    END{print s}
' /etc/passwd
```

### while {.row-span-2}

```
awk 'BEGIN {
    while (a < 10) {
        print "- " " concatenation: " a
        a++;
    }
}'
```

#### do...while

```
awk '{
    i = 1
    do {
        print $0
        i++
    } while (i <= 5)
}' /etc/passwd
```

### break

```
awk 'BEGIN {
    break_num = 5
    for (i = 0; i < 10; i++) {
        print i
        if (i == break_num)
            break
    }
}'
```

### continue

```
awk 'BEGIN {
    for (x = 0; x <= 10; x++) {
        if (x == 5 || x == 6)
            continue
        printf "%d ", x
    }
    print ""
}'
```

## Impressão formatada do Awk

### Uso

#### Alinhar à direita

```
awk 'BEGIN{printf "|%10s|\n", "hello"}'

|     hello|
```

#### Alinhar à esquerda

```
awk 'BEGIN{printf "|%-10s|\n", "hello"}'

|hello     |
```

### Especificadores comuns

| Caractere     | Descrição                  |
| ------------- | -------------------------- |
| `c`           | Caractere ASCII            |
| `d`           | Inteiro decimal            |
| `e`, `E`, `f` | Formato de ponto flutuante |
| `o`           | Valor octal sem sinal      |
| `s`           | String                     |
| `%`           | % literal                  |

### Espaço

```
awk -F: '{
    printf "%-10s %s\n", $1, $(NF-1)
}' /etc/passwd | head -n 3
```

Saída

```shell script
root       /root
bin        /bin
daemon     /sbin
```

### Cabeçalho

```
awk -F: 'BEGIN {
    printf "%-10s %s\n", "User", "Home"
    printf "%-10s %s\n", "----","----"}
    { printf "%-10s %s\n", $1, $(NF-1) }
' /etc/passwd | head -n 5
```

Saída

```
User       Home
----       ----
root       /root
bin        /bin
daemon     /sbin
```

## Diversos

### Metacaracteres de regex

- `\`
- `^`
- `$`
- `.`
- `[`
- `]`
- `|`
- `(`
- `)`
- `*`
- `+`
- `?`

{.cols-3 .marker-none}

### Sequências de escape

| -    | -                      |
| ---- | ---------------------- |
| `\b` | Backspace              |
| `\f` | Form feed              |
| `\n` | Nova linha (line feed) |
| `\r` | Retorno de carro       |
| `\t` | Tabulação horizontal   |
| `\v` | Tabulação vertical     |

### Executar script

```shell script
$ cat demo.awk
#!/usr/bin/awk -f
BEGIN { x = 23 }
      { x += 2 }
END   { print x }
$ awk -f demo.awk /etc/passwd
69
```

## Veja também

- [The GNU Awk User's Guide](https://www-zeuthen.desy.de/dv/documentation/unixguide/infohtml/gawk/gawk.html)
  _(www-zeuthen.desy.de)_
- [AWK cheatsheet](https://gist.github.com/Rafe/3102414) _(gist.github.com)_
