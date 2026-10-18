---
title: Cursor CLI
date: 2026-04-03 12:00:00
background: bg-[#1a1a1a]
tags:
  - AI
  - CLI
  - agent
  - cursor
  - coding
categories:
  - IA
intro: |
  [Cursor CLI](https://cursor.com/docs/cli/overview) (`agent`) é a interface de terminal para o agente de programação com IA do Cursor — execute tarefas agênticas, scripts e pipelines de CI pela linha de comando.
plugins:
  - copyCode
---

## Primeiros passos

### Hello World {.row-span-2}

```bash
# Interactive agent session
$ agent

# One-shot prompt (print mode)
$ agent -p "List all TODO comments in this repo"

# Ask a question (read-only)
$ agent --mode=ask "How does auth work here?"

# Plan only (no edits)
$ agent --plan "Refactor the payment module"
```

### Instalação

#### macOS / Linux / WSL

```bash {.wrap}
$ curl https://cursor.com/install -fsS | bash
```

#### Windows (PowerShell)

```powershell {.wrap}
irm 'https://cursor.com/install?win32=true' | iex
```

#### Pós-instalação

```bash
# Add to PATH if needed
export PATH="$HOME/.local/bin:$PATH"

# Verify
$ agent --version

# Update
$ agent update
```

### Conceitos principais

| Conceito    | Descrição                           |
| ----------- | ----------------------------------- |
| Agent mode  | Acesso total: ler, escrever, rodar shell |
| Plan mode   | Análise somente leitura, sem edições |
| Ask mode    | Perguntas e respostas / explicações, somente leitura |
| Cloud agent | Delega para o Cursor cloud remoto   |
| Session     | Conversa salva com histórico        |
| Worktree    | Ambiente de branch git isolado      |
| ACP         | Agent Client Protocol (JSON-RPC)    |
| MCP         | Integrações externas de ferramentas/dados |

## Flags da CLI {.cols-2}

### Sessão e modo {.row-span-2}

| Flag                 | Descrição                             |
| -------------------- | ------------------------------------- |
| `--mode=plan`        | Modo plan (somente leitura, sem edições) |
| `--mode=ask`         | Modo ask (perguntas e respostas, somente leitura) |
| `--plan`             | Atalho para `--mode=plan`             |
| `-p, --print`        | Modo headless/print (não interativo)  |
| `-c, --cloud`        | Inicia no modo cloud agent            |
| `--continue`         | Continua a sessão anterior            |
| `--resume [chatId]`  | Retoma uma sessão específica          |
| `-n, --name`         | Nome da sessão                        |
| `--workspace <path>` | Define o diretório do workspace       |
| `--model <model>`    | Modelo a usar (ex.: `sonnet-4`)       |
| `--list-models`      | Lista os modelos disponíveis e sai    |

{.bold-first}

### Worktree e sandbox

| Flag                    | Descrição                             |
| ----------------------- | ------------------------------------- |
| `-w, --worktree [name]` | Inicia em um worktree git isolado     |
| `--worktree-base <ref>` | Branch/ref base do worktree           |
| `--skip-worktree-setup` | Pula os scripts de `.cursor/worktrees.json` |
| `--sandbox <mode>`      | `enabled` ou `disabled`               |
| `--trust`               | Confia no workspace sem perguntar     |
| `--approve-mcps`        | Aprova automaticamente todos os servidores MCP |

{.bold-first}

### Saída e permissões

| Flag                      | Descrição                               |
| ------------------------- | --------------------------------------- |
| `--output-format <fmt>`   | `text` \| `json` \| `stream-json`       |
| `--stream-partial-output` | Transmite deltas de texto (apenas stream-json) |
| `-f, --force`             | Permite comandos, a menos que explicitamente negados |
| `--yolo`                  | Alias para `--force`                    |
| `--api-key <key>`         | Chave de autenticação (ou `CURSOR_API_KEY`) |
| `-H, --header <h>`        | Header de requisição personalizado (`Name: Value`) |

{.bold-first}

## Comandos {.cols-2}

### Todos os subcomandos {.row-span-2}

| Comando                             | Descrição                               |
| ----------------------------------- | --------------------------------------- |
| `agent [prompt]`                    | Inicia uma sessão interativa ou de print |
| `agent ls`                          | Lista sessões para retomar              |
| `agent resume`                      | Retoma a última sessão de chat          |
| `agent login`                       | Autentica no Cursor                     |
| `agent logout`                      | Sai e limpa a autenticação              |
| `agent status`                      | Mostra o status de autenticação / whoami |
| `agent update`                      | Atualiza para a versão mais recente     |
| `agent about`                       | Mostra versão, sistema e informações da conta |
| `agent models`                      | Lista os modelos disponíveis            |
| `agent create-chat`                 | Cria um novo chat vazio e retorna o ID  |
| `agent rule`                        | Gera uma nova regra do Cursor de forma interativa |
| `agent mcp`                         | Gerencia servidores MCP                 |
| `agent mcp list`                    | Lista os servidores MCP configurados    |
| `agent mcp list-tools <id>`         | Lista as ferramentas de um servidor MCP específico |
| `agent mcp enable <id>`             | Adiciona o servidor MCP à lista de aprovados |
| `agent mcp disable <id>`            | Desativa um servidor MCP                |
| `agent mcp login <id>`              | Autentica em um servidor MCP            |
| `agent install-shell-integration`   | Instala a integração de shell em `~/.zshrc` |
| `agent uninstall-shell-integration` | Remove a integração de shell            |
| `agent acp`                         | Inicia o servidor ACP (JSON-RPC via stdio) |

{.bold-first}

### Gerenciamento de sessões

```bash
# List sessions to resume
$ agent ls

# Continue previous session
$ agent --continue

# Resume specific session by ID
$ agent --resume abc123

# Resume latest session
$ agent resume
```

### Autenticação e conta

```bash
$ agent login
$ agent logout
$ agent status     # or: agent whoami
$ agent about      # version + account info
$ agent models     # list available models
```

## Modos de execução {.cols-3}

### Agent Mode {.secondary}

Acesso agêntico completo — lê arquivos, escreve código, executa comandos de shell e usa todas as ferramentas.

```bash
$ agent
$ agent "Fix the bug in auth.ts"
```

Modo padrão quando nenhuma flag `--mode` é informada.

### Plan Mode

Análise somente leitura. Propõe um plano sem fazer nenhuma edição no codebase.

```bash
$ agent --plan
$ agent --mode=plan "Refactor auth"
```

Não pode modificar arquivos nem executar comandos.

### Ask Mode

Estilo de perguntas e respostas. Explica código, responde perguntas — sem edições, sem shell.

```bash
$ agent --mode=ask
$ agent --mode=ask "How does caching work?"
```

Ideal para entender o código sem risco.

## Headless e scripting {.cols-2}

### Uso com pipe e scripts {.row-span-2}

```bash
# Summarize a diff
$ git diff | agent -p "Summarize these changes"

# Review a file
$ cat src/auth.ts | agent -p "Find security issues"

# Process logs
$ tail -200 app.log | agent -p "Identify errors"

# Reference images in prompt
$ agent -p "Describe this diagram: /path/to/image.png"
```

Formatos de saída:

```bash
# Plain text (default)
$ agent -p "task" --output-format text

# Full JSON response
$ agent -p "task" --output-format json

# Streaming JSON deltas
$ agent -p "task" --output-format stream-json

# Stream text chunks as they arrive
$ agent -p "task" --output-format stream-json \
    --stream-partial-output
```

### Uso em CI / CD

```bash
# Allow all file modifications
$ agent -p "Update changelog" --force

# Run with API key from env
$ CURSOR_API_KEY=xxx agent -p "Run tests"

# Trusted workspace (skip prompts)
$ agent -p "Deploy" --trust

# Specific workspace directory
$ agent -p "Analyze" --workspace /repo
```

Processamento em lote:

```bash {.wrap}
for f in src/**/*.ts; do
  agent -p "Add JSDoc to $f" --force
done
```

## Worktrees {.cols-2}

### Ambientes isolados {.row-span-2}

Worktrees criam um branch git isolado em `~/.cursor/worktrees/<repo>/<name>` — mantendo a árvore de trabalho principal limpa.

```bash
# Auto-named worktree
$ agent -w

# Named worktree
$ agent -w feature-auth

# Worktree from specific branch
$ agent -w fix --worktree-base main

# Skip setup scripts
$ agent -w feature --skip-worktree-setup
```

Configuração do worktree em `.cursor/worktrees.json`:

```json
{
  "setup": ["npm install", "cp .env.example .env"]
}
```

### Arquivos do worktree

Controle o que é copiado para um novo worktree:

```
# .worktreeinclude (glob patterns)
.env
.env.local
secrets/
node_modules/
```

Arquivos que correspondem a esses padrões são copiados da árvore principal para o novo worktree na criação.

## Shell Mode {.cols-2}

### Execução de shell

O shell mode roda em `$SHELL`. Navegue com `cd` encadeado aos comandos:

```bash
# Change directory then run
cd /my/project && agent "optimize this"

# Shell commands inside session
$ ls -la              # runs in $SHELL
$ npm test            # runs tests
$ git status          # git operations
```

Controles do shell:

| Tecla    | Ação                         |
| -------- | ---------------------------- |
| `Ctrl+C` | Cancela o comando de shell atual |
| `Ctrl+O` | Expande / visualiza a saída completa |
| `Tab`    | Adiciona o comando à allowlist |

{.shortcuts}

### Notas sobre o shell

- Cada comando roda em `$SHELL` (zsh/bash/fish)
- Timeout de 30 segundos por comando
- `cd dir && cmd` para comandos específicos de diretório
- A integração de shell melhora a percepção de contexto:

```bash
$ agent install-shell-integration
# adds hooks to ~/.zshrc
```

## Servidores MCP {.cols-2}

### Configurar o MCP {.row-span-2}

Configuração no nível do usuário em `~/.cursor/mcp.json`, no nível do projeto em `.cursor/mcp.json`:

#### Servidor stdio (Node.js)

```json
{
  "mcpServers": {
    "my-tool": {
      "command": "npx",
      "args": ["-y", "my-mcp-server"],
      "env": { "API_KEY": "value" }
    }
  }
}
```

#### Servidor stdio (Python)

```json
{
  "mcpServers": {
    "my-tool": {
      "command": "python",
      "args": ["-m", "my_mcp_server"]
    }
  }
}
```

#### Servidor HTTP / SSE

```json
{
  "mcpServers": {
    "remote-tool": {
      "url": "https://my-server.com/mcp"
    }
  }
}
```

### Comandos MCP

```bash
# List all configured servers
$ agent mcp list

# List tools for a server
$ agent mcp list-tools my-tool

# Approve a server
$ agent mcp enable my-tool

# Disable a server
$ agent mcp disable my-tool

# Authenticate with a server
$ agent mcp login my-tool

# Auto-approve all in session
$ agent --approve-mcps
```

## Protocolo ACP {.cols-2}

### Visão geral do ACP {.row-span-2}

O ACP (Agent Client Protocol) expõe o agente do Cursor como um servidor JSON-RPC 2.0 via **stdio**. Crie integrações personalizadas de IDE ou clientes headless.

```bash
# Start ACP server
$ agent acp

# With API key
$ agent --api-key "$CURSOR_API_KEY" acp
```

**Fluxo da requisição:**

```
initialize
authenticate (cursor_login)
session/new  or  session/load
session/prompt
  → session/update (streaming chunks)
  → session/request_permission (tool approval)
session/cancel  (optional)
```

Resultados de permissão:

| Resposta       | Efeito                   |
| -------------- | ------------------------ |
| `allow-once`   | Aprova apenas desta vez  |
| `allow-always` | Aprova sempre esta ferramenta |
| `reject-once`  | Nega apenas desta vez    |

### Métodos de extensão do ACP

Métodos de extensão do Cursor enviados via ACP:

| Método                  | Tipo     | Finalidade             |
| ----------------------- | -------- | ---------------------- |
| `cursor/ask_question`   | Bloqueante | Prompt de múltipla escolha |
| `cursor/create_plan`    | Bloqueante | Solicita aprovação do plano |
| `cursor/update_todos`   | Notificação | Atualiza o estado da lista de tarefas |
| `cursor/task`           | Notificação | Status da tarefa do subagente |
| `cursor/generate_image` | Notificação | Evento de geração de imagem |

{.show-header}

Cliente Node.js mínimo:

```js {.wrap}
const agent = spawn('agent', ['acp'], { stdio: ['pipe', 'pipe', 'inherit'] });
// send initialize → authenticate → session/new → session/prompt
```

**Integrações de IDE via ACP:**

- JetBrains (IntelliJ, WebStorm, PyCharm)
- Neovim via plugin `avante.nvim`
- Extensões do editor Zed
- Qualquer editor com suporte a extensões

## Cloud Agents {.cols-2}

### Modo cloud

Cloud agents executam tarefas remotamente na infraestrutura do Cursor. Use para cargas de trabalho longas ou paralelas.

```bash
# Launch cloud agent picker
$ agent -c
$ agent --cloud

# Cloud agent with a prompt
$ agent -c "Migrate all tests to Vitest"
```

Cloud agents oferecem suporte a:

- Execução remota (sem recursos locais)
- Delegação de tarefas em paralelo
- Workflows de execução mais longa

### Tipos de subagente

Ao usar ACP ou cloud, os subagentes podem ser tipados:

| Tipo                 | Descrição               |
| -------------------- | ----------------------- |
| `explore`            | Exploração de codebase  |
| `browser_use`        | Automação de navegador web |
| `computer_use`       | Ações em GUI do desktop |
| `shell`              | Execução de comandos de shell |
| `video_review`       | Análise de conteúdo de vídeo |
| `{ custom: "type" }` | Tipo de subagente personalizado |

## Veja também {.cols-1}

- [Documentação do Cursor CLI](https://cursor.com/docs/cli/overview) _(cursor.com)_
- [Documentação do protocolo ACP](https://cursor.com/docs/cli/acp) _(cursor.com)_
- [Marketplace do Cursor](https://cursor.com/marketplace) _(cursor.com)_
- [Visão geral do MCP](https://cursor.com/docs/mcp) _(cursor.com)_
