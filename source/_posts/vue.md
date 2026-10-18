---
title: Vue
date: 2025-06-13 14:45:00
background: bg-[#43CF96]
tags:
  - vue
  - web
categories:
  - Programação
intro: |
  Um cheat sheet do Vue 3 com os conceitos mais importantes, reatividade, sistema de componentes, roteamento e muito mais. Atualizado para a versão mais recente e perfeito tanto para iniciantes quanto para usuários avançados.
plugins:
  - copyCode
  - runCode
---

## 📘 Vue.js 3 Cheatsheet – do básico ao avançado

> A referência definitiva para dominar o Vue 3.


## ⚙️ 1. Setup

### CDN (início rápido)

```html
<script src="https://unpkg.com/vue@3"></script>
<div id="app">{{ message }}</div>
<script>
  Vue.createApp({
    data() {
      return { message: "Hello Vue!" };
    }
  }).mount("#app");
</script>
```
### Vite + Vue

```bash
npm create vite@latest my-vue-app --template vue
cd my-vue-app
npm install
npm run dev
```


## 🧠 2. Estrutura do app

```
src/
├─ components/
├─ views/
├─ App.vue
├─ main.js
```


## 📦 3. Data, Methods e Template

```js
data() {
  return {
    count: 0,
    message: "Welcome!"
  };
},
methods: {
  increment() {
    this.count++;
  }
}
```

```html
<h1>{{ message }}</h1>
<button @click="increment">+</button>
```


## 🧰 4. Diretivas

| Diretiva        | Finalidade                 |
| --------------- | -------------------------- |
| `v-bind` / `:`  | Vincula atributos          |
| `v-model`       | Vinculação bidirecional    |
| `v-if / v-else` | Renderização condicional   |
| `v-show`        | Alterna a visibilidade     |
| `v-for`         | Renderização de listas     |
| `v-on` / `@`    | Tratamento de eventos      |
| `v-slot`        | Uso de slots nomeados/escopados |

### Exemplo

```html
<input v-model="name" />
<p v-if="name">Hi, {{ name }}!</p>
<ul>
  <li v-for="item in list" :key="item.id">{{ item }}</li>
</ul>
```


## 🪝 5. Lifecycle Hooks

```js
created() {},
mounted() {},
updated() {},
unmounted() {}
```


## 🎯 6. Eventos

```html
<button @click="sayHi">Click</button>
<input @keyup.enter="submit" />
```


## 🔁 7. Computed e Watch

```js
computed: {
  reversed() {
    return this.message.split('').reverse().join('');
  }
},
watch: {
  count(newVal, oldVal) {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
  }
}
```


## 🧱 8. Componentes

### Registrar + Usar

```js
app.component("Greeting", {
  props: ["name"],
  template: `<h1>Hello, {{ name }}!</h1>`
});
```

```html
<Greeting name="Sumangal" />
```


## 🔗 9. Props e Emits

### Props

```js
props: {
  title: String,
  age: {
    type: Number,
    default: 18
  }
}
```

### Emit

```js
this.$emit("custom-event", payload);
```


## 🔄 10. v-model com componentes

```js
props: ['modelValue'],
emits: ['update:modelValue']
```

```html
<input
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
/>
```


## ⚒ 11. Composition API

```js
import { ref, computed } from "vue";

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);

    const increment = () => count.value++;

    return { count, double, increment };
  }
};
```


## 🌐 12. Vue Router

```bash
npm install vue-router
```

### router.js

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
```

### main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router).mount("#app");
```


## 📦 13. Pinia (alternativa ao Vuex)

```bash
npm install pinia
```

### store/counter.js

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
```

```js
const counter = useCounterStore();
counter.increment();
```


## 🎨 14. Slots

```html
<!-- Default -->
<slot></slot>

<!-- Named -->
<slot name="header"></slot>

<!-- Scoped -->
<slot :user="user"></slot>
```


## 🧪 15. Testes

### Vitest + Vue Test Utils

```bash
npm install vitest @vue/test-utils
```

```js
import { mount } from "@vue/test-utils";
import MyComponent from "@/components/MyComponent.vue";

test("renders", () => {
  const wrapper = mount(MyComponent);
  expect(wrapper.text()).toContain("Hello");
});
```


## 🧼 16. Boas práticas

* Use `ref()` para primitivos, `reactive()` para objetos
* Use a sintaxe `<script setup>` em SFCs
* Divida a UI em componentes pequenos e reutilizáveis
* Sempre defina `key` no `v-for`
* Use slots para uma composição flexível


## 🛠 17. Ferramentas de desenvolvimento

* 🧩 [Vue DevTools](https://devtools.vuejs.org/)
* 🧠 [Volar](https://github.com/vuejs/language-tools) para VSCode
* ⚡ [Vite](https://vitejs.dev) para um ambiente de desenvolvimento rápido


## 📚 18. Recursos oficiais

* 📘 [Vue Docs](https://vuejs.org)
* 🧭 [Router Docs](https://router.vuejs.org)
* 📦 [Pinia Docs](https://pinia.vuejs.org)
* 🧪 [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)
