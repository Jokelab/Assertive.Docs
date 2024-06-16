---
layout: default
title: Variables
parent: Language
nav_order: 20
---

# Variables
Variables allow you to temporarily store information during the execution of a script.

## Syntax
A variable always starts with the dollar sign ($) and is followed by one or more alphanumeric characters. The first character can't be a digit. 
Or more formally:
```
$[a-zA-Z_][a-zA-Z0-9_]*
```

# Assignment statements

```
$x = "value for x"; //x will be a string
$y = 1337; //y will be numeric
```
