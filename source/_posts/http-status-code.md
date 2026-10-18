---
title: HTTP Status Code
background: bg-[#3b7dc0]
date: 2020-12-26 16:09:09
tags:
  - response
  - server
categories:
  - Outros
intro: |
  O cheat sheet dos códigos de status HTTP. Uma referência rápida para todos os códigos de status HTTP.
plugins:
  - tooltip
---

## Código de status HTTP

### Significados

<!-- prettier-ignore -->
- [1xx: Informational](#1xx-information){data-tooltip="Significa que a requisição foi recebida e o processo continua."}
- [2xx: Success](#2xx-successful){data-tooltip="Significa que a ação foi recebida, entendida e aceita com sucesso."}
- [3xx: Redirection](#3xx-redirection){data-tooltip="Significa que uma ação adicional deve ser tomada para concluir a requisição."}
- [4xx: Client Error](#4xx-client-error){data-tooltip="Significa que a requisição contém sintaxe incorreta ou não pode ser atendida."}
- [5xx: Server Error](#5xx-server-error){data-tooltip="Significa que o servidor falhou ao atender uma requisição aparentemente válida."}

### 2xx. Successful {.row-span-2}

<!-- prettier-ignore -->
- [200: OK](https://tools.ietf.org/html/rfc7231#section-6.3.1){data-tooltip="A requisição está OK."}
- [201: Created](https://tools.ietf.org/html/rfc7231#section-6.3.2){data-tooltip="A requisição está completa e um novo recurso foi criado."}
- [202: Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3){data-tooltip="A requisição foi aceita para processamento, mas o processamento não está concluído."}
- [203: Non-Authoritative Information](https://tools.ietf.org/html/rfc7231#section-6.3.4){data-tooltip="As informações no header da entidade vêm de uma cópia local ou de terceiros, não do servidor original."}
- [204: No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5){data-tooltip="Um código de status e um header são enviados na resposta, mas não há corpo de entidade na resposta."}
- [205: Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6){data-tooltip="O navegador deve limpar o formulário usado nesta transação para novas entradas."}
- [206: Partial Content](https://tools.ietf.org/html/rfc7233#section-4.1){data-tooltip="O servidor está retornando dados parciais do tamanho solicitado. Usado em resposta a uma requisição que especifica um header Range. O servidor deve especificar o intervalo incluído na resposta com o header Content-Range."}
- [207: Multi-Status](https://tools.ietf.org/html/rfc4918#section-11.1){data-tooltip="Fornece status para múltiplas operações independentes."}
- [208: Already Reported](https://tools.ietf.org/html/rfc5842#section-7.1){data-tooltip="Usado dentro de um elemento de resposta DAV: propstat para evitar enumerar repetidamente os membros internos de múltiplas associações à mesma coleção."}
- [226: IM Used](https://tools.ietf.org/html/rfc3229#section-10.4.1){data-tooltip="O servidor atendeu a uma requisição do recurso, e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual."}

### 4xx. Client Error {.row-span-3}

<!-- prettier-ignore -->
- [400: Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1){data-tooltip="O servidor não entendeu a requisição."}
- [401: Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1){data-tooltip="A página solicitada exige um nome de usuário e uma senha."}
- [402: Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2){data-tooltip="Você ainda não pode usar este código."}
- [403: Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3){data-tooltip="O acesso à página solicitada é proibido."}
- [404: Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4){data-tooltip="O servidor não consegue encontrar a página solicitada."}
- [405: Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5){data-tooltip="O método especificado na requisição não é permitido."}
- [406: Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6){data-tooltip="O servidor só consegue gerar uma resposta que não é aceita pelo cliente."}
- [407: Proxy Authentication Required](https://tools.ietf.org/html/rfc7235#section-3.2){data-tooltip="Você precisa se autenticar em um servidor proxy antes que esta requisição possa ser atendida."}
- [408: Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7){data-tooltip="A requisição demorou mais do que o servidor estava disposto a esperar."}
- [409: Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8){data-tooltip="A requisição não pôde ser concluída por causa de um conflito."}
- [410: Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9){data-tooltip="A página solicitada não está mais disponível."}
- [411: Length Required](https://tools.ietf.org/html/rfc7231#section-6.5.10){data-tooltip="O "Content-Length" não está definido. O servidor não aceitará a requisição sem ele."}
- [412: Precondition Failed](https://tools.ietf.org/html/rfc7232#section-4.2){data-tooltip="A pré-condição informada na requisição foi avaliada como falsa pelo servidor."}
- [413: Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11){data-tooltip="O servidor não aceitará a requisição porque a entidade da requisição é muito grande."}
- [414: URI Too Long](https://tools.ietf.org/html/rfc7231#section-6.5.12){data-tooltip="O servidor não aceitará a requisição porque a URL é muito longa. Ocorre quando você converte uma requisição "post" em uma requisição "get" com uma query longa."}
- [415: Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13){data-tooltip="O servidor não aceitará a requisição porque o tipo de mídia não é suportado."}
- [416: Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4){data-tooltip="O intervalo de bytes solicitado não está disponível e está fora dos limites."}
- [417: Expectation Failed](https://tools.ietf.org/html/rfc7231#section-6.5.14){data-tooltip="A expectativa informada em um campo de header de requisição Expect não pôde ser atendida por este servidor."}
- [421: Misdirected Request](https://tools.ietf.org/html/rfc7540#section-9.1.2){data-tooltip="A requisição foi direcionada a um servidor que não consegue produzir uma resposta."}
- [426: Upgrade Required](https://tools.ietf.org/html/rfc7231#section-6.5.15){data-tooltip="O servidor se recusa a executar a requisição usando o protocolo atual, mas pode fazê-lo depois que o cliente atualizar para um protocolo diferente."}
- [428: Precondition Required](https://tools.ietf.org/html/rfc6585#section-3){data-tooltip="O servidor de origem exige que a requisição seja condicional."}
- [429: Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4){data-tooltip="O usuário enviou requisições demais em um determinado intervalo de tempo."}
- [431: Request Header Fields Too Large](https://tools.ietf.org/html/rfc6585#section-5){data-tooltip="O servidor não quer processar a requisição porque os campos de header são muito grandes."}
- [451: Unavailable For Legal Reasons](https://datatracker.ietf.org/doc/html/rfc7725#section-3){data-tooltip="Este código de status indica que o servidor está negando acesso ao recurso em consequência de uma exigência legal."}

### 1xx. Information

<!-- prettier-ignore -->
- [100: Continue](https://tools.ietf.org/html/rfc7231#section-6.2.1){data-tooltip="Apenas parte da requisição foi recebida pelo servidor, mas, desde que não tenha sido rejeitada, o cliente deve continuar com a requisição."}
- [101: Switching Protocols](https://tools.ietf.org/html/rfc7231#section-6.2.2){data-tooltip="O servidor troca de protocolo."}
- [102: Processing](https://tools.ietf.org/html/rfc2518#section-10.1){data-tooltip="Uma resposta provisória usada para informar ao cliente que o servidor aceitou a requisição completa, mas ainda não a concluiu."}
- [103: Early Hints](https://tools.ietf.org/html/rfc8297){data-tooltip="Indica ao cliente que o servidor provavelmente enviará uma resposta final com os campos de header incluídos na resposta informativa."}

### 3xx. Redirection

<!-- prettier-ignore -->
- [300: Multiple Choices](https://tools.ietf.org/html/rfc7231#section-6.4.1){data-tooltip="Uma lista de links. O usuário pode selecionar um link e ir para esse local. No máximo cinco endereços."}
- [301: Moved Permanently](https://tools.ietf.org/html/rfc7231#section-6.4.2){data-tooltip="A página solicitada mudou para uma nova URL."}
- [302: Found](https://tools.ietf.org/html/rfc7231#section-6.4.3){data-tooltip="A página solicitada mudou temporariamente para uma nova URL."}
- [303: See Other](https://tools.ietf.org/html/rfc7231#section-6.4.4){data-tooltip="A página solicitada pode ser encontrada em uma URL diferente."}
- [304: Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1){data-tooltip="Este é o código de resposta para um header If-Modified-Since ou If-None-Match, em que a URL não foi modificada desde a data especificada."}
- [305: Use Proxy](https://tools.ietf.org/html/rfc7231#section-6.4.5){data-tooltip="A URL solicitada deve ser acessada pelo proxy mencionado no header Location."}
- [306: Unused](https://tools.ietf.org/html/rfc7231#section-6.4.6){data-tooltip="Este código foi usado em uma versão anterior. Não é mais usado, mas o código está reservado."}
- [307: Temporary Redirect](https://tools.ietf.org/html/rfc7231#section-6.4.7){data-tooltip="A página solicitada mudou temporariamente para uma nova URL."}
- [308: Permanent Redirect](https://tools.ietf.org/html/rfc7538#section-3){data-tooltip="A requisição e todas as requisições futuras devem ser repetidas usando outra URI."}

### 5xx. Server Error

<!-- prettier-ignore -->
- [500: Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1){data-tooltip="A requisição não foi concluída. O servidor encontrou uma condição inesperada."}
- [501: Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2){data-tooltip="A requisição não foi concluída. O servidor não suportava a funcionalidade exigida."}
- [502: Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3){data-tooltip="A requisição não foi concluída. O servidor recebeu uma resposta inválida do servidor upstream."}
- [503: Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4){data-tooltip="A requisição não foi concluída. O servidor está temporariamente sobrecarregado ou fora do ar."}
- [504: Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5){data-tooltip="O gateway atingiu o tempo limite."}
- [505: HTTP Version Not Supported](https://tools.ietf.org/html/rfc7231#section-6.6.6){data-tooltip="O servidor não suporta a versão do "http protocol"."}
- [506: Variant Also Negotiates](https://tools.ietf.org/html/rfc2295#section-8.1){data-tooltip="A negociação de conteúdo transparente para a requisição resulta em uma referência circular."}
- [507: Insufficient Storage](https://tools.ietf.org/html/rfc4918#section-11.5){data-tooltip="O servidor não consegue armazenar a representação necessária para concluir a requisição."}
- [508: Loop Detected](https://tools.ietf.org/html/rfc5842#section-7.2){data-tooltip="O servidor detectou um loop infinito ao processar a requisição."}
- [510: Not Extended](https://tools.ietf.org/html/rfc2774#section-7){data-tooltip="Extensões adicionais à requisição são necessárias para que o servidor a atenda."}
- [511: Network Authentication Required](https://tools.ietf.org/html/rfc6585#section-6){data-tooltip="O cliente precisa se autenticar para obter acesso à rede."}
