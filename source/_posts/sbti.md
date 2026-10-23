---
title: SBTI
date: 2026-04-10 16:20:00
background: bg-[#ff6b3d]
tags:
  - Personality
  - Test
  - Entertainment
  - Reference
categories:
  - Outros
intro: Cheat sheet do SBTI para entender rapidamente como funciona esse teste de personalidade recreativo, a lógica de pontuação, as 15 dimensões e os 27 códigos de resultado.
plugins:
  - copyCode
---

## Início rápido {.cols-2}

### Comece por aqui

- [Iniciar o teste](https://sbti.now/)
- [Todos os tipos](https://sbti.now/types)
- [O que é o SBTI](https://sbti.now/what-is-sbti)
- [SBTI vs MBTI](https://sbti.now/sbti-vs-mbti)
- [Instruções do site oficial](https://sbti.now/official)

### Resumo em uma frase

- `SBTI` é um teste de personalidade recreativo, não uma avaliação psicológica séria.
- O ponto mais forte não é a cientificidade, mas sim as perguntas curtas, os resultados esquisitos e as capturas de tela fáceis de compartilhar.
- A lógica do site oficial é, essencialmente, correspondência de regras no frontend, e não um cálculo profundo no backend.
- Para buscas em inglês, é melhor usar termos longos como `SBTI personality test`.

### Como usar este cheat sheet

| O que você quer fazer agora | Onde olhar                                                   |
| --------------------------- | ------------------------------------------------------------ |
| Entender primeiro o que é   | `一句话认识` (resumo em uma frase), `一眼看懂` (visão geral) |
| Começar o teste direto      | `先看这里` (comece por aqui)                                 |
| Ver a lógica de pontuação   | `规则总览` (visão geral das regras)                          |
| Conhecer os códigos e nomes | `类型速查` (consulta rápida de tipos)                        |
| Comparar com o MBTI         | `和 MBTI 的区别` (diferenças em relação ao MBTI)             |

### Intenções de busca comuns

| Termo buscado   | Intenção provável             |
| --------------- | ----------------------------- |
| `sbti 人格`     | Começar o teste direto        |
| `sbti 人格测试` | Encontrar o site              |
| `sbti 类型`     | Ver todos os resultados       |
| `sbti 结果`     | Ver a explicação do resultado |
| `sbti vs mbti`  | Ver as diferenças             |

## Visão geral das regras {.cols-2}

### Entendendo de relance

| Item                  | Descrição                                                                         |
| --------------------- | --------------------------------------------------------------------------------- |
| Formato do produto    | Matcher de personalidade puramente frontend, de página única e orientado a regras |
| Perguntas oficiais    | 30 perguntas                                                                      |
| Perguntas especiais   | 2 perguntas                                                                       |
| Perguntas respondidas | Normalmente 31, e 32 quando o branch de bebida é acionado                         |
| Número de dimensões   | 15 dimensões                                                                      |
| Personalidades padrão | 25 protótipos predefinidos                                                        |
| Resultados especiais  | `DRUNK`, `HHHH`                                                                   |
| Mecanismo final       | Vetor `L/M/H` de 15 dimensões + correspondência por vizinho mais próximo          |

### Fluxo do teste

| Etapa | O que acontece                                                                         |
| ----- | -------------------------------------------------------------------------------------- |
| `1`   | As `30` perguntas oficiais são embaralhadas ao começar                                 |
| `2`   | `drink_gate_q1` é inserida aleatoriamente e nunca é a primeira pergunta                |
| `3`   | `drink_gate_q2` só aparece quando o branch de bebida é acionado                        |
| `4`   | As perguntas oficiais contam pontos; as especiais só tratam do branch e da sobrescrita |
| `5`   | No final, o resultado normalmente é uma das `25` personalidades padrão                 |

### As 15 dimensões {.row-span-2}

| Grupo de modelo     | Dimensão                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Modelo do self      | `S1 自尊自信` (autoconfiança e autoestima), `S2 自我清晰度` (clareza sobre si), `S3 核心价值` (valores centrais)                |
| Modelo afetivo      | `E1 依恋安全感` (segurança no apego), `E2 情感投入度` (envolvimento emocional), `E3 边界与依赖` (limites e dependência)         |
| Modelo de atitude   | `A1 世界观倾向` (tendência de visão de mundo), `A2 规则与灵活度` (regras e flexibilidade), `A3 人生意义感` (senso de propósito) |
| Modelo de motivação | `Ac1 动机导向` (orientação da motivação), `Ac2 决策风格` (estilo de decisão), `Ac3 执行模式` (modo de execução)                 |
| Modelo social       | `So1 社交主动性` (iniciativa social), `So2 人际边界感` (limites interpessoais), `So3 表达与真实度` (expressão e autenticidade)  |

Cada dimensão tem sempre 2 perguntas, e as 15 dimensões têm peso igual.  
Funciona mais como “comprimir você em um vetor de personalidade” e depois buscar o protótipo de resultado mais parecido.

### Mapeamento L / M / H

Cada dimensão soma duas perguntas e depois é comprimida pela regra abaixo:

| Pontuação bruta | Mapeamento |
| --------------- | ---------- |
| `2-3`           | `L`        |
| `4`             | `M`        |
| `5-6`           | `H`        |

```js
for each dimension:
  raw = q1 + q2
  if raw <= 3 => L
  if raw == 4 => M
  if raw >= 5 => H
```

### Os dois resultados especiais

| Resultado | Como é acionado                                                      | Descrição                      |
| --------- | -------------------------------------------------------------------- | ------------------------------ |
| `DRUNK`   | A pergunta oculta sobre bebida acerta uma opção específica           | Sobrescreve o resultado normal |
| `HHHH`    | A similaridade com a personalidade mais próxima fica abaixo de `60%` | Personalidade de fallback      |

### Lembre-se destes pontos

- Apenas as 30 perguntas oficiais entram na pontuação.
- Não há pesos complexos nem significado de avaliação clínica.
- `q22` é uma pergunta de decisão forçada, com alto poder de discriminação.
- `drink_gate_q2` não é uma pergunta que soma pontos, mas um switch de resultado.

## Consulta rápida de tipos {.cols-2}

### Tipos mais frequentes

| Código   | Nome        | Tag de temperamento                      |
| -------- | ----------- | ---------------------------------------- |
| `CTRL`   | Quem domina | Diretor dos bastidores que controla tudo |
| `BOSS`   | Líder       | Executor que assume o controle           |
| `MALO`   | Malo        | Fonte de alegria caótica                 |
| `FAKE`   | Impostor    | Ator que se adapta a tudo                |
| `LOVE-R` | Romântico   | Jogador emocional do tipo paixão         |
| `MUM`    | Mãe         | Estabilizador que cuida                  |
| `THIN-K` | Pensador    | Diretor de drama mental analítico        |
| `OJBK`   | Indiferente | Competidor zen de baixo esforço          |

### Como ler o resultado

- Palavras em maiúsculas como `CTRL` e `MALO` são códigos de resultado.
- O nome em chinês serve para tornar o resultado mais fácil de lembrar e de compartilhar.
- O verdadeiro resultado de base não são quatro letras, mas a combinação `L/M/H` de 15 dimensões.
- `DRUNK` e `HHHH` são branches especiais e não seguem totalmente a lógica dos tipos comuns.

### Todos os códigos de resultado {.col-span-2}

| Código   | Nome        | Código   | Nome             |
| -------- | ----------- | -------- | ---------------- |
| `CTRL`   | Quem domina | `ATM-er` | Quem dá dinheiro |
| `Dior-s` | Loser       | `BOSS`   | Líder            |
| `THAN-K` | Grato       | `OH-NO`  | Ah, não          |
| `GOGO`   | Andarilho   | `SEXY`   | Sedutor          |
| `LOVE-R` | Romântico   | `MUM`    | Mãe              |
| `FAKE`   | Impostor    | `OJBK`   | Indiferente      |
| `MALO`   | Malo        | `JOKE-R` | Palhaço          |
| `WOC!`   | Chocado     | `THIN-K` | Pensador         |
| `SHIT`   | Rancoroso   | `ZZZZ`   | Finge de morto   |
| `POOR`   | Pobre       | `MONK`   | Monge            |
| `IMSB`   | Tonto       | `SOLO`   | Solitário        |
| `FUCK`   | Irritado    | `DEAD`   | Morto            |
| `IMFW`   | Inútil      | `HHHH`   | Alegre bobo      |
| `DRUNK`  | Bêbado      |          |                  |

## Busca e navegação {.cols-2}

### Diferenças em relação ao MBTI

| SBTI                                                          | MBTI                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------ |
| Voltado ao entretenimento                                     | Baseado em um framework de tipos psicológicos          |
| Perguntas curtas, resultados esquisitos, alta viralização     | Resultados mais sérios e semanticamente estáveis       |
| `L/M/H` em 15 dimensões + correspondência com protótipos      | 4 dimensões de letras são mais comuns                  |
| Melhor para printar, compartilhar e chamar amigos para testar | Melhor para discussões de personalidade de longo prazo |

### Ordem de visita recomendada

1. Primeiro, acesse [Iniciar o teste](https://sbti.now/)
2. Depois, veja [Todos os tipos](https://sbti.now/types)
3. Para entender o contexto, veja [O que é o SBTI](https://sbti.now/what-is-sbti)
4. Para comparar, veja [SBTI vs MBTI](https://sbti.now/sbti-vs-mbti)

### Por que a busca em inglês costuma sair do rumo

- Em inglês, `SBTI` também costuma se referir à `Science Based Targets initiative`.
- Por isso, buscar apenas o termo solto `sbti` facilmente traz resultados sobre clima ou ESG.
- O mais seguro costuma ser usar `SBTI test`, `SBTI personality test` ou `Silly Big Personality Test`.

### Partes que vale a pena salvar

- Para explicar rapidamente a um amigo: veja `一句话认识` (resumo em uma frase)
- Para entender como a conta é feita: veja `规则总览` (visão geral das regras)
- Para conhecer os códigos de persona: veja `全部结果代码` (todos os códigos de resultado)
- Para encontrar o site oficial: veja `先看这里` (comece por aqui)
