---
title: CSS 3
date: 2020-12-25 20:22:47
background: bg-[#3473b5]
tags:
  - web
  - css
  - style
categories:
  - Programação
intro: |
  Este é um cheat sheet de referência rápida para CSS, listando sintaxe de seletores, propriedades, unidades e outras informações úteis.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Introdução {.row-span-3}

CSS é rico em recursos e vai além de simplesmente montar o layout de páginas.

#### Folha de estilo externa

```html {.wrap}
<link href="./path/to/stylesheet/style.css" rel="stylesheet" type="text/css" />
```

#### Folha de estilo interna

```html
<style>
  body {
    background-color: linen;
  }
</style>
```

#### Estilos inline

```html {.wrap}
<h2 style="text-align: center;">Centered text</h2>

<p style="color: blue; font-size: 18px;">Blue, 18-point text</p>
```

### Adicionar classe

```html
<div class="classname"></div>
<div class="class1 classn ..."></div>
```

Suporta várias classes em um único elemento.

### !important

```css
.post-title {
  color: blue !important;
}
```

Sobrepõe todas as regras de estilo anteriores.

### Seletor

```css
h1 {
}
#job-title {
}
div.hero {
}
div > p {
}
```

Veja: [Seletores](#css-selectors)

### Cor do texto

```css
color: #2a2aff;
color: green;
color: rgb(34, 12, 64, 0.6);
color: hsla(30 100% 50% / 0.6);
```

Veja: [Cores](#css-colors)

### Plano de fundo

```css
background-color: blue;
background-image: url('nyan-cat.gif');
background-image: url('../image.png');
```

Veja: [Planos de fundo](#css-backgrounds)

### Fonte

```css
.page-title {
  font-weight: bold;
  font-size: 30px;
  font-family: 'Courier New';
}
```

Veja: [Fontes](#css-fonts)

### Posicionamento

```css
.box {
  position: relative;
  top: 20px;
  left: 20px;
}
```

Veja também: [Posicionamento](https://learn-the-web.algonquindesign.ca/topics/css-layout-cheat-sheet/)

### Animação

```css
animation: 300ms linear 0s infinite;

animation: bounce 300ms linear infinite;
```

Veja: [Animação](#css-animation)

### Comentário

```css
/* This is a single line comment */

/* This is a 
   multi-line comment */
```

### Layout flex

```css
div {
  display: flex;
  justify-content: center;
}
div {
  display: flex;
  justify-content: flex-start;
}
```

Veja: [Flexbox](#css-flexbox) | [Truques de flex](#css-flexbox-tricks)

### Layout grid

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

Veja: [Layout grid](#css-grid-layout)

### Variável e contador

```css
counter-set: subsection;
counter-increment: subsection;
counter-reset: subsection 0;

:root {
  --bg-color: brown;
}
element {
  background-color: var(--bg-color);
}
```

Veja: [Conteúdo dinâmico](#css-dynamic-content)

## Seletores CSS

### Exemplos {.row-span-2}

#### Seletor de grupo

```css
h1,
h2 {
  color: red;
}
```

#### Seletor encadeado

```css
h3.section-heading {
  color: blue;
}
```

#### Seletor de atributo

```css
div[attribute='SomeValue'] {
  background-color: red;
}
```

#### Seletor de primeiro filho

```css
p:first-child {
  font-weight: bold;
}
```

#### Seletor sem filhos

```css
.box:empty {
  background: lime;
  height: 80px;
  width: 80px;
}
```

### Básico

|              |                                      |
| ------------ | ------------------------------------ |
| `*`          | Todos os elementos                   |
| `div`        | Todas as tags div                    |
| `.classname` | Todos os elementos com classe        |
| `#idname`    | Elemento com ID                      |
| `div,p`      | Todos os divs e parágrafos           |
| `#idname *`  | Todos os elementos dentro de #idname |

Veja também: seletores [Type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) /
[Class](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) /
[ID](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) /
[Universal](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

### Combinadores

| Seletor         | Descrição                                   |
| --------------- | ------------------------------------------- |
| `div.classname` | Div com determinada classe                  |
| `div#idname`    | Div com determinado ID                      |
| `div p`         | Parágrafos dentro de divs                   |
| `div > p`       | Todas as tags p<br>_um nível dentro da div_ |
| `div + p`       | Tags p imediatamente após div               |
| `div ~ p`       | Tags p precedidas por div                   |

Veja também: seletores [Adjacent](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) /
[Sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) /
[Child](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

### Seletores de atributo

|                      |                                    |
| -------------------- | ---------------------------------- | ---------------------------- |
| `a[target]`          | Com atributo <yel>target</yel>     |
| `a[target="_blank"]` | Abre em nova aba                   |
| `a[href^="/index"]`  | Começa com <yel>/index</yel>       |
| `[class              | ="chair"]`                         | Começa com <yel>chair</yel> |
| `[class*="chair"]`   | contendo <yel>chair</yel>          |
| `[title~="chair"]`   | Contém a palavra <yel>chair</yel>  |
| `a[href$=".doc"]`    | Termina com <yel>.doc</yel>        |
| `[type="button"]`    | Tipo especificado                  |

Veja também: [Seletores de atributo](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

### Pseudo-classes de ação do usuário

|              |                          |
| ------------ | ------------------------ |
| `a:link    ` | Link em estado normal    |
| `a:active  ` | Link no estado clicado   |
| `a:hover   ` | Link com o mouse em cima |
| `a:visited ` | Link visitado            |

### Pseudo-classes

|                   |                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------- |
| `p::after`        | Adiciona conteúdo depois de p                                                           |
| `p::before`       | Adiciona conteúdo antes de p                                                            |
| `p::first-letter` | Primeira letra de p                                                                     |
| `p::first-line`   | Primeira linha de p                                                                     |
| `::selection`     | Selecionado pelo usuário                                                                |
| `::placeholder`   | atributo [Placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)  |
| `:root`           | Elemento raiz do documento                                                              |
| `:target`         | Destaca a âncora ativa                                                                  |
| `div:empty`       | Elemento sem filhos                                                                     |
| `p:lang(en)`      | P com atributo de idioma en                                                             |
| `:not(span)`      | Elemento que não é um span                                                              |

### Pseudo-classes de input

|                       |                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------- |
| `input:checked`       | Inputs marcados                                                                             |
| `input:disabled`      | Inputs desabilitados                                                                        |
| `input:enabled`       | Inputs habilitados                                                                          |
| `input:focus`         | Input com foco                                                                              |
| `input:in-range`      | Valor dentro do intervalo                                                                   |
| `input:out-of-range`  | Valor do input fora do intervalo                                                            |
| `input:valid`         | Input com valor válido                                                                      |
| `input:invalid`       | Input com valor inválido                                                                    |
| `input:optional`      | Sem atributo required                                                                       |
| `input:required`      | Input com atributo required                                                                 |
| `input:read-only`     | Com atributo readonly                                                                       |
| `input:read-write`    | Sem atributo readonly                                                                       |
| `input:indeterminate` | Com estado [indeterminate](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) |

### Pseudo-classes estruturais

|                         |                                   |
| ----------------------- | --------------------------------- |
| `p:first-child`         | Primeiro filho                    |
| `p:last-child`          | Último filho                      |
| `p:first-of-type`       | Primeiro de algum tipo            |
| `p:last-of-type`        | Último de algum tipo              |
| `p:nth-child(2)`        | Segundo filho de seu pai          |
| `p:nth-child(3n42)`     | Fórmula Nth-child (an + b)        |
| `p:nth-last-child(2)`   | Segundo filho de trás para frente |
| `p:nth-of-type(2)`      | Segundo p de seu pai              |
| `p:nth-last-of-type(2)` | ...de trás para frente            |
| `p:only-of-type`        | Único de seu pai                  |
| `p:only-child`          | Único filho de seu pai            |

## Fontes CSS

### Propriedades {.row-span-3}

| Propriedade       | Descrição       |
| ----------------- | --------------- |
| `font-family:`    | \<font> <fontN> |
| `font-size:`      | \<size>         |
| `letter-spacing:` | \<size>         |
| `line-height:`    | \<number>       |

| `font-weight:` | \<number> / bold / normal | | `font-style:` | italic / normal | | `text-decoration:` | underline /
none |

| `text-align:` | left / right<br>center / justify | | `text-transform:` | capitalize / uppercase / lowercase |
{.left-text}

Veja também: [Fonte](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

### Shorthand {.secondary .col-span-2}

|         | estilo   | peso  | tamanho (obrigatório) |     | altura da linha | família               |
| ------- | -------- | ----- | --------------------- | --- | --------------- | --------------------- |
| `font:` | `italic` | `400` | `14px`                | `/` | `1.5`           | `sans-serif`          |
|         | estilo   | peso  | tamanho (obrigatório) |     | altura da linha | família (obrigatório) |

### Exemplo

```css
font-family: Arial, sans-serif;
font-size: 12pt;
letter-spacing: 0.02em;
```

### Capitalização {.row-span-2}

```css
/* Hello */
text-transform: capitalize;

/* HELLO */
text-transform: uppercase;

/* hello */
text-transform: lowercase;
```

### @font-face

```css
@font-face {
  font-family: 'Glegoo';
  src: url('../Glegoo.woff');
}
```

## Cores CSS

### Cor nomeada

```css
color: red;
color: orange;
color: tan;
color: rebeccapurple;
```

### Cor hexadecimal

```css
color: #090;
color: #009900;
color: #090a;
color: #009900aa;
```

### Cores rgb()

```css
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);
```

### Cores HSL

```css
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);
```

### Outros

```css
color: inherit;
color: initial;
color: unset;
color: transparent;

color: currentcolor; /* keyword */
```

## Planos de fundo CSS

### Propriedades {.row-span-2}

| Propriedade   | Descrição     |
| ------------- | ------------- |
| `background:` | _(Shorthand)_ |

| `background-color:` | Veja: [Cores](#css-colors) | | `background-image:` | url(...) | | `background-position:` |
left/center/right<br/>top/center/bottom | | `background-size:` | cover X Y | | `background-clip:` |
border-box<br/>padding-box<br/>content-box | | `background-repeat:` | no-repeat<br/>repeat-x<br/>repeat-y | |
`background-attachment:` | scroll/fixed/local | {.left-text}

### Shorthand {.secondary .col-span-2}

|               | cor    | imagem       | posX     | posY     |     | tamanho        | repetição   | fixação  |
| ------------- | ------ | ------------ | -------- | -------- | --- | -------------- | ----------- | -------- |
| `background:` | `#ff0` | `url(a.jpg)` | `left`   | `top`    | `/` | `100px` `auto` | `no-repeat` | `fixed;` |
| `background:` | `#abc` | `url(b.png)` | `center` | `center` | `/` | `cover`        | `repeat-x`  | `local;` |
|               | cor    | imagem       | posX     | posY     |     | tamanho        | repetição   | anexo..  |

### Exemplos {.col-span-2}

```css {.wrap}
background: url(img_man.jpg) no-repeat center;

background:
  url(img_flwr.gif) right bottom no-repeat,
  url(paper.gif) left top repeat;

background: rgb(2, 0, 36);
background: linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(13, 232, 230, 1) 35%,
  rgba(0, 212, 255, 1) 100%
);
```

## O box model do CSS

### Máximos/mínimos

```css
.column {
  max-width: 200px;
  width: 500px;
}
```

Veja também: [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) /
[min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) /
[max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height) /
[min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)

### Margin / Padding

```css
.block-one {
  margin: 20px;
  padding: 10px;
}
```

Veja também: [Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) /
[Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

### Box-sizing

```css
.container {
  box-sizing: border-box;
}
```

Veja também: [Box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/Box-sizing)

### Visibilidade

```css
.invisible-elements {
  visibility: hidden;
}
```

Veja também: [Visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)

### Palavra-chave auto

```css
div {
  margin: auto;
}
```

Veja também: [Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

### Overflow

```css
.small-block {
  overflow: scroll;
}
```

Veja também: [Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

## Animação CSS {.cols-5}

### Shorthand {.col-span-5 .secondary}

|              | nome     | duração | função de timing | atraso  | contagem   | direção             | modo de preenchimento | estado de reprodução |
| ------------ | -------- | ------- | ---------------- | ------- | ---------- | ------------------- | --------------------- | -------------------- |
| `animation:` | `bounce` | `300ms` | `linear`         | `100ms` | `infinite` | `alternate-reverse` | `both`                | `reverse`            |
|              | nome     | duração | função de timing | atraso  | contagem   | direção             | modo de preenchimento | estado de reprodução |

### Propriedades {.row-span-2 .col-span-2}

| Propriedade                  | Valor                                                  |
| ---------------------------- | ------------------------------------------------------ |
| `animation:`                 | _(shorthand)_                                          |
| `animation-name:`            | \<name>                                                |
| `animation-duration:`        | \<time>ms                                              |
| `animation-timing-function:` | ease / linear / ease-in / ease-out / ease-in-out       |
| `animation-delay:`           | \<time>ms                                              |
| `animation-iteration-count:` | infinite / \<number>                                   |
| `animation-direction:`       | normal / reverse / alternate / alternate-reverse       |
| `animation-fill-mode:`       | none / forwards / backwards / both / initial / inherit |
| `animation-play-state:`      | normal / reverse / alternate / alternate-reverse       |

{.left-text}

Veja também: [Animação](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

### Exemplo {.col-span-3}

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;

animation: 4s linear 0s infinite alternate move_eye;
animation: bounce 300ms linear 0s infinite normal;
animation: bounce 300ms linear infinite;
animation: bounce 300ms linear infinite alternate-reverse;
animation: bounce 300ms linear 2s infinite alternate-reverse forwards normal;
```

### Evento JavaScript {.col-span-3}

```js
.one('webkitAnimationEnd oanimationend msAnimationEnd animationend')
```

## Flexbox CSS {.cols-2}

### Exemplo simples

```css
.container {
  display: flex;
}
```

```css
.container > div {
  flex: 1 1 auto;
}
```

### Container {.row-span-2}

.container {

```css
display: flex;
display: inline-flex;
```

```css
flex-direction: row; /* ltr - default */
flex-direction: row-reverse; /* rtl */
flex-direction: column; /* top-bottom */
flex-direction: column-reverse; /* bottom-top */
```

```css
flex-wrap: nowrap; /* one-line */
flex-wrap: wrap; /* multi-line */
```

```css
align-items: flex-start; /* vertical-align to top */
align-items: flex-end; /* vertical-align to bottom */
align-items: center; /* vertical-align to center */
align-items: stretch; /* same height on all (default) */
```

```css
justify-content: flex-start; /* [xxx        ] */
justify-content: center; /* [    xxx    ] */
justify-content: flex-end; /* [        xxx] */
justify-content: space-between; /* [x    x    x] */
justify-content: space-around; /* [ x   x   x ] */
justify-content: space-evenly; /* [  x  x  x  ] */
```

}

### Filho

.container > div {

```css
/* This: */
flex: 1 0 auto;

/* Is equivalent to this: */
flex-grow: 1;
flex-shrink: 0;
flex-basis: auto;
```

```css
order: 1;
```

```css
align-self: flex-start; /* left */
margin-left: auto; /* right */
```

}

## Truques com Flexbox

### Centralização vertical

```css
.container {
  display: flex;
}

.container > div {
  width: 100px;
  height: 100px;
  margin: auto;
}
```

### Centralização vertical (2)

```css
.container {
  display: flex;

  /* vertical */
  align-items: center;

  /* horizontal */
  justify-content: center;
}
```

### Reordenação

```css
.container > .top {
  order: 1;
}

.container > .bottom {
  order: 2;
}
```

### Layout mobile

```css
.container {
  display: flex;
  flex-direction: column;
}

.container > .top {
  flex: 0 0 100px;
}

.container > .content {
  flex: 1 0 auto;
}
```

Uma barra superior com altura fixa e uma área de conteúdo com altura dinâmica.

### Semelhante a tabela {.col-span-2}

```css
.container {
  display: flex;
}

/* the 'px' values here are just suggested percentages */
.container > .checkbox {
  flex: 1 0 20px;
}
.container > .subject {
  flex: 1 0 400px;
}
.container > .date {
  flex: 1 0 120px;
}
```

Isso cria colunas com larguras diferentes, que se dimensionam conforme as circunstâncias.

### Vertical

```css
.container {
  align-items: center;
}
```

Centraliza verticalmente todos os itens.

### Esquerda e direita {.col-span-2}

```css
.menu > .left {
  align-self: flex-start;
}
.menu > .right {
  align-self: flex-end;
}
```

## Layout grid do CSS

### Colunas do template grid

```css
#grid-container {
  display: grid;
  width: 100px;
  grid-template-columns: 20px 20% 60%;
}
```

### Unidade relativa fr

```css
.grid {
  display: grid;
  width: 100px;
  grid-template-columns: 1fr 60px 1fr;
}
```

### Gap do grid

```css
/*The distance between rows is 20px*/
/*The distance between columns is 10px*/
#grid-container {
  display: grid;
  grid-gap: 20px 10px;
}
```

### Grid em nível de bloco

```css
#grid-container {
  display: block;
}
```

### grid-row do CSS

Sintaxe CSS:

- grid-row: grid-row-start / grid-row-end;

#### Exemplo

```css
.item {
  grid-row: 1 / span 2;
}
```

### Grid em nível inline

```css
#grid-container {
  display: inline-grid;
}
```

### Função minmax()

```css {.wrap}
.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}
```

### grid-row-start & grid-row-end

Sintaxe CSS:

- grid-row-start: auto|row-line;<br>
- grid-row-end: auto|row-line|span n;

#### Exemplo

```css
grid-row-start: 2;
grid-row-end: span 2;
```

### grid-row-gap do CSS

```css
grid-row-gap: length;
```

Qualquer valor de comprimento válido, como px ou %. 0 é o valor padrão

### grid-area do CSS

```css
.item1 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

### Justificar itens

```css
#container {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

### grid-template-areas do CSS

```css
.item {
  grid-area: nav;
}
.grid-container {
  display: grid;
  grid-template-areas:
    'nav nav . .'
    'nav nav . .';
}
```

### Justificar item

```css
#grid-container {
  display: grid;
  justify-items: start;
}

.grid-items {
  justify-self: end;
}
```

Os itens do grid são posicionados à direita (end) da linha.

### Alinhar itens

```css
#container {
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

## Conteúdo dinâmico do CSS

### Variável

Defina uma variável CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}
```

Uso da variável

```css
#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

Veja também: [Variável CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

### Contador

```css
/* Set "my-counter" to 0 */
counter-set: my-counter;
```

```css
/* Increment "my-counter" by 1 */
counter-increment: my-counter;
```

```css
/* Decrement "my-counter" by 1 */
counter-increment: my-counter -1;
```

```css
/* Reset "my-counter" to 0 */
counter-reset: my-counter;
```

Veja também: [Counter set](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set)

### Usando contadores

```css
body {
  counter-reset: section;
}

h3::before {
  counter-increment: section;
  content: 'Section.' counter(section);
}
```

```css
ol {
  counter-reset: section;
  list-marker-type: none;
}

li::before {
  counter-increment: section;
  content: counters(section, '.') ' ';
}
```

## Truques de CSS 3

### Scrollbar suave

```css
html {
  scroll-behavior: smooth;
}
```

[Clique aqui](#css-getting-started), a página rolará suavemente até Primeiros passos

## CSS moderno

### container queries (size)

```css
.element-wrap {
  container: element / inline-size;
}
@container element (min-inline-size: 300px) {
  .element {
    display: flex;
    gap: 1rem;
  }
}
```

### container queries (style)

```css
.container {
  --variant: 1;

  &.variant2 {
    --variant: 2;
  }
}

@container style(--variant: 1) {
  button {
  } /* You can't style .container, but can select inside it */
  .other-things {
  }
}

@container style(--variant: 2) {
  button {
  }
  .whatever {
  }
}
```

### Unidades de container

- As unidades são cqw (“container query width”),
- cqh (“container query height”),
- cqi (“container query inline”),
- cqb (“container query block”),
- cqmin (menor entre cqi e cqb),
- e cqmax (maior entre cqi e cqb)

```css
.card {
  padding: 5cqi;
  font-size: 4cqi;
  border: 1cqi solid brown;
  height: 100%;
}

h2 {
  font-size: 10cqi;
  margin-block: 0 3cqi;
}
```

### O pseudo-seletor :has()

```css
figure:has(figcaption) {
  border: 1px solid black;
  padding: 0.5rem;
}
```

### Aninhamento (nesting)

```css
.cards {
  .card {
    & .card-description {
      color: blue;
    }
    & .card-title {
      color: red;
    }
  }
}
```

###

### Escopo (scoping)

```css
@scope {
  :scope {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid black;
  }
  .card {
    padding: 1rem;
    border: 1px solid black;
    background: lightgray;
    h2 {
      margin: 0 0 1rem 0;
    }
  }
}
```

### Camadas de cascata (cascade layers)

```css
/* Specify the order to apply styles in cascade */
@layer legacyCard, newCard;

/* Imagine you have a lot of styles */
@layer newCard {
  .card {
    background-color: red;
  }
}
@layer legacyCard {
  .card {
    background-color: green;
  }
}
```

### Propriedades lógicas

```css
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  font: inherit;
  border-radius: 4px;
  .icon {
    position: relative;
    top: 0.125em;
    fill: white;
    width: 1em;
    aspect-ratio: 1;
    margin-inline-end: 0.25rem;
  }
}
```

### Cores p3

```html
<div class="container">
  <div class="swatch">
    <style contenteditable>
      @scope {
        :scope {
          background-color: color(display-p3 1 0.5 0);
        }
      }
    </style>
  </div>
  <div class="swatch">
    <style contenteditable>
      @scope {
        :scope {
          background-color: oklch(61.88% 0.286 342.4);
        }
      }
    </style>
  </div>
  <div class="swatch">
    <style contenteditable>
      @scope {
        :scope {
          background-color: oklab(0.73 0.15 0.16);
        }
      }
    </style>
  </div>

  <div class="swatch">
    <style contenteditable>
      @scope {
        :scope {
          background-image: linear-gradient(to right in oklch, red, blue);
        }
      }
    </style>
  </div>

  <div class="swatch">
    <style contenteditable>
      @scope {
        :scope {
          background-image: linear-gradient(to right in oklab, red, blue);
        }
      }
    </style>
  </div>

  <div class="swatch">
    <style contenteditable>
      @scope {
        :scope {
          background-image: linear-gradient(to right in srgb, red, blue);
        }
      }
    </style>
  </div>
</div>
```

### Mistura de cores

```css
.swatch {
  color: white;
  width: 100px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  text-align: center;

  &:nth-child(1) {
    background-color: var(--bg);
  }
  &:nth-child(2) {
    background-color: color-mix(in oklch, var(--bg), black 30%);
  }
  &:nth-child(3) {
    background-color: color-mix(in oklch, var(--bg), white 30%);
  }
}
```

### Margin trim

```css
.container {
  /* prevent "extra" margin at the end of the element */
  margin-trim: block-end;

  /* an element like this might be the culprit, but it could be anything */
  > p {
    margin-block-end: 1rem;
  }
}
```

### Quebra de texto

```css
.balance {
  text-wrap: balance;
}
.pretty {
  text-wrap: pretty;
}

html {
  font-family: system-ui, sans-serif;
}

main {
  max-inline-size: 60ch;
  margin-inline: auto;
}
```

### Subgrid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, 80px);
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

## Veja também {.cols-1}

- [frontendmasters.com ](https://frontendmasters.com/blog/what-you-need-to-know-about-modern-css-spring-2024-edition/)
- [Cheat sheet de seletores CSS](https://frontend30.com/css-selectors-cheatsheet/) _(frontend30.com)_
- [MDN: Usando flexbox no CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes)
- [Ultimate flexbox cheatsheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
- [GRID: A simple visual cheatsheet](http://grid.malven.co/)
- [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Suporte dos navegadores](https://caniuse.com/#feat=css-grid)
