const fs = require('fs');
const path = require('path');

// Gera descrições de página mais detalhadas
hexo.extend.helper.register('enhanced_page_description', function () {
  let description = '';

  if (this.is_home()) {
    description = `${this.config.description} - Quick reference guides for developers, programmers, and system administrators. Find cheat sheets for popular programming languages, tools, and technologies.`;
  } else if (this.page && this.page.intro && this.page.intro.trim()) {
    description = this.strip_html(this.markdown(this.page.intro)).substring(0, 155);
  } else if (this.is_post()) {
    const categoryNames = [];
    if (this.page.categories && this.page.categories.each) {
      this.page.categories.each(function (cat) {
        categoryNames.push(cat.name);
      });
    }

    const categoryText = categoryNames.length > 0 ? `${categoryNames[0]} ` : '';
    description = `${this.page.title} cheat sheet and quick reference guide. Essential ${categoryText}shortcuts, commands, and tips for developers and system administrators.`;
  } else if (this.page && this.page.content) {
    description = this.strip_html(this.page.content).substring(0, 155);
  } else {
    description = this.config.description || '';
  }

  // Limpa o texto da descrição
  description = description.replace(/[\r\n\s\s+]+/g, ' ').trim();

  // Garante que a descrição termine com ponto final
  if (
    description &&
    !description.endsWith('.') &&
    !description.endsWith('!') &&
    !description.endsWith('?')
  ) {
    description += '.';
  }

  return description;
});

// Gera a estimativa de tempo de leitura do artigo
hexo.extend.helper.register('reading_time', function (content) {
  if (!content) return '2 min de leitura';

  const wordsPerMinute = 200;
  const textContent = this.strip_html(content);
  const wordCount = textContent.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTime} min de leitura`;
});

// Gera palavras-chave relacionadas
hexo.extend.helper.register('related_keywords', function () {
  let keywords = [];

  if (this.is_post()) {
    // Palavras-chave básicas
    keywords.push('cheat sheet', 'quick reference', 'guide', 'tutorial');

    // Adiciona palavras-chave do título da página
    if (this.page.title) {
      keywords.push(this.page.title.toLowerCase());
      keywords.push(`${this.page.title.toLowerCase()} guide`);
      keywords.push(`${this.page.title.toLowerCase()} commands`);
    }

    // Adiciona palavras-chave da categoria
    if (this.page.categories && this.page.categories.each) {
      this.page.categories.each(function (cat) {
        keywords.push(cat.name.toLowerCase());
      });
    }

    // Adiciona palavras-chave da tag
    if (this.page.tags && this.page.tags.each) {
      this.page.tags.each(function (tag) {
        keywords.push(tag.name.toLowerCase());
      });
    }
  }

  return [...new Set(keywords)].join(', ');
});

// Gera o tipo de página
hexo.extend.helper.register('page_type', function () {
  if (this.is_home()) return 'homepage';
  if (this.is_post()) return 'cheatsheet';
  if (this.is_page()) return 'page';
  return 'other';
});

// Gera a contagem estimada de palavras
hexo.extend.helper.register('word_count', function (content) {
  if (!content) return 0;
  const textContent = this.strip_html(content);
  return textContent.split(/\s+/).length;
});

// Verifica se há um índice
hexo.extend.helper.register('has_toc', function (content) {
  if (!content) return false;

  // Verifica se há elementos de título
  const headingRegex = /<h[1-6][^>]*>/gi;
  const headings = content.match(headingRegex);

  return headings && headings.length >= 3;
});

// Gera os dados da breadcrumb
hexo.extend.helper.register('breadcrumb_data', function () {
  const breadcrumbs = [];

  // Link da página inicial
  breadcrumbs.push({
    name: 'Home',
    url: this.config.url,
    position: 1
  });

  if (this.is_post()) {
    // Link da categoria
    if (this.page.categories && this.page.categories.length > 0) {
      const mainCategory = this.page.categories.toArray()[0];
      breadcrumbs.push({
        name: mainCategory.name,
        url: `${this.config.url}/#${mainCategory.name.toLowerCase().replace(/\s+/g, '-')}`,
        position: 2
      });

      // Página atual
      breadcrumbs.push({
        name: `${this.page.title} Cheat Sheet`,
        url: this.clean_url(this.url),
        position: 3
      });
    } else {
      // Página atual
      breadcrumbs.push({
        name: `${this.page.title} Cheat Sheet`,
        url: this.clean_url(this.url),
        position: 2
      });
    }
  } else if (this.is_page()) {
    // Página atual
    breadcrumbs.push({
      name: this.page.title,
      url: this.clean_url(this.url),
      position: 2
    });
  }

  return breadcrumbs;
});

// Gera metainformações específicas de artigos técnicos
hexo.extend.helper.register('tech_article_meta', function () {
  if (!this.is_post()) return {};

  const meta = {
    difficulty: 'Do básico ao avançado',
    audience: 'Desenvolvedores, programadores e administradores de sistemas',
    type: 'Guia de referência rápida',
    format: 'Cheat sheet'
  };

  // Adjust difficulty based on category
  if (this.page.categories && this.page.categories.each) {
    this.page.categories.each(function (cat) {
      if (cat.name.includes('Linux') || cat.name.includes('Command')) {
        meta.difficulty = 'Do intermediário ao avançado';
        meta.audience = 'Administradores de sistemas, engenheiros DevOps e desenvolvedores';
      } else if (cat.name.includes('Programação')) {
        meta.audience = 'Desenvolvedores, engenheiros de software e programadores';
      }
    });
  }

  return meta;
});
