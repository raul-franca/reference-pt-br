---
title: Homebrew
date: 2023-04-12
background: bg-[#fbb041]
tags:
  - packages manager
  - macos
categories:
  - Ferramentas
intro: Este é um cheat sheet de referência rápida para começar com o Homebrew.
plugins:
  - copyCode
---

## Primeiros passos

### Instalação

Se ainda não estiver instalado, instale as Command Line Tools (CLT)

```bash
xcode-select --install
```

Instale o Homebrew:

```bash {.wrap}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

[Site oficial](https://brew.sh/) {.link-arrow}

### Comandos

|                            |                                        |
| -------------------------- | -------------------------------------- |
| `brew install git`         | Instala um pacote                      |
| `brew uninstall git`       | Desinstala um pacote                   |
| `brew upgrade git`         | Atualiza o pacote                      |
| `brew unlink git`          | Desfaz o link                          |
| `brew link git`            | Cria o link                            |
| `brew list --versions git` | Lista as versões instaladas do pacote  |

### Ajuda

Exibe a versão do Homebrew.

```bash
brew --version
```

Exibe as informações de ajuda.

```bash
brew help
```

Exibe as informações de ajuda de um comando do brew.

```bash
brew help <sub-command>
```

Verifica o sistema em busca de possíveis problemas.

```bash
brew doctor
```

### Atualizações

Busca a versão mais recente do Homebrew e das formulae.

```bash
brew update
```

Mostra as formulae com versão atualizada disponível.

```bash
brew outdated
```

Atualiza todos os brews desatualizados e não fixados.

```bash
brew upgrade
```

Atualiza apenas o brew especificado.

```bash
brew upgrade <formula>
```

Impede que as formulae especificadas sejam atualizadas.

```bash
brew pin <formula>
```

Permite que as formulae especificadas sejam atualizadas.

```bash
brew unpin <formula>
```

### Repositórios

Lista todos os repositórios atualmente adicionados via tap (taps).

```bash
brew tap
```

Adiciona um repositório de formulae do GitHub via https para o tap https://github.com/user/homebrew-repo

```bash
brew tap <user/repo>
```

Adiciona um repositório de formulae a partir da URL especificada.

```bash
brew tap <user/repo> <URL>
```

Remove o tap informado do repositório.

```bash
brew untap <user/repo>
```

### Cask

Adiciona o repositório Cask a partir do GitHub.

```bash
brew tap homebrew/cask
```

Lista todos os casks instalados.

```bash
brew list --cask
```

Busca todos os casks conhecidos com base no texto (substring).

```bash
brew search <text>
```

Instala o cask informado.

```bash
brew install --cask <cask>
```

Reinstala o Cask informado.

```bash
brew reinstall --cask <cask>
```

Desinstala o cask informado.

```bash
brew uninstall --cask <cask>
```

### Busca, instalação e remoção

Lista todas as formulae instaladas.

```bash
brew list
```

Exibe todas as formulae disponíveis localmente para instalação.

```bash
brew search
```

Realiza uma busca por substring nos nomes das formulae disponíveis.

```bash
brew search <text>
```

Exibe informações sobre a formula.

```bash
brew info <formula>
```

Instala a formula.

```bash
brew install <formula>
```

Desinstala a formula.

```bash
brew uninstall <formula>
```

### Limpeza

Remove versões mais antigas das formulae instaladas.

```bash
brew cleanup
```

Remove versões mais antigas da formula especificada.

```bash
brew cleanup <formula>
```

Exibe todas as formulae que serão removidas (dry run)

```bash
brew cleanup -n
```
