---
title: Cheat sheet do Jest
date: 2022-09-09 00:00:00
background: bg-blue-500
description: A complete cheat sheet on  Jest for testing React applications effectively.
tags:
  - React
  - Testing
  - Jest
categories:
  - Testes
intro: >-
  Jest é um framework de testes JavaScript criado pelo Facebook. Funciona out of the box com
  aplicações JavaScript modernas, especialmente as construídas com React ou Node.js. Seu principal objetivo é simplificar os testes oferecendo todos os recursos necessários em um único pacote: test runner, biblioteca de asserções, mocking, spies, relatórios de cobertura e snapshot testing.
---

---

## Visão rápida do Jest

Jest é um framework de testes JavaScript mantido pelo Facebook. É amplamente usado para **testes unitários**, **testes de integração** e até **testes end-to-end** em aplicações modernas de JavaScript e Node.js. O Jest vem com um conjunto poderoso de recursos, incluindo um test runner integrado, biblioteca de asserções, utilitários de mocking, snapshot testing e relatórios de cobertura de testes.

Este guia é voltado para o **Jest v20** e oferece uma visão geral concisa e prática de como usá-lo com eficácia.

### Conceitos-chave explicados

- **`describe()`**: Usado para agrupar casos de teste relacionados em uma suíte de testes.
- **`test()` / `it()`**: Define um único caso de teste. `it()` é apenas um alias no estilo BDD para `test()`.
- **`expect()`**: Biblioteca de asserções que verifica se um valor atende às expectativas.
- **`beforeEach()` / `afterEach()`**: Executa código antes ou depois de cada teste de uma suíte.
- **`beforeAll()` / `afterAll()`**: Executa código de setup/teardown uma vez antes ou depois de todos os testes.
- **`.only` / `.skip`**: Focam ou ignoram testes/suítes específicos.
- **Snapshot testing**: Captura a saída renderizada e a compara entre execuções de teste.
- **Mock functions**: Simulam o comportamento de funções ou monitoram como elas são chamadas.
- **Timer mocks**: Testam comportamentos baseados em tempo, como `setTimeout()` e `setInterval()`.
- **Async testing**: Escreva testes que lidam com Promises ou `async/await`.

---

### 🚀 Início rápido

```bash
npm install --save-dev jest babel-jest
```

Adicione isto ao seu `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Execute seus testes:

```bash
npm test -- --watch
```

📖 Veja: [Primeiros passos](https://jestjs.io/docs/getting-started)

---

## ✍️ Escrevendo testes

```js
describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2);
  });
});
```

- **describe**: Agrupa testes relacionados.
- **test** ou **it**: Define casos de teste individuais.
- **expect**: Faz asserções.

🔄 `it()` é um alias de `test()`.

---

## 🔧 Hooks de setup

Use-os para rotinas de setup/teardown:

```js
beforeEach(() => { ... });
afterEach(() => { ... });
beforeAll(() => { ... });
afterAll(() => { ... });
```

---

## 🎯 Focar ou ignorar testes

**Focar testes:**

```js
describe.only(...);
it.only(...); // or fit()
```

**Ignorar testes:**

```js
describe.skip(...);
it.skip(...); // or xit()
```

---

## 🏁 Flags opcionais de CLI

| Flag                  | Descrição                                   |
| --------------------- | ------------------------------------------- |
| `--coverage`          | Mostra o resumo de cobertura de testes      |
| `--detectOpenHandles` | Detecta handles não fechados (ex.: sockets) |
| `--runInBand`         | Executa os testes em série (útil para CI)   |

---

## ✅ Expectativas (matchers)

### Básico

```js
expect(value).not.toBe(value);
expect(value).toEqual(value);
expect(value).toBeTruthy();
```

> Nota: `toEqual` faz comparação de igualdade profunda.

### Snapshots

```js
expect(value).toMatchSnapshot();
expect(value).toMatchInlineSnapshot();
```

> Snapshots inline exigem o Prettier.

### Erros

```js
expect(fn).toThrow(error);
expect(fn).toThrowErrorMatchingSnapshot();
```

### Booleanos

```js
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeTruthy();
expect(value).toBeUndefined();
expect(value).toBeDefined();
```

### Números

```js
expect(value).toBeCloseTo(number, digits);
expect(value).toBeGreaterThan(number);
expect(value).toBeLessThanOrEqual(number);
```

### Objetos

```js
expect(value).toBeInstanceOf(Class);
expect(value).toMatchObject(obj);
expect(value).toHaveProperty('key', value);
```

### Arrays/strings

```js
expect(value).toContain(item);
expect(value).toHaveLength(number);
expect(value).toMatch(/pattern/);
```

### Matchers personalizados

```js
expect.extend(customMatchers);
expect.any(Constructor);
expect.assertions(1);
```

---

## ⏱️ Testes assíncronos

### Promises

```js
test('resolves correctly', () => {
  return somePromise().then(data => {
    expect(data).toEqual(...);
  });
});
```

### Async/Await

```js
test('awaits correctly', async () => {
  const result = await asyncFunc();
  expect(result).toBe(...);
});
```

📖 Veja: [Testes assíncronos no Jest](https://jestjs.io/docs/asynchronous)

---

## 📸 Snapshot testing

```js
it('renders correctly', () => {
  const output = something();
  expect(output).toMatchSnapshot();
});
```

Para componentes React:

```js
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## ⏲️ Timers

```js
jest.useFakeTimers();

it('delays call', () => {
  jest.runOnlyPendingTimers();
  jest.runAllTimers();
});
```

📖 Veja: [Mocks de timers](https://jestjs.io/docs/timer-mocks)

---

## 🧪 Funções mock

### Criando mocks

```js
const fn = jest.fn();
const squared = jest.fn((n) => n * n);
```

### Asserções

```js
expect(fn).toHaveBeenCalled();
expect(fn).toHaveBeenCalledTimes(2);
expect(fn).toHaveBeenCalledWith(arg1, arg2);
```

### Matchers flexíveis

```js
expect(fn).toHaveBeenCalledWith(expect.any(String));
expect(fn).toHaveBeenCalledWith(expect.arrayContaining([1, 2]));
```

### Instâncias

```js
const MyClass = jest.fn();
const a = new MyClass();
const b = new MyClass();
MyClass.mock.instances; // [a, b]
```

### Dados de chamada

```js
fn.mock.calls.length;
fn.mock.calls[0][0];
```

### Valores de retorno

```js
jest.fn().mockReturnValue('hello');
jest.fn().mockReturnValueOnce('hi');
```

### Implementações de mock

```js
const fn = jest
  .fn()
  .mockImplementationOnce(() => 1)
  .mockImplementationOnce(() => 2);
```

---

Este guia completo ajuda você a começar com os testes no Jest ou a usá-lo como um profissional. Ele combina perfeitamente com a React Testing Library para um workflow de testes centrado no usuário.
