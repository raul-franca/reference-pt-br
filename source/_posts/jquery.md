---
title: jQuery
date: 2020-12-24 21:08:21
background: bg-[#2c63a2]
tags:
  - web
  - js
  - javascript
  - library
categories:
  - Programação
intro: |
  Este cheat sheet de [jQuery](https://jquery.com/) é uma ótima referência tanto para iniciantes quanto para desenvolvedores experientes.
plugins:
  - tooltip
  - copyCode
  - runCode
---

## Primeiros passos

### Incluindo o jQuery

```html {.wrap}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

#### CDN oficial

```html {.wrap}
<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  crossorigin="anonymous"
></script>
```

### Sintaxe do jQuery

```javascript
$(selector).methodOrFunction();
```

#### Exemplo:

```javascript
$('#menu').on('click', function () {
  $(this).hide();
});

$('body').css('background', 'red');
```

### Document ready do jQuery

```javascript
$(document).ready(function () {
  // Runs after the DOM is loaded.
  alert('DOM fully loaded!');
});
```

```javascript
$(function () {
  // Runs after the DOM is loaded.
  alert('DOM fully loaded!');
});
```

## Seletores do jQuery

### Exemplos {.secondary}

```javascript
$('button').click(() => {
  $(':button').css('color', 'red');
});
```

#### Combinando seletores

```javascript
$('selector1, selector2 ...selectorn');
```

### Básicos

<!-- prettier-ignore -->
- [*](https://api.jquery.com/all-selector/){data-tooltip="Seleciona todos os elementos."}
- [.class](https://api.jquery.com/class-selector/){data-tooltip="Seleciona todos os elementos com a classe informada. "}
- [element](https://api.jquery.com/element-selector/){data-tooltip="Seleciona todos os elementos com o nome de tag informado."}
- [#id](https://api.jquery.com/id-selector/){data-tooltip="Seleciona um único elemento com o atributo id informado. "}
- [:hidden](https://api.jquery.com/hidden-selector/){data-tooltip="Seleciona todos os elementos que estão ocultos."}
- [:visible](https://api.jquery.com/visible-selector/){data-tooltip="Seleciona todos os elementos que estão visíveis."}
- [:contains()](https://api.jquery.com/contains-selector/){data-tooltip="Seleciona todos os elementos que contêm o texto especificado."}
- [:empty](https://api.jquery.com/empty-selector/){data-tooltip="Seleciona todos os elementos que não têm filhos (incluindo nós de texto)."}
- [:has()](https://api.jquery.com/has-selector/){data-tooltip="Seleciona elementos que contêm pelo menos um elemento que corresponde ao seletor especificado."}
- [:parent](https://api.jquery.com/parent-selector/){data-tooltip="Seleciona todos os elementos que têm pelo menos um nó filho (um elemento ou texto)."}
- [parent &gt; child](https://api.jquery.com/child-selector/){data-tooltip="Seleciona todos os elementos filhos diretos especificados por child, de elementos especificados por parent."}
- [ancestor descendant](https://api.jquery.com/descendant-selector/){data-tooltip="Seleciona todos os elementos que são descendentes de um ancestral informado."}
- [prev + next](https://api.jquery.com/next-adjacent-selector/){data-tooltip="Seleciona todos os próximos elementos que correspondem a next e são imediatamente precedidos por um irmão prev."}
- [prev ~ siblings](https://api.jquery.com/next-siblings-selector/){data-tooltip="Seleciona todos os elementos irmãos que vêm depois do elemento prev, têm o mesmo pai e correspondem ao seletor de filtragem siblings."}

{.marker-none .cols-3}

### Filtros básicos

<!-- prettier-ignore -->
- [:animated](https://api.jquery.com/animated-selector/){data-tooltip="Seleciona todos os elementos que estão em processo de animação no momento em que o seletor é executado."}
- [:eq()](https://api.jquery.com/eq-selector/){data-tooltip="Seleciona o elemento no índice n dentro do conjunto correspondido."}
- [:even](https://api.jquery.com/even-selector/){data-tooltip="Seleciona os elementos de índice par, começando em zero. Veja também :odd."}
- [:first](https://api.jquery.com/first-selector/){data-tooltip="Seleciona o primeiro elemento do DOM correspondido."}
- [:gt()](https://api.jquery.com/gt-selector/){data-tooltip="Seleciona todos os elementos com índice maior que index dentro do conjunto correspondido."}
- [:header](https://api.jquery.com/header-selector/){data-tooltip="Seleciona todos os elementos que são cabeçalhos, como h1, h2, h3 e assim por diante."}
- [:lang()](https://api.jquery.com/lang-selector/){data-tooltip="Seleciona todos os elementos do idioma especificado."}
- [:last](https://api.jquery.com/last-selector/){data-tooltip="Seleciona o último elemento correspondido."}
- [:lt()](https://api.jquery.com/lt-selector/){data-tooltip="Seleciona todos os elementos com índice menor que index dentro do conjunto correspondido."}
- [:not()](https://api.jquery.com/not-selector/){data-tooltip="Seleciona todos os elementos que não correspondem ao seletor informado."}
- [:odd](https://api.jquery.com/odd-selector/){data-tooltip="Seleciona os elementos de índice ímpar, começando em zero. Veja também :even."}
- [:root](https://api.jquery.com/root-selector/){data-tooltip="Seleciona o elemento que é a raiz do documento."}
- [:target](https://api.jquery.com/target-selector/){data-tooltip="Seleciona o elemento de destino indicado pelo identificador de fragmento da URI do documento."}

{.marker-none .cols-3}

### Atributos

<!-- prettier-ignore -->
- [[name|="value"]](https://api.jquery.com/attribute-contains-prefix-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado com um valor igual a uma string informada ou que começa com essa string seguida de um hífen (-)."}
- [[name*="value"]](https://api.jquery.com/attribute-contains-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado com um valor que contém uma substring informada."}
- [[name~="value"]](https://api.jquery.com/attribute-contains-word-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado com um valor que contém uma palavra informada, delimitada por espaços."}
- [[name$="value"]](https://api.jquery.com/attribute-ends-with-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado com um valor que termina exatamente com uma string informada. A comparação diferencia maiúsculas de minúsculas."}
- [[name="value"]](https://api.jquery.com/attribute-equals-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado com um valor exatamente igual a um determinado valor."}
- [[name!="value"]](https://api.jquery.com/attribute-not-equal-selector/){data-tooltip="Seleciona elementos que não têm o atributo especificado ou que o têm, mas não com um determinado valor."}
- [[name^="value"]](https://api.jquery.com/attribute-starts-with-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado com um valor que começa exatamente com uma string informada."}
- [[name]](https://api.jquery.com/has-attribute-selector/){data-tooltip="Seleciona elementos que têm o atributo especificado, com qualquer valor. "}
- [[name="value"][name2="value2"]](https://api.jquery.com/multiple-attribute-selector/){data-tooltip="Corresponde a elementos que atendem a todos os filtros de atributo especificados."} {.col-span-2}

{.marker-none .cols-2}

### Filtros de filhos

<!-- prettier-ignore -->
- [:first-child](https://api.jquery.com/first-child-selector/){data-tooltip="Seleciona todos os elementos que são o primeiro filho de seu pai."}
- [:first-of-type](https://api.jquery.com/first-of-type-selector/){data-tooltip="Seleciona todos os elementos que são o primeiro entre irmãos com o mesmo nome de elemento."}
- [:last-child](https://api.jquery.com/last-child-selector/){data-tooltip="Seleciona todos os elementos que são o último filho de seu pai."}
- [:last-of-type](https://api.jquery.com/last-of-type-selector/){data-tooltip="Seleciona todos os elementos que são o último entre irmãos com o mesmo nome de elemento."}
- [:nth-child()](https://api.jquery.com/nth-child-selector/){data-tooltip="Seleciona todos os elementos que são o n-ésimo filho de seu pai."}
- [:nth-last-child()](https://api.jquery.com/nth-last-child-selector/){data-tooltip="Seleciona todos os elementos que são o n-ésimo filho de seu pai, contando do último elemento para o primeiro."}
- [:nth-last-of-type()](https://api.jquery.com/nth-last-of-type-selector/){data-tooltip="Seleciona todos os elementos que são o n-ésimo filho de seu pai em relação a irmãos com o mesmo nome de elemento, contando do último elemento para o primeiro."}
- [:nth-of-type()](https://api.jquery.com/nth-of-type-selector/){data-tooltip="Seleciona todos os elementos que são o n-ésimo filho de seu pai em relação a irmãos com o mesmo nome de elemento."}
- [:only-child](https://api.jquery.com/only-child-selector/){data-tooltip="Seleciona todos os elementos que são o único filho de seu pai."}
- [:only-of-type()](https://api.jquery.com/only-of-type-selector/){data-tooltip="Seleciona todos os elementos que não têm irmãos com o mesmo nome de elemento."}

{.marker-none .cols-2}

### Formulários

<!-- prettier-ignore -->
- [:button](https://api.jquery.com/button-selector/){data-tooltip="Seleciona todos os elementos button e os elementos do tipo button."}
- [:checkbox](https://api.jquery.com/checkbox-selector/){data-tooltip="Seleciona todos os elementos do tipo checkbox."}
- [:checked](https://api.jquery.com/checked-selector/){data-tooltip="Corresponde a todos os elementos que estão marcados ou selecionados."}
- [:disabled](https://api.jquery.com/disabled-selector/){data-tooltip="Seleciona todos os elementos desabilitados."}
- [:enabled](https://api.jquery.com/enabled-selector/){data-tooltip="Seleciona todos os elementos habilitados."}
- [:focus](https://api.jquery.com/focus-selector/){data-tooltip="Seleciona o elemento se ele estiver em foco no momento."}
- [:file](https://api.jquery.com/file-selector/){data-tooltip="Seleciona todos os elementos do tipo file."}
- [:image](https://api.jquery.com/image-selector/){data-tooltip="Seleciona todos os elementos do tipo image."}
- [:input](https://api.jquery.com/input-selector/){data-tooltip="Seleciona todos os elementos input, textarea, select e button."}
- [:password](https://api.jquery.com/password-selector/){data-tooltip="Seleciona todos os elementos do tipo password."}
- [:radio](https://api.jquery.com/radio-selector/){data-tooltip="Seleciona todos os elementos do tipo radio."}
- [:reset](https://api.jquery.com/reset-selector/){data-tooltip="Seleciona todos os elementos do tipo reset."}
- [:selected](https://api.jquery.com/selected-selector/){data-tooltip="Seleciona todos os elementos que estão selecionados."}
- [:submit](https://api.jquery.com/submit-selector/){data-tooltip="Seleciona todos os elementos do tipo submit."}
- [:text](https://api.jquery.com/text-selector/){data-tooltip="Seleciona todos os elementos input do tipo text."}

{.marker-none .cols-3}

## Atributos do jQuery

### Exemplos {.secondary .row-span-2}

```javascript
$('h2').css({
  color: 'blue',
  backgroundColor: 'gray',
  fontSize: '24px'
});
```

#### jQuery addClass

```javascript
$('.button').addClass('active');
```

#### jQuery removeClass

```javascript
$('.button').on('mouseleave', (evt) => {
  let e = evt.currentTarget;
  $(e).removeClass('active');
});
```

#### jQuery .toggleClass

```javascript
$('.choice').toggleClass('highlighted');
```

### Atributos

<!-- prettier-ignore -->
- [.attr()](https://api.jquery.com/attr/){data-tooltip="Obtém o valor de um atributo para o primeiro elemento do conjunto de elementos correspondidos."}
- [.prop()](https://api.jquery.com/prop/){data-tooltip="Obtém o valor de uma propriedade para o primeiro elemento do conjunto de elementos correspondidos."}
- [.removeAttr()](https://api.jquery.com/removeAttr/){data-tooltip="Remove um atributo de cada elemento do conjunto de elementos correspondidos."}
- [.removeProp()](https://api.jquery.com/removeProp/){data-tooltip="Remove uma propriedade do conjunto de elementos correspondidos."}
- [.val()](https://api.jquery.com/val/){data-tooltip="Obtém o valor atual do primeiro elemento do conjunto de elementos correspondidos."}

{.marker-none .cols-2}

#### Dados

<!-- prettier-ignore -->
- [jQuery.data()](https://api.jquery.com/jQuery.data/){data-tooltip="Armazena dados arbitrários associados ao elemento especificado. Retorna o valor que foi definido."}
- [.data()](https://api.jquery.com/data/){data-tooltip="Armazena dados arbitrários associados aos elementos correspondidos."}
- [jQuery.hasData()](https://api.jquery.com/jQuery.hasData/){data-tooltip="Determina se um elemento tem dados do jQuery associados a ele."}
- [jQuery.removeData()](https://api.jquery.com/jQuery.removeData/){data-tooltip="Remove um dado armazenado anteriormente."}
- [.removeData()](https://api.jquery.com/removeData/){data-tooltip="Remove um dado armazenado anteriormente."}

{.marker-none .cols-2}

### CSS

<!-- prettier-ignore -->
- [.addClass()](https://api.jquery.com/addClass/){data-tooltip="Adiciona a(s) classe(s) especificada(s) a cada elemento do conjunto de elementos correspondidos."}
- [.hasClass()](https://api.jquery.com/hasClass/){data-tooltip="Determina se algum dos elementos correspondidos tem a classe informada."}
- [.removeClass()](https://api.jquery.com/removeClass/){data-tooltip="Remove uma classe, várias classes ou todas as classes de cada elemento do conjunto de elementos correspondidos."}
- [.toggleClass()](https://api.jquery.com/toggleClass/){data-tooltip="Adiciona ou remove uma ou mais classes de cada elemento do conjunto de elementos correspondidos, conforme a presença da classe ou o valor do argumento state."}
- [.css()](https://api.jquery.com/css/){data-tooltip="Obtém as propriedades de estilo computadas para o primeiro elemento do conjunto de elementos correspondidos."}
- [jQuery.cssHooks](https://api.jquery.com/jQuery.cssHooks/){data-tooltip="Conecta-se diretamente ao jQuery para substituir como propriedades CSS específicas são obtidas ou definidas, normalizar a nomenclatura de propriedades CSS ou criar propriedades personalizadas."}
- [jQuery.cssNumber](https://api.jquery.com/jQuery.cssNumber/){data-tooltip="Um objeto que contém todas as propriedades CSS que podem ser usadas sem unidade. O método .css() usa esse objeto para saber se pode acrescentar px a valores sem unidade."}
- [jQuery.escapeSelector()](https://api.jquery.com/jQuery.escapeSelector/){data-tooltip="Escapa qualquer caractere que tenha significado especial em um seletor CSS."}

{.marker-none .cols-2}

### Dimensões

<!-- prettier-ignore -->
- [.height()](https://api.jquery.com/height/){data-tooltip="Obtém a altura computada atual do primeiro elemento do conjunto de elementos correspondidos."}
- [.innerHeight()](https://api.jquery.com/innerHeight/){data-tooltip="Obtém a altura computada atual do primeiro elemento do conjunto de elementos correspondidos, incluindo padding, mas não border."}
- [.innerWidth()](https://api.jquery.com/innerWidth/){data-tooltip="Obtém a largura interna computada atual do primeiro elemento do conjunto de elementos correspondidos, incluindo padding, mas não border."}
- [.outerHeight()](https://api.jquery.com/outerHeight/){data-tooltip="Obtém a altura externa computada atual (incluindo padding, border e, opcionalmente, margin) do primeiro elemento do conjunto de elementos correspondidos."}
- [.outerWidth()](https://api.jquery.com/outerWidth/){data-tooltip="Obtém a largura externa computada atual (incluindo padding, border e, opcionalmente, margin) do primeiro elemento do conjunto de elementos correspondidos."}
- [.width()](https://api.jquery.com/width/){data-tooltip="Obtém a largura computada atual do primeiro elemento do conjunto de elementos correspondidos."}

{.marker-none .cols-2}

### Offset

<!-- prettier-ignore -->
- [.offset()](https://api.jquery.com/offset/){data-tooltip="Obtém as coordenadas atuais do primeiro elemento do conjunto de elementos correspondidos, em relação ao documento."}
- [.offsetParent()](https://api.jquery.com/offsetParent/){data-tooltip="Obtém o ancestral mais próximo que está posicionado."}
- [.position()](https://api.jquery.com/position/){data-tooltip="Obtém as coordenadas atuais do primeiro elemento do conjunto de elementos correspondidos, em relação ao offset parent."}
- [.scrollLeft()](https://api.jquery.com/scrollLeft/){data-tooltip="Obtém a posição horizontal atual da barra de rolagem do primeiro elemento do conjunto de elementos correspondidos."}
- [.scrollTop()](https://api.jquery.com/scrollTop/){data-tooltip="Obtém a posição vertical atual da barra de rolagem do primeiro elemento do conjunto de elementos correspondidos ou define a posição vertical da barra de rolagem de cada elemento correspondido."}

{.marker-none .cols-2}

## Manipulação do jQuery

### Exemplos {.secondary .row-span-3}

```javascript
/*<span>Span.</span>*/
$('span').after('<p>Paragraph.</p>');
/*<span>Span.</span><p>Paragraph.</p>*/

/*<span>Span.</span>*/
$('<span>Span.</span>').replaceAll('p');
/*<p>Span.</p>*/

/*<span>This is span.</span>*/
$('span').wrap('<p></p>');
/*<p><span>This is span.</span></p>*/
```

### Cópia

<!-- prettier-ignore -->
- [.clone()](https://api.jquery.com/clone/){data-tooltip="Cria uma cópia profunda do conjunto de elementos correspondidos."}

{.marker-none .cols-3}

### Inserção no DOM, ao redor

<!-- prettier-ignore -->
- [.wrap()](https://api.jquery.com/wrap/){data-tooltip="Envolve uma estrutura HTML em torno de cada elemento do conjunto de elementos correspondidos."}
- [.wrapAll()](https://api.jquery.com/wrapAll/){data-tooltip="Envolve uma estrutura HTML em torno de todos os elementos do conjunto de elementos correspondidos."}
- [.wrapInner()](https://api.jquery.com/wrapInner/){data-tooltip="Envolve uma estrutura HTML em torno do conteúdo de cada elemento do conjunto de elementos correspondidos."}

{.marker-none .cols-3}

### Inserção no DOM, dentro

<!-- prettier-ignore -->
- [.append()](https://api.jquery.com/append/){data-tooltip="Insere conteúdo, especificado pelo parâmetro, no final de cada elemento do conjunto de elementos correspondidos."}
- [.appendTo()](https://api.jquery.com/appendTo/){data-tooltip="Insere cada elemento do conjunto de elementos correspondidos no final do destino."}
- [.html()](https://api.jquery.com/html/){data-tooltip="Obtém o conteúdo HTML do primeiro elemento do conjunto de elementos correspondidos."}
- [.prepend()](https://api.jquery.com/prepend/){data-tooltip="Insere conteúdo, especificado pelo parâmetro, no início de cada elemento do conjunto de elementos correspondidos."}
- [.prependTo()](https://api.jquery.com/prependTo/){data-tooltip="Insere cada elemento do conjunto de elementos correspondidos no início do destino."}
- [.text()](https://api.jquery.com/text/){data-tooltip="Obtém o conteúdo de texto combinado de cada elemento do conjunto de elementos correspondidos, incluindo seus descendentes."}
{.marker-none .cols-3}

### Inserção no DOM, fora

<!-- prettier-ignore -->
- [.after()](https://api.jquery.com/after/){data-tooltip="Insere conteúdo, especificado pelo parâmetro, depois de cada elemento do conjunto de elementos correspondidos."}
- [.before()](https://api.jquery.com/before/){data-tooltip="Insere conteúdo, especificado pelo parâmetro, antes de cada elemento do conjunto de elementos correspondidos."}
- [.insertAfter()](https://api.jquery.com/insertAfter/){data-tooltip="Insere cada elemento do conjunto de elementos correspondidos depois do destino."}
- [.insertBefore()](https://api.jquery.com/insertBefore/){data-tooltip="Insere cada elemento do conjunto de elementos correspondidos antes do destino."}

{.marker-none .cols-3}

### Remoção do DOM

<!-- prettier-ignore -->
- [.detach()](https://api.jquery.com/detach/){data-tooltip="Remove o conjunto de elementos correspondidos do DOM."}
- [.empty()](https://api.jquery.com/empty/){data-tooltip="Remove do DOM todos os nós filhos do conjunto de elementos correspondidos."}
- [.remove()](https://api.jquery.com/remove/){data-tooltip="Remove o conjunto de elementos correspondidos do DOM."}
- [.unwrap()](https://api.jquery.com/unwrap/){data-tooltip="Remove do DOM os pais do conjunto de elementos correspondidos, deixando os elementos correspondidos em seu lugar."}

{.marker-none .cols-3}

### Substituição no DOM

<!-- prettier-ignore -->
- [.replaceAll()](https://api.jquery.com/replaceAll/){data-tooltip="Substitui cada elemento de destino pelo conjunto de elementos correspondidos."}
- [.replaceWith()](https://api.jquery.com/replaceWith/){data-tooltip="Substitui cada elemento do conjunto de elementos correspondidos pelo novo conteúdo fornecido e retorna o conjunto de elementos removidos."}

{.marker-none .cols-3}

## Travessia do jQuery

### Filtragem

<!-- prettier-ignore -->
- [.eq()](https://api.jquery.com/eq/){data-tooltip="Reduz o conjunto de elementos correspondidos ao elemento no índice especificado."}
- [.filter()](https://api.jquery.com/filter/){data-tooltip="Reduz o conjunto de elementos correspondidos àqueles que correspondem ao seletor ou passam no teste da função. "}
- [.first()](https://api.jquery.com/first/){data-tooltip="Reduz o conjunto de elementos correspondidos ao primeiro do conjunto."}
- [.has()](https://api.jquery.com/has/){data-tooltip="Reduz o conjunto de elementos correspondidos àqueles que têm um descendente que corresponde ao seletor ou ao elemento do DOM."}
- [.is()](https://api.jquery.com/is/){data-tooltip="Verifica o conjunto atual de elementos correspondidos em relação a um seletor, elemento ou objeto jQuery e retorna true se pelo menos um desses elementos corresponder aos argumentos informados."}
- [.last()](https://api.jquery.com/last/){data-tooltip="Reduz o conjunto de elementos correspondidos ao último do conjunto."}
- [.map()](https://api.jquery.com/map/){data-tooltip="Passa cada elemento do conjunto atual de correspondências por uma função, produzindo um novo objeto jQuery que contém os valores retornados."}
- [.not()](https://api.jquery.com/not/){data-tooltip="Remove elementos do conjunto de elementos correspondidos."}
- [.slice()](https://api.jquery.com/slice/){data-tooltip="Reduz o conjunto de elementos correspondidos a um subconjunto especificado por um intervalo de índices."}

{.marker-none .cols-3}

### Travessia diversa

<!-- prettier-ignore -->
- [.add()](https://api.jquery.com/add/){data-tooltip="Cria um novo objeto jQuery com elementos adicionados ao conjunto de elementos correspondidos."}
- [.addBack()](https://api.jquery.com/addBack/){data-tooltip="Adiciona o conjunto anterior de elementos da pilha ao conjunto atual, opcionalmente filtrado por um seletor."}
- [.andSelf()](https://api.jquery.com/andSelf/){data-tooltip="Adiciona o conjunto anterior de elementos da pilha ao conjunto atual."}
- [.contents()](https://api.jquery.com/contents/){data-tooltip="Obtém os filhos de cada elemento do conjunto de elementos correspondidos, incluindo nós de texto e de comentário."}
- [.each()](https://api.jquery.com/each/){data-tooltip="Itera sobre um objeto jQuery, executando uma função para cada elemento correspondido. "}
- [.end()](https://api.jquery.com/end/){data-tooltip="Encerra a operação de filtragem mais recente na cadeia atual e retorna o conjunto de elementos correspondidos ao estado anterior."}

{.marker-none .cols-3}

### Travessia de árvore

<!-- prettier-ignore -->
- [.children()](https://api.jquery.com/children/){data-tooltip="Obtém os filhos de cada elemento do conjunto de elementos correspondidos, opcionalmente filtrados por um seletor."}
- [.closest()](https://api.jquery.com/closest/){data-tooltip="Para cada elemento do conjunto, obtém o primeiro elemento que corresponde ao seletor testando o próprio elemento e percorrendo seus ancestrais na árvore do DOM."}
- [.find()](https://api.jquery.com/find/){data-tooltip="Obtém os descendentes de cada elemento do conjunto atual de elementos correspondidos, filtrados por um seletor, objeto jQuery ou elemento."}
- [.next()](https://api.jquery.com/next/){data-tooltip="Obtém o irmão imediatamente seguinte de cada elemento do conjunto de elementos correspondidos. Se um seletor for fornecido, obtém o próximo irmão apenas se ele corresponder a esse seletor."}
- [.nextAll()](https://api.jquery.com/nextAll/){data-tooltip="Obtém todos os irmãos seguintes de cada elemento do conjunto de elementos correspondidos, opcionalmente filtrados por um seletor."}
- [.nextUntil()](https://api.jquery.com/nextUntil/){data-tooltip="Obtém todos os irmãos seguintes de cada elemento até, mas sem incluir, o elemento correspondido pelo seletor, nó do DOM ou objeto jQuery informado."}
- [.parent()](https://api.jquery.com/parent/){data-tooltip="Obtém o pai de cada elemento do conjunto atual de elementos correspondidos, opcionalmente filtrado por um seletor."}
- [.parents()](https://api.jquery.com/parents/){data-tooltip="Obtém os ancestrais de cada elemento do conjunto atual de elementos correspondidos, opcionalmente filtrados por um seletor."}
- [.parentsUntil()](https://api.jquery.com/parentsUntil/){data-tooltip="Obtém os ancestrais de cada elemento do conjunto atual de elementos correspondidos até, mas sem incluir, o elemento correspondido pelo seletor, nó do DOM ou objeto jQuery."}
- [.prev()](https://api.jquery.com/prev/){data-tooltip="Obtém o irmão imediatamente anterior de cada elemento do conjunto de elementos correspondidos. Se um seletor for fornecido, obtém o irmão anterior apenas se ele corresponder a esse seletor."}
- [.prevAll()](https://api.jquery.com/prevAll/){data-tooltip="Obtém todos os irmãos anteriores de cada elemento do conjunto de elementos correspondidos, opcionalmente filtrados por um seletor."}
- [.prevUntil()](https://api.jquery.com/prevUntil/){data-tooltip="Obtém todos os irmãos anteriores de cada elemento até, mas sem incluir, o elemento correspondido pelo seletor, nó do DOM ou objeto jQuery."}
- [.siblings()](https://api.jquery.com/siblings/){data-tooltip="Obtém os irmãos de cada elemento do conjunto de elementos correspondidos, opcionalmente filtrados por um seletor."}

{.marker-none .cols-3}

## Eventos do jQuery

### Exemplos {.secondary .row-span-6}

```javascript
// A mouse event 'click'
$('#menu-button').on('click', () => {
  $('#menu').show();
});

// A keyboard event 'keyup'
$('#textbox').on('keyup', () => {
  $('#menu').show();
});

// A scroll event 'scroll'
$('#menu-button').on('scroll', () => {
  $('#menu').show();
});
```

#### Objeto de evento

```javascript
$('#menu').on('click', (event) => {
  $(event.currentTarget).hide();
});
```

#### Encadeamento de métodos

```javascript
$('#menu-btn')
  .on('mouseenter', () => {
    $('#menu').show();
  })
  .on('mouseleave', () => {
    $('#menu').hide();
  });
```

#### Impede o evento

```javascript
$('p').click(function (event) {
  event.stopPropagation();
  // Do something
});
```

### Eventos do navegador

<!-- prettier-ignore -->
- [.error()](https://api.jquery.com/error/){data-tooltip="Vincula um handler de evento ao evento JavaScript error."}
- [.resize()](https://api.jquery.com/resize/){data-tooltip="Vincula um handler de evento ao evento JavaScript resize ou dispara esse evento em um elemento."}
- [.scroll()](https://api.jquery.com/scroll/){data-tooltip="Vincula um handler de evento ao evento JavaScript scroll ou dispara esse evento em um elemento."}

{.marker-none .cols-3}

### Objeto de evento {.row-span-6}

<!-- prettier-ignore -->
- [event.currentTarget](https://api.jquery.com/event.currentTarget/){data-tooltip=" O elemento atual do DOM dentro da fase de bubbling do evento.  "}
- [event.delegateTarget](https://api.jquery.com/event.delegateTarget/){data-tooltip="O elemento ao qual o handler de evento jQuery que está sendo chamado foi anexado."}
- [event.data](https://api.jquery.com/event.data/){data-tooltip="Um objeto opcional de dados passado a um método de evento quando o handler em execução atual é vinculado.  "}
- [event.isDefaultPrevented()](https://api.jquery.com/event.isDefaultPrevented/){data-tooltip="Retorna se event.preventDefault() já foi chamado neste objeto de evento. "}
- [event.isImmediatePropagationStopped()](https://api.jquery.com/event.isImmediatePropagationStopped/){data-tooltip="  Retorna se event.stopImmediatePropagation() já foi chamado neste objeto de evento. "}
- [event.isPropagationStopped()](https://api.jquery.com/event.isPropagationStopped/){data-tooltip="  Retorna se event.stopPropagation() já foi chamado neste objeto de evento. "}
- [event.metaKey](https://api.jquery.com/event.metaKey/){data-tooltip="Indica se a tecla META foi pressionada quando o evento foi disparado."}
- [event.namespace](https://api.jquery.com/event.namespace/){data-tooltip="O namespace especificado quando o evento foi disparado."}
- [event.pageX](https://api.jquery.com/event.pageX/){data-tooltip="A posição do mouse em relação à borda esquerda do documento."}
- [event.pageY](https://api.jquery.com/event.pageY/){data-tooltip="A posição do mouse em relação à borda superior do documento."}
- [event.preventDefault()](https://api.jquery.com/event.preventDefault/){data-tooltip="Se este método for chamado, a ação padrão do evento não será disparada."}
- [event.relatedTarget](https://api.jquery.com/event.relatedTarget/){data-tooltip="O outro elemento do DOM envolvido no evento, se houver."}
- [event.result](https://api.jquery.com/event.result/){data-tooltip="O último valor retornado por um handler de evento disparado por este evento, a menos que o valor seja undefined."}
- [event.stopImmediatePropagation()](https://api.jquery.com/event.stopImmediatePropagation/){data-tooltip="Impede que os demais handlers sejam executados e evita que o evento suba pela árvore do DOM."}
- [event.stopPropagation()](https://api.jquery.com/event.stopPropagation/){data-tooltip="Evita que o evento suba pela árvore do DOM, impedindo que qualquer handler pai seja notificado do evento."}
- [event.target](https://api.jquery.com/event.target/){data-tooltip=" O elemento do DOM que iniciou o evento.  "}
- [event.timeStamp](https://api.jquery.com/event.timeStamp/){data-tooltip="A diferença em milissegundos entre o momento em que o navegador criou o evento e 1º de janeiro de 1970."}
- [event.type](https://api.jquery.com/event.type/){data-tooltip="Descreve a natureza do evento."}
- [event.which](https://api.jquery.com/event.which/){data-tooltip="Para eventos de teclado ou mouse, esta propriedade indica a tecla ou o botão específico que foi pressionado."}

{.marker-none .cols-1}

### Carregamento do documento

<!-- prettier-ignore -->
- [.load()](https://api.jquery.com/load-event/){data-tooltip="Vincula um handler de evento ao evento JavaScript load."}
- [.ready()](https://api.jquery.com/ready/){data-tooltip="Especifica uma função a ser executada quando o DOM estiver totalmente carregado."}
- [.unload()](https://api.jquery.com/unload/){data-tooltip="Vincula um handler de evento ao evento JavaScript unload."}

{.marker-none .cols-3}

### Vinculação de handlers de eventos

<!-- prettier-ignore -->
- [.bind()](https://api.jquery.com/bind/){data-tooltip="Anexa um handler a um evento para os elementos."}
- [.delegate()](https://api.jquery.com/delegate/){data-tooltip="Anexa um handler a um ou mais eventos para todos os elementos que correspondem ao seletor, agora ou no futuro, com base em um conjunto específico de elementos raiz."}
- [.die()](https://api.jquery.com/die/){data-tooltip="Remove handlers de eventos previamente anexados com .live() dos elementos."}
- [.live()](https://api.jquery.com/live/){data-tooltip="Anexa um handler de evento para todos os elementos que correspondem ao seletor atual, agora e no futuro."}
- [.off()](https://api.jquery.com/off/){data-tooltip="Remove um handler de evento."}
- [.on()](https://api.jquery.com/on/){data-tooltip="Anexa uma função handler de evento para um ou mais eventos aos elementos selecionados."}
- [.one()](https://api.jquery.com/one/){data-tooltip="Anexa um handler a um evento para os elementos. O handler é executado no máximo uma vez por elemento por tipo de evento."}
- [.trigger()](https://api.jquery.com/trigger/){data-tooltip="Executa todos os handlers e comportamentos anexados aos elementos correspondidos para o tipo de evento informado."}
- [.triggerHandler()](https://api.jquery.com/triggerHandler/){data-tooltip="Executa todos os handlers anexados a um elemento para um evento."}
- [.unbind()](https://api.jquery.com/unbind/){data-tooltip="Remove dos elementos um handler de evento anexado anteriormente."}
- [.undelegate()](https://api.jquery.com/undelegate/){data-tooltip="Remove um handler do evento para todos os elementos que correspondem ao seletor atual, com base em um conjunto específico de elementos raiz."}

{.marker-none .cols-3}

### Eventos de formulário

<!-- prettier-ignore -->
- [.blur()](https://api.jquery.com/blur/){data-tooltip="Vincula um handler de evento ao evento JavaScript blur ou dispara esse evento em um elemento."}
- [.change()](https://api.jquery.com/change/){data-tooltip="Vincula um handler de evento ao evento JavaScript change ou dispara esse evento em um elemento."}
- [.focus()](https://api.jquery.com/focus/){data-tooltip="Vincula um handler de evento ao evento JavaScript focus ou dispara esse evento em um elemento."}
- [.focusin()](https://api.jquery.com/focusin/){data-tooltip="Vincula um handler de evento ao evento focusin."}
- [.focusout()](https://api.jquery.com/focusout/){data-tooltip="Vincula um handler de evento ao evento JavaScript focusout."}
- [.select()](https://api.jquery.com/select/){data-tooltip="Vincula um handler de evento ao evento JavaScript select ou dispara esse evento em um elemento."}
- [.submit()](https://api.jquery.com/submit/){data-tooltip="Vincula um handler de evento ao evento JavaScript submit ou dispara esse evento em um elemento."}

{.marker-none .cols-3}

### Eventos de teclado

<!-- prettier-ignore -->
- [.keydown()](https://api.jquery.com/keydown/){data-tooltip="Vincula um handler de evento ao evento JavaScript keydown ou dispara esse evento em um elemento."}
- [.keypress()](https://api.jquery.com/keypress/){data-tooltip="Vincula um handler de evento ao evento JavaScript keypress ou dispara esse evento em um elemento."}
- [.keyup()](https://api.jquery.com/keyup/){data-tooltip="Vincula um handler de evento ao evento JavaScript keyup ou dispara esse evento em um elemento."}
{.marker-none .cols-3}

### Eventos de mouse

<!-- prettier-ignore -->
- [.click()](https://api.jquery.com/click/){data-tooltip="Vincula um handler de evento ao evento JavaScript click ou dispara esse evento em um elemento."}
- [.contextMenu()](https://api.jquery.com/contextmenu/){data-tooltip="Vincula um handler de evento ao evento JavaScript contextmenu ou dispara esse evento em um elemento."}
- [.dblclick()](https://api.jquery.com/dblclick/){data-tooltip="Vincula um handler de evento ao evento JavaScript dblclick ou dispara esse evento em um elemento."}
- [.hover()](https://api.jquery.com/hover/){data-tooltip="Vincula dois handlers aos elementos correspondidos, a serem executados quando o ponteiro do mouse entra e sai dos elementos."}
- [.mousedown()](https://api.jquery.com/mousedown/){data-tooltip="Vincula um handler de evento ao evento JavaScript mousedown ou dispara esse evento em um elemento."}
- [.mouseenter()](https://api.jquery.com/mouseenter/){data-tooltip="Vincula um handler de evento a ser disparado quando o mouse entra em um elemento ou dispara esse handler em um elemento."}
- [.mouseleave()](https://api.jquery.com/mouseleave/){data-tooltip="Vincula um handler de evento a ser disparado quando o mouse sai de um elemento ou dispara esse handler em um elemento."}
- [.mousemove()](https://api.jquery.com/mousemove/){data-tooltip="Vincula um handler de evento ao evento JavaScript mousemove ou dispara esse evento em um elemento."}
- [.mouseout()](https://api.jquery.com/mouseout/){data-tooltip="Vincula um handler de evento ao evento JavaScript mouseout ou dispara esse evento em um elemento."}
- [.mouseover()](https://api.jquery.com/mouseover/){data-tooltip="Vincula um handler de evento ao evento JavaScript mouseover ou dispara esse evento em um elemento."}
- [.mouseup()](https://api.jquery.com/mouseup/){data-tooltip="Vincula um handler de evento ao evento JavaScript mouseup ou dispara esse evento em um elemento."}
- [.toggle()](https://api.jquery.com/toggle-event/){data-tooltip="Vincula dois ou mais handlers aos elementos correspondidos, a serem executados em cliques alternados."}

{.marker-none .cols-3}

## Efeitos do jQuery

### Exemplos {.secondary .row-span-2}

```javascript
$('#menu-button').on('click', () => {
  // $('#menu').fadeIn(400, 'swing')
  $('#menu').fadeIn();
});
```

#### Efeito fadeOut

```javascript
$('#menu-button').on('click', () => {
  // $('#menu').fadeOut(400, 'swing')
  $('#menu').fadeOut();
});
```

### Básicos

<!-- prettier-ignore -->
- [.hide()](https://api.jquery.com/hide/){data-tooltip="Oculta os elementos correspondidos."}
- [.show()](https://api.jquery.com/show/){data-tooltip="Exibe os elementos correspondidos."}
- [.toggle()](https://api.jquery.com/toggle/){data-tooltip="Exibe ou oculta os elementos correspondidos."}

{.marker-none .cols-3}

### Deslizamento

<!-- prettier-ignore -->
- [.slideDown()](https://api.jquery.com/slideDown/){data-tooltip="Exibe os elementos correspondidos com um movimento de deslizamento."}
- [.slideToggle()](https://api.jquery.com/slideToggle/){data-tooltip="Exibe ou oculta os elementos correspondidos com um movimento de deslizamento."}
- [.slideUp()](https://api.jquery.com/slideUp/){data-tooltip="Oculta os elementos correspondidos com um movimento de deslizamento."}

{.marker-none .cols-3}

### Personalizados

<!-- prettier-ignore -->
- [.animate()](https://api.jquery.com/animate/){data-tooltip="Executa uma animação personalizada de um conjunto de propriedades CSS."}
- [.clearQueue()](https://api.jquery.com/clearQueue/){data-tooltip="Remove da fila todos os itens que ainda não foram executados."}
- [.delay()](https://api.jquery.com/delay/){data-tooltip="Define um timer para atrasar a execução dos itens seguintes na fila."}
- [.dequeue()](https://api.jquery.com/dequeue/){data-tooltip="Executa a próxima função na fila para os elementos correspondidos."}
- [jQuery.dequeue()](https://api.jquery.com/jQuery.dequeue/){data-tooltip="Executa a próxima função na fila para o elemento correspondido."}
- [.finish()](https://api.jquery.com/finish/){data-tooltip="Interrompe a animação em execução, remove todas as animações enfileiradas e conclui todas as animações dos elementos correspondidos."}
- [jQuery.fx.interval](https://api.jquery.com/jQuery.fx.interval/){data-tooltip="A taxa (em milissegundos) com que as animações são disparadas."}
- [jQuery.fx.off](https://api.jquery.com/jQuery.fx.off/){data-tooltip="Desabilita globalmente todas as animações."}
- [jQuery.speed](https://api.jquery.com/jQuery.speed/){data-tooltip="Cria um objeto contendo um conjunto de propriedades pronto para ser usado na definição de animações personalizadas."}
- [.queue()](https://api.jquery.com/queue/){data-tooltip="Mostra a fila de funções a serem executadas nos elementos correspondidos."}
- [jQuery.queue()](https://api.jquery.com/jQuery.queue/){data-tooltip="Mostra a fila de funções a serem executadas no elemento correspondido."}
- [.stop()](https://api.jquery.com/stop/){data-tooltip="Interrompe a animação em execução nos elementos correspondidos."}

{.marker-none .cols-3}

### Fading

<!-- prettier-ignore -->
- [.fadeIn()](https://api.jquery.com/fadeIn/){data-tooltip="Exibe os elementos correspondidos esmaecendo-os até ficarem opacos."}
- [.fadeOut()](https://api.jquery.com/fadeOut/){data-tooltip="Oculta os elementos correspondidos esmaecendo-os até ficarem transparentes."}
- [.fadeTo()](https://api.jquery.com/fadeTo/){data-tooltip="Ajusta a opacidade dos elementos correspondidos."}
- [.fadeToggle()](https://api.jquery.com/fadeToggle/){data-tooltip="Exibe ou oculta os elementos correspondidos animando sua opacidade."}

{.marker-none .cols-3}

## Ajax do jQuery

### Exemplos {.secondary .row-span-2}

```javascript
$.ajax({
  url: this.action,
  type: this.method,
  data: $(this).serialize()
})
  .done(function (server_data) {
    console.log('success' + server_data);
  })
  .fail(function (jqXHR, status, err) {
    console.log('fail' + err);
  });
```

### Handlers globais de eventos Ajax

<!-- prettier-ignore -->
- [.ajaxComplete()](https://api.jquery.com/ajaxComplete/){data-tooltip="Registra um handler a ser chamado quando as requisições Ajax forem concluídas. Este é um AjaxEvent."}
- [.ajaxError()](https://api.jquery.com/ajaxError/){data-tooltip="Registra um handler a ser chamado quando as requisições Ajax forem concluídas com erro. Este é um Ajax Event."}
- [.ajaxSend()](https://api.jquery.com/ajaxSend/){data-tooltip="Anexa uma função a ser executada antes de uma requisição Ajax ser enviada. Este é um Ajax Event."}
- [.ajaxStart()](https://api.jquery.com/ajaxStart/){data-tooltip="Registra um handler a ser chamado quando a primeira requisição Ajax começar. Este é um Ajax Event."}
- [.ajaxStop()](https://api.jquery.com/ajaxStop/){data-tooltip="Registra um handler a ser chamado quando todas as requisições Ajax forem concluídas. Este é um Ajax Event."}
- [.ajaxSuccess()](https://api.jquery.com/ajaxSuccess/){data-tooltip="Anexa uma função a ser executada sempre que uma requisição Ajax for concluída com sucesso. Este é um Ajax Event."}

{.marker-none .cols-2}

### Funções auxiliares

<!-- prettier-ignore -->
- [jQuery.param()](https://api.jquery.com/jQuery.param/){data-tooltip="Cria uma representação serializada de um array, de um objeto simples ou de um objeto jQuery adequada para uso em uma query string de URL ou em uma requisição Ajax. Caso um objeto jQuery seja passado, ele deve conter elementos input com propriedades name/value."}
- [.serialize()](https://api.jquery.com/serialize/){data-tooltip="Codifica um conjunto de elementos de formulário como uma string para envio."}
- [.serializeArray()](https://api.jquery.com/serializeArray/){data-tooltip="Codifica um conjunto de elementos de formulário como um array de nomes e valores."}

{.marker-none .cols-2}

### Interface de baixo nível

<!-- prettier-ignore -->
- [jQuery.ajax()](https://api.jquery.com/jQuery.ajax/){data-tooltip="Executa uma requisição HTTP (Ajax) assíncrona."}
- [jQuery.prefilter()](https://api.jquery.com/jQuery.ajaxPrefilter/){data-tooltip="Trata opções Ajax personalizadas ou modifica opções existentes antes de cada requisição ser enviada e antes de serem processadas por $.ajax()."}
- [jQuery.ajaxSetup()](https://api.jquery.com/jQuery.ajaxSetup/){data-tooltip="Define valores padrão para futuras requisições Ajax. Seu uso não é recomendado."}
- [jQuery.ajaxTransport()](https://api.jquery.com/jQuery.ajaxTransport/){data-tooltip="Cria um objeto que trata a transmissão efetiva dos dados Ajax."}

{.marker-none .cols-2}

### Métodos abreviados

<!-- prettier-ignore -->
- [jQuery.get()](https://api.jquery.com/jQuery.get/){data-tooltip="Carrega dados do servidor usando uma requisição HTTP GET."}
- [jQuery.getJSON()](https://api.jquery.com/jQuery.getJSON/){data-tooltip="Carrega dados codificados em JSON do servidor usando uma requisição HTTP GET."}
- [jQuery.getScript()](https://api.jquery.com/jQuery.getScript/){data-tooltip="Carrega um arquivo JavaScript do servidor usando uma requisição HTTP GET e, em seguida, executa-o."}
- [jQuery.post()](https://api.jquery.com/jQuery.post/){data-tooltip="Envia dados ao servidor usando uma requisição HTTP POST."}
- [.load()](https://api.jquery.com/load/){data-tooltip="Carrega dados do servidor e coloca o HTML retornado nos elementos correspondidos."}

{.marker-none .cols-2}

## Diversos

### Objeto jQuery

<!-- prettier-ignore -->
- [jQuery()](https://api.jquery.com/jQuery/){data-tooltip="Aceita uma string contendo um seletor CSS que é então usado para corresponder a um conjunto de elementos."}
- [jQuery.noConflict()](https://api.jquery.com/jQuery.noConflict/){data-tooltip="Abre mão do controle do jQuery sobre a variável $."}
- [jQuery.sub()](https://api.jquery.com/jQuery.sub/){data-tooltip="Cria uma nova cópia do jQuery cujas propriedades e métodos podem ser modificados sem afetar o objeto jQuery original."}
- [jQuery.holdReady()](https://api.jquery.com/jQuery.holdReady/){data-tooltip="Segura ou libera a execução do evento ready do jQuery."}
- [jQuery.when()](https://api.jquery.com/jQuery.when/){data-tooltip="Fornece uma maneira de executar funções de callback com base em zero ou mais objetos Thenable, geralmente objetos Deferred que representam eventos assíncronos."}

{.marker-none .cols-2}

### Objeto Deferred {.row-span-2}

<!-- prettier-ignore -->
- [jQuery.Deferred()](https://api.jquery.com/jQuery.Deferred/){data-tooltip=" Uma função factory que retorna um objeto utilitário encadeável com métodos para registrar múltiplos callbacks em filas de callbacks, invocar filas de callbacks e repassar o estado de sucesso ou falha de qualquer função síncrona ou assíncrona."}
- [deferred.always()](https://api.jquery.com/deferred.always/){data-tooltip=" Adiciona handlers a serem chamados quando o objeto Deferred for resolvido ou rejeitado. "}
- [deferred.done()](https://api.jquery.com/deferred.done/){data-tooltip=" Adiciona handlers a serem chamados quando o objeto Deferred for resolvido. "}
- [deferred.fail()](https://api.jquery.com/deferred.fail/){data-tooltip=" Adiciona handlers a serem chamados quando o objeto Deferred for rejeitado. "}
- [deferred.isRejected()](https://api.jquery.com/deferred.isRejected/){data-tooltip=" Determina se um objeto Deferred foi rejeitado. "}
- [deferred.isResolved()](https://api.jquery.com/deferred.isResolved/){data-tooltip=" Determina se um objeto Deferred foi resolvido. "}
- [deferred.notify()](https://api.jquery.com/deferred.notify/){data-tooltip=" Chama os progressCallbacks de um objeto Deferred com os args informados. "}
- [deferred.notifyWith()](https://api.jquery.com/deferred.notifyWith/){data-tooltip=" Chama os progressCallbacks de um objeto Deferred com o contexto e os args informados. "}
- [deferred.pipe()](https://api.jquery.com/deferred.pipe/){data-tooltip=" Método utilitário para filtrar e/ou encadear Deferreds.  "}
- [deferred.progress()](https://api.jquery.com/deferred.progress/){data-tooltip=" Adiciona handlers a serem chamados quando o objeto Deferred gerar notificações de progresso."}
- [deferred.promise()](https://api.jquery.com/deferred.promise/){data-tooltip=" Retorna o objeto Promise de um Deferred. "}
- [deferred.reject()](https://api.jquery.com/deferred.reject/){data-tooltip=" Rejeita um objeto Deferred e chama os failCallbacks com os args informados. "}
- [deferred.rejectWith()](https://api.jquery.com/deferred.rejectWith/){data-tooltip=" Rejeita um objeto Deferred e chama os failCallbacks com o contexto e os args informados. "}
- [deferred.resolve()](https://api.jquery.com/deferred.resolve/){data-tooltip=" Resolve um objeto Deferred e chama os doneCallbacks com os args informados. "}
- [deferred.resolveWith()](https://api.jquery.com/deferred.resolveWith/){data-tooltip=" Resolve um objeto Deferred e chama os doneCallbacks com o contexto e os args informados. "}
- [deferred.state()](https://api.jquery.com/deferred.state/){data-tooltip="Determina o estado atual de um objeto Deferred. "}
- [deferred.then()](https://api.jquery.com/deferred.then/){data-tooltip="Adiciona handlers a serem chamados quando o objeto Deferred for resolvido, rejeitado ou ainda estiver em andamento. "}
- [.promise()](https://api.jquery.com/promise/){data-tooltip=" Retorna um objeto Promise para observar quando todas as ações de um determinado tipo vinculadas à coleção, enfileiradas ou não, tiverem terminado. "}

{.marker-none .cols-2}

### Utilitários {.row-span-3}

<!-- prettier-ignore -->
- [jQuery.boxModel](https://api.jquery.com/jQuery.boxModel/){data-tooltip="Indica se a página atual, no navegador do usuário, está sendo renderizada usando o W3C CSS Box Model."}
- [jQuery.browser](https://api.jquery.com/jQuery.browser/){data-tooltip="Contém flags do useragent, lidas de navigator.userAgent. Esta propriedade foi removida no jQuery 1.9 e está disponível apenas por meio do plugin jQuery.migrate. Em vez disso, prefira usar detecção de recursos."}
- [jQuery.contains()](https://api.jquery.com/jQuery.contains/){data-tooltip="Verifica se um elemento do DOM é descendente de outro elemento do DOM."}
- [jQuery.each()](https://api.jquery.com/jQuery.each/){data-tooltip="Uma função iteradora genérica que pode ser usada para iterar de forma transparente por objetos e arrays. Arrays e objetos semelhantes a arrays com uma propriedade length (como o objeto arguments de uma função) são iterados por índice numérico, de 0 a length-1. Outros objetos são iterados por suas propriedades nomeadas."}
- [jQuery.extend()](https://api.jquery.com/jQuery.extend/){data-tooltip="Mescla o conteúdo de dois ou mais objetos no primeiro objeto."}
- [jQuery.globalEval()](https://api.jquery.com/jQuery.globalEval/){data-tooltip="Executa algum código JavaScript globalmente."}
- [jQuery.grep()](https://api.jquery.com/jQuery.grep/){data-tooltip="Encontra os elementos de um array que satisfazem uma função de filtro. O array original não é afetado."}
- [jQuery.inArray()](https://api.jquery.com/jQuery.inArray/){data-tooltip="Procura um valor especificado dentro de um array e retorna seu index (ou -1 se não for encontrado)."}
- [jQuery.isArray()](https://api.jquery.com/jQuery.isArray/){data-tooltip="Determina se o argumento é um array."}
- [jQuery.isEmptyObject()](https://api.jquery.com/jQuery.isEmptyObject/){data-tooltip="Verifica se um objeto está vazio (não contém propriedades enumeráveis)."}
- [jQuery.isFunction()](https://api.jquery.com/jQuery.isFunction/){data-tooltip="Determina se seu argumento pode ser chamado como função."}
- [jQuery.isNumeric()](https://api.jquery.com/jQuery.isNumeric/){data-tooltip="Determina se seu argumento representa um número JavaScript."}
- [jQuery.isPlainObject()](https://api.jquery.com/jQuery.isPlainObject/){data-tooltip="Verifica se um objeto é um objeto simples."}
- [jQuery.isWindow()](https://api.jquery.com/jQuery.isWindow/){data-tooltip="Determina se o argumento é um window."}
- [jQuery.isXMLDoc()](https://api.jquery.com/jQuery.isXMLDoc/){data-tooltip="Verifica se um nó do DOM está dentro de um documento XML (ou é um documento XML)."}
- [jQuery.makeArray()](https://api.jquery.com/jQuery.makeArray/){data-tooltip="Converte um objeto semelhante a array em um array JavaScript de verdade."}
- [jQuery.map()](https://api.jquery.com/jQuery.map/){data-tooltip="Transforma todos os itens de um array ou objeto em um novo array de itens."}
- [jQuery.merge()](https://api.jquery.com/jQuery.merge/){data-tooltip="Mescla o conteúdo de dois arrays no primeiro array. "}
- [jQuery.noop()](https://api.jquery.com/jQuery.noop/){data-tooltip="Uma função vazia."}
- [jQuery.now()](https://api.jquery.com/jQuery.now/){data-tooltip="Retorna um número que representa a hora atual."}
- [jQuery.parseHTML()](https://api.jquery.com/jQuery.parseHTML/){data-tooltip="Analisa uma string em um array de nós do DOM."}
- [jQuery.parseJSON()](https://api.jquery.com/jQuery.parseJSON/){data-tooltip="Recebe uma string JSON bem formada e retorna o valor JavaScript resultante."}
- [jQuery.parseXML()](https://api.jquery.com/jQuery.parseXML/){data-tooltip="Analisa uma string em um documento XML."}
- [jQuery.proxy()](https://api.jquery.com/jQuery.proxy/){data-tooltip="Recebe uma função e retorna uma nova função que sempre terá um contexto específico."}
- [jQuery.support](https://api.jquery.com/jQuery.support/){data-tooltip="Uma coleção de propriedades que representam a presença de diferentes recursos ou bugs do navegador. Destinada ao uso interno do jQuery; propriedades específicas podem ser removidas quando não forem mais necessárias internamente para melhorar o desempenho de inicialização da página. Para as necessidades de detecção de recursos do seu próprio projeto, recomendamos fortemente o uso de uma biblioteca externa como o Modernizr em vez de depender de propriedades em jQuery.support."}
- [jQuery.trim()](https://api.jquery.com/jQuery.trim/){data-tooltip="Remove os espaços em branco do início e do fim de uma string."}
- [jQuery.type()](https://api.jquery.com/jQuery.type/){data-tooltip="Determina o [[Class]] interno do JavaScript de um objeto."}
- [jQuery.unique()](https://api.jquery.com/jQuery.unique/){data-tooltip="Ordena um array de elementos do DOM, no local, removendo as duplicatas. Observe que isso funciona apenas com arrays de elementos do DOM, não com strings ou números."}
- [jQuery.uniqueSort()](https://api.jquery.com/jQuery.uniqueSort/){data-tooltip="Ordena um array de elementos do DOM, no local, removendo as duplicatas. Observe que isso funciona apenas com arrays de elementos do DOM, não com strings ou números."}

{.marker-none .cols-2}

### Métodos de elementos do DOM

<!-- prettier-ignore -->
- [.get()](https://api.jquery.com/get/){data-tooltip="Recupera um dos elementos correspondidos pelo objeto jQuery."}
- [.index()](https://api.jquery.com/index/){data-tooltip="Procura um determinado elemento entre os elementos correspondidos."}
- [.size()](https://api.jquery.com/size/){data-tooltip="Retorna o número de elementos no objeto jQuery."}
- [.toArray()](https://api.jquery.com/toArray/){data-tooltip="Recupera todos os elementos contidos no conjunto jQuery, como um array."}

{.marker-none .cols-2}

### Internos

<!-- prettier-ignore -->
- [.jquery](https://api.jquery.com/jquery-2/){data-tooltip="Uma string contendo o número da versão do jQuery."}
- [.context](https://api.jquery.com/context/){data-tooltip="O contexto do nó do DOM originalmente passado para jQuery(); se nenhum foi passado, o contexto provavelmente será o document."}
- [jQuery.error()](https://api.jquery.com/jQuery.error/){data-tooltip="Recebe uma string e lança uma exceção contendo essa string."}
- [.length](https://api.jquery.com/length/){data-tooltip="O número de elementos no objeto jQuery."}
- [.pushStack()](https://api.jquery.com/pushStack/){data-tooltip="Adiciona uma coleção de elementos do DOM à pilha do jQuery."}
- [.selector](https://api.jquery.com/selector/){data-tooltip="Um seletor que representa o seletor passado para jQuery(), se houver, ao criar o conjunto original."}

{.marker-none .cols-2}

### Objeto Callbacks

<!-- prettier-ignore -->
- [jQuery.Callbacks()](https://api.jquery.com/jQuery.Callbacks/){data-tooltip="Um objeto de lista de callbacks multiuso que oferece uma maneira poderosa de gerenciar listas de callbacks."}
- [callbacks.add()](https://api.jquery.com/callbacks.add/){data-tooltip="Adiciona um callback ou uma coleção de callbacks a uma lista de callbacks."}
- [callbacks.disable()](https://api.jquery.com/callbacks.disable/){data-tooltip="Desabilita uma lista de callbacks, impedindo que ela faça qualquer outra coisa."}
- [callbacks.disabled()](https://api.jquery.com/callbacks.disabled/){data-tooltip="Determina se a lista de callbacks foi desabilitada."}
- [callbacks.empty()](https://api.jquery.com/callbacks.empty/){data-tooltip="Remove todos os callbacks de uma lista."}
- [callbacks.fire()](https://api.jquery.com/callbacks.fire/){data-tooltip="Chama todos os callbacks com os argumentos informados."}
- [callbacks.fired()](https://api.jquery.com/callbacks.fired/){data-tooltip="Determina se os callbacks já foram chamados pelo menos uma vez."}
- [callbacks.fireWith()](https://api.jquery.com/callbacks.fireWith/){data-tooltip="Chama todos os callbacks de uma lista com o contexto e os argumentos informados."}
- [callbacks.has()](https://api.jquery.com/callbacks.has/){data-tooltip="Determina se a lista tem ou não callbacks anexados. Se um callback for fornecido como argumento, determina se ele está na lista."}
- [callbacks.lock()](https://api.jquery.com/callbacks.lock/){data-tooltip="Bloqueia uma lista de callbacks em seu estado atual."}
- [callbacks.locked()](https://api.jquery.com/callbacks.locked/){data-tooltip="Determina se a lista de callbacks foi bloqueada."}
- [callbacks.remove()](https://api.jquery.com/callbacks.remove/){data-tooltip="Remove um callback ou uma coleção de callbacks de uma lista de callbacks."}

{.marker-none .cols-2}
