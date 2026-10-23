---
title: Cron
date: 2020-12-16 18:28:43
background: bg-red-500
tags:
  - schedule
  - crontab
  - time
categories:
  - Comandos Linux
intro: |
  [Cron](https://en.wikipedia.org/wiki/Cron) é mais adequado para agendar tarefas repetitivas. O agendamento de tarefas pontuais pode ser feito com o utilitário at associado.
plugins:
  - copyCode
---

## Formato do crontab {.cols-2}

### Formato

```
Min  Hour Day  Mon  Weekday
```

---

```
*    *    *    *    *  command to be executed
```

```
┬    ┬    ┬    ┬    ┬
│    │    │    │    └─  Day of Week   (0=Sun .. 6=Sat)
│    │    │    └──────  Month         (1..12)
│    │    └───────────  Day of Month  (1..31)
│    └────────────────  Hour          (0..23)
└─────────────────────  Minute        (0..59)
```

---

| Campo         | Intervalo | Caracteres especiais |
| ------------- | --------- | -------------------- |
| Minuto        | 0 - 59    | , - \* /             |
| Hora          | 0 - 23    | , - \* /             |
| Dia do mês    | 1 - 31    | , - \* ? / L W       |
| Mês           | 1 - 12    | , - \* /             |
| Dia da semana | 0 - 6     | , - \* ? / L #       |

{.show-header}

### Exemplos

| Exemplo        | Descrição                                                           |
| -------------- | ------------------------------------------------------------------- |
| `*/15 * * * *` | A cada 15 minutos                                                   |
| `0 * * * *`    | A cada hora                                                         |
| `0 */2 * * *`  | A cada 2 horas                                                      |
| `15 2 * * *`   | Às 2h15 (de todos os dias)                                          |
| `15 2 * * ?`   | Às 2h15 (de todos os dias)                                          |
| `10 9 * * 5`   | Às 9h10 (de toda sexta-feira)                                       |
| `0 0 * * 0`    | Às 00h00, somente aos domingos                                      |
| `15 2 * * 1L`  | Às 2h15 da última segunda-feira de cada mês                         |
| `15 0 * * 4#2` | Às 00h15 da segunda quinta-feira de cada mês                        |
| `0 0 1 * *`    | Às 00h00, no dia 1 do mês (primeiro dia do mês / mensal)            |
| `0 0 1 1 *`    | Às 00h00, no dia 1 do mês, somente em janeiro (primeiro dia do mês) |
| `@reboot`      | A cada reboot <br>_(não padrão)_                                    |

### Gerador de cron {.col-span-3}

<widget name="cron"/>

### Strings especiais

| String especial | Significado                                                 |
| --------------- | ----------------------------------------------------------- |
| @reboot         | Executa uma vez, na inicialização do sistema _(não padrão)_ |
| @yearly         | Executa uma vez por ano, "0 0 1 1 \*" _(não padrão)_        |
| @annually       | (igual a @yearly) _(não padrão)_                            |
| @monthly        | Executa uma vez por mês, "0 0 1 \* \*" _(não padrão)_       |
| @weekly         | Executa uma vez por semana, "0 0 \* \* 0" _(não padrão)_    |
| @daily          | Executa uma vez por dia, "0 0 \* \* \*" _(não padrão)_      |
| @midnight       | (igual a @daily) _(não padrão)_                             |
| @hourly         | Executa uma vez por hora, "0 \* \* \* \*" _(não padrão)_    |

### Comando crontab

| -            | -                                                                         |
| ------------ | ------------------------------------------------------------------------- |
| `crontab -e` | Edita ou cria um arquivo crontab, caso ainda não exista.                  |
| `crontab -l` | Exibe o arquivo crontab.                                                  |
| `crontab -r` | Remove o arquivo crontab.                                                 |
| `crontab -v` | Exibe a última vez que você editou seu arquivo crontab.<br>_(não padrão)_ |

{.shortcuts}

### Caracteres especiais {.col-span-2}

| Caractere especial  | Descrição                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Asterik(*)`        | Corresponde a todos os valores do campo ou a qualquer valor possível.                                                                                           |
| `Hyphen(-)`         | Usado para definir um intervalo. Ex.: 1-5 no 5º campo (dia da semana) significa todos os dias úteis, ou seja, de segunda a sexta.                               |
| `Slash (/)`         | No 1º campo (minuto), /15 significa a cada quinze minutos ou um incremento do intervalo.                                                                        |
| `Comma (,)`         | Usado para separar itens. Ex.: 2,6,8 no 2º campo (hora) executa às 2h, 6h e 8h.                                                                                 |
| `L`                 | Permitido apenas nos campos dia do mês ou dia da semana; 2L no dia da semana indica a última terça-feira de cada mês.                                           |
| `Hash (#)`          | Permitido apenas no campo dia da semana, que deve ser seguido por um valor entre 1 e 5. Por exemplo, 4#1 significa "a primeira quinta-feira" do mês em questão. |
| `Question mark (?)` | Pode ser usado no lugar de '\*' e é permitido nos campos dia do mês e dia da semana. O uso é restrito a apenas um desses dois campos em uma expressão cron.     |

## Veja também {.cols-1}

- [Devhints](https://devhints.io/cron) _(devhints.io)_
- [Crontab Generator](https://crontab-generator.org/) _(crontab-generator.org)_
- [Crontab guru](https://crontab.guru/) _(crontab.guru)_
