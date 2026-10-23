---
title: HTML
date: 2021-07-20 19:16:42
background: bg-[#cc5534]
tags:
  - web
categories:
  - Programação
intro: |
  Este cheat sheet de referência rápida de HTML lista as tags HTML e HTML5 comuns em um layout legível.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### hello.html {.col-span-2 .row-span-2}

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML5 Boilerplate</title>
  </head>
  <body>
    <h1>Hello world, hello CheatSheets.zip!</h1>
  </body>
</html>
```

Ou experimente no [jsfiddle](https://jsfiddle.net/Fechin/1e4wz20b/)

### Comentário

```html
<!-- this is a comment -->

<!--
    Or you can comment out a
    large number of lines.
-->
```

### Parágrafo

```html
<p>I'm from CheatSheets.zip</p>
<p>Share quick reference cheat sheet.</p>
```

Veja: [O elemento Paragraph](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

### Link em HTML

```html
<a href="https://cheatsheets.zip">CheatSheets</a>
<a href="mailto:jack@abc.com">Email</a>
<a href="tel:+12345678">Call</a>
<a href="sms:+12345678&body=ha%20ha">Msg</a>
```

---

|     |          |                                                                     |
| --- | -------- | ------------------------------------------------------------------- |
|     | `href`   | A URL para a qual o hyperlink aponta                                |
|     | `rel`    | Relação da URL vinculada                                            |
|     | `target` | Local de destino do link: <br/>`_self`, `_blank`, `_top`, `_parent` |

{.left-text}

Veja: [Os atributos de \<a>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)

### Tag de imagem

```html {.wrap}
<img
  loading="lazy"
  src="https://xxx.png"
  alt="Describe image here"
  width="400"
  height="400"
/>
```

---

|     |           |                                              |
| --- | --------- | -------------------------------------------- |
|     | `src`     | Obrigatório, local da imagem _(URL \| Path)_ |
|     | `alt`     | Descrição da imagem                          |
|     | `width`   | Largura da imagem                            |
|     | `height`  | Altura da imagem                             |
|     | `loading` | Como o navegador deve carregar               |

{.left-text}

Veja: [O elemento Image Embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

### Tags de formatação de texto

```html
<b>Bold Text</b>
<strong>This text is important</strong>
<i>Italic Text</i>
<em>This text is emphasized</em>
<u>Underline Text</u>
<pre>Pre-formatted Text</pre>
<code>Source code</code>
<del>Deleted text</del>
<mark>Highlighted text (HTML5)</mark>
<ins>Inserted text</ins>
<sup>Makes text superscripted</sup>
<sub>Makes text subscripted</sub>
<small>Makes text smaller</small>
<kbd>Ctrl</kbd>
<blockquote>Text Block Quote</blockquote>
```

### Cabeçalhos

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

Você deve ter apenas um h1 na sua página

### Divisões de seção

|                 |                                         |
| --------------- | --------------------------------------- |
| `<div></div>`   | Divisão ou seção do conteúdo da página  |
| `<span></span>` | Seção de texto dentro de outro conteúdo |
| `<p></p>`       | Parágrafo de texto                      |
| `<br>`          | Quebra de linha                         |
| `<hr>`          | Linha horizontal básica                 |

Estas são as tags usadas para dividir sua página em seções

### Inline Frame {.row-span-2}

```html {.wrap}
<iframe
  title="New York"
  width="342"
  height="306"
  id="gmap_canvas"
  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
  scrolling="no"
>
</iframe>
```

#### ↓ Prévia

<iframe title="New York"
    width="342"
    height="306"
    id="gmap_canvas"
    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
    scrolling="no">
</iframe>

Veja: [O elemento Inline Frame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

### JavaScript no HTML

```html
<script type="text/javascript">
  let text = 'Hello CheatSheets.zip';
  alert(text);
</script>
```

#### JavaScript externo

```html
<body>
  ...

  <script src="app.js"></script>
</body>
```

### CSS no HTML

```html
<style type="text/css">
  h1 {
    color: purple;
  }
</style>
```

#### Folha de estilos externa

```html
<head>
  ...
  <link rel="stylesheet" href="style.css" />
</head>
```

## Tags HTML5

### Documento

```html
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>CheatSheets.zip</h1>
  </main>
  <footer>
    <p>©2023 CheatSheets.zip</p>
  </footer>
</body>
```

### Navegação no header

```html
<header>
  <nav>
    <ul>
      <li><a href="#">Edit Page</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  </nav>
</header>
```

### Tags HTML5 {.row-span-4}

|                                                                                    |                                                   |
| ---------------------------------------------------------------------------------- | ------------------------------------------------- |
| [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)       | Conteúdo independente                             |
| [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)           | Conteúdo secundário                               |
| [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)           | Incorpora um som ou stream de áudio               |
| [bdi](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)               | O elemento Bidirectional Isolate                  |
| [canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)         | Desenha gráficos via JavaScript                   |
| [data](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data)             | Conteúdo legível por máquinas                     |
| [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)     | Um conjunto de opções predefinidas                |
| [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)       | Informações adicionais                            |
| [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)         | Uma caixa de diálogo ou subjanela                 |
| [embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)           | Incorpora aplicação externa                       |
| [figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) | Uma legenda para uma figura                       |
| [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)         | Uma figura ilustrada                              |
| [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)         | Rodapé ou parte menos importante                  |
| [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)         | Cabeçalho ou informações importantes              |
| [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)             | O conteúdo principal do documento                 |
| [mark](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)             | Texto destacado                                   |
| [meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)           | Um valor escalar dentro de um intervalo conhecido |
| [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)               | Uma seção de links de navegação                   |
| [output](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)         | O resultado de um cálculo                         |
| [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)       | Um container para múltiplas fontes de imagem      |
| [progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)     | O progresso de conclusão de uma tarefa            |
| [rp](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)                 | Fornece parênteses de fallback                    |
| [rt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)                 | Define a pronúncia do caractere                   |
| [ruby](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)             | Representa uma anotação ruby                      |
| [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)       | Um grupo em uma série de conteúdos relacionados   |
| [source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)         | Recursos para os elementos de mídia               |
| [summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)       | Um resumo para o elemento \<details>              |
| [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)     | Define os fragmentos de HTML                      |
| [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)             | Uma hora ou data                                  |
| [track](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)           | Faixas de texto para os elementos de mídia        |
| [video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)           | Incorpora vídeo                                   |
| [wbr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)               | Uma oportunidade de quebra de linha               |

### HTML5 Video

```html {.wrap}
<video controls="" width="100%">
  <source
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    type="video/mp4"
  />
  Sorry, your browser doesn't support embedded videos.
</video>
```

#### ↓ Prévia

<video controls="" width="100%">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

### HTML5 Audio

```html {.wrap}
<audio
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
>
  Your browser does not support the audio element.
</audio>
```

#### ↓ Prévia

<audio controls class="w-full"
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"> Your browser does not support the
audio element. </audio>

### HTML5 Ruby

```html {.wrap}
<ruby>
  汉 <rp>(</rp><rt>hàn</rt><rp>)</rp> 字 <rp>(</rp><rt>zì</rt><rp>)</rp>
</ruby>
```

#### ↓ Prévia

<ruby class="mt-4 text-center text-5xl">
  汉 <rp>(</rp><rt>hàn</rt><rp>)</rp>
  字 <rp>(</rp><rt>zì</rt><rp>)</rp>
</ruby>

### HTML5 kdi

```html
<ul>
  <li>User <bdi>hrefs</bdi>: 60 points</li>
  <li>User <bdi>jdoe</bdi>: 80 points</li>
  <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>
```

#### ↓ Prévia

<ul>
 <li>User <bdi>hrefs</bdi>: 60 points</li>
 <li>User <bdi>jdoe</bdi>: 80 points</li>
 <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>

### HTML5 progress

```html
<progress value="50" max="100"></progress>
```

<progress value="50" max="100" class="w-full"></progress>

### HTML5 mark

```html
<p>I Love <mark>CheatSheets.zip</mark></p>
```

<p>I Love <mark>CheatSheets.zip</mark></p>

## Tabelas HTML

### Exemplo de tabela {.row-span-2}

```html
<table>
  <thead>
    <tr>
      <td>name</td>
      <td>age</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Roberta</td>
      <td>39</td>
    </tr>
    <tr>
      <td>Oliver</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

### Tags de tabela HTML {.row-span-2}

| Tag                                                                               | Descrição                                    |
| --------------------------------------------------------------------------------- | -------------------------------------------- |
| [\<table>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)       | Define uma tabela                            |
| [\<th>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)             | Define uma célula de cabeçalho em uma tabela |
| [\<tr>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)             | Define uma linha em uma tabela               |
| [\<td>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)             | Define uma célula em uma tabela              |
| [\<caption>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)   | Define uma legenda de tabela                 |
| [\<colgroup>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) | Define um grupo de colunas                   |
| [\<col>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)           | Define uma coluna dentro de uma tabela       |
| [\<thead>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)       | Agrupa o conteúdo do cabeçalho               |
| [\<tbody>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)       | Agrupa o conteúdo do corpo                   |
| [\<tfoot>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)       | Agrupa o conteúdo do rodapé                  |

### Atributos de \<td>

| Atributo  | Descrição                                                             |
| --------- | --------------------------------------------------------------------- |
| `colspan` | Número de colunas que uma célula deve abranger                        |
| `headers` | Uma ou mais células de cabeçalho às quais uma célula está relacionada |
| `rowspan` | Número de linhas que uma célula deve abranger                         |

Veja: [td\#Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attributes)

### Atributos de \<th>

| Atributo                                                                         | Descrição                                                             |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `colspan`                                                                        | Número de colunas que uma célula deve abranger                        |
| `headers`                                                                        | Uma ou mais células de cabeçalho às quais uma célula está relacionada |
| `rowspan`                                                                        | Número de linhas que uma célula deve abranger                         |
| `abbr`                                                                           | Descrição do conteúdo da célula                                       |
| [scope](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) | O elemento de cabeçalho ao qual se relaciona                          |

Veja: [th\#Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attributes)

## Listas HTML

### Lista não ordenada

```html
<ul>
  <li>I'm an item</li>
  <li>I'm another item</li>
  <li>I'm another item</li>
</ul>
```

Veja: [O elemento Unordered List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

### Lista ordenada

```html
<ol>
  <li>I'm the first item</li>
  <li>I'm the second item</li>
  <li>I'm the third item</li>
</ol>
```

Veja: [O elemento Ordered List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

### Lista de definição

```html
<dl>
  <dt>A Term</dt>
  <dd>Definition of a term</dd>
  <dt>Another Term</dt>
  <dd>Definition of another term</dd>
</dl>
```

Veja: [O elemento Description List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

## Formulários HTML

### Tags de formulário {.row-span-2}

```html
<form method="POST" action="api/login">
  <label for="mail">Email: </label>
  <input type="email" id="mail" name="mail" />
  <br />
  <label for="pw">Password: </label>
  <input type="password" id="pw" name="pw" />
  <br />
  <input type="submit" value="Login" />
  <br />
  <input type="checkbox" id="ck" name="ck" />
  <label for="ck">Remember me</label>
</form>
```

#### ↓ Prévia

<form method="POST" action="api/login" style="padding: 20px;">
    <label for="email">Email: </label> 
    <input type="email" id="email" name="email" class="border border-slate-400 mt-2">
    <br/>
    <label for="pwd">Password: </label> 
    <input type="password" id="pwd" name="pwd" class="border border-slate-400 mt-2">
    <br/>
    <input type="submit" value="Login" class="mt-2">
    <br/>
    <input type="checkbox" id="ck" name="ck" class="mt-2">
    <label for="ck">Remember me</label> 
</form>

O elemento `<form>` do HTML é usado para coletar e enviar informações para uma fonte externa.

### Atributos de formulário

| Atributo   | Descrição                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `name`     | Nome do formulário para scripting                                                                       |
| `action`   | URL do script do formulário                                                                             |
| `method`   | Método HTTP, `POST` / `GET` _(padrão)_                                                                  |
| `enctype`  | Tipo de mídia, veja [enctype](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype) |
| `onsubmit` | Executado quando o formulário é enviado                                                                 |
| `onreset`  | Executado quando o formulário é redefinido                                                              |

### Tags label

```html
<!-- Nested label -->
<label
  >Click me
  <input type="text" id="user" name="name" />
</label>
```

---

```html
<!-- 'for' attribute -->
<label for="user">Click me</label>
<input id="user" type="text" name="name" />
```

O `for` em um label referencia o atributo `id` de um input

### Tags input

```html
<label for="Name">Name:</label> <input type="text" name="Name" id="" />
```

#### ↓ Prévia

<form style="padding: 20px;">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" class="border border-slate-400">
</form>

Veja: [Tags input do HTML](/html#html-input-tags)

### Tags textarea

```html {.wrap}
<textarea rows="2" cols="30" name="address" id="address"></textarea>
```

#### ↓ Prévia

<form style="padding: 20px;">
    <textarea rows="2" cols="30" name="address" id="address" class="border border-slate-400"style="width: 100%"></textarea>
</form>

Textarea é um controle de entrada de texto com múltiplas linhas

### Botões de rádio

```html
<input type="radio" name="gender" id="m" />
<label for="m">Male</label>
<input type="radio" name="gender" id="f" />
<label for="f">Female</label>
```

#### ↓ Prévia

<form style="padding: 20px;">
    <input type="radio" name="gender" id="m">
    <label for="m">Male</label>
    <input type="radio" name="gender" id="f">
    <label for="f">Female</label>
</form>

Botões de rádio são usados para permitir que o usuário selecione exatamente uma opção

### Caixas de seleção

```html
<input type="checkbox" name="s" id="soc" />
<label for="soc">Soccer</label>
<input type="checkbox" name="s" id="bas" />
<label for="bas">Baseball</label>
```

#### ↓ Prévia

<form style="padding: 20px;">
    <input type="checkbox" name="sports" id="soccer">
    <label for="soccer">Soccer</label>
    <input type="checkbox" name="sports" id="baseball">
    <label for="baseball">Baseball</label>
</form>

Caixas de seleção permitem que o usuário selecione uma ou mais

### Tags select

```html
<label for="city">City:</label>
<select name="city" id="city">
  <option value="1">Sydney</option>
  <option value="2">Melbourne</option>
  <option value="3">Cromwell</option>
</select>
```

#### ↓ Prévia

<form style="padding: 20px">
    <label for="city">City:</label>
    <select name="city" id="city" class="border border-slate-400">
        <option value="1">Sydney</option>
        <option value="2">Melbourne</option>
        <option value="3">Cromwell</option>
    </select>
</form>

Uma caixa select é uma lista suspensa de opções

### Tags fieldset

```html
<fieldset>
  <legend>Your favorite monster</legend>
  <input type="radio" id="kra" name="m" />
  <label for="kraken">Kraken</label><br />
  <input type="radio" id="sas" name="m" />
  <label for="sas">Sasquatch</label>
</fieldset>
```

#### ↓ Prévia

<form style="padding: 20px">
    <fieldset class="border border-slate-400" style="padding: 20px">
        <legend>Your favorite monster</legend>
        <input type="radio" id="kra" name="monster">
        <label for="kra">Kraken</label><br/>
        <input type="radio" id="sas" name="monster">
        <label for="sas">Sasquatch</label>
    </fieldset>
</form>

### Tags datalist (HTML5)

```html
<label for="b">Choose a browser: </label>
<input list="list" id="b" name="browser" />
<datalist id="list">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

#### ↓ Prévia

<form style="padding: 20px">
    <label for="myBrowser">Choose a browser:</label>
    <input list="browsers" id="myBrowser" name="myBrowser" class="border border-slate-400"/>
    <datalist id="browsers">
      <option value="Chrome">
      <option value="Firefox">
      <option value="Internet Explorer">
      <option value="Opera">
      <option value="Safari">
      <option value="Microsoft Edge">
    </datalist>
</form>

### Botões Submit e Reset

```html
<form action="register.php" method="post">
  <label for="foo">Name:</label>
  <input type="text" name="name" id="foo" />
  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
</form>
```

#### ↓ Prévia

<form action="register.php" method="post" style="padding: 20px">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" class="border border-slate-400">
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
</form>

`Submit` envia os dados para o servidor; `Reset` volta aos valores padrão

## Tags input do HTML {.cols-2}

### Atributos de input {.row-span-2}

A tag input é um elemento vazio, que identifica o tipo específico de informação de campo a obter do usuário.

```html {.wrap}
<input type="text" name="?" value="?" minlength="6" required />
```

---

| -   |                         |                                                                                                                                    |
| --- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
|     | `type="…"`              | O tipo de dados que está sendo inserido                                                                                            |
|     | `value="…"`             | Valor padrão                                                                                                                       |
|     | `name="…"`              | Usado para descrever esses dados na requisição HTTP                                                                                |
|     | `id="…"`                | Identificador único que outros elementos HTML                                                                                      |
|     | `readonly`              | Impede o usuário de modificar                                                                                                      |
|     | `disabled`              | Impede qualquer interação                                                                                                          |
|     | `checked`               | Se o radio ou checkbox está selecionado ou não                                                                                     |
|     | `required`              | Sendo obrigatório, veja [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required#example)                  |
|     | `placeholder="…"`       | Adiciona um texto temporário, veja [::placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder#examples)        |
|     | `autocomplete="off"`    | Desativa o preenchimento automático                                                                                                |
|     | `autocapitalize="none"` | Desativa a capitalização automática                                                                                                |
|     | `inputmode="…"`         | Exibe um teclado específico, veja [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)       |
|     | `list="…"`              | O id de um [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) associado                                |
|     | `maxlength="…"`         | Número máximo de caracteres                                                                                                        |
|     | `minlength="…"`         | Número mínimo de caracteres                                                                                                        |
|     | `min="…"`               | Valor numérico mínimo em range & number                                                                                            |
|     | `max="…"`               | Valor numérico máximo em range & number                                                                                            |
|     | `step="…"`              | Como o número será incrementado em range & number                                                                                  |
|     | `pattern="…"`           | Especifica uma [expressão regular](/regex), veja [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)   |
|     | `autofocus`             | Ser focado                                                                                                                         |
|     | `spellcheck`            | Realiza verificação ortográfica                                                                                                    |
|     | `multiple`              | Se deve permitir [múltiplos](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple) valores                        |
|     | `accept=""`             | Tipo de arquivo esperado em controles de upload de [arquivo](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) |

{.left-text}

Veja também:
[Atributos do elemento \<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)

### Tipos de input

|                   |                                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type="checkbox"` | <input type="checkbox" class="border border-slate-400">                                                                                  |
| `type="radio"`    | <input type="radio" class="border border-slate-400">                                                                                     |
| `type="file"`     | <input type="file" class="border border-slate-400">                                                                                      |
| `type="hidden"`   | <input type="hidden" class="border border-slate-400">                                                                                    |
| `type="text"`     | <input type="text" class="border border-slate-400">                                                                                      |
| `type="password"` | <input type="password" class="border border-slate-400">                                                                                  |
| `type="image"`    | <input type="image" src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" width="70"> |
| `type="reset"`    | <input type="reset" class="border border-slate-400">                                                                                     |
| `type="button"`   | <input type="button" class="border border-slate-400" value="button">                                                                     |
| `type="submit"`   | <input type="submit" class="border border-slate-400">                                                                                    |

#### Novos tipos de input no HTML5

|                         |                                                                      |
| ----------------------- | -------------------------------------------------------------------- |
| `type="color"`          | <input type="color" value="#0FB881" class="border border-slate-400"> |
| `type="date"`           | <input type="date" class="border border-slate-400">                  |
| `type="time"`           | <input type="time" class="border border-slate-400">                  |
| `type="month"`          | <input type="month" class="border border-slate-400">                 |
| `type="datetime-local"` | <input type="datetime-local" class="border border-slate-400">        |
| `type="week"`           | <input type="week" class="border border-slate-400">                  |
| `type="email"`          | <input type="email" class="border border-slate-400">                 |
| `type="tel"`            | <input type="tel" class="border border-slate-400">                   |
| `type="url"`            | <input type="url" class="border border-slate-400">                   |
| `type="number"`         | <input type="number" class="border border-slate-400">                |
| `type="search"`         | <input type="search" class="border border-slate-400">                |
| `type="range"`          | <input type="range" class="border border-slate-400">                 |

### Seletores CSS de input

|               |                                 |
| ------------- | ------------------------------- |
| `input:focus` | Quando está com foco do teclado |

Veja: [Pseudo-classes de input](/css#input-pseudo-classes)

## Tags meta do HTML {.cols-2}

### Tags meta {.row-span-3}

A tag meta descreve metadados dentro de um documento HTML. Ela explica materiais adicionais sobre o HTML.

```html
<meta charset="utf-8" />
```

```html
<!-- title -->
<title>···</title>
<meta property="og:title" content="···" />
<meta name="twitter:title" content="···" />
```

---

```html
<!-- url -->
<link rel="canonical" href="https://···" />
<meta property="og:url" content="https://···" />
<meta name="twitter:url" content="https://···" />
```

---

```html
<!-- description -->
<meta name="description" content="···" />
<meta property="og:description" content="···" />
<meta name="twitter:description" content="···" />
```

---

```html
<!-- image -->
<meta property="og:image" content="https://···" />
<meta name="twitter:image" content="https://···" />
```

---

```html
<!-- ua -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

---

```html
<!-- viewport -->
<meta name="viewport" content="width=device-width" />
<meta name="viewport" content="width=1024" />
```

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_CA" />
<meta property="og:title" content="HTML cheatsheet" />
<meta property="og:url" content="https://cheatsheets.zip/html" />
<meta property="og:image" content="https://xxx.com/image.jpg" />
<meta property="og:site_name" content="Name of your website" />
<meta property="og:description" content="Description of this page" />
```

Usado por Facebook, Instagram, Pinterest, LinkedIn, etc.

### Twitter Cards

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@FechinLi" />
<meta name="twitter:title" content="HTML cheatsheet" />
<meta name="twitter:url" content="https://cheatsheets.zip/html" />
<meta name="twitter:description" content="Description of this page" />
<meta name="twitter:image" content="https://xxx.com/image.jpg" />
```

Veja: [Documentação do Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary)

### Geotagging

```html
<meta name="ICBM" content="45.416667,-75.7" />
<meta name="geo.position" content="45.416667;-75.7" />
<meta name="geo.region" content="ca-on" />
<meta name="geo.placename" content="Ottawa" />
```

Veja: [Geotagging](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

## Veja também

- [Especificação HTML 4.01](https://www.w3.org/TR/REC-html40/cover.html#minitoc) _(w3.org)_
