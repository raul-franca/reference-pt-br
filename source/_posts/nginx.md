---
title: Nginx
date: 2025-09-15 21:17:50
background: bg-slate-600
tags:
categories:
  - Comandos Linux
intro: cheat sheet de referência rápida do nginx
plugins:
  - copyCode
---

## Primeiros passos {.cols-3}

### Instalação e serviço

- **Ubuntu/Debian**
  ```shell script
  $ sudo apt update && sudo apt install -y nginx
  ```
- **RHEL/CentOS**
  ```shell script
  $ sudo yum install -y epel-release nginx && sudo systemctl enable --now nginx
  ```
- **Service**
  ```shell script
  $ sudo systemctl status nginx
  $ sudo systemctl reload nginx
  $ sudo systemctl restart nginx
  $ sudo nginx -t   # test config
  $ nginx -V        # built modules
  ```

### Paths principais

- `/etc/nginx/nginx.conf` _(configuração principal)_
- `/etc/nginx/conf.d/*.conf` _(drop‑ins)_
- `/etc/nginx/sites-available/` + `sites-enabled/` _(estilo Debian)_
- `/var/www/html` _(docroot padrão)_
- `logs`: `/var/log/nginx/access.log`, `/var/log/nginx/error.log`

### Servidor HTTP mínimo

```nginx
# /etc/nginx/conf.d/example.conf
server {
  listen 80;
  server_name example.com;
  root /var/www/example/public;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

## Estrutura de configuração {.cols-3}

### Blocos principais

- `main` (global)
- `events` (conexões de worker)
- `http` → `server` → `location`
- `stream` (TCP/UDP)
- `upstream` (load balancers)

```nginx
user  www-data;
worker_processes auto;

events { worker_connections 1024; }

http {
  include       mime.types;
  default_type  application/octet-stream;
  sendfile      on;
  keepalive_timeout 65;

  # servers / includes go here...
}
```

### Contexto e ordem

- **Ordem de correspondência do `location`**:
  1. Exato `=`
  2. `^~` (sem regex se houver correspondência)
  3. Regex `~` / `~*` (primeira correspondência)
  4. Prefixo (path mais longo)
- `try_files` avalia em ordem e depois usa o fallback.

```nginx
location = /healthz { return 204; }
location ^~ /static/ { expires 7d; }
location ~* \.(png|jpg|css|js)$ { expires 7d; }
location / { try_files $uri $uri/ /index.html; }
```

### Includes comuns

```nginx
http {
  include /etc/nginx/conf.d/*.conf;
  include /etc/nginx/snippets/*.conf; # Ubuntu/Debian
}
```

## Virtual hosts e redirecionamentos {.cols-3}

### Bloco de servidor básico

```nginx
server {
  listen 80;
  server_name example.com www.example.com;
  root /var/www/example/public;
  index index.html index.htm;
}
```

### Redirecionar HTTP→HTTPS

```nginx
server {
  listen 80;
  server_name example.com www.example.com;
  return 301 https://example.com$request_uri;
}
```

### Host canônico

```nginx
# Force non-www
server {
  listen 80;
  server_name www.example.com;
  return 301 $scheme://example.com$request_uri;
}
```

## TLS/SSL {.cols-3}

### Servidor TLS básico

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;

  ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers off;

  root /var/www/example/public;
}
```

### HSTS e headers de segurança

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

### Let’s Encrypt (Certbot)

```shell script
$ sudo apt install -y certbot python3-certbot-nginx
$ sudo certbot --nginx -d example.com -d www.example.com
$ sudo systemctl list-timers | grep certbot   # auto-renew
```

## Proxy reverso {.cols-3}

### Proxy básico

```nginx
upstream app {
  server 127.0.0.1:3000;
  # server unix:/run/app.sock; # alternative
}

server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_pass http://app;
  }
}
```

### WebSockets / HTTP Upgrade

```nginx
location /socket.io/ {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_pass http://app;
}
```

### Timeouts e buffers

```nginx
proxy_connect_timeout 5s;
proxy_send_timeout    60s;
proxy_read_timeout    60s;
proxy_buffering       on;
proxy_buffers 16 16k;
proxy_busy_buffers_size 24k;
```

## Estáticos, compressão e cache {.cols-3}

### Arquivos estáticos

```nginx
location /assets/ {
  alias /var/www/example/assets/;
  access_log off;
  expires 7d;
  add_header Cache-Control "public, max-age=604800, immutable";
}
```

### Gzip

```nginx
gzip on;
gzip_types text/plain text/css application/javascript application/json image/svg+xml;
gzip_min_length 1024;
gzip_comp_level 5;
```

### (Opcional) Brotli (se compilado)

```nginx
brotli on;
brotli_comp_level 5;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;
```

## Cache e microcache {.cols-3}

### Zona de cache do proxy

```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=micro:10m max_size=1g inactive=10m use_temp_path=off;
map $request_method $no_cache { default 0; POST 1; PUT 1; PATCH 1; DELETE 1; }
```

### Usar o cache

```nginx
location /api/ {
  proxy_cache micro;
  proxy_cache_bypass $no_cache;
  proxy_no_cache $no_cache;
  proxy_cache_valid 200 301 302 10s;
  proxy_cache_valid any 1s;
  add_header X-Cache-Status $upstream_cache_status;
  proxy_pass http://app;
}
```

### Bypass condicional

```nginx
# Skip cache when logged in (example cookie)
map $http_cookie $logged_in {
  default 0;
  ~*"(session|auth|logged_in)" 1;
}
proxy_cache_bypass $logged_in;
proxy_no_cache $logged_in;
```

## PHP‑FPM / FastCGI {.cols-3}

### Handler PHP básico

```nginx
location ~ \.php$ {
  include fastcgi_params;
  fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
  fastcgi_param DOCUMENT_ROOT $realpath_root;
  fastcgi_pass unix:/run/php/php8.2-fpm.sock;
  fastcgi_buffers 16 16k;
  fastcgi_read_timeout 60s;
}
```

### Front controller com try_files

```nginx
location / {
  try_files $uri $uri/ /index.php?$args;
}
```

### Dicas de segurança

```nginx
location ~* \.(?:ini|log|sh|sql|bak)$ { deny all; }
location ~ /\.(?!well-known) { deny all; }
```

## Rewrites e roteamento {.cols-3}

### try_files

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Rewrites com regex

```nginx
# Remove trailing slash (except root)
if ($request_uri ~* "^(.+)/+$") { return 301 $1; }

# Legacy path to new path
rewrite ^/old/(.*)$ /new/$1 permanent;
```

### SPA / History API

```nginx
location / {
  try_files $uri /index.html;
}
```

## Rate limiting e mitigação de DoS {.cols-3}

### Taxa de requisições

```nginx
# 10 req/s with burst 20 per IP
limit_req_zone $binary_remote_addr zone=reqs:10m rate=10r/s;

server {
  location /api/ {
    limit_req zone=reqs burst=20 nodelay;
  }
}
```

### Conexões simultâneas

```nginx
limit_conn_zone $binary_remote_addr zone=conns:10m;
server {
  location /download/ {
    limit_conn conns 10;
  }
}
```

### Tamanho do body e timeouts

```nginx
client_max_body_size 25m;
client_body_timeout 30s;
keepalive_timeout 65s;
```

## Headers de segurança e acesso {.cols-3}

### Hardening básico

```nginx
server_tokens off;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Allow/Deny

```nginx
location /admin/ {
  allow 192.168.0.0/16;
  deny all;
}
```

### CORS (exemplo)

```nginx
location /api/ {
  add_header Access-Control-Allow-Origin "https://app.example.com" always;
  add_header Access-Control-Allow-Credentials "true" always;
  if ($request_method = OPTIONS) {
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
    add_header Access-Control-Allow-Headers "Authorization, Content-Type";
    return 204;
  }
  proxy_pass http://app;
}
```

## Logs e debug {.cols-3}

### Formatos

```nginx
log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for" '
                '$request_time $upstream_response_time';

access_log /var/log/nginx/access.log main;
error_log  /var/log/nginx/error.log warn;
```

### Logs por location

```nginx
location /healthz { access_log off; }
```

### Depuração

```shell script
$ sudo nginx -t
$ sudo nginx -s reload
$ tail -f /var/log/nginx/error.log
```

## Upstreams e balanceamento {.cols-3}

### Estratégias

| Diretiva     | Significado                  |
| ------------ | ---------------------------- |
| (padrão)     | round‑robin                  |
| `least_conn` | menos conexões               |
| `ip_hash`    | sticky por IP do cliente     |
| `hash key`   | hash por chave personalizada |

{.show-header}

### Exemplo de upstream

```nginx
upstream api_backends {
  least_conn;
  server 10.0.0.11:8080 max_fails=3 fail_timeout=30s;
  server 10.0.0.12:8080 max_fails=3 fail_timeout=30s;
  # server backup.example:8080 backup;
}
```

### Health check e failover

```nginx
proxy_next_upstream error timeout http_502 http_503 http_504;
proxy_next_upstream_tries 3;
```

## Variáveis úteis {.cols-3}

### Requisição e cliente

| Variável           | Descrição                 |
| ------------------ | ------------------------- |
| `$host`            | Header Host / server name |
| `$server_name`     | server_name escolhido     |
| `$remote_addr`     | IP do cliente             |
| `$http_user_agent` | User‑Agent                |
| `$request_method`  | GET/POST/...              |

{.show-header .bold-first}

### Paths e arquivos

| Variável         | Descrição                  |
| ---------------- | -------------------------- |
| `$document_root` | Root atual                 |
| `$realpath_root` | Root resolvido por symlink |
| `$request_uri`   | Path + query               |
| `$uri`           | URI normalizada            |
| `$args`          | Query string bruta         |

{.show-header .bold-first}

### Upstream

| Variável                  | Descrição             |
| ------------------------- | --------------------- |
| `$upstream_addr`          | Servidor(es) upstream |
| `$upstream_status`        | Status do upstream    |
| `$upstream_response_time` | Tempo do upstream     |

{.show-header .bold-first}

## Stream (TCP/UDP) {.cols-3}

### Proxy TCP

```nginx
stream {
  upstream db {
    server 10.0.0.10:5432;
    server 10.0.0.11:5432;
  }
  server {
    listen 5432;
    proxy_pass db;
  }
}
```

### Proxy UDP

```nginx
stream {
  server {
    listen 53 udp;
    proxy_responses 1;
    proxy_timeout 2s;
    proxy_pass 1.1.1.1:53;
  }
}
```

### Controle de acesso

```nginx
stream {
  server {
    listen 6379;
    allow 10.0.0.0/8;
    deny all;
    proxy_pass 127.0.0.1:6379;
  }
}
```

## Snippets {.cols-3}

### Snippet de segurança

```nginx
# /etc/nginx/snippets/security.conf
server_tokens off;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Snippet de PHP

```nginx
# /etc/nginx/snippets/fastcgi-php.conf
location ~ \.php$ {
  include fastcgi_params;
  fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
  fastcgi_param DOCUMENT_ROOT $realpath_root;
  fastcgi_pass unix:/run/php/php8.2-fpm.sock;
}
```

### Snippet de headers de proxy

```nginx
# /etc/nginx/snippets/proxy-headers.conf
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```
