Prism.languages.assertive = {
  'comment': [
    {
      pattern: /\/\*[\s\S]*?\*\//,
      greedy: true,
      inside: {
        'punctuation': {
          pattern: /^\/\*|\*\/$/,
          alias: 'comment'
        }
      }
    },
    {
      pattern: /(^|[^\\])\/\/.*/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': {
          pattern: /^\/\//,
          alias: 'comment'
        }
      }
    }
  ],
  'string': [
    {
      pattern: /"(?:\\.|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': {
          pattern: /{{(?:\\.|[^{}])*}}/,
          inside: {
            'expression': {
              pattern: /{{(?:\\.|[^{}])*}}/,
              inside: null // see below
            }
          }
        },
        'constant': {
          pattern: /\\./,
          alias: 'escape'
        }
      }
    },
    {
      pattern: /'(?:\\.|[^\\'])*'/,
      greedy: true,
      inside: {
        'interpolation': {
          pattern: /{{(?:\\.|[^{}])*}}/,
          inside: {
            'expression': {
              pattern: /{{(?:\\.|[^{}])*}}/,
              inside: null // see below
            }
          }
        },
        'constant': {
          pattern: /\\./,
          alias: 'escape'
        }
      }
    }
  ],
  'keyword': [
    {
      pattern: /\b(?:assert|else|if|while|loop|from|to|parallel|each|return|break|continue|def|each|in|headers|query|body|string|formurlencoded|formdata|stream)\b/,
      alias: 'control'
    },
    {
      pattern: /\b(?:and|or|not|<=|>=|<|>|!=|=|\+|-)\b/,
      alias: 'operator'
    },
    {
      pattern: /\b(?:true|false)\b/,
      alias: 'boolean'
    },
    {
      pattern: /\b(?:GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD|TRACE|CONNECT)\b/,
      alias: 'http-method'
    }
  ],
  'variable': {
    pattern: /\$[a-zA-Z_][a-zA-Z0-9_]*/,
    alias: 'variable'
  },
  'function': {
    pattern: /\b[A-Za-z_][A-Za-z0-9_]*\(?[^\)]*\)?/,
    inside: {
      'entity': {
        pattern: /^[A-Za-z_][A-Za-z0-9_]*/,
        alias: 'function-name'
      }
    }
  },
  'constant': {
    pattern: /\b(?:true|false|GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD|TRACE|CONNECT)\b/,
    alias: 'constant'
  },
  'number': {
    pattern: /\b\d+\b/,
    alias: 'number'
  },
  'operator': {
    pattern: /\b(?:and|or|not|<=|>=|<|>|!=|=|\+|-)\b/,
    alias: 'operator'
  }
};

Prism.languages.assertive.string[0].inside.interpolation.inside.expression.inside = Prism.languages.assertive;
Prism.languages.assertive.string[1].inside.interpolation.inside.expression.inside = Prism.languages.assertive;
