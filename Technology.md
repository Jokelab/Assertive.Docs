---
title: Technology
layout: default
nav_order: 70
---

# High level architecture
The following diagram show how the different components relate to eachother.
```mermaid
flowchart LR
 IDE["`Visual Studio Code Extension
 _Node.js_`"]

Assertive.LanguageServer["`Assertive.LanguageServer
_.NET library_`"]

Assertive["`Assertive
_.NET library_`"]

Assertive.Cli["`Assertive.Cli
_.NET library_`"]
```

| Component        | Description          | 
|:-------------|:------------------|
| Assertive           | This is the core .NET assembly that contains the lexer, parser and interpreter. The parser and interpreter definitions are written in [ANTLR](https://www.antlr.org/). From this definition, a base C# visitor class is generated with Java. The interpreter and analyser code uses subclasses of this visitor class to visit all statements and expressions. The interpreter is therefore written in pure C# / .NET | 
| Assertive.LanguageServer | A language server protocol ([LSP](https://microsoft.github.io/language-server-protocol/)) implementation based on [OmniSharp](https://github.com/OmniSharp/csharp-language-server-protocol). This assembly has a direct depency on the Assertive core library. The component can be invoked by any language server client that knows the LSP protocol.|
| Assertive.Cli           | The command line interface (CLI) to invoke the Assertive interpreter directly from a terminal. It has a direct dependency on the Assertive core library.  | 
| Visual Studio Code Extension           | A language server client that runs on Node.js that invokes the Assertive.LanguageServer component. The extension code is written in TypeScript.   | 


