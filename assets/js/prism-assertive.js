Prism.languages.assertive = {
    'keyword': /\b(def|if|else|break|continue|return|import|out|while|each|loop|from|to|POST|GET|assert|query|headers|body|formdata|formurlencoded|stream|string)\b/,
    'operator': /=|\+|\-|\*|\//,
    'number': /\b\d+\b/,
    'string': /"(?:\\.|[^\\"])*"/,
    'comment': /\/\/.*/,
    'function': /\b[A-Za-z_]\w*(?=\()/,
    'variable': /\b$[A-Za-z_]\w*\b/
  };