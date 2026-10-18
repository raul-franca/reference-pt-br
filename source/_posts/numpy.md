
---
title: NumPy
date: 2026-07-19
background: bg-[#4f6fc3]
tags:
  - scientific computing
  - numerical analysis
  - array processing
categories:
  - Python
intro: |
  O [NumPy](https://numpy.org/) é o pacote fundamental para computação científica com Python. Esta cheat sheet traz uma referência de nível de produção para NumPy ≥2.0, com ênfase em desempenho, eficiência de memória e operações avançadas com arrays.
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Convenção de importação

```python
import numpy as np

# For performance-critical code
np.set_printoptions(precision=4, suppress=True, linewidth=120)

# Enable error handling for floating point
np.seterr(divide='raise', over='raise', under='ignore', invalid='raise')
```

### Criação de arrays

| Descrição | Código |
|-------------|------|
| A partir de lista Python | `np.array([1, 2, 3])` |
| A partir de lista de listas Python | `np.array([(1, 2, 3), (4, 5, 6)])` |
| Array de zeros | `np.zeros((3, 4), dtype=np.float64)` |
| Array de uns | `np.ones((2, 3), dtype=np.int64)` |
| Matriz identidade | `np.eye(5, dtype=np.float32)` |
| Array diagonal | `np.diag([1, 2, 3])` |
| Array preenchido | `np.full((2, 3), 8, dtype=np.float64)` |
| Vazio (não inicializado) | `np.empty((3, 3), dtype=np.float64)` |
| Intervalo igualmente espaçado | `np.linspace(0, 100, 6, dtype=np.float64)` |
| Intervalo aritmético | `np.arange(0, 10, 3)` |
| Espaçamento logarítmico | `np.logspace(0, 3, 4, base=10)` |
| A partir de função | `np.fromfunction(lambda i, j: i + j, (3, 3))` |
| A partir de string | `np.fromstring('1 2 3', dtype=int, sep=' ')` |

### Arrays aleatórios

| Descrição | Código |
|-------------|------|
| Uniforme [0,1) | `np.random.rand(4, 5)` |
| Uniforme [low, high) | `np.random.uniform(0, 100, (4, 5))` |
| Normal padrão | `np.random.randn(4, 5)` |
| Normal (média, desvio) | `np.random.normal(0, 1, (4, 5))` |
| Inteiros [low, high) | `np.random.randint(0, 10, (2, 3))` |
| Escolha aleatória | `np.random.choice([1, 2, 3, 4, 5], size=3, replace=False)` |
| Embaralhar in-place | `np.random.shuffle(arr)` |
| Permutação | `np.random.permutation(10)` |
| Semente aleatória | `np.random.seed(42)` |
| Gerador (nova API) | `rng = np.random.default_rng(seed=42); rng.random((3, 3))` |

---

## Propriedades de arrays {.row-span-2}

### Atributos

| Descrição | Código |
|-------------|------|
| Shape (dimensões) | `arr.shape` |
| Número de elementos | `arr.size` |
| Número de dimensões | `arr.ndim` |
| Tipo de dados | `arr.dtype` |
| Tamanho do item (bytes) | `arr.itemsize` |
| Memória total (bytes) | `arr.nbytes` |
| Strides (layout de memória) | `arr.strides` |
| Base (verificação de view) | `arr.base` is not None |
| Contíguo em C | `arr.flags['C_CONTIGUOUS']` |
| Contíguo em F | `arr.flags['F_CONTIGUOUS']` |

### Conversão de tipos

| Descrição | Código |
|-------------|------|
| Converter dtype | `arr.astype(np.float32)` |
| Para lista Python | `arr.tolist()` |
| Para bytes | `arr.tobytes()` |
| Para arquivo | `arr.tofile('data.bin')` |
| Para string | `np.array2string(arr, precision=2)` |
| View com outro dtype | `arr.view(np.int32)` |

---

## Indexação e fatiamento {.row-span-2}

### Indexação básica

| Descrição | Código |
|-------------|------|
| Elemento único | `arr[5]` |
| Elemento 2D | `arr[2, 5]` |
| Atribuição única | `arr[1] = 4` |
| Atribuição 2D | `arr[1, 3] = 10` |
| Fatia (linhas 0,1,2) | `arr[0:3]` |
| Fatia (linhas 0,1,2, col 4) | `arr[0:3, 4]` |
| Duas primeiras linhas | `arr[:2]` |
| Todas as linhas, coluna 1 | `arr[:, 1]` |
| Linha 0, todas as colunas | `arr[0, :]` |
| Fatia com passo | `arr[0:10:2]` |
| Indexação negativa | `arr[-1]`, `arr[-3:]` |
| Reticências (múltiplas dimensões) | `arr[..., 1]` |

### Indexação booleana

| Descrição | Código |
|-------------|------|
| Máscara booleana | `arr < 5` |
| Múltiplas condições | `(arr1 < 3) & (arr2 > 5)` |
| Condição OR | `(arr1 < 3) \| (arr2 > 5)` |
| Inverter | `~arr` |
| Filtrar por condição | `arr[arr < 5]` |
| Where (selecionar) | `np.where(arr < 5, arr, 0)` |
| Where (índices) | `np.where(arr < 5)` |
| Extrair | `np.extract(arr < 5, arr)` |

### Fancy indexing

| Descrição | Código |
|-------------|------|
| Lista de inteiros | `arr[[1, 3, 5]]` |
| Lista de inteiros 2D | `arr[[0, 1], [0, 1]]` |
| Usando np.ix_ | `arr[np.ix_([0, 2], [0, 2])]` |
| Selecionar com condições | `arr[np.where(arr > 0)]` |
| Limitar valores (clip) | `np.clip(arr, 0, 1)` |
| Inserir valores | `np.put(arr, [0, 2], [10, 20])` |
| Obter valores | `np.take(arr, [0, 2])` |

### Indexação avançada

| Descrição | Código |
|-------------|------|
| Índice como array | `arr[[0, 1, 2], [0, 1, 0]]` |
| Índice com máscaras | `arr[arr > 0.5] = 1` |
| Condição complexa | `arr[(arr > 0.2) & (arr < 0.8)]` |
| Escolher entre arrays | `np.choose(selector, [arr1, arr2])` |
| Seleção da diagonal | `np.diagonal(arr, offset=0)` |
| Traço | `np.trace(arr)` |

---

## Operações de shape {.row-span-2}

### Remodelagem

| Descrição | Código |
|-------------|------|
| Reshape (nova view quando possível) | `arr.reshape(3, 4)` |
| Resize (in-place, pode preencher) | `arr.resize((5, 6))` |
| Achatar (ordem C) | `arr.flatten()` |
| Achatar (ordem F) | `arr.flatten('F')` |
| Ravel (view quando possível) | `arr.ravel()` |
| Transpor | `arr.T` |
| Transpor com eixos | `arr.transpose(1, 0, 2)` |
| Trocar eixos | `arr.swapaxes(0, 1)` |
| Mover eixo | `np.moveaxis(arr, 0, -1)` |
| Expandir dimensões | `np.expand_dims(arr, axis=0)` |
| Squeeze (remove dimensões de tamanho 1) | `np.squeeze(arr)` |
| Broadcast para shape | `np.broadcast_to(arr, (3, 5, 5))` |

### Adicionar/remover dimensões

| Descrição | Código |
|-------------|------|
| Novo eixo (view) | `arr[np.newaxis, :]` |
| Novo eixo (no final) | `arr[:, np.newaxis]` |
| Expandir dimensões | `np.expand_dims(arr, 1)` |
| Remover dimensões unitárias | `arr.squeeze(axis=0)` |
| Concatenar | `np.concatenate([arr1, arr2], axis=0)` |
| Stack (novo eixo) | `np.stack([arr1, arr2], axis=0)` |
| Stack vertical | `np.vstack([arr1, arr2])` |
| Stack horizontal | `np.hstack([arr1, arr2])` |
| Stack de colunas | `np.column_stack([arr1, arr2])` |
| Tile (repetir) | `np.tile(arr, (2, 3))` |
| Repetir cada elemento | `np.repeat(arr, 3, axis=0)` |

### Divisão

| Descrição | Código |
|-------------|------|
| Dividir em N partes iguais | `np.split(arr, 3)` |
| Dividir por índices | `np.split(arr, [2, 5])` |
| Divisão horizontal | `np.hsplit(arr, 5)` |
| Divisão vertical | `np.vsplit(arr, 3)` |
| Divisão em profundidade (3D) | `np.dsplit(arr, 3)` |
| Divisão de array (desigual) | `np.array_split(arr, 3)` |

---

## Operações elemento a elemento

### Aritmética

| Descrição | Código |
|-------------|------|
| Adição | `np.add(arr1, arr2)` or `arr1 + arr2` |
| Subtração | `np.subtract(arr1, arr2)` or `arr1 - arr2` |
| Multiplicação | `np.multiply(arr1, arr2)` or `arr1 * arr2` |
| Divisão | `np.divide(arr1, arr2)` or `arr1 / arr2` |
| Divisão inteira | `np.floor_divide(arr1, arr2)` or `arr1 // arr2` |
| Potência | `np.power(arr1, arr2)` or `arr1 ** arr2` |
| Módulo | `np.mod(arr1, arr2)` or `arr1 % arr2` |
| Negativo | `np.negative(arr)` or `-arr` |
| Absoluto | `np.abs(arr)` |
| Sinal | `np.sign(arr)` |

### Funções matemáticas

| Descrição | Código |
|-------------|------|
| Raiz quadrada | `np.sqrt(arr)` |
| Exponencial | `np.exp(arr)` |
| Log natural | `np.log(arr)` |
| Log na base 10 | `np.log10(arr)` |
| Log na base 2 | `np.log2(arr)` |
| Seno/Cosseno/Tangente | `np.sin(arr)`, `np.cos(arr)`, `np.tan(arr)` |
| Arcsin/Arccos/Arctan | `np.arcsin(arr)`, `np.arccos(arr)`, `np.arctan(arr)` |
| Hiperbólicas | `np.sinh(arr)`, `np.cosh(arr)`, `np.tanh(arr)` |
| Arredondamento | `np.round(arr, decimals=2)` |
| Teto | `np.ceil(arr)` |
| Piso | `np.floor(arr)` |
| Truncar | `np.trunc(arr)` |
| Graus para radianos | `np.radians(arr)` |
| Radianos para graus | `np.degrees(arr)` |

### Comparação e lógica

| Descrição | Código |
|-------------|------|
| Igual | `np.equal(arr1, arr2)` or `arr1 == arr2` |
| Diferente | `np.not_equal(arr1, arr2)` or `arr1 != arr2` |
| Menor que | `np.less(arr1, arr2)` or `arr1 < arr2` |
| Maior que | `np.greater(arr1, arr2)` or `arr1 > arr2` |
| Menor/igual | `np.less_equal(arr1, arr2)` or `arr1 <= arr2` |
| Maior/igual | `np.greater_equal(arr1, arr2)` or `arr1 >= arr2` |
| AND lógico | `np.logical_and(arr1, arr2)` |
| OR lógico | `np.logical_or(arr1, arr2)` |
| NOT lógico | `np.logical_not(arr)` |
| XOR lógico | `np.logical_xor(arr1, arr2)` |
| É finito | `np.isfinite(arr)` |
| É nan | `np.isnan(arr)` |
| É inf | `np.isinf(arr)` |

---

## Agregação e estatísticas

### Reduções

| Descrição | Código |
|-------------|------|
| Soma (tudo) | `np.sum(arr)` |
| Soma (eixo) | `np.sum(arr, axis=0)` |
| Média | `np.mean(arr)` |
| Média (eixo) | `np.mean(arr, axis=1)` |
| Mediana | `np.median(arr)` |
| Min/Max | `np.min(arr)`, `np.max(arr)` |
| Min/Max (eixo) | `np.min(arr, axis=0)`, `np.max(arr, axis=1)` |
| Desvio padrão | `np.std(arr)` |
| Variância | `np.var(arr)` |
| Percentil | `np.percentile(arr, 75)` |
| Quantil | `np.quantile(arr, 0.75)` |
| Soma cumulativa | `np.cumsum(arr)` |
| Produto cumulativo | `np.cumprod(arr)` |
| Produto escalar | `np.dot(arr1, arr2)` |
| Produto interno | `np.inner(arr1, arr2)` |
| Produto externo | `np.outer(arr1, arr2)` |

### Funções estatísticas

| Descrição | Código |
|-------------|------|
| Coeficiente de correlação | `np.corrcoef(arr1, arr2)` |
| Covariância | `np.cov(arr1, arr2)` |
| Correlação cruzada | `np.correlate(arr1, arr2, mode='full')` |
| Convolução | `np.convolve(arr1, arr2, mode='full')` |
| Histograma | `np.histogram(arr, bins=10)` |
| Contagem por bin | `np.bincount(arr.astype(int))` |
| Valores únicos | `np.unique(arr)` |
| Únicos com contagens | `np.unique(arr, return_counts=True)` |
| Contar não zeros | `np.count_nonzero(arr)` |
| Any/All | `np.any(arr > 0)`, `np.all(arr > 0)` |

---

## Álgebra linear

### Operações com matrizes

| Descrição | Código |
|-------------|------|
| Multiplicação de matrizes | `np.matmul(A, B)` or `A @ B` |
| Produto escalar | `np.dot(A, B)` |
| Produto interno | `np.inner(A, B)` |
| Produto externo | `np.outer(A, B)` |
| Traço | `np.trace(A)` |
| Determinante | `np.linalg.det(A)` |
| Posto | `np.linalg.matrix_rank(A)` |
| Número de condição | `np.linalg.cond(A)` |

### Decomposições de matrizes

| Descrição | Código |
|-------------|------|
| Inversa | `np.linalg.inv(A)` |
| Pseudo-inversa | `np.linalg.pinv(A)` |
| Autovalores/vetores | `np.linalg.eig(A)` |
| Autovalores (somente) | `np.linalg.eigvals(A)` |
| SVD | `np.linalg.svd(A)` |
| Decomposição QR | `np.linalg.qr(A)` |
| Decomposição LU | `np.linalg.lu(A)` |
| Decomposição de Cholesky | `np.linalg.cholesky(A)` |

### Resolução de sistemas

| Descrição | Código |
|-------------|------|
| Resolver sistema linear | `np.linalg.solve(A, b)` |
| Mínimos quadrados | `np.linalg.lstsq(A, b)` |
| Norma (euclidiana) | `np.linalg.norm(A)` |
| Norma (ordem específica) | `np.linalg.norm(A, ord=1)` |
| Valores singulares | `np.linalg.svdvals(A)` |

---

## Broadcasting e vetorização

### Regras de broadcasting

| Descrição | Código |
|-------------|------|
| Escalar + array | `arr + 1` |
| 1D + 2D | `arr2d + arr1d` |
| Dimensões finais correspondentes | `arr2d + arr1d.reshape(-1, 1)` |
| Verificar broadcast | `np.broadcast_shapes((2,3), (3,))` |
| Broadcast explícito | `np.broadcast_to(arr1d, (3, 4))` |
| Broadcasting em ufunc | `np.add(arr2d, arr1d)` |

### Padrões de vetorização

| Descrição | Código |
|-------------|------|
| Adição vetorizada | `arr1 + arr2` (instead of loop) |
| Condição vetorizada | `np.where(cond, arr1, arr2)` |
| Seleção vetorizada | `arr[mask]` |
| Acumulação vetorizada | `np.cumsum(arr)` |
| Operações elemento a elemento | `np.sqrt(arr)` |
| Operações de redução | `np.sum(arr)` |
| Funções universais | `np.exp(arr)`, `np.log(arr)` |

---

## Memória e desempenho

### Gerenciamento de memória

| Descrição | Código |
|-------------|------|
| View vs copy | `arr_view = arr[:]` (view); `arr_copy = arr.copy()` (copy) |
| Verificar propriedade | `arr.base is None` (own memory) |
| Verificar compartilhamento de memória | `np.shares_memory(arr1, arr2)` |
| Alinhamento de memória | `np.array(arr, copy=False, order='C')` |
| Layout de memória | `np.ascontiguousarray(arr)` |
| Ordem Fortran | `np.asfortranarray(arr)` |
| Byteswap | `arr.byteswap(inplace=True)` |

### Otimização de desempenho

| Descrição | Código |
|-------------|------|
| Pré-alocar | `np.empty((N,))` |
| Use variáveis locais | `np_add = np.add` |
| Evite loops Python | Use operações vetorizadas do NumPy |
| Operações out-of-place | `np.add(arr1, arr2, out=result)` |
| Use in-place | `arr += 1` (less memory) |
| Reduza alocações | Reutilize arrays com o parâmetro `out=` |
| Use float32 quando possível | `np.float32` instead of `np.float64` |
| Use arquivos mapeados em memória | `np.memmap('data.dat', dtype='float32', mode='r', shape=(1000, 1000))` |

---

## Entrada/Saída {.cols-2}

### Arquivos de texto

| Descrição | Código |
|-------------|------|
| Carregar texto | `np.loadtxt('file.txt', delimiter=' ')` |
| Carregar CSV | `np.genfromtxt('file.csv', delimiter=',', skip_header=1)` |
| Carregar com valores ausentes | `np.genfromtxt('file.csv', delimiter=',', filling_values=0)` |
| Salvar texto | `np.savetxt('file.txt', arr, delimiter=' ', fmt='%.4f')` |
| Salvar CSV | `np.savetxt('file.csv', arr, delimiter=',', fmt='%.4f')` |

### Arquivos binários

| Descrição | Código |
|-------------|------|
| Carregar .npy | `np.load('file.npy')` |
| Salvar .npy | `np.save('file.npy', arr)` |
| Carregar .npz (múltiplos arrays) | `data = np.load('file.npz'); data['arr1']` |
| Salvar .npz | `np.savez('file.npz', arr1=arr1, arr2=arr2)` |
| Salvar .npz comprimido | `np.savez_compressed('file.npz', arr1=arr1, arr2=arr2)` |
| Binário para arquivo | `arr.tofile('data.bin')` |
| Ler de arquivo | `np.fromfile('data.bin', dtype=np.float32)` |
| Mapeado em memória | `arr = np.memmap('data.dat', dtype='float32', mode='r', shape=(100, 100))` |

### Tipos de dados

| Descrição | Código |
|-------------|------|
| Tipos inteiros | `np.int8`, `np.int16`, `np.int32`, `np.int64` |
| Inteiros sem sinal | `np.uint8`, `np.uint16`, `np.uint32`, `np.uint64` |
| Tipos de ponto flutuante | `np.float16`, `np.float32`, `np.float64`, `np.float128` |
| Tipos complexos | `np.complex64`, `np.complex128` |
| Booleano | `np.bool_` |
| Objeto | `np.object_` |
| String | `np.string_`, `np.unicode_` |
| Data/hora | `np.datetime64`, `np.timedelta64` |
| dtypes estruturados | `np.dtype([('name', 'U10'), ('age', 'i4')])` |

---

## Arrays estruturados

| Descrição | Código |
|-------------|------|
| Criar estruturado | `np.array([(1, 'Alice'), (2, 'Bob')], dtype=[('id','i4'), ('name','U10')])` |
| Acessar por campo | `arr['name']` |
| Acessar por posição | `arr[0]` |
| Múltiplos campos | `arr[['id', 'name']]` |
| dtype complexo | `np.dtype({'names': ['id','name'], 'formats': ['i4','U10']})` |
| Recarray (por atributo) | `arr = np.rec.array([(1,'Alice'),(2,'Bob')], dtype=[('id','i4'), ('name','U10')]); arr.name` |

---

## Datetime e Timedelta

| Descrição | Código |
|-------------|------|
| Criar datetime | `np.datetime64('2026-07-01')` |
| Array de datetimes | `np.arange('2026-01', '2026-07', dtype='datetime64[M]')` |
| Timedelta | `np.timedelta64(1, 'D')` |
| Aritmética | `np.datetime64('2026-07-01') - np.datetime64('2026-06-01')` |
| Extrair componentes | `dt.astype('datetime64[Y]')` (year) |
| Dia da semana | `(dt.astype('datetime64[D]') - np.datetime64('1970-01-01')).astype('int64') % 7` |

---

## Armadilhas comuns e boas práticas

| Armadilha | Solução |
|---------|----------|
| Confusão entre copy e view | Use `arr.copy()` explicitamente para uma cópia independente |
| Mutação de views | Verifique com `arr.base is not None` |
| Loops Python sobre arrays | Use operações vetorizadas em vez de loops |
| Usar int64 sem necessidade | Use `np.float32` or `np.int32` para eficiência de memória |
| Argumentos padrão mutáveis | Evite `arr=[]` em funções; use `None` |
| Não especificar dtype | Especifique `dtype` para controlar a precisão |
| Usar `np.append` em loops | Pré-aloque o array para melhor desempenho |
| Shape incompatível no broadcasting | Verifique as shapes com `arr.shape` |
| Comparação de ponto flutuante | Use `np.isclose()` para comparar floats |
| Vazamento de memória em arrays grandes | Use `del arr` or `arr = None` após o uso |
| Seed aleatória inconsistente | Use `np.random.seed(42)` para reprodutibilidade |
| Usar a API random antiga | Use a nova API `np.random.default_rng()` |

---
