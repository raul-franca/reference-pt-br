---
title: Nmap
date: 2025-06-17 08:30:00
background: bg-[#2a0d45]
tags:
  - network
  - scan
  - port
categories:
  - Comandos Linux
intro:
  O cheat sheet do [Nmap](https://nmap.org/) é uma referência de uma página para a famosa ferramenta Network Mapper.
plugins:
  - copyCode
  
---

## Primeiros passos


### Uso básico :

```bash
# set your target in etc/hosts

# fast scan of all port of your target
nmap -p- -T5 target 

# fast scan on port 80 with os detection  
namp -p, 80 -T5 -O target 
```


### Opções básicas : {.col-span-2}

| Opções                   | Finalidade                                |
|:-------------------------|:------------------------------------------|
| `-p-`                    | todas as portas                           |
| `-p1-1023`               | escaneia as portas 1 a 1023               |
| `-F`                     | as 100 portas mais comuns                 |
| `-r`                     | escaneia as portas em ordem consecutiva   |
| `-T<0-5>`                | -T0 é o mais lento e T5 o mais rápido     |
| `--max-rate 50`          | taxa <= 50 pacotes/seg                    |
| `--min-rate 15`          | taxa >= 15 pacotes/seg                    |
| `--min-parallelism 100`  | pelo menos 100 sondagens em paralelo      |

## Opções intermediárias do Nmap

### Detecção de serviços : {.col-span-2}

| Opção                        | Significado                                    |
|:-----------------------------|:-----------------------------------------------|
| `--traceroute`               | executa traceroute até o alvo                  |
| `--script=SCRIPTS`           | scripts do Nmap a executar                     |
| `-sC` or `--script=default`  | executa os scripts padrão                      |
| `-O`                         | detecção de sistema operacional                |
| `-sV`                        | detecção de versão de serviço                  |
| `-A`                         | equivalente a `-sV -O -sC --traceroute`        |


### Timing  {.col-span-3}

| Opção                                                               | Significado                                                                                        |
|:--------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| `-T<0-5>`                                                           | Template de timing – paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4) e insane (5) |
| `--min-parallelism <numprobes>` and `--max-parallelism <numprobes>` | Número mínimo e máximo de sondagens em paralelo                                                    |
| `--min-rate <number>` and `--max-rate <number>`                     | Taxa mínima e máxima (pacotes/segundo)                                                             |
| `--host-timeout`                                                    | Tempo máximo de espera por um host alvo                                                            |

## Formatando as respostas

### Detalhes e relatório {.col-span-2}

| Opção             | Finalidade                                  |
|:------------------|:--------------------------------------------|
| `--reason`        | explica como o Nmap chegou à sua conclusão  |
| `-v`              | modo verboso                                |
| `-vv`             | modo bem verboso                            |
| `-d`              | depuração                                   |
| `-dd`             | mais detalhes para depuração                |
| `-oN <filename>`  | Saída normal                                |
| `-oX <filename>`  | Saída XML                                   |
| `-oG <filename>`  | Saída compatível com `grep`                 |
| `-oA <basename>`  | Saída em todos os formatos principais       |

## Técnicas avançadas

### Scan avançado {.col-span-3}

| Opções     | Protocolo | Função principal   | Caso de uso típico                                 |
|------------|:----------|:-------------------|:---------------------------------------------------|
| `-PR -sn`  | **ARP**   | Scan               | Descobrir dispositivos na rede local (LAN)          |
| `-PE -sn`  | **ICMP**  | Echo Scan          | Verificar se os hosts estão acessíveis (ping)       |
| `-PP -sn`  | **ICMP**  | Timestamp Scan     | Coletar informações de horário do dispositivo (menos comum) |
| `-PM -sn`  | **ICMP**  | Address Mask Scan  | Determinar informações de máscara de sub-rede dos hosts |
| `-PS -sn`  | **TCP**   | SYN Ping Scan      | Detectar portas TCP abertas e hosts ativos          |
| `-PA -sn ` | **TCP**   | ACK Ping Scan      | Identificar regras de firewall e portas abertas     |
| `-PU -sn`  | **ICMP**  | Ping Scan          | Encontrar hosts com serviços UDP abertos            |


##  Exemplo de investigação

### Scan de portas rápido, verboso e com detecção de SO {.col-span-3}

```bash
nmap -sV -O -p- -T5 target 
 
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-11-02 15:17 CET

Nmap scan report for target (10.10.158.161)
Host is up (0.021s latency).
Not shown: 65532 closed tcp ports (reset)

PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
8009/tcp open  ajp13   Apache Jserv (Protocol v1.3)
8080/tcp open  http    Apache Tomcat 8.5.5

Aggressive OS guesses: Linux 3.10 - 3.13 (95%), Linux 5.4 (95%), ASUS RT-N56U WAP (Linux 3.4) (95%),
Linux 3.16 (95%), Linux 3.1 (93%), Linux 3.2 (93%), AXIS 210A or 211 Network Camera (Linux 2.6.17) (93%), 
Sony Android TV (Android 5.0) (93%), Android 5.0 - 6.0.1 (Linux 3.4) (93%), Android 5.1 (93%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 39.94 seconds


# you can then use `nmap -A -p 22, 8009, 8080 target` on discovered ports
```
Não use esta ferramenta sem consentimento. Para fins educacionais, este exemplo vem de uma [máquina](https://tryhackme.com/room/bsidesgtthompson) do Try Hack Me.



## Veja também

- [Nmap](https://nmap.org/)
