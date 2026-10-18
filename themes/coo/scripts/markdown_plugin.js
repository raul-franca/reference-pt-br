const fs = require('fs');
const path = require('path');
const hljs = require('highlight.js');

// Função auxiliar para carregar com segurança plugins que podem ser módulos ES
function safeRequire(moduleName) {
  const plugin = require(moduleName);
  let result = plugin.default || plugin;

  // Tratamento especial para o markdown-it-emoji v3.0.0+, que exporta um objeto com várias funções
  if (moduleName === 'markdown-it-emoji' && typeof result === 'object' && result.full) {
    result = result.full; // Usa o plugin completo de emoji
  }

  // Tratamento especial para outros módulos ES com export default
  if (typeof result === 'object' && result.default && typeof result.default === 'function') {
    result = result.default;
  }

  return result;
}

// Cria uma instância personalizada do highlight.js que lida com linguagens desconhecidas sem erros
const customHljs = {
  highlight: function (code, options) {
    const language = options && options.language ? options.language : '';

    // Se nenhuma linguagem for especificada, tenta a detecção automática
    if (!language) {
      try {
        return hljs.highlightAuto(code);
      } catch {
        return {
          value: hljs.util.escapeHTML(code),
          language: 'plaintext',
          relevance: 0
        };
      }
    }

    // Verifica se a linguagem é suportada
    if (hljs.getLanguage(language)) {
      try {
        return hljs.highlight(code, {
          language: language,
          ignoreIllegals: true
        });
      } catch {
        // Se o highlight falhar, usa texto simples sem aviso
        return {
          value: hljs.util.escapeHTML(code),
          language: 'plaintext',
          relevance: 0
        };
      }
    } else {
      // Linguagem não suportada: tenta a detecção automática ou usa texto simples
      try {
        const autoResult = hljs.highlightAuto(code);
        // Só usa a detecção automática se a confiança for razoável
        if (autoResult.relevance > 3) {
          return autoResult;
        }
      } catch {
        // A detecção automática falhou; ignora
      }

      // Usa texto simples sem aviso
      return {
        value: hljs.util.escapeHTML(code),
        language: 'plaintext',
        relevance: 0
      };
    }
  },

  // Expõe outros métodos do hljs que podem ser necessários
  getLanguage: hljs.getLanguage.bind(hljs),
  listLanguages: hljs.listLanguages.bind(hljs),
  util: hljs.util
};

hexo.extend.filter.register('markdown-it:renderer', (md) => {
  md.use(safeRequire('markdown-it-abbr'), {});
  md.use(safeRequire('markdown-it-footnote'), {});
  md.use(safeRequire('markdown-it-ins'), {});
  md.use(safeRequire('markdown-it-sub'), {});
  md.use(safeRequire('markdown-it-sup'), {});
  md.use(safeRequire('markdown-it-task-lists'), {});
  md.use(safeRequire('markdown-it-emoji'), {});
  md.use(safeRequire('markdown-it-attrs'), {});
  md.use(safeRequire('markdown-it-highlightjs'), {
    hljs: customHljs,
    auto: true,
    code: true,
    ignoreIllegals: true
  });
  md.use(safeRequire('markdown-it-checkbox'), {});
  md.use(safeRequire('markdown-it-shortcode-tag'), {
    widget: {
      render(attrs) {
        const widgetPath = path.resolve(`./source/widget/${attrs.name}.html`);
        if (fs.existsSync(widgetPath)) {
          return fs.readFileSync(widgetPath, 'utf8').trim();
        } else {
          const error = `Error: ${attrs.name} widget not Found!`;
          console.log(error);
          return error;
        }
      }
    }
  });

  headerSections(md, {
    h2: {
      wrapperClass: 'h2-wrap',
      innerClass: 'h3-wrap-list'
    },
    h3: {
      wrapperClass: 'h3-wrap',
      innerClass: 'section'
    },
    tagName: 'div'
  });
});

function headerSections(md, options) {
  const opts = Object.assign({}, options);

  // Verifica se a regra já foi adicionada para evitar duplicatas
  // Isso é essencial no hexo-renderer-markdown-it v6.0.0+, em que a instância md é reutilizada
  if (md.core.ruler.__rules__.some((rule) => rule.name === 'header_sections')) {
    return;
  }

  function addSections(state) {
    const tokens = []; // saída
    const Token = state.Token;
    const sections = [];
    let nestedLevel = 0;

    function openTag(token, parser, classOptName) {
      const t = new Token(parser, opts.tagName, 1);
      t.block = true;
      const cls = token && opts[token.tag] && opts[token.tag][classOptName];
      t.attrs = appendClass(token.attrs, cls);
      return t;
    }

    function closeTag(parser) {
      const t = new Token(parser, opts.tagName, -1);
      t.block = true;
      return t;
    }

    function closeSections(section) {
      while (last(sections) && section.header <= last(sections).header) {
        sections.pop();
        tokens.push(closeTag('section_inner_close'));
        tokens.push(closeTag('section_wrapper_close'));
      }
    }

    function closeSectionsToCurrentNesting(nesting) {
      while (last(sections) && nesting < last(sections).nesting) {
        sections.pop();
        tokens.push(closeTag('section_inner_close'));
        tokens.push(closeTag('section_wrapper_close'));
      }
    }

    function closeAllSections() {
      while (sections.pop()) {
        tokens.push(closeTag('section_inner_close'));
        tokens.push(closeTag('section_wrapper_close'));
      }
    }

    for (let i = 0, l = state.tokens.length; i < l; i++) {
      const token = state.tokens[i];

      // registra o nível de aninhamento
      if (token.type.search('heading') !== 0) {
        nestedLevel += token.nesting;
      }
      if (last(sections) && nestedLevel < last(sections).nesting) {
        closeSectionsToCurrentNesting(nestedLevel);
      }

      // adiciona seções antes dos headers
      const expect = Object.prototype.hasOwnProperty.call(opts, token.tag);
      if (token.type === 'heading_open') {
        const section = {
          header: headingLevel(token.tag),
          nesting: nestedLevel
        };
        if (last(sections) && section.header <= last(sections).header && expect) {
          closeSections(section);
        }
        if (expect) {
          tokens.push(openTag(token, 'section_wrapper_open', 'wrapperClass'));
          if (token.attrIndex('id') !== -1) {
            // remove o ID do token
            token.attrs.splice(token.attrIndex('id'), 1);
          }
          sections.push(section);

          // O atributo foi colocado em section_open,
          // limpa o atributo da tag do header
          token.attrs = [];
        }

        tokens.push(token);
      } else if (token.type === 'heading_close') {
        // adiciona a seção interna depois dos headers
        tokens.push(token);
        if (expect) {
          tokens.push(openTag(token, 'section_inner_open', 'innerClass'));
        }
      } else {
        tokens.push(token);
      }
    } // fim do laço de cada token
    closeAllSections();

    state.tokens = tokens;
  }

  function appendClass(attrs, cls) {
    if (cls === null) {
      return attrs;
    }
    if (attrs === null) {
      attrs = [];
    }
    let appended = false;
    attrs.forEach((x) => {
      if (x[0] === 'class') {
        x[1] = `${cls} ${x[1]}`;
        appended = true;
      }
    });
    if (!appended) {
      attrs.push(['class', cls.trim()]);
    }
    return attrs;
  }

  function headingLevel(header) {
    return parseInt(header.charAt(1));
  }

  function last(arr) {
    return arr.slice(-1)[0];
  }

  md.core.ruler.push('header_sections', addSections);
}
