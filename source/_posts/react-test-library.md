---
title: 'Cheat sheet do React Testing Library'
date: 2022-09-09 00:00:00
background: bg-blue-500
tags:
  - react
  - testing
  - javascript
  - cheatsheet

categories:
  - Testes

intro: |
  Quando se trata de testar aplicações React manualmente, podemos escolher renderizar árvores de componentes individuais em um ambiente de teste simplificado ou executar a aplicação completa em um navegador realista (teste end-to-end). Mas, para testes automatizados, o React Testing Library (RTL) é recomendado pela sua abordagem centrada no usuário e pela manutenibilidade.
plugins:
  - copyCode
---

## Introdução

O React Testing Library é construído sobre o DOM Testing Library para testar componentes React consultando e interagindo com nós reais do DOM, evitando depender de detalhes de implementação.

## Nível básico

### 1. Propósito e solução

O RTL prioriza a manutenibilidade ao focar no comportamento visível para o usuário:

- Os testes são executados em nós reais do DOM.
- As queries refletem as interações do usuário.
- `data-testid` como válvula de escape quando necessário.
- Incentiva a acessibilidade.

### 2. Um teste básico de renderização de componente

**Componente (App.js):**

```js
const title = 'Hello, World!';

function App() {
  return <div>{title}</div>;
}

export default App;
```

**Teste (App.test.js):**

```js
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});
```

Adicione debug para inspecionar a saída:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});
```

Saída no console:

```html
<body>
  <div>
    <div>Hello, World!</div>
  </div>
</body>
```

### 3. Por que usar RTL em vez do Enzyme?

1. Testes baseados em interações do usuário, não em APIs internas.
2. Melhora a manutenibilidade após refatorações.
3. Sintaxe intuitiva (`getByText`, `getByAltText`, etc.).

### 4. Queries no RTL

```js
import { render, screen } from '@testing-library/react';

test('should show login form', () => {
  render(<Login />);
  const input = screen.getByLabelText('Username');
  // events & assertions
});
```

**Queries de elemento único:**

- `getBy*`: lança erro se nada for encontrado
- `queryBy*`: retorna null se nada for encontrado
- `findBy*`: Promise assíncrona

**Queries de múltiplos elementos:**

- `getAllBy*`: lança erro se nada for encontrado
- `queryAllBy*`: retorna \[] se nada for encontrado
- `findAllBy*`: array de Promises assíncronas

### 5. Nível de teste da árvore de componentes

- Teste no nível de interação do usuário, não por componente filho individual, a menos que seja necessário.

## Nível intermediário

### 1. Jest vs RTL

- **Jest**: executor de testes e biblioteca de asserções (`describe`, `test`, `expect`).
- **RTL**: utilitários de DOM para React; funciona dentro do Jest (ou de outros runners).

### 2. Mock com MSW

```js
// fetch.test.jsx
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fetch from '../fetch';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) =>
    res(ctx.json({ greeting: 'hello there' }))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />);
  fireEvent.click(screen.getByText('Load Greeting'));
  await waitFor(() => screen.getByRole('heading'));
  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
});

test('handles server error', async () => {
  server.use(rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))));
  render(<Fetch url="/greeting" />);
  fireEvent.click(screen.getByText('Load Greeting'));
  await waitFor(() => screen.getByRole('alert'));
  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toBeDisabled();
});
```

### 3. Opções do `render`

```js
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders a message', () => {
  const table = document.createElement('table');
  const { container } = render(<TableBody {...props} />, {
    container: document.body.appendChild(table),
    baseElement: document.body,
    hydrate: true,
    legacyRoot: true,
    queries: {
      /* custom queries */
    }
  });
  expect(container).toBeInTheDocument();
});
```

### 4. Uso do `renderHook`

```js
import { renderHook } from '@testing-library/react';

test('returns logged in user', () => {
  const { result, rerender } = renderHook(
    ({ name } = {}) => useLoggedInUser(name),
    { initialProps: { name: 'Alice' } }
  );
  expect(result.current).toEqual({ name: 'Alice' });
  rerender({ name: 'Bob' });
  expect(result.current).toEqual({ name: 'Bob' });
});
```

## Nível avançado

### 1. Adicionando queries personalizadas

```js
const dom = require('@testing-library/dom');
const { queryHelpers, buildQueries } = require('@testing-library/react');

// Override testId attribute
export const queryByTestId = queryHelpers.queryByAttribute.bind(
  null,
  'data-test-id'
);
export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  null,
  'data-test-id'
);
export function getAllByTestId(container, id, ...rest) {
  const els = queryAllByTestId(container, id, ...rest);
  if (!els.length)
    throw queryHelpers.getElementError(
      `No element with [data-test-id="${id}"]`,
      container
    );
  return els;
}
export function getByTestId(container, id, ...rest) {
  const els = getAllByTestId(container, id, ...rest);
  if (els.length > 1)
    throw queryHelpers.getElementError(
      `Multiple elements with [data-test-id="${id}"]`,
      container
    );
  return els[0];
}
```

Ou usando `buildQueries`:

```js
const queryAllByDataCy = (...args) =>
  queryHelpers.queryAllByAttribute('data-cy', ...args);
const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy
] = buildQueries(
  queryAllByDataCy,
  (c, v) => `Found multiple elements with data-cy="${v}"`,
  (c, v) => `Unable to find element with data-cy="${v}"`
);
```

### 2. Ignorando a limpeza automática

- Via CLI: `cross-env RTL_SKIP_AUTO_CLEANUP=true jest`
- Ou adicione ao `setupFiles` do Jest: `import '@testing-library/react/dont-cleanup-after-each';`

### 3. Migrando do Enzyme

1. Instale o RTL e o jest-dom.
2. Substitua `shallow`/`mount` por `render` + `screen`.
3. Migre os testes de forma incremental.

### 4. Consultando dentro de elementos

```js
import { render, within } from '@testing-library/react';

const { getByText } = render(<MyComponent />);
const section = getByText('messages');
const hello = within(section).getByText('hello');
```

### 5. Testes de integração

```js
import { render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import App from '../App';

const REPOS = [{ name: 'repo1', description: '...' }];

beforeAll(() =>
  nock('https://api.github.com')
    .persist()
    .get('/users/alice/repos')
    .reply(200, REPOS)
);
afterEach(cleanup);

test('user sees public repos', async () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Enter username'), 'alice');
  userEvent.click(screen.getByRole('button', { name: /submit/i }));
  await waitFor(() =>
    REPOS.forEach((r) => expect(screen.getByText(r.name)).toBeInTheDocument())
  );
  expect(screen.queryByText('Loading...')).toBeNull();
});
```

## Conclusão

Este cheat sheet abrangente cobre o uso do RTL do básico ao avançado — renderização, queries, mocking, queries personalizadas e testes de integração — para ajudar você a escrever testes robustos e de fácil manutenção.
