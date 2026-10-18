---
title: Svelte
date: 2025-08-16 10:30:00
background: bg-[#FF3E00]
tags:
  - svelte
  - web
categories:
  - Programação
intro: |
  Um cheat sheet de Svelte com os conceitos, funções, reatividade e muito mais. Uma referência rápida completa para iniciantes, atualizada para o Svelte 5.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### Sintaxe básica

```js
<script>
  let name = 'world';
</script>

<h1>Hello {name}!</h1>
```

### Expressões

```js
<script>
  let firstName = "Zehan";
  let lastName = "Khan";

  function fullName() {
    return `${firstName} ${lastName}`;
  }
</script>

<h1>Hello {fullName()}!</h1>
```

### Atributos

```js
<script>
  let avatarUrl = 'https://example.com/avatar.png';
</script>

<img src={avatarUrl} alt="Avatar" />
<button class="btn">Click me</button>
```

### Funções no markup

```js
<script>
  function name() {
    return "Zehan";
  }
</script>

<h1>Hi {name()}!</h1>
```

### Renderização condicional {.col-span-2}

```js
<script>
  let temperature = 24;
  let city = "New York";
</script>

{#if temperature >= 20}
  <p>It is {temperature}°C (Warm) in {city}</p>
{:else}
  <p>It is {temperature}°C in {city}</p>
{/if}
```

Nota: componentes Svelte sempre devem retornar um elemento raiz ou conteúdo.

## Componentes

### Componente funcional

```js
<script>
  let { name = "User" } = $props();
</script>

<div class="UserProfile">
  <div>Hello</div>
  <div>{name}</div>
</div>
```

### Incorporar um componente interno

```js
<script>
  import UserAvatar from './UserAvatar.svelte';
</script>

<div class="UserProfile">
  <UserAvatar />
  <UserAvatar />
</div>
```

### Incorporar um componente externo

```js
<script>
  import ComponentName from 'some-library';
</script>

<div class="UserProfile">
  <ComponentName />
</div>
```

Nota: componentes externos devem ser instalados via npm antes.

### Componentes funcionais avançados

```js
<script>
  let { firstName, lastName } = $props();

  function fullName() {
    return `${firstName} ${lastName}`;
  }
</script>

<p>{fullName()}</p>
```

## Propriedades {.cols-2}

### Passar propriedades para um componente

```js
<Student firstName="Zehan" lastName="Khan" age={23} pro={true} />
```

### Receber as propriedades em um componente

```js
<script>
  let { firstName, lastName, age } = $props();
</script>

<h1>{firstName} {lastName} is {age}.</h1>
```

## Estado {.cols-1}

### Estado local

```js
<script>
  let name = $state("Zehan");

  function updateName() {
    name = prompt("What is your name?") || name;
  }
</script>

<h1>{name}</h1>
<button onclick={updateName}>Update name</button>
```

## Eventos {.cols-1}

### Listener de evento

```js
<script>
  function handleClick(event) {
    event.preventDefault();
    alert("Hello World");
  }
</script>

<a href="#" onclick|preventDefault={handleClick}>
  Say Hi
</a>
```

Nota: os listeners de evento mais comuns são `onclick` e `onsubmit`.

## Laços {.cols-2}

### Percorrer um array

```js
<script>
  let elements = ["one", "two", "three"];
</script>

<ul>
  {#each elements as value, index}
    <li>{value}</li>
  {/each}
</ul>
```

### Percorrer um array de objetos

```js
<script>
  let elements = [
    { name: "one", value: 1 },
    { name: "two", value: 2 },
    { name: "three", value: 3 }
  ];
</script>

<ul>
  {#each elements as element, index}
    <li>
      The value for {element.name} is {element.value}
    </li>
  {/each}
</ul>
```

## Formulários {.cols-1}

### Exemplo de formulário

```js
<script>
  let username = $state("");
  let password = $state("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Logging in with ${username} and ${password}`);
  }
</script>

<form onsubmit={handleSubmit}>
  <input type="text" placeholder="Username" bind:value={username} />
  <input type="password" placeholder="Password" bind:value={password} />
  <input type="submit" value="Login" />
</form>
```

## CSS {.cols-1}

### CSS com escopo

```js
<style>
  .student {
    color: blue;
  }
</style>

<div class="student">Zehan Khan</div>
```

## Buscar dados {.cols-1}

### Buscar dados com onMount

```js
<script>
  import { onMount } from 'svelte';
  let notifications = [];
  let loading = $state(true);

  onMount(async () => {
    const res = await fetch("https://notifications.com");
    notifications = await res.json();
    loading = false;
  });
</script>

{#if loading}
  <p>Loading notifications...</p>
{:else}
  <ul>
    {#each notifications as note}
      <li>{note.title}</li>
    {/each}
  </ul>
{/if}
```

Nota: use `onMount` para efeitos colaterais como chamadas de API.

## Hooks de ciclo de vida {.cols-1}

### onMount

```js
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Component mounted');
  });
</script>
```

### beforeUpdate

```js
<script>
  import { beforeUpdate } from 'svelte';

  beforeUpdate(() => {
    console.log('Before component updates');
  });
</script>
```

### afterUpdate

```js
<script>
  import { afterUpdate } from 'svelte';

  afterUpdate(() => {
    console.log('After component updates');
  });
</script>
```

### onDestroy

```js
<script>
  import { onDestroy } from 'svelte';

  onDestroy(() => {
    console.log('Component destroyed');
  });
</script>
```

Nota: as funções de ciclo de vida do Svelte são semelhantes aos React Hooks, mas são importadas individualmente e usadas
diretamente no bloco `<script>`.

## Mais recursos do Svelte {.cols-1}

### Store derivado

```js
// store.js
import { writable, derived } from 'svelte/store';

export const count = writable(0);
export const double = derived(count, ($count) => $count * 2);
```

```js
// App.svelte
<script>
  import { count, double } from './store.js';
</script>

<p>Count: {$count}</p>
<p>Double: {$double}</p>
```

### Store de leitura

```js
import { readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
```

### Declarações reativas

```js
<script>
  let a = $state(2);
  let b = $state(3);
  let sum = $derived(a + b);
</script>

<p>{sum}</p>
```

### Statements reativos com efeitos colaterais

```js
<script>
  let name = 'Zehan';
  $effect(() => console.log('Name changed to', name));
</script>
```

### Vincular a propriedades do DOM

```js
<script>
  let text = $state('');
</script>

<textarea bind:value={text} />
<p>{text.length} characters</p>
```

### Vincular inputs agrupados (radio, checkbox)

```js
<script>
  let selected = $state('apple');
</script>

<label><input type="radio" bind:group={selected} value="apple" /> Apple</label>
<label><input type="radio" bind:group={selected} value="orange" /> Orange</label>
<p>Selected: {selected}</p>
```

### Diretivas de classe e estilo

```js
<script>
  let isActive = true;
</script>

<div class:active={isActive}>Toggle me</div>
```

```js
<script>
  let size = 16;
</script>

<p style:font-size={`${size}px`}>Resizable text</p>
```

### Blocos await

```js
<script>
  let userPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
</script>

{#await userPromise}
  <p>Loading...</p>
{:then user}
  <p>{user.name}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await}
```

### SSR com SvelteKit (exemplo básico)

```js
// +page.server.js
export async function load({ fetch }) {
  const res = await fetch('/api/data');
  const data = await res.json();
  return { data };
}
```

```js
// +page.svelte
<script>
  let { data } = $props();
</script>

<h1>{data.title}</h1>
```

Nota: requer a configuração do SvelteKit para rotas SSR.
