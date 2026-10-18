---
title: Emmet
date: 2020-12-14 18:28:43
background: bg-[#95c844]
tags:
  - snippets
  - coding
  - html
  - css
  - abbr
categories:
  - Ferramentas
intro: |
  [Emmet](https://emmet.io/) é um kit de ferramentas do desenvolvedor web para acelerar a escrita de código HTML e CSS, que permite escrever grandes blocos de código HTML na velocidade da luz usando seletores CSS conhecidos.
plugins:
  - copyCode
---

## Sintaxe do Emmet

### Primeiros passos

Vamos começar a melhorar seu desenvolvimento na velocidade da luz.

- [Emmet no Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet) _(code.visualstudio.com)_
- [Emmet 2 para Sublime Text](https://github.com/emmetio/sublime-text-plugin) _(github.com)_
- [Emmet para Coda](https://emmet.io/download/coda/) _(emmet.io)_
- [Emmet para Atom](https://github.com/emmetio/emmet-atom#readme) _(github.com)_

### Multiplicação: \*

<code>ul>li\*5</code>

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### Filho: >

`nav>ul>li`

```html
<nav>
  <ul>
    <li></li>
  </ul>
</nav>
```

### Atributos personalizados {.col-span-2}

`p[title="Hello world"]`

```html
<p title="Hello world"></p>
```

`td[rowspan=2 colspan=3 title]`

```html
<td rowspan="2" colspan="3" title=""></td>
```

`[a='value1' b="value2"]`

```html
<div a="value1" b="value2"></div>
```

### Texto: {}

`a{Click me}`

```html
<a href="">Click me</a>
```

`p>{Click }+a{here}+{ to continue}`

```html {.wrap}
<p>Click <a href="">here</a> to continue</p>
```

### Atributos ID e CLASS {.row-span-2}

`#header`

```html
<div id="header"></div>
```

`.title`

```html
<div class="title"></div>
```

`form#search.wide`

```html
<form id="search" class="wide"></form>
```

`p.class1.class2.class3`

```html
<p class="class1 class2 class3"></p>
```

### Nomes de tags implícitos {.row-span-2}

`.class`

```html
<div class="class"></div>
```

`em>.class`

```html
<em><span class="class"></span></em>
```

`ul>.class`

```html
<ul>
  <li class="class"></li>
</ul>
```

`table>.row>.col`

```html
<table>
  <tr class="row">
    <td class="col"></td>
  </tr>
</table>
```

### Irmão: +

`div+p+bq`

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

### Subida: ^

`div+div>p>span+em^bq`

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```

`div+div>p>span+em^^bq`

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

### Agrupamento: ()

<code>div>(header>ul>li\*2>a)+footer>p</code>

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

<code>(div>dl>(dt+dd)\*4)+footer>p</code>

```html
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
  <p></p>
</footer>
```

### Indexação: $ {.col-span-2}

<code>ul>li.item$\*3</code>

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

<code>h$[title=item$]{Header $}\*3</code>

```html
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

<code>ul>li.item$$$\*3</code>

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
</ul>
```

<code>ul>li.item$@-\*3</code>

```html
<ul>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```

<code>ul>li.item$@2\*3</code>

```html
<ul>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
</ul>
```

## Veja também {.cols-1}

- [Cheat sheet do Emmet](https://docs.emmet.io/cheat-sheet/) _(docs.emmet.io)_
