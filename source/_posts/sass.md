---
title: Sass
date: 2020-12-20 22:15:43
background: bg-[#ba6993]
label: CSS
tags:
  - css
categories:
  - Programação
intro: |
  Este é um cheat sheet de referência rápida que lista os recursos mais úteis do [SASS](https://sass-lang.com).
plugins:
  - copyCode
  - runCode
---

## Fundamentos do Sass

### Introdução

- [Documentação](https://sass-lang.com/documentation) _(sass-lang.com)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/sass/) _(learnxinyminutes.com)_

### Variáveis

```scss
$defaultLinkColor: #46eac2;

a {
  color: $defaultLinkColor;
}
```

### Interpolação de strings

```scss
$wk: -webkit-;

.rounded-box {
  #{$wk}border-radius: 4px;
}
```

### Comentários

```scss
/*
 Block comments
 Block comments
 Block comments
*/

// Line comments
```

### Mixins

```scss
@mixin heading-font {
  font-family: sans-serif;
  font-weight: bold;
}
h1 {
  @include heading-font;
}
```

Veja: [Mixins](#sass-mixins)

### Aninhamento {.row-span-2}

```scss
.markdown-body {
  a {
    color: blue;
    &:hover {
      color: red;
    }
  }
}
```

#### para propriedades

```scss
text: {
  // like text-align: center
  align: center;
  // like text-transform: uppercase
  transform: uppercase;
}
```

### Extend

```scss
.button {
    ···
}
```

```scss
.push-button {
  @extend .button;
}
```

### @import

```scss
@import './other_sass_file';
@import '/code', 'lists';

// Plain CSS @imports
@import 'theme.css';
@import url(theme);
```

A extensão `.sass` ou `.sass` é opcional.

## Mixins do Sass

### Parâmetros

```scss
@mixin font-size($n) {
  font-size: $n * 1.2em;
}
```

```scss
body {
  @include font-size(2);
}
```

### Valores padrão

```scss
@mixin pad($n: 10px) {
  padding: $n;
}
```

```scss
body {
  @include pad(15px);
}
```

### Variável padrão

```scss
$default-padding: 10px;

@mixin pad($n: $default-padding) {
  padding: $n;
}

body {
  @include pad(15px);
}
```

## Funções de cor do Sass {.cols-2}

### rgba

```scss
rgb(100, 120, 140)
rgba(100, 120, 140, .5)
rgba($color, .5)
```

### Mistura

```scss
mix($a, $b, 10%)   // 10% a, 90% b
```

### Modificar HSLA

```scss
darken($color, 5%)
lighten($color, 5%)
```

```scss
saturate($color, 5%)
desaturate($color, 5%)
grayscale($color)
```

```scss
adjust-hue($color, 15deg)
complement($color)    // like adjust-hue(_, 180deg)
invert($color)
```

```scss
fade-in($color, .5)   // aka opacify()
fade-out($color, .5)  // aka transparentize()
rgba($color, .5)      // sets alpha to .5
```

### Obter valores individuais

#### HSLA

```scss
hue($color)         // 0deg..360deg
saturation($color)  // 0%..100%
lightness($color)   // 0%..100%
alpha($color)       // 0..1 (aka opacity())
```

#### RGB

```scss
red($color)         // 0..255
green($color)
blue($color)
```

Veja: [hue()](http://sass-lang.com/documentation/Sass/Script/Functions.html#hue-instance_method),
[red()](http://sass-lang.com/documentation/Sass/Script/Functions.html#red-instance_method)

### Ajustes

```scss
// Changes by fixed amounts
adjust-color($color, $blue: 5)
adjust-color($color, $lightness: -30%) // darken(_, 30%)
adjust-color($color, $alpha: -0.4)     // fade-out(_, .4)
adjust-color($color, $hue: 30deg)      // adjust-hue(_, 15deg)
```

```scss
// Changes via percentage
scale-color($color, $lightness: 50%)
```

```scss
// Changes one property completely
change-color($color, $hue: 180deg)
change-color($color, $blue: 250)
```

Compatível com: `$red`, `$green`, `$blue`, `$hue`, `$saturation`, `$lightness`, `$alpha`

## Outras funções do Sass {.cols-2}

### Strings

```scss
unquote('hello')
quote(hello)
```

```scss
to-upper-case(hello)
to-lower-case(hello)
```

```scss
str-length(hello world)
str-slice(hello, 2, 5)     // "ello" - it's 1-based, not 0-based
str-insert("abcd", "X", 1) // "Xabcd"
```

### Unidades

```scss
unit(3em)        // 'em'
unitless(100px)  // false
```

### Números

```scss
floor(3.5)
ceil(3.5)
round(3.5)
abs(3.5)
```

```scss
min(1, 2, 3)
max(1, 2, 3)
```

```scss
percentage(.5)   // 50%
random(3)        // 0..3
```

### Diversos

```scss
variable-exists(red)    // checks for $red
mixin-exists(red-text)  // checks for @mixin red-text
function-exists(redify)
```

```scss
global-variable-exists(red)
```

```scss
selector-append('.menu', 'li', 'a')   // .menu li a
selector-nest('.menu', '&:hover li')  // .menu:hover li
selector-extend(...)
selector-parse(...)
selector-replace(...)
selector-unify(...)
```

## Verificações de recursos do Sass {.cols-2}

### Verificação de recurso

```scss
feature-exists(global-variable-shadowing)
```

### Recursos

- global-variable-shadowing
- extend-selector-pseudoclass
- units-level-3
- at-error

## Loops do Sass

### Laços for

```scss
@for $i from 1 through 4 {
  .item-#{$i} {
    left: 20px * $i;
  }
}
```

### Loops each (simples)

```scss
$menu-items: home about contact;

@each $item in $menu-items {
  .photo-#{$item} {
    background: url('#{$item}.jpg');
  }
}
```

### Loops each (aninhados)

```scss
$backgrounds: (home, 'home.jpg'), (about, 'about.jpg');

@each $id, $image in $backgrounds {
  .photo-#{$id} {
    background: url($image);
  }
}
```

### Loops while

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}
```

## Outros recursos do Sass

### Condicionais {.row-span-2}

```scss
@if $position == 'left' {
  position: absolute;
  left: 0;
} @else if $position == 'right' {
  position: absolute;
  right: 0;
} @else {
  position: static;
}
```

### Interpolação

```scss
.#{$klass} { ... }      // Class
call($function-name)    // Functions

@media #{$tablet}
font: #{$size}/#{$line-height}
url("#{$background}.jpg")
```

### Listas

```scss
$list: (a b c);

nth($list, 1)  // starts with 1
length($list)

@each $item in $list { ... }
```

### Maps {.col-span-2}

```scss
$map: (key1: value1, key2: value2, key3: value3);

map-get($map, key1)
```
