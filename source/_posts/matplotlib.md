---
title: Matplotlib
date: 2026-07-19
background: bg-[#1a073e]
tags:
  - data visualization
  - matplotlib
  - plotting
categories:
  - Python
intro: |
  [Matplotlib](https://matplotlib.org/) é uma biblioteca completa para criar gráficos estáticos, animados e interativos em Python.
  Este cheat sheet traz uma referência de nível de produção para matplotlib ≥3.8, com ênfase em figuras com qualidade de publicação, interface OOP e otimização de desempenho.
plugins:
  - copyCode
---

## Primeiros passos {.cols-2}

### Convenção de importação

```python
import matplotlib.pyplot as plt
import numpy as np

# For high-quality figures
plt.rcParams['figure.dpi'] = 120
plt.rcParams['savefig.dpi'] = 300
plt.rcParams['font.size'] = 10
plt.rcParams['axes.labelsize'] = 12
plt.rcParams['axes.titlesize'] = 14
plt.rcParams['legend.fontsize'] = 10
```

### Duas interfaces

| Descrição | Código |
|-------------|------|
| Pyplot (procedural) - rápido | `plt.plot(x, y); plt.show()` |
| OOP (explícito) - produção | `fig, ax = plt.subplots(); ax.plot(x, y); fig.savefig('fig.pdf')` |
| Cria a figura e os eixos | `fig, ax = plt.subplots(figsize=(8, 6))` |
| Cria uma figura com grade | `fig, axes = plt.subplots(2, 2, figsize=(10, 8))` |
| Obtém a figura/eixos atuais | `fig = plt.gcf(); ax = plt.gca()` |

### Gráfico básico

```python
x = np.linspace(0, 10, 100)
y = np.sin(x)
fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("Sine Wave")
ax.set_xlabel("x")
ax.set_ylabel("sin(x)")
plt.show()
```

---

## Tipos de gráfico {.cols-2}

### Gráfico de linha

| Descrição | Código |
|-------------|------|
| Gráfico de linha simples | `ax.plot(x, y)` |
| Com estilo personalizado | `ax.plot(x, y, 'r--o', linewidth=2, markersize=4)` |
| Múltiplas séries | `ax.plot(x, y1, label='sin'); ax.plot(x, y2, label='cos'); ax.legend()` |
| Gráfico de degraus | `ax.step(x, y, where='mid')` |
| Linhas empilhadas | `ax.stackplot(x, y1, y2, labels=['A','B'])` |
| Preenchimento entre linhas | `ax.fill_between(x, y1, y2, alpha=0.3)` |

### Gráfico de dispersão

| Descrição | Código |
|-------------|------|
| Dispersão básica | `ax.scatter(x, y)` |
| Dispersão com tamanhos | `ax.scatter(x, y, s=sizes, c=colors, alpha=0.6, cmap='viridis')` |
| Dispersão com cores categóricas | `ax.scatter(x, y, c=labels, cmap='Set1', edgecolors='black')` |
| Dispersão 3D | `ax.scatter3D(x, y, z, c=z, cmap='viridis')` |

### Gráficos de barras

| Descrição | Código |
|-------------|------|
| Barra vertical | `ax.bar(categories, values, width=0.8, color='steelblue')` |
| Barra horizontal | `ax.barh(categories, values, height=0.8)` |
| Barra agrupada | `ax.bar(x - width/2, y1, width, label='A'); ax.bar(x + width/2, y2, width, label='B')` |
| Barra empilhada | `ax.bar(x, y1, label='A'); ax.bar(x, y2, bottom=y1, label='B')` |
| Barras de erro | `ax.bar(x, y, yerr=errors, capsize=5)` |

### Histogramas

| Descrição | Código |
|-------------|------|
| Histograma básico | `ax.hist(data, bins=30, edgecolor='black')` |
| Múltiplos histogramas | `ax.hist([data1, data2], bins=30, label=['A','B'], alpha=0.6)` |
| Densidade (normalizado) | `ax.hist(data, bins=30, density=True, histtype='step')` |
| Cumulativo | `ax.hist(data, bins=30, cumulative=True, histtype='step')` |
| Histograma 2D | `ax.hist2d(x, y, bins=30, cmap='viridis')` |

### Gráficos de pizza

| Descrição | Código |
|-------------|------|
| Pizza básica | `ax.pie(sizes, labels=labels, autopct='%1.1f%%')` |
| Pizza com fatias destacadas | `ax.pie(sizes, labels=labels, explode=(0, 0.1, 0, 0), shadow=True)` |
| Gráfico de rosca | `ax.pie(sizes, labels=labels, wedgeprops=dict(width=0.3))` |
| Cores personalizadas | `ax.pie(sizes, labels=labels, colors=plt.cm.Set3(range(len(sizes))))` |

### Box plots

| Descrição | Código |
|-------------|------|
| Box plot básico | `ax.boxplot(data)` |
| Box plots agrupados | `ax.boxplot([data1, data2, data3], labels=['A','B','C'])` |
| Com entalhes | `ax.boxplot(data, notch=True, patch_artist=True)` |
| Violin plot | `ax.violinplot(data, showmeans=True, showmedians=True)` |

---

## Personalização {.row-span-2}

### Elementos da figura

| Descrição | Código |
|-------------|------|
| Título | `ax.set_title("Title", fontsize=14, fontweight='bold')` |
| Rótulos dos eixos | `ax.set_xlabel("X Label", fontsize=12); ax.set_ylabel("Y Label")` |
| Limites dos eixos | `ax.set_xlim(0, 10); ax.set_ylim(-1.5, 1.5)` |
| Grade | `ax.grid(True, linestyle='--', alpha=0.7)` |
| Legenda | `ax.legend(loc='best', frameon=True, fancybox=True, shadow=True)` |
| Legenda fora | `ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')` |

### Estilos de linha e marcador

| Descrição | Código |
|-------------|------|
| Estilos de linha | `'-'`, `'--'`, `'-.'`, `':'` |
| Marcadores | `'.'`, `'o'`, `'v'`, `'^'`, `'s'`, `'*'`, `'+'`, `'x'` |
| Especificação de cor | `'r'`, `'#FF5733'`, `(0.2, 0.4, 0.6)`, `'red'` |
| Largura da linha | `linewidth=2` ou `lw=2` |
| Tamanho do marcador | `markersize=6` ou `ms=6` |
| Transparência | `alpha=0.5` |

### Texto e anotações

| Descrição | Código |
|-------------|------|
| Adiciona texto | `ax.text(x, y, "Text", fontsize=10, ha='center', va='bottom')` |
| Anota com seta | `ax.annotate("Peak", xy=(7, 1), xytext=(6, 1.5), arrowprops=dict(arrowstyle='->', color='red'))` |
| Expressões matemáticas | `ax.text(5, 0.5, r'$E = mc^2$', fontsize=14)` |
| Fórmula no título | `ax.set_title(r'$\sin(x) + \cos(x)$')` |

### Ticks e escalas

| Descrição | Código |
|-------------|------|
| Ticks personalizados | `ax.set_xticks([0, 2, 4, 6, 8, 10])` |
| Rótulos de tick personalizados | `ax.set_xticklabels(['zero', 'two', 'four', 'six', 'eight', 'ten'])` |
| Rotaciona os ticks | `plt.xticks(rotation=45)` |
| Escala log | `ax.set_xscale('log'); ax.set_yscale('log')` |
| Symlog | `ax.set_xscale('symlog', linthresh=0.01)` |
| Eixos gêmeos | `ax2 = ax.twinx(); ax2.plot(x, y2, 'r-')` |

### Colormaps

| Descrição | Código |
|-------------|------|
| Sequencial | `'viridis'`, `'plasma'`, `'inferno'`, `'magma'`, `'cividis'` |
| Divergente | `'RdBu'`, `'RdBu_r'`, `'coolwarm'`, `'seismic'` |
| Qualitativa | `'Set1'`, `'Set2'`, `'Set3'`, `'tab10'`, `'tab20'` |
| Invertido | `'viridis_r'` |
| Usar colormap | `plt.cm.viridis(np.linspace(0, 1, 10))` |

### Stylesheets

| Descrição | Código |
|-------------|------|
| Padrão | `plt.style.use('default')` |
| Seaborn | `plt.style.use('seaborn-v0_8')` |
| FiveThirtyEight | `plt.style.use('fivethirtyeight')` |
| GGPlot | `plt.style.use('ggplot')` |
| Fundo escuro | `plt.style.use('dark_background')` |
| Publicação | `plt.style.use('bmh')` |
| Estilos disponíveis | `print(plt.style.available)` |

---

## Subplots e layouts {.row-span-2}

### Criar subplots

| Descrição | Código |
|-------------|------|
| Grade 2x2 | `fig, axes = plt.subplots(2, 2, figsize=(10, 8))` |
| Acessa o subplot | `axes[0, 0].plot(x, y)` |
| Achata o array de eixos | `axes_flat = axes.flatten()` |
| Compartilha o eixo x | `fig, axes = plt.subplots(2, 1, sharex=True)` |
| Compartilha o eixo y | `fig, axes = plt.subplots(2, 1, sharey=True)` |
| Adiciona subplot manualmente | `ax = fig.add_subplot(2, 2, 1)` |
| GridSpec | `gs = fig.add_gridspec(2, 2, width_ratios=[1, 2], height_ratios=[1, 2])` |
| Abrange várias células | `ax = fig.add_subplot(gs[0, :])` |

### Ajustes de layout

| Descrição | Código |
|-------------|------|
| Espaçamento automático | `plt.tight_layout(pad=1.5)` |
| Ajuste fino do espaçamento | `plt.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1, wspace=0.3, hspace=0.3)` |
| Layout restrito | `fig, axes = plt.subplots(constrained_layout=True)` |
| Barra de cores | `fig.colorbar(im, ax=axes, orientation='vertical', fraction=0.02, pad=0.02)` |

### Tamanho da figura e DPI

| Descrição | Código |
|-------------|------|
| Define o tamanho da figura | `fig = plt.figure(figsize=(8, 6))` |
| Define o DPI | `fig.set_dpi(150)` |
| Tamanho da figura em polegadas | `fig.set_size_inches(8, 6)` |
| Salva com DPI | `fig.savefig('fig.png', dpi=300, bbox_inches='tight')` |

---

## Visualizações avançadas {.cols-2}

### Imagem e heatmap

| Descrição | Código |
|-------------|------|
| Exibe uma imagem | `ax.imshow(image, cmap='gray', interpolation='bilinear')` |
| Heatmap | `im = ax.imshow(matrix, cmap='hot', aspect='auto')` |
| Barra de cores | `fig.colorbar(im, ax=ax, label='Intensity')` |
| Oculta os eixos | `ax.axis('off')` |
| Proporção | `ax.set_aspect('equal')` |

### Contorno e superfície

| Descrição | Código |
|-------------|------|
| Linhas de contorno | `contour = ax.contour(X, Y, Z, levels=20, cmap='viridis')` |
| Contorno preenchido | `ax.contourf(X, Y, Z, levels=20, cmap='viridis')` |
| Rótulos de contorno | `ax.clabel(contour, inline=True, fontsize=8)` |
| Superfície 3D | `ax.plot_surface(X, Y, Z, cmap='viridis', alpha=0.8)` |
| Wireframe 3D | `ax.plot_wireframe(X, Y, Z, color='black', alpha=0.3)` |

### Gráficos 3D

| Descrição | Código |
|-------------|------|
| Configura eixos 3D | `from mpl_toolkits.mplot3d import Axes3D; fig = plt.figure(); ax = fig.add_subplot(111, projection='3d')` |
| Linha 3D | `ax.plot3D(x, y, z)` |
| Dispersão 3D | `ax.scatter3D(x, y, z, c=z, cmap='viridis')` |
| Barra 3D | `ax.bar3d(x, y, z, dx, dy, dz)` |
| Define a visualização 3D | `ax.view_init(elev=30, azim=45)` |

### Gráficos especializados

| Descrição | Código |
|-------------|------|
| Barras de erro | `ax.errorbar(x, y, yerr=errors, xerr=x_errors, fmt='o', capsize=5)` |
| Stem plot | `ax.stem(x, y)` |
| Gráfico de eventos | `ax.eventplot(data, lineoffsets=1, linelengths=0.5)` |
| Stream plot | `ax.streamplot(X, Y, U, V, density=1.5)` |
| Quiver (campo vetorial) | `ax.quiver(x, y, u, v, scale=0.5)` |
| Gráfico polar | `ax = fig.add_subplot(111, projection='polar'); ax.plot(theta, r)` |

---

## Trabalhar com imagens

| Descrição | Código |
|-------------|------|
| Carrega uma imagem | `import matplotlib.image as mpimg; img = mpimg.imread('image.jpg')` |
| Exibe a imagem | `ax.imshow(img)` |
| Salva a imagem | `mpimg.imsave('output.jpg', img, dpi=300)` |
| Redimensiona com interpolação | `ax.imshow(img, interpolation='bicubic')` |
| Canais RGB | `red = img[:,:,0]; green = img[:,:,1]; blue = img[:,:,2]` |

---

## Para machine learning

### Curvas de treinamento

| Descrição | Código |
|-------------|------|
| Loss por épocas | `ax.plot(epochs, train_loss, label='Train'); ax.plot(epochs, val_loss, label='Validation')` |
| Agendamento da taxa de aprendizado | `ax.semilogy(epochs, learning_rates)` |
| Acurácia | `ax.plot(epochs, train_acc, 'b-', label='Train'); ax.plot(epochs, val_acc, 'r-', label='Val')` |
| Múltiplas métricas | `ax1 = ax.twinx(); ax1.plot(epochs, loss, 'r-')` |

### Matriz de confusão

| Descrição | Código |
|-------------|------|
| Matriz de confusão | `from sklearn.metrics import confusion_matrix; cm = confusion_matrix(y_true, y_pred)` |
| Heatmap | `im = ax.imshow(cm, cmap='Blues', interpolation='nearest')` |
| Anota os valores | `for i in range(cm.shape[0]): for j in range(cm.shape[1]): ax.text(j, i, cm[i, j], ha='center', va='center')` |
| Normalizada | `cm_norm = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]` |

### ROC e precision-recall

| Descrição | Código |
|-------------|------|
| Curva ROC | `from sklearn.metrics import roc_curve, auc; fpr, tpr, _ = roc_curve(y_true, y_scores); auc_val = auc(fpr, tpr)` |
| Gráfico ROC | `ax.plot(fpr, tpr, label=f'AUC = {auc_val:.2f}'); ax.plot([0,1], [0,1], 'k--')` |
| Precision-recall | `from sklearn.metrics import precision_recall_curve; precision, recall, _ = precision_recall_curve(y_true, y_scores)` |
| Gráfico PR | `ax.plot(recall, precision, label='PR Curve')` |

### Análise de features

| Descrição | Código |
|-------------|------|
| Importância das features | `ax.barh(feature_names, importances, color='steelblue')` |
| Matriz de correlação | `im = ax.imshow(corr_matrix, cmap='RdBu_r', vmin=-1, vmax=1)` |
| Dispersão par a par | `import seaborn as sns; sns.pairplot(df)` |
| Coordenadas paralelas | `from pandas.plotting import parallel_coordinates; parallel_coordinates(df, 'class')` |

---

## Animações

| Descrição | Código |
|-------------|------|
| Animação básica | `from matplotlib.animation import FuncAnimation; anim = FuncAnimation(fig, update, frames=100, interval=50)` |
| Salva a animação | `anim.save('animation.gif', writer='pillow', fps=20)` |
| Função de atualização | `def update(frame): ax.clear(); ax.plot(x[:frame], y[:frame]); return ax,` |
| Animação interativa | `plt.ion(); fig, ax = plt.subplots(); ax.plot(x, y); plt.pause(0.01); plt.ioff()` |

---

## Salvar e exportar

### Formatos de arquivo

| Descrição | Código |
|-------------|------|
| PNG (DPI alto) | `fig.savefig('figure.png', dpi=300, bbox_inches='tight')` |
| PDF (vetorial) | `fig.savefig('figure.pdf', bbox_inches='tight')` |
| SVG (vetorial) | `fig.savefig('figure.svg', bbox_inches='tight')` |
| EPS (vetorial) | `fig.savefig('figure.eps', bbox_inches='tight')` |
| Fundo transparente | `fig.savefig('figure.png', transparent=True)` |
| Com metadados | `fig.savefig('figure.pdf', metadata={'Author': 'Name', 'Title': 'Plot'})` |

### Qualidade de publicação

| Descrição | Código |
|-------------|------|
| Alta resolução para artigo | `plt.rcParams['figure.dpi'] = 300` |
| Fontes para publicação | `plt.rcParams['font.family'] = 'serif'; plt.rcParams['font.serif'] = ['Times New Roman']` |
| Múltiplas figuras | `fig.savefig('figure.pdf', bbox_inches='tight', pad_inches=0.05)` |
| Restrições de tamanho | `fig = plt.figure(figsize=(3.4, 2.4))` (coluna única) |

---

## Exibir e limpar

| Descrição | Código |
|-------------|------|
| Exibe o gráfico | `plt.show()` |
| Limpa a figura atual | `plt.clf()` |
| Limpa os eixos atuais | `plt.cla()` |
| Fecha todas as figuras | `plt.close('all')` |
| Fecha uma figura específica | `plt.close(fig)` |
| Suprime a exibição | `plt.ioff()` |

---

## Desempenho e memória

| Descrição | Código |
|-------------|------|
| Plotagem rápida (backend AGG) | `import matplotlib; matplotlib.use('Agg')` |
| Backend interativo | `import matplotlib; matplotlib.use('TkAgg')` |
| Reduz a memória | `ax.plot(x[::10], y[::10])` (reduzir amostragem) |
| Dispersão eficiente | `ax.scatter(x, y, s=1)` (marcadores pequenos) |
| Desativa o antialiasing | `ax.plot(x, y, antialiased=False)` |
| Plotagem em lote | `fig, axes = plt.subplots(2, 2); for ax in axes.flat: ax.plot(x, y)` |

---

## Armadilhas comuns e boas práticas

| Armadilha | Solução |
|---------|----------|
| Misturar pyplot e OOP | Mantenha uma única interface; prefira OOP em produção |
| Legendas sobrepostas | Coloque a legenda fora: `ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')` |
| Fontes pequenas em publicação | Defina `plt.rcParams['font.size'] = 12` globalmente |
| Renderização lenta | Reduza a amostragem dos dados ou use o backend `agg` |
| Figuras cortadas | Use `bbox_inches='tight'` no savefig |
| Vazamentos de memória em loops | Use `plt.clf()` ou `plt.close()` após cada iteração |
| Colormaps inconsistentes | Use o mesmo colormap para visualizações comparáveis |
| Rótulos de eixo ausentes | Sempre rotule para permitir reprodutibilidade |
| Sobreposição em gráfico 3D | Ajuste a visualização com `ax.view_init()` |

---
