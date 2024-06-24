Prism.languages.assertive = {
    'keyword': /\b(def|POST|GET|assert|query|headers|body)\b/,
    'operator': /=|\+|\-|\*|\//,
    'number': /\b\d+\b/,
    'string': /"(?:\\.|[^\\"])*"/,
    'comment': /\/\/.*/,
    'function': /\b[A-Za-z_]\w*(?=\()/,
    'variable': /\b$[A-Za-z_]\w*\b/
  };