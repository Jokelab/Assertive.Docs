---
layout: default
title: Output
parent: Language
nav_order: 50
---

# Output
The `out` keyword can be used to write any message to the configured output writers.

## Syntax
```assertive
out [expression] ;
```

## Examples
```assertive
out (3 - 1) * 5;
out $myVar;
out calculateNumber(1, 2);
```



