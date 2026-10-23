---
title: PostgreSQL
background: bg-[#3d6488]
tags:
  - DB
  - RDBMS
categories:
  - Banco de Dados
date: 2021-01-11 14:19:24
intro: |
  O cheat sheet do [PostgreSQL](https://www.postgresql.org/docs/current/) traz os comandos e statements mais comuns do PostgreSQL.
plugins:
  - copyCode
---

## Primeiros passos

### Primeiros passos

Troque de usuário e conecte

```shell script
$ sudo -u postgres psql
```

Liste todos os bancos de dados

```shell script
postgres=# \l
```

Conecte ao banco de dados chamado postgres

```shell script
postgres=# \c postgres
```

Desconecte

```shell script
postgres=# \q
postgres=# \!
```

### Comandos psql {.col-span-2}

| Opção               | Exemplo                                      | Descrição                           |
| ------------------- | -------------------------------------------- | :---------------------------------- |
| `[-d] <database>`   | psql -d mydb                                 | Conecta ao banco de dados           |
| `-U`                | psql -U john mydb                            | Conecta como um usuário específico  |
| `-h` `-p`           | psql -h localhost -p 5432 mydb               | Conecta a um host/porta             |
| `-U` `-h` `-p` `-d` | psql -U admin -h 192.168.1.5 -p 2506 -d mydb | Conecta a um PostgreSQL remoto      |
| `-W`                | psql -W mydb                                 | Força a senha                       |
| `-c`                | psql -c '\c postgres' -c '\dt'               | Executa um statement ou comando SQL |
| `-H`                | psql -c "\l+" -H postgres > database.html    | Gera um relatório HTML              |
| `-l`                | psql -l                                      | Lista todos os bancos de dados      |
| `-f`                | psql mydb -f file.sql                        | Executa comandos de um arquivo      |
| `-V`                | psql -V                                      | Mostra a versão do psql             |

{.show-header}

### Obter ajuda

| -           | -                                      |
| ----------- | :------------------------------------- |
| `\h`        | Ajuda sobre a sintaxe dos comandos SQL |
| `\h` DELETE | Sintaxe do statement DELETE            |
| `\?`        | Lista de comandos do PostgreSQL        |

Execute no console do PostgreSQL

## Trabalhando com PostgreSQL

### Reconhecimento

Mostre a versão

```
SHOW SERVER_VERSION;
```

Mostre o status do sistema

```sql {.wrap}
\conninfo
```

Mostre as variáveis de ambiente

```sql {.wrap}
SHOW ALL;
```

Liste os usuários

```sql {.wrap}
SELECT rolname FROM pg_roles;
```

Mostre o usuário atual

```sql {.wrap}
SELECT current_user;
```

Mostre as permissões do usuário atual

```
\du
```

Mostre o banco de dados atual

```sql {.wrap}
SELECT current_database();
```

Mostre todas as tabelas do banco de dados

```sql {.wrap}
\dt
```

Liste as funções

```sql {.wrap}
\df <schema>
```

### Bancos de dados

Liste os bancos de dados

```sql {.wrap}
\l
```

Conecte ao banco de dados

```sql {.wrap}
\c <database_name>
```

Mostre o banco de dados atual

```sql {.wrap}
SELECT current_database();
```

[Criar banco de dados](http://www.postgresql.org/docs/current/static/sql-createdatabase.html)

```sql {.wrap}
CREATE DATABASE <database_name> WITH OWNER <username>;
```

[Excluir banco de dados](http://www.postgresql.org/docs/current/static/sql-dropdatabase.html)

```sql {.wrap}
DROP DATABASE IF EXISTS <database_name>;
```

[Renomear banco de dados](http://www.postgresql.org/docs/current/static/sql-alterdatabase.html)

```sql {.wrap}
ALTER DATABASE <old_name> RENAME TO <new_name>;
```

### Tabelas

Liste as tabelas do banco de dados atual

```sql {.wrap}
\dt

SELECT table_schema,table_name FROM information_schema.tables ORDER BY table_schema,table_name;
```

Liste as tabelas globalmente

```sql {.wrap}
\dt *.*.

SELECT * FROM pg_catalog.pg_tables
```

Liste o schema da tabela

```sql {.wrap}
\d <table_name>
\d+ <table_name>

SELECT column_name, data_type, character_maximum_length
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = '<table_name>';
```

[Criar tabela](http://www.postgresql.org/docs/current/static/sql-createtable.html)

```sql {.wrap}
CREATE TABLE <table_name>(
  <column_name> <column_type>,
  <column_name> <column_type>
);
```

Crie uma tabela com uma primary key auto-incremental

```sql {.wrap}
CREATE TABLE <table_name> (
  <column_name> SERIAL PRIMARY KEY
);
```

[Excluir tabela](http://www.postgresql.org/docs/current/static/sql-droptable.html)

```sql {.wrap}
DROP TABLE IF EXISTS <table_name> CASCADE;
```

### Permissões

Torne-se o usuário postgres, caso receba erros de permissão

```shell
sudo su - postgres
psql
```

[Conceda](http://www.postgresql.org/docs/current/static/sql-grant.html) todas as permissões no banco de dados

```sql {.wrap}
GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <user_name>;
```

Conceda permissões de conexão no banco de dados

```sql {.wrap}
GRANT CONNECT ON DATABASE <db_name> TO <user_name>;
```

Conceda permissões no schema

```sql {.wrap}
GRANT USAGE ON SCHEMA public TO <user_name>;
```

Conceda permissões para funções

```sql {.wrap}
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO <user_name>;
```

Conceda permissões de select, update, insert e delete em todas as tabelas

```sql {.wrap}
GRANT SELECT, UPDATE, INSERT ON ALL TABLES IN SCHEMA public TO <user_name>;
```

Conceda permissões em uma tabela

```sql {.wrap}
GRANT SELECT, UPDATE, INSERT ON <table_name> TO <user_name>;
```

Conceda permissão de select em uma tabela

```sql {.wrap}
GRANT SELECT ON ALL TABLES IN SCHEMA public TO <user_name>;
```

### Colunas

[Adicionar coluna](http://www.postgresql.org/docs/current/static/sql-altertable.html)

```sql {.wrap}
ALTER TABLE <table_name> IF EXISTS
ADD <column_name> <data_type> [<constraints>];
```

Atualizar coluna

```sql {.wrap}
ALTER TABLE <table_name> IF EXISTS
ALTER <column_name> TYPE <data_type> [<constraints>];
```

Excluir coluna

```sql {.wrap}
ALTER TABLE <table_name> IF EXISTS
DROP <column_name>;
```

Altere a coluna para ser uma primary key auto-incremental

```sql {.wrap}
ALTER TABLE <table_name>
ADD COLUMN <column_name> SERIAL PRIMARY KEY;
```

Insira em uma tabela com uma primary key auto-incremental

```sql {.wrap}
INSERT INTO <table_name>
VALUES (DEFAULT, <value1>);


INSERT INTO <table_name> (<column1_name>,<column2_name>)
VALUES ( <value1>,<value2> );
```

### Dados

[Selecione](http://www.postgresql.org/docs/current/static/sql-select.html) todos os dados

```sql {.wrap}
SELECT * FROM <table_name>;
```

Leia uma linha de dados

```sql {.wrap}
SELECT * FROM <table_name> LIMIT 1;
```

Pesquise dados

```sql {.wrap}
SELECT * FROM <table_name> WHERE <column_name> = <value>;
```

[Insira](http://www.postgresql.org/docs/current/static/sql-insert.html) dados

```sql {.wrap}
INSERT INTO <table_name> VALUES( <value_1>, <value_2> );
```

[Atualize](http://www.postgresql.org/docs/current/static/sql-update.html) dados

```sql {.wrap}
UPDATE <table_name>
SET <column_1> = <value_1>, <column_2> = <value_2>
WHERE <column_1> = <value>;
```

[Exclua](http://www.postgresql.org/docs/current/static/sql-delete.html) todos os dados

```sql {.wrap}
DELETE FROM <table_name>;
```

Exclua dados específicos

```sql {.wrap}
DELETE FROM <table_name>
WHERE <column_name> = <value>;
```

### Usuários

Liste as roles

```sql {.wrap}
SELECT rolname FROM pg_roles;
```

[Criar usuário](http://www.postgresql.org/docs/current/static/sql-createuser.html)

```sql {.wrap}
CREATE USER <user_name> WITH PASSWORD '<password>';
```

[Excluir usuário](http://www.postgresql.org/docs/current/static/sql-dropuser.html)

```sql {.wrap}
DROP USER IF EXISTS <user_name>;
```

[Alterar](http://www.postgresql.org/docs/current/static/sql-alterrole.html) a senha do usuário

```sql {.wrap}
ALTER ROLE <user_name> WITH PASSWORD '<password>';
```

### Schema

Liste os schemas

```sql {.wrap}
\dn

SELECT schema_name FROM information_schema.schemata;

SELECT nspname FROM pg_catalog.pg_namespace;
```

[Criar schema](http://www.postgresql.org/docs/current/static/sql-createschema.html)

```sql {.wrap}
CREATE SCHEMA IF NOT EXISTS <schema_name>;
```

[Excluir schema](http://www.postgresql.org/docs/current/static/sql-dropschema.html)

```sql {.wrap}
DROP SCHEMA IF EXISTS <schema_name> CASCADE;
```

### Datas

Mostre a [data atual](https://www.postgresql.org/docs/15/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT) no formato YYYY-MM-DD

```sql {.wrap}
SELECT current_date;
```

Calcule a
[idade](<https://www.postgresql.org/docs/15/functions-datetime.html#:~:text=age%20(%20timestamp%2C%20timestamp%20)%20%E2%86%92%20interval>)
entre duas datas

```sql {.wrap}
SELECT age(timestamp, timestamp);
```

Mostre a [hora atual](https://www.postgresql.org/docs/15/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT) com fuso
horário

```sql {.wrap}
SELECT current_time;
```

[Crie](<https://www.postgresql.org/docs/15/functions-datetime.html#:~:text=make_date%20(%20year%20int%2C%20month%20int%2C%20day%20int%20)%20%E2%86%92%20date>)
datas usando inteiros

```sql {.wrap}
SELECT make_date(2021,03,25);
```

## Comandos do PostgreSQL

### Tabelas

| -                | -                                          |
| ---------------- | :----------------------------------------- |
| `\d <table>`     | Descreve a tabela                          |
| `\d+ <table>`    | Descreve a tabela com detalhes             |
| `\dt`            | Lista as tabelas do schema atual           |
| `\dt *.*`        | Lista as tabelas de todos os schemas       |
| `\dt <schema>.*` | Lista as tabelas de um schema              |
| `\dp`            | Lista os privilégios de acesso das tabelas |
| `\det[+]`        | Lista as foreign tables                    |

### Buffer de query

| -            | -                                       |
| ------------ | :-------------------------------------- |
| `\e [FILE]`  | Edita o buffer de query (ou o arquivo)  |
| `\ef [FUNC]` | Edita a definição da função             |
| `\p`         | Mostra o conteúdo                       |
| `\r`         | Reinicia (limpa) o buffer de query      |
| `\s [FILE]`  | Exibe o histórico ou o salva em arquivo |
| `\w FILE`    | Grava o buffer de query em arquivo      |

### Informacional {.row-span-4}

| -               | -                                                 |
| --------------- | :------------------------------------------------ |
| `\l[+]`         | Lista todos os bancos de dados                    |
| `\dn[S+]`       | Lista os schemas                                  |
| `\di[S+]`       | Lista os indexes                                  |
| `\du[+]`        | Lista as roles                                    |
| `\ds[S+]`       | Lista as sequences                                |
| `\df[antw][S+]` | Lista as funções                                  |
| `\deu[+]`       | Lista os mapeamentos de usuário                   |
| `\dv[S+]`       | Lista as views                                    |
| `\dl`           | Lista os large objects                            |
| `\dT[S+]`       | Lista os tipos de dados                           |
| `\da[S]`        | Lista os aggregates                               |
| `\db[+]`        | Lista os tablespaces                              |
| `\dc[S+]`       | Lista as conversões                               |
| `\dC[+]`        | Lista os casts                                    |
| `\ddp`          | Lista os privilégios padrão                       |
| `\dd[S]`        | Mostra as descrições dos objetos                  |
| `\dD[S+]`       | Lista os domains                                  |
| `\des[+]`       | Lista os foreign servers                          |
| `\dew[+]`       | Lista os foreign-data wrappers                    |
| `\dF[+]`        | Lista as configurações de busca textual           |
| `\dFd[+]`       | Lista os dicionários de busca textual             |
| `\dFp[+]`       | Lista os parsers de busca textual                 |
| `\dFt[+]`       | Lista os templates de busca textual               |
| `\dL[S+]`       | Lista as linguagens procedurais                   |
| `\do[S]`        | Lista os operadores                               |
| `\dO[S+]`       | Lista as collations                               |
| `\drds`         | Lista as configurações de role por banco de dados |
| `\dx[+]`        | Lista as extensions                               |

`S`: mostra objetos de sistema, `+`: detalhes adicionais

### Conexão

| -                      | -                                      |
| ---------------------- | :------------------------------------- |
| `\c [DBNAME]`          | Conecta a um novo banco de dados       |
| `\encoding [ENCODING]` | Mostra ou define o encoding do cliente |
| `\password [USER]`     | Altera a senha                         |
| `\conninfo`            | Exibe informações                      |

### Formatação

| -                         | -                                                              |
| ------------------------- | :------------------------------------------------------------- |
| `\a`                      | Alterna entre não alinhado e alinhado                          |
| `\C [STRING]`             | Define o título da tabela, ou remove se vazio                  |
| `\f [STRING]`             | Mostra ou define o separador de campos para saída não alinhada |
| `\H`                      | Alterna o modo de saída HTML                                   |
| <code>\t [on\|off]</code> | Mostra apenas as linhas                                        |
| `\T [STRING]`             | Define ou remove os atributos da tag HTML \<table\>            |
| <code>\x [on\|off]</code> | Alterna a saída expandida                                      |

### Entrada/Saída

| -                 | -                                                                    |
| ----------------- | :------------------------------------------------------------------- |
| `\copy ...`       | Importa/exporta tabela<br> _Veja também:_ [copy](#import-export-csv) |
| `\echo [STRING]`  | Imprime uma string                                                   |
| `\i FILE`         | Executa um arquivo                                                   |
| `\o [FILE]`       | Exporta todos os resultados para um arquivo                          |
| `\qecho [STRING]` | String para o stream de saída                                        |

### Variáveis

| -                     | -                                                               |
| --------------------- | :-------------------------------------------------------------- |
| `\prompt [TEXT] NAME` | Define uma variável                                             |
| `\set [NAME [VALUE]]` | Define uma variável _(ou lista todas se não houver parâmetros)_ |
| `\unset NAME`         | Exclui a variável                                               |

### Diversos

| -                              | -                          |
| ------------------------------ | :------------------------- |
| `\cd [DIR]`                    | Muda o diretório           |
| <code>\timing [on\|off]</code> | Alterna a medição de tempo |
| `\! [COMMAND]`                 | Executa no shell           |
| `\! ls -l`                     | Lista tudo no shell        |

### Large Objects

- `\lo_export LOBOID FILE`
- `\lo_import FILE [COMMENT]`
- `\lo_list`
- `\lo_unlink LOBOID`

{.marker-none}

## Diversos

### Backup

Use pg_dumpall para fazer backup de todos os bancos de dados

```shell script
$ pg_dumpall -U postgres > all.sql
```

Use pg_dump para fazer backup de um banco de dados

```shell script
$ pg_dump -d mydb -f mydb_backup.sql
```

| -    | -                                               |
| ---- | :---------------------------------------------- |
| `-a` | Despeja apenas os dados, não o schema           |
| `-s` | Despeja apenas o schema, sem dados              |
| `-c` | Exclui o banco de dados antes de recriá-lo      |
| `-C` | Cria o banco de dados antes de restaurar        |
| `-t` | Despeja apenas a(s) tabela(s) indicada(s)       |
| `-F` | Formato (`c`: custom, `d`: directory, `t`: tar) |

Use `pg_dump -?` para obter a lista completa de opções

### Restauração

Restaure um banco de dados com psql

```shell script
$ psql -U user mydb < mydb_backup.sql
```

Restaure um banco de dados com pg_restore

```shell script
$ pg_restore -d mydb mydb_backup.sql -c
```

| -    | -                                                                             |
| ---- | :---------------------------------------------------------------------------- |
| `-U` | Especifica um usuário do banco de dados                                       |
| `-c` | Exclui o banco de dados antes de recriá-lo                                    |
| `-C` | Cria o banco de dados antes de restaurar                                      |
| `-e` | Encerra se um erro for encontrado                                             |
| `-F` | Formato (`c`: custom, `d`: directory, `t`: tar, `p`: plain text sql(default)) |

{.marker-none}

Use `pg_restore -?` para obter a lista completa de opções

### Acesso remoto

Obtenha a localização do postgresql.conf

```shell script
$ psql -U postgres -c 'SHOW config_file'
```

Acrescente ao postgresql.conf

```shell script
listen_addresses = '*'
```

Acrescente ao pg_hba.conf (mesmo local do postgresql.conf)

```shell script
host  all  all  0.0.0.0/0  md5
host  all  all  ::/0       md5
```

Reinicie o servidor PostgreSQL

```shell script
$ sudo systemctl restart postgresql
```

### Import/Export de CSV

Exporte uma tabela para um arquivo CSV

```shell script
\copy table TO '<path>' CSV
\copy table(col1,col1) TO '<path>' CSV
\copy (SELECT...) TO '<path>' CSV
```

Importe um arquivo CSV para uma tabela

```shell script
\copy table FROM '<path>' CSV
\copy table(col1,col1) FROM '<path>' CSV
```

Veja também: [Copy](https://www.postgresql.org/docs/current/sql-copy.html)

## Veja também

- [Posgres-cheatsheet](https://gist.github.com/apolloclark/ea5466d5929e63043dcf#posgres-cheatsheet) _(gist.github.com)_
