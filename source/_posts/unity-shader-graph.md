---
title: Unity Shader Graph
date: 2024-08-10 12:15:05
background: bg-[#7c7c7c]
label:
tags:
  - unity
  - shader
  - computer graphics
  - visual effects
categories:
  - Programação
intro: |
  Este é um cheat sheet visual do Unity Shader Graph. Esta ferramenta é usada para criar materiais com shaders customizados no Unity, uma game engine popular.
---

## Nós do Shader Graph {.cols-2}

<code>We are using <yel>**SAIT**</yel> to indicate the output type is "same as the input type".</code> {.col-span-2}

## 1. Atributos {.cols-2}

### Posicionamento {.row-span-2}

<yel>**Position**</yel> - fornece a posição do vértice

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ---------------------------- |
    | --------- | ---------------------------- |
    | `Vector3` | Fornece a posição do vértice |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Normal**</yel> - fornece a direção da normal da superfície

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------------ |
    | --------- | ------------------------------ |
    | `Vector3` | Fornece a normal da superfície |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**World Position**</yel> - retorna a posição do objeto no espaço de mundo

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------------ |
    | --------- | ------------------------------ |
    | `Vector3` | Posição no espaço de mundo     |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Object Position**</yel> - retorna a posição do objeto no espaço local

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ----------------------------- |
    | --------- | ----------------------------- |
    | `Vector3` | Posição no espaço local       |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Screen Position**</yel> - retorna a posição do objeto no espaço de tela

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------------- |
    | --------- | ------------------------------- |
    | `Vector4` | Posição no espaço de tela       |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Camera Position**</yel> - retorna a posição da câmera no espaço de mundo

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------------------ |
    | --------- | ------------------------------------ |
    | `Vector3` | Posição da câmera no espaço de mundo |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Tempo

<yel>**Time**</yel> - gera diversos valores relacionados ao tempo

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | ------- | -------------------------------------------------------------------------- |
    | ------- | -------------------------------------------------------------------------- |
    | `Float` | Time (T) - O tempo total decorrido desde o início do shader                |
    | `Float` | Sin Time (T/8π) - Uma onda senoidal baseada no tempo                       |
    | `Float` | Cos Time (T/8π) - Uma onda cosseno baseada no tempo                        |
    | `Float` | Delta Time - Tempo decorrido entre o frame anterior e o frame atual        |

  {.left-text}

{.shortcuts .marker-round .cols-2}

## 2. Operações matemáticas {.cols-2}

### Matemática básica

<yel>**Add**</yel> - soma dois valores

- **Entradas**

  - | --------------------- | -------------- |
    | --------------------- | -------------- |
    | `Float` <br> `Vector` | Primeiro valor |
    | `Float` <br> `Vector` | Segundo valor  |

  {.left-text}

- **Saídas**

  - | ---- | ---------------------- |
    | ---- | ---------------------- |
    | SAIT | Soma das duas entradas |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Subtract**</yel> - subtrai um valor de outro

- **Entradas**

  - | --------------------- | ---------- |
    | --------------------- | ---------- |
    | `Float` <br> `Vector` | Minuendo   |
    | `Float` <br> `Vector` | Subtraendo |

  {.left-text}

- **Saídas**

  - | ---- | --------------------------- |
    | ---- | --------------------------- |
    | SAIT | Diferença das duas entradas |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Multiply**</yel> - multiplica dois valores

- **Entradas**

  - | ----------------------------------- | -------------- |
    | ----------------------------------- | -------------- |
    | `Float` <br> `Vector` <br> `Matrix` | Primeiro valor |
    | `Float` <br> `Vector` <br> `Matrix` | Segundo valor  |

  {.left-text}

- **Saídas**

  - | ---- | ---------------------------- |
    | ---- | ---------------------------- |
    | SAIT | Produto das duas entradas    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Matemática avançada {.row-span-2}

<yel>**Power**</yel> - eleva a entrada a uma potência

- **Entradas**

  - | ------- | -------- |
    | ------- | -------- |
    | `Float` | Base     |
    | `Float` | Expoente |

  {.left-text}

- **Saídas**

  - | ------- | ---------------------------------------------------- |
    | ------- | ---------------------------------------------------- |
    | `Float` | Resultado da base elevada à potência do expoente     |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Sqrt**</yel> - raiz quadrada da entrada

- **Entradas**

  - | ------- | ---------------- |
    | ------- | ---------------- |
    | `Float` | Valor de entrada |

  {.left-text}

- **Saídas**

  - | ------- | -------------------------- |
    | ------- | -------------------------- |
    | `Float` | Raiz quadrada da entrada   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Abs**</yel> - gera o valor absoluto

- **Entradas**

  - | --------------------- | ---------------- |
    | --------------------- | ---------------- |
    | `Float` <br> `Vector` | Valor de entrada |

  {.left-text}

- **Saídas**

  - | ---- | ----------------------------- |
    | ---- | ----------------------------- |
    | SAIT | Valor absoluto da entrada     |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Dot Product**</yel> - calcula o produto escalar entre dois vetores

- **Entradas**

  - | ------------------------ | -------------- |
    | ------------------------ | -------------- |
    | `Vector3` <br> `Vector4` | Primeiro vetor |
    | `Vector3` <br> `Vector4` | Segundo vetor  |

  {.left-text}

- **Saídas**

  - | ------- | ---------------------------- |
    | ------- | ---------------------------- |
    | `Float` | Resultado do produto escalar |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Cross Product**</yel> - calcula o produto vetorial entre dois vetores

- **Entradas**

  - | --------- | -------------- |
    | --------- | -------------- |
    | `Vector3` | Primeiro vetor |
    | `Vector3` | Segundo vetor  |

  {.left-text}

- **Saídas**

  - | --------- | ----------------------------- |
    | --------- | ----------------------------- |
    | `Vector3` | Resultado do produto vetorial |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Trigonometria

<yel>**Sin**</yel> - gera o seno da entrada

- **Entradas**

  - | ------- | ------------------- |
    | ------- | ------------------- |
    | `Float` | Entrada em radianos |

  {.left-text}

- **Saídas**

  - | ------- | ------------------ |
    | ------- | ------------------ |
    | `Float` | Seno da entrada    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Cos**</yel> - gera o cosseno da entrada

- **Entradas**

  - | ------- | ------------------- |
    | ------- | ------------------- |
    | `Float` | Entrada em radianos |

  {.left-text}

- **Saídas**

  - | ------- | --------------------- |
    | ------- | --------------------- |
    | `Float` | Cosseno da entrada    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Interpolação {.row-span-2}

<yel>**Lerp**</yel> - interpolação linear entre dois valores

- **Entradas**

  - | --------------------- | --------------------------- |
    | --------------------- | --------------------------- |
    | `Float` <br> `Vector` | Valor inicial               |
    | `Float` <br> `Vector` | Valor final                 |
    | `Float` <br> `Vector` | Fator de interpolação (T)   |

  {.left-text}

- **Saídas**

  - | ---- | --------------------- |
    | ---- | --------------------- |
    | SAIT | Resultado interpolado |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Step**</yel> - cria um degrau entre dois limiares

- **Entradas**

  - | --------------------- | -------- |
    | --------------------- | -------- |
    | `Float` <br> `Vector` | Limiar   |
    | `Float` <br> `Vector` | Entrada  |

  {.left-text}

- **Saídas**

  - | ---- | -------------------- |
    | ---- | -------------------- |
    | SAIT | Resultado do degrau  |

  {.left-text}

{.shortcuts .marker-round .cols-2}

## 3. Processamento de cor {.cols-2}

### Manipulação básica de cor

<yel>**Color**</yel> - fornece um valor de cor constante

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ----------------- |
    | --------- | ----------------- |
    | `Vector4` | Valor de cor RGBA |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Add Color**</yel> - soma dois valores de cor

- **Entradas**

  - | --------- | -------------- |
    | --------- | -------------- |
    | `Vector4` | Primeira cor   |
    | `Vector4` | Segunda cor    |

  {.left-text}

- **Saídas**

  - | --------- | ---------------------- |
    | --------- | ---------------------- |
    | `Vector4` | Soma das duas cores    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Multiply Color**</yel> - multiplica dois valores de cor

- **Entradas**

  - | --------- | -------------- |
    | --------- | -------------- |
    | `Vector4` | Primeira cor   |
    | `Vector4` | Segunda cor    |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------ |
    | --------- | ------------------------ |
    | `Vector4` | Produto das duas cores   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Lerp Color**</yel> - interpola entre duas cores

- **Entradas**

  - | --------- | --------------------------- |
    | --------- | --------------------------- |
    | `Vector4` | Cor inicial                 |
    | `Vector4` | Cor final                   |
    | `Float`   | Fator de interpolação (T)   |

  {.left-text}

- **Saídas**

  - | --------- | ----------------- |
    | --------- | ----------------- |
    | `Vector4` | Cor interpolada   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Ajuste de cor {.row-span-2}

<yel>**Saturation**</yel> - ajusta a saturação da cor de entrada

- **Entradas**

  - | --------- | ------------------ |
    | --------- | ------------------ |
    | `Vector4` | Cor de entrada     |
    | `Float`   | Fator de saturação |

  {.left-text}

- **Saídas**

  - | --------- | --------------- |
    | --------- | --------------- |
    | `Vector4` | Cor ajustada    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Contrast**</yel> - ajusta o contraste da cor de entrada

- **Entradas**

  - | --------- | ------------------ |
    | --------- | ------------------ |
    | `Vector4` | Cor de entrada     |
    | `Float`   | Fator de contraste |

  {.left-text}

- **Saídas**

  - | --------- | --------------- |
    | --------- | --------------- |
    | `Vector4` | Cor ajustada    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Hue**</yel> - desloca o matiz da cor de entrada

- **Entradas**

  - | --------- | ----------------------------------- |
    | --------- | ----------------------------------- |
    | `Vector4` | Cor de entrada                      |
    | `Float`   | Quantidade de deslocamento do matiz |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------ |
    | --------- | ------------------------ |
    | `Vector4` | Cor com matiz deslocado  |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Invert Colors**</yel> - inverte a cor de entrada

- **Entradas**

  - | --------- | -------------- |
    | --------- | -------------- |
    | `Vector4` | Cor de entrada |

  {.left-text}

- **Saídas**

  - | --------- | ---------------- |
    | --------- | ---------------- |
    | `Vector4` | Cor invertida    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Replace Color**</yel> - substitui uma cor específica da entrada por uma nova cor

- **Entradas**

  - | --------- | -------------------- |
    | --------- | -------------------- |
    | `Vector4` | Cor de entrada       |
    | `Vector4` | Cor alvo             |
    | `Vector4` | Cor de substituição  |

  {.left-text}

- **Saídas**

  - | --------- | ---------------------------- |
    | --------- | ---------------------------- |
    | `Vector4` | Cor com valores substituídos |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**White Balance**</yel> - ajusta o balanço de branco da cor de entrada

- **Entradas**

  - | --------- | -------------------- |
    | --------- | -------------------- |
    | `Vector4` | Cor de entrada       |
    | `Float`   | Valor de temperatura |
    | `Float`   | Valor de tint        |

  {.left-text}

- **Saídas**

  - | --------- | --------------- |
    | --------- | --------------- |
    | `Vector4` | Cor ajustada    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Operações de canal

<yel>**Channel Mixer**</yel> - modifica os canais de cor de forma independente

- **Entradas**

  - | --------- | ------------------------------- |
    | --------- | ------------------------------- |
    | `Vector4` | Cor de entrada                  |
    | `Float`   | Multiplicador do canal vermelho |
    | `Float`   | Multiplicador do canal verde    |
    | `Float`   | Multiplicador do canal azul     |

  {.left-text}

- **Saídas**

  - | --------- | ---------------- |
    | --------- | ---------------- |
    | `Vector4` | Cor modificada   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

## 4. Processamento de textura {.cols-2}

### Amostragem

<yel>**Sample Texture**</yel> - obtém dados de cor da textura

- **Entradas**

  - | ------------------- | ------------------ |
    | ------------------- | ------------------ |
    | `Texture (sampler)` | Textura de entrada |
    | `Vector2`           | Coordenadas UV     |

  {.left-text}

- **Saídas**

  - | --------- | ----------------------------- |
    | --------- | ----------------------------- |
    | `Vector4` | Dados de cor da textura       |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**UV**</yel> - fornece coordenadas UV para o mapeamento de textura

- **Entradas**

  - | --- | ------------ |
    | --- | ------------ |
    | /   | Sem entradas |

  {.left-text}

- **Saídas**

  - | --------- | ---------------- |
    | --------- | ---------------- |
    | `Vector2` | Coordenadas UV   |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Manipulação {.row-span-2}

<yel>**Tiling Offset**</yel> - ajusta o tiling e o offset da textura

- **Entradas**

  - | --------- | ----------------- |
    | --------- | ----------------- |
    | `Vector2` | Valores de tiling |
    | `Vector2` | Valores de offset |

  {.left-text}

- **Saídas**

  - | --------- | -------------------------- |
    | --------- | -------------------------- |
    | `Vector2` | Coordenadas UV modificadas |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Distortion**</yel> - deforma a superfície do objeto

- **Entradas**

  - | --------- | ------------------------ |
    | --------- | ------------------------ |
    | `Float`   | Intensidade da distorção |
    | `Vector2` | Coordenadas UV           |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------- |
    | --------- | ------------------------- |
    | `Vector2` | Coordenadas UV deformadas |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Parallax**</yel> - simula profundidade usando parallax mapping

- **Entradas**

  - | ----------------- | --------------------- |
    | ----------------- | --------------------- |
    | Texture (sampler) | Textura de entrada    |
    | `Vector2`         | Coordenadas UV        |
    | `Float`           | Valor de profundidade |

  {.left-text}

- **Saídas**

  - | --------- | ------------------------- |
    | --------- | ------------------------- |
    | `Vector2` | Coordenadas UV ajustadas  |

  {.left-text}

{.shortcuts .marker-round .cols-2}

## 5. Efeitos {.cols-2}

### Efeitos visuais {.row-span-2}

<yel>**Fresnel Effect**</yel> - cria um efeito de brilho nas bordas do objeto

- **Entradas**

  - | --------- | --------------------- |
    | --------- | --------------------- |
    | `Vector3` | Direção de visão      |
    | `Float`   | Intensidade do efeito |

  {.left-text}

- **Saídas**

  - | ------- | ----------------------- |
    | ------- | ----------------------- |
    | `Float` | Valor do efeito Fresnel |

  {.left-text}

{.shortcuts .marker-round .cols-2}

<yel>**Dissolve**</yel> - gera um efeito de transição de dissolução

- **Entradas**

  - | ------------------- | -------------------- |
    | ------------------- | -------------------- |
    | `Texture (sampler)` | Textura de entrada   |
    | `Float`             | Limiar de dissolução |

  {.left-text}

- **Saídas**

  - | --------- | ----------------------------- |
    | --------- | ----------------------------- |
    | `Vector4` | Saída do efeito de dissolução |

  {.left-text}

{.shortcuts .marker-round .cols-2}

### Reflexão {.row-span-2}

<yel>**Reflection**</yel> - reflete com base na direção da normal da superfície

- **Entradas**

  - | --------- | --------------------- |
    | --------- | --------------------- |
    | `Vector3` | Direção de incidência |
    | `Vector3` | Normal da superfície  |

  {.left-text}

- **Saídas**

  - | --------- | -------------------- |
    | --------- | -------------------- |
    | `Vector3` | Direção refletida    |

  {.left-text}

{.shortcuts .marker-round .cols-2}

## Nó Custom Function

### Passos para criar um nó Custom Function {.col-span-2}

- **Passo 1: Adicione o nó Custom Function no Shader Graph**

  - Clique com o botão direito no Shader Graph e escolha **"Create Node"** > **"Custom Function"**.
  - Escolha entre **"String"** (para código HLSL inline) ou **"File"** (para um arquivo HLSL externo).

- **Passo 2: Configure o nó no Shader Graph**

  - Defina o nome do nó.
  - Se usar **"File"**, garanta que o nome do arquivo HLSL externo corresponda exatamente ao nome da função definida
    no arquivo HLSL. Isso garante que a função seja referenciada corretamente no pipeline do Shader Graph.

    <yel>**Exemplo**</yel>: se o arquivo se chama `CustomFunction.hlsl`, a função dentro dele também deve se chamar
    `CustomFunction`.

- **Passo 3: Adicione entradas/saídas no Shader Graph**

  - Defina os `Inputs` e `Outputs` necessários para a função customizada no Shader Graph. Eles vão gerar
    automaticamente portas para você conectar outros nós.

    <yel>**Exemplo**</yel>:

    - **Entradas**: `Float` (tempo), `Vector3` (posição)
    - **Saídas**: `Vector3` (nova posição)

    No código HLSL customizado, os parâmetros `in` e `out` correspondem a essas entradas e saídas:

    - `in` representa os dados que entram na função (ex.: `time`, `position`).
    - `out` define o valor de retorno (ex.: `position` modificado).

- **Passo 4: Escreva o código HLSL**

  - Se usar a opção **"String"**:

    - Escreva o código HLSL diretamente no editor do nó de função customizada no Shader Graph.
    - Garanta que os parâmetros `in` e `out` correspondam às entradas e saídas que você definiu no Shader Graph.

    - <yel>**Exemplo de código inline**</yel> (usando o modo **"String"**):

      ```cpp
      float3 CustomPosition(in float time, in float3 position, out float3 newPosition) {
        newPosition = position + float3(sin(time), cos(time), 0.0);
        return newPosition;
      }
      ```

  - Se usar a opção **"File"**:

    - Escreva o código HLSL em um arquivo `.hlsl` externo e referencie o arquivo no Shader Graph.

    - <yel>**Exemplo de arquivo HLSL externo**</yel> (usando o modo **"File"**):

      1. **1. Crie um arquivo HLSL** chamado `CustomPosition.hlsl`.

      2. **2. Escreva a função customizada** dentro do arquivo. Os parâmetros `in` e `out` devem corresponder às
         entradas e saídas do Shader Graph.

      ```cpp
      float3 CustomPosition(in float time, in float3 position, out float3 newPosition) {
        newPosition = position + float3(sin(time), cos(time), 0.0);
        return newPosition;
      }
      ```

      3. **3. Salve o arquivo** no diretório do seu projeto, por exemplo, `Assets/Shaders/CustomPosition.hlsl`.

      4. **4. Vincule o arquivo** no Shader Graph:

      - No nó Custom Function, mude para o modo **"File"** e referencie `CustomPosition.hlsl`.

- **Passo 5: Use o nó no Shader Graph**

  - Conecte as portas de entrada do nó de função customizada a outros nós, como `Time` e `Position`, para alimentar
    a função customizada com dados.
  - Conecte a porta de saída para aplicar o resultado da função no pipeline do Shader Graph.

  - <yel>**Exemplo de pipeline**</yel>:

    - **Entradas**: `Time` (como float) e `Position` (como vetor)
    - **Saídas**: `Modified Position` (vetor com a nova posição)

    Isso faria o nó customizado atualizar a posição de um objeto com base no tempo, no shader.

{.marker-timeline .shortcuts}

## Veja também {.cols-1}

- [Documentação do Unity Shader Graph](https://docs.unity3d.com/Manual/shader-graph-overview.html) _(docs.unity3d.com)_
- [Notas de Tianle Yuan sobre Unity Visual Effect](https://yuantianle.github.io/11_Game_Development/Unity/) _(yuantianle.com)_
