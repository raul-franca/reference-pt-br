---
title: Markdown
date: 2020-12-14 18:28:43
background: bg-[#6319bf]
tags:
  - md
  - Markup
  - text
  - format
categories:
  - Programação
intro: Esta é uma cheat sheet de referência rápida para a sintaxe do Markdown.
plugins:
  - copyCode
  - runCode
---

## Referência rápida de Markdown

### Cabeçalhos (estilo atx)

<!-- prettier-ignore -->
```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### Cabeçalhos (estilo setext)

<!-- prettier-ignore -->
```markdown
Header 1
========

Header 2
--------
```

### Citações em bloco

```markdown
> This is  
> a blockquote
>
> > Nested  
> > Blockquote
```

### Lista não ordenada {.row-span-2}

<!-- prettier-ignore -->
```markdown
* Item 1
* Item 2
  * item 3a
  * item 3b
```

ou

```markdown
- Item 1
- Item 2
```

ou

<!-- prettier-ignore -->
```markdown
_ Item 1
+ Item 2
```

ou

```markdown
- [ ] Checkbox off
- [x] Checkbox on
```

### Lista ordenada

```markdown
1. Item 1
2. Item 2  
   a. Item 3a  
   b. Item 3b
```

### Links

```markdown
[link](http://google.com)

[link][google]  
[google]: http://google.com

<http://google.com>
```

### Ênfase

<!-- prettier-ignore -->
```markdown
*italic*  
_italic_

**bold**  
__bold__

`inline code`  
~~struck out~~
```

### Linha horizontal

Hífens

<!-- prettier-ignore -->
```markdown
---
```

Asteriscos

<!-- prettier-ignore -->
```markdown
***
```

Sublinhados

<!-- prettier-ignore -->
```markdown
___
```

### Código

````markdown
```javascript
console.log('This is a block code');
```
````

<!-- prettier-ignore -->
```markdown
~~~css
.button {
  border: none;
}
~~~
```

```markdown
    4 space indent makes a code block
```

### Código escapado

Blocos de código escapados podem ser feitos com mais crases do lado de fora ou com um símbolo diferente.

<!-- prettier-ignore -->
`````markdown
````markdown
```bash
echo hi
```
````

~~~markdown
```bash
echo hi
```
~~~

`````

#### Inline code

```markdown
`Inline code` has back-ticks around it
```

### Tabelas

```markdown
| Left column | Center column | Right column |
| :---------- | :-----------: | -----------: |
| Cell 1      |   Centered    |        $1600 |
| Cell 2      |    Cell 3     |          $12 |
```

Estilo simples

<!-- prettier-ignore -->
```markdown
Left column | Center column | Right column
:----------:|:-------------:|:-----------:
   Cell 1   |   Centered    |    $1600
   Cell 2   |    Cell 3     |     $12
```

Um gerador de tabelas Markdown: [tableconvert.com](https://tableconvert.com/)

### Imagens {.col-span-2}

```markdown
![GitHub Logo](/images/logo.png)

![Alt Text](url)
```

#### Imagem com link

```markdown
[![GitHub Logo](/images/logo.png)](https://github.com/)

[![Alt Text](image_url)](link_url)
```

#### Estilo de referência

```markdown
![alt text][logo]

[logo]: /images/logo.png 'Logo Title'
```

### Escapes com barra invertida

| Caracteres        | Escape                | Descrição              |
| ----------------- | --------------------- | :--------------------- |
| <code>\\</code>   | <code>\\\\</code>     | Barra invertida        |
| <code>\`</code>   | <code>\\\`</code>     | Crase                  |
| <code>\*</code>   | <code>\\\*</code>     | Asterisco              |
| <code>\_</code>   | <code>\\\_</code>     | Sublinhado             |
| <code>\{\}</code> | <code>\\\{\\\}</code> | Chaves                 |
| <code>\[\]</code> | <code>\\\[\\\]</code> | Colchetes              |
| <code>\(\)</code> | <code>\\\(\\\)</code> | Parênteses             |
| <code>\#</code>   | <code>\\\#</code>     | Cerquilha              |
| <code>\+</code>   | <code>\\\+</code>     | Sinal de mais          |
| <code>\-</code>   | <code>\\\-</code>     | Sinal de menos \(hífen\) |
| <code>\.</code>   | <code>\\\.</code>     | Ponto                  |
| <code>\!</code>   | <code>\\\!</code>     | Ponto de exclamação    |

{.show-header}
