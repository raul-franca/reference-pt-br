---
title: Emacs
date: 2020-12-17 16:21:49
background: bg-[#7752a9]
tags:
  - editor
  - text
  - shortcut
categories:
  - Ferramentas
intro: |
  O [Emacs](https://www.gnu.org/software/emacs) é o editor de texto extensível, personalizável e auto-documentado com exibição em tempo real.
  Esta referência foi feita para o Emacs 27.
plugins:
  - copyCode
---

## Primeiros passos

### Iniciando o Emacs

Para entrar no Emacs, basta digitar o nome dele:

```shell
$ emacs
```

---

| -           | -                      |
| ----------- | :--------------------- |
| `C-z`       | Suspende o Emacs       |
| `C-x` `C-c` | Sai do Emacs definitivamente |

{.shortcuts}

### Descrição global {.secondary}

| -         | -                                           |
| --------- | :------------------------------------------ |
| `C-<key>` | Significa segurar Control e pressionar `<key>`   |
| `M-<key>` | Significa pressionar Esc uma vez e pressionar `<key>` |

{.shortcuts}

NOTA: Esta cheat sheet segue as regras acima.

### Movimento {.row-span-2}

| Para trás | Para frente | Entidade a percorrer            |
| --------- | ----------- | :------------------------------ |
| `C-b`     | `C-f`       | Caractere                       |
| `M-b`     | `M-f`       | Palavra                         |
| `C-p`     | `C-n`       | Linha                           |
| `C-a`     | `C-e`       | Início da linha<br/>_(ou fim)_  |
| `M-a`     | `M-e`       | Frase                           |
| `M-{`     | `M-}`       | Parágrafo                       |
| `C-x` `[` | `C-x` `]`   | Página                          |
| `C-M-b`   | `C-M-f`     | Sexp                            |
| `C-M-a`   | `C-M-e`     | Função                          |
| `M-<`     | `M->`       | Início do buffer<br>_(ou fim)_  |

{.shortcuts .show-header}

### Alteração de caixa

| -           | -                |
| ----------- | :--------------- |
| `M-u`       | Palavra em maiúsculas   |
| `M-l`       | Palavra em minúsculas   |
| `M-c`       | Capitaliza a palavra  |
| `C-x` `C-u` | Região em maiúsculas |
| `C-x` `C-l` | Região em minúsculas |

{.shortcuts}

### Arquivos

| -           | -                                                |
| ----------- | :----------------------------------------------- |
| `C-x` `C-f` | Lê um arquivo no Emacs                           |
| `C-x` `C-s` | Salva um arquivo de volta no disco               |
| `C-x` `s`   | Salva todos os arquivos                          |
| `C-x` `i`   | Insere o conteúdo de outro arquivo neste buffer  |
| `C-x` `C-v` | Substitui este arquivo pelo seu arquivo          |
| `C-x` `C-w` | Grava o buffer em um arquivo especificado        |
| `C-x` `C-q` | Alterna o status somente leitura do buffer       |

{.shortcuts}

### Recuperação de erros

| -                           | -                                          |
| --------------------------- | :----------------------------------------- |
| `C-g`                       | Aborta um comando parcialmente digitado ou em execução |
| `M-x` recover-session       | Recupera arquivos perdidos em uma queda do sistema |
| `C-x` `u`<br>`C-_`<br>`C-/` | Desfaz uma alteração indesejada            |
| `M-x` revert-buffer         | Restaura um buffer ao conteúdo original    |
| `C-l`                       | Redesenha a tela corrompida                |

{.shortcuts}

### Transposição {.row-span-2}

| -           | -                    |
| ----------- | :------------------- |
| `C-t`       | Transpõe caracteres  |
| `M-t`       | Transpõe palavras    |
| `C-x` `C-t` | Transpõe linhas      |
| `C-M-t`     | Transpõe sexps       |

{.shortcuts .table-fixed}

#### Rolagem

| -         | -                                              |
| --------- | :--------------------------------------------- |
| `C-v`     | Rola para a próxima tela                       |
| `M-v`     | Rola para a tela anterior                      |
| `C-x` `<` | Rola para a esquerda                           |
| `C-x` `>` | Rola para a direita                            |
| `C-l`     | Rola a linha atual para <br>o centro, o topo, a base |

{.shortcuts .table-fixed}

#### Ir para

| -         | -                   |
| --------- | :------------------ |
| `M-g` `g` | Vai para a linha    |
| `M-g` `c` | Vai para o caractere |
| `M-m`     | Volta para a indentação |

{.shortcuts .table-fixed}

### Marcação

| -                 | -                       |
| ----------------- | :---------------------- |
| `C-@`<br/>`C-SPC` | Define a marca aqui     |
| `C-x` `C-x`       | Troca o ponto e a marca |
| `M-@`             | Define a marca a arg palavras de distância |
| `M-h`             | Marca o parágrafo       |
| `C-x` `C-p`       | Marca a página          |
| `C-M-@`           | Marca o sexp            |
| `C-M-h`           | Marca a função          |
| `C-x` `h`         | Marca o buffer inteiro  |

{.shortcuts}

### Killing e exclusão {.row-span-2}

| Para trás     | Para frente | Entidade a remover       |
| ------------- | ----------- | :----------------------- |
| `DEL`         | `C-d`       | Caractere <br>_(delete)_ |
| `M-DEL`       | `M-d`       | Palavra                  |
| `M-0` `C-k`   | `C-k`       | Linha <br/> _(até o fim da)_ |
| `C-x` `DEL`   | `M-k`       | Frase                    |
| `M--` `C-M-k` | `C-M-k`     | Sexp                     |

{.shortcuts .show-header}

#### Killing

| -          | -                                    |
| ---------- | :----------------------------------- |
| `C-W`      | Kill da região C-w                   |
| `M-w`      | Copia a região para o kill ring      |
| `M-z` char | Remove até a próxima ocorrência de char |
| `C-y`      | Recoloca (yank) a última coisa removida |
| `M-y`      | Substitui o último yank pelo kill anterior |

{.shortcuts}

### Obtendo ajuda

| -         | -                                        |
| --------- | :--------------------------------------- |
| `C-x` `1` | Remove a janela de ajuda                 |
| `C-M-v`   | Rola a janela de ajuda                   |
| `C-h` `a` | Apropos: mostra comandos que correspondem a uma string |
| `C-h` `k` | Descreve a função executada por uma tecla |
| `C-h` `f` | Descreve uma função                      |
| `C-h` `m` | Obtém informações específicas do modo    |

{.shortcuts}

O sistema de ajuda é simples. Digite `C-h` (ou `F1`) e siga as instruções. Se for a primeira vez que você usa o Emacs, digite `C-h` `t`
para um tutorial.

### Múltiplas janelas {.col-span-2}

Quando dois comandos são mostrados, o segundo é um comando semelhante para um frame em vez de uma janela.

| -               | -               | -                                   |
| --------------- | --------------- | :---------------------------------- |
| `C-x` `5` `1`   | `C-x` `1`       | Exclui todas as outras janelas      |
| `C-x` `5` `2`   | `C-x` `2`       | Divide a janela, acima e abaixo     |
| `C-x` `5` `0`   | `C-x` `0`       | Exclui esta janela                  |
| `C-x` `3`       |                 | Divide a janela, lado a lado        |
| `C-M-v`         |                 | Rola a outra janela                 |
| `C-x` `5` `o`   | `C-x` `o`       | Move o cursor para outra janela     |
| `C-x` `5` `b`   | `C-x` `4` `b`   | Seleciona o buffer em outra janela  |
| `C-x` `5` `C-o` | `C-x` `4` `C-o` | Exibe o buffer em outra janela      |
| `C-x` `5` `f`   | `C-x` `4` `f`   | Localiza o arquivo em outra janela  |
| `C-x` `5` `r`   | `C-x` `4` `r`   | Localiza o arquivo como somente leitura em outra janela |
| `C-x` `5` `d`   | `C-x` `4` `d`   | Executa o Dired em outra janela     |
| `C-x` `5` `.`   | `C-x` `4` `.`   | Localiza a tag em outra janela      |
| `C-x` `^`       |                 | Aumenta a altura da janela          |
| `C-x` `{`       |                 | Diminui a largura da janela         |
| `C-x` `}`       |                 | Aumenta a largura da janela         |

{.shortcuts}

### Formatação

| -           | -                                        |
| ----------- | :--------------------------------------- |
| `TAB`       | Indenta a linha atual (depende do modo)  |
| `C-M-\`     | Indenta a região (depende do modo)       |
| `C-M-q`     | Indenta o sexp (depende do modo)         |
| `C-x` `TAB` | Indenta a região rigidamente em arg colunas |
| `M-;`       | Indenta para comentário                  |
| `C-o`       | Insere uma nova linha após o ponto       |
| `C-M-o`     | Move o restante da linha verticalmente para baixo |
| `C-x` `C-o` | Exclui as linhas em branco ao redor do ponto |
| `M-^`       | Une a linha à anterior (com arg, à seguinte) |
| `M-\`       | Exclui todos os espaços em branco ao redor do ponto |
| `M-SPC`     | Coloca exatamente um espaço no ponto     |
| `M-q`       | Preenche o parágrafo                     |
| `C-x` `f`   | Define a coluna de preenchimento como arg |
| `C-x` `.`   | Define o prefixo com que cada linha começa |
| `M-o`       | Define a face                            |

{.shortcuts}

### Info {.row-span-2}

| -         | -                                           |
| --------- | :------------------------------------------ |
| `C-h` `i` | Entra no leitor de documentação Info        |
| `C-h` `S` | Localiza a função ou variável especificada no Info |

{.shortcuts .table-fixed}

#### Movimentação dentro de um nó

| -     | -                 |
| ----- | :---------------- |
| `SPC` | Rola para frente  |
| `DEL` | Rola para trás    |
| `b`   | Início do nó      |

{.shortcuts .table-fixed}

#### Movimentação entre nós

| -   | -                                      |
| --- | :------------------------------------- |
| `n` | Próximo nó                             |
| `p` | Nó anterior                            |
| `u` | Sobe                                   |
| `m` | Seleciona o item de menu pelo nome     |
| `n` | Seleciona o n-ésimo item de menu por número (1–9) |
| `f` | Segue a referência cruzada (volte com l) |
| `l` | Volta ao último nó que você viu        |
| `d` | Volta ao nó de diretório               |
| `t` | Vai para o nó superior do arquivo Info |
| `g` | Vai para qualquer nó pelo nome         |

{.shortcuts .table-fixed}

#### Outros

| -   | -                                |
| --- | :------------------------------- |
| `h` | Executa o tutorial do Info       |
| `i` | Consulta um assunto nos índices  |
| `s` | Pesquisa regexp nos nós          |
| `q` | Sai do Info                      |

{.shortcuts .table-fixed}

### Minibuffer

As teclas a seguir são definidas no minibuffer.

| -     | -                                       |
| ----- | :-------------------------------------- |
| `TAB` | Completa o máximo possível              |
| `SPC` | Completa até uma palavra                |
| `RET` | Completa e executa                      |
| `?`   | Mostra as conclusões possíveis          |
| `M-p` | Recupera a entrada anterior do minibuffer |
| `M-n` | Recupera a próxima entrada do minibuffer ou o padrão |
| `M-r` | Pesquisa regexp para trás no histórico  |
| `M-s` | Pesquisa regexp para frente no histórico |
| `C-g` | Aborta o comando                        |

{.shortcuts}

Digite `C-x` `ESC` `ESC` para editar e repetir o último comando que usou o minibuffer. Digite `F10` para ativar os itens
da barra de menus em terminais de texto.

### Tags

| -                        | -                                          |
| ------------------------ | :----------------------------------------- |
| `M-.`                    | Localiza uma tag (uma definição)           |
| `C-u` `M-.`              | Localiza a próxima ocorrência da tag       |
| `M-x` visit-tags-table   | Especifica um novo arquivo de tags         |
| `M-x` tags-search        | Pesquisa regexp em todos os arquivos da tabela de tags |
| `M-x` tags-query-replace | Executa query-replace em todos os arquivos |
| `M-,`                    | Continua a última pesquisa de tags ou o query-replace |

{.shortcuts}

### Retângulos

| -             | -                                   |
| ------------- | :---------------------------------- |
| `C-x` `r` `r` | Copia o retângulo para o register   |
| `C-x` `r` `k` | Remove o retângulo                  |
| `C-x` `r` `y` | Recoloca o retângulo                |
| `C-x` `r` `o` | Abre o retângulo, deslocando o texto para a direita |
| `C-x` `r` `c` | Esvazia o retângulo                 |
| `C-x` `r` `t` | Prefixa cada linha com uma string   |

{.shortcuts}

### Macros de teclado

| -                         | -                                   |
| ------------------------- | :---------------------------------- |
| `C-x` `(`                 | Começa a definir uma macro de teclado |
| `C-x` `)`                 | Encerra a definição da macro de teclado |
| `C-x` `e`                 | Executa a última macro de teclado definida |
| `C-u` `C-x` `(`           | Acrescenta à última macro de teclado |
| `M-x` name-last-kbd-macro | Nomeia a última macro de teclado    |
| `M-x` insert-kbd-macro    | Insere a definição Lisp no buffer   |

{.shortcuts}

### Buffers

| -           | -                     |
| ----------- | :-------------------- |
| `C-x` `b`   | Seleciona outro buffer |
| `C-x` `C-b` | Lista todos os buffers |
| `C-x` `k`   | Remove um buffer      |

{.shortcuts}

## Pesquisa no Emacs

### Regex (comum) {.row-span-2}

| -             | -                                            |
| ------------- | :------------------------------------------- |
| `.` `(dot)`   | Qualquer caractere único, exceto uma nova linha |
| `*`           | Zero ou mais repetições                      |
| `+`           | Uma ou mais repetições                       |
| `?`           | Zero ou uma repetição                        |
| `\`           | Escapa caracteres especiais                  |
| `\c`          | Escapa o caractere especial c de expressão regular |
| `\|`          | Alternativa (“ou”)                           |
| `\(...\)`     | Agrupamento                                  |
| `\(:?...\)`   | Agrupamento shy                              |
| `\(:NUM...\)` | Agrupamento numerado explícito               |
| `\n`          | Mesmo texto do n-ésimo grupo                 |
| `\b`          | Em fronteira de palavra                      |
| `\B`          | Fora de fronteira de palavra                 |

### Regex (entrada)

| Início | Fim   | Entidade |
| ------ | ----- | :------- |
| `^`    | `$`   | Linha    |
| `\<`   | `\>`  | Palavra  |
| `\_<`  | `\_>` | Símbolo  |
| `\‘`   | `\’`  | Buffer   |

{.show-header}

### Regex (conflito)

| Estes   | Outros   | classe                    |
| ------- | -------- | :------------------------ |
| `[...]` | `[^...]` | Conjunto explícito        |
| `\w`    | `\W`     | Caractere com sintaxe de palavra |
| `\sc`   | `\Sc`    | Caractere com sintaxe c   |
| `\cc`   | `\Cc`    | Caractere com categoria c |

{.show-header}

### Pesquisa incremental

| -       | -                                 |
| ------- | :-------------------------------- |
| `C-s`   | Pesquisa para frente              |
| `C-r`   | Pesquisa para trás                |
| `C-M-s` | Pesquisa por expressão regular    |
| `C-M-r` | Pesquisa reversa por expressão regular |
| `M-p`   | Seleciona a string de pesquisa anterior |
| `M-n`   | Seleciona a próxima string de pesquisa |
| `RET`   | Sai da pesquisa incremental       |
| `DEL`   | Desfaz o efeito do último caractere |
| `C-g`   | Aborta a pesquisa atual           |

{.shortcuts}

Use `C-s` ou `C-r` novamente para repetir a pesquisa em qualquer direção. Se o Emacs ainda estiver pesquisando, `C-g` cancela apenas
a parte que não teve correspondência.

### Query replace

| -            | -                                    |
| ------------ | :----------------------------------- |
| `M-%`        | Substitui interativamente uma string de texto |
| `M-x` regexp | Usando expressões regulares          |
| `SPC` / `y`  | Substitui esta e vai para a próxima  |
| `,`          | Substitui esta e não avança          |
| `DEL` / `n`  | Pula para a próxima sem substituir   |
| `!`          | Substitui todas as ocorrências restantes |
| `^`          | Volta para a ocorrência anterior     |
| `RET`        | Sai do query-replace                 |
| `C-r`        | Entra na edição recursiva (C-M-c para sair) |

{.shortcuts}

## Diversos

### Shells

| -           | -                                      |
| ----------- | :------------------------------------- |
| `M-!`       | Executa um comando de shell            |
| `M-&`       | Executa um comando de shell de forma assíncrona |
| `M-`        | Executa um comando de shell na região  |
| `C-u` `M-`  | Filtra a região por um comando de shell |
| `M-x` shell | Inicia um shell na janela shell        |

{.shortcuts}

### Conjuntos de caracteres internacionais {.col-span-2}

| -                          | -                                  |
| -------------------------- | :--------------------------------- |
| `C-x` `RET` `l`            | Especifica o idioma principal      |
| `M-x` list-input-methods   | Mostra todos os métodos de entrada |
| `C-\`                      | Ativa ou desativa o método de entrada |
| `C-x` `RET` `c`            | Define o sistema de codificação para o próximo comando |
| `M-x` list-coding-systems  | Mostra todos os sistemas de codificação |
| `M-x` prefer-coding-system | Escolhe o sistema de codificação preferido |

{.shortcuts}

### Registers

| -               | -                                    |
| --------------- | :----------------------------------- |
| `C-x` `r` `s`   | Salva a região no register           |
| `C-x` `r` `i`   | Insere o conteúdo do register no buffer |
| `C-x` `r` `SPC` | Salva o valor do ponto no register   |
| `C-x` `r` `j`   | Salta para o ponto salvo no register |

{.shortcuts}

### Diversos

| -          | -                 |
| ---------- | :---------------- |
| `C-u` num  | Argumento numérico |
| `M--`      | Argumento negativo |
| `C-q` char | Inserção citada   |

{.shortcuts}

### Comandos para lidar com Emacs Lisp

| -                  | -                                  |
| ------------------ | :--------------------------------- |
| `C-x` `C-e`        | Avalia o sexp antes do ponto       |
| `C-M-x`            | Avalia a defun atual               |
| `M-x` eval-region  | Avalia a região                    |
| `M-:`              | Lê e avalia o minibuffer           |
| `M-x` load-library | Carrega uma biblioteca Lisp do load-path |

{.shortcuts}

### Personalização simples

| -                 | -                             |
| ----------------- | :---------------------------- |
| `M-x` `customize` | personaliza variáveis e faces |

Criando key bindings globais em Emacs Lisp:

```{.wrap}
(global-set-key (kbd "C-c g") ’search-forward)
(global-set-key (kbd "M-#") ’query-replace-regexp)
```

### Abbrevs

| -                 | -                                        |
| ----------------- | :--------------------------------------- |
| `C-x` `a` `g`     | Adiciona um abbrev global                |
| `C-x` `a` `l`     | Adiciona um abbrev local do modo         |
| `C-x` `a` `i` `g` | Adiciona uma expansão global para este abbrev |
| `C-x` `a` `i` `l` | Adiciona uma expansão local do modo para este abbrev |
| `C-x` `a` `e`     | Expande o abbrev explicitamente          |
| `M-/`             | Expande a palavra anterior dinamicamente |

{.shortcuts}

### Verificação ortográfica

| -                   | -                                     |
| ------------------- | :------------------------------------ |
| `M-$`               | Verifica a ortografia da palavra atual |
| `M-x` ispell-region | Verifica a ortografia de todas as palavras da região |
| `M-x` ispell-buffer | Verifica a ortografia do buffer inteiro |
| `M-x` flyspell-mode | Ativa ou desativa a verificação ortográfica em tempo real |

{.shortcuts}

### Escrevendo comandos {.col-span-2}

#### Sintaxe

```lisp
(defun command-name (args)
"documentation" (interactive "template")
body)
```

#### Exemplo

```lisp
(defun this-line-to-top-of-window (line)
    "Reposition current line to top of window.
With prefix argument LINE, put point on LINE."
    (interactive "P")
    (recenter (if (null line)
                  0
              (prefix-numeric-value line))))
```

A especificação interativa diz como ler os argumentos interativamente. Digite `C-h` `f` interactive `RET` para mais detalhes.
