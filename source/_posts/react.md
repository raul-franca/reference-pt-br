---
title: React
date: 2023-11-17 10:12:25
background: bg-[#1289D8]
tags:
  - react
  - web
categories:
  - Programação
intro: |
  Um cheat sheet de React com os conceitos, funções, métodos e muito mais importantes. Uma referência rápida completa para iniciantes.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos

### JSX

JSX é uma extensão de sintaxe para JavaScript que permite escrever marcação semelhante a HTML dentro de um arquivo JavaScript.

```javascript
let element = <h1>Hello, world!</h1>;

let emptyHeading = <h1 />;
```

### Expressões JSX

```javascript
let name = 'Josh Perez';
let element = <h1>Hello, {name}</h1>;

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
let element = <h1>Hello, {fullName('Julie', 'Johnson')}</h1>;
```

### Atributos JSX

```javascript
const element = <img src={user.avatarUrl} />;
const element = <button className="btn">Click me</button>;
```

### Funções JSX

```javascript
name() {
  return "Julie";
}

return (
  <h1>
    Hi {name()}!
  </h1>
)
```

### Renderização condicional com JSX {.col-span-2}

```javascript
import React from 'react';
function Weather(props) {
  if (props.temperature >= 20) {
    return (
      <p>
        It is {props.temperature}°C (Warm) in {props.city}
      </p>
    );
  } else {
    return (
      <p>
        It is {props.temperature}°C in {props.city}
      </p>
    );
  }
}

export default () => <Weather city="New York" temperature={24} />;
```

Nota: um componente sempre deve retornar algo.

## Componentes

### Componente funcional

```javascript
import React from 'react';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <div>Hello</div>
      <div>World</div>
    </div>
  );
}
```

Nota: todo componente precisa de um elemento raiz

### Incorporar um componente interno

```javascript
import React from 'react';
import UserAvatar from './UserAvatar';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <UserAvatar />
      <UserAvatar />
    </div>
  );
}
```

Nota: assumindo que UserAvatar está declarado em UserAvatar.js

### Incorporar um componente externo

```javascript
import React from 'react';
import ComponentName from 'component-name';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <ComponentName />
    </div>
  );
}
```

Nota: componentes externos são encontrados em npmjs.com e precisam ser importados primeiro.

### Componentes funcionais avançados

```javascript
import React from 'react';

function Hello(props) {
  function fullName() {
    return `${props.firstName} ${props.lastName}`;
  }
  return <p>{fullName()}</p>;
}

export default () => <Hello firstName="Matt" lastName="Delac" />;
```

## Propriedades {.cols-2}

### Passar propriedades para um componente

<!-- prettier-ignore -->
```javascript
<Student
  firstName="Julie"
  lastName="Johnson"
  age={23}
  pro={true}
/>
```

### Acessar as propriedades em um componente

```javascript
import React from 'react';

export default function Student(props) {
  return (
    <h1>
      {props.firstName} {props.lastName} is {props.age}.
    </h1>
  );
}
```

## Estados {.cols-1}

### Estado no React

```javascript
import React, { useState } from 'react';

export default function Hello(props) {
  let [name, setName] = useState('Julie');
  function updateName() {
    let newName = prompt('What is your name?');
    setName(newName);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={updateName}>Update name</button>
    </div>
  );
}
```

## Eventos {.cols-1}

### Listener de evento

```javascript
import React from 'react';

export default function Hello() {
  function handleClick(event) {
    event.preventDefault();
    alert('Hello World');
  }

  return (
    <a href="/" onClick={handleClick}>
      Say Hi
    </a>
  );
}
```

Nota: os listeners de evento mais comuns são onClick para links/botões e onSubmit para formulários.

## Loops {.cols-2}

### Percorrer um array

```javascript
let elements = ['one', 'two', 'three'];

return (
  <ul>
    {elements.map(function (value, index) {
      return <li key={index}>{value}</li>;
    })}
  </ul>
);
```

Nota: cada item de lista dentro de um loop map precisa de um atributo key com um valor único, que geralmente é o index.

### Percorrer um array de objetos

```javascript
let elements = [
  {
    name: 'one',
    value: 1
  },
  {
    name: 'two',
    value: 2
  },
  {
    name: 'three',
    value: 3
  }
];
return (
  <ul>
    {elements.map(function (element, index) {
      return (
        <li key={index}>
          The value for {element.name} is {element.value}
        </li>
      );
    })}
  </ul>
);
```

Nota: cada item de lista dentro de um loop map precisa de um atributo key com um valor único, que geralmente é o index.

## Formulários {.cols-1}

### Formulários no React

```javascript
import React, { useState } from 'react';

export default function LoginForm() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Loging in with ${username} and ${password}`);
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={updateUsername} />
      <input type="password" placeholder="Password" onChange={updatePassword} />
      <input type="submit" value="Login" />
    </form>
  );
}
```

## CSS {.cols-1}

### CSS em um componente React

```javascript
import React from 'react';
import './Student.css';

export default function Student() {
  return <div className="Student">Julie Johnson</div>;
}
```

Nota: depois você precisará criar um arquivo CSS chamado Student.css

## AJAX {.cols-1}

### Requisição AJAX com Axios

```javascript
import React from 'react';
import axios from 'axios';

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
  }

  if (notifications) {
    return <p>notifications</p>;
  } else {
    let url = `https://notifications.com`;
    axios.get(url).then(handleResponse);
    return <p>Loading notifications..</p>;
  }
}
```

Nota: certifique-se de importar o Axios primeiro no seu projeto.

## Hooks {.cols-2}

### Hook useState

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Nota: o Hook useState é um Hook integrado do React que permite que componentes funcionais gerenciem estado local. Ele oferece
uma forma de declarar variáveis de estado e atualizá-las dentro de um componente funcional. Exemplo de código ilustrando como usá-lo

### Declaração de múltiplas variáveis de estado

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />

      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleCompletion}
        />
        Completed
      </label>
    </div>
  );
}

export default Counter;
```

Nota: você pode declarar múltiplas variáveis de estado usando o Hook useState chamando-o várias vezes em um componente
funcional. Cada chamada a useState gerencia uma parte separada do estado.

### Gerenciamento de estado de inputs

```javascript
import { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
```

### Hook useEffect

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
```

Nota: o Hook useEffect no React é usado para realizar efeitos colaterais em componentes funcionais. Ele permite executar
código com base em eventos do ciclo de vida do componente, como montagem, atualização e desmontagem.

### Usar a Fetch API com useEffect

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

Nota: certifique-se de importar o Axios primeiro no seu projeto.

### Criação de Hook customizado useLocalStorage

```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
```

Nota: Hooks customizados são funções reutilizáveis no React que contêm lógica compartilhada entre vários componentes. Eles permitem
extrair lógica com estado de componentes para funções independentes.

### Criar refs em componentes de classe

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current); // Access the DOM element
  }

  render() {
    return <div ref={this.myRef}>Hello, world!</div>;
  }
}

export default MyComponent;
```

### Usar refs em componentes funcionais

```javascript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    console.log(myRef.current); // Access the DOM element
  }, []);

  return <div ref={myRef}>Hello, world!</div>;
}

export default MyComponent;
```

### Refs de callback

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
    this.setRef = (element) => {
      this.myRef = element;
    };
  }

  componentDidMount() {
    console.log(this.myRef); // Access the DOM element
  }

  render() {
    return <div ref={this.setRef}>Hello, world!</div>;
  }
}

export default MyComponent;
```

### Encaminhar refs

```javascript
Copy code
import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Usage
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

### Acessar elementos do DOM com refs

```javascript
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

export default FocusInput;
```

Nota: refs costumam ser usadas para acessar e interagir diretamente com elementos do DOM. Aqui está um exemplo em que focamos um
elemento input usando uma ref.

### Gerenciar foco com refs

```javascript
import React, { useRef } from 'react';

function Form() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      secondInputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={firstInputRef} type="text" onKeyDown={handleKeyDown} />
      <input ref={secondInputRef} type="text" />
    </div>
  );
}

export default Form;
```

Nota: você também pode gerenciar o foco entre vários elementos usando refs.
