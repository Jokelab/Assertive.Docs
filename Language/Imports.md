---
layout: default
title: Importing other files
parent: Language
nav_order: 70
---

# Imports
You can include other Assertive files to reuse (pieces of) script.

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
