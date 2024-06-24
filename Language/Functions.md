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
def fibonacci($n)
{
    if ($n < 2){
      return $n;
    }
    return fibonacci($n - 1) + fibonacci($n - 2);
}

//print fibonacci sequence:
loop $i from 0 to 10
{
    out fibonacci($i);
}
```