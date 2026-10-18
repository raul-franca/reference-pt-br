---
title: HTMX
date: 2025-06-07 19:30:00
background: bg-[#ff5f4d]
tags:
  - frontend
  - javascript
  - htmx
categories:
  - Programação
intro: |
  Uma biblioteca JavaScript moderna e minimalista que permite criar interfaces web dinâmicas usando atributos HTML.
plugins:
  - copyCode
---

## Primeiros Passos {.cols-3}

### Importação via CDN

```html
<script src="https://unpkg.com/htmx.org@1.9.2"></script>
```

### Uso Básico

```html
<button hx-get="/hello" hx-target="#result">Say Hi</button>
<div id="result"></div>
```

### Resposta do Servidor

```html
<!-- /hello response -->
<p>Hello from server</p>
```

## Atributos Principais {.cols-3}

### `hx-get`, `hx-post`, etc.

```html
<a hx-get="/page">Load Page</a>
<form hx-post="/submit"></form>
```

### `hx-target`

```html
<button hx-get="/data" hx-target="#box"></button>
<div id="box"></div>
```

### `hx-trigger`

```html
<input
  hx-get="/search"
  hx-trigger="keyup changed delay:300ms"
  hx-target="#results"
/>
```

## Swap e Out of Band {.cols-3}

### `hx-swap`

```html
<div hx-get="/frag" hx-swap="innerHTML"></div>
```

- `outerHTML`
- `innerHTML`
- `beforebegin`, `afterbegin`, etc.

### `hx-swap-oob`

```html
<div hx-swap-oob="true" id="msg"></div>
```

_Útil para atualizações globais a partir de partials._

### Modificadores de Swap

```html
hx-swap="outerHTML transition:true swap:1s"
```

## Formulários e Eventos {.cols-3}

### POST Automático ao Enviar

```html
<form hx-post="/submit" hx-target="#status">
  <input name="name" />
  <button type="submit">Send</button>
</form>
<div id="status"></div>
```

### `hx-include`

```html
<input id="user-id" name="id" />
<button hx-post="/update" hx-include="#user-id">Update</button>
```

### `hx-vals`

```html
<button hx-post="/save" hx-vals='{"id": 42, "active": true}'>Save</button>
```

## Recursos Avançados {.cols-3}

### Indicador de Carregamento

```html
<button hx-get="/load" hx-indicator="#spinner">Load</button>
<div id="spinner" class="htmx-indicator">Loading...</div>
```

### `hx-push-url`

```html
<a hx-get="/page" hx-push-url="true">Go</a>
```

### Polling

```html
<div hx-get="/time" hx-trigger="every 5s"></div>
```

## Eventos e Extensões {.cols-3}

### Escutar Eventos

```js
document.body.addEventListener('htmx:afterSwap', (e) => {
  console.log('Swap complete');
});
```

### Hooks de Eventos

- `htmx:beforeRequest`
- `htmx:afterSwap`
- `htmx:responseError`

### Extensões

```html
<script src="https://unpkg.com/htmx.org/dist/ext/json-enc.js"></script>
<form hx-post="/api" hx-ext="json-enc"></form>
```

## Exemplo de Uso {.cols-2}

### Backend em Python (Flask)

```python
@app.route("/hello")
def hello():
    return "<p>Hello, HTMX!</p>"
```

### Cliente HTML

```html
<button hx-get="/hello" hx-target="#msg">Click</button>
<div id="msg"></div>
```
