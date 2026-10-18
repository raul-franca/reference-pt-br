---
title: Express
date: 2023-02-26 15:23:31
background: bg-[#edc545]
tags:
  - config
  - format
categories:
  - Programação
intro: |
  Um cheat sheet de referência rápida para o Express, um framework web flexível e enxuto para Node.js
plugins:
  - copyCode
---

## Primeiros passos

### Hello World {.row-span-2}

- Crie o projeto e adicione a configuração do `package.json`

  ```bash
  $ mkdir myapp # create directory
  $ cd myapp    # enter the directory
  $ npm init -y # Initialize a configuration
  ```

- Instale as dependências

  ```bash
  $ npm install express
  ```

- No arquivo de entrada `index.js`, adicione o código:

  ```js
  const express = require('express');
  const app = express();
  const port = 3000;
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.listen(port, () => {
    console.log(`Listening port on ${port}`);
  });
  ```

- Execute a aplicação com o comando a seguir
  ```bash
  $ node index.js
  ```
  {.marker-timeline}

### express -h {.row-span-2}

```bash
Usage: express [options] [dir]
Options:
  -h, --help output usage information
      --version output version number
  -e, --ejs add ejs engine support
      --hbs add hbs engine support
      --pug add pug engine support
  -H, --hogan add hogan.js engine support
      --no-view No view engine generated
  -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (default jade)
  -c, --css <engine> add stylesheet <engine> support (less|stylus|compass|sass) (default css)
      --git add .gitignore
  -f, --force force non-empty directories
```

{.wrap-text}

Crie um projeto `myapp`

```bash
$ express --view=pug myapp
# run the application
$ DEBUG=myapp:*npm start
```

### express()

| :-                     | :-                                                          |
| :--------------------- | :---------------------------------------------------------- |
| `express.json()`       | [#](http://expressjs.com/en/4x/api.html#express.json)       |
| `express.raw()`        | [#](http://expressjs.com/en/4x/api.html#express.raw)        |
| `express.Router()`     | [#](http://expressjs.com/en/4x/api.html#express.router)     |
| `express.static()`     | [#](http://expressjs.com/en/4x/api.html#express.static)     |
| `express.text()`       | [#](http://expressjs.com/en/4x/api.html#express.text)       |
| `express.urlencoded()` | [#](http://expressjs.com/en/4x/api.html#express.urlencoded) |

### Router

| :-                | :-                                                     |
| :---------------- | :----------------------------------------------------- |
| `router.all()`    | [#](http://expressjs.com/en/4x/api.html#router.all)    |
| `router.METHOD()` | [#](http://expressjs.com/en/4x/api.html#router.METHOD) |
| `router.param()`  | [#](http://expressjs.com/en/4x/api.html#router.param)  |
| `router.route()`  | [#](http://expressjs.com/en/4x/api.html#router.route)  |
| `router.use()`    | [#](http://expressjs.com/en/4x/api.html#router.use)    |

### Application

```js
var express = require('express');
var app = express();

console.dir(app.locals.title);
//=> 'My App'
console.dir(app.locals.email);
//=> 'me@myapp.com'
```

#### Atributos

| :-              | :-                                                                                        |
| :-------------- | :---------------------------------------------------------------------------------------- |
| `app.locals`    | Variáveis locais na aplicação [#](http://expressjs.com/en/4x/api.html#app.locals)          |
| `app.mountpath` | Padrão de path para montar subapps [#](http://expressjs.com/en/4x/api.html#app.mountpath)  |

#### Eventos

| :-      | :-                                                                                                                                                                   |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mount` | A aplicação filha é montada na aplicação pai, e o evento é disparado na aplicação filha [#](http://expressjs.com/en/4x/api.html#app.onmount)                          |

#### Métodos

| :-                        | :-                                                         |
| :------------------------ | :--------------------------------------------------------- |
| `app.all()`               | [#](http://expressjs.com/en/4x/api.html#app.all)           |
| `app.delete()`            | [#](http://expressjs.com/en/4x/api.html#app.delete.method) |
| `app.disable()`           | [#](http://expressjs.com/en/4x/api.html#app.disable)       |
| `app.disabled()`          | [#](http://expressjs.com/en/4x/api.html#app.disabled)      |
| `app.enable()`            | [#](http://expressjs.com/en/4x/api.html#app.enable)        |
| `app.enabled()`           | [#](http://expressjs.com/en/4x/api.html#app.enabled)       |
| `app.engine()`            | [#](http://expressjs.com/en/4x/api.html#app.engine)        |
| `app.get(name)`           | [#](http://expressjs.com/en/4x/api.html#app.get)           |
| `app.get(path, callback)` | [#](http://expressjs.com/en/4x/api.html#app.get.method)    |
| `app.listen()`            | [#](http://expressjs.com/en/4x/api.html#app.listen)        |
| `app.METHOD()`            | [#](http://expressjs.com/en/4x/api.html#app.METHOD)        |
| `app.param()`             | [#](http://expressjs.com/en/4x/api.html#app.param)         |
| `app.path()`              | [#](http://expressjs.com/en/4x/api.html#app.path)          |
| `app.post()`              | [#](http://expressjs.com/en/4x/api.html#app.post.method)   |
| `app.put()`               | [#](http://expressjs.com/en/4x/api.html#app.put.method)    |
| `app.render()`            | [#](http://expressjs.com/en/4x/api.html#app.render)        |
| `app.route()`             | [#](http://expressjs.com/en/4x/api.html#app.route)         |
| `app.set()`               | [#](http://expressjs.com/en/4x/api.html#app.set)           |
| `app.use()`               | [#](http://expressjs.com/en/4x/api.html#app.use)           |

### Request

#### Atributos

| :-                  | :-                                                         |
| :------------------ | :--------------------------------------------------------- |
| `req.app`           | [#](http://expressjs.com/en/4x/api.html#req.app)           |
| `req.baseUrl`       | [#](http://expressjs.com/en/4x/api.html#req.baseUrl)       |
| `req.body`          | [#](http://expressjs.com/en/4x/api.html#req.body)          |
| `req.cookies`       | [#](http://expressjs.com/en/4x/api.html#req.cookies)       |
| `req.fresh`         | [#](http://expressjs.com/en/4x/api.html#req.fresh)         |
| `req.hostname`      | [#](http://expressjs.com/en/4x/api.html#req.hostname)      |
| `req.ip`            | [#](http://expressjs.com/en/4x/api.html#req.ip)            |
| `req.ips`           | [#](http://expressjs.com/en/4x/api.html#req.ips)           |
| `req.method`        | [#](http://expressjs.com/en/4x/api.html#req.method)        |
| `req.originalUrl`   | [#](http://expressjs.com/en/4x/api.html#req.originalUrl)   |
| `req.params`        | [#](http://expressjs.com/en/4x/api.html#req.params)        |
| `req.path`          | [#](http://expressjs.com/en/4x/api.html#req.path)          |
| `req.protocol`      | [#](http://expressjs.com/en/4x/api.html#req.protocol)      |
| `req.query`         | [#](http://expressjs.com/en/4x/api.html#req.query)         |
| `req.route`         | [#](http://expressjs.com/en/4x/api.html#req.route)         |
| `req.secure`        | [#](http://expressjs.com/en/4x/api.html#req.secure)        |
| `req.signedCookies` | [#](http://expressjs.com/en/4x/api.html#req.signedCookies) |
| `req.stale`         | [#](http://expressjs.com/en/4x/api.html#req.stale)         |
| `req.subdomains`    | [#](http://expressjs.com/en/4x/api.html#req.subdomains)    |
| `req.xhr`           | [#](http://expressjs.com/en/4x/api.html#req.xhr)           |

#### Métodos

| :-                       | :-                                                                              |
| :----------------------- | :------------------------------------------------------------------------------ |
| `req.accepts()`          | [#](http://expressjs.com/en/4x/api.html#req.accepts)                            |
| `req.acceptsCharsets()`  | [#](http://expressjs.com/en/4x/api.html#req.acceptsCharsets)                    |
| `req.acceptsEncodings()` | [#](http://expressjs.com/en/4x/api.html#req.acceptsEncodings)                   |
| `req.acceptsLanguages()` | [#](http://expressjs.com/en/4x/api.html#req.acceptsLanguages)                   |
| `req.get()`              | Obtém os campos do header da requisição HTTP [#](http://expressjs.com/en/4x/api.html#req.get) |
| `req.is()`               | [#](http://expressjs.com/en/4x/api.html#req.is)                                 |
| `req.param()`            | [#](http://expressjs.com/en/4x/api.html#req.param)                              |
| `req.range()`            | [#](http://expressjs.com/en/4x/api.html#req.range)                              |

### Response

```js
app.get('/', function (req, res) {
  console.dir(res.headersSent); //false
  res.send('OK');
  console.dir(res.headersSent); //true
});
```

#### Atributos

| :-                | :-                                                       |
| :---------------- | :------------------------------------------------------- |
| `res.app`         | [#](http://expressjs.com/en/4x/api.html#res.app)         |
| `res.headersSent` | [#](http://expressjs.com/en/4x/api.html#res.headersSent) |
| `res.locals`      | [#](http://expressjs.com/en/4x/api.html#res.locals)      |

#### Métodos

| :-                  | :-                                                                                    |
| :------------------ | :------------------------------------------------------------------------------------ |
| `res.append()`      | [#](http://expressjs.com/en/4x/api.html#res.append)                                   |
| `res.attachment()`  | [#](http://expressjs.com/en/4x/api.html#res.attachment)                               |
| `res.cookie()`      | [#](http://expressjs.com/en/4x/api.html#res.cookie)                                   |
| `res.clearCookie()` | [#](http://expressjs.com/en/4x/api.html#res.clearCookie)                              |
| `res.download()`    | Sugere arquivos para download [#](http://expressjs.com/en/4x/api.html#res.download)   |
| `res.end()`         | encerra o processo de resposta [#](http://expressjs.com/en/4x/api.html#res.end)       |
| `res.format()`      | [#](http://expressjs.com/en/4x/api.html#res.format)                                   |
| `res.get()`         | [#](http://expressjs.com/en/4x/api.html#res.get)                                      |
| `res.json()`        | Envia resposta JSON [#](http://expressjs.com/en/4x/api.html#res.json)                 |
| `res.jsonp()`       | Envia uma resposta com suporte a JSONP [#](http://expressjs.com/en/4x/api.html#res.jsonp) |
| `res.links()`       | [#](http://expressjs.com/en/4x/api.html#res.links)                                    |
| `res.location()`    | [#](http://expressjs.com/en/4x/api.html#res.location)                                 |
| `res.redirect()`    | Redireciona a requisição [#](http://expressjs.com/en/4x/api.html#res.redirect)        |
| `res.render()`      | renderiza o template de view [#](http://expressjs.com/en/4x/api.html#res.render)      |
| `res.send()`        | Envia vários tipos de resposta [#](http://expressjs.com/en/4x/api.html#res.send)      |
| `res.sendFile()`    | Envia um arquivo como octet stream [#](http://expressjs.com/en/4x/api.html#res.sendFile) |
| `res.sendStatus()`  | [#](http://expressjs.com/en/4x/api.html#res.sendStatus)                               |
| `res.set()`         | [#](http://expressjs.com/en/4x/api.html#res.set)                                      |
| `res.status()`      | [#](http://expressjs.com/en/4x/api.html#res.status)                                   |
| `res.type()`        | [#](http://expressjs.com/en/4x/api.html#res.type)                                     |
| `res.vary()`        | [#](http://expressjs.com/en/4x/api.html#res.vary)                                     |

## Exemplo

### Router {. row-span-2}

Chamado para qualquer requisição passada para este router

```js
router.use(function (req, res, next) {
  //.. some logic here .. like any other middleware
  next();
});
```

vai tratar qualquer requisição terminada em `/events`

```js
//depends on where the router "use()"
router.get('/events', (req, res, next) => {
  //..
});
```

### Response

O objeto `res` representa a resposta HTTP enviada pela aplicação `Express` quando ela recebe uma requisição HTTP

```js
app.get('/user/:id', (req, res) => {
  res.send('user' + req.params.id);
});
```

### Request

Um objeto `req` representa uma requisição `HTTP` e tem propriedades para a query string da requisição, parâmetros,
body, headers HTTP etc.

```js
app.get('/user/:id', (req, res) => {
  res.send('user' + req.params.id);
});
```

### res. end()

```js
res.end();
res.status(404).end();
```

Encerra o processo de resposta. Este método na verdade vem do core do Node, especificamente do método `response.end()`
de `http.ServerResponse`

### res.json([body])

```js
res.json(null);
res.json({ user: 'tobi' });
res.status(500).json({ error: 'message' });
```

### app.all

```js
app.all('/secret', function (req, res, next) {
  console.log('access secret section...');
  next(); // Pass control to the next handler
});
```

### app.delete

```js
app.delete('/', function (req, res) {
  res.send('DELETE request to homepage');
});
```

### app.disable(name)

```js
app.disable('trust proxy');
app.get('trust proxy');
// => false
```

### app.disabled(name)

```js
app.disabled('trust proxy');
// => true

app.enable('trust proxy');
app.disabled('trust proxy');
// => false
```

### app.engine(ext, callback)

```js
var engines = require('consolidate');

app.engine('haml', engines.haml);
app.engine('html', engines.hogan);
```

### app.listen([port[, host[, backlog]]][, callback])

```js
var express = require('express');

var app = express();
app.listen(3000);
```

### Roteamento

```js
const express = require('express');
const app = express();

//Respond to "hello world" when making a GET request to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});
```

```js
// GET method routing
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// POST method routing
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});
```

### Middleware

```js
function logOriginalUrl(req, res, next) {
  console.log('ReqURL:', req.originalUrl);
  next();
}

function logMethod(req, res, next) {
  console.log('Request Type:', req.method);
  next();
}

const log = [logOriginalUrl, logMethod];

app.get('/user/:id', log, (req, res, next) => {
  res.send('User Info');
});
```

### Usando templates

```js
app.set('view engine', 'pug');
```

Crie um arquivo de template `Pug` chamado `index.pug` no diretório `views` com o seguinte conteúdo

```pug
html
  the head
    title= title
  the body
    h1=message
```

Crie uma rota para renderizar o arquivo `index.pug`. Se a propriedade do view engine não estiver definida, a extensão do
arquivo de view deve ser especificada

```js
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  });
});
```
