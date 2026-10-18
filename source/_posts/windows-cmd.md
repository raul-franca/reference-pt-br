---
title: Windows Cmd
date: 2025-06-30 18:28:43
background: bg-red-500
tags:
  - command
categories:
  - Programação
intro: |
  Este cheat sheet de comandos do Windows é uma lista não exaustiva dos principais comandos do Windows que você pode usar.
plugins:
  - copyCode
---

## Primeiros passos

### Básico {.col-span-3}

| CMD         | Descrição                                                                  |
| :---------- | :------------------------------------------------------------------------- |
| `cls`       | Limpa o conteúdo da tela.                                                  |
| `echo`      | Exibe mensagens ou habilita/desabilita o eco de comandos.                  |
| `help`      | Fornece informações de ajuda sobre os comandos do Windows.                 |
| `exit`      | Sai do programa CMD.EXE (interpretador de comandos).                       |
| `date`      | Exibe ou define a data.                                                    |
| `time`      | Exibe ou define a hora do sistema.                                         |
| `ver`       | Exibe a versão do Windows.                                                 |
| `dir`       | Exibe uma lista de arquivos e subdiretórios em um diretório.               |
| `cd`        | Exibe o nome do diretório atual ou o altera.                               |
| `copy`      | Copia um ou mais arquivos para outro local.                                |
| `move`      | Move arquivos e renomeia arquivos e diretórios.                            |
| `del`       | Exclui um ou mais arquivos.                                                |
| `mkdir`     | Cria um diretório.                                                         |
| `rmdir`     | Remove um diretório.                                                       |
| `type`      | Exibe o conteúdo de um arquivo de texto.                                   |
| `ren`       | Renomeia um arquivo ou arquivos.                                           |
| `start`     | Inicia uma janela separada para executar um programa ou cmd especificado.  |
| `shutdown`  | Permite desligar ou reiniciar o computador.                                |
| `tasklist`  | Exibe todas as tarefas em execução no momento, incluindo serviços.         |
| `taskkill`  | Encerra uma ou mais tarefas ou processos.                                  |

## Gerenciar arquivos:

### Arquivos {.col-span-3}

| CMD         | Descrição                                                            |
| :---------- | :------------------------------------------------------------------- |
| `attrib`    | Exibe ou altera atributos de arquivos.                               |
| `fc`        | Compara dois arquivos e exibe as diferenças entre eles.              |
| `find`      | Procura uma string de texto em um ou mais arquivos.                  |
| `findstr`   | Procura strings em arquivos.                                         |
| `xcopy`     | Copia arquivos e árvores de diretórios.                              |
| `robocopy`  | Robust File Copy for Windows, uma versão mais avançada do `xcopy`.   |
| `compact`   | Exibe ou altera a compactação de arquivos em partições NTFS.         |
| `expand`    | Expande um ou mais arquivos compactados.                             |
| `replace`   | Substitui arquivos.                                                  |
| `tree`      | Exibe graficamente a estrutura de pastas de uma unidade ou path.     |
| `sort`      | Classifica a entrada.                                                |
| `more`      | Exibe a saída uma tela por vez.                                      |
| `print`     | Imprime um arquivo de texto.                                         |
| `cipher`    | Exibe ou altera a criptografia de dir [arquivos] em partições NTFS.  |
| `diskcomp`  | Compara o conteúdo de dois disquetes.                                |
| `diskcopy`  | Copia o conteúdo de um disquete para outro.                          |
| `format`    | Formata um disco para uso com o Windows.                             |
| `chkdsk`    | Verifica um disco e exibe um relatório de status.                    |
| `label`     | Cria, altera ou exclui o rótulo de volume de um disco.               |
| `recover`   | Recupera informações legíveis de um disco ruim ou defeituoso.        |

## Sistema e rede

### Sistema {.col-span-3}

| CMD            | Descrição                                                                                                    |
| :------------- | :----------------------------------------------------------------------------------------------------------- |
| `systeminfo`   | Exibe informações detalhadas de configuração sobre um computador e seu sistema operacional.                  |
| `driverquery`  | Exibe o status e as propriedades atuais dos drivers de dispositivo.                                          |
| `msinfo32`     | Inicia a ferramenta Informações do Sistema.                                                                  |
| `reg`          | Console do Registro, usado para gerenciar o Registro do Windows.                                             |
| `sc`           | Exibe ou configura serviços (processos em segundo plano).                                                    |
| `taskmgr`      | Inicia o Gerenciador de Tarefas.                                                                             |
| `wmic`         | Windows Management Instrumentation, usado para gerenciar sistemas Windows.                                   |
| `sfc`          | System File Checker, verifica e valida as versões de todos os arquivos de sistema protegidos.                |
| `gpupdate`     | Atualiza as configurações de Política de Grupo locais e baseadas no Active Directory.                        |
| `gpresult`     | Exibe as configurações de Política de Grupo e o Resultant Set of Policy (RSoP) de um usuário ou computador.  |
| `powercfg`     | Configura as configurações de energia.                                                                       |
| `dxdiag`       | Inicia a ferramenta de diagnóstico do DirectX.                                                               |
| `perfmon`      | Inicia o Monitor de Desempenho.                                                                              |
| `rsop`         | Resultant Set of Policy, usado para visualizar as configurações de Política de Grupo.                        |
| `sigverif`     | Inicia a ferramenta de verificação de assinatura de arquivos.                                                |
| `sysedit`      | Inicia o Editor de Configuração do Sistema.                                                                  |
| `syskey`       | Protege o banco de dados de contas do Windows XP.                                                            |
| `chgport`      | Exibe ou altera mapeamentos de portas Com.                                                                   |
| `chgusr`       | Altera o modo de usuário instalado.                                                                          |

### Rede {.col-span-3}

| CMD               | Descrição                                                                                                           |
| :---------------- | :------------------------------------------------------------------------------------------------------------------ |
| `ipconfig`        | Exibe todos os valores atuais de configuração de rede TCP/IP.                                                       |
| `ping`            | Testa a conectividade de rede com um host especificado.                                                             |
| `tracert`         | Rastreia a rota percorrida pelos pacotes até um destino especificado.                                               |
| `netstat`         | Exibe as conexões TCP ativas e as portas nas quais o computador está escutando.                                     |
| `nslookup`        | Exibe informações que você pode usar para diagnosticar a infraestrutura do Domain Name System (DNS).                |
| `net`             | Gerencia recursos de rede, serviços e contas de usuário.                                                            |
| `netsh`           | Network Shell, usado para configurar e monitorar dispositivos de rede.                                              |
| `arp`             | Exibe e modifica as tabelas de tradução de endereço IP para físico usadas pelo Address Resolution Protocol (ARP).   |
| `route`           | Exibe e modifica as entradas na tabela de roteamento IP local.                                                      |
| `ftp`             | Inicia o cliente File Transfer Protocol (FTP).                                                                      |
| `telnet`          | Inicia o cliente Telnet.                                                                                            |
| `nbtstat`         | Exibe estatísticas de protocolo e conexões TCP/IP atuais usando NBT (NetBIOS over TCP/IP).                          |
| `net use`         | Conecta, desconecta e exibe informações sobre conexões de rede.                                                     |
| `net session`     | Gerencia conexões do computador servidor.                                                                           |
| `net start`       | Inicia um serviço de rede.                                                                                          |
| `net stop`        | Para um serviço de rede.                                                                                            |
| `net view`        | Exibe uma lista de recursos compartilhados em um computador especificado.                                           |
| `net user`        | Gerencia contas de usuário.                                                                                         |
| `net localgroup`  | Gerencia grupos locais.                                                                                             |
| `net share`       | Gerencia recursos compartilhados.                                                                                   |
| `net statistics`  | Exibe estatísticas de rede.                                                                                         |

## Diversos

### Gerenciamento de processos {.col-span-1}

| CMD             | Descrição                                                                         |
| :-------------- | :-------------------------------------------------------------------------------- |
| `wmic process`  | Gerencia processos usando Windows Management Instrumentation .                    |
| `timeout`       | Aguarda um número especificado de segundos / até que uma tecla seja pressionada.  |

### Gerenciamento de disco {.col-span-1}

| CMD Command  | Descrição                                    |
| :----------- | :------------------------------------------- |
| `diskpart`   | Gerencia partições de disco.                 |
| `defrag`     | Desfragmenta um disco.                       |
| `convert`    | Converte um volume FAT em NTFS.              |
| `diskperf`   | Gerencia contadores de desempenho de disco.  |

### Configuração do sistema {.col-span-1}

| CMD Command  | Descrição                                                            |
| :----------- | :------------------------------------------------------------------- |
| `bcdedit`    | Gerencia o repositório Boot Configuration Data (BCD).                |
| `bootcfg`    | Configura, consulta ou altera as configurações do arquivo Boot.ini.  |
| `msconfig`   | Inicia o utilitário de Configuração do Sistema.                      |
| `regedit`    | Inicia o Editor do Registro.                                         |

## Dicas e truques

### Dicas e truques diversos {.col-span-3}

| Dica ou truque                                                   | Descrição                                                                                                                                            |
| :--------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wmic path SoftwareLicensingService get OA3xOriginalProductKey`  | Obtenha a chave de produto do Windows                                                                                                                |
| `cmd /k`                                                         | Abre o prompt de comando e executa um comando especificado, mantendo a janela aberta.                                                                |
| `cmd /c`                                                         | Abre o prompt de comando, executa um comando especificado e depois fecha a janela.                                                                   |
| `&&`                                                             | Permite executar vários comandos em sequência. Por exemplo, `command1 && command2`.                                                                  |
| `\|\|`                                                           | Permite executar um segundo comando apenas se o primeiro comando falhar. Por exemplo, `command1 \|\| command2`.                                      |
| `>`                                                              | Redireciona a saída de um comando para um arquivo, sobrescrevendo o arquivo se ele já existir. Por exemplo, `command > output.txt`.                  |
| `>>`                                                             | Redireciona a saída de um comando para um arquivo, anexando a saída se o arquivo já existir. Por exemplo, `command >> output.txt`.                   |
| `\|`                                                             | Canaliza a saída de um comando para outro comando. Por exemplo, `command1 \| command2`.                                                              |
| `clip`                                                           | Redireciona a saída de um comando para a área de transferência do Windows. Por exemplo, `dir \| clip`.                                               |
| `for %i in (*.txt) do echo %i`                                   | Percorre todos os arquivos `.txt` do diretório atual e exibe seus nomes.                                                                             |
| `pushd` and `popd`                                               | `pushd` salva o diretório atual e então muda para um novo diretório. `popd` retorna ao diretório salvo.                                              |
| `set`                                                            | Exibe, define ou remove variáveis de ambiente. Por exemplo, `set PATH=C:\newpath`.                                                                   |
| `start "" "C:\Path\To\Program\program.exe"`                      | Inicia um programa sem esperar que ele termine.                                                                                                      |
| `taskkill /IM "process.exe" /F`                                  | Encerra à força um processo pelo nome da imagem.                                                                                                     |
| `wmic product get name`                                          | Lista todos os softwares instalados no sistema.                                                                                                      |
| `wmic logicaldisk get size,freespace,caption`                    | Exibe o tamanho, o espaço livre e a legenda de todos os discos lógicos.                                                                              |
| `systeminfo` `\|` `findstr /B /C:"OS Name" /C:"OS Version"`      | Exibe o nome e a versão do sistema operacional.                                                                                                      |
| `schtasks /query /fo LIST /v`                                    | Lista todas as tarefas agendadas em detalhes.                                                                                                        |
| `netsh wlan show profiles`                                       | Exibe uma lista de todos os perfis Wi-Fi salvos.                                                                                                     |
| `netsh wlan show profiles name="ProfileName" key=clear`          | Exibe a senha de um perfil Wi-Fi específico.                                                                                                         |
| `assoc`                                                          | Exibe ou modifica associações de extensões de arquivo.                                                                                               |
| `ftype`                                                          | Exibe ou modifica os tipos de arquivo usados nas associações de extensões de arquivo.                                                                |
| `driverquery /v`                                                 | Lista todos os drivers instalados com informações detalhadas.                                                                                        |
| `powercfg /energy`                                               | Gera um relatório detalhado de energia do sistema.                                                                                                   |
| `powercfg /batteryreport`                                        | Gera um relatório de duração da bateria para notebooks.                                                                                              |
| `robocopy C:\Source D:\Destination /MIR`                         | Espelha um diretório de um local para outro, incluindo subdiretórios e arquivos.                                                                     |
| `mklink /D "C:\Path\To\Link" "C:\Path\To\Target"`                | Cria um link simbólico para um diretório.                                                                                                            |
| `mklink /H "C:\Path\To\Link" "C:\Path\To\Target"`                | Cria um hard link para um arquivo.                                                                                                                   |
| `mklink /J "C:\Path\To\Link" "C:\Path\To\Target"`                | Cria uma junção de diretório.                                                                                                                        |
| `diskpart /s script.txt`                                         | Executa um script DiskPart para automatizar tarefas de particionamento de disco.                                                                     |
| `shutdown /a`                                                    | Cancela um desligamento do sistema.                                                                                                                  |
| `chkdsk /f /r`                                                   | Verifica um disco e corrige erros, além de recuperar informações legíveis de setores defeituosos.                                                    |
| `sfc /scannow`                                                   | Verifica e repara arquivos de sistema protegidos.                                                                                                    |
| `DISM /Online /Cleanup-Image /RestoreHealth`                     | Repara a imagem do Windows usando o DISM.                                                                                                            |
| `bcdboot C:\Windows`                                             | Repara o ambiente de inicialização copiando os arquivos de boot do diretório do Windows.                                                             |
| `bootrec /fixmbr`                                                | Repara o Master Boot Record (MBR).                                                                                                                   |
| `bootrec /fixboot`                                               | Grava um novo setor de boot na partição do sistema.                                                                                                  |
| `bootrec /scanos`                                                | Procura instalações compatíveis com o Windows e exibe as entradas que não estão atualmente no repositório Boot Configuration Data.                   |
| `bootrec /rebuildbcd`                                            | Procura instalações compatíveis com o Windows e permite selecionar as instalações que você deseja adicionar ao repositório Boot Configuration Data.  |

## Outros

- Veja também: [Documentação oficial do Windows](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
