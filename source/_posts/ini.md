---
title: INI
date: 2022-12-30 09:51:44
background: bg-[#6d94c7]
tags:
categories:
  - Programação
intro: |
  Esta é uma cheat sheet de referência rápida para entender e escrever arquivos de configuração no formato INI.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

- INI é um arquivo de configuração com um formato padrão fixo
- Os elementos básicos são chaves ou propriedades
- Cada chave é composta por um **nome** e um **valor**, separados por um sinal de igual (`=`)
- O **nome da chave** aparece à **esquerda** do sinal de igual
- O sinal de igual (`=`) e o ponto e vírgula (`;`) são caracteres **reservados**
- O método de configuração INI vem do sistema operacional MS-DOS

Hoje é um padrão informal para muitas configurações; outros sistemas operacionais podem usar `.conf` ou `.cfg` como sufixo

### Exemplo

```ini
; Here are the comments
[owner]
name=John Doe
organization=Acme Products

[database]
; Here are the comments
server=192.0.2.42
port=143
file="acme payroll.dat"

[section.subsection]
foo = bar
```

### Comentários

Comentário (`;`)

```ini
; This is the comment text and will be ignored
```

Comentário (`#`)

```ini
# Here is the comment text, ⚠️ Some compilers support it
```

Comentários após uma linha (`;`,`#`) _(não padrão)_

```ini
var = a ; this is an inline comment
foo = bar # this is another inline comment
```

Em alguns casos, os comentários devem aparecer sozinhos nas linhas

### Seções

- O nome aparece em uma linha por si só
- Os nomes ficam entre colchetes `[` e `]`
- Não há delimitador explícito de `section end`
- Termina na próxima declaração de `section` ou no fim do arquivo
- Nomes de seção e de atributo não diferenciam maiúsculas de minúsculas
<!--rehype:className=style-round-->

```ini
[section]
key1 = a
key2 = b
```

O mesmo que `JSON` abaixo 👇

```json
{
  "section": {
    "key1": "a",
    "key2": "b"
  }
}
```

### Aninhamento (suportado por alguns parsers)

```ini
[section]
domain = cheatsheets.zip
[section.subsection]
foo = bar
```

O mesmo que `JSON` abaixo 👇

```json
{
  "section": {
    "domain": "cheatsheets.zip"
    "subsection": {
      "foo": "bar"
    }
  }
}
```

Aninha na seção anterior (forma abreviada)

```ini
[section]
domain = cheatsheets.zip
[.subsection]
foo = bar
```

### Caractere de escape

| sequência | significado                                                                                       |
| :-------- | :------------------------------------------------------------------------------------------------ |
| `\\`      | \ (barra invertida simples, caractere de escape de escape)                                        |
| `\'`      | apóstrofo                                                                                         |
| `\"`      | aspas duplas                                                                                      |
| `\0`      | caractere nulo                                                                                    |
| `\a`      | toque/alerta/som                                                                                  |
| `\b`      | Backspace, [Bell character] para algumas aplicações (https://en.wikipedia.org/wiki/Bell_character) |
| `\t`      | caractere de tabulação                                                                            |
| `\r`      | retorno de carro                                                                                  |
| `\n`      | nova linha                                                                                        |
| `\;`      | ponto e vírgula                                                                                   |
| `\#`      | cerquilha                                                                                         |
| `\=`      | sinal de igual                                                                                    |
| `\:`      | dois-pontos                                                                                       |
| `\x????`  | caractere Unicode para o code point hexadecimal correspondente a ????                             |

### Array

```ini
[section]
domain = cheatsheets.zip
array[]=first value
array[]=second value
```

O mesmo que `JSON` abaixo 👇

```json
{
  "section": {
    "domain": "cheatsheets.zip",
    "array": ["first value", "second value"]
  }
}
```

### Interpretador

- [@go-ini/ini](https://github.com/go-ini/ini) _(golang)_
- [@npm/ini](https://www.npmjs.com/package/ini) _(nodejs)_
- [@zonyitoo/rust-ini](https://github.com/zonyitoo/rust-inii) _(rust)_
- [@rxi/ini](https://www.npmjs.com/package/ini) _(c)_
- [@pulzed/mINI](https://github.com/pulzed/mINI) _(c++)_
- [@rickyah/ini-parser](https://github.com/rickyah/ini-parser) _(c#)_
- [@Enichan/Ini](https://github.com/Enichan/Ini) _(c#)_

## Veja também

- [INI file configuration](https://en.wikipedia.org/wiki/INI_file)_(wikipedia.org)_
