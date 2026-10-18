---
title: PowerShell
date: 2020-11-25 18:28:43
background: bg-[#397fe4]
tags:
  - script
  - windows
categories:
  - Programação
  - Sistema Operacional
intro: Este é um cheat sheet de referência rápida para começar com scripts em PowerShell.
plugins:
  - copyCode
---

## Comandos básicos

### Comandos auxiliares

**_O PowerShell segue o formato Verbo-Substantivo em seus comandos._**

Alguns verbos comuns:

| Verbo   | Descrição                                         |
| ------- | ------------------------------------------------- |
| Get     | Usado para recuperar informações.                 |
| Set     | Usado para configurar ou alterar definições.      |
| New     | Usado para criar novas instâncias de objetos.     |
| Remove  | Usado para excluir ou remover itens.              |
| Invoke  | Usado para executar uma ação ou operação específica. |
| Start   | Usado para iniciar um processo ou operação.       |
| Stop    | Usado para interromper ou encerrar um processo ou operação. |
| Enable  | Usado para ativar ou habilitar um recurso.        |
| Disable | Usado para desativar ou desabilitar um recurso.   |
| Test    | Usado para realizar testes ou verificações.       |
| Update  | Usado para atualizar ou recarregar dados ou configurações. |

Lista os módulos disponíveis

```powershell
Get-Module --ListAvailable
```

Lista os cmdlets e funções disponíveis.

```powershell
Get-Command -Module ActiveDirectory
```

Obtém ajuda

```powershell
Get-Help <cmd>
Get-Help <cmd> -Examples
Get-Help -Name Get-Process -Parameter Id
```

Lista os aliases e seus nomes de cmdlet correspondentes.

```powershell
Get-Alias | Select-Object Name, Definition
```

**Get-Member:** Exibe as propriedades e métodos dos objetos.

```powershell
Get-Process | Get-Member
```

### Manipulação de objetos {.col-span-2}

**Select-Object:** Seleciona propriedades específicas de objetos ou personaliza sua exibição.

```powershell
Get-Process | Select-Object Name, CPU
```

**Where-Object:** Filtra objetos com base em condições especificadas.

```powershell
Get-Service | Where-Object { $PSItem.Status -eq 'Running' }
#OR
Get-Service | ? { $_.Status -eq 'Running' }
```

**Measure-Object:** Calcula estatísticas, como soma, média e contagem, para propriedades de objetos.

```powershell
Get-Process | Measure-Object -Property WorkingSet -Sum
```

**ForEach-Object:** Realiza uma operação em cada objeto de uma coleção. (ATENÇÃO: o comando abaixo adiciona um
prefixo aos arquivos/pastas do diretório atual)

```powershell
Get-ChildItem | ForEach-Object { Rename-Item $_ -NewName "Prefix_$_" }
```

**Sort-Object:** Ordena objetos pelas propriedades especificadas.

```powershell
Get-ChildItem | Sort-Object Length -Descending
```

**Format-Table:** Formata a saída como uma tabela com as colunas especificadas.

```powershell
Get-Service | Format-Table -AutoSize  # ft alias
```

**Format-List:** Formata a saída como uma lista de propriedades e valores.

```powershell
Get-Process | Format-List -Property Name, CPU  # fl alias
```

### Sistema de arquivos {.col-span-2}

```powershell
New-Item -path file.txt -type 'file' -value 'contents'
New-Item -path file.txt -type 'dir'
Copy-Item <src> -destination <dest>
Move-Item -path  <src> -destination <dest>
Remove-Item <file>
Test-Path <path>
Rename-Item -path <path> -newname <newname>

# using .NET Base Class Library
[System.IO.File]::WriteAllText('test.txt', '')
[System.IO.File]::Delete('test.txt')

Get-Content -Path "test.txt"
Get-Process | Out-File -FilePath "processes.txt"# Output to file
Get-Process | Export-Csv -Path "processes.csv"  # Output to csv
$data = Import-Csv -Path "data.csv"             # Import from csv
```

## Gerenciamento do sistema

### Windows Management Instrumentation {.col-span-2}

```powershell
# Retrieve BIOS information
Get-CimInstance -ClassName Win32_BIOS
# Retrieve information about locally connected physical disk devices
Get-CimInstance -ClassName Win32_DiskDrive
# Retrieve information about install physical memory (RAM)
Get-CimInstance -ClassName Win32_PhysicalMemory
# Retrieve information about installed network adapters (physical + virtual)
Get-CimInstance -ClassName Win32_NetworkAdapter
# Retrieve information about installed graphics / video card (GPU)
Get-CimInstance -ClassName Win32_VideoController

# List all the classNames
Get-CimClass | Select-Object -ExpandProperty CimClassName
# Explore the various WMI classes available in the root\cimv2 namespace
Get-CimClass -Namespace root\cimv2
# Explore the child WMI namespaces underneath the root\cimv2 namespace
Get-CimInstance -Namespace root -ClassName __NAMESPACE


```

### Gerenciamento de rede

```powershell
# Test network connectivity to a remote host
Test-Connection -ComputerName google.com

# Retrieve network adapter information
Get-NetAdapter

# Retrieve IP address information
Get-NetIPAddress

# Retrieve routing table information
Get-NetRoute

# Test if a port is open on a remote host
Test-NetConnection google.com -Port 80

```

### Gerenciamento de usuários e grupos {.col-span-2}

```powershell
# Retrieve local user account information
Get-LocalUser

# Create a new local user account
New-LocalUser -Name NewUser -Password (ConvertTo-SecureString "Password123" -AsPlainText -Force)

# Remove a local user account
Remove-LocalUser -Name UserToRemove

# Retrieve local group information
Get-LocalGroup

# Add a member to a local group
Add-LocalGroupMember -Group Administrators -Member UserToAdd
```

### Segurança e permissões

```powershell
# Retrieve access control lists for file/dir
Get-Acl C:\Path\To\File.txt

# Set access control lists for a file/dir
Set-Acl -Path C:\Path\To\File.txt -AclObject $aclObject
```

### Gerenciamento do registro {.col-span-2}

```powershell
# Retrieve registry key values
Get-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*" | Select DisplayName, DisplayVersion

# Set registry key values
Set-ItemProperty -Path "HKLM:\Software\MyApp" -Name "SettingName" -Value "NewValue"

# Create a new registry key value
New-ItemProperty -Path "HKCU:\Software\MyApp" -Name "NewSetting" -Value "NewValue" -PropertyType String

# Remove a registry key value
Remove-ItemProperty -Path "HKCU:\Software\MyApp" -Name "SettingToRemove"

# Check if a registry key exists
Test-Path "HKLM:\Software\MyApp"
```

## Scripting

### Variáveis {.col-span-2}

Inicializando uma variável com/sem um tipo especificado:

```powershell
$var = 0
[int] $var = 'Trevor'         # (throws an exception)
[string] $var = 'Trevor'      # (doesn't throw an exception)
$var.GetType()

# Multiple Assigning
$a,$b,$c = 'a','b','c'

# Create an array
$arrayvar = @('va1','va2')

# Create dict
$dict = @{k1 = 'test'; k2 = 'best'}
```

Comandos de variável

```powershell
New-Variable -Name FirstName -Value Trevor
New-Variable FirstName -Value Trevor -Option <ReadOnly/Constant>

Get-Variable
Get-Variable | ? { $PSItem.Options -contains 'constant' }
Get-Variable | ? { $PSItem.Options -contains 'readonly' }

Remove-Variable -Name firstname
# Removes ReadOnly var
Remove-Variable -Name firstname -Force
```

Tipos de variável: int32, int64, string, bool

### Operadores

```powershell
# operators
# (a <op> b)

= , += / -= , ++ / --
-eq / -ne , -lt / -gt , -le / -ge

$FirstName = 'Trevor'
$FirstName -like 'T*'
$true; $false #bool true/false

# ternary operator
$FoodToEat = $BaconIsYummy ? 'bacon' : 'beets'

# -notin or -in
'Celery' -in @('Bacon', 'Sausage', 'Steak')

# output: True
5 -is [int32]

# regex match, array can be use
'Trevor' -match '^T\w*'

# Find multiple matches.
$regex = [regex]'(\w*)'
$regex.Matches('this is test').Value

```

### Estrutura

#### Operação de I/O

```powershell
"This displays a string"

Write-Host "color" -ForegroundColor Red

$age = Read-host "Enter age"

$pwd = Read-host "password" -asSecureString

Clear-Host
```

#### Controles de fluxo

```powershell
IF(<#Condition#>){
<#Commands#>}ELSEIF(){}ELSE{}

Switch($var){
	"val1"{<#Commands#>; break}
    "val2"{<#Commands#>; break}
}

For($ct=0;$ct -le 3;$ct++){}

ForEach($var in $arr){}

while($var -ne 0){}

Do{}While()

```

### Funções / Módulos {.row-span-2}

#### Exemplo 1

```powershell
function funcname{

    [CmdletBinding()]
	param(
		[Parameter(Mandatory)]
		[String]$user
	)
	Write-Host "welcome " $user
    return "value"
}
$var = funcname -user pcb
```

#### Exemplo 2

```powershell
function Get-EvenNumbers {
    [CmdletBinding()]
    param (
        [Parameter(ValueFromPipeline = $true)]
        [int] $Number
    )
    begin {<#command#>}
    process {
        if ($Number % 2 -eq 0) {
            Write-Output $Number
        }
    }
    end {<#command#>}
}
1..10 | Get-EvenNumbers

```

#### Módulos

```powershell
# PowerShell looks module in the path
$env:PSModulePath

# lists all modules installed on system
Get-Module -ListAvailable
# modules imported into current session
Get-Module

Import-Module <moduleName>
Remove-Module <moduleName>

Find-Module -Tag cloud
Find-Module -Name ps*

# Create an in-memory PowerShell module
New-Module -Name trevor -ScriptBlock {
  function Add($a,$b) { $a + $b } }


```

### Dicas

- Na maioria das linguagens, o caractere de escape é a barra invertida **\\**, enquanto no PowerShell é o acento grave (backtick) **`**

```powershell

```

## Veja também {.cols-1}

- [Microsoft PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/samples/sample-scripts-for-administration?view=powershell-7.3)
  _(learn.microsoft.com)_
