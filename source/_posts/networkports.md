---
title: NetworkPorts
date: 2025-06-19 15:00:00
background: bg-[#71d1f9]
tags:
  - Network
categories:
  - Outros
intro: |
  Um cheat sheet de portas de rede com uma lista não exaustiva de portas usadas de acordo com sua área de aplicação.
plugins:
---

## Redes e infraestrutura

### Portas web

| **Porta** | **Nome**         | **Descrição**               |
| :-------- | :--------------- | :-------------------------- |
| `80`      | HTTP             | HyperText Transfer Protocol |
| `443`     | HTTPS            | HTTP Secure                 |
| `8080`    | HTTP-Alt         | Porta HTTP alternativa      |
| `8443`    | HTTPS-Alt        | Porta HTTPS alternativa     |
| `8000`    | HTTP-Proxy       | Para servidor proxy HTTP    |
| `8008`    | HTTP-Backup      | Porta de backup para HTTP   |
| `8888`    | HTTP-Alternative | Porta alternativa para HTTP |

### Portas de serviços de rede e infraestrutura

| **Porta** | **Nome**  | **Descrição**                       |
| :-------- | :-------- | :---------------------------------- |
| `53`      | DNS       | Domain Name System                  |
| `67`/`68` | DHCP      | Dynamic Host Configuration Protocol |
| `123`     | NTP       | Network Time Protocol               |
| `161`     | SNMP      | Simple Network Management Protocol  |
| `162`     | SNMP-Trap | Mensagens de SNMP Trap              |
| `514`     | Syslog    | Sistema de logging                  |
| `69`      | TFTP      | Trivial File Transfer Protocol      |

### Portas de serviços de virtualização e containerização

| **Porta** | **Nome**      | **Descrição**                          |
| :-------- | :------------ | :------------------------------------- |
| `2375`    | Docker        | Docker sem TLS                         |
| `2376`    | Docker        | Docker com TLS                         |
| `6443`    | Kubernetes    | Kubernetes API Server                  |
| `8443`    | Kubernetes    | Porta alternativa da API do Kubernetes |
| `9100`    | Node Exporter | Prometheus Node Exporter               |
| `9090`    | Prometheus    | Monitoramento Prometheus               |
| `5672`    | RabbitMQ      | Message Broker RabbitMQ                |

### Portas de serviços de monitoramento e gerenciamento {.col-span-2}

| **Porta** | **Nome**   | **Descrição**                                       |
| :-------- | :--------- | :-------------------------------------------------- |
| `631`     | IPP        | Internet Printing Protocol                          |
| `873`     | rsync      | Remote Sync                                         |
| `8086`    | InfluxDB   | Banco de dados de séries temporais InfluxDB         |
| `9093`    | Prometheus | Gerenciamento de alertas do Prometheus Alertmanager |

## Gerenciamento de dados

### Portas de banco de dados {.col-span-2}

| **Porta** | **Nome**             | **Descrição**                                         |
| :-------- | :------------------- | :---------------------------------------------------- |
| `1433`    | Microsoft SQL Server | Servidor de banco de dados Microsoft SQL              |
| `3306`    | MySQL                | Sistema de gerenciamento de banco de dados MySQL      |
| `5432`    | PostgreSQL           | Sistema de gerenciamento de banco de dados PostgreSQL |
| `1521`    | Oracle               | Sistema de gerenciamento de banco de dados Oracle     |
| `27017`   | MongoDB              | Banco de dados NoSQL MongoDB                          |
| `11211`   | Memcached            | Sistema de cache em memória Memcached                 |
| `6379`    | Redis                | Banco de dados em memória Redis                       |

## Serviços de comunicação

### Portas remotas

| **Porta** | **Nome** | **Descrição**                         |
| :-------- | :------- | :------------------------------------ |
| `22`      | SSH      | Secure Shell                          |
| `23`      | Telnet   | Protocolo de terminal remoto inseguro |
| `3389`    | RDP      | Remote Desktop Protocol               |
| `5900`    | VNC      | Virtual Network Computing             |
| `69`      | TFTP     | Trivial File Transfer Protocol        |
| `179`     | BGP      | Border Gateway Protocol               |
| `113`     | Ident    | Ident Protocol                        |

### Portas de serviços de mensageria

| **Porta** | **Nome**        | **Descrição**                    |
| :-------- | :-------------- | :------------------------------- |
| `25`      | SMTP            | Simple Mail Transfer Protocol    |
| `465`     | SMTPS           | SMTP Secure                      |
| `587`     | SMTP-Submission | Porta para envio de e-mail       |
| `110`     | POP3            | Post Office Protocol v3          |
| `995`     | POP3S           | POP3 Secure                      |
| `143`     | IMAP            | Internet Message Access Protocol |
| `993`     | IMAPS           | IMAP Secure                      |

### Portas de serviços de mensagens instantâneas e VoIP

| **Porta** | **Nome**    | **Descrição**                              |
| :-------- | :---------- | :----------------------------------------- |
| `5060`    | SIP         | Session Initiation Protocol                |
| `5061`    | SIP-Secure  | SIP sobre TLS                              |
| `1720`    | H.323       | Protocolo de comunicação para VoIP         |
| `3478`    | STUN        | Session Traversal Utilities for NAT        |
| `1234`    | Skype       | Comunicação VoIP via Skype                 |
| `5222`    | XMPP        | Extensible Messaging and Presence Protocol |
| `5223`    | XMPP-Secure | XMPP sobre SSL                             |

### Portas de serviços de voz e vídeo {.col-span-2}

| **Porta**       | **Nome**   | **Descrição**                                                 |
| :-------------- | :--------- | :------------------------------------------------------------ |
| `5060`          | SIP        | Session Initiation Protocol para VoIP                         |
| `5061`          | SIP Secure | SIP sobre TLS                                                 |
| `16384`-`32767` | RTP        | Real-time Transport Protocol para streaming de áudio/vídeo    |
| `3478`          | STUN       | Session Traversal Utilities for NAT                           |
| `5004`          | RTP        | Real-time Transport Protocol para mídia                       |
| `5222`          | XMPP       | Protocolo de mensagens extensível para mensagens instantâneas |
| `9000`          | WebRTC     | Protocolos para comunicação em tempo real via browser         |

### Portas de serviços de download e compartilhamento P2P

| **Porta**     | **Nome**   | **Descrição**                              |
| :------------ | :--------- | :----------------------------------------- |
| `6881`-`6889` | BitTorrent | Portas usadas por clientes BitTorrent      |
| `51413`       | BitTorrent | Porta padrão do BitTorrent                 |
| `6969`        | BitTorrent | Porta padrão para trackers BitTorrent      |
| `1194`        | OpenVPN    | Também usada para VPNs e alguns P2P        |
| `4661`        | uTorrent   | Porta usada pelo cliente uTorrent          |
| `37152`       | Steam      | Usada pela plataforma Steam para downloads |

## Serviços de segurança

### Portas de segurança {.col-span-2}

| **Porta** | **Nome**    | **Descrição**                              |
| :-------- | :---------- | :----------------------------------------- |
| `1194`    | OpenVPN     | Virtual Private Network                    |
| `1701`    | L2TP        | Layer 2 Tunneling Protocol                 |
| `1723`    | PPTP        | Point-to-Point Tunneling Protocol          |
| `4500`    | IPsec-NAT-T | IPsec NAT Traversal                        |
| `500`     | IKE         | Internet Key Exchange                      |
| `1812`    | RADIUS      | Remote Authentication Dial-In User Service |
| `3306`    | MySQL SSL   | MySQL com criptografia SSL                 |

### Portas de serviços de criptografia e segurança

| **Porta** | **Nome**  | **Descrição**                         |
| :-------- | :-------- | :------------------------------------ |
| `443`     | HTTPS     | HTTP Secure com SSL/TLS               |
| `993`     | IMAPS     | IMAP seguro com SSL/TLS               |
| `995`     | POP3S     | POP3 seguro com SSL/TLS               |
| `636`     | LDAPS     | LDAP seguro com SSL/TLS               |
| `8443`    | HTTPS-Alt | Porta alternativa para HTTPS          |
| `8888`    | SSL Proxy | Proxy seguro usando SSL/TLS           |
| `563`     | SNEWS     | Secure Network News Transfer Protocol |

## Serviços de sistema e aplicação

### Portas de serviços de arquivos {.col-span-2}

| **Porta** | **Nome**    | **Descrição**                                    |
| :-------- | :---------- | :----------------------------------------------- |
| `20`      | FTP-DATA    | Transferência de dados FTP                       |
| `21`      | FTP         | File Transfer Protocol                           |
| `22`      | SFTP        | Secure File Transfer Protocol (via SSH)          |
| `445`     | SMB         | Server Message Block (compartilhamentos Windows) |
| `139`     | NetBIOS-SSN | NetBIOS Session Service                          |
| `2049`    | NFS         | Network File System                              |
| `548`     | AFP         | Apple Filing Protocol                            |

### Portas variadas de sistema e aplicativos

| **Porta**   | **Nome** | **Descrição**                                              |
| :---------- | :------- | :--------------------------------------------------------- |
| `137`-`139` | NetBIOS  | Serviços NetBIOS para nomes e compartilhamento de arquivos |
| `1900`      | UPnP     | Universal Plug and Play                                    |
| `24800`     | Vuze     | Cliente BitTorrent Vuze                                    |
| `32400`     | Plex     | Servidor de mídia Plex                                     |

## Serviços diversos

### Portas de serviços de jogos {.col-span-2}

| **Porta** | **Nome**      | **Descrição**                            |
| :-------- | :------------ | :--------------------------------------- |
| `27015`   | Steam         | Plataforma de jogos Steam                |
| `7777`    | Unreal Engine | Servidores de jogos usando Unreal Engine |
| `27020`   | Source Engine | Servidores de jogos usando Source Engine |
| `28910`   | Various Games | Diversos jogos multiplayer               |
| `27000`   | Various Games | Jogos multiplayer adicionais             |

### Portas de serviços diversos

| **Porta** | **Nome** | **Descrição**                                             |
| :-------- | :------- | :-------------------------------------------------------- |
| `500`     | ISAKMP   | Internet Security Association and Key Management Protocol |
| `520`     | RIP      | Routing Information Protocol                              |
| `1900`    | UPnP     | Universal Plug and Play                                   |
| `3659`    | RADIUS   | Remote Authentication Dial-In User Service                |
