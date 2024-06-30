---
layout: default
title: Importing other files
parent: Language
nav_order: 70
---

# Imports
You can include other Assertive files to reuse (pieces of) script. This promotes reusing existing code in multiple scripts.
Both variables and functions will be available in the script that performs the import. It is not possible to execute a script with a circular reference. For example:

- a.ass imports b.ass
- b.ass imports c.ass
- c.ass imports a.ass

Violating this constraint will result in an error.

## Syntax
An import statement must be at the top of an Assertive file.
```assertive
import string;
```

## Examples
```assertive
import "file-in-current-folder.ass";
import "subfolder/file-in-subfolder.ass";
import "../file-in-parent-folder.ass";
```
