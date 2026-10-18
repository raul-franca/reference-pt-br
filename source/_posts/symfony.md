---
title: Symfony
date: 2025-07-23 18:28:43
background: bg-[#67526d]
label: php
tags:
  - php
  - web
categories:
  - Programação
intro: |
  Este cheat sheet do Symfony é uma lista não exaustiva dos principais fundamentos do Symfony que você pode usar ou precisar.
plugins:
  - copyCode
---


## Primeiros passos

### Instalação

```bash
curl -sS https://get.symfony.com/cli/installer | bash
```
- [Doc: download do Symfony](https://symfony.com/download)

{.marker-round}

### Symfony CLI: comandos básicos {.col-span-2}  


| Comando                         | Descrição                                     |
|:--------------------------------|:----------------------------------------------|
| `symfony check:requirements`    | Verifica os requisitos do sistema para executar o Symfony |
| `symfony version`               | Exibe a versão do Symfony CLI                 |
| `symfony help`                  | Exibe todos os comandos disponíveis           |
| `symfony help <cmd>`            | Exibe a ajuda de um comando específico        |
| `symfony server:start`          | Inicia o servidor                             |
| `symfony server:stop`           | Para o servidor                               |
| `symfony serve -d`              | Executa o servidor do Symfony em segundo plano |



### Criando um novo projeto Symfony   {.col-span-3}

| Comando                                                       | Descrição                                          |
|:--------------------------------------------------------------|:---------------------------------------------------|
| `symfony new <dir>`                                           | Cria um novo projeto Symfony em `<dir>`            |
| `symfony new my_project_directory --version="7.3.x" --webapp` | Cria uma nova aplicação web                        |
| `symfony new my_project_directory --version="7.3.x"`          | Cria uma nova aplicação de API                     |
| `composer create-project symfony/skeleton <dir>`              | Cria um novo projeto Symfony usando o Composer     |

----

[Doc: criação de aplicação no Symfony](https://symfony.com/doc/current/setup.html#creating-symfony-applications) {.link-arrow}



### Uso básico do console do Symfony

| CMD                       | Descrição                                                 |
|:--------------------------|:----------------------------------------------------------|
| `bin/console`             | Lista todos os comandos disponíveis                       |
| `bin/console <namespace>` | Lista todos os comandos de um namespace ou bundle específico |
| `bin/console <cmd>`       | Executa um comando específico                             |
| `bin/console help <cmd>`  | Mostra a ajuda de um comando específico                   |
| `bin/console --env=<env>` | Executa o console no ambiente: dev, test ou prod          |
| `bin/console cache:clear` | Limpa o cache                                             |

### Comandos de lint   {.col-span-2}

| CMD                            | Descrição                                              |
|:-------------------------------|:-------------------------------------------------------|
| `bin/console lint:container`   | Verifica incompatibilidades de tipo nos argumentos dos serviços |
| `bin/console lint:twig <dir>`  | Verifica erros de sintaxe nos templates Twig           |
| `bin/console lint:yaml <dir>`  | Verifica erros de sintaxe nos arquivos YAML            |
| `bin/console lint:xliff <dir>` | Verifica os arquivos de tradução XLIFF                 |


### Comandos de depuração   {.col-span-3}

| CMD                                          | Descrição                               |
|:---------------------------------------------|:----------------------------------------|
| `bin/console debug:asset-map`                | Mostra todos os assets mapeados         |
| `bin/console debug:autowiring`               | Lista todos os serviços que podem ser autowired |
| `bin/console debug:config <bundle>`          | Despeja a configuração de um bundle     |
| `bin/console debug:container`                | Lista todos os serviços públicos        |
| `bin/console debug:container <service>`      | Obtém informações sobre um serviço específico |
| `bin/console debug:container --env-vars`     | Mostra as variáveis de ambiente no container |
| `bin/console debug:container --tags`         | Lista os serviços públicos com tag      |
| `bin/console debug:container --tag=<t>`      | Lista os serviços com uma tag específica |
| `bin/console debug:dotenv`                   | Exibe os valores do dotenv interpretados |
| `bin/console debug:dotenv <search>`          | Mostra os valores do dotenv que correspondem a uma busca |
| `bin/console debug:event-dispatcher`         | Lista todos os event listeners          |
| `bin/console debug:firewall <name>`          | Mostra os detalhes de um firewall       |
| `bin/console debug:form`                     | Mostra informações sobre tipos de formulário |
| `bin/console debug:messenger`                | Lista as mensagens despacháveis         |
| `bin/console debug:router`                   | Lista todas as rotas registradas        |
| `bin/console debug:router <name>`            | Obtém informações sobre uma rota específica |
| `bin/console debug:translation <loc>`        | Mostra as mensagens de um locale        |

### Comandos do AssetMap  {.col-span-2}

| CMD                                   | Descrição                                          |
|:--------------------------------------|:---------------------------------------------------|
| `bin/console asset-map:compile`       | Compila os assets para produção                    |
| `bin/console importmap:require <pkg>` | Adiciona um pacote NPM ao import map               |
| `bin/console importmap:install`       | Baixa todos os pacotes do importmap                |
| `bin/console importmap:update`        | Atualiza todos os pacotes do importmap             |
| `bin/console importmap:remove <pkg>`  | Remove um pacote do import map                     |
| `bin/console importmap:outdated`      | Lista os pacotes do importmap desatualizados       |
| `bin/console importmap:audit`         | Verifica vulnerabilidades nas dependências         |




## ORM e migrações

### Conexão com o banco de dados    {.col-span-2}


```bash
# MySQL 
DATABASE_URL="mysql://username:password@127.0.0.1:3306/db_name?serverVersion=X.Y.Z&charset=utf8mb4"

# MariaDB 
DATABASE_URL="mysql://username:password@127.0.0.1:3307/db_name?serverVersion=X.Y.Z-MariaDB&charset=utf8mb4"

# PostgreSQL 
DATABASE_URL="postgresql://username:password@127.0.0.1:5432/db_name?serverVersion=X.Y.Z&charset=utf8"
```
----

`username` : usuário do SGBD <br>
`password` : senha do SGBD <br>
`127.0.0.1`:  `3306` MySQL `3307` MariaDB `5432` PostgreSQL <br>
`db_name` : nome do banco de dados <br>
`serverVersion` : para saber a versão do servidor, use <code>SHOW GLOBAL VARIABLE LIKE</code> `%version%` no seu SGBD




### Comandos do Doctrine  {.col-span-3}



| CMD                                                                                                                                         | Descrição                                |
|:--------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| `bin/console doctrine:database:create`or `php bin/console d:d:c`                                                                            | Cria o banco de dados configurado        |
| `bin/console doctrine:database:drop`  or `php bin/console d:d:d`                                                                            | Remove o banco de dados configurado      |
| `bin/console doctrine:mapping:info`                                                                                                         | Lista as entidades mapeadas              |
| `bin/console doctrine:schema:update --dump-sql`                                                                                             | Gera o SQL para sincronizar o schema do banco |
| `bin/console doctrine:schema:update --force`                                                                                                | Sincroniza o schema do banco com as informações de mapeamento |
| `bin/console doctrine:schema:validate`                                                                                                      | Valida os arquivos de mapeamento         |
| `bin/console doctrine:query:sql <sql cmd>`                                                                                                  | Executa uma query SQL pura               |
| `bin/console doctrine:query:dql <dql cmd>`                                                                                                  | Executa uma query DQL                    |
| `bin/console doctrine:fixtures:load`                                                                                                        | Carrega as fixtures de dados no banco de dados |

---

Você pode executar <code>php bin/console doctrine:schema:drop --force && php bin/console doctrine:schema:update --force && php bin/console doctrine:fixtures:load -n</code> para carregar as fixtures de dados e redefinir a sequence para 0

----

[Doc: banco de dados no Symfony](https://symfony.com/doc/current/doctrine.html#configuring-the-database) {.link-arrow}



### Comandos de migração  {.col-span-3}

| CMD                                                                 | Descrição                                                           |
|:--------------------------------------------------------------------|:--------------------------------------------------------------------|
| `bin/console make:migration`                                        | Gera uma nova migração com base nas mudanças de schema              |
| `bin/console doctrine:migration:generate`                           | Gera uma nova migração com base nas mudanças de schema              |
| `bin/console doctrine:migration:migrate` or `php bin/console d:m:m` | Executa as migrações pendentes para atualizar o banco de dados      |
| `bin/console doctrine:migration:status`                             | Mostra o status das migrações (pendentes, executadas)               |
| `bin/console doctrine:migration:diff`                               | Compara o schema atual com o banco de dados e gera o SQL da migração |


## Symfony Maker

### Lista do Maker-Bundle  {.col-span-2}

| Comando                      | Descrição                                                                                            |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------|
| `bin/console list make `     | Lista todos os comandos make disponíveis                                                             |
| `make:auth`                  | Cria um autenticador Guard de diferentes tipos                                                       |
| `make:command`               | Cria uma nova classe de comando de console                                                           |
| `make:controller`            | Cria uma nova classe de controller                                                                   |
| `make:crud`                  | Cria um CRUD para uma classe de entidade do Doctrine                                                 |
| `make:docker:database`       | Adiciona um container de banco de dados ao seu arquivo compose.yaml                                  |
| `make:entity`                | Cria ou atualiza uma classe de entidade do Doctrine e, opcionalmente, um recurso do API Platform     |
| `make:fixtures`              | Cria uma nova classe para carregar fixtures do Doctrine                                              |
| `make:form`                  | Cria uma nova classe de formulário                                                                   |
| `make:functional-test`       | Cria uma nova classe de teste                                                                        |
| `make:listener`              | [make:subscriber] Cria uma nova classe de event subscriber ou de event listener                      |
| `make:message`               | Cria uma nova mensagem e seu handler                                                                 |
| `make:messenger-middleware`  | Cria um novo middleware do messenger                                                                 |
| `make:migration`             | Cria uma nova migração com base nas mudanças do banco de dados                                       |
| `make:registration-form`     | Cria um novo sistema de formulário de registro                                                       |
| `make:reset-password`        | Cria controller, entidade e repositórios para uso com symfonycasts/reset-password-bundle             |
| `make:schedule`              | Cria um componente scheduler                                                                         |
| `make:security:custom`       | Cria um autenticador de segurança personalizado                                                      |
| `make:security:form-login`   | Gera o código necessário para o autenticador form_login                                              |
| `make:serializer:encoder`    | Cria uma nova classe de encoder do serializer                                                        |
| `make:serializer:normalizer` | Cria uma nova classe de normalizer do serializer                                                     |
| `make:stimulus-controller`   | Cria um novo controller Stimulus                                                                     |
| `make:subscriber`            | Cria uma nova classe de event subscriber ou de event listener                                        |
| `make:test`                  | [make:unit-test make:functional-test] Cria uma nova classe de teste                                  |
| `make:twig-component`        | Cria um componente Twig (ou Live)                                                                    |
| `make:twig-extension`        | Cria uma nova extensão Twig com sua classe de runtime                                                |
| `make:unit-test`             | Cria uma nova classe de teste                                                                        |
| `make:user`                  | Cria uma nova classe de usuário de segurança                                                         |
| `make:validator`             | Cria uma nova classe de validador e constraint                                                       |
| `make:voter`                 | Cria uma nova classe de voter de segurança                                                           |
| `make:webhook`               | Cria um novo Webhook                                                                                 |


[Doc: Maker Bundle do Symfony](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)   {.link-arrow}

## Fundamentos de controller

### Atributos de rota e descrições  {.col-span-3}


`use Symfony\Component\Routing\Attribute\Route;`

| Atributo                                                                    | Descrição                                  |
|:----------------------------------------------------------------------------|:-------------------------------------------|
| `#[Route('/path')]`                                                         | Define uma rota para um método do controller |
| `#[Route('/path', name: 'name')]`                                           | Define uma rota nomeada para um método     |
| `#[Route('/path', methods: ['GET'])]`                                       | Define os métodos HTTP permitidos          |
| `#[Route('/blog/{slug}')]`                                                  | Define uma rota com um parâmetro           |
| `#[Route('/page/{page}', requirements: ['page' => '\d+'])]`                 | Define uma rota com uma restrição de parâmetro |
| `#[Route(path: ['en' => '/about-us', 'nl' => '/over-ons'], name: 'about')]` | Define rotas localizadas                    |

[Doc: parâmetros de rota no Symfony](https://symfony.com/doc/current/routing.html#route-parameters)  {.link-arrow}

### Métodos do AbstractController  {.col-span-3}

| Método                                                 | Descrição                                     |
|:-------------------------------------------------------|:----------------------------------------------|
| `$this->render('template.html')`                       | Retorna uma Response com o template renderizado |
| `$this->redirectToRoute('homepage')`                   | Retorna um RedirectResponse para uma rota nomeada |
| `$this->redirectToRoute('name', ['param' => 'value'])` | Retorna um redirect para uma rota com parâmetros |
| `$this->redirectToRoute('name', [], 301)`              | Retorna um RedirectResponse com código de status |
| `$this->redirect('http://example.com')`                | Retorna um RedirectResponse para uma URL externa |
| `$this->createNotFoundException($msg)`                 | Retorna uma NotFoundHttpException             |
| `$this->createForm(FormType::class, $data)`            | Cria uma nova instância de Form com base no tipo |

### Métodos de formulário {.col-span-2}

| Método                           | Descrição                       |
|:---------------------------------|:--------------------------------|
| `$form->handleRequest($request)` | Trata o envio de um formulário  |
| `$form->isSubmitted()`           | Verifica se o formulário foi enviado |
| `$form->isValid()`               | Verifica se o formulário é válido |


## Form Type : [Doc: tipos de formulário do Symfony](https://symfony.com/doc/current/reference/forms/types.html)  


### Campos de formulário: campos de texto

| Tipo           | Descrição                               |
|:---------------|:----------------------------------------|
| `TextType`     | Um campo de entrada de texto básico     |
| `TextareaType` | Um campo textarea de várias linhas      |
| `EmailType`    | Um campo de e-mail (`<input type="email">`) |
| `PasswordType` | Um campo de senha                       |
| `SearchType`   | Um campo de busca                       |
| `UrlType`      | Um campo de URL (`<input type="url">`)  |
| `TelType`      | Um campo de entrada de telefone (tel)   |
| `UuidType`     | Um campo UUID                           |


### Campos de formulário: campos numéricos

| Tipo           | Descrição                                  |
|:---------------|:-------------------------------------------|
| `IntegerType`  | Um campo numérico para inteiros            |
| `MoneyType`    | Um campo de dinheiro, com moeda especificável |
| `NumberType`   | Um campo numérico                          |
| `PercentType`  | Um campo numérico para percentuais         |
| `RangeType`    | Um campo de entrada de intervalo (slider)  |



### Campos de formulário: campos de escolha

| Tipo           | Descrição                               |
|:---------------|:----------------------------------------|
| `ChoiceType`   | Campo para selecionar uma ou mais opções |
| `EnumType`     | Escolha entre casos de enum do PHP      |
| `EntityType`   | Escolha entre entidades do Doctrine     |
| `CountryType`  | Escolha um país                        |
| `LanguageType` | Escolha um idioma                      |
| `LocaleType`   | Escolha um locale                      |
| `TimezoneType` | Escolha um fuso horário                |
| `CurrencyType` | Escolha uma moeda                      |



### Campos de formulário: campos do Symfony UX

| Tipo            | Descrição                          |
|:----------------|:-----------------------------------|
| `CropperType`   | Um campo de recorte de imagem do Cropper.js |
| `DropzoneType`  | Um campo de upload de arquivo do Dropzone |



### Campos de formulário: campos de data e hora

| Tipo               | Descrição                   |
|:-------------------|:----------------------------|
| `DateType`         | Um campo de data            |
| `DateIntervalType` | Um campo de intervalo de datas |
| `DateTimeType`     | Um campo de data e hora     |
| `TimeType`         | Um campo de hora            |
| `BirthdayType`     | Um campo de data para aniversários |
| `WeekType`         | Selecione um ano e uma semana |



### Campos de formulário: outros campos

| Tipo           | Descrição                           |
|:---------------|:------------------------------------|
| `CheckboxType` | Um campo de checkbox único          |
| `FileType`     | Um campo de upload de arquivo       |
| `RadioType`    | Um campo de radio button            |
| `HiddenType`   | Um campo oculto                     |



### Campos de formulário: grupos de campos

| Tipo              | Descrição                                                  |
|:------------------|:-----------------------------------------------------------|
| `CollectionType`  | Um grupo de campos que podem ser adicionados ou removidos   |
| `RepeatedType`    | Um campo que é repetido (ex.: confirmação de senha)        |



## Atributos de validação e descrições :  [Doc: validação no Symfony](https://symfony.com/doc/current/validation.html)


### Constraints gerais
| Atributo                   | Descrição                                         |
|:---------------------------|:--------------------------------------------------|
| `#[Assert\NotBlank]`       | O valor não é uma string/array vazio, false ou null |
| `#[Assert\Blank]`          | O valor é uma string vazia ou null                |
| `#[Assert\NotNull]`        | O valor não é estritamente igual a null           |
| `#[Assert\IsNull]`         | O valor é exatamente igual a null                 |
| `#[Assert\Type('string')]` | O valor é de um tipo específico                   |

### Validação: constraints de comparação  {.col-span-2}
| Atributo                            | Descrição                                         |
|:------------------------------------|:--------------------------------------------------|
| `#[Assert\<Not>EqualTo('Foo')]`     | O valor é (não é) igual a outro valor             |
| `#[Assert\<Not>IdenticalTo('Foo')]` | O valor é (não é) idêntico a outro valor          |
| `#[Assert\LessThan<OrEqual>(5)]`    | O valor é menor que (ou igual a) outro valor      |
| `#[Assert\GreaterThan<OrEqual>(5)]` | O valor é maior que (ou igual a) outro valor      |
| `#[Assert\Range(min: 2, max: 10)]`  | Número ou objeto DateTime está dentro de um intervalo |

### Validação: constraints de string  {.col-span-2}
| Atributo                           | Descrição                                             |
|:-----------------------------------|:------------------------------------------------------|
| `#[Assert\Length(2, 10)]`          | A string tem entre `<min>` e `<max>` caracteres       |
| `#[Assert\Email]`                  | A string é um endereço de e-mail válido               |
| `#[Assert\Url]`                    | A string é uma URL válida                             |
| `#[Assert\Hostname]`               | A string é um hostname válido                         |
| `#[Assert\Ip]`                     | A string é um endereço IP válido                      |
| `#[Assert\NoSuspiciousCharacters]` | A string não contém caracteres de spoofing            |
| `#[Assert\Uuid]`                   | A string é um UUID válido                             |
| `#[Assert\CssColor]`               | A string é uma cor CSS válida                         |


### Validação: constraints de data e hora
| Atributo             | Descrição                                         |
|:---------------------|:--------------------------------------------------|
| `#[Assert\Date]`     | O valor é uma string de data válida no formato `Y-m-d` |
| `#[Assert\DateTime]` | O valor é um datetime válido no formato especificado |
| `#[Assert\Time]`     | O valor é uma string de hora válida no formato `H:i:s` |
| `#[Assert\Timezone]` | O valor é um identificador de fuso horário válido |

### Validação: constraints de senha  {.col-span-2}
| Atributo                           | Descrição                                   |
|:-----------------------------------|:--------------------------------------------|
| `#[Assert\UserPassword]`           | A string é a senha do usuário autenticado   |
| `#[Assert\NotCompromisedPassword]` | A senha não aparece em nenhum vazamento de dados |
| `#[Assert\PasswordStrength]`       | A senha tem entropia suficiente             |

### Validação: constraints financeiras e de outros números
| Atributo               | Descrição                                        |
|:-----------------------|:-------------------------------------------------|
| `#[Assert\Bic]`        | O valor é um Business Identifier Code (BIC) válido |
| `#[Assert\CardScheme]` | O valor é um número de cartão de crédito válido  |
| `#[Assert\Currency]`   | O valor é um código de moeda ISO 4217 de 3 letras válido |
| `#[Assert\Luhn]`       | O valor passa no algoritmo de Luhn               |
| `#[Assert\Iban]`       | O valor é um IBAN válido                         |
| `#[Assert\Isbn]`       | O valor é um ISBN válido                         |


### Validação: constraints de arquivo
| Atributo          | Descrição                                       |
|:------------------|:------------------------------------------------|
| `#[Assert\File]`  | O valor é um path de arquivo válido ou um objeto File |
| `#[Assert\Image]` | Igual a File, mas aceita apenas tipos MIME de imagem |


### Validação: constraints numéricas {.col-span-2}
| Atributo                     | Descrição                   |
|:-----------------------------|:----------------------------|
| `#[Assert\Positive<OrZero>]` | O valor é positivo (ou zero) |
| `#[Assert\Negative<OrZero>]` | O valor é negativo (ou zero) |


### Validação: constraints de escolha {.col-span-2}
| Atributo                             | Descrição                                 |
|:-------------------------------------|:------------------------------------------|
| `#[Assert\Choice(['A', 'B', 'C'])]`  | O valor é uma das opções especificadas    |
| `#[Assert\Country]`                  | O valor é um código de país ISO 3166-1 válido |
| `#[Assert\Language]`                 | O valor é um código de idioma de duas letras válido |
| `#[Assert\Locale]`                   | O valor é um identificador de locale válido |



