---
title: Codex CLI
date: 2026-04-03 10:00:00
background: bg-[#10a37f]
tags:
  - CLI
  - AI
  - OpenAI
  - coding-agent
categories:
  - IA
intro: |
  O OpenAI Codex CLI (v0.116+) é um agente de programação com IA de código aberto que lê, edita e executa código diretamente no seu terminal. Consulte a [documentação oficial](https://developers.openai.com/codex/cli) _(developers.openai.com)_.
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Instalar e executar {.row-span-2}

#### npm (recomendado)

```bash
$ npm install -g @openai/codex
$ npm install -g @openai/codex@latest   # upgrade
```

#### Homebrew (macOS)

```bash
$ brew install codex
```

#### Primeira execução

```bash
$ codex                          # launch interactive TUI
$ codex "Explain this codebase"  # with initial prompt
```

Na primeira execução, será solicitado que você faça login via ChatGPT ou com uma API key.

#### Completions do shell

```bash
# Zsh – add to ~/.zshrc
$ eval "$(codex completion zsh)"

# Bash – add to ~/.bashrc
$ eval "$(codex completion bash)"

# Fish
$ codex completion fish | source
```

### Suporte a plataformas

| Plataforma       | Status       |
| ---------------- | ------------ |
| macOS            | Estável      |
| Linux            | Estável      |
| Windows (WSL)    | Recomendado  |
| Windows (native) | Experimental |

{.show-header}

### Autenticação

```bash
$ codex login                # ChatGPT OAuth
$ codex login --device-auth  # device flow
# Pipe API key from env
$ printenv OPENAI_API_KEY | codex login --with-api-key
$ codex login status         # check auth state
$ codex logout               # remove credentials
```

## Subcomandos {.cols-3}

### Referência de comandos {.col-span-2 .row-span-2}

| Comando            | Alias     | Status       | Descrição                                       |
| ------------------ | --------- | ------------ | ----------------------------------------------- |
| `codex`            |           | Estável      | Abre a TUI interativa                           |
| `codex exec`       | `codex e` | Estável      | Executa de forma não interativa (scripting)     |
| `codex review`     |           | Estável      | Revisão de código não interativa                |
| `codex resume`     |           | Estável      | Retoma uma sessão anterior                      |
| `codex fork`       |           | Estável      | Faz fork de uma sessão em uma nova thread       |
| `codex apply`      | `codex a` | Estável      | Aplica localmente o diff de uma tarefa do Cloud |
| `codex login`      |           | Estável      | Autentica o Codex                               |
| `codex logout`     |           | Estável      | Remove as credenciais armazenadas               |
| `codex completion` |           | Estável      | Gera os completions do shell                    |
| `codex features`   |           | Estável      | Gerencia feature flags                          |
| `codex app`        |           | Estável      | Abre o app desktop do Codex                     |
| `codex mcp`        |           | Experimental | Gerencia servidores MCP                         |
| `codex mcp-server` |           | Experimental | Executa o Codex como servidor MCP               |
| `codex cloud`      |           | Experimental | Navega e executa tarefas do Cloud               |
| `codex sandbox`    |           | Experimental | Executa comandos dentro do sandbox              |
| `codex debug`      |           | Experimental | Ferramentas de depuração                        |

{.show-header}

### Exec (não interativo)

```bash
# Basic non-interactive run
$ codex exec "Fix the race condition"
$ codex e "Add unit tests for utils"

# Prompt from stdin
$ echo "Explain main.go" | codex exec -

# Prompt-plus-stdin (0.118+): pipe data AND pass a prompt
$ cat error.log | codex exec "Diagnose this log" -

# Output options
$ codex exec --json "Audit security"
$ codex exec -o last.txt "Summarize"

# Resume a previous exec session
$ codex exec resume --last "Fix the bugs"
$ codex exec resume <SESSION_ID> "Implement"
```

## Opções globais {.cols-2}

### Todas as flags {.row-span-3}

| Flag                      | Valores         | Descrição                                           |
| ------------------------- | --------------- | --------------------------------------------------- |
| `-m, --model`             | string          | Substituição do modelo (ex.: `gpt-5.4`)             |
| `-s, --sandbox`           | veja abaixo     | Política de sandbox                                 |
| `-a, --ask-for-approval`  | veja abaixo     | Política de aprovação                               |
| `--full-auto`             | flag            | workspace-write + on-request                        |
| `--yolo`                  | flag            | Ignora todas as aprovações/sandbox                  |
| `-i, --image`             | path            | Anexa imagem(ns) ao prompt inicial                  |
| `-c, --config`            | `key=val`       | Substitui um valor de configuração                  |
| `-C, --cd`                | path            | Diretório de trabalho do agente                     |
| `-p, --profile`           | string          | Nome do perfil de configuração                      |
| `--search`                | flag            | Habilita a pesquisa na web ao vivo                  |
| `--add-dir`               | path            | Concede acesso de escrita a um diretório extra      |
| `--oss`                   | flag            | Usa provedor OSS local                              |
| `--local-provider`        | lmstudio/ollama | Especifica o provedor OSS                           |
| `--enable`                | feature         | Habilita uma feature flag                           |
| `--disable`               | feature         | Desabilita uma feature flag                         |
| `--no-alt-screen`         | flag            | Modo TUI inline (sem alt screen)                    |
| `--remote`                | ws://host:port  | Conecta a um app server remoto                      |
| `--remote-auth-token-env` | ENV_VAR         | Variável de ambiente do bearer token para WS remoto |
| `-V, --version`           |                 | Exibe a versão                                      |
| `-h, --help`              |                 | Exibe a ajuda                                       |

{.show-header}

### Exemplos de uso

```bash {.wrap}
# Specify model
$ codex -m gpt-5.4 "Refactor the auth module"

# Auto mode (low friction)
$ codex --full-auto "Run tests and fix failures"

# Attach a screenshot
$ codex -i mockup.png "Implement this UI"

# Override config inline
$ codex -c model="gpt-5.4-mini" "Quick scan"

# Live web search
$ codex --search "Find the latest async syntax"

# Set working directory
$ codex -C ~/projects/api "Review this codebase"
```

## Sandbox e aprovações {.cols-3}

### Modos de sandbox

| Modo                 | Descrição                                    |
| -------------------- | -------------------------------------------- |
| `read-only`          | Apenas inspeção, sem edições sem aprovação   |
| `workspace-write`    | Edita o workspace + executa comandos locais  |
| `danger-full-access` | Sem restrições (use em ambientes reforçados) |

### Políticas de aprovação

| Política     | Descrição                                               |
| ------------ | ------------------------------------------------------- |
| `untrusted`  | Pergunta antes de todos os comandos não confiáveis      |
| `on-request` | Pergunta ao sair dos limites do sandbox                 |
| `never`      | Nunca pergunta; todos os comandos rodam automaticamente |

### Presets {.primary}

| Preset        | Configuração equivalente         |
| ------------- | -------------------------------- |
| `--full-auto` | `workspace-write` + `on-request` |
| `--yolo`      | Sem sandbox + Sem aprovações     |

Use `/permissions` na TUI para mudar de modo no meio da sessão.

## Comandos de barra {.cols-3}

### Controle de sessão {.row-span-2}

| Comando           | Descrição                                |
| ----------------- | ---------------------------------------- |
| `/model`          | Alterna o modelo / esforço de raciocínio |
| `/fast`           | Alterna o modo Fast do GPT-5.4           |
| `/permissions`    | Ajusta o modo de aprovação               |
| `/personality`    | Define o estilo de resposta              |
| `/plan`           | Entra no modo de planejamento            |
| `/status`         | Mostra modelo, tokens, config            |
| `/compact`        | Resume para liberar contexto             |
| `/clear`          | Limpa o chat + começa do zero            |
| `/new`            | Novo chat, mantém a sessão da CLI        |
| `/fork`           | Faz fork da conversa atual               |
| `/resume`         | Retoma a sessão salva                    |
| `/exit` / `/quit` | Sai da CLI                               |

### Revisão e código

| Comando    | Descrição                           |
| ---------- | ----------------------------------- |
| `/review`  | Abre o revisor de código            |
| `/diff`    | Mostra o diff do Git                |
| `/copy`    | Copia a saída mais recente do Codex |
| `/mention` | Anexa um arquivo à conversa         |
| `/init`    | Gera o scaffold do AGENTS.md        |

### Ferramentas e depuração

| Comando                 | Descrição                                 |
| ----------------------- | ----------------------------------------- |
| `/agent`                | Alterna a thread do agente ativo          |
| `/mcp`                  | Lista as ferramentas MCP                  |
| `/apps`                 | Navega pelos apps de conector             |
| `/experimental`         | Alterna recursos experimentais            |
| `/statusline`           | Configura o rodapé da TUI                 |
| `/ps`                   | Mostra os terminais em segundo plano      |
| `/sandbox-add-read-dir` | Adiciona diretório legível (Windows)      |
| `/feedback`             | Envia logs para os mantenedores           |
| `/plugins`              | Navega e gerencia plugins                 |
| `/title`                | Define o título do terminal para a sessão |
| `/debug-config`         | Exibe diagnósticos de configuração        |
| `/logout`               | Sai do Codex                              |

## Modelos {.cols-3}

### Modelos disponíveis {.col-span-2}

| Modelo                | Velocidade | Melhor para                                   |
| --------------------- | ---------- | --------------------------------------------- |
| `gpt-5.4`             | ★★★        | Padrão – programação + raciocínio + workflows |
| `gpt-5.4-mini`        | ★★★★★      | Subagentes, tarefas leves, limites maiores    |
| `gpt-5.3-codex`       | ★★★★       | Engenharia de software complexa               |
| `gpt-5.3-codex-spark` | ★★★★★      | Iteração quase instantânea (somente Pro)      |

{.show-header}

### Selecionar um modelo

```bash
$ codex -m gpt-5.4 "Your prompt"
$ codex -m gpt-5.4-mini "Quick task"
$ codex --oss    # local Ollama / LM Studio
# Mid-session: type /model in the TUI
```

## Configuração {.cols-2}

### Chaves do config.toml {.row-span-2}

```toml
# ~/.codex/config.toml

# Model settings
model = "gpt-5.4"
model_provider = "openai"
model_reasoning_effort = "medium"  # low | medium | high

# Sandbox & approvals
sandbox_mode = "workspace-write"
approval_policy = "on-request"

# Web search: cached | live | disabled
web_search = "cached"

# Review model override
review_model = "gpt-5.4"

# TUI appearance
[tui]
theme = "dark"
alternate_screen = true

# Profile example
[profile.ci]
model = "gpt-5.4-mini"
approval_policy = "never"
sandbox_mode = "workspace-write"
```

Use `-p ci` para ativar um perfil.

### Feature flags

```bash
$ codex features list
$ codex features enable unified_exec
$ codex features disable shell_snapshot

# Per-session (not persisted)
$ codex --enable unified_exec
$ codex --disable shell_snapshot
```

### Locais de configuração

| Arquivo                | Finalidade                     |
| ---------------------- | ------------------------------ |
| `~/.codex/config.toml` | Padrões globais                |
| `~/.codex/AGENTS.md`   | Instruções pessoais            |
| `~/.agents/skills/`    | Skills pessoais                |
| `.agents/skills/`      | Skills no nível do repositório |
| `AGENTS.md`            | Instruções do repositório      |

## Personalização {.cols-3}

### AGENTS.md {.row-span-2}

Instruções persistentes do repositório, versionadas junto com o código:

```markdown
## Build & test commands

- Install: `npm install`
- Test: `npm test`
- Lint: `npm run lint`

## Conventions

- TypeScript strict mode
- No PII in logs
- Auth middleware on all routes

## Review guidelines

- Flag unhandled promise rejections
```

Quando adicionar regras:

- Erros repetidos do agente
- Feedback recorrente de revisão de PR
- Marque `@codex add to AGENTS.md` no GitHub

### Skills

Workflows reutilizáveis empacotados como `SKILL.md`:

```
my-skill/
  SKILL.md      ← metadata + instructions
  scripts/      ← optional helper scripts
  references/   ← optional documentation
  assets/       ← optional templates
```

Exemplo de `SKILL.md`:

```markdown
---
name: commit
description: Stage and commit changes
  in semantic groups.
---

1. Stage files in logical groups.
2. Group: feat → test → docs → chore
3. Write concise commit messages.
```

### Servidores MCP

```bash
# Add a stdio server
$ codex mcp add myserver -- npx my-mcp-server

# Add an HTTP server
$ codex mcp add myserver \
    --url https://api.example.com/mcp

# With auth token
$ codex mcp add myserver \
    --url https://api.example.com/mcp \
    --bearer-token-env-var MY_TOKEN

# List / remove
$ codex mcp list
$ codex mcp remove myserver

# Run Codex itself as MCP server
$ codex mcp-server
```

## Gerenciamento de sessões {.cols-3}

### Retomar sessões

```bash
$ codex resume           # session picker
$ codex resume --last    # most recent session
$ codex resume --all     # across all directories
$ codex resume <ID> "Continue fixing tests"
```

Sessões armazenadas em `~/.codex/sessions/`

### Fazer fork de uma sessão

```bash
$ codex fork             # fork from picker
$ codex fork --last      # fork most recent
$ codex fork <SESSION_ID> "New direction"
```

O fork preserva o transcript original enquanto inicia um novo branch.

### Entradas de imagem

```bash
# Single image
$ codex -i screenshot.png "Fix this error"

# Multiple images
$ codex --image img1.png,img2.jpg "Compare"

# Or drag images into the TUI composer
```

Formatos suportados: PNG, JPEG e outros formatos comuns.

## Cloud e GitHub {.cols-3}

### Tarefas do Cloud {.col-span-2}

```bash
# Browse cloud environments
$ codex cloud

# Submit a cloud task
$ codex cloud exec --env <ENV_ID> "Fix bug"

# With multiple attempts (best-of-N)
$ codex cloud exec --env <ENV_ID> \
    --attempts 3 "Write failing tests"

# List recent tasks
$ codex cloud list

# Check task status
$ codex cloud status <TASK_ID>

# Show diff for a task
$ codex cloud diff <TASK_ID>

# Apply diff to local working tree
$ codex apply <TASK_ID>
```

### Integração com o GitHub

```
# In a PR comment – trigger code review:
@codex review

# Custom focus:
@codex review for security regressions

# Delegate any task using PR as context:
@codex fix the CI failures
@codex add tests for the new endpoint
```

Habilite em Codex Settings → Code review → seu repositório. Ative Automatic reviews para revisar cada novo PR.

## Workflows com subagentes {.cols-2}

### Guia de subagentes {.row-span-2}

Delegue trabalho ruidoso para agentes em paralelo e evite **context pollution** e **context rot**:

```
codex "Review this branch with parallel agents.
Spawn one for security risks, one for test gaps,
and one for maintainability. Wait for all three,
then summarize findings with file references."
```

- Use para: exploração, testes, triagem, análise de logs
- Evite trabalho paralelo com muitas escritas (conflitos)
- Cada subagente consome tokens extras

**Guia de modelos para subagentes:**

| Papel                         | Modelo         | Raciocínio |
| ----------------------------- | -------------- | ---------- |
| Coordenador principal         | `gpt-5.4`      | medium     |
| Exploração rápida             | `gpt-5.4-mini` | low        |
| Revisão de segurança / lógica | `gpt-5.4`      | high       |

{.show-header}

### Esforço de raciocínio

| Nível    | Use quando                                |
| -------- | ----------------------------------------- |
| `high`   | Lógica complexa, auditorias de segurança  |
| `medium` | Tarefas gerais (padrão)                   |
| `low`    | Tarefas simples ou com foco em velocidade |

Defina em `config.toml`:

```toml
model_reasoning_effort = "medium"
```

Ou inline: `-c model_reasoning_effort="high"`

## Veja também {.cols-1}

- [Documentação oficial do Codex](https://developers.openai.com/codex/cli) _(developers.openai.com)_
- [Codex CLI GitHub](https://github.com/openai/codex) _(github.com)_
- [Preços do Codex](https://developers.openai.com/codex/pricing) _(developers.openai.com)_
- [Guia de personalização](https://developers.openai.com/codex/concepts/customization) _(developers.openai.com)_
- [Boas práticas de prompting](https://developers.openai.com/codex/prompting) _(developers.openai.com)_
- [Workflows e exemplos](https://developers.openai.com/codex/workflows) _(developers.openai.com)_
