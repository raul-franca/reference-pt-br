module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // novo recurso
        'fix', // correção de bug
        'docs', // atualização de documentação
        'style', // formatação de código, sem mudanças de lógica
        'refactor', // refatoração de código
        'perf', // otimização de desempenho
        'test', // adiciona testes
        'chore', // mudanças no processo de build ou ferramentas auxiliares
        'ci', // mudanças relacionadas a CI/CD
        'build', // mudanças no sistema de build ou dependências externas
        'revert' // reverte commit
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'search', // funcionalidade de busca
        'theme', // relacionado ao tema
        'css', // arquivos de estilo
        'js', // arquivos JavaScript
        'content', // arquivos de conteúdo
        'build', // relacionado ao build
        'deps', // atualizações de dependências
        'config', // arquivos de configuração
        'docs', // documentação
        'layout', // templates de layout
        'widget', // componentes
        'gulp', // tarefas do Gulp
        'hexo', // relacionado ao Hexo
        'markdown', // processamento de Markdown
        'seo', // otimização de SEO
        'a11y', // acessibilidade
        'perf' // relacionado a desempenho
      ]
    ],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  }
};
