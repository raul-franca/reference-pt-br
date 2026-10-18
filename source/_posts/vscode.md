---
title: VSCode
date: 2021-12-16 13:41:00
background: bg-[#5ba3e6]
tags:
  - text
  - editor
  - shortcut
categories:
  - Ferramentas
intro: |
  Este cheat sheet de referência rápida do VSCode (Visual Studio Code) mostra seus atalhos de teclado e comandos.
---

## Atalhos de teclado para Windows

### Geral

| Atalho                | Ação                                |
| --------------------- | ----------------------------------- |
| `Ctrl` `Shift` `P`    | Mostra a Command Palette            |
| `Ctrl` `P`            | Abertura rápida, ir para arquivo... |
| `Ctrl` `Shift` `N`    | Nova janela/instância               |
| `Ctrl` `Shift` `W`    | Fecha a janela/instância            |
| `Ctrl` `,`            | Configurações do usuário            |
| `Ctrl` `K` `Ctrl` `S` | Atalhos de teclado                  |

{.shortcuts}

### Edição básica {.row-span-2}

| Atalho                  | Ação                                      |
| ----------------------- | ----------------------------------------- |
| `Ctrl` `X`              | Recorta a linha (seleção vazia)           |
| `Ctrl` `C`              | Copia a linha (seleção vazia)             |
| `Alt` `Up/Down`         | Move a linha para cima/baixo              |
| `Shift` `Alt` `Up/Down` | Copia a linha para cima/baixo             |
| `Ctrl` `Shift` `K`      | Exclui a linha                            |
| `Ctrl` `Enter`          | Insere linha abaixo                       |
| `Ctrl` `Shift` `Enter`  | Insere linha acima                        |
| `Ctrl` `Shift` `\`      | Vai para o colchete correspondente        |
| `Ctrl` `]/[`            | Indenta/desindenta a linha                |
| `Home/End`              | Vai para o início/fim da linha            |
| `Ctrl` `Home`           | Vai para o início do arquivo              |
| `Ctrl` `End`            | Vai para o fim do arquivo                 |
| `Ctrl` `Up/Down`        | Rola a linha para cima/baixo              |
| `Alt` `PgUp/PgDown`     | Rola a página para cima/baixo             |
| `Ctrl` `Shift` `[`      | Recolhe (colapsa) a região                |
| `Ctrl` `Shift` `]`      | Expande (descolapsa) a região             |
| `Ctrl` `K` `Ctrl` `[`   | Recolhe (colapsa) todas as sub-regiões    |
| `Ctrl` `K` `Ctrl` `]`   | Expande (descolapsa) todas as sub-regiões |
| `Ctrl` `K` `Ctrl` `0`   | Recolhe (colapsa) todas as regiões        |
| `Ctrl` `K` `Ctrl` `J`   | Expande (descolapsa) todas as regiões     |
| `Ctrl` `K` `Ctrl` `C`   | Adiciona comentário de linha              |
| `Ctrl` `K` `Ctrl` `U`   | Remove comentário de linha                |
| `Ctrl` `/`              | Alterna comentário de linha               |
| `Shift` `Alt` `A`       | Alterna comentário de bloco               |
| `Alt` `Z`               | Alterna a quebra automática de linha      |

{.shortcuts}

### Navegação

| Atalho               | Ação                                       |
| -------------------- | ------------------------------------------ |
| `Ctrl` `T`           | Mostra todos os símbolos                   |
| `Ctrl` `G`           | Vai para a linha...                        |
| `Ctrl` `P`           | Vai para o arquivo...                      |
| `Ctrl` `Shift` `O`   | Vai para o símbolo...                      |
| `Ctrl` `Shift` `M`   | Mostra o painel de problemas               |
| `F8`                 | Vai para o próximo erro ou aviso           |
| `Shift` `F8`         | Vai para o erro ou aviso anterior          |
| `Ctrl` `Shift` `Tab` | Navega pelo histórico do grupo de editores |
| `Alt` `Left/Right`   | Volta/avança                               |
| `Ctrl` `M`           | Alterna o foco ao pressionar Tab           |

{.shortcuts}

### Busca e substituição

| Atalho                | Ação                                                     |
| --------------------- | -------------------------------------------------------- |
| `Ctrl` `F`            | Localiza                                                 |
| `Ctrl` `H`            | Substitui                                                |
| `F3`                  | Localiza o próximo                                       |
| `Shift` `F3`          | Localiza o anterior                                      |
| `Alt` `Enter`         | Seleciona todas as ocorrências da busca                  |
| `Ctrl` `D`            | Adiciona a seleção à próxima ocorrência da busca         |
| `Ctrl` `K` `Ctrl` `D` | Move a última seleção para a próxima ocorrência da busca |
| `Alt` `C/R/W`         | Alterna maiúsculas/minúsculas, regex, palavra inteira    |

{.shortcuts}

### Multi-cursor e seleção

| Atalho                             | Ação                                            |
| ---------------------------------- | ----------------------------------------------- |
| `Alt` `Click`                      | Insere cursor                                   |
| `Ctrl` `Alt` `Up/Down`             | Insere cursor acima/abaixo                      |
| `Ctrl` `U`                         | Desfaz a última operação de cursor              |
| `Shift` `Alt` `I`                  | Insere cursor no fim de cada linha selecionada  |
| `Ctrl` `I`                         | Seleciona a linha atual                         |
| `Ctrl` `Shift` `L`                 | Seleciona todas as ocorrências da seleção atual |
| `Ctrl` `F2`                        | Seleciona todas as ocorrências da palavra atual |
| `Shift` `Alt` `Right`              | Expande a seleção                               |
| `Shift` `Alt` `Left`               | Reduz a seleção                                 |
| `Shift` `Alt` `(drag mouse)`       | Seleção por coluna (caixa)                      |
| `Ctrl` `Shift` `Alt` `(arrow key)` | Seleção por coluna (caixa)                      |
| `Ctrl` `Shift` `Alt` `PgUp/PgDown` | Seleção por coluna página acima/abaixo          |

{.shortcuts}

### Edição avançada de linguagens

| Atalho                 | Ação                            |
| ---------------------- | ------------------------------- |
| `Ctrl` `Space`         | Dispara sugestão                |
| `Ctrl` `Shift` `Space` | Dispara dicas de parâmetros     |
| `Shift` `Alt` `F`      | Formata o documento             |
| `Ctrl` `K` `Ctrl` `F`  | Formata a seleção               |
| `F12`                  | Vai para a definição            |
| `Alt` `F12`            | Espia a definição               |
| `Ctrl` `K` `F12`       | Abre a definição ao lado        |
| `Ctrl` `.`             | Correção rápida                 |
| `Shift` `F12`          | Mostra referências              |
| `F2`                   | Renomeia símbolo                |
| `Ctrl` `K` `Ctrl` `X`  | Remove espaços em branco no fim |
| `Ctrl` `K` `M`         | Altera a linguagem do arquivo   |

{.shortcuts}

### Gerenciamento do editor

| Atalho                         | Ação                                       |
| ------------------------------ | ------------------------------------------ |
| `Ctrl` `F4`                    | Fecha o editor                             |
| `Ctrl` `W`                     | Fecha o editor                             |
| `Ctrl` `K` `F`                 | Fecha a pasta                              |
| `Ctrl` `\`                     | Divide o editor                            |
| `Ctrl` `1/2/3`                 | Foca no 1º, 2º ou 3º grupo de editores     |
| `Ctrl` `K` `Ctrl` `Left/Right` | Foca no grupo de editores anterior/próximo |
| `Ctrl` `Shift` `PgUp/PgDown`   | Move o editor para a esquerda/direita      |
| `Ctrl` `K` `Left/Right`        | Move o grupo de editores ativo             |

{.shortcuts}

### Gerenciamento de arquivos

| Atalho                | Ação                                            |
| --------------------- | ----------------------------------------------- |
| `Ctrl` `N`            | Novo arquivo                                    |
| `Ctrl` `O`            | Abre arquivo...                                 |
| `Ctrl` `S`            | Salva                                           |
| `Ctrl` `Shift` `S`    | Salva como...                                   |
| `Ctrl` `K` `S`        | Salva tudo                                      |
| `Ctrl` `F4`           | Fecha                                           |
| `Ctrl` `K` `Ctrl` `W` | Fecha tudo                                      |
| `Ctrl` `Shift` `T`    | Reabre o editor fechado                         |
| `Ctrl` `K` `Enter`    | Mantém o editor em modo preview aberto          |
| `Ctrl` `Tab`          | Abre o próximo                                  |
| `Ctrl` `Shift` `Tab`  | Abre o anterior                                 |
| `Ctrl` `K` `P`        | Copia o path do arquivo ativo                   |
| `Ctrl` `K` `R`        | Revela o arquivo ativo no Explorer              |
| `Ctrl` `K` `O`        | Mostra o arquivo ativo em nova janela/instância |

{.shortcuts}

### Exibição

| Atalho             | Ação                                             |
| ------------------ | ------------------------------------------------ |
| `F11`              | Alterna tela cheia                               |
| `Shift` `Alt` `0`  | Alterna o layout do editor (horizontal/vertical) |
| `Ctrl` `=/-`       | Aumenta/diminui o zoom                           |
| `Ctrl` `B`         | Alterna a visibilidade da barra lateral          |
| `Ctrl` `Shift` `E` | Mostra o Explorer/alterna o foco                 |
| `Ctrl` `Shift` `F` | Mostra a busca                                   |
| `Ctrl` `Shift` `G` | Mostra o controle de código-fonte                |
| `Ctrl` `Shift` `D` | Mostra a depuração                               |
| `Ctrl` `Shift` `X` | Mostra as extensões                              |
| `Ctrl` `Shift` `H` | Substitui nos arquivos                           |
| `Ctrl` `Shift` `J` | Alterna os detalhes da busca                     |
| `Ctrl` `Shift` `U` | Mostra o painel de saída                         |
| `Ctrl` `Shift` `V` | Abre o preview de Markdown                       |
| `Ctrl` `K` `V`     | Abre o preview de Markdown ao lado               |
| `Ctrl` `K` `Z`     | Modo Zen (Esc Esc para sair)                     |

{.shortcuts}

### Depuração

| Atalho                | Ação                 |
| --------------------- | -------------------- |
| `F9`                  | Alterna o breakpoint |
| `F5`                  | Inicia/continua      |
| `Shift` `F5`          | Para                 |
| `F11`                 | Entra na função      |
| `Shift` `F11`         | Sai da função        |
| `F10`                 | Avança sem entrar    |
| `Ctrl` `K` `Ctrl` `I` | Mostra o hover       |

{.shortcuts}

### Terminal integrado

| Atalho                         | Ação                          |
| ------------------------------ | ----------------------------- |
| `Ctrl` <code>\`</code>         | Mostra o terminal integrado   |
| `Ctrl` `Shift` <code>\`</code> | Cria um novo terminal         |
| `Ctrl` `C`                     | Copia a seleção               |
| `Ctrl` `V`                     | Cola no terminal ativo        |
| `Ctrl` `Up/Down`               | Rola para cima/baixo          |
| `Shift` `PgUp/PgDown`          | Rola a página para cima/baixo |
| `Ctrl` `Home/End`              | Rola até o topo/fim           |

{.shortcuts}

## Atalhos de teclado para MacOS

### Geral

| Atalho       | Ação                              |
| ------------ | --------------------------------- |
| `⇧⌘P` / `F1` | Mostra a Command Palette          |
| `⌘P`         | Abertura rápida, ir para arquivo… |
| `⇧⌘N`        | Nova janela/instância             |
| `⌘W`         | Fecha a janela/instância          |
| `⌘,`         | Configurações do usuário          |
| `⌘K` `⌘S`    | Atalhos de teclado                |

{.shortcuts}

### Edição básica {.row-span-2}

| Atalho               | Ação                                 |
| -------------------- | ------------------------------------ |
| `⌘X`                 | Recorta a linha (seleção vazia)      |
| `⌘C`                 | Copia a linha (seleção vazia)        |
| `⌥↓` / `⌥↑`          | Move a linha para baixo/cima         |
| `⇧⌥↓` / `⇧⌥↑`        | Copia a linha para baixo/cima        |
| `⇧⌘K`                | Exclui a linha                       |
| `⌘Enter` / `⇧⌘Enter` | Insere linha abaixo/acima            |
| `⇧⌘\`                | Vai para o colchete correspondente   |
| `⌘]` / `⌘[`          | Indenta/desindenta a linha           |
| `Home` / `End`       | Vai para o início/fim da linha       |
| `⌘↑` / `⌘↓`          | Vai para o início/fim do arquivo     |
| `⌃PgUp` / `⌃PgDn`    | Rola a linha para cima/baixo         |
| `⌘PgUp` `/⌘PgDn`     | Rola a página para cima/baixo        |
| `⌥⌘[` / `⌥⌘]`        | Recolhe/expande a região             |
| `⌘K ⌘[` / `⌘K ⌘]`    | Recolhe/expande todas as sub-regiões |
| `⌘K ⌘0` / `⌘K ⌘J`    | Recolhe/expande todas as regiões     |
| `⌘K ⌘C`              | Adiciona comentário de linha         |
| `⌘K ⌘U`              | Remove comentário de linha           |
| `⌘/`                 | Alterna comentário de linha          |
| `⇧⌥A`                | Alterna comentário de bloco          |
| `⌥Z`                 | Alterna a quebra automática de linha |

{.shortcuts}

### Multi-cursor e seleção {.row-span-2}

| Atalho            | Ação                                            |
| ----------------- | ----------------------------------------------- |
| `⌥ +`             | Insere cursor (clique)                          |
| `⌥⌘↑`             | Insere cursor acima                             |
| `⌥⌘↓`             | Insere cursor abaixo                            |
| `⌘U`              | Desfaz a última operação de cursor              |
| `⇧⌥I`             | Insere cursor no fim de cada linha selecionada  |
| `⌘L`              | Seleciona a linha atual                         |
| `⇧⌘L`             | Seleciona todas as ocorrências da seleção atual |
| `⌘F2`             | Seleciona todas as ocorrências da palavra atual |
| `⌃⇧⌘→` / ←        | Expande/reduz a seleção                         |
| `⇧⌥` + drag mouse | Seleção por coluna (caixa)                      |
| `⇧⌥⌘↑` / ↓        | Seleção por coluna para cima/baixo              |
| `⇧⌥⌘←` / →        | Seleção por coluna para a esquerda/direita      |
| `⇧⌥⌘PgUp`         | Seleção por coluna página acima                 |
| `⇧⌥⌘PgDn`         | Seleção por coluna página abaixo                |

{.shortcuts}

### Busca e substituição

| Atalho       | Ação                                                     |
| ------------ | -------------------------------------------------------- |
| `⌘F`         | Localiza                                                 |
| `⌥⌘F`        | Substitui                                                |
| `⌘G` / `⇧⌘G` | Localiza o próximo/anterior                              |
| `⌥Enter`     | Seleciona todas as ocorrências da busca                  |
| `⌘D`         | Adiciona a seleção à próxima ocorrência da busca         |
| `⌘K ⌘D`      | Move a última seleção para a próxima ocorrência da busca |

{.shortcuts}

### Edição avançada de linguagens

| Atalho       | Ação                            |
| ------------ | ------------------------------- |
| `⌃Space, ⌘I` | Dispara sugestão                |
| `⇧⌘Space`    | Dispara dicas de parâmetros     |
| `⇧⌥F`        | Formata o documento             |
| `⌘K ⌘F`      | Formata a seleção               |
| `F12`        | Vai para a definição            |
| `⌥F12`       | Espia a definição               |
| `⌘K F12`     | Abre a definição ao lado        |
| `⌘.`         | Correção rápida                 |
| `⇧F12`       | Mostra referências              |
| `F2`         | Renomeia símbolo                |
| `⌘K ⌘X`      | Remove espaços em branco no fim |
| `⌘K M`       | Altera a linguagem do arquivo   |

{.shortcuts}

### Navegação

| Atalho       | Ação                                       |
| ------------ | ------------------------------------------ |
| `⌘T`         | Mostra todos os símbolos                   |
| `⌃G`         | Vai para a linha...                        |
| `⌘P`         | Vai para o arquivo...                      |
| `⇧⌘O`        | Vai para o símbolo...                      |
| `⇧⌘M`        | Mostra o painel de problemas               |
| `F8` / `⇧F8` | Vai para o próximo/anterior erro ou aviso  |
| `⌃⇧Tab`      | Navega pelo histórico do grupo de editores |
| `⌃-` / `⌃⇧-` | Volta/avança                               |
| `⌃⇧M`        | Alterna o foco ao pressionar Tab           |

{.shortcuts}

### Gerenciamento do editor

| Atalho              | Ação                                       |
| ------------------- | ------------------------------------------ |
| `⌘W`                | Fecha o editor                             |
| `⌘K` `F`            | Fecha a pasta                              |
| `⌘\`                | Divide o editor                            |
| `⌘1` / `⌘2` / `⌘3`  | Foca no 1º, 2º, 3º grupo de editores       |
| `⌘K ⌘←` / `⌘K ⌘→`   | Foca no grupo de editores anterior/próximo |
| `⌘K ⇧⌘←` / `⌘K ⇧⌘→` | Move o editor para a esquerda/direita      |
| `⌘K ←` / `⌘K →`     | Move o grupo de editores ativo             |

{.shortcuts}

### Gerenciamento de arquivos {.row-span-2}

| Atalho           | Ação                                            |
| ---------------- | ----------------------------------------------- |
| `⌘N`             | Novo arquivo                                    |
| `⌘O`             | Abre arquivo...                                 |
| `⌘S`             | Salva                                           |
| `⇧⌘S`            | Salva como...                                   |
| `⌥⌘S`            | Salva tudo                                      |
| `⌘W`             | Fecha                                           |
| `⌘K ⌘W`          | Fecha tudo                                      |
| `⇧⌘T`            | Reabre o editor fechado                         |
| `⌘K`             | Enter: mantém o editor em modo preview aberto   |
| `⌃Tab` / `⌃⇧Tab` | Abre o próximo/anterior                         |
| `⌘K P`           | Copia o path do arquivo ativo                   |
| `⌘K R`           | Revela o arquivo ativo no Finder                |
| `⌘K O`           | Mostra o arquivo ativo em nova janela/instância |

{.shortcuts}

### Exibição {.row-span-2}

| Atalho       | Ação                                             |
| ------------ | ------------------------------------------------ |
| `⌃⌘F`        | Alterna tela cheia                               |
| `⌥⌘0`        | Alterna o layout do editor (horizontal/vertical) |
| `⌘=` / `⇧⌘-` | Aumenta/diminui o zoom                           |
| `⌘B`         | Alterna a visibilidade da barra lateral          |
| `⇧⌘E`        | Mostra o Explorer/alterna o foco                 |
| `⇧⌘F`        | Mostra a busca                                   |
| `⌃⇧G`        | Mostra o controle de código-fonte                |
| `⇧⌘D`        | Mostra a depuração                               |
| `⇧⌘X`        | Mostra as extensões                              |
| `⇧⌘H`        | Substitui nos arquivos                           |
| `⇧⌘J`        | Alterna os detalhes da busca                     |
| `⇧⌘U`        | Mostra o painel de saída                         |
| `⇧⌘V`        | Abre o preview de Markdown                       |
| `⌘K V`       | Abre o preview de Markdown ao lado               |
| `⌘K Z`       | Modo Zen (Esc Esc para sair)                     |

{.shortcuts}

### Depuração

| Atalho         | Ação                 |
| -------------- | -------------------- |
| `F9`           | Alterna o breakpoint |
| `F5`           | Inicia/continua      |
| `F11` / `⇧F11` | Entra/sai da função  |
| `F10`          | Avança sem entrar    |
| `⇧F5`          | Para                 |
| `⌘K ⌘I`        | Mostra o hover       |

{.shortcuts}

### Terminal integrado

| Atalho            | Ação                          |
| ----------------- | ----------------------------- |
| <code>⌃\`</code>  | Mostra o terminal integrado   |
| <code>⌃⇧\`</code> | Cria um novo terminal         |
| `⌘C`              | Copia a seleção               |
| `⌘↑` / `↓`        | Rola para cima/baixo          |
| `PgUp` / `PgDn`   | Rola a página para cima/baixo |
| `⌘Home` / `End`   | Rola até o topo/fim           |

{.shortcuts}

## Veja também

- [Atalhos de teclado do VS Code para Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
  _(code.visualstudio.com)_
- [Atalhos de teclado do VS Code para macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
  _(code.visualstudio.com)_
