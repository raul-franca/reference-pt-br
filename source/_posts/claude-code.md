---
title: Claude Code
date: 2026-04-03 12:00:00
background: bg-[#cc785c]
tags:
  - AI
  - CLI
  - Anthropic
  - coding
  - assistant
categories:
  - IA
intro: |
  [Claude Code](https://code.claude.com) é uma ferramenta de programação com IA agêntica da Anthropic — lê seu codebase, edita arquivos, executa comandos e se integra às suas ferramentas de desenvolvimento.
plugins:
  - copyCode
---

## Primeiros passos

### Instalação {.row-span-2}

#### macOS / Linux / WSL

```bash
$ curl -fsSL https://claude.ai/install.sh | bash
```

#### Windows PowerShell

```powershell
> irm https://claude.ai/install.ps1 | iex
```

#### Homebrew (macOS)

```bash
$ brew install --cask claude-code
```

#### WinGet (Windows)

```powershell
> winget install Anthropic.ClaudeCode
```

A instalação nativa se atualiza automaticamente. Homebrew/WinGet exigem `brew upgrade claude-code` ou `winget upgrade Anthropic.ClaudeCode` para atualizar.

O Windows exige o [Git for Windows](https://git-scm.com/downloads/win).

### Primeira sessão

```bash
$ cd your-project
$ claude
```

- Faça login na primeira execução (Claude Pro / Max / Team / Enterprise ou Anthropic Console)
- Digite `/help` para ver todos os comandos
- Digite `/resume` para continuar uma conversa anterior
- Pressione `?` para ver os atalhos de teclado
- Digite `exit` ou pressione `Ctrl+D` para sair

### Conceitos-chave {.secondary}

| Conceito           | Descrição                                               |
| ------------------ | ------------------------------------------------------- |
| Agent loop         | Claude lê, edita arquivos, executa comandos e repete    |
| CLAUDE.md          | Instruções persistentes que Claude lê a cada sessão     |
| Memória automática | Claude salva aprendizados entre sessões automaticamente |
| Skills             | `/commands` personalizados para workflows reutilizáveis |
| Hooks              | Scripts shell disparados em eventos do ciclo de vida    |
| MCP                | Conecta o Claude a ferramentas e APIs externas          |
| Modo de permissão  | Controla o que Claude pode fazer sem perguntar          |

{.bold-first}

### Prompts comuns

- `what does this project do?`
- `find the bug causing the login error`
- `write unit tests for the auth module`
- `refactor this to use async/await`
- `commit my changes with a descriptive message`
- `create a PR and describe my changes`
- `review my changes for security issues`
- `add input validation to the signup form`

{.cols-2 .marker-none}

## Comandos da CLI {.cols-2}

### Comandos de sessão {.row-span-3}

| Comando                     | Descrição                               |
| --------------------------- | --------------------------------------- |
| `claude`                    | Inicia uma sessão interativa            |
| `claude "task"`             | Inicia com um prompt inicial            |
| `claude -p "query"`         | Imprime a resposta e sai                |
| `claude -c`                 | Continua a conversa mais recente        |
| `claude -r [name]`          | Retoma a sessão por nome ou ID          |
| `claude -n "name"`          | Dá um nome a esta sessão                |
| `claude -w [name]`          | Inicia em um git worktree isolado       |
| `claude update`             | Atualiza para a versão mais recente     |
| `claude -v`                 | Mostra o número da versão               |
| `claude doctor`             | Verifica a saúde da instalação          |
| `claude auto-mode defaults` | Imprime as regras do classificador auto |
| `claude agents`             | Lista os subagentes configurados        |

{.show-header}

#### Comandos de autenticação

| Comando                       | Descrição                         |
| ----------------------------- | --------------------------------- |
| `claude auth login`           | Faz login na conta                |
| `claude auth login --console` | Faz login com o Anthropic Console |
| `claude auth logout`          | Faz logout                        |
| `claude auth status`          | Mostra o status de autenticação   |

#### Comandos MCP

| Comando                    | Descrição                         |
| -------------------------- | --------------------------------- |
| `claude mcp list`          | Lista os servidores configurados  |
| `claude mcp add <n> <cmd>` | Adiciona um servidor MCP stdio    |
| `claude mcp get <name>`    | Mostra os detalhes do servidor    |
| `claude mcp remove <name>` | Remove um servidor                |
| `claude mcp serve`         | Inicia o Claude como servidor MCP |

#### Comandos de plugin

| Comando                        | Descrição                   |
| ------------------------------ | --------------------------- |
| `claude plugin install <name>` | Instala um plugin           |
| `claude plugin list`           | Lista os plugins instalados |
| `claude plugin remove <name>`  | Remove um plugin            |

### Exemplos com pipe

```bash
# Explain a build error
$ cat error.log | claude -p "explain the root cause"
```

```bash
# Review changed files
$ git diff main --name-only | claude -p "review for issues"
```

```bash
# Analyze logs
$ tail -200 app.log | claude -p "summarize anomalies"
```

```bash
# Save output to file
$ cat data.txt | claude -p "summarize this" > summary.txt
```

### Integração com Unix

Adicione o Claude como um linter no `package.json`:

```json {.wrap}
{
  "scripts": {
    "lint:ai": "claude -p 'review changes vs main, report file:line + issue'"
  }
}
```

Use `--output-format` para saída estruturada:

```bash
$ claude -p "analyze for bugs" --output-format json
```

## Flags da CLI {.cols-3}

### Sessão e modo {.row-span-2}

| Flag                    | Descrição                                        |
| ----------------------- | ------------------------------------------------ |
| `--model <model>`       | Alias do modelo: `sonnet`, `opus` ou ID completo |
| `--permission-mode <m>` | Define o modo de permissão na inicialização      |
| `-c, --continue`        | Carrega a conversa mais recente                  |
| `-r, --resume [id]`     | Retoma por ID ou nome de sessão                  |
| `-n, --name <name>`     | Dá um nome à sessão atual                        |
| `-w, --worktree [name]` | Cria um git worktree isolado                     |
| `-p, --print`           | Modo de impressão não interativo                 |
| `--effort <level>`      | `low` `medium` `high` `max`                      |
| `--ide`                 | Conecta automaticamente à IDE ao iniciar         |
| `--verbose`             | Mostra a saída completa turno a turno            |
| `--debug [filter]`      | Ativa o debug (ex.: `"api,hooks"`)               |
| `--fork-session`        | Novo ID ao retomar                               |
| `--from-pr [num]`       | Retoma sessões vinculadas a um PR                |
| `--version, -v`         | Imprime o número da versão                       |

{.bold-first}

### Saída e formato

| Flag                         | Descrição                       |
| ---------------------------- | ------------------------------- |
| `--output-format`            | `text` / `json` / `stream-json` |
| `--input-format`             | `text` ou `stream-json`         |
| `--max-turns <n>`            | Limita os turnos do agente      |
| `--max-budget-usd <n>`       | Limite de gastos (modo print)   |
| `--json-schema <s>`          | Valida a saída estruturada      |
| `--include-partial-messages` | Transmite chunks parciais       |
| `--no-session-persistence`   | Não salva a sessão em disco     |
| `--fallback-model <m>`       | Fallback quando sobrecarregado  |

{.bold-first}

### Ferramentas e acesso

| Flag                                   | Descrição                                  |
| -------------------------------------- | ------------------------------------------ |
| `--allowedTools <tools>`               | Pré-aprova ferramentas (sem prompt)        |
| `--disallowedTools <tools>`            | Nega ferramentas específicas               |
| `--tools <list>`                       | Restringe as ferramentas disponíveis       |
| `--add-dir <dirs>`                     | Diretórios extras para acesso              |
| `--dangerously-skip-permissions`       | Ignora todas as verificações de permissão  |
| `--allow-dangerously-skip-permissions` | Adiciona o bypass ao ciclo de modos        |
| `--enable-auto-mode`                   | Adiciona o modo auto ao ciclo do Shift+Tab |
| `--bare`                               | Modo mínimo (sem hooks/memória)            |
| `--mcp-config <file>`                  | Carrega a configuração MCP de um arquivo   |
| `--strict-mcp-config`                  | Usa apenas a configuração MCP da CLI       |

{.bold-first}

### Flags de system prompt

| Flag                              | Comportamento                  |
| --------------------------------- | ------------------------------ |
| `--system-prompt <text>`          | Substitui todo o prompt padrão |
| `--system-prompt-file <file>`     | Substitui a partir de arquivo  |
| `--append-system-prompt <text>`   | Anexa ao prompt padrão         |
| `--append-system-prompt-file <f>` | Anexa a partir de arquivo      |

{.bold-first}

Prefira `--append-*` para preservar os recursos nativos do Claude. Use `--system-prompt` apenas quando precisar de controle total.

## Comandos slash {.cols-3}

### Sessão e contexto {.row-span-2}

| Comando            | Descrição                                                    |
| ------------------ | ------------------------------------------------------------ |
| `/clear`           | Limpa o histórico (aliases: `/new`, `/reset`)                |
| `/compact [focus]` | Compacta o contexto com foco opcional                        |
| `/resume [name]`   | Retoma a sessão (alias: `/continue`)                         |
| `/branch [name]`   | Faz fork da conversa (alias: `/fork`)                        |
| `/rewind`          | Desfaz até o checkpoint (alias: `/checkpoint`)               |
| `/diff`            | Visualiza alterações não commitadas de forma interativa      |
| `/export [file]`   | Exporta a conversa como texto puro                           |
| `/copy [N]`        | Copia a N-ésima última resposta para a área de transferência |
| `/cost`            | Mostra estatísticas de uso de tokens                         |
| `/usage`           | Mostra os limites do plano e o status do rate limit          |
| `/context`         | Visualiza o uso da janela de contexto                        |
| `/btw <q>`         | Pergunta paralela sem adicionar ao histórico                 |

{.show-header}

### Código e Git

| Comando               | Descrição                                                   |
| --------------------- | ----------------------------------------------------------- |
| `/plan [desc]`        | Entra no modo plan (somente leitura)                        |
| `/security-review`    | Audita as alterações da branch em busca de vulnerabilidades |
| `/pr-comments [PR]`   | Busca comentários de PR do GitHub                           |
| `/install-github-app` | Configura a integração com GitHub Actions                   |
| `/install-slack-app`  | Instala a integração com Slack                              |

### Configurações

| Comando           | Descrição                                       |
| ----------------- | ----------------------------------------------- |
| `/config`         | Abre as configurações (alias: `/settings`)      |
| `/model [model]`  | Troca o modelo de IA                            |
| `/effort [level]` | Define o esforço: `low` `medium` `high` `max`   |
| `/permissions`    | Gerencia regras de permitir / perguntar / negar |
| `/hooks`          | Visualiza os hooks configurados                 |
| `/memory`         | Edita o CLAUDE.md e a memória automática        |
| `/mcp`            | Gerencia as conexões com servidores MCP         |
| `/agents`         | Gerencia as configurações de subagentes         |
| `/skills`         | Lista as skills disponíveis                     |
| `/plugin`         | Gerencia os plugins instalados                  |
| `/keybindings`    | Abre o arquivo de configuração de keybindings   |

### Exibição e UI

| Comando           | Descrição                               |
| ----------------- | --------------------------------------- |
| `/theme`          | Troca o tema de cores                   |
| `/vim`            | Ativa/desativa o modo de edição vim     |
| `/color [color]`  | Define a cor da barra de prompt         |
| `/statusline`     | Configura a exibição da linha de status |
| `/stats`          | Visualiza o uso diário e as sequências  |
| `/insights`       | Analisa padrões de sessão               |
| `/fast [on\|off]` | Ativa/desativa o modo rápido            |
| `/powerup`        | Tour interativo pelos recursos          |
| `/tasks`          | Gerencia tarefas em segundo plano       |
| `/add-dir <path>` | Adiciona um diretório de trabalho       |

### Ajuda e sistema

| Comando            | Descrição                                        |
| ------------------ | ------------------------------------------------ |
| `/help`            | Mostra os comandos disponíveis                   |
| `/init`            | Gera o CLAUDE.md do projeto                      |
| `/doctor`          | Diagnostica a instalação                         |
| `/voice`           | Ativa/desativa o ditado por voz                  |
| `/schedule [desc]` | Cria uma tarefa agendada na nuvem                |
| `/login`           | Faz login na conta                               |
| `/logout`          | Faz logout                                       |
| `/feedback`        | Envia feedback (alias: `/bug`)                   |
| `/release-notes`   | Visualiza o changelog                            |
| `/status`          | Mostra a versão, o modelo e informações da conta |

## Atalhos de teclado {.cols-3}

### Controles gerais {.row-span-2}

| Atalho      | Descrição                                     |
| ----------- | --------------------------------------------- |
| `Ctrl+C`    | Cancela a entrada ou geração atual            |
| `Ctrl+D`    | Sai do Claude Code                            |
| `Shift+Tab` | Alterna entre os modos de permissão           |
| `Ctrl+R`    | Busca reversa no histórico de comandos        |
| `Ctrl+G`    | Abre o prompt no editor de texto              |
| `Ctrl+L`    | Redesenha a tela                              |
| `Ctrl+O`    | Ativa/desativa a saída verbosa                |
| `Ctrl+V`    | Cola uma imagem da área de transferência      |
| `Ctrl+B`    | Coloca o comando em execução em segundo plano |
| `Ctrl+T`    | Ativa/desativa a exibição da lista de tarefas |
| `Esc Esc`   | Rebobina ou resume a conversa                 |
| `Option+P`  | Troca o modelo (macOS)                        |
| `Option+T`  | Ativa/desativa o raciocínio estendido (macOS) |
| `Option+O`  | Ativa/desativa o modo rápido (macOS)          |

{.shortcuts}

### Edição de texto

| Atalho   | Descrição                         |
| -------- | --------------------------------- |
| `Ctrl+K` | Apaga até o fim da linha          |
| `Ctrl+U` | Apaga até o início da linha       |
| `Ctrl+Y` | Cola o texto apagado              |
| `Alt+Y`  | Alterna pelo histórico de colagem |
| `Alt+B`  | Move uma palavra para trás        |
| `Alt+F`  | Move uma palavra para frente      |

{.shortcuts}

### Modo Vim

Ative com `/vim` ou em `/config`. `Esc` → NORMAL, `i`/`a`/`o` → INSERT.

| Tecla           | Ação                                          |
| --------------- | --------------------------------------------- |
| `h j k l`       | Move para a esquerda / baixo / cima / direita |
| `w` / `b`       | Próxima / palavra anterior                    |
| `0` / `$`       | Início / fim da linha                         |
| `gg` / `G`      | Início / fim da entrada                       |
| `dd` / `yy`     | Apaga / yank da linha                         |
| `cc` / `p`      | Altera a linha / cola                         |
| `f{c}` / `F{c}` | Pula para o caractere                         |
| `.`             | Repete a última alteração                     |

### Múltiplas linhas e entrada

| Método                                | Como                        |
| ------------------------------------- | --------------------------- |
| Múltiplas linhas (todos os terminais) | `\` e depois `Enter`        |
| Múltiplas linhas (padrão do macOS)    | `Option+Enter`              |
| Múltiplas linhas (terminais modernos) | `Shift+Enter`               |
| Executa bash diretamente              | prefixo `!`                 |
| Autocomplete de path de arquivo       | prefixo `@`                 |
| Todos os comandos / skills            | prefixo `/`                 |
| Atalho do seletor de sessão           | `P` visualiza, `R` renomeia |

macOS: defina Option como Meta nas preferências do terminal para que os atalhos `Alt+*` funcionem.

## Modos de permissão {.cols-3}

### Visão geral dos modos {.col-span-2 .row-span-2}

| Modo                | O que Claude faz sem perguntar                    | Melhor para                              |
| ------------------- | ------------------------------------------------- | ---------------------------------------- |
| `default`           | Apenas lê arquivos                                | Primeiros passos, trabalho sensível      |
| `acceptEdits`       | Lê + edita arquivos                               | Codificação ativa, iteração              |
| `plan`              | Apenas leitura, grava um arquivo de plano         | Exploração, planejamento antes de editar |
| `auto`              | Todas as ações com classificador em segundo plano | Tarefas longas, menos interrupções       |
| `dontAsk`           | Apenas ferramentas pré-aprovadas                  | Ambientes de CI/CD bloqueados            |
| `bypassPermissions` | Todas as ações exceto diretórios protegidos       | Apenas containers e VMs                  |

{.show-header}

Independentemente do modo, gravações em `.git`, `.vscode`, `.idea`, `.husky` e `.claude` sempre pedem confirmação (exceto `.claude/commands`, `.claude/agents`, `.claude/skills`).

#### Configure o modo padrão

```json
{
  "permissions": {
    "defaultMode": "acceptEdits"
  }
}
```

#### Notas sobre o modo auto

Requer plano Team / Enterprise / API + Claude Sonnet 4.6 ou Opus 4.6. Um classificador separado revisa cada ação antes de executá-la e bloqueia ações que extrapolam sua intenção. Ative na inicialização:

```bash
$ claude --enable-auto-mode
```

### Alternar entre modos

**Durante uma sessão:**

Pressione `Shift+Tab` para alternar:

```
default → acceptEdits → plan → (auto)
```

**Na inicialização:**

```bash
$ claude --permission-mode plan
$ claude --permission-mode acceptEdits
```

**Ignorar tudo (apenas containers):** {.primary}

```bash
$ claude --dangerously-skip-permissions
```

### Regras de permissão

Adicione regras de permitir / negar por cima de qualquer modo em `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": ["Bash(npm test)", "Bash(git log *)"],
    "deny": ["Bash(rm -rf *)"]
  }
}
```

Visualize e edite as regras com `/permissions`.

## Memória e CLAUDE.md {.cols-3}

### Locais do CLAUDE.md {.col-span-2 .row-span-2}

| Escopo              | Local                                          | Compartilhado com            |
| ------------------- | ---------------------------------------------- | ---------------------------- |
| Política gerenciada | Nível de sistema (implantada por TI/DevOps)    | Todos os usuários da máquina |
| Projeto             | `./CLAUDE.md` ou `./.claude/CLAUDE.md`         | Equipe via git               |
| Usuário             | `~/.claude/CLAUDE.md`                          | Pessoal, todos os projetos   |
| Local               | `./CLAUDE.local.md` (adicione ao `.gitignore`) | Pessoal, neste projeto       |

{.show-header}

Arquivos em diretórios pais são carregados na inicialização. Arquivos de subdiretórios são carregados sob demanda quando Claude lê arquivos ali. Em caso de conflito, o escopo mais específico prevalece.

#### Escreva instruções eficazes

- **Tamanho**: mantenha cada arquivo com menos de 200 linhas — arquivos maiores reduzem a adesão
- **Específico**: `"Use 2-space indentation"` e não `"format code nicely"`
- **Estruturado**: use cabeçalhos markdown para agrupar regras relacionadas
- **Consistente**: evite instruções conflitantes entre arquivos

Execute `/init` para gerar automaticamente um CLAUDE.md a partir do seu codebase. Defina `CLAUDE_CODE_NEW_INIT=1` para um fluxo interativo em várias fases que também configura skills e hooks.

#### Organize com `.claude/rules/`

```text
.claude/
├── CLAUDE.md
└── rules/
    ├── code-style.md   # style guidelines
    ├── testing.md      # test conventions
    └── security.md     # security requirements
```

#### Regras com escopo por path

```yaml
---
paths:
  - 'src/api/**/*.ts'
  - 'tests/**/*.test.ts'
---
# API Rules
All endpoints must include input validation.
```

Regras sem `paths` são carregadas a cada sessão. Regras com `paths` são carregadas apenas quando arquivos correspondentes são abertos.

### Memória automática

Claude salva suas próprias anotações em:

```
~/.claude/projects/<project>/memory/
├── MEMORY.md          # index (first 200 lines loaded)
├── debugging.md       # topic files (loaded on demand)
└── api-conventions.md
```

- Ativada por padrão; alterne em `/memory` ou defina `autoMemoryEnabled: false`
- Persiste entre sessões e worktrees no mesmo repositório git
- Local à máquina — não é compartilhada entre máquinas

Desative via variável de ambiente:

```bash
$ export CLAUDE_CODE_DISABLE_AUTO_MEMORY=1
```

### Sintaxe de importação

Referencie outros arquivos a partir do CLAUDE.md:

```markdown
See @README.md for project overview.
Build commands: @package.json

# Workflows

@docs/git-workflow.md
```

- Paths relativos e absolutos são suportados
- Profundidade máxima de importação: 5 níveis
- Arquivos importados são expandidos no início da sessão
- Comentários HTML no CLAUDE.md são removidos do contexto

## Hooks {.cols-2}

### Eventos de hook {.row-span-2}

| Evento               | Quando dispara                              |
| -------------------- | ------------------------------------------- |
| `SessionStart`       | A sessão começa, é retomada ou é limpa      |
| `UserPromptSubmit`   | O usuário envia um prompt                   |
| `PreToolUse`         | Antes de uma ferramenta ser executada       |
| `PermissionRequest`  | Antes de o diálogo de permissão aparecer    |
| `PostToolUse`        | Depois que a ferramenta conclui com sucesso |
| `PostToolUseFailure` | Depois que a execução da ferramenta falha   |
| `PermissionDenied`   | O classificador do modo auto nega a ação    |
| `Stop`               | Claude termina de responder                 |
| `StopFailure`        | O turno termina por erro de API             |
| `Notification`       | Claude precisa de atenção                   |
| `SubagentStart`      | Um subagente é criado                       |
| `SubagentStop`       | Um subagente termina                        |
| `FileChanged`        | Um arquivo monitorado muda no disco         |
| `PreCompact`         | Antes da compactação do contexto            |
| `PostCompact`        | Depois da compactação do contexto           |
| `WorktreeCreate`     | Um worktree está sendo criado               |
| `WorktreeRemove`     | Um worktree está sendo removido             |
| `InstructionsLoaded` | O arquivo CLAUDE.md foi carregado           |
| `ConfigChange`       | O arquivo de configurações muda             |
| `TaskCreated`        | Tarefa criada via TaskCreate                |
| `TaskCompleted`      | Tarefa marcada como concluída               |

{.show-header}

**Códigos de saída**: `0` = sucesso (decisão JSON), `2` = bloqueia a ação (stderr para o modelo), outros = erro não bloqueante.

Use `$CLAUDE_PROJECT_DIR` para referenciar scripts de hook relativos à raiz do projeto.

### Tipos de hook

| Tipo      | Descrição                                        |
| --------- | ------------------------------------------------ |
| `command` | Executa um script shell, lê JSON do stdin        |
| `http`    | Envia JSON via POST para um endpoint HTTP        |
| `prompt`  | Pede ao Claude uma decisão sim/não               |
| `agent`   | Cria um subagente com ferramentas para verificar |

{.bold-first}

#### Auto-formatação após edição de arquivos

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run lint --silent"
          }
        ]
      }
    ]
  }
}
```

#### Notifique quando Claude precisar de você (macOS)

```json {.wrap}
{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"Claude needs attention\" with title \"Claude Code\"'"
          }
        ]
      }
    ]
  }
}
```

Configuração em `~/.claude/settings.json` (usuário) ou `.claude/settings.json` (projeto). Visualize os hooks com `/hooks`.

## Servidores MCP {.cols-2}

### Adicionar servidor MCP {.row-span-2}

#### Servidor stdio (processo local)

```bash
$ claude mcp add my-server -- npx my-mcp-server
```

#### Com variáveis de ambiente

```bash
$ claude mcp add -e KEY=val my-server -- npx server
```

#### Servidor HTTP

```bash {.wrap}
$ claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

#### HTTP com header de autenticação

```bash {.wrap}
$ claude mcp add --transport http my-api https://api.example.com/mcp --header "Authorization: Bearer $TOKEN"
```

#### Formato JSON

```bash
$ claude mcp add-json my-server '{"command":"npx","args":["my-mcp"]}'
```

#### Importar do Claude Desktop

```bash
$ claude mcp add-from-claude-desktop
```

#### Gerenciar servidores

```bash
$ claude mcp list           # list all servers
$ claude mcp get <name>     # show server details
$ claude mcp remove <name>  # remove a server
```

Configuração armazenada em `~/.claude/settings.json` (usuário) ou `.claude/settings.json` (projeto).

### MCP na sessão

**Referencie recursos MCP com `@`:**

```
@github:repos/owner/repo/issues
@memory:entities
@filesystem:/path/to/file
```

**Execute prompts MCP como comandos slash:**

```
/mcp__github__search_repositories
/mcp__memory__create_entities
```

Padrão de ferramenta MCP: `mcp__<server>__<tool>`

**Gerencie na sessão:**

```
/mcp
```

**Hook em ferramentas MCP:**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__memory__.*",
        "hooks": [{ "type": "command", "command": "logger.sh" }]
      }
    ]
  }
}
```

## Worktrees e agentes {.cols-2}

### Git worktrees {.row-span-2}

Execute sessões paralelas em branches isoladas:

```bash
# Create worktree and start Claude
$ claude --worktree feature-auth
$ claude -w bugfix-123

# Auto-generated name
$ claude --worktree
```

Os worktrees são criados em `.claude/worktrees/<name>/` e ramificam a partir de `origin/HEAD`.

**Limpeza automática:** sem alterações → removido ao sair. Com alterações → Claude pergunta se deve manter ou remover.

Adicione ao `.gitignore`:

```
.claude/worktrees/
```

#### Copie secrets para os worktrees

Crie `.worktreeinclude` na raiz do projeto:

```
.env
.env.local
config/secrets.json
```

#### Comandos manuais de worktree

```bash
# Create with specific branch
$ git worktree add ../project-feat -b feat

# List all worktrees
$ git worktree list

# Remove when done
$ git worktree remove ../project-feat
```

Ressincronize o HEAD de origin após uma mudança de branch remota:

```bash
$ git remote set-head origin -a
```

### Subagentes

Crie em `.claude/agents/<name>.md`:

```yaml
---
name: code-reviewer
description: Reviews code for bugs and style
tools:
  - Read
  - Grep
  - Glob
---
You are an expert code reviewer.
Focus on correctness and clarity.
```

Use subagentes naturalmente na conversa:

- `review the auth module for security issues`
- `use the code-reviewer agent on api.ts`
- `/agents` — gerencia as configurações de agentes

**Subagente com isolamento de worktree:**

```yaml
---
name: parallel-worker
isolation: worktree
description: Works in isolated branch
---
```

**Memória automática compartilhada para subagentes** — adicione ao frontmatter:

```yaml
autoMemoryEnabled: true
```

## Modo headless e scripts {.cols-2}

### Modo não interativo {.row-span-2}

Execute o Claude de forma programática com `-p` / `--print`:

```bash
# Basic one-off query
$ claude -p "what does this file do?"

# Stream JSON (real-time events)
$ claude -p "query" --output-format stream-json

# JSON with full metadata
$ claude -p "query" --output-format json

# Limit turns and cost
$ claude -p "query" --max-turns 5 --max-budget-usd 1.00

# Validated structured output
$ claude -p "query" --json-schema '{"type":"object"}'
```

#### Retomar no modo headless

```bash
# Continue most recent session
$ claude -c -p "follow-up question"

# Resume named session
$ claude -r my-session -p "continue the task"
```

#### Formatos de saída

| Formato       | Caso de uso                     |
| ------------- | ------------------------------- |
| `text`        | Legível por humanos (padrão)    |
| `json`        | Metadados completos + custo     |
| `stream-json` | Eventos por turno em tempo real |

{.bold-first}

#### Modo bare (inicialização mais rápida)

```bash
$ claude --bare -p "query"
```

Ignora hooks, descoberta automática do CLAUDE.md, plugins, MCP e memória automática. Define `CLAUDE_CODE_SIMPLE=1`. Ideal para scripts.

#### Persistência de sessão

```bash
# Don't save session to disk
$ claude -p "query" --no-session-persistence
```

### Agendamento

**Crie uma tarefa agendada na nuvem:**

```
/schedule review open PRs every morning at 9am
```

**Loop com escopo de sessão (permanece aberto):**

```
/loop 5m check for new issues
```

#### GitHub Actions

```yaml
- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    prompt: 'review this PR for issues and comment'
```

#### GitLab CI/CD

```yaml
claude-review:
  script:
    - claude -p "review changes in this MR"
      --output-format json
```

| Opção de agendamento         | Executa em                  |
| ---------------------------- | --------------------------- |
| Tarefas agendadas na nuvem   | Infraestrutura da Anthropic |
| Tarefas agendadas no desktop | Sua máquina local           |
| GitHub Actions               | Pipeline de CI/CD           |
| `/loop`                      | Apenas a sessão CLI atual   |

## Veja também {.cols-1}

- [Documentação do Claude Code](https://code.claude.com/docs/en/overview) _(code.claude.com)_
- [Referência da CLI](https://code.claude.com/docs/en/cli-reference) _(code.claude.com)_
- [Todos os comandos slash](https://code.claude.com/docs/en/commands) _(code.claude.com)_
- [Referência de hooks](https://code.claude.com/docs/en/hooks) _(code.claude.com)_
- [Documentação de MCP](https://code.claude.com/docs/en/mcp) _(code.claude.com)_
- [Memória e CLAUDE.md](https://code.claude.com/docs/en/memory) _(code.claude.com)_
- [Modos de permissão](https://code.claude.com/docs/en/permission-modes) _(code.claude.com)_
- [Repositório no GitHub](https://github.com/anthropics/claude-code) _(github.com)_
- [Discord da comunidade](https://www.anthropic.com/discord) _(anthropic.com)_
