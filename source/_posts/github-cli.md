---
title: Github CLI
date: 2023-11-29
icon:
background: bg-[#808080]
tags:
  - Github
  - CICD
  - CLI
categories:
  - Ferramentas
intro: Uma referência rápida do Github CLI, uma ferramenta de linha de comando open-source que traz o GitHub para o seu terminal.
plugins:
  - copyCode
---

## Primeiros passos

### Instalação

**Windows**

| Ferramenta | Instalar                         | Atualizar                        |
| :--------- | :------------------------------- | :------------------------------- |
| WinGet     | `winget install --id Github.cli` | `winget upgrade --id GitHub.cli` |
| Scoop      | `scoop install gh`               | `scoop update gh`                |
| Choco      | `choco install gh`               | `choco upgrade gh`               |

{.show-header}

**Mac OS**

| Ferramenta | Instalar               | Atualizar                                      |
| :--------- | :--------------------- | :--------------------------------------------- |
| Brew       | `brew install gh`      | `brew upgrade gh`                              |
| MacPorts   | `sudo port install gh` | `sudo port selfupdate && sudo port upgrade gh` |

{.show-header}

**Linux**

Consulte as [instruções de instalação](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) para outras
distribuições Linux.

Script de instalação:

```bash
type -p curl >/dev/null || (sudo apt update && sudo apt install curl -y)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

---

### Uso básico

**Ajuda e documentação**

Exibe as opções do comando:

| Comando             | Descrição                                                                                                                    |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| `gh help [command]` | O help fornece ajuda para qualquer comando da aplicação. Basta digitar gh help [path to command] para ver todos os detalhes. |

**Autenticação**

| Comando             | Descrição                                                              |
| :------------------ | :--------------------------------------------------------------------- |
| `gh auth login`     | Autenticação padrão com navegador web                                  |
| `gh auth logout`    | Remove a configuração de autenticação de um host                       |
| `gh auth refresh`   | Expande ou corrige os escopos de permissão das credenciais armazenadas |
| `gh auth setup-git` | Configura o git para usar o GitHub CLI como credential helper          |
| `gh auth status`    | Verifica e exibe informações sobre seu estado de autenticação          |
| `gh auth token`     | Imprime o token de autenticação que o gh está configurado para usar    |

Com token do Github:

```shell
$ gh auth --with-token < token.txt
```

### Gerenciamento de repositórios

**Geral**

| Comando                 | Descrição                                       |
| :---------------------- | :---------------------------------------------- |
| `gh repo create`        | Cria um novo repositório no GitHub              |
| `gh repo list [target]` | Lista repositórios de um usuário ou organização |

**Alvos**

| Comando                      | Descrição                                                             |
| :--------------------------- | :-------------------------------------------------------------------- |
| `gh repo archive [repo]`     | Arquiva um repositório do GitHub                                      |
| `gh repo clone [dir]`        | Clona um repositório do GitHub localmente                             |
| `gh repo delete [repo]`      | Exclui um repositório do GitHub                                       |
| `gh repo deploy-key`         | Gerencia deploy keys em um repositório                                |
| `gh repo edit [repo]`        | Edita as configurações do repositório                                 |
| `gh repo fork [repo]`        | Cria um fork de um repositório                                        |
| `gh repo rename [name]`      | Renomeia um repositório do GitHub                                     |
| `gh repo set-default [repo]` | Este comando define o repositório remoto padrão                       |
| `gh repo sync [dest-repo]`   | Sincroniza o repositório de destino a partir do repositório de origem |
| `gh repo view [repo]`        | Exibe a descrição e o README de um repositório do GitHub.             |

### Issues

**Buscar issues**

| Comando                    | Descrição              |
| :------------------------- | :--------------------- |
| `gh search issues [query]` | Busca issues no GitHub |

**Exemplos**

```bash
# search issues matching set of keywords "readme" and "typo"
$ gh search issues readme typo

# search issues matching phrase "broken feature"
$ gh search issues "broken feature"

# search issues and pull requests in cli organization
$ gh search issues --include-prs --owner=cli

# search open issues assigned to yourself
$ gh search issues --assignee=@me --state=open

# search issues with numerous comments
$ gh search issues --comments=">100"

# search issues without label "bug"
$ gh search issues -- -label:bug
```

### Pull Requests

**Ações de pull request**

| Comando        | Descrição                                       |
| :------------- | :---------------------------------------------- |
| `gh pr create` | Cria um pull request no GitHub                  |
| `gh pr list`   | Lista pull requests em um repositório do GitHub |
| `gh pr status` | Mostra o status dos pull requests relevantes    |

**Exemplo**

```shell
$ gh pr status
```

Exemplo de saída:

```
Current branch
  #12 Remove the test feature [user:patch-2]
   - All checks failing - Review required

Created by you
  You have no open pull requests

Requesting a code review from you
  #13 Fix tests [branch]
  - 3/4 checks failing - Review required
  #15 New feature [branch]
   - Checks passing - Approved
```

### Github Actions

**Ações gerais**

| Comando               | Descrição                                                                                  |
| :-------------------- | :----------------------------------------------------------------------------------------- |
| `gh workflow disable` | Desativa um workflow, impedindo que ele seja executado ou apareça na listagem de workflows |
| `gh workflow enable`  | Ativa um workflow, permitindo que ele seja executado e apareça na listagem de workflows    |
| `gh workflow list`    | Lista os arquivos de workflow, ocultando workflows desativados por padrão                  |
| `gh workflow run`     | Cria um evento workflow_dispatch para um determinado workflow                              |
| `gh workflow view`    | Exibe o resumo de um workflow                                                              |

**Ações de execução**

| Comando           | Descrição                                                                                     |
| :---------------- | :-------------------------------------------------------------------------------------------- |
| `gh run cancel`   | Cancela uma execução de workflow                                                              |
| `gh run delete`   | Exclui uma execução de workflow                                                               |
| `gh run download` | Baixa artifacts gerados por uma execução de workflow do GitHub Actions                        |
| `gh run list`     | Lista execuções recentes de workflow                                                          |
| `gh run rerun`    | Reexecuta uma execução inteira, apenas os jobs com falha ou um job específico de uma execução |
| `gh run view`     | Exibe um resumo de uma execução de workflow                                                   |
| `gh run watch`    | Acompanha uma execução até o fim, mostrando seu progresso                                     |

### Aliases

**Configurações gerais de alias**

| Comando           | Descrição                                                                         |
| :---------------- | :-------------------------------------------------------------------------------- |
| `gh alias delete` | Exclui aliases definidos                                                          |
| `gh alias import` | Importa aliases do conteúdo de um arquivo YAML                                    |
| `gh alias list`   | Imprime todos os aliases que o gh está configurado para usar                      |
| `gh alias set`    | Define uma palavra que será expandida para um comando gh completo quando invocada |

### Releases

**Ações gerais**

| Comando             | Descrição                                       |
| :------------------ | :---------------------------------------------- |
| `gh release create` | Cria um novo GitHub Release para um repositório |
| `gh release list`   | Lista os releases de um repositório             |

**Comandos de destino**

| Comando                   | Descrição                                      |
| :------------------------ | :--------------------------------------------- |
| `gh release delete`       | Exclui um release                              |
| `gh release delete-asset` | Exclui um asset de um release                  |
| `gh release download`     | Baixa assets de um GitHub release              |
| `gh release edit`         | Edita um release                               |
| `gh release upload`       | Envia arquivos de asset para um GitHub Release |
| `gh release view`         | Exibe informações sobre um GitHub Release      |

### Configuração

**Configurações específicas**

| Comando                 | Descrição                                                    |
| :---------------------- | :----------------------------------------------------------- |
| `gh config clear-cache` | Limpa o cache da CLI                                         |
| `gh config get`         | Imprime o valor de uma chave de configuração específica      |
| `gh config list`        | Imprime uma lista de chaves e valores de configuração        |
| `gh config set`         | Atualiza a configuração com um valor para a chave específica |
