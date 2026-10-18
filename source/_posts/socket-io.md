---
title: Socket io
date: 27-06-2025
icon: icon-style
background: bg-[#1289D8]
tags:
  - socket io
  - web
categories:
  - Programação
intro: |
  Socket.IO é uma biblioteca JavaScript para aplicações web em tempo real. Ela permite comunicação bidirecional baseada em eventos entre clientes (normalmente navegadores ou apps nativos) e servidores.
plugins:
  - copyCode
---

# Cheat Sheet Multilinguagem do Socket.IO (v4)

## Introdução

### Introdução

- [Site oficial do Socket.IO](https://socket.io/) _(socket.io)_
- [Documentação do Socket.IO (v4.1)](https://socket.io/docs/v4/) _(socket.io)_
- [Repositório do Socket.IO no GitHub](https://github.com/socketio/socket.io) _(github.com)_
- [Primeiros passos com Socket.IO (tutorial de app de chat)](https://socket.io/get-started/chat/) _(socket.io)_
- [Tutorial de Socket.IO do FreeCodeCamp](https://www.freecodecamp.org/news/socket-io-tutorial/) _(freecodecamp.org)_

## Instalação / Configuração

### Instalação / Configuração

**JavaScript (Node.js)**

```bash
npm install socket.io socket.io-client
```

**Python**

```bash
pip install python-socketio eventlet
# or
pip install python-socketio aiohttp
```

**Java**

```groovy
implementation 'io.socket:socket.io-client:2.0.1'
```

### Instalação / Configuração

**Swift (iOS)**

```ruby
pod 'Socket.IO-Client-Swift', '~> 16.0.1'
```

**C# (.NET)**

```powershell
Install-Package SocketIoClientDotNet
```

**React Native**

```bash
npm install socket.io-client
```

### Instalação / Configuração

**Go**

```bash
go get github.com/googollee/go-socket.io
```

**Rust**

```bash

cargo add socketio-client

```

---

## Conexão / Configuração

### JavaScript (cliente no navegador e servidor Node.js)

**Cliente**

```js
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');
```

**Servidor**

```js
const io = require('socket.io')(3000, {
  cors: { origin: '*' }
});
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
});
```

### Python (cliente e servidor)

**Cliente**

```python
import socketio
sio = socketio.Client()
sio.connect('http://localhost:3000')
```

**Servidor**

```python
import socketio, eventlet, flask

app = flask.Flask(__name__)
sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio, app)

@sio.event
def connect(sid, environ):
    print('Client connected:', sid)

if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 3000)), app)
```

### Java (cliente e servidor)

**Cliente**

```java
IO.Options opts = new IO.Options();
Socket socket = IO.socket("http://localhost:3000", opts);
socket.connect();
```

**Servidor**

```java
import io.socket.engineio.server.EngineIoServer;
import io.socket.server.SocketIoServer;

EngineIoServer engineIo = new EngineIoServer();
SocketIoServer io = new SocketIoServer(engineIo);
io.listen(3000);

io.on("connection", args -> {
    var client = args[0];
    System.out.println("Client connected: " + client.id());
});
```

### Swift (cliente iOS e servidor)

**Cliente**

```swift
let manager = SocketManager(
  socketURL: URL(string: "http://localhost:3000")!,
  config: [.log(true), .compress]
)
let socket = manager.defaultSocket
socket.connect()
```

**Servidor**
_Configurações de servidor em Swift são incomuns; normalmente usa-se Node.js ou Python._

### C# (.NET cliente e servidor)

**Cliente**

```csharp
var socket = IO.Socket("http://localhost:3000");
socket.Connect();
```

**Servidor**

```csharp
using Fleck;
var server = new WebSocketServer("ws://0.0.0.0:3000");
server.Start(socket =>
{
    socket.OnOpen = () => Console.WriteLine("Client connected");
});
```

### React Native (cliente)

**Cliente**

```js
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
```

_(O lado do servidor é o mesmo que em JavaScript acima.)_

### Go (cliente e servidor)

**Cliente**

```go
import "github.com/googollee/go-socket.io-client"
socket, err := gosocketio.Dial(
    gosocketio.GetUrl("localhost", 3000, false),
    transport.GetDefaultWebsocketTransport(),
)
```

**Servidor**

```go
import (
    "github.com/googollee/go-socket.io"
    "net/http"
)

server, _ := socketio.NewServer(nil)
server.OnConnect("/", func(s socketio.Conn) error {
    fmt.Println("Client connected:", s.ID())
    return nil
})
http.Handle("/socket.io/", server)
go http.ListenAndServe(":3000", nil)
```

### Rust (cliente e servidor)

**Cliente**

```rust
use socketio_client::ClientBuilder;

async fn run() -> Result<(), Box<dyn std::error::Error>> {
    let socket = ClientBuilder::new("http://localhost:3000")
        .transport("websocket")
        .connect()
        .await?;
    Ok(())
}
```

**Servidor**
_O suporte a servidor em Rust é experimental; normalmente use servidores Node.js/Python._

---

## Emitindo e ouvindo eventos

### JavaScript (cliente e servidor)

**Cliente**

```js
socket.emit('msg', 'Hi');
socket.on('reply', (data) => console.log('Reply:', data));
```

**Servidor**

```js
io.on('connection', (socket) => {
  socket.on('msg', (msg) => {
    console.log('Received:', msg);
    socket.emit('reply', 'Hello from server');
  });
});
```

### Python (cliente e servidor)

**Cliente**

```python
sio.emit('msg', 'Hi')

@sio.on('reply')
def on_reply(data):
    print('Reply:', data)
```

**Servidor**

```python
@sio.event
def msg(sid, data):
    print('Received:', data)
    sio.emit('reply', 'Hello from server', to=sid)
```

### Java (cliente e servidor)

**Cliente**

```java
socket.emit("msg", "Hi");
socket.on("reply", args -> System.out.println("Reply: " + args[0]));
```

**Servidor**

```java
io.on("connection", args -> {
    var client = args[0];
    client.on("msg", msgArgs -> {
        System.out.println("Received: " + msgArgs[0]);
        client.emit("reply", "Hello from server");
    });
});
```

### Swift (cliente e servidor)

**Cliente**

```swift
socket.emit("msg", "Hi")
socket.on("reply") { data, _ in
  print("Reply:", data[0])
}
```

**Servidor**
_O lado do servidor em Swift é raro; use Node.js/Python._

### C# (cliente e servidor)

**Cliente**

```csharp
socket.Emit("msg", "Hi");
socket.On("reply", data => Console.WriteLine("Reply: " + data));
```

**Servidor**

```csharp
socket.OnMessage = message =>
{
    Console.WriteLine("Received: " + message);
    socket.Send("reply", "Hello from server");
};
```

### Go (cliente e servidor)

**Cliente**

```go
socket.Emit("msg", "Hi")
socket.On("reply", func(msg string) {
    fmt.Println("Reply:", msg)
})
```

**Servidor**

```go
server.OnEvent("/", "msg", func(s socketio.Conn, msg string) {
    fmt.Println("Received:", msg)
    s.Emit("reply", "Hello from server")
})
```

### Rust (cliente e servidor)

**Cliente**

```rust
socket.emit("msg", Payload::String("Hi"));
socket.on("reply", |payload| println!("Reply: {:?}", payload));
```

**Servidor**
_Experimental; normalmente use Node.js/Python._

---

## Broadcasting e rooms

### Cliente (todas as linguagens)

- **Entrar em uma room:**

  ```js
  // JavaScript/Python/C#/etc.
  socket.emit('join', 'room1');
  socket.on('msg', (data) => console.log('Room message:', data));
  ```

### Servidor (todas as linguagens)

- **Node.js**

  ```js
  io.on('connection', (socket) => {
    socket.on('join', (room) => {
      socket.join(room);
      io.to(room).emit('msg', 'Hello Room');
    });
  });
  ```

- **Python**

  ```python
  @sio.event
  def join(sid, room):
      sio.enter_room(sid, room)
      sio.emit('msg', 'Hello Room', room=room)
  ```

- **Go**

  ```go
  server.OnEvent("/", "join", func(s socketio.Conn, room string) {
      s.Join(room)
      server.BroadcastToRoom("/", room, "msg", "Welcome")
  })
  ```

---

## Desconexões e erros

### Cliente (todas as linguagens)

```js
socket.on('disconnect', (reason) => console.log('Disconnected:', reason));
socket.on('connect_error', (err) => console.error('Connection error:', err));
```

```python
@sio.event
def disconnect():
    print('Disconnected')

@sio.event
def connect_error(data):
    print('Connection error:', data)
```

```go
// Go client library varies; similar patterns apply.
```

### Servidor (todas as linguagens)

```js
io.on('connection', (socket) => {
  socket.on('disconnect', (reason) =>
    console.log('Client disconnected:', reason)
  );
});
```

```go
server.OnDisconnect("/", func(s socketio.Conn, reason string) {
    fmt.Println("Client disconnected:", reason)
})
```

---

## Namespaces

### Cliente (todas as linguagens)

```js
const adminSocket = io('/admin');
```

```python
sio.connect('http://localhost:3000/admin', namespaces=['/admin'])
```

### Servidor (todas as linguagens)

```js
io.of('/admin').on('connection', (socket) => {
  console.log('Admin connected:', socket.id);
});
```

```go
server.Of("/admin").OnConnect(func(s socketio.Conn) {
  fmt.Println("Admin connected:", s.ID())
})
```

---

## Autenticação (token básico)

### Cliente (todas as linguagens)

```js
const socket = io('http://localhost:3000', {
  auth: { token: 'abc' }
});
```

```python
sio.connect('http://localhost:3000', auth={'token': 'abc'})
```

### Servidor (todas as linguagens)

```js
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  token === 'abc' ? next() : next(new Error('Auth error'));
});
```

---

## Dicas de debugging e logging

### Cliente

- Registre os eventos:

  ```js
  socket.onAny((event, ...args) => console.log(event, args));
  ```

- Inspecione a rede nas devtools do navegador.

### Servidor

- **JavaScript**

  ```bash
  DEBUG=socket.io* node server.js
  ```

- **Python**

  ```python
  import logging
  logging.getLogger('socketio').setLevel(logging.DEBUG)
  ```

- **Go**
  Imprima erros de handler e use middleware para logs estruturados.

---

## Recursos avançados

### Middleware

**Cliente**
_(Raramente necessário)_

**Servidor**

```js
io.use((socket, next) => {
  console.log('Middleware:', socket.id);
  next();
});
```

```go
server.Use(func(s socketio.Conn, next func()) {
  fmt.Println("Middleware triggered:", s.ID())
  next()
})
```

### Streaming binário

**Cliente**

```js
fetch('/file')
  .then((res) => res.arrayBuffer())
  .then((buf) => socket.emit('file', buf));
```

**Servidor**

```go
server.OnEvent("/", "file", func(s socketio.Conn, data []byte) {
    ioutil.WriteFile("upload", data, 0644)
})
```

---

## Boas práticas

# Implemente reconexão com backoff exponencial no cliente.

# Sanitize e valide todos os dados dos dois lados.

# Use TLS em produção e rotacione os tokens de autenticação com frequência.

# Separe responsabilidades com namespaces e rooms.

# Limite eventos de alta frequência e ative a compressão quando possível.

> Documentação oficial: [https://socket.io/docs/v4/](https://socket.io/docs/v4/)
