# Guia de tradução — pt-BR

Este projeto é um site de cheat sheets para desenvolvedores. A tradução deve soar natural para quem é dev brasileiro,
sem “traduzir” nomes de comandos, identificadores ou termos consagrados da área.

## Princípio central

Traduza o **texto explicativo**. Nunca traduza o que é **código, identificador ou nome próprio**.

Se um termo técnico é mais claro em inglês para um dev, mantenha em inglês. Tradução “burra” é pior do que manter o
termo original.

## O que NUNCA traduzir

- Blocos de código, comandos, flags, operadores, saídas de terminal e exemplos.
- Código inline entre crases: `` `docker run` ``, `` `order_by` ``, `` `--force` ``, `` `~/.ssh/config` ``.
- Nomes de arquivos, diretórios, paths, URLs, âncoras e extensões.
- Chaves de front matter (`title`, `date`, `tags`, `categories`, `intro`, `plugins`, `background`…).
- Nomes de produtos, empresas, linguagens, frameworks, serviços e sites (Docker, Kubernetes, GitHub, Python, VS Code…).
- Nomes de funções, classes, métodos, variáveis, APIs, endpoints, headers, tabelas e colunas.
- Atributos HTML, classes CSS, tags EJS (`<% %>`, `<%= %>`), shortcodes (`{.cols-2}`, `{.shortcuts}`) e comentários de código.
- Mensagens e depoimentos de terceiros (ex.: agradecimentos de patrocinadores).

## O que traduzir

- Títulos de seção, descrições de tabela, listas explicativas, parágrafos, avisos e introduções (`intro`).
- Comentários de documentação e texto visível de UI (labels, placeholders, `title=`, `aria-label=`).
- Descrições em tabelas de atalhos e comandos (“Save” → “Salvar”, “List all containers” → “Lista todos os containers”).

## Termos que permanecem em inglês

Mantenha quando usados como termo técnico/identifier: `path`, `root`, `home`, `run`, `install`, `build`, `deploy`,
`commit`, `branch`, `merge`, `push`, `pull`, `request`, `response`, `endpoint`, `payload`, `query`, `join`, `index`,
`cache`, `thread`, `pool`, `container`, `image`, `volume`, `mount`, `pod`, `node`, `cluster`, `hook`, `callback`,
`middleware`, `wrapper`, `mock`, `stub`, `feature flag`, `rollback`, `hotfix`, `release`, `tag`, `fork`, `issue`,
`pull request`, `workflow`, `pipeline`, `runtime`, `framework`, `template`, `boilerplate`, `snippet`, `script`,
`shell`, `prompt`, `token`, `embedding`, `fine-tuning`, `dataset`, `overfitting`, `checkpoint`, `batch`.

Quando o termo for usado como verbo comum na frase, use o verbo em português com naturalidade:
“Install the package” → “Instale o pacote”; “Run the command” → “Execute o comando”.
Mas preserve o termo quando ele for o próprio comando: “o comando `install`”, “a flag `--run`”.

## Convenções de estilo

- Trate o leitor por “você” apenas quando necessário; prefira imperativo (“Crie”, “Execute”, “Abra”).
- Use “cells”/“células” conforme o contexto de planilhas; “linha” e “coluna” para tabelas.
- “Shortcut” → “atalho”; “keyboard shortcut” → “atalho de teclado”.
- “Cheat sheet” → “cheat sheet” (termo consagrado), não “folha de cola”.
- “Container” → “container”; “image” → “imagem” somente em texto corrido, nunca em nomes.
- “Command” → “comando”; “option/flag” → “opção”/“flag”.
- “File” → “arquivo”; “folder” → “pasta”; “directory” → “diretório”.
- “Default” → “padrão”; “deprecated” → “descontinuado”; “legacy” → “legado”.
- “Troubleshooting” → “solução de problemas”; “Getting started” → “Primeiros passos”.
- Preserve o estilo de tabela, a ordem das linhas e a quantidade de colunas.
- Preserve quebras de linha e estrutura Markdown. Não reorganize seções.

## Categorias (traduzir apenas no front matter `categories`)

| Original             | pt-BR                  |
| -------------------- | ---------------------- |
| Keyboard Shortcuts   | Atalhos de Teclado     |
| Programming          | Programação            |
| Linux Command        | Comandos Linux         |
| Other                | Outros                 |
| Toolkit              | Ferramentas            |
| AI                   | IA                     |
| Database             | Banco de Dados         |
| Operating System     | Sistema Operacional    |
| Game                 | Jogos                  |
| Testing              | Testes                 |
| Productivity         | Produtividade          |
| Software             | Software               |
| Python               | Python                 |

`tags` permanecem como estão (são palavras-chave técnicas).

## Exemplo

Antes:

```markdown
### General commands

| Example             | Description             |
| ------------------- | ----------------------- |
| `docker ps`         | List running containers |
| `docker images`     | List all images         |

Run the container in background.
```

Depois:

```markdown
### Comandos gerais

| Exemplo             | Descrição                     |
| ------------------- | ----------------------------- |
| `docker ps`         | Lista os containers em execução |
| `docker images`     | Lista todas as imagens        |

Execute o container em segundo plano.
```
