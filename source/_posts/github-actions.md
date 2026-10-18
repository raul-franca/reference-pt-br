---
title: Github Actions
date: 2023-11-28
icon:
background: bg-[#808080]
tags:
  - Github
  - CICD
categories:
  - Ferramentas
intro:
  Uma referência rápida do Github Actions para a automação de workflows de software, permitindo que desenvolvedores façam build, teste e
  deploy de código diretamente dos seus repositórios GitHub.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

[GitHub Actions](https://docs.github.com/en/actions) é uma plataforma de CI/CD que permite a automação de workflows de software,
permitindo que desenvolvedores façam build, teste e deploy de código diretamente dos seus repositórios GitHub.

---

### Arquivos de workflow

Os workflows do Github Actions são definidos em arquivos YAML especiais, normalmente armazenados em um diretório `.github/workflows` no
repositório do github.

```yaml
name: hello-world
on: push
jobs:
  hello-world-job:
    runs-on: ubuntu-latest
    steps:
      - name: Hello World
        run: echo "Hello World!"
```

**Visualizando as execuções do seu workflow**

- No GitHub.com, navegue até a página principal do repositório.
- Abaixo do nome do repositório, clique em `Actions`.
- Na barra lateral esquerda, clique no workflow que deseja exibir, neste exemplo "hello-world"

---

### Sintaxe de workflow

```yaml
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

### Descrições da sintaxe de workflow

| Linha                 | Descrição                                                                                                                                                                     |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name:`               | Define o nome do workflow do GitHub Actions. É um rótulo usado para identificar o workflow no repositório.                                                                   |
| `run-name:`           | Define um nome personalizado para a execução, usando um contexto do GitHub `${{ github.actor }}` para incluir o nome do usuário que iniciou a execução.                       |
| `on:`                 | Especifica o evento que dispara o workflow. Neste caso, o workflow é disparado em qualquer evento `push` para o repositório.                                                  |
| `jobs:`               | Define um grupo de jobs que serão executados como parte do workflow. Cada job é executado de forma independente no workflow.                                                  |
| `check-bats-version:` | Identificador de um job específico dentro do workflow. Este job se chama `check-bats-version`.                                                                                |
| `runs-on:`            | Especifica o tipo de máquina em que o job será executado. Aqui, está definido para executar na versão mais recente do Ubuntu.                                                 |
| `steps:`              | Contém uma sequência de tarefas (steps) que serão executadas como parte do job.                                                                                              |
| `uses:`               | Usado para especificar uma action a incluir como parte de um step. Por exemplo, `actions/checkout@v4` faz o checkout do repositório, e `actions/setup-node@v3` configura um ambiente Node. |
| `with:`               | Especifica parâmetros adicionais para a action. É usado junto com `uses` para configurar a action.                                                                             |
| `node-version:`       | Contém um parâmetro em `with`, especificando a versão do Node.js a ser configurada pela action `setup-node`. Neste caso, está definida para a versão '14'.                     |

### Eventos

```yaml
name: Event-trigger-on-push-example

on: [push] # event is defined here

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run a script
        run: echo "This workflow runs on every push to the repository."
```

**Gatilhos de eventos**

| Nome do evento                | Descrição                                       |
| :---------------------------- | :---------------------------------------------- |
| `push`                        | Dispara em um push para o repositório.          |
| `pull_request`                | Dispara em eventos de pull request.             |
| `pull_request_review`         | Dispara em eventos de review de pull request.   |
| `pull_request_review_comment` | Dispara em comentários em reviews de pull request. |
| `pull_request_target`         | Para workflows em repositórios com fork.        |
| `fork`                        | Dispara quando um repositório recebe fork.      |
| `issue_comment`               | Dispara em comentários em issues e PRs.         |
| `issues`                      | Dispara em eventos de issue.                    |
| `label`                       | Dispara em eventos de label.                    |
| `milestone`                   | Dispara em eventos de milestone.                |
| `deployment`                  | Dispara no deploy.                              |
| `deployment_status`           | Dispara em atualizações de status de deploy.    |
| `public`                      | Dispara quando o repositório passa de privado para público. |
| `repository_dispatch`         | Dispara em um evento personalizado do repositório. |
| `schedule`                    | Dispara em um agendamento definido.             |
| `workflow_dispatch`           | Permite o disparo manual do workflow.           |
| `workflow_run`                | Dispara na conclusão de outro workflow.         |
| `create`                      | Dispara quando um branch ou tag é criado.       |
| `delete`                      | Dispara quando um branch ou tag é excluído.     |
| `page_build`                  | Dispara em eventos de build do GitHub Pages.    |
| `release`                     | Dispara em eventos de release.                  |
| `watch`                       | Dispara quando alguém dá star no repositório.   |
| `registry_package`            | Dispara em eventos de pacote do registry.       |
| `status`                      | Dispara em atualizações de status de um commit Git. |
| `project`                     | Dispara em eventos de project board.            |
| `project_card`                | Dispara em eventos de project card.             |
| `project_column`              | Dispara em eventos de project column.           |
| `member`                      | Dispara em eventos de colaborador.              |
| `gollum`                      | Dispara em atualizações de página wiki.         |

### Jobs

Job único:

```yaml
name: Single Job
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run a build script
        run: script/build
```

Múltiplos jobs:

```yaml
name: CI Workflow

on: [push]

jobs:
  job-1:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Runs job 1
        run: echo "Running Job 1"

  job-2:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Runs job 2
        run: echo "Running Job 2"

  job-3:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Runs job 3
        run: echo "Running Job 3"
```

### Steps

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # step 1
      - name: Check out repository
        uses: actions/checkout@v2

      # step 2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      # step 3
      - name: Install dependencies
        run: npm install

      # step 4
      - name: Run tests
        run: npm test
```

### Runners do Github e runners self-hosted

[Github Hosted Runner](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners):

```yaml
name: Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest # default runner
    steps:
      - uses: actions/checkout@v2
      - name: Run a script
        run: echo "Hello, world!"
```

[Self Hosted Runner](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)

```yaml
name: Workflow with Self-Hosted Runner
on: [push]
jobs:
  build:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v2
      - name: Run a script
        run: echo "Hello from self-hosted runner!"
```

### Variáveis de ambiente

Variável personalizada definida usando environments.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      CUSTOM_VARIABLE: 'Hello, World!' # Custom variable defined using env:
    steps:
      - name: Check environment variable
        run: echo "Value of CUSTOM_VAR is $CUSTOM_VAR"
```

### Secrets

Para adicionar um novo secret no seu repositório do github, navegue até `Repository` > `Settings` > `Security` >
`Secrets and Variables` > `Actions` > `New Repository Secret`

Exemplo de workflow com secrets:

```yaml
name: Workflow with Secrets

on: [push]

jobs:
  example_job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Use a secret
        run: echo "The secret is ${{ secrets.MY_SECRET }}"
```

### Artifacts

Para acessar seu artifact, navegue até `Repository` > `Actions` > `Workflow Run` > `Artifacts`

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build project
        run: make build
      - name: Upload build artifact
        uses: actions/upload-artifact@v3 # upload Artifacts prebuilt action
        with:
          name: my-artifact
          path: path/to/artifact
```

### Cache de dependências

Os caches de dependências armazenam pacotes baixados ou binários compilados dos seus workflows.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Cache dependencies
        uses: actions/cache@v2 # stores downloaded packages or compiled binaries
        with:
          path: |
            path/to/dependencies
            another/path
          key: ${{ runner.os }}-deps-${{ hashFiles('**/lockfile') }} # hash of the dependency lock file is generated in the OS
      - name: Install dependencies
        run: install-command
```

### Estratégias de matriz

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
        # matrix strategy runs enables you to run jobs across multiple combinations of environments and OS's
        os: [ubuntu-latest, windows-latest, macOS-latest]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm test
        env:
          CI: true
```

### Condições e expressões

Condições de branch:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run build
        if: github.ref == 'refs/heads/main' # "Run build" step will only execute if the current branch is main.
        run: make build
```

Condições de gatilho de evento:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run tests
        if: github.event_name == 'pull_request' # "Run tests" step is executed only when the workflow is triggered by a pull request event
        run: npm test
```

### Comandos de workflow

Dependendo do seu sistema operacional, se estiver usando ubuntu-latest, os comandos bash devem funcionar

```yaml
steps:
  - name: Set environment variable
    run: echo "NAME=value" >> $GITHUB_ENV
```

### Concorrência

O campo concurrency cria um grupo com base em `github.head_ref`. Se uma nova execução começar dentro do mesmo grupo de
concorrência, ela cancela as execuções em andamento.

```yaml
jobs:
  my_job:
    runs-on: ubuntu-latest
    concurrency:
      group: ${{ github.head_ref }}
      cancel-in-progress: true
    steps:
      - name: Run a script
        run: echo "Running script..."
```

## Veja também

- [YAML](/yaml) _(cheatsheets.zip)_
- [Github](/github) _(cheatsheets.zip)_
- [Documentação do Github Actions](https://docs.github.com/en/actions)_(docs.github.com/en/actions)_
