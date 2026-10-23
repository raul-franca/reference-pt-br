---
title: Bash
date: 2020-11-25 18:28:43
background: bg-[#3e4548]
tags:
  - shell
  - sh
  - echo
  - script
  - linux
categories:
  - Programação
  - Sistema Operacional
intro: Este é um cheat sheet de referência rápida para começar com shell scripting no bash do Linux.
plugins:
  - copyCode
---

## Primeiros passos

### hello.sh

```bash
#!/bin/bash

VAR="world"
echo "Hello $VAR!" # => Hello world!
```

Execute o script

```shell script
$ bash hello.sh
```

### Variáveis

```bash
NAME="John"

echo ${NAME}    # => John (Variables)
echo $NAME      # => John (Variables)
echo "$NAME"    # => John (Variables)
echo '$NAME'    # => $NAME (Exact string)
echo "${NAME}!" # => John! (Variables)

NAME = "John"   # => Error (about space)
```

### Comentários

```bash
# This is a signle-line (inline) Bash comment.
```

Comentários de linha única no Bash começam com `#` e seguem até o fim da linha.

```bash
: '
This is a
very neat comment
in bash
'
```

Comentários de múltiplas linhas usam `:'` para abrir e `'` para fechar.

> **Nota:** O Bash não tem comentários de múltiplas linhas de verdade. Isso funciona passando uma string de múltiplas linhas para o builtin no-op `:` (dois-pontos), que ignora seu argumento.

### Argumentos {.row-span-2}

| Expressão   | Descrição                                 |
| ----------- | ----------------------------------------- |
| `$1` … `$9` | Parâmetro 1 ... 9                         |
| `$0`        | Nome do próprio script                    |
| `$1`        | Primeiro argumento                        |
| `${10}`     | Parâmetro posicional 10                   |
| `$#`        | Número de argumentos                      |
| `$$`        | ID do processo do shell                   |
| `$*`        | Todos os argumentos                       |
| `$@`        | Todos os argumentos, a partir do primeiro |
| `$-`        | Opções atuais                             |
| `$_`        | Último argumento do comando anterior      |

Veja: [Parâmetros especiais](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables)

### Funções

```bash
get_name() {
    echo "John"
}

echo "You are $(get_name)"
```

Veja: [Funções](#bash-functions)

### Condicionais {#conditionals-example}

```bash
if [[ -z "$string" ]]; then
    echo "String is empty"
elif [[ -n "$string" ]]; then
    echo "String is not empty"
fi
```

Veja: [Condicionais](#bash-conditionals)

### Expansão de chaves

```bash
echo {A,B}.js
```

---

| Expressão  | Descrição               |
| ---------- | ----------------------- |
| `{A,B}`    | O mesmo que `A B`       |
| `{A,B}.js` | O mesmo que `A.js B.js` |
| `{1..5}`   | O mesmo que `1 2 3 4 5` |

Veja: [Expansão de chaves](http://wiki.bash-hackers.org/syntax/expansion/brace)

### Execução no shell

```bash
# => I'm in /path/of/current
echo "I'm in $(PWD)"

# Same as:
echo "I'm in `pwd`"
```

Veja: [Substituição de comando](http://wiki.bash-hackers.org/syntax/expansion/cmdsubst)

## Expansões de parâmetros do Bash

### Sintaxe {.row-span-2}

| Código            | Descrição                       |
| ----------------- | ------------------------------- |
| `${FOO%suffix}`   | Remove o sufixo                 |
| `${FOO#prefix}`   | Remove o prefixo                |
| `${FOO%%suffix}`  | Remove o sufixo longo           |
| `${FOO##prefix}`  | Remove o prefixo longo          |
| `${FOO/from/to}`  | Substitui a primeira ocorrência |
| `${FOO//from/to}` | Substitui todas                 |
| `${FOO/%from/to}` | Substitui o sufixo              |
| `${FOO/#from/to}` | Substitui o prefixo             |

#### Substrings

| Expressão       | Descrição                          |
| --------------- | ---------------------------------- |
| `${FOO:0:3}`    | Substring _(posição, comprimento)_ |
| `${FOO:(-3):3}` | Substring a partir da direita      |

#### Comprimento

| Expressão | Descrição             |
| --------- | --------------------- |
| `${#FOO}` | Comprimento de `$FOO` |

#### Valores padrão

| Expressão         | Descrição                                                |
| ----------------- | -------------------------------------------------------- |
| `${FOO:-val}`     | `$FOO`, ou `val` se não definido                         |
| `${FOO:=val}`     | Define `$FOO` como `val` se não definido                 |
| `${FOO:+val}`     | `val` se `$FOO` estiver definido                         |
| `${FOO:?message}` | Mostra uma mensagem e sai se `$FOO` não estiver definido |

### Substituição

```bash
echo ${food:-Cake}  #=> $food or "Cake"
```

```bash
STR="/path/to/foo.cpp"
echo ${STR%.cpp}    # /path/to/foo
echo ${STR%.cpp}.o  # /path/to/foo.o
echo ${STR%/*}      # /path/to

echo ${STR##*.}     # cpp (extension)
echo ${STR##*/}     # foo.cpp (basepath)

echo ${STR#*/}      # path/to/foo.cpp
echo ${STR##*/}     # foo.cpp

echo ${STR/foo/bar} # /path/to/bar.cpp
```

### Slicing

```bash
name="John"
echo ${name}           # => John
echo ${name:0:2}       # => Jo
echo ${name::2}        # => Jo
echo ${name::-1}       # => Joh
echo ${name:(-1)}      # => n
echo ${name:(-2)}      # => hn
echo ${name:(-2):2}    # => hn

length=2
echo ${name:0:length}  # => Jo
```

Veja: [Expansão de parâmetros](http://wiki.bash-hackers.org/syntax/pe)

### basepath & dirpath

```bash
SRC="/path/to/foo.cpp"
```

```bash
BASEPATH=${SRC##*/}
echo $BASEPATH  # => "foo.cpp"


DIRPATH=${SRC%$BASEPATH}
echo $DIRPATH   # => "/path/to/"
```

### Transformação

```bash
STR="HELLO WORLD!"
echo ${STR,}   # => hELLO WORLD!
echo ${STR,,}  # => hello world!

STR="hello world!"
echo ${STR^}   # => Hello world!
echo ${STR^^}  # => HELLO WORLD!

ARR=(hello World)
echo "${ARR[@],}" # => hello world
echo "${ARR[@]^}" # => Hello World
```

## Arrays no Bash

### Definindo arrays

```bash
Fruits=('Apple' 'Banana' 'Orange')

Fruits[0]="Apple"
Fruits[1]="Banana"
Fruits[2]="Orange"

ARRAY1=(foo{1..2}) # => foo1 foo2
ARRAY2=({A..D})    # => A B C D

# Merge => foo1 foo2 A B C D
ARRAY3=(${ARRAY1[@]} ${ARRAY2[@]})

# declare construct
declare -a Numbers=(1 2 3)
Numbers+=(4 5) # Append => 1 2 3 4 5
```

### Indexação

| ------------------ | ---------------------- |
| ------------------ | ---------------------- |
| `${Fruits[0]}`     | Primeiro elemento      |
| `${Fruits[-1]}`    | Último elemento        |
| `${Fruits[*]}`     | Todos os elementos     |
| `${Fruits[@]}`     | Todos os elementos     |
| `${#Fruits[@]}`    | Número de todos        |
| `${#Fruits}`       | Comprimento do 1º      |
| `${#Fruits[3]}`    | Comprimento do n-ésimo |
| `${Fruits[@]:3:2}` | Intervalo              |
| `${!Fruits[@]}`    | Chaves de todos        |

### Iteração

```bash
Fruits=('Apple' 'Banana' 'Orange')

for e in "${Fruits[@]}"; do
    echo $e
done
```

#### Com índice

```bash
for i in "${!Fruits[@]}"; do
  printf "%s\t%s\n" "$i" "${Fruits[$i]}"
done

```

### Operações {.col-span-2}

```bash
Fruits=("${Fruits[@]}" "Watermelon")     # Push
Fruits+=('Watermelon')                   # Also Push
Fruits=( ${Fruits[@]/Ap*/} )             # Remove by regex match
unset Fruits[2]                          # Remove one item
Fruits=("${Fruits[@]}")                  # Duplicate
Fruits=("${Fruits[@]}" "${Veggies[@]}")  # Concatenate
lines=(`cat "logfile"`)                  # Read from file
```

### Arrays como argumentos

```bash
function extract()
{
    local -n myarray=$1
    local idx=$2
    echo "${myarray[$idx]}"
}
Fruits=('Apple' 'Banana' 'Orange')
extract Fruits 2     # => Orangle
```

## Dicionários no Bash

### Definindo

```bash
declare -A sounds
```

```bash
sounds[dog]="bark"
sounds[cow]="moo"
sounds[bird]="tweet"
sounds[wolf]="howl"
```

### Trabalhando com dicionários

```bash
echo ${sounds[dog]} # Dog's sound
echo ${sounds[@]}   # All values
echo ${!sounds[@]}  # All keys
echo ${#sounds[@]}  # Number of elements
unset sounds[dog]   # Delete dog
```

### Iteração

```bash
for val in "${sounds[@]}"; do
    echo $val
done
```

---

```bash
for key in "${!sounds[@]}"; do
    echo $key
done
```

## Condicionais no Bash

### Condições de inteiros

| Condição            | Descrição                            |
| ------------------- | ------------------------------------ |
| `[[ NUM -eq NUM ]]` | <yel>Ig</yel>ual                     |
| `[[ NUM -ne NUM ]]` | <yel>N</yel>ão <yel>i</yel>gual      |
| `[[ NUM -lt NUM ]]` | <yel>M</yel>enor <yel>q</yel>ue      |
| `[[ NUM -le NUM ]]` | <yel>M</yel>enor ou <yel>i</yel>gual |
| `[[ NUM -gt NUM ]]` | <yel>M</yel>aior <yel>q</yel>ue      |
| `[[ NUM -ge NUM ]]` | <yel>M</yel>aior ou <yel>i</yel>gual |
| `(( NUM < NUM ))`   | Menor que                            |
| `(( NUM <= NUM ))`  | Menor ou igual                       |
| `(( NUM > NUM ))`   | Maior que                            |
| `(( NUM >= NUM ))`  | Maior ou igual                       |

### Condições de strings

| Condição           | Descrição             |
| ------------------ | --------------------- |
| `[[ -z STR ]]`     | String vazia          |
| `[[ -n STR ]]`     | <yel>N</yel>ão vazia  |
| `[[ STR == STR ]]` | Igual                 |
| `[[ STR = STR ]]`  | Igual (o mesmo acima) |
| `[[ STR < STR ]]`  | Menor que _(ASCII)_   |
| `[[ STR > STR ]]`  | Maior que _(ASCII)_   |
| `[[ STR != STR ]]` | Diferente             |
| `[[ STR =~ STR ]]` | Regexp                |

### Exemplo {.row-span-3}

#### String

```bash
if [[ -z "$string" ]]; then
    echo "String is empty"
elif [[ -n "$string" ]]; then
    echo "String is not empty"
else
    echo "This never happens"
fi
```

#### Combinações

```bash
if [[ X && Y ]]; then
    ...
fi
```

#### Igual

```bash
if [[ "$A" == "$B" ]]; then
    ...
fi
```

#### Regex

```bash
if [[ '1. abc' =~ ([a-z]+) ]]; then
    echo ${BASH_REMATCH[1]}
fi
```

#### Menor

```bash
if (( $a < $b )); then
   echo "$a is smaller than $b"
fi
```

#### Existe

```bash
if [[ -e "file.txt" ]]; then
    echo "file exists"
fi
```

### Condições de arquivo {.row-span-2}

| Condição          | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `[[ -e FILE ]]`   | <yel>E</yel>xiste                           |
| `[[ -d FILE ]]`   | <yel>D</yel>iretório                        |
| `[[ -f FILE ]]`   | <yel>A</yel>rquivo                          |
| `[[ -h FILE ]]`   | Symlink                                     |
| `[[ -s FILE ]]`   | Tamanho > 0 bytes                           |
| `[[ -r FILE ]]`   | <yel>L</yel>egível                          |
| `[[ -w FILE ]]`   | <yel>G</yel>ravável                         |
| `[[ -x FILE ]]`   | Executável                                  |
| `[[ f1 -nt f2 ]]` | f1 <yel>m</yel>ais <yel>n</yel>ovo que f2   |
| `[[ f1 -ot f2 ]]` | f2 <yel>m</yel>ais <yel>a</yel>ntigo que f1 |
| `[[ f1 -ef f2 ]]` | Mesmos arquivos                             |

### Mais condições

| Condição             | Descrição                     |
| -------------------- | ----------------------------- | ----- | --- |
| `[[ -o noclobber ]]` | Se a OPÇÃO estiver habilitada |
| `[[ ! EXPR ]]`       | Não                           |
| `[[ X && Y ]]`       | E                             |
| `[[ X                |                               | Y ]]` | Ou  |

### E lógico, ou lógico

```bash
if [ "$1" = 'y' -a $2 -gt 0 ]; then
    echo "yes"
fi

if [ "$1" = 'n' -o $2 -lt 0 ]; then
    echo "no"
fi
```

## Loops no Bash

### Loop for básico

```bash
for i in /etc/rc.*; do
    echo $i
done
```

### Laço for estilo C

```bash
for ((i = 0 ; i < 100 ; i++)); do
    echo $i
done
```

### Intervalos {.row-span-2}

```bash
for i in {1..5}; do
    echo "Welcome $i"
done
```

#### Com passo definido

```bash
for i in {5..50..5}; do
    echo "Welcome $i"
done
```

### Continue

```bash {data=3,5}
for number in $(seq 1 3); do
    if [[ $number == 2 ]]; then
        continue;
    fi
    echo "$number"
done
```

### Break

```bash
for number in $(seq 1 3); do
    if [[ $number == 2 ]]; then
        # Skip entire rest of loop.
        break;
    fi
    # This will only print 1
    echo "$number"
done
```

### Until

```bash
count=0
until [ $count -gt 10 ]; do
    echo "$count"
    ((count++))
done
```

### While com incremento

```bash
i=1
while [[ $i -lt 4 ]]; do
    echo "Number: $i"
    ((i++))
done
```

### While com decremento

```bash
i=3
while [[ $i -gt 0 ]]; do
    echo "Number: $i"
    ((i--))
done
```

#### Combinado com teste

```bash
i=3
while ((i--)); do
    echo "Number: $i"
done
```

### Infinito

```bash
while true; do
    # here is some code.
done
```

### Infinito (forma curta)

```bash
while :; do
    # here is some code.
done
```

### Lendo linhas

```bash
while read line; do
    echo $line
done < file.txt
```

## Funções no Bash

### Definindo funções

```bash
myfunc() {
    echo "hello $1"
}
```

```bash
# Same as above (alternate syntax)
function myfunc() {
    echo "hello $1"
}
```

```bash
myfunc "John"
```

### Retornando valores

```bash
myfunc() {
    local myresult='some value'
    echo $myresult
}
```

```bash
result="$(myfunc)"
```

### Gerando erros

```bash
myfunc() {
    return 1
}
```

```bash
if myfunc; then
    echo "success"
else
    echo "failure"
fi
```

## Opções do Bash {.cols-2}

### Opções

```bash
# Avoid overlay files
# (echo "hi" > foo)
set -o noclobber

# Used to exit upon error
# avoiding cascading errors
set -o errexit

# Unveils hidden failures
set -o pipefail

# Exposes unset variables
set -o nounset
```

### Opções de glob

```bash
# Non-matching globs are removed
# ('*.foo' => '')
shopt -s nullglob

# Non-matching globs throw errors
shopt -s failglob

# Case insensitive globs
shopt -s nocaseglob

# Wildcards match dotfiles
# ("*.sh" => ".foo.sh")
shopt -s dotglob

# Allow ** for recursive matches
# ('lib/**/*.rb' => 'lib/a/b/c.rb')
shopt -s globstar
```

## Histórico do Bash {.cols-2}

### Comandos

| Comando               | Descrição                                       |
| --------------------- | ----------------------------------------------- |
| `history`             | Mostra o histórico                              |
| `sudo !!`             | Executa o comando anterior com sudo             |
| `shopt -s histverify` | Não executa o resultado expandido imediatamente |

### Expansões

| Expressão    | Descrição                                               |
| ------------ | ------------------------------------------------------- |
| `!$`         | Expande o último parâmetro do comando mais recente      |
| `!*`         | Expande todos os parâmetros do comando mais recente     |
| `!-n`        | Expande o `n`-ésimo comando mais recente                |
| `!n`         | Expande o `n`-ésimo comando do histórico                |
| `!<command>` | Expande a invocação mais recente do comando `<command>` |

### Operações

| Código               | Descrição                                                                      |
| -------------------- | ------------------------------------------------------------------------------ |
| `!!`                 | Executa o último comando novamente                                             |
| `!!:s/<FROM>/<TO>/`  | Substitui a primeira ocorrência de `<FROM>` por `<TO>` no comando mais recente |
| `!!:gs/<FROM>/<TO>/` | Substitui todas as ocorrências de `<FROM>` por `<TO>` no comando mais recente  |
| `!$:t`               | Expande apenas o basename do último parâmetro do comando mais recente          |
| `!$:h`               | Expande apenas o diretório do último parâmetro do comando mais recente         |

`!!` e `!$` podem ser substituídos por qualquer expansão válida.

### Fatias

| Código   | Descrição                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------ |
| `!!:n`   | Expande apenas o `n`-ésimo token do comando mais recente (o comando é `0`; o primeiro argumento é `1`) |
| `!^`     | Expande o primeiro argumento do comando mais recente                                                   |
| `!$`     | Expande o último token do comando mais recente                                                         |
| `!!:n-m` | Expande um intervalo de tokens do comando mais recente                                                 |
| `!!:n-$` | Expande do `n`-ésimo token até o último do comando mais recente                                        |

`!!` pode ser substituído por qualquer expansão válida, por exemplo `!cat`, `!-2`, `!42`, etc.

## Diversos

### Cálculos numéricos

```bash
$((a + 200))      # Add 200 to $a
```

```bash
$(($RANDOM%200))  # Random number 0..199
```

### Subshells

```bash
(cd somedir; echo "I'm now in $PWD")
pwd # still in first directory
```

### Inspecionando comandos

```bash
command -V cd
#=> "cd is a function/alias/whatever"
```

### Redirecionamento {.row-span-2 .col-span-2}

```bash
python hello.py > output.txt   # stdout to (file)
python hello.py >> output.txt  # stdout to (file), append
python hello.py 2> error.log   # stderr to (file)
python hello.py 2>&1           # stderr to stdout
python hello.py 2>/dev/null    # stderr to (null)
python hello.py &>/dev/null    # stdout and stderr to (null)
```

```bash
python hello.py < foo.txt      # feed foo.txt to stdin for python
```

### Source relativo

```bash
source "${0%/*}/../share/foo.sh"
```

### Diretório do script

```bash
DIR="${0%/*}"
```

### Case/switch

```bash
case "$1" in
    start | up)
    vagrant up
    ;;

    *)
    echo "Usage: $0 {start|stop|ssh}"
    ;;
esac
```

### Captura de erros (trap) {.col-span-2}

```bash
trap 'echo Error at about $LINENO' ERR
```

ou

```bash
traperr() {
    echo "ERROR: ${BASH_SOURCE[1]} at about ${BASH_LINENO[0]}"
}

set -o errtrace
trap traperr ERR
```

### printf

```bash
printf "Hello %s, I'm %s" Sven Olga
#=> "Hello Sven, I'm Olga

printf "1 + 1 = %d" 2
#=> "1 + 1 = 2"

printf "Print a float: %f" 2
#=> "Print a float: 2.000000"
```

### Obtendo opções {.col-span-2}

```bash
while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
    -V | --version )
    echo $version
    exit
    ;;
    -s | --string )
    shift; string=$1
    ;;
    -f | --flag )
    flag=1
    ;;
esac; shift; done
if [[ "$1" == '--' ]]; then shift; fi
```

### Verificando o resultado de um comando {.col-span-2}

```bash
if ping -c 1 google.com; then
    echo "It appears you have a working internet connection"
fi
```

### IP público

```bash
# Show this machine's public IP
curl myip.dog

# Save the IP for use in a script
public_ip=$(curl -fsS myip.dog)
printf '%s\n' "$public_ip"
```

Mais ferramentas de IP: [myip.dog](https://myip.dog/)

### Variáveis especiais {.row-span-2}

| Expressão | Descrição                             |
| --------- | ------------------------------------- |
| `$?`      | Status de saída da última tarefa      |
| `$!`      | PID da última tarefa em segundo plano |
| `$$`      | PID do shell                          |
| `$0`      | Nome do arquivo do shell script       |

Veja [Parâmetros especiais](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables).

### Verificação com grep {.col-span-2}

```bash
if grep -q 'foo' ~/.bash_history; then
    echo "You appear to have typed 'foo' in the past"
fi
```

### Escapes com barra invertida {.row-span-2}

- &nbsp;
- \!
- \"
- \#
- \&
- \'
- \(
- \)
- \,
- \;
- \<
- \>
- \[
- \|
- \\
- \]
- \^
- \{
- \}
- \`
- \$
- \*
- \?

{.cols-4 .marker-none}

Escape estes caracteres especiais com `\`

### Heredoc

```sh
cat <<END
hello world
END
```

### Ir para o diretório anterior

```bash
pwd # /home/user/foo
cd bar/
pwd # /home/user/foo/bar
cd -
pwd # /home/user/foo
```

### Lendo entrada

```bash
echo -n "Proceed? [y/n]: "
read ans
echo $ans
```

```bash
read -n 1 ans    # Just one character
```

### Execução condicional

```bash
git commit && git push
git commit || echo "Commit failed"
```

### Modo estrito

```bash
set -euo pipefail
IFS=$'\n\t'
```

Veja: [Modo estrito não oficial do bash](http://redsymbol.net/articles/unofficial-bash-strict-mode/)

### Argumentos opcionais

```bash
args=("$@")
args+=(foo)
args+=(bar)
echo "${args[@]}"
```

Coloque os argumentos em um array e depois faça o append

## Veja também {.cols-1}

- [Devhints](https://devhints.io/bash) _(devhints.io)_
- [Bash-hackers wiki](http://wiki.bash-hackers.org/) _(bash-hackers.org)_
- [Shell vars](http://wiki.bash-hackers.org/syntax/shellvars) _(bash-hackers.org)_
- [Learn bash in y minutes](https://learnxinyminutes.com/docs/bash/) _(learnxinyminutes.com)_
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) _(mywiki.wooledge.org)_
- [ShellCheck](https://www.shellcheck.net/) _(shellcheck.net)_
- [shell - Standard Shell](https://devmanual.gentoo.org/tools-reference/bash/index.html) _(devmanual.gentoo.org)_
