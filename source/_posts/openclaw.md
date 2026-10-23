---
title: OpenClaw
date: 2026-04-03 10:00:00
background: bg-[#cc2200]
tags:
  - whatsapp
  - telegram
  - ai-gateway
  - automation
categories:
  - IA
intro: |
  [OpenClaw](https://openclaw.ai) is a self-hosted AI gateway that bridges WhatsApp, Telegram, Discord, iMessage, and more to AI coding agents.
plugins:
  - copyCode
---

## Primeiros passos

### Configuração rápida {.row-span-2}

#### 1. Instale

```bash
# macOS / Linux / WSL2
curl -fsSL https://openclaw.ai/install.sh | bash
# or via npm
npm install -g openclaw@latest
```

#### 2. Faça o onboarding e instale o serviço

```bash
openclaw onboard --install-daemon
```

#### 3. Verifique o gateway

```bash
openclaw gateway status
```

#### 4. Abra o dashboard

```bash
openclaw dashboard
# Local default: http://127.0.0.1:18789/
```

### Introdução

- [Docs](https://docs.openclaw.ai) _(docs.openclaw.ai)_
- [GitHub](https://github.com/openclaw/openclaw) _(github.com)_
- [Discord](https://discord.gg/openclaw) _(discord.gg)_
- [Releases](https://github.com/openclaw/openclaw/releases) _(github.com)_

Auto-hospedado, com licença MIT e multicanal

### Instalação alternativa

```bash {.wrap}
# From source
git clone https://github.com/openclaw/openclaw.git
cd openclaw && pnpm install && pnpm build
pnpm link --global
```

### Verifique a instalação

```bash
openclaw --version  # confirm CLI available
openclaw doctor     # health check + fixes
openclaw status     # channels + gateway status
```

### Flags globais

| Flag                 | Descrição                      |
| -------------------- | ------------------------------ |
| `--dev`              | Perfil de dev, porta 19001     |
| `--profile <name>`   | Perfil isolado nomeado         |
| `--container <name>` | Executa dentro de um container |
| `--log-level <l>`    | Nível de log (silent…trace)    |
| `--no-color`         | Desativa as cores ANSI         |

{.bold-first}

## Gateway {.cols-2}

### Gerenciamento do serviço {.row-span-2}

```bash
# Install as system service
openclaw gateway install
# Start / stop / restart
openclaw gateway start
openclaw gateway stop
openclaw gateway restart
# Uninstall service
openclaw gateway uninstall
```

#### Status e saúde

```bash
openclaw gateway status       # service status + probe
openclaw gateway status --deep
openclaw gateway status --json
openclaw health               # fetch health from gateway
openclaw logs --follow        # tail gateway logs
```

### Opções de inicialização

```bash
openclaw gateway run             # foreground
openclaw gateway run --port 19001
openclaw gateway run --force     # kill existing listener
openclaw gateway run --verbose   # verbose to stdout
openclaw gateway run --bind lan  # bind to LAN
openclaw gateway run --auth token --token <t>
```

### Modos de hot reload

| `gateway.reload.mode` | Comportamento                                                        |
| --------------------- | -------------------------------------------------------------------- |
| `hybrid` _(default)_  | Aplica alterações seguras em tempo real e reinicia quando necessário |
| `hot`                 | Aplica apenas alterações seguras em tempo real                       |
| `restart`             | Reinicia em qualquer alteração que exija reload                      |
| `off`                 | Sem recarregamento de config                                         |

{.show-header}

### Acesso remoto

```bash
# SSH tunnel (recommended fallback)
ssh -N -L 18789:127.0.0.1:18789 user@host
# then connect to ws://127.0.0.1:18789

# Tailscale (preferred for always-on)
openclaw gateway run --tailscale serve
```

### API compatível com OpenAI

| Endpoint                    | Finalidade                 |
| --------------------------- | -------------------------- |
| `GET /v1/models`            | Lista agentes como modelos |
| `POST /v1/chat/completions` | Conversa com o agente      |
| `POST /v1/responses`        | Resposta nativa do agente  |
| `POST /v1/embeddings`       | Pipeline de embedding      |

Todos os endpoints rodam na porta principal do gateway.

## Canais {.cols-2}

### Conecte canais {.row-span-2}

```bash
# List + status
openclaw channels list
openclaw channels status
openclaw channels status --probe

# Login (QR/OAuth flow)
openclaw channels login --channel whatsapp
openclaw channels login --channel telegram

# Add with token (non-interactive)
openclaw channels add \
  --channel telegram --token <BOT_TOKEN>

# Logout / remove
openclaw channels logout --channel whatsapp
openclaw channels remove --channel telegram

# Logs + capabilities
openclaw channels logs
openclaw channels capabilities
```

#### Resolva os IDs de contato

```bash
openclaw directory self --channel telegram
openclaw directory peers list --channel slack
openclaw directory groups list --channel discord
```

### Canais suportados {.col-span-2}

#### Integrados

| Canal       | Observações                         |
| ----------- | ----------------------------------- |
| WhatsApp    | Pareamento por QR via Baileys       |
| Telegram    | Bot API — configuração mais rápida  |
| Discord     | Bot API + Gateway, DMs + servidores |
| BlueBubbles | iMessage via servidor macOS         |
| Signal      | Via signal-cli                      |
| Slack       | Apps de workspace com Bolt SDK      |
| Google Chat | Webhook HTTP                        |
| IRC         | IRC clássico, DMs + canais          |
| QQ Bot      | QQ Bot API                          |
| WebChat     | UI de chat integrada no navegador   |

{.show-header}

#### Via plugin (`openclaw plugins install`)

- Matrix
- Mattermost
- Microsoft Teams
- LINE
- Nextcloud Talk
- Feishu / Lark
- Nostr
- Synology Chat
- Twitch
- WeChat
- Zalo / Zalo Personal
- Voice Call (Plivo/Twilio)

{.cols-3 .marker-none}

## Mensagens {.cols-2}

### Envie mensagens {.row-span-2}

```bash
# Basic text
openclaw message send \
  --target +15555550123 --message "Hello"

# Telegram by username
openclaw message send \
  --channel telegram --target @user \
  --message "Hello"

# Discord channel
openclaw message send \
  --channel discord --target channel:123 \
  --message "Hello"

# With media
openclaw message send \
  --target +15555550123 \
  --media photo.jpg --message "Look"

# Silent (no notification)
openclaw message send \
  --target +15555550123 \
  --message "Quiet" --silent

# Reply to a message
openclaw message send \
  --target +15555550123 \
  --message "Reply" --reply-to <msg-id>
```

### Leia mensagens

```bash
openclaw message read \
  --channel whatsapp --target +15555550123

openclaw message read \
  --channel discord --target channel:123 \
  --limit 20 --json
```

### Ações em mensagens

```bash
# Broadcast to multiple targets
openclaw message broadcast \
  --message "Alert" --targets @u1 @u2

# React to a message
openclaw message react \
  --channel discord --target 123 \
  --message-id 456 --emoji "✅"

# Pin / unpin
openclaw message pin \
  --channel discord --target 123 \
  --message-id 456

# Edit / delete
openclaw message edit --message-id 456
openclaw message delete --message-id 456
```

## Agentes e sessões {.cols-3}

### Execute um agente {.row-span-2}

```bash
# New session
openclaw agent \
  --to +15555550123 --message "Hello"

# Named agent
openclaw agent \
  --agent ops --message "Status"

# With thinking level
openclaw agent \
  --to +15555550123 \
  --message "Analyze" --thinking high

# Deliver reply back to channel
openclaw agent \
  --to +15555550123 \
  --message "Summary" --deliver

# Cross-channel delivery
openclaw agent \
  --agent ops --message "Report" \
  --deliver \
  --reply-channel slack \
  --reply-to "#reports"

# JSON output + verbose
openclaw agent \
  --to +15555550123 \
  --message "Trace" --verbose on --json
```

### Gerencie agentes

```bash
openclaw agents list
openclaw agents list --bindings
openclaw agents add work
openclaw agents delete work
openclaw agents bind
openclaw agents unbind
openclaw agents bindings
openclaw agents set-identity \
  --agent work --name "Work Bot"
```

### Sessões

```bash
openclaw sessions              # all sessions
openclaw sessions --agent work
openclaw sessions --all-agents
openclaw sessions --active 120 # last 2h
openclaw sessions --json
openclaw sessions cleanup
```

### Prioridade de roteamento {.col-span-2}

| Prioridade     | Tipo de correspondência             |
| -------------- | ----------------------------------- |
| 1 (mais alta)  | `peer` — ID exato de DM/grupo/canal |
| 2              | `parentPeer` — herança de thread    |
| 3              | `guildId` + roles (Discord)         |
| 4              | `guildId` (Discord)                 |
| 5              | `teamId` (Slack)                    |
| 6              | `accountId` match for channel       |
| 7              | `accountId: "*"` channel fallback   |
| 8 (mais baixa) | Agente padrão                       |

{.show-header}

## Modelos {.cols-2}

### Configure modelos {.row-span-2}

```bash
# Set primary model
openclaw models set anthropic/claude-sonnet-4-6

# Set image model
openclaw models set-image openai/dall-e-3

# List models
openclaw models list            # configured
openclaw models list --all      # full catalog
openclaw models list --provider anthropic

# Status (auth + model overview)
openclaw models status
openclaw models status --check  # exit 1 if missing

# Aliases
openclaw models aliases list
openclaw models aliases add Sonnet \
  anthropic/claude-sonnet-4-6
openclaw models aliases remove Sonnet

# Fallback chains
openclaw models fallbacks list
openclaw models fallbacks add anthropic/claude-haiku-4-5
openclaw models fallbacks clear
```

### /model no chat

```bash
/model             # interactive picker
/model list        # numbered model list
/model 3           # select by number
/model openai/gpt-4o
/model status      # auth + provider details
```

A troca entra em vigor na próxima execução do agente.

### Varredura de modelos (OpenRouter)

```bash
# Scan free models (metadata only)
openclaw models scan --no-probe

# Full scan with capability probe
openclaw models scan \
  --min-params 7 --max-age-days 30

# Auto-set best free model
openclaw models scan \
  --set-default --yes
```

Requer `OPENROUTER_API_KEY` para fazer o probing.

## Config e ambiente {.cols-2}

### Comandos de config {.row-span-2}

```bash
# Show config file path
openclaw config file

# Get a value
openclaw config get gateway.port
openclaw config get channels.telegram.botToken

# Set a value
openclaw config set gateway.port 19001
openclaw config set \
  agents.defaults.model.primary \
  anthropic/claude-sonnet-4-6

# Unset a value
openclaw config unset gateway.port

# Validate config
openclaw config validate

# Print JSON schema
openclaw config schema

# Interactive guided setup
openclaw configure
```

### Variáveis de ambiente

| Variável                    | Descrição                 |
| --------------------------- | ------------------------- |
| `OPENCLAW_GATEWAY_PORT`     | Porta do gateway          |
| `OPENCLAW_GATEWAY_TOKEN`    | Token de autenticação     |
| `OPENCLAW_GATEWAY_PASSWORD` | Senha de autenticação     |
| `OPENCLAW_CONFIG_PATH`      | Path do arquivo de config |
| `OPENCLAW_STATE_DIR`        | Diretório de estado       |
| `OPENCLAW_PROFILE`          | Nome do perfil ativo      |
| `OPENCLAW_CONTAINER`        | Nome do container padrão  |

{.bold-first}

### Paths padrão

| Path                               | Descrição                |
| ---------------------------------- | ------------------------ |
| `~/.openclaw/openclaw.json`        | Config principal         |
| `~/.openclaw/`                     | Diretório de estado      |
| `~/.openclaw/workspace`            | Workspace do agente      |
| `~/.openclaw/agents/<id>/agent`    | Auth + modelos do agente |
| `~/.openclaw/agents/<id>/sessions` | Store de sessões         |
| `~/.openclaw/credentials/`         | Credenciais dos canais   |
| `~/.openclaw/skills/`              | Skills compartilhadas    |

{.bold-first}

## Memória e backup {.cols-3}

### Busca na memória

```bash
openclaw memory status
openclaw memory status --deep   # probe embedding
openclaw memory index --force   # full reindex
openclaw memory search "notes"
openclaw memory search \
  --query "deploy" --max-results 20
openclaw memory status --json
```

### Backup e restauração

```bash
# Create backup archive
openclaw backup create

# Verify backup integrity
openclaw backup verify backup.tar.gz
```

Faz backup de: config, credenciais, sessões e workspaces.

### Reset e atualização

```bash
# Reset config + state (keeps CLI)
openclaw reset

# Update to latest
openclaw update
openclaw update --channel beta
openclaw update --channel dev
openclaw update --dry-run

# Full uninstall
openclaw uninstall
```

## Plugins e skills {.cols-3}

### Comandos de plugin {.row-span-2}

```bash
# Discover + inspect
openclaw plugins list
openclaw plugins inspect <name>
openclaw plugins marketplace

# Install (path / npm / clawhub)
openclaw plugins install clawhub:mattermost
openclaw plugins install ./my-plugin
openclaw plugins install @org/pkg@latest

# Enable / disable
openclaw plugins enable <name>
openclaw plugins disable <name>

# Update + uninstall
openclaw plugins update
openclaw plugins uninstall <name>

# Diagnose load issues
openclaw plugins doctor
```

### Comandos de skill

```bash
openclaw skills list
openclaw skills check      # readiness check
openclaw skills info <name>
openclaw skills search "browser"
openclaw skills install clawhub:browser
openclaw skills update
```

### Comandos de hook

```bash
openclaw hooks list
openclaw hooks info <name>
openclaw hooks check
openclaw hooks enable <name>
openclaw hooks disable <name>
```

## Operação e manutenção {.cols-2}

### Saúde e diagnósticos {.row-span-2}

```bash
# Quick health checks
openclaw health               # gateway health
openclaw doctor               # check + suggest fixes
openclaw doctor --fix         # apply safe fixes
openclaw status               # channels + sessions
openclaw logs --follow        # tail log file

# Channel readiness
openclaw channels status --probe

# Gateway probe (full)
openclaw gateway probe
openclaw gateway status --deep --json

# Security audit
openclaw security audit
openclaw security audit --deep
openclaw security audit --fix
openclaw security audit --json
```

### Tarefas cron

```bash
openclaw cron list
openclaw cron status

# Add job (every / cron / at)
openclaw cron add \
  --name "daily" \
  --every 24h \
  --message "Daily summary" \
  --agent main --announce

openclaw cron add \
  --cron "0 9 * * *" \
  --message "Morning brief" \
  --tz America/New_York

openclaw cron enable <id>
openclaw cron disable <id>
openclaw cron edit <id>
openclaw cron rm <id>
openclaw cron run <id>   # debug: run now
openclaw cron runs       # run history
```

### Nodes (iOS/Android)

```bash
# List + status
openclaw nodes list
openclaw nodes status

# Pairing
openclaw qr                        # iOS QR code
openclaw nodes pending
openclaw nodes approve --node <id>
openclaw nodes reject  --node <id>

# Media capture
openclaw nodes camera snap --node <id>
openclaw nodes canvas  --node <id>
openclaw nodes screen  --node <id>
openclaw nodes location --node <id>

# Invoke + notify
openclaw nodes invoke \
  --node <id> \
  --command system.which \
  --params '{"name":"uname"}'
openclaw nodes notify \
  --node <id> --message "Hello"
```

### Controles de segurança

```bash
# DM pairing
openclaw pairing list
openclaw pairing approve <code>

# Exec approvals
openclaw approvals get
openclaw approvals allowlist
openclaw approvals set --file approvals.json

# Device tokens
openclaw devices list
openclaw devices revoke --role admin
openclaw devices rotate --role admin
```

### Config multiagente {.col-span-2}

```json
{
  "agents": {
    "list": [
      {
        "id": "chat",
        "workspace": "~/.openclaw/workspace-chat",
        "model": "anthropic/claude-sonnet-4-6"
      },
      {
        "id": "work",
        "workspace": "~/.openclaw/workspace-work",
        "model": "anthropic/claude-opus-4-6"
      }
    ]
  },
  "bindings": [
    { "agentId": "chat", "match": { "channel": "whatsapp" } },
    { "agentId": "work", "match": { "channel": "telegram" } }
  ],
  "channels": {
    "whatsapp": { "dmPolicy": "pairing" },
    "telegram": { "accounts": { "default": { "botToken": "TOKEN" } } }
  },
  "gateway": { "port": 18789, "bind": "loopback" }
}
```

A config fica em `~/.openclaw/openclaw.json` (formato JSON5)

## Veja também {.cols-1}

- [Documentação oficial](https://docs.openclaw.ai) _(docs.openclaw.ai)_
- [Repositório no GitHub](https://github.com/openclaw/openclaw) _(github.com)_
- [Comunidade no Discord](https://discord.gg/openclaw) _(discord.gg)_
- [Releases e changelog](https://github.com/openclaw/openclaw/releases) _(github.com)_
- [Referência da CLI](https://docs.openclaw.ai/cli) _(docs.openclaw.ai)_
- [Provedores de modelos](https://docs.openclaw.ai/models) _(docs.openclaw.ai)_
- [Guias de configuração de canais](https://docs.openclaw.ai/channels) _(docs.openclaw.ai)_
