---
title: Google Search
date: 2023-01-10 09:51:44
background: bg-[#d3594a]
tags:
categories:
  - Outros
intro: |
  Este cheat sheet de referência rápida lista os operadores de busca avançada do Google.
---

## Primeiros passos {.cols-2}

### Operadores de busca avançada do Google

| Operador    | Descrição                                                                                                                                                                                   | Categoria   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `""`        | Permite buscar uma frase específica — pesquisa por correspondência exata. Palavra individual impede sinônimos                                                                                 | Basic,Mail |
| `OR`/`AND`  | Função de busca booleana para buscas OR, já que o Google usa AND por padrão entre as palavras — precisa estar tudo em maiúsculas                                                              | Basic,Mail |
| `\`         | Implementa OR                                                                                                                                                                                 | Basic      |
| `()`        | Permite agrupar operadores e ajuda a definir a ordem                                                                                                                                          | Basic,Mail |
| `-`         | Exclui uma palavra dos resultados                                                                                                                                                             | Basic,Mail |
| `*`         | Funciona como curinga e corresponde a qualquer palavra ou frase                                                                                                                               | Basic      |
| `#..#`      | O # representa um número neste caso. Use para encontrar números em uma sequência.                                                                                                             | Basic      |
| `$`         | Permite buscar por USD                                                                                                                                                                        | Basic      |
| `€`         | Permite buscar por Euro                                                                                                                                                                       | Basic      |
| `in`        | Permite buscas de conversão de unidades (moeda, unidade ou medida)                                                                                                                             | Basic      |
| `~`         | Prefixo — inclui sinônimos (possivelmente obsoleto)                                                                                                                                           | Basic      |
| `+`         | Prefixo — força correspondência exata em uma única frase                                                                                                                                      | Basic,Mail |
| `AROUND(X)` | Fica entre duas palavras e o X declara quantas palavras podem existir entre elas. Ou seja, se for (4), as duas palavras-chave devem aparecer em um intervalo de 4 palavras.                   | Advanced   |
| `_`         | Funciona como curinga para autocomplete                                                                                                                                                       | Advanced   |

### Busca por URL

| Operador    | Descrição                                                                                                                                  | Categoria |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `inurl:`    | Retorna apenas resultados em que a(s) palavra(s)-chave consultada(s) está(ão) presente(s) na URL                                            | Advanced |
| `allinurl:` | Como acima, mas contendo apenas todas as palavras especificadas na URL                                                                      | Advanced |
| `blogurl:`  | Encontra URLs de blogs sob um domínio específico. Isso era usado na busca de blogs do Google, mas notei que ainda retorna alguns resultados na busca comum. | Advanced |
| `site:`     | Limita os resultados aos de um site                                                                                                        | Advanced |
| `related:`  | Encontra domínios similares ao domínio consultado                                                                                          | Advanced |

### Busca por datas

| Operador     | Descrição                                                                                            | Categoria   |
| ------------ | ---------------------------------------------------------------------------------------------------- | ---------- |
| `daterange:` | Retorna resultados em um intervalo especificado (requer datas julianas)                              | Advanced   |
| `after:`     | Permite buscar no drive ou no mail arquivos modificados ou mensagens enviadas/recebidas a qualquer momento após uma data definida | Drive,Mail |
| `before:`    | Permite buscar no drive ou no mail arquivos modificados ou mensagens enviadas/recebidas antes de uma determinada data | Drive,Mail |
| `older:`     | Busca mensagens mais antigas que uma determinada data                                                | Mail       |
| `newer:`     | Busca mensagens mais novas que uma determinada data                                                  | Mail       |

### Busca por arquivos

| Operador        | Descrição                                                                                            | Categoria   |
| --------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| `filename:`     | Busca mensagens com um tipo específico de arquivo anexado, ou o nome exato de um arquivo             | Mail       |
| `type:`         | Permite buscar no drive por tipo de arquivo                                                          | Drive      |
| `owner:`        | Permite buscar no drive pelo proprietário do arquivo ou pasta                                        | Drive      |
| `to:`           | Permite buscar no drive arquivos compartilhados com uma pessoa específica                            | Drive      |
| `title:`        | Busca no drive arquivos com a palavra-chave apenas no título                                         | Drive      |
| `source:domain` | Permite buscar arquivos ou pastas compartilhados com todos na sua empresa                            | Drive      |
| `filetype:`     | Retorna apenas arquivos de um tipo específico associados à palavra-chave buscada                     | Advanced   |
| `ext:`          | Como acima, baseado na extensão                                                                      | Advanced   |
| `after:`        | Permite buscar no drive ou no mail arquivos modificados ou mensagens enviadas/recebidas a qualquer momento após uma data definida | Drive,Mail |
| `before:`       | Permite buscar no drive ou no mail arquivos modificados ou mensagens enviadas/recebidas antes de uma determinada data | Drive,Mail |
| `is:trashed`    | Busca o item na lixeira do Drive                                                                     | Drive      |

### Busca por conteúdo da página

| Operador       | Descrição                                                                                                           | Categoria |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | -------- |
| `link:`        | Encontra páginas que apontam para o domínio de destino                                                              | Advanced |
| `inanchor:`    | Encontra páginas linkadas com o texto âncora/frase especificado. Os dados são fortemente amostrados.                | Advanced |
| `allinanchor:` | Encontra páginas com todos os termos individuais após "inanchor:" no texto âncora de entrada.                       | Advanced |
| `intitle:`     | Retorna páginas com base na consulta buscada aparecendo no título                                                   | Advanced |
| `allintitle:`  | Semelhante a intitle:, mas retorna apenas títulos em que todas as palavras do título correspondem                   | Advanced |
| `inposttile:`  | Encontra páginas com palavras-chave nos títulos dos posts (por exemplo, para pesquisar blogs)                       | &nbsp;   |
| `intext:`      | Encontra páginas em que a(s) palavra(s)-chave é(são) mencionada(s) no conteúdo da página.                           | Advanced |
| `allintext:`   | Semelhante a "intext", mas só retorna resultados que contêm todas as palavras especificadas em algum lugar da página. | Advanced |

### Palavras-chave

| Operador          | Descrição                                                                                        | Categoria |
| ----------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `Business`        | tipo Ex.: cafe, restaurante, bar etc. retornará uma seleção de empresas apropriadas na área      | Maps     |
| `Petrol/Charging` | Station EV near me ou perol station near me retorna                                              | Maps     |
| `Search`          | por uma mensagem com uma planilha do Google anexada                                              | Mail     |
| `Search`          | por uma mensagem com uma apresentação do Google anexada                                          | Mail     |

### Busca em e-mails

| Operador           | Descrição                                                                                             | Categoria   |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ---------- |
| `+`                | Prefixo — força correspondência exata em uma única frase                                              | Basic,Mail |
| `()`               | Permite agrupar operadores e ajuda a definir a ordem                                                  | Basic,Mail |
| `-`                | Exclui uma palavra dos resultados                                                                     | Basic,Mail |
| `""`               | Permite buscar uma frase específica — pesquisa por correspondência exata. Palavra individual impede sinônimos | Basic,Mail |
| `OR`/`AND`         | Função de busca booleana para buscas OR, já que o Google usa AND por padrão entre as palavras — precisa estar tudo em maiúsculas | Basic,Mail |
| `after:`           | Permite buscar no drive ou no mail arquivos modificados ou mensagens enviadas/recebidas a qualquer momento após uma data definida | Drive,Mail |
| `before:`          | Permite buscar no drive ou no mail arquivos modificados ou mensagens enviadas/recebidas antes de uma determinada data | Drive,Mail |
| `is:starred`       | Busca apenas itens que foram marcados com estrela no drive                                            | Drive,Mail |
| `from:`            | Especifica o remetente no Google Mail                                                                 | Mail       |
| `to:`              | Especifica o destinatário no Google Mail                                                              | Mail       |
| `cc:`              | Busca por um destinatário que recebeu cópia no e-mail                                                 | Mail       |
| `bcc:`             | Busca por um destinatário que recebeu cópia oculta no e-mail                                          | Mail       |
| `older:`           | Busca mensagens mais antigas que uma determinada data                                                 | Mail       |
| `newer:`           | Busca mensagens mais novas que uma determinada data                                                   | Mail       |
| `Search`           | por uma mensagem com uma planilha do Google anexada                                                   | Mail       |
| `Search`           | por uma mensagem com uma apresentação do Google anexada                                               | Mail       |
| `AROUND`           | Semelhante à função de busca normal do Google, permite buscar palavras-chave próximas umas das outras. | Mail       |
| `subject:`         | Busca por palavras-chave presentes na linha de assunto                                                | Mail       |
| `{}`               | Use para OR no mail em vez da função OR                                                               | Mail       |
| `label:`           | Busca mensagens que têm um determinado rótulo                                                         | Mail       |
| `has:attachment`   | Busca mensagens que têm um item anexado                                                               | Mail       |
| `has:drive`        | Busca mensagens com um Google Drive anexado                                                           | Mail       |
| `has:document`     | Busca mensagens com um Google Doc anexado                                                             | Mail       |
| `has:youtube`      | Busca uma mensagem contendo um vídeo do YouTube                                                       | Mail       |
| `list:`            | Busca todas as mensagens de uma lista de discussão específica                                         | Mail       |
| `in:anywhere`      | Inclui todas as pastas na busca, incluindo spam e lixeira                                             | Mail       |
| `is:important`     | Busca mensagens marcadas como importantes                                                              | Mail       |
| `label:important`  | O mesmo que is:important                                                                              | Mail       |
| `is:snoozed`       | Busca mensagens que foram adiadas (snoozed)                                                           | Mail       |
| `is:unread`        | Busca mensagens não lidas                                                                             | Mail       |
| `is:read`          | Busca apenas mensagens lidas                                                                          | Mail       |
| `has:yellow-star`  | Busca mensagens com ícone de estrela colorida                                                         | Mail       |
| `has:blue-info`    | Busca mensagens com ícone colorido                                                                    | Mail       |
| `is:chat`          | Busca mensagens do chat                                                                               | Mail       |
| `deliveredto:`     | Busca por endereço de e-mail em mensagens entregues                                                   | Mail       |
| `category:`        | Busca mensagens por categoria. Siga os dois-pontos com o nome da categoria, ex.: category:primary     | Mail       |
| `size:`            | Mensagens maiores que um determinado tamanho em bytes                                                 | Mail       |
| `larger:`          | Mensagens maiores que um determinado tamanho em bytes                                                 | Mail       |
| `smaller:`         | Mensagens menores que um determinado tamanho em bytes                                                 | Mail       |
| `has:userlabels`   | Busca mensagens que têm rótulos personalizados do usuário                                             | Mail       |
| `has:nouserlabels` | Busca mensagens que não têm rótulos personalizados do usuário                                         | Mail       |

### Outros operadores de busca úteis

| Operador    | Descrição                                                                                                                                                              | Categoria |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `define:`   | Traz um card de resposta do Google exibindo a definição de dicionário da palavra ou frase                                                                             | Advanced |
| `cache:`    | Retorna o cache mais atualizado de uma página web indexada                                                                                                             | Advanced |
| `weather:`  | Mostra o featured snippet de previsão do tempo para aquele local                                                                                                       | Advanced |
| `stocks:`   | Retorna informações de ações para o ticker especificado                                                                                                                | Advanced |
| `map:`      | Força resultados do Google Maps para uma consulta específica                                                                                                           | Advanced |
| `movie:`    | Encontra informações do filme especificado (especialmente útil quando o filme tem nome ambíguo). Se o filme ainda estiver em cartaz, também retorna os horários das sessões | Advanced |
| `source:`   | Use no Google News; retorna resultados da fonte especificada                                                                                                           | Advanced |
| `loc:`      | Retorna resultados para um local específico                                                                                                                            | Advanced |
| `location:` | Como acima, mas com o Google News                                                                                                                                      | Advanced |
| `info:`     | Retorna informações relacionadas a um domínio (páginas com texto do domínio, páginas similares no site, cache etc.)                                                    | Advanced |
| `near`      | Parte das buscas preguiçosas do Google Maps, ex.: livrarias perto do trabalho                                                                                          | Maps     |

## Veja também

- [Cheat sheet de operadores de busca do Google](https://static.semrush.com/blog/uploads/files/39/12/39121580a18160d3587274faed6323e2.pdf)
  _(static.semrush.com)_
