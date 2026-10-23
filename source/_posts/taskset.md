---
title: Taskset
date: 2023-04-07 14:25:44
background: bg-[#8bbb55]
tags:
  - process
  - process manager
categories:
  - Comandos Linux
intro:
  O comando taskset é usado para definir ou recuperar a afinidade de CPU de um processo em execução, dado seu pid, ou
  para iniciar um novo comando com uma determinada afinidade de CPU.
plugins:
  - copyCode
---

## Primeiros passos {.cols-3}

### Uso

O comportamento padrão é executar um novo comando com uma determinada máscara de afinidade

```shell
$ taskset [mask] [command] [arguments]
```

#### Uso #2

```shell
$ taskset -p [pid]
```

---

```shell
$ taskset -p [mask] [pid]
```

Você também pode recuperar a afinidade de CPU de uma tarefa existente

### Opções comuns {.col-span-2}

| Comando | Alternativa | Significado                                                                                                                                                                       |
| ------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-a`    | --all-tasks | Define ou recupera a afinidade de CPU de todas as tarefas (threads) de um determinado PID.                                                                                        |
| `-c`    | --cpu-list  | Interpreta a máscara como uma lista numérica de processadores em vez de um bitmask.</br>Os números são separados por vírgulas e podem incluir intervalos. Por exemplo: `0,5,8-11` |
| `-p`    | --pid       | Opera em um PID existente e não inicia uma nova tarefa.                                                                                                                           |
| `-h`    | --help      | Exibe o texto de ajuda e sai.                                                                                                                                                     |
| `-v`    | --version   | Imprime a versão e sai.                                                                                                                                                           |

{.show-header}

## Exemplo

### Ver a afinidade de CPU

```shell
$ taskset -cp 29523
pid 29523's current affinity list: 0-15
```

Isso significa que o processo com PID `29523` está ativo no intervalo de CPUs de `[0,1,...,15]`, ou seja, `16` no total.

**PID**: Process Identifier — é um identificador numérico único dado a cada processo em execução; você pode ver o PID dos
processos nas ferramentas `top` ou `htop`

_Se você executar o comando acima e receber a mensagem `bad usage`, tente com PID = 1_

```shell
$ taskset -cp 1
```

### Definir a afinidade de CPU

Agora vamos tentar colocar um processo em uma CPU específica. Por exemplo, temos um processo com PID = 14846

Vamos ver primeiro a lista de afinidade de CPU desse processo:

```shell
$ taskset -cp 14846
pid 14846's current affinity list: 0-15
```

#### Mudar a afinidade de CPU para 1:

```shell
$ taskset -cp 1 14846
pid 14846's current affinity list: 0-15
pid 14846's new affinity list: 1
```

Como vemos, a afinidade de CPU foi alterada

### Definir a afinidade de CPU com vários valores

Isso significa que a nova lista de afinidade de CPU é `[0,1,2,3]`

```shell
$ taskset -cp 0-3 14846
pid 14846's current affinity list: 1
pid 14846's new affinity list: 0-3
```

Você pode definir uma única CPU com o seguinte comando:

```shell
$ taskset -cp 5,8,12 14846
pid 14846's current affinity list: 0-3
pid 14846's new affinity list: 5,8,12
```

Isso significa que a nova lista de afinidade de CPU é `[5,8,12]`

### Outros

Você pode definir a afinidade por intervalo, como em uma CPU específica

```shell
$ taskset -cp 1-3,12 14846
```

Ou

```shell
$ taskset -cp 1-6:2 14846
```

O sufixo ":N" especifica o passo (stride) no intervalo; por exemplo, 0-10:3 é interpretado como a lista 0,3,6,9.

## Veja também

[taskset — Linux manual page](https://man7.org/linux/man-pages/man1/taskset.1.html) _(man7.org)_
