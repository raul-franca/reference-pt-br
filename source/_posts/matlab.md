---
title: MATLAB
date: 2023-01-03 09:51:44
background: bg-[#692316]
tags:
categories:
  - Programação
intro: |
  Este cheat sheet de referência rápida traz uma introdução com exemplos ao uso da linguagem de computação científica [MATLAB](https://mathworks.cn/) para começar rapidamente
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

MATLAB é a abreviação de `matrix laboratory`

---

- [Site oficial do MATLAB](https://www.mathworks.com)

### Operações com matrizes e arrays {.row-span-3}

O MATLAB permite usar um único operador aritmético ou função para manipular todos os valores de uma matriz

```matlab
a + 10
```

O MATLAB executa a instrução acima e retorna os seguintes resultados:

```
ans = 3×3
    11    13    15
    12    14    16
    17    18    20
```

---

```matlab
sin(a)
```

O MATLAB executa a instrução acima e retorna os seguintes resultados:

```
ans = 3×3
    0.8415    0.1411   -0.9589
    0.9093   -0.7568   -0.2794
    0.6570    0.9894   -0.5440
```

Para transpor uma matriz, use aspas simples (`'`)

```matlab
a'
```

---

```
ans = 3×3
     1     2     7
     3     4     8
     5     6    10
```

Execute a multiplicação de matrizes padrão usando o operador `*`, que calcula o produto interno entre linhas e colunas

```matlab
p = a*inv(a)
```

---

```
p = 3×3
    1.0000         0         0
         0    1.0000         0
         0         0    1.0000
```

### Concatenação {.row-span-2}

A concatenação é o processo de juntar arrays para formar arrays maiores. Na verdade, o primeiro array é formado
concatenando seus elementos. Pares de colchetes `[]` são operadores de concatenação.

```matlab
A = [a,a]
```

---

```
A = 3×6

     1     3     5     1     3     5
     2     4     6     2     4     6
     7     8    10     7     8    10
```

Concatenar arrays lado a lado usando vírgulas é chamado de concatenação horizontal. Cada array deve ter o mesmo
número de linhas. Da mesma forma, ponto e vírgula pode ser usado para concatenação vertical se os arrays tiverem o mesmo número de
colunas.

```matlab
A = [a; a]
```

---

```
A = 6×3

     1     3     5
     2     4     6
     7     8    10
     1     3     5
     2     4     6
     7     8    10
```

### Matrizes e arrays {.row-span-3}

Para criar um array com quatro elementos por linha, separe os elementos com vírgulas (`,`) ou espaços

```matlab
a = [1 2 3 4]
```

O MATLAB executa a instrução acima e retorna os seguintes resultados:

```
a = 1×4
     1     2     3     4
```

#### Crie uma matriz com várias linhas

```matlab
a = [1 3 5; 2 4 6; 7 8 10]
```

---

```
a = 3×3
     1     3     5
     2     4     6
     7     8    10
```

#### Vetor coluna 5×1 de zeros

```matlab
z = zeros(5,1)
```

---

```
z = 5×1
     0
     0
     0
     0
     0
```

### Números complexos

Um número complexo tem uma parte real e uma parte imaginária, e a unidade imaginária é a raiz quadrada de -1.

```matlab
sqrt(-1)
```

---

```
ans = 0.0000 + 1.0000i
```

Para representar a parte imaginária de um número complexo, use i ou j.

```matlab
c = [3+4i, 4+3j; -i, 10j]
```

---

```
c = 2×2 complex

   3.0000 + 4.0000i   4.0000 + 3.0000i
   0.0000 - 1.0000i   0.0000 +10.0000i
```

## Conhecimentos básicos

### Comandos de entrada

| -                                                                               | -                                                                                   |
| ------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| [ans](https://www.mathworks.com/help/matlab/ref/ans.html)                       | Resposta calculada mais recentemente                                                |
| [clc](https://www.mathworks.com/help/matlab/ref/clc.html)                       | Limpa a janela da linha de comando                                                  |
| [diary](https://www.mathworks.com/help/matlab/ref/diary.html)                   | Registra o texto da janela da linha de comando no arquivo de log                    |
| [format](https://www.mathworks.com/help/matlab/ref/format.html)                 | Define o formato de exibição da saída                                               |
| [home](https://www.mathworks.com/help/matlab/ref/home.html)                     | Envia a redefinição do cursor                                                       |
| [iskeyword](https://www.mathworks.com/help/matlab/ref/iskeyword.html)           | Determina se a entrada é uma palavra-chave do <span class="trademark">MATLAB</span> |
| [more](https://www.mathworks.com/help/matlab/ref/more.html)                     | Controla a paginação da saída na janela da linha de comando                         |
| [commandwindow](https://www.mathworks.com/help/matlab/ref/commandwindow.html)   | Seleciona a janela de comandos                                                      |
| [commandhistory](https://www.mathworks.com/help/matlab/ref/commandhistory.html) | Abre a janela de histórico de comandos                                              |

#### Objetos

| -                                                                          | -                                                          |
| -------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [DisplayFormatOptions](https://www.mathworks.com/help/matlab/ref/ans.html) | Formato de exibição da saída na janela da linha de comando |

### Matrizes e arrays {.row-span-5}

Crie e combine arrays

| -                                                                 | -                                                                      |
| ----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [zeros](https://www.mathworks.com/help/matlab/ref/zeros.html)     | Cria um array de zeros                                                 |
| [ones](https://www.mathworks.com/help/matlab/ref/ones.html)       | Cria um array de uns                                                   |
| [rand](https://www.mathworks.com/help/matlab/ref/rand.html)       | Números aleatórios com distribuição uniforme                           |
| [true](https://www.mathworks.com/help/matlab/ref/true.html)       | Valor lógico 1 (verdadeiro)                                            |
| [false](https://www.mathworks.com/help/matlab/ref/false.html)     | Lógico 0 (falso)                                                       |
| [eye](https://www.mathworks.com/help/matlab/ref/eye.html)         | Matriz identidade                                                      |
| [diag](https://www.mathworks.com/help/matlab/ref/diag.html)       | Cria uma matriz diagonal ou obtém os elementos diagonais de uma matriz |
| [blkdiag](https://www.mathworks.com/help/matlab/ref/blkdiag.html) | Matriz diagonal em blocos                                              |
| [cat](https://www.mathworks.com/help/matlab/ref/double.cat.html)  | Concatena arrays.                                                      |
| [horzcat](https://www.mathworks.com/help/matlab/ref/horzcat.html) | Concatena arrays horizontalmente                                       |
| [vertcat](https://www.mathworks.com/help/matlab/ref/vertcat.html) | Concatena arrays verticalmente                                         |
| [repelem](https://www.mathworks.com/help/matlab/ref/repelem.html) | Repete a cópia de elementos de um array                                |
| [repmat](https://www.mathworks.com/help/matlab/ref/repmat.html)   | Repete a cópia de um array                                             |

Crie uma grade

| -                                                                     | -                                                   |
| --------------------------------------------------------------------- | :-------------------------------------------------- |
| [linspace](https://www.mathworks.com/help/matlab/ref/linspace.html)   | Gera vetores com espaçamento linear                 |
| [logspace](https://www.mathworks.com/help/matlab/ref/logspace.html)   | Gera vetores com espaçamento logarítmico            |
| [freqspace](https://www.mathworks.com/help/matlab/ref/freqspace.html) | Espaçamento de frequência da resposta em frequência |
| [meshgrid](https://www.mathworks.com/help/matlab/ref/meshgrid.html)   | Grades 2D e 3D                                      |
| [ndgrid](https://www.mathworks.com/help/matlab/ref/ndgrid.html)       | Grade retangular em espaço N-dimensional            |

Determine tamanho, forma e ordem

| -                                                                           | -                                                              |
| --------------------------------------------------------------------------- | :------------------------------------------------------------- |
| [length](https://www.mathworks.com/help/matlab/ref/length.html)             | O comprimento da maior dimensão do array                       |
| [size](https://www.mathworks.com/help/matlab/ref/size.html)                 | Tamanho do array                                               |
| [ndims](https://www.mathworks.com/help/matlab/ref/double.ndims.html)        | Número de dimensões do array                                   |
| [numel](https://www.mathworks.com/help/matlab/ref/double.numel.html)        | O número de elementos do array                                 |
| [isscalar](https://www.mathworks.com/help/matlab/ref/isscalar.html)         | Determina se a entrada é um escalar                            |
| [issorted](https://www.mathworks.com/help/matlab/ref/issorted.html)         | Determina se o array está ordenado                             |
| [issortedrows](https://www.mathworks.com/help/matlab/ref/issortedrows.html) | Determina se as linhas de uma matriz ou tabela estão ordenadas |
| [isvector](https://www.mathworks.com/help/matlab/ref/isvector.html)         | Determina se a entrada é um vetor                              |
| [ismatrix](https://www.mathworks.com/help/matlab/ref/ismatrix.html)         | Determina se a entrada é uma matriz                            |
| [isrow](https://www.mathworks.com/help/matlab/ref/isrow.html)               | Determina se a entrada é um vetor linha                        |
| [iscolumn](https://www.mathworks.com/help/matlab/ref/iscolumn.html)         | Determina se a entrada é um vetor coluna                       |
| [isempty](https://www.mathworks.com/help/matlab/ref/isempty.html)           | Determina se o array está vazio                                |

Refatore e reorganize

| -                                                                                   | -                                           |
| ----------------------------------------------------------------------------------- | :------------------------------------------ |
| [sort](https://www.mathworks.com/help/matlab/ref/sort.html)                         | Ordena o array                              |
| elements [sortrows](https://www.mathworks.com/help/matlab/ref/double.sortrows.html) | Ordena linhas de matriz ou linhas de tabela |
| [flip](https://www.mathworks.com/help/matlab/ref/flip.html)                         | Inverte a ordem dos elementos               |
| [fliplr](https://www.mathworks.com/help/matlab/ref/fliplr.html)                     | Inverte o array da esquerda para a direita  |
| [flipud](https://www.mathworks.com/help/matlab/ref/flipud.html)                     | Inverte o array de cima para baixo          |
| [rot90](https://www.mathworks.com/help/matlab/ref/rot90.html)                       | Gira um array em 90 graus                   |
| [transpose](https://www.mathworks.com/help/matlab/ref/transpose.html)               | Transpõe um vetor ou matriz                 |
| [ctranspose](https://www.mathworks.com/help/matlab/ref/ctranspose.html)             | Transposta conjugada complexa               |
| [permute](https://www.mathworks.com/help/matlab/ref/permute.html)                   | Permuta a dimensão do array                 |
| [ipermute](https://www.mathworks.com/help/matlab/ref/ipermute.html)                 | Permutação inversa das dimensões do array.  |
| [circshift](https://www.mathworks.com/help/matlab/ref/circshift.html)               | Desloca o array circularmente               |
| [shiftdim](https://www.mathworks.com/help/matlab/ref/shiftdim.html)                 | Desloca a dimensão do array                 |
| [reshape](https://www.mathworks.com/help/matlab/ref/reshape.html)                   | Remodela o array                            |
| [squeeze](https://www.mathworks.com/help/matlab/ref/squeeze.html)                   | Remove dimensões de comprimento 1           |

índice

| -                                                                 | -                                                                                       |
| ----------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| [colon](https://www.mathworks.com/help/matlab/ref/colon.html)     | Criação de vetores, índice de array e iteração de loop <code class="literal">for</code> |
| [end](https://www.mathworks.com/help/matlab/ref/end.html)         | Encerra um bloco de código ou indica o índice máximo do array                           |
| [ind2sub](https://www.mathworks.com/help/matlab/ref/ind2sub.html) | Converte índice linear em subscrito                                                     |
| [sub2ind](https://www.mathworks.com/help/matlab/ref/sub2ind.html) | Converte subscrito em índice linear                                                     |

### Tipos de valor {.row-span-2}

Crie variáveis numéricas

| -                                                               | -                                      |
| --------------------------------------------------------------- | :------------------------------------- |
| [double](https://www.mathworks.com/help/matlab/ref/double.html) | Array de precisão dupla                |
| [single](https://www.mathworks.com/help/matlab/ref/single.html) | Array de precisão simples              |
| [int8](https://www.mathworks.com/help/matlab/ref/int8.html)     | Array de inteiros com sinal de 8 bits  |
| [int16](https://www.mathworks.com/help/matlab/ref/int16.html)   | Array de inteiros com sinal de 16 bits |
| [int32](https://www.mathworks.com/help/matlab/ref/int32.html)   | Array de inteiros com sinal de 32 bits |
| [int64](https://www.mathworks.com/help/matlab/ref/int64.html)   | Array de inteiros com sinal de 64 bits |
| [uint8](https://www.mathworks.com/help/matlab/ref/uint8.html)   | Array de inteiros sem sinal de 8 bits  |
| [uint16](https://www.mathworks.com/help/matlab/ref/uint16.html) | Array de inteiros sem sinal de 16 bits |
| [uint32](https://www.mathworks.com/help/matlab/ref/uint32.html) | Array de inteiros sem sinal de 32 bits |
| [uint64](https://www.mathworks.com/help/matlab/ref/uint64.html) | Array de inteiros sem sinal de 64 bits |

Converta entre tipos numéricos

| -                                                                   | -                                                        |
| ------------------------------------------------------------------- | :------------------------------------------------------- |
| [cast](https://www.mathworks.com/help/matlab/ref/cast.html)         | Converte variáveis para tipos de dados diferentes        |
| [typecast](https://www.mathworks.com/help/matlab/ref/typecast.html) | Converte tipos de dados sem alterar os dados subjacentes |

Consulte tipo e valor

| -                                                                      | -                                                    |
| ---------------------------------------------------------------------- | :--------------------------------------------------- |
| [allfinite](https://www.mathworks.com/help/matlab/ref/allfinite.html") | Determina se todos os elementos do array são finitos |
| [anynan](https://www.mathworks.com/help/matlab/ref/anynan.html")       | Determina se algum elemento do array é NaN           |
| [isinteger](https://www.mathworks.com/help/matlab/ref/isinteger.html)  | Determina se a entrada é um array de inteiros        |
| [isfloat](https://www.mathworks.com/help/matlab/ref/isfloat.html)      | Determina se a entrada é um array de ponto flutuante |
| [isnumeric](https://www.mathworks.com/help/matlab/ref/isnumeric.html)  | Determina se a entrada é um array numérico           |
| [isreal](https://www.mathworks.com/help/matlab/ref/isreal.html)        | Determina se o array usa armazenamento complexo      |
| [isfinite](https://www.mathworks.com/help/matlab/ref/isfinite.html)    | Determina quais elementos do array são finitos       |
| [isinf](https://www.mathworks.com/help/matlab/ref/isinf.html)          | Determina quais elementos do array são infinitos     |
| [isnan](https://www.mathworks.com/help/matlab/ref/isnan.html)          | Determina quais elementos do array são NaN           |

Intervalo de valores

| -                                                                   | -                                                                          |
| ------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [eps](https://www.mathworks.com/help/matlab/ref/eps.html)           | Precisão relativa de ponto flutuante                                       |
| [flintmax](https://www.mathworks.com/help/matlab/ref/flintmax.html) | O maior inteiro consecutivo no formato de ponto flutuante                  |
| [Inf](https://www.mathworks.com/help/matlab/ref/inf.html)           | Cria um array com todos os valores `Inf`                                   |
| [intmax](https://www.mathworks.com/help/matlab/ref/intmax.html)     | O valor máximo de um tipo inteiro específico                               |
| [intmin](https://www.mathworks.com/help/matlab/ref/intmin.html)     | O valor mínimo de um tipo inteiro específico                               |
| [NaN](https://www.mathworks.com/help/matlab/ref/nan.html)           | Cria um array em que todos os valores são <code class="literal">NaN</code> |
| [realmax](https://www.mathworks.com/help/matlab/ref/realmax.html)   | O maior número de ponto flutuante positivo                                 |
| [realmin](https://www.mathworks.com/help/matlab/ref/realmin.html)   | O menor número de ponto flutuante padrão                                   |

### Loops e instruções condicionais

| -                                                                                | -                                                                            |
| -------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [if, elseif, else](https://www.mathworks.com/help/matlab/ref/if.html)            | Executa a instrução quando a condição é verdadeira                           |
| [switch, case, otherwise](https://www.mathworks.com/help/matlab/ref/switch.html) | Executa um de vários conjuntos de instruções                                 |
| [for](https://www.mathworks.com/help/matlab/ref/for.html)                        | Um loop `for` usado para repetir um número especificado de vezes             |
| [while](https://www.mathworks.com/help/matlab/ref/while.html)                    | Um loop `while` que executa repetidamente enquanto uma condição é verdadeira |
| [try, catch](https://www.mathworks.com/help/matlab/ref/try.html)                 | Executa a instrução e captura o erro resultante                              |
| [break](https://www.mathworks.com/help/matlab/ref/break.html)                    | Encerra a execução de um loop for ou while                                   |
| [return](https://www.mathworks.com/help/matlab/ref/return.html)                  | Retorna o controle ao script ou função que fez a chamada                     |
| [continue](https://www.mathworks.com/help/matlab/ref/continue.html)              | Passa o controle para a próxima iteração de um loop `for` ou `while`         |
| [pause](https://www.mathworks.com/help/matlab/ref/pause.html)                    | Suspende temporariamente a execução do `MATLAB`                              |
| [parfor](https://www.mathworks.com/help/matlab/ref/parfor.html)                  | Loop for paralelo                                                            |
| [end](https://www.mathworks.com/help/matlab/ref/end.html)                        | Encerra um bloco de código ou indica o índice máximo do array                |

{.style-list}

### Arrays de strings

| -                                                                 | -                                                  |
| ----------------------------------------------------------------- | :------------------------------------------------- |
| [string](https://www.mathworks.com/help/matlab/ref/string.html)   | Array de strings                                   |
| [strings](https://www.mathworks.com/help/matlab/ref/strings.html) | Cria um array de strings que não contém caracteres |
| [join](https://www.mathworks.com/help/matlab/ref/join.html)       | Mescla strings                                     |
| [plus](https://www.mathworks.com/help/matlab/ref/plus.html)       | Soma números, concatena strings                    |

### Arrays de caracteres

| -                                                                 | -                                                  |
| ----------------------------------------------------------------- | :------------------------------------------------- |
| [char](https://www.mathworks.com/help/matlab/ref/char.html)       | Array de caracteres                                |
| [cellstr](https://www.mathworks.com/help/matlab/ref/cellstr.html) | Converte em um cell array de vetores de caracteres |
| [blanks](https://www.mathworks.com/help/matlab/ref/blanks.html)   | Cria um array de caracteres em branco              |
| [newline](https://www.mathworks.com/help/matlab/ref/newline.html) | Cria uma nova linha                                |

### Arrays de caracteres ou strings

| -                                                                 | -                                                |
| ----------------------------------------------------------------- | :----------------------------------------------- |
| [compose](https://www.mathworks.com/help/matlab/ref/compose.html) | Formata dados em várias strings                  |
| [sprintf](https://www.mathworks.com/help/matlab/ref/sprintf.html) | Formata dados como string ou vetor de caracteres |
| [strcat](https://www.mathworks.com/help/matlab/ref/strcat.html)   | Concatena strings horizontalmente                |
| [append](https://www.mathworks.com/help/matlab/ref/append.html)   | Mescla strings                                   |

### char ou string — converter argumentos de entrada

| -                                                                                                               | -                                                                                          |
| --------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| [convertCharsToStrings](https://www.mathworks.com/help/matlab/ref/convertcharstostrings.html)                   | Converte array de caracteres em array de strings; os demais arrays permanecem inalterados  |
| [convertStringsToChars](https://www.mathworks.com/help/matlab/ref/convertstringstochars.html)                   | Converte array de strings em array de caracteres; os demais arrays permanecem inalterados  |
| [convertContainedStringsToChars](https://www.mathworks.com/help/matlab/ref/convertcontainedstringstochars.html) | Converte um array de strings em qualquer nível de um cell array ou estrutura {.style-list} |

### CHAR ou STRING — converter entre numérico e string

| -                                                                       | -                                        |
| ----------------------------------------------------------------------- | :--------------------------------------- |
| [double](https://www.mathworks.com/help/matlab/ref/double.html)         | Array de precisão dupla                  |
| [string](https://www.mathworks.com/help/matlab/ref/string.html)         | Array de strings                         |
| [str2double](https://www.mathworks.com/help/matlab/ref/str2double.html) | Converte uma string em um valor double   |
| [num2str](https://www.mathworks.com/help/matlab/ref/num2str.html)       | Converte números em arrays de caracteres |

### Caractere ou string — determinar tipo e atributos {.row-span-2}

Tipo de dados

| -                                                                               | -                                                                 |
| ------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| [ischar](https://www.mathworks.com/help/matlab/ref/ischar.html)                 | Determina se a entrada é um array de caracteres                   |
| [iscellstr](https://www.mathworks.com/help/matlab/ref/iscellstr.html)           | Determina se a entrada é um cell array de vetores de caracteres   |
| [isstring](https://www.mathworks.com/help/matlab/ref/isstring.html)             | Determina se a entrada é um array de strings                      |
| [isStringScalar](https://www.mathworks.com/help/matlab/ref/isstringscalar.html) | Determina se a entrada é um array de strings contendo um elemento |

Atributo de texto

| -                                                                     | -                                                                                  |
| --------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| [strlength](https://www.mathworks.com/help/matlab/ref/strlength.html) | Comprimento da string                                                              |
| [isstrprop](https://www.mathworks.com/help/matlab/ref/isstrprop.html) | Determina quais caracteres na string de entrada pertencem à categoria especificada |
| [isletter](https://www.mathworks.com/help/matlab/ref/isletter.html)   | Determina quais caracteres são letras                                              |
| [isspace](https://www.mathworks.com/help/matlab/ref/isspace.html)     | Determina quais caracteres são espaços em branco                                   |

### Caractere ou string — localizar e substituir {.row-span-2}

Pesquise

| -                                                                       | -                                                        |
| ----------------------------------------------------------------------- | :------------------------------------------------------- |
| [contains](https://www.mathworks.com/help/matlab/ref/contains.html)     | Determina se há um padrão na string                      |
| [matches](https://www.mathworks.com/help/matlab/ref/matches.html)       | Determina se um padrão corresponde a uma string          |
| [count](https://www.mathworks.com/help/matlab/ref/count.html)           | Conta o número de ocorrências de um padrão em uma string |
| [endsWith](https://www.mathworks.com/help/matlab/ref/endswith.html)     | Determina se uma string termina com um padrão            |
| [startsWith](https://www.mathworks.com/help/matlab/ref/startswith.html) | Determina se uma string começa com um padrão             |
| [strfind](https://www.mathworks.com/help/matlab/ref/strfind.html)       | Encontra uma string em outras strings                    |
| [sscanf](https://www.mathworks.com/help/matlab/ref/sscanf.html)         | Lê dados formatados de uma string                        |

substituir

| -                                                                               | -                                            |
| ------------------------------------------------------------------------------- | :------------------------------------------- |
| [replace](https://www.mathworks.com/help/matlab/ref/replace.html)               | Localiza e substitui uma ou mais substrings  |
| [replaceBetween](https://www.mathworks.com/help/matlab/ref/replacebetween.html) | Substitui a substring entre o início e o fim |
| [strrep](https://www.mathworks.com/help/matlab/ref/strrep.html)                 | Localiza e substitui uma substring           |

### Padrão de correspondência de string — criar padrão

| -                                                                 | -                                       |
| ----------------------------------------------------------------- | :-------------------------------------- |
| [pattern](https://www.mathworks.com/help/matlab/ref/pattern.html) | Padrão para buscar e corresponder texto |

### Padrão de correspondência de string — padrão de correspondência de caracteres

| -                                                                                           | -                                                                   |
| ------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| [alphanumericsPattern](https://www.mathworks.com/help/matlab/ref/alphanumericspattern.html) | Corresponde a caracteres alfanuméricos                              |
| [characterListPattern](https://www.mathworks.com/help/matlab/ref/characterlistpattern.html) | Corresponde a caracteres da lista                                   |
| [digitsPattern](https://www.mathworks.com/help/matlab/ref/digitspattern.html)               | Corresponde a caracteres de dígitos                                 |
| [lettersPattern](https://www.mathworks.com/help/matlab/ref/letterspattern.html)             | Corresponde a um padrão de letras                                   |
| [whitespacePattern](https://www.mathworks.com/help/matlab/ref/whitespacepattern.html)       | Corresponde a caracteres de espaço em branco                        |
| [wildcardPattern](https://www.mathworks.com/help/matlab/ref/wildcardpattern.html)           | Corresponde ao menor número possível de caracteres de qualquer tipo |

### Padrão de correspondência de string — regras de busca de padrão

| -                                                                                               | -                                                                |
| ----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| [optionalPattern](https://www.mathworks.com/help/matlab/ref/optionalpattern.html)               | Torna a correspondência de padrão opcional                       |
| [possessivePattern](https://www.mathworks.com/help/matlab/ref/possessivepattern.html)           | Corresponde ao padrão sem backtracking                           |
| [caseSensitivePattern](https://www.mathworks.com/help/matlab/ref/casesensitivepattern.html)     | Corresponde a padrões diferenciando maiúsculas de minúsculas     |
| [caseInsensitivePattern](https://www.mathworks.com/help/matlab/ref/caseinsensitivepattern.html) | Corresponde a padrões sem diferenciar maiúsculas de minúsculas   |
| [asFewOfPattern](https://www.mathworks.com/help/matlab/ref/asfewofpattern.html)                 | O número de correspondências do padrão deve ser o menor possível |
| [asManyOfPattern](https://www.mathworks.com/help/matlab/ref/asmanyofpattern.html)               | Correspondência de padrão o maior número de vezes possível       |

### Padrão de correspondência de string — padrão de limite {.row-span-2}

| -                                                                                           | -                                                                                 |
| ------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [alphanumericBoundary](https://www.mathworks.com/help/matlab/ref/alphanumericboundary.html) | Corresponde ao limite entre caracteres alfanuméricos e não alfanuméricos          |
| [digitBoundary](https://www.mathworks.com/help/matlab/ref/digitboundary.html)               | Corresponde ao limite entre caracteres de dígitos e não dígitos                   |
| [letterBoundary](https://www.mathworks.com/help/matlab/ref/letterboundary.html)             | Corresponde ao limite entre caracteres alfabéticos e não alfabéticos              |
| [whitespaceBoundary](https://www.mathworks.com/help/matlab/ref/whitespaceboundary.html)     | Corresponde ao limite entre caracteres de espaço em branco e não espaço em branco |
| [lineBoundary](https://www.mathworks.com/help/matlab/ref/lineboundary.html)                 | Corresponde ao início ou ao fim de uma linha                                      |
| [textBoundary](https://www.mathworks.com/help/matlab/ref/textboundary.html)                 | Corresponde ao início ou ao fim do texto                                          |
| [lookAheadBoundary](https://www.mathworks.com/help/matlab/ref/lookaheadboundary.html)       | Corresponde ao limite antes do padrão especificado                                |
| [lookBehindBoundary](https://www.mathworks.com/help/matlab/ref/lookbehindboundary.html)     | Limite após a correspondência do padrão especificado                              |

{.style-list}

### Padrão de correspondência de string — exibição de padrão personalizado

| -                                                                             | -                                        |
| ----------------------------------------------------------------------------- | :--------------------------------------- |
| [maskedPattern](https://www.mathworks.com/help/matlab/ref/maskedpattern.html) | Padrão com nome de exibição especificado |
| [namedPattern](https://www.mathworks.com/help/matlab/ref/namedpattern.html)   | Especifica um padrão nomeado             |

### Padrão de correspondência de string — expressão regular

| -                                                                                 | -                                                                             |
| --------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [regexp](https://www.mathworks.com/help/matlab/ref/regexp.html)                   | Corresponde a uma expressão regular (diferenciando maiúsculas de minúsculas)  |
| [regexpi](https://www.mathworks.com/help/matlab/ref/regexpi.html)                 | Corresponde a expressões regulares (sem diferenciar maiúsculas de minúsculas) |
| [regexprep](https://www.mathworks.com/help/matlab/ref/regexprep.html)             | Substitui texto usando expressões regulares                                   |
| [regexptranslate](https://www.mathworks.com/help/matlab/ref/regexptranslate.html) | Converte texto em expressões regulares                                        |
| [regexpPattern](https://www.mathworks.com/help/matlab/ref/regexppattern.html)     | Corresponde ao padrão da expressão regular especificada                       |

### Padrão de correspondência de string — juntar e dividir

| -                                                                               | -                                                                    |
| ------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [join](https://www.mathworks.com/help/matlab/ref/join.html)                     | Mescla strings                                                       |
| [plus](https://www.mathworks.com/help/matlab/ref/plus.html)                     | Soma números, concatena strings                                      |
| [split](https://www.mathworks.com/help/matlab/ref/split.html)                   | Divide a string no delimitador                                       |
| [splitlines](https://www.mathworks.com/help/matlab/ref/splitlines.html)         | Divide uma string nas quebras de linha                               |
| [strjoin](https://www.mathworks.com/help/matlab/ref/strjoin.html)               | Junta as strings do array                                            |
| [strsplit](https://www.mathworks.com/help/matlab/ref/strsplit.html)             | Divide uma string ou vetor de caracteres no delimitador especificado |
| [strtok](https://www.mathworks.com/help/matlab/ref/strtok.html)                 | Parte selecionada da string                                          |
| [extract](https://www.mathworks.com/help/matlab/ref/extract.html)               | Extrai uma substring de uma string                                   |
| [extractAfter](https://www.mathworks.com/help/matlab/ref/extractafter.html)     | Extrai a substring após a posição especificada                       |
| [extractBefore](https://www.mathworks.com/help/matlab/ref/extractbefore.html)   | Extrai a substring antes da posição especificada                     |
| [extractBetween](https://www.mathworks.com/help/matlab/ref/extractbetween.html) | Extrai a substring entre o ponto inicial e o ponto final             |

### Edição de strings {.row-span-2}

| -                                                                               | -                                                         |
| ------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| [erase](https://www.mathworks.com/help/matlab/ref/erase.html)                   | Exclui uma substring de uma string                        |
| [eraseBetween](https://www.mathworks.com/help/matlab/ref/erasebetween.html)     | Exclui a substring entre o início e o fim                 |
| [extract](https://www.mathworks.com/help/matlab/ref/extract.html)               | Extrai uma substring de uma string                        |
| [extractAfter](https://www.mathworks.com/help/matlab/ref/extractafter.html)     | Extrai a substring após a posição especificada            |
| [extractBefore](https://www.mathworks.com/help/matlab/ref/extractbefore.html)   | Extrai a substring antes da posição especificada          |
| [extractBetween](https://www.mathworks.com/help/matlab/ref/extractbetween.html) | Extrai a substring entre o ponto inicial e o ponto final  |
| [insertAfter](https://www.mathworks.com/help/matlab/ref/insertafter.html)       | Insere uma string após a substring especificada           |
| [insertBefore](https://www.mathworks.com/help/matlab/ref/insertbefore.html)     | Insere uma string antes da substring especificada         |
| [pad](https://www.mathworks.com/help/matlab/ref/pad.html)                       | Adiciona caracteres no início ou no fim de uma string     |
| [strip](https://www.mathworks.com/help/matlab/ref/strip.html)                   | Remove caracteres no início e no fim de uma string        |
| [lower](https://www.mathworks.com/help/matlab/ref/lower.html)                   | Converte a string para minúsculas                         |
| [upper](https://www.mathworks.com/help/matlab/ref/upper.html)                   | Converte a string para maiúsculas                         |
| [reverse](https://www.mathworks.com/help/matlab/ref/reverse.html)               | Inverte a ordem dos caracteres de uma string              |
| [deblank](https://www.mathworks.com/help/matlab/ref/deblank.html)               | Remove espaços em branco no fim de uma string             |
| [strtrim](https://www.mathworks.com/help/matlab/ref/strtrim.html)               | Remove espaços em branco no início e no fim de uma string |
| [strjust](https://www.mathworks.com/help/matlab/ref/strjust.html)               | Alinha a string                                           |

### Comparação de strings

| -                                                                   | -                                                                                                                       |
| ------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [matches](https://www.mathworks.com/help/matlab/ref/matches.html)   | Determina se um padrão corresponde a uma string                                                                         |
| [strcmp](https://www.mathworks.com/help/matlab/ref/strcmp.html)     | Compara strings                                                                                                         |
| [strcmpi](https://www.mathworks.com/help/matlab/ref/strcmpi.html)   | Compara strings (sem diferenciar maiúsculas de minúsculas)                                                              |
| [strncmp](https://www.mathworks.com/help/matlab/ref/strncmp.html)   | Compara os primeiros <code class="literal">n</code> caracteres de uma string (diferenciando maiúsculas de minúsculas)   |
| [strncmpi](https://www.mathworks.com/help/matlab/ref/strncmpi.html) | Compara os primeiros <code class="literal">n</code> caracteres de uma string (sem diferenciar maiúsculas de minúsculas) |

### Aritmética básica {.row-span-3}

#### Adição

- [+](https://www.mathworks.com/help/matlab/ref/plus.html) Soma números, concatena strings
- [sum](https://www.mathworks.com/help/matlab/ref/sum.html) Soma dos elementos do array
- [cumsum](https://www.mathworks.com/help/matlab/ref/cumsum.html) Soma cumulativa
- [movsum](https://www.mathworks.com/help/matlab/ref/movsum.html) Soma móvel

{.cols-2 .marker-none}

#### Subtração

- [-](https://www.mathworks.com/help/matlab/ref/minus.html) Subtração
- [diff](https://www.mathworks.com/help/matlab/ref/diff.html) Diferença e derivada aproximada

{.cols-2 .marker-none}

#### Multiplicação

| -                                                                       | -                                       |
| ----------------------------------------------------------------------- | :-------------------------------------- |
| [.\*](https://www.mathworks.com/help/matlab/ref/times.html)             | Multiplicação                           |
| [\*](https://www.mathworks.com/help/matlab/ref/mtimes.html)             | Multiplicação de matrizes               |
| [prod](https://www.mathworks.com/help/matlab/ref/prod.html)             | Produto dos elementos do array          |
| [cumprod](https://www.mathworks.com/help/matlab/ref/cumprod.html)       | Produto cumulativo                      |
| [pagemtimes](https://www.mathworks.com/help/matlab/ref/pagemtimes.html) | Multiplicação de matrizes por página    |
| [tensorprod](https://www.mathworks.com/help/matlab/ref/tensorprod.html) | Produtos tensoriais entre dois tensores |

#### Divisão

| -                                                             | -                                                            |
| ------------------------------------------------------------- | :----------------------------------------------------------- |
| [./](https://www.mathworks.com/help/matlab/ref/rdivide.html)  | Divisão à direita de arrays                                  |
| [.\\](https://www.mathworks.com/help/matlab/ref/ldivide.html) | Divisão à esquerda de arrays                                 |
| [/](https://www.mathworks.com/help/matlab/ref/mrdivide.html)  | Resolve o sistema de equações lineares xA = B em relação a x |
| [\\](https://www.mathworks.com/help/matlab/ref/mldivide.html) | Resolve o sistema de equações lineares Ax = B em relação a x |

#### Potência

- [.^](https://www.mathworks.com/help/matlab/ref/power.html) Exponenciação elemento a elemento
- [^](https://www.mathworks.com/help/matlab/ref/mpower.html) Potência de matriz

{.cols-2 .marker-none}

#### Transposta

| -                                                                               | -                                        |
| ------------------------------------------------------------------------------- | :--------------------------------------- |
| [.'](https://www.mathworks.com/help/matlab/ref/transpose.html)                  | Transpõe um vetor ou matriz              |
| ['](https://www.mathworks.com/help/matlab/ref/ctranspose.html)                  | Transposta conjugada complexa            |
| [pagetranspose](https://www.mathworks.com/help/matlab/ref/pagetranspose.html)   | Transposta por página                    |
| [pagectranspose](https://www.mathworks.com/help/matlab/ref/pagectranspose.html) | Transposta conjugada complexa por página |

#### Notação de array

- [uminus](https://www.mathworks.com/help/matlab/ref/uminus.html) Subtração unária
- [uplus](https://www.mathworks.com/help/matlab/ref/uplus.html) Adição unária

{.cols-2 .marker-none}

### Divisão modular e arredondamento

| -                                                                 | -                                                |
| ----------------------------------------------------------------- | :----------------------------------------------- |
| [mod](https://www.mathworks.com/help/matlab/ref/mod.html)         | Resto após a divisão (operação de módulo)        |
| [rem](https://www.mathworks.com/help/matlab/ref/rem.html)         | Resto após a divisão                             |
| [idivide](https://www.mathworks.com/help/matlab/ref/idivide.html) | Divisibilidade com opções de arredondamento      |
| [ceil](https://www.mathworks.com/help/matlab/ref/ceil.html)       | Arredonda em direção ao infinito positivo        |
| [fix](https://www.mathworks.com/help/matlab/ref/fix.html)         | Arredonda em direção a zero                      |
| [floor](https://www.mathworks.com/help/matlab/ref/floor.html)     | Arredonda em direção ao infinito negativo        |
| [round](https://www.mathworks.com/help/matlab/ref/round.html)     | Arredonda para o decimal ou inteiro mais próximo |

### Funções binárias personalizadas

| -                                                               | -                                                                                       |
| --------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| [bsxfun](https://www.mathworks.com/help/matlab/ref/bsxfun.html) | Aplica operações elemento a elemento em dois arrays (com expansão implícita habilitada) |

### Operações relacionais

comparação de valores

| -                                                                   | -                                                               |
| ------------------------------------------------------------------- | :-------------------------------------------------------------- |
| [==](https://www.mathworks.com/help/matlab/ref/eq.html)             | Determina igualdade                                             |
| [>=](https://www.mathworks.com/help/matlab/ref/ge.html)             | Determina maior ou igual a                                      |
| [>](https://www.mathworks.com/help/matlab/ref/gt.html)              | Determina maior que                                             |
| [<=](https://www.mathworks.com/help/matlab/ref/le.html)             | Determina menor ou igual a                                      |
| [<](https://www.mathworks.com/help/matlab/ref/lt.html)              | Determina menor que                                             |
| [~=](https://www.mathworks.com/help/matlab/ref/ne.html)             | Determina desigualdade                                          |
| [isequal](https://www.mathworks.com/help/matlab/ref/isequal.html)   | Determina a igualdade de arrays                                 |
| [isequaln](https://www.mathworks.com/help/matlab/ref/isequaln.html) | Testa a igualdade de arrays, tratando valores `NaN` como iguais |

### Operações lógicas (booleanas)

condição verdadeira ou falsa

| -                                                                                                      | -                                                                         |
| ------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| [Curto-circuito &&, \|\|](https://www.mathworks.com/help/matlab/ref/logicaloperatorsshortcircuit.html) | Operadores lógicos com função de curto-circuito                           |
| [&](https://www.mathworks.com/help/matlab/ref/and.html)                                                | Lógica computacional `AND`                                                |
| [~](https://www.mathworks.com/help/matlab/ref/not.html)                                                | Lógica computacional `NOT`                                                |
| [\|](https://www.mathworks.com/help/matlab/ref/or.html)                                                | Lógica de cálculo `OR`                                                    |
| [xor](https://www.mathworks.com/help/matlab/ref/xor.html)                                              | Calcula o `OR` exclusivo lógico                                           |
| [all](https://www.mathworks.com/help/matlab/ref/all.html)                                              | Determina se todos os elementos do array são diferentes de zero ou `true` |
| [any](https://www.mathworks.com/help/matlab/ref/any.html)                                              | Determina se algum elemento do array é diferente de zero                  |
| [false](https://www.mathworks.com/help/matlab/ref/false.html)                                          | Lógico `0` (falso)                                                        |
| [find](https://www.mathworks.com/help/matlab/ref/find.html)                                            | Encontra o índice e o valor de elementos diferentes de zero               |
| [islogical](https://www.mathworks.com/help/matlab/ref/islogical.html)                                  | Determina se a entrada é um array lógico                                  |
| [logical](https://www.mathworks.com/help/matlab/ref/logical.html)                                      | Converte valores numéricos em valores lógicos                             |
| [true](https://www.mathworks.com/help/matlab/ref/true.html)                                            | Valor lógico `1` (verdadeiro)                                             |

### Operações de conjunto

união, interseção, relação de conjuntos

| -                                                                            | -                                                                         |
| ---------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [intersect](https://www.mathworks.com/help/matlab/ref/double.intersect.html) | Define a interseção de dois arrays                                        |
| [ismember](https://www.mathworks.com/help/matlab/ref/double.ismember.html)   | Determina se um elemento de array pertence a um array de conjunto         |
| [setdiff](https://www.mathworks.com/help/matlab/ref/double.setdiff.html)     | Define a diferença entre dois arrays                                      |
| [setxor](https://www.mathworks.com/help/matlab/ref/double.setxor.html)       | Define o XOR de dois arrays                                               |
| [union](https://www.mathworks.com/help/matlab/ref/double.union.html)         | Define a união de dois arrays                                             |
| [unique](https://www.mathworks.com/help/matlab/ref/double.unique.html)       | Valor único em um array                                                   |
| [ismembertol](https://www.mathworks.com/help/matlab/ref/ismembertol.html)    | Pertencimento a conjunto dentro de uma tolerância                         |
| [uniquetol](https://www.mathworks.com/help/matlab/ref/uniquetol.html)        | Valores únicos dentro de uma tolerância                                   |
| [join](https://www.mathworks.com/help/matlab/ref/table.join.html)            | Mescla duas tabelas ou timetables linha a linha usando uma variável-chave |
| [innerjoin](https://www.mathworks.com/help/matlab/ref/innerjoin.html)        | Inner join entre duas tabelas ou timetables                               |
| [outerjoin](https://www.mathworks.com/help/matlab/ref/outerjoin.html)        | Outer join entre duas tabelas ou timetables                               |

### Operações bit a bit

defina, desloque ou compare bitfields específicos

| -                                                                     | -                                             |
| --------------------------------------------------------------------- | :-------------------------------------------- |
| [bitand](https://www.mathworks.com/help/matlab/ref/bitand.html)       | `AND` bit a bit                               |
| [bitor](https://www.mathworks.com/help/matlab/ref/bitor.html)         | `OR` bit a bit                                |
| [bitxor](https://www.mathworks.com/help/matlab/ref/bitxor.html)       | `XOR` bit a bit                               |
| [bitcmp](https://www.mathworks.com/help/matlab/ref/bitcmp.html)       | Complemento bit a bit                         |
| [bitget](https://www.mathworks.com/help/matlab/ref/bitget.html)       | Obtém o bit na posição especificada           |
| [bitset](https://www.mathworks.com/help/matlab/ref/bitset.html)       | Define o bit na posição especificada          |
| [bitshift](https://www.mathworks.com/help/matlab/ref/bitshift.html)   | Desloca bits pelo número especificado de bits |
| [swapbytes](https://www.mathworks.com/help/matlab/ref/swapbytes.html) | Troca a ordem dos bytes                       |

## Importação e exportação de dados

### Arquivo de texto — ler e gravar tabela ou timetable {.row-span-2}

#### Importação e exportação básicas

| -                                                                               | -                                        |
| ------------------------------------------------------------------------------- | :--------------------------------------- |
| [readtable](https://www.mathworks.com/help/matlab/ref/readtable.html)           | Cria uma tabela a partir de um arquivo   |
| [writetable](https://www.mathworks.com/help/matlab/ref/writetable.html)         | Grava a tabela em um arquivo             |
| [readtimetable](https://www.mathworks.com/help/matlab/ref/readtimetable.html)   | Cria um timetable a partir de um arquivo |
| [writetimetable](https://www.mathworks.com/help/matlab/ref/writetimetable.html) | Grava o timetable em um arquivo          |

#### Defina as regras de importação

| -                                                                                                                      | -                                                                         |
| ---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| [detectImportOptions](https://www.mathworks.com/help/matlab/ref/detectimportoptions.html)                              | Gera opções de importação com base no conteúdo do arquivo                 |
| [delimitedTextImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.html) | Objeto de opções de importação para texto delimitado                      |
| [fixedWidthImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.text.fixedwidthimportoptions.html)       | Objeto de opções de importação para arquivos de texto de largura fixa     |
| [xmlImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xmlimportoptions.html)                      | Objeto de opções de importação para arquivo XML                           |
| [htmlImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.html.htmlimportoptions.html)                   | Objeto de opções de importação para arquivos HTML                         |
| [wordDocumentImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.word.worddocumentimportoptions.html)   | Objeto de opções de importação de arquivos `Microsoft Word`               |
| [getvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.getvaropts.html)      | Obtém as opções de importação de variáveis                                |
| [setvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvaropts.html)      | Define as opções de importação de variáveis                               |
| [setvartype](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvartype.html)      | Define o tipo de dados da variável                                        |
| [preview](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.preview.html)            | Pré-visualiza oito linhas de dados do arquivo com as opções de importação |

{.style-list}

### Arquivos de texto — ler e gravar matrizes e arrays

| -                                                                         | -                                                    |
| ------------------------------------------------------------------------- | :--------------------------------------------------- |
| [readmatrix](https://www.mathworks.com/help/matlab/ref/readmatrix.html)   | Lê uma matriz de um arquivo                          |
| [writematrix](https://www.mathworks.com/help/matlab/ref/writematrix.html) | Grava a matriz em um arquivo                         |
| [readcell](https://www.mathworks.com/help/matlab/ref/readcell.html)       | Lê um cell array de um arquivo                       |
| [writecell](https://www.mathworks.com/help/matlab/ref/writecell.html)     | Grava um cell array em um arquivo                    |
| [readvars](https://www.mathworks.com/help/matlab/ref/readvars.html)       | Lê variáveis de um arquivo                           |
| [textscan](https://www.mathworks.com/help/matlab/ref/textscan.html)       | Lê dados formatados de um arquivo de texto ou string |
| [type](https://www.mathworks.com/help/matlab/ref/type.html)               | Exibe o conteúdo do arquivo                          |
| [fileread](https://www.mathworks.com/help/matlab/ref/fileread.html)       | Lê o conteúdo do arquivo em formato de texto         |
| [readlines](https://www.mathworks.com/help/matlab/ref/readlines.html)     | Lê as linhas de um arquivo como um array de strings  |
| [writelines](https://www.mathworks.com/help/matlab/ref/writelines.html)   | Grava texto em um arquivo                            |

### Planilha — ler e gravar tabela ou timetable {.row-span-2}

Importação e exportação básicas

| -                                                                               | -                                                      |
| ------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [readtable](https://www.mathworks.com/help/matlab/ref/readtable.html)           | Cria uma tabela a partir de um arquivo                 |
| [writetable](https://www.mathworks.com/help/matlab/ref/writetable.html)         | Grava a tabela em um arquivo                           |
| [readtimetable](https://www.mathworks.com/help/matlab/ref/readtimetable.html)   | Cria um timetable a partir de um arquivo               |
| [writetimetable](https://www.mathworks.com/help/matlab/ref/writetimetable.html) | Grava o timetable em um arquivo                        |
| [sheetnames](https://www.mathworks.com/help/matlab/ref/sheetnames.html)         | Obtém os nomes das planilhas de um arquivo de planilha |

{.style-list}

Defina as regras de importação

| -                                                                                                                         | -                                                                            |
| ------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [detectImportOptions](https://www.mathworks.com/help/matlab/ref/detectimportoptions.html)                                 | Gera opções de importação com base no conteúdo do arquivo                    |
| [spreadsheetImportOptions](https://www.mathworks.com/help/matlab/ref/matlab.io.spreadsheet.spreadsheetimportoptions.html) | Objeto de opções de importação de planilhas                                  |
| [getvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.getvaropts.html)         | Obtém as opções de importação de variáveis                                   |
| [setvaropts](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvaropts.html)         | Define as opções de importação de variáveis                                  |
| [setvartype](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.setvartype.html)         | Define o tipo de dados da variável                                           |
| [preview](https://www.mathworks.com/help/matlab/ref/matlab.io.text.delimitedtextimportoptions.preview.html)               | Pré-visualiza oito linhas de dados de um arquivo com as opções de importação |

{.style-list}

### Planilha — ler e gravar matrizes e arrays

| -                                                                         | -                                 |
| ------------------------------------------------------------------------- | :-------------------------------- |
| [readmatrix](https://www.mathworks.com/help/matlab/ref/readmatrix.html)   | Lê uma matriz de um arquivo       |
| [writematrix](https://www.mathworks.com/help/matlab/ref/writematrix.html) | Grava a matriz em um arquivo      |
| [readcell](https://www.mathworks.com/help/matlab/ref/readcell.html)       | Lê um cell array de um arquivo    |
| [writecell](https://www.mathworks.com/help/matlab/ref/writecell.html)     | Grava um cell array em um arquivo |
| [readvars](https://www.mathworks.com/help/matlab/ref/readvars.html)       | Lê variáveis de um arquivo        |
| [importdata](https://www.mathworks.com/help/matlab/ref/importdata.html)   | Carrega dados de um arquivo       |

### Imagens

| -                                                                 | -                                                    |
| ----------------------------------------------------------------- | :--------------------------------------------------- |
| [imfinfo](https://www.mathworks.com/help/matlab/ref/imfinfo.html) | Informações sobre arquivos gráficos                  |
| [imread](https://www.mathworks.com/help/matlab/ref/imread.html)   | Lê uma imagem de um arquivo gráfico                  |
| [imwrite](https://www.mathworks.com/help/matlab/ref/imwrite.html) | Grava uma imagem em um arquivo gráfico               |
| [Tiff](https://www.mathworks.com/help/matlab/ref/tiff.html)       | Entrada do MATLAB para rotinas da biblioteca LibTIFF |

### Ler ou gravar um arquivo NetCDF {.row-span-2}

| -                                                                             | -                                                                       |
| ----------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| [nccreate](https://www.mathworks.com/help/matlab/ref/nccreate.html)           | Cria variáveis em um arquivo NetCDF                                     |
| [ncdisp](https://www.mathworks.com/help/matlab/ref/ncdisp.html)               | Exibe o conteúdo da fonte de dados NetCDF na janela da linha de comando |
| [ncinfo](https://www.mathworks.com/help/matlab/ref/ncinfo.html)               | Retorna informações sobre uma fonte de dados NetCDF                     |
| [ncread](https://www.mathworks.com/help/matlab/ref/ncread.html)               | Lê dados de variáveis de uma fonte de dados NetCDF                      |
| [ncreadatt](https://www.mathworks.com/help/matlab/ref/ncreadatt.html)         | Lê valores de atributos em uma fonte de dados NetCDF                    |
| [ncwrite](https://www.mathworks.com/help/matlab/ref/ncwrite.html)             | Grava dados em um arquivo NetCDF                                        |
| [ncwriteatt](https://www.mathworks.com/help/matlab/ref/ncwriteatt.html)       | Grava atributos em um arquivo NetCDF                                    |
| [ncwriteschema](https://www.mathworks.com/help/matlab/ref/ncwriteschema.html) | Adiciona uma definição de schema NetCDF a um arquivo NetCDF             |

### Pacote da biblioteca NetCDF — funções da biblioteca

| -                                                                                                 | -                                                                      |
| ------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [netcdf.getChunkCache](https://www.mathworks.com/help/matlab/ref/netcdf.getchunkcache.html)       | Recupera as configurações de cache de chunks da biblioteca NetCDF      |
| [netcdf.inqLibVers](https://www.mathworks.com/help/matlab/ref/netcdf.inqlibvers.html)             | Retorna informações de versão da biblioteca NetCDF                     |
| [netcdf.setChunkCache](https://www.mathworks.com/help/matlab/ref/netcdf.setchunkcache.html)       | Define as configurações padrão de cache de chunks da biblioteca NetCDF |
| [netcdf.setDefaultFormat](https://www.mathworks.com/help/matlab/ref/netcdf.setdefaultformat.html) | Altera o formato padrão de arquivo netCDF                              |

{.style-list}

### Pacote da biblioteca NetCDF — operações de arquivo {.row-span-2}

| -                                                                                         | -                                                     |
| ----------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| [netcdf.abort](https://www.mathworks.com/help/matlab/ref/netcdf.abort.html)               | Restaura a definição mais recente do arquivo netCDF   |
| [netcdf.close](https://www.mathworks.com/help/matlab/ref/netcdf.close.html)               | Fecha um arquivo netCDF                               |
| [netcdf.create](https://www.mathworks.com/help/matlab/ref/netcdf.create.html)             | Cria um novo dataset NetCDF                           |
| [netcdf.endDef](https://www.mathworks.com/help/matlab/ref/netcdf.enddef.html)             | Encerra o modo de definição do arquivo netCDF         |
| [netcdf.inq](https://www.mathworks.com/help/matlab/ref/netcdf.inq.html)                   | Retorna informações sobre um arquivo netCDF           |
| [netcdf.inqFormat](https://www.mathworks.com/help/matlab/ref/netcdf.inqformat.html)       | Determina o formato de um arquivo NetCDF              |
| [netcdf.inqGrps](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrps.html)           | Recupera um array de IDs de subgrupos                 |
| [netcdf.inqUnlimDims](https://www.mathworks.com/help/matlab/ref/netcdf.inqunlimdims.html) | Recupera uma lista de dimensões infinitas em um grupo |
| [netcdf.open](https://www.mathworks.com/help/matlab/ref/netcdf.open.html)                 | Abre uma fonte de dados NetCDF                        |
| [netcdf.reDef](https://www.mathworks.com/help/matlab/ref/netcdf.redef.html)               | Coloca um arquivo netCDF aberto no modo de definição  |
| [netcdf.setFill](https://www.mathworks.com/help/matlab/ref/netcdf.setfill.html)           | Define o modo de preenchimento do netCDF              |
| [netcdf.sync](https://www.mathworks.com/help/matlab/ref/netcdf.sync.html)                 | Sincroniza arquivos netCDF com o disco                |

### Pacote da biblioteca NetCDF — dimensões

| -                                                                                   | -                                                 |
| ----------------------------------------------------------------------------------- | :------------------------------------------------ |
| [netcdf.defdim](https://www.mathworks.com/help/matlab/ref/netcdf.defdim.html)       | Cria dimensões netCDF                             |
| [netcdf.inqDim](https://www.mathworks.com/help/matlab/ref/netcdf.inqdim.html)       | Retorna nomes e comprimentos das dimensões netCDF |
| [netcdf.inqDimID](https://www.mathworks.com/help/matlab/ref/netcdf.inqdimid.html)   | Retorna o ID da dimensão                          |
| [netcdf.renameDim](https://www.mathworks.com/help/matlab/ref/netcdf.renamedim.html) | Altera os nomes das dimensões netCDF              |

### Pacote da biblioteca NetCDF — grupo

| -                                                                                             | -                                                             |
| --------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| [netcdf.defGrp](https://www.mathworks.com/help/matlab/ref/netcdf.defgrp.html)                 | Cria grupos em um arquivo NetCDF                              |
| [netcdf.inqDimIDs](https://www.mathworks.com/help/matlab/ref/netcdf.inqdimids.html)           | Recupera uma lista de identificadores de dimensão em um grupo |
| [netcdf.inqGrpName](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrpname.html)         | Recupera o nome do grupo                                      |
| [netcdf.inqGrpNameFull](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrpnamefull.html) | O caminho completo do grupo                                   |
| [netcdf.inqGrpParent](https://www.mathworks.com/help/matlab/ref/netcdf.inqgrpparent.html)     | Recupera o ID do grupo pai.                                   |
| [netcdf.inqNcid](https://www.mathworks.com/help/matlab/ref/netcdf.inqncid.html)               | Retorna o ID de um grupo nomeado                              |
| [netcdf.inqVarIDs](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarids.html)           | IDs de todas as variáveis do grupo                            |

### Pacote da biblioteca NetCDF — variável {.row-span-3}

| -                                                                                                 | -                                                                               |
| ------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| [netcdf.defVarFill](https://www.mathworks.com/help/matlab/ref/netcdf.defvarfill.html)             | Define o parâmetro de preenchimento de uma variável NetCDF                      |
| [netcdf.defVar](https://www.mathworks.com/help/matlab/ref/netcdf.defvar.html)                     | Cria uma variável NetCDF                                                        |
| [netcdf.defVarChunking](https://www.mathworks.com/help/matlab/ref/netcdf.defvarchunking.html)     | Define o comportamento de chunking das variáveis NetCDF                         |
| [netcdf.defVarDeflate](https://www.mathworks.com/help/matlab/ref/netcdf.defvardeflate.html)       | Define parâmetros de compressão das variáveis NetCDF                            |
| [netcdf.defVarFletcher32](https://www.mathworks.com/help/matlab/ref/netcdf.defvarfletcher32.html) | Define parâmetros de validação das variáveis NetCDF                             |
| [netcdf.getVar](https://www.mathworks.com/help/matlab/ref/netcdf.getvar.html)                     | Lê dados de uma variável NetCDF                                                 |
| [netcdf.inqVar](https://www.mathworks.com/help/matlab/ref/netcdf.inqvar.html)                     | Informações sobre variáveis                                                     |
| [netcdf.inqVarChunking](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarchunking.html)     | Determina as configurações de chunking das variáveis NetCDF                     |
| [netcdf.inqVarDeflate](https://www.mathworks.com/help/matlab/ref/netcdf.inqvardeflate.html)       | Determina as configurações de compressão das variáveis NetCDF                   |
| [netcdf.inqVarFill](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarfill.html)             | Determina o valor do parâmetro de preenchimento de uma variável NetCDF          |
| [netcdf.inqVarFletcher32](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarfletcher32.html) | Informações sobre as configurações de checksum Fletcher32 para variáveis NetCDF |
| [netcdf.inqVarID](https://www.mathworks.com/help/matlab/ref/netcdf.inqvarid.html)                 | Retorna o ID associado ao nome da variável                                      |
| [netcdf.putVar](https://www.mathworks.com/help/matlab/ref/netcdf.putvar.html)                     | Grava dados em uma variável netCDF                                              |
| [netcdf.renameVar](https://www.mathworks.com/help/matlab/ref/netcdf.renamevar.html)               | Altera o nome da variável netCDF                                                |

{.style-list}

### Pacote da biblioteca NetCDF — propriedades

| -                                                                                     | -                                          |
| ------------------------------------------------------------------------------------- | :----------------------------------------- |
| [netcdf.copyAtt](https://www.mathworks.com/help/matlab/ref/netcdf.copyatt.html)       | Copia um atributo para um novo local       |
| [netcdf.delAtt](https://www.mathworks.com/help/matlab/ref/netcdf.delatt.html)         | Remove um atributo netCDF                  |
| [netcdf.getAtt](https://www.mathworks.com/help/matlab/ref/netcdf.getatt.html)         | Retorna o atributo NetCDF                  |
| [netcdf.inqAtt](https://www.mathworks.com/help/matlab/ref/netcdf.inqatt.html)         | Retorna informações sobre atributos netCDF |
| [netcdf.inqAttID](https://www.mathworks.com/help/matlab/ref/netcdf.inqattid.html)     | Retorna o ID de um atributo netCDF         |
| [netcdf.inqAttName](https://www.mathworks.com/help/matlab/ref/netcdf.inqattname.html) | Retorna o nome do atributo netCDF          |
| [netcdf.putAtt](https://www.mathworks.com/help/matlab/ref/netcdf.putatt.html)         | Grava atributos netCDF                     |
| [netcdf.renameAtt](https://www.mathworks.com/help/matlab/ref/netcdf.renameatt.html)   | Altera o nome do atributo                  |

### Pacote da biblioteca NetCDF — tipos definidos pelo usuário

| :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| [netcdf.defVlen](https://www.mathworks.com/help/matlab/ref/netcdf.defvlen.html)         | Define um tipo de array de comprimento variável definido pelo usuário (NC_VLEN) |
| [netcdf.inqUserType](https://www.mathworks.com/help/matlab/ref/netcdf.inqusertype.html) | Retorna informações sobre um tipo definido pelo usuário                         |
| [netcdf.inqVlen](https://www.mathworks.com/help/matlab/ref/netcdf.inqvlen.html)         | Retorna informações sobre o tipo `NC_VLEN` definido pelo usuário                |

{.style-list}

### Pacote da biblioteca NetCDF — utilitários

| -                                                                                                 | -                                                                 |
| ------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| [netcdf.getConstant](https://www.mathworks.com/help/matlab/ref/netcdf.getconstant.html)           | Retorna o valor da constante nomeada                              |
| [netcdf.getConstantNames](https://www.mathworks.com/help/matlab/ref/netcdf.getconstantnames.html) | Retorna uma lista de constantes conhecidas pela biblioteca netCDF |

{.style-list}

### Ler ou gravar arquivos HDF5

| -                                                                       | -                                 |
| ----------------------------------------------------------------------- | :-------------------------------- |
| [h5create](https://www.mathworks.com/help/matlab/ref/h5create.html)     | Cria um dataset HDF5              |
| [h5disp](https://www.mathworks.com/help/matlab/ref/h5disp.html)         | Exibe o conteúdo de arquivos HDF5 |
| [h5info](https://www.mathworks.com/help/matlab/ref/h5info.html)         | Informações sobre arquivos HDF5   |
| [h5read](https://www.mathworks.com/help/matlab/ref/h5read.html)         | Lê dados de um dataset HDF5       |
| [h5readatt](https://www.mathworks.com/help/matlab/ref/h5readatt.html)   | Lê atributos de arquivos HDF5     |
| [h5write](https://www.mathworks.com/help/matlab/ref/h5write.html)       | Grava um dataset HDF5             |
| [h5writeatt](https://www.mathworks.com/help/matlab/ref/h5writeatt.html) | Grava atributos HDF5              |

### Pacote da biblioteca HDF5 {.row-span-4}

| -                                                                                              | -                                                                           |
| ---------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| [Biblioteca (H5)](https://www.mathworks.com/help/matlab/ref/libraryh5.html)                    | Funções de uso geral para toda a biblioteca HDF5                            |
| [Atributo (H5A)](https://www.mathworks.com/help/matlab/ref/attributeh5a.html)                  | Metadados associados a datasets ou grupos                                   |
| [Dataset (H5D)](https://www.mathworks.com/help/matlab/ref/dataseth5d.html)                     | Arrays multidimensionais de elementos de dados e metadados de suporte       |
| [Escala de dimensão (H5DS)](https://www.mathworks.com/help/matlab/ref/dimensionscaleh5ds.html) | Escala de dimensão associada às dimensões do dataset                        |
| [Erro (H5E)](https://www.mathworks.com/help/matlab/ref/errorh5e.html)                          | Tratamento de erros                                                         |
| [Arquivo (H5F)](https://www.mathworks.com/help/matlab/ref/fileh5f.html)                        | Acesso a arquivos HDF5                                                      |
| [Grupo (H5G)](https://www.mathworks.com/help/matlab/ref/grouph5g.html)                         | Organização dos objetos no arquivo                                          |
| [Identificador (H5I)](https://www.mathworks.com/help/matlab/ref/identifierh5i.html)            | Identificadores de objetos HDF5                                             |
| [Link (H5L)](https://www.mathworks.com/help/matlab/ref/linkh5l.html)                           | Links no arquivo HDF5                                                       |
| [MATLAB (H5ML)](https://www.mathworks.com/help/matlab/ref/matlabh5ml.html)                     | Funções utilitárias do `MATLAB` que não fazem parte da biblioteca C do HDF5 |
| [Objeto (H5O)](https://www.mathworks.com/help/matlab/ref/objecth5o.html)                       | Objetos no arquivo                                                          |
| [Propriedade (H5P)](https://www.mathworks.com/help/matlab/ref/propertyh5p.html)                | Listas de propriedades de objetos                                           |
| [Referência (H5R)](https://www.mathworks.com/help/matlab/ref/referenceh5r.html)                | Referências HDF5                                                            |
| [Dataspace (H5S)](https://www.mathworks.com/help/matlab/ref/dataspaceh5s.html)                 | Dimensionalidade do dataset                                                 |
| [Datatype (H5T)](https://www.mathworks.com/help/matlab/ref/datatypeh5t.html)                   | Tipo de dados dos elementos em um dataset                                   |

{.style-list}

### Arquivos HDF4 — funções avançadas

| -                                                                 | -                                          |
| ----------------------------------------------------------------- | :----------------------------------------- |
| [hdfinfo](https://www.mathworks.com/help/matlab/ref/hdfinfo.html) | Informações sobre arquivos HDF4 ou HDF-EOS |
| [hdfread](https://www.mathworks.com/help/matlab/ref/hdfread.html) | Lê dados de arquivos HDF4 ou HDF-EOS       |
| [imread](https://www.mathworks.com/help/matlab/ref/imread.html)   | Lê uma imagem de um arquivo gráfico        |
| [imwrite](https://www.mathworks.com/help/matlab/ref/imwrite.html) | Grava uma imagem em um arquivo gráfico     |

### Funções de baixo nível — pacote {.row-span-3}

| -                                                                                         | -                                                                                 |
| ----------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [matlab.io.hdf4.sd](https://www.mathworks.com/help/matlab/ref/matlab.io.hdf4.sd.html)     | Interage diretamente com a interface de dataset científico multifile (SD) do HDF4 |
| [matlab.io.hdfeos.gd](https://www.mathworks.com/help/matlab/ref/matlab.io.hdfeos.gd.html) | Acesso de baixo nível a dados de grade HDF-EOS                                    |
| [matlab.io.hdfeos.sw](https://www.mathworks.com/help/matlab/ref/matlab.io.hdfeos.sw.html) | Acesso de baixo nível a arquivos segmentados HDF-EOS                              |

#### Funções de baixo nível — funções

| -                                                                 | -                                                              |
| ----------------------------------------------------------------- | :------------------------------------------------------------- |
| [hdfan](https://www.mathworks.com/help/matlab/ref/hdfan.html)     | A entrada da interface de anotação multifile (AN) do HDF       |
| [hdfhx](https://www.mathworks.com/help/matlab/ref/hdfhx.html)     | A entrada da interface de dados externos (HX) do HDF           |
| [hdfh](https://www.mathworks.com/help/matlab/ref/hdfh.html)       | A entrada da interface H do HDF                                |
| [hdfhd](https://www.mathworks.com/help/matlab/ref/hdfhd.html)     | A entrada da interface HD do HDF                               |
| [hdfhe](https://www.mathworks.com/help/matlab/ref/hdfhe.html)     | A entrada da interface HE do HDF                               |
| [hdfml](https://www.mathworks.com/help/matlab/ref/hdfml.html)     | Utilitários para uso com funções de entrada HDF do `MATLAB`    |
| [hdfpt](https://www.mathworks.com/help/matlab/ref/hdfpt.html)     | Interface do objeto point do HDF-EOS                           |
| [hdfv](https://www.mathworks.com/help/matlab/ref/hdfv.html)       | A entrada da interface Vgroup (V) do HDF                       |
| [hdfvf](https://www.mathworks.com/help/matlab/ref/hdfvf.html)     | A entrada da função VF na interface Vdata do HDF               |
| [hdfvh](https://www.mathworks.com/help/matlab/ref/hdfvh.html)     | A entrada da função VH na interface Vdata do HDF               |
| [hdfvs](https://www.mathworks.com/help/matlab/ref/hdfvs.html)     | A entrada da função VS na interface Vdata do HDF               |
| [hdfdf24](https://www.mathworks.com/help/matlab/ref/hdfdf24.html) | Entrada da interface de imagem raster de 24 bits (DF24) do HDF |
| [hdfdfr8](https://www.mathworks.com/help/matlab/ref/hdfdfr8.html) | Entrada da interface de imagem raster de 8 bits (DFR8) do HDF  |

### Arquivo FITS — funções

| -                                                                     | -                               |
| --------------------------------------------------------------------- | :------------------------------ |
| [fitsdisp](https://www.mathworks.com/help/matlab/ref/fitsdisp.html)   | Exibe metadados FITS            |
| [fitsinfo](https://www.mathworks.com/help/matlab/ref/fitsinfo.html)   | Informações sobre arquivos FITS |
| [fitsread](https://www.mathworks.com/help/matlab/ref/fitsread.html)   | Lê dados em arquivos FITS       |
| [fitswrite](https://www.mathworks.com/help/matlab/ref/fitswrite.html) | Grava imagem em arquivo FITS    |

### Arquivos FITS — acesso a arquivos

| -                                                                                          | -                              |
| ------------------------------------------------------------------------------------------ | :----------------------------- |
| [createFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.createfile.html)     | Cria arquivo FITS              |
| [openFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.openfile.html)         | Abre arquivo FITS              |
| [openDiskFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.opendiskfile.html) | Abre arquivo FITS              |
| [closeFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.closefile.html)       | Fecha arquivo FITS             |
| [deleteFile](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletefile.html)     | Exclui arquivo FITS            |
| [fileName](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.filename.html)         | O nome do arquivo FITS         |
| [fileMode](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.filemode.html)         | Modo de I/O para arquivos FITS |

### Arquivos FITS — processamento de imagens

| -                                                                                      | -                                          |
| -------------------------------------------------------------------------------------- | :----------------------------------------- |
| [createImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.createimg.html)   | Cria imagem FITS                           |
| [getImgSize](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getimgsize.html) | Tamanho da imagem                          |
| [getImgType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getimgtype.html) | O tipo de dados da imagem                  |
| [insertImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertimg.html)   | Insere uma imagem FITS após a imagem atual |
| [readImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readimg.html)       | Lê os dados da imagem                      |
| [setBscale](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.setbscale.html)   | Redefine a escala da imagem                |
| [writeImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writeimg.html)     | Grava imagem FITS                          |

### Arquivo FITS — palavra-chave {.row-span-2}

| -                                                                                                | -                                                       |
| ------------------------------------------------------------------------------------------------ | :------------------------------------------------------ |
| [readCard](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readcard.html)               | Registro de cabeçalho de palavras-chave                 |
| [readKey](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkey.html)                 | Palavra-chave                                           |
| [readKeyCmplx](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeycmplx.html)       | Uma palavra-chave na forma de um valor escalar complexo |
| [readKeyDbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeydbl.html)           | Palavra-chave na forma de valor de precisão dupla       |
| [readKeyLongLong](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeylonglong.html) | Palavra-chave na forma de `int64`                       |
| [readKeyLongStr](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeylongstr.html)   | Valor de string longa                                   |
| [readKeyUnit](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readkeyunit.html)         | A string de unidade física na chave                     |
| [readRecord](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readrecord.html)           | Registro de cabeçalho especificado por número           |
| [writeComment](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writecomment.html)       | Grava ou anexa a palavra-chave COMMENT ao CHU           |
| [writeDate](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writedate.html)             | Grava a palavra-chave DATE no CHU                       |
| [writeKey](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writekey.html)               | Atualiza ou adiciona novas palavras-chave ao HDU atual  |
| [writeKeyUnit](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writekeyunit.html)       | Grava a string de unidade física                        |
| [writeHistory](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writehistory.html)       | Grava ou anexa a palavra-chave HISTORY ao CHU           |
| [deleteKey](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletekey.html)             | Exclui a chave pelo nome                                |
| [deleteRecord](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deleterecord.html)       | Exclui palavras-chave pelo número do registro           |
| [getHdrSpace](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.gethdrspace.html)         | O número de palavras-chave no cabeçalho                 |

### Arquivos FITS — acesso à Header Data Unit (HDU)

| -                                                                                            | -                                                                                |
| -------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| [copyHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.copyhdu.html)             | Copia o HDU atual de um arquivo para outro                                       |
| [getHDUnum](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.gethdunum.html)         | O número do HDU atual no arquivo FITS                                            |
| [getHDUtype](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.gethdutype.html)       | Tipo do HDU atual                                                                |
| [getNumHDUs](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getnumhdus.html)       | Número total de HDUs no arquivo FITS                                             |
| [movAbsHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.movabshdu.html)         | Move para a numeração absoluta de HDU                                            |
| [movNamHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.movnamhdu.html)         | Move para o primeiro HDU que contém um tipo e valor de palavra-chave específicos |
| [movRelHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.movrelhdu.html)         | Move uma quantidade relativa de HDUs a partir do HDU atual                       |
| [writeChecksum](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writechecksum.html) | Calcula e grava o checksum do HDU atual                                          |
| [deleteHDU](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletehdu.html)         | Exclui o HDU atual no arquivo FITS                                               |

### Arquivos FITS — compressão de imagens

| -                                                                                                      | -                                                          |
| ------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| [imgCompress](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.imgcompress.html)               | Compacta o HDU de um arquivo para outro                    |
| [isCompressedImg](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.iscompressedimg.html)       | Determina se a imagem atual está compactada                |
| [setCompressionType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.setcompressiontype.html) | Define o tipo de compressão da imagem                      |
| [setHCompScale](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.sethcompscale.html)           | Define os parâmetros de escala do algoritmo HCOMPRESS      |
| [setHCompSmooth](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.sethcompsmooth.html)         | Define o alisamento para imagens compactadas com HCOMPRESS |
| [setTileDim](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.settiledim.html)                 | Define as dimensões do tile                                |

### Arquivo FITS — tabela ASCII e tabela binária {.row-span-3}

| -                                                                                          | -                                                                |
| ------------------------------------------------------------------------------------------ | :--------------------------------------------------------------- |
| [createTbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.createtbl.html)       | Cria uma nova extensão de tabela ASCII ou binária                |
| [insertCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertcol.html)       | Insere uma coluna em uma tabela                                  |
| [insertRows](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertrows.html)     | Insere linhas na tabela                                          |
| [insertATbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertatbl.html)     | Insere uma tabela ASCII após o HDU atual                         |
| [insertBTbl](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.insertbtbl.html)     | Insere uma tabela binária após o HDU atual                       |
| [deleteCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deletecol.html)       | Exclui uma coluna de uma tabela                                  |
| [deleteRows](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.deleterows.html)     | Exclui linhas da tabela                                          |
| [getAColParms](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getacolparms.html) | Informações da tabela ASCII                                      |
| [getBColParms](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getbcolparms.html) | Informações da tabela binária                                    |
| [getColName](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getcolname.html)     | Nome da coluna da tabela                                         |
| [getColType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getcoltype.html)     | Tipo de dados, valor de repetição e largura da coluna escalonada |
| [getEqColType](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.geteqcoltype.html) | Tipo de dados da coluna, valor repetido e largura                |
| [getNumCols](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getnumcols.html)     | O número de colunas na tabela                                    |
| [getNumRows](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getnumrows.html)     | O número de linhas na tabela                                     |
| [readATblHdr](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readatblhdr.html)   | Lê as informações do cabeçalho da tabela ASCII atual             |
| [readBTblHdr](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readbtblhdr.html)   | Lê as informações do cabeçalho da tabela binária atual           |
| [readCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.readcol.html)           | Lê linhas de colunas de tabelas ASCII ou binárias                |
| [setTscale](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.settscale.html)       | Redefine a escala da imagem                                      |
| [writeCol](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.writecol.html)         | Grava elementos em uma coluna de tabela ASCII ou binária         |

### Arquivos FITS — utilitários

| -                                                                                                  | -                                         |
| -------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| [getConstantValue](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getconstantvalue.html) | Especifica o valor da constante           |
| [getVersion](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getversion.html)             | O número de revisão da biblioteca CFITSIO |
| [getOpenFiles](https://www.mathworks.com/help/matlab/ref/matlab.io.fits.getopenfiles.html)         | Lista de arquivos FITS abertos            |

### Arquivo intercalado em faixas (stripe)

| -                                                                               | -                                                         |
| ------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| [multibandread](https://www.mathworks.com/help/matlab/ref/multibandread.html)   | Lê um arquivo intercalado em faixas de um arquivo binário |
| [multibandwrite](https://www.mathworks.com/help/matlab/ref/multibandwrite.html) | Grava dados intercalados em faixas em um arquivo          |

### Common Data Format (CDF)

| -                                                                     | -                                                                                     |
| --------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| [cdfinfo](https://www.mathworks.com/help/matlab/ref/cdfinfo.html)     | Informações sobre arquivos Common Data Format (CDF)                                   |
| [cdfread](https://www.mathworks.com/help/matlab/ref/cdfread.html)     | Lê dados em arquivos Common Data Format (CDF)                                         |
| [cdfepoch](https://www.mathworks.com/help/matlab/ref/cdfepoch.html)   | Converte um literal de data ou valor de sequência de datas em uma data no formato CDF |
| [todatenum](https://www.mathworks.com/help/matlab/ref/todatenum.html) | Converte objetos de época CDF em valores de data serial do `MATLAB`                   |

#### Pacote

| -                                                               | -                                     |
| --------------------------------------------------------------- | :------------------------------------ |
| [cdflib](https://www.mathworks.com/help/matlab/ref/cdflib.html) | Interação direta com a biblioteca CDF |

### Ler dados de vídeo

| -                                                                                           | -                                                        |
| ------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| [VideoReader](https://www.mathworks.com/help/matlab/ref/videoreader.html)                   | Cria um objeto para ler um arquivo de vídeo              |
| [read](https://www.mathworks.com/help/matlab/ref/videoreader.read.html)                     | Lê um ou mais frames de vídeo                            |
| [readFrame](https://www.mathworks.com/help/matlab/ref/videoreader.readframe.html)           | Lê o próximo frame de vídeo                              |
| [hasFrame](https://www.mathworks.com/help/matlab/ref/videoreader.hasframe.html)             | Determina se há frames de vídeo disponíveis para leitura |
| [getFileFormats](https://www.mathworks.com/help/matlab/ref/videoreader.getfileformats.html) | Formatos de arquivo suportados pelo `VideoReader`        |
| [mmfileinfo](https://www.mathworks.com/help/matlab/ref/mmfileinfo.html)                     | Informações sobre arquivos de mídia                      |

### Gravar dados de vídeo

| -                                                                                     | -                                                             |
| ------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| [VideoWriter](https://www.mathworks.com/help/matlab/ref/videowriter.html)             | Cria um objeto para gravar um arquivo de vídeo                |
| [open](https://www.mathworks.com/help/matlab/ref/videowriter.open.html)               | Abre um arquivo para gravar dados de vídeo                    |
| [writeVideo](https://www.mathworks.com/help/matlab/ref/videowriter.writevideo.html)   | Grava dados de vídeo em um arquivo                            |
| [close](https://www.mathworks.com/help/matlab/ref/videowriter.close.html)             | Fecha o arquivo após gravar os dados de vídeo                 |
| [getProfiles](https://www.mathworks.com/help/matlab/ref/videowriter.getprofiles.html) | Descreve os arquivos e formatos suportados pelo `VideoWriter` |

### Ler ou gravar áudio

| -                                                                       | -                                                |
| ----------------------------------------------------------------------- | :----------------------------------------------- |
| [audioread](https://www.mathworks.com/help/matlab/ref/audioread.html)   | Lê arquivos de áudio                             |
| [audiowrite](https://www.mathworks.com/help/matlab/ref/audiowrite.html) | Grava arquivos de áudio                          |
| [lin2mu](https://www.mathworks.com/help/matlab/ref/lin2mu.html)         | Converte sinal de áudio linear em mu-law         |
| [mu2lin](https://www.mathworks.com/help/matlab/ref/mu2lin.html)         | Converte sinal de áudio mu-law em formato linear |
| [audioinfo](https://www.mathworks.com/help/matlab/ref/audioinfo.html)   | Informações sobre arquivos de áudio              |

### Reproduzir áudio

| -                                                                                       | -                                                                                    |
| --------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| [audioplayer](https://www.mathworks.com/help/matlab/ref/audioplayer.html)               | Objeto para reproduzir áudio                                                         |
| [isplaying](https://www.mathworks.com/help/matlab/ref/audioplayer.isplaying.html)       | Determina se a reprodução está em andamento                                          |
| [pause](https://www.mathworks.com/help/matlab/ref/audioplayer.pause.html)               | Pausa a reprodução ou a gravação                                                     |
| [play](https://www.mathworks.com/help/matlab/ref/audioplayer.play.html)                 | Reproduz áudio de um objeto `audioplayer`                                            |
| [playblocking](https://www.mathworks.com/help/matlab/ref/audioplayer.playblocking.html) | Reproduz áudio no objeto `audioplayer` e mantém o controle até a reprodução terminar |
| [resume](https://www.mathworks.com/help/matlab/ref/audioplayer.resume.html)             | Retoma a reprodução ou a gravação a partir do estado pausado                         |
| [stop](https://www.mathworks.com/help/matlab/ref/audioplayer.stop.html)                 | Para a reprodução ou a gravação                                                      |

### Gravar áudio

| -                                                                                             | -                                                                                    |
| --------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| [audiorecorder](https://www.mathworks.com/help/matlab/ref/audiorecorder.html)                 | Objeto para gravar áudio                                                             |
| [getaudiodata](https://www.mathworks.com/help/matlab/ref/audiorecorder.getaudiodata.html)     | Armazena o sinal de áudio gravado em um array numérico                               |
| [getplayer](https://www.mathworks.com/help/matlab/ref/audiorecorder.getplayer.html)           | Cria um objeto `audioplayer` associado                                               |
| [isrecording](https://www.mathworks.com/help/matlab/ref/audiorecorder.isrecording.html)       | Determina se a gravação está em andamento                                            |
| [record](https://www.mathworks.com/help/matlab/ref/audiorecorder.record.html)                 | Grava áudio em um objeto `audiorecorder`                                             |
| [recordblocking](https://www.mathworks.com/help/matlab/ref/audiorecorder.recordblocking.html) | Grava áudio em um objeto `audiorecorder` e mantém o controle até a gravação terminar |

### Reproduzir som

| -                                                                             | -                                                     |
| ----------------------------------------------------------------------------- | :---------------------------------------------------- |
| [audiodevinfo](https://www.mathworks.com/help/matlab/ref/audiodevinfo.html)   | Informações sobre dispositivos de áudio               |
| [audiodevreset](https://www.mathworks.com/help/matlab/ref/audiodevreset.html) | Atualiza a lista de dispositivos de áudio disponíveis |
| [sound](https://www.mathworks.com/help/matlab/ref/sound.html)                 | Converte a matriz de dados do sinal em som            |
| [soundsc](https://www.mathworks.com/help/matlab/ref/soundsc.html)             | Escala os dados e os reproduz como som                |
| [beep](https://www.mathworks.com/help/matlab/ref/beep.html)                   | Gera o beep do sistema operacional                    |

### Leitura e gravação de documentos XML

| -                                                                                                                                         | -                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [matlab.io.xml.dom.DOMWriter](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.domwriter-class.html)                           | Grava documentos XML serializados                                  |
| [matlab.io.xml.dom.EntityResolver](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.entityresolver-class.html)                 | Classe base abstrata do resolvedor de entidades                    |
| [matlab.io.xml.dom.FileWriter](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.filewriter-class.html)                         | Writer para criar arquivos de texto                                |
| [matlab.io.xml.dom.Locator](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.locator-class.html)                               | A localização do elemento no arquivo XML                           |
| [matlab.io.xml.dom.Parser](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parser-class.html)                                 | Parser de marcação XML                                             |
| [matlab.io.xml.dom.ParserConfiguration](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parserconfiguration-class.html)       | Opções do parser XML                                               |
| [matlab.io.xml.dom.ParseError](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerror-class.html)                         | Erro de análise da tag XML especificada                            |
| [matlab.io.xml.dom.ParseErrorHandler](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerrorhandler-class.html)           | Classe base abstrata para manipuladores de erro de análise         |
| [matlab.io.xml.dom.ParseErrorLocator](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerrorlocator-class.html)           | Especifica a localização do erro de análise                        |
| [matlab.io.xml.dom.ParseErrorSeverity](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.parseerrorseverity-class.html)         | Indica a severidade dos erros de análise de tags XML (classe enum) |
| [matlab.io.xml.dom.ResourceIdentifier](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.resourceidentifier-class.html)         | Identificador de recurso XML                                       |
| [matlab.io.xml.dom.ResourceIdentifierType](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.resourceidentifiertype-class.html) | Tipo de identificador de recurso XML                               |
| [matlab.io.xml.dom.WriterConfiguration](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.writerconfiguration-class.html)       | Opções do Writer DOM XML                                           |

{.style-list-arrow}

### W3C DOM

| -                                                                                                                                       | -                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| [matlab.io.xml.dom.Attr](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.attr-class.html)                                   | Atributos de elementos XML                |
| [matlab.io.xml.dom.CDATASection](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.cdatasection-class.html)                   | Seção CDATA                               |
| [matlab.io.xml.dom.Comment](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.comment-class.html)                             | Comentários em documentos XML             |
| [matlab.io.xml.dom.Document](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.document-class.html)                           | Documento XML                             |
| [matlab.io.xml.dom.DocumentFragment](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.documentfragment-class.html)           | Grupo de nós de documento                 |
| [matlab.io.xml.dom.DocumentType](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.documenttype-class.html)                   | Tipo de documento                         |
| [matlab.io.xml.dom.Element](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.element-class.html)                             | Elemento de documento XML                 |
| [matlab.io.xml.dom.Entity](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.entity-class.html)                               | Entidade definida pelo tipo de documento  |
| [matlab.io.xml.dom.NamedNodeMap](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.namednodemap-class.html)                   | Um conjunto de nós de documento com nomes |
| [matlab.io.xml.dom.NodeList](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.nodelist-class.html)                           | Lista de nós de documento                 |
| [matlab.io.xml.dom.Notation](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.notation-class.html)                           | Notação na definição de tipo de documento |
| [matlab.io.xml.dom.ProcessingInstruction](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.processinginstruction-class.html) | Instrução de processamento XML            |
| [matlab.io.xml.dom.Text](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.text-class.html)                                   | Texto em um documento XML                 |
| [matlab.io.xml.dom.TypeInfo](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.dom.typeinfo-class.html)                           | Informações de tipo de schema             |

{.style-list-arrow}

### Transformação XML

| -                                                                                                                                                         | -                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [matlab.io.xml.transform.CompiledStylesheet](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.compiledstylesheet-class.html)             | Stylesheet compilada                                   |
| [matlab.io.xml.transform.ResultDocument](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.resultdocument-class.html)                     | Armazena o resultado da transformação como documento   |
| [matlab.io.xml.transform.ResultString](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.resultstring-class.html)                         | Armazena o resultado da transformação como string      |
| [matlab.io.xml.transform.ResultFile](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.resultfile-class.html)                             | Armazena o resultado da transformação como arquivo     |
| [matlab.io.xml.transform.SourceDocument](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.sourcedocument-class.html)                     | Documento XML de origem para transformação             |
| [matlab.io.xml.transform.SourceFile](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.sourcefile-class.html)                             | Arquivo XML de origem para transformação               |
| [matlab.io.xml.transform.SourceString](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.sourcestring-class.html)                         | String XML de origem para a transformação              |
| [matlab.io.xml.transform.StylesheetSourceDocument](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcedocument-class.html) | Origem da stylesheet para o documento de transformação |
| [matlab.io.xml.transform.StylesheetSourceFile](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcefile-class.html)         | Origem da stylesheet para o documento de transformação |
| [matlab.io.xml.transform.StylesheetSourceString](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.stylesheetsourcestring-class.html)     | String XSL de origem para a transformação              |
| [matlab.io.xml.transform.Tracer](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.transform.tracer-class.html)                                     | Rastreia a execução da stylesheet                      |

{.style-list-arrow}

### Consulta XPath

| -                                                                                                                                     | -                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| [matlab.io.xml.xpath.CompiledExpression](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.compiledexpression-class.html) | Expressão XPath compilada                                    |
| [matlab.io.xml.xpath.EvalResultType](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.evalresulttype-class.html)         | O tipo de resultado do cálculo da expressão XPath            |
| [matlab.io.xml.xpath.Evaluator](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.evaluator-class.html)                   | Avaliador de expressões XPath                                |
| [matlab.io.xml.xpath.PrefixResolver](https://www.mathworks.com/help/matlab/ref/matlab.io.xml.xpath.prefixresolver-class.html)         | Classe base abstrata para resolvedor de prefixo de namespace |

{.style-list-arrow}

### Formato JSON

| -                                                                       | -                                                                     |
| ----------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| [jsondecode](https://www.mathworks.com/help/matlab/ref/jsondecode.html) | Decodifica texto no formato JSON                                      |
| [jsonencode](https://www.mathworks.com/help/matlab/ref/jsonencode.html) | Cria texto no formato JSON a partir de dados estruturados do `MATLAB` |

### Variáveis do workspace e arquivos MAT {.row-span-2}

| -                                                                                           | -                                                                                                |
| ------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| [load](https://www.mathworks.com/help/matlab/ref/load.html)                                 | Carrega variáveis de arquivo no workspace                                                        |
| [save](https://www.mathworks.com/help/matlab/ref/save.html)                                 | Salva variáveis do workspace em um arquivo                                                       |
| [matfile](https://www.mathworks.com/help/matlab/ref/matlab.io.matfile.html)                 | Acessa e altera variáveis em um arquivo MAT sem carregar o arquivo na memória                    |
| [disp](https://www.mathworks.com/help/matlab/ref/disp.html)                                 | Exibe o valor da variável                                                                        |
| [formattedDisplayText](https://www.mathworks.com/help/matlab/ref/formatteddisplaytext.html) | Captura a saída de exibição como uma string                                                      |
| [who](https://www.mathworks.com/help/matlab/ref/who.html)                                   | Lista as variáveis no workspace                                                                  |
| [whos](https://www.mathworks.com/help/matlab/ref/whos.html)                                 | Lista as variáveis do workspace com seu tamanho e tipo                                           |
| [clear](https://www.mathworks.com/help/matlab/ref/clear.html)                               | Exclui itens do workspace e libera memória do sistema                                            |
| [clearvars](https://www.mathworks.com/help/matlab/ref/clearvars.html)                       | Limpa as variáveis da memória                                                                    |
| [openvar](https://www.mathworks.com/help/matlab/ref/openvar.html)                           | Abre uma variável do workspace no editor de variáveis ou em outras ferramentas de edição gráfica |
| [Workspace Browser](https://www.mathworks.com/help/matlab/ref/workspace.html)               | Abre o Workspace Browser para gerenciar o workspace                                              |

### I/O de arquivos de baixo nível {.row-span-2}

| -                                                                   | -                                                                      |
| ------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [fclose](https://www.mathworks.com/help/matlab/ref/fclose.html)     | Fecha um ou todos os arquivos abertos                                  |
| [feof](https://www.mathworks.com/help/matlab/ref/feof.html)         | Detecta o fim do arquivo                                               |
| [ferror](https://www.mathworks.com/help/matlab/ref/ferror.html)     | Mensagem de erro de I/O de arquivo                                     |
| [fgetl](https://www.mathworks.com/help/matlab/ref/fgetl.html)       | Lê linhas de um arquivo e remove as quebras de linha                   |
| [fgets](https://www.mathworks.com/help/matlab/ref/fgets.html)       | Lê linhas de um arquivo e mantém as quebras de linha                   |
| [fileread](https://www.mathworks.com/help/matlab/ref/fileread.html) | Lê o conteúdo do arquivo em formato de texto                           |
| [fopen](https://www.mathworks.com/help/matlab/ref/fopen.html)       | Abre um arquivo ou obtém informações sobre a abertura de um arquivo    |
| [fprintf](https://www.mathworks.com/help/matlab/ref/fprintf.html)   | Grava dados em um arquivo de texto                                     |
| [fread](https://www.mathworks.com/help/matlab/ref/fread.html)       | Lê dados em arquivos binários                                          |
| [frewind](https://www.mathworks.com/help/matlab/ref/frewind.html)   | Move o indicador de posição do arquivo para o início do arquivo aberto |
| [fscanf](https://www.mathworks.com/help/matlab/ref/fscanf.html)     | Lê os dados do arquivo de texto                                        |
| [fseek](https://www.mathworks.com/help/matlab/ref/fseek.html)       | Move para a posição especificada no arquivo                            |
| [ftell](https://www.mathworks.com/help/matlab/ref/ftell.html)       | Localização atual                                                      |
| [fwrite](https://www.mathworks.com/help/matlab/ref/fwrite.html)     | Grava dados em um arquivo binário                                      |

### Comunicação serial e USB — conexão e configuração

| -                                                                                                    | -                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| [serialportlist](https://www.mathworks.com/help/matlab/ref/serialportlist.html)                      | Lista de portas seriais conectadas ao seu sistema                                                       |
| [serialport](https://www.mathworks.com/help/matlab/ref/serialport.html)                              | Conecta a uma porta serial                                                                              |
| [configureTerminator](https://www.mathworks.com/help/matlab/ref/serialport.configureterminator.html) | Define o terminador para comunicação de strings ASCII com a porta serial                                |
| [configureCallback](https://www.mathworks.com/help/matlab/ref/serialport.configurecallback.html)     | Define a função de callback e as condições de disparo para comunicação com dispositivos de porta serial |

### Comunicação serial e USB — ler e gravar

| -                                                                                | -                                                     |
| -------------------------------------------------------------------------------- | :---------------------------------------------------- |
| [read](https://www.mathworks.com/help/matlab/ref/serialport.read.html)           | Lê dados da porta serial                              |
| [readline](https://www.mathworks.com/help/matlab/ref/serialport.readline.html)   | Lê uma linha de dados de string ASCII da porta serial |
| [write](https://www.mathworks.com/help/matlab/ref/serialport.write.html)         | Grava dados na porta serial                           |
| [writeline](https://www.mathworks.com/help/matlab/ref/serialport.writeline.html) | Grava uma linha de dados ASCII na porta serial        |

### Comunicação serial e USB — controlar pinos e memória

| -                                                                                      | -                                             |
| -------------------------------------------------------------------------------------- | :-------------------------------------------- |
| [flush](https://www.mathworks.com/help/matlab/ref/serialport.flush.html)               | Limpa o buffer do dispositivo de porta serial |
| [getpinstatus](https://www.mathworks.com/help/matlab/ref/serialport.getpinstatus.html) | Obtém o status da porta serial                |
| [setRTS](https://www.mathworks.com/help/matlab/ref/serialport.setrts.html)             | Define o pino RTS da porta serial             |
| [setDTR](https://www.mathworks.com/help/matlab/ref/serialport.setdtr.html)             | Define o pino DTR da serial                   |

### Comunicação TCP/IP — conexão e configuração

| -                                                                                                   | -                                                                                               |
| --------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| [tcpclient](https://www.mathworks.com/help/matlab/ref/tcpclient.html)                               | Cria uma conexão de cliente TCP/IP com um servidor TCP/IP                                       |
| [echotcpip](https://www.mathworks.com/help/matlab/ref/echotcpip.html)                               | Inicia ou para o servidor de eco TCP/IP                                                         |
| [configureTerminator](https://www.mathworks.com/help/matlab/ref/tcpclient.configureterminator.html) | Define o terminador para comunicação de strings ASCII com host remoto via TCP/IP                |
| [configureCallback](https://www.mathworks.com/help/matlab/ref/tcpclient.configurecallback.html)     | Define a função de callback e a condição de disparo para comunicação com host remoto via TCP/IP |

{.style-list}

### Comunicação TCP/IP — ler e gravar

| -                                                                               | -                                                                  |
| ------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [read](https://www.mathworks.com/help/matlab/ref/tcpclient.read.html)           | Lê dados em um host remoto via TCP/IP                              |
| [readline](https://www.mathworks.com/help/matlab/ref/tcpclient.readline.html)   | Lê uma linha de dados de string ASCII de um host remoto via TCP/IP |
| [write](https://www.mathworks.com/help/matlab/ref/tcpclient.write.html)         | Grava dados em um host remoto via TCP/IP                           |
| [writeline](https://www.mathworks.com/help/matlab/ref/tcpclient.writeline.html) | Grava uma linha de dados ASCII em um host remoto via TCP/IP        |
| [flush](https://www.mathworks.com/help/matlab/ref/tcpclient.flush.html)         | Esvazia os buffers de comunicação com hosts remotos via TCP/IP     |

{.style-list}

### Comunicação Bluetooth — conexão e configuração

| -                                                                                                   | -                                                                                                |
| --------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| [bluetoothlist](https://www.mathworks.com/help/matlab/ref/bluetoothlist.html)                       | Procura dispositivos `Bluetooth` clássicos próximos                                              |
| [bluetooth](https://www.mathworks.com/help/matlab/ref/bluetooth.html)                               | Conecta a um dispositivo `Bluetooth` clássico                                                    |
| [configureTerminator](https://www.mathworks.com/help/matlab/ref/bluetooth.configureterminator.html) | Define o terminador para comunicação de strings ASCII com dispositivo `Bluetooth`                |
| [configureCallback](https://www.mathworks.com/help/matlab/ref/bluetooth.configurecallback.html)     | Define a função de callback e a condição de disparo para comunicação com dispositivo `Bluetooth` |

{.style-list}

### Comunicação Bluetooth — ler e gravar {.row-span-2}

| -                                                                               | -                                                                   |
| ------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| [read](https://www.mathworks.com/help/matlab/ref/bluetooth.read.html)           | Lê dados de um dispositivo `Bluetooth`                              |
| [readline](https://www.mathworks.com/help/matlab/ref/bluetooth.readline.html)   | Lê uma linha de dados de string ASCII de um dispositivo `Bluetooth` |
| [write](https://www.mathworks.com/help/matlab/ref/bluetooth.write.html)         | Grava dados em um dispositivo `Bluetooth`                           |
| [writeline](https://www.mathworks.com/help/matlab/ref/bluetooth.writeline.html) | Grava uma linha de dados ASCII em um dispositivo `Bluetooth`        |
| [flush](https://www.mathworks.com/help/matlab/ref/bluetooth.flush.html)         | Limpa o buffer do dispositivo `Bluetooth`                           |

{.style-list}

### Comunicação Bluetooth Low Energy {.row-span-2}

| -                                                                                                            | -                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------- |
| [blelist](https://www.mathworks.com/help/matlab/ref/blelist.html)                                            | Procura periféricos `Bluetooth` low energy próximos                                                |
| [ble](https://www.mathworks.com/help/matlab/ref/ble.html)                                                    | Conecta a periféricos `Bluetooth` low energy                                                       |
| [characteristic](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.html)          | Acessa as características de periféricos `Bluetooth` low energy                                    |
| [descriptor](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.descriptor.html)                  | Acessa descritores em periféricos `Bluetooth` low energy                                           |
| [read](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.read.html)               | Lê dados de características ou descritores em um dispositivo periférico `Bluetooth` low energy     |
| [write](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.write.html)             | Grava dados em uma característica ou descritor de um dispositivo periférico `Bluetooth` low energy |
| [subscribe](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.subscribe.html)     | Assina notificações ou instruções de características                                               |
| [unsubscribe](https://www.mathworks.com/help/matlab/ref/matlabshared.blelib.characteristic.unsubscribe.html) | Cancela a assinatura de notificações e instruções de características                               |

{.style-list}

### Serviços web

| -                                                                       | -                                                   |
| ----------------------------------------------------------------------- | :-------------------------------------------------- |
| [webread](https://www.mathworks.com/help/matlab/ref/webread.html)       | Lê conteúdo de serviços web RESTful                 |
| [webwrite](https://www.mathworks.com/help/matlab/ref/webwrite.html)     | Grava dados em um serviço web RESTful               |
| [websave](https://www.mathworks.com/help/matlab/ref/websave.html)       | Salva conteúdo de serviço web RESTful em um arquivo |
| [weboptions](https://www.mathworks.com/help/matlab/ref/weboptions.html) | Especifica parâmetros para serviços web RESTful     |
| [web](https://www.mathworks.com/help/matlab/ref/web.html)               | Abre uma página web ou arquivo em um navegador      |
| [sendmail](https://www.mathworks.com/help/matlab/ref/sendmail.html)     | Envia e-mail para uma lista de endereços            |

### Operações de arquivo FTP {.row-span-2}

| -                                                                   | -                                                        |
| ------------------------------------------------------------------- | :------------------------------------------------------- |
| [ftp](https://www.mathworks.com/help/matlab/ref/ftp.html)           | Conecta a um servidor FTP para acessar seus arquivos     |
| [sftp](https://www.mathworks.com/help/matlab/ref/sftp.html)         | Conexão com servidor SFTP para acessar seus arquivos     |
| [ascii](https://www.mathworks.com/help/matlab/ref/ftp.ascii.html)   | Define o modo de transferência FTP como ASCII            |
| [binary](https://www.mathworks.com/help/matlab/ref/ftp.binary.html) | Define o modo de transferência FTP como binário          |
| [cd](https://www.mathworks.com/help/matlab/ref/ftp.cd.html)         | Altera ou exibe a pasta atual em um servidor SFTP ou FTP |
| [close](https://www.mathworks.com/help/matlab/ref/ftp.close.html)   | Fecha a conexão com o servidor SFTP ou FTP               |
| [delete](https://www.mathworks.com/help/matlab/ref/ftp.delete.html) | Exclui arquivos no servidor SFTP ou FTP                  |
| [dir](https://www.mathworks.com/help/matlab/ref/ftp.dir.html)       | Lista o conteúdo da pasta em servidor SFTP ou FTP        |
| [mget](https://www.mathworks.com/help/matlab/ref/ftp.mget.html)     | Baixa arquivos do servidor SFTP ou FTP                   |
| [mkdir](https://www.mathworks.com/help/matlab/ref/ftp.mkdir.html)   | Cria uma nova pasta em um servidor SFTP ou FTP           |
| [mput](https://www.mathworks.com/help/matlab/ref/ftp.mput.html)     | Envia arquivos ou pastas para o servidor SFTP ou FTP     |
| [rename](https://www.mathworks.com/help/matlab/ref/ftp.rename.html) | Renomeia um arquivo em um servidor SFTP ou FTP           |
| [rmdir](https://www.mathworks.com/help/matlab/ref/ftp.rmdir.html)   | Exclui uma pasta em um servidor SFTP ou FTP              |

### Dados de Internet of Things (IoT)

| -                                                                                 | -                                          |
| --------------------------------------------------------------------------------- | :----------------------------------------- |
| [thingSpeakRead](https://www.mathworks.com/help/matlab/ref/thingspeakread.html)   | Lê dados armazenados no canal `ThingSpeak` |
| [thingSpeakWrite](https://www.mathworks.com/help/matlab/ref/thingspeakwrite.html) | Grava dados no canal `ThingSpeak`          |
