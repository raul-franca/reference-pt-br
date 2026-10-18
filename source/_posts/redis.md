---
title: Redis
background: bg-[#c13b2c]
tags:
  - cache
categories:
  - Banco de Dados
date: 2020-12-26 19:33:15
intro: |
  Este é um cheat sheet de referência rápida do [redis](https://redis.io/) que lista exemplos de comandos redis
plugins:
  - copyCode
---

## Primeiros passos

### Primeiros passos

Inicie o Redis

```shell script
$ redis-server
```

Conecte-se ao redis (cliente Redis CLI)

```shell script
$ redis-cli
```

Conecte-se ao redis (telnet)

```shell script
$ telnet 127.0.0.1 6379
```

### Hello World

#### Ping

```shell script
redis> PING
PONG
```

#### Hello World

```shell script
redis> SET mykey "Hello world"
OK
redis> GET mykey
"Hello world"
```

### Tipos de dados básicos

- [Strings](#redis-string-command)
- [Lists](#redis-list-command)
- [Hashes](#redis-hash-command)
- [Sets](#redis-set-command)
- [Sorted Sets](#redis-sorted-set-command)

O Redis oferece suporte a 5 tipos de dados básicos

## Comando Redis String{.cols-3}

### APPEND

```{.wrap}
APPEND key value
```

#### Exemplo

```shell script
redis> EXISTS mykey
(integer) 0
redis> APPEND mykey "Hello"
(integer) 5
redis> APPEND mykey " World"
(integer) 11
redis> GET mykey
"Hello World"
```

Anexa um valor a uma chave

### BITCOUNT

```{.wrap}
BITCOUNT key [start end]
```

#### Exemplo

```shell script
redis> SET mykey "foobar"
"OK"
redis> BITCOUNT mykey
(integer) 26
redis> BITCOUNT mykey 0 0
(integer) 4
redis> BITCOUNT mykey 1 1
(integer) 6
```

Conta os bits definidos em uma string

### BITFIELD

```{.wrap}
BITFIELD key [GET type offset] [SET type offset value] [INCRBY type offset increment] [OVERFLOW WRAP|SAT|FAIL]
```

#### Exemplo

```shell script
redis> BITFIELD mykey INCRBY i5 100 1 GET u4 0
1) (integer) 1
2) (integer) 0
```

Executa operações inteiras arbitrárias de bitfield em strings

### BITOP

```{.wrap}
BITOP operation destkey key [key ...]
```

#### Exemplo

```shell script
redis> SET key1 "foobar"
"OK"
redis> SET key2 "abcdef"
"OK"
redis> BITOP AND dest key1 key2
(integer) 6
redis> GET dest
"`bc`ab"
```

Executa operações bit a bit entre strings

### BITPOS

```{.wrap}
BITPOS key bit [start] [end]
```

#### Exemplo

```shell script
redis> SET mykey "\xff\xf0\x00"
"OK"
redis> BITPOS mykey 0
(integer) 12
redis> SET mykey "\x00\xff\xf0"
"OK"
redis> BITPOS mykey 1 0
(integer) 8
redis> BITPOS mykey 1 2
(integer) 16
redis> set mykey "\x00\x00\x00"
"OK"
redis> BITPOS mykey 1
(integer) -1
```

Encontra o primeiro bit definido ou limpo em uma string

### DECR

```{.wrap}
DECR key
```

#### Exemplo

```shell script
redis> SET mykey "10"
"OK"
redis> DECR mykey
(integer) 9
redis> SET mykey "234293482390480948029348230948"
"OK"
redis> DECR mykey
ERR ERR value is not an integer or out of range
```

Decrementa em um o valor inteiro de uma chave

### DECRBY

```{.wrap}
DECRBY key decrement
```

#### Exemplo

```shell script
redis> SET mykey "10"
"OK"
redis> DECRBY mykey 3
(integer) 7
```

Decrementa o valor inteiro de uma chave pelo número informado

### GET

```{.wrap}
GET key
```

#### Exemplo

```shell script
redis> GET nonexisting
(nil)
redis> SET mykey "Hello"
"OK"
redis> GET mykey
"Hello"
```

Obtém o valor de uma chave

### GETBIT

```{.wrap}
GETBIT key offset
```

#### Exemplo

```shell script
redis> SETBIT mykey 7 1
(integer) 0
redis> GETBIT mykey 0
(integer) 0
redis> GETBIT mykey 7
(integer) 1
redis> GETBIT mykey 100
(integer) 0
```

Retorna o valor do bit no offset do valor string armazenado na chave

### GETRANGE

```{.wrap}
GETRANGE key start end
```

#### Exemplo

```shell script
redis> SET mykey "This is a string"
"OK"
redis> GETRANGE mykey 0 3
"This"
redis> GETRANGE mykey -3 -1
"ing"
redis> GETRANGE mykey 0 -1
"This is a string"
redis> GETRANGE mykey 10 100
"string"
```

Obtém uma substring da string armazenada em uma chave

### GETSET

```{.wrap}
GETSET key value
```

#### Exemplo

```shell script
redis> INCR mycounter
(integer) 1
redis> GETSET mycounter "0"
"1"
redis> GET mycounter
"0"
```

Define o valor string de uma chave e retorna o valor anterior

### INCR

```{.wrap}
INCR key
```

#### Exemplo

```shell script
redis> SET mykey "10"
"OK"
redis> INCR mykey
(integer) 11
redis> GET mykey
"11"
```

Incrementa em um o valor inteiro de uma chave

### MSETNX

```{.wrap}
MSETNX key value [key value ...]
```

#### Exemplo

```shell script
redis> MSETNX key1 "Hello" key2 "there"
(integer) 1
redis> MSETNX key2 "new" key3 "world"
(integer) 0
redis> MGET key1 key2 key3
1) "Hello"
2) "there"
3) (nil)
```

Define várias chaves com vários valores, somente se nenhuma das chaves existir

### INCRBYFLOAT

```{.wrap}
INCRBYFLOAT key increment
```

#### Exemplo

```shell script
redis> SET mykey 10.50
"OK"
redis> INCRBYFLOAT mykey 0.1
"10.6"
redis> INCRBYFLOAT mykey -5
"5.6"
redis> SET mykey 5.0e3
"OK"
redis> INCRBYFLOAT mykey 2.0e2
"5200"
```

Incrementa o valor float de uma chave pelo valor informado

### MGET

```{.wrap}
MGET key [key ...]
```

#### Exemplo

```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> MGET key1 key2 nonexisting
1) "Hello"
2) "World"
3) (nil)
```

Obtém os valores de todas as chaves informadas

### MSET

```{.wrap}
MSET key value [key value ...]
```

#### Exemplo

```shell script
redis> MSET key1 "Hello" key2 "World"
"OK"
redis> GET key1
"Hello"
redis> GET key2
"World"
```

Define várias chaves com vários valores

### INCRBY

```{.wrap}
INCRBY key increment
```

#### Exemplo

```shell script
redis> SET mykey "10"
"OK"
redis> INCRBY mykey 5
(integer) 15
```

Incrementa o valor inteiro de uma chave pelo valor informado

### PSETEX

```{.wrap}
PSETEX key milliseconds value
```

#### Exemplo

```shell script
redis> PSETEX mykey 1000 "Hello"
"OK"
redis> PTTL mykey
(integer) 1000
redis> GET mykey
"Hello"
```

Define o valor e a expiração de uma chave em milissegundos

### SET

```{.wrap}
SET key value [EX seconds|PX milliseconds|KEEPTTL] [NX|XX] [GET]
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> GET mykey
"Hello"
redis> SET anotherkey "will expire in a minute" EX 60
"OK"
```

Define o valor string de uma chave

### SETBIT

```{.wrap}
SETBIT key offset value
```

#### Exemplo

```shell script
redis> SETBIT mykey 7 1
(integer) 0
redis> SETBIT mykey 7 0
(integer) 1
redis> GET mykey
"\u0000"
```

Define ou limpa o bit no offset do valor string armazenado na chave

### SETEX

```{.wrap}
SETEX key seconds value
```

#### Exemplo

```shell script
redis> SETEX mykey 10 "Hello"
"OK"
redis> TTL mykey
(integer) 10
redis> GET mykey
"Hello"
```

Define o valor e a expiração de uma chave

### SETNX

```{.wrap}
SETNX key value
```

#### Exemplo

```shell script
redis> SETNX mykey "Hello"
(integer) 1
redis> SETNX mykey "World"
(integer) 0
redis> GET mykey
"Hello"
```

Define o valor de uma chave, somente se a chave não existir

### SETRANGE

```{.wrap}
SETRANGE key offset value
```

#### Exemplo

```shell script
redis> SET key1 "Hello World"
"OK"
redis> SETRANGE key1 6 "Redis"
(integer) 11
redis> GET key1
"Hello Redis"
```

Sobrescreve parte da string na chave a partir do offset especificado

### STRLEN

```{.wrap}
STRLEN key
```

#### Exemplo

```shell script
redis> SET mykey "Hello world"
"OK"
redis> STRLEN mykey
(integer) 11
redis> STRLEN nonexisting
(integer) 0
```

Obtém o comprimento do valor armazenado em uma chave

### STRALGO

```{.wrap}
STRALGO LCS algo-specific-argument [algo-specific-argument ...]
```

#### Exemplo

```shell script
redis> STRALGO LCS KEYS key1 key2 IDX
1) "matches"
2) 1) 1) 1) (integer) 4
         2) (integer) 7
      2) 1) (integer) 5
         2) (integer) 8
   2) 1) 1) (integer) 2
         2) (integer) 3
      2) 1) (integer) 0
         2) (integer) 1
3) "len"
4) (integer) 6
```

Executa algoritmos (atualmente LCS) em strings

## Comando Redis Set

### SADD

```{.wrap}
SADD key member [member ...]
```

#### Exemplo

```shell script
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SADD myset "World"
(integer) 0
redis> SMEMBERS myset
1) "Hello"
2) "World"
```

Adiciona um ou mais membros a um set

### SCARD

```{.wrap}
SCARD key
```

#### Exemplo

```shell script
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SCARD myset
(integer) 2
```

Obtém o número de membros de um set

### SDIFF

```{.wrap}
SDIFF key [key ...]
```

#### Exemplo

```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SDIFF key1 key2
1) "a"
2) "b"
```

Subtrai vários sets

### SDIFFSTORE

```{.wrap}
SDIFFSTORE destination key [key ...]
```

#### Exemplo

```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SDIFFSTORE key key1 key2
(integer) 2
redis> SMEMBERS key
1) "a"
2) "b"
```

Subtrai vários sets e armazena o set resultante em uma chave

### SINTER

```{.wrap}
SINTER key [key ...]
```

#### Exemplo

```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SINTER key1 key2
1) "c"
```

Faz a interseção de vários sets

### SINTERSTORE

```{.wrap}
SINTERSTORE destination key [key ...]
```

#### Exemplo

```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SINTERSTORE key key1 key2
(integer) 1
redis> SMEMBERS key
1) "c"
```

Faz a interseção de vários sets e armazena o set resultante em uma chave

### SISMEMBER

```{.wrap}
SISMEMBER key member
```

#### Exemplo

```shell script
redis> SADD myset "one"
(integer) 1
redis> SISMEMBER myset "one"
(integer) 1
redis> SISMEMBER myset "two"
(integer) 0
```

Determina se um determinado valor é membro de um set

### SMISMEMBER

```{.wrap}
SMISMEMBER key member [member ...]
```

#### Exemplo

```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "one"
(integer) 0
redis> SMISMEMBER myset "one" "notamember"
1) (integer) 1
2) (integer) 0
```

Retorna a associação dos elementos informados a um set

### SMEMBERS

```{.wrap}
SMEMBERS key
```

#### Exemplo

```shell script
redis> SADD myset "Hello"
(integer) 1
redis> SADD myset "World"
(integer) 1
redis> SMEMBERS myset
1) "Hello"
2) "World"
```

Obtém todos os membros de um set

### SMOVE

```{.wrap}
SMOVE source destination member
```

#### Exemplo

```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "two"
(integer) 1
redis> SADD myotherset "three"
(integer) 1
redis> SMOVE myset myotherset "two"
(integer) 1
redis> SMEMBERS myset
1) "one"
redis> SMEMBERS myotherset
1) "two"
2) "three"
```

Move um membro de um set para outro

### SPOP

```{.wrap}
SPOP key [count]
```

#### Exemplo

```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "two"
(integer) 1
redis> SADD myset "three"
(integer) 1
redis> SPOP myset
"two"
redis> SMEMBERS myset
1) "one"
2) "three"
redis> SADD myset "four"
(integer) 1
redis> SADD myset "five"
(integer) 1
redis> SPOP myset 3
1) "four"
2) "five"
3) "three"
redis> SMEMBERS myset
1) "one"
```

Remove e retorna um ou vários membros aleatórios de um set

### SRANDMEMBER

```{.wrap}
SRANDMEMBER key [count]
```

#### Exemplo

```shell script
redis> SADD myset one two three
(integer) 3
redis> SRANDMEMBER myset
"three"
redis> SRANDMEMBER myset 2
1) "two"
2) "three"
redis> SRANDMEMBER myset -5
1) "one"
2) "two"
3) "three"
4) "three"
5) "one"
```

Obtém um ou vários membros aleatórios de um set

### SREM

```{.wrap}
SREM key member [member ...]
```

#### Exemplo

```shell script
redis> SADD myset "one"
(integer) 1
redis> SADD myset "two"
(integer) 1
redis> SADD myset "three"
(integer) 1
redis> SREM myset "one"
(integer) 1
redis> SREM myset "four"
(integer) 0
redis> SMEMBERS myset
1) "two"
2) "three"
```

Remove um ou mais membros de um set

### SUNION

```{.wrap}
SUNION key [key ...]
```

#### Exemplo

```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SUNION key1 key2
1) "a"
2) "c"
3) "e"
4) "b"
5) "d"
```

Une vários sets

### SUNIONSTORE

```{.wrap}
SUNIONSTORE destination key [key ...]
```

#### Exemplo

```shell script
redis> SADD key1 "a"
(integer) 1
redis> SADD key1 "b"
(integer) 1
redis> SADD key1 "c"
(integer) 1
redis> SADD key2 "c"
(integer) 1
redis> SADD key2 "d"
(integer) 1
redis> SADD key2 "e"
(integer) 1
redis> SUNIONSTORE key key1 key2
(integer) 5
redis> SMEMBERS key
1) "a"
2) "c"
3) "e"
4) "b"
5) "d"
```

Une vários sets e armazena o set resultante em uma chave

## Comando Redis List

### Diversos

| -                                                   | -                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [BRPOPLPUSH ](https://redis.io/commands/brpoplpush) | Remove um elemento de uma list, insere em outra list e o retorna; ou bloqueia até que um esteja disponível |
| [BLMOVE ](https://redis.io/commands/blmove)         | Remove um elemento de uma list, insere em outra list e o retorna; ou bloqueia até que um esteja disponível |

### BLPOP

```{.wrap}
BLPOP key [key ...] timeout
```

#### Exemplo

```shell script
redis> DEL list1 list2
(integer) 0
redis> RPUSH list1 a b c
(integer) 3
redis> BLPOP list1 list2 0
1) "list1"
2) "a"
```

Remove e obtém o primeiro elemento de uma list, ou bloqueia até que um esteja disponível |

### BRPOP

```{.wrap}
BRPOP key [key ...] timeout
```

#### Exemplo

```shell script
redis> DEL list1 list2
(integer) 0
redis> RPUSH list1 a b c
(integer) 3
redis> BRPOP list1 list2 0
1) "list1"
2) "c"
```

Remove e obtém o último elemento de uma list, ou bloqueia até que um esteja disponível |

### LINDEX

```{.wrap}
LINDEX key index
```

#### Exemplo

```shell script
redis> LPUSH mylist "World"
(integer) 1
redis> LPUSH mylist "Hello"
(integer) 2
redis> LINDEX mylist 0
"Hello"
redis> LINDEX mylist -1
"World"
redis> LINDEX mylist 3
(nil)
```

Obtém um elemento de uma list pelo seu índice

### LINSERT

```{.wrap}
LINSERT key BEFORE|AFTER pivot element
```

#### Exemplo

```shell script
redis> RPUSH mylist "Hello"
(integer) 1
redis> RPUSH mylist "World"
(integer) 2
redis> LINSERT mylist BEFORE "World" "There"
(integer) 3
redis> LRANGE mylist 0 -1
1) "Hello"
2) "There"
3) "World"
```

Insere um elemento antes ou depois de outro elemento em uma list

### LLEN

```{.wrap}
LLEN key
```

#### Exemplo

```shell script
redis> LPUSH mylist "World"
(integer) 1
redis> LPUSH mylist "Hello"
(integer) 2
redis> LLEN mylist
(integer) 2
```

Obtém o comprimento de uma list

### LPOP

```{.wrap}
LPOP key [count]
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LPOP mylist
"one"
redis> LRANGE mylist 0 -1
1) "two"
2) "three"
```

Remove e obtém os primeiros elementos de uma list

### LPOS

```{.wrap}
LPOS key element [RANK rank] [COUNT num-matches] [MAXLEN len]
```

#### Exemplo

```shell script
redis> RPUSH mylist a b c d 1 2 3 4 3 3 3
(integer) 11
redis> LPOS mylist 3
(integer) 6
redis> LPOS mylist 3 COUNT 0 RANK 2
1) (integer) 8
2) (integer) 9
3) (integer) 10
```

Retorna o índice dos elementos correspondentes em uma list

### LPUSH

```{.wrap}
LPUSH key element [element ...]
```

#### Exemplo

```shell script
redis> LPUSH mylist "world"
(integer) 1
redis> LPUSH mylist "hello"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "world"
```

Adiciona um ou vários elementos no início de uma list

### LPUSHX

```{.wrap}
LPUSHX key element [element ...]
```

#### Exemplo

```shell script
redis> LPUSH mylist "World"
(integer) 1
redis> LPUSHX mylist "Hello"
(integer) 2
redis> LPUSHX myotherlist "Hello"
(integer) 0
redis> LRANGE mylist 0 -1
1) "Hello"
2) "World"
redis> LRANGE myotherlist 0 -1
(empty list or set)
```

Adiciona um elemento no início de uma list, somente se a list existir

### LRANGE

```{.wrap}
LRANGE key start stop
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LRANGE mylist 0 0
1) "one"
redis> LRANGE mylist -3 2
1) "one"
2) "two"
3) "three"
redis> LRANGE mylist -100 100
1) "one"
2) "two"
3) "three"
redis> LRANGE mylist 5 10
(empty list or set)
```

Obtém um intervalo de elementos de uma list

### LREM

```{.wrap}
LREM key count element
```

#### Exemplo

```shell script
redis> RPUSH mylist "hello"
(integer) 1
redis> RPUSH mylist "hello"
(integer) 2
redis> RPUSH mylist "foo"
(integer) 3
redis> RPUSH mylist "hello"
(integer) 4
redis> LREM mylist -2 "hello"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "foo"
```

Remove elementos de uma list

### LSET

```{.wrap}
LSET key index element
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LSET mylist 0 "four"
"OK"
redis> LSET mylist -2 "five"
"OK"
redis> LRANGE mylist 0 -1
1) "four"
2) "five"
3) "three"
```

Define o valor de um elemento em uma list pelo seu índice

### LTRIM

```{.wrap}
LTRIM key start stop
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LTRIM mylist 1 -1
"OK"
redis> LRANGE mylist 0 -1
1) "two"
2) "three"
```

Reduz uma list ao intervalo especificado

### RPOP

```{.wrap}
RPOP key [count]
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> RPOP mylist
"three"
redis> LRANGE mylist 0 -1
1) "one"
2) "two"
```

Remove e obtém os últimos elementos de uma list

### RPOPLPUSH

```{.wrap}
RPOPLPUSH source destination
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> RPOPLPUSH mylist myotherlist
"three"
redis> LRANGE mylist 0 -1
1) "one"
2) "two"
redis> LRANGE myotherlist 0 -1
1) "three"
```

Remove o último elemento de uma list, o adiciona no início de outra list e o retorna

### LMOVE

```{.wrap}
LMOVE source destination LEFT|RIGHT LEFT|RIGHT
```

#### Exemplo

```shell script
redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> LMOVE mylist myotherlist RIGHT LEFT
"three"
redis> LMOVE mylist myotherlist LEFT RIGHT
"one"
redis> LRANGE mylist 0 -1
1) "two"
redis> LRANGE myotherlist 0 -1
1) "three"
2) "one"
```

Remove um elemento de uma list, o insere em outra list e o retorna

### RPUSH

```{.wrap}
RPUSH key element [element ...]
```

#### Exemplo

```shell script
redis> RPUSH mylist "hello"
(integer) 1
redis> RPUSH mylist "world"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "world"
```

Adiciona um ou vários elementos ao final de uma list

### RPUSHX

```{.wrap}
RPUSHX key element [element ...]
```

#### Exemplo

```shell script
redis> RPUSH mylist "Hello"
(integer) 1
redis> RPUSHX mylist "World"
(integer) 2
redis> RPUSHX myotherlist "World"
(integer) 0
redis> LRANGE mylist 0 -1
1) "Hello"
2) "World"
redis> LRANGE myotherlist 0 -1
(empty list or set)
```

Adiciona um elemento ao final de uma list, somente se a list existir

## Comando Redis Hash

### HDEL

```{.wrap}
HDEL key field [field ...]
```

#### Exemplo

```shell script
redis> HSET myhash field1 "foo"
(integer) 1
redis> HDEL myhash field1
(integer) 1
redis> HDEL myhash field2
(integer) 0
```

Exclui um ou mais campos de um hash

### HEXISTS

```{.wrap}
HEXISTS key field
```

#### Exemplo

```shell script
redis> HSET myhash field1 "foo"
(integer) 1
redis> HEXISTS myhash field1
(integer) 1
redis> HEXISTS myhash field2
(integer) 0
```

Determina se um campo de hash existe

### HGET

```{.wrap}
HGET key field
```

#### Exemplo

```shell script
redis> HSET myhash field1 "foo"
(integer) 1
redis> HGET myhash field1
"foo"
redis> HGET myhash field2
(nil)
```

Obtém o valor de um campo de hash

### HGETALL

```{.wrap}
HGETALL key
```

#### Exemplo

```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HGETALL myhash
1) "field1"
2) "Hello"
3) "field2"
4) "World"
```

Obtém todos os campos e valores de um hash

### HINCRBY

```{.wrap}
HINCRBY key field increment
```

#### Exemplo

```shell script
redis> HSET myhash field 5
(integer) 1
redis> HINCRBY myhash field 1
(integer) 6
redis> HINCRBY myhash field -1
(integer) 5
redis> HINCRBY myhash field -10
(integer) -5
```

Incrementa o valor inteiro de um campo de hash pelo número informado

### HINCRBYFLOAT

```{.wrap}
HINCRBYFLOAT key field increment
```

#### Exemplo

```shell script
redis> HSET mykey field 10.50
(integer) 1
redis> HINCRBYFLOAT mykey field 0.1
"10.6"
redis> HINCRBYFLOAT mykey field -5
"5.6"
redis> HSET mykey field 5.0e3
(integer) 0
redis> HINCRBYFLOAT mykey field 2.0e2
"5200"
```

Incrementa o valor float de um campo de hash pelo valor informado

### HKEYS

```{.wrap}
HKEYS key
```

#### Exemplo

```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HKEYS myhash
1) "field1"
2) "field2"
```

Obtém todos os campos de um hash

### HLEN

```{.wrap}
HLEN key
```

#### Exemplo

```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HLEN myhash
(integer) 2
```

Obtém o número de campos de um hash

### HMGET

```{.wrap}
HMGET key field [field ...]
```

#### Exemplo

```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HMGET myhash field1 field2 nofield
1) "Hello"
2) "World"
3) (nil)
```

Obtém os valores de todos os campos de hash informados

### HMSET

```{.wrap}
HMSET key field value [field value ...]
```

#### Exemplo

```shell script
redis> HMSET myhash field1 "Hello" field2 "World"
"OK"
redis> HGET myhash field1
"Hello"
redis> HGET myhash field2
"World"
```

Define vários campos de hash com vários valores

### HSET

```{.wrap}
HSET key field value [field value ...]
```

#### Exemplo

```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HGET myhash field1
"Hello"
```

Define o valor string de um campo de hash

### HSETNX

```{.wrap}
HSETNX key field value
```

#### Exemplo

```shell script
redis> HSETNX myhash field "Hello"
(integer) 1
redis> HSETNX myhash field "World"
(integer) 0
redis> HGET myhash field
"Hello"
```

Define o valor de um campo de hash, somente se o campo não existir

### HSTRLEN

```{.wrap}
HSTRLEN key field
```

#### Exemplo

```shell script
redis> HMSET myhash f1 HelloWorld f2 99 f3 -256
"OK"
redis> HSTRLEN myhash f1
(integer) 10
redis> HSTRLEN myhash f2
(integer) 2
redis> HSTRLEN myhash f3
(integer) 4
```

Obtém o comprimento do valor de um campo de hash

### HVALS

```{.wrap}
HVALS key
```

#### Exemplo

```shell script
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HVALS myhash
1) "Hello"
2) "World"
```

Obtém todos os valores de um hash

## Comando Redis Sorted Set

### BZPOPMIN

```{.wrap}
BZPOPMIN key [key ...] timeout
```

#### Exemplo

```shell script
redis> DEL zset1 zset2
(integer) 0
redis> ZADD zset1 0 a 1 b 2 c
(integer) 3
redis> BZPOPMIN zset1 zset2 0
1) "zset1"
2) "a"
3) "0"
```

Remove e retorna o membro com a menor pontuação de um ou mais sorted sets, ou bloqueia até que um esteja disponível

### BZPOPMAX

```{.wrap}
BZPOPMAX key [key ...] timeout
```

#### Exemplo

```shell script
redis> DEL zset1 zset2
(integer) 0
redis> ZADD zset1 0 a 1 b 2 c
(integer) 3
redis> BZPOPMAX zset1 zset2 0
1) "zset1"
2) "c"
3) "2"
```

Remove e retorna o membro com a maior pontuação de um ou mais sorted sets, ou bloqueia até que um esteja disponível

### ZADD {.row-span-2}

```{.wrap}
ZADD key [NX|XX] [GT|LT] [CH] [INCR] score member [score member ...]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 1 "uno"
(integer) 1
redis> ZADD myzset 2 "two" 3 "three"
(integer) 2
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "one"
2) "1"
3) "uno"
4) "1"
5) "two"
6) "2"
7) "three"
8) "3"
```

Adiciona um ou mais membros a um sorted set, ou atualiza sua pontuação se já existir

### ZCARD

```{.wrap}
ZCARD key
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZCARD myzset
(integer) 2
```

Obtém o número de membros de um sorted set

### ZSCORE

```{.wrap}
ZSCORE key member
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZSCORE myzset "one"
"1"
```

Obtém a pontuação associada ao membro informado em um sorted set

### ZCOUNT

```{.wrap}
ZCOUNT key min max
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZCOUNT myzset -inf +inf
(integer) 3
redis> ZCOUNT myzset (1 3
(integer) 2
```

Conta os membros de um sorted set com pontuações dentro dos valores informados

### ZDIFF

```{.wrap}
ZDIFF numkeys key [key ...] [WITHSCORES]
```

#### Exemplo

```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset1 3 "three"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZDIFF 2 zset1 zset2
1) "three"
redis> ZDIFF 2 zset1 zset2 WITHSCORES
1) "three"
2) "3"
```

Subtrai vários sorted sets

### ZDIFFSTORE

```{.wrap}
ZDIFFSTORE destination numkeys key [key ...]
```

#### Exemplo

```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset1 3 "three"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZDIFFSTORE out 2 zset1 zset2
(integer) 1
redis> ZRANGE out 0 -1 WITHSCORES
1) "three"
2) "3"
```

Subtrai vários sorted sets e armazena o sorted set resultante em uma nova chave

### ZINCRBY

```{.wrap}
ZINCRBY key increment member
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZINCRBY myzset 2 "one"
"3"
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "two"
2) "2"
3) "one"
4) "3"
```

Incrementa a pontuação de um membro em um sorted set

### ZINTER

```{.wrap}
ZINTER numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] [WITHSCORES]
```

#### Exemplo

```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZINTER 2 zset1 zset2
1) "one"
2) "two"
redis> ZINTER 2 zset1 zset2 WITHSCORES
1) "one"
2) "2"
3) "two"
4) "4"
```

Faz a interseção de vários sorted sets

### ZINTERSTORE

```{.wrap}
ZINTERSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]
```

#### Exemplo

```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZINTERSTORE out 2 zset1 zset2 WEIGHTS 2 3
(integer) 2
redis> ZRANGE out 0 -1 WITHSCORES
1) "one"
2) "5"
3) "two"
4) "10"
```

Faz a interseção de vários sorted sets e armazena o sorted set resultante em uma nova chave

### ZLEXCOUNT

```{.wrap}
ZLEXCOUNT key min max
```

#### Exemplo

```shell script
redis> ZADD myzset 0 a 0 b 0 c 0 d 0 e
(integer) 5
redis> ZADD myzset 0 f 0 g
(integer) 2
redis> ZLEXCOUNT myzset - +
(integer) 7
redis> ZLEXCOUNT myzset [b [f
(integer) 5
```

Conta o número de membros de um sorted set dentro de um intervalo lexicográfico informado

### ZPOPMAX

```{.wrap}
ZPOPMAX key [count]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZPOPMAX myzset
1) "three"
2) "3"
```

Remove e retorna os membros com as maiores pontuações em um sorted set

### ZPOPMIN

```{.wrap}
ZPOPMIN key [count]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZPOPMIN myzset
1) "one"
2) "1"
```

Remove e retorna os membros com as menores pontuações em um sorted set

### ZRANGE

```{.wrap}
ZRANGE key start stop [WITHSCORES]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANGE myzset 0 -1
1) "one"
2) "two"
3) "three"
redis> ZRANGE myzset 2 3
1) "three"
redis> ZRANGE myzset -2 -1
1) "two"
2) "three"
```

Retorna um intervalo de membros de um sorted set, por índice

### ZRANGEBYLEX

```{.wrap}
ZRANGEBYLEX key min max [LIMIT offset count]
```

#### Exemplo

```shell script
redis> ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
(integer) 7
redis> ZRANGEBYLEX myzset - [c
1) "a"
2) "b"
3) "c"
redis> ZRANGEBYLEX myzset - (c
1) "a"
2) "b"
redis> ZRANGEBYLEX myzset [aaa (g
1) "b"
2) "c"
3) "d"
4) "e"
5) "f"
```

Retorna um intervalo de membros de um sorted set, por intervalo lexicográfico

### ZREVRANGEBYLEX

```{.wrap}
ZREVRANGEBYLEX key max min [LIMIT offset count]
```

#### Exemplo

```shell script
redis> ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
(integer) 7
redis> ZREVRANGEBYLEX myzset [c -
1) "c"
2) "b"
3) "a"
redis> ZREVRANGEBYLEX myzset (c -
1) "b"
2) "a"
redis> ZREVRANGEBYLEX myzset (g [aaa
1) "f"
2) "e"
3) "d"
4) "c"
5) "b"
```

Retorna um intervalo de membros de um sorted set, por intervalo lexicográfico, ordenado de strings maiores para menores.

### ZRANGEBYSCORE

```{.wrap}
ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANGEBYSCORE myzset -inf +inf
1) "one"
2) "two"
3) "three"
redis> ZRANGEBYSCORE myzset 1 2
1) "one"
2) "two"
redis> ZRANGEBYSCORE myzset (1 2
1) "two"
redis> ZRANGEBYSCORE myzset (1 (2
(empty list or set)
```

Retorna um intervalo de membros de um sorted set, por pontuação

### ZRANK

```{.wrap}
ZRANK key member
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANK myzset "three"
(integer) 2
redis> ZRANK myzset "four"
(nil)
```

Determina o índice de um membro em um sorted set

### ZREM

```{.wrap}
ZREM key member [member ...]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREM myzset "two"
(integer) 1
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "one"
2) "1"
3) "three"
4) "3"
```

Remove um ou mais membros de um sorted set

### ZREMRANGEBYLEX

```{.wrap}
ZREMRANGEBYLEX key min max
```

#### Exemplo

```shell script
redis> ZADD myzset 0 aaaa 0 b 0 c 0 d 0 e
(integer) 5
redis> ZADD myzset 0 foo 0 zap 0 zip 0 ALPHA 0 alpha
(integer) 5
redis> ZRANGE myzset 0 -1
1) "ALPHA"
 2) "aaaa"
 3) "alpha"
 4) "b"
 5) "c"
 6) "d"
 7) "e"
 8) "foo"
 9) "zap"
10) "zip"
redis> ZREMRANGEBYLEX myzset [alpha [omega
(integer) 6
redis> ZRANGE myzset 0 -1
1) "ALPHA"
2) "aaaa"
3) "zap"
4) "zip"
```

Remove todos os membros de um sorted set dentro do intervalo lexicográfico informado

### ZREMRANGEBYRANK

```{.wrap}
ZREMRANGEBYRANK key start stop
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREMRANGEBYRANK myzset 0 1
(integer) 2
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "three"
2) "3"
```

Remove todos os membros de um sorted set dentro dos índices informados

### ZREMRANGEBYSCORE

```{.wrap}
ZREMRANGEBYSCORE key min max
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREMRANGEBYSCORE myzset -inf (2
(integer) 1
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "two"
2) "2"
3) "three"
4) "3"
```

Remove todos os membros de um sorted set dentro das pontuações informadas

### ZREVRANGE

```{.wrap}
ZREVRANGE key start stop [WITHSCORES]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANGE myzset 0 -1
1) "three"
2) "two"
3) "one"
redis> ZREVRANGE myzset 2 3
1) "one"
redis> ZREVRANGE myzset -2 -1
1) "two"
2) "one"
```

Retorna um intervalo de membros de um sorted set, por índice, com pontuações ordenadas da maior para a menor

### ZREVRANGEBYSCORE

```{.wrap}
ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANGEBYSCORE myzset +inf -inf
1) "three"
2) "two"
3) "one"
redis> ZREVRANGEBYSCORE myzset 2 1
1) "two"
2) "one"
redis> ZREVRANGEBYSCORE myzset 2 (1
1) "two"
redis> ZREVRANGEBYSCORE myzset (2 (1
(empty list or set)
```

Retorna um intervalo de membros de um sorted set, por pontuação, com pontuações ordenadas da maior para a menor

### ZREVRANK

```{.wrap}
ZREVRANK key member
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANK myzset "one"
(integer) 2
redis> ZREVRANK myzset "four"
(nil)
```

Determina o índice de um membro em um sorted set, com pontuações ordenadas da maior para a menor

### ZUNION

```{.wrap}
ZUNION numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] [WITHSCORES]
```

#### Exemplo

```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZUNION 2 zset1 zset2
1) "one"
2) "three"
3) "two"
redis> ZUNION 2 zset1 zset2 WITHSCORES
1) "one"
2) "2"
3) "three"
4) "3"
5) "two"
6) "4"
```

Une vários sorted sets

### ZMSCORE

```{.wrap}
ZMSCORE key member [member ...]
```

#### Exemplo

```shell script
redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZMSCORE myzset "one" "two" "nofield"
1) "1"
2) "2"
3) (nil)
```

Obtém a pontuação associada aos membros informados em um sorted set

### ZUNIONSTORE

```{.wrap}
ZUNIONSTORE destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]
```

#### Exemplo

```shell script
redis> ZADD zset1 1 "one"
(integer) 1
redis> ZADD zset1 2 "two"
(integer) 1
redis> ZADD zset2 1 "one"
(integer) 1
redis> ZADD zset2 2 "two"
(integer) 1
redis> ZADD zset2 3 "three"
(integer) 1
redis> ZUNIONSTORE out 2 zset1 zset2 WEIGHTS 2 3
(integer) 3
redis> ZRANGE out 0 -1 WITHSCORES
1) "one"
2) "5"
3) "three"
4) "9"
5) "two"
6) "10"
```

Une vários sorted sets e armazena o sorted set resultante em uma nova chave

## Comando Redis Geo{.cols-2}

### GEOADD

```{.wrap}
GEOADD key longitude latitude member [longitude latitude member ...]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEODIST Sicily Palermo Catania
"166274.1516"
redis> GEORADIUS Sicily 15 37 100 km
1) "Catania"
redis> GEORADIUS Sicily 15 37 200 km
1) "Palermo"
2) "Catania"
```

Adiciona um ou mais itens geoespaciais ao índice geoespacial representado por um sorted set

### GEOHASH

```{.wrap}
GEOHASH key member [member ...]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEOHASH Sicily Palermo Catania
1) "sqc8b49rny0"
2) "sqdtr74hyu0"
```

Retorna membros de um índice geoespacial como strings geohash padrão

### GEOPOS

```{.wrap}
GEOPOS key member [member ...]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEOPOS Sicily Palermo Catania NonExisting
1) 1) "13.36138933897018433"
   2) "38.11555639549629859"
2) 1) "15.08726745843887329"
   2) "37.50266842333162032"
3) (nil)
```

Retorna longitude e latitude de membros de um índice geoespacial

### GEODIST

```{.wrap}
GEODIST key member1 member2 [m|km|ft|mi]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEODIST Sicily Palermo Catania
"166274.1516"
redis> GEODIST Sicily Palermo Catania km
"166.2742"
redis> GEODIST Sicily Palermo Catania mi
"103.3182"
redis> GEODIST Sicily Foo Bar
(nil)
```

Retorna a distância entre dois membros de um índice geoespacial

### GEORADIUS

```{.wrap}
GEORADIUS key longitude latitude radius m|km|ft|mi [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count] [ASC|DESC] [STORE key] [STOREDIST key]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEORADIUS Sicily 15 37 200 km WITHDIST
1) 1) "Palermo"
   2) "190.4424"
2) 1) "Catania"
   2) "56.4413"
redis> GEORADIUS Sicily 15 37 200 km WITHCOORD
1) 1) "Palermo"
   2) 1) "13.36138933897018433"
      2) "38.11555639549629859"
2) 1) "Catania"
   2) 1) "15.08726745843887329"
      2) "37.50266842333162032"
redis> GEORADIUS Sicily 15 37 200 km WITHDIST WITHCOORD
1) 1) "Palermo"
   2) "190.4424"
   3) 1) "13.36138933897018433"
      2) "38.11555639549629859"
2) 1) "Catania"
   2) "56.4413"
   3) 1) "15.08726745843887329"
      2) "37.50266842333162032"
```

Consulta um sorted set que representa um índice geoespacial para buscar membros dentro de uma distância máxima informada a partir de um ponto

### GEORADIUSBYMEMBER

```{.wrap}
GEORADIUSBYMEMBER key member radius m|km|ft|mi [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count] [ASC|DESC] [STORE key] [STOREDIST key]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.583333 37.316667 "Agrigento"
(integer) 1
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEORADIUSBYMEMBER Sicily Agrigento 100 km
1) "Agrigento"
2) "Palermo"
```

Consulta um sorted set que representa um índice geoespacial para buscar membros dentro de uma distância máxima informada a partir de um membro

### GEOSEARCH

```{.wrap}
GEOSEARCH key [FROMMEMBER member] [FROMLONLAT longitude latitude] [BYRADIUS radius m|km|ft|mi] [BYBOX width height m|km|ft|mi] [ASC|DESC] [COUNT count] [WITHCOORD] [WITHDIST] [WITHHASH]
```

#### Exemplo

```shell script
redis> GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
(integer) 2
redis> GEOADD Sicily 12.758489 38.788135 "edge1"   17.241510 38.788135 "edge2"
(integer) 2
redis> GEOSEARCH Sicily FROMLONLAT 15 37 BYRADIUS 200 km ASC
1) "Catania"
2) "Palermo"
redis> GEOSEARCH Sicily FROMLONLAT 15 37 BYBOX 400 400 km ASC
1) "Catania"
2) "Palermo"
3) "edge2"
4) "edge1"
```

Consulta um sorted set que representa um índice geoespacial para buscar membros dentro de uma área retangular ou circular.

### Diversos

| -                                                           | -                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GEOSEARCHSTORE ](https://redis.io/commands/geosearchstore) | Consulta um sorted set que representa um índice geoespacial para buscar membros dentro de uma área retangular ou circular e armazena o resultado em outra chave. |

## Comando Redis Hyperloglog{.cols-3}

### PFADD

```{.wrap}
PFADD key element [element ...]
```

#### Exemplo

```shell script
redis> PFADD hll a b c d e f g
(integer) 1
redis> PFCOUNT hll
(integer) 7
```

Adiciona os elementos especificados ao HyperLogLog especificado.

### PFCOUNT

```{.wrap}
PFCOUNT key [key ...]
```

#### Exemplo

```shell script
redis> PFADD hll foo bar zap
(integer) 1
redis> PFADD hll zap zap zap
(integer) 0
redis> PFADD hll foo bar
(integer) 0
redis> PFCOUNT hll
(integer) 3
redis> PFADD some-other-hll 1 2 3
(integer) 1
redis> PFCOUNT hll some-other-hll
(integer) 6
```

Retorna a cardinalidade aproximada do(s) set(s) observado(s) pelo HyperLogLog na(s) chave(s).

### PFMERGE

```{.wrap}
PFMERGE destkey sourcekey [sourcekey ...]
```

#### Exemplo

```shell script
redis> PFADD hll1 foo bar zap a
(integer) 1
redis> PFADD hll2 a b c foo
(integer) 1
redis> PFMERGE hll3 hll1 hll2
"OK"
redis> PFCOUNT hll3
(integer) 6
```

Mescla N HyperLogLogs diferentes em um único.

## Comando Redis Server{.cols-3}

### COMMAND

```{.wrap}
COMMAND
```

#### Exemplo

```shell script
redis> COMMAND
1) 1) "georadius_ro"
     2) (integer) -6
     3) 1) "readonly"
        2) "movablekeys"
     4) (integer) 1
     5) (integer) 1
     6) (integer) 1
     7) 1) "@read"
        2) "@geo"
        3) "@slow"
  2) 1) "zpopmin"
     2) (integer) -2
     3) 1) "write"
        2) "fast"
  ........
```

Obtém um array com detalhes dos comandos Redis

### Diversos {.col-span-2 .row-span-4}

| -                                                                    | -                                                                                                                                      |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [ACL LOAD](https://redis.io/commands/acl-load)                       | Recarrega as ACLs do arquivo ACL configurado                                                                                           |
| [ACL SAVE](https://redis.io/commands/acl-save)                       | Salva as regras ACL atuais no arquivo ACL configurado                                                                                  |
| [ACL LIST](https://redis.io/commands/acl-list)                       | Lista as regras ACL atuais no formato do arquivo de configuração ACL                                                                   |
| [ACL USERS](https://redis.io/commands/acl-users)                     | Lista o nome de usuário de todas as regras ACL configuradas                                                                            |
| [ACL GETUSER ](https://redis.io/commands/acl-getuser)                | Obtém as regras de um usuário ACL específico                                                                                           |
| [ACL SETUSER ](https://redis.io/commands/acl-setuser)                | Modifica ou cria as regras de um usuário ACL específico                                                                                |
| [ACL DELUSER ](https://redis.io/commands/acl-deluser)                | Remove os usuários ACL especificados e as regras associadas                                                                            |
| [ACL CAT ](https://redis.io/commands/acl-cat)                        | Lista as categorias ACL ou os comandos dentro de uma categoria                                                                         |
| [ACL GENPASS ](https://redis.io/commands/acl-genpass)                | Gera uma senha segura pseudoaleatória para usar com usuários ACL                                                                       |
| [ACL WHOAMI](https://redis.io/commands/acl-whoami)                   | Retorna o nome do usuário associado à conexão atual                                                                                    |
| [ACL LOG ](https://redis.io/commands/acl-log)                        | Lista os eventos mais recentes negados pelas ACLs em vigor                                                                             |
| [ACL HELP](https://redis.io/commands/acl-help)                       | Exibe texto de ajuda sobre os diferentes subcomandos                                                                                   |
| [BGREWRITEAOF](https://redis.io/commands/bgrewriteaof)               | Reescreve de forma assíncrona o arquivo append-only                                                                                    |
| [BGSAVE ](https://redis.io/commands/bgsave)                          | Salva o dataset de forma assíncrona em disco                                                                                           |
| [CONFIG GET ](https://redis.io/commands/config-get)                  | Obtém o valor de um parâmetro de configuração                                                                                          |
| [CONFIG REWRITE](https://redis.io/commands/config-rewrite)           | Reescreve o arquivo de configuração com a configuração em memória                                                                      |
| [CONFIG SET ](https://redis.io/commands/config-set)                  | Define um parâmetro de configuração com o valor informado                                                                              |
| [CONFIG RESETSTAT](https://redis.io/commands/config-resetstat)       | Redefine as estatísticas retornadas por INFO                                                                                           |
| [DBSIZE](https://redis.io/commands/dbsize)                           | Retorna o número de chaves no banco de dados selecionado                                                                               |
| [DEBUG OBJECT ](https://redis.io/commands/debug-object)              | Obtém informações de debug sobre uma chave                                                                                             |
| [DEBUG SEGFAULT](https://redis.io/commands/debug-segfault)           | Faz o servidor travar                                                                                                                  |
| [FLUSHALL ](https://redis.io/commands/flushall)                      | Remove todas as chaves de todos os bancos de dados                                                                                     |
| [FLUSHDB ](https://redis.io/commands/flushdb)                        | Remove todas as chaves do banco de dados atual                                                                                         |
| [LOLWUT ](https://redis.io/commands/lolwut)                          | Exibe uma arte de computador e a versão do Redis                                                                                       |
| [LASTSAVE](https://redis.io/commands/lastsave)                       | Obtém o timestamp UNIX da última gravação bem-sucedida em disco                                                                        |
| [MEMORY DOCTOR](https://redis.io/commands/memory-doctor)             | Gera um relatório de problemas de memória                                                                                              |
| [MEMORY HELP](https://redis.io/commands/memory-help)                 | Exibe texto de ajuda sobre os diferentes subcomandos                                                                                   |
| [MEMORY MALLOC-STATS](https://redis.io/commands/memory-malloc-stats) | Exibe estatísticas internas do alocador                                                                                                |
| [MEMORY PURGE](https://redis.io/commands/memory-purge)               | Pede ao alocador para liberar memória                                                                                                  |
| [MEMORY STATS](https://redis.io/commands/memory-stats)               | Exibe detalhes do uso de memória                                                                                                       |
| [MEMORY USAGE ](https://redis.io/commands/memory-usage)              | Estima o uso de memória de uma chave                                                                                                   |
| [MODULE LIST](https://redis.io/commands/module-list)                 | Lista todos os módulos carregados pelo servidor                                                                                        |
| [MODULE LOAD ](https://redis.io/commands/module-load)                | Carrega um módulo                                                                                                                      |
| [MODULE UNLOAD ](https://redis.io/commands/module-unload)            | Descarrega um módulo                                                                                                                   |
| [MONITOR](https://redis.io/commands/monitor)                         | Escuta em tempo real todas as requests recebidas pelo servidor                                                                         |
| [SAVE](https://redis.io/commands/save)                               | Salva o dataset de forma síncrona em disco                                                                                             |
| [SHUTDOWN ](https://redis.io/commands/shutdown)                      | Salva o dataset de forma síncrona em disco e depois desliga o servidor                                                                 |
| [SLAVEOF ](https://redis.io/commands/slaveof)                        | Torna o servidor uma réplica de outra instância, ou o promove a master. Descontinuado a partir do Redis 5. Use REPLICAOF em vez disso. |
| [REPLICAOF ](https://redis.io/commands/replicaof)                    | Torna o servidor uma réplica de outra instância, ou o promove a master.                                                                |
| [SLOWLOG ](https://redis.io/commands/slowlog)                        | Gerencia o log de queries lentas do Redis                                                                                              |
| [SWAPDB ](https://redis.io/commands/swapdb)                          | Troca dois bancos de dados Redis                                                                                                       |
| [SYNC](https://redis.io/commands/sync)                               | Comando interno usado para replicação                                                                                                  |
| [PSYNC ](https://redis.io/commands/psync)                            | Comando interno usado para replicação                                                                                                  |
| [LATENCY DOCTOR](https://redis.io/commands/latency-doctor)           | Retorna um relatório de análise de latência legível por humanos.                                                                       |
| [LATENCY GRAPH ](https://redis.io/commands/latency-graph)            | Retorna um gráfico de latência para o evento.                                                                                          |
| [LATENCY HISTORY ](https://redis.io/commands/latency-history)        | Retorna amostras de timestamp-latência para o evento.                                                                                  |
| [LATENCY LATEST](https://redis.io/commands/latency-latest)           | Retorna as amostras de latência mais recentes para todos os eventos.                                                                   |
| [LATENCY RESET ](https://redis.io/commands/latency-reset)            | Redefine os dados de latência de um ou mais eventos.                                                                                   |
| [LATENCY HELP](https://redis.io/commands/latency-help)               | Exibe texto de ajuda sobre os diferentes subcomandos.                                                                                  |

### COMMAND COUNT

```{.wrap}
COMMAND COUNT
```

#### Exemplo

```shell script
redis> COMMAND COUNT
(integer) 217
```

Obtém o número total de comandos Redis

### COMMAND GETKEYS

```{.wrap}
COMMAND GETKEYS
```

#### Exemplo

```shell script
redis> COMMAND GETKEYS MSET a b c d e f
1) "a"
2) "c"
3) "e"
redis> COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN
1) "key1"
2) "key2"
3) "key3"
redis> COMMAND GETKEYS SORT mylist ALPHA STORE outlist
1) "mylist"
2) "outlist"
```

Extrai as chaves a partir de um comando Redis completo

### COMMAND INFO

```{.wrap}
COMMAND INFO command-name [command-name ...]
```

#### Exemplo

```shell script
redis> COMMAND INFO get set eval
1) 1) "get"
   2) (integer) 2
   3) 1) "readonly"
      2) "fast"
   4) (integer) 1
   5) (integer) 1
   6) (integer) 1
   7) 1) "@read"
      2) "@string"
      3) "@fast"
2) 1) "set"
   2) (integer) -3
   3) 1) "write"
      2) "denyoom"
   4) (integer) 1
   5) (integer) 1
   6) (integer) 1
   7) 1) "@write"
      2) "@string"
      3) "@slow"
3) 1) "eval"
   2) (integer) -3
   3) 1) "noscript"
      2) "movablekeys"
   4) (integer) 0
   5) (integer) 0
   6) (integer) 0
   7) 1) "@slow"
      2) "@scripting"
```

Obtém um array com detalhes de comandos Redis específicos

### INFO

```{.wrap}
INFO [section]
```

#### Exemplo

```shell script
redis> INFO
# Server
redis_version:6.1.240
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:a26db646ea64a07c
redis_mode:standalone
os:Linux 5.4.0-1017-aws x86_64
......
```

Obtém informações e estatísticas sobre o servidor

### ROLE

```{.wrap}
ROLE
```

#### Exemplo

```shell script
redis> ROLE
1) "master"
2) (integer) 0
3) (empty list or set)
```

Retorna o papel da instância no contexto de replicação

### TIME

```{.wrap}
TIME
```

#### Exemplo

```shell script
redis> TIME
1) "1609040690"
2) "558952"
redis> TIME
1) "1609040690"
2) "559206"
```

Retorna a hora atual do servidor

## Comando Redis Generic{.cols-3}

### Diversos

| -                                             | -                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [COPY ](https://redis.io/commands/copy)       | Copia uma chave                                                                                     |
| [MIGRATE ](https://redis.io/commands/migrate) | Transfere atomicamente uma chave de uma instância Redis para outra.                                 |
| [MOVE ](https://redis.io/commands/move)       | Move uma chave para outro banco de dados                                                            |
| [OBJECT ](https://redis.io/commands/object)   | Inspeciona a estrutura interna dos objetos Redis                                                    |
| [RESTORE ](https://redis.io/commands/restore) | Cria uma chave usando o valor serializado fornecido, obtido anteriormente com DUMP.                 |
| [SORT ](https://redis.io/commands/sort)       | Ordena os elementos de uma list, set ou sorted set                                                  |
| [WAIT ](https://redis.io/commands/wait)       | Aguarda a replicação síncrona de todos os comandos de escrita enviados no contexto da conexão atual |
| [SCAN ](https://redis.io/commands/scan)       | Itera incrementalmente o espaço de chaves                                                           |

### DEL

```{.wrap}
DEL key [key ...]
```

#### Exemplo

```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> DEL key1 key2 key3
(integer) 2
```

Exclui uma chave

### DUMP

```{.wrap}
DUMP key
```

#### Exemplo

```shell script
redis> SET mykey 10
"OK"
redis> DUMP mykey
"\u0000\xC0\n\t\u0000\xBEm\u0006\x89Z(\u0000\n"
```

Retorna uma versão serializada do valor armazenado na chave especificada.

### EXISTS

```{.wrap}
EXISTS key [key ...]
```

#### Exemplo

```shell script
redis> SET key1 "Hello"
"OK"
redis> EXISTS key1
(integer) 1
redis> EXISTS nosuchkey
(integer) 0
redis> SET key2 "World"
"OK"
redis> EXISTS key1 key2 nosuchkey
(integer) 2
```

Determina se uma chave existe

### EXPIRE

```{.wrap}
EXPIRE key seconds
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
redis> SET mykey "Hello World"
"OK"
redis> TTL mykey
(integer) -1
```

Define o tempo de vida de uma chave em segundos

### EXPIREAT

```{.wrap}
EXPIREAT key timestamp
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> EXISTS mykey
(integer) 1
redis> EXPIREAT mykey 1293840000
(integer) 1
redis> EXISTS mykey
(integer) 0
```

Define a expiração de uma chave como um timestamp UNIX

### KEYS

```{.wrap}
KEYS pattern
```

#### Exemplo

```shell script
redis> MSET firstname Jack lastname Stuntman age 35
"OK"
redis> KEYS *name*
1) "firstname"
2) "lastname"
redis> KEYS a??
1) "age"
redis> KEYS *
1) "firstname"
2) "age"
3) "lastname"
```

Encontra todas as chaves que correspondem ao padrão informado

### PERSIST

```{.wrap}
PERSIST key
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
redis> PERSIST mykey
(integer) 1
redis> TTL mykey
(integer) -1
```

Remove a expiração de uma chave

### PEXPIRE

```{.wrap}
PEXPIRE key milliseconds
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> PEXPIRE mykey 1500
(integer) 1
redis> TTL mykey
(integer) 1
redis> PTTL mykey
(integer) 1499
```

Define o tempo de vida de uma chave em milissegundos

### PEXPIREAT

```{.wrap}
PEXPIREAT key milliseconds-timestamp
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> PEXPIREAT mykey 1555555555005
(integer) 1
redis> TTL mykey
(integer) -2
redis> PTTL mykey
(integer) -2
```

Define a expiração de uma chave como um timestamp UNIX especificado em milissegundos

### PTTL

```{.wrap}
PTTL key
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 1
(integer) 1
redis> PTTL mykey
(integer) 1000
```

Obtém o tempo de vida de uma chave em milissegundos

### RENAME

```{.wrap}
RENAME key newkey
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> RENAME mykey myotherkey
"OK"
redis> GET myotherkey
"Hello"
```

Renomeia uma chave

### RENAMENX

```{.wrap}
RENAMENX key newkey
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> SET myotherkey "World"
"OK"
redis> RENAMENX mykey myotherkey
(integer) 0
redis> GET myotherkey
"World"
```

Renomeia uma chave, somente se a nova chave não existir

### TOUCH

```{.wrap}
TOUCH key [key ...]
```

#### Exemplo

```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> TOUCH key1 key2
(integer) 2
```

Altera a hora do último acesso de uma ou mais chaves. Retorna o número de chaves existentes informadas.

### TTL

```{.wrap}
TTL key
```

#### Exemplo

```shell script
redis> SET mykey "Hello"
"OK"
redis> EXPIRE mykey 10
(integer) 1
redis> TTL mykey
(integer) 10
```

Obtém o tempo de vida de uma chave

### TYPE

```{.wrap}
TYPE key
```

#### Exemplo

```shell script
redis> SET key1 "value"
"OK"
redis> LPUSH key2 "value"
(integer) 1
redis> SADD key3 "value"
(integer) 1
redis> TYPE key1
"string"
redis> TYPE key2
"list"
redis> TYPE key3
"set"
```

Determina o tipo armazenado na chave

### UNLINK

```{.wrap}
UNLINK key [key ...]
```

#### Exemplo

```shell script
redis> SET key1 "Hello"
"OK"
redis> SET key2 "World"
"OK"
redis> UNLINK key1 key2 key3
(integer) 2
```

Exclui uma chave de forma assíncrona em outra thread. Fora isso, é como DEL, mas sem bloqueio.

## Comando Redis Connection{.cols-3}

### Diversos

| -                                                             | -                                                                                   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [AUTH ](https://redis.io/commands/auth)                       | Autentica no servidor                                                               |
| [CLIENT CACHING ](https://redis.io/commands/client-caching)   | Instrui o servidor sobre rastrear ou não chaves na próxima request                  |
| [CLIENT KILL ](https://redis.io/commands/client-kill)         | Encerra a conexão de um cliente                                                     |
| [CLIENT LIST ](https://redis.io/commands/client-list)         | Obtém a lista de conexões de clientes                                               |
| [CLIENT GETNAME](https://redis.io/commands/client-getname)    | Obtém o nome da conexão atual                                                       |
| [CLIENT GETREDIR](https://redis.io/commands/client-getredir)  | Obtém o ID do cliente de redirecionamento de notificações de tracking, se houver    |
| [CLIENT PAUSE ](https://redis.io/commands/client-pause)       | Para de processar comandos de clientes por um tempo                                 |
| [CLIENT REPLY ](https://redis.io/commands/client-reply)       | Instrui o servidor sobre responder ou não aos comandos                              |
| [CLIENT SETNAME ](https://redis.io/commands/client-setname)   | Define o nome da conexão atual                                                      |
| [CLIENT TRACKING ](https://redis.io/commands/client-tracking) | Ativa ou desativa o suporte a cache do lado do cliente assistido pelo servidor      |
| [CLIENT UNBLOCK ](https://redis.io/commands/client-unblock)   | Desbloqueia um cliente bloqueado em um comando bloqueante a partir de outra conexão |
| [HELLO ](https://redis.io/commands/hello)                     | Troca o protocolo Redis                                                             |
| [QUIT](https://redis.io/commands/quit)                        | Fecha a conexão                                                                     |
| [RESET](https://redis.io/commands/reset)                      | Redefine a conexão                                                                  |
| [SELECT ](https://redis.io/commands/select)                   | Altera o banco de dados selecionado para a conexão atual                            |

### CLIENT ID

```{.wrap}
CLIENT ID
```

#### Exemplo

```shell script
redis> CLIENT ID
ERR Unknown or disabled command 'CLIENT'
```

Retorna o ID do cliente da conexão atual

### CLIENT INFO

```{.wrap}
CLIENT INFO
```

#### Exemplo

```shell script
redis> CLIENT INFO
"id=55542 addr=127.0.0.1:58710 laddr=127.0.0.1:6379 fd=8 name= age=114920 idle=0 flags=N db=0 sub=0 psub=0 multi=-1 qbuf=26 qbuf-free=40928 argv-mem=10 obl=0 oll=0 omem=0 tot-mem=61466 events=r cmd=client user=default redir=-1\n"
```

Retorna informações sobre a conexão do cliente atual.

### ECHO

```{.wrap}
ECHO message
```

#### Exemplo

```shell script
redis> ECHO "Hello World!"
"Hello World!"
```

Ecoa a string informada

### PING

```{.wrap}
PING [message]
```

#### Exemplo

```shell script
redis> PING
"PONG"
redis> PING "hello world"
"hello world"
```

Faz ping no servidor

## Comando Redis Stream{.cols-2}

### Diversos

| -                                                   | -                                                                                                                                                                    |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [XINFO ](https://redis.io/commands/xinfo)           | Obtém informações sobre streams e grupos de consumidores                                                                                                             |
| [XDEL ](https://redis.io/commands/xdel)             | Remove as entradas especificadas do stream. Retorna o número de itens realmente excluídos, que pode diferir do número de IDs informados caso alguns IDs não existam. |
| [XREAD ](https://redis.io/commands/xread)           | Retorna elementos nunca vistos em vários streams, com IDs maiores que os informados pelo chamador para cada stream. Pode bloquear.                                   |
| [XGROUP ](https://redis.io/commands/xgroup)         | Cria, destrói e gerencia grupos de consumidores.                                                                                                                     |
| [XREADGROUP ](https://redis.io/commands/xreadgroup) | Retorna novas entradas de um stream usando um grupo de consumidores, ou acessa o histórico das entradas pendentes de um determinado consumidor. Pode bloquear.       |
| [XCLAIM ](https://redis.io/commands/xclaim)         | Altera (ou adquire) a propriedade de uma mensagem em um grupo de consumidores, como se a mensagem tivesse sido entregue ao consumidor especificado.                  |
| [XPENDING ](https://redis.io/commands/xpending)     | Retorna informações e entradas da lista de entradas pendentes de um grupo de consumidores de stream, ou seja, mensagens buscadas mas nunca confirmadas.              |

### XADD

```{.wrap}
XADD key [MAXLEN [=|~] length] [NOMKSTREAM] *|ID field value [field value ...]
```

#### Exemplo

```shell script
redis> XADD mystream * name Sara surname OConnor
"1609040574632-0"
redis> XADD mystream * field1 value1 field2 value2 field3 value3
"1609040574632-1"
redis> XLEN mystream
(integer) 2
redis> XRANGE mystream - +
1) 1) "1609040574632-0"
   2) 1) "name"
      2) "Sara"
      3) "surname"
      4) "OConnor"
2) 1) "1609040574632-1"
   2) 1) "field1"
      2) "value1"
      3) "field2"
      4) "value2"
      5) "field3"
      6) "value3"
```

Adiciona uma nova entrada a um stream

### XTRIM

```{.wrap}
XTRIM key MAXLEN [=|~] length
```

#### Exemplo

```shell script
redis> XADD mystream * field1 A field2 B field3 C field4 D
"1609040575750-0"
redis> XTRIM mystream MAXLEN 2
(integer) 0
redis> XRANGE mystream - +
1) 1) "1609040575750-0"
   2) 1) "field1"
      2) "A"
      3) "field2"
      4) "B"
      5) "field3"
      6) "C"
      7) "field4"
      8) "D"
```

Reduz o stream para (aproximadamente, se '~' for informado) um determinado tamanho

### XRANGE

```{.wrap}
XRANGE key start end [COUNT count]
```

#### Exemplo

```shell script
redis> XADD writers * name Virginia surname Woolf
"1609040578002-0"
redis> XADD writers * name Jane surname Austen
"1609040578002-1"
redis> XADD writers * name Toni surname Morrison
"1609040578003-0"
redis> XADD writers * name Agatha surname Christie
"1609040578003-1"
redis> XADD writers * name Ngozi surname Adichie
"1609040578003-2"
redis> XLEN writers
(integer) 5
redis> XRANGE writers - + COUNT 2
1) 1) "1609040578002-0"
   2) 1) "name"
      2) "Virginia"
      3) "surname"
      4) "Woolf"
2) 1) "1609040578002-1"
   2) 1) "name"
      2) "Jane"
      3) "surname"
      4) "Austen"
```

Retorna um intervalo de elementos em um stream, com IDs que correspondem ao intervalo de IDs especificado

### XREVRANGE

```{.wrap}
XREVRANGE key end start [COUNT count]
```

#### Exemplo

```shell script
redis> XADD writers * name Virginia surname Woolf
"1609040579130-0"
redis> XADD writers * name Jane surname Austen
"1609040579130-1"
redis> XADD writers * name Toni surname Morrison
"1609040579130-2"
redis> XADD writers * name Agatha surname Christie
"1609040579131-0"
redis> XADD writers * name Ngozi surname Adichie
"1609040579131-1"
redis> XLEN writers
(integer) 5
redis> XREVRANGE writers + - COUNT 1
1) 1) "1609040579131-1"
   2) 1) "name"
      2) "Ngozi"
      3) "surname"
      4) "Adichie"
```

Retorna um intervalo de elementos em um stream, com IDs que correspondem ao intervalo de IDs especificado, em ordem inversa (de IDs maiores para
menores) em comparação com XRANGE

### XLEN

```{.wrap}
XLEN key
```

#### Exemplo

```shell script
redis> XADD mystream * item 1
"1609040580250-0"
redis> XADD mystream * item 2
"1609040580250-1"
redis> XADD mystream * item 3
"1609040580251-0"
redis> XLEN mystream
(integer) 3
```

Retorna o número de entradas em um stream

### XACK

```{.wrap}
XACK key group ID [ID ...]
```

#### Exemplo

```shell script
redis> XACK mystream mygroup 1526569495631-0
ERR Unknown or disabled command 'XACK'
```

Marca uma mensagem pendente como processada corretamente, removendo-a efetivamente da lista de entradas pendentes do grupo
de consumidores. O valor de retorno do comando é o número de mensagens confirmadas com sucesso, ou seja, os IDs que realmente
conseguimos resolver no PEL.

## Diversos {.cols-2}

### Cluster

| -                                                                                         | -                                                                             |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [CLUSTER ADDSLOTS ](https://redis.io/commands/cluster-addslots)                           | Atribui novos slots de hash ao nó receptor                                    |
| [CLUSTER BUMPEPOCH](https://redis.io/commands/cluster-bumpepoch)                          | Avança a época de configuração do cluster                                     |
| [CLUSTER COUNT-FAILURE-REPORTS ](https://redis.io/commands/cluster-count-failure-reports) | Retorna o número de relatórios de falha ativos para um determinado nó         |
| [CLUSTER COUNTKEYSINSLOT ](https://redis.io/commands/cluster-countkeysinslot)             | Retorna o número de chaves locais no slot de hash especificado                |
| [CLUSTER DELSLOTS ](https://redis.io/commands/cluster-delslots)                           | Define slots de hash como não vinculados no nó receptor                       |
| [CLUSTER FAILOVER ](https://redis.io/commands/cluster-failover)                           | Força uma réplica a executar um failover manual do seu master.                |
| [CLUSTER FLUSHSLOTS](https://redis.io/commands/cluster-flushslots)                        | Exclui as informações de slots do próprio nó                                  |
| [CLUSTER FORGET ](https://redis.io/commands/cluster-forget)                               | Remove um nó da tabela de nós                                                 |
| [CLUSTER GETKEYSINSLOT ](https://redis.io/commands/cluster-getkeysinslot)                 | Retorna os nomes das chaves locais no slot de hash especificado               |
| [CLUSTER INFO](https://redis.io/commands/cluster-info)                                    | Fornece informações sobre o estado do nó do Redis Cluster                     |
| [CLUSTER KEYSLOT ](https://redis.io/commands/cluster-keyslot)                             | Retorna o slot de hash da chave especificada                                  |
| [CLUSTER MEET ](https://redis.io/commands/cluster-meet)                                   | Força um nó do cluster a fazer handshake com outro nó                         |
| [CLUSTER MYID](https://redis.io/commands/cluster-myid)                                    | Retorna o id do nó                                                            |
| [CLUSTER NODES](https://redis.io/commands/cluster-nodes)                                  | Obtém a configuração do Cluster para o nó                                     |
| [CLUSTER REPLICATE ](https://redis.io/commands/cluster-replicate)                         | Reconfigura um nó como réplica do nó master especificado                      |
| [CLUSTER RESET ](https://redis.io/commands/cluster-reset)                                 | Redefine um nó do Redis Cluster                                               |
| [CLUSTER SAVECONFIG](https://redis.io/commands/cluster-saveconfig)                        | Força o nó a salvar o estado do cluster em disco                              |
| [CLUSTER SET-CONFIG-EPOCH ](https://redis.io/commands/cluster-set-config-epoch)           | Define a época de configuração em um novo nó                                  |
| [CLUSTER SETSLOT ](https://redis.io/commands/cluster-setslot)                             | Vincula um slot de hash a um nó específico                                    |
| [CLUSTER SLAVES ](https://redis.io/commands/cluster-slaves)                               | Lista os nós réplica do nó master especificado                                |
| [CLUSTER REPLICAS ](https://redis.io/commands/cluster-replicas)                           | Lista os nós réplica do nó master especificado                                |
| [CLUSTER SLOTS](https://redis.io/commands/cluster-slots)                                  | Obtém um array com o mapeamento de slots do Cluster para nós                  |
| [READONLY](https://redis.io/commands/readonly)                                            | Habilita consultas de leitura para uma conexão com um nó réplica do cluster   |
| [READWRITE](https://redis.io/commands/readwrite)                                          | Desabilita consultas de leitura para uma conexão com um nó réplica do cluster |

### Transações

| -                                            | -                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| [DISCARD](https://redis.io/commands/discard) | Descarta todos os comandos emitidos após o MULTI                            |
| [EXEC](https://redis.io/commands/exec)       | Executa todos os comandos emitidos após o MULTI                             |
| [MULTI](https://redis.io/commands/multi)     | Marca o início de um bloco de transação                                     |
| [UNWATCH](https://redis.io/commands/unwatch) | Esquece todas as chaves observadas                                          |
| [WATCH ](https://redis.io/commands/watch)    | Observa as chaves informadas para determinar a execução do bloco MULTI/EXEC |

### Scripting

| -                                                         | -                                                      |
| --------------------------------------------------------- | ------------------------------------------------------ |
| [EVAL ](https://redis.io/commands/eval)                   | Executa um script Lua no lado do servidor              |
| [EVALSHA ](https://redis.io/commands/evalsha)             | Executa um script Lua no lado do servidor              |
| [SCRIPT DEBUG ](https://redis.io/commands/script-debug)   | Define o modo de debug para os scripts executados.     |
| [SCRIPT EXISTS ](https://redis.io/commands/script-exists) | Verifica a existência de scripts no cache de scripts.  |
| [SCRIPT FLUSH](https://redis.io/commands/script-flush)    | Remove todos os scripts do cache de scripts.           |
| [SCRIPT KILL](https://redis.io/commands/script-kill)      | Encerra o script em execução no momento.               |
| [SCRIPT LOAD ](https://redis.io/commands/script-load)     | Carrega o script Lua especificado no cache de scripts. |

### Pubsub

| -                                                       | -                                                                                      |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [PSUBSCRIBE ](https://redis.io/commands/psubscribe)     | Escuta mensagens publicadas em canais que correspondem aos padrões informados          |
| [PUBSUB ](https://redis.io/commands/pubsub)             | Inspeciona o estado do subsistema Pub/Sub                                              |
| [PUBLISH ](https://redis.io/commands/publish)           | Publica uma mensagem em um canal                                                       |
| [PUNSUBSCRIBE ](https://redis.io/commands/punsubscribe) | Para de escutar mensagens publicadas em canais que correspondem aos padrões informados |
| [SUBSCRIBE ](https://redis.io/commands/subscribe)       | Escuta mensagens publicadas nos canais informados                                      |
| [UNSUBSCRIBE ](https://redis.io/commands/unsubscribe)   | Para de escutar mensagens publicadas nos canais informados                             |
