# AGENTS.md

Site estático em **Hexo 7.3** (tema próprio `themes/coo`, EJS) com cheat sheets para desenvolvedores.
Este repositório é a versão **pt-BR** de `Fechin/reference`; o conteúdo é traduzido, mas identificadores,
comandos e termos técnicos permanecem em inglês.

## Antes de editar conteúdo

Leia **`TRADUCAO.md`**. Ele define o que traduzir, o que nunca traduzir (código, flags, paths, URLs, front matter),
o glossário e o mapa de categorias. Alterações de texto devem seguir esse guia.

## Comandos

O Dockerfile usa `node:19`; não há `.nvmrc` nem `engines` no `package.json`. Use **pnpm** — `pnpm-lock.yaml` é o
lockfile versionado; as instruções com `npm` no README estão desatualizadas.

```bash
pnpm install
pnpm dev          # hexo clean + server em :4000 + watch do Tailwind (paralelo)
pnpm build        # clean -> remove db.json -> compila CSS -> hexo generate -> gulp (minifica)
pnpm test         # eslint --check + prettier --check (não há testes unitários)
pnpm format       # prettier --write .
pnpm lint         # eslint --fix
pnpm lint:css     # stylelint --fix
```

Verificação focada em um arquivo:

```bash
pnpm exec eslint caminho/arquivo.js
pnpm exec prettier --check caminho/arquivo.md
pnpm exec stylelint caminho/arquivo.css
```

Nunca commite artefatos gerados: `public/`, `db.json` e `themes/coo/source/css/style.css` são ignorados pelo git.
O CSS é gerado a partir de `themes/coo/source/css/style.tailwindcss` (que importa `components/*.css`); edite o fonte,
não o `style.css`.

Não há CI no repositório; a validação é local (`pnpm test` + `pnpm build`).

## Estrutura e pontos não óbvios

- `source/_posts/<slug>.md` vira `/<slug>.html` (`permalink: :name.html`). O nome do arquivo é o slug.
- O ícone do post é `source/assets/icon/<slug>.svg`; se não existir, o helper `icon()` usa um SVG padrão.
- `source/widget/*.html` são páginas HTML independentes, embutidas em posts com `<widget name="arquivo"/>`
  (plugin em `themes/coo/scripts/markdown_plugin.js`).
- A home só lista posts cujo `categories` bata **exatamente** com `index_categories` em
  `themes/coo/_config.yml`. As categorias estão em pt-BR (`Programação`, `Atalhos de Teclado`, `Comandos Linux`…).
- `themes/coo/scripts/seo.js` procura a categoria `Comandos Linux`; `seo-enhanced.js` procura `Programação`.
  Renomear categorias exige atualizar esses helpers.
- `source/ga_analytics_tops.json` é uma lista **manual** de “top posts” lida pelo helper `topPosts`; não é gerada.
- `source/_posts/windows-shortcuts.md` não tem front matter (exceção herdada do upstream).
- `themes/coo/scripts/*.js` são plugins do Hexo: geram `search.json`, `list.md`, paginação de notes, helpers de
  ícone/SEO/doação. `themes/coo/source/js/main.js` é o JS do navegador (busca, TOC, compartilhamento).
- Textos de UI ficam em `themes/coo/languages/default.yml`. Não existe `pt-BR.yml`; o tema usa `default.yml`.
- `intro` do front matter alimenta busca, excerpt e meta description — mantenha curto.
- `plugins` no front matter habilita recursos do post: `copyCode`, `runCode`, `tooltip` e `katex`.
- O `deploy` em `_config.yml` referencia plugins `cjh_*` que **não** estão nas dependências. Para publicar, use o
  `public/` gerado (o Dockerfile monta uma imagem nginx com ele).

## Edição de conteúdo

- Preserve blocos de código, código inline, comandos, flags, URLs, paths, chaves de front matter e tags HTML/EJS.
- Mantenha termos consagrados em inglês (`container`, `path`, `root`, `commit`, `deploy`, `query`, `cache`, `prompt`…).
- “Cheat sheet” permanece “cheat sheet”.
- Use categorias apenas do mapa em `TRADUCAO.md`.
- Comentários dentro de blocos de código são intencionalmente preservados como estão.

## Commits

Husky roda `lint-staged` no pre-commit (eslint/stylelint/prettier) e `commitlint` no commit-msg.
Formato Conventional Commits; tipos e escopos válidos estão em `.commitlintrc.js` (ex.: `content`, `theme`, `css`,
`js`, `config`, `layout`, `docs`, `seo`). Assunto em minúsculas e sem ponto final.

```bash
git commit -m "docs(content): corrige exemplos de docker"
```

Use `--no-verify` apenas se as dependências/Node não estiverem disponíveis.

## Remotes

- `origin` → `github.com/raul-franca/reference-pt-br` (repo da tradução)
- `upstream` → `github.com/Fechin/reference` (projeto original)
