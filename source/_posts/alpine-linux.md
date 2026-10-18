---
title: Alpine Linux
date: 2024-03-20 12:00:00
icon: icon-alpine
background: bg-blue-600
tags:
  - linux
  - server
  - container
categories:
  - Sistema Operacional
intro:
  Uma cheat sheet completa do Alpine Linux, cobrindo gerenciamento de pacotes, administração do sistema, redes e muito mais.
  O Alpine Linux é uma distribuição Linux leve e voltada à segurança, baseada em musl libc e busybox.
---

# Cheat sheet do Alpine Linux

## Gerenciamento de pacotes (apk)

### Operações básicas com pacotes

```bash
# Update package index
apk update

# Upgrade all installed packages
apk upgrade

# Install a package
apk add <package-name>

# Remove a package
apk del <package-name>

# Search for a package
apk search <package-name>

# Show package info
apk info <package-name>

# List all installed packages
apk list --installed
```

### Operações avançadas com pacotes

```bash
# Add package from testing repository
apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing <package-name>

# Add multiple packages
apk add package1 package2 package3

# Clean package cache
apk cache clean
```

## Administração do sistema

### Gerenciamento de serviços (OpenRC)

```bash
# Start a service
rc-service <service-name> start

# Stop a service
rc-service <service-name> stop

# Restart a service
rc-service <service-name> restart

# Add service to default runlevel
rc-update add <service-name> default

# Remove service from default runlevel
rc-update del <service-name> default

# List all services
rc-status
```

### Informações do sistema

```bash
# Show system information
uname -a

# Show disk usage
df -h

# Show memory usage
free -h

# Show running processes
ps aux

# Show system uptime
uptime
```

### Configuração de rede

```bash
# Show network interfaces
ip addr show

# Configure network interface
setup-interfaces

# Test network connectivity
ping -c 4 google.com

# Show routing table
ip route show

# Edit network configuration
vi /etc/network/interfaces
```

Verifique o IP público desta máquina

```bash
# Install curl if needed
apk add --no-cache curl
curl myip.dog
```

Mais ferramentas de IP: [myip.dog](https://myip.dog/)

### Gerenciamento de usuários

```bash
# Add a new user
adduser <username>

# Add user to group
addgroup <username> <groupname>

# Change password
passwd <username>

# Delete user
deluser <username>

# List all users
cat /etc/passwd
```

## Operações no sistema de arquivos

### Operações básicas com arquivos

```bash
# Create directory
mkdir <directory-name>

# Remove directory
rm -r <directory-name>

# Copy files
cp <source> <destination>

# Move/rename files
mv <source> <destination>

# Change permissions
chmod <permissions> <file>

# Change ownership
chown <user>:<group> <file>
```

## Operações com containers

### Suporte ao Docker

```bash
# Install Docker
apk add docker

# Start Docker service
rc-service docker start

# Enable Docker at boot
rc-update add docker default
```

## Manutenção do sistema

### Operações de disco

```bash
# Check disk space
df -h

# Check directory size
du -sh <directory>

# Mount a device
mount /dev/<device> /mnt/<mountpoint>

# Unmount a device
umount /mnt/<mountpoint>
```

### Backup e restauração

```bash
# Create tar archive
tar -czf backup.tar.gz /path/to/backup

# Extract tar archive
tar -xzf backup.tar.gz

# Create system backup (root required)
lbu package /media/backup.apkovl.tar.gz
```

## Dicas e truques

### Arquivos de configuração comuns

- `/etc/apk/repositories` - Repositórios de pacotes
- `/etc/network/interfaces` - Configuração de rede
- `/etc/hostname` - Nome do host do sistema
- `/etc/hosts` - Mapeamentos de hosts
- `/etc/resolv.conf` - Configuração de DNS

### Variáveis de ambiente

```bash
# Set environment variable
export VARIABLE=value

# View all environment variables
env

# Add permanent environment variable
echo "export VARIABLE=value" >> ~/.profile
```

### Logs do sistema

```bash
# View system logs
less /var/log/messages

# View boot messages
dmesg

# Follow log in real-time
tail -f /var/log/messages
```

## Segurança

### Firewall (com iptables)

```bash
# Install iptables
apk add iptables

# Allow SSH (port 22)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Save iptables rules
/etc/init.d/iptables save

# Restore iptables rules
/etc/init.d/iptables restart
```

### Configuração do SSH

```bash
# Generate SSH key
ssh-keygen -t rsa -b 4096

# Copy SSH key to remote server
ssh-copy-id user@remote-server

# Edit SSH configuration
vi /etc/ssh/sshd_config
```

## Solução de problemas

### Comandos comuns

```bash
# Check system logs for errors
dmesg | grep -i error

# Check service status
rc-service <service-name> status

# Check system resource usage
top

# Check network connections
netstat -tuln

# Check disk health
smartctl -a /dev/sda  # Requires smartmontools package
```
