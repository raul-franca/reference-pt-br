---
title: Tmux
date: 2021-02-20 14:31:24
background: bg-indigo-600
tags:
  - utility
  - terminal
  - session
categories:
  - Comandos Linux
intro: |
  O cheat sheet do tmux, referência rápida dos atalhos e comandos mais usados
plugins:
  - copyCode
---

## Tmux CLI

### Nova sessão {.row-span-2}

Inicie uma nova sessão

```shell script
$ tmux
```

Inicie uma nova sessão com nome

```shell script
$ tmux new -s myname
```

Mostre todas as sessões

```shell script
$ tmux ls
```

### Anexar sessão

Anexe à última sessão

```shell script
$ tmux a
```

Anexe a uma sessão com nome

```shell script
$ tmux a -t myname
```

### Encerrar sessão {.row-span-2}

Encerre uma sessão pelo nome

```shell script
$ tmux kill-ses -t myname
```

Encerre as sessões, exceto a atual

```shell script
$ tmux kill-ses -a
```

Encerre as sessões, exceto 'myname'

```shell script
$ tmux kill-ses -a -t myname
```

### Ajuda do Tmux

```shell script
$ tmux info
```

### Configuração

Recarregue a configuração

```shell script
$ tmux source-file ~/.tmux.conf
```

Mostre a configuração

```shell script
$ tmux show-options -g
```

### Modo de cópia

| Comando      | Descrição                  |
| ------------ | -------------------------- |
| `Ctrl+b` `[` | Entrar no modo de cópia    |
| `<Space>`    | Iniciar seleção            |
| `Enter`      | Copiar seleção             |
| `q`          | Sair do modo de cópia      |
| `Ctrl+b` `]` | Colar o conteúdo de buffer_0 |

---

Para a versão 3.5a do tmux no macOS 15.3.1 Sequoia, o "Modo de cópia" funciona de forma um pouco diferente:

| Comando          | Descrição       |
| ---------------- | --------------- |
| `Ctrl + <Space>` | Iniciar seleção |
| `Ctrl + w`       | Copiar seleção  |

---

{.shortcuts}

Funciona principalmente como selecionar texto no [Vim](/vim#motions)

## Atalhos do Tmux

### Primeiros passos {.secondary}

| Atalhos      | Descrição           |
| ------------ | ------------------- |
| `Ctrl+b` `?` | Lista todos os atalhos |

{.shortcuts .show-header}

<br/>

---

Mostre cada sessão, janela, painel etc.

```shell script
$ tmux info
```

### Painéis (divisões) {.row-span-2}

| Atalhos                | Descrição              |
| ---------------------- | ---------------------- |
| `Ctrl+b` `"` _/_ `%`   | Dividir horiz/vert     |
| `Ctrl+b` `!`           | Painel -> Janela       |
| `Ctrl+b` `x`           | Fechar painel          |
| `Ctrl+b` <Arrow\>      | Navegar entre painéis  |
| `Ctrl+b` <Space\>      | Alternar layouts       |
| `Ctrl+b` `{` _/_ `}`   | Mover para esquerda/direita |
| `Ctrl+b` `o`           | Ir para o próximo painel |
| `Ctrl+b` `z`           | Alternar tela cheia    |
| `Ctrl+b` `;`           | Alternar último painel |
| `Ctrl+b` `q`           | Mostrar números        |
| `Ctrl+b` `q` `0`...`9` | Ir para o painel #     |

{.shortcuts}

### Janela (abas) {.row-span-2}

| -                    | -                    |
| -------------------- | -------------------- |
| `Ctrl+b` `c`         | Criar janela         |
| `Ctrl+b` `p` _/_ `n` | Janela anterior/próxima |
| `Ctrl+b` `"` _/_ `%` | Dividir horiz/vert   |
| `Ctrl+b` `w`         | Listar janelas       |
| `Ctrl+b` `,`         | Renomear janela      |
| `Ctrl+b` `f`         | Procurar janela      |
| `Ctrl+b` `l`         | Última janela        |
| `Ctrl+b` `.`         | Mover janela         |
| `Ctrl+b` `&`         | Fechar janela        |
| `Ctrl+b` `0`...`9`   | Ir para a janela #   |

{.shortcuts}

### Sessão (conjunto de janelas)

| -                    | -                              |
| -------------------- | ------------------------------ |
| `Ctrl+b` `d`         | <red>Desanexar da sessão</red> |
| `Ctrl+b` `s`         | Mostrar todas as sessões       |
| `Ctrl+b` `$`         | Renomear sessão                |
| `Ctrl+b` `(` _/_ `)` | Sessão anterior/próxima        |

{.shortcuts}

## Modo de comando do Tmux

### Uso {.secondary}

| Comando      | Descrição              |
| ------------ | ---------------------- |
| `Ctrl+b` `:` | Entrar no modo de comando |

{.shortcuts}

### Redimensionamento

| Comando             | Descrição                |
| ------------------- | ------------------------ |
| `resize-pane -D 20` | Redimensionar para baixo |
| `resize-pane -U 20` | Redimensionar para cima  |
| `resize-pane -L 20` | Redimensionar para esquerda |
| `resize-pane -R 20` | Redimensionar para direita |

### Listagem

| Comando        | Descrição         |
| -------------- | ----------------- |
| `list-keys`    | Todos os comandos |
| `list-panes`   | Todos os painéis  |
| `list-windows` | Todas as janelas  |

### Cópia

| Comando              | Descrição            |
| -------------------- | -------------------- |
| `list-buffers`       | Listar todos os buffers |
| `show-buffer`        | Mostrar conteúdo de #0 |
| `capture-pane`       | Cópia do painel      |
| `choose-buffer`      | Mostrar e colar      |
| `save-buffer a.txt`  | Salvar em arquivo    |
| `delete-buffer -b 1` | Excluir buffer 1     |

### Configuração

| Comando                | Descrição                  |
| ---------------------- | -------------------------- |
| `set -g OPTION`        | Definir para todas as sessões |
| `setw -g OPTION`       | Definir para todas as janelas |
| `setw -g mode-keys vi` | Habilitar o modo vi        |
| `set -g prefix C-a`    | Definir prefixo            |

### Diversos

| Comando                  | Descrição              |
| ------------------------ | ---------------------- |
| `swap-pane -s 3 -t 1`    | Trocar painel          |
| `swap-window -t -1`      | Mover para a esquerda  |
| `setw synchronize-panes` | Sincronizar painéis    |
| `join-pane -t :#`        | Juntar painel          |
