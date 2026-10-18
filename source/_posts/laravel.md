---
title: Laravel
date: 2021-11-09 18:26:55
background: bg-[#e44230]
label: PHP
tags:
  - web
  - framework
  - php
categories:
  - Programação
intro: |
  [Laravel](https://laravel.com/docs/8.x/) é um framework de aplicação web expressivo e progressivo para PHP.
  Este cheat sheet traz uma referência dos comandos e recursos comuns do Laravel 8.
plugins:
  - copyCode
---

## Primeiros passos

### Requisitos {.row-span-2}

- Versão do PHP >= 7.3
- Extensão BCMath do PHP
- Extensão Ctype do PHP
- Extensão Fileinfo do PHP
- Extensão JSON do PHP
- Extensão Mbstring do PHP
- Extensão OpenSSL do PHP
- Extensão PDO do PHP
- Extensão Tokenizer do PHP
- Extensão XML do PHP

Garanta que seu servidor web direcione todas as requisições para o arquivo `public/index.php` da sua aplicação. Veja:
[Deploy](#deployment)

### Windows

- #### Instale o [Docker Desktop](https://www.docker.com/products/docker-desktop)
- #### Instale e ative o [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)
- #### Garanta que o Docker Desktop esteja [configurado para usar o WSL2](https://docs.docker.com/desktop/windows/wsl/)
- #### No terminal do WSL2:
      ```shell
      $ curl -s https://laravel.build/example-app | bash
      $ cd example-app
      $ ./vendor/bin/sail up
      ```
  {.marker-timeline}

Acesse a aplicação via `http://localhost`

### Mac

- #### Instale o [Docker Desktop](https://www.docker.com/products/docker-desktop)
- #### No terminal:
      ```shell
      $ curl -s https://laravel.build/example-app | bash
      $ cd example-app
      $ ./vendor/bin/sail up
      ```
  {.marker-timeline}

Acesse a aplicação via `http://localhost`

### Linux

```shell
$ curl -s https://laravel.build/example-app | bash
$ cd example-app
$ ./vendor/bin/sail up
```

Instalação via [Composer](https://getcomposer.org)

```bash
$ composer create-project laravel/laravel example-app
$ cd example-app
$ php artisan serve
```

Acesse a aplicação via `http://localhost`

## Configuração

### .env {.cols-2}

Recupere valores do arquivo `.env`

```php
env('APP_DEBUG');

// with default value
env('APP_DEBUG', false);
```

Determine o ambiente atual

```php
use Illuminate\Support\Facades\App;

$environment = App::environment();
```

Acessando valores de configuração com a sintaxe de "ponto"

```php
// config/app.php --> ['timezone' => '']
$value = config('app.timezone');

// Retrieve a default value if the configuration value does not exist...
$value = config('app.timezone', 'Asia/Seoul');
```

Defina valores de configuração em runtime:

```php
config(['app.timezone' => 'America/Chicago']);
```

### Modo de depuração

Ative (dev local):

```php
// .env file
APP_ENV=local
APP_DEBUG=true
// ...
```

Desative (produção):

```php
// .env file
APP_ENV=production
APP_DEBUG=false
// ...
```

### Modo de manutenção

Desative temporariamente a aplicação (código de status 503)

```bash
php artisan down
```

#### Desativar o modo de manutenção

```bash
php artisan up
```

#### Ignorar o modo de manutenção

```bash
php artisan down --secret="1630542a-246b-4b66-afa1-dd72a4c43515"
```

Acesse a URL da sua aplicação `https://example.com/1630542a-246b-4b66-afa1-dd72a4c43515` para definir um cookie e ignorar a
tela de manutenção

## Roteamento

### Métodos HTTP do roteador {.row-span-2}

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

Múltiplos métodos HTTP

```php
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});
```

### Definição básica {.row-span-2}

```php
use Illuminate\Support\Facades\Route;

// closure
Route::get('/greeting', function () {
    return 'Hello World';
});

// controller action
Route::get(
    '/user/profile',
    [UserProfileController::class, 'show']
);
```

### Injeção de dependência

```php
use Illuminate\Http\Request;

Route::get('/users', function (Request $request) {
    // ...
});
```

Use type hint nas dependências concretas para injeção automática

### Rotas de view

```php
// Argument 1: URI, Argument 2: view name
Route::view('/welcome', 'welcome');

// with data
Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
```

A rota só precisa retornar uma view.

### Route model binding {.row-span-4}

#### Binding implícito

Com closure

```php
use App\Models\User;

Route::get('/users/{user}', function (User $user) {
    return $user->email;
});

// /user/1 --> User::where('id', '=', 1);
```

Com ação de controller

```php
use App\Http\Controllers\UserController;
use App\Models\User;

// Route definition...
Route::get('/users/{user}', [UserController::class, 'show']);

// Controller method definition...
public function show(User $user)
{
    return view('user.profile', ['user' => $user]);
}
```

Com coluna de resolução personalizada

```php
use App\Models\Post;

Route::get('/posts/{post:slug}', function (Post $post) {
    return $post;
});

// /posts/my-post --> Post::where('slug', '=', 'my-post');
```

Sempre use uma coluna diferente para resolver

```php
// in App\Models\Post
public function getRouteKeyName()
{
    return 'slug';
}
```

Múltiplos models - o segundo é filho do primeiro

```php
use App\Models\Post;
use App\Models\User;

Route::get('/users/{user}/posts/{post:slug}', function (User $user, Post $post) {
    return $post;
});
```

Forma prática de injetar automaticamente as instâncias de model diretamente nas suas rotas

### Parâmetros de rota {.row-span-2}

Capture segmentos da URI dentro da sua rota

#### Parâmetros obrigatórios

```php
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});
```

Com injeção de dependência

```php
use Illuminate\Http\Request;

Route::get('/user/{id}', function (Request $request, $id) {
    return 'User '.$id;
});
```

#### Parâmetros opcionais

```php
Route::get('/user/{name?}', function ($name = null) {
    return $name;
});

Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});
```

### Rotas de redirecionamento

Status HTTP `302`

```php
Route::redirect('/here', '/there');
```

Defina o código de status

```php
Route::redirect('/here', '/there', 301);
```

Redirecionamento permanente `301`

```php
Route::permanentRedirect('/here', '/there');
```

### Restrições de expressão regular {.cols-2}

```php
Route::get('/user/{name}', function ($name) {
    //
})->where('name', '[A-Za-z]+');

Route::get('/user/{id}', function ($id) {
    //
})->where('id', '[0-9]+');

Route::get('/user/{id}/{name}', function ($id, $name) {
    //
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```

Veja também: [Cheat sheet de regex](/regex)

### Rotas nomeadas

Os nomes de rota devem ser sempre únicos

```php
Route::get('/user/profile', function () {
    //
})->name('profile');
```

Veja: [Helpers](#helpers-cols-3)

### Rotas de fallback

```php
Route::fallback(function () {
    //
});
```

Executada quando nenhuma outra rota corresponde

### Grupos de rotas

#### Middleware

```php
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // Uses first & second middleware...
    });

    Route::get('/user/profile', function () {
        // Uses first & second middleware...
    });
});
```

#### Prefixos de URI

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Matches The "/admin/users" URL
    });
});
```

#### Prefixo de nome

```php
Route::name('admin.')->group(function () {
    Route::get('/users', function () {
        // Route assigned name "admin.users"...
    })->name('users');
});
```

Compartilhe atributos entre rotas

### Acessando a rota atual

```php
use Illuminate\Support\Facades\Route;

// Illuminate\Routing\Route
$route = Route::current();

// string
$name = Route::currentRouteName();

// string
$action = Route::currentRouteAction();
```

## Helpers

### routes {.row-span-2}

#### Rota nomeada

```php
$url = route('profile');
```

Com parâmetros

```php
// Route::get('/user/{id}/profile', /*...*/ )->name('profile);

$url = route('profile', ['id' => 1]);

// /user/1/profile/
```

Com query string

```php
// Route::get('/user/{id}/profile', /*...*/ )->name('profile);

$url = route('profile', ['id' => 1, 'photos'=>'yes']);

// /user/1/profile?photos=yes
```

#### Redirecionamentos

```php
// Generating Redirects...
return redirect()->route('profile');
```

#### Models Eloquent

```php
echo route('post.show', ['post' => $post]);
```

O helper de rota extrai automaticamente a chave de rota do model. Veja [Roteamento](#routing-cols-4)

### Geração de URL

Gere URLs arbitrárias para sua aplicação que usarão automaticamente o esquema (HTTP ou HTTPS) e o host da
requisição atual

```php
$post = App\Models\Post::find(1);

echo url("/posts/{$post->id}");

// http://example.com/posts/1
```

#### URL atual

```php
// Get the current URL without the query string...
echo url()->current();

// Get the current URL including the query string...
echo url()->full();

// Get the full URL for the previous request...
echo url()->previous();
```

### URL de rota nomeada

```php
$url = route('profile');
```

Veja [Rota nomeada](#named-route)

### Tratamento de erros

```php
public function isValid($value)
{
    try {
        // Validate the value...
    } catch (Throwable $e) {
        report($e);

        return false;
    }
}
```

Reporte uma exceção mas continue tratando a requisição atual

### Exceções HTTP

```php
// page not found
abort(404);

// Unauthorized
abort(401);

// Forbidden
abort(403);

// Server Error
abort(500);
```

Gere uma resposta de exceção HTTP usando o código de status

## Controllers

### Básico

```php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function show($id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

Defina uma rota para este método do controller:

```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
```

## Requisições

### Proteção CSRF

O Laravel gera automaticamente um "token" CSRF para cada sessão de usuário ativa.  
Esse token é usado para verificar se o usuário autenticado é quem realmente está fazendo as requisições.

Obtenha o token da sessão atual:

```php
Route::get('/token', function (Request $request) {
    $token = $request->session()->token();

    $token = csrf_token();

    // ...
});
```

Formulários `POST`, `PUT`, `PATCH` ou `DELETE` devem incluir um campo oculto `_token` de CSRF no formulário para validar a
requisição.

```html
<form method="POST" action="/profile">
  @csrf

  <!-- Equivalent to... -->
  <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</form>
```

Veja [Formulários](#forms-cols-3)

### Acessando a requisição

Obtenha uma instância da requisição atual usando type hint na ação do controller ou na closure da rota

```php
// controller action
class UserController extends Controller
{
    public function store(Request $request)
    {
        $name = $request->input('name');
    }
}

// closure
Route::get('/', function (Request $request) {
    //
});
```

[Veja Roteamento](#routing)

### Path

As informações de path da requisição

```php
$uri = $request->path();

// https://example.com/foo/bar --> foo/bar
```

#### Corresponder o path ao padrão

Verifique se o path da requisição recebida corresponde a um padrão fornecido

```php
// * is wildcard
if ($request->is('admin/*')) {
    //
}
```

Determine se a requisição recebida corresponde a uma rota nomeada

```php
if ($request->routeIs('admin.*')) {
    //
}
```

### URL

URL completa da requisição recebida

```php
// URL without the query string
$url = $request->url();

// URL including query string
$urlWithQueryString = $request->fullUrl();

// append data to query string
$request->fullUrlWithQuery(['type' => 'phone']);
```

### Método da requisição

```php
$method = $request->method();

// verify that the HTTP verb matches a given string
if ($request->isMethod('post')) {
    //
}
```

### IP do cliente

```php
$ipAddress = $request->ip();
```

### Headers

```php
$value = $request->header('X-Header-Name');

$value = $request->header('X-Header-Name', 'default value');

// determine if the request contains a given header
if ($request->hasHeader('X-Header-Name')) {
    //
}

// retrieve a bearer token from the Authorization header
$token = $request->bearerToken();
```

### Tipo de conteúdo

Retorna um array com todos os tipos de conteúdo aceitos pela requisição

```php
$contentTypes = $request->getAcceptableContentTypes();
```

Verificação booleana de que tipos de conteúdo são aceitos pela requisição

```php
if ($request->accepts(['text/html', 'application/json'])) {
    // ...
}
```

### Input {.row-span-4}

Recupere todos os dados de input da requisição recebida como um array

```php
$input = $request->all();
```

Recupere todos os dados de input da requisição recebida como uma collection

```php
$input = $request->collect();

// retrieve subset as collection
$request->collect('users')->each(function ($user) {
    // ...
});
```

Veja [Helpers](#helpers-cols-3)

Recupere o input do usuário (também obtém valores da query string)

```php
$name = $request->input('name');

// with default value if none present
$name = $request->input('name', 'Sally');
```

Acesse inputs de array

```php
$name = $request->input('products.0.name');

$names = $request->input('products.*.name');
```

Recupere todos os valores de input como um array associativo:

```php
$input = $request->input();
```

Recupere apenas valores da query string:

```php
$name = $request->query('name');

// with default value
$name = $request->query('name', 'Helen');
```

Recupere todos os valores da query string como um array associativo:

```php
$query = $request->query();
```

#### Valores de input booleanos

Útil para inputs de checkbox ou outros booleanos. Retorna `true` para `1`, `"1"`, `true`, `"true"`, `"on"` e `"yes"`.  
Todos os outros valores retornam `false`

```php
$archived = $request->boolean('archived');
```

### Propriedades dinâmicas

Acesse inputs via propriedades.  
Se não for encontrado como input, os parâmetros de rota serão verificados.

```php
$name = $request->name;
```

### Recuperar input parcial

```php
$input = $request->only(['username', 'password']);

$input = $request->only('username', 'password');

$input = $request->except(['credit_card']);

$input = $request->except('credit_card');
```

### Verificar existência

Determine se o(s) valor(es) está(ão) presente(s)

```php
if ($request->has('name')) {
    //
}

// check if ALL values are present
if ($request->has(['name', 'email'])) {
    //
}

// if any values are present
if ($request->hasAny(['name', 'email'])) {
    //
}

// if a file is present on request
if ($request->hasFile('image')) {
    //
}
```

### Input antigo

Recupere o input da requisição anterior

```php
$username = $request->old('username');
```

Ou use o helper `old()`

```php
<input type="text" name="username" value="{{ old('username') }}">
```

Veja: [Helpers](#helpers-cols-3)  
Veja: [Formulários](#forms-cols-3)

### Arquivos enviados

Recupere o arquivo enviado da requisição

```php
$file = $request->file('photo');

$file = $request->photo;
```

Obtenha o path ou a extensão do arquivo

```php
$path = $request->photo->path();

$extension = $request->photo->extension();
```

Armazene o arquivo enviado com um nome de arquivo gerado aleatoriamente

```php
// path where the file should be stored relative to
// the filesystem's configured root directory
$path = $request->photo->store('images');

// optional 2nd param to specify the filesystem disk
$path = $request->photo->store('images', 's3');
```

Armazene o arquivo enviado e especifique o nome

```php
$path = $request->photo->storeAs('images', 'filename.jpg');

$path = $request->photo->storeAs('images', 'filename.jpg', 's3');
```

Veja mais: [Laravel File Storage](https://laravel.com/docs/8.x/filesystem)

## Views

### Introdução

- [Docs do Laravel - Views](https://laravel.com/docs/8.x/views)

```html
<!-- View stored in resources/views/greeting.blade.php -->

<html>
  <body>
    <h1>Hello, <?php echo $name; ?></h1>
  </body>
</html>
```

Crie uma view colocando um arquivo com a extensão `.blade.php` no diretório `resources/views`.

### Passar dados para as views

#### Como um array

```php
return view('greetings', ['name' => 'Victoria']);
```

#### Usando with()

```php
return view('greeting')
            ->with('name', 'Victoria')
            ->with('occupation', 'Astronaut');
```

Acesse cada valor usando as chaves dos dados

```html
<html>
  <body>
    <h1>Hello, {{ $name }}</h1>
    <!-- Or -->
    <h1>Hello, <?php echo $name; ?></h1>
  </body>
</html>
```

### Helper view

Retorne uma view de uma rota com o helper `view()`

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

Veja: [Rotas de view](#view-routes) e [Helpers](#helpers)

### Subdiretórios

```php
// resources/views/admin.profile.blade.php
return view('admin.profile');
```

## Templates Blade

### Introdução

- [Docs do Laravel - Templates Blade](https://laravel.com/docs/8.x/blade)

Blade é o motor de templates incluído no Laravel que também permite usar PHP puro.

### Views

Views Blade são retornadas usando o helper `view()`

```php
Route::get('/', function () {
    return view('welcome', ['name' => 'Samantha']);
});
```

Veja: [Views](#view-helper)

### Comentários

```html
{{-- This comment will not be present in the rendered HTML --}}
```

### Diretivas {.row-span-3}

#### Instruções if

```php
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif
```

#### isset & empty

```php
@isset($records)
    // $records is defined and is not null...
@endisset

@empty($records)
    // $records is "empty"...
@endempty
```

#### Autenticação

```php
@auth
    // The user is authenticated...
@endauth

@guest
    // The user is not authenticated...
@endguest
```

#### Loops

<!-- prettier-ignore -->
```html
@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor

@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse

@while (true)
    <p>I'm looping forever.</p>
@endwhile
```

Iteração de loop:

```php
@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif

    @if ($loop->last)
        This is the last iteration.
    @endif

    <p>This is user {{ $user->id }}</p>
@endforeach
```

Veja mais: [Variável de loop do Laravel](https://laravel.com/docs/8.x/blade#the-loop-variable)

### Exibindo dados

As instruções de echo do Blade `{{ }}` passam automaticamente pela função `htmlspecialchars` do PHP para prevenir ataques XSS.

Exiba o conteúdo da variável name:

```html
Hello, {{ $name }}.
```

Exiba o resultado de uma função PHP:

```html
The current UNIX timestamp is {{ time() }}.
```

Exiba dados sem escape com `htmlspecialchars`

```html
Hello, {!! $name !!}.
```

### Incluindo subviews

Inclua uma view Blade dentro de outra view.  
Todas as variáveis disponíveis para a view pai também ficam disponíveis para a view incluída

```html
<div>
  <!-- resources/views/shared/errors/blade.php -->
  @include('shared.errors')

  <form>
    <!-- Form Contents -->
  </form>
</div>
```

### PHP puro

Execute um bloco de PHP puro

```php
@php
    $counter = 1;
@endphp
```

### Stacks

O Blade permite fazer push para stacks nomeadas que podem ser renderizadas em outra view ou layout.  
Útil para bibliotecas JavaScript exigidas por views filhas

```html
<!-- Add to the stack -->
@push('scripts')
<script src="/example.js"></script>
@endpush
```

Renderize a stack

```html
<head>
  <!-- Head Contents -->

  @stack('scripts')
</head>
```

Adicione ao início de uma stack

```php
@push('scripts')
    This will be second...
@endpush

// Later...

@prepend('scripts')
    This will be first...
@endprepend
```

## Formulários

### Introdução

- [Docs do Laravel - Formulários](https://laravel.com/docs/8.x/blade#forms)

### Campo CSRF

Inclua um campo oculto de token CSRF para validar a requisição

<!-- prettier-ignore -->
```html
<form method="POST" action="/profile">
  @csrf

  ...
</form>
```

Veja: [Proteção CSRF](#csrf-protection)

### Campo de método

Como formulários HTML não conseguem fazer requisições `PUT`, `PATCH` ou `DELETE`, você precisa adicionar um campo oculto `_method` para simular
esses verbos HTTP:

<!-- prettier-ignore -->
```html
<form action="/post/my-post" method="POST">
  @method('PUT')

  ...
</form>
```

### Erros de validação

<!-- prettier-ignore -->
```html
<!-- /resources/views/post/create.blade.php -->

<label for="title">Post Title</label>

<input id="title" type="text" class="@error('title') is-invalid @enderror" />

@error('title')
  <div class="alert alert-danger">{{ $message }}</div>
@enderror
```

Veja: [Validação](#validation-cols-3)

### Repopulando formulários

Ao redirecionar por causa de um erro de validação, o input da requisição é gravado na sessão (flash).  
Recupere o input da requisição anterior com o método `old`

```php
$title = $request->old('title');
```

Ou o helper `old()`

```html
<input type="text" name="title" value="{{ old('title') }}" />
```

## Validação

### Introdução

- [Docs do Laravel - Validação](https://laravel.com/docs/8.x/validation)

Se a validação falhar, uma resposta de redirecionamento para a URL anterior será gerada.  
Se a requisição recebida for uma requisição XHR, uma resposta JSON com as mensagens de erro de validação será retornada.

### Lógica

```php
// in routes/web.php
Route::get('/post/create', [App\Http\Controllers\PostController::class, 'create']);
Route::post('/post', [App\Http\Controllers\PostController::class, 'store']);

// in app/Http/Controllers/PostController...
public function store(Request $request)
{
    $validated = $request->validate([
        // input name => validation rules
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ]);

    // The blog post is valid...
}
```

### Regras {.row-span-5}

Também podem ser passadas como um array

```php
$validatedData = $request->validate([
    'title' => ['required', 'unique:posts', 'max:255'],
    'body' => ['required'],
]);
```

#### after:date

O campo deve ser um valor posterior a uma data fornecida.

```php
'start_date' => 'required|date|after:tomorrow'
```

Em vez de uma string de data, você pode especificar outro campo para comparar com a data

```php
'finish_date' => 'required|date|after:start_date'
```

Veja [before:date](#beforedate)

#### after_or_equal:date

O campo deve ser um valor posterior ou igual à data fornecida.  
Veja [after:date](#afterdate)

#### before:date

O campo deve ser um valor anterior à data fornecida.  
O nome de outro campo pode ser fornecido como valor de `date`.  
Veja [after:date](#afterdate)

#### alpha_num

O campo deve conter apenas caracteres alfanuméricos

#### boolean

O campo deve poder ser convertido para `boolean`.  
Os valores aceitos são `true`, `false`, `1`, `0`, `"1"` e `"0"`

#### confirmed

O campo deve ter um campo correspondente `{field}_confirmation`.  
Por exemplo, se o campo for password, deve existir um campo `password_confirmation` correspondente

#### current_password

O campo deve corresponder à senha do usuário autenticado.

#### date

O campo deve ser uma data válida e não relativa, conforme a função PHP `strtotime`.

#### email

O campo deve estar formatado como um endereço de e-mail.

#### file

O campo deve ser um arquivo enviado com sucesso.  
Veja: [Arquivos enviados](#uploaded-files)

#### max:value

O campo deve ser menor ou igual a um valor máximo.  
Strings, numéricos, arrays e arquivos são avaliados como a regra [size](#sizevalue).

#### min:value

O campo deve ter um valor mínimo.  
Strings, numéricos, arrays e arquivos são avaliados como a regra [size](#sizevalue).

#### mimetypes:text/plain,...

O arquivo deve corresponder a um dos tipos MIME fornecidos:

```php
'video' => 'mimetypes:video/avi,video/mpeg,video/quicktime'
```

O conteúdo do arquivo será lido e o framework tentará adivinhar o tipo MIME, independentemente do tipo MIME fornecido pelo
cliente.

#### mimes:foo,bar,...

O campo deve ter um tipo MIME correspondente a uma das extensões listadas.

```php
'photo' => 'mimes:jpg,bmp,png'
```

O conteúdo do arquivo será lido e o framework tentará adivinhar o tipo MIME, independentemente do tipo MIME fornecido pelo
cliente.

[Lista completa de tipos MIME e extensões](https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types)

#### nullable

O campo pode ser null.

#### numeric

O campo deve ser numérico.

#### password

O campo deve corresponder à senha do usuário autenticado.

#### prohibited

O campo deve estar vazio ou não estar presente.

#### prohibited_if:anotherfield,value,...

O campo deve estar vazio ou não estar presente se o campo _anotherfield_ for igual a qualquer valor.

#### prohibited_unless:anotherfield,value,...

O campo deve estar vazio ou não estar presente a menos que o campo _anotherfield_ seja igual a qualquer valor.

#### required

O campo deve estar presente nos dados de input e não pode estar vazio.  
Um campo é considerado "vazio" se uma das seguintes condições for verdadeira:

- O valor é `null`.
- O valor é uma string vazia.
- O valor é um array vazio ou um objeto `Countable` vazio.
- O valor é um arquivo enviado sem path.

#### required_with:foo,bar,...

O campo deve estar presente e não vazio apenas se algum dos outros campos especificados estiver presente e não vazio

#### size:value

O campo deve ter um tamanho que corresponda ao valor fornecido.

- Para strings: número de caracteres
- Para dados numéricos: valor inteiro (também deve ter a regra `numeric` ou `integer`).
- Para arrays: contagem do array
- Para arquivos: tamanho do arquivo em kilobytes

```php
// Validate that a string is exactly 12 characters long...
'title' => 'size:12';
// Validate that a provided integer equals 10...
'seats' => 'integer|size:10';
// Validate that an array has exactly 5 elements...
'tags' => 'array|size:5';
// Validate that an uploaded file is exactly 512 kilobytes...
'image' => 'file|size:512';
```

#### unique:table,column

O campo não deve existir na tabela de banco de dados fornecida

#### url

O campo deve ser uma URL válida

[Veja todas as regras disponíveis](https://laravel.com/docs/8.x/validation#available-validation-rules)

### Validar senhas

Garanta que as senhas tenham um nível adequado de complexidade

```php
$validatedData = $request->validate([
    'password' => ['required', 'confirmed', Password::min(8)],
]);
```

O objeto de regra `Password` permite personalizar facilmente os requisitos de complexidade da senha

```php
// Require at least 8 characters...
Password::min(8)

// Require at least one letter...
Password::min(8)->letters()

// Require at least one uppercase and one lowercase letter...
Password::min(8)->mixedCase()

// Require at least one number...
Password::min(8)->numbers()

// Require at least one symbol...
Password::min(8)->symbols()
```

Garanta que uma senha não tenha sido comprometida em um vazamento público de dados de senhas

```php
Password::min(8)->uncompromised()
```

> _Usa o modelo [k-Anonymity](https://en.wikipedia.org/wiki/K-anonymity) por meio do
> serviço [haveibeenpwned.com](https://haveibeenpwned.com) sem sacrificar a privacidade ou a segurança do usuário_

Os métodos podem ser encadeados

```php
Password::min(8)
    ->letters()
    ->mixedCase()
    ->numbers()
    ->symbols()
    ->uncompromised()
```

### Exibir erros de validação

```php
<!-- /resources/views/post/create.blade.php -->

<h1>Create Post</h1>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<!-- Create Post Form -->
```

Veja: [Erros de validação](#validation-errors)

### Campos opcionais

Frequentemente você precisará marcar seus campos de requisição "opcionais" como `nullable` se não quiser que o validador considere
valores `null` como inválidos

```php
// publish_at field may be either null or a valid date representation
$request->validate([
    'title' => 'required|unique:posts|max:255',
    'body' => 'required',
    'publish_at' => 'nullable|date',
]);
```

### Input validado

Recupere os dados da requisição que passaram pela validação

```php
$validated = $request->validated();
```

Ou com `safe()`, que retorna uma instância de `Illuminate\Support\ValidatedInput`

```php
$validated = $request->safe()->only(['name', 'email']);

$validated = $request->safe()->except(['name', 'email']);

$validated = $request->safe()->all();
```

#### Iterar

```php
foreach ($request->safe() as $key => $value) {
    //
}
```

#### Acessar como um array

```php
$validated = $request->safe();

$email = $validated['email'];
```

## Sessão

### Introdução

- [Docs do Laravel - Sessão](https://laravel.com/docs/8.x/session)

O Laravel vem com diversos backends de sessão acessados por uma API unificada. O suporte a Memcached, Redis e banco de dados
está incluído.

#### Configuração

A configuração de sessão fica em `config/session.php`.  
Por padrão, o Laravel é configurado para usar o driver de sessão de arquivo

### Verificar Isset / Exists

Retorna `true` se o item estiver presente e não for `null`:

```php
if ($request->session()->has('users')) {
    //
}
```

Retorna `true` se estiver presente, mesmo que seja `null`:

```php
if ($request->session()->exists('users')) {
    //
}
```

Retorna `true` se o item for `null` ou não estiver presente:

```php
if ($request->session()->missing('users')) {
    //
}
```

### Recuperando dados {.row-span-2}

#### Via requisição

```php
// ...
class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        $value = $request->session()->get('key');

        //
    }
}
```

Passe um valor padrão como segundo argumento para usar se a chave não existir

```php
$value = $request->session()->get('key', 'default');

// closure can be passed and executed as a default
$value = $request->session()->get('key', function () {
    return 'default';
});
```

#### Via helper session

```php
Route::get('/home', function () {
    // Retrieve a piece of data from the session...
    $value = session('key');

    // Specifying a default value...
    $value = session('key', 'default');

    // Store a piece of data in the session...
    session(['key' => 'value']);
});
```

Veja: [Helper de sessão]()

#### Todos os dados da sessão

```php
$data = $request->session()->all();
```

#### Recuperar e excluir

Recupere e exclua um item da sessão

```php
$value = $request->session()->pull('key', 'default');
```

### Armazenar dados

Via uma instância de requisição

```php
$request->session()->put('key', 'value');
```

Via o helper global "session"

```php
session(['key' => 'value']);
```

Faça push de um novo valor em um valor de sessão que seja um array

```php
// array of team names
$request->session()->push('user.teams', 'developers');
```

## Logs

### Configuração

As opções de configuração do comportamento de logs ficam em `config/logging.php`.  
Por padrão, o Laravel usa o canal stack ao registrar mensagens, que agrega vários canais de log em um
único canal.

### Níveis {.row-span-2}

Todos os níveis de log definidos na [especificação RFC 5424](https://tools.ietf.org/html/rfc5424) estão disponíveis:

- emergency
- alert
- critical
- error
- warning
- notice
- info
- debug

### Facade Log {.row-span-2}

```php
use Illuminate\Support\Facades\Log;

Log::emergency($message);
Log::alert($message);
Log::critical($message);
Log::error($message);
Log::warning($message);
Log::notice($message);
Log::info($message);
Log::debug($message);
```

### Informações contextuais

```php
use Illuminate\Support\Facades\Log;

Log::info('User failed to login.', ['id' => $user->id]);
```

## Deploy

### Introdução

- [Docs do Laravel - Deploy](https://laravel.com/docs/8.x/deployment)

Garanta que seu servidor web direcione todas as requisições para o arquivo `public/index.php` da sua aplicação

### Otimização

#### Mapa do autoloader do Composer

```bash
composer install --optimize-autoloader --no-dev
```

#### Carregamento de configuração

Certifique-se de chamar a função `env` apenas dentro dos seus arquivos de configuração.  
Depois que a configuração for colocada em cache, o arquivo `.env` não será carregado e todas as chamadas à função `env` para
variáveis do `.env` retornarão `null`

```bash
php artisan config:cache
```

#### Carregamento de rotas

```bash
php artisan route:cache
```

#### Carregamento de views

```bash
php artisan view:cache
```

### Modo de depuração

A opção de debug no seu `config/app.php` determina quanta informação sobre um erro é realmente exibida ao
usuário.  
Por padrão, essa opção é definida com o valor da variável de ambiente `APP_DEBUG` no seu arquivo `.env`. No seu
ambiente de produção, esse valor deve ser sempre `false`.  
Se a variável `APP_DEBUG` estiver definida como `true` em produção, você corre o risco de expor valores de configuração sensíveis aos
usuários finais.

## Veja também

- [Docs do Laravel](https://laravel.com/docs/8.x)
- [Laracasts](https://laracasts.com/)
- [Laravel API](https://laravel.com/api/8.x/)
