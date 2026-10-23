---
title: Gemma 4
date: 2026-04-03 10:00:00
background: bg-[#4285f4]
tags:
  - gemma
  - google
  - llm
  - multimodal
  - ai
categories:
  - IA
intro: |
  [Gemma 4](https://deepmind.google/models/gemma/gemma-4/) is Google DeepMind's Apache 2.0 open-weights multimodal LLM family with frontier intelligence across four sizes, from mobile-edge to server-grade deployment.
plugins:
  - copyCode
---

## Primeiros passos

### Início rápido {.row-span-2}

```python
from transformers import AutoProcessor, AutoModelForCausalLM
import torch

MODEL_ID = "google/gemma-4-E4B-it"

processor = AutoProcessor.from_pretrained(MODEL_ID)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    dtype=torch.bfloat16,
    device_map="auto"
)

messages = [
    {"role": "system", "content": "You are helpful."},
    {"role": "user",   "content": "Explain MoE briefly."},
]

text = processor.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=False
)
inputs = processor(
    text=text, return_tensors="pt"
).to(model.device)
input_len = inputs["input_ids"].shape[-1]

outputs = model.generate(**inputs, max_new_tokens=512)
response = processor.decode(
    outputs[0][input_len:], skip_special_tokens=False
)
result = processor.parse_response(response)
# result["thinking"]  → internal reasoning chain
# result["response"] → final answer shown to user
```

### Introdução

- [Docs](https://ai.google.dev/gemma/docs/core) _(ai.google.dev)_
- [Model Card](https://ai.google.dev/gemma/docs/core/model_card_4) _(ai.google.dev)_
- [HuggingFace](https://huggingface.co/google) _(huggingface.co)_
- [Cookbook](https://github.com/google-gemma/gemma-cookbook) _(github.com)_

Lançado em 2026-03-31 · Apache 2.0 · Construído a partir da pesquisa do Gemini 3 · Mais de 140 idiomas

### Instalação

```bash
$ pip install -U transformers torch accelerate
```

Todos os modelos: `google/<model-id>` no HuggingFace

| Tamanho | Model ID             |
| ------- | -------------------- |
| E2B     | `gemma-4-E2B-it`     |
| E4B     | `gemma-4-E4B-it`     |
| 31B     | `gemma-4-31b-it`     |
| 26B A4B | `gemma-4-26b-a4b-it` |

### Parâmetros de amostragem

| Parâmetro     | Valor  |
| ------------- | ------ |
| `temperature` | `1.0`  |
| `top_p`       | `0.95` |
| `top_k`       | `64`   |

{.bold-first}

### Boas práticas

- Coloque imagens/áudio **antes** do texto em qualquer prompt
- Multi-turn: omita os blocos de pensamento do histórico da conversa
- Inclua 75%+ de dados CoT para preservar a capacidade de raciocínio
- Congele as camadas de visão no fine-tuning apenas de texto

## Família de modelos {.cols-2}

### Especificações dos modelos {.col-span-2}

| Modelo  | Arquitetura | Parâmetros totais | Ativos/Token | Camadas | Contexto | Modalidades      |
| ------- | ----------- | ----------------- | ------------ | ------- | -------- | ---------------- |
| E2B     | Dense+PLE   | 5.1B (2.3B eff)   | 2.3B         | 35      | 128K     | Text+Image+Audio |
| E4B     | Dense+PLE   | 8B (4.5B eff)     | 4.5B         | 42      | 128K     | Text+Image+Audio |
| 31B     | Dense       | 30.7B             | 30.7B        | 60      | 256K     | Text+Image       |
| 26B A4B | MoE         | 25.2B             | 3.8B         | 30      | 256K     | Text+Image       |

{.show-header}

Janela deslizante: 512 tokens (E2B/E4B) · 1024 tokens (31B/26B) · Vocabulário: 262K (todos os modelos)

### Recursos da arquitetura {.row-span-2}

#### Atenção híbrida

- Camadas **locais**: janela deslizante (512 ou 1024 tokens)
- Camadas **globais**: contexto completo, intercaladas com as locais
- A última camada é sempre uma camada de atenção global

#### PLE — Modelos edge (E2B/E4B)

- Embeddings por camada: cada camada do decoder tem sua própria tabela pequena de embeddings
- Tabelas estáticas grandes usam lookups rápidos — não multiplicação de matriz densa
- Parâmetros efetivos de computação ≪ parâmetros totais carregados
- Permite inferência com menos de 1.5 GB de VRAM (com quantização em 4 bits)

#### p-RoPE e KV cache compartilhado

- RoPE proporcional (p-RoPE) nas camadas globais para coerência de longo alcance
- O KV cache compartilhado entre as camadas globais reduz o pico de uso de memória
- Suporta contexto estável de 256K sem degradação de desempenho

#### MoE — 26B A4B

- 128 experts no total + 1 expert compartilhado sempre ativo
- 8 experts ativados por token durante a inferência
- Velocidade semelhante a um modelo denso de 4B, qualidade próxima de 30B
- Encoder de visão: ~550M parâmetros (o mesmo do 31B)

### Requisitos de memória

| Modelo  | BF16 (16-bit) | 8-bit   | 4-bit   |
| ------- | ------------- | ------- | ------- |
| E2B     | 9.6 GB        | 4.6 GB  | 3.2 GB  |
| E4B     | 15 GB         | 7.5 GB  | 5 GB    |
| 31B     | 58.3 GB       | 30.4 GB | 17.4 GB |
| 26B A4B | 48 GB         | 25 GB   | 15.6 GB |

{.show-header}

Apenas os pesos base — adicione VRAM para o KV cache.

### Escolha um modelo

| VRAM disponível | Recomendado |
| --------------- | ----------- |
| < 5 GB          | E2B (4-bit) |
| 5–8 GB          | E4B (4-bit) |
| 15–20 GB        | E4B (BF16)  |
| 24–32 GB        | 31B (4-bit) |
| 48–80 GB        | 31B (BF16)  |
| Alto throughput | 26B A4B     |

## Benchmarks {.cols-2}

### Benchmarks principais {.col-span-2 .row-span-2}

| Benchmark            | 31B   | 26B A4B | E4B   | E2B   | Gemma 3 27B |
| -------------------- | ----- | ------- | ----- | ----- | ----------- |
| MMLU Pro             | 85.2% | 82.6%   | 69.4% | 60.0% | 67.6%       |
| MMMLU (multilingual) | 88.4% | 86.3%   | 76.6% | 67.4% | 70.7%       |
| AIME 2026 (math)     | 89.2% | 88.3%   | 42.5% | 37.5% | 20.8%       |
| GPQA Diamond         | 84.3% | 82.3%   | 58.6% | 43.4% | 42.4%       |
| LiveCodeBench v6     | 80.0% | 77.1%   | 52.0% | 44.0% | 29.1%       |
| Codeforces ELO       | 2150  | 1718    | 940   | 633   | 110         |
| BigBench Extra Hard  | 74.4% | 64.8%   | 33.1% | 21.9% | 19.3%       |
| Tau2 avg (agentic)   | 76.9% | 68.2%   | 42.2% | 24.5% | 16.2%       |
| HLE no tools         | 19.5% | 8.7%    | —     | —     | —           |
| HLE with search      | 26.5% | 17.2%   | —     | —     | —           |

{.show-header}

Todos os resultados são de modelos instruction-tuned com o modo de pensamento ativado.

### Benchmarks de visão

| Benchmark     | 31B   | 26B A4B | E4B   | E2B   |
| ------------- | ----- | ------- | ----- | ----- |
| MMMU Pro      | 76.9% | 73.8%   | 52.6% | 44.2% |
| MATH-Vision   | 85.6% | 82.4%   | 59.5% | 52.4% |
| MedXPertQA MM | 61.3% | 58.1%   | 28.7% | 23.5% |
| OmniDocBench↓ | 0.131 | 0.149   | 0.181 | 0.290 |

{.show-header}

OmniDocBench = distância de edição de documentos (menor é melhor).

### Contexto longo

| Benchmark    | 31B   | 26B A4B | E4B   | E2B   |
| ------------ | ----- | ------- | ----- | ----- |
| MRCR v2 128K | 66.4% | 44.1%   | 25.4% | 19.1% |

{.show-header}

#### Arena AI (LMSYS ELO)

| Modelo          | ELO  | Ranking aberto |
| --------------- | ---- | -------------- |
| Gemma 4 31B     | 1452 | #3             |
| Gemma 4 26B A4B | 1441 | #6             |

## Modo de pensamento {.cols-2}

### Controle do pensamento {.row-span-2}

Adicione `<|think|>` ao **início** do system prompt:

```python
messages = [
    {
        "role": "system",
        "content": "<|think|>You are a math expert."
    },
    {"role": "user", "content": "Solve: 3x + 7 = 22"}
]

text = processor.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True
)
outputs = model.generate(**inputs, max_new_tokens=2048)
response = processor.decode(
    outputs[0][input_len:], skip_special_tokens=False
)
result = processor.parse_response(response)
# result["thinking"]  → step-by-step reasoning
# result["response"] → final answer
```

#### Estrutura da saída de pensamento

```
<|channel>thought
[Internal step-by-step reasoning — hidden from user]
<channel|>
[Final answer visible to user]
```

#### Comportamento com o pensamento desativado

Nos modelos 31B/26B A4B com `enable_thinking=False`, tags vazias ainda são emitidas:

```
<|channel>thought
<channel|>
[Final answer]
```

As variantes E2B/E4B ignoram completamente as tags vazias quando o pensamento está desativado.

### Tokens de controle

| Token                  | Finalidade                          |
| ---------------------- | ----------------------------------- |
| `<\|think\|>`          | Ativa o pensamento no system prompt |
| `<\|channel>thought\n` | Abre o bloco de pensamento interno  |
| `<channel\|>`          | Fecha o bloco de pensamento         |
| `<\|turn>`             | Abre o turno da conversa            |
| `<turn\|>`             | Fecha o turno da conversa           |

{.bold-first}

### Regras multi-turn

- **Não** inclua o conteúdo de pensamento no histórico da conversa
- Passe apenas `result["response"]` como o turno do modelo
- Use `max_new_tokens` maior para tarefas de raciocínio complexas
- Use `enable_thinking=True` para AIME, provas e debugging

## Multimodal {.cols-3}

### Entradas de imagem {.row-span-2}

Proporção variável + **orçamento de tokens visuais** configurável:

| Orçamento | Melhor para                           |
| --------- | ------------------------------------- |
| 70        | Classificação rápida, frames de vídeo |
| 140       | Legendas, miniaturas                  |
| 280       | Compreensão geral de imagens          |
| 560       | Gráficos, diagramas                   |
| 1120      | OCR, parsing de PDF, detalhes finos   |

```python
# Image MUST come before text (required)
messages = [{"role": "user", "content": [
    {"type": "image", "image": image},
    {"type": "text",  "text": "Describe this chart."},
]}]
inputs = processor(
    text=text,
    images=image,
    return_tensors="pt"
).to(model.device)
```

Encoder de visão: ~150M parâmetros (E2B/E4B) · ~550M parâmetros (31B/26B)

### Entradas de áudio

**Apenas E2B e E4B** (encoder de áudio de ~300M)

- Áudio máximo: **30 segundos**
- Tarefas: ASR e tradução de fala

#### Prompt de ASR

```
Transcribe the following speech in
{LANGUAGE} into {LANGUAGE} text.
```

#### Prompt de tradução

```
Transcribe in {SRC_LANG}, then
translate to {TARGET_LANG}.
```

### Entradas de vídeo

Processadas como **frames de imagem sequenciais**:

- Máximo: **60 segundos** a 1 fps = 60 frames
- Use um **orçamento de tokens baixo** (70–140) por frame
- E2B/E4B: também processa a faixa de áudio simultaneamente

```python
# Pass frames as list of images
inputs = processor(
    text=text,
    images=[frame1, frame2, ..., frame60],
    return_tensors="pt"
)
```

### Ordem das modalidades {.secondary}

Sempre coloque **imagem/áudio antes do texto** no conteúdo:

```python
# ✅ Correct order
content = [
    {"type": "image", "image": img},
    {"type": "text",  "text": "Describe it."},
]

# ❌ Text-first breaks alignment
content = [
    {"type": "text",  "text": "Describe it."},
    {"type": "image", "image": img},
]
```

## Deploy {.cols-3}

### HuggingFace {.row-span-2}

```bash
$ pip install -U transformers accelerate
```

#### BF16 (padrão)

```python
from transformers import (
    AutoProcessor, AutoModelForCausalLM
)
import torch

mid = "google/gemma-4-31b-it"
processor = AutoProcessor.from_pretrained(mid)
model = AutoModelForCausalLM.from_pretrained(
    mid,
    torch_dtype=torch.bfloat16,
    device_map="auto"
)
```

#### Quantizado em 4 bits

```python
from transformers import BitsAndBytesConfig

bnb = BitsAndBytesConfig(load_in_4bit=True)
model = AutoModelForCausalLM.from_pretrained(
    mid,
    quantization_config=bnb,
    device_map="auto"
)
```

### Ollama

```bash
$ ollama pull gemma4           # 31B (default)
$ ollama pull gemma4:e4b       # edge 4B variant
$ ollama pull gemma4:e2b       # edge 2B variant
$ ollama run  gemma4           # interactive chat
```

#### GGUF personalizado (Modelfile)

```bash
FROM /path/to/fine-tuned.gguf
SYSTEM "You are a coding assistant."
```

```bash
$ ollama create mygemma -f Modelfile
$ ollama run mygemma
```

### Servidor vLLM

```bash
$ vllm serve google/gemma-4-31B-it \
  --max-model-len 8192 \
  --enable-auto-tool-choice \
  --tool-call-parser gemma4 \
  --reasoning-parser gemma4
```

API compatível com OpenAI em `http://localhost:8000/v1`

### Cloud e API

| Plataforma | Observações             |
| ---------- | ----------------------- |
| Gemini API | `gemma-4-31b-it`        |
| AI Studio  | Playground no navegador |
| Vertex AI  | Endpoint personalizado  |
| Cloud Run  | Serverless GPU          |
| GKE + vLLM | Escala automática       |

{.bold-first}

### Edge e mobile

| Runtime          | Melhor para             |
| ---------------- | ----------------------- |
| AICore (Android) | API de nível de sistema |
| LiteRT-LM        | IoT, Raspberry Pi       |
| AI Edge Gallery  | Avaliação on-device     |
| LM Studio        | GUI para desktop        |
| llama.cpp        | Híbrido CPU/GPU         |

{.bold-first}

## Fine-tuning {.cols-2}

### Configuração do QLoRA {.row-span-2}

Uma única **GPU de 16 GB** (T4/Colab gratuito ou Kaggle):

```python
from unsloth import FastModel

model, tokenizer = FastModel.from_pretrained(
    "google/gemma-4-E4B-it",
    load_in_4bit=True,
    max_seq_length=4096
)

model = FastModel.get_peft_model(
    model,
    r=16,
    lora_alpha=16,
    lora_dropout=0,
    target_modules=[
        "q_proj", "k_proj",
        "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj"
    ],
)
```

#### Fine-tuning de visão (E2B / E4B)

```python
from unsloth import FastVisionModel

model, tokenizer = FastVisionModel.from_pretrained(
    "google/gemma-4-E4B-it",
    finetune_vision_layers=False,   # freeze encoder
    finetune_language_layers=True,
    load_in_4bit=True,
)
```

### Fine-tuning de MoE

Para o **26B A4B** — o fine-tuning completo quebra o roteamento de experts:

- Use apenas **LoRA bf16** (nunca FFT)
- Comece com `r=16`, `lora_alpha=16`
- Aumente o comprimento do contexto gradualmente depois que o loss convergir
- Evite atingir as matrizes de peso do roteador de experts

### Requisitos de dados

| Requisito              | Valor                          |
| ---------------------- | ------------------------------ |
| Proporção de dados CoT | ≥ 75% do conjunto de treino    |
| Formato de pensamento  | Inclui o gatilho `<\|think\|>` |
| Ordem multimodal       | Imagens/áudio antes do texto   |
| Chat template          | Formato ShareGPT ou OpenAI     |
| Recompensa de RL       | Resposta final verificável     |

{.bold-first}

### Dicas para fine-tuning de visão

1. **Congele a visão primeiro** — `finetune_vision_layers=False`
2. Faça fine-tuning apenas do LLM + projetores de atenção + MLP
3. Valide a qualidade no domínio de texto antes de descongelar
4. Descongele a visão apenas para imagens específicas do domínio
5. Orçamento de tokens baixo (70–280) economiza VRAM durante o treino

## Gemmaverse {.cols-3}

### Modelos especialistas {.col-span-2}

| Modelo        | Domínio                | Descrição                                     |
| ------------- | ---------------------- | --------------------------------------------- |
| MedGemma 4B   | Imagem médica          | Análise multimodal de raio-X/RM               |
| MedGemma 27B  | Texto clínico          | Raciocínio sobre EHR + laudos médicos         |
| CodeGemma     | Programação            | Conclusão de código e refatoração             |
| PaliGemma 2   | Visual-linguagem       | VLM de granularidade fina e raciocínio visual |
| ShieldGemma   | Segurança              | Classificador de segurança da saída do LLM    |
| DataGemma     | Dados factuais         | Fundamentado via Google Data Commons          |
| FunctionGemma | Chamada de ferramentas | Parsing de function call com poucos recursos  |

{.show-header}

### Ecossistema

**Bibliotecas e frameworks**

- ADK (Agent Development Kit)
- JAX Gemma Library (`google-deepmind/gemma`)
- Gemma Cookbook (`google-gemma/gemma-cookbook`)
- `google/adk-samples` starter agents

**Variantes da comunidade**

- Mais de 100 mil derivados com fine-tuning da comunidade
- RecurrentGemma (arquitetura Griffin)
- EmbeddingGemma, T5Gemma 2
- VaultGemma (privacidade diferencial)

## Veja também {.cols-1}

- [Documentação oficial](https://ai.google.dev/gemma/docs/core) _(ai.google.dev)_
- [Model Card](https://ai.google.dev/gemma/docs/core/model_card_4) _(ai.google.dev)_
- [Página de modelos do DeepMind](https://deepmind.google/models/gemma/gemma-4/) _(deepmind.google)_
- [HuggingFace](https://huggingface.co/google) _(huggingface.co)_
- [Gemma Cookbook](https://github.com/google-gemma/gemma-cookbook) _(github.com)_
- [JAX Gemma Library](https://github.com/google-deepmind/gemma) _(github.com)_
- [Guia de uso do vLLM](https://docs.vllm.ai/projects/recipes/en/latest/Google/Gemma4.html) _(docs.vllm.ai)_
- [Biblioteca do Ollama](https://ollama.com/library/gemma4) _(ollama.com)_
