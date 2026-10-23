---
title: Systemd
date: 02-07-2025
icon: icon-systemd
background: bg-[#00ADEF]
tags:
  - systemd
  - linux
categories:
  - Comandos Linux
intro: |
  systemd é o sistema de inicialização e gerenciador de serviços usado pela maioria das distribuições Linux modernas.
plugins:
  - copyCode
---

## Utilitários principais do systemd{.cols-4}

### Lista de utilitários do systemd {.col-span-4}

| Utilitário                            | Descrição                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------- |
| [`systemctl`](#systemctl)             | Gerencia serviços (iniciar, parar, reiniciar, habilitar, desabilitar etc.) |
| [`journalctl`](#journalctl)           | Visualiza e filtra os logs coletados pelo journal do systemd               |
| [`loginctl`](#loginctl)               | Gerencia logins e sessões de usuários                                      |
| [`hostnamectl`](#hostnamectl)         | Define ou consulta o hostname e metadados relacionados da máquina          |
| [`timedatectl`](#timedatectl)         | Define ou consulta data, hora e configurações de NTP do sistema            |
| [`systemd-analyze`](#systemd-analyze) | Analisa o desempenho da inicialização do sistema                           |
| [`systemd-cgtop`](#systemd-cgtop)     | Monitora o uso de recursos dos control groups em tempo real                |
| [`systemd-run`](#systemd-run)         | Executa um comando como serviço ou scope transiente                        |
| [`resolvectl`](#resolvectl)           | Resolve nomes de domínio usando o serviço systemd-resolved                 |
| [`busctl`](#busctl)                   | Interage com o sistema de barramento de mensagens D-Bus                    |

{.left-text}

---

## Comandos dos utilitários {.cols-4}

### systemctl {#systemctl .col-span-2 .row-span-2}

#### systemctl - Comandos de sistema

- Gerencia units do systemd e controla serviços do sistema (iniciar, parar, habilitar etc.).

| Comando               | Descrição                                                             |
| --------------------- | --------------------------------------------------------------------- |
| `systemctl halt`      | Para todo o software em execução e mantém o hardware ligado.          |
| `systemctl hibernate` | Salva o conteúdo da memória do sistema em disco e desliga o hardware. |
| `systemctl poweroff`  | Para o sistema e desliga a energia.                                   |
| `systemctl reboot`    | Reinicia o sistema.                                                   |

{.left-text}

#### systemctl - Comandos de serviço

| Comando                       | Descrição                                             |
| ----------------------------- | ----------------------------------------------------- |
| `systemctl start <service>`   | Inicia um serviço imediatamente                       |
| `systemctl stop <service>`    | Para um serviço em execução                           |
| `systemctl restart <service>` | Reinicia um serviço                                   |
| `systemctl reload <service>`  | Recarrega a configuração do serviço sem reiniciar     |
| `systemctl enable <service>`  | Habilita o serviço para iniciar no boot               |
| `systemctl disable <service>` | Desabilita a inicialização no boot                    |
| `systemctl status <service>`  | Mostra o status atual e os logs recentes              |
| `systemctl mask <service>`    | Impede que o serviço seja iniciado                    |
| `systemctl unmask <service>`  | Remove o mask para que ele possa iniciar novamente    |
| `systemctl list-units`        | Lista as units ativas                                 |
| `systemctl list-unit-files`   | Lista todos os unit files e seu estado de habilitação |

{.left-text}

### journalctl {#journalctl .col-span-2}

- Consulta e filtra logs do journal do systemd.

| Comando                    | Descrição                                        |
| -------------------------- | ------------------------------------------------ |
| `journalctl`               | Mostra o journal inteiro                         |
| `journalctl -b`            | Mostra os logs do boot atual                     |
| `journalctl --list-boots`  | Lista todas as sessões de boot                   |
| `journalctl -b -1`         | Logs do boot anterior                            |
| `journalctl -u <service>`  | Mostra os logs de uma unit/serviço específico    |
| `journalctl -n 100`        | Mostra as últimas 100 entradas de log            |
| `journalctl -f`            | Acompanha novas entradas de log (estilo tail -f) |
| `journalctl -p err..emerg` | Mostra apenas logs de prioridade erro (e acima)  |
| `journalctl --disk-usage`  | Mostra o uso de disco do journal                 |
| `journalctl --since today` | Mostra os logs desde hoje                        |

{.left-text}

### busctl {#busctl .col-span-2}

- Inspeciona e monitora o D-Bus (Desktop Bus) para depuração ou introspecção.

| Comando                        | Descrição                                                      |
| ------------------------------ | -------------------------------------------------------------- |
| `busctl list`                  | Lista todos os serviços/peers no barramento                    |
| `busctl status [SERVICE\|PID]` | Mostra informações do processo e credenciais do serviço ou PID |
| `busctl monitor [SERVICE...]`  | Despeja o tráfego de mensagens ao vivo, Ctrl+C para parar      |
| `busctl capture [SERVICE...]`  | Captura o tráfego do barramento em um arquivo pcap             |
| `busctl tree [SERVICE...]`     | Mostra a árvore de objetos exportada pelo(s) serviço(s)        |

{.left-text}

### loginctl{#loginctl .col-span-2 .row-span-2}

- Gerencia sessões de usuários e configurações relacionadas a login.

| Comando                           | Descrição                                              |
| --------------------------------- | ------------------------------------------------------ |
| `loginctl list-sessions`          | Lista todas as sessões ativas                          |
| `loginctl list-users`             | Lista os usuários logados                              |
| `loginctl user-status <UID>`      | Mostra todas as sessões e processos do usuário `<UID>` |
| `loginctl session-status <ID>`    | Mostra informações detalhadas e logs da sessão `<ID>`  |
| `loginctl show-session <ID>`      | Mostra propriedades de uma sessão legíveis por máquina |
| `loginctl terminate-session <ID>` | Encerra todos os processos da sessão `<ID>`            |
| `loginctl lock-session <ID>`      | Bloqueia a sessão especificada                         |
| `loginctl unlock-session <ID>`    | Desbloqueia a sessão especificada                      |

{.left-text}

### systemd-analyze{#systemd-analyze .col-span-2}

- Analisa o desempenho da inicialização do sistema e as dependências entre units.

| Comando                           | Descrição                                              |
| --------------------------------- | ------------------------------------------------------ |
| `systemd-analyze`                 | Mostra o detalhamento do tempo total de boot           |
| `systemd-analyze blame`           | Lista os serviços ordenados por tempo de inicialização |
| `systemd-analyze plot > boot.svg` | Gera uma visualização SVG da sequência de boot         |

{.left-text}

### systemd-cgtop{#systemd-cgtop .col-span-2}

- Monitoramento em tempo real do uso de recursos por cgroups (CPU, memória, I/O).

| Comando                    | Descrição                                         |
| -------------------------- | ------------------------------------------------- |
| `systemd-cgtop`            | Monitora o uso de recursos dos principais cgroups |
| `systemd-cgtop -c`         | Ordena os cgroups por uso de CPU                  |
| `systemd-cgtop -d <delay>` | Altera o intervalo de atualização                 |

{.left-text}

### timedatectl{#timedatectl .col-span-2}

- Gerencia data, hora, fuso horário e sincronização NTP do sistema.

| Comando                             | Descrição                                   |
| ----------------------------------- | ------------------------------------------- |
| `timedatectl status`                | Mostra as configurações atuais de data/hora |
| `timedatectl list-timezones`        | Lista todos os fusos horários disponíveis   |
| `timedatectl set-timezone <Zone>`   | Define o fuso horário do sistema            |
| `timedatectl set-time "YYYY-MM-DD"` | Define a data manualmente                   |
| `timedatectl set-time "HH:MM:SS"`   | Define a hora manualmente                   |
| `timedatectl set-ntp true`          | Habilita a sincronização NTP                |
| `timedatectl set-ntp false`         | Desabilita a sincronização NTP              |

{.left-text}

### resolvectl{#resolvectl .col-span-2}

- Interage com o serviço resolvedor de DNS systemd-resolved.

| Comando                                | Descrição                                                  |
| -------------------------------------- | ---------------------------------------------------------- |
| `resolvectl status`                    | Mostra a configuração de DNS e informações do link         |
| `resolvectl query <hostname>`          | Resolve o hostname via systemd-resolved                    |
| `resolvectl dns <interface> <IP>`      | Define o(s) servidor(es) DNS para uma interface específica |
| `resolvectl domain <interface> <name>` | Define o(s) domínio(s) de busca para uma interface         |
| `resolvectl flush-caches`              | Limpa o cache de DNS gerenciado pelo systemd-resolved      |
| `resolvectl reset-statistics`          | Zera todas as estatísticas de resolução de DNS             |

{.left-text}

### hostnamectl{#hostnamectl .col-span-4}

- Consulta e define o hostname do sistema (static, transient, pretty) e metadados relacionados.

#### ↓ Comandos

| Comando                                       | Descrição                                                       |
| --------------------------------------------- | --------------------------------------------------------------- |
| `hostnamectl status`                          | Mostra o hostname atual e informações do sistema                |
| `hostnamectl hostname <NAME>`                 | Define o hostname static/transient/pretty                       |
| `hostnamectl set-hostname <NAME> --static`    | Define apenas o hostname static                                 |
| `hostnamectl set-hostname <NAME> --transient` | Define apenas o hostname transient                              |
| `hostnamectl set-hostname <NAME> --pretty`    | Define o hostname pretty (amigável para o usuário)              |
| `hostnamectl set-chassis <TYPE>`              | Define o tipo de chassis (por exemplo, desktop, laptop, server) |

{.left-text}

#### ↓ Descrição

```markdown
- Static - The permanent hostname stored in `/etc/hostname`. Used at boot time.
- Transient - Temporary hostname set at runtime (often by DHCP or manually). Lost on reboot.
- Pretty - A user-friendly, display name (can include spaces and special characters).
```

{.left-text}

### systemd-run{#systemd-run .col-span-4}

- Executa um comando como uma unit transiente do systemd (service, scope, timer etc.).

| Comando                                                  | Descrição                                                         |
| -------------------------------------------------------- | ----------------------------------------------------------------- |
| `systemd-run <command>`                                  | Executa o comando como uma unit `.service` transiente             |
| `systemd-run -p BlockIOWeight=10 updatedb`               | Executa com uma propriedade específica de limite de recursos      |
| `systemd-run -p MemoryMax=100M script.sh`                | Executa uma tarefa que consome muita memória com um limite de uso |
| `systemd-run --on-calendar='YYYY-MM-DD HH:MM' script.sh` | Agenda o script para rodar em uma data e hora específicas         |
| `systemd-run -E VAR=value script.sh`                     | Executa um script com variáveis de ambiente definidas             |

{.left-text}

#### Tipos de limites do systemd{.col-span-3}

```markdown
There are different kinds of limit that can be imposed:

- CPU Limits
- Memory Limits
- I/O Limits
- Task/Thread Limits
- Security/Isolation
- Execution/Environment
```

Exemplo

```bash
systemd-run -p MemoryMax=100M -p CPUQuota=50% scriptFile.sh
```

## Veja também

- [linux training academy](https://www.linuxtrainingacademy.com/systemd-cheat-sheet/)
- [linux Audit Cheat Sheet](https://linux-audit.com/cheat-sheets/systemd/)
- [RedHat Reference](https://www.redhat.com/en/blog/systemd-commands)
