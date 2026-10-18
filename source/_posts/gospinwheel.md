---
title: GoSpinWheel
date: 2025-12-16 17:20:00
background: bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
tags:
  - Tool
  - Productivity
  - Streaming
categories:
  - Outros
intro: Cheat sheet de referência rápida para o GoSpinWheel — um moderno sorteador de roleta aleatória, seletor de nomes e ferramenta de decisão.
plugins:
  - copyCode
---

## Essenciais

### O que é o GoSpinWheel?

**[GoSpinWheel random wheel spinner](https://gospinwheel.com)** é uma ferramenta online gratuita e moderna para seleção aleatória e tomada de decisões. É uma alternativa focada em privacidade aos sites antigos de “wheel spinner”, com uma interface limpa feita para o uso cotidiano.

- **Casos de uso principais**: sorteios, escolha de nomes em sala de aula, jogos de festa, decisões rápidas.
- **Login**: não é necessário (usa o armazenamento local do navegador).
- **Custo**: gratuito para usar.

### Recursos exclusivos {.col-span-2}

| Recurso                                   | Descrição                                                                                             |
| :---                                      | :---                                                                                                  |
| **Sincronização de várias roletas**       | Executa até 6 roletas ao mesmo tempo (por exemplo, uma para nomes, outra para prêmios).               |
| **Aleatoriedade real**                    | Usa `crypto.getRandomValues()` em vez de `Math.random()` para imparcialidade criptográfica.           |
| **Modo eliminação**                       | Opção de remover temporariamente um vencedor da roleta depois que ele é sorteado.                     |
| **Links de compartilhamento**             | Gere um link compartilhável para publicar uma roleta e enviá-lo aos amigos.                           |
| **Salvamento automático e sincronização** | Salva automaticamente no Local Storage e mantém o estado da roleta sincronizado no mesmo dispositivo. |
| **Importar / exportar**                   | Exporte configurações de roleta para backup e importe-as depois para restaurar.                       |
| **Modo streamer**                         | Otimizado para OBS/Zoom, com interface limpa e recursos de tela cheia.                                |
| **Privacidade**                           | Os dados ficam armazenados localmente no seu navegador, não em servidores externos.                   |

## Controles e imparcialidade

### Atalhos e ações

| Ação      | Descrição       |
| :---      | :---            |
| `Space`   | Começar a girar |
| `Cmd` `K` | Buscar roletas  |

{.shortcuts}

### Opções de personalização

- **Entradas**: adicione nomes/itens em massa pelo painel direito.
- **Peso**: ajuste a probabilidade de itens específicos (avançado).
- **Temas**: alterne entre claro/escuro ou paletas de cores personalizadas.
- **Som**: ative ou desative os sons de giro e as fanfarras de vitória.

### Compartilhamento e backup

- **Compartilhar publicamente**: gere um link de compartilhamento e envie aos amigos (ótimo para jogos, sorteios ou uso em sala de aula).
- **Sincronização com Local Storage**: as alterações são salvas automaticamente e permanecem consistentes no mesmo dispositivo/navegador.
- **Exportar / importar**: salve a configuração da sua roleta localmente (backup/transferência) e importe-a novamente quando quiser.

### Auditoria de aleatoriedade

**Tecnologia de imparcialidade**: usa `crypto.getRandomValues()` (CSPRNG) em vez do previsível `Math.random()`.

**Verificação**:

- Acesse a [ferramenta de auditoria de aleatoriedade do GoSpinWheel](https://gospinwheel.com/randomness-audit).
- Use a **Ferramenta de auditoria** para executar mais de 10.000 simulações.
- Verifique se o desvio é estatisticamente insignificante.

## Templates populares

### Jogos de festa

- **[Verdade ou Desafio](https://gospinwheel.com/truth-or-dare)**: roleta dupla para jogadores e ações. Anime a festa.
- **[Quem paga?](https://gospinwheel.com/who-pays-for-dinner)**: a roleta da esquerda decide “O que comer”, a da direita decide “Quem paga”.
- **[Calculadora do amor](https://gospinwheel.com/love-calculator)**: será que a pessoa vai responder? Pergunte ao universo com esta calculadora divertida.
- **[Pedra, papel e tesoura](https://gospinwheel.com/rock-paper-scissors)**: precisa de um juiz imparcial? Deixe a roleta jogar por você.

### Ferramentas utilitárias

- **[Seletor de nomes](https://gospinwheel.com/name-picker)**: escolha vencedores de forma justa com entradas ponderadas. Perfeito para sorteios e times.
- **[Seletor de alunos](https://gospinwheel.com/student-picker)**: a ferramenta essencial para a sala de aula. Escolha alunos de forma justa para perguntas ou tarefas.

### Tomada de decisão

- **[Sim ou não](https://gospinwheel.com/yes-or-no)**: a maneira mais rápida de tomar uma decisão. Sim, não ou talvez?
- **[O que comer](https://gospinwheel.com/what-to-eat)**: resolva na hora o debate “O que vamos comer?”.
- **[Seletor de filmes](https://gospinwheel.com/movie-picker)**: cure a “rolagem sem fim” da Netflix e escolha um filme para a noite de cinema.

## Comparação

### vs. Concorrentes {.col-span-3}

| Recurso           | GoSpinWheel             | Wheel of Names | Picker Wheel  |
| :---              | :---:                   | :---:          | :---:         |
| **Aleatoriedade** | **Crypto** (verificado) | Math.random()  | Math.random() |
| **Anúncios**      | **Mínimos / nenhum**    | Alto           | Alto          |
| **Multi-roleta**  | **Sim (sincronizado)**  | Não            | Não           |
| **UI/UX**         | **Moderno 2024**        | Ultrapassado   | Ultrapassado  |
| **Velocidade**    | **Rápido**              | Médio          | Médio         |

{.show-header}
