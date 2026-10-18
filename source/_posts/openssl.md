---
title: OpenSSL
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-indigo-600
tags:
categories:
  - Comandos Linux
intro: |
  Esta é uma referência de comandos para interagir com certificados eletrônicos
plugins:
  - copyCode
---

## Chave privada {.cols-2}

### Exibe os detalhes da chave privada

```bash
openssl rsa -check -text -in privateKey.key
```

### Exibe os hashes da chave privada

```bash
openssl rsa -noout -modulus -in privateKey.key | openssl md5
openssl rsa -noout -modulus -in privateKey.key | openssl sha1
openssl rsa -noout -modulus -in privateKey.key | openssl sha256
openssl rsa -noout -modulus -in privateKey.key | openssl sha512
```

### Altera a senha

```bash
openssl rsa -aes256 -in privateKey.key -out newPrivateKey.key
```

### Lista as curvas elípticas disponíveis

```bash
openssl ecparam -list_curves
```

### Cria uma chave privada de curva elíptica com uma curva específica

```bash
openssl ecparam -name secp521r1 -genkey -noout -out privateKey.key
```

## Certificado {.cols-2}

### Exibe os hashes do certificado

```bash
openssl x509 -noout -modulus -in certificate.crt | openssl md5
openssl x509 -noout -modulus -in certificate.crt | openssl sha1
openssl x509 -noout -modulus -in certificate.crt | openssl sha256
openssl x509 -noout -modulus -in certificate.crt | openssl sha512
```

Ou, alternativamente:

```bash
openssl x509 -noout -fingerprint -in certificate.crt
openssl x509 -noout -fingerprint -sha256 -in certificate.crt
```

### Exibe o conteúdo dos certificados

```bash
openssl x509 -in certificate.crt -noout -text|more
```

### Exibe campos específicos dos certificados

```bash
openssl x509 -noout -subject certificate.crt
openssl x509 -noout -issuer certificate.crt
openssl x509 -noout -dates certificate.crt
```

### Inspeciona os certificados do servidor

```bash
echo | openssl s_client -servername www.openssl.org -connect \
www.openssl.org:443 2>/dev/null | openssl x509 -noout -text|more
echo | openssl s_client -servername imap.arcor.de -connect \
imap.arcor.de:993 2>/dev/null | openssl x509 -noout -text|more
```

### Verifica certificados

**OK**

```bash
openssl verify -verbose -x509_strict -CAfile \
issuer.crt Test\ Haeschen\ 1.crt
```

Resultado:

```bash
Test Haeschen 1.crt: OK
```

**Corrompido**
([por exemplo](https://security.stackexchange.com/questions/60804/creating-an-x-509-certificate-with-an-invalid-signature))

```bash
openssl verify -verbose -x509_strict -CAfile \
issuer.crt Test\ Haeschen\ 1_corrupted.crt
```

Resultado:

```bash
C = DE, ST = Thueringen, L = Rudolstadt, O = Damaschkestr. 11, OU = Arbeitszimmer, CN = Test Haeschen 1
error 7 at 0 depth lookup: certificate signature failure
error Test Haeschen 1_corrupted.crt: verification failed
40270500477F0000:error:0200008A:rsa routines:RSA_padding_check_PKCS1_type_1:invalid padding:../crypto/rsa/rsa_pk1.c:75:
40270500477F0000:error:02000072:rsa routines:rsa_ossl_public_decrypt:padding check failed:../crypto/rsa/rsa_ossl.c:598:
40270500477F0000:error:1C880004:Provider routines:rsa_verify:RSA lib:../providers/implementations/signature/rsa_sig.c:774:
40270500477F0000:error:06880006:asn1 encoding routines:ASN1_item_verify_ctx:EVP lib:../crypto/asn1/a_verify.c:217:
```

## S/MIME {.cols-2}

### Cria a assinatura

```bash
openssl smime -sign -in msg.txt -text -out msg.p7s \
-signer certificate.crt -inkey privateKey.key
```

### Verifica a assinatura

```bash
openssl smime -verify -in msg.p7s -CAfile chain.pem
```

## CRL {.cols-2}

### Exibe o conteúdo da CRL

```bash
openssl crl -inform DER -noout -text  -in crl/cacrl.der
openssl crl -inform PEM -noout -text  -in crl/cacrl.pem
```

## PKCS#12 {.cols-2}

### Exibe o conteúdo

```bash
openssl pkcs12 -info -in  digitalIdentity.p12
```

### Cria a partir do certificado e da chave privada

```bash
openssl pkcs12 -export -in certificate.cert \
-inkey privateKey.key -out digitalIdentity.p12
```

### Extrai a chave privada

```bash
openssl pkcs12 -in digitalIdentity.p12 -out privateKey.key
```

### Converte para PEM

```bash
openssl pkcs12 -in digitalIdentity.p12 -out digitalIdentity.pem
```

## TSA {.cols-2}

### Exibe a consulta

```bash
openssl ts -query -in query.tsq -text
```

### Exibe a resposta

```bash
openssl ts -reply -in reply.tsr -text
```

### Verifica a resposta

```bash
openssl ts -verify -in reply.tsr -data data.dat -CAfile chain.pem
```

### Extrai o token da resposta

```bash
openssl ts -reply -in reply.tsr -token_out -out token.tk
```

### Extrai os certificados do token

```bash
openssl pkcs7 -inform DER -in token.tk -print_certs -noout -text
```

## CSR {.cols-2}

### Cria a partir de uma chave existente

```bash
openssl req -new -key privateKey.key -out my.csr
```

Isso pode, claro, ser uma chave RSA ou uma baseada em curva elíptica. As curvas disponíveis podem ser listadas com

```bash
openssl ecparam -list_curves
```

Depois, escolha uma das curvas e crie uma chave privada assim:

```bash
openssl ecparam -name secp521r1 -genkey -noout \
-out privateKey.key
```

### Exibe

```bash
openssl req -in my.csr -noout -text
```

## HTTPS {.cols-2}

### Exporta os certificados codificados em PEM

```bash
openssl s_client -showcerts -connect www.example.com:443
```

## STARTTLS {.cols-2}

### Exporta os certificados codificados em PEM

```bash
openssl s_client -showcerts -starttls imap \
-connect mail.domain.com:139
```

## Verificação de S/MIME {.cols-2}

### Resultados possíveis

A mensagem foi adulterada (código de retorno 4):

```bash
Verification failure
140485684135232:error:2E09A09E:CMS routines:CMS_SignerInfo_verify_content:verification failure:../crypto/cms/cms_sd.c:847:
140485684135232:error:2E09D06D:CMS routines:CMS_verify:content verify error:../crypto/cms/cms_smime.c:393:
```

Assinatura da mensagem não confiável (código de retorno 4):

```bash
Verification failure
140146111432000:error:2E099064:CMS routines:cms_signerinfo_verify_cert:certificate verify error:../crypto/cms/cms_smime.c:252:Verify error:unable to get local issuer certificate
```

Mensagem não assinada (código de retorno 2):

```bash
Error reading S/MIME message
140701208487232:error:0D0D40CD:asn1 encoding routines:SMIME_read_ASN1:invalid mime type:../crypto/asn1/asn_mime.c:469:type: multipart/alternative
```

Validação bem-sucedida (código de retorno 0):

```bash
Verification successful
```

### Verifica a validade de uma mensagem de e-mail

```bash
openssl cms -verify -in some_email_message.eml
```

### Verifica a validade de uma mensagem de e-mail especificando explicitamente a confiança

```bash
openssl cms -verify -in some_email_message \
-CAfile trust_anchor-crt
```

### Mensagens assinadas e criptografadas precisam ser descriptografadas primeiro:

Nota: o arquivo P12 que contém a identidade digital precisa estar codificado em PEM! (veja acima)

```bash
openssl cms -decrypt -out decrypted_email_message \
-inkey p12.pem -in some_encrypted_email_message
```

## Bruto {.cols-2}

### Vê a estrutura bruta de um arquivo ASN.1 (somente para arquivos codificados em DER)

```bash
openssl asn1parse -in mysterious_file.pem
```

### Com um pouco mais de detalhe

```bash
openssl asn1parse -dump -strictpem -in mysterious_file.pem
```

## Alguns recursos com comandos úteis do OpenSSL

- [Cheat sheet de comandos do OpenSSL](https://www.freecodecamp.org/news/openssl-command-cheatsheet-b441be1e8c4a/)
- [21 exemplos de OpenSSL para ajudar no mundo real](https://geekflare.com/openssl-commands-certificates/)
- [Os comandos OpenSSL mais comuns](https://www.sslshopper.com/article-most-common-openssl-commands.html)
- [Guia de referência rápida do OpenSSL](https://www.digicert.com/ssl-support/openssl-quick-reference-guide.htm)
- [openssl_commands.md](https://gist.github.com/webtobesocial/5313b0d7abc25e06c2d78f8b767d4bc3)
- [OpenSSL Essentials: trabalhando com certificados SSL, chaves privadas e CSRs](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)
- [Dicas e truques do OpenSSL](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art030)
- [Verificando uma cadeia de certificados remota com OpenSSL ](https://langui.sh/2009/03/14/checking-a-remote-certificate-chain-with-openssl/)
- [OpenSSL: como extrair certificados e o status do token de uma resposta de timestamp RFC3161?](https://stackoverflow.com/questions/66044640/openssl-how-to-extract-certificates-and-token-status-from-rfc3161-timestamping)
- [Passos para gerar CSR para certificado SAN com openssl](https://www.golinuxcloud.com/openssl-subject-alternative-name/)
- [Como adicionar uma extensão Subject Alternative Name em uma Certificate Signing Request](https://support.microfocus.com/kb/doc.php?id=3522065)
