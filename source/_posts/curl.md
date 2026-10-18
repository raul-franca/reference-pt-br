---
title: Curl
date: 2023-01-03 15:18:34
background: bg-slate-600
tags:
  - url
  - request
categories:
  - Comandos Linux
intro: |
  Este cheat sheet do [Curl](https://github.com/curl/curl) contém comandos e exemplos de alguns truques comuns do Curl.
plugins:
  - copyCode
---

## Primeiros passos

### Introdução

`Curl` é uma ferramenta para transferir dados entre servidores, com suporte a protocolos, incluindo:

- HTTP
- HTTPS
- FTP
- IMAP
- LDAP
- POP3
- SCP
- SFTP
- SMB
- SMTP
- etc...

{.cols-3 .marker-none}

---

- [Repositório do código-fonte do Curl no GitHub](https://github.com/curl/curl) _(github.com)_
- [Site oficial do Curl](https://curl.se/) _(curl.se)_

### Opções {.col-span-2 row-span-2}

```bash
-o <file>    # --output: write to file
-u user:pass # --user: authentication
```

---

```bash
-v   # --verbose: Make curl verbose during operation
-vv  # more verbose
-s   # --silent: don't show progress meter or errors
-S   # --show-error: When used with --silent (-sS), show errors but no progress meter
```

---

```bash
-i  # --include: include HTTP headers in the output
-I  # --head: header only
```

### Requisição

```bash
-X POST # --request
-L # If the page redirects, follow the link
-F # --form: HTTP POST data for multipart/form-data
```

### Dados

```bash
# --data: HTTP post data
# URL encoding (eg, status="Hello")
-d 'data'

# --data pass file
-d @file

# --get: send -d data via get
-G
```

### Informações de header

```bash
-A <str>      # --user-agent

-b name=val   # --cookie

-b, --cookie FILE           # Load cookies from the specified file for the URL
-c, --cookie-jar FILE       # Save cookies to the specified file from the URL

-H "X-Foo: y" # --header

--compressed  # use deflate/gzip
```

### SSL

```bash
    --cacert <file>
    --capath <dir>
```

```bash
-E, --cert <cert> # --cert: client certificate file
    --cert-type # der/pem/eng
-k, --insecure # For self-signed certificates
```

#### Instalação

```bash
apk add --update curl # install in alpine linux
```

## Exemplo {.cols-6}

### CURL GET/HEAD {.col-span-4 .row-span-2}

| comando                                                               | descrição                            |
| :-------------------------------------------------------------------- | :----------------------------------- |
| `curl -I https://cheatsheets.zip`                                     | `curl` envia uma requisição          |
| `curl -v -I https://cheatsheets.zip`                                  | requisição do `curl` com detalhes    |
| `curl -X GET https://cheatsheets.zip`                                 | usa método HTTP explícito para `curl` |
| `curl --noproxy 127.0.0.1 http://www.stackoverflow.com`               | `curl` sem proxy HTTP                |
| `curl --connect-timeout 10 -I -k https://cheatsheets.zip`             | `curl` não tem timeout por padrão    |
| `curl --verbose --header "Host: www.mytest.com:8182" cheatsheets.zip` | `curl` obtém um header extra         |
| `curl -k -v https://www.google.com`                                   | `curl` obtém a resposta com headers  |

### Upload de múltiplos arquivos {.col-span-2}

```bash
$ curl -v --include \
--form key1=value1 \
    --form upload=@localfilename URL
```

### Formatar a saída JSON da resposta do curl {.col-span-2}

```bash
$ curl -XGET http://${elasticsearch_ip}:9200/_cluster/nodes | python -m json.tool
```

### CURL POST {.col-span-4}

| comando                                                                     | descrição              |
| :-------------------------------------------------------------------------- | :--------------------- |
| `curl -d "name=username&password=123456" <URL>`                             | `curl` envia requisição |
| `curl <URL> -H "content-type: application/json" -d "{ \"woof\": \"bark\"}"` | `curl` envia JSON      |

### Script do CURL para instalar o rvm {.col-span-2}

```shell
curl -sSL https://get.rvm.io | bash
```

### CURL avançado {.col-span-6}

| comando                                                                                     | descrição                        |
| :------------------------------------------------------------------------------------------ | :------------------------------- |
| `curl myip.dog`                                                                             | obtém o `IP` público desta máquina |
| `curl -L -s http://ipecho.net/plain, curl -L -s http://whatismijnip.nl`                     | obtém meu `IP` público           |
| `curl -u $username:$password http://repo.dennyzhang.com/README.txt`                         | `curl` com credenciais           |
| `curl -v -F key1=value1 -F upload=@localfilename <URL>`                                     | upload com `curl`                |
| `curl -k -v --http2 https://www.google.com/`                                                | usa curl com http2               |
| `curl -T cryptopp552.zip -u test:test ftp://10.32.99.187/`                                  | upload `ftp` com curl            |
| `curl -u test:test ftp://10.32.99.187/cryptopp552.zip -o cryptopp552.zip`                   | download `ftp` com curl          |
| `curl -v -u admin:admin123 --upload-file package1.zip http://mysever:8081/dir/package1.zip` | upload com credenciais `curl`    |

Mais ferramentas de IP: [myip.dog](https://myip.dog/)

### Verificar o tempo de resposta de um site {.col-span-4}

```shell
curl -s -w \
'\nLookup time:\t%{time_namelookup}\nConnect time:\t%{time_connect}\nAppCon time:\t%{time_appconnect}\nRedirect time:\t%{time_redirect}\nPreXfer time:\t%{time_pretransfer }\nStartXfer time:\t%{time_starttransfer}\n\nTotal time:\t%{time_total}\n' \
     -o /dev/null https://www.google.com
```

### Usar o Curl para verificar se um recurso remoto está disponível {.col-span-2}

```bash
curl -o /dev/null --silent -Iw "%{http_code}" https://example.com/my.remote.tarball.gz
```

### Baixar arquivo {.col-span-3}

```bash
curl https://example.com | \
grep --only-matching 'src="[^"]*.[png]"' | \
cut -d \" -f2 | \
while read i; do curl https://example.com/"${i}" \
-o "${i##*/}"; done
```

Baixa todos os arquivos PNG do site (usando GNU grep)

### Baixar o arquivo e salvá-lo sem alterar o nome {.col-span-3}

```bash
curl --remote-name "https://example.com/linux-distro.iso"
```

Renomeia o arquivo

```bash
curl --remote-name "http://example.com/index.html" --output foo.html
```

### Continuar um download parcial {.col-span-3}

```bash
curl --remote-name --continue-at -"https://example.com/linux-distro.iso"
```

### Baixar arquivos de vários domínios {.col-span-3}

```bash
curl "https://www.{example,w3,iana}.org/index.html" --output "file_#1.html"
```

### Baixar uma série de arquivos {.col-span-3}

```bash
curl "https://{foo,bar}.com/file_[1-4].webp" --output "#1_#2.webp"
```

Baixa uma série de arquivos (saída `foo_file1.webp`, `foo_file2.webp...bar_file1_webp`, etc.)

### Redirecionar a saída para um arquivo {.col-span-3}

```bash
$ curl http://url/file > file
```

### Autenticação básica {.col-span-3}

```bash
$ curl --user username:password http://example.com/
$ curl -u username:password http://example.com/
```

### Gravar em arquivo em vez de stdout {.col-span-2}

```bash
$ curl -o file http://url/file
$ curl --output file http://url/file
```

### Baixar informações de header

```bash
$ curl -I url
# display header information
```

### Gravar a saída em um arquivo chamado remote_file {.col-span-2}

```bash
$ curl -o file http://url/file
$ curl --output file http://url/file
```

### Executar script remoto {.col-span-2}

```bash
$ curl -s http://url/myscript.sh
```

### Arquivo de configuração {.col-span-2}

```bash
curl -K file
# read configuration from file
curl --config file
$HOME/.curlrc # default configuration file on UNIX-like systems
```
