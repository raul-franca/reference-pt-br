---
title: Pandas
date: 2026-07-19
background: bg-[#110750]
tags:
  - data analysis
  - data manipulation
categories:
  - Python
intro: |
  [Pandas](https://pandas.pydata.org/) é uma poderosa biblioteca de análise e manipulação de dados para Python. Este cheat sheet traz uma referência completa do pandas moderno (≥2.2), com ênfase em performance, dtypes anuláveis e integração com PyArrow.
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Convenção de importação

```python
import pandas as pd
import numpy as np

# Enable future features (Pandas 2.2+)
pd.options.future.infer_string = True      # Arrow-backed strings
pd.options.mode.copy_on_write = True       # Lazy copying, memory efficient
pd.set_option('display.max_columns', None) # Full display in notebooks

# Optional: suppress performance warnings
import warnings
warnings.filterwarnings('ignore', category=pd.errors.PerformanceWarning)
```

### Criando DataFrames

| -                                      | -                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------- |
| A partir de um dicionário              | `pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})`                                |
| A partir de uma lista de dicionários   | `pd.DataFrame([{'a': 1, 'b': 2}, {'a': 3, 'b': 4}])`                            |
| A partir de um arquivo CSV (otimizado) | `pd.read_csv('file.csv', engine='pyarrow', dtype_backend='pyarrow')`            |
| A partir de um arquivo Parquet         | `pd.read_parquet('file.parquet', engine='pyarrow')`                             |
| A partir de um arquivo Excel           | `pd.read_excel('file.xlsx', engine='openpyxl')`                                 |
| A partir de uma query SQL              | `pd.read_sql('SELECT * FROM table', con, index_col='id', parse_dates=['date'])` |
| A partir de um dicionário de arrays    | `pd.DataFrame.from_dict(data, orient='index')`                                  |
| A partir de uma lista de tuplas        | `pd.DataFrame.from_records([(1,2),(3,4)], columns=['a','b'])`                   |
| DataFrame vazio com colunas            | `pd.DataFrame(columns=['col1','col2'])`                                         |
| A partir de um arquivo JSON            | `pd.read_json('file.json', orient='records', lines=True)`                       |
| A partir da área de transferência      | `pd.read_clipboard()`                                                           |

### Inspecionando os dados {.row-span-2}

| -                                               | -                                                      |
| ----------------------------------------------- | ------------------------------------------------------ |
| Primeiras n linhas (padrão 5)                   | `df.head(10)`                                          |
| Últimas n linhas (padrão 5)                     | `df.tail(10)`                                          |
| Número de linhas e colunas                      | `df.shape`                                             |
| Informações detalhadas (memória, dtypes, nulos) | `df.info(show_counts=True, memory_usage='deep')`       |
| Estatísticas resumidas para colunas numéricas   | `df.describe(percentiles=[.25,.5,.75], include='all')` |
| Nomes das colunas como lista                    | `df.columns.tolist()`                                  |
| Objeto de índice                                | `df.index`                                             |
| Tipos de dados das colunas                      | `df.dtypes`                                            |
| Uso de memória por coluna                       | `df.memory_usage(deep=True)`                           |
| Contagem de valores com proporções              | `df['col'].value_counts(dropna=False, normalize=True)` |
| Valores únicos na coluna                        | `df['col'].unique()`                                   |
| Número de valores únicos                        | `df['col'].nunique(dropna=False)`                      |
| Amostra aleatória de linhas                     | `df.sample(n=5, random_state=42)`                      |
| Verifica se o DataFrame está vazio              | `df.empty`                                             |

### Selecionando dados

| -                                           | -                                              |
| ------------------------------------------- | ---------------------------------------------- |
| Seleciona uma única coluna (como Series)    | `df['col']` ou `df.col`                        |
| Seleciona várias colunas                    | `df[['col1', 'col2']]`                         |
| Seleciona linhas por rótulo do índice       | `df.loc[5:10]`                                 |
| Seleciona linhas por posição inteira        | `df.iloc[0:5]`                                 |
| Seleciona uma célula específica por rótulo  | `df.at[5, 'col']`                              |
| Seleciona uma célula específica por posição | `df.iat[0, 1]`                                 |
| Filtra linhas por condição                  | `df[df['col'] > 2]`                            |
| Filtra usando query string (rápido)         | `df.query('col > 2 and col2 == "foo"')`        |
| Filtra com múltiplas condições              | `df[(df['col']>2) & (df['col2']=='bar')]`      |
| Seleciona colunas por tipo de dado          | `df.select_dtypes(include=['number', 'bool'])` |
| Seleciona a primeira linha                  | `df.iloc[0]`                                   |
| Seleciona a última linha                    | `df.iloc[-1]`                                  |
| Seleciona uma linha aleatória               | `df.sample(1)`                                 |

### Limpeza de dados

| -                                                     | -                                                         |
| ----------------------------------------------------- | --------------------------------------------------------- |
| Remove linhas com qualquer valor ausente              | `df.dropna(how='any', axis=0)`                            |
| Remove linhas em que todos os valores estão ausentes  | `df.dropna(how='all', axis=0)`                            |
| Remove colunas com qualquer valor ausente             | `df.dropna(axis=1, how='any')`                            |
| Remove colunas em que todos os valores estão ausentes | `df.dropna(axis=1, how='all')`                            |
| Preenche valores ausentes com um escalar              | `df.fillna(0, inplace=False)`                             |
| Preenche valores ausentes para frente (forward fill)  | `df.ffill(axis=0)`                                        |
| Preenche valores ausentes para trás (backward fill)   | `df.bfill(axis=0)`                                        |
| Interpola valores ausentes                            | `df.interpolate(method='linear', limit_direction='both')` |
| Substitui valores usando dict ou regex                | `df.replace({'old': 'new'}, regex=True)`                  |
| Renomeia colunas                                      | `df.rename(columns={'old':'new'})`                        |
| Renomeia rótulos do índice                            | `df.rename(index={0:'first'})`                            |
| Remove linhas duplicadas                              | `df.drop_duplicates(subset=['col'], keep='first')`        |
| Altera o tipo de dado da coluna (int anulável)        | `df = df.astype({'col': 'Int64'})`                        |
| Converte para dtype string com backend Arrow          | `df['col'] = df['col'].astype('string[pyarrow]')`         |
| Remove colunas com variância abaixo do limite         | `df.loc[:, df.std() > threshold]`                         |
| Limita valores a um intervalo                         | `df['col'].clip(lower=0, upper=100)`                      |

### Adicionando/removendo dados {.row-span-2}

| -                                                                           | -                                                   |
| --------------------------------------------------------------------------- | --------------------------------------------------- |
| Adiciona uma nova coluna por atribuição                                     | `df['new'] = df['a'] + df['b']`                     |
| Adiciona várias novas colunas                                               | `df.assign(new1 = df.a + df.b, new2 = df.a - df.b)` |
| Insere uma coluna em uma posição específica                                 | `df.insert(2, 'new_col', values)`                   |
| Remove e retorna uma coluna                                                 | `df.pop('col')`                                     |
| Remove uma coluna                                                           | `df.drop('col', axis=1, inplace=False)`             |
| Remove uma linha por rótulo do índice                                       | `df.drop(0, axis=0)`                                |
| Adiciona uma única linha                                                    | `df.loc[len(df)] = [1,2,3]`                         |
| Concatena DataFrames por linha                                              | `pd.concat([df1, df2], ignore_index=True)`          |
| Concatena DataFrames por coluna                                             | `pd.concat([df1, df2], axis=1)`                     |
| Concatena com chaves de grupo                                               | `pd.concat([df1, df2], keys=['A','B'])`             |
| **Nota:** `df.append()` está descontinuado. Use `pd.concat()` em vez disso. |

### Combinando dados

| -                                                       | -                                                                                    |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Faz merge de dois DataFrames por uma chave (inner join) | `pd.merge(df1, df2, on='key')`                                                       |
| Faz merge de dois DataFrames (outer join)               | `pd.merge(df1, df2, on='key', how='outer')`                                          |
| Faz merge de dois DataFrames (left/right join)          | `pd.merge(df1, df2, on='key', how='left')`                                           |
| Faz merge com colunas-chave diferentes                  | `pd.merge(df1, df2, left_on='key1', right_on='key2')`                                |
| Faz merge com validação e metadados                     | `pd.merge(df1, df2, on='key', validate='1:m', suffixes=('_l','_r'), indicator=True)` |
| Faz join de DataFrames pelo índice                      | `df1.join(df2, how='inner', lsuffix='_l', rsuffix='_r')`                             |
| Produto cartesiano (cross join)                         | `df1.join(df2, how='cross')`                                                         |
| Preenche valores ausentes a partir de outro DataFrame   | `df1.combine_first(df2)`                                                             |

## Indexação avançada

### MultiIndex / indexação hierárquica

| -                                                 | -                                                                 |
| ------------------------------------------------- | ----------------------------------------------------------------- |
| Cria um MultiIndex a partir de tuplas             | `pd.MultiIndex.from_tuples([('A',1), ('A',2), ('B',1), ('B',2)])` |
| Define várias colunas como índice                 | `df.set_index(['col1', 'col2'])`                                  |
| Seleciona todas as linhas do primeiro nível       | `df.loc[('A', slice(None)), 'x']`                                 |
| Seleção por seção transversal (xs)                | `df.xs('A', level=0)`                                             |
| Obtém os valores de um nível específico do índice | `df.index.get_level_values(0)`                                    |
| Pivota um nível para colunas (unstack)            | `df.unstack(level=0)`                                             |
| Comprime colunas para o índice (stack)            | `df.stack()`                                                      |
| Inverte os níveis do MultiIndex                   | `df.swaplevel()`                                                  |
| Ordena por um nível específico do índice          | `df.sort_index(level=1)`                                          |
| Reordena os níveis do índice                      | `df.reorder_levels([1,0])`                                        |

### Dados categóricos

| -                                             | -                                                                                      |
| --------------------------------------------- | -------------------------------------------------------------------------------------- |
| Cria uma coluna categórica ordenada           | `df['cat'] = pd.Categorical(df['col'], categories=['low','med','high'], ordered=True)` |
| Obtém os códigos inteiros das categorias      | `df['cat'].cat.codes`                                                                  |
| Reordena as categorias                        | `df['cat'].cat.reorder_categories(['high','med','low'])`                               |
| Adiciona novas categorias                     | `df['cat'].cat.add_categories(['very_high'])`                                          |
| Remove categorias não utilizadas              | `df['cat'].cat.remove_unused_categories()`                                             |
| Agrupa por categórica (ignora não observadas) | `df.groupby('cat', observed=True).mean()`                                              |

## Operações com séries temporais

### Manipulação de datas

| -                                                  | -                                                            |
| -------------------------------------------------- | ------------------------------------------------------------ |
| Converte coluna string para datetime (com formato) | `df['date'] = pd.to_datetime(df['date'], format='%Y-%m-%d')` |
| Extrai o ano do datetime                           | `df['year'] = df['date'].dt.year`                            |
| Extrai o mês do datetime                           | `df['month'] = df['date'].dt.month`                          |
| Extrai o dia do datetime                           | `df['day'] = df['date'].dt.day`                              |
| Extrai o dia da semana (0=segunda-feira)           | `df['dayofweek'] = df['date'].dt.dayofweek`                  |
| Extrai o trimestre                                 | `df['quarter'] = df['date'].dt.quarter`                      |
| Verifica se a data é fim de semana                 | `df['is_weekend'] = df['date'].dt.dayofweek >= 5`            |
| Define a coluna datetime como índice               | `df.set_index('date', inplace=True)`                         |
| Gera um intervalo de datas                         | `pd.date_range('2026-01-01', periods=100, freq='D')`         |
| Adiciona um offset de data a cada data             | `df['date'] + pd.DateOffset(months=1)`                       |

### Reamostragem e conversão de frequência

| -                                                 | -                                                                                                                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Reduz para frequência mensal (agregação)          | `df.resample('M').mean()`                                                                                                                                                |
| Aumenta para frequência diária (forward fill)     | `df.resample('D').ffill(limit=2)`                                                                                                                                        |
| Agregação personalizada durante o resample        | `df.resample('QE-DEC').agg(['sum', 'mean'])`                                                                                                                             |
| Resample com rótulo e lado fechado personalizados | `df.resample('W-MON', label='right', closed='right')`                                                                                                                    |
| Frequência de trimestre comercial                 | `df.resample('BQ').mean()`                                                                                                                                               |
| Dias úteis personalizados (ignora feriados)       | `from pandas.tseries.offsets import CustomBusinessDay`<br>`offset = CustomBusinessDay(weekmask='Mon Tue Wed Thu Fri', holidays=['2026-07-04'])`<br>`df.resample(offset)` |
| Altera a frequência sem agregação (asfreq)        | `df.asfreq('D', method='ffill', limit=2)`                                                                                                                                |
| Desloca valores para frente/para trás             | `df['shifted'] = df['value'].shift(1)`                                                                                                                                   |
| Cria colunas de lag/lead                          | `df['lag_3'] = df['value'].shift(3)`                                                                                                                                     |

## Operações de transformação

### Remodelagem (reshaping)

| -                                          | -                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Pivota sem agregação (reshape exato)       | `df.pivot(index='date', columns='variable', values='value')`                                                  |
| Pivota com agregação (tabela dinâmica)     | `pd.pivot_table(df, values='value', index='date', columns='var', aggfunc='mean', fill_value=0, margins=True)` |
| Faz melt do formato wide para long         | `df.melt(id_vars=['date'], value_vars=['a','b'], var_name='var', value_name='val')`                           |
| Stack/unstack de MultiIndex                | `df.stack(future_stack=True)` / `df.unstack()`                                                                |
| Tabulação cruzada com normalização         | `pd.crosstab(df['col1'], df['col2'], normalize='columns', margins=True, margins_name='Total')`                |
| Explode uma coluna do tipo lista em linhas | `df.explode('list_column', ignore_index=True)`                                                                |

### Agregando dados

| -                                      | -                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Soma dos valores                       | `df['col'].sum(skipna=True)`                                                                            |
| Média dos valores                      | `df['col'].mean()`                                                                                      |
| Contagem de valores não nulos (non-NA) | `df['col'].count()`                                                                                     |
| Valor mínimo                           | `df['col'].min()`                                                                                       |
| Valor máximo                           | `df['col'].max()`                                                                                       |
| Desvio padrão (amostral)               | `df['col'].std(ddof=1)`                                                                                 |
| Variância (amostral)                   | `df['col'].var(ddof=1)`                                                                                 |
| Quantil (por exemplo, percentil 75)    | `df['col'].quantile(0.75)`                                                                              |
| Agrupa por uma coluna e soma           | `df.groupby('col1')['col2'].sum()`                                                                      |
| Agrupa e agrega várias colunas         | `df.groupby('col1').agg({'col2': ['sum','mean'], 'col3': 'max'})`                                       |
| Agregação nomeada (estilo novo)        | `df.groupby('group').agg(avg_value=('value','mean'), max_date=('date','max'), count=('value','count'))` |
| Função de agregação personalizada      | `df.groupby('col1').agg(lambda x: x.max() - x.min())`                                                   |

### GroupBy avançado

| -                                                         | -                                                                                              |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Transform: transmite o resultado para as linhas originais | `df['mean_per_group'] = df.groupby('group')['value'].transform('mean')`                        |
| Filtra grupos com base em uma condição                    | `df.groupby('group').filter(lambda x: x['value'].sum() > 10)`                                  |
| Aplica uma função personalizada a cada grupo              | `df.groupby('group').apply(lambda g: g.sort_values('date').head(2), include_groups=False)`     |
| Aplica transformação com pipe após o groupby              | `df.groupby('group').pipe(lambda g: g['value'].transform(lambda x: (x - x.mean()) / x.std()))` |
| Groupby com categóricas observadas                        | `df.groupby('category', observed=True).mean()`                                                 |

### Funções de janela

| -                                                          | -                                                                                           |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Média móvel com janela de tamanho 5                        | `df['col'].rolling(window=5, min_periods=3, center=True).mean()`                            |
| Múltiplas agregações em janela móvel                       | `df['col'].rolling(3).agg(['sum','mean', lambda x: x.max() - x.min()])`                     |
| Janela móvel com pesos personalizados                      | `df['col'].rolling(window=10, win_type='gaussian', weights=lambda x: np.exp(-x**2)).mean()` |
| Estatísticas expansivas (todos os dados até o ponto atual) | `df['col'].expanding(min_periods=2).std()`                                                  |
| Média móvel com pesos exponenciais                         | `df['col'].ewm(span=10, adjust=True, ignore_na=False).mean()`                               |
| Variância com pesos exponenciais                           | `df['col'].ewm(alpha=0.3, min_periods=5).var()`                                             |
| Aplica uma função personalizada à janela móvel             | `df['col'].rolling(3).apply(lambda x: x.sum(), raw=True)`                                   |

### Aplicando funções {.row-span-2}

| -                                                     | -                                                                                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Aplica função elemento a elemento em uma coluna       | `df['col'].apply(lambda x: x**2)`                                                                   |
| Aplica função por linha                               | `df.apply(lambda row: row['a'] + row['b'], axis=1)`                                                 |
| Aplica função elemento a elemento em todo o DataFrame | `df.map(lambda x: x.upper() if isinstance(x,str) else x)` (**Nota:** `applymap` está descontinuado) |
| Mapeia valores usando um dicionário                   | `df['col'].map({'a':1,'b':2}, na_action='ignore')`                                                  |
| Operações vetorizadas com strings                     | `df['col'].str.upper()`, `df['col'].str.contains('pattern')`                                        |
| Operações vetorizadas com datetime                    | `df['date'].dt.year`, `df['date'].dt.dayofweek`                                                     |
| Aritmética rápida usando eval (numexpr)               | `df.eval('c = a * b + 2 * d', engine='numexpr')`                                                    |
| Filtragem rápida usando query (numexpr)               | `df.query('a > b & c.str.contains("foo")')`                                                         |
| Encadeia operações com pipe                           | `df.pipe(lambda d: d.assign(ratio=d.a/d.b)).pipe(...)`                                              |

### Operações com strings

| -                                                  | -                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------- | --- |
| Converte para maiúsculas/minúsculas                | `df['col'].str.upper()`, `df['col'].str.lower()`                            |
| Verifica se a string contém um padrão              | `df['col'].str.contains('pattern', regex=True, na=False)`                   |
| Divide a string em colunas                         | `df['col'].str.split(',', expand=True, n=1)`                                |
| Substitui usando expressão regular                 | `df['col'].str.replace(r'\s+', '_', regex=True)`                            |
| Extrai grupos de captura para colunas              | `df['col'].str.extract(r'(\d+)-(\w+)')`                                     |
| Extrai todas as correspondências                   | `df['col'].str.extractall(r'(\d+)')`                                        |
| Encontra todas as correspondências (retorna lista) | `df['col'].str.findall(r'\d+')`                                             |
| Concatena strings com separador                    | `df['col'].str.cat(sep='                                                    | ')` |
| Preenche strings até uma largura fixa              | `df['col'].str.pad(width=10, side='left', fillchar='0')`                    |
| Extrai uma substring                               | `df['col'].str.slice(start=0, stop=5)`                                      |
| Obtém o comprimento da string                      | `df['col'].str.len()`                                                       |
| Verifica o início/fim da string                    | `df['col'].str.startswith('prefix')`, `df['col'].str.endswith('.csv')`      |
| Remove espaços em branco                           | `df['col'].str.strip()`, `df['col'].str.lstrip()`, `df['col'].str.rstrip()` |

## Performance e otimização de memória

### Configurações de performance

| -                                       | -                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Habilita copy-on-write (Pandas 2.0+)    | `pd.options.mode.copy_on_write = True`                                                             |
| Aritmética rápida com eval              | `df.eval('c = a * b + 2 * d', engine='numexpr')`                                                   |
| Filtragem rápida com query              | `df.query('a > b and c == "foo"', engine='numexpr')`                                               |
| Lê um CSV grande em chunks              | `for chunk in pd.read_csv('large.csv', chunksize=100000, dtype_backend='pyarrow'): process(chunk)` |
| Converte para array numpy (evita cópia) | `arr = df[['a','b']].to_numpy(copy=False)`                                                         |
| Faz memory map de arquivos grandes      | `df = pd.read_csv('large.csv', memory_map=True)`                                                   |
| Usa o backend PyArrow para CSV          | `pd.read_csv('file.csv', engine='pyarrow', dtype_backend='pyarrow')`                               |

### Otimização de memória

| -                                                     | -                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Faz downcast de colunas inteiras                      | `def downcast(df):`<br>`  for col in df.select_dtypes(include='integer'):`<br>`    df[col] = pd.to_numeric(df[col], downcast='unsigned')`<br>`  for col in df.select_dtypes(include='float'):`<br>`    df[col] = pd.to_numeric(df[col], downcast='float')`<br>`  return df` |
| Converte para categórica se a cardinalidade for baixa | `for col in df.select_dtypes(include='object'):`<br>`  if df[col].nunique() / len(df) < 0.05:`<br>`    df[col] = df[col].astype('category')`                                                                                                                                |
| Converte tudo para dtypes Arrow                       | `df = df.convert_dtypes(dtype_backend='pyarrow')`                                                                                                                                                                                                                           |
| Usa arrays esparsos para zeros                        | `df['sparse'] = pd.arrays.SparseArray(df['col'], fill_value=0)`                                                                                                                                                                                                             |
| Diagnostica o uso de memória                          | `df.memory_usage(deep=True)`                                                                                                                                                                                                                                                |

## Entrada/Saída {.cols-2}

| -                                                  | -                                                                                    |
| -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Salva em CSV (otimizado)                           | `df.to_csv('file.csv', index=False, encoding='utf-8')`                               |
| Carrega de CSV (otimizado)                         | `df = pd.read_csv('file.csv', engine='pyarrow', dtype_backend='pyarrow')`            |
| Salva em Parquet (rápido, comprimido)              | `df.to_parquet('file.parquet', engine='pyarrow')`                                    |
| Carrega de Parquet                                 | `df = pd.read_parquet('file.parquet', engine='pyarrow')`                             |
| Salva em Excel                                     | `df.to_excel('file.xlsx', sheet_name='Sheet1', engine='openpyxl')`                   |
| Carrega de Excel                                   | `df = pd.read_excel('file.xlsx', sheet_name=0, engine='openpyxl')`                   |
| Salva em JSON (delimitado por linha)               | `df.to_json('file.json', orient='records', lines=True)`                              |
| Carrega de JSON (delimitado por linha)             | `df = pd.read_json('file.json', orient='records', lines=True)`                       |
| Salva em tabela SQL                                | `df.to_sql('table', con, if_exists='replace', index=False)`                          |
| Carrega de uma query SQL                           | `df = pd.read_sql('SELECT * FROM table', con, index_col='id', parse_dates=['date'])` |
| Copia para/a partir da área de transferência       | `df.to_clipboard()` / `pd.read_clipboard()`                                          |
| Salva em/a partir de pickle (rápido, mas inseguro) | `df.to_pickle('file.pkl')` / `pd.read_pickle('file.pkl')`                            |
| Salva em/a partir de Feather (rápido)              | `df.to_feather('file.feather')` / `pd.read_feather('file.feather')`                  |
| Salva em/a partir de HDF5                          | `df.to_hdf('file.h5', key='data', mode='w')` / `pd.read_hdf('file.h5', key='data')`  |

## Armadilhas comuns e boas práticas

| Armadilha                                    | Solução                                                                                              |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Indexação encadeada (cria views)             | Use `df.loc[df.a > 0, 'b']` em vez de `df[df.a > 0]['b']`                                            |
| Mutação in-place de DataFrames grandes       | Use `inplace=False` (padrão) para encadeamento de métodos; evite mutação a menos que seja necessário |
| Fatiamento sem cópia                         | Use `df.copy()` quando precisar de uma fatia independente                                            |
| Análise de datetime lenta                    | Sempre especifique `format` em `pd.to_datetime()` para um ganho de velocidade de 10x                 |
| Inchaço de memória por causa do dtype object | Use o dtype `categorical` para colunas de baixa cardinalidade (<5% únicos)                           |
| Relações de merge ambíguas                   | Especifique `validate` no merge ('1:1', '1:m' etc.) para detectar erros                              |
| Groupby com categorias não utilizadas        | Use `observed=True` para ignorar categorias não observadas no groupby                                |
| Loops lentos com `apply`                     | Use operações vetorizadas quando possível (`df['a'] + df['b']` em vez de `apply`)                    |
| `append()` descontinuado                     | Use `pd.concat([df, other])` em vez disso                                                            |
| `applymap()` descontinuado                   | Use `df.map()` em vez disso (Pandas 2.2+)                                                            |
| Falta de tratamento de `pd.NA`               | Verifique `pd.NA` ao usar dtypes anuláveis                                                           |
| CSV grande sem otimização                    | Habilite copy-on-write e use o backend PyArrow                                                       |

## Descontinuações e notas de versão

| Versão | Descontinuado/Removido                    | Substituto                                  |
| ------ | ----------------------------------------- | ------------------------------------------- |
| 1.4.0  | `df.append()`                             | `pd.concat([df, other])`                    |
| 2.2.0  | `df.applymap()`                           | `df.map()`                                  |
| 2.0.0  | `df.astype('int')` com NA                 | Use o tipo anulável `'Int64'`               |
| 2.0.0  | dtype string inferido                     | Use `pd.options.future.infer_string = True` |
| 2.0.0  | `pd.DataFrame.to_csv()` com `compression` | Use `compression='gzip'` explicitamente     |

## Documentação oficial e recursos

- [pandas.pydata.org](https://pandas.pydata.org/)
- [pandas GitHub](https://github.com/pandas-dev/pandas)
- [Integração com PyArrow](https://arrow.apache.org/docs/python/pandas.html)
- [Referência da API](https://pandas.pydata.org/docs/reference/index.html)
- [Guia do usuário](https://pandas.pydata.org/docs/user_guide/index.html)

```

```
