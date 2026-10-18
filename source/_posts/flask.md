---
title: Flask
date: 2025-06-07 19:05:00
background: bg-[#3598db]
tags:
  - web
  - python
  - backend
categories:
  - Programação
intro: |
  Um cheat sheet conciso do Flask, um framework leve de aplicação web WSGI para Python.
plugins:
  - copyCode
---

## Primeiros passos {.cols-3}

### Instalar o Flask

```bash
pip install flask
```

### Hello World

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

app.run(debug=True)
```

### Flask CLI

```bash
export FLASK_APP=app.py
flask run
```

## Configuração da aplicação e ambiente {.cols-3}

### Objeto da aplicação

```python
from flask import Flask
app = Flask(__name__)
```

### Configuração

```python
app.config["DEBUG"] = True
app.config.from_pyfile("config.py")
```

### Chaves de configuração comuns

| Chave | Descrição |
| | -- |
| `DEBUG` | Ativa o modo de depuração |
| `SECRET_KEY` | Para sessões/cookies |
| `ENV` | Define como 'development' |

## Rotas e métodos {.cols-3}

### Rota básica

```python
@app.route("/")
def home():
    return "Home"
```

### Métodos

```python
@app.route("/login", methods=["GET", "POST"])
def login():
    return "Login"
```

### Rotas dinâmicas

```python
@app.route("/user/<name>")
def user(name):
    return f"User: {name}"
```

## Request e response {.cols-3}

### Objeto de request

```python
from flask import request

@app.route("/data", methods=["POST"])
def data():
    return request.json
```

### Atributos do request

- `request.args`: Parâmetros de query
- `request.form`: Dados de formulário
- `request.json`: Corpo em JSON

### Response personalizado

```python
from flask import make_response

@app.route("/custom")
def custom():
    res = make_response("Custom", 200)
    res.headers["X-Test"] = "True"
    return res
```

## Templates e arquivos estáticos {.cols-3}

### Renderizar template

```python
from flask import render_template

@app.route("/")
def page():
    return render_template("index.html", name="Flask")
```

### Sintaxe do Jinja

```html
<h1>Hello {{ name }}</h1>
{% if name %}
<p>Hi!</p>
{% endif %}
```

### Arquivos estáticos

```html
<link href="{{ url_for('static', filename='style.css') }}" />
```

## Sessões e cookies {.cols-2}

### Usar sessões

```python
from flask import session
app.secret_key = "secret"

@app.route("/login")
def login():
    session["user"] = "admin"
    return "Logged in"
```

### Acessar cookies

```python
from flask import request, make_response

@app.route("/cookie")
def cookie():
    resp = make_response("Set cookie")
    resp.set_cookie("site", "Flask")
    return resp
```

## API JSON e middleware {.cols-2}

### Response JSON

```python
from flask import jsonify

@app.route("/api")
def api():
    return jsonify(message="Hello")
```

### Middleware

```python
@app.before_request
def before():
    print("Before")

@app.after_request
def after(res):
    print("After")
    return res
```

## Tratamento de erros e blueprints {.cols-2}

### Tratamento de erros

```python
@app.errorhandler(404)
def not_found(e):
    return "Page not found", 404
```

### Blueprint

```python
from flask import Blueprint

admin = Blueprint("admin", __name__, url_prefix="/admin")

@admin.route("/")
def dash():
    return "Admin"

app.register_blueprint(admin)
```

## Estrutura do projeto {.cols-2}

### Estrutura de arquivos

```bash
project/
├── app.py
├── templates/
│   └── index.html
├── static/
│   └── style.css
└── config.py
```

### Executar o servidor

```bash
python app.py
# or using CLI
export FLASK_APP=app.py
flask run
```
