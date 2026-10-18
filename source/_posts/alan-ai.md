---
title: Alan AI
date: 2023-03-03 6:00:00
background: bg-[#4aa181]
tags:
  - AI
  - AlanAI
  - Prompts
  - Tips
categories:
  - Ferramentas
intro:
  Este cheat sheet cobre os principais conceitos de script, métodos da API do cliente, handlers e outras ferramentas
  para criar uma experiência conversacional multimodal com o Alan AI
---

### Legenda

- `pattern` — frase para invocar um comando de voz/texto ou uma resposta a ser reproduzida
- `value` — valor especificado
- `params` — parâmetros passados
- `action` — ação a ser executada
- `output` — resultado dos dados
- `[...]` — dados ou parâmetros opcionais

## Script de diálogo

### Intents e patterns

Define um comando de voz/texto para reproduzir uma resposta

```{.wrap}
intent('pattern'[, 'patternN'], reply('pattern'))
```

Define um comando de voz/texto para reproduzir uma resposta ou executar uma ação

```{.wrap}
intent('pattern'[, 'patternN'], p => { action })
```

Define alternativas

```{.wrap}
intent('phrase1|phrase2')
```

Define palavras e frases opcionais

```{.wrap}
intent('pattern (optional phrase|)')
```

### Funções de resposta

Reproduz uma resposta (no caso de vários patterns, uma resposta é escolhida aleatoriamente)

```{.wrap}
reply('pattern'[, 'patternN'])
```

Reproduz uma resposta

```{.wrap}
p.play('pattern')
```

Define as configurações de voz para a resposta do assistente: `accent (en, fr, de, it, ru, es)`, `gender (male/female)`, `voice type`,
`speaking pitch`, `speaking rate`

```{.wrap}
p.play([voice(code, gender, type, pitch, rate), ]'pattern')
```

Define opções de reprodução: `force:true` (executa se o botão estiver inativo), `activate:true` (ativa o botão antes),
`deactivate:true` (desativa o botão depois)

```{.wrap}
p.play('pattern'[, opts(options)])
```

Envia um comando para o app

```{.wrap}
p.play({command:data})
```

### Slots definidos pelo usuário

Define uma lista estática de valores esperados na entrada

```{.wrap}
$(SLOTNAME value1|value2) => p.SLOTNAME.value
```

Fornece labels para classificar ou identificar os valores do slot

```{.wrap}
$(SLOTNAME value1~label1|value2~label2) => p.SLOTNAME.label
```

Ativa o fuzzy matching para capturar variantes semelhantes

```{.wrap}
$(SLOTNAME~ value1|value2) => p.SLOTNAME.value
```

Torna um slot opcional

```{.wrap}
$(SLOTNAME value1|value2|)
```

Captura vários valores de slot

```{.wrap}
intent('$(SLOTNAME value1|value2) and $(SLOTNAME value1|value2 )') => p.SLOTNAME_ (array), p.SLOTNAME_[0].value, p.SLOTNAME_[1].value
```

### Slots predefinidos

Captura valores de data

```{.wrap}
$(DATE) => p.DATE.value, p.DATE.moment, p.DATE.luxon
```

Captura valores de hora

```{.wrap}
$(TIME) => p.TIME.value, p.TIME.moment
```

Captura números cardinais

```{.wrap}
$(NUMBER) => p.NUMBER.value, p.NUMBER.number
```

Captura números ordinais

```{.wrap}
$(ORDINAL) => p.ORDINAL.value, p.ORDINAL.number
```

Captura localizações

```{.wrap}
$(LOC) => p.LOC.value
```

Captura nomes

```{.wrap}
$(NAME) => p.NAME.value
```

### Slots dinâmicos

Define um slot dinâmico no nível do projeto

```{.wrap}
project.name = {en: "value1|value2|value3"}
$(SLOTNAME p:name) => p.SLOTNAME.value
```

Define um slot dinâmico no nível da sessão de diálogo

```{.wrap}
p.userData.name = {en: "value1|value2|value3"}
$(SLOTNAME u:name) => p.SLOTNAME.value
```

Obtém dados de um slot dinâmico com o visual state

```{.wrap}
let name = ["value1|value2|value3"]
p.visual.data = {en: name};
$(SLOTNAME v:name) => p.SLOTNAME.value
```

Define um slot dinâmico de forma abreviada

```{.wrap}
project.name = {en: "value1|value2|value3"}
$(p:name) => p.SLOTNAME.value
```

Define labels para slots dinâmicos: veja [Slots definidos pelo usuário](#user-defined-slots).

Ativa o fuzzy matching para slots dinâmicos: veja [Slots definidos pelo usuário](#user-defined-slots).

Torna um slot dinâmico opcional: veja [Slots definidos pelo usuário](#user-defined-slots).

Captura vários valores de slot: veja [Slots definidos pelo usuário](#user-defined-slots).

### Slots RegEx

Captura combinações de dígitos e/ou letras

```{.wrap}
const reg = "([A-Za-z]{1}\\s?){6}"
$(SLOTNAME* ${reg}) => p.SLOTNAME.value
```

Captura qualquer entrada do usuário

```{.wrap}
$(SLOTNAME* .+) => p.SLOTNAME.value
```

### Contextos

Define um contexto

```{.wrap}
let contextName = context(() => { action })
```

Ativa um contexto

```{.wrap}
intent('pattern', p => {..., p.then(contextName)}
```

Passa dados para o contexto

```{.wrap}
p.then(contextName, state: {data:yourData}) => p.state.data
```

Resolve um contexto

```{.wrap}
p.resolve([data:yourData])
```

Redefine um contexto

```{.wrap}
p.resetContext()
```

Define intents que podem ser correspondidos a qualquer momento sem trocar o contexto atual

```{.wrap}
intent(noctx, 'pattern', ...) or noContext(() => {intent(...)})
```

Reproduz um prompt para uma entrada esperada

```{.wrap}
fallback('pattern1'[, 'patternN'])
```

Define um título para um contexto

```{.wrap}
title('contextName')
```

### Objetos predefinidos

Armazena dados estáticos específicos do dispositivo e do usuário enviados pelo app cliente

```{.wrap}
authData.data => p.authData.data
```

Armazena dados de estado disponíveis globalmente no escopo do projeto

```{.wrap}
project.info = {data:yourData} => project.info.data
```

Armazena a pontuação de correspondência da intent

```{.wrap}
p.score
```

Armazena dados a serem passados entre contextos

```{.wrap}
p.state.data
```

Armazena dados do contexto visual a serem enviados pelo app cliente com `setVisualState()`

```{.wrap}
p.visual.data
```

Armazena dados de estado específicos do usuário acessíveis durante a sessão de diálogo

```{.wrap}
p.userData.data
```

### Callbacks predefinidos

Define ações executadas quando o script é salvo e o modelo de diálogo é criado

```{.wrap}
onCreateProject(() => { action })
```

Define ações executadas quando a sessão de diálogo começa

```{.wrap}
onCreateUser((p) => { action })
```

Define ações executadas quando a sessão de diálogo termina

```{.wrap}
onCleanupUser((p) => { action })
```

Define ações executadas quando o visual state é definido

```{.wrap}
onVisualState((p, s) => { action })
```

Define ações executadas quando um evento de usuário é disparado no app cliente: `buttonReady`, `buttonClicked`,
`micPermissionPrompt`, `micAllowed`, `firstActivate`, `showPopup`, `popupCloseClicked`, `recognized`

```{.wrap}
onUserEvent((p, e) => { action })
```

Define ações executadas quando um contexto é ativado

```{.wrap}
onEnter((p) => { action })
```

### Serviço de Q&A

Define a URL de um recurso a ser indexado

```{.wrap}
corpus({url: url, depth: depthLevel})
```

Define o corpus de texto a ser usado pelo assistente no diálogo

```{.wrap}
corpus('text')
```

### Bibliotecas JS integradas

Faz chamadas de API

```{.wrap}
axios, request
```

Trabalha com tempo

```{.wrap}
moment-timezone, luxon
```

Trabalha com arrays, números, objetos, strings e assim por diante

```{.wrap}
lodash
```

### Outros

Fornece uma lista de dicas para ajudar a reconhecer termos específicos

```{.wrap}
recognitionHints('hint'[, 'hintN'])
```

Grava mensagens de info nos logs do Alan Studio

```{.wrap}
console.log(data)
```

Grava mensagens de erro nos logs do Alan Studio

```{.wrap}
console.error(data)
```

## SDK do cliente

### Métodos da API do cliente

Envia informações sobre o visual state do app cliente para o script de diálogo

```{.wrap}
setVisualState(visualStateData:object)
```

Envia dados ou executa ações sem um comando de voz/texto

```{.wrap}
projectAPI.method = function(p, param, callback) {
  p.userData.data = param.data;
  callback();
};

callProjectApi(method:string, data:object, callback:function)
```

Reproduz uma mensagem de texto no app cliente

```{.wrap}
playText(text:string)
```

Envia uma mensagem de texto para o Alan como entrada do usuário

```{.wrap}
sendText(text:string)
```

Executa um comando no app cliente

```{.wrap}
playCommand(command:object)
```

### Métodos da API do cliente (continuação)

Ativa o botão do Alan programaticamente

```{.wrap}
activate()
```

Desativa o botão do Alan programaticamente

```{.wrap}
deactivate()
```

Verifica o estado do botão do Alan

```{.wrap}
isActive()
```

Remove o botão do Alan do elemento pai, da página (com suporte em Web, Ionic)

```{.wrap}
remove()
```

Verifica o estado da wake word (com suporte em iOS, Android)

```{.wrap}
getWakewordEnabled()
```

Define o estado da wake word (com suporte em iOS, Android)

```{.wrap}
setWakewordEnabled(enabled:boolean)
```

### Handlers

// Os exemplos são fornecidos para a plataforma Web

Trata comandos enviados do script de diálogo para o app cliente

```{.wrap}
onCommand: function (commandData) { action }
```

Trata mudanças de estado do botão do Alan

```{.wrap}
onButtonState: function (e) { action }
```

Trata o status de conexão com o projeto do assistente virtual no Alan Cloud

```{.wrap}
onConnectionStatus: function (e) { action }
```

Trata eventos recebidos do Alan

```{.wrap}
onEvent: function (e) { action }
```

## Veja também

- [Site do Alan AI](https://alan.app)
- [Sobre a plataforma Alan](https://alan.app/platform)
- [Documentação do Alan AI](https://alan.app/docs)
