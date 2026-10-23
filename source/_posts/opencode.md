---
title: OpenCode
date: 2026-04-03 14:00:00
background: bg-[#7c3aed]
tags:
  - AI
  - CLI
  - TUI
  - agent
  - coding
categories:
  - IA
intro: |
  [OpenCode](https://opencode.ai) é um agente de programação com IA open-source com TUI, CLI e app desktop — suporta qualquer provedor de LLM, totalmente extensível via config, plugins e MCP.
plugins:
  - copyCode
---

## Primeiros passos

### Uso básico {.row-span-2}

```bash
# Start TUI for current directory
$ opencode

# Start TUI for a specific project
$ opencode /path/to/project

# Run non-interactively (headless)
$ opencode run "Explain how closures work in JS"

# Continue last session
$ opencode run -c "Fix the failing tests"

# Pipe input into opencode
$ cat error.log | opencode run "Explain this error"
```

Dentro da TUI:

```
/init           # analyze project, create AGENTS.md
@src/api.ts     # fuzzy-reference a file
!ls -la         # run a shell command inline
Tab             # switch agent (Build / Plan / Ask)
```

### Introdução

- [Official Docs](https://opencode.ai/docs) _(opencode.ai)_
- [GitHub](https://github.com/anomalyco/opencode) _(github.com)_
- [Discord](https://discord.gg/opencode) _(discord.gg)_

### Instalação

#### Script (recomendado)

```bash
$ curl -fsSL https://opencode.ai/install | bash
```

#### Node.js

```bash
$ npm install -g opencode-ai
```

#### macOS / Linux

```bash
$ brew install anomalyco/tap/opencode
```

#### Windows

```bash
choco install opencode      # Chocolatey
scoop install opencode      # Scoop
```

#### Docker

```bash {.wrap}
$ docker run -it --rm ghcr.io/anomalyco/opencode
```

### Conceitos-chave

| Termo          | Descrição                              |
| -------------- | -------------------------------------- |
| TUI            | Interface de terminal interativa       |
| `opencode run` | Modo headless / scripting              |
| Session        | Histórico de conversa salvo            |
| AGENTS.md      | Contexto do projeto para a IA          |
| Snapshot       | Estado de desfazer/refazer via Git     |
| Compaction     | Resume automaticamente todo o contexto |
| Agent          | Persona de IA para tarefas específicas |
| MCP            | Integrações com ferramentas externas   |

## Comandos slash da TUI {.cols-3}

### Todos os comandos {.row-span-2}

| Comando     | Atalho | Descrição                          |
| ----------- | ------ | ---------------------------------- |
| `/connect`  |        | Adiciona a API key do provedor     |
| `/init`     | `<L>i` | Cria / atualiza AGENTS.md          |
| `/new`      | `<L>n` | Nova sessão (alias: `/clear`)      |
| `/sessions` | `<L>l` | Lista e alterna sessões            |
| `/models`   | `<L>m` | Lista os modelos disponíveis       |
| `/themes`   | `<L>t` | Lista e altera temas               |
| `/compact`  | `<L>c` | Compacta o contexto da sessão      |
| `/undo`     | `<L>u` | Desfaz a última mensagem + edições |
| `/redo`     | `<L>r` | Refaz a mensagem desfeita          |
| `/share`    | `<L>s` | Compartilha a sessão (gera URL)    |
| `/unshare`  |        | Remove a sessão compartilhada      |
| `/export`   | `<L>x` | Exporta para Markdown              |
| `/editor`   | `<L>e` | Abre `$EDITOR` para entrada        |
| `/details`  | `<L>d` | Alterna detalhes da ferramenta     |
| `/thinking` |        | Alterna blocos de raciocínio       |
| `/help`     | `<L>h` | Mostra o diálogo de ajuda          |
| `/exit`     | `<L>q` | Sai (alias: `/quit`, `/q`)         |

{.show-header}

`<L>` = leader key (padrão `ctrl+x`)

### Dicas de entrada

| Sintaxe       | Efeito                             |
| ------------- | ---------------------------------- |
| `@filename`   | Referência fuzzy a arquivo         |
| `!command`    | Executa comando shell inline       |
| `Tab`         | Alterna o modo do agent            |
| `Shift+Tab`   | Alterna o agent no sentido inverso |
| `Drag & drop` | Anexa imagem ao prompt             |
| `Ctrl+P`      | Paleta de comandos                 |
| `Ctrl+T`      | Alterna a variante do modelo       |
| `F2`          | Alterna para o modelo recente      |
| `Escape`      | Interrompe a resposta em execução  |

### Configuração do editor

```bash
# For terminal editors
export EDITOR=nvim
export EDITOR=vim

# For GUI editors (need --wait)
export EDITOR="code --wait"
export EDITOR="cursor --wait"
export EDITOR="zed --wait"
```

Adicione a `~/.zshrc` ou `~/.bashrc` para persistir.

## Atalhos de teclado {.cols-3}

### Controles de sessão {.row-span-2}

| Atalho       | Ação                           |
| ------------ | ------------------------------ |
| `Ctrl+X` `N` | Nova sessão                    |
| `Ctrl+X` `L` | Lista de sessões               |
| `Ctrl+X` `C` | Compacta a sessão              |
| `Ctrl+X` `U` | Desfaz a última mensagem       |
| `Ctrl+X` `R` | Refaz a mensagem               |
| `Ctrl+X` `S` | Compartilha a sessão           |
| `Ctrl+X` `X` | Exporta para Markdown          |
| `Ctrl+X` `E` | Abre o editor                  |
| `Ctrl+X` `M` | Seletor de modelo              |
| `Ctrl+X` `A` | Seletor de agent               |
| `Ctrl+X` `T` | Seletor de tema                |
| `Ctrl+X` `H` | Ajuda / paleta de comandos     |
| `Ctrl+X` `Q` | Sair                           |
| `Ctrl+X` `D` | Alterna detalhes da ferramenta |
| `Ctrl+X` `B` | Alterna a barra lateral        |
| `Ctrl+X` `G` | Linha do tempo da sessão       |
| `Ctrl+X` `Y` | Copia as mensagens             |
| `Escape`     | Interrompe a resposta          |
| `Ctrl+P`     | Paleta de comandos             |
| `Ctrl+T`     | Alterna a variante do modelo   |
| `F2`         | Próximo modelo recente         |
| `Shift+F2`   | Modelo recente anterior        |
| `Tab`        | Alterna o agent para frente    |
| `Shift+Tab`  | Alterna o agent para trás      |

{.shortcuts}

### Navegação por scroll

| Atalho               | Ação                      |
| -------------------- | ------------------------- |
| `Page Up`            | Rola a página para cima   |
| `Page Down`          | Rola a página para baixo  |
| `Ctrl+Alt+Y`         | Rola uma linha para cima  |
| `Ctrl+Alt+E`         | Rola uma linha para baixo |
| `Ctrl+Alt+U`         | Meia página para cima     |
| `Ctrl+Alt+D`         | Meia página para baixo    |
| `Ctrl+G` / `Home`    | Vai para o topo           |
| `Ctrl+Alt+G` / `End` | Vai para o final          |

{.shortcuts}

### Edição de entrada

| Atalho         | Ação                        |
| -------------- | --------------------------- |
| `Ctrl+A`       | Início da linha             |
| `Ctrl+E`       | Fim da linha                |
| `Alt+B`        | Palavra anterior            |
| `Alt+F`        | Próxima palavra             |
| `Ctrl+K`       | Apaga até o fim da linha    |
| `Ctrl+U`       | Apaga até o início da linha |
| `Ctrl+W`       | Apaga a palavra anterior    |
| `Alt+D`        | Apaga a próxima palavra     |
| `Ctrl+V`       | Cola                        |
| `Return`       | Envia a mensagem            |
| `Shift+Return` | Nova linha na entrada       |

{.shortcuts}

## Comandos da CLI {.cols-2}

### Todos os comandos {.row-span-3}

| Comando                      | Descrição                                         |
| ---------------------------- | ------------------------------------------------- |
| `opencode`                   | Inicia a TUI                                      |
| `opencode [path]`            | Inicia a TUI no diretório                         |
| `opencode run [msg]`         | Execução headless/não interativa                  |
| `opencode serve`             | Servidor de API HTTP headless                     |
| `opencode web`               | Servidor HTTP + web UI                            |
| `opencode attach [url]`      | Conecta a TUI a um servidor remoto                |
| `opencode acp`               | Inicia o servidor ACP (JSON-RPC)                  |
| `opencode agent create`      | Cria um novo agent                                |
| `opencode agent list`        | Lista os agents                                   |
| `opencode auth login`        | Configura a API key do provedor                   |
| `opencode auth list`         | Lista provedores autenticados                     |
| `opencode auth logout`       | Remove credenciais do provedor                    |
| `opencode mcp add`           | Adiciona servidor MCP                             |
| `opencode mcp list`          | Lista servidores MCP                              |
| `opencode mcp auth [name]`   | Autentica servidor MCP via OAuth                  |
| `opencode mcp logout [name]` | Remove credenciais OAuth do MCP                   |
| `opencode mcp debug <name>`  | Depura a conexão MCP                              |
| `opencode models [provider]` | Lista os modelos disponíveis                      |
| `opencode models --refresh`  | Atualiza o cache de modelos                       |
| `opencode session list`      | Lista todas as sessões                            |
| `opencode stats`             | Mostra estatísticas de tokens e custo             |
| `opencode export [id]`       | Exporta a sessão como JSON                        |
| `opencode import <file>`     | Importa sessão / URL de compartilhamento          |
| `opencode github install`    | Configura o agent do GitHub Actions               |
| `opencode github run`        | Executa o agent do GitHub                         |
| `opencode upgrade [ver]`     | Atualiza para a última versão / versão específica |
| `opencode uninstall`         | Desinstala o opencode                             |

{.bold-first}

### Modo headless

```bash
# Basic print/run
$ opencode run "Summarize this codebase"

# Continue last session
$ opencode run -c "Fix the lint errors"

# Specific session
$ opencode run -s <session-id> "Add tests"

# Fork a session
$ opencode run -s <id> --fork "Try different approach"

# Attach files
$ opencode run -f diagram.png "Implement this"

# JSON output
$ opencode run "List all TODOs" --format json

# Share the session
$ opencode run --share "Refactor auth module"

# Attach to running server
$ opencode serve &
$ opencode run --attach http://localhost:4096 "task"
```

### Servidor e remoto

```bash
# Headless API server
$ opencode serve --port 4096

# Web UI server
$ opencode web --port 4096 --hostname 0.0.0.0

# Enable mDNS discovery
$ opencode serve --mdns

# Enable basic auth
$ OPENCODE_SERVER_PASSWORD=secret opencode serve

# ACP server (JSON-RPC over stdio)
$ opencode acp --cwd /my/project

# Attach TUI to remote server
$ opencode attach http://10.20.30.40:4096
```

## Flags da CLI {.cols-3}

### Flags da TUI

| Flag         | Curta | Descrição                 |
| ------------ | ----- | ------------------------- |
| `--continue` | `-c`  | Continua a última sessão  |
| `--session`  | `-s`  | ID da sessão a usar       |
| `--fork`     |       | Faz fork ao continuar     |
| `--prompt`   |       | Prompt inicial            |
| `--model`    | `-m`  | Modelo (`provider/model`) |
| `--agent`    |       | Agent a usar              |
| `--port`     |       | Porta para escutar        |
| `--hostname` |       | Hostname para escutar     |

{.show-header}

### Flags do run

| Flag         | Curta | Descrição                 |
| ------------ | ----- | ------------------------- |
| `--continue` | `-c`  | Continua a última sessão  |
| `--session`  | `-s`  | ID da sessão a usar       |
| `--fork`     |       | Faz fork ao continuar     |
| `--model`    | `-m`  | Modelo a usar             |
| `--agent`    |       | Agent a usar              |
| `--file`     | `-f`  | Anexa arquivo(s)          |
| `--format`   |       | `default` ou `json`       |
| `--share`    |       | Compartilha a sessão      |
| `--title`    |       | Define o título da sessão |
| `--attach`   |       | Conecta à URL do servidor |
| `--port`     |       | Porta do servidor local   |

{.show-header}

### Flags globais

| Flag           | Curta | Descrição              |
| -------------- | ----- | ---------------------- |
| `--help`       | `-h`  | Exibe a ajuda          |
| `--version`    | `-v`  | Mostra a versão        |
| `--print-logs` |       | Imprime logs no stderr |
| `--log-level`  |       | DEBUG/INFO/WARN/ERROR  |

{.show-header}

## Configuração {.cols-2}

### opencode.json {.row-span-2}

Configuração principal em `~/.config/opencode/opencode.json` ou `./opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "small_model": "anthropic/claude-haiku-4-5",
  "default_agent": "build",
  "autoupdate": true,
  "snapshot": true,
  "share": "manual",
  "instructions": ["AGENTS.md", "docs/*.md"],
  "provider": {
    "anthropic": {
      "options": { "timeout": 600000 }
    }
  },
  "permission": {
    "edit": "ask",
    "bash": "ask"
  },
  "compaction": {
    "auto": true,
    "prune": true,
    "reserved": 10000
  },
  "server": {
    "port": 4096,
    "mdns": true
  },
  "tools": {
    "write": false,
    "bash": false
  },
  "disabled_providers": ["openai"],
  "enabled_providers": ["anthropic"]
}
```

### tui.json

Configuração da TUI em `~/.config/opencode/tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "tokyonight",
  "scroll_speed": 3,
  "scroll_acceleration": {
    "enabled": true
  },
  "diff_style": "auto",
  "keybinds": {
    "leader": "ctrl+x",
    "session_compact": "none"
  }
}
```

### Locais de configuração

| Origem       | Caminho                            | Prioridade |
| ------------ | ---------------------------------- | ---------- |
| Remote       | `.well-known/opencode`             | 1 (menor)  |
| Global       | `~/.config/opencode/opencode.json` | 2          |
| Custom       | `$OPENCODE_CONFIG` path            | 3          |
| Project      | `./opencode.json`                  | 4          |
| `.opencode/` | agents/, commands/, plugins/       | 5          |
| Inline       | `OPENCODE_CONFIG_CONTENT`          | 6 (maior)  |

{.show-header}

As configurações fazem **merge** — fontes posteriores substituem apenas as chaves conflitantes.

### Substituição de variáveis

```json
{
  "model": "{env:OPENCODE_MODEL}",
  "provider": {
    "openai": {
      "options": {
        "apiKey": "{env:OPENAI_API_KEY}"
      }
    },
    "anthropic": {
      "options": {
        "apiKey": "{file:~/.secrets/anthropic}"
      }
    }
  }
}
```

## Variáveis de ambiente {.cols-2}

### Variáveis principais {.row-span-2}

| Variável                        | Tipo   | Descrição                                  |
| ------------------------------- | ------ | ------------------------------------------ |
| `OPENCODE_CONFIG`               | string | Caminho do arquivo de config customizado   |
| `OPENCODE_TUI_CONFIG`           | string | Caminho da config customizada da TUI       |
| `OPENCODE_CONFIG_DIR`           | string | Diretório de config customizado            |
| `OPENCODE_CONFIG_CONTENT`       | string | Config JSON inline                         |
| `OPENCODE_PERMISSION`           | string | Permissões JSON inline                     |
| `OPENCODE_AUTO_SHARE`           | bool   | Compartilha sessões automaticamente        |
| `OPENCODE_SERVER_PASSWORD`      | string | Basic auth para serve/web                  |
| `OPENCODE_SERVER_USERNAME`      | string | Usuário de autenticação (padrão: opencode) |
| `OPENCODE_MODELS_URL`           | string | URL da config de modelos customizada       |
| `OPENCODE_ENABLE_EXA`           | bool   | Habilita a busca web Exa                   |
| `OPENCODE_DISABLE_AUTOUPDATE`   | bool   | Desabilita verificações de atualização     |
| `OPENCODE_DISABLE_PRUNE`        | bool   | Desabilita a limpeza de dados antigos      |
| `OPENCODE_DISABLE_AUTOCOMPACT`  | bool   | Desabilita a compactação automática        |
| `OPENCODE_DISABLE_LSP_DOWNLOAD` | bool   | Desabilita o download automático do LSP    |
| `OPENCODE_DISABLE_MODELS_FETCH` | bool   | Desabilita a busca remota de modelos       |
| `OPENCODE_DISABLE_CLAUDE_CODE`  | bool   | Desabilita a leitura de .claude/           |
| `OPENCODE_GIT_BASH_PATH`        | string | Caminho do Git Bash (Windows)              |
| `OPENCODE_CLIENT`               | string | ID do cliente (padrão: cli)                |

{.show-header}

### Variáveis experimentais

| Variável                                        | Descrição                                     |
| ----------------------------------------------- | --------------------------------------------- |
| `OPENCODE_EXPERIMENTAL`                         | Habilita todos os recursos experimentais      |
| `OPENCODE_EXPERIMENTAL_PLAN_MODE`               | Habilita o modo plan                          |
| `OPENCODE_EXPERIMENTAL_LSP_TOOL`                | Habilita a ferramenta LSP experimental        |
| `OPENCODE_EXPERIMENTAL_FILEWATCHER`             | Habilita o file watcher de diretório completo |
| `OPENCODE_EXPERIMENTAL_MARKDOWN`                | Recursos experimentais de markdown            |
| `OPENCODE_EXPERIMENTAL_EXA`                     | Recursos experimentais do Exa                 |
| `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`        | Substitui o máximo de tokens de saída         |
| `OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS` | Timeout do Bash em ms                         |

## Veja também {.cols-1}

- [OpenCode Docs](https://opencode.ai/docs) _(opencode.ai)_
- [CLI Reference](https://opencode.ai/docs/cli/) _(opencode.ai)_
- [TUI Guide](https://opencode.ai/docs/tui/) _(opencode.ai)_
- [Config Reference](https://opencode.ai/docs/config) _(opencode.ai)_
- [GitHub Repository](https://github.com/anomalyco/opencode) _(github.com)_
