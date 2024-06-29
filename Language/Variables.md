---
layout: default
title: Variables
parent: Language
nav_order: 20
---

# Variables
Variables are very common in every programming language. Assertive supports variables to enable temporary storage of information during the execution of a script. 
A variable always starts with a dollar sign (**$**) and is followed by one or more alphanumeric characters, for example: 

```assertive
$myVariable
```


## Assignment syntax
```assertive
[variable] = [expression];
```

## Examples

```assertive
$x = "value for x"; //x will be a string
$y = ((4 * 500) - 1000) + 337;  //y will be numeric
$x = someFunctionCall() + $y; //$x should numeric because of the plus (+) operation
$res = GET "http://myapi.com/v1"; // $res contains the HTTP response 
```
