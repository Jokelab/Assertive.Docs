---
layout: default
title: Conditionals
parent: Language
nav_order: 40
---


# Conditional statements
Conditional statements allow you to execute certain statements based on a condition.

## Syntax
```assertive
if ( [expression] ) { [statement]* } (else { [statement]* })?
```

Expressions must be boolean expressions.


## Examples
```assertive
if ($x = 1){
  //do stuff    
}
else{
  //do something else    
}
```
