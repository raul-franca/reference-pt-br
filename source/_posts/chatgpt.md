---
title: ChatGPT
date: 2023-02-09 10:28:43
background: bg-[#4aa181]
tags:
  - AI
  - OpenAI
  - Prompts
  - Tips
categories:
  - IA
intro: Este cheat sheet reúne prompts e dicas de todo o mundo sobre como usar o ChatGPT com eficácia
plugins:
  - copyCode
---

## Glossário

### IA

- Prompt: entrada ou consulta que orienta um modelo de IA na geração de uma
  resposta.[[s]](https://time.com/collections/the-ai-dictionary-from-allbusiness-com/7273982/definition-of-prompt-ai-prompt)
- Tokens: as menores unidades de texto processadas por um modelo de IA (por exemplo, palavras, subpalavras, caracteres e sinais de pontuação)
  que variam conforme o modelo e o método de
  tokenização.[[s]](https://time.com/collections/the-ai-dictionary-from-allbusiness-com/7273998/definition-of-token/)
- Limite de tokens: o número máximo de tokens que um modelo de IA consegue processar em uma
  interação.[[s]](https://time.com/collections/the-ai-dictionary-from-allbusiness-com/7273998/definition-of-token/)
- Inteligência artificial (IA): tecnologia que permite às máquinas simular a cognição humana (por exemplo, aprendizado,
  compreensão, resolução de problemas, tomada de decisão, criatividade e
  autonomia).[[s]](https://www.ibm.com/think/topics/artificial-intelligence)
- Modelo de IA: programa treinado com um conjunto de dados para reconhecer padrões ou tomar decisões sem intervenção
  humana adicional.[[s]](https://www.ibm.com/think/topics/ai-model)
- Large language model (LLM): modelo de IA baseado em transformer, treinado com grandes datasets de texto para entender e
  gerar linguagem natural.[[s]](https://www.ibm.com/think/topics/large-language-models)
- Alucinação: resposta de IA que detecta padrões inexistentes e cria saídas sem sentido e
  imprecisas.[[s]](https://www.ibm.com/think/topics/ai-hallucinations)
- Jailbreak: exploração de vulnerabilidades em sistemas de IA para contornar suas diretrizes éticas e executar ações
  restritas.[[s]](https://www.ibm.com/think/insights/ai-jailbreak)

### Técnicas de Prompt Engineering

- Zero-shot: prompt sem exemplos.[[s]](https://www.ibm.com/think/topics/zero-shot-prompting)
- One-shot: prompt com um exemplo.[[s]](https://www.ibm.com/think/topics/one-shot-prompting)
- Few-shot: prompt com vários exemplos.[[s]](https://www.ibm.com/think/topics/few-shot-prompting)
- Chain of thought: prompt que orienta o modelo a dividir um raciocínio complexo em etapas
  intermediárias.[[s]](https://cloud.google.com/discover/what-is-prompt-engineering?hl=en)

### Modos

- Estudar e aprender: aprendizado interativo que incentiva a resolução de problemas passo a passo em vez de dar respostas
  diretas.[[s]](https://openai.com/index/chatgpt-study-mode/)
- Criar imagem: gera imagens a partir de prompts de
  texto.[[s]](https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview)
- Pensar por mais tempo: faz um raciocínio mais profundo e gera respostas mais precisas, ponderadas e
  detalhadas.[[s]](https://openai.com/index/introducing-gpt-5)
- Pesquisa profunda: lê e sintetiza conteúdo de várias fontes online e produz saídas estruturadas com
  citações.[[s]](https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview)
- Busca na web: encontra informações recentes e em tempo real
  online.[[s]](https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview)
- Canvas: interface separada para escrita e programação colaborativas que oferece edição inline, sugestões e
  feedback.[[s]](https://openai.com/index/introducing-canvas/)

## Dicas de prompt

### Eficiência

- Use o modelo mais recente, pois em geral ele é mais capaz e mais fácil de
  usar com prompts.[[s]](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
- Forneça instruções gerais no início das conversas ou ao mudar de direção para evitar repeti-las.
- Não use frases de cortesia com a IA (por exemplo, por favor, obrigado), pois isso adiciona custos computacionais
  desnecessários.[[s]](https://www.techradar.com/computing/artificial-intelligence/chatgpt-spends-tens-of-millions-of-dollars-on-people-playing-please-and-thank-you-but-sam-altman-says-its-worth-it?utm_source=chatgpt.com)
- Não peça ajuda explicitamente à IA (por exemplo, você pode me ajudar a fazer x?).
- Não faça referência explícita a si mesmo, a menos que precise esclarecer várias entidades (por exemplo, eu quero, faça x para mim).

### Clareza

- Seja claro, específico e forneça contexto suficiente para o modelo entender o que você está
  pedindo.[[s]](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
- Prompt engineering costuma exigir refinamento iterativo, ajustando o texto, adicionando contexto e simplificando
  solicitações.[[s]](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
- Divida tarefas complexas em prompts menores e mais
  focados.[[s]](https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model)
- Especifique áreas de foco, destaque aspectos importantes e peça várias
  opções.[[s]](https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model)
- Forneça exemplos do formato de saída desejado para melhorar a
  precisão.[[s]](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
- Concentre-se em especificar o que fazer, e não apenas o que
  evitar.[[s]](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
- Antes de escrever um prompt, identifique o objetivo e a saída
  esperada.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Forneça palavras-chave ou frases importantes sempre que possível para facilitar o SEO e comunicar as preferências de termos ao modelo de
  IA.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Mantenha os prompts precisos e limpos, omitindo informações desnecessárias ou
  redundantes.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Evite termos conflitantes que possam confundir a
  IA.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Perguntas abertas geralmente geram respostas mais detalhadas do que [perguntas fechadas] e perguntas de
  sim/não.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)
- Em caso de dúvida, peça à IA para gerar prompts para
  você.[[s]](https://www.techtarget.com/searchenterpriseai/definition/AI-prompt)

### Segurança

- Não compartilhe informações sensíveis com a IA, pois não é possível ter certeza de como elas são armazenadas, se serão compartilhadas ou se estão
  vulneráveis a vazamentos de
  dados.[[s]](https://www.grantthornton.com/insights/articles/advisory/2023/anticipate-cybersecurity-and-privacy-risks-in-ai)

## Estrutura do prompt

### Frameworks de prompt

Uso geral

```
[role] [task] [style] [output format] [constraint]
```

### Papel

Padrão

- Aja como [occupation] com [specifications]
- [Lista de papéis](https://github.com/f/awesome-chatgpt-prompts)

Roleplay

- Aja como [name] com [visual description] [personality] [behaviour examples] [lore] em [scenario]

### Tarefas (Linguagem e texto) {.secondary}

[verb] [task] [specifics]

Gerar

- Gere [content type] para [entity] sobre [topic] e cubra [aspects]
- Gere [names|numbers|words|ideas|X] aleatórios que correspondam a [criteria]
- [Continue|estenda|amplie]

Resumir

- [Resuma|encurte|escreva de forma concisa|escreva os pontos principais|escreva a lição principal]
- Crie um esboço

Refinar

- [Escreva melhor|melhore]
- Parafraseie
- Corrija erros de ortografia, gramática e pontuação
- Mude [narrative voice A] para [narrative voice B]
- Substitua X por Y

Explicar

- [Explique|detalhe]
- Explique [como fazer|cada etapa de] X
- Explique o que X faz
- Explique X [em termos simples|como se eu tivesse 5 anos|simplifique]; Simplifique X
- Ensine-me sobre [topic|subject]
- Forneça [example|analogy]

Organizar

- Ordene X por [key] em [order]
- Categorize

Aconselhar

- Crie [strategy|goals|milestones|roadmap|schedule|timeline] para X
- Recomende [media type] [on|similar to] [topic]
- Recomende [gifts|X] para [entity|occasion]
- Recomende melhorias
- Forneça [advice|feedback] para X

Analisar

- Extraia [themes|keywords|info] sobre X
- Identifique [similarities|differences] entre X e Y
- Analise o [sentiment|tone] de X
- Identifique lacunas em X
- Avalie [strengths and weaknesses|pros and cons] de X
- X é [comparison] Y?

Traduzir

- Traduza [language A] para [language B]
- Converta [unit A] em [unit B]
- Reformate como [output format]

Filtrar

- Filtre itens em que [condition]
- Escolha o melhor de [options]
- Escolha [top|lowest|first|last|random] [quantity] de [options]

Engajar

- Forneça perguntas sobre X

Pesquisar

- Obtenha [facts|news|data] atualizados sobre X
- Encontre [sources|references|citations] para X
- Isso é verdade?

### Tarefas (Meta) {.secondary}

Memória do chat

- Com base em [previous context] faça X

### Tarefas (Código) {.secondary}

Gerar

- Gere código em [programming language] para fazer X

Traduzir

- Traduza [programming language A] para [programming language B]

Otimizar

- Otimize X para [benefit]

Depurar

- Depure X e explique por que ele está fazendo Y

### Tarefas (Imagem) {.secondary}

Gerar

- Gere uma imagem de X em [style]

Editar

- Edite a imagem para ter X

### Tarefas (Upload de arquivo e imagem) {.secondary}

Explicar

- Pergunte o que é mostrado
- Interprete os elementos visuais

Análise

- Extraia dados

### Tarefa (Perguntas 5W1H) {.secondary}

Quem

- Quem é X?
- Quem está [involved|affected by|responsible] por X?
- Quem devo contatar para obter ajuda com X?

O quê

- [O que é|defina|explique|descreva] X?
- Quais são os tópicos principais de X?
- O que significa [quote]?
- [O que está bem feito?|o que pode ser melhorado?]
- Qual é a melhor forma de fazer X?

Quando

- Quando X [aconteceu|vai acontecer]?
- Qual é o melhor momento para fazer X?

Onde

- Onde X aconteceu?
- Onde encontrar X?

Por quê

- Por que X aconteceu?
- Por que essa abordagem é usada?
- Por que X é importante?
- Por que X pode ter sucesso ou falhar?
- Por que X é preferível a Y?

Como

- Como fazer X?
- Como X funciona?
- Como isso aconteceu?

### Estilo

Usando [style]

Imitar

- Usando o estilo de [person|brand|genre|character]

Formalidade

- Formal
- Informal

Diretividade

- Direto
- Indireto

Tons

Positivo

- Otimista
- Grato
- Assertivo
- Calmo
- Confiante
- Encorajador
- Amigável
- Humorístico
- Inspirador

Negativo

- Pessimista
- Acusatório
- Preocupado
- Crítico
- Arrependido
- Sarcástico
- Urgente

### Formato de saída (Texto) {.secondary}

Em [output format]

Parágrafos

- Parágrafos **_(padrão)_**

Lista

- Lista com marcadores
- Lista numerada
- Lista de verificação

Código

- Código

Instruções

- Instruções passo a passo

Base de conhecimento

- Perguntas e respostas (Q&A)
- FAQ

Escrita criativa

- [Piada|humor]
- [Letra de música|canção]
- [Linguagem metafórica|estilizada]
- Poesia
- [Roteiro|roteiro de cinema|diálogo]
- [História|narrativa]

Jogos

- [Quiz|teste|flashcards|exercícios]
- [Charada|quebra-cabeça]
- [rpg|escolha seu próprio caminho]

### Formato de saída (Visual) {.secondary}

Visualização de dados

- Tabela
- Gráfico [chart type]

Visual criativo

- Arte ASCII
- Emojis
- Nuvem de palavras

### Formato de saída (Tipo de arquivo) {.secondary}

Documento

- PDF

Dados estruturados e marcação

- Texto simples
- Markdown
- HTML
- XML
- CSV
- JSON
- LaTeX

Código de programação e scripting

- [Linguagem de programação]
- Pseudocódigo
- Expressão regular

### Restrições

Mas [constraint]

Comprimento

- Seja [extremely detailed|concise]
- Em [quantity] [words|sentences]

Idioma

- Sem jargão ou termos técnicos

Estrutura

- Mostre [quantity] [examples|options]
- Sem cabeçalhos
- Sem títulos de pretexto

Voz e estilo

- Use voz narrativa em [first-person|second-person|third-person]
- Não altere o texto
- Use referências de cultura pop

Edições

- Faça edições [minor|major]
- Mostre apenas o conteúdo [changed|unchanged]

## Exemplos

### Trabalho

Nomear negócio

```{.wrap}
Suggest creative name for tech startup
```

```{.wrap}
Suggest catchy names for bakery business
```

Perguntas de entrevista

```{.wrap}
Suggest common software engineer interview questions
```

Criar esboço de curso

```{.wrap}
Create course outline on web development for beginners
```

```{.wrap}
Create training program outline for customer service workshop
```

### Relacionamentos

Ideias de presente

```{.wrap}
Suggest gift ideas for clients
```

```{.wrap}
Suggest gift ideas for clients who work as flourists
```

```{.wrap}
Suggest gift ideas for my wife who loves steampunk art and crafts, mystery sci-fi, journalling
```

```{.wrap}
Suggest creative ideas for 10 year old’s birthday
```

### Competição

Selecionar vencedores de concurso

```{.wrap}
Randomly select 1 name from this list
```

```{.wrap}
Randomly select 5 email addresses from this list
```

```{.wrap}
Select top 3 records with the shortest lap times from this list
```

### Programação

Criar código

```{.wrap}
Create program to calculate the factorial of given number in python
```

Criar expressões regulares

```{.wrap}
Create regex to match all email addresses in list
```

```{.wrap}
Create regex to match all words that start with "ban"
```

```{.wrap}
Create regex to match 8-digit password
```

Explicar código

```{.wrap}
Explain why code not working
```

```{.wrap}
Explain what code does
```

```{.wrap}
Explain how to make a HTTP request in javascript
```

Atualizar código

```{.wrap}
Add code comments
```

```{.wrap}
Add class "header" to header tag
```

```{.wrap}
Update CSS to change font color to blue
```

Traduzir

- Especificamente chamado de transpile quando se trata de linguagens de programação.

```{.wrap}
Translate code to Python
```

### E-mail

Criar e-mails

```{.wrap}
Write email inviting Jack to dinner on the weekend
```

```{.wrap}
Write email sequence for our new customer onboarding process
```

```{.wrap}
Write email to inform staff of elevator maintenance on 23 June 2025, elevators unavailable for 24 hours, apologise for inconvenience
```

```{.wrap}
Suggest response to message asking about project status
```

Formatar e-mail

```{.wrap}
Proofread and format email
```

E-mail marketing

```{.wrap}
Suggest tips to increase open and click-through rates for my email campaigns
```

```{.wrap}
Suggest ways to make my email content more engaging and relevant to my subscribers
```

Extrair dados

```{.wrap}
Extract all email addresses in text
```

### Planilha

Criar algo

```{.wrap}
Create excel formula to calculate sum of cells A1 to A10
```

```{.wrap}
Generate spreadsheet dummy data as a placeholder
```

```{.wrap}
Create macro to calculate average of cells B1 to B10 and insert result in cell C1
```

Explicar algo

```{.wrap}
Explain formula =SUM(A1:A10) in simple terms
```

```{.wrap}
Suggest tips to improve spreadsheet efficiency
```

### Redes sociais

Criar conteúdo

```{.wrap}
Suggest meme ideas for dogs
```

```{.wrap}
Suggest climate change post ideas to engage my followers
```

```{.wrap}
Generate hashtags and caption for a picture of scenic sunset
```

### Leitura

Análise de texto

```{.wrap}
Summarize article
```

```{.wrap}
Write concise main points
```

Traduzir

```{.wrap}
Translate to spanish
```

Recomendações

```{.wrap}
Recommend books similar to Hunger Games
```

### Design

Prompts de design

```{.wrap}
Create design prompt of logo for new sports brand
```

```{.wrap}
Suggest eye-catching thumbnail designs for youtube video on healthy eating
```

Combinações estéticas

```{.wrap}
Suggest font pairing for travel blog header design
```

```{.wrap}
Suggest color palette for wedding photography website
```

### Análise de dados

Extração de dados

```{.wrap}
Extract all numbers from text
```

Filtragem de dados

```{.wrap}
Filter list based on [condition]
```

Apresentação de dados

```{.wrap}
Create table from data
```

### Anúncios pagos

Criar anúncio

```{.wrap}
Suggest creative ideas for new product launch
```

```{.wrap}
Suggest ad copy for travel company
```

```{.wrap}
Create headlines, body text, and calls to action for new fitness program ad
```

Segmentação de anúncios

```{.wrap}
Recommend target Facebook audience for clothing line ad campaign
```

Suporte técnico de anúncios

```{.wrap}
Review tag manager code for errors
```

### Amazon FBA

Conteúdo do produto

```{.wrap}
Write compelling product description for latest item
```

Comunicação

```{.wrap}
Rewrite appeal letter to make it more persuasive
```

```{.wrap}
Write effective email to reach out to potential suppliers
```

Estratégia de produto

```{.wrap}
Suggest items that would make a good bundle for our customers
```

```{.wrap}
Organize product and pricing information into a neat and manageable spreadsheet
```

### Escrita

Nomear algo

```{.wrap}
Suggest titles for short story
```

```{.wrap}
Suggest titles for article 10 options
```

```{.wrap}
Suggest domain name for gardening blog
```

Criação de conteúdo

```{.wrap}
Create outline for essay on exercise
```

```{.wrap}
Suggest ideas for blog on sustainable fashion
```

```{.wrap}
Create blog post on financial planning
```

```{.wrap}
Expand jazz music sentence
```

Edição e formatação

```{.wrap}
Change report tone to conversational
```

```{.wrap}
Proofread article
```

```{.wrap}
Format headings for blog post
```

Avaliação

```{.wrap}
Check for bias
```

```{.wrap}
Check for plagiarism
```

### Professor

Apoio ao ensino

```{.wrap}
Convert work history fact list into multiple-choice quiz
```

```{.wrap}
Suggest ideas for history assignment on American Revolution
```

```{.wrap}
Divide list of 30 students into groups of 6
```

```{.wrap}
Create grading curve for class based on their test scores
```

```{.wrap}
Grade history essay and provide feedback on any areas for improvement
```

### YouTube

Criação de conteúdo

```{.wrap}
Create timestamps for podcast episode transcript
```

```{.wrap}
Convert youtube cooking video into blog post with headings and bullet points
```

```{.wrap}
Create outline for a video about the benefits of meditation
```

```{.wrap}
Suggest thumbnail ideas for video on "DIY home decor"
```

```{.wrap}
Suggest fashion video ideas for individual episodes
```

Analisar

```{.wrap}
What is the script tone for environmental issues video
```

Comunicação

```{.wrap}
Create thoughtful and polite response to negative comment on youtube video
```

### Pesquisa

Pesquisa histórica

```{.wrap}
Explain events leading up to American Civil War
```

```{.wrap}
Provide key details about printing press invention
```

```{.wrap}
Research olympic games history
```

```{.wrap}
Provide key details about French Revolution
```

```{.wrap}
Explain history of Byzantine Empire
```

Pesquisa científica

```{.wrap}
Explain quantum computing in simple terms
```

Artigos universitários verificados

````{.wrap}
Get me top university research papers with verified direct links


```{.wrap}
Explain rocket science like I'm five
````

### SEO

Palavras-chave

```{.wrap}
Find best keywords for [topic] with low competition
```

```{.wrap}
Generate list of keywords targeting multiple geographic locations
```

```{.wrap}
Generate list of keyword synonyms for [topic]
```

Otimização de conteúdo

```{.wrap}
Find opportunities for internal linking related to [topic]
```

```{.wrap}
Research industry-specific terminology for use in [topic] content
```

```{.wrap}
Find best time to publish content related to [topic]
```

Link building

```{.wrap}
Find authoritative websites to acquire backlinks for [topic] content
```

```{.wrap}
Research best external linking strategies for [topic]
```

Ferramentas

```{.wrap}
Find most popular tools used for [topic] seo
```

Táticas

```{.wrap}
Research best tactics for [topic] mobile optimization
```

```{.wrap}
What are the best tactics for [topic] international seo?
```

Concorrentes

```{.wrap}
Research competitor strategies related to [topic]
```

```{.wrap}
What are the best affiliate marketing websites for [topic]?
```

### Roleplay

```{.wrap}
Name: William Shakespeare

Visual description:
- Wearing Elizabethan attire.
- Holding quill.

Personality:
- Keen observer and a masterful weaver of tales.
- Knack for finding humor in the most unlikely places.

Behaviour examples:
- "To be, or not to be: that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them?"
- "Canst thou not minister to a mind diseased?"

Lore:
- Grew up in Stratford-upon-Avon and later moved to London.
- Famous for his tragedies, comedies, and historical plays.

Scenario:
-	Night of a grand performance at the Globe Theatre.
-	Lead actor is missing and staff are concerned about how to achieve the performance.
```

<style>
em { font-size: 0.785em; }
strong {font-weight: 400;}
ul.collapsible > li > pre { padding-left: 0; padding-right: 0; font-size: 0.925em;}
</style>
