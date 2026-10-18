---
title: npm
date: 2020-12-24 17:12:25
background: bg-[#ebd94e]
tags:
  - js
  - web
  - node
  - npm
categories:
  - Programação
intro: |
  Uma cheat sheet do NPM (node package manager) com os conceitos mais importantes e comandos para instalar, atualizar e gerenciar seus pacotes node.
plugins:
  - copyCode
  - runCode
---

## Primeiros passos com npm

### Introdução

npm (Node Package Manager) é o gerenciador de pacotes padrão do Node.js. Ele permite instalar, atualizar e gerenciar pacotes (bibliotecas ou módulos) para suas aplicações Node.js.

### Instalando e verificando a versão do npm

Instale o Node.js em [nodejs.org](https://nodejs.org/), que já inclui o npm. Após a instalação, você pode verificar a versão do npm instalada com o seguinte comando:

```bash
npm --version
# or
npm -v
```

### Inicializando um novo projeto

```bash
npm init # Interactive setup
# or
npm init -y # Creates a package.json with default values
```

## Instalando pacotes

### Instalar dependências do package.json

```bash
npm install
# or
npm i
```

### Instalar um pacote específico

```bash
npm install <package-name>              # Install and add to dependencies
npm install <package-name> --save-dev   # Add to devDependencies
npm install <package-name> -D           # Shorthand for --save-dev
npm install <package-name> -g           # Install globally
npm install <package-name>@<version>    # Install specific version
npm install <package-name>@latest       # Install latest version
```

### Desinstalar um pacote

```bash
npm uninstall <package-name>          # Uninstall package
npm uninstall <package-name> -g       # Uninstall globally
npm rm <package-name>                 # Shorthand for uninstall
```

## Visualizando, buscando e explorando pacotes

### Visualizando pacotes

```bash
npm view <package-name>               # View package details
npm view <package-name> versions      # View all versions of a package
npm view <package-name> version       # View the latest version of a package
npm view <package-name> description   # View the description of a package
```

### Buscando pacotes

```bash
npm search <search-term>              # Search for packages with similar terms
```

### Explorando pacotes

```bash
npm docs <package-name>                # Open package documentation in the browser
npm home <package-name>                # Open package homepage in the browser
npm repo <package-name>                # Open package repository in the browser
```

## Gerenciando pacotes

### Atualizando pacotes

```bash
npm outdated                           # Check for outdated packages
npm update <package-name>              # Update a specific package
npm update                             # Update all packages
```

### Listando pacotes instalados

```bash
npm list                              # List installed packages in the current project
npm list -g                           # List globally installed packages
npm list --depth=0                    # List top-level installed packages only
```

### Executando scripts

```bash
npm run <script-name>                 # Run a script defined in package.json
npm start                             # Run the 'start' script
npm test                              # Run the 'test' script
npm build                             # Run the 'build' script
```

### Gerenciamento de cache

```bash
npm cache verify                      # Verify the integrity of the npm cache
npm cache clean                       # Clear the npm cache
npm cache clean --force               # Force clear the npm cache
```

### Configurando o npm

```bash
npm config list                       # List all npm configuration settings
npm config set <key> <value>          # Set a configuration value
npm config get <key>                  # Get the value of a configuration key
npm config delete <key>               # Delete a configuration key
```

### Auditoria e segurança

```bash
npm audit                             # Audit dependencies for vulnerabilities
npm audit fix                         # Fix vulnerabilities in dependencies
npm audit fix --force                 # Force fix vulnerabilities, may update major versions
```

## Publicando pacotes

```bash
npm login                             # Log in to your npm account (npmjs.com)
npm publish                           # Publish a package to the npm registry
npm version <new-version>             # Bump the version of your package (e.g., patch, minor, major)
npm unpublish <package-name>          # Unpublish a package (within 72 hours of publishing)
```

## Outros comandos úteis

```bash
npm help                              # Get general help on npm
npm help <command>                    # Get help on a specific npm command
npm ci                                # Install dependencies from package-lock.json (clean install)
npm prune                             # Remove extraneous packages
npm dedupe                           # Reduce duplication in the node_modules folder
```
