---
title: EJS
date: 2023-04-07
background: bg-[#b4ca65]
tags:
  - EJS
  - Frontend
  - Framework
categories:
  - Programação
intro: EJS (Embedded JavaScript) é uma linguagem de template simples que permite gerar marcação HTML com JavaScript puro.
plugins:
  - copyCode
  - runCode
---

<!-- NOTA: o EJS não tem suporte ao Prettier, então formate manualmente e adicione um prettier-ignore acima dos blocos de código quebrados -->

## Primeiros passos { .cols-3 }

### Hello world

#### install

```shell
$ npm install ejs
```

#### hello.ejs

<!-- prettier-ignore -->
```html
<% if (user.email) { %>
  <h1><%= user.email %></h1>
<% } %>
```

#### CLI

```shell
$ ejs hello.ejs -o hello.html
```

### Renderizar com dados

```js
let ejs = require('ejs');

let people = ['geddy', 'neil', 'alex'];
let tpl = '<%= people.join(", "); %>';

let html = ejs.render(tpl, { people: people });
console.log(html);
```

Passe ao EJS uma string de template e alguns dados.

### Suporte no navegador

```html
<script src="https://unpkg.com/ejs"></script>
<script>
  let people = ['geddy', 'neil', 'alex'];
  let html = ejs.render('<%= people.join(", "); %>', { people: people });
  console.log(html);
</script>
```

Use o EJS dentro de uma tag script.

### Variáveis

|              |                                  |
| ------------ | -------------------------------- |
| `<%= var %>` | Imprime o valor da variável      |
| `<%- var %>` | Imprime sem escape de HTML       |

### CLI

Renderiza e especifica um arquivo de saída.

```shell
$ ejs hello.ejs -o hello.html
```

Forneça um arquivo de template e um arquivo de dados

```shell
$ ejs hello.ejs -f data.json -o hello.html
```

### Comentários

```html
<%# This line will denote a comment %>
```

---

<!-- prettier-ignore -->
```html
<%# This is a multi-line EJS comment.
    It can span multiple lines,
    but will not be displayed
    in the final HTML output.
%>
```

### Métodos {.col-span-2}

```js
let ejs = require('ejs');
let template = ejs.compile(str, options);

template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function (err, str) {
  // str => Rendered HTML string
});
```

### Incluindo arquivos

```html
<%- include('partials/navbar.ejs') %>
```

Inclua um template com dados:

```html
<% include('header', { title: 'My Page' }) %>
```

---

<!-- prettier-ignore -->
```html
<ul>
  <% users.forEach(function(user){ %>
    <%- include('item', {user: user}); %>
  <% }); %>
</ul>
```

Para incluir um template, é necessária a opção de nome de arquivo; os paths são relativos

## Documentação {.cols-3}

### Condicionais

<!-- prettier-ignore -->
```html
<% if (userLoggedIn) { %>
  <p>Welcome, <%= username %>!</p>
<% } else { %>
  <p>Please log in.</p>
<% } %>
```

### Usando loops

<!-- prettier-ignore -->
```html
<ul>
  <% for(i=0; i < users.length; i++) { %>
    <li><%= users[i].username %></li>
  <% } %>
</ul>
```

### Delimitadores personalizados

```js
let ejs = require('ejs'),
  users = ['geddy', 'neil', 'alex'];

// Just one template
ejs.render('<?= users.join(" | "); ?>', { users: users }, { delimiter: '?' });
// => 'geddy | neil | alex'

// Or globally
ejs.delimiter = '$';
ejs.render('<$= users.join(" | "); $>', { users: users });
// => 'geddy | neil | alex'
```

### Cache

```js
let ejs = require('ejs'),
  LRU = require('lru-cache');

// LRU cache with 100-item limit
ejs.cache = LRU(100);
```

### Carregador de arquivos personalizado

```js
let ejs = require('ejs');
let myFileLoader = function (filePath) {
  return 'myFileLoader: ' + fs.readFileSync(filePath);
};

ejs.fileLoader = myFileLoader;
```

### Layouts

<!-- prettier-ignore -->
```html
<%- include('header'); -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>
```

## Suporte no lado do cliente {.cols-2}

### Exemplo

```html
<div id="output"></div>
<script src="ejs.min.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', { people: people });
  // With jQuery:
  $('#output').html(html);
  // Vanilla JS:
  document.getElementById('output').innerHTML = html;
</script>
```

### Advertências

```js
let str = "Hello <%= include('file', {person: 'John'}); %>",
  fn = ejs.compile(str, { client: true });

// include callback
fn(data, null, function (path, d) {
  // path -> 'file'
  // d -> {person: 'John'}
  // Put your code here
  // Return the contents of file as a string
}); // returns rendered string
```

## Opções {.cols-1}

### Lista de opções

| Opção              | Descrição                                                                                                                                                                                                                                    |
| ------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cache              | Funções compiladas ficam em cache; requer filename                                                                                                                                                                                           |
| filename           | Usado pelo cache como chave e para includes                                                                                                                                                                                                  |
| root               | Define o root do projeto para includes com path absoluto (ex.: `/file.ejs`). Pode ser um array para tentar resolver o include em vários diretórios.                                                                                          |
| views              | Um array de paths usado ao resolver includes com paths relativos.                                                                                                                                                                            |
| context            | Contexto de execução da função                                                                                                                                                                                                               |
| compileDebug       | Quando false, nenhuma instrumentação de debug é compilada                                                                                                                                                                                    |
| client             | Retorna uma função compilada standalone                                                                                                                                                                                                      |
| delimiter          | Caractere usado como delimitador interno; por padrão `%`                                                                                                                                                                                     |
| openDelimiter      | Caractere usado para abrir o delimitador; por padrão `<`                                                                                                                                                                                     |
| closeDelimiter     | Caractere usado para fechar o delimitador; por padrão `>`                                                                                                                                                                                    |
| debug              | Exibe o corpo da função gerada                                                                                                                                                                                                               |
| strict             | Quando definido como `true`, a função gerada fica em strict mode                                                                                                                                                                             |
| \_with             | Define se as construções with() {} serão usadas. Se `false`, os locals serão armazenados no objeto locals. (Implica `--strict`)                                                                                                              |
| localsName         | Nome do objeto que armazena as variáveis locais quando não se usa with; o padrão é `locals`                                                                                                                                                  |
| rmWhitespace       | Remove todo espaço em branco seguro de remover, incluindo espaços no início e no fim. Também habilita uma versão mais segura do `-%> `line slurping para todas as tags scriptlet (não remove quebras de linha de tags no meio de uma linha). |
| escape             | A função de escape usada com a construção `<%=`. É usada na renderização e recebe `.toString()` na geração de funções de cliente. (Por padrão, escapa XML).                                                                                  |
| outputFunctionName | Defina como uma string (ex.: 'echo' ou 'print') para uma função que imprime a saída dentro das tags scriptlet.                                                                                                                               |
| async              | Quando true, o EJS usa uma função async para renderizar. (Depende do suporte a async/await no runtime JS.                                                                                                                                    |

## Tags {.cols-1}

### Lista de tags

| Tag               | Descrição                                                                          |
| ----------------- | :--------------------------------------------------------------------------------- |
| `<%`              | Tag 'scriptlet', para controle de fluxo, sem saída                                 |
| <code><%\_</code> | Tag scriptlet de 'whitespace slurping', remove todo espaço em branco anterior      |
| `<%=`             | Imprime o valor no template (com escape de HTML)                                   |
| `<%-`             | Imprime o valor sem escape no template                                             |
| `<%#`             | Tag de comentário, sem execução, sem saída                                         |
| `<%%`             | Imprime um `<%` literal                                                            |
| `%>`              | Tag de fechamento simples                                                          |
| `-%>`             | Tag em modo trim ('newline slurp'), remove a quebra de linha seguinte              |
| <code>\_%></code> | Tag de fechamento de 'whitespace slurping', remove todo espaço em branco posterior |

## CLI {.cols-1}

### Lista de CLI

| Opção                                | Descrição                                                                                                            |
| ------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `cache`                              | Funções compiladas ficam em cache; requer filename                                                                   |
| `-o` / `--output-file FILE`          | Grava a saída renderizada em FILE em vez de stdout.                                                                  |
| `-f` / `--data-file FILE`            | Deve estar no formato JSON. Usa a entrada interpretada de FILE como dados para renderização.                         |
| `-i` / `--data-input STRING`         | Deve estar no formato JSON e codificado como URI. Usa a entrada interpretada de STRING como dados para renderização. |
| `-m` / `--delimiter CHARACTER`       | Usa CHARACTER com sinais de menor/maior para abrir/fechar (o padrão é %).                                            |
| `-p` / `--open-delimiter CHARACTER`  | Usa CHARACTER em vez do sinal de menor para abrir.                                                                   |
| `-c` / `--close-delimiter CHARACTER` | Usa CHARACTER em vez do sinal de maior para fechar.                                                                  |
| `-s` / `--strict`                    | Quando definido como `true`, a função gerada fica em strict mode                                                     |
| `-n` / `--no-with`                   | Usa o objeto `locals` para variáveis em vez de `with` (implica --strict).                                            |
| `-l` / `--locals-name`               | Nome do objeto que armazena variáveis locais quando não se usa `with`.                                               |
| `-w` / `--rm-whitespace`             | Remove todo espaço em branco seguro de remover, incluindo espaços no início e no fim.                                |
| `-d` / `--debug`                     | Exibe o corpo da função gerada                                                                                       |
| `-h` / `--help`                      | Exibe esta mensagem de ajuda.                                                                                        |
| `-V` / `-v` / `--version`            | Exibe a versão do EJS.                                                                                               |

Exemplos de uso:

```shell
$ ejs -p [ -c ] ./template_file.ejs -o ./output.html
$ ejs ./test/fixtures/user.ejs name=Lerxst
$ ejs -n -l _ ./some_template.ejs -f ./data_file.json
```
