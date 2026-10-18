---
title: Conventional Commits
date: 2024-03-11 09:51:44
background: bg-[#e86d7a]
tags:
  - permission
categories:
  - Outros
intro: |
  Um cheat sheet dos padrões Conventional Commits e Conventional Comments
plugins:
---

## Primeiros passos {.cols-3}

### Guia rápido

#### Por que usar Conventional Commits

- Estrutura fácil de seguir para mensagens de commit.
- Deixa clara a natureza das mudanças.
- Garante uniformidade nas mensagens de commit entre as equipes.
- Permite versionamento automatizado e geração de changelog.
- Torna o histórico de commits fácil de navegar.
- Permite especificar o 'scope' para maior clareza.
- Tem uma notação especial para breaking changes.
- Facilita o entendimento entre os membros da equipe.
- Torna o processo de revisão eficiente.
- Ajuda na solução de problemas futuros com mensagens de commit descritivas.

#### Estrutura

```javascript
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

[Site oficial](https://www.conventionalcommits.org/en) {.link-arrow}

### Exemplos

- feat: adiciona suporte a jwt
- feat!: breaking change na API
- feat(ui)!: reformula a página de perfil do usuário
- fix: corrige vulnerabilidade de SQL injection
- fix(database): resolve condição de corrida nos dados
- docs: atualiza a seção de setup do README
- style(login): corrige a indentação no componente de login
- refactor: refatora o schema do banco de dados de usuários
- perf: otimiza o código de busca de usuários para respostas mais rápidas
- test: adiciona testes para autenticação jwt
- test(payment): adiciona testes para o gateway de pagamento
- chore: atualiza o script de build
- chore(deps): atualiza as dependências
- build(docker): atualiza o Dockerfile para usar node 14
- ci: adiciona job para testes de integração
- revert: reverte o commit a1b2c3d4e5f

### Tipos

| Tipo     | Descrição                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `feat`   | Introduz um novo recurso                                                                                                        |
| `fix`    | Corrige um bug                                                                                                                  |
| `docs`   | Mudanças apenas na documentação                                                                                                 |
| `style`  | Mudanças no código que não afetam a funcionalidade (ex.: formatação, espaços em branco etc.)                                    |
| refactor | Mudanças no código que não corrigem um bug nem introduzem um recurso, geralmente melhorando a legibilidade ou a estrutura       |
| perf     | Mudanças no código que melhoram o desempenho                                                                                    |
| test     | Adição de testes faltantes ou correções em testes existentes                                                                    |
| `chore`  | Mudanças que não modificam o código-fonte nem os arquivos de teste, como ajustes no processo de build ou adição de dependências |
| build    | Mudanças que afetam o sistema de build ou dependências externas (ex.: mudanças no webpack, pacotes npm)                         |
| ci       | Mudanças nos arquivos de configuração e scripts de Integração Contínua (ex.: Travis, CircleCI, Jenkins)                         |
| revert   | Reverte um commit feito anteriormente                                                                                           |

{.bold-first}

## Especificação {.cols-1}

### Especificação

- Os commits DEVEM ser prefixados com um tipo, que consiste em um substantivo,
  feat, fix etc., seguido do scope OPCIONAL, de ! OPCIONAL e de dois-pontos e
  espaço obrigatórios no final.
- O tipo feat DEVE ser usado quando um commit adiciona um novo recurso à sua
  aplicação ou biblioteca.
- O tipo fix DEVE ser usado quando um commit representa a correção de um bug na
  sua aplicação.
- Um scope PODE ser informado após o tipo. O scope DEVE consistir em um
  substantivo que descreve uma seção da base de código, entre parênteses, por
  exemplo, fix(parser):
- Uma descrição DEVE vir imediatamente após os dois-pontos e o espaço que seguem
  o prefixo tipo/scope. A descrição é um resumo curto das mudanças no código,
  por exemplo, fix: array parsing issue when multiple spaces were contained in
  string.
- Um corpo de commit mais longo PODE ser fornecido após a descrição curta,
  trazendo informações contextuais adicionais sobre as mudanças no código. O
  corpo DEVE começar uma linha em branco após a descrição.
- O corpo do commit é de formato livre e PODE consistir em qualquer número de
  parágrafos separados por quebras de linha.
- Um ou mais footers PODEM ser fornecidos uma linha em branco após o corpo. Cada
  footer DEVE consistir em um token de palavra, seguido de um separador :<space>
  ou <space>#, seguido de um valor de string (isso é inspirado na
  [convenção de trailer do git](https://git-scm.com/docs/git-interpret-trailers)).
- O token de um footer DEVE usar - no lugar de caracteres de espaço em branco,
  por exemplo, Acked-by (isso ajuda a diferenciar a seção de footer de um corpo
  com vários parágrafos). Abre-se uma exceção para BREAKING CHANGE, que também
  PODE ser usado como token.
- O valor de um footer PODE conter espaços e quebras de linha, e a análise DEVE
  terminar quando o próximo par válido de token/separador de footer for
  encontrado.
- Breaking changes DEVEM ser indicadas no prefixo tipo/scope de um commit ou
  como uma entrada no footer.
- Se incluída como footer, uma breaking change DEVE consistir no texto em
  maiúsculas BREAKING CHANGE, seguido de dois-pontos, espaço e descrição, por
  exemplo, BREAKING CHANGE: environment variables now take precedence over
  config files.
- Se incluída no prefixo tipo/scope, uma breaking change DEVE ser indicada por
  um ! imediatamente antes dos :. Se ! for usado, BREAKING CHANGE: PODE ser
  omitido da seção de footer, e a descrição do commit DEVE ser usada para
  descrever a breaking change.
- Tipos além de feat e fix PODEM ser usados nas mensagens de commit, por
  exemplo, docs: update ref docs.
- As unidades de informação que compõem Conventional Commits NÃO DEVEM ser
  tratadas como sensíveis a maiúsculas e minúsculas pelos implementadores, com
  exceção de BREAKING CHANGE, que DEVE estar em maiúsculas.
- BREAKING-CHANGE DEVE ser sinônimo de BREAKING CHANGE quando usado como token
  em um footer.

## Veja também

- [Conventional Commits](https://conventionalcommits.org/) _(conventionalcommits.org)_
