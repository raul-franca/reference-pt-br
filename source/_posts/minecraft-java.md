---
title: Minecraft Java Edition
date: 2023-12-28 12:00:00
icon: minecraft
background: bg-[#5B8C5A]
tags:
  - minecraft
  - java
  - commands
  - cheats
  - game
categories:
  - Jogos
intro: Uma referência completa dos comandos do Minecraft Java Edition (1.20.x).
---

## Seletores de alvo

| Seletor | Descrição |
| :--- | :--- |
| `@p` | Jogador mais próximo |
| `@r` | Jogador aleatório |
| `@a` | Todos os jogadores |
| `@e` | Todas as entidades (inclui mobs, itens etc.) |
| `@s` | A entidade que executa o comando (Self) |

### Argumentos do seletor

| Argumento | Exemplo | Descrição |
| :--- | :--- | :--- |
| `type` | `@e[type=skeleton]` | Seleciona entidades de um tipo específico |
| `distance` | `@a[distance=..10]` | Seleciona dentro de um raio (10 blocos) |
| `limit` | `@e[limit=1]` | Limita o número de alvos selecionados |
| `sort` | `@a[sort=nearest]` | Ordena a seleção (nearest, furthest, random, arbitrary) |
| `gamemode` | `@a[gamemode=creative]` | Seleciona jogadores em um modo de jogo específico |
| `level` | `@a[level=30..]` | Seleciona jogadores com nível de XP 30 ou superior |

## Comandos principais

### Teleport (/tp)

Usado para teleportar entidades para locais específicos ou para outras entidades.

```mcfunction
# Teleport yourself to coordinates
/tp @s 100 64 -200

# Teleport yourself to another player
/tp @s PlayerName

# Teleport a specific player to you
/tp PlayerName @s

# Teleport relative to current position (~ is relative)
/tp @s ~ ~10 ~  (Moves 10 blocks up)

# Teleport with rotation (yaw pitch)
/tp @s ~ ~ ~ 90 0 (Faces South)
```

### Modo de jogo (/gamemode)

Altera o modo de jogo do jogador.

```mcfunction
# Survival Mode
/gamemode survival

# Creative Mode
/gamemode creative

# Adventure Mode
/gamemode adventure

# Spectator Mode
/gamemode spectator

# Apply to other players
/gamemode creative @a[distance=..20]
```

### Dar itens (/give)

Dá itens aos jogadores.

```mcfunction
# Give a diamond sword
/give @s diamond_sword

# Give 64 stone
/give @s stone 64

# Give item with NBT data (Unbreakable diamond pickaxe)
/give @s diamond_pickaxe{Unbreakable:1b}
```

### Experiência (/xp ou /experience)

Adiciona ou remove pontos de experiência/níveis.

```mcfunction
# Add 5 levels
/xp add @s 5 levels

# Add 100 points
/xp add @s 100 points

# Query current level
/xp query @s levels
```

## Gerenciamento do mundo

### Tempo (/time)

Define ou consulta o tempo do mundo.

```mcfunction
# Set to day (1000 ticks)
/time set day

# Set to night (13000 ticks)
/time set night

# Set to noon (6000 ticks)
/time set noon

# Set to midnight (18000 ticks)
/time set midnight

# Add time (skip forward)
/time add 5000
```

### Clima (/weather)

Altera o clima.

```mcfunction
# Clear weather
/weather clear

# Rain
/weather rain

# Thunderstorm
/weather thunder

# Set duration (in seconds)
/weather clear 600
```

### Regras de jogo (/gamerule)

Define várias regras para o mundo.

| Regra | Descrição |
| :--- | :--- |
| `keepInventory` | Se verdadeiro, os jogadores mantêm os itens ao morrer |
| `doDaylightCycle` | Se falso, o tempo fica congelado |
| `doMobSpawning` | Se falso, os mobs não surgem naturalmente |
| `mobGriefing` | Se falso, creepers/endermen não destroem blocos |
| `doWeatherCycle` | Se falso, o clima nunca muda |
| `commandBlockOutput` | Se falso, command blocks não floodam o chat |

```mcfunction
# Enable keep inventory
/gamerule keepInventory true

# Disable phantom spawning
/gamerule doInsomnia false
```

## Manipulação de entidades e blocos

### Efeito (/effect)

Gerencia efeitos de status em entidades.

```mcfunction
# Give Speed II for 30 seconds
/effect give @s speed 30 1

# Give Night Vision infinitely (hide particles)
/effect give @s night_vision infinite 0 true

# Clear all effects
/effect clear @s
```

### Preencher (/fill)

Preenche uma região com um bloco específico.

```mcfunction
# Fill a 10x10x10 cube with stone
/fill ~ ~ ~ ~10 ~10 ~10 stone

# Replace only water with air (drain)
/fill ~-5 ~-5 ~-5 ~5 ~5 ~5 air replace water

# Create a hollow box of glass
/fill ~ ~ ~ ~5 ~5 ~5 glass outline
```

### Definir bloco (/setblock)

Altera um único bloco.

```mcfunction
# Place a torch at current location
/setblock ~ ~ ~ torch

# Destroy the block (drop item) and place stone
/setblock ~ ~-1 ~ stone destroy
```

### Encantar (/enchant)

Encanta o item segurado no momento.

```mcfunction
# Add Sharpness V
/enchant @s sharpness 5

# Add Fortune III
/enchant @s fortune 3
```

## Comandos utilitários

### Localizar (/locate)

Encontra a estrutura ou o bioma mais próximo.

```mcfunction
# Find nearest village
/locate structure village

# Find nearest cherry grove
/locate biome cherry_grove
```

### Matar (/kill)

Remove entidades.

```mcfunction
# Kill yourself
/kill @s

# Kill all slimes
/kill @e[type=slime]

# Kill all items on the ground (cleanup)
/kill @e[type=item]
```

### Seed (/seed)

Exibe a seed do mundo.

```mcfunction
/seed
```
