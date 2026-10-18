---
title: MySQL
date: 2020-12-16 18:28:43
background: bg-[#2a6387]
tags:
  - RDBMS
  - DB
categories:
  - Banco de Dados
intro: Este cheat sheet de SQL reúne os comandos SQL mais usados como referência.
plugins:
  - tooltip
  - copyCode
---

## Primeiros passos {.cols-2}

### Conectar ao MySQL

```
mysql -u <user> -p

mysql [db_name]

mysql -h <host> -P <port> -u <user> -p [db_name]

mysql -h <host> -u <user> -p [db_name]
```

### Comuns {.row-span-2}

#### Banco de dados

| -                        | -                              |
| ------------------------ | ------------------------------ |
| `CREATE DATABASE` db `;` | Criar banco de dados           |
| `SHOW DATABASES;`        | Listar bancos de dados         |
| `USE` db`;`              | Alternar para o banco de dados |
| `CONNECT` db `;`         | Alternar para o banco de dados |
| `DROP DATABASE` db`;`    | Excluir banco de dados         |

#### Tabela

| -                        | -                                    |
| ------------------------ | ------------------------------------ |
| `SHOW TABLES;`           | Listar tabelas do banco atual        |
| `SHOW FIELDS FROM` t`;`  | Listar campos de uma tabela          |
| `DESC` t`;`              | Mostrar a estrutura da tabela        |
| `SHOW CREATE TABLE `t`;` | Mostrar o SQL de criação da tabela   |
| `TRUNCATE TABLE `t`;`    | Remover todos os dados de uma tabela |
| `DROP TABLE `t`;`        | Excluir tabela                       |

#### Processos

| -                   | -                 |
| ------------------- | ----------------- |
| `show processlist;` | Listar processos  |
| `kill` pid`;`       | encerrar processo |

#### Outros

| -              | -                       |
| -------------- | ----------------------- |
| `exit` or `\q` | Sair da sessão do MySQL |

### Backups

Crie um backup

```sql
mysqldump -u user -p db_name > db.sql
```

Exporte o banco de dados sem schema

```{.wrap}
mysqldump -u user -p db_name --no-data=true --add-drop-table=false > db.sql
```

Restaure um backup

```
mysql -u user -p db_name < db.sql
```

## Exemplos de MySQL

### Gerenciar tabelas

Crie uma nova tabela com três colunas

```sql
CREATE TABLE t (
     id    INT,
     name  VARCHAR DEFAULT NOT NULL,
     price INT DEFAULT 0
     PRIMARY KEY(id)
);
```

Exclua a tabela do banco de dados

```sql
DROP TABLE t ;
```

Adicione uma nova coluna à tabela

```sql
ALTER TABLE t ADD column;
```

Remova a coluna c da tabela

```sql
ALTER TABLE t DROP COLUMN c ;
```

Adicione uma constraint

```sql
ALTER TABLE t ADD constraint;
```

Remova uma constraint

```sql
ALTER TABLE t DROP constraint;
```

Renomeie a tabela de t1 para t2

```sql
ALTER TABLE t1 RENAME TO t2;
```

Renomeie a coluna c1 para c2

```sql
ALTER TABLE t1 RENAME c1 TO c2 ;
```

Remova todos os dados de uma tabela

```sql
TRUNCATE TABLE t;
```

### Consultar dados de uma tabela

Consulte dados das colunas c1 e c2 de uma tabela

```sql
SELECT c1, c2 FROM t
```

Consulte todas as linhas e colunas de uma tabela

```sql
SELECT * FROM t
```

Consulte dados e filtre linhas com uma condição

```sql
SELECT c1, c2 FROM t
WHERE condition
```

Consulte linhas distintas de uma tabela

```sql
SELECT DISTINCT c1 FROM t
WHERE condition
```

Ordene o result set em ordem crescente ou decrescente

```sql
SELECT c1, c2 FROM t
ORDER BY c1 ASC [DESC]
```

Pule um offset de linhas e retorne as próximas n linhas

```sql
SELECT c1, c2 FROM t
ORDER BY c1
LIMIT n OFFSET offset
```

Agrupe linhas com uma função de agregação

```sql
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1
```

Filtre grupos com a cláusula HAVING

```sql
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1
HAVING condition
```

### Consultar em várias tabelas {.row-span-2}

Inner join entre t1 e t2

```sql
SELECT c1, c2
FROM t1
INNER JOIN t2 ON condition
```

Left join entre t1 e t1

```sql
SELECT c1, c2
FROM t1
LEFT JOIN t2 ON condition
```

Right join entre t1 e t2

```sql
SELECT c1, c2
FROM t1
RIGHT JOIN t2 ON condition
```

Execute um full outer join

```sql
SELECT c1, c2
FROM t1
FULL OUTER JOIN t2 ON condition
```

Produza um produto cartesiano de linhas entre tabelas

```sql
SELECT c1, c2
FROM t1
CROSS JOIN t2
```

Outra forma de fazer cross join

```sql
SELECT c1, c2
FROM t1, t2
```

Faça join de t1 com ela mesma usando a cláusula INNER JOIN

```sql
SELECT c1, c2
FROM t1 A
INNER JOIN t1 B ON condition
```

Use operadores SQL para combinar linhas de duas consultas

```sql
SELECT c1, c2 FROM t1
UNION [ALL]
SELECT c1, c2 FROM t2
```

Retorne a interseção de duas consultas

```sql
SELECT c1, c2 FROM t1
INTERSECT
SELECT c1, c2 FROM t2
```

Subtraia um result set de outro result set

```sql
SELECT c1, c2 FROM t1
MINUS
SELECT c1, c2 FROM t2
```

Consulte linhas usando correspondência de padrão com %, \_

```sql
SELECT c1, c2 FROM t1
WHERE c1 [NOT] LIKE pattern
```

Consulte linhas em uma lista

```sql
SELECT c1, c2 FROM t
WHERE c1 [NOT] IN value_list
```

Consulte linhas entre dois valores

```sql
SELECT c1, c2 FROM t
WHERE  c1 BETWEEN low AND high
```

Verifique se os valores de uma tabela são NULL ou não

```sql
SELECT c1, c2 FROM t
WHERE  c1 IS [NOT] NULL
```

### Usar constraints SQL

Defina c1 e c2 como chave primária

```sql
CREATE TABLE t(
    c1 INT, c2 INT, c3 VARCHAR,
    PRIMARY KEY (c1,c2)
);
```

Defina a coluna c2 como chave estrangeira

```sql
CREATE TABLE t1(
    c1 INT PRIMARY KEY,
    c2 INT,
    FOREIGN KEY (c2) REFERENCES t2(c2)
);
```

Torne os valores de c1 e c2 únicos

```sql
CREATE TABLE t(
    c1 INT, c1 INT,
    UNIQUE(c2,c3)
);
```

Garanta que c1 > 0 e que os valores de c1 sejam >= c2

```sql
CREATE TABLE t(
  c1 INT, c2 INT,
  CHECK(c1> 0 AND c1 >= c2)
);
```

Defina os valores da coluna c2 como NOT NULL

```sql
CREATE TABLE t(
     c1 INT PRIMARY KEY,
     c2 VARCHAR NOT NULL
);
```

### Modificar dados

Insira uma linha em uma tabela

```sql
INSERT INTO t(column_list)
VALUES(value_list);
```

Insira várias linhas em uma tabela

```sql
INSERT INTO t(column_list)
VALUES (value_list),
       (value_list), …;
```

Insira linhas de t2 em t1

```sql
INSERT INTO t1(column_list)
SELECT column_list
FROM t2;
```

Atualize o valor da coluna c1 em todas as linhas

```sql
UPDATE t
SET c1 = new_value;
```

Atualize os valores das colunas c1 e c2 que atendem à condição

```sql
UPDATE t
SET c1 = new_value,
        c2 = new_value
WHERE condition;
```

Exclua todos os dados de uma tabela

```sql
DELETE FROM t;
```

Exclua um subconjunto de linhas de uma tabela

```sql
DELETE FROM t
WHERE condition;
```

### Gerenciar views

Crie uma nova view composta por c1 e c2

```sql
CREATE VIEW v(c1,c2)
AS
SELECT c1, c2
FROM t;
```

Crie uma nova view com check option

```sql
CREATE VIEW v(c1,c2)
AS
SELECT c1, c2
FROM t;
WITH [CASCADED | LOCAL] CHECK OPTION;
```

Crie uma view recursiva

```sql
CREATE RECURSIVE VIEW v
AS
select-statement -- anchor part
UNION [ALL]
select-statement; -- recursive part
```

Crie uma view temporária

```sql
CREATE TEMPORARY VIEW v
AS
SELECT c1, c2
FROM t;
```

Exclua uma view

```sql
DROP VIEW view_name;
```

### Gerenciar triggers

Crie ou modifique um trigger

```sql
CREATE OR MODIFY TRIGGER trigger_name
WHEN EVENT
ON table_name TRIGGER_TYPE
EXECUTE stored_procedure;
```

#### WHEN

| -        | -                                 |
| -------- | --------------------------------- |
| `BEFORE` | invoca antes de o evento ocorrer  |
| `AFTER`  | invoca depois de o evento ocorrer |

#### EVENT

| -        | -                |
| -------- | ---------------- |
| `INSERT` | invoca em INSERT |
| `UPDATE` | invoca em UPDATE |
| `DELETE` | invoca em DELETE |

#### TRIGGER_TYPE

| -                    | -   |
| -------------------- | --- |
| `FOR EACH ROW`       |     |
| `FOR EACH STATEMENT` |     |

### Gerenciar índices

Crie um índice em c1 e c2 da tabela t

```sql
CREATE INDEX idx_name
ON t(c1,c2);
```

Crie um índice único em c3 e c4 da tabela t

```sql
CREATE UNIQUE INDEX idx_name
ON t(c3,c4)
```

Remova um índice

```sql
DROP INDEX idx_name ON t;
```

## Tipos de dados do MySQL

### Strings

| -            | -                              |
| ------------ | ------------------------------ |
| `CHAR`       | String (0 - 255)               |
| `VARCHAR`    | String (0 - 255)               |
| `TINYTEXT`   | String (0 - 255)               |
| `TEXT`       | String (0 - 65535)             |
| `BLOB`       | String (0 - 65535)             |
| `MEDIUMTEXT` | String (0 - 16777215)          |
| `MEDIUMBLOB` | String (0 - 16777215)          |
| `LONGTEXT`   | String (0 - 429496­7295)       |
| `LONGBLOB`   | String (0 - 429496­7295)       |
| `ENUM`       | Uma das opções predefinidas    |
| `SET`        | Seleção de opções predefinidas |

### Data e hora

| Tipo de dados | Formato             |
| ------------- | ------------------- |
| `DATE     `   | yyyy-MM-dd          |
| `TIME     `   | hh:mm:ss            |
| `DATETIME `   | yyyy-MM-dd hh:mm:ss |
| `TIMESTAMP`   | yyyy-MM-dd hh:mm:ss |
| `YEAR     `   | yyyy                |

### Numéricos

| -             | -                                                            |
| ------------- | ------------------------------------------------------------ |
| `TINYINT x`   | Inteiro (-128 a 127)                                         |
| `SMALLINT x`  | Inteiro (-32768 a 32767)                                     |
| `MEDIUMINT x` | Inteiro (-8388608 a 8388607)                                 |
| `INT x`       | Inteiro (-2147­483648 a 214748­3647)                         |
| `BIGINT x`    | Inteiro (-9223­372­036­854­775808 a 922337­203­685­477­5807) |
| `FLOAT`       | Decimal (preciso em 23 dígitos)                              |
| `DOUBLE`      | Decimal (24 a 53 dígitos)                                    |
| `DECIMAL`     | "­DOU­BLE­" armazenado como string                           |

## Funções e operadores do MySQL

### Strings {.row-span-2}

<!-- prettier-ignore -->
- [ASCII()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ascii){data-tooltip="Retorna o valor numérico do caractere mais à esquerda"}
- [BIN()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_bin){data-tooltip="Retorna uma string com a representação binária de um número"}
- [BIT_LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_bit-length){data-tooltip="Retorna o comprimento do argumento em bits"}
- [CHAR()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char){data-tooltip="Retorna o caractere para cada inteiro informado"}
- [CHARACTER_LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_character-length){data-tooltip="Sinônimo de CHAR_LENGTH()"}
- [CHAR_LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_char-length){data-tooltip="Retorna o número de caracteres do argumento"}
- [CONCAT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat){data-tooltip="Retorna a string concatenada"}
- [CONCAT_WS()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_concat-ws){data-tooltip="Retorna a concatenação com separador"}
- [ELT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_elt){data-tooltip="Retorna a string na posição do índice"}
- [EXPORT_SET()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_export-set){data-tooltip="Retorna uma string em que cada bit definido em value gera a string on e cada bit não definido gera a string off"}
- [FIELD()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_field){data-tooltip="Índice (posição) do primeiro argumento nos argumentos seguintes"}
- [FIND_IN_SET()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_find-in-set){data-tooltip="Índice (posição) do primeiro argumento dentro do segundo argumento"}
- [FORMAT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_format){data-tooltip="Retorna um número formatado com o número especificado de casas decimais"}
- [FROM_BASE64()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_from-base64){data-tooltip="Decodifica uma string em base64 e retorna o resultado"}
- [HEX()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_hex){data-tooltip="Representação hexadecimal de um valor decimal ou string"}
- [INSERT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_insert){data-tooltip="Insere uma substring na posição especificada até o número de caracteres indicado"}
- [INSTR()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_instr){data-tooltip="Retorna o índice da primeira ocorrência da substring"}
- [LCASE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lcase){data-tooltip="Sinônimo de LOWER()"}
- [LEFT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_left){data-tooltip="Retorna os primeiros caracteres conforme especificado"}
- [LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_length){data-tooltip="Retorna o comprimento de uma string em bytes"}
- [LIKE](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_like){data-tooltip="Correspondência de padrão simples"}
- [LOAD_FILE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_load-file){data-tooltip="Carrega o arquivo indicado"}
- [LOCATE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_locate){data-tooltip="Retorna a posição da primeira ocorrência da substring"}
- [LOWER()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower){data-tooltip="Retorna o argumento em minúsculas"}
- [LPAD()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lpad){data-tooltip="Retorna o argumento string preenchido à esquerda com a string especificada"}
- [LTRIM()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ltrim){data-tooltip="Remove os espaços à esquerda"}
- [MAKE_SET()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_make-set){data-tooltip="Retorna um conjunto de strings separadas por vírgula cujos bits correspondentes estão definidos"}
- [MATCH](https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html#function_match){data-tooltip="Executa busca full-text"}
- [MID()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_mid){data-tooltip="Retorna uma substring a partir da posição especificada"}
- [NOT LIKE](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#operator_not-like){data-tooltip="Negação da correspondência de padrão simples"}
- [NOT REGEXP](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#operator_not-regexp){data-tooltip="Negação de REGEXP"}
- [OCT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_oct){data-tooltip="Retorna uma string com a representação octal de um número"}
- [OCTET_LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_octet-length){data-tooltip="Sinônimo de LENGTH()"}
- [ORD()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ord){data-tooltip="Retorna o código do caractere mais à esquerda do argumento"}
- [POSITION()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_position){data-tooltip="Sinônimo de LOCATE()"}
- [QUOTE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_quote){data-tooltip="Escapa o argumento para uso em um comando SQL"}
- [REGEXP](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#operator_regexp){data-tooltip="Indica se a string corresponde à expressão regular"}
- [REGEXP_INSTR()](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-instr){data-tooltip="Índice inicial da substring que corresponde à expressão regular"}
- [REGEXP_LIKE()](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-like){data-tooltip="Indica se a string corresponde à expressão regular"}
- [REGEXP_REPLACE()](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-replace){data-tooltip="Substitui substrings que correspondem à expressão regular"}
- [REGEXP_SUBSTR()](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#function_regexp-substr){data-tooltip="Retorna a substring que corresponde à expressão regular"}
- [REPEAT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_repeat){data-tooltip="Repete uma string o número especificado de vezes"}
- [REPLACE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_replace){data-tooltip="Substitui ocorrências de uma string especificada"}
- [REVERSE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_reverse){data-tooltip="Inverte os caracteres de uma string"}
- [RIGHT()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_right){data-tooltip="Retorna os últimos caracteres conforme especificado"}
- [RLIKE](https://dev.mysql.com/doc/refman/8.0/en/regexp.html#operator_regexp){data-tooltip="Indica se a string corresponde à expressão regular"}
- [RPAD()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_rpad){data-tooltip="Acrescenta a string o número especificado de vezes"}
- [RTRIM()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_rtrim){data-tooltip="Remove os espaços à direita"}
- [SOUNDEX()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_soundex){data-tooltip="Retorna uma string soundex"}
- [SOUNDS LIKE](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#operator_sounds-like){data-tooltip="Compara os sons"}
- [SPACE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_space){data-tooltip="Retorna uma string com o número especificado de espaços"}
- [STRCMP()](https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html#function_strcmp){data-tooltip="Compara duas strings"}
- [SUBSTR()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substr){data-tooltip="Retorna a substring conforme especificado"}
- [SUBSTRING()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring){data-tooltip="Retorna a substring conforme especificado"}
- [SUBSTRING_INDEX()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_substring-index){data-tooltip="Retorna uma substring antes do número especificado de ocorrências do delimitador"}
- [TO_BASE64()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_to-base64){data-tooltip="Retorna o argumento convertido em uma string base-64"}
- [TRIM()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_trim){data-tooltip="Remove os espaços à esquerda e à direita"}
- [UCASE()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_ucase){data-tooltip="Sinônimo de UPPER()"}
- [UNHEX()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_unhex){data-tooltip="Retorna uma string com a representação hex de um número"}
- [UPPER()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_upper){data-tooltip="Converte para maiúsculas"}
- [WEIGHT_STRING()](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_weight-string){data-tooltip="Retorna a weight string de uma string"}

{.cols-2 .marker-none}

### Data e hora {.row-span-2}

<!-- prettier-ignore -->
- [ADDDATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_adddate){data-tooltip="Adiciona valores de tempo (intervalos) a um valor de data"}
- [ADDTIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_addtime){data-tooltip="Adiciona tempo"}
- [CONVERT_TZ()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_convert-tz){data-tooltip="Converte de um fuso horário para outro"}
- [CURDATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_curdate){data-tooltip="Retorna a data atual"}
- [CURRENT_DATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-date){data-tooltip="Sinônimos de CURDATE()"}
- [CURRENT_TIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-time){data-tooltip="Sinônimos de CURTIME()"}
- [CURRENT_TIMESTAMP()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_current-timestamp){data-tooltip="Sinônimos de NOW()"}
- [CURTIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_curtime){data-tooltip="Retorna a hora atual"}
- [DATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date){data-tooltip="Extrai a parte de data de uma expressão de data ou datetime"}
- [DATE_ADD()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-add){data-tooltip="Adiciona valores de tempo (intervalos) a um valor de data"}
- [DATE_FORMAT()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-format){data-tooltip="Formata a data conforme especificado"}
- [DATE_SUB()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-sub){data-tooltip="Subtrai um valor de tempo (intervalo) de uma data"}
- [DATEDIFF()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_datediff){data-tooltip="Subtrai duas datas"}
- [DAY()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_day){data-tooltip="Sinônimo de DAYOFMONTH()"}
- [DAYNAME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayname){data-tooltip="Retorna o nome do dia da semana"}
- [DAYOFMONTH()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofmonth){data-tooltip="Retorna o dia do mês (0-31)"}
- [DAYOFWEEK()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofweek){data-tooltip="Retorna o índice do dia da semana do argumento"}
- [DAYOFYEAR()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_dayofyear){data-tooltip="Retorna o dia do ano (1-366)"}
- [EXTRACT()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_extract){data-tooltip="Extrai parte de uma data"}
- [FROM_DAYS()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_from-days){data-tooltip="Converte um número de dia em data"}
- [FROM_UNIXTIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_from-unixtime){data-tooltip="Formata um timestamp Unix como data"}
- [GET_FORMAT()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_get-format){data-tooltip="Retorna uma string de formato de data"}
- [HOUR()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_hour){data-tooltip="Extrai a hora"}
- [LAST_DAY](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_last-day){data-tooltip="Retorna o último dia do mês para o argumento"}
- [LOCALTIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_localtime){data-tooltip="Sinônimo de NOW()"}
- [LOCALTIMESTAMP()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_localtimestamp){data-tooltip="Sinônimo de NOW()"}
- [MAKEDATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_makedate){data-tooltip="Cria uma data a partir do ano e do dia do ano"}
- [MAKETIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_maketime){data-tooltip="Cria um horário a partir de hora, minuto e segundo"}
- [MICROSECOND()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_microsecond){data-tooltip="Retorna os microssegundos do argumento"}
- [MINUTE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_minute){data-tooltip="Retorna o minuto do argumento"}
- [MONTH()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_month){data-tooltip="Retorna o mês da data informada"}
- [MONTHNAME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_monthname){data-tooltip="Retorna o nome do mês"}
- [NOW()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now){data-tooltip="Retorna a data e a hora atuais"}
- [PERIOD_ADD()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_period-add){data-tooltip="Adiciona um período a um ano-mês"}
- [PERIOD_DIFF()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_period-diff){data-tooltip="Retorna o número de meses entre períodos"}
- [QUARTER()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_quarter){data-tooltip="Retorna o trimestre de um argumento de data"}
- [SEC_TO_TIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_sec-to-time){data-tooltip="Converte segundos para o formato 'hh:mm:ss'"}
- [SECOND()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_second){data-tooltip="Retorna o segundo (0-59)"}
- [STR_TO_DATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_str-to-date){data-tooltip="Converte uma string em data"}
- [SUBDATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_subdate){data-tooltip="Sinônimo de DATE_SUB() quando invocado com três argumentos"}
- [SUBTIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_subtime){data-tooltip="Subtrai tempos"}
- [SYSDATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_sysdate){data-tooltip="Retorna a hora em que a função é executada"}
- [TIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time){data-tooltip="Extrai a parte de hora da expressão informada"}
- [TIME_FORMAT()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time-format){data-tooltip="Formata como hora"}
- [TIME_TO_SEC()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_time-to-sec){data-tooltip="Retorna o argumento convertido em segundos"}
- [TIMEDIFF()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timediff){data-tooltip="Subtrai tempo"}
- [TIMESTAMP()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestamp){data-tooltip="Com um argumento, retorna a expressão de data ou datetime; com dois argumentos, a soma dos argumentos"}
- [TIMESTAMPADD()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestampadd){data-tooltip="Adiciona um intervalo a uma expressão datetime"}
- [TIMESTAMPDIFF()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_timestampdiff){data-tooltip="Subtrai um intervalo de uma expressão datetime"}
- [TO_DAYS()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_to-days){data-tooltip="Retorna o argumento de data convertido em dias"}
- [TO_SECONDS()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_to-seconds){data-tooltip="Retorna o argumento de data ou datetime convertido em segundos desde o Ano 0"}
- [UNIX_TIMESTAMP()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_unix-timestamp){data-tooltip="Retorna um timestamp Unix"}
- [UTC_DATE()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-date){data-tooltip="Retorna a data UTC atual"}
- [UTC_TIME()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-time){data-tooltip="Retorna a hora UTC atual"}
- [UTC_TIMESTAMP()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_utc-timestamp){data-tooltip="Retorna a data e a hora UTC atuais"}
- [WEEK()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week){data-tooltip="Retorna o número da semana"}
- [WEEKDAY()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_weekday){data-tooltip="Retorna o índice do dia da semana"}
- [WEEKOFYEAR()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_weekofyear){data-tooltip="Retorna a semana do calendário da data (1-53)"}
- [YEAR()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_year){data-tooltip="Retorna o ano"}
- [YEARWEEK()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_yearweek){data-tooltip="Retorna o ano e a semana"}
- [GET_FORMAT()](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_get-format){data-tooltip="'%m.%d.%Y'"}

{.cols-2 .marker-none}

### Numéricos

<!-- prettier-ignore -->
- [%, MOD](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_mod){data-tooltip="Operador de módulo"}
- [*](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_times){data-tooltip="Operador de multiplicação"}
- [+](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_plus){data-tooltip="Operador de adição"}
- [-](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_minus){data-tooltip="Operador de subtração"}
- [-](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_unary-minus){data-tooltip="Inverte o sinal do argumento"}
- [/](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_divide){data-tooltip="Operador de divisão"}
- [ABS()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_abs){data-tooltip="Retorna o valor absoluto"}
- [ACOS()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_acos){data-tooltip="Retorna o arco cosseno"}
- [ASIN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_asin){data-tooltip="Retorna o arco seno"}
- [ATAN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_atan){data-tooltip="Retorna o arco tangente"}
- [ATAN2(), ATAN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_atan2){data-tooltip="Retorna o arco tangente dos dois argumentos"}
- [CEIL()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_ceil){data-tooltip="Retorna o menor valor inteiro não menor que o argumento"}
- [CEILING()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_ceiling){data-tooltip="Retorna o menor valor inteiro não menor que o argumento"}
- [CONV()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_conv){data-tooltip="Converte números entre bases numéricas diferentes"}
- [COS()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_cos){data-tooltip="Retorna o cosseno"}
- [COT()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_cot){data-tooltip="Retorna a cotangente"}
- [CRC32()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_crc32){data-tooltip="Calcula um valor de verificação de redundância cíclica (CRC)"}
- [DEGREES()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_degrees){data-tooltip="Converte radianos em graus"}
- [DIV](https://dev.mysql.com/doc/refman/8.0/en/arithmetic-functions.html#operator_div){data-tooltip="Divisão inteira"}
- [EXP()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_exp){data-tooltip="Eleva à potência"}
- [FLOOR()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_floor){data-tooltip="Retorna o maior valor inteiro não maior que o argumento"}
- [LN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_ln){data-tooltip="Retorna o logaritmo natural do argumento"}
- [LOG()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_log){data-tooltip="Retorna o logaritmo natural do primeiro argumento"}
- [LOG10()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_log10){data-tooltip="Retorna o logaritmo na base 10 do argumento"}
- [LOG2()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_log2){data-tooltip="Retorna o logaritmo na base 2 do argumento"}
- [MOD()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_mod){data-tooltip="Retorna o resto"}
- [PI()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_pi){data-tooltip="Retorna o valor de pi"}
- [POW()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_pow){data-tooltip="Retorna o argumento elevado à potência especificada"}
- [POWER()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_power){data-tooltip="Retorna o argumento elevado à potência especificada"}
- [RADIANS()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_radians){data-tooltip="Retorna o argumento convertido em radianos"}
- [RAND()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_rand){data-tooltip="Retorna um valor aleatório de ponto flutuante"}
- [ROUND()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_round){data-tooltip="Arredonda o argumento"}
- [SIGN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_sign){data-tooltip="Retorna o sinal do argumento"}
- [SIN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_sin){data-tooltip="Retorna o seno do argumento"}
- [SQRT()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_sqrt){data-tooltip="Retorna a raiz quadrada do argumento"}
- [TAN()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_tan){data-tooltip="Retorna a tangente do argumento"}
- [TRUNCATE()](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html#function_truncate){data-tooltip="Trunca para o número especificado de casas decimais"}

{.cols-2 .marker-none}

### Agregação

<!-- prettier-ignore -->
- [AVG()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_avg){data-tooltip="Retorna o valor médio do argumento"}
- [BIT_AND()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-and){data-tooltip="Retorna AND bit a bit"}
- [BIT_OR()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-or){data-tooltip="Retorna OR bit a bit"}
- [BIT_XOR()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-xor){data-tooltip="Retorna XOR bit a bit"}
- [COUNT()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_count){data-tooltip="Retorna a contagem do número de linhas retornadas"}
- [COUNT(DISTINCT)](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_count-distinct){data-tooltip="Retorna a contagem de valores distintos"}
- [GROUP_CONCAT()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_group-concat){data-tooltip="Retorna uma string concatenada"}
- [JSON_ARRAYAGG()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_json-arrayagg){data-tooltip="Retorna o result set como um único array JSON"}
- [JSON_OBJECTAGG()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_json-objectagg){data-tooltip="Retorna o result set como um único objeto JSON"}
- [MAX()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_max){data-tooltip="Retorna o valor máximo"}
- [MIN()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_min){data-tooltip="Retorna o valor mínimo"}
- [STD()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_std){data-tooltip="Retorna o desvio padrão populacional"}
- [STDDEV()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev){data-tooltip="Retorna o desvio padrão populacional"}
- [STDDEV_POP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev-pop){data-tooltip="Retorna o desvio padrão populacional"}
- [STDDEV_SAMP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev-samp){data-tooltip="Retorna o desvio padrão amostral"}
- [SUM()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_sum){data-tooltip="Retorna a soma"}
- [VAR_POP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_var-pop){data-tooltip="Retorna a variância populacional"}
- [VAR_SAMP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_var-samp){data-tooltip="Retorna a variância amostral"}
- [VARIANCE()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_variance){data-tooltip="Retorna a variância populacional"}

{.cols-2 .marker-none}

### JSON {.row-span-4}

<!-- prettier-ignore -->
- [->](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#operator_json-column-path){data-tooltip="Retorna o valor da coluna JSON após avaliar o path; equivalente a JSON_EXTRACT()."}
- [->>](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#operator_json-inline-path){data-tooltip="Retorna o valor da coluna JSON após avaliar o path e remover as aspas do resultado; equivalente a JSON_UNQUOTE(JSON_EXTRACT())."}
- [JSON_ARRAY()](https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html#function_json-array){data-tooltip="Cria um array JSON"}
- [JSON_ARRAY_APPEND()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-array-append){data-tooltip="Acrescenta dados a um documento JSON"}
- [JSON_ARRAY_INSERT()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-array-insert){data-tooltip="Insere em um array JSON"}
- [JSON_CONTAINS()](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-contains){data-tooltip="Indica se o documento JSON contém um objeto específico no path"}
- [JSON_CONTAINS_PATH()](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-contains-path){data-tooltip="Indica se o documento JSON contém algum dado no path"}
- [JSON_DEPTH()](https://dev.mysql.com/doc/refman/8.0/en/json-attribute-functions.html#function_json-depth){data-tooltip="Profundidade máxima do documento JSON"}
- [JSON_EXTRACT()](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-extract){data-tooltip="Retorna dados de um documento JSON"}
- [JSON_INSERT()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-insert){data-tooltip="Insere dados em um documento JSON"}
- [JSON_KEYS()](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-keys){data-tooltip="Array de chaves do documento JSON"}
- [JSON_LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/json-attribute-functions.html#function_json-length){data-tooltip="Número de elementos do documento JSON"}
- [JSON_MERGE() (deprecated)](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-merge){data-tooltip="Mescla documentos JSON preservando chaves duplicadas. Sinônimo descontinuado de JSON_MERGE_PRESERVE()"}
- [JSON_MERGE_PATCH()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-merge-patch){data-tooltip="Mescla documentos JSON substituindo os valores das chaves duplicadas"}
- [JSON_MERGE_PRESERVE()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-merge-preserve){data-tooltip="Mescla documentos JSON preservando chaves duplicadas"}
- [JSON_OBJECT()](https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html#function_json-object){data-tooltip="Cria um objeto JSON"}
- [JSON_OVERLAPS() (introduced 8.0.17)](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-overlaps){data-tooltip="Compara dois documentos JSON e retorna TRUE (1) se tiverem pares chave-valor ou elementos de array em comum; caso contrário, FALSE (0)"}
- [JSON_PRETTY()](https://dev.mysql.com/doc/refman/8.0/en/json-utility-functions.html#function_json-pretty){data-tooltip="Imprime um documento JSON em formato legível"}
- [JSON_QUOTE()](https://dev.mysql.com/doc/refman/8.0/en/json-creation-functions.html#function_json-quote){data-tooltip="Coloca o documento JSON entre aspas"}
- [JSON_REMOVE()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-remove){data-tooltip="Remove dados de um documento JSON"}
- [JSON_REPLACE()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-replace){data-tooltip="Substitui valores em um documento JSON"}
- [JSON_SCHEMA_VALID() (introduced 8.0.17)](https://dev.mysql.com/doc/refman/8.0/en/json-validation-functions.html#function_json-schema-valid){data-tooltip="Valida o documento JSON contra o JSON schema; retorna TRUE/1 se o documento for válido conforme o schema, ou FALSE/0 caso não seja"}
- [JSON_SCHEMA_VALIDATION_REPORT() (introduced 8.0.17)](https://dev.mysql.com/doc/refman/8.0/en/json-validation-functions.html#function_json-schema-validation-report){data-tooltip="Valida o documento JSON contra o JSON schema; retorna um relatório em formato JSON com o resultado da validação, incluindo sucesso ou falha e os motivos da falha"}
- [JSON_SEARCH()](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-search){data-tooltip="Path para o valor dentro do documento JSON"}
- [JSON_SET()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-set){data-tooltip="Insere dados em um documento JSON"}
- [JSON_STORAGE_FREE()](https://dev.mysql.com/doc/refman/8.0/en/json-utility-functions.html#function_json-storage-free){data-tooltip="Espaço liberado na representação binária do valor da coluna JSON após uma atualização parcial"}
- [JSON_STORAGE_SIZE()](https://dev.mysql.com/doc/refman/8.0/en/json-utility-functions.html#function_json-storage-size){data-tooltip="Espaço usado para armazenar a representação binária de um documento JSON"}
- [JSON_TABLE()](https://dev.mysql.com/doc/refman/8.0/en/json-table-functions.html#function_json-table){data-tooltip="Retorna dados de uma expressão JSON como uma tabela relacional"}
- [JSON_TYPE()](https://dev.mysql.com/doc/refman/8.0/en/json-attribute-functions.html#function_json-type){data-tooltip="Tipo do valor JSON"}
- [JSON_UNQUOTE()](https://dev.mysql.com/doc/refman/8.0/en/json-modification-functions.html#function_json-unquote){data-tooltip="Remove as aspas do valor JSON"}
- [JSON_VALID()](https://dev.mysql.com/doc/refman/8.0/en/json-attribute-functions.html#function_json-valid){data-tooltip="Indica se o valor JSON é válido"}
- [JSON_VALUE() (introduced 8.0.21)](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-value){data-tooltip="Extrai o valor do documento JSON no local indicado pelo path; retorna esse valor como VARCHAR(512) ou o tipo especificado"}
- [MEMBER OF() (introduced 8.0.17)](https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#operator_member-of){data-tooltip="Retorna true (1) se o primeiro operando corresponder a algum elemento do array JSON passado como segundo operando; caso contrário, retorna false (0)"}

{.cols-1 .marker-none}

### Cast (conversão de tipos)

<!-- prettier-ignore -->
- [BINARY](https://dev.mysql.com/doc/refman/8.0/en/cast-functions.html#operator_binary){data-tooltip="Converte uma string em uma string binária"}
- [CAST()](https://dev.mysql.com/doc/refman/8.0/en/cast-functions.html#function_cast){data-tooltip="Converte um valor para um determinado tipo"}
- [CONVERT()](https://dev.mysql.com/doc/refman/8.0/en/cast-functions.html#function_convert){data-tooltip="Converte um valor para um determinado tipo"}

{.cols-2 .marker-none}

### Controle de fluxo

<!-- prettier-ignore -->
- [CASE](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#operator_case){data-tooltip="Operador CASE"}
- [IF()](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#function_if){data-tooltip="Estrutura if/else"}
- [IFNULL()](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#function_ifnull){data-tooltip="Estrutura if/else com NULL"}
- [NULLIF()](https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#function_nullif){data-tooltip="Retorna NULL se expr1 = expr2"}

{.cols-2 .marker-none}

### Informações

<!-- prettier-ignore -->
- [BENCHMARK()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_benchmark){data-tooltip="Executa uma expressão repetidamente"}
- [CHARSET()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_charset){data-tooltip="Retorna o conjunto de caracteres do argumento"}
- [COERCIBILITY()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_coercibility){data-tooltip="Retorna o valor de coercibilidade da collation do argumento string"}
- [COLLATION()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_collation){data-tooltip="Retorna a collation do argumento string"}
- [CONNECTION_ID()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_connection-id){data-tooltip="Retorna o ID de conexão (ID da thread) da conexão"}
- [CURRENT_ROLE()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_current-role){data-tooltip="Retorna as roles ativas no momento"}
- [CURRENT_USER()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_current-user){data-tooltip="O nome do usuário autenticado e o nome do host"}
- [DATABASE()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_database){data-tooltip="Retorna o nome do banco de dados padrão (atual)"}
- [FOUND_ROWS()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_found-rows){data-tooltip="Para um SELECT com cláusula LIMIT, o número de linhas que seriam retornadas sem a cláusula LIMIT"}
- [ICU_VERSION()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_icu-version){data-tooltip="Versão da biblioteca ICU"}
- [LAST_INSERT_ID()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_last-insert-id){data-tooltip="Valor da coluna AUTOINCREMENT do último INSERT"}
- [ROLES_GRAPHML()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_roles-graphml){data-tooltip="Retorna um documento GraphML representando subgrafos de roles em memória"}
- [ROW_COUNT()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_row-count){data-tooltip="O número de linhas atualizadas"}
- [SCHEMA()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_schema){data-tooltip="Sinônimo de DATABASE()"}
- [SESSION_USER()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_session-user){data-tooltip="Sinônimo de USER()"}
- [SYSTEM_USER()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_system-user){data-tooltip="Sinônimo de USER()"}
- [USER()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_user){data-tooltip="O nome de usuário e o nome de host fornecidos pelo cliente"}
- [VERSION()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_version){data-tooltip="Retorna uma string que indica a versão do servidor MySQL"}

{.cols-2 .marker-none}

### Criptografia e compressão

<!-- prettier-ignore -->
- [AES_DECRYPT()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt){data-tooltip="Descriptografa usando AES"}
- [AES_ENCRYPT()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-encrypt){data-tooltip="Criptografa usando AES"}
- [COMPRESS()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_compress){data-tooltip="Retorna o resultado como uma string binária"}
- [MD5()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_md5){data-tooltip="Calcula o checksum MD5"}
- [RANDOM_BYTES()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_random-bytes){data-tooltip="Retorna um vetor de bytes aleatório"}
- [SHA1(), SHA()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_sha1){data-tooltip="Calcula um checksum SHA-1 de 160 bits"}
- [SHA2()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_sha2){data-tooltip="Calcula um checksum SHA-2"}
- [STATEMENT_DIGEST()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_statement-digest){data-tooltip="Calcula o valor de hash do digest da instrução"}
- [STATEMENT_DIGEST_TEXT()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_statement-digest-text){data-tooltip="Calcula o digest normalizado da instrução"}
- [UNCOMPRESS()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_uncompress){data-tooltip="Descomprime uma string comprimida"}
- [UNCOMPRESSED_LENGTH()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_uncompressed-length){data-tooltip="Retorna o comprimento de uma string antes da compressão"}
- [VALIDATE_PASSWORD_STRENGTH()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_validate-password-strength){data-tooltip="Determina a força da senha"}

{.cols-1 .marker-none}

### Bloqueios

<!-- prettier-ignore -->
- [GET_LOCK()](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_get-lock){data-tooltip="Obtém um lock nomeado"}
- [IS_FREE_LOCK()](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_is-free-lock){data-tooltip="Indica se o lock nomeado está livre"}
- [IS_USED_LOCK()](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_is-used-lock){data-tooltip="Indica se o lock nomeado está em uso; retorna o identificador da conexão se verdadeiro"}
- [RELEASE_ALL_LOCKS()](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_release-all-locks){data-tooltip="Libera todos os locks nomeados atuais"}
- [RELEASE_LOCK()](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_release-lock){data-tooltip="Libera o lock nomeado"}

{.cols-1 .marker-none}

### Bit

<!-- prettier-ignore -->
- [&](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#operator_bitwise-and){data-tooltip="AND bit a bit"}
- [>>](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#operator_right-shift){data-tooltip="Deslocamento à direita"}
- [<<](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#operator_left-shift){data-tooltip="Deslocamento à esquerda"}
- [^](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#operator_bitwise-xor){data-tooltip="XOR bit a bit"}
- [BIT_COUNT()](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#function_bit-count){data-tooltip="Retorna o número de bits definidos"}
- [|](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#operator_bitwise-or){data-tooltip="OR bit a bit"}
- [~](https://dev.mysql.com/doc/refman/8.0/en/bit-functions.html#operator_bitwise-invert){data-tooltip="Inversão bit a bit"}

{.cols-2 .marker-none}

### Diversos

<!-- prettier-ignore -->
- [ANY_VALUE()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_any-value){data-tooltip="Suprime a rejeição de valores de ONLY_FULL_GROUP_BY"}
- [BIN_TO_UUID()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_bin-to-uuid){data-tooltip="Converte UUID binário em string"}
- [DEFAULT()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_default){data-tooltip="Retorna o valor padrão de uma coluna da tabela"}
- [GROUPING()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_grouping){data-tooltip="Distingue linhas ROLLUP de superagregação das linhas comuns"}
- [INET_ATON()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_inet-aton){data-tooltip="Retorna o valor numérico de um endereço IP"}
- [INET_NTOA()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_inet-ntoa){data-tooltip="Retorna o endereço IP a partir de um valor numérico"}
- [INET6_ATON()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_inet6-aton){data-tooltip="Retorna o valor numérico de um endereço IPv6"}
- [INET6_NTOA()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_inet6-ntoa){data-tooltip="Retorna o endereço IPv6 a partir de um valor numérico"}
- [IS_IPV4()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_is-ipv4){data-tooltip="Indica se o argumento é um endereço IPv4"}
- [IS_IPV4_COMPAT()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_is-ipv4-compat){data-tooltip="Indica se o argumento é um endereço compatível com IPv4"}
- [IS_IPV4_MAPPED()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_is-ipv4-mapped){data-tooltip="Indica se o argumento é um endereço mapeado para IPv4"}
- [IS_IPV6()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_is-ipv6){data-tooltip="Indica se o argumento é um endereço IPv6"}
- [IS_UUID()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_is-uuid){data-tooltip="Indica se o argumento é um UUID válido"}
- [MASTER_POS_WAIT()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_master-pos-wait){data-tooltip="Bloqueia até a réplica ler e aplicar todas as atualizações até a posição especificada"}
- [NAME_CONST()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_name-const){data-tooltip="Faz com que a coluna tenha o nome informado"}
- [SLEEP()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_sleep){data-tooltip="Aguarda um número de segundos"}
- [UUID()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_uuid){data-tooltip="Retorna um Universal Unique Identifier (UUID)"}
- [UUID_SHORT()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_uuid-short){data-tooltip="Retorna um identificador universal com valor inteiro"}
- [UUID_TO_BIN()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_uuid-to-bin){data-tooltip="Converte UUID em string para binário"}
- [VALUES()](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_values){data-tooltip="Define os valores a serem usados durante um INSERT"}

{.cols-2 .marker-none}

## Veja também {.cols-1}

- [Regex no MySQL](/regex#regex-in-mysql) _(cheatsheets.zip)_
