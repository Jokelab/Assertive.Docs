---
layout: default
title: Functions
parent: Language
nav_order: 45
---

# Functions
Assertive supports a list of built-in functions, but you can also define your own functions.

## Recursion
Functions can call themselves. Here is an example of a recursive function.
```assertive
//recursive factorial function
def factorial ($n){
    if ($n = 0){
      return 1;
    }
    return $n * factorial($n - 1);
}
```