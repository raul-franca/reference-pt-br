module.exports = {
  // Arquivos JavaScript
  '*.{js,mjs}': ['eslint --fix', 'prettier --write'],

  // Arquivos CSS
  '*.css': ['stylelint --fix', 'prettier --write'],

  // Todos os outros arquivos compatíveis com o Prettier
  '*.{md,json,yml,yaml}': ['prettier --write']
};
