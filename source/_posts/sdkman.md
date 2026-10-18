---
title: SDKMAN!
date: 2023-12-18 20:25:30
background: bg-[#cf5e3c]
label:
tags:
  - command
  - software development kits
  - sdk
categories:
  - Comandos Linux
intro: |
  Este cheat sheet traz os comandos de linha de comando do SDKMAN! mais usados
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Instalando o SDKMAN!

Baixe o SDKMAN!

```shell script
$ curl -s "https://get.sdkman.io" | bash
```

Instale o SDKMAN!

```shell script
$ source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Verifique a versão

```shell script
$ sdk version
```

Atualize

```shell script
$ sdk update
```

Ajuda

```shell script
$ sdk help
```

### Instalando e gerenciando candidatos {.row-span-2}

Liste todos os candidatos

```shell script
$ sdk list
```

Liste as versões de um candidato

```shell script
$ sdk list <candidate>
```

Instale um candidato na versão mais recente

```shell script
$ sdk install <candidate>
```

Instale um candidato em uma versão específica

```shell script
$ sdk install <candidate> <version>
```

Alterne temporariamente entre versões

```shell script
$ sdk use <candidate> <version>
```

Alterne permanentemente para uma versão

```shell script
$ sdk default <candidate> <version>
```

Exiba a versão específica de um candidato em uso

```shell script
$ sdk current <candidate>
```

Exiba as versões de todos os candidatos em uso

```shell script
$ sdk current
```

Remova um candidato

```shell script
$ sdk uninstall <candidate> <version>
```
