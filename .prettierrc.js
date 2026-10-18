module.exports = {
  // Configuração básica
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',

  // Configuração de plugins
  plugins: ['prettier-plugin-tailwindcss'],

  // Configuração específica por arquivo
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
        printWidth: 80
      }
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false
      }
    },
    {
      files: '*.json',
      options: {
        trailingComma: 'none'
      }
    },
    {
      files: ['themes/coo/source/css/*.css'],
      options: {
        printWidth: 120
      }
    }
  ]
};
