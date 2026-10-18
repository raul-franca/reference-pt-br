---
title: Color Picker
date: 2025-07-01 18:28:43
background: bg-[#2a6387]
tags:
  - html
  - color
categories:
  - Ferramentas
intro: O cheat sheet do Color Picker traz informações básicas sobre cores e opções de escolha
plugins:
  - copyCode
---

## Primeiros passos


### Fundamentos de cor {.col-span-3}


| **Categoria**                    | **Descrição**                                                                                                                                                                                                                                                                                  |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Modelos de cor**               | **RGB**: Red, Green, Blue – modelo aditivo usado em telas. <br> **HEX**: Códigos hexadecimais de cor, por exemplo, #FFFFFF. <br> **HSL**: Hue, Saturation, Lightness – intuitivo para ajustes de cor. <br> **HSV**: Hue, Saturation, Value – semelhante ao HSL, mas com tratamento diferente de brilho.    |
| **Terminologia de cor**          | **Saturation**: Intensidade ou pureza de uma cor. <br> **Hue**: O tipo de cor (por exemplo, vermelho, azul). <br> **Lightness**: Brilho ou escuridão de uma cor. <br> **Opacity**: Nível de transparência de uma cor, normalmente definido como alpha em RGBA.                                                        |
| **Formatos de representação de cor** | **HEX**: `#RRGGBB` ou `#RRGGBBAA` (com alpha). <br> **RGB**: `rgb(255, 255, 255)` <br> **RGBA**: `rgba(255, 255, 255, 0.5)` <br> **HSL**: `hsl(120, 100%, 50%)` <br> **HSLA**: `hsla(120, 100%, 50%, 0.5)`                                                                                    |



### Principais frameworks {.col-span-3}

| **Framework**    | **Notação / sintaxe de cor**                                                                                                                                                    | **Descrição**                                               | **Link da documentação**                                                                   |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| **CSS**          | `color: red;` <br> `color: #ff0000;` <br> `color: rgb(255, 0, 0);` <br> `color: rgba(255, 0, 0, 0.5);` <br> `color: hsl(0, 100%, 50%);` <br> `color: hsla(0, 100%, 50%, 0.5);`  | Propriedades e formatos de cor padrão do CSS.               | [Documentação de cores do CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)    |
| **SASS/SCSS**    | `$color: #ff0000;` <br> `color: $color;`                                                                                                                                        | Variáveis para cores, podem usar os mesmos formatos do CSS. | [Documentação de cores do SASS](https://sass-lang.com/documentation/values/colors)         |
| **Tailwind CSS** | `class="bg-red-500"` <br> `class="text-green-300"`                                                                                                                              | Classes utilitárias com tons de cor predefinidos.           | [Cores do Tailwind CSS](https://tailwindcss.com/docs/customizing-colors)                   |
| **Bootstrap**    | `class="text-primary"` <br> `class="bg-success"`                                                                                                                                | Classes de cor nomeadas para estilização rápida.            | [Cores do Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/#colors) |
| **Material UI**  | `style={{ color: 'primary' }}` ou paleta do tema                                                                                                                               | Usa a paleta do tema, pode ser sobrescrita com códigos de cor específicos. | [Cores do Material UI](https://mui.com/customization/color/)                               |


## Paleta de cores

### Paleta do Tailwind {.col-span-3}

<widget name="color-palette-tailwind"/>


## Gradiente em CSS

### Gerador de gradiente {.col-span-3}

<widget name="gradient-maker"/>


| Parâmetro     | Descrição                            | Exemplo                                        |
|:--------------|:-------------------------------------|:-----------------------------------------------|
| **to right**  | O gradiente vai da esquerda para a direita | `linear-gradient(to right, #ff7e5f, #feb47b)`  |
| **to left**   | O gradiente vai da direita para a esquerda | `linear-gradient(to left, #ff7e5f, #feb47b)`   |
| **to bottom** | O gradiente vai de cima para baixo   | `linear-gradient(to bottom, #ff7e5f, #feb47b)` |
| **to top**    | O gradiente vai de baixo para cima   | `linear-gradient(to top, #ff7e5f, #feb47b)`    |
| **deg**       | Especifica um ângulo em graus        | `linear-gradient(45deg, ...)`                  |
