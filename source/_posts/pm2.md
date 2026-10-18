---
title: PM2
date: 2022-11-25 18:10:00
background: bg-[#230769]
tags:
  - process
categories:
  - Comandos Linux
intro: |
  O [PM2] é um gerenciador de processos daemon que ajuda você a gerenciar e manter sua aplicação online. Começar com o PM2 é simples: ele é oferecido como uma CLI simples e intuitiva.
plugins:
  - copyCode
---

## Primeiros passos

### Instalação

A versão mais recente do PM2 pode ser instalada com NPM ou Yarn

```shell script
$ npm install pm2@latest -g
```

OU

```shell script
$ yarn global add pm2
```

### Iniciar um app

A forma mais simples de iniciar, daemonizar e monitorar sua aplicação é usar esta linha de comando

```shell script
$ pm2 start app.js
```

Ou inicie qualquer outra aplicação facilmente

```shell script
$ pm2 start bashscript.sh
$ pm2 start python-app.py --watch
$ pm2 start binary-file -- --port 1520
```

### Algumas opções que você pode passar para a CLI {.row-span-3}

Especifica um nome de app

```shell script
--name <app_name>
```

Observa e reinicia o app quando os arquivos mudam

```shell script
--watch
```

Define o limite de memória para recarregar o app

```shell script
--max-memory-restart <200MB>
```

Especifica o arquivo de log

```shell script
--log <log_path>
```

Passa argumentos extras para o script

```shell script
-- arg1 arg2 arg3
```

Atraso entre reinicializações automáticas

```shell script
--restart-delay <delay in ms>
```

Adiciona o horário como prefixo nos logs

```shell script
--time
```

Não reinicia o app automaticamente

```shell script
--no-autorestart
```

Especifica um cron para reinicialização forçada

```shell script
--cron <cron_pattern>
```

Anexa ao log da aplicação

```shell script
--no-daemon
```

### Gerenciando processos

Gerenciar o estado da aplicação é simples; aqui estão os comandos

```shell script
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
```

#### Em vez de app_name, você pode passar

- `all` para agir em todos os processos
- `id` para agir em um id de processo específico

### Verificar status, logs e métricas {.row-span-2}

Agora que você iniciou a aplicação, pode verificar seu status, logs e métricas, e até acessar o dashboard online
com [pm2.io](https://pm2.io/).

Lista o status de todas as aplicações gerenciadas pelo PM2

```shell script
$ pm2 [list|ls|status]
```

Para exibir os logs em tempo real

```shell script
$ pm2 logs
```

Para buscar em logs mais antigos

```shell script
$ pm2 logs --lines 200
```

Um dashboard em tempo real que cabe diretamente no seu terminal

```shell script
$ pm2 monit
```

Dashboard web, entre servidores, com sistema de diagnóstico

```shell script
$ pm2 plus
```

### Modo cluster

Para aplicações Node.js, o PM2 inclui um balanceador de carga automático que compartilha todas as conexões
HTTP[s]/Websocket/TCP/UDP entre cada processo iniciado.

Para iniciar uma aplicação em modo cluster

```shell script
$ pm2 start app.js -i max
```

Leia mais sobre o modo cluster [aqui](https://pm2.keymetrics.io/docs/usage/quick-start/).

### Arquivo Ecosystem {.row-span-2}

Você também pode criar um arquivo de configuração, chamado Ecosystem File, para gerenciar várias aplicações. Para gerar um
arquivo Ecosystem

```shell script
$ pm2 ecosystem
```

Isso vai gerar um arquivo ecosystem.config.js

```
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
     name: 'worker',
     script: 'worker.js'
  }]
}
```

E inicie-o facilmente

```shell script
$ pm2 start ecosystem.config.js
```

Leia mais sobre a declaração de aplicações [aqui](https://pm2.keymetrics.io/docs/usage/application-declaration/)

### Configurar script de inicialização

Reiniciar o PM2 com os processos que você gerencia na inicialização/reinicialização do servidor é fundamental. Para
resolver isso, basta executar este comando para gerar um script de inicialização ativo

```shell script
$ pm2 save
```

Leia mais sobre o gerador de script de inicialização [aqui](https://pm2.keymetrics.io/docs/usage/startup/)

### Reiniciar a aplicação em alterações

É bem simples com a opção `--watch`

```
$ cd /path/to/my/app
$ pm2 start env.js --watch --ignore-watch="node_modules"
```

Isso observa e reinicia o app em qualquer alteração de arquivo no diretório atual e em todas as subpastas, ignorando
qualquer alteração na pasta node_modules `--ignore-watch="node_modules"`.

Depois, use `pm2 logs` para verificar os logs do app reiniciado.

---

### Cheat sheet {.row-span-2 .col-span-2}

Aqui estão alguns comandos que vale a pena conhecer. Teste-os com uma aplicação de exemplo ou com sua aplicação web
atual na sua máquina de desenvolvimento

Modo fork

```shell script
$ pm2 start app.js --name my-api # Name process
```

Modo cluster

```shell script
$ pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
$ pm2 start app.js -i max      # Same as above, but deprecated.
$ pm2 scale app +3             # Scales `app` up by 3 workers
$ pm2 scale app 2              # Scales `app` up or down to 2 workers total
```

Listagem

```shell script
$ pm2 list               # Display all processes status
$ pm2 jlist              # Print process list in raw JSON
$ pm2 prettylist         # Print process list in beautified JSON

$ pm2 describe 0         # Display all information about a specific process

$ pm2 monit              # Monitor all processes
```

Logs

```shell script
$ pm2 logs [--raw]       # Display all processes logs in streaming
$ pm2 flush              # Empty all log files
$ pm2 reloadLogs         # Reload all logs
```

Ações

```shell script
$ pm2 stop all           # Stop all processes
$ pm2 restart all        # Restart all processes

$ pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)

$ pm2 stop 0             # Stop specific process id
$ pm2 restart 0          # Restart specific process id

$ pm2 delete 0           # Will remove process from pm2 list
$ pm2 delete all         # Will remove all processes from pm2 list
```

Diversos

```shell script
$ pm2 reset <process>    # Reset meta data (restarted time...)
$ pm2 updatePM2          # Update in memory pm2
$ pm2 ping               # Ensure pm2 daemon has been launched
$ pm2 sendSignal SIGUSR2 my-app # Send system signal to script
$ pm2 start app.js --no-daemon
$ pm2 start app.js --no-vizion
$ pm2 start app.js --no-autorestart
```

### Atualizando o PM2

Deixamos simples: não há breaking changes entre releases e o procedimento é direto

```shell script
$ npm install pm2@latest -g
```

Em seguida, atualize o PM2 em memória

```shell script
$ pm2 update
```

## Veja também

- [INÍCIO RÁPIDO](https://pm2.keymetrics.io/docs/usage/quick-start/) _(pm2.keymetrics.io)_
