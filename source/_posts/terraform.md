---
title: Terraform
date: 2024-4-18
background: bg-[#7345b6]
tags:
  - container
  - virtual
categories:
  - Programação
intro: |
  Este é um cheat sheet de referência rápida para o [Terraform](https://docs.docker.com/get-started/).
plugins:
  - copyCode
---

## Sintaxe HCL: {.cols-2}

```
(Block Name)  (Resource Type)  (Resource Name)
      |           |                 |
      ▽           ▽                 ▽
  resource "aws_instance" "my_aws_server" {
                                            --
      ami           = "ami-1251351351513"    |<--(Arguments)
      instance_type = "t2.micro"             |
                                            --

}

```

### Tipos de variáveis

- Tipos simples: number, string, bool, null.

- Tipos complexos: Tipos de coleção: list, map, set Tipos estruturais: `object({<KEY> = <TYPE>, ...})`,
  `tuple([<TYPE>, ...])`

Ordem de precedência: defaults < env vars < arquivo terraform.tfvars < arquivo terraform.tfvars.json < .auto.tfvars < linha
de comando (-var & -var-file)

```
variable "<VAR NAME>" {
    description = "<DESCRIPTION OF THE VAR>"
    type        = <VAR TYPE>
    default     = <DEFAULT VALUE>
}

# type string
variable "aws_region" {
    description = "AWS Region"
    type        = string
    default     = "us-east-1"
}

# type list(string)
variable "azs" {
    description = "AZs in the Region"
    type        = list(string)
    default     = [ "us-east-1a", "us-east-1b", "us-east-1c"]
}

# type map
variable "amis" {
    type = map(string)
    default = {
      "eu-west-1" = "ami-0fdke15151513145",
      "us-east-1" = "ami-0d17359173587519"
    }
}

# type object
variable "egress_dsg" {
    type = object({
        from_port = number
        to_port = number
        protocol = string
        cidr_blocks = list(string)
    })
    default = {
     from_port = 0,
     to_port = 65365,
     protocol = "tcp",
     cidr_blocks = ["100.0.0.0/16", "200.0.0.0/16", "0.0.0.0/0"]
    }
}
```

## Meta-argumentos

### Loops

count, for_each, [for( o in var.list: o.id])

```
# creating multiple EC2 instances using count
resource "aws_instance" "server" {
  ami = "ami-06ec8443c2a35b0ba"
  instance_type = "t2.micro"
  count = 3  # creating 3 resources
}

# declaring a variable
variable "users" {
  type = list(string)
  default = ["demo-user", "admin1", "john"]
}

# creating IAM users using for_each
resource "aws_iam_user" "test" {
  for_each = toset(var.users) # converts a list to a set
  name = each.key
}

# A for expression creates a complex type value by transforming another complex type value.
variable "names" {
    type = list
    default = ["som", "john", "mary"]
}

output "show_names" {
    # similar to Python's list comprehension
    value = [for n in var.names : upper(n)]
}

output "short_upper_names" {
  # filter the resulting list by specifying a condition:
  value = [for name in var.names : upper(name) if length(name) > 7]
}
```

### Splat

`Splat(var.list[*].id)`

```
# Launch an EC2 instance
resource "aws_instance" "server" {
  ami = "ami-05cafdf7c9f772ad2"
  instance_type = "t2.micro"
  count = 3
}

output "private_addresses"{
  value = aws_instance.server[*].private_ip  # splat expression
}
```

### depends_on

se dois recursos dependem um do outro, depends_on especifica essa dependência para impor a ordenação

```
resource "aws_iam_role_policy" "example" {
    name = "example"
    role = "s3 access"
    policy = jsonencode({
      "Statement" = [{
        "Action" = "s3:*",
        "Effect" = "Allow",
      }],
    })
}

resource "aws_instance" "my_server" {
    ami  = "ami-a255235"
    instance_type = "t2.micro"

    iam_instance_profile = aws_iam_instance_profile.my_server

    depends_on = [
      aws_iam_role_policy.example,
    ]
```

### lifecycle

Um conjunto de meta-argumentos para controlar o comportamento de recursos específicos

```
resources "aws_instance" "server" {
  ami           = "ami-a1b3414"
  instance_type = "t2.micro"

  lifecycle {
    create_before_destroy = true
    ignore_changes = [
      # Some resources have metadata
      # modified automatically outside of TF

      tags
    ]
  }
}
```

### Condicionais

`condition ? true_val : false_val`

### Funções nativas

| Função                                     | Resultado               |
| ------------------------------------------ | ----------------------- |
| `max(5, 10, 9)`                            | 12                      |
| `min(5, 10, 9)`                            | 5                       |
| `format("There are %d servers", 4)`        | There are 4 lights      |
| `join("," ["foo", "bar", "baz"])`          | foo,bar,baz             |
| `split(",", "foo,bar,baz")`                | `["foo", "bar", "baz"]` |
| `replace("hi world", "/w.*d/", "mom"`      | hi mom                  |
| `substr("hello world", 1, 4)`              | ello                    |
| `lookup({a="lol", b="sad"}, "a", "what?")` | lol                     |
| `lookup({a="lol", b="sad"}, "c", "what?")` | what?                   |
| `slice(["a", "b", "c", "d"], 1, 3)`        | `["b", "c"]`            |
| `timestamp()`                              | "2022-04-02T05:52:48Z"  |
| `cidr("10.1.2.240/28", 1)`                 | 10.1.2.241              |
| `cidr("10.1.2.240/28", 14)`                | 10.1.2.254              |

### Bloco provider

Detalhes do(s) provider(s) em uso. Inclui informações como mecanismos de acesso, opções regionais, profile a usar etc.

```
provider "aws" {
  region = "us-east-1"
}

# Additional provider config reference as `aws.west`.
provider "aws" {
  alias  = "west"
  region = "us-west-2"
}
```

### Exigindo providers

```
terraform {

  # required_providers block specifies source and version
  required_providers {
    aws = {
      source  = "hashicorp/aws" # where to find the provider
      version = "5.8.0" # which version of the provider is needed for this config
    }
  }
}
```

### Bloco locals

Um valor local atribui um nome a uma expressão, para que você possa usar o nome várias vezes dentro de um módulo em vez
de repetir a expressão

```
locals {
  service_name = "forum"
  owner        = "Community Team"
}

# once local declared you can reference it
locals {
  common_tags = {
    Service = local.service_name
    Owner   = local.owner
```

### Bloco output

```
output "api_base_url" {
  value = "https://${aws_instance.example.private_dns}:8433/"

  # The EC2 instance must have an encrypted root volume.
  precondition {
    condition     = data.aws_ebs_volume.example.encrypted
    error_message = "The server's root volume is not encrypted."
  }

  # output can be marked as containing sensitive
  sensitive = true # output can be marked as containing sensitive
}
```

### Bloco data

Fontes de dados que podem ser consultadas (cloud provider, lista local etc.)

```
data "aws_ami" "example" {
  most_recent = true

  owners = ["self"]
  tags = {
    Name   = "app-server"
    Tested = "true"
  }
}
```

### Módulos

```
module "myec2" {
  source = "../modules/ec2"

  # module inputs
  ami_id = var.ami_id
  instance_type = var.instance_type
  servers = var.servers
}
```

### Backends

Um backend define onde o Terraform armazena seus arquivos de dados de estado.

Backends disponíveis: local(padrão), remote, azurerm, consul, cos, gcs, http, Kubernetes, oss, pg, s3

```
terraform {
  backend "remote" {
    organization = "example_corp"

    workspaces {
      name = "my-app-prod"
    }
  }
}
```

### Endereçamento de recursos

| Exemplo                                           | Descrição                           |
| ------------------------------------------------- | ----------------------------------- |
| `[module path][resource info`                     | Sintaxe de path de recurso          |
| `module.<MODULE_PATH>[optional] module index`     | Sintaxe de path de módulo           |
| `resource_type.user_defined_name[optional index]` | Sintaxe de especificação de recurso |
| `<RESOURCE_TYPE>.<NAME>`                          | Lista todas as imagens              |
| `var.<NAME>`                                      | Variável de entrada                 |
| `local.<NAME>`                                    | Locals                              |
| `module.<MODULE_NAME>`                            | Outputs de módulo filho             |
| `data.<DATA TYPE>.<NAME>`                         | Blocos data                         |
| `path.module`                                     | Localização da expressão            |
| `path.root`                                       | Localização do módulo root          |
| `terraform.workspace`                             | Workspace atual                     |

---

## Terraform CLI

<!-- Não sei o que isso significa, mas não se encaixa em uma categoria e quebra o conteúdo -->
<!-- Vou deixar comentado... -->

<!-- Criar/editar arquivo de config TF -> init -> plan -> validate -> apply -> destroy -->

### Inicialização

```sh
terraform init [options]

    -upgrade            # Install latest module & provider versions
    -reconfigure        # reconfigure backend, ignoring any saved config
    -backend=false      # Disable backend & use previous Initialization
    -migrate-state      # reconfigure backend & attempt to migrate any existing state
```

### Planejamento

Gera e revisa um plano de execução

```sh
terraform plan [options]

    -var 'user=john'    # set value for input vars in the root module of config
    -var-file=filename  # load var values from the given file
    -input=true         # ask for input for vars if not directly set
    -out=path           # write a plan file to given path. can be used as input for "apply"
    -refresh-only       # verifies remote object consistency without proposing actions to undo changes done outside TF
    -destroy            # create plan to destroy all objects currenly managed
    -target=resource    # target planning to given resouce & its dependencies only.

terraform plan -refresh-only # updates state to match changes made outside of TF. Good for drift detection

```

### Validação

```sh
terraform validate      # Validates the config files for errors

```

### Apply

Executa alterações na infra

```sh
terraform apply [options]

    -auto-approve       # skip interactive approval of plan before applying
    -replace            # force replacement of a particular resource instance
    -var 'foo=bar'      # set a value for input vars in the root module of config
    -var-file=filename  # load var values from the given file
    -parallelism=n      # limit the no of concurrent operations. Default=10

terraform apply -auto-approve var-file=web-dev.tfvars
terraform apply -replace="aws_instance.server"
terraform plan -refresh-only # Updates statefile to accept changes made manually.
```

### Destroy

Destroy (exclui) a infra gerenciada pelo Terraform. O mesmo que `terraform apply -destroy `

```sh
terraform destroy [options]

    -auto-approve        # skip interactive approval before destroying
    -target              # limits destroy to only given resource & its dependencies


terraform destroy -target aws_vpc.my_vpc -auto-approve
```

Diversos

```sh
terraform state show aws_instance.my_vm
terraform state pull > my_terraform.tfstate
terraform state mv aws_iam_role.my_ssm_role
terraform state list
terraform state rm aws_instance.my_server

terraform import aws_instance.new_server i-243abc
sudo apt install graphviz
terraform graph | dot -Tpng > graph.png
```

Logs

níveis de log = TRACE > DEBUG > INFO > WARN > ERROR

```sh
export TF_LOG_CORE=TRACE     # enable core logging
export TF_LOG_PROVIDER=TRACE # enable provider logging
export TF_LOG_PATH=logs.txt  # to persist logs
```

## Veja também

- [Documentação](https://developer.hashicorp.com/terraform/language)
- [Bom artigo da FCC](https://www.freecodecamp.org/news/terraform-certified-associate-003-study-notes/)
