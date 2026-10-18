---
title: Django
date: 2024-05-15 10:12:25
background: bg-[#214a35]
label: Python
tags:
  - python
  - web
categories:
  - Programação
intro: |
  Um cheat sheet de Django.
plugins:
  - copyCode
---

## Primeiros passos

### Criar um novo projeto Django

{.row-span-2}

```python
# Create et access project folder
~$  mkdir project_name
~$  cd project_name

# Create Python virtual env
~$  python3 -m venv venv

# Activate virtual env
~$  source venv/bin/activate

# If you want to deactivate virtual env
~$  deactivate

# Install django (~= same as 4.2.*)
~$  pip install django~=4.2.0

# New django project (from project_name folder)
~$  django-admin startproject config

# Create app (from project_name folder)
~$  python manage.py startapp app_name
```

### Migração

<small>O Django cria uma tabela no banco de dados para cada model presente no seu app usando estes comandos:</small>

Makemigrations: cria um arquivo em app_name/migrations com a estrutura do banco de dados a ser criada

```python
~$  python manage.py makemigrations
```

Migrate: lê os arquivos de migrations e cria o banco de dados e as tabelas de fato

```python
~$  python manage.py migrate
```

### Criar superusuário para autenticação/painel admin

```python
~$  python manage.py createsuperuser
```

### Iniciar o servidor

```python
~$  python manage.py runserver  => ex.  http://127.0.0.1:8000
```

### Requisitos

```python
# Create a requirements file that contain all your project dependencies
~$  pip freeze > requirements.txt

# Install your project requirements (if a requirements file exist)
~$  pip install -r requirements.txt
```

### Outros comandos

```python
# Django shell (Run project code directly)
~$ python manage.py shell

# example of code to run in the shell:
 >>> from app_name.models import User
 >>> user1 = User.objects.first()

# Prepare static folders for production
~$ python manage.py collectstatic

# Take all data from app blog and export in json
~$ python manage.py dumpdata blog > myapp.json

# Take all data in json file and import in app data table
~$ python manage.py loaddata myapp.json

# To Create or Update a message file for Translation, run this command
~$ django-admin makemessages -l de
# Updating message files
~$ django-admin compilemessages
```

## Configuração do projeto {.cols-1}

### Configurações

##### Diretório de templates base do projeto e diretório de templates dos apps:

- crie a pasta project/templates
- crie a pasta appfolder/templates/appname

##### Crie a pasta Static na raiz base e separe por apps:

- project_name\static\root
- app_name\static\app_name

```python
# Add app to settings.py
INSTALLED_APPS = [
         … ,
         'app_name.apps.App_nameConfig',
 ]

# template directory config
Project templates settings.py:
    TEMPLATES = [
        { …
           'DIRS': [BASE_DIR / 'templates'],
        … }

# Static folder:
STATIC_URL = '/static/'
STATICFILES_DIRS = [ BASE_DIR / 'static' ]
STATIC_ROOT = 'static_root'
# Media folder:
MEDIA_URL = '/media/'
STATICFILES_DIRS = (
    (BASE_DIR / 'static'),
)
MEDIA_ROOT = BASE_DIR / 'media'

# To use PostgresSQL
# pip install psycopg2
# settings.py
DATABASE = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'blog',
        'USER': 'admin',
        'PASSWORD': '123456',
        'HOST': 'localhost',
        'PORT': '5432'
        }
    }

TIME_INPUT_FORMATS = [
    '%H:%M:%S',     # '14:30:59'
    '%H:%M',        # '14:30'
]

DATE_FORMAT = "Y/M/d"

# locale for Translations
LANGUAGES = [
    ('en', 'English'),
    ('de', 'German'),
]

LOCALE_PATHS = (
    BASE_DIR / 'locale',
)

# CK Editor Configuration
CKEDITOR_UPLOAD_PATH = 'uploads/'
CKEDITOR_RESTRICT_BY_USER = True
CKEDITOR_BROWSE_SHOW_DIRS = True
CKEDITOR_ALLOW_NONIMGE_FILES = True
CKEDITOR_IMAGE_BACKEND = "pillow"
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
    }}

# SSL
# If you have an SSL certificate
SECURE_SSL_REDIRECT = True
# cookies will only be sent via HTTPS connections
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

## Models de dados

### Criar model de dados {.col-span-2}

<small>Estes models podem ser criados como tabelas de banco de dados com os comandos de migrations</small>

```python
# models.py
# The id fields is automaticly created by Django
# for each model that why it's not show below
from django.db import models

class Customer(models.Model)
    name = models.Charfield('Customer', max_length=120)
    age = models.IntegerField()
    note = models.TextField(blank=True, null = True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    credit = models.FloatField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    img = models.ImageField(upload_to ='uploads/')
    # Select Field (return value, display value)
    TYPE_CHOICES = (
        ('Customer', _('Customer')),
        ('Supplier', _('Supplier')),
        ('Student', _('Student')),
    )
    type = models.CharField(choices=TYPE_CHOICES)

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"

    # Model string representation
    def __str__(self):
        return self.name

    # the URL that points to a resource or page on your website
    def get_absolute_url(self):
        return reverse("customer_detail", kwargs={"pk": self.pk})
```

#### Também podemos usar este método para definir o valor do ChoiceField.

```python
  class Customer(models.Model)
    class TypeList(models.IntegerChoices):
        customer = (1, _('Customer'))
        supplier = (2, _('Supplier'))
        student = (3, _('Student'))
    .
    .
    .
    type = models.CharField(choices=TypeList.choices, default=1)
```

#### Para acessar o valor do ChoiceField no template, precisamos fazer o seguinte no template:

- Nos templates Django você pode usar o método "`get_FOO_display()`", que retorna o alias legível para o campo,
  onde `'FOO'` é o nome do campo.
- Se as opções estão armazenadas na variável `CHOICES` e o campo do model que guarda a opção selecionada é `'type'`, então
  você pode usar diretamente

```html
<!-- Here, X is the model instance -->
{{ X.get_type_display }}

<!-- You can even use this method to display its translation. -->
{% trans X.get_type_display %}
```

#### Relacionamentos entre models

```python
# One-to-Many: (use double quotes if the entity is not yet declare) ex. "Supplier"
supplier = models.ForeignKey(Supplier, blank=True, null=True, on_delete=models.CASCADE,related_name="supplierother")

# on_delete can be set to models.CASCADE, models.ST_DEFAULT or models.SET_NULL
# The related_name attribute specifies the name of the reverse relation from the supplier model back to your model

# Many-to-Many:
tags = models.ManyToManyField(Tag, blank=True)

# One to One
User = models.OneToOneField(User, on_delete=models.CASCADE)

# Overwrite save method
def save(self, (*args, **kwargs):
    if not self.slug:
        self.slug = slugify(self.title)
    super().save(*args, **kwargs)
```

## Lookup

### Field Lookups {.col-span-2}

No Django, a sintaxe `field__lookuptype` é usada para fazer lookups em campos nas queries. O `field` representa o
nome do campo no qual você quer fazer o lookup, e `lookuptype` representa o tipo de lookup que você quer fazer.

Por exemplo, digamos que você tenha um model chamado `Book` com um campo chamado `title` . Você pode usar a sintaxe
`field__lookuptype` para fazer diferentes tipos de lookup no campo `title`.

Aqui estão alguns exemplos:

```python

# 1. Exact Match Lookup:
Book.objects.filter(title__exact='Python Tricks')
# 2. Case-insensitive Lookup:
Book.objects.filter(title__iexact='python tricks')
# 3. Contains Lookup:
Book.objects.filter(title__contains='Python')
# 4. Startswith Lookup:
Book.objects.filter(title__startswith='Python')
# 5. Endswith Lookup:
Book.objects.filter(title__endswith='Tricks')
```

### Referência de Field Lookups

| Palavra-chave  | Descrição                                                        |
| -------------- | :--------------------------------------------------------------- |
| `contains`     | Contém a frase                                                   |
| `icontains`    | Igual a contains, mas sem diferenciar maiúsculas de minúsculas   |
| `date`         | Corresponde a uma data                                           |
| `day`          | Corresponde a uma data (dia do mês, 1-31) (para datas)           |
| `endswith`     | Termina com                                                      |
| `iendswith`    | Igual a endswith, mas sem diferenciar maiúsculas de minúsculas   |
| `exact`        | Uma correspondência exata                                        |
| `iexact`       | Igual a exact, mas sem diferenciar maiúsculas de minúsculas      |
| `in`           | Corresponde a um dos valores                                     |
| `isnull`       | Corresponde a valores NULL                                       |
| `gt`           | Maior que                                                        |
| `gte`          | Maior ou igual a                                                 |
| `hour`         | Corresponde a uma hora (para datetimes)                          |
| `lt`           | Menor que                                                        |
| `lte`          | Menor ou igual a                                                 |
| `minute`       | Corresponde a um minuto (para datetimes)                         |
| `month`        | Corresponde a um mês (para datas)                                |
| `quarter`      | Corresponde a um trimestre do ano (1-4) (para datas)             |
| `range`        | Corresponde a um intervalo                                       |
| `regex`        | Corresponde a uma expressão regular                              |
| `iregex`       | Igual a regex, mas sem diferenciar maiúsculas de minúsculas      |
| `second`       | Corresponde a um segundo (para datetimes)                        |
| `startswith`   | Começa com                                                       |
| `istartswith`  | Igual a startswith, mas sem diferenciar maiúsculas de minúsculas |
| `time`         | Corresponde a um horário (para datetimes)                        |
| `week`         | Corresponde a um número de semana (1-53) (para datas)            |
| `week_day`     | Corresponde a um dia da semana (1-7), 1 é domingo                |
| `iso_week_day` | Corresponde a um dia da semana ISO 8601 (1-7), 1 é segunda-feira |
| `year`         | Corresponde a um ano (para datas)                                |
| `iso_year`     | Corresponde a um ano ISO 8601 (para datas)                       |

### Painel Admin {.col-span-2}

Todo projeto Django vem com um Painel Admin que pode ser aberto na url /admin (ex: localhost:8000/admin)<br> Para exibir
o model no Painel Admin, registre o model no arquivo app_name/admin.py<br> Para cada model você pode especificar os
campos que quer usar</small>

```python
from django.contrib import admin
from app_name.models import Blog

# Custom model Admin (admin.py):
@admin.register(Blog)   # Register app
class BlogAdmin(admin.ModelAdmin)
    fields = ("title", "description") # Fields to use for add/edit/show page
    list_display = ("title", "description") # fields to display in search page
    list_display_links = ("title",) # fields that will be a link in search page
    ordering = ("date_created",) # Ordering allowed in the search page
    search_fields = ("title", "description") # Search fields allowed in the search page
    list_filter =("title",) # define list filters that appear in the right sidebar
```

### Roteamento

As informações de roteamento do Django ficam no arquivo project_folder/urls.py

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # pre-created admin urls routes
    path('', include('app_name.urls')) # include your app urls
]
```

O método 'include()' permite vincular outro arquivo urls.py criado na pasta do seu app (app_name/urls.py)

```python
from django.urls import path
from app_name import views

urlpatterns = [
    path('posts', views.index, name='posts.index'),
    path('posts/create/', views.create, name='posts.create',
    path('posts/<int:id>/', views.show, name='posts.show'),
    path('posts/<int:id>/edit/', views.edit, name='posts.edit'),
    path('posts/<int:id>/delete/', views.delete, name='posts.delete'),
    path('posts/<int:id>/<int:state>/', views.status, name='posts.status'), # two arguments
]
```

## Rota estática e personalização do Painel Admin {.cols-1}

### Personalizar o Painel Admin

Cabeçalho e título do painel admin e template personalizado de `404`, `500` e `503`

```python
# add in project/urls.py
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [  ...  ]

if settings.DEBUG == True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Customize Admin Panel Header & Title
admin.site.site_header = _('Administrator Control Panel')
admin.site.site_title = _('Administrator Control Panel')
admin.site.index_title = _('Wellcome to Control Panel')

# Costomize 404 Template page
handler404 = 'app_name.views.handler404'
handler500 = 'app_name.views.handler500'
handler503 = 'app_name.views.handler503'
```

## Views {.cols-1}

### Views baseadas em funções

```python
# views.py
from django.shortcuts import render, redirect
from app_name.models import Post
from app_name.forms import PostForm

def index(request):
    # Get all Posts
    posts = Post.objects.all()

    # Render app template with context
    return render(request, 'appfolder/index.html', {'posts': posts})

def show(request, id):
    post = Post.objects.get(id=id)
    return render(request, 'appfolder/show.html', {'post': post})

def create(request):
    form = PostForm(request.POST or None, request.FILES or None)
    # When the form contains an image or file field, we should use request.FILES
    if form.is_valid():
        # optionally we can access form data with form.cleaned_data['first_name']
        post = form.save(commit=False)
        post.user = request.user
        post.save()
        return redirect('/posts')

    return render(request, 'appfolder/create.html', {'form': form)

def edit(request, id):
    post = Post.objects.get(id=id)
    form = PostForm(request.POST or None, request.FILES or None, instance=post)
    if form.is_valid():
        form.save()
        return redirect('/posts')

    return render(request, 'appfolder/edit.html', {'form': form)

def delete(request, id):
    post = Post.objects.get(id=id)
    post.delete()
    return redirect('/posts')

def status(request, id, state):
    post = Post.objects.get(id=id, state=state)
    return redirect('appfolder/status.html', {'post': post})
```

### Views baseadas em classes

```python
from django.views.generic import TemplateView, ListView, DetailView,
           CreateView, UpdateView, DeleteView

class LandingPageView(TemplateView):
    template_name = 'landing.html'

    # Optional: Change context data dict
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Landing Page'
        return context


class PostsListView(ListView):
    queryset = Post.objects.all()
    # Optional
    # context_object_name = "posts" (default: post_list)
    # template_name = 'posts.html' (default: posts/post_list.html)


class PostsDetailView(DetailView):
    model = Post # object var in template
    # Optional
    # template_name = 'post.html' (default: posts/post_detail.html)


class PostsCreateView(CreateView):
    form_class = PostForm
    template_name = 'posts/post_create.html' # no default value

    def get_success_url(self):
        return reverse('posts-list')

    # Optional: Overwrite form data (before save)
    def form_valid(self, form):
        if self.request.user.is_authenticated:
            from.instance.author = self.request.user
        return super().form_valid(form)


class PostsUpdateView(UpdateView):
    model = Post
    form_class = PostForm
    template_name = 'posts/post_update.html'

    def get_success_url(self):
        return reverse('post-list')

    # Optional: Change context data dict
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['submit_text'] = 'Update'
        return context


class PostsDeleteView(DeleteView):
    model = Post
    template_name = 'posts/post_delete.html'
    success_url = reverse_lazy('posts-list')

# Urls.py route declaration
path('<int:pk>/update/', PostsUpdateView.as_view(), name='post-update')
```

## Templates

### Template básico

Templates ficam em `project_folder/templates` ou em <code>app_folder/templates/app_name/\*.html</code>

```html
<!-- Extend from another template -->
<!-- can use the same parts of your HTML for different template -->
{% extends 'base.html' %}

<!-- A part of the parent template that is defined and is replaced by a part in the child template -->
{% block contents %} {% endblock contents %}

<!-- include template-->
{% include 'partials/header.html' %}
<!-- include template with One or More Parameters -->
{% include 'body.html' with key1=value1 key2=value2 %}

<!-- If statement in template -->
{% if user.username = 'Mike' %}
<p>Hello Admin</p>
{% elif user.username = 'john' %}
<p>Hello John Doe</p>
{% else %}
<p>Hello User</p>
{% endif %}

<!-- for loop in template -->
{% for product in products %}
<p>row: {{ forloop.counter }} # starting index 1 {{ forloop.counter0 }} # starting index 0</p>
<p>The product name is {{ product.name }}</p>
<p></p>
<p>The product name is {{ product.price }}</p>
<p>
  {% endfor %}

  <!-- Access to the variable in the template -->
  {{ var_name }}

  <!-- Template variables formating  -->
  {{ title | lower }} {{ blog.post | truncatwords:50 }} {{ order.date | date:"D M Y" }} {{ list_items | slice:":3" }} {{
  total | default:"nil" }}

  <!-- Current path (ex. posts/1/show) -->
  {{ request.path }}

  <!-- URL by name with param -->
  {% url 'posts.delete' id=post.id %}

  <!-- Use static in template: -->
  {% load static %} {% static 'css/main.css' %}

  <!-- Define the variable in the template -->
  {% with name="World" %}
  <html>
    <div>Hello {{ name }}!</div>
  </html>
  {% endwith %}

  <!-- Template translate text -->
  {% load i18n %}
  <title>{% trans "This is the title." %}</title>
  <!-- Use variable translate in the template -->
  <title>{% trans object.title %}</title>

  <!-- Define the list in the template -->
  <input type="number" {% if product.unit in 'kg,milligram,milliliter' %} step="0.01" {% else %} step="1" {% endif %}>

  <!-- Safely Pass Data to JavaScript in a Django Template: -->
  <!--+ Use data attributes for simple values -->
  <script data-username="{{ username }}">
    const data = document.currentScript.dataset;
    const username = data.username;
  </script>

  <!-- + Separate script files: can use document.currentScript for separate script files -->
  <script src="{% static 'index.js' %}" data-username="{{ username }}"></script>

  <!-- + Case conversion -->
  <script src="{% static 'index.js' %}" data-full-name="{{ full_name }}"></script>
  <!--  Read it in JavaScript as fullName: -->
  <script>
    const data = document.currentScript.dataset;
    const fullName = data.fullName;
  </script>

  <!-- + Non-string types -->
  <script src="{% static 'index.js' %}" data-follower-count="{{ follower_count }}"></script>

  <!--  parseInt() to convert this value from a string: -->
  <script>
    const data = document.currentScript.dataset;
    const followerCount = parseInt(data.followerCount, 10);
  </script>

  <!-- + There’s no limit: A <script> can have as many data attributes as you like: -->
  <script
    src="{% static 'index.js' %}"
    defer
    data-settings-url="{% url 'settings' %}"
    data-configuration-url="{% url 'configuration' %}"
    data-options-url="{% url 'options' %}"
    data-preferences-url="{% url 'preferences' %}"
    data-setup-url="{% url 'setup' %}"
  ></script>
</p>
```

### Tags e filtros de template personalizados

Por exemplo, se suas tags/filtros personalizados estão em um arquivo chamado `basetags.py`, a estrutura do seu app pode ser assim:

```
app_name/
└─── templatetags/
     └─── basetags.py
     __init__.py
     models.py
     views.py
```

- E no seu template você usaria o seguinte:

```html
{% load basetags %}
```

- o módulo deve conter uma variável de nível de módulo chamada register que seja uma instância de template.Library, na qual
  todas as tags e filtros são registrados. Então, perto do topo do seu módulo, coloque o seguinte:

### Escrever filtros de template personalizados

Filtros personalizados são funções Python que recebem um ou dois argumentos: o valor da variável (input) – não necessariamente
uma string. O valor do argumento – que pode ter um valor padrão ou ser omitido. Por exemplo, no filtro `{{ var|foo:"bar" }}`,
o filtro foo receberia a variável var e o argumento "bar".

O método Library.filter() recebe dois argumentos: o nome do filtro – uma string. A função de compilação – uma função Python
(não o nome da função como string). Em vez disso, você pode usar register.filter() como decorator:

```python
# basetags.py
from django import template

register = template.Library()

@register.filter(name="cut")
def cut(value, arg):
    """Removes all values of arg from the given string"""
    return value.replace(arg, "")

# Most filters don’t take arguments. In this case, leave the argument out of your function
@register.filter()
def lower(value): # Only one argument.
    """Converts a string into all lowercase"""
    return value.lower()


@register.simple_tag
def to_class_name(object):
    return str(object.__class__.__name__)

# Template
# And here’s an example of how that filter would be used in Template:
{{ somevariable | cut:"0" }}

# Put the result of simple tag into a variable
{% to_class_name object as objectmodel %}
<p>Model Class Name: {{ objectmodel }}</p>
```

## Context Processor {.cols-1}

### Criar um Context Processor personalizado

Em qualquer lugar, crie um arquivo `context_processors.py`

```
project_name
└───app_name
    ├───...
    └───context_processors.pyy
```

Crie uma função em context_processors.py que receba um objeto HttpRequest como argumento e retorne um dicionário

Um context processor é apenas uma função que recebe um objeto HttpRequest como argumento e retorna um dicionário. Por
exemplo:

```python
# app_name/context_processors.py
def site_email(request):
    return { 'site_email' : 'example@gmail.com' }
```

3. Adicione isto à configuração context_processors no settings.py (no final, por motivos de segurança)

```python
 TEMPLATES = [
    { …
        'OPTIONS': {
          'context_processors': [
            …
              'app_name.context_processors.site_email',
              # New context processor here
            …
          ],
    … },

# Now be able to access the 'site_email' template variable on every single django template across your whole site.
```

## Model Managers e Querysets

### Model Manager

O model manager permite leituras e gravações no banco de dados do model

```python
# One line create and save
Article.objects.create(name='Item 1', price=19.95)

# Read all
Article.objects.all()

# Create
user = User.objects.first()
article = Article(user=user, name='Item 1', price=19.95)

# Save
article.save()

# Read one
Article.objects.get(id=1)

# Select Related (to avoid n+1 query)
posts = Post.objects.select_related('user', 'category').all()

# Read or render a 404 not found page
from django.shortcuts import get_object_or_404
article = get_object_or_404(Article, id=512)

# Filter
Article.objects.filter(model='dyson', name__icontains='dyson') # __icontains
Article.objects.filter(year__gt=2016) # __gt = greater than
Article.objects.filter(year__lt=2001) # __lt = less than

# Filter on relationship sub model field
Article.objects.get(user__username='mike')

# Ordering
Article.objects.order_by('name')     # ascending
Article.objects.order_by('-name')   # descending

# Slicing return first
Article.objects.all().order_by('name')[0]

# Slicing return last
Article.objects.all().order_by('-name')[0]

# Slicing limit/offset
Article.objects.all().order_by('name')[1..10]

# Updating
article = Article.objects.first()
article.name = 'new name'
article.save()

# One line update
Article.objects.filter(id=4).update(name='new name')

# Deleting
article = Article.objects.first()
article.delete()

# One line delete
article.objects.get(id=1).delete()

# Delete all
Article.objects.all().delete()

# Set ForeignKey field value
model1 = Model(name='dyson')
article.model = model1

# Get ForeignKey value
article1.model.name
model1.article_set.all()

# Add Many-to-Many
article1.tags.add(tag1)
article1.tags.all()
tag1.articles_set.all()
```

## Formulário

### Criação de formulário {.col-span-2}

Em HTML, um formulário é uma coleção de elementos dentro de `<form>...</form>` que permitem que um visitante faça coisas como
digitar texto, selecionar opções, manipular objetos ou controles e, em seguida, enviar essas informações de volta ao servidor.

```python
# app_name/forms.py
from django import forms
class ArticleForm(forms.Form):
    name = forms.Charfield(max_length=100)
    description = forms.Charfield(blank=True, null = True)


# Model Form
from django.forms import ModelForm
from app_name.models import Article
class ArticleForm(ModelForm):
    class Meta:
        model = Article
        fields = ['name', 'description', 'price'] # Use '__all__' for all fields
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
        }
        labels = {
            'name': 'First Name',
        }
        error_messages = {
            'name': {'required': 'This field is required',},
            }
        help_texts = {
        'name': 'Enter Your First Name',
        }
```

```html
<!-- Render form in template -->
<form method="“post”" action="“”" novalidate>
  {% csrf_token %} {{ form }}
  <button type="submit">Submit</button>
</form>
```

- NOTA: se o formulário contém um campo de arquivo, ele DEVE conter `enctype="multipart/form-data"`, ex.:

```html
<form action="" method="post" enctype="multipart/form-data">
  {% csrf_token %} {{ form.as_p }}
  <button type="submit">{% trans 'Submit' %}</button>
</form>
```

##### Um template pack do Tailwind CSS para o ótimo django-crispy-forms.

```bash
pip install crispy-tailwind
```

```python
# settings.py
INSTALLED_APPS = (
    ...
    "crispy_forms",
    "crispy_tailwind",
    ...
)
CRISPY_ALLOWED_TEMPLATE_PACKS = 'tailwind'
CRISPY_TEMPLATE_PACK = 'tailwind'
```

```html
<!-- template usage -->
{% load tailwind_filters %} {{ form|crispy }}
```

### Validação de formulário

```python
# forms.py
from django.core.exceptions import ValidationError

# field validation
def clean_first_name(self):
    data = self.cleaned_data['first_name']
    if data = 'Mike':
        raise ValidationError('Your name must not be Mike')
    return data

# form validation
def clean(self):
    first_name = self.cleaned_data['first_name']
    last_name = self.cleaned_data['last_name']
    if first_name + last_name = 'MikeTaylor':
        raise ValidationError('Your name must not be Mike Taylor')
```

## Flash messages {.cols-1}

### Exibir mensagens

```python
# Message tags
# debug, info, success, warning and error

messages.success(request, 'Login successful')
messages.error(request, 'Login error')
```

```html
<!-- Display flash messages in template -->
{% if messages %} {% for message in messages %} {% message %} {% message.tags %}
{% endfor %} {% endif %}
```

## Model de usuário

### Pré-criado

Model de usuário (pré-criado)

```python
# Get a reference to Django pre-created User model
from django.contrib.auth import get_user_model

User = get_user_model()

# Or if you want to custom user model
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # add custom fields and methods

# To make Django use that model go to settings.py and add: AUTH_USER_MODEL = 'app_name.User'
```

## Autenticação

### Autenticação: LoginView

```python
# LoginView is already pre-created by Django
from django.contrib.auth.views import LoginView

# Add a url to reach that view
path('login/', LoginView.as_view(), name='login')

# By default the LoginView will try to open a template name 'registration/login.html' and send a login form with it.
```

```html
<!-- Create a template under registration/login.html -->
{% extends "base.html" %} {% block content %}
<form method="post">
  {% csrf_token %} {{ form }}
  <button type="submit">Login</button>
</form>
{% endblock content %}

<!-- When user click the Login button, the LoginView will try to authenticate the user with the form username ans password -->

<!-- If successful il will then login the user and redirect to LOGIN_REDIRECT_URL specified in your settings.py -->
```

#### Autenticação: LogoutView

```python
# LogoutView is already pre-created by Django
from django.contrib.auth.views import LogoutView

# Add a url to reach that view
path('logout/', LoginView.as_view(), name='logout')

# Include a link in a template
<a> href="{% url 'logout' %}">Logout</a>

# After link is execute, the user will be logout and redirect to LOGOUT_REDIRECT_URL specified in your settings.py
```

#### Autenticação: SignupView

```python
# Create a SignupView (that view is not created by default)
# import sinupview form pre-created by Django
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView

class SignupView(CreateView):
    template_name = 'registration/signup.html'
    form_class = UserCreationForm

    def get_success_url(self):
        return reverse("login")
```

```html
<!-- Create template: registration/signup.html -->
{% extends "base.html" %} {% block content %}
<form method="post">
  {% csrf_token %} {{ form }}
  <button type="submit">Signup</button>
</form>
{% endblock content %}
```

```python
# Add a url to reach that view
from posts.views import SignupView

path('signup/', SignupView.as_view(), name='signup')
```

```python
# Optional: Customize the UserCreationForm
# (forms.py)
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

User = get_user_model()
class CustomUserCreationForm(UserCreattionForm):
    class Meta:
        model = User
        fields = ['username']
        fields_classes = {'username': UsernameField}
```

#### Rotas de autenticação pré-criadas opcionais

```python
# urls.py
urlpatterns += path('', include('django.contrib.auth.urls'))
# /login, /lougout, /signup, etc.
```

#### Helpers de autenticação no template

```html
<!-- Authentication links -->
<a href="{% url 'login' %}">Login</a>
<a href="{% url 'signup' %}">Signup</a>
<a href="{% url 'logout' %}">Logout</a>

<!-- Check if user login -->
{% if request.user.is_authenticated %} Logged in as: {{ request.user.username }}
{% endif %}
```

#### Autorização: LoginRequiredMixin e login_required

```python
from django.contrib.auth.mixins import LoginRequiredMixin

# Restrict views to auth user only (views.py)
class PostsCreateView(LoginRequiredMixin, generic.CreateView):
    ...
    ...


from django.contrib.auth.decorators import login_required

@login_required(login_url='/login')
def search_page(request):
    ...
    ...
```

#### Autenticação manual: login e logout

```python
from django.contrib.auth import authenticate, login

def login_page(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("index")

return render(request, "registration/login.html", {})


def logout_page(request):
    logout(request)
    return redirect("index")
```

#### Alterar a senha do usuário

```python
# set_password will hash the password
user.set_password('raw password')
```

## Criar um model de contas personalizado

```python
~$ python manage.py startapp accounts
```

```python
# Add accounts app to settings.py
INSTALLED_APPS = [ … ,
         'accounts.apps.AccountsConfig',
          ]
.
.
.
AUTH_USER_MODEL = 'accounts.User'
```

```python
# accounts/models.py
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not username:
            raise ValueError('Users must have an username')
        if not email:
            raise ValueError('Users must have an email')

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username,  email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        user = self.create_user(username, email, password=password, **extra_fields)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(verbose_name='Username', max_length=255, unique=True)
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    phone = models.BigIntegerField(verbose_name='Phone Number', unique=True, blank=True, null=True)
    is_active = models.BooleanField(default=True, verbose_name="is_active")
    is_staff = models.BooleanField(default=False, verbose_name="is_staff")
    is_superuser = models.BooleanField(default=False, verbose_name="is_superuser")

    objects = UserManager()

    # We can use any field for username
    USERNAME_FIELD = 'username'  # or 'email' or 'phone'
    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
```

```python
# accounts/forms.py
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from accounts.models import User
from django.utils.translation import gettext_lazy as _


class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'email', 'phone', 'is_active', 'is_staff')

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('username', 'email', 'phone', 'is_active', 'is_staff')

    def clean_password(self):
        return self.initial["password"]


class LoginForm(forms.Form):
    email = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Email'}), label='Email')
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}),label='Password')


class RegisterForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))
    password2 = forms.CharField(label='Password confirmation',
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ('username', 'email', 'phone')

        widgets = {  # Optional
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'phone': forms.NumberInput(
                attrs={'class': 'form-control', 'type': 'tel', 'maxlength': '11',
                       'minlength': '11',  'onkeypress': 'return isNumber(event)', 'required': 'false'})}

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        else:
            return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class EditProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'phone')


class ChangePassword(forms.Form):
    password1 = forms.CharField(label=_('Password'), widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': 'Password'}))
    password2 = forms.CharField(label=_('Password confirmation'),
                                widget=forms.PasswordInput(
                                    attrs={'class': 'form-control', 'placeholder': 'Re-Enter Password'}))

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        else:
            return password2
```

```python
# accounts/admin.py
from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django.contrib.auth.models import Group
from accounts.models import User


class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'email', 'phone')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('username', 'email', 'phone', 'password', 'is_active', 'is_staff')


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    list_display = ('username', 'email', 'is_active', 'is_staff', 'is_superuser')
    list_editable = ('is_staff', 'is_active')
    list_filter = ('is_staff', 'groups')
    fieldsets = (
        (None, {'fields': ( 'username', 'email', 'phone', 'password')}),
        ('Permissions', {'fields': ('is_staff',)}),
        ('Group Permissions', {
            'fields': ('is_active', 'is_superuser', 'groups', 'user_permissions'),
        })
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'phone', 'password1', 'password2'),
        }),
        ('Group Permissions', {
            'fields': ('is_active', 'is_superuser', 'groups', 'user_permissions'),
        })
    )
    search_fields = ('username', 'email', 'phone')
    ordering = ('username', 'email', 'phone')
    filter_horizontal = ('groups', 'user_permissions',)


admin.site.register(User, UserAdmin)
# unregister the Group model from admin.
# admin.site.unregister(Group)
```

```python
# accounts/urls.py
from django.urls import path
from accounts import views

app_name = 'accounts'
urlpatterns = [
    path('login/', views.userLogin, name='login'),
    path('register/', views.userRegister, name='register'),
    path('logout/', views.LogoutPage, name='logout')
]
```

```python
# accounts/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.utils.translation import gettext_lazy as _
from accounts.forms import LoginForm, RegisterForm
from django.contrib import messages
from accounts.models import User


def userRegister(request):
    form = RegisterForm()
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            if not User.objects.filter(email=cd['username']).exists():
                if not User.objects.filter(email=cd['email']).exists():
                    user = User.objects.create_user(
                        username=cd['username'], phone=cd['phone'], email=cd['email'], password=cd['password1'])
                    user.save()
                    login(request, user)
                    messages.success(request, _("You successfully registered a user"), extra_tags="success")
                    return redirect('app_name:home')
                else:
                    messages.error(request, _("This Email is exists"), extra_tags="warning")
            else:
                messages.error(request, _("This Username is exists"), extra_tags="warning")
        else:
            import json
            er = json.loads(form.errors.as_json())
            for e in er:
                messages.error(request, er[e][0]['message'], 'warning')
    return render(request, 'accounts/register.html', {'form': form})


def userLogin(request):
    if not request.user.is_active:
        if request.method == 'POST':
            form = LoginForm(request.POST)
            if form.is_valid():
                cd = form.cleaned_data
                if User.objects.filter(username=cd['username']).exists():
                    user = authenticate(request, username=cd['username'], password=cd['password'])
                    if user is not None:
                        login(request, user)
                        messages.success(request, _("logged in successfully"), extra_tags="success")
                        return redirect('app_name:home')
                    else:
                        messages.error(request, _("your username Or Password is wrong"), extra_tags="warning")
                else:
                    messages.error(request, _("No account created with this username"), extra_tags="warning")
                    return redirect('accounts:login')
            else:
                messages.error(request, _("Please enter your information correctly"), extra_tags="warning")
        else:
            form = LoginForm()
        return render(request, 'accounts/login.html', {'form': form})
    else:
        return redirect('app_name:home')


@login_required()
def LogoutPage(request):
    logout(request)
    messages.success(request, _("You Logged Out successfully"), extra_tags="success")
    return redirect('app_name:home')
```

## Enviar e-mail

```python
# settings.py
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Send email function
from django.core.email import send_mail

send_mail(
    subject = "A new post has been created",
    message = "Go to the web site to see the detail",
    from_email = "test@test.com",
    recipient_list = ["test2@text.com"]
)
```

## Signals

```python
# models.py
from django.db.models.signals import post_save, pre_save

def post_user_created_signal(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

# Launch the post_user_created_signal method if User model is save
post_save.connect(post_user_created_signal, sender=User)
```

## Seed

```python
from app_name.models import Product, Category
from django.shortcuts import HttpResponse
from faker import Faker


def seed(request):
    Product.objects.all().delete()
    Category.objects.all().delete()

    category = Category()
    category.name = "Sports"
    category.save()

    category = Category()
    category.name = "Home"
    category.save()

    fake = Faker()
    for _ in range(100):
        product = Product()
        product.name = fake.unique.word()
        product.short_description = fake.sentence()
        product.main_picture = fake.image_url()
        product.price = fake.random_digit() * 10
        product.category =  Category.objects.order_by('?').first()
        product.save()

    return HttpResponse('Seeded')
```

## Variáveis de ambiente

### Arquivo .env de chave/valor

```python
$ pip install python-decouple
```

Crie um arquivo chamado '.env' na pasta raiz do seu projeto

```python
SECRET_KEY = 'your secret key'
ALLOWED_HOST = 127.0.0.1
```

No settings.py, altere as configurações relacionadas à segurança para apontar para o arquivo .env

```python
from decouple import config

SECRET_KEY = config('SECRET_KEY')
ALLOWED_HOST = config('ALLOWED_HOST')
```

## Tarefas assíncronas

### Django Celery Redis

Celery é uma fila de tarefas distribuída que pode coletar, registrar, agendar e executar tarefas fora do seu programa principal.

#### Passo 1: instalar o Celery usando pip

```python
~$ pip install celery       # pip install celery[redis]
```

#### Passo 2: adicionar o arquivo celery.py ao módulo do seu projeto

```python
# your_project/celery.py
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE','your_project_name.settings')
app = Celery('your_project_name')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
```

#### Passo 3: importar o app Celery no Django

<small>Para garantir que o app Celery seja carregado quando o Django iniciar, adicione o código a seguir ao arquivo `__init__.py`
que fica no módulo do projeto, ao lado do arquivo settings.py.</small>

```python
# your_project/__init__.py
from .celery import app as celery_app

__all__ = ('celery_app',)
```

#### Passo 4: baixar e executar o Redis como ‘broker’ do Celery

```python
~$ redis-server
```

<small>Você pode testar se o Redis está funcionando corretamente digitando isto no terminal:</small>

```python
~$ redis-cli ping
```

O Redis deve responder com PONG - experimente!

#### Passo 5: adicionar o Redis como dependência no projeto Django:

```python
~$ pip install redis
```

#### Passo 6: configurar o Celery no arquivo de settings do Django

Com o Redis em execução, adicione o código a seguir ao seu arquivo settings.py e use celery-result

```python
~$ pip install django-celery-results
```

Esta extensão permite armazenar os resultados das tarefas do Celery usando o ORM do Django.<br> Ela define um único model
(`django_celery_results.models.TaskResult`) usado para armazenar os resultados das tarefas, e você pode consultar essa tabela do
banco de dados como qualquer outro model Django.

```python
INSTALLED_APPS = [
                … ,
                'django_celery_results',
                ]

BROKER_URL = 'redis://localhost:6379'
CELERY_RESULT_BACKEND = 'redis://localhost:6379'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = TIME_ZONE
CELERY_RESULT_BACKEND = 'django-db'
CELERY_CACHE_BACKEND = 'django-cache'

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'redis://localhost:6379/1',
        "OPTIONS": {
                    "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}
```

#### É isso! Agora você deve conseguir usar o Celery com Django

Teste se o worker do Celery está pronto para receber tarefas:

```python
~$ celery -A your_project_name worker -l info
```

O ponto mais importante é: sempre é necessário um worker em execução para executar a tarefa do Celery, se algum erro for
lançado pelo Redis como este:

```python
AttributeError: 'str' object has no attribute 'items'
```

- a solução é: usar uma versão antiga do Redis

### Adicionar uma nova tarefa

#### Passo 1: adicionar o arquivo tasks.py ao seu app Django.

```python
# app_name/tasks.py
from celery import shared_task
from celery.decorators import task
from time import sleep


@task(name='my_first_task')
def my_first_task(duration):
    sleep(duration)
    return('first_task_done')

@shared_task
def test_func():
    for i in range(10):
        print(i)
    return 'End_OK'

@shared_task
def adding(x, y):
    time.sleep(10)
    result = x + y
    return result
```

#### Passo 2: atribuir a tarefa ao Celery.

Você precisa atribuir uma tarefa ao Celery. Para atribuir esta tarefa, chame esta função de forma diferente.
O Celery nos dá dois métodos, `delay()` e `apply_async()`, para chamar a tarefa.

```bash
# Normal function call in python
~$ my_first_task()

# add task to the celery with function call
~$ my_first_task.delay()
```

Você pode passar argumentos para a função usando o método delay. <small>Para ver o Celery em ação, abra outra aba
do terminal, vá até o diretório do projeto (ative o ambiente, se estiver usando um) e execute este comando
novamente</small>

```bash
~$ celery -A your_project_name worker -l info
```

### Criar uma view no seu app

```python
# app_name/views.py
from django.http import HttpResponse
from app_name.tasks import my_first_task, test_func, adding

def index(request):
    my_first_task.delay(10)
    result = adding.delay(x=4, y=5)
    return HttpResponse(f'response done. {result}')

def test(request):
    test_func.delay()
    return HttpResponse("Done")
```

#### Depois, chame a view pela URL do seu app

```python
# app_name/urls.py
from django.urls import path
from app_name.views import index, test
urlpatterns = [
    path('celery-index/', index, name='celery_index_url'),
    path('celery-test/', test, name='celery_test_url'),
]
```

### Celery em produção usando Supervisor

#### Passo 1: instalar o Supervisor no servidor Ubuntu

```bash
~$ sudo apt-get install supervisor
```

#### Passo 2: adicionar o arquivo .conf no Supervisor

```bash
~$ sudo nano /etc/supervisor/conf.d/app_name.conf
```

`app_name` pode ser qualquer coisa que você quiser; deve ser semelhante ao nome do seu projeto.

#### Passo 3: adicionar algumas configurações em app_name.conf

```bash
[program:your_app_name]
command=/path/to/env/bin/celery worker -A your_project_name --loglevel=INFO
directory=/path/to/workflow/your_project_name/
user=www-data
autostart=true
autorestart=true
stdout_logfile=/path/to/workflow/your_project_name/logs/celeryd.log
redirect_stderr=true
```

Descrição do arquivo de configuração:

```bash
[program:your_app_name]
#The name of your supervisord program

command=/path/to/env/bin/celery worker -A your_project_name --loglevel=INFO
#Set full path to celery program if using virtualenv

directory=/path/to/workflow/your_project_name/
#The directory to your Django project

user=www-data
#The web server has to be run under a specific user. That user must exist.

autostart=true
#If true, this program will start automatically when supervisord is started

autorestart=true
#May be one of false, unexpected, or true. If false, the process will never be autorestarted. If unexpected, the process will be restart when the program exits with an exit code that is not one of the exit codes associated with this process’ configuration (see exitcodes). If true, the process will be unconditionally restarted when it exits, without regard to its exit code.

stdout_logfile=/path/to/workflow/your_project_name/logs/celeryd.log
#Put process stdout output in this file

redirect_stderr=true
#If true, cause the process’ stderr output to be sent back to supervisord on its stdout file descriptor (in UNIX shell terms, this is the equivalent of executing /the/program 2>&1).
```

#### Passo 4: informar a configuração ao servidor

Depois de adicionar um novo programa, execute os dois comandos a seguir para informar o servidor a reler os arquivos
de configuração e aplicar quaisquer alterações.

```python
~$ sudo supervisorctl reread
~$ sudo supervisorctl update
```

#### Gerenciar o app no Supervisor

```bash
~$ sudo supervisorctl
```

Você verá uma lista dos processos registrados. Haverá um processo chamado `your_app_name` com status
`RUNNING`.

```bash
your_app_name                 RUNNING   pid 6853, uptime 0:22:30
supervisor>
```

Digite `help` para ver uma lista dos comandos disponíveis.

```bash
supervisor> help
default commands (type help <topic>):
=====================================
add    exit      open  reload  restart   start   tail
avail  fg        pid   remove  shutdown  status  update
clear  maintail  quit  reread  signal    stop    version
```

Em resumo, podemos usar `start`, `stop` e `restart` nos programas passando o nome do programa como argumento para o respectivo
comando. Também podemos ver a saída do programa com o comando `tail`. Ao terminar, use `quit`.

```bash
~$ supervisor> quit
```

## Deploy do Django no servidor

### Configurar Django com Postgres, Nginx e Gunicorn em um servidor Ubuntu

#### Passo 1 — instalar os pacotes dos repositórios do Ubuntu

```bash
sudo apt update
sudo apt install python3-venv python3-dev libpq-dev postgresql postgresql-contrib nginx curl
```

#### Passo 2 — criar o banco de dados PostgreSQL e o usuário

```bash
sudo -u postgres psql
```

- Primeiro, crie um banco de dados para o seu projeto:

```bash
postgres=# CREATE DATABASE myproject;
```

- Em seguida, crie um usuário de banco de dados para o projeto. Escolha uma senha segura:

```bash
postgres=# CREATE USER myprojectuser WITH PASSWORD 'password';
```

- Depois, modifique alguns parâmetros de conexão do usuário que você acabou de criar

```bash
postgres=# ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
postgres=# ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE myprojectuser SET timezone TO 'UTC';
```

- Agora, dê ao novo usuário acesso para administrar o novo banco de dados:

```bash
postgres=# GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
```

- Ao terminar, saia do prompt do PostgreSQL digitando:

```bash
postgres=# \q
```

#### Passo 3 — criar um ambiente virtual Python para o seu projeto

- No diretório do projeto, crie um ambiente virtual Python digitando:

```bash
mkdir ~/myprojectdir
cd ~/myprojectdir
```

- Dentro do diretório do projeto, crie um ambiente virtual Python digitando:

```bash
python3 -m venv myprojectenv
```

- Antes de instalar os requisitos Python do seu projeto, ative o ambiente virtual. Faça isso
  digitando:

```bash
source myprojectenv/bin/activate
```

- Com o ambiente virtual ativo, instale Django, Gunicorn e o adaptador PostgreSQL psycopg2 com a instância local
  do pip

```bash
(myprojectenv)$ pip install django gunicorn psycopg2-binary
```

#### Passo 4 — criar e configurar um novo projeto Django

- Com os componentes Python instalados, você pode criar os arquivos do projeto Django.

```bash
(myprojectenv)$ django-admin startproject myproject ~/myprojectdir
```

- A primeira coisa a fazer com os arquivos do projeto recém-criado é ajustar as configurações. Abra o arquivo de settings
  no seu editor de texto:

```bash
(myprojectenv)$ nano ~/myprojectdir/myproject/settings.py
```

- Comece localizando a diretiva ALLOWED_HOSTS.

```python
# ~/myprojectdir/myproject/settings.py
ALLOWED_HOSTS = ['your_server_domain_or_IP', 'second_domain_or_IP', . . ., 'localhost']
```

- Em seguida, encontre a seção que configura o acesso ao banco de dados. Ela começa com DATABASES. A configuração no arquivo é
  para um banco de dados SQLite.

```python
. . .
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'myproject',
        'USER': 'myprojectuser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
. . .
```

- Depois, vá até o final do arquivo e adicione uma configuração indicando onde os arquivos estáticos devem ficar.

```python
. . .
STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

import os
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
```

#### Passo 5 — concluir a configuração inicial do projeto

- Agora, migre o schema inicial do banco de dados para o PostgreSQL usando o script de gerenciamento:

```bash
(myprojectenv)$ ~/myprojectdir/manage.py makemigrations
(myprojectenv)$ ~/myprojectdir/manage.py migrate
```

- Crie um usuário administrativo para o projeto digitando:

```bash
(myprojectenv)$ ~/myprojectdir/manage.py createsuperuser
```

- Você pode reunir todo o conteúdo estático no diretório que configurou digitando:

```bash
(myprojectenv)$ ~/myprojectdir/manage.py collectstatic
```

#### Passo 6 — testar a capacidade do Gunicorn de servir o projeto

```bash
(myprojectenv)$ cd ~/myprojectdir
(myprojectenv)$ gunicorn --bind 0.0.0.0:8000 myproject.wsgi
```

- A configuração da sua aplicação Django está concluída. Você pode sair do ambiente virtual digitando:

```bash
(myprojectenv)$ deactivate
```

#### Passo 7 — criar arquivos de socket e serviço do systemd para o Gunicorn Você já testou o

```bash
sudo nano /etc/systemd/system/gunicorn.socket
```

- Dentro dele, crie uma seção `[Unit]` para descrever o socket, uma seção `[Socket]` para definir o local do socket,
  e uma seção `[Install]` para garantir que o socket seja criado no momento certo:

```bash /etc/systemd/system/gunicorn.socket
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

- Salve e feche o arquivo ao terminar.
- Em seguida, crie e abra um arquivo de serviço do systemd para o Gunicorn com privilégios sudo no seu editor de texto. O nome
  do arquivo de serviço deve ser igual ao do socket, exceto pela extensão:

```bash
sudo nano /etc/systemd/system/gunicorn.service
```

```bash
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=sammy
Group=www-data
WorkingDirectory=/home/sammy/myprojectdir
ExecStart=/home/sammy/myprojectdir/myprojectenv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          myproject.wsgi:application

[Install]
WantedBy=multi-user.target
```

- Agora você pode iniciar e habilitar o socket do Gunicorn. Isso criará o arquivo de socket em /run/gunicorn.sock agora e
  no boot. Quando uma conexão for feita nesse socket, o systemd iniciará automaticamente o gunicorn.service para tratá-la

```bash
sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket
```

#### Passo 8 — verificar o arquivo de socket do Gunicorn

- Verifique o status do processo para saber se ele conseguiu iniciar:

```bash
sudo systemctl status gunicorn.socket
```

- Em seguida, verifique se o arquivo gunicorn.sock existe no diretório /run:

```bash
file /run/gunicorn.sock
```

#### Passo 9 — testar a ativação do socket

```bash
sudo systemctl status gunicorn
```

- Para testar o mecanismo de ativação do socket, envie uma conexão ao socket com curl digitando:

```bash
curl --unix-socket /run/gunicorn.sock localhost
```

- Você deve receber no terminal a saída HTML da sua aplicação. Isso indica que o Gunicorn iniciou e
  conseguiu servir sua aplicação Django. Verifique se o serviço Gunicorn está em execução digitando:

```bash
sudo systemctl status gunicorn
```

- Verifique se há problemas no arquivo /etc/systemd/system/gunicorn.service. Se você alterar o arquivo
  /etc/systemd/system/gunicorn.service, recarregue o daemon para reler a definição do serviço e reinicie o processo do Gunicorn
  digitando

```bash
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```

#### Passo 10 — configurar o Nginx para fazer proxy pass para o Gunicorn

- Comece criando e abrindo um novo server block no diretório sites-available do Nginx:

```bash
sudo nano /etc/nginx/sites-available/myproject
```

```bash
server {
    listen 80;
    server_name server_domain_or_IP;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        alias /home/sammy/myprojectdir/staticfiles/;
    }

    location /media {
        autoindex on;
        alias /home/sammy/myprojectdir/media/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

- Salve e feche o arquivo ao terminar. Agora, habilite o arquivo vinculando-o ao diretório sites-enabled
  digitando:

```bash
sudo ln -s /etc/nginx/sites-available/myproject /etc/nginx/sites-enabled
```

- Teste sua configuração do Nginx em busca de erros de sintaxe digitando:

```bash
sudo nginx -t
```

- Se nenhum erro for reportado, reinicie o Nginx digitando:

```bash
sudo systemctl restart nginx
```

- você precisa liberar o firewall para tráfego normal na porta 80

```bash
sudo ufw allow 'Nginx Full'
```

Agora você deve conseguir acessar o domínio ou endereço IP do seu servidor para ver sua aplicação.

#### Passo 11 — solução de problemas do Nginx e do Gunicorn

- O Nginx mostra a página padrão em vez da aplicação Django

```bash
sudo tail -F /var/log/nginx/error.log
```

- O Django mostra: “could not connect to server: Connection refused”

```bash
sudo systemctl status postgresql
```

- Se não estiver, inicie o serviço e habilite-o para iniciar automaticamente no boot (se ainda não estiver configurado
  para isso) digitando:

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

Se você alterar os arquivos de socket ou de serviço do Gunicorn, recarregue o daemon e reinicie o processo digitando:

```bash
sudo systemctl daemon-reload
sudo systemctl restart gunicorn.socket gunicorn.service
```

Se você alterar a configuração do server block do Nginx, teste a configuração e depois o Nginx digitando:

```bash
sudo nginx -t && sudo systemctl restart nginx
```
