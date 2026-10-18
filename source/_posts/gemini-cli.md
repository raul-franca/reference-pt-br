---
title: Gemini CLI
date: 2026-04-03 12:00:00
background: bg-[#1a73e8]
tags:
  - gemini
  - ai
  - cli
  - google
categories:
  - IA
intro: |
  [Gemini CLI](https://geminicli.com/docs/) traz os modelos Google Gemini diretamente para o seu terminal para compreensão de código, automação de tarefas e criação de workflows.
plugins:
  - copyCode
---

## Primeiros passos {.cols-3}

### Início rápido {.row-span-2}

```bash
# Install globally
$ npm install -g @google/gemini-cli

# Or via Homebrew
$ brew install gemini-cli

# Or run without installing
$ npx @google/gemini-cli

# Launch interactive session
$ gemini

# Non-interactive (headless)
$ gemini -p "summarize README.md"

# Pipe content to Gemini
$ cat logs.txt | gemini -p "find errors"

# Run prompt and continue interactively
$ gemini -i "explain this project"

# Resume most recent session
$ gemini -r latest

# Resume with new prompt
$ gemini -r latest "check for type errors"
```

### Autenticação

| Método          | Como                                               |
| --------------- | -------------------------------------------------- |
| Google Account  | Execute `gemini` e selecione "Sign in with Google" |
| API Key         | Defina a variável de ambiente `GEMINI_API_KEY`     |
| Vertex AI (ADC) | `gcloud auth application-default login`            |
| Vertex AI (SA)  | Defina `GOOGLE_APPLICATION_CREDENTIALS`            |

O Vertex AI também exige `GOOGLE_CLOUD_PROJECT` e `GOOGLE_CLOUD_LOCATION`.

### Métodos de instalação

| Método             | Comando                             |
| ------------------ | ----------------------------------- |
| npm                | `npm install -g @google/gemini-cli` |
| Homebrew           | `brew install gemini-cli`           |
| MacPorts           | `sudo port install gemini-cli`      |
| npx (sem instalar) | `npx @google/gemini-cli`            |

**Requisitos de sistema:** Node.js 20+, macOS 15+, Windows 11 24H2+ ou Ubuntu 20.04+

### Aliases de modelo

| Alias        | Modelo                        | Usar para            |
| ------------ | ----------------------------- | -------------------- |
| `auto`       | gemini-2.5-pro / gemini-3-pro | Padrão, equilibrado  |
| `pro`        | gemini-2.5-pro / gemini-3-pro | Raciocínio complexo  |
| `flash`      | gemini-2.5-flash              | Rápido, equilibrado  |
| `flash-lite` | gemini-2.5-flash-lite         | Simples, mais rápido |

{.show-header}

Defina com `-m flash` ou com a variável de ambiente `GEMINI_MODEL`.

### Conceitos principais

| Conceito    | Descrição                                                     |
| ----------- | ------------------------------------------------------------- |
| `GEMINI.md` | Arquivo de contexto do projeto carregado automaticamente      |
| Skills      | Especialidade sob demanda carregada via `activate_skill`      |
| Extensions  | Pacotes de prompts, servidores MCP e ferramentas              |
| MCP Servers | Ferramentas externas via Model Context Protocol               |
| Plan Mode   | Modo somente leitura para planejar antes de codar             |
| Hooks       | Scripts executados em pontos-chave do ciclo de vida do agente |
| Headless    | Modo não interativo via flag `-p`                             |
| Sessions    | Histórico de conversas salvo e retomável                      |

## Opções da CLI {.cols-2}

### Opções principais {.row-span-2}

| Opção                        | Alias | Descrição                                                               |
| ---------------------------- | ----- | ----------------------------------------------------------------------- |
| `--prompt <text>`            | `-p`  | Prompt não interativo                                                   |
| `--prompt-interactive`       | `-i`  | Envia o prompt e continua                                               |
| `--model <name>`             | `-m`  | Modelo a usar                                                           |
| `--worktree [name]`          | `-w`  | Inicia em um novo worktree do git                                       |
| `--sandbox`                  | `-s`  | Ativa a execução em sandbox                                             |
| `--approval-mode <mode>`     |       | default / auto_edit / yolo / plan                                       |
| `--yolo`                     | `-y`  | Aprova tudo automaticamente (descontinuado, use `--approval-mode=yolo`) |
| `--resume <id>`              | `-r`  | Retoma a sessão por ID ou `latest`                                      |
| `--list-sessions`            |       | Lista as sessões e sai                                                  |
| `--delete-session <n>`       |       | Exclui a sessão por índice                                              |
| `--output-format <fmt>`      | `-o`  | text / json / stream-json                                               |
| `--extensions <list>`        | `-e`  | Extensões a carregar                                                    |
| `--list-extensions`          | `-l`  | Lista as extensões e sai                                                |
| `--include-directories`      |       | Diretórios adicionais do workspace                                      |
| `--allowed-mcp-server-names` |       | Restringe os nomes de servidores MCP                                    |
| `--screen-reader`            |       | Ativa o modo de acessibilidade                                          |
| `--acp`                      |       | Inicia no modo ACP (Agent Code Pilot)                                   |
| `--debug`                    | `-d`  | Log de depuração detalhado                                              |
| `--version`                  | `-v`  | Mostra a versão                                                         |
| `--help`                     | `-h`  | Mostra a ajuda                                                          |

### Subcomandos

```bash
# MCP server management
$ gemini mcp add <name> <cmd-or-url>
$ gemini mcp remove <name>
$ gemini mcp list
$ gemini mcp enable <name>
$ gemini mcp disable <name>

# Extension management
$ gemini extensions install <source>
$ gemini extensions uninstall <name>
$ gemini extensions list
$ gemini extensions update [name] [--all]
$ gemini extensions enable/disable <name>
$ gemini extensions link <path>
$ gemini extensions new <path>

# Skills management
$ gemini skills list [--all]
$ gemini skills install <source>
$ gemini skills link <path>
$ gemini skills uninstall <name>
$ gemini skills enable/disable <name>

# Hooks
$ gemini hooks migrate
```

### Formatos de saída headless

| Formato       | Descrição                                                                   |
| ------------- | --------------------------------------------------------------------------- |
| `text`        | Texto simples (padrão)                                                      |
| `json`        | Objeto JSON único com `response` e `stats`                                  |
| `stream-json` | JSONL: `init` · `message` · `tool_use` · `tool_result` · `error` · `result` |

**Códigos de saída:** `0` Sucesso · `1` Erro · `42` Entrada inválida · `53` Limite de turnos excedido

## Comandos interativos {.cols-3}

### Slash commands `/` {.row-span-3}

| Comando              | Descrição                                            |
| -------------------- | ---------------------------------------------------- |
| `/help`              | Mostra todos os comandos                             |
| `/quit` `/exit`      | Sai do Gemini CLI                                    |
| `/clear`             | Limpa a tela do terminal                             |
| `/about`             | Mostra informações da versão                         |
| `/auth`              | Altera a autenticação                                |
| `/model`             | Define / gerencia o modelo                           |
| `/settings`          | Abre o editor de configurações                       |
| `/theme`             | Altera o tema visual                                 |
| `/vim`               | Ativa/desativa o modo vim                            |
| `/plan [goal]`       | Entra no Plan Mode                                   |
| `/compress`          | Comprime o contexto do chat                          |
| `/copy`              | Copia a última saída para a área de transferência    |
| `/init`              | Gera o GEMINI.md do projeto                          |
| `/docs`              | Abre a documentação                                  |
| `/bug`               | Abre uma issue no GitHub                             |
| `/stats`             | Estatísticas da sessão / modelo / ferramentas        |
| `/tools`             | Lista as ferramentas disponíveis                     |
| `/memory show`       | Mostra todos os arquivos de contexto                 |
| `/memory add <text>` | Adiciona ao GEMINI.md global                         |
| `/memory reload`     | Recarrega os arquivos de contexto                    |
| `/resume`            | Navega e retoma sessões                              |
| `/rewind`            | Retrocede o histórico da conversa                    |
| `/restore`           | Restaura o estado dos arquivos anterior à ferramenta |
| `/hooks list`        | Lista os hooks configurados                          |
| `/mcp list`          | Lista os servidores MCP                              |
| `/mcp reload`        | Reinicia os servidores MCP                           |
| `/skills list`       | Lista as skills disponíveis                          |
| `/extensions list`   | Lista as extensões                                   |
| `/permissions trust` | Confia na pasta atual                                |
| `/policies list`     | Lista as políticas ativas                            |
| `/directory add`     | Adiciona um diretório ao workspace                   |
| `/ide status`        | Status da integração com a IDE                       |
| `/shells`            | Ativa/desativa os shells em segundo plano            |
| `/terminal-setup`    | Configura os atalhos de várias linhas                |
| `/setup-github`      | Configura o GitHub Actions                           |

Comandos de recarga: `/skills reload`, `/agents reload`, `/commands reload`, `/memory reload`, `/mcp reload`, `/extensions reload`

### Comandos At `@`

Inclua o conteúdo de um arquivo ou diretório no seu prompt:

```bash
# Include a file
@src/main.ts fix the bug on line 42

# Include a directory
@src/ what does this module do?

# Include multiple paths
@package.json @src/ audit dependencies
```

Consciente do Git: respeita o `.gitignore` na inclusão de diretórios.

### Modo shell `!`

```bash
# Run a single shell command
!ls -la

# Toggle persistent shell mode
!

# Shell output injected into context
!git diff HEAD~1
```

`GEMINI_CLI=1` é definido em todos os subprocessos de shell.

## Atalhos de teclado {.cols-3}

### Cursor e edição {.row-span-2}

| Tecla                 | Ação                             |
| --------------------- | -------------------------------- |
| `Ctrl+A` / `Home`     | Move para o início da linha      |
| `Ctrl+E` / `End`      | Move para o fim da linha         |
| `Ctrl+←` / `Alt+B`    | Move uma palavra para a esquerda |
| `Ctrl+→` / `Alt+F`    | Move uma palavra para a direita  |
| `Ctrl+K`              | Exclui até o fim da linha        |
| `Ctrl+U`              | Exclui até o início da linha     |
| `Ctrl+W` / `Alt+Bksp` | Exclui a palavra à esquerda      |
| `Alt+D`               | Exclui a palavra à direita       |
| `Backspace`           | Exclui à esquerda                |
| `Delete` / `Ctrl+D`   | Exclui à direita                 |
| `Cmd+Z`               | Desfazer                         |
| `Ctrl+Shift+Z`        | Refazer                          |

{.shortcuts}

### Entrada de texto

| Tecla            | Ação                          |
| ---------------- | ----------------------------- |
| `Enter`          | Envia a mensagem              |
| `Ctrl/Cmd+Enter` | Insere uma nova linha         |
| `Tab`            | Enfileira a mensagem          |
| `Ctrl+X`         | Abre o editor externo         |
| `Ctrl+V`         | Colar                         |
| `Ctrl+R`         | Busca reversa no histórico    |
| `Ctrl+P`         | Entrada anterior do histórico |
| `Ctrl+N`         | Próxima entrada do histórico  |

{.shortcuts}

### Controles do app

| Tecla       | Ação                                      |
| ----------- | ----------------------------------------- |
| `Shift+Tab` | Alterna entre os modos de aprovação       |
| `Ctrl+T`    | Ativa/desativa o painel de todos          |
| `Alt+M`     | Ativa/desativa a renderização de markdown |
| `Ctrl+Y`    | Ativa/desativa o modo YOLO                |
| `Ctrl+L`    | Limpa a tela                              |
| `Ctrl+Z`    | Suspende o processo                       |
| `F12`       | Mostra os detalhes do erro                |
| `Esc` twice | Abre a caixa de diálogo de rewind         |
| `Ctrl+C`    | Cancela / sai                             |
| `Ctrl+D`    | Sai                                       |

{.shortcuts}

## Sessões e histórico {.cols-3}

### Gerenciamento de sessões {.row-span-2}

```bash
# List all sessions
$ gemini --list-sessions

# Resume most recent
$ gemini -r latest

# Resume specific session
$ gemini -r <session-id>

# Delete by index
$ gemini --delete-session 3
```

**Dentro do navegador do `/resume`:**

- `↑↓` para navegar pelas sessões
- `Enter` para retomar a sessão selecionada
- `x` para excluir uma sessão
- Busque digitando

### Fluxo do rewind

`/rewind` ou pressione `Esc` duas vezes para abrir a caixa de diálogo de rewind:

| Opção             | Efeito                                                    |
| ----------------- | --------------------------------------------------------- |
| Rewind + Reverter | Redefine o histórico do chat E as alterações nos arquivos |
| Somente rewind    | Redefine o histórico do chat, mantém os arquivos          |
| Somente reverter  | Restaura os arquivos, mantém o histórico do chat          |
| Não fazer nada    | Cancela (Esc)                                             |

Aplica-se apenas a alterações de arquivos feitas pela IA, não a edições manuais ou comandos de shell com `!`.

### Fazer fork de uma conversa

Salve e restaure checkpoints nomeados para explorar várias abordagens:

```bash
# 1. Save current state
/resume save my-decision-point

# 2. Try approach A...

# 3. Restore to saved state
/resume resume my-decision-point

# 4. Try approach B...
```

## Contexto e memória {.cols-3}

### Hierarquia do GEMINI.md {.row-span-2}

Os arquivos de contexto são carregados nesta ordem (todos mesclados):

| Prioridade           | Local                                                |
| -------------------- | ---------------------------------------------------- |
| 1. Global            | `~/.gemini/GEMINI.md`                                |
| 2. Diretórios pai    | Verificados subindo a partir do workspace            |
| 3. Workspace         | `.gemini/GEMINI.md`                                  |
| 4. JIT (sob demanda) | Verificados quando as ferramentas acessam diretórios |

```markdown
# Importing other files inside GEMINI.md

@./docs/architecture.md
@./docs/conventions.md
```

Personalize o nome do arquivo via `context.fileName` em `settings.json` (pode ser um array: `["AGENTS.md", "GEMINI.md"]`).

### Comandos de memória

```bash
# Show all loaded context
/memory show

# Force reload all context files
/memory reload

# Append text to global GEMINI.md
/memory add "Always use TypeScript strict mode"

# Generate project GEMINI.md
/init
```

### Ignorar arquivos

Crie um `.geminiignore` na raiz do projeto (segue a sintaxe do `.gitignore`):

```gitignore
# Exclude a directory
/packages/

# Exclude specific files
apikeys.txt
*.log

# Exclude all .md except README
*.md
!README.md
```

Os arquivos ficam ocultos das ferramentas da CLI, mas continuam visíveis para o Git e outros serviços.

## Servidores MCP {.cols-2}

### Configuração do MCP {.row-span-2}

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "my-mcp-package"],
      "env": { "API_KEY": "$MY_API_KEY" },
      "timeout": 30000,
      "trust": false,
      "includeTools": ["tool1", "tool2"],
      "excludeTools": ["dangerous-tool"]
    },
    "remote-server": {
      "url": "https://api.example.com/mcp",
      "headers": { "Authorization": "Bearer $TOKEN" }
    }
  }
}
```

As variáveis de ambiente suportam expansão de `$VAR`, `${VAR}` e `%VAR%` (Windows).

Padrão de FQN da ferramenta: `mcp_{serverName}_{toolName}`

### Gerenciar servidores

```bash {.wrap}
# Add stdio server
$ gemini mcp add myserver npx -y my-mcp-package

# Add HTTP server
$ gemini mcp add myserver https://api.example.com/mcp

# Add with options
$ gemini mcp add myserver cmd --transport http --trust --timeout 30000

# List all servers
$ gemini mcp list

# Remove a server
$ gemini mcp remove myserver

# Enable / disable
$ gemini mcp enable myserver
$ gemini mcp disable myserver --session
```

### Campos de configuração do servidor MCP

| Campo          | Descrição                                     |
| -------------- | --------------------------------------------- |
| `command`      | Executável para o transporte stdio            |
| `args`         | Array de argumentos                           |
| `url`          | URL para o transporte SSE                     |
| `httpUrl`      | URL para Streamable HTTP                      |
| `env`          | Variáveis de ambiente                         |
| `cwd`          | Diretório de trabalho                         |
| `timeout`      | Timeout de conexão (ms, padrão 600000)        |
| `trust`        | Pula a confirmação para todas as ferramentas  |
| `includeTools` | Lista de permissão de ferramentas específicas |
| `excludeTools` | Lista de bloqueio de ferramentas específicas  |

### Recursos MCP

Referencie recursos MCP nos prompts:

```bash
# Reference a resource
@server://resource/path summarize this

# Slash commands from MCP prompts
/prompt-name --arg=value
```

## Extensões e skills {.cols-3}

### Gerenciar extensões {.row-span-2}

```bash
# Install from GitHub
$ gemini extensions install https://github.com/org/ext

# Install from local path
$ gemini extensions install ./my-extension

# List installed
$ gemini extensions list

# Update all
$ gemini extensions update --all

# Update specific
$ gemini extensions update my-ext

# Enable / disable
$ gemini extensions enable my-ext
$ gemini extensions disable my-ext --scope user

# Link for development
$ gemini extensions link ./dev-extension

# Create new extension
$ gemini extensions new ./my-new-ext

# Validate structure
$ gemini extensions validate ./my-ext
```

As extensões agrupam: prompts, servidores MCP, comandos personalizados, temas, hooks, subagentes e skills.

### Skills de agente

Skills fornecem conhecimento sob demanda — carregadas apenas quando `activate_skill` é chamado.

**Locais de descoberta (precedência):**

| Nível     | Caminho                                    |
| --------- | ------------------------------------------ |
| Workspace | `.gemini/skills/` ou `.agents/skills/`     |
| Usuário   | `~/.gemini/skills/` ou `~/.agents/skills/` |
| Extensão  | Incluída na própria extensão               |

```bash
# List all skills
$ gemini skills list --all

# Install from Git or local
$ gemini skills install https://github.com/org/skill
$ gemini skills install ./local-skill

# Link for development
$ gemini skills link ./my-skill

# Enable / disable
$ gemini skills enable my-skill
$ gemini skills disable my-skill
```

### Comandos personalizados

Salve prompts reutilizáveis como slash commands.

**Locais dos arquivos:**

- Usuário: `~/.gemini/commands/`
- Projeto: `.gemini/commands/`

```toml
# .gemini/commands/git/commit.toml
description = "Generate commit message"
prompt = """
Generate a conventional commit message for:

!{git diff --staged}

{{args}}
"""
```

O comando vira `/git:commit`. Subdiretório `/` → namespace `:`.

**Placeholders:**
| Placeholder | Significado                      |
| ----------- | -------------------------------- |
| `{{args}}`  | Injeta os argumentos do usuário  |
| `!{cmd}`    | Executa o shell e injeta a saída |
| `@{path}`   | Incorpora o conteúdo do arquivo  |

## Plan Mode {.cols-3}

### Ativar o Plan Mode {.row-span-2}

```bash
# One-time via flag
$ gemini --approval-mode=plan

# Natural language trigger
> let's plan the refactor first

# Slash command
/plan redesign the auth module

# Cycle modes with Shift+Tab during session
```

Defina como padrão em `settings.json`:

```json
{
  "general": {
    "defaultApprovalMode": "plan"
  }
}
```

### Ferramentas do Plan Mode

**Somente leitura (sempre disponíveis):**

- `read_file`, `list_directory`, `glob`
- `grep_search`, `google_web_search`
- `web_fetch` (com confirmação)
- `codebase_investigator`, `cli_help`
- `ask_user`

**Escrita (restrita):**

- `write_file`, `replace` — apenas para arquivos `.md` dentro do diretório de planos

**Memória:**

- `save_memory`, `activate_skill`

### Fluxo do Plan Mode

```
1. Set goal
   └─ natural language or /plan <goal>

2. Discuss strategy
   └─ Gemini may ask clarifying questions

3. Review plan
   └─ Markdown file written to plans dir
   └─ Ctrl+X to edit in external editor

4. Approve or iterate

5. Switch to YOLO/auto_edit to implement
```

Roteamento automático de modelo: Pro durante o planejamento → Flash durante a implementação.

## Configuração {.cols-2}

### Locais dos arquivos de configuração {.row-span-2}

| Escopo            | Caminho                                   |
| ----------------- | ----------------------------------------- |
| Usuário           | `~/.gemini/settings.json`                 |
| Projeto           | `.gemini/settings.json`                   |
| Sistema (Linux)   | `/etc/gemini-cli/settings.json`           |
| Sistema (macOS)   | `/Library/Application Support/GeminiCli/` |
| Sistema (Windows) | `C:\ProgramData\gemini-cli\settings.json` |

{.no-wrap}

**Precedência (o mais alto vence):**
argumentos da CLI → variáveis de ambiente → configurações do sistema → configurações do projeto → configurações do usuário → padrões do sistema

**Configurações comuns:**

```json
{
  "general": {
    "defaultApprovalMode": "default",
    "checkpointing": { "enabled": true }
  },
  "ui": {
    "theme": "dark"
  },
  "model": {
    "name": "auto"
  },
  "tools": {
    "sandbox": "docker"
  }
}
```

Abra o editor visual com `/settings`.

### Principais variáveis de ambiente

| Variável                         | Finalidade                                           |
| -------------------------------- | ---------------------------------------------------- |
| `GEMINI_API_KEY`                 | Autenticação da API do Gemini                        |
| `GEMINI_MODEL`                   | Substituição do modelo padrão                        |
| `GEMINI_CLI_HOME`                | Substitui o diretório de configuração                |
| `GOOGLE_CLOUD_PROJECT`           | Projeto do Vertex AI                                 |
| `GOOGLE_CLOUD_LOCATION`          | Região do Vertex AI                                  |
| `GOOGLE_APPLICATION_CREDENTIALS` | Caminho do JSON da conta de serviço                  |
| `GOOGLE_API_KEY`                 | Chave de API do Google Cloud                         |
| `GEMINI_SANDBOX`                 | Tipo de sandbox: `true`, `docker`, `podman`, `runsc` |
| `GEMINI_SYSTEM_MD`               | Caminho do arquivo de system prompt                  |
| `NO_COLOR`                       | Desativa a saída colorida                            |
| `CLI_TITLE`                      | Substitui o título da janela do terminal             |

Persista em `~/.bashrc`, `~/.zshrc` ou `.gemini/.env`.

### Opções de sandbox

| Método          | Plataforma         | Como ativar                            |
| --------------- | ------------------ | -------------------------------------- |
| macOS Seatbelt  | Somente macOS      | `GEMINI_SANDBOX=sandbox-exec`          |
| Docker/Podman   | Multiplataforma    | `--sandbox` ou `GEMINI_SANDBOX=docker` |
| gVisor (runsc)  | Somente Linux      | `GEMINI_SANDBOX=runsc`                 |
| LXC/LXD         | Linux experimental | `GEMINI_SANDBOX=lxc`                   |
| Windows Sandbox | Somente Windows    | `GEMINI_SANDBOX=true`                  |

{.show-header}

## Hooks {.cols-2}

### Eventos de hook {.row-span-3}

| Evento                | Quando                          | Pode bloquear?             |
| --------------------- | ------------------------------- | -------------------------- |
| `SessionStart`        | A sessão começa                 | Não (informativo)          |
| `SessionEnd`          | A sessão termina                | Não (melhor esforço)       |
| `BeforeAgent`         | Antes de o planejamento começar | Sim (exit 2)               |
| `AfterAgent`          | O loop do agente termina        | Sim (força nova tentativa) |
| `BeforeModel`         | Antes da chamada ao LLM         | Sim (exit 2)               |
| `AfterModel`          | Após cada chunk do LLM          | Sim (exit 2)               |
| `BeforeToolSelection` | Antes da escolha da ferramenta  | Filtra ferramentas         |
| `BeforeTool`          | Antes da execução da ferramenta | Sim (exit 2)               |
| `AfterTool`           | Após a execução da ferramenta   | Sim (oculta o resultado)   |
| `PreCompress`         | Antes da compressão             | Não (informativo)          |
| `Notification`        | Notificações do sistema         | Não                        |

**Códigos de saída:** `0` = sucesso · `2` = bloqueio/crítico · outro = aviso

**Configuração de hooks em `settings.json`:**

```json
{
  "hooks": {
    "BeforeTool": [
      {
        "type": "command",
        "command": "~/.gemini/hooks/validate-tool.sh",
        "matcher": "write_file",
        "timeout": 10000
      }
    ],
    "SessionStart": [
      {
        "type": "command",
        "command": "echo '{\"systemMessage\": \"Be concise.\"}'"
      }
    ]
  }
}
```

### Protocolo de I/O dos hooks

Todos os hooks recebem JSON via **stdin**:

```json
{
  "session_id": "...",
  "transcript_path": "/path/to/transcript",
  "cwd": "/project/dir",
  "hook_event_name": "BeforeTool",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

Responda com JSON em **stdout**:

| Campo            | Descrição                         |
| ---------------- | --------------------------------- |
| `decision`       | `"allow"` ou `"deny"`             |
| `reason`         | Mostrado ao usuário quando negado |
| `systemMessage`  | Injetado no contexto              |
| `suppressOutput` | Oculta a saída do hook            |
| `continue`       | `false` para interromper o agente |

**BeforeTool** extra: `hookSpecificOutput.tool_input` substitui os args.

**AfterTool** extra: `hookSpecificOutput.additionalContext` anexado ao resultado.

**BeforeAgent** extra: `hookSpecificOutput.additionalContext` anexado ao prompt.

**Variáveis de ambiente disponíveis:**
`GEMINI_PROJECT_DIR`, `GEMINI_SESSION_ID`, `GEMINI_CWD`

## Veja também {.cols-1}

- [Documentação oficial](https://geminicli.com/docs/) _(geminicli.com)_
- [Cheat sheet da CLI](https://geminicli.com/docs/cli/cli-reference) _(geminicli.com)_
- [Referência de atalhos de teclado](https://geminicli.com/docs/reference/keyboard-shortcuts) _(geminicli.com)_
- [Referência de configuração](https://geminicli.com/docs/reference/configuration) _(geminicli.com)_
- [Referência de hooks](https://geminicli.com/docs/hooks/reference) _(geminicli.com)_
- [Repositório no GitHub](https://github.com/google-gemini/gemini-cli) _(github.com)_
