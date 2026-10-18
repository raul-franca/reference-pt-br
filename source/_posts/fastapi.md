---
title: FastAPI
date: 2025-06-07 18:40:00
background: bg-[#3730a3]
tags:
  - web
  - python
  - backend
categories:
  - Programação
intro: |
  Um cheat sheet conciso do FastAPI, um framework web moderno e rápido para criar APIs com Python 3.7+.
plugins:
  - copyCode
---

## Primeiros passos {.cols-3}

### Instalar e executar

```bash
pip install fastapi uvicorn
uvicorn main:app --reload
```

### Hello World

```python
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello FastAPI"}
```

### Dica de execução pela CLI

```bash
uvicorn main:app --reload
```

## Rotas e parâmetros {.cols-3}

### Parâmetro de path

```python
@app.get("/items/{id}")
def read(id: int):
    return {"id": id}
```

### Parâmetro de query

```python
@app.get("/search")
def find(q: str = "default"):
    return {"q": q}
```

### Query opcional

```python
@app.get("/filter")
def filter_data(limit: int = 10, active: bool = True):
    return {"limit": limit, "active": active}
```

## Corpo do request e validação {.cols-3}

### Usar Pydantic

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
```

### Corpo JSON

```python
@app.post("/items/")
def create(item: Item):
    return item
```

### Modelo de response

```python
@app.post("/items/", response_model=Item)
def create(item: Item):
    return item
```

## Formulários, arquivos e headers {.cols-3}

### Entrada de formulário

```python
from fastapi import Form

@app.post("/login")
def login(user: str = Form(...)):
    return {"user": user}
```

### Upload de arquivo

```python
from fastapi import UploadFile, File

@app.post("/upload")
def upload(f: UploadFile = File(...)):
    return {"filename": f.filename}
```

### Headers / cookies

```python
from fastapi import Header, Cookie

@app.get("/info")
def info(ua: str = Header(None)):
    return {"UA": ua}
```

## Middleware e dependências {.cols-2}

### Middleware

```python
@app.middleware("http")
async def log_req(req, call_next):
    res = await call_next(req)
    return res
```

### Dependência

```python
from fastapi import Depends

def auth(token: str = ""):
    if token != "xyz": raise HTTPException(401)
    return True

@app.get("/secure")
def secure(_: bool = Depends(auth)):
    return {"secure": True}
```

## Erros e API JSON {.cols-2}

### Erro HTTP

```python
from fastapi import HTTPException

@app.get("/err")
def error():
    raise HTTPException(404, "Not Found")
```

### API JSON

```python
from fastapi import FastAPI

@app.get("/json")
def get_data():
    return {"status": "ok"}
```

## Templates e arquivos estáticos {.cols-2}

### Montar arquivos estáticos

```python
from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="static"), name="static")
```

### Suporte ao Jinja2

```python
from fastapi.templating import Jinja2Templates
templates = Jinja2Templates("templates")
```

## Routers e estrutura {.cols-2}

### Routers (blueprints)

```python
from fastapi import APIRouter
router = APIRouter()

@router.get("/")
def admin():
    return {"admin": True}

app.include_router(router, prefix="/admin")
```

### Layout de pastas

```bash
project/
├── main.py
├── static/
├── templates/
├── routers/
│   └── admin.py
└── models/
```

## Documentação e status {.cols-2}

### Documentação integrada

- Swagger: `/docs`
- ReDoc: `/redoc`

### Código de status personalizado

```python
from fastapi import status

@app.post("/create", status_code=status.HTTP_201_CREATED)
def create():
    return {"msg": "Created"}
```
