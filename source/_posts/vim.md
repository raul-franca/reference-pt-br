---
title: Vim
date: 2020-11-25 18:28:43
background: bg-[#46933f]
tags:
  - vi
  - text
  - editor
  - terminal
  - shortcut
categories:
  - Ferramentas
intro: |
  Uma coleção útil de cheat sheets de referência rápida do [Vim](http://www.vim.org/) 8.2 para ajudar você a aprender o editor Vim mais rápido.
plugins:
  - copyCode
---

## Primeiros passos

### Diagramas de movimento {.row-span-2}

```bash
▼/▶ Cursor   ▽/▷ Target
```

#### Movimentos para esquerda/direita

```bash
┌───────────── |
├───────────── 0      $ ──────────────┐
│  ┌────────── ^      fe ────────┐    │
│  │  ┌─────── Fo     te ───────┐│    │
│  │  │┌────── To     30| ───┐  ││    │
│  │  ││ ┌──── ge     w ───┐ │  ││    │
│  │  ││ │ ┌── b      e ─┐ │ │  ││    │
│  │  ││ │ │  ┌h      l┐ │ │ │  ││    │
▽  ▽  ▽▽ ▽ ▽  ▽▼      ▼▽ ▽ ▽ ▽  ▽▽    ▽
   echo "A cheatsheet from quickref.me"
```

#### Movimentos para cima/baixo

```bash
                 - SCREEN 1 START
   ┌─┬─────────▷ #!/usr/bin/python
   │ │     ┌───▷
   │ │     │     print("Hello")
   │ │     { } ▶ print("Vim")
   │ │       │   print("!")
   │ │       └─▷
   │ │ ┌───┬───▷ print("Welcome")
G gg H M L k j ▶ print("to")
│        │   └─▷ print("cheatsheets.zip")
│        │       print("/vim")
│        │
│        └─────▷
│                - SCREEN 1 END
└──────────────▷ print("SCREEN 2")
```

### Movimentos {.row-span-2}

| Atalho                         | Descrição          |
| ------------------------------ | :----------------- |
| `h` _\|_ `j` _\|_ `k` _\|_ `l` | Teclas de seta     |
| `<C-u>` _/_ `<C-d>`            | Meia página cima/baixo |
| `<C-b>` _/_ `<C-f>`            | Página cima/baixo  |

{.shortcuts}

#### Palavras{.left-text}

| Atalho       | Descrição                        |
| ------------ | :------------------------------- |
| `b` _/_ `w`  | Palavra anterior/próxima         |
| `ge` _/_ `e` | Fim da palavra anterior/próxima  |

{.shortcuts}

#### Linha

| Atalho               | Descrição                   |
| -------------------- | :-------------------------- |
| `0` _(zero)_ _/_ `$` | Início/fim da linha         |
| `^`                  | Início da linha _(não vazio)_ |

{.shortcuts}

#### Caractere

| Atalho                              | Descrição                              |
| ----------------------------------- | :------------------------------------- |
| `Fe` _/_ `fe`                       | Move para o `e` anterior/próximo       |
| `To` _/_ `to`                       | Move para antes/depois do `o` anterior/próximo |
| <code>\|</code>_/_ <code>n\|</code> | Vai para a primeira/`n`-ésima coluna   |

{.shortcuts}

#### Documento

| Atalho         | Descrição                   |
| -------------- | :-------------------------- |
| `gg` _/_ `G`   | Primeira/última linha       |
| `:n` _\|_ `nG` | Vai para a linha `n`        |
| `}` _/_ `{`    | Próxima/linha vazia anterior |

{.shortcuts}

#### Janela

| Atalho                 | Descrição                     |
| ---------------------- | :---------------------------- |
| `H` _/_ `M` _/_ `L`    | Topo/meio/base da tela        |
| `zt` _/_ `zz` _/_ `zb` | Topo/centro/base desta linha  |

{.shortcuts}

### Modo Insert

| Atalho                 | Descrição                          |
| ---------------------- | :--------------------------------- |
| `i` _/_ `a`            | Insere antes/depois do cursor      |
| `I` _/_ `A`            | Insere no início/fim da linha      |
| `o` _/_ `O` _(letter)_ | Insere nova linha abaixo/acima     |
| `s` _/_ `S`            | Exclui caractere/linha e insere    |
| `C` _/_ `cc`           | Altera até o fim da/linha atual    |
| `gi`                   | Insere no último ponto de inserção |
| `Esc` _\|_ `<C-[>`     | Sai do modo insert                 |

{.shortcuts}

### Salvar e sair

| Atalho                    | Descrição                      |
| ------------------------- | :----------------------------- |
| `:w`                      | Salva                          |
| `:q`                      | Fecha o arquivo                |
| `:wq` _\|_ `:x` _\|_ `ZZ` | Salva e sai                    |
| `:wqa`                    | Salva e sai de todos os arquivos |
| `:q!` _\|_ `ZQ`           | Força a saída                  |
| `:qa`                     | Fecha todos os arquivos        |
| `:qa!`                    | Força a saída de todos os arquivos |
| `:w` now.txt              | Escreve em `now.txt`           |
| `:sav` new.txt            | Salva e edita `new.txt`        |
| `:w` !sudo tee %          | Escreve em arquivo somente leitura |

{.shortcuts}

### Modo Normal

| Atalho                | Descrição                     |
| --------------------- | :---------------------------- |
| `r`                   | Substitui um caractere        |
| `R`                   | Entra no modo Replace         |
| `u` _/_ `3u`          | Desfaz alterações `1` / `3` vezes |
| `U`                   | Desfaz alterações em uma linha |
| `J`                   | Junta com a próxima linha     |
| `<C-r>` _/_ 5 `<C-r>` | Refaz alterações `1` / `5` vezes |

{.shortcuts}

### Recortar e colar {.row-span-2}

| Atalho           | Descrição                            |
| ---------------- | :----------------------------------- |
| `x`              | Exclui caractere _(Cut)_             |
| `p` _/_ `P`      | Cola depois/antes                    |
| `xp`             | Troca dois caracteres                |
| `D`              | Exclui até o fim da linha _(Cut)_    |
| `dw`             | Exclui palavra _(Cut)_               |
| `dd`             | Exclui linha _(Cut)_                 |
| `ddp`            | Troca duas linhas                    |
| `yy`             | Yank na linha _(Copy)_               |
| `"*p` _\|_ `"+p` | Cola da área de transferência do sistema |
| `"*y` _\|_ `"+y` | Copia para a área de transferência do sistema |

{.shortcuts}

#### No modo visual

| Atalho       | Descrição               |
| ------------ | :---------------------- |
| `d` _\|_ `x` | Exclui seleção _(Cut)_  |
| `s`          | Substitui seleção       |
| `y`          | Yank na seleção _(Copy)_ |

{.shortcuts}

### Repetição

| Atalho | Descrição                                   |
| ------ | :------------------------------------------ |
| `.`    | Repete o último comando                     |
| `;`    | Repete o último `f`, `t`, `F` ou `T`        |
| `,`    | Repete o último `f`, `t`, `F` ou `T` invertido |
| `&`    | Repete o último `:s`                        |
| `@:`   | Repete um comando de linha de comando       |

{.shortcuts}

### Modo visual

| Atalho      | Descrição               |
| ----------- | :---------------------- |
| `v`         | Entra no modo visual    |
| `V`         | Entra no modo visual de linha |
| `<C-v>`     | Entra no modo visual de bloco |
| `ggVG`      | Seleciona todo o texto  |
| `>` _/_ `<` | Desloca o texto para direita/esquerda |

{.shortcuts}

### Macros

| -     | -                     |
| ----- | :-------------------- |
| `qi`  | Grava a macro `i`     |
| `q`   | Para a gravação da macro |
| `@i`  | Executa a macro `i`   |
| `7@i` | Executa a macro `i` 7 vezes |
| `@@`  | Repete a última macro |

{.shortcuts}

Você pode salvar a macro em qualquer letra, não apenas `i`

## Operadores do Vim

### Uso {.secondary}

| Atalho   | Descrição    |
| -------- | :----------- |
| `d`      | <yel>w</yel> |
| Operador | Movimento    |

Combine [operadores](#available-operators) com [movimentos](#motions) para usá-los

### Operadores disponíveis {.row-span-2}

| Atalho | Descrição                          |
| ------ | :--------------------------------- |
| `d`    | Exclui                             |
| `y`    | Yank _(copia)_                     |
| `c`    | Altera _(exclui e depois insere)_  |
| `p`    | Cola                               |
| `=`    | Formata código                     |
| `g~`   | Alterna maiúsculas/minúsculas      |
| `gU`   | Maiúsculas                         |
| `gu`   | Minúsculas                         |
| `>`    | Indenta à direita                  |
| `<`    | Indenta à esquerda                 |
| `!`    | Filtra por programa externo        |

### Exemplos {.row-span-2}

| Combinação           | Descrição                             |
| -------------------- | :------------------------------------ |
| `d`<yel>d</yel>      | Exclui a linha atual                  |
| `d`<yel>j</yel>      | Exclui duas linhas                    |
| `d`<yel>w</yel>      | Exclui até a próxima palavra          |
| `d`<yel>b</yel>      | Exclui até o início da palavra        |
| `d`<yel>fa</yel>     | Exclui até o caractere `a`            |
| `d`<yel>/hello</yel> | Exclui até `hello`                    |
| `c`<yel>c</yel>      | Altera a linha atual, sinônimo de `S` |
| `y`<yel>y</yel>      | Copia a linha atual                   |
| `>`<yel>j</yel>      | Indenta 2 linhas                      |
| gg`d`<yel>G</yel>    | Exclui um documento completo          |
| gg`=`<yel>G</yel>    | Indenta um documento completo         |
| gg`y`<yel>G</yel>    | Copia um documento completo           |

{.show-header}

### Contagens

```
[count] <operator> <motion>
<operator> [count] <motion>
```

---

| Combinação       | Descrição                     |
| ---------------- | :---------------------------- |
| 2`d`<yel>d</yel> | Exclui `2` linhas             |
| 6`y`<yel>y</yel> | Copia `6` linhas              |
| `d`3<yel>w</yel> | Exclui `3` palavras           |
| `d`5<yel>j</yel> | Exclui `5` linhas para baixo  |
| `>`4<yel>k</yel> | Indenta `4` linhas para cima  |

## Text objects do Vim

### Uso {.secondary}

<!-- Confuso e deve ser corrigido -->

| Atalho   |               Descrição                | -            |
| -------- | :------------------------------------: | :----------- |
| `v`      |     <pur>i</pur> _/_ <pur>a</pur>      | <yel>p</yel> |
| Operador | <pur>i</pur>nner _/_ <pur>a</pur>round | Text object  |

Opere com um [operador](#available-operators) dentro ou ao redor de blocos de texto

### Text objects {.row-span-2}

| Atalho                                               | Descrição                              |
| ---------------------------------------------------- | :------------------------------------- |
| <yel>p</yel>                                         | Parágrafo                              |
| <yel>w</yel>                                         | Palavra                                |
| <yel>W</yel>                                         | WORD <br/>_(cercada por espaços em branco)_ |
| <yel>s</yel>                                         | Frase                                  |
| <yel>[</yel> <yel>(</yel> <yel>{</yel> <yel>\<</yel> | Um bloco [], () ou {}                  |
| <yel>]</yel> <yel>)</yel> <yel>}</yel> <yel>\></yel> | Um bloco [], () ou {}                  |
| <yel>'</yel> <yel>"</yel> <yel>\`</yel>              | Uma string entre aspas                 |
| <yel>b</yel>                                         | Um bloco [(                            |
| <yel>B</yel>                                         | Um bloco em [{                         |
| <yel>t</yel>                                         | Um bloco de tag HTML                   |

Veja `:help text-objects`

### Excluir

| Atalho                      | Descrição                             |
| --------------------------- | :------------------------------------ |
| `d`<pur>i</pur><yel>w</yel> | Exclui a palavra interna              |
| `d`<pur>i</pur><yel>s</yel> | Exclui a frase interna                |
| `d`<pur>i</pur><yel>"</yel> | Exclui entre aspas                    |
| `d`<pur>a</pur><yel>"</yel> | Exclui entre aspas _(incluindo as aspas)_ |
| `d`<pur>i</pur><yel>p</yel> | Exclui um parágrafo                   |

### Seleções

| Atalho                                              | Descrição                                 |
| --------------------------------------------------- | :---------------------------------------- |
| `v`<pur>i</pur><yel>"</yel>                         | Seleciona as aspas internas "`...`{.underline}" |
| `v`<pur>a</pur><yel>"</yel>                         | Seleciona as aspas `"..."`{.underline}    |
| `v`<pur>i</pur><yel>[</yel>                         | Seleciona os colchetes internos [`...`{.underline}] |
| `v`<pur>a</pur><yel>[</yel>                         | Seleciona os colchetes `[...]`{.underline} |
| `v`<pur>i</pur><yel>w</yel>                         | Seleciona a palavra interna               |
| `v`<pur>i</pur><yel>p</yel>                         | Seleciona o parágrafo interno             |
| `v`<pur>i</pur><yel>p</yel><pur>i</pur><yel>p</yel> | Seleciona mais um parágrafo               |

### Diversos

| Atalho                      | Descrição                            |
| --------------------------- | :----------------------------------- |
| `c`<pur>i</pur><yel>w</yel> | Altera a palavra interna             |
| `c`<pur>i</pur><yel>"</yel> | Altera as aspas internas             |
| `c`<pur>i</pur><yel>t</yel> | Altera as tags internas (HTML)       |
| `c`<pur>i</pur><yel>p</yel> | Altera o parágrafo interno           |
| `y`<pur>i</pur><yel>p</yel> | Yank no parágrafo interno            |
| `y`<pur>a</pur><yel>p</yel> | Yank no parágrafo _(incluindo a quebra de linha)_ |

## Vários arquivos no Vim

### Buffers

| -          | -                                |
| ---------- | :------------------------------- |
| `:e file`  | Edita um arquivo em um novo buffer |
| `:bn`      | Vai para o próximo buffer        |
| `:bp`      | Vai para o buffer anterior       |
| `:bd`      | Remove o arquivo da lista de buffers |
| `:b 5`     | Abre o buffer #5                 |
| `:b file`  | Vai para um buffer por arquivo   |
| `:ls`      | Lista todos os buffers abertos   |
| `:sp file` | Abre e divide a janela           |
| `:vs file` | Abre e divide a janela verticalmente |
| `:hid`     | Oculta este buffer               |
| `:wn`      | Escreve o arquivo e vai para o próximo |
| `:tab ba`  | Edita todos os buffers como abas |

### Janelas

| -                       | -                           |
| ----------------------- | :-------------------------- |
| `<C-w>` `s`             | Divide a janela             |
| `<C-w>` `v`             | Divide a janela verticalmente |
| `<C-w>` `w`             | Alterna entre janelas       |
| `<C-w>` `q`             | Fecha uma janela            |
| `<C-w>` `T`             | Separa em uma nova aba      |
| `<C-w>` `x`             | Troca a atual pela próxima  |
| `<C-w>` `-` _/_ `+`     | Diminui/aumenta a altura    |
| `<C-w>` `<` _/_ `>`     | Diminui/aumenta a largura   |
| `<C-w>` <code>\|</code> | Maximiza a largura          |
| `<C-w>` `_`             | Maximiza a altura           |
| `<C-w>` `=`             | Altura e largura iguais     |
| `<C-w>` `h` _/_ `l`     | Vai para a janela à esquerda/direita |
| `<C-w>` `j` _/_ `k`     | Vai para a janela acima/abaixo |

{.shortcuts}

### Abas

| Atalho         | Descrição                         |
| -------------- | :-------------------------------- |
| `:tabe [file]` | <yel>Edita</yel> o arquivo em uma nova aba |
| `:tabf [file]` | Abre se existir em uma nova aba   |
| `:tabc`        | <yel>Fecha</yel> a aba atual       |
| `:tabo`        | Fecha as <yel>outras</yel> abas    |
| `:tabs`        | Lista todas as <yel>abas</yel>     |
| `:tabr`        | Vai para a <yel>primeira</yel> aba |
| `:tabl`        | Vai para a <yel>última</yel> aba   |
| `:tabm 0`      | <yel>Move</yel> para a posição `0` |
| `:tabn`        | Vai para a <yel>próxima</yel> aba  |
| `:tabp`        | Vai para a aba <yel>anterior</yel> |

#### Modo normal

| Atalho | Descrição                     |
| ------ | :---------------------------- |
| `gt`   | Vai para a <yel>próxima</yel> aba |
| `gT`   | Vai para a aba <yel>anterior</yel> |
| `2gt`  | Vai para a aba número `2`     |

{.shortcuts}

## Busca e substituição no Vim

### Busca

| -        | -                                   |
| -------- | :---------------------------------- |
| `/foo`   | Busca para frente                   |
| `/foo\c` | Busca para frente _(sem diferenciar maiúsculas de minúsculas)_ |
| `?foo`   | Busca para trás                     |
| `/\v\d+` | Busca com [regex](/regex)           |
| `n`      | Próxima ocorrência do padrão de busca |
| `N`      | Ocorrência anterior                 |
| `*`      | Busca a palavra atual para frente   |
| `#`      | Busca a palavra atual para trás     |

{.shortcuts}

### Substituir LINHA

```vim
:[range]s/{pattern}/{str}/[flags]
```

---

|                   |                                  |
| ----------------- | :------------------------------- |
| `:s/old/new`      | Substitui a primeira             |
| `:s/old/new/g`    | Substitui todas                  |
| `:s/\vold/new/g`  | Substitui todas com [regex](/regex) |
| `:s/old/new/gc`   | Substitui todas _(Confirm)_      |
| `:s/old/new/i`    | Ignora maiúsculas/minúsculas e substitui a primeira |
| `:2,6s/old/new/g` | Substitui entre as linhas `2`-`6` |

### Substituir ARQUIVO

```vim
:%s/{pattern}/{str}/[flags]
```

---

|                   |                                  |
| ----------------- | :------------------------------- |
| `:%s/old/new`     | Substitui a primeira             |
| `:%s/old/new/g`   | Substitui todas                  |
| `:%s/old/new/gc`  | Substitui todas _(Confirm)_      |
| `:%s/old/new/gi`  | Substitui todas _(ignora maiúsculas/minúsculas)_ |
| `:%s/\vold/new/g` | Substitui todas com [regex](/regex) |

### Intervalos {.row-span-2}

| -       | -                 |
| ------- | :---------------- |
| `%`     | Arquivo inteiro   |
| `’<,’>` | Seleção atual     |
| `5`     | Linha `5`         |
| `5,10`  | Linhas `5` a `10` |
| `$`     | Última linha      |
| `2,$`   | Linhas `2` até a última |
| `.`     | Linha atual       |
| `,3`    | Próximas `3` linhas |
| `-3,`   | `3` linhas adiante |

### Comando global {.row-span-2}

```vim
:[range]g/{pattern}/[command]
```

---

|              |                                    |
| ------------ | :--------------------------------- |
| `:g/foo/d`   | Exclui linhas que contêm `foo`     |
| `:g!/foo/d`  | Exclui linhas que não contêm `foo` |
| `:g/^\s*$/d` | Exclui todas as linhas em branco   |
| `:g/foo/t$`  | Copia linhas que contêm `foo` para EOF |
| `:g/foo/m$`  | Move linhas que contêm `foo` para EOF |
| `:g/^/m0`    | Inverte um arquivo                 |
| `:g/^/t.`    | Duplica cada linha                 |

### :g inverso

```vim
:[range]v/{pattern}/[command]
```

---

|            |                                                            |
| ---------- | :--------------------------------------------------------- |
| `:v/foo/d` | Exclui linhas que não contêm `foo`<br/>_(também `:g!/foo/d`)_ |

### Flags

| -   | -                         |
| --- | :------------------------ |
| `g` | Substitui todas as ocorrências |
| `i` | Ignora maiúsculas/minúsculas |
| `I` | Não ignora maiúsculas/minúsculas |
| `c` | Confirma cada substituição |

### Expressão de substituição (magic)

| -             | -                                |
| ------------- | :------------------------------- |
| `&` _\|_ `\0` | Substitui pelo trecho completo encontrado |
| `\1`...`\9`   | Substitui pelo grupo 0-9         |
| `\u`          | Deixa a próxima letra em maiúscula |
| `\U`          | Deixa os próximos caracteres em maiúscula |
| `\l`          | Deixa a próxima letra em minúscula |
| `\L`          | Deixa os próximos caracteres em minúscula |
| `\e`          | Termina `\u`, `\U`, `\l` e `\L`  |
| `\E`          | Termina `\u`, `\U`, `\l` e `\L`  |

### Exemplos {.col-span-2}

```c {.wrap}
:s/a\|b/xxx\0xxx/g		         # Modifies "a b"      to "xxxaxxx xxxbxxx"
:s/test/\U& file/                # Modifies "test"     to "TEST FILE"
:s/\(test\)/\U\1\e file/         # Modifies "test"     to "TEST file"
:s/\v([abc])([efg])/\2\1/g	     # Modifies "af fa bg" to "fa fa gb"
:s/\v\w+/\u\0/g		             # Modifies "bla bla"  to "Bla Bla"
:s/\v([ab])|([cd])/\1x/g         # Modifies "a b c d"  to "ax bx x x"
:%s/.*/\L&/                      # Modifies "HTML"     to "html"
:s/\v<(.)(\w*)/\u\1\L\2/g        # Make every first letter of a word uppercase
:%s/^\(.*\)\n\1/\1/              # Remove duplicate lines
:%s/<\/\=\(\w\+\)\>/\U&/g        # Convert HTML-Tags to uppercase
:g/^pattern/s/$/mytext           # Find and append text to the end
:g/pattern/norm! @i              # Run a macro on matching lines
/^\(.*\)\(\r\?\n\1\)\+$          # View the duplicates lines
/\v^(.*)(\r?\n\1)+$              # View the duplicates lines (very magic)
:v/./,/./-j                      # Compress blank lines into a blank line
:g/<p1>/,/<p2>/d                 # Delete inclusively from <p1> to <p2>
```

## Vimdiff

### Uso {.secondary}

```shell script

$ vimdiff file1 file2 [file3]
$ vim -d file1 file2 [file3]
```

### Edição {.row-span-2}

```
:[range]diffget [bufspec]
:[range]diffput [bufspec]
```

---

| Atalho              | Descrição               |
| ------------------- | :---------------------- |
| `do` _/_ `:diffget` | Obtém (get) a diferença |
| `dp` _/_ `:diffput` | Aplica (put) a diferença |
| `:dif`              | Reanalisa as diferenças |
| `:diffo`            | Desativa o modo diff    |
| `:1,$+1diffget`     | Obtém todas as diferenças |
| `ZQ`                | Sai sem alterações      |

{.shortcuts}

Veja: [Intervalos](#ranges)

### Folds {.row-span-2}

| Atalho        | Descrição                    |
| ------------- | :--------------------------- |
| `zo` _/_ `zO` | Abre                         |
| `zc` _/_ `zC` | Fecha                        |
| `za` _/_ `zA` | Alterna                      |
| `zv`          | Abre os folds desta linha    |
| `zM`          | Fecha todos                  |
| `zR`          | Abre todos                   |
| `zm`          | Mais folds _(foldlevel += 1)_ |
| `zr`          | Menos folds _(foldlevel -= 1)_ |
| `zx`          | Atualiza os folds            |

{.shortcuts}

### Saltos

<br>

| Atalho | Descrição            |
| ------ | :------------------- |
| `]c`     | Próxima diferença    |
| `[c`     | Diferença anterior   |

{.shortcuts}

## Lista Quickfix (avançado)

### Uso

A Lista Quickfix é usada principalmente para navegar por uma lista de erros/avisos (ou localizações de arquivos) gerada por um compilador ou linter.

| Atalho       | Descrição                                                       |
| :----------- | :-------------------------------------------------------------- |
| `:copen`     | Abre a janela quickfix                                          |
| `:cclose`    | Fecha a janela quickfix                                         |
| `:cnext`     | Vai para o erro/localização **seguinte** (`:cn` também funciona) |
| `:cprevious` | Vai para o erro/localização **anterior** (`:cp` também funciona) |
| `:clist`     | Lista todos os erros/localizações da lista                      |
| `:cf [file]` | Preenche a lista com erros de um arquivo (ex.: um log de compilador) |

---

### Quickfix Do (`:cdo` e `:cfdo`)

Os comandos `:cdo` (quickfix do) e `:cfdo` (quickfix file do) executam um comando em cada arquivo listado na lista quickfix. O `:cdo` percorre cada _localização_ da lista, enquanto o `:cfdo` percorre cada _arquivo único_ da lista.

| Comando       | Descrição                                                       |
| :------------ | :-------------------------------------------------------------- |
| `:cdo [cmd]`  | Executa `[cmd]` para cada **localização** na lista quickfix.    |
| `:cfdo [cmd]` | Executa `[cmd]` para cada **arquivo único** na lista quickfix.  |

---

## Diversos

### Maiúsculas e minúsculas {.row-span-2}

| Atalho         | Descrição                    |
| -------------- | :--------------------------- |
| `vU`           | Caractere em _maiúscula_     |
| `vu`           | Caractere em _minúscula_     |
| `~`            | _Alterna maiúsculas/minúsculas_ do caractere |
| `viw` `U`      | Palavra em _maiúscula_       |
| `viw` `u`      | Palavra em _minúscula_       |
| `viw` `~`      | _Alterna maiúsculas/minúsculas_ da palavra |
| `VU` _/_ `gUU` | Linha em _maiúscula_         |
| `Vu` _/_ `guu` | Linha em _minúscula_         |
| `V~` _/_ `g~~` | _Alterna maiúsculas/minúsculas_ da linha |
| `gggUG`        | Todo o texto em _maiúscula_  |
| `ggguG`        | Todo o texto em _minúscula_  |
| `ggg~G`        | _Alterna maiúsculas/minúsculas_ de todo o texto |

{.shortcuts}

### Saltos

| Atalho  | Descrição                    |
| ------- | :--------------------------- |
| `<C-o>` | Volta para o anterior        |
| `<C-i>` | Avança                       |
| `gf`    | Vai para o arquivo no cursor |
| `ga`    | Exibe o valor hex e ascii    |

{.shortcuts}

### Comandos de linha de comando diversos {.row-span-2}

| -              | -                                          |
| -------------- | :----------------------------------------- |
| `:h`           | Ajuda: abre a visualização de ajuda        |
| `:edit!`       | Recarrega o arquivo atual                  |
| `:2,8m0`       | Move as linhas `2`-`8` para `0`            |
| `:noh`         | Limpa os destaques da busca                |
| `:sort`        | Ordena as linhas                           |
| `:ter`         | Abre uma janela de terminal                |
| `:set paste`   | Ativa o sub-modo Insert Paste              |
| `:set nopaste` | Desativa o sub-modo Insert Paste           |
| `:cq`          | Sai com erro<br/>_(abortando o Git)_       |

### Navegação

| Atalho         | Descrição                 |
| -------------- | :------------------------ |
| `%`            | `{[()]}` mais próximo/correspondente |
| `[(` _\|_ `[{` | `(` ou `{` anterior       |
| `])` _\|_ `]{` | Próximo `)` ou `}`        |
| `[m`           | Início do método anterior |
| `[M`           | Fim do método anterior    |

{.shortcuts}

### Contadores

| Atalho  | Descrição          |
| ------- | :----------------- |
| `<C-a>` | Aumenta o número   |
| `<C-x>` | Diminui o número   |

{.shortcuts}

### Tags {.row-span-2 .col-span-2}

| Atalho               | Descrição                                       |
| -------------------- | :---------------------------------------------- |
| `:tag Classname`     | Vai para a primeira definição de Classname      |
| `<C-]>`              | Vai para a definição                            |
| `g]`                 | Vê todas as definições                          |
| `<C-t>`              | Volta para a última tag                         |
| `<C-o> <C-i>`        | Voltar/avançar                                  |
| `:tselect Classname` | Encontra as definições de Classname             |
| `:tjump Classname`   | Encontra as definições de Classname (seleciona a 1ª automaticamente) |

{.shortcuts}

### Formatação

| -       | -                                |
| ------- | -------------------------------- |
| `:ce 8` | Centraliza as linhas em `8` colunas |
| `:ri 4` | Alinha as linhas à direita em `4` colunas |
| `:le`   | Alinha as linhas à esquerda      |

Veja `:help formatting`

### Marcas {.col-span-2 .row-span-4}

| Atalho              | Descrição                                            |
| ------------------- | :--------------------------------------------------- |
| <code>\`^</code>    | Última posição do cursor no modo insert              |
| <code>\`.</code>    | Última alteração no buffer atual                     |
| <code>\`"</code>    | Último buffer atual do qual saiu                     |
| <code>\`0</code>    | No último arquivo editado                            |
| <code>''</code>     | Volta para a linha do buffer atual de onde você saltou |
| <code>\`\`</code>   | Volta para a posição do buffer atual de onde você saltou |
| <code>\`[</code>    | Para o início do texto alterado ou copiado anteriormente |
| <code>\`]</code>    | Para o fim do texto alterado ou copiado anteriormente |
| <code>\`&lt;</code> | Para o início da última seleção visual               |
| <code>\`&gt;</code> | Para o fim da última seleção visual                  |
| `ma`                | Marca esta posição do cursor como `a`                |
| <code>\`a</code>    | Salta para a posição do cursor `a`                    |
| `'a`                | Salta para o início da linha com a posição `a`       |
| <code>d'a</code>    | Exclui da linha atual até a linha da marca `a`       |
| <code>d\`a</code>   | Exclui da posição atual até a posição da marca `a`    |
| <code>c'a</code>    | Altera o texto da linha atual até a linha de `a`     |
| <code>y\`a</code>   | Copia o texto da posição atual até a posição de `a`   |
| `:marks`            | Lista todas as marcas atuais                         |
| `:delm a`           | Exclui a marca `a`                                   |
| `:delm a-d`         | Exclui as marcas `a`, `b`, `c`, `d`                  |
| `:delm abc`         | Exclui as marcas `a`, `b`, `c`                       |

{.shortcuts}

### Calculadora

| Atalho           | Descrição      |
| ---------------- | :------------- |
| `<C-r>` `=` 7\*7 | Mostra o resultado |
| `<C-r>` `=` 10/2 | Mostra o resultado |

{.shortcuts}

Faça isso no modo INSERT

### Shell

| -            | -                              |
| ------------ | :----------------------------- |
| `:!<shell>`  | Interpreta um comando shell    |
| `:r!<shell>` | Lê a saída do shell            |
| `:r!date`    | Insere a data                  |
| `:!!date`    | Substitui a linha atual pela data |

### Linha de comando

| Atalho       | Descrição                                 |
| ------------ | :---------------------------------------- |
| `<C-r><C-w>` | Insere a palavra atual na linha de comando |
| `<C-r>"`     | Cola do registro "                      |
| `<C-x><C-f>` | Autocompleta o path no modo insert      |

{.shortcuts}

### Truques

Remova linhas duplicadas

```shell script
:sort | %!uniq -u
```

Para numerar as linhas do arquivo

```shell script
:%!cat -n
```

Copie o documento inteiro para a área de transferência

```shell script
:%w !pbcopy            # Mac OS X
:%w !xclip -i -sel c   # GNU/Linux
:%w !xsel -i -b        # GNU/Linux
```

## Veja também

- [Devhints](https://devhints.io/vim) _(devhints.io)_
- [Vim cheatsheet](https://vim.rtorr.com/) _(vim.rotrr.com)_
- [Vim documentation](http://vimdoc.sourceforge.net/htmldoc/) _(vimdoc.sourceforge.net)_
- [Interactive Vim tutorial](http://openvim.com/) _(openvim.com)_
