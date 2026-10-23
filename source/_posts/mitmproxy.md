---
title: Mitmproxy
date: 2020-12-22 20:10:08
background: bg-[#d86138]
tags:
  - capture
  - traffic
  - network
  - utility
categories:
  - Ferramentas
intro: |
  [mitmproxy](https://mitmproxy.org/) é um proxy HTTPS interativo, gratuito e de código aberto. Este é um cheat sheet de referência rápida para o mitmproxy.
plugins:
  - copyCode
---

## Primeiros passos

### Uso {.col-span-2}

| Opção | Exemplo                                            | Descrição                                                       |
| ----- | -------------------------------------------------- | --------------------------------------------------------------- |
| `-p`  | mitmproxy -p 8001                                  | Inicia o proxy na porta 8001                                    |
| `-m`  | mitmproxy -p 8001 -m reverse:http://127.0.0.1:4000 | Proxy reverso na porta 8001 para a porta 4000                   |
| `-w`  | mitmproxy -p 8001 -w traffic.mitm                  | Grava os flows em arquivo conforme chegam                       |
| `-r`  | mitmproxy -r traffic.mitm                          | Lê os flows do arquivo                                          |
| `-C`  | mitmproxy -C traffic.mitm                          | Reproduz as requisições do cliente a partir de um arquivo salvo |
| `-S`  | mitmproxy -S traffic.mitm                          | Reproduz as respostas do servidor a partir de um arquivo salvo  |
| `-s`  | mitmproxy -s myScript.py                           | Executa um script                                               |
| `-h`  | mitmproxy -h                                       | Ajuda rápida do mitmproxy                                       |

### Movimentação

```
        k                 Ctrl b
        ▲                   ▲▲
        │                   ││
h ◀ ─── + ─── ▶ l           ││ page
        │                   ││
        ▼                   ▼▼
        j             Ctrl f / Space
```

---

| -                    | -                              |
| -------------------- | ------------------------------ |
| `h`, `j`, `k` ,`l`   | Esquerda, Baixo, Cima, Direita |
| `Ctrl` `b`           | Página acima                   |
| `Space` / `Ctrl` `f` | Página abaixo                  |
| `g` / `G`            | Ir para o início / fim         |
| `Arrows`             | Cima, Baixo, Esquerda, Direita |

{.shortcuts}

### Copiar para a área de transferência

Sintaxe do comando:

```
:export.clip format flow
```

---

Exemplo:

| Descrição                          | Exemplo de comando                 |
| ---------------------------------- | ---------------------------------- |
| 1. Copiar como comando curl        | `:export.clip curl @focus`         |
| 2. Copiar como httpie              | `:export.clip httpie @focus`       |
| 2. Copiar como raw                 | `:export.clip raw @focus`          |
| 2. Copiar como requisição HTTP raw | `:export.clip raw_request @focus`  |
| 2. Copiar como resposta HTTP raw   | `:export.clip raw_response @focus` |

{.style-list}

Exporta um flow para a área de transferência do sistema.

### Salvar em arquivo

Sintaxe do comando:

```
:export.file format flow path
```

---

Exemplo:

| Descrição                        | Exemplo de comando                                 |
| -------------------------------- | -------------------------------------------------- |
| 1. Exportar para /tmp/a.curl     | `:export.file curl @focus /tmp/a.curl`             |
| 2. Exportar para /tmp/a.httpie   | `:export.file httpie @focus /tmp/a.httpie`         |
| 2. Exportar para /tmp/a.raw      | `:export.file raw @focus  /tmp/a.raw`              |
| 2. Exportar para /tmp/a.request  | `:export.file raw_request @focus /tmp/a.request`   |
| 2. Exportar para /tmp/a.response | `:export.file raw_response @focus /tmp/a.response` |

{.style-list}

Exporta um flow para a área de transferência do sistema.

### Keybindings comuns

| -       | -                       |
| ------- | ----------------------- |
| `q`     | Voltar / Sair           |
| `z`     | Limpar a lista de flows |
| `:`     | Prompt de comando       |
| `E`     | Ver o log de eventos    |
| `O`     | Ver opções              |
| `r`     | Reproduzir este flow    |
| `Tab`   | Próximo                 |
| `Enter` | Selecionar              |

{.shortcuts}

### Keybindings globais

| -              | -                                |
| -------------- | -------------------------------- |
| `-`            | Alternar para o próximo layout   |
| `?`            | Ver ajuda                        |
| `B`            | Iniciar um browser anexado       |
| `C`            | Ver comandos                     |
| `I`            | Alternar interceptação           |
| `K`            | Ver key bindings                 |
| `P`            | Ver detalhes do flow             |
| `Q`            | Sair imediatamente               |
| `W`            | Transmitir para arquivo          |
| `i`            | Definir interceptação            |
| `Ctrl` `right` | Focar o próximo painel do layout |
| `Shift` `tab`  | Focar o próximo painel do layout |

{.shortcuts}

### Flow (Visualização)

| -               | -                                            |
| --------------- | -------------------------------------------- |
| `A`             | Retomar todos os flows interceptados         |
| `D`             | Duplicar flow                                |
| `F`             | Definir focus follow                         |
| `L`             | Carregar flows de um arquivo                 |
| `M`             | Alternar a exibição de flows marcados        |
| `S`             | Iniciar replay do servidor                   |
| `U`             | Remover todas as marcações                   |
| `V`             | Reverter alterações deste flow               |
| `X`             | Encerrar este flow                           |
| `Z`             | Limpar todos os flows não exibidos           |
| `a`             | Retomar este flow interceptado               |
| `b`             | Salvar o corpo da resposta em arquivo        |
| `d`             | Excluir o flow da visualização               |
| `e`             | Exportar este flow para arquivo              |
| `f`             | Definir filtro de visualização               |
| `m`             | Alternar marcação neste flow                 |
| `n`             | Criar um novo flow                           |
| `o`             | Definir a ordem da lista de flows            |
| `r`             | Reproduzir este flow                         |
| `v`             | Inverter a ordem da lista de flows           |
| `w`             | Salvar os flows listados em arquivo          |
| <code>\|</code> | Executar um script neste flow                |
| `Ctrl` `l`      | Enviar recortes para a área de transferência |

{.shortcuts}

## Filtros do Mitmproxy

### Filtro

| -   | -                                                                     |
| --- | --------------------------------------------------------------------- |
| `f` | Definir filtro de visualização _(na página de visualização de flows)_ |

{.shortcuts}

---

- [Cheat sheet de RegEX](/regex) _(cheatsheets.zip)_

As regex são no estilo Python e podem ser especificadas como strings entre aspas

### Operadores

| -       | -           |
| ------- | ----------- | --- |
| `!`     | não unário  |
| `&`     | e           |
| `       | `           | ou  |
| `(...)` | agrupamento |

### Expressões {.row-span-2}

| -              | -                                                                    |
| -------------- | -------------------------------------------------------------------- |
| `~a`           | Corresponder a asset na resposta: CSS, Javascript, Flash, imagens.   |
| `~b` `regex`   | Corpo                                                                |
| `~bq` `regex`  | Corpo da requisição                                                  |
| `~bs` `regex`  | Corpo da resposta                                                    |
| `~c` `int`     | Código de resposta HTTP                                              |
| `~d` `regex`   | Domínio                                                              |
| `~dst` `regex` | Corresponder ao endereço de destino                                  |
| `~e`           | Corresponder a erro                                                  |
| `~h` `regex`   | Header                                                               |
| `~hq` `regex`  | Header da requisição                                                 |
| `~hs` `regex`  | Header da resposta                                                   |
| `~http`        | Corresponder a flows HTTP                                            |
| `~m` `regex`   | Método                                                               |
| `~marked`      | Corresponder a flows marcados                                        |
| `~q`           | Corresponder a requisição sem resposta                               |
| `~s`           | Corresponder a resposta                                              |
| `~src` `regex` | Corresponder ao endereço de origem                                   |
| `~t` `regex`   | Header Content-type                                                  |
| `~tcp`         | Corresponder a flows TCP                                             |
| `~tq` `regex`  | Header Content-Type da requisição                                    |
| `~ts` `regex`  | Header Content-Type da resposta                                      |
| `~u` `regex`   | URL                                                                  |
| `~websocket`   | Corresponder a flows WebSocket (e flows de handshake HTTP-WebSocket) |

### Seletores de flow

Expressões

| -           | -                                  |
| ----------- | ---------------------------------- |
| `@all     ` | Todos os flows                     |
| `@focus   ` | O flow focado no momento           |
| `@shown   ` | Todos os flows exibidos no momento |
| `@hidden  ` | Todos os flows ocultos no momento  |
| `@marked  ` | Todos os flows marcados            |
| `@unmarked` | Todos os flows não marcados        |

O mitmproxy tem um conjunto de seletores de flow convenientes que operam na visualização atual

### Exemplos

URL contendo "google.com"

```
google\.com
```

Requisições cujo corpo contém a string "test"

```
~q ~b test
```

Qualquer coisa, exceto requisições com content type text/html:

```
!(~q & ~t "text/html")
```

Substitui a string GET inteira em uma requisição (aspas necessárias para funcionar):

```
":~q ~m GET:.*:/replacement.html"
```

## Scripts do Mitmproxy {.cols-2}

### Resposta customizada

```python
from mitmproxy import http


def request(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "http://example.com/path":
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            b"Hello World",  # (optional) content
            {"Content-Type": "text/html"}  # (optional) headers
        )
```

Envie uma resposta do proxy sem enviar nenhum dado ao servidor remoto

### Adicionar header

```python
class AddHeader:
    def __init__(self):
        self.num = 0

    def response(self, flow):
        self.num = self.num + 1
        flow.response.headers["count"] = str(self.num)


addons = [
    AddHeader()
]
```

Adicione um header HTTP a cada resposta

## Veja também

- [mitmproxy addons](https://github.com/mitmproxy/mitmproxy/tree/master/examples/addons) _(github.com)_
- [docs do mitmproxy](https://docs.mitmproxy.org/) _(mitmproxy.org)_
