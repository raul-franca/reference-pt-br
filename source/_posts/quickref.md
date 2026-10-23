---
title: CheatSheets
date: 2020-11-25 18:28:43
background: bg-gradient-to-l from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
tags:
  - guide
  - reference
categories:
  - Outros
intro: Este é o manual das variantes da sintaxe mágica que você pode usar no CheatSheets.zip. É uma boa prática para quem contribui.
plugins:
  - copyCode
---

## Primeiros passos

### Configuração de desenvolvimento

- Clone o repositório [Ver no GitHub](https://github.com/Fechin/reference.git)
  ```shell script {.wrap}
  $ git clone https://github.com/Fechin/reference.git
  ```
- Instale as dependências no diretório do projeto
  ```shell script
  $ npm install
  ```
- Inicie um servidor de desenvolvimento [http://localhost:4000](http://localhost:4000)
  ```shell script
  $ npm run dev
  ```
- Crie ou modifique `source/_posts/{name}.md`
- Envie um pull request e relaxe {.marker-timeline}

É uma boa prática consultar o código-fonte da
[referência do CheatSheets](https://github.com/Fechin/reference/blob/main/source/_posts/quickref.md).

### Estrutura de diretórios

```yaml
.
├── source
│   ├── _posts   # Cheatsheet source files
│   │   ├── awk.md
│   │   ├── vim.md # => cheatsheets.zip/vim
│   │   ├── php.md
│   │   ├── css.md # => cheatsheets.zip/css
│   │   ├── ...
│   └── widget   # Widget files
│       └── chmod.html
├── public       # Distribution files
├── _config.yml
├── gulpfile.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── themes
    └── coo      # Theme files
```

### Estrutura do cheat sheet {.row-span-2}

```yaml
.
├── Section 1   # Header
│   ├── Card 1
│   ├── Card 2
│   ├── Card 3
│   ├── ...
├── Section 2
│   ├── Card 1
│   │   ├── Paragraph
│   │   ├── Code
│   │   ├── <hr/> (aka "---")
│   │   ├── List
│   │   │   ├── Paragraph
│   │   │   └── Code
│   │   └── Table
│   │       ├── Paragraph
│   │       └── Code
│   ├── Card 2
│   ├── Card 3
│   └── ...
├── Section 3
├── Section 4
└── ...
```

---

- Um cheat sheet contém várias seções
- Uma seção contém vários cards
- Um card pode conter código, tabela, lista e parágrafo
- Uma lista pode conter código e parágrafo
- Uma tabela pode conter código e parágrafo

### Variantes de sintaxe

- [Variantes de seção](#section-variants)
- [Variantes de card](#card-variants)
- [Variantes de tabela](#table-variants)
- [Variantes de lista](#list-variants)
- [Variantes de código](#code-variants)
- [Variantes de parágrafo](#paragraph-variants)
- [Exemplo de cards](#cards-example)

Todas as variantes mágicas suportadas pelo CheatSheets.zip

### Crie source/\_posts/demo.md

```markdown
## Getting Started

### List Card {.col-span-2}

- Share quick reference
- Cheatsheet for developers ... {.style-timeline}

### Table Card

| id  | name    |
| --- | ------- |
| 1   | Roberta |

{.show-header}
```

## Variantes de seção

### Visão geral das seções {.secondary}

| -           | -                                 |
| ----------- | --------------------------------- |
| `{.cols-1}` | layout de uma coluna              |
| `{.cols-2}` | layout de duas colunas            |
| `{.cols-3}` | layout de três colunas _(padrão)_ |
| ...         |                                   |
| `{.cols-6}` | layout de seis colunas            |

---

- Uma seção contém vários cards
- Use {.cols-`n`} para definir a seção como um layout de `n` colunas
- Clique no botão de visualização abaixo para focar na seção

[Visualizar](/quickref#section-variants) {.link-arrow}

### .cols-1

```text
# One Column Example {.cols-1}
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1                                  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  2                                  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Código-fonte

```markdown
## One Column Example {.cols-1}

### 1

### 2
```

[Visualizar](resolutions#lists-of-resolutions) {.link-arrow}

### .cols-2

```text
# Two Columns Example
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1              ┆ ┆  2              ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  3              ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Código-fonte

```markdown
## Two Columns Example {.cols-2}

### 1

### 2

### 3
```

[Visualizar](resolutions#getting-started) {.link-arrow}

### .cols-3 (padrão)

```text
# Default
╭┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈╮
┆  1       ┆ ┆  2       ┆ ┆  3       ┆
╰┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈╮
┆  4       ┆
╰┈┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Código-fonte

```markdown
## Default

### 1

### 2

### 3

### 4
```

## Variantes de card

### Visão geral dos cards {.secondary}

#### Especifica quantas colunas o card ocupa

| -               | -                      |
| --------------- | ---------------------- |
| `{.col-span-2}` | [Exemplo](#col-span-2) |
| `{.col-span-3}` |                        |
| ...             |                        |
| `.col-span-6}`  |                        |

#### Especifica quantas linhas o card ocupa {.text-left}

| -               | -                      |
| --------------- | ---------------------- |
| `{.row-span-2}` | [Exemplo](#row-span-2) |
| `{.row-span-3}` |                        |
| ...             |                        |
| `{.row-span-6}` |                        |

#### Destaque de card (também conhecido como seção `H3`)

| -              | -                                            |
| -------------- | -------------------------------------------- |
| `{.primary}`   | Títulos vermelhos, [Exemplo](#primary-card)  |
| `{.secondary}` | Títulos amarelos, [Exemplo](#secondary-card) |

Um exemplo completo: [Exemplo de cards](#cards-example)

### .col-span-2 {.row-span-2}

#### O quinto card ocupa duas colunas

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2      ┆ ┆  3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  4      ┆ ┆  5                  ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2

### 3

### 4

### 5 {.col-span-2}
```

#### O segundo card ocupa duas colunas

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2                  ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  3      ┆ ┆  4      ┆ ┆  5      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2 {.col-span-2}

### 3

### 4

### 5
```

#### O quarto card ocupa duas colunas

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  1      ┆ ┆  2      ┆ ┆  3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆  4                  ┆ ┆  5      ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2

### 3

### 4 {.col-span-2}

### 5
```

### .row-span-2 {.row-span-2}

#### O primeiro card ocupa duas linhas

```text
╭┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1      ┆ ┆ 2       ┆ ┆ 3       ┆
┆        ┆ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
┆        ┆ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆        ┆ ┆ 4       ┆ ┆ 5       ┆
╰┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1 {.row-span-2}

### 2

### 3

### 4

### 5
```

#### O segundo card ocupa duas linhas

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1       ┆ ┆ 2      ┆ ┆ 3       ┆
╰┈┈┈┈┈┈┈┈┈╯ ┆        ┆ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ┆        ┆ ╭┈┈┈┈┈┈┈┈┈╮
┆ 4       ┆ ┆        ┆ ┆ 5       ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2 {.row-span-2}

### 3

### 4

### 5
```

#### O terceiro card ocupa duas linhas

```text
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈╮
┆ 1       ┆ ┆ 2       ┆ ┆ 3      ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ┆        ┆
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ┆        ┆
┆ 4       ┆ ┆ 5       ┆ ┆        ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈╯
```

---

```markdown
### 1

### 2

### 3 {.row-span-2}

### 4

### 5
```

### .col-span-2 .row-span-2

```text
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1                   ┆ ┆ 2       ┆
┆                     ┆ ╰┈┈┈┈┈┈┈┈┈╯
┆                     ┆ ╭┈┈┈┈┈┈┈┈┈╮
┆                     ┆ ┆ 3       ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 4       ┆ ┆ 5       ┆ ┆ 6       ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

#### ↓ Código-fonte

```markdown
### 1 {.col-span-2 .row-span-2}

### 2

### 3

### 4

### 5
```

Ocupa linhas e colunas ao mesmo tempo

## Variantes de tabela

### Visão geral das tabelas {.secondary}

| -                | -                                        |
| ---------------- | ---------------------------------------- |
| `{.show-header}` | Mostra o cabeçalho da tabela             |
| `{.shortcuts}`   | Renderiza no estilo de atalho de teclado |
| `{.bold-first}`  | Deixa a primeira coluna em negrito       |
| `{.plus-first}`  | Adiciona "+" na primeira coluna          |
| `{.show-header}` | Mostra os cabeçalhos                     |
| `{.left-text}`   | Alinha a última coluna à esquerda        |
| `{.no-wrap}`     | Não quebra o texto                       |

### Tabela básica

| Padrão   | Descrição                    |
| -------- | ---------------------------- |
| `[abc]`  | Corresponde a a, b ou c      |
| `[^abc]` | Corresponde exceto a, b ou c |
| `[a-z]`  | Corresponde de a a z         |

#### ↓ Código-fonte

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |
```

### .shortcuts

| -          | -            |
| ---------- | ------------ |
| `Ctrl` `N` | Novo arquivo |
| `Ctrl` `S` | Salvar       |

{.shortcuts}

#### ↓ Código-fonte

```markdown
| -          | -        |
| ---------- | -------- |
| `Ctrl` `N` | New File |
| `Ctrl` `S` | Save     |

{.shortcuts}
```

### .show-header

| Padrão   | Descrição                    |
| -------- | ---------------------------- |
| `[abc]`  | Corresponde a a, b ou c      |
| `[^abc]` | Corresponde exceto a, b ou c |
| `[a-z]`  | Corresponde de a a z         |

{.show-header}

#### ↓ Código-fonte

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.show-header}
```

### .left-text

| Padrão   | Descrição                    |
| -------- | ---------------------------- |
| `[abc]`  | Corresponde a a, b ou c      |
| `[^abc]` | Corresponde exceto a, b ou c |
| `[a-z]`  | Corresponde de a a z         |

{.left-text}

#### ↓ Código-fonte

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.left-text}
```

### .bold-first

| Padrão   | Descrição                    |
| -------- | ---------------------------- |
| `[abc]`  | Corresponde a a, b ou c      |
| `[^abc]` | Corresponde exceto a, b ou c |
| `[a-z]`  | Corresponde de a a z         |

{.bold-first}

#### ↓ Código-fonte

```markdown
| Pattern  | Description            |
| -------- | ---------------------- |
| `[abc]`  | Match a, b or c        |
| `[^abc]` | Match except a, b or c |
| `[a-z]`  | Match a to z           |

{.bold-first}
```

## Variantes de lista

### Visão geral das listas {.secondary}

Colunas da lista

| -           | -                     |
| ----------- | --------------------- |
| `{.cols-1}` | uma coluna _(padrão)_ |
| `{.cols-2}` | duas colunas          |
| ...         |                       |
| `{.cols-6}` |                       |

Marcadores de lista

| -                    | -                                      |
| -------------------- | -------------------------------------- |
| `{.marker-none}`     | O marcador não é definido              |
| `{.marker-timeline}` | Estilo de marcador como linha do tempo |
| `{.marker-round}`    | Marcador redondo                       |

### Uma coluna (padrão)

- Compartilhe uma referência rápida.
- cheat sheet para desenvolvedores.
- Contribuído por anjos do open source.
- Gerencie seus snippets de código.

#### ↓ Código-fonte

```markdown
- Share quick reference.
- cheat sheet for developers.
- Contributed by open source angels.
- Manage your code snippets.
```

### .cols-3

- Compartilhe
- Rápida
- Referência
- E
- Cheat Sheet
- Para
- Desenvolvedores

{.cols-3}

#### ↓ Código-fonte

```markdown
- Share
- Quick
- Reference
- And
- Cheat Sheet
- For
- Developers

{.cols-3}
```

### .marker-timeline {.row-span-2}

- **Renomeado** para `new_name`
  ```shell script
  $ git branch -m <new_name>
  ```
- **Push** e reset
  ```shell script
  $ git push origin -u <new_name>
  ```
- **Exclua** o branch remoto `shell script     $ git push origin --delete <old>     `

{.marker-timeline}

#### ↓ Código-fonte

````markdown
- **Renamed** to `new_name`
  ```shell script
  $ git branch -m <new_name>
  ```
- **Push** and reset
  ```shell script
  $ git push origin -u <new_name>
  ```
- **Delete** remote branch `shell script     $ git push origin --delete <old>     `

{.marker-timeline}
````

### .marker-none

- Share
- Quick
- Reference
- And
- Cheat Sheet

{.cols-2 .marker-none}

#### ↓ Source Code

```markdown
- Share
- Quick
- Reference
- And
- Cheat Sheet

{.cols-2 .marker-none}
```

### .marker-round

- Compartilhe
- Rápida
- Referência

{.marker-round}

#### ↓ Código-fonte

```markdown
- Share
- Quick
- Reference

{.marker-round}
```

## Variantes de código

### Código básico

```js
cheatsheets.zip.is(() => {
  awesome.site();
});
```

```js
here.is.some.more();
```

#### ↓ Código-fonte

`````markdown
````js
cheatsheets.zip.is(() => {
  awesome.site()
})
\```

```js
here.is.some.more()
\```
````
`````

Code blocks can be placed one after the other.

### Code with headings

#### index.js

```js
cheatsheets.zip.is(() => {
  awesome.site();
});
```

#### other.js

```js
here.is.some.more();
```

#### ↓ Código-fonte

````markdown
#### index.js

```js
cheatsheets.zip.is(() => {
  awesome.site();
});
```

#### other.js

```js
here.is.some.more();
```
````

Code blocks can have headings.

### Line wrapping

```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```

#### ↓ Código-fonte

````markdown {.wrap}
```js {.wrap}
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```
````

Add `{.wrap}` to wrap long lines.

### Long lines (default)

```js
function createNode(nodeName: string, options: { key: string }) {
  return true
}
```

Linhas longas terão barras de rolagem.

## Variantes de parágrafo

### Parágrafos de cabeçalho

O texto que aparece no cabeçalho

#### ↓ Código-fonte

```markdown {.wrap}
### Basic paragraphs

The text that appears in the header
```

### Parágrafos do meio {.row-span-2}

- Esta é uma lista

Este parágrafo aparecerá no meio

```js
cheatsheets.is(() => {
  awesome.site();
});
```

#### ↓ Código-fonte

````markdown
### Middle paragraphs

- This is a list

This paragraph will appear in the middle

```js
cheatsheets.is(() => {
  awesome.site();
});
```
````

### Footer paragraphs {.row-span-2}

```js
cheatsheets.is(() => {
  awesome.site();
});
```

#### ↓ Código-fonte

````markdown
```js
cheatsheets.is(() => {
  awesome.site();
});
```

This paragraph will appear in the footer
````

This paragraph will appear in the footer

### Crosslink

Add `{.link-arrow}` to make big loud external links:

```js
[Home](/) {.link-arrow}
```

[Início](/) {.link-arrow}

## Exemplo de cards

### row-span-2 {.row-span-2}

```
1
```

### col-span-2 {.col-span-2}

```
2
```

### Card primário {.primary}

```
3
```

Adicione `{.primary}` para deixar o título vermelho.

### Card secundário {.secondary}

```
4
```

Adicione `{.secondary}` para deixar o título amarelo.

### col-span-3 {.col-span-3}

```
5
```
