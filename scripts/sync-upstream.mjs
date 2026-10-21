#!/usr/bin/env node
/**
 * Compara este site com o repositório original (Fechin/reference) e gera uma
 * lista de pendências de tradução em `.sync/report.md`.
 *
 * Uso:
 *   node scripts/sync-upstream.mjs             # busca o upstream e gera o relatório
 *   node scripts/sync-upstream.mjs --merge     # cria branch e inicia o merge do upstream
 *   node scripts/sync-upstream.mjs --json      # saída legível por máquina
 *   node scripts/sync-upstream.mjs --clean     # remove `.sync/`
 *
 * O relatório nunca altera o conteúdo do site: apenas lê o upstream e escreve
 * os artefatos em `.sync/` (ignorado pelo git).
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const ROOT = execFileSync('git', ['rev-parse', '--show-toplevel'], {
  encoding: 'utf8'
}).trim();
const OUT_DIR = join(ROOT, '.sync');
const UPSTREAM_DIR = join(OUT_DIR, 'upstream');
const DIFF_DIR = join(OUT_DIR, 'diffs');

const GROUPS = [
  { id: 'posts', title: 'Posts', match: (path) => path.startsWith('source/_posts/') },
  { id: 'widgets', title: 'Widgets', match: (path) => path.startsWith('source/widget/') },
  { id: 'theme', title: 'Tema', match: (path) => path.startsWith('themes/coo/') },
  {
    id: 'assets',
    title: 'Assets (imagens, ícones)',
    match: (path) => path.startsWith('source/assets/')
  },
  {
    id: 'config',
    title: 'Configuração e build',
    match: (path) => !path.includes('/')
  },
  { id: 'other', title: 'Outros', match: () => true }
];

const STATUS_LABEL = {
  A: 'novo',
  M: 'alterado',
  D: 'removido',
  R: 'renomeado',
  C: 'copiado',
  T: 'tipo alterado'
};

// Categorias já traduzidas (mapa de TRADUCAO.md).
const PT_CATEGORIES = new Set([
  'Programação',
  'Atalhos de Teclado',
  'Comandos Linux',
  'Outros',
  'Ferramentas',
  'IA',
  'Banco de Dados',
  'Sistema Operacional',
  'Jogos',
  'Testes',
  'Produtividade',
  'Software',
  'Python'
]);

function fail(message) {
  console.error(`\n  ✖ ${message}\n`);
  process.exit(2);
}

function git(args, { allowFailure = false } = {}) {
  try {
    return execFileSync('git', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      maxBuffer: 128 * 1024 * 1024
    }).trimEnd();
  } catch (error) {
    if (allowFailure) return null;
    const stderr = error.stderr ? error.stderr.toString().trim() : '';
    fail(`git ${args.join(' ')} falhou${stderr ? `: ${stderr}` : ''}`);
  }
}

function parseArgs(argv) {
  const options = {
    remote: 'upstream',
    ref: null,
    fetch: true,
    merge: false,
    json: false,
    clean: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    switch (arg) {
      case '--remote':
        options.remote = argv[(i += 1)];
        break;
      case '--ref':
        options.ref = argv[(i += 1)];
        break;
      case '--no-fetch':
        options.fetch = false;
        break;
      case '--merge':
        options.merge = true;
        break;
      case '--json':
        options.json = true;
        break;
      case '--clean':
        options.clean = true;
        break;
      case '-h':
      case '--help':
        printHelp();
        process.exit(0);
        break;
      default:
        fail(`Opção desconhecida: ${arg}. Use --help para ver as opções.`);
    }
  }

  return options;
}

function printHelp() {
  console.log(`
Sincroniza o conteúdo com o repositório original.

  node scripts/sync-upstream.mjs            gera .sync/report.md com as pendências
  node scripts/sync-upstream.mjs --merge    cria a branch sync/upstream-<data> e inicia o merge
  node scripts/sync-upstream.mjs --json     imprime o resultado em JSON
  node scripts/sync-upstream.mjs --clean    remove a pasta .sync/

Opções:
  --remote <nome>   remote do upstream (padrão: upstream)
  --ref <ref>       referência remota (padrão: <remote>/main)
  --no-fetch        não executa git fetch (usa o último fetch local)
`);
}

function parseNameStatus(output) {
  return output
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [code, first, second] = line.split('\t');
      const status = code[0];
      if (status === 'R' || status === 'C') {
        return { status, from: first, to: second };
      }
      return { status, path: first };
    });
}

function countHunks(diff) {
  const matches = diff.match(/^@@/gm);
  return matches ? matches.length : 0;
}

function diffFileName(path) {
  return `${path.replace(/[/\\]/g, '__')}.diff`;
}

function copyUpstreamFile(ref, path) {
  const content = git(['show', `${ref}:${path}`]);
  const target = join(UPSTREAM_DIR, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, `${content}\n`);
}

function upstreamCategories(ref, path) {
  const content = git(['show', `${ref}:${path}`], { allowFailure: true });
  if (content === null) return [];

  const lines = content.split('\n');
  const start = lines.findIndex((line) => /^categories:/.test(line));
  if (start === -1) return [];

  const categories = [];
  for (const line of lines.slice(start + 1)) {
    const item = line.match(/^\s*-\s*(.+)$/);
    if (!item) break;
    categories.push(item[1].trim());
  }
  return categories;
}

function classify(path) {
  return GROUPS.find((group) => group.match(path)) ?? GROUPS[GROUPS.length - 1];
}

function buildReport(data) {
  const { ref, commitCount, aheadCount, commits, changes, fetched } = data;
  const lines = [];

  lines.push('# Pendências de sincronização com o upstream');
  lines.push('');
  lines.push(`Gerado em ${new Date().toLocaleString('pt-BR')}.`);
  lines.push('');
  lines.push(`- **Upstream:** \`${ref}\` em \`${data.refSha.slice(0, 7)}\``);
  lines.push(`- **Base comum:** \`${data.baseSha.slice(0, 7)}\``);
  lines.push(`- **Commits novos no upstream:** ${commitCount}`);
  lines.push(`- **Commits locais à frente da base:** ${aheadCount}`);
  lines.push(`- **Fetch:** ${fetched ? 'ok' : 'não executado (usando referência local)'}`);
  lines.push('');

  if (commitCount === 0) {
    lines.push('Nenhuma mudança no upstream desde a última sincronização. 🎉');
    lines.push('');
    return lines.join('\n');
  }

  lines.push('## Commits novos');
  lines.push('');
  for (const commit of commits) {
    lines.push(`- \`${commit.hash}\` ${commit.date} — ${commit.subject}`);
  }
  lines.push('');

  const grouped = new Map(GROUPS.map((group) => [group.id, []]));
  for (const change of changes) {
    grouped.get(classify(change.path).id).push(change);
  }

  lines.push('## Pendências');
  lines.push('');

  for (const group of GROUPS) {
    const items = grouped.get(group.id);
    if (!items || items.length === 0) continue;

    lines.push(`### ${group.title} (${items.length})`);
    lines.push('');

    for (const item of items) {
      const label = STATUS_LABEL[item.status] ?? item.status;
      const details = [];

      if (item.status === 'A') {
        if (group.id === 'posts' || group.id === 'widgets') {
          details.push(`original em \`.sync/upstream/${item.path}\``);
        }
        if (group.id === 'posts') {
          const categories = upstreamCategories(ref, item.path);
          const pending = categories.filter((category) => !PT_CATEGORIES.has(category));
          if (pending.length > 0) {
            details.push(`traduzir categorias: ${pending.map((c) => `\`${c}\``).join(', ')}`);
          }
        }
      }

      if (item.status === 'M' || item.status === 'R' || item.status === 'C') {
        details.push(`diff em \`.sync/diffs/${diffFileName(item.path)}\``);
      }

      if (item.status === 'D') {
        details.push('apagar também a versão traduzida, se existir');
      }

      if (item.status === 'R' && item.from) {
        details.push(`antes: \`${item.from}\``);
      }

      const suffix = details.length > 0 ? ` — ${details.join('; ')}` : '';
      lines.push(`- [ ] \`${item.path}\` — **${label}**${suffix}`);
    }

    lines.push('');
  }

  lines.push('## Como resolver');
  lines.push('');
  lines.push('1. Leia os diffs em `.sync/diffs/` e os originais novos em `.sync/upstream/`.');
  lines.push(
    '2. Traduza ou adapte o conteúdo seguindo `TRADUCAO.md` (sem tocar em código, comandos e paths).'
  );
  lines.push('3. Rode `pnpm dev` e confira as páginas alteradas em http://127.0.0.1:4000.');
  lines.push('4. Rode `pnpm test` e commite com mensagem no padrão Conventional Commits.');
  lines.push('');
  lines.push(
    'Se preferir trabalhar via merge do upstream, use `pnpm sync:upstream:merge`: ele cria uma branch e deixa o'
  );
  lines.push('merge em aberto para você resolver os conflitos.');
  lines.push('');

  return lines.join('\n');
}

function printSummary(data) {
  const { commitCount, changes } = data;

  if (commitCount === 0) {
    console.log('\n✔ Em dia com o upstream. Nenhuma pendência de tradução.\n');
    return;
  }

  const counters = new Map();
  for (const change of changes) {
    const group = classify(change.path);
    const stats = counters.get(group.title) ?? { A: 0, M: 0, D: 0, other: 0 };
    if (change.status === 'A') stats.A += 1;
    else if (change.status === 'M') stats.M += 1;
    else if (change.status === 'D') stats.D += 1;
    else stats.other += 1;
    counters.set(group.title, stats);
  }

  console.log(`\n↑ ${commitCount} commit(s) novo(s) no upstream.\n`);
  for (const [title, stats] of counters) {
    const parts = [];
    if (stats.A) parts.push(`${stats.A} novo(s)`);
    if (stats.M) parts.push(`${stats.M} alterado(s)`);
    if (stats.D) parts.push(`${stats.D} removido(s)`);
    if (stats.other) parts.push(`${stats.other} renomeado(s)/copiado(s)`);
    console.log(`  ${title}: ${parts.join(', ')}`);
  }
  console.log(`\nRelatório completo: ${relative(ROOT, join(OUT_DIR, 'report.md'))}`);
  console.log('Diffs por arquivo: .sync/diffs/');
  console.log('Originais novos:   .sync/upstream/\n');
}

function mergeUpstream(ref, data) {
  const dirty = git(['status', '--porcelain']);
  if (dirty) {
    fail('Há alterações não commitadas. Commite ou guarde antes de iniciar o merge.');
  }

  const branch = `sync/upstream-${new Date().toISOString().slice(0, 10)}`;
  if (git(['rev-parse', '--verify', '--quiet', `refs/heads/${branch}`], { allowFailure: true })) {
    fail(`A branch ${branch} já existe. Remova-a ou continue o trabalho nela.`);
  }

  console.log(`\nCriando ${branch} a partir de ${git(['rev-parse', '--abbrev-ref', 'HEAD'])}...`);
  git(['switch', '--create', branch]);

  console.log(`Fazendo merge de ${ref} (${data.commitCount} commit(s))...`);
  git(['merge', '--no-ff', '--no-commit', ref], { allowFailure: true });

  const conflicts = (git(['diff', '--name-only', '--diff-filter=U'], { allowFailure: true }) ?? '')
    .split('\n')
    .filter(Boolean);

  if (conflicts.length === 0) {
    console.log('\n✔ Merge concluído sem conflitos, ainda sem commit.');
    console.log(
      '  Revise os arquivos e rode: git commit -m "chore(sync): atualiza com o upstream"\n'
    );
    return;
  }

  console.log(`\n⚠ ${conflicts.length} arquivo(s) com conflito:\n`);
  for (const file of conflicts) {
    console.log(`  - ${file}`);
  }
  console.log('\nResolva os conflitos mantendo a tradução, depois:');
  console.log('  git add <arquivos> && git commit -m "chore(sync): atualiza com o upstream"');
  console.log('Para desistir: git merge --abort && git switch -\n');
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.clean) {
    rmSync(OUT_DIR, { recursive: true, force: true });
    console.log('Pasta .sync/ removida.');
    return;
  }

  if (!git(['remote', 'get-url', options.remote], { allowFailure: true })) {
    fail(
      `Remote "${options.remote}" não configurado. Adicione com:\n` +
        '  git remote add upstream https://github.com/Fechin/reference.git'
    );
  }

  const ref = options.ref ?? `${options.remote}/main`;

  if (options.fetch) {
    try {
      git(['fetch', options.remote, '--prune']);
    } catch {
      console.warn(
        `⚠ Não foi possível buscar o remote "${options.remote}". Usando a referência local.`
      );
    }
  }

  const refSha = git(['rev-parse', '--verify', `${ref}^{commit}`], { allowFailure: true });
  if (!refSha) {
    fail(`Referência "${ref}" não encontrada. Rode git fetch ${options.remote} primeiro.`);
  }

  const baseSha = git(['merge-base', 'HEAD', ref], { allowFailure: true });
  if (!baseSha) {
    fail(`Sem ancestral comum entre HEAD e ${ref}. O histórico do fork foi reescrito?`);
  }

  const commitCount = Number(git(['rev-list', '--count', `${baseSha}..${ref}`]));
  const aheadCount = Number(git(['rev-list', '--count', `${baseSha}..HEAD`]));

  const commits =
    commitCount === 0
      ? []
      : git(['log', '--reverse', '--date=short', '--format=%h\t%ad\t%s', `${baseSha}..${ref}`])
          .split('\n')
          .filter(Boolean)
          .map((line) => {
            const [hash, date, ...subject] = line.split('\t');
            return { hash, date, subject: subject.join('\t') };
          });

  const changes =
    commitCount === 0
      ? []
      : parseNameStatus(git(['diff', '--name-status', '-M', `${baseSha}..${ref}`])).map(
          (change) => ({
            ...change,
            path: change.to ?? change.path
          })
        );

  rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(DIFF_DIR, { recursive: true });
  mkdirSync(UPSTREAM_DIR, { recursive: true });

  for (const change of changes) {
    if (change.status === 'D') continue;
    const group = classify(change.path);
    const isText = group.id !== 'assets';

    if (change.status === 'A' && isText) {
      copyUpstreamFile(ref, change.path);
    }

    if (isText && change.status !== 'A') {
      const diff = git(['diff', `${baseSha}..${ref}`, '--', change.path]);
      if (diff) {
        writeFileSync(join(DIFF_DIR, diffFileName(change.path)), `${diff}\n`);
      }
      change.hunks = countHunks(diff);
    }
  }

  const data = {
    generatedAt: new Date().toISOString(),
    remote: options.remote,
    ref,
    refSha,
    baseSha,
    commitCount,
    aheadCount,
    fetched: options.fetch,
    commits,
    changes
  };

  writeFileSync(join(OUT_DIR, 'report.md'), buildReport(data));

  if (options.merge) {
    if (commitCount === 0) {
      console.log('\n✔ Nada para mesclar: já está em dia com o upstream.\n');
      return;
    }
    mergeUpstream(ref, data);
    return;
  }

  if (options.json) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  printSummary(data);
}

main();
