---
title: Grok CLI
date: 2026-04-03 14:00:00
background: bg-[#7c3aed]
tags:
  - grok
  - xai
  - ai
  - cli
categories:
  - IA
intro: |
  [Grok CLI](https://www.grokcli.dev/docs/) é uma ferramenta de terminal com IA conversacional alimentada pelos modelos Grok da X.AI, com operações de arquivos, análise de código, Plan Mode e suporte a MCP.
plugins:
  - copyCode
---

## Primeiros passos {.cols-3}

### Início rápido {.row-span-2}

```bash
# Run immediately (no install)
$ GROK_API_KEY=your_key npx -y grok-cli-hurry-mode@latest

# Install globally
$ npm install -g grok-cli-hurry-mode@latest

# Start interactive session
$ grok

# Send initial message
$ grok "Help me understand this project"

# Headless / non-interactive mode
$ grok -p "explain the auth module"

# Use a specific model
$ grok -m grok-4-latest "refactor this file"

# Set working directory
$ grok -d /path/to/project

# Set max tool rounds
$ grok --max-tool-rounds 100 "rewrite the API"
```

### Autenticação

| Método        | Como                                               |
| ------------- | -------------------------------------------------- |
| Variável de ambiente | `export GROK_API_KEY=your_key`             |
| Inline (npx)  | `GROK_API_KEY=key npx grok-cli-hurry-mode@latest` |
| Flag da CLI   | `grok --api-key your_key`                         |
| Arquivo de configurações | Defina `apiKey` em `~/.grok/user-settings.json` |

Obtenha sua API key em [console.x.ai](https://console.x.ai).

Persista no perfil do shell:

```bash
echo 'export GROK_API_KEY=your_key' >> ~/.zshrc
source ~/.zshrc
```

### Métodos de instalação

| Método            | Comando                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| npm (recomendado) | `npm install -g grok-cli-hurry-mode@latest`                                                           |
| npx (sem instalar) | `npx grok-cli-hurry-mode@latest`                                                                     |
| yarn              | `yarn global add grok-cli-hurry-mode@latest`                                                          |
| pnpm              | `pnpm add -g grok-cli-hurry-mode@latest`                                                              |
| bun               | `bun add -g grok-cli-hurry-mode@latest`                                                               |
| Script automático | `curl -fsSL https://raw.githubusercontent.com/hinetapora/grok-cli-hurry-mode/main/install.sh \| bash` |

**Requisitos:** Node.js (último LTS), npm/yarn/pnpm, conexão com a internet.

### Modelos de IA

| Modelo             | Descrição                     |
| ------------------ | ----------------------------- |
| `grok-code-fast-1` | Padrão — otimizado para código |
| `grok-4-latest`    | Mais recente, recursos aprimorados |
| `grok-3-fast`      | Rápido, uso geral             |

Substitua com `-m`, a env var `GROK_MODEL` ou `~/.grok/user-settings.json`.

Base URL personalizada: `-u https://api.x.ai/v1` ou `GROK_BASE_URL`.

## Opções da CLI {.cols-2}

### Todas as opções {.row-span-2}

| Opção                   | Alias | Descrição                      |
| ----------------------- | ----- | ------------------------------ |
| `--api-key <key>`       | `-k`  | API key do Grok                |
| `--base-url <url>`      | `-u`  | URL base da API                |
| `--model <model>`       | `-m`  | Modelo a usar                  |
| `--prompt <text>`       | `-p`  | Prompt do modo headless        |
| `--directory <dir>`     | `-d`  | Define o diretório de trabalho |
| `--max-tool-rounds <n>` |       | Máximo de rodadas de ferramentas (padrão: 400) |
| `--version`             | `-V`  | Mostra a versão                |
| `--help`                | `-h`  | Mostra a ajuda                 |

**Variáveis de ambiente:**

| Variável        | Finalidade          |
| --------------- | ------------------- |
| `GROK_API_KEY`  | API key (obrigatória) |
| `GROK_MODEL`    | Modelo padrão       |
| `GROK_BASE_URL` | Endpoint personalizado da API |

### Subcomandos

```bash
# AI-generated git commit and push
$ grok git commit-and-push
$ grok git commit-and-push -d /path/to/repo
$ grok git commit-and-push -m grok-4-latest

# MCP server management
$ grok mcp add <name>
$ grok mcp add-json <name> <json>
$ grok mcp remove <name>
$ grok mcp list
$ grok mcp test <name>
```

`git commit-and-push` aceita as mesmas flags `-d`, `-k`, `-u`, `-m`, `--max-tool-rounds` do comando principal.

## Modo interativo {.cols-3}

### Atalhos de teclado {.row-span-2}

| Tecla             | Ação                             |
| ----------------- | -------------------------------- |
| `Shift+Tab` twice | Entra no Plan Mode               |
| `Shift+Tab`       | Alterna o modo de edição automática |
| `Ctrl+I`          | Tooltip de contexto (informações do workspace) |
| `Ctrl+C`          | Limpa a entrada atual            |
| `Esc`             | Interrompe a operação atual      |
| `↑` / `↓`         | Navega no histórico de entrada   |

{.shortcuts}

**Modo de edição automática:** edição de arquivos sem as mãos — a IA edita arquivos sem prompts de confirmação.

**Tooltip de contexto (`Ctrl+I`):** mostra estatísticas do projeto, branch git, pressão de memória e informações da sessão.

### Slash commands

| Comando              | Descrição                     |
| -------------------- | ----------------------------- |
| `/help`              | Mostra os comandos disponíveis |
| `/clear`             | Limpa a tela do terminal      |
| `/models`            | Lista os modelos disponíveis  |
| `/exit`              | Encerra a aplicação           |
| `/compact`           | Comprime o contexto da conversa |
| `/commit-and-push`   | Mensagem de commit por IA e push |
| `/init-agent`        | Inicializa a documentação do agente |
| `/docs`              | Abre a documentação           |
| `/readme`            | Gera o README                 |
| `/api-docs`          | Gera a documentação da API    |
| `/changelog`         | Gera o changelog              |
| `/comments`          | Adiciona comentários ao código |
| `/update-agent-docs` | Atualiza a documentação do agente |
| `/heal`              | Verificação de autocorreção do sistema |
| `/guardrails`        | Mostra o status dos guardrails |

### Arquivos de configuração

| Arquivo                      | Finalidade             |
| ---------------------------- | ---------------------- |
| `~/.grok/user-settings.json` | Configurações globais do usuário |
| `.grok/settings.json`        | Configurações no nível do projeto |
| `.grok/GROK.md`              | Contexto do projeto para a IA |

**Exemplo de user-settings.json:**

```json
{
  "apiKey": "your_api_key",
  "model": "grok-code-fast-1",
  "baseURL": "https://api.x.ai/v1"
}
```

**Crie o contexto do projeto:**

```bash
# Add custom context for Plan Mode
$ mkdir -p .grok
$ echo "# Project Rules" > .grok/GROK.md
```

## Ferramentas {.cols-3}

### Ferramentas principais {.row-span-2}

| Ferramenta | Finalidade                                 |
| ---------- | ------------------------------------------ |
| **Read**  | Lê arquivos — texto, imagens, PDFs, notebooks |
| **Write** | Cria ou sobrescreve arquivos               |
| **Edit**  | Localização e substituição precisa de strings |
| **Bash**  | Executa comandos de shell                  |
| **Grep**  | Busca com regex via ripgrep                |
| **Glob**  | Correspondência de padrões de arquivos     |
| **LS**    | Listagem de diretórios                     |

**Read** oferece suporte a offset/limit de linhas para arquivos grandes e exibe imagens visualmente.

**Edit** oferece suporte a:

- Substituição exata de string
- Padrões regex
- Substituição única ou de todas as ocorrências

**Bash** oferece suporte a:

- Captura de stdout/stderr
- Processos em segundo plano
- Gerenciamento de timeout
- Tratamento de variáveis de ambiente

### Ferramentas avançadas

| Ferramenta    | Finalidade                            |
| ------------- | ------------------------------------- |
| **MultiEdit** | Edições atômicas em vários arquivos com rollback |
| **WebFetch**  | Recupera e interpreta conteúdo web    |
| **WebSearch** | Busca na web em tempo real            |
| **Task**      | Delega para subagentes especializados |
| **TodoWrite** | Acompanhamento de tarefas e progresso |

Operações do **MultiEdit**: create, edit, delete, rename, move — todas em uma única transação atômica.

**Task** (delegação para subagentes):

- Processamento otimizado para tokens
- Pesquisa e análise complexas
- Conclusão autônoma com relatório

**WebFetch:** conversão de HTML → Markdown com extração de conteúdo por IA e cache.

### Ferramentas de IDE

| Ferramenta       | Finalidade                      |
| ---------------- | ------------------------------- |
| **NotebookEdit** | Edita células de notebooks Jupyter |
| **BashOutput**   | Transmite a saída de processos em segundo plano |
| **KillBash**     | Encerra processos em segundo plano |

A IA **seleciona automaticamente** a combinação certa de ferramentas para sua solicitação — sem necessidade de invocação manual.

## Plan Mode {.cols-3}

### Ativando o Plan Mode {.row-span-2}

Pressione **`Shift+Tab` duas vezes** em rápida sucessão:

```
🎯 Plan Mode: Analysis
📊 Exploring codebase and gathering insights...
```

**Ou use o modo headless:**

```bash {.wrap}
$ grok -p "analyze changes in this PR and create plan"
$ grok -p "check if changes follow architecture guidelines"
```

**O que é bloqueado no Plan Mode:**

- Todas as operações de escrita/edição de arquivos
- Comandos bash destrutivos
- Qualquer operação que altere estado

**O que é permitido:**

- Ler arquivos (`ls`, `cat`, `grep`)
- Busca e fetch na web
- Análise da estrutura do projeto
- Geração de plano (grava apenas na saída do plano)

**Sair do Plan Mode:**

- `Enter` — confirma e executa o plano
- `Esc` — sai sem executar

### Fases do Plan Mode

| Fase            | Duração         | O que acontece                   |
| --------------- | --------------- | -------------------------------- |
| 🔍 Analysis     | 1–5 sec         | Tipo de projeto, estrutura, deps |
| 🧠 Strategy     | 5–15 sec        | A IA gera o plano de implementação |
| 📋 Presentation | 1–2 sec         | Formata o plano para revisão     |
| ✅ Approval     | User-controlled | Revisa, confirma ou refina       |

{.show-header}

O Plan Mode analisa: tipo de projeto (Node/Python/React/etc.), estrutura de diretórios, componentes principais, dependências, entry points, módulos e padrões arquiteturais.

### Dicas do Plan Mode

Use o Plan Mode para:

- Features complexas que envolvem vários arquivos
- Refatoração em larga escala
- Explorar codebases desconhecidos
- Avaliação de riscos antes de mudanças

**Dicas:**

- Seja específico sobre o que você quer
- Revise o plano antes de aprovar
- Use `/heal` se algo quebrar
- Crie `.grok/GROK.md` para contexto personalizado

## Servidores MCP {.cols-2}

### Gerenciando servidores MCP {.row-span-2}

```bash
# Add stdio server
$ grok mcp add myserver \
  -t stdio \
  -c npx \
  -a -y my-mcp-package

# Add HTTP/SSE server
$ grok mcp add myserver \
  -t http \
  -u https://api.example.com/mcp

# Add with env vars and headers
$ grok mcp add myserver \
  -t http \
  -u https://api.example.com/mcp \
  -e API_KEY=secret \
  -h Authorization="Bearer token"

# Add from raw JSON
$ grok mcp add-json myserver \
  '{"transport":{"type":"stdio","command":"npx","args":["-y","pkg"]}}'

# List all servers
$ grok mcp list

# Test connection
$ grok mcp test myserver

# Remove a server
$ grok mcp remove myserver
```

### Schema de configuração do MCP

**Em `.grok/settings.json`:**

```json
{
  "mcpServers": [
    {
      "name": "my-server",
      "transport": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "my-mcp-package"],
        "env": { "KEY": "value" }
      }
    },
    {
      "name": "remote-server",
      "transport": {
        "type": "http",
        "url": "https://api.example.com/mcp",
        "headers": { "Authorization": "Bearer $TOKEN" }
      }
    }
  ]
}
```

**Tipos de transporte:**

| Tipo              | Quando usar               |
| ----------------- | ------------------------- |
| `stdio`           | Subprocesso local (padrão) |
| `http`            | Endpoint HTTP remoto      |
| `sse`             | Server-Sent Events        |
| `streamable_http` | HTTP em streaming         |

### Opções de add server

| Opção                | Alias | Descrição                            |
| -------------------- | ----- | ------------------------------------ |
| `--transport <type>` | `-t`  | stdio / http / sse / streamable_http |
| `--command <cmd>`    | `-c`  | Executável (apenas stdio)            |
| `--args [args...]`   | `-a`  | Argumentos do comando (apenas stdio) |
| `--url <url>`        | `-u`  | URL do servidor (http/sse)           |
| `--headers [kv...]`  | `-h`  | Headers HTTP (`key=value`)           |
| `--env [kv...]`      | `-e`  | Env vars (`key=value`)               |

## Solução de problemas {.cols-3}

### Problemas comuns {.row-span-2}

**API key não encontrada:**

```bash
# Verify env var is set
$ echo $GROK_API_KEY

# Or set inline
$ GROK_API_KEY=key grok "hello"
```

**Comando não encontrado após a instalação:**

```bash {.wrap}
# Add npm global bin to PATH
$ echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc
$ which grok
```

**Erros de permissão na instalação:**

```bash
# Use sudo (not recommended) or node version manager
$ npm install -g grok-cli-hurry-mode --force

# Or use nvm/fnm without sudo
$ nvm use --lts
$ npm install -g grok-cli-hurry-mode
```

**Instalação travada / em cache:**

```bash
$ pkill -f grok
$ npm uninstall -g grok-cli-hurry-mode
$ npm cache clean --force
$ npm install -g grok-cli-hurry-mode@latest
```

### Env vars úteis

| Variável        | Descrição              |
| --------------- | ---------------------- |
| `GROK_API_KEY`  | API key (obrigatória)  |
| `GROK_MODEL`    | Substitui o modelo padrão |
| `GROK_BASE_URL` | Endpoint personalizado da API |

**API endpoint padrão:** `https://api.x.ai/v1`

### Git Smart Push

O sistema de release automatizado cria commits de version bump, então sempre use o smart push para evitar conflitos:

```bash
# Correct — handles auto version bumps
$ npm run smart-push
$ git pushup

# Wrong — causes "fetch first" errors
$ git push origin main
```

## Veja também {.cols-1}

- [Documentação oficial](https://www.grokcli.dev/docs/) _(grokcli.dev)_
- [Guia do Plan Mode](https://www.grokcli.dev/docs/guides/plan-mode) _(grokcli.dev)_
- [Visão geral das ferramentas](https://www.grokcli.dev/docs/tools/overview) _(grokcli.dev)_
- [Visão geral da arquitetura](https://www.grokcli.dev/docs/architecture/overview) _(grokcli.dev)_
- [Repositório no GitHub](https://github.com/hinetapora/grok-cli-hurry-mode) _(github.com)_
- [Console da API xAI](https://console.x.ai) _(console.x.ai)_
