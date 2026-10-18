---
title: Neo4j
date: 2021-08-23 12:34:56
background: bg-[#3b85ef]
tags:
  - DB
  - GraphDB
categories:
  - Banco de Dados
intro: |
  Um cheat sheet do Neo4j com recursos para primeiros passos e informações sobre como consultar o banco de dados com Cypher.
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Primeiros passos com Neo4j

Neo4j é um banco de dados de grafo composto por nodes conectados entre si por relacionamentos. Considere usar um banco
de dados de grafo se você tiver um dataset altamente conectado ou queries com muitos joins.

- [Baixar o Neo4j Desktop](https://neo4j.com/download) _baixe as edições desktop ou server do Neo4j_
- [Neo4j Sandbox](https://sandbox.neo4j.com) _escolha um data set - sem necessidade de instalação_
- [Neo4j Aura](https://neo4j.com/aura) _instância Neo4j gratuita na nuvem_
- [Neo4j GraphAcademy](https://neo4j.com/graphacademy) _treinamento online gratuito, no seu ritmo e prático_
- [GraphGists](https://neo4j.com/graphgists) _use grafos de exemplo específicos por caso de uso e setor_

### Conceitos de banco de dados de grafo

|                            |                                                                                                                                                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nodes**                  | Nodes são comumente usados para representar _entidades_ ou _coisas_ nos seus dados. Por exemplo, uma **Person** ou um **Movie**                                                                                                                     |
| **Relacionamentos**        | Relacionamentos são usados para conectar dois nodes e organizar os dados em uma estrutura. Por exemplo, uma Person **atuou em** um movie. Um relacionamento tem um _tipo_ e uma _direção_, embora a direção possa ser ignorada no momento da query. |
| **Labels**                 | Labels são usadas para agrupar nodes em categorias. Por exemplo, uma pessoa pode ter as labels `Person` e `Actor`.                                                                                                                                  |
| **Tipo de relacionamento** | Cada relacionamento tem um tipo. Relacionamentos permitem explorar seções menores de um grafo.                                                                                                                                                      |
| **Propriedades**           | Tanto nodes quanto relacionamentos podem ter propriedades definidas. Propriedades são [pares nome-valor](https://neo4j.com/docs/cypher-manual/4.3/syntax/values/#cypher-values).                                                                    |

## Sintaxe do Neo4j

### Estrutura de query de leitura

```
[USE]
[MATCH WHERE]
[OPTIONAL MATCH WHERE]
[WITH [ORDER BY] [SKIP] [LIMIT]]
RETURN [ORDER BY] [SKIP] [LIMIT]
```

### Estrutura de query somente escrita

```
[USE]
(CREATE | MERGE)*
[SET|DELETE|REMOVE|FOREACH]*
[RETURN [ORDER BY] [SKIP] [LIMIT]]
```

### Estrutura de query de leitura e escrita

```
[USE]
[MATCH WHERE]
[OPTIONAL MATCH WHERE]
[WITH [ORDER BY] [SKIP] [LIMIT]]
(CREATE | MERGE)*
[SET|DELETE|REMOVE|FOREACH]*
[RETURN [ORDER BY] [SKIP] [LIMIT]]
```

## Leitura de dados no Neo4j

### MATCH

```
MATCH (n:Person)-[:KNOWS]->(m:Person)
WHERE n.name = 'Alice'
```

Padrões de node podem conter labels e propriedades.

```
MATCH (n)-->(m)
```

Qualquer padrão pode ser usado em MATCH.

```
MATCH (n {name: 'Alice'})-->(m)
```

Padrões com propriedades de node.

```
MATCH p = (n)-->(m)
```

Atribui um path a p.

```
OPTIONAL MATCH (n)-[r]->(m)
```

Padrão opcional: nulls serão usados para partes ausentes.

### WHERE

```
WHERE n.property <> $value
```

Use um predicado para filtrar. Observe que WHERE é sempre parte de uma cláusula MATCH, OPTIONAL MATCH ou WITH. Colocá-lo
depois de uma cláusula diferente em uma query altera o que ele faz.

```
WHERE EXISTS {
  MATCH (n)-->(m) WHERE n.age = m.age
}
```

Use uma subquery existencial para filtrar.

### RETURN

```
RETURN *
```

Retorna o valor de todas as variáveis.

```
RETURN n AS columnName
```

Use alias para o nome da coluna de resultado.

```
RETURN DISTINCT n
```

Retorna linhas únicas.

```
ORDER BY n.property
```

Ordena o resultado.

```
ORDER BY n.property DESC
```

Ordena o resultado em ordem decrescente.

```
SKIP $skipNumber
```

Pula um número de resultados.

```
LIMIT $limitNumber
```

Limita o número de resultados.

```
SKIP $skipNumber LIMIT $limitNumber
```

Pula resultados no início e limita o número de resultados.

```
RETURN count(*)
```

O número de linhas correspondentes. Veja Funções de agregação para mais.

### WITH

```
MATCH (user)-[:FRIEND]-(friend)
WHERE user.name = $name
WITH user, count(friend) AS friends
WHERE friends > 10
RETURN user
```

A sintaxe de WITH é semelhante à de RETURN. Ela separa partes da query explicitamente, permitindo declarar quais variáveis
serão levadas para a próxima parte.

```
MATCH (user)-[:FRIEND]-(friend)
WITH user, count(friend) AS friends
ORDER BY friends DESC
  SKIP 1
  LIMIT 3
RETURN user
```

ORDER BY, SKIP e LIMIT também podem ser usados com WITH.

### UNION

```
MATCH (a)-[:KNOWS]->(b)
RETURN b.name
UNION
MATCH (a)-[:LOVES]->(b)
RETURN b.name
```

Retorna a união distinta de todos os resultados da query. Os tipos e nomes das colunas de resultado precisam corresponder.

```
MATCH (a)-[:KNOWS]->(b)
RETURN b.name
UNION ALL
MATCH (a)-[:LOVES]->(b)
RETURN b.name
```

Retorna a união de todos os resultados da query, incluindo linhas duplicadas.

## Escrita de dados no Neo4j

### CREATE

```
CREATE (n {name: $value})
```

Cria um node com as propriedades fornecidas.

```
CREATE (n $map)
```

Cria um node com as propriedades fornecidas.

```
UNWIND $listOfMaps AS properties
CREATE (n) SET n = properties
```

Cria nodes com as propriedades fornecidas.

```
CREATE (n)-[r:KNOWS]->(m)
```

Cria um relacionamento com o tipo e a direção fornecidos; vincula uma variável a ele.

```
CREATE (n)-[:LOVES {since: $value}]->(m)
```

Cria um relacionamento com o tipo, a direção e as propriedades fornecidos.

### SET

```
SET n.property1 = $value1,
    n.property2 = $value2
```

Atualiza ou cria uma propriedade.

```
SET n = $map
```

Define todas as propriedades. Isso remove quaisquer propriedades existentes.

```
SET n += $map
```

Adiciona e atualiza propriedades, mantendo as existentes.

```
SET n:Person
```

Adiciona a label Person a um node.

### MERGE

```
MERGE (n:Person {name: $value})
  ON CREATE SET n.created = timestamp()
  ON MATCH SET
    n.counter = coalesce(n.counter, 0) + 1,
    n.accessTime = timestamp()
```

Corresponde a um padrão ou o cria se ele não existir. Use ON CREATE e ON MATCH para atualizações condicionais.

```
MATCH (a:Person {name: $value1}),
      (b:Person {name: $value2})
MERGE (a)-[r:LOVES]->(b)
```

MERGE encontra ou cria um relacionamento entre os nodes.

```
MATCH (a:Person {name: $value1})
MERGE
  (a)-[r:KNOWS]->(b:Person {name: $value3})
```

MERGE encontra ou cria paths conectados ao node.

### DELETE

```
DELETE n, r
```

Exclui um node e um relacionamento.

```
DETACH DELETE n
```

Exclui um node e todos os relacionamentos conectados a ele.

```
MATCH (n)
DETACH DELETE n
```

Exclui todos os nodes e relacionamentos do banco de dados.

### REMOVE

```
REMOVE n:Person
```

Remove uma label de n.

```
REMOVE n.property
```

Remove uma propriedade.

### FOREACH

```
FOREACH (r IN relationships(path) |
  SET r.marked = true)
```

Executa uma operação de mutação para cada relacionamento em um path.

```
FOREACH (value IN coll |
 CREATE (:Person {name: value}))
```

Executa uma operação de mutação para cada elemento de uma lista.

### Chamada de subquery

```
CALL {
  MATCH (p:Person)-[:FRIEND_OF]->(other:Person) RETURN p, other
  UNION
  MATCH (p:Child)-[:CHILD_OF]->(other:Parent) RETURN p, other
}
```

Isso chama uma subquery com duas partes de union. O resultado da subquery pode ser pós-processado depois.

### Chamada de procedure

```
CALL db.labels() YIELD label
```

Isso mostra uma chamada standalone ao procedure interno db.labels para listar todas as labels usadas no banco de dados.
Observe que os argumentos obrigatórios do procedure são fornecidos explicitamente entre parênteses após o nome do procedure.

```
CALL db.labels() YIELD *
```

Chamadas standalone podem usar YIELD \* para retornar todas as colunas.

```
CALL java.stored.procedureWithArgs
```

Chamadas standalone podem omitir YIELD e também fornecer argumentos implicitamente por meio de parâmetros da instrução,
por exemplo, uma chamada standalone que exige um argumento de entrada pode ser executada passando o map de parâmetros {input: 'foo'}.

```
CALL db.labels() YIELD label
RETURN count(label) AS count
```

Chama o procedure interno db.labels dentro de uma query maior para contar todas as labels usadas no banco de dados.
Chamadas dentro de uma query maior sempre exigem a passagem de argumentos e a nomeação explícita dos resultados com YIELD.

### Importação

```
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists.csv' AS line
CREATE (:Artist {name: line[1], year: toInteger(line[2])})
```

Carrega dados de um arquivo CSV e cria nodes.

```
LOAD CSV WITH HEADERS FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists-with-headers.csv' AS line
CREATE (:Artist {name: line.Name, year: toInteger(line.Year)})
```

Carrega dados CSV que têm cabeçalhos.

```
USING PERIODIC COMMIT 500
LOAD CSV WITH HEADERS FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists-with-headers.csv' AS line
CREATE (:Artist {name: line.Name, year: toInteger(line.Year)})
```

Faz commit da transação atual a cada 500 linhas ao importar grandes volumes de dados.

```
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists-fieldterminator.csv'
AS line FIELDTERMINATOR ';'
CREATE (:Artist {name: line[1], year: toInteger(line[2])})
```

Use um terminador de campo diferente, não o padrão, que é uma vírgula (sem espaços ao redor).

```
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists.csv' AS line
RETURN DISTINCT file()
```

Retorna o path absoluto do arquivo que o LOAD CSV está processando; retorna null se chamado fora do contexto de LOAD CSV.

```
LOAD CSV FROM
'https://neo4j.com/docs/cypher-refcard/4.3/csv/artists.csv' AS line
RETURN linenumber()
```

Retorna o número da linha que o LOAD CSV está processando no momento; retorna null se chamado fora do contexto de LOAD CSV.

### Operadores

|                               |                                           |
| ----------------------------- | ----------------------------------------- |
| **Geral**                     | DISTINCT, ., []                           |
| **Matemático**                | +, -, \*, /, %, ^                         |
| **Comparação**                | =, <>, <, >, <=, >=, IS NULL, IS NOT NULL |
| **Booleano**                  | AND, OR, XOR, NOT                         |
| **String**                    | +                                         |
| **Lista**                     | +, IN, [x], [x .. y]                      |
| **Expressão regular**         | =~                                        |
| **Correspondência de string** | STARTS WITH, ENDS WITH, CONTAINS          |

### null

- `null` é usado para representar valores ausentes/indefinidos.

- `null` não é igual a `null`. Não conhecer dois valores não implica que eles sejam o mesmo valor. Assim, a expressão
  `null = null` resulta em `null` e não em `true`. Para verificar se uma expressão é `null`, use `IS NULL`.
- Expressões aritméticas, comparações e chamadas de função (exceto `coalesce`) retornam `null` se qualquer argumento for
  `null`.
- Uma tentativa de acessar um elemento ausente em uma lista ou uma propriedade que não existe resulta em `null`.
- Em cláusulas `OPTIONAL MATCH`, `nulls` serão usados para partes ausentes do padrão.

### Padrões

```
(n:Person)
```

Node com a label Person.

```
(n:Person:Swedish)
```

Node com as labels Person e Swedish.

```
(n:Person {name: $value})
```

Node com as propriedades declaradas.

```
()-[r {name: $value}]-()
```

Corresponde a relacionamentos com as propriedades declaradas.

```
(n)-->(m)
```

Relacionamento de n para m.

```
(n)--(m)
```

Relacionamento em qualquer direção entre n e m.

```
(n:Person)-->(m)
```

Node n com a label Person e relacionamento para m.

```
(m)<-[:KNOWS]-(n)
```

Relacionamento do tipo KNOWS de n para m.

```
(n)-[:KNOWS|:LOVES]->(m)
```

Relacionamento do tipo KNOWS ou do tipo LOVES de n para m.

```
(n)-[r]->(m)
```

Vincula o relacionamento à variável r.

```
(n)-[*1..5]->(m)
```

Path de comprimento variável entre 1 e 5 relacionamentos de n para m.

```
(n)-[*]->(m)
```

Path de comprimento variável com qualquer número de relacionamentos de n para m. (Veja a seção Desempenho.)

```
(n)-[:KNOWS]->(m {property: $value})
```

Um relacionamento do tipo KNOWS de um node n para um node m com a propriedade declarada.

```
shortestPath((n1:Person)-[*..6]-(n2:Person))
```

Encontra um único path mais curto.

```
allShortestPaths((n1:Person)-[*..6]->(n2:Person))
```

Encontra todos os paths mais curtos.

```
size((n)-->()-->())
```

Conta os paths que correspondem ao padrão.

### USE

```
USE myDatabase
```

Seleciona myDatabase como alvo para executar a query, ou parte dela.

```
USE neo4j
MATCH (n:Person)-[:KNOWS]->(m:Person)
WHERE n.name = 'Alice'
```

Query MATCH executada contra o banco de dados neo4j.

### SHOW FUNCTIONS e PROCEDURES

```
SHOW FUNCTIONS
```

Lista todas as funções disponíveis.

```
SHOW PROCEDURES EXECUTABLE YIELD name
```

Lista todos os procedures que podem ser executados pelo usuário atual e retorna apenas o nome dos procedures.

### Labels

```
CREATE (n:Person {name: $value})
```

Cria um node com label e propriedade.

```
MERGE (n:Person {name: $value})
```

Corresponde ou cria node(s) único(s) com a label e a propriedade.

```
SET n:Spouse:Parent:Employee
```

Adiciona label(s) a um node.

```
MATCH (n:Person)
```

Corresponde a nodes com a label Person.

```
MATCH (n:Person)
WHERE n.name = $value
```

Corresponde a nodes com a label Person e o nome fornecido.

```
WHERE (n:Person)
```

Verifica a existência da label no node.

```
labels(n)
```

Labels do node.

```
REMOVE n:Person
```

Remove a label do node.

### Listas

```
['a', 'b', 'c'] AS list
```

Listas literais são declaradas entre colchetes.

```
size($list) AS len, $list[0] AS value
```

Listas podem ser passadas como parâmetros.

```
range($firstNum, $lastNum, $step) AS list
```

range() cria uma lista de números (o step é opcional); outras funções que retornam listas são: labels(), nodes(),
relationships().

```
MATCH p = (a)-[:KNOWS*]->()
RETURN relationships(p) AS r
```

A lista de relacionamentos que compõe um path de comprimento variável pode ser retornada usando paths nomeados e relationships().

```
RETURN matchedNode.list[0] AS value,
       size(matchedNode.list) AS len
```

Propriedades podem ser listas de strings, números ou booleanos.

```
list[$idx] AS value,
list[$startIdx..$endIdx] AS slice
```

Os elementos de uma lista podem ser acessados com subscritos idx entre colchetes. Índices inválidos retornam null. Slices
podem ser obtidos com intervalos de start_idx a end_idx, cada um dos quais pode ser omitido ou negativo. Elementos fora do
intervalo são ignorados.

```
UNWIND $names AS name
MATCH (n {name: name})
RETURN avg(n.age)
```

Com UNWIND, qualquer lista pode ser transformada de volta em linhas individuais. O exemplo corresponde a todos os nomes de uma lista de nomes.

```
MATCH (a)
RETURN [(a)-->(b) WHERE b.name = 'Bob' | b.age]
```

Pattern comprehensions podem ser usadas para fazer uma projeção personalizada de um match diretamente em uma lista.

```
MATCH (person)
RETURN person { .name, .age}
```

Map projections podem ser construídas facilmente a partir de nodes, relacionamentos e outros valores de map.

### Mapas

```
{name: 'Alice', age: 38,
 address: {city: 'London', residential: true}}
```

Mapas literais são declarados entre chaves, de forma semelhante a property maps. Listas são suportadas.

```
WITH {person: {name: 'Anne', age: 25}} AS p
RETURN p.person.name
```

Acessa a propriedade de um map aninhado.

```
MERGE (p:Person {name: $map.name})
  ON CREATE SET p = $map
```

Maps podem ser passados como parâmetros e usados como um map ou acessando suas chaves.

```
MATCH (matchedNode:Person)
RETURN matchedNode
```

Nodes e relacionamentos são retornados como maps de seus dados.

```
map.name, map.age, map.children[0]
```

Entradas de um map podem ser acessadas por suas chaves. Chaves inválidas resultam em erro.

### Predicados

```
n.property <> $value
```

Use operadores de comparação.

```
toString(n.property) = $value
```

Use funções.

```
n.number >= 1 AND n.number <= 10
```

Use operadores booleanos para combinar predicados.

```
1 <= n.number <= 10
```

Use operadores encadeados para combinar predicados.

```
n:Person
```

Verifica labels de node.

```
variable IS NOT NULL
```

Verifica se algo não é null, por exemplo, se uma propriedade existe.

```
n.property IS NULL OR n.property = $value
```

Ou a propriedade não existe, ou o predicado é verdadeiro.

```
n.property = $value
```

Uma propriedade inexistente retorna null, que não é igual a nada.

```
n["property"] = $value
```

Propriedades também podem ser acessadas usando um nome de propriedade calculado dinamicamente.

```
n.property STARTS WITH 'Tim' OR
n.property ENDS WITH 'n' OR
n.property CONTAINS 'goodie'
```

Correspondência de string.

```
n.property =~ 'Tim.*'
```

Correspondência de string com expressão regular.

```
(n)-[:KNOWS]->(m)
```

Garante que o padrão tenha pelo menos uma correspondência.

```
NOT (n)-[:KNOWS]->(m)
```

Exclui do resultado as correspondências de (n)-[:KNOWS]->(m).

```
n.property IN [$value1, $value2]
```

Verifica se um elemento existe em uma lista.

### Predicados de lista

```
all(x IN coll WHERE x.property IS NOT NULL)
```

Retorna true se o predicado for verdadeiro para todos os elementos da lista.

```
any(x IN coll WHERE x.property IS NOT NULL)
```

Retorna true se o predicado for verdadeiro para pelo menos um elemento da lista.

```
none(x IN coll WHERE x.property IS NOT NULL)
```

Retorna true se o predicado for falso para todos os elementos da lista.

```
single(x IN coll WHERE x.property IS NOT NULL)
```

Retorna true se o predicado for verdadeiro para exatamente um elemento da lista.

### CASE

```
CASE n.eyes
 WHEN 'blue' THEN 1
 WHEN 'brown' THEN 2
 ELSE 3
END
```

Retorna o valor de THEN correspondente ao valor de WHEN. O valor de ELSE é opcional e substituído por null se estiver ausente.

```
CASE
 WHEN n.eyes = 'blue' THEN 1
 WHEN n.age < 40 THEN 2
 ELSE 3
END
```

Retorna o valor de THEN do primeiro predicado WHEN que for verdadeiro. Os predicados são avaliados em ordem.

### Expressões de lista

```
size($list)
```

Número de elementos na lista.

```
reverse($list)
```

Inverte a ordem dos elementos na lista.

```
head($list), last($list), tail($list)
```

head() retorna o primeiro elemento, last() o último. tail() retorna todos, exceto o primeiro. Todas retornam null
para uma lista vazia.

```
[x IN list | x.prop]
```

Uma lista com o valor da expressão para cada elemento da lista original.

```
[x IN list WHERE x.prop <> $value]
```

Uma lista filtrada com os elementos em que o predicado é verdadeiro.

```
[x IN list WHERE x.prop <> $value | x.prop]
```

Uma list comprehension que filtra uma lista e extrai o valor da expressão para cada elemento dessa lista.

```
reduce(s = "", x IN list | s + x.prop)
```

Avalia a expressão para cada elemento da lista e acumula os resultados.

### Funções

```
coalesce(n.property, $defaultValue)
```

A primeira expressão não nula.

```
timestamp()
```

Milissegundos desde a meia-noite de 1º de janeiro de 1970 UTC.

```
id(nodeOrRelationship)
```

O id interno do relacionamento ou node.

```
toInteger($expr)
```

Converte a entrada fornecida em um inteiro, se possível; caso contrário, retorna null.

```
toFloat($expr)
```

Converte a entrada fornecida em um número de ponto flutuante, se possível; caso contrário, retorna null.

```
toBoolean($expr)
```

Converte a entrada fornecida em um booleano, se possível; caso contrário, retorna null.

```
keys($expr)
```

Retorna uma lista de representações em string para os nomes das propriedades de um node, relacionamento ou map.

```
properties($expr)
```

Retorna um map contendo todas as propriedades de um node ou relacionamento.

### Funções de path

```
length(path)
```

O número de relacionamentos no path.

```
nodes(path)
```

Os nodes do path como uma lista.

```
relationships(path)
```

Os relacionamentos do path como uma lista.

```
[x IN nodes(path) | x.prop]
```

Extrai propriedades dos nodes de um path.

### Funções espaciais

```
point({x: $x, y: $y})
```

Retorna um ponto em um sistema de coordenadas cartesianas 2D.

```
point({latitude: $y, longitude: $x})
```

Retorna um ponto em um sistema de coordenadas geográficas 2D, com coordenadas especificadas em graus decimais.

```
point({x: $x, y: $y, z: $z})
```

Retorna um ponto em um sistema de coordenadas cartesianas 3D.

```
point({latitude: $y, longitude: $x, height: $z})
```

Retorna um ponto em um sistema de coordenadas geográficas 3D, com latitude e longitude em graus decimais e altura em
metros.

```
distance(point({x: $x1, y: $y1}), point({x: $x2, y: $y2}))
```

Retorna um número de ponto flutuante representando a distância linear entre dois pontos. As unidades retornadas serão as
mesmas das coordenadas dos pontos, e funciona para pontos cartesianos 2D e 3D.

```
distance(point({latitude: $y1, longitude: $x1}), point({latitude: $y2, longitude: $x2}))
```

Retorna a distância geodésica entre dois pontos em metros. Também pode ser usada para pontos geográficos 3D.

## Funções do Neo4j

### Funções temporais

```
date("2018-04-05")
```

Retorna uma data a partir de uma string.

```
localtime("12:45:30.25")
```

Retorna um horário sem fuso horário.

```
time("12:45:30.25+01:00")
```

Retorna um horário em um fuso horário especificado.

```
localdatetime("2018-04-05T12:34:00")
```

Retorna um datetime sem fuso horário.

```
datetime("2018-04-05T12:34:00[Europe/Berlin]")
```

Retorna um datetime no fuso horário especificado.

```
datetime({epochMillis: 3360000})
```

Transforma 3360000 como um horário UNIX Epoch em um datetime normal.

```
date({year: $year, month: $month, day: $day})
```

Todas as funções temporais também podem ser chamadas com um map de componentes nomeados. Este exemplo retorna uma data a
partir dos componentes year, month e day. Cada função suporta um conjunto diferente de componentes possíveis.

```
datetime({date: $date, time: $time})
```

Tipos temporais podem ser criados combinando outros tipos. Este exemplo cria um datetime a partir de uma data e um horário.

```
date({date: $datetime, day: 5})
```

Tipos temporais podem ser criados selecionando a partir de tipos mais complexos, bem como substituindo componentes
individuais. Este exemplo cria uma data selecionando a partir de um datetime e substituindo o componente day.

```
WITH date("2018-04-05") AS d
RETURN d.year, d.month, d.day, d.week, d.dayOfWeek
```

Accessors permitem extrair componentes de tipos temporais.

### Funções de duração

```
duration("P1Y2M10DT12H45M30.25S")
```

Retorna uma duração de 1 ano, 2 meses, 10 dias, 12 horas, 45 minutos e 30,25 segundos.

```
duration.between($date1,$date2)
```

Retorna uma duração entre duas instâncias temporais.

```
WITH duration("P1Y2M10DT12H45M") AS d
RETURN d.years, d.months, d.days, d.hours, d.minutes
```

Retorna 1 ano, 14 meses, 10 dias, 12 horas e 765 minutos.

```
WITH duration("P1Y2M10DT12H45M") AS d
RETURN d.years, d.monthsOfYear, d.days, d.hours, d.minutesOfHour
```

Retorna 1 ano, 2 meses, 10 dias, 12 horas e 45 minutos.

```
date("2015-01-01") + duration("P1Y1M1D")
```

Retorna uma data de 2016-02-02. Também é possível subtrair durações de instâncias temporais.

```
duration("PT30S") * 10
```

Retorna uma duração de 5 minutos. Também é possível dividir uma duração por um número.

### Funções matemáticas

```
abs($expr)
```

O valor absoluto.

```
rand()
```

Retorna um número aleatório no intervalo de 0 (inclusive) a 1 (exclusive), [0,1). Retorna um novo valor a cada chamada.
Também é útil para selecionar um subconjunto ou uma ordenação aleatória.

```
round($expr)
```

Arredonda para o inteiro mais próximo; ceil() e floor() encontram o próximo inteiro para cima ou para baixo.

```
sqrt($expr)
```

A raiz quadrada.

```
sign($expr)
```

0 se zero, -1 se negativo, 1 se positivo.

```
sin($expr)
```

Funções trigonométricas também incluem cos(), tan(), cot(), asin(), acos(), atan(), atan2() e haversin(). Todos os
argumentos das funções trigonométricas devem estar em radianos, salvo indicação em contrário.

```
degrees($expr), radians($expr), pi()
```

Converte radianos em graus; use radians() para o inverso e pi() para π.

```
log10($expr), log($expr), exp($expr), e()
```

Logaritmo na base 10, logaritmo natural, o número e elevado à potência do parâmetro e o valor de e.

### Funções de string

```
toString($expression)
```

Representação em string da expressão.

```
replace($original, $search, $replacement)
```

Substitui todas as ocorrências de search por replacement. Todos os argumentos devem ser expressões.

```
substring($original, $begin, $subLength)
```

Obtém parte de uma string. O argumento subLength é opcional.

```
left($original, $subLength),
  right($original, $subLength)
```

A primeira parte de uma string. A última parte da string.

```
trim($original), lTrim($original),
  rTrim($original)
```

Remove todos os espaços em branco, ou apenas à esquerda ou à direita.

```
toUpper($original), toLower($original)
```

MAIÚSCULAS e minúsculas.

```
split($original, $delimiter)
```

Divide uma string em uma lista de strings.

```
reverse($original)
```

Inverte uma string.

```
size($string)
```

Calcula o número de caracteres na string.

### Funções de relacionamento

```
type(a_relationship)
```

Representação em string do tipo do relacionamento.

```
startNode(a_relationship)
```

Node inicial do relacionamento.

```
endNode(a_relationship)
```

Node final do relacionamento.

```
id(a_relationship)
```

O id interno do relacionamento.

### Funções de agregação

```
count(*)
```

O número de linhas correspondentes.

```
count(variable)
```

O número de valores não nulos.

```
count(DISTINCT variable)
```

Todas as funções de agregação também aceitam o operador DISTINCT, que remove duplicatas dos valores.

```
collect(n.property)
```

Lista a partir dos valores; ignora null.

```
sum(n.property)
```

Soma valores numéricos. Funções semelhantes são avg(), min() e max().

```
percentileDisc(n.property, $percentile)
```

Percentil discreto. O percentil contínuo é percentileCont(). O argumento de percentil vai de 0,0 a 1,0.

```
stDev(n.property)
```

Desvio padrão de uma amostra de uma população. Para uma população inteira, use stDevP().

## Operações de schema no Neo4j

### INDEX

```
CREATE INDEX FOR (p:Person) ON (p.name)
```

Cria um índice em nodes com a label Person e a propriedade name.

```
CREATE INDEX index_name FOR ()-[k:KNOWS]-() ON (k.since)
```

Cria um índice em relacionamentos com o tipo KNOWS e a propriedade since, com o nome index_name.

```
CREATE INDEX FOR (p:Person) ON (p.surname)
OPTIONS {indexProvider: 'native-btree-1.0', indexConfig: {`spatial.cartesian.min`: [-100.0, -100.0], `spatial.cartesian.max`: [100.0, 100.0]}}
```

Cria um índice em nodes com a label Person e a propriedade surname com o index provider native-btree-1.0 e as
configurações spatial.cartesian fornecidas. As demais configurações de índice terão seus valores padrão.

```
CREATE INDEX FOR (p:Person) ON (p.name, p.age)
```

Cria um índice composto em nodes com a label Person e as propriedades name e age; gera um erro se o índice já
existir.

```
CREATE INDEX IF NOT EXISTS FOR (p:Person) ON (p.name, p.age)
```

Cria um índice composto em nodes com a label Person e as propriedades name e age se ele ainda não existir; não faz
nada se ele já existia.

```
CREATE LOOKUP INDEX lookup_index_name FOR (n) ON EACH labels(n)
```

Cria um token lookup index com o nome lookup_index_name em nodes com qualquer label.

```
CREATE LOOKUP INDEX FOR ()-[r]-() ON EACH type(r)
```

Cria um token lookup index em relacionamentos com qualquer tipo de relacionamento.

```
CREATE FULLTEXT INDEX node_fulltext_index_name FOR (n:Friend) ON EACH [n.name]
OPTIONS {indexConfig: {`fulltext.analyzer`: 'swedish'}}
```

Cria um índice fulltext em nodes com o nome node_fulltext_index_name e o analyzer swedish. Índices fulltext em nodes
só podem ser usados pelo procedure db.index.fulltext.queryNodes. As demais configurações de índice terão seus valores
padrão.

```
CREATE FULLTEXT INDEX rel_fulltext_index_name FOR ()-[r:HAS_PET|BROUGHT_PET]-() ON EACH [r.since, r.price]
```

Cria um índice fulltext em relacionamentos com o nome rel_fulltext_index_name. Índices fulltext em relacionamentos só
podem ser usados pelo procedure db.index.fulltext.queryRelationships.

```
SHOW INDEXES
```

Lista todos os índices.

```
MATCH (n:Person) WHERE n.name = $value
```

Um índice pode ser usado automaticamente para a comparação de igualdade. Observe que, por exemplo, toLower(n.name) = $value
não usará um índice.

```
MATCH (n:Person)
WHERE n.name IN [$value]
```

Um índice pode ser usado automaticamente para verificações de lista com IN.

```
MATCH (n:Person)
WHERE n.name = $value and n.age = $value2
```

Um índice composto pode ser usado automaticamente para comparação de igualdade de ambas as propriedades. Observe que é
preciso haver predicados em todas as propriedades do índice composto para que ele seja usado.

```
MATCH (n:Person)
USING INDEX n:Person(name)
WHERE n.name = $value
```

O uso de índice pode ser forçado quando o Cypher usa um índice subótimo, ou quando mais de um índice deveria ser usado.

```
DROP INDEX index_name
```

Remove o índice chamado index_name; gera um erro se o índice não existir.

```
DROP INDEX index_name IF EXISTS
```

Remove o índice chamado index_name se ele existir; não faz nada se ele não existir.

### CONSTRAINT

```
CREATE CONSTRAINT ON (p:Person)
       ASSERT p.name IS UNIQUE
```

Cria uma restrição (constraint) de propriedade única na label Person e na propriedade name. Se qualquer outro node com
essa label for atualizado ou criado com um name que já existe, a operação de escrita falhará. Essa constraint criará um
índice acompanhante.

```
CREATE CONSTRAINT uniqueness ON (p:Person)
       ASSERT p.age IS UNIQUE
```

Cria uma constraint de propriedade única na label Person e na propriedade age com o nome uniqueness. Se qualquer outro
node com essa label for atualizado ou criado com um age que já existe, a operação de escrita falhará. Essa constraint
criará um índice acompanhante.

```
CREATE CONSTRAINT ON (p:Person)
       ASSERT p.surname IS UNIQUE
       OPTIONS {indexProvider: 'native-btree-1.0'}
```

Cria uma constraint de propriedade única na label Person e na propriedade surname com o index provider native-btree-1.0
para o índice acompanhante.

```
CREATE CONSTRAINT ON (p:Person)
       ASSERT p.name IS NOT NULL
```

(★) Cria uma constraint de existência de propriedade de node na label Person e na propriedade name; gera um erro se a
constraint já existir. Se um node com essa label for criado sem um name, ou se a propriedade name for removida de um node
existente com a label Person, a operação de escrita falhará.

```
CREATE CONSTRAINT node_exists IF NOT EXISTS ON (p:Person)
       ASSERT p.name IS NOT NULL
```

(★) Se já existir uma constraint de existência de propriedade de node na label Person e na propriedade name, ou
qualquer constraint com o nome node_exists, nada acontece. Se não existir tal constraint, ela será criada.

```
CREATE CONSTRAINT ON ()-[l:LIKED]-()
       ASSERT l.when IS NOT NULL
```

(★) Cria uma constraint de existência de propriedade de relacionamento no tipo LIKED e na propriedade when. Se um
relacionamento com esse tipo for criado sem um when, ou se a propriedade when for removida de um relacionamento existente
com o tipo LIKED, a operação de escrita falhará.

```
CREATE CONSTRAINT relationship_exists ON ()-[l:LIKED]-()
       ASSERT l.since IS NOT NULL
```

(★) Cria uma constraint de existência de propriedade de relacionamento no tipo LIKED e na propriedade since com o nome
relationship_exists. Se um relacionamento com esse tipo for criado sem um since, ou se a propriedade since for removida
de um relacionamento existente com o tipo LIKED, a operação de escrita falhará.

```
SHOW UNIQUE CONSTRAINTS YIELD *
```

Lista todas as constraints de unicidade.

```
CREATE CONSTRAINT ON (p:Person)
      ASSERT (p.firstname, p.surname) IS NODE KEY
```

(★) Cria uma constraint de node key na label Person e nas propriedades firstname e surname. Se um node com essa label for
criado sem ambos firstname e surname, ou se a combinação dos dois não for única, ou se as propriedades firstname e/ou
surname em um node existente com a label Person forem modificadas de modo a violar essas constraints, a operação de
escrita falhará.

```
CREATE CONSTRAINT node_key ON (p:Person)
      ASSERT (p.name, p.surname) IS NODE KEY
```

(★) Cria uma constraint de node key na label Person e nas propriedades name e surname com o nome node_key. Se um node
com essa label for criado sem ambos name e surname, ou se a combinação dos dois não for única, ou se as propriedades name
e/ou surname em um node existente com a label Person forem modificadas de modo a violar essas constraints, a operação de
escrita falhará.

```
CREATE CONSTRAINT node_key_with_config ON (p:Person)
      ASSERT (p.name, p.age) IS NODE KEY
      OPTIONS {indexConfig: {`spatial.wgs-84.min`: [-100.0, -100.0], `spatial.wgs-84.max`: [100.0, 100.0]}}
```

(★) Cria uma constraint de node key na label Person e nas propriedades name e age com o nome node_key_with_config e as
configurações spatial.wgs-84 fornecidas para o índice acompanhante. As demais configurações de índice terão seus valores padrão.

```
DROP CONSTRAINT uniqueness
```

Remove a constraint com o nome uniqueness; gera um erro se a constraint não existir.

```
DROP CONSTRAINT uniqueness IF EXISTS
```

Remove a constraint com o nome uniqueness se ela existir; não faz nada se ela não existir.

### Desempenho

- Use parâmetros em vez de literais quando possível. Isso permite que o Cypher reutilize suas queries em vez de precisar
  analisar e montar novos planos de execução.
- Sempre defina um limite superior para seus padrões de comprimento variável. É possível que uma query saia do controle e
  toque todos os nodes de um grafo por engano.
- Retorne apenas os dados de que você precisa. Evite retornar nodes e relacionamentos inteiros — em vez disso, escolha os
  dados necessários e retorne apenas eles.
- Use `PROFILE` / `EXPLAIN` para analisar o desempenho das suas queries. Veja
  [Query Tuning](https://neo4j.com/docs/cypher-manual/4.3/query-tuning) para mais informações sobre esses e outros tópicos,
  como planner hints.

## Multidatabase no Neo4j

### Gerenciamento de bancos de dados

```
CREATE OR REPLACE DATABASE myDatabase
```

(★) Cria um banco de dados chamado myDatabase. Se existir um banco de dados com esse nome, o banco existente é excluído e
um novo é criado.

```
STOP DATABASE myDatabase
```

(★) Pare o banco de dados myDatabase.

```
START DATABASE myDatabase
```

(★) Inicia o banco de dados myDatabase.

```
SHOW DATABASES
```

Lista todos os bancos de dados do sistema e informações sobre eles.

```
SHOW DATABASES
YIELD name, currentStatus
WHERE name CONTAINS 'my' AND currentStatus = 'online'
```

Lista informações sobre bancos de dados, filtradas por nome e status online e refinadas por condições sobre esses campos.

```
SHOW DATABASE myDatabase
```

Lista informações sobre o banco de dados myDatabase.

```
SHOW DEFAULT DATABASE
```

Lista informações sobre o banco de dados padrão.

```
SHOW HOME DATABASE
```

Lista informações sobre o banco de dados home do usuário atual.

```
DROP DATABASE myDatabase IF EXISTS
```

(★) Exclui o banco de dados myDatabase, se ele existir.

## Segurança no Neo4j

### Gerenciamento de usuários

```
CREATE USER alice SET PASSWORD $password
```

Cria um novo usuário e uma senha. Essa senha deve ser alterada no primeiro login.

```
ALTER USER alice SET PASSWORD $password CHANGE NOT REQUIRED
```

Define uma nova senha para um usuário. Esse usuário não precisará alterar essa senha no próximo login.

```
ALTER USER alice IF EXISTS SET PASSWORD CHANGE REQUIRED
```

Se o usuário especificado existir, força esse usuário a alterar a senha no próximo login.

```
ALTER USER alice SET STATUS SUSPENDED
```

(★) Altera o status do usuário para suspenso. Use SET STATUS ACTIVE para reativar o usuário.

```
ALTER USER alice SET HOME DATABASE otherDb
```

(★) Altera o banco de dados home do usuário para otherDb. Use REMOVE HOME DATABASE para remover a definição do banco home
do usuário e voltar ao banco de dados padrão.

```
ALTER CURRENT USER SET PASSWORD FROM $old TO $new
```

Altera a senha do usuário logado. O usuário não precisará alterar essa senha no próximo login.

```
SHOW CURRENT USER
```

Lista o usuário logado no momento, seu status, roles e se ele precisa alterar a senha. (★) Status e roles são exclusivos
da Enterprise Edition.

```
SHOW USERS
```

Lista todos os usuários do sistema, seu status, roles e se eles precisam alterar a senha. (★) Status e roles são
exclusivos da Enterprise Edition.

```
SHOW USERS
YIELD user, suspended
WHERE suspended = true
```

Lista os usuários do sistema, filtrados por nome e status e refinados por se estão suspensos. (★) O status é exclusivo
da Enterprise Edition.

```
RENAME USER alice TO alice_delete
```

Renomeia o usuário alice para alice_delete.

```
DROP USER alice_delete
```

Exclui o usuário.

### (★) Gerenciamento de roles

```
CREATE ROLE my_role
```

Cria uma role.

```
CREATE ROLE my_second_role IF NOT EXISTS AS COPY OF my_role
```

Cria uma role chamada my_second_role, a menos que ela já exista, como uma cópia da my_role existente.

```
RENAME ROLE my_second_role TO my_other_role
```

Renomeia uma role chamada my_second_role para my_other_role.

```
GRANT ROLE my_role, my_other_role TO alice
```

Atribui roles a um usuário.

```
REVOKE ROLE my_other_role FROM alice
```

Remove uma role especificada de um usuário.

```
SHOW ROLES
```

Lista todas as roles do sistema.

```
SHOW ROLES
YIELD role
WHERE role CONTAINS 'my'
```

Lista roles, filtradas pelo nome da role e refinadas por se o nome contém 'my'.

```
SHOW POPULATED ROLES WITH USERS
```

Lista todas as roles atribuídas a pelo menos um usuário no sistema e os usuários atribuídos a essas roles.

```
DROP ROLE my_role
```

Exclui uma role.

### (★) Privilégios de leitura de grafo

```
GRANT TRAVERSE ON GRAPH * NODES * TO my_role
```

Concede privilégio de traverse em todos os nodes e todos os grafos a uma role.

```
DENY READ {prop} ON GRAPH foo RELATIONSHIP Type TO my_role
```

Nega privilégio de leitura em uma propriedade especificada, em todos os relacionamentos com um tipo especificado em um grafo especificado, a uma role.

```
GRANT MATCH {*} ON HOME GRAPH ELEMENTS Label TO my_role
```

Concede privilégio de leitura em todas as propriedades e privilégio de traverse no grafo home a uma role. Aqui, ambos os
privilégios se aplicam a todos os nodes e relacionamentos com uma label/tipo especificado no grafo.

### (★) Privilégios de escrita de grafo

```
GRANT CREATE ON GRAPH * NODES Label TO my_role
```

Concede privilégio de create em todos os nodes com uma label especificada em todos os grafos a uma role.

```
DENY DELETE ON GRAPH neo4j TO my_role
```

Nega privilégio de delete em todos os nodes e relacionamentos em um grafo especificado a uma role.

```
REVOKE SET LABEL Label ON GRAPH * FROM my_role
```

Revoga o privilégio de set label para a label especificada em todos os grafos de uma role.

```
GRANT REMOVE LABEL * ON GRAPH foo TO my_role
```

Concede privilégio de remove label para todas as labels em um grafo especificado a uma role.

```
DENY SET PROPERTY {prop} ON GRAPH foo RELATIONSHIPS Type TO my_role
```

Nega privilégio de set property em uma propriedade especificada, em todos os relacionamentos com um tipo especificado em
um grafo especificado, a uma role.

```
GRANT MERGE {*} ON GRAPH * NODES Label TO my_role
```

Concede privilégio de merge em todas as propriedades, em todos os nodes com uma label especificada em todos os grafos, a uma role.

```
REVOKE WRITE ON GRAPH * FROM my_role
```

Revoga privilégio de write em todos os grafos de uma role.

```
DENY ALL GRAPH PRIVILEGES ON GRAPH foo TO my_role
```

Nega todos os privilégios de grafo em um grafo especificado a uma role.

### (★) SHOW PRIVILEGES

```
SHOW PRIVILEGES AS COMMANDS
```

Lista todos os privilégios do sistema como comandos Cypher.

```
SHOW PRIVILEGES
```

Lista todos os privilégios do sistema e as roles às quais eles estão atribuídos.

```
SHOW PRIVILEGES
YIELD role, action, access
WHERE role = 'my_role'
```

Lista informações sobre privilégios, filtradas por role, action e access e refinadas pelo nome da role.

```
SHOW ROLE my_role PRIVILEGES AS COMMANDS
```

Lista todos os privilégios atribuídos a uma role como comandos Cypher.

```
SHOW ROLE my_role, my_second_role PRIVILEGES AS COMMANDS
```

Lista todos os privilégios atribuídos a cada uma das várias roles como comandos Cypher.

```
SHOW USER alice PRIVILEGES AS COMMANDS
```

Lista todos os privilégios de um usuário e a role à qual eles estão atribuídos, como comandos Cypher.

```
SHOW USER PRIVILEGES AS COMMANDS
```

Lista todos os privilégios do usuário logado no momento e a role à qual eles estão atribuídos, como comandos Cypher.

### (★) Privilégios de banco de dados

```
GRANT ACCESS ON DATABASE * TO my_role
```

Concede privilégio para acessar e executar queries em todos os bancos de dados a uma role.

```
GRANT START ON DATABASE * TO my_role
```

Concede privilégio para iniciar todos os bancos de dados a uma role.

```
GRANT STOP ON DATABASE * TO my_role
```

Concede privilégio para parar todos os bancos de dados a uma role.

```
GRANT CREATE INDEX ON DATABASE foo TO my_role
```

Concede privilégio para criar índices em um banco de dados especificado a uma role.

```
GRANT DROP INDEX ON DATABASE foo TO my_role
```

Concede privilégio para remover índices em um banco de dados especificado a uma role.

```
GRANT SHOW INDEX ON DATABASE * TO my_role
```

Concede privilégio para exibir índices em todos os bancos de dados a uma role.

```
DENY INDEX MANAGEMENT ON DATABASE bar TO my_role
```

Nega privilégio para criar e remover índices em um banco de dados especificado a uma role.

```
GRANT CREATE CONSTRAINT ON DATABASE * TO my_role
```

Concede privilégio para criar constraints em todos os bancos de dados a uma role.

```
DENY DROP CONSTRAINT ON DATABASE * TO my_role
```

Nega privilégio para remover constraints em todos os bancos de dados a uma role.

```
DENY SHOW CONSTRAINT ON DATABASE foo TO my_role
```

Nega privilégio para exibir constraints em um banco de dados especificado a uma role.

```
REVOKE CONSTRAINT ON DATABASE * FROM my_role
```

Revoga privilégios concedidos e negados para criar e remover constraints em todos os bancos de dados de uma role.

```
GRANT CREATE NEW LABELS ON DATABASE * TO my_role
```

Concede privilégio para criar novas labels em todos os bancos de dados a uma role.

```
DENY CREATE NEW TYPES ON DATABASE foo TO my_role
```

Nega privilégio para criar novos tipos de relacionamento em um banco de dados especificado a uma role.

```
REVOKE GRANT CREATE NEW PROPERTY NAMES ON DATABASE bar FROM my_role
```

Revoga o privilégio concedido para criar novos nomes de propriedade em um banco de dados especificado de uma role.

```
GRANT NAME MANAGEMENT ON HOME DATABASE TO my_role
```

Concede privilégio para criar labels, tipos de relacionamento e nomes de propriedade no banco de dados home a uma role.

```
GRANT ALL ON DATABASE baz TO my_role
```

Concede privilégio para acessar, criar e remover índices e constraints, criar novas labels, tipos e nomes de propriedade
em um banco de dados especificado a uma role.

```
GRANT SHOW TRANSACTION (*) ON DATABASE foo TO my_role
```

Concede privilégio para listar transações e queries de todos os usuários em um banco de dados especificado a uma role.

```
DENY TERMINATE TRANSACTION (user1, user2) ON DATABASES * TO my_role
```

Nega privilégio para encerrar transações e queries de user1 e user2 em todos os bancos de dados a uma role.

```
REVOKE GRANT TRANSACTION MANAGEMENT ON HOME DATABASE FROM my_role
```

Revoga o privilégio concedido para listar e encerrar transações e queries de todos os usuários no banco de dados home de uma role.

### (★) Privilégios de gerenciamento de roles

```
GRANT CREATE ROLE ON DBMS TO my_role
```

Concede o privilégio de criar roles a uma role.

```
GRANT RENAME ROLE ON DBMS TO my_role
```

Concede o privilégio de renomear roles a uma role.

```
GRANT DROP ROLE ON DBMS TO my_role
```

Concede o privilégio de excluir roles a uma role.

```
DENY ASSIGN ROLE ON DBMS TO my_role
```

Nega o privilégio de atribuir roles a usuários a uma role.

```
DENY REMOVE ROLE ON DBMS TO my_role
```

Nega o privilégio de remover roles de usuários a uma role.

```
REVOKE DENY SHOW ROLE ON DBMS FROM my_role
```

Revoga o privilégio negado de exibir roles de uma role.

```
GRANT ROLE MANAGEMENT ON DBMS TO my_role
```

Concede todos os privilégios para gerenciar roles a uma role.

### (★) Privilégios de gerenciamento de usuários

```
GRANT CREATE USER ON DBMS TO my_role
```

Concede o privilégio de criar usuários a uma role.

```
GRANT RENAME USER ON DBMS TO my_role
```

Concede o privilégio de renomear usuários a uma role.

```
DENY ALTER USER ON DBMS TO my_role
```

Nega o privilégio de alterar usuários a uma role.

```
REVOKE SET PASSWORDS ON DBMS FROM my_role
```

Revoga os privilégios concedidos e negados de alterar as senhas dos usuários de uma role.

```
REVOKE GRANT SET USER STATUS ON DBMS FROM my_role
```

Revoga o privilégio concedido de alterar o status da conta dos usuários de uma role.

```
GRANT SET USER HOME DATABASE ON DBMS TO my_role
```

Concede o privilégio de alterar o banco de dados home dos usuários a uma role.

```
GRANT DROP USER ON DBMS TO my_role
```

Concede o privilégio de excluir usuários a uma role.

```
REVOKE DENY SHOW USER ON DBMS FROM my_role
```

Revoga o privilégio negado de exibir usuários de uma role.

```
GRANT USER MANAGEMENT ON DBMS TO my_role
```

Concede todos os privilégios para gerenciar usuários a uma role.

### (★) Privilégios de gerenciamento de bancos de dados

```
GRANT CREATE DATABASE ON DBMS TO my_role
```

Concede o privilégio de criar bancos de dados a uma role.

```
REVOKE DENY DROP DATABASE ON DBMS FROM my_role
```

Revoga o privilégio negado de excluir bancos de dados de uma role.

```
DENY DATABASE MANAGEMENT ON DBMS TO my_role
```

Nega todos os privilégios para gerenciar bancos de dados a uma role.

### (★) Privilégios de gerenciamento de privilégios

```
GRANT SHOW PRIVILEGE ON DBMS TO my_role
```

Concede o privilégio de exibir privilégios a uma role.

```
DENY ASSIGN PRIVILEGE ON DBMS TO my_role
```

Nega o privilégio de atribuir privilégios a roles a uma role.

```
REVOKE GRANT REMOVE PRIVILEGE ON DBMS FROM my_role
```

Revoga o privilégio concedido de remover privilégios de roles de uma role.

```
REVOKE PRIVILEGE MANAGEMENT ON DBMS FROM my_role
```

Revoga todos os privilégios concedidos e negados para gerenciar privilégios de uma role.

### (★) Privilégios de DBMS

```
GRANT ALL ON DBMS TO my_role
```

Concede privilégio para executar todo o gerenciamento de roles, usuários, bancos de dados e privilégios a uma role.

## ★ Observação

(★) Funcionalidade disponível apenas no Neo4j Enterprise Edition.
