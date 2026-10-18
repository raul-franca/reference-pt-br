---
title: Git
date: 2020-11-25 18:28:43
background: bg-[#d7593e]
tags:
  - github
  - gitlab
  - version
  - VCS
categories:
  - Comandos Linux
intro: Este cheat sheet resume os comandos de linha de comando do Git mais usados para consulta rápida.
plugins:
  - copyCode
---

## Primeiros passos

### Criar um repositório

Crie um novo repositório local

```shell script
$ git init [project name]
```

Clone um repositório

```shell script
$ git clone git_url
```

Clone um repositório em um diretório específico

```shell script
$ git clone git_url my_directory
```

### Fazer uma alteração {.row-span-2}

Mostra os arquivos modificados no diretório de trabalho, preparados para o próximo commit

```shell script
$ git status
```

Prepara o arquivo, deixando-o pronto para o commit

```shell script
$ git add [file]
```

Prepara todos os arquivos alterados, deixando-os prontos para o commit

```shell script
$ git add .
```

Faz commit de todos os arquivos preparados no histórico de versões

```shell script
$ git commit -m "commit message"
```

Faz commit de todos os arquivos rastreados no histórico de versões

```shell script
$ git commit -am "commit message"
```

Descarta alterações no diretório de trabalho que não foram preparadas

```shell script
$ git restore [file]
```

Remove da área de preparação um arquivo preparado

```shell script
$ git restore --staged [file]
```

Remove um arquivo da área de preparação, mantendo as alterações no arquivo

```shell script
$ git reset [file]
```

Reverte tudo para o último commit

```shell script
$ git reset --hard
```

Diff do que foi alterado, mas não preparado

```shell script
$ git diff
```

Diff do que está preparado, mas ainda não foi commitado

```shell script
$ git diff --staged
```

Aplica os commits da branch atual que estão à frente da branch especificada

```shell script
$ git rebase [branch]
```

### Configuração

Define o nome que será anexado aos seus commits e tags

```shell script
$ git config --global user.name "name"
```

Define um endereço de e-mail que será anexado aos seus commits e tags

```shell script
$ git config --global user.email "email"
```

Ativa a colorização da saída do Git

```shell script
$ git config --global color.ui auto
```

Edita o arquivo de configuração global em um editor de texto

```shell script
$ git config --global --edit
```

### Trabalhando com branches

Lista todas as branches locais

```shell script
$ git branch
```

Lista todas as branches, locais e remotas

```shell script
$ git branch -av
```

Troca para my_branch e atualiza o diretório de trabalho

```shell script
$ git switch my_branch
```

Cria uma nova branch chamada new_branch

```shell script
$ git switch -c new_branch
```

Exclui a branch chamada my_branch

```shell script
$ git branch -d my_branch
```

Faz merge da branchA na branchB

```shell script
$ git checkout branchB
$ git merge branchA
```

Cria uma tag no commit atual

```shell script
$ git tag my_tag
```

### Observar seu repositório

Mostra o histórico de commits da branch ativa no momento

```shell script
$ git log
```

Mostra os commits da branchA que não estão na branchB

```shell script
$ git log branchB..branchA
```

Mostra os commits que alteraram o arquivo, mesmo com renomeações

```shell script
$ git log --follow [file]
```

Mostra o diff do que está na branchA e não está na branchB

```shell script
$ git diff branchB...branchA
```

Mostra qualquer objeto do Git em formato legível por humanos

```shell script
$ git show [SHA]
```

### Sincronizar

Baixa todas as branches daquele remoto do Git

```shell script
$ git fetch [alias]
```

Faz merge de uma branch remota na sua branch atual para deixá-la atualizada

```shell script
$ git merge [alias]/[branch]
# No fast-forward
$ git merge --no-ff [alias]/[branch]
# Only fast-forward
$ git merge --ff-only [alias]/[branch]
```

Transmite os commits da branch local para a branch do repositório remoto

```shell script
$ git push [alias] [branch]
```

Baixa e faz merge de quaisquer commits da branch remota rastreada

```shell script
$ git pull
```

Faz merge de apenas um commit específico de outra branch na sua branch atual

```shell script
$ git cherry-pick [commit_id]
```

### Remoto

Adiciona uma URL do git como alias

```shell script
$ git remote add [alias] [url]
```

Mostra os nomes dos repositórios remotos que você configurou

```shell script
$ git remote
```

Mostra os nomes e as URLs dos repositórios remotos

```shell script
$ git remote -v
```

Remove um repositório remoto

```shell script
$ git remote rm [remote repo name]
```

Altera a URL do repositório git

```shell script
$ git remote set-url origin [git_url]
```

### Commits temporários

Salva as alterações modificadas e preparadas

```shell script
$ git stash
```

Lista a ordem da pilha de alterações de arquivos guardadas no stash

```shell script
$ git stash list
```

Restaura o trabalho a partir do topo da pilha do stash

```shell script
$ git stash pop
```

Descarta as alterações do topo da pilha do stash

```shell script
$ git stash drop
```

### Rastreando mudanças de path

Exclui o arquivo do projeto e prepara a remoção para o commit

```shell script
$ git rm [file]
```

Altera o path de um arquivo existente e prepara a movimentação

```shell script
$ git mv [existing-path] [new-path]
```

Mostra todos os logs de commit com indicação dos paths que foram movidos

```shell script
$ git log --stat -M
```

### Ignorando arquivos

```
/logs/*

# "!" means don't ignore
!logs/.gitkeep

/# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore SASS config files
.sass-cache
```

Um arquivo `.gitignore` especifica arquivos que o Git deve ignorar intencionalmente, deixando-os sem rastreamento

## Truques do Git

### Renomear branch

- #### **Renomeado** para `new_name`
  ```shell script
  $ git branch -m <new_name>
  ```
- #### **Push** e reset
  ```shell script
  $ git push origin -u <new_name>
  ```
- #### **Excluir** a branch remota
  ```shell script
  $ git push origin --delete <old>
  ```
  {.marker-timeline}

### Log

Pesquisa alterações por conteúdo

```shell script
$ git log -S'<a term in the source>'
```

Mostra as alterações ao longo do tempo para um arquivo específico

```shell script
$ git log -p <file_name>
```

Imprime uma visualização bacana do seu log

```shell script {.wrap}
$ git log --pretty=oneline --graph --decorate --all
```

Lista os arquivos alterados em um commit

```shell script
$ git log --name-only <commit-id>
```

Lista os arquivos alterados nos commits, excluindo merges

```shell script
$ git log --no-merges --name-only
```

Limita os commits às últimas N entradas

```shell script
$ git log -<number>
```

Limita os commits às últimas N entradas (sintaxe alternativa)

```shell script
$ git log -n <number>
```

Limita os commits a no máximo N entradas

```shell script
$ git log --max-count=<number>
```

Mostra commits mais recentes que uma data específica

```shell script
$ git log --after="YYYY-MM-DD HH:MM:SS ±HHMM"
```

Mostra commits mais antigos que uma data específica

```shell script
$ git log --before="YYYY-MM-DD HH:MM:SS ±HHMM"
```

Filtra commits por autor correspondente a um padrão

```shell script
$ git log --author=<pattern>
```

Filtra commits pela mensagem de commit correspondente a um padrão

```shell script
$ git log --grep=<pattern>
```

Mostra o grafo de commits da branch atual com decorações de referência

```shell script
$ git log --graph --decorate
```

Mostra o grafo de commits de uma branch específica sem trocar para ela

```shell script
$ git log --graph --decorate <branch>
```

Mostra o grafo de commits dos commits que estão em uma branch e não em outra

```shell script
$ git log --graph --decorate <branchB>..<branchA>
```

Mostra o grafo de commits de todas as branches

```shell script
$ git log --graph --decorate --all
```

### Branch {.row-span-2}

Lista todas as branches e seus upstreams

```shell script
$ git branch -vv
```

Troca rapidamente para a branch anterior

```shell script
$ git checkout -
```

Obtém apenas as branches remotas

```shell script
$ git branch -r
```

Faz checkout de um único arquivo de outra branch

```shell script
$ git checkout <branch> -- <file>
```

### Reescrever o histórico

Reescreve a mensagem do último commit

```shell script
$ git commit --amend -m "new message"
```

Altera o último commit sem mudar a mensagem do commit.

```shell script
$ git commit --amend --no-edit
```

Veja também: [Reescrever o histórico](https://www.atlassian.com/git/tutorials/rewriting-history)

### Aliases do Git

```cmd
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

Veja também: [Mais aliases](https://gist.github.com/johnpolacek/69604a1f6861129ef088)

## Git avançado

### Worktrees

Cria uma nova árvore de trabalho no path especificado. Se uma branch for informada, faz checkout dela. Se nenhuma branch for informada, cria uma nova com base no HEAD e com o nome do novo diretório.

```shell script
$ git worktree add <path> [<branch>]
```

Lista todas as árvores de trabalho ativas associadas ao repositório.

```shell script
$ git worktree list
```

Remove a árvore de trabalho especificada.

```shell script
$ git worktree remove <path>
```

Limpa árvores de trabalho obsoletas ou excluídas manualmente.

```shell script
$ git worktree prune
```

Move a árvore de trabalho para um novo path.

```shell script
$  git worktree move <old_path> <new_path>
```

### Submódulos

Crie um novo submódulo dentro do seu repositório:

```shell script
$ git submodule add <repository_url> <path>
```

Clone um repositório e inicialize seus submódulos:

```shell script
$ git clone --recursive <repository_url>
```

Atualiza todos os submódulos do seu repositório para o último commit de suas respectivas branches:

```shell script
$ git submodule update
```

Baixa as últimas alterações dos repositórios remotos dos submódulos e as atualiza no seu repositório principal:

```shell script
$ git submodule update --remote
```

Remove um submódulo do seu repositório:

```shell script
$ git submodule deinit <path>
$ git rm <path>
$ git commit -m "Removed submodule"
```

### Cherry-picking

O cherry-picking permite aplicar um commit específico de uma branch em outra branch.

```shell script
$ git cherry-pick <commit_hash>
```

### Reflog

Exibe o reflog, mostrando o histórico de movimentações do HEAD e das branches:

```shell script
$ git reflog
```

Encontre o hash do commit ou da branch perdidos usando o reflog e depois faça checkout para esse hash para restaurá-los:

```shell script
$ git checkout <commit_or_branch_hash>
```
