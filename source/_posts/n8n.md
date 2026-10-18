---
title: n8n
date: 2026-06-12 00:00:00
background: bg-rose-600
tags:
  - automation
  - workflow
  - nocode
  - lowcode
categories:
  - Outros
intro: Uma referência rápida para automação de workflow no n8n, cobrindo expressões, variáveis embutidas, nodes principais, padrões do Code node, tratamento de erros e a CLI.
---

## Primeiros passos

### Instalação {.col-span-2}

#### npm (global)

```bash
npm install n8n -g
n8n start
# Open http://localhost:5678
```

#### Docker

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

#### Docker Compose

```yaml
version: '3'
services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - '5678:5678'
    volumes:
      - ~/.n8n:/home/node/.n8n
    environment:
      - GENERIC_TIMEZONE=Asia/Kolkata
      - WEBHOOK_URL=https://your-domain.com/
```

### Conceitos principais

| Termo          | Descrição                                            |
| -------------- | ---------------------------------------------------- |
| **Workflow**   | Uma coleção de nodes conectados                      |
| **Node**       | Um único passo ou ação                               |
| **Trigger**    | Node que inicia um workflow                          |
| **Execution**  | Uma execução de um workflow                          |
| **Item**       | Um único objeto de dados JSON passado entre nodes    |
| **Connection** | Link entre dois nodes                                |
| **Credential** | Configuração de autenticação armazenada para um serviço |
| **Expression** | Valor dinâmico usando a sintaxe `{{ }}`              |

{.show-header}

## Expressões {.cols-2}

### Noções básicas de sintaxe

Acesse os campos do item atual:

```js
{
  {
    $json.fieldName;
  }
}
{
  {
    $json['field-name'];
  }
}
{
  {
    $json.nested.field;
  }
}
{
  {
    $json.array[0];
  }
}
```

Matemática e strings:

```js
{
  {
    $json.price * 1.2;
  }
}
{
  {
    $json.first + ' ' + $json.last;
  }
}
{
  {
    $json.name.toUpperCase();
  }
}
{
  {
    $json.tags.join(', ');
  }
}
```

Condicional ternário:

```js
{
  {
    $json.age >= 18 ? 'adult' : 'minor';
  }
}
{
  {
    $json.status === 'active' ? true : false;
  }
}
```

### Referenciar outros nodes

Obtenha a saída de um node específico:

```js
{
  {
    $node['NodeName'].json.field;
  }
}
{
  {
    $node['NodeName'].json['key'];
  }
}
```

Obtenha todos os itens de um node:

```js
{
  {
    $items('NodeName');
  }
}
{
  {
    $items('NodeName')[0].json.field;
  }
}
```

Verifique a quantidade de itens:

```js
{
  {
    $items('NodeName').length;
  }
}
```

## Variáveis embutidas

### Execução e workflow {.col-span-2}

| Variável               | Tipo    | Descrição                                  |
| ---------------------- | ------- | ------------------------------------------ |
| `$execution.id`        | string  | ID da execução atual                       |
| `$execution.mode`      | string  | `manual`, `trigger` ou `webhook`           |
| `$execution.resumeUrl` | string  | URL para retomar uma execução em espera    |
| `$workflow.id`         | string  | ID do workflow                             |
| `$workflow.name`       | string  | Nome do workflow                           |
| `$workflow.active`     | boolean | Se o workflow está ativo                   |
| `$runIndex`            | number  | Índice da iteração do loop (base 0)        |
| `$itemIndex`           | number  | Índice do item atual no batch              |

{.show-header}

### Data e hora (Luxon)

```js
// Current datetime as Luxon object
{
  {
    $now;
  }
}
{
  {
    $now.toISO();
  }
}
{
  {
    $now.toFormat('yyyy-MM-dd HH:mm');
  }
}

// Today at midnight
{
  {
    $today;
  }
}
{
  {
    $today.plus({ days: 7 }).toISO();
  }
}
{
  {
    $today.minus({ months: 1 }).startOf('month').toISO();
  }
}

// Parse from string or timestamp
{
  {
    DateTime.fromISO($json.dateStr).toFormat('dd MMM yyyy');
  }
}
{
  {
    DateTime.fromMillis($json.ts).toISO();
  }
}
```

### Ambiente e segredos

```js
// Environment variables (set in .env or n8n settings)
{
  {
    $env.MY_API_KEY;
  }
}
{
  {
    $env.BASE_URL;
  }
}

// Workflow variables (n8n Cloud / Enterprise)
{
  {
    $vars.myVariable;
  }
}

// External secrets (n8n Cloud)
{
  {
    $secrets.myVault.mySecret;
  }
}
```

## Métodos embutidos {.cols-2}

### Lógica e validação

```js
// Conditional value
{
  {
    $if($json.score > 50, 'pass', 'fail');
  }
}

// Null coalescing
{
  {
    $json.name ?? 'Unknown';
  }
}

// Emptiness checks (methods on the value, not global functions)
{
  {
    $json.field.isEmpty();
  }
}
{
  {
    $json.field.isNotEmpty();
  }
}
```

### Auxiliares de array

```js
// Aggregate methods — called ON the array
{
  {
    $json.prices.min();
  }
}
{
  {
    $json.prices.max();
  }
}
{
  {
    $json.prices.sum();
  }
}
{
  {
    $json.prices.average();
  }
}

// JMESPath query on objects/arrays
{
  {
    $jmespath($json, 'users[?age > `18`].name');
  }
}

// Native array methods
{
  {
    $json.items.filter((i) => i.active).length;
  }
}
{
  {
    $json.items.map((i) => i.name);
  }
}
```

## Triggers {.cols-3}

### Trigger de agendamento

Configure pela UI com:

- Intervalo: a cada N minutos/horas/dias
- Expressão cron personalizada

Padrões cron comuns:

```
*/15 * * * *    Every 15 minutes
0 9 * * 1-5     Weekdays at 9 AM
0 0 * * *       Daily at midnight
0 0 1 * *       1st of each month
0 8,17 * * *    At 8 AM and 5 PM
```

### Trigger de webhook

```
# Test URL (manual execution only)
https://your-n8n.com/webhook-test/{id}

# Production URL (active workflow)
https://your-n8n.com/webhook/{id}
```

Suporta `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. Acesse os dados via:

- Body → `$json`
- Query params → `$json.query`
- Headers → `$request.headers`

### Triggers de app / evento

Triggers instantâneos comuns:

- Gmail / Outlook — novo e-mail
- Slack — nova mensagem
- GitHub — push, PR, evento de issue
- Airtable — registro novo/atualizado
- Typeform — nova submissão
- Stripe — evento de pagamento

Use triggers de **polling** (baseados em intervalo) ou **instantâneos**, em que o serviço envia via webhook.

## Nodes principais {.cols-3}

### HTTP Request

Envie requests para qualquer API REST.

Configurações principais:

- **Method**: GET, POST, PUT, PATCH, DELETE
- **URL**: suporta expressões `{{ }}`
- **Authentication**: None, Bearer, Basic, OAuth2, API Key
- **Body**: JSON, Form Data, Raw, Binary

```js
// Dynamic URL
https://api.example.com/users/{{ $json.userId }}

// Dynamic header
Authorization: Bearer {{ $env.API_TOKEN }}
```

### Node IF

Encaminha itens para uma ramificação de saída `true` ou `false` com base em uma condição.

Tipos suportados:

- String: igual, contém, começa/termina com, regex
- Number: =, ≠, >, <, ≥, ≤
- Boolean: é true/false
- Array: contém item
- DateTime: antes/depois

Combine com lógica **AND** / **OR**.

### Node Switch

Encaminha itens para uma entre várias ramificações nomeadas com base em um valor. Use quando precisar de mais de 2 caminhos.

```
Value:    {{ $json.status }}

Case 0  → "pending"
Case 1  → "active"
Case 2  → "closed"
Default → (anything else)
```

### Node Set

Adiciona, modifica ou remove campos dos itens.

```js
// Add or overwrite a field
Field name:  status
Value:       {{ $json.active ? "on" : "off" }}

// Rename a field
Field name:  userId
Value:       {{ $json.id }}

// Enable "Keep Only Set" to strip all other fields
```

### Node Merge

Combina itens de duas ramificações de entrada.

| Modo                | Descrição                                      |
| ------------------- | ---------------------------------------------- |
| Append              | Todos os itens das duas ramificações           |
| Combine by Position | Combina item[0]+item[0], etc.                  |
| Combine by Fields   | Join por uma chave compartilhada (como SQL JOIN) |
| Keep Matches        | Inner join — apenas itens que correspondem     |
| Keep Non-Matches    | Itens sem correspondência na outra ramificação |

{.show-header}

### Split in Batches

Processa uma lista grande de itens em partes para evitar timeouts.

```
Batch Size: 10
```

O node volta ao início automaticamente. Use `$runIndex` para acompanhar em qual batch você está. Conecte a saída `done` para continuar depois de todos os batches.

## Code node {.cols-2}

### Executar uma vez por item

Executa uma vez para cada item de entrada. Retorne um objeto de item:

```js
// Modify and return current item
const item = $input.item;
item.json.fullName = item.json.first + ' ' + item.json.last;
item.json.ts = new Date().toISOString();
return item;
```

Retorne um item totalmente novo:

```js
return {
  json: {
    id: $input.item.json.id,
    name: $input.item.json.name.trim(),
    processed: true
  }
};
```

### Executar uma vez para todos os itens

Executa uma vez com a lista completa. Retorne um array:

```js
// Transform all items
return $input.all().map((item) => ({
  json: {
    id: item.json.id,
    name: item.json.name.toUpperCase()
  }
}));
```

Filtre itens:

```js
return $input.all().filter((item) => item.json.score >= 50);
```

### Padrões de código comuns {.col-span-2}

Agrupe itens por um campo:

```js
const groups = {};
for (const item of $input.all()) {
  const key = item.json.category;
  if (!groups[key]) groups[key] = [];
  groups[key].push(item.json);
}
return Object.entries(groups).map(([key, items]) => ({
  json: { category: key, count: items.length, items }
}));
```

Achate um array aninhado em itens separados:

```js
const result = [];
for (const item of $input.all()) {
  for (const row of item.json.rows) {
    result.push({ json: row });
  }
}
return result;
```

Chamada HTTP dentro do Code node:

```js
const response = await $http.request({
  method: 'GET',
  url: `https://api.example.com/users/${$input.item.json.id}`
});
return [{ json: response }];
```

## Tratamento de erros {.cols-2}

### No nível do node: continuar em caso de erro

Em qualquer node → **Settings** → **On Error**

| Opção                     | Comportamento                             |
| ------------------------- | ----------------------------------------- |
| Stop Workflow             | Padrão — interrompe em caso de erro       |
| Continue (regular output) | Passa as informações do erro como item para o próximo node |
| Continue (error output)   | Encaminha o erro para uma ramificação separada |

{.show-header}

Acesse os detalhes do erro adiante no fluxo:

```js
{
  {
    $json.error.message;
  }
}
{
  {
    $json.error.name;
  }
}
{
  {
    $json.error.stack;
  }
}
```

### No nível do workflow: workflow de erro

1. Crie um workflow dedicado de "Error Handler"
2. Use o **Error Trigger** como primeiro node
3. No seu workflow principal → **Settings** → **Error Workflow** → selecione-o

Variáveis disponíveis no workflow de erro:

```js
{
  {
    $json.workflow.id;
  }
}
{
  {
    $json.workflow.name;
  }
}
{
  {
    $json.execution.id;
  }
}
{
  {
    $json.execution.url;
  }
}
{
  {
    $json.error.message;
  }
}
{
  {
    $json.error.stack;
  }
}
```

Use isso para enviar alertas no Slack, registrar em um banco de dados ou criar um ticket no Jira em caso de falha.

## Referência da CLI {.cols-2}

### Comandos comuns

```bash
# Start n8n
n8n start

# Start with public tunnel (for webhook testing)
n8n start --tunnel

# Start on a custom port
n8n start --port=5679

# Execute a workflow by ID (non-interactively)
n8n execute --id=<workflow-id>

# Export all workflows to JSON files
n8n export:workflow --all --output=./backups/

# Export a single workflow
n8n export:workflow --id=<id> --output=./wf.json

# Import workflow from file
n8n import:workflow --input=./workflow.json

# Export credentials (encrypted)
n8n export:credentials --all --output=./creds/

# Import credentials
n8n import:credentials --input=./creds/
```

### Principais variáveis de ambiente

```bash
# Server
N8N_HOST=0.0.0.0
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://your-domain.com/

# Timezone
GENERIC_TIMEZONE=Asia/Kolkata

# Database (default: SQLite)
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=localhost
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=n8n
DB_POSTGRESDB_PASSWORD=password

# Auth
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=secret

# Disable telemetry
N8N_DIAGNOSTICS_ENABLED=false
```

## Workflows avançados {.cols-2}

### Sub-workflows

Divida processos grandes em componentes reutilizáveis usando o node **Execute Workflow**.

- **Parent**: envia itens para o sub-workflow.
- **Child**: começa com um **Execute Workflow Trigger**.
- **Return**: os dados do node final do filho são enviados de volta ao pai.

### Community nodes

Estenda o n8n com nodes criados pela comunidade diretamente pela UI.

1. Vá em **Settings** → **Community Nodes**.
2. Digite o nome do pacote npm (por exemplo, `n8n-nodes-browserless`).
3. Clique em **Install**.

### Paginação

Muitos nodes de API têm paginação embutida. Para requests HTTP personalizados:

1. Ative **Pagination** nas configurações do node HTTP Request.
2. Selecione a estratégia (por exemplo, Header Link, Response body, Offset/Limit).
3. O n8n busca todas as páginas automaticamente e gera um único stream de itens.

## Atalhos de teclado {.cols-2}

### Ações no canvas

| Atalho              | Ação                   |
| ------------------- | ---------------------- |
| `Ctrl` `S`          | Salvar workflow        |
| `Ctrl` `Enter`      | Executar workflow      |
| `Ctrl` `Z`          | Desfazer               |
| `Ctrl` `Shift` `Z`  | Refazer                |
| `Ctrl` `A`          | Selecionar todos os nodes |
| `Ctrl` `C`          | Copiar node(s) selecionado(s) |
| `Ctrl` `V`          | Colar node(s)          |
| `Del` / `Backspace` | Excluir node selecionado |
| `F2`                | Renomear node          |
| `Esc`               | Desmarcar / fechar painel |

{.shortcuts}

### Navegação

| Atalho             | Ação                     |
| ------------------ | ------------------------ |
| `Ctrl` `+`         | Aumentar o zoom          |
| `Ctrl` `-`         | Diminuir o zoom          |
| `Ctrl` `0`         | Redefinir o zoom para 100% |
| `Ctrl` `Shift` `F` | Ajustar o workflow à tela |
| `Ctrl` `F`         | Buscar / localizar node  |
| `Tab`              | Abrir o painel seletor de nodes |
| `Space` `+` drag   | Mover o canvas           |

{.shortcuts}
