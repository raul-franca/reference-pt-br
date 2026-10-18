---
title: GnuPG
categories:
  - Comandos Linux
intro: Um cheat sheet do GnuPG, o software de criptografia e assinatura.
---

## Primeiros passos

### Software

O Gpg4win e o GPG Suite têm recursos específicos de cada sistema operacional.

- [GnuPG](https://gnupg.org/)
- [Gpg4win](https://www.gpg4win.org/) (Windows)
- [GPG Suite](https://gpgtools.org/) (macOS)

Às vezes as chaves GPG são chamadas de chaves PGP. Os termos são intercambiáveis, pois seguem o
[Padrão OpenPGP](https://www.rfc-editor.org/rfc/rfc9580.html).

### Criar um par de chaves

Gere suas chaves:

```shell script
$ gpg --generate-key
```

... ou configure suas chaves por completo.

```shell script
$ gpg --generate-full-keys
```

**Observação:** Escolha uma passphrase forte! A criptografia é tão forte quanto sua passphrase.

### Gerenciamento de chaves

Liste suas chaves:

```shell script
$ gpg --list-keys
```

Liste suas chaves secretas:

```shell script
$ gpg --list-secret-keys
```

Exporte sua chave pública:

```shell script
$ gpg --export --armor <ID>
```

Exporte sua chave secreta:

```shell script
$ gpg --export-secret-key --armor <ID>
```

Exclua sua chave pública:

```shell script
$ gpg --delete-key <ID>
```

Exclua sua chave secreta:

```shell script
$ gpg --delete-secret-key <ID>
```

## Criptografia

### Simétrica

Criptografe com uma passphrase:

```shell script
$ gpg -c <FILE>
```

Criptografe como ASCII com a flag `-a`:

```shell script
$ gpg -ac <FILE>
```

Defina o path do arquivo de saída com a flag `-o`:

```shell script
$ gpg -c <FILE> -o <PATH>
```

Descriptografe com uma passphrase:

```shell script
$ gpg <FILE>
```

**Observação:** Escolha uma passphrase forte! A criptografia é tão forte quanto sua passphrase.

### Assimétrica

Criptografe usando criptografia de chave pública-privada:

```shell script
$ gpg -e -r <RECIPIENT> <FILE>
```

Criptografe com saída ASCII usando a flag `-a`:

```shell script
$ gpg -ea -r <RECIPIENT> <FILE>
```

Criptografe e assine com a flag `-s`:

```shell script
$ gpg -se -r <RECIPIENT> <FILE>
```

Adicione vários destinatários:

```shell script
$ gpg -e -r <RECIPIENT1> -r <RECIPIENT2> <FILE>
```

Defina o path do arquivo de saída com a flag `-o`:

```shell script
$ gpg -e -o <PATH> -r <RECIPIENT> <FILE>
```

Descriptografe com sua chave privada:

```shell script
$ gpg <FILE>
```

Substitua `<RECIPIENT>` pelo ID da [chave pública importada](#importing-a-public-key) do destinatário desejado.

### Importando uma chave pública

Importe usando um arquivo:

```shell script
$ gpg --import <FILE>
```

Importe usando um link (macOS/Linux):

```shell script
$ curl <WEBSITE> | gpg --import
```

Não esqueça de assinar a chave importada:

```shell script
$ gpg --sign-key <ID>
```

## Assinatura de commits

### Configuração local do Git

Ative a assinatura com GPG:

```shell script
$ git config --global commit.gpgsign true
```

Defina a chave de assinatura:

```shell script
$ git config --global user.signingkey <ID>
```

Defina o local do GPG:

```shell script
$ git config --global gpg.program <PROGRAM>
```

**Observação:** Seu nome e e-mail devem coincidir no Git e no GnuPG.

### Lista de programas GPG

Substitua `<PROGRAM>` por um dos seguintes:

| Plataforma  | Valor                                      |
| ----------- | ------------------------------------------ |
| Windows     | `C:\Program Files (x86)\GnuPG\bin\gpg.exe` |
| macOS/Linux | /usr/local/bin/gpg                         |

{.left-text}

### Exportando sua chave pública

Exporte como ASCII:

```shell script
$ gpg --export --armor <ID>
```

**Observação:** Plataformas como o GitHub podem pedir que você verifique o e-mail definido no Git e no GnuPG.

## Windows: adicionar aos aplicativos de inicialização {.cols-1}

### Comandos do PowerShell

Quando você faz uma reinicialização completa, o agente do GPG pode não iniciar automaticamente. Adicione a ferramenta IPC do GnuPG aos aplicativos de inicialização usando
o PowerShell:

```shell script
$ $shell = New-Object -ComObject WScript.Shell
$ $shortcut = $shell.CreateShortcut("C:\Users\$($Env:UserName)\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\gpg-connect-agent.lnk")
$ $shortcut.TargetPath = "C:\Program Files (x86)\GnuPG\bin\gpg-connect-agent.exe"
$ $shortcut.Arguments = "/bye"
$ $shortcut.Save()
```

Ou inicie manualmente:

```shell script
$ gpgconf --launch gpg-agent
```

Verifique se foi adicionado com sucesso [aqui](ms-settings:startupapps).
