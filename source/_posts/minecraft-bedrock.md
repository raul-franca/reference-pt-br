---
title: Minecraft Bedrock Edition
date: 2023-12-28 12:00:00
icon: minecraft
background: bg-[#3C3C3C]
tags:
  - minecraft
  - bedrock
  - pe
  - commands
  - cheats
  - game
categories:
  - Jogos
intro: Uma referência completa para os comandos do Minecraft Bedrock Edition (1.20.x).
---

## Seletores de alvo

| Seletor | Descrição |
| :--- | :--- |
| `@p` | Jogador mais próximo |
| `@r` | Jogador aleatório |
| `@a` | Todos os jogadores |
| `@e` | Todas as entidades (mobs, itens etc.) |
| `@s` | A entidade que executa o comando (ela mesma) |
| `@c` | O agent do jogador (Education Edition/Code Builder) |

### Argumentos do seletor

| Argumento | Exemplo | Descrição |
| :--- | :--- | :--- |
| `type` | `@e[type=creeper]` | Seleciona entidades de um tipo específico |
| `r` / `rm` | `@a[r=10]` | Seleciona dentro de um raio máximo (`r`) ou mínimo (`rm`) |
| `c` | `@e[c=1]` | Limita a quantidade de alvos (do mais próximo para o mais distante) |
| `m` | `@a[m=creative]` | Seleciona jogadores por modo de jogo |
| `l` / `lm` | `@a[lm=30]` | Seleciona por nível máximo (`l`) ou mínimo (`lm`) |
| `name` | `@e[name="Bob"]` | Seleciona entidades com um name tag específico |

## Comandos principais

### Teleport (/tp)

Teleporta entidades para locais ou outras entidades.

```mcfunction
# Teleport yourself to coordinates
/tp @s 100 64 -200

# Teleport yourself to another player
/tp @s "Player Name"

# Teleport relative to current position
/tp @s ~ ~10 ~

# Teleport with facing direction
/tp @s ~ ~ ~ facing @p
```

### Game Mode (/gamemode)

Altera o modo de jogo do jogador.

```mcfunction
# Survival Mode (0)
/gamemode s
# or
/gamemode survival

# Creative Mode (1)
/gamemode c
# or
/gamemode creative

# Adventure Mode (2)
/gamemode a
# or
/gamemode adventure

# Spectator Mode (Experimental/New)
/gamemode spectator
```

### Give Items (/give)

Dá itens aos jogadores.

```mcfunction
# Give a diamond sword
/give @s diamond_sword

# Give 64 stone
/give @s stone 64

# Give item with data value (Legacy/Some items)
# Syntax: /give <target> <item> [amount] [data] [components]
/give @s wool 1 14 (Red Wool)

# Give item with CanPlaceOn (Adventure mode)
/give @s stone 1 0 {"minecraft:can_place_on":{"blocks":["grass"]}}
```

### Experience (/xp)

Adiciona experiência ou sobe de nível.

```mcfunction
# Add 5 levels
/xp 5L @s

# Add 100 points
/xp 100 @s
```

## Gerenciamento do mundo

### Time (/time)

Define a hora do mundo.

```mcfunction
# Set to day
/time set day

# Set to night
/time set night

# Set specific tick
/time set 0
```

### Weather (/weather)

Altera o clima.

```mcfunction
# Clear weather
/weather clear

# Rain
/weather rain

# Thunderstorm
/weather thunder
```

### Gamerules (/gamerule)

Define regras globais do mundo.

| Regra | Descrição |
| :--- | :--- |
| `keepinventory` | Mantém os itens ao morrer (true/false) |
| `dodaylightcycle` | Ativa/desativa o movimento do sol (true/false) |
| `domobspawning` | Ativa/desativa o spawn de mobs (true/false) |
| `mobgriefing` | Ativa/desativa a destruição por mobs (true/false) |
| `doweathercycle` | Ativa/desativa as mudanças de clima (true/false) |
| `commandblockoutput` | Ativa/desativa o chat do command block (true/false) |
| `showcoordinates` | Mostra as coordenadas na tela (true/false) |

```mcfunction
# Enable keep inventory
/gamerule keepinventory true

# Show coordinates
/gamerule showcoordinates true
```

## Manipulação de entidades e blocos

### Effect (/effect)

Gerencia efeitos de status.

```mcfunction
# Give Speed II for 30 seconds
/effect @s speed 30 2

# Give Night Vision (hide particles)
/effect @s night_vision 10000 0 true

# Clear all effects
/effect @s clear
```

### Fill (/fill)

Preenche um volume com blocos.

```mcfunction
# Fill region with dirt
/fill ~ ~ ~ ~5 ~5 ~5 dirt

# Replace only air with water
/fill ~-5 ~-5 ~-5 ~5 ~5 ~5 water 0 replace air

# Fill using block states
/fill ~ ~ ~ ~10 ~1 ~10 stone ["stone_type"="granite"]
```

### Setblock (/setblock)

Altera um bloco específico.

```mcfunction
# Place a redstone block
/setblock ~ ~-1 ~ redstone_block

# Destroy block and place air
/setblock 100 64 100 air 0 destroy
```

### Enchant (/enchant)

Encanta o item na mão.

```mcfunction
# Add Sharpness V
/enchant @s sharpness 5

# Add Unbreaking III
/enchant @s unbreaking 3
```

## Comandos utilitários

### Locate (/locate)

Encontra o bioma ou a estrutura mais próxima.

```mcfunction
# Find nearest village
/locate structure village

# Find nearest ancient city
/locate structure ancient_city
```

### Kill (/kill)

Remove entidades.

```mcfunction
# Kill yourself
/kill @s

# Kill specific entity type
/kill @e[type=zombie]
```

### Ticking Area (/tickingarea)

Mantém chunks carregados mesmo quando não há jogadores por perto.

```mcfunction
# Add a ticking area (radius 4 chunks)
/tickingarea add circle ~ ~ ~ 4 MyArea

# List all areas
/tickingarea list

# Remove an area
/tickingarea remove MyArea
```
