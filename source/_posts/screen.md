---
title: Screen
date: 2021-01-02 20:03:55
background: bg-indigo-500
tags:
  - terminal
  - session
  - utility
categories:
  - Comandos Linux
intro: |
  Este é um guia de referência rápida em formato cheat sheet para o comando screen.
plugins:
  - copyCode
---

## Primeiros passos

### Primeiros passos

```shell script
$ screen
```

1\. Pressione <kbd>Ctrl-A</kbd> <kbd>D</kbd> para desanexar a sessão

---

2\. Liste todas as sessões do screen

```shell script
$ screen -ls
```

3\. Reconecte a uma sessão do screen

```shell script
$ screen -r <name/pid>
```

### Opções {.col-span-2}

| Opções | Exemplo                               | Descrição                                    |
| ------ | ------------------------------------- | -------------------------------------------- |
| `-S`   | screen -S debug                       | Inicia uma nova sessão com nome              |
| `-ls`  | screen -ls                            | Lista as sessões / screens em execução       |
| `-x`   | screen -x                             | Conecta a uma sessão em execução             |
| `-r`   | screen -r debug                       | Conecta a uma sessão em execução pelo nome   |
| `-R`   | screen -R debug                       | Conecta a uma sessão _(cria se não existir)_ |
| `-d`   | screen -d -m wget xxxx.com/large.file | Inicia o screen em modo desanexado           |
| `-X`   | screen -X -S debug kill               | Encerra uma sessão em execução               |

{.show-header}

### Ajuda

| Comando      | Descrição                          |
| ------------ | ---------------------------------- |
| `Ctrl-A` `?` | Ver ajuda _(Lista os keybindings)_ |

{.shortcuts}

### Gerenciamento de janelas {.col-span-2 .row-span-2}

| Comando                                | Descrição                                    |
| -------------------------------------- | -------------------------------------------- |
| `Ctrl-A` `C`                           | Cria uma nova janela                         |
| `Ctrl-A` `Ctrl-A`                      | Muda para a última janela ativa visitada     |
| `Ctrl-A` `0...9`                       | Muda para a janela pelo número               |
| `Ctrl-A` `'` `<0...9 or title>`        | Muda para a janela por número ou nome        |
| `Ctrl-A` `N` or `Ctrl-A` `<space>`     | Muda para a próxima janela da lista          |
| `Ctrl-A` `P` or `Ctrl-A` `<backspace>` | Muda para a janela anterior da lista         |
| `Ctrl-A` `"`                           | Ver a lista de janelas                       |
| `Ctrl-A` `W`                           | Mostra a barra de janelas                    |
| `Ctrl-A` `K`                           | Encerra a janela atual _(não recomendado)_   |
| `Ctrl-A` `\`                           | Encerra todas as janelas _(não recomendado)_ |
| `Ctrl-A` `A`                           | Renomeia a janela atual                      |

{.shortcuts}

### Saindo

| Comando          | Descrição                                       |
| ---------------- | ----------------------------------------------- |
| `Ctrl-A` `D`     | Desanexa                                        |
| `Ctrl-A` `D` `D` | Desanexa e faz logout <br>_(saída rápida)_      |
| `Ctrl-A` `:`     | Sai de todas as sessões                         |
| `Ctrl-A` `C-\`   | Força a saída do screen <br>_(não recomendado)_ |

{.shortcuts}

### Dividir a tela

| Comando        | Descrição                               |
| -------------- | --------------------------------------- | --------------------------- |
| `Ctrl-A` `S`   | Divide a tela horizontalmente           |
| `Ctrl-A` `V`   | Divide a tela verticalmente             |
| `Ctrl-A` `     | `                                       | Divide a tela verticalmente |
| `Ctrl-A` `TAB` | Salta para a próxima região de exibição |
| `Ctrl-A` `X`   | Remove a região atual                   |
| `Ctrl-A` `Q`   | Remove todas as regiões exceto a atual  |

{.shortcuts}

### Diversos {.col-span-2 .row-span-2}

| Comando           | Descrição                                          |
| ----------------- | -------------------------------------------------- |
| `Ctrl-A` `C-l`    | Redesenha a janela                                 |
| `Ctrl-A` `[`      | Modo de cópia                                      |
| `Ctrl-A` `ESC`    | Modo de cópia                                      |
| `Ctrl-A` `]`      | Cola                                               |
| `Ctrl-A` `M`      | Monitora a janela em busca de atividade            |
| `Ctrl-A` `_`      | Monitora a janela em busca de silêncio             |
| `Ctrl-A` `Ctrl-V` | Entra no modo digraph <br>_(caracteres não ASCII)_ |
| `Ctrl-A` `X`      | Bloqueia a tela (protege com senha)                |
| `Ctrl-A` `:`      | Entra no comando do screen                         |
| `Ctrl-A` `H`      | Ativa o log na sessão do screen                    |

{.shortcuts}

### Truques do screen

SSH e conexão em uma única linha

```shell script
$ ssh -t user@host screen -x <name/pid>
```
