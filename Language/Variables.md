---
layout: default
title: Variables
parent: Language
nav_order: 20
---

# Variables
Variables are very common in every programming language. Assertive supports variables to enable temporary storage of information during the execution of a script. 
A variable always starts with a dollar sign (**$**) and is followed by one or more alphanumeric characters, for example: 

```
$myVariable
```


## Assignment statement
```
[variable] = [expression];
```

## Examples

```
$x = "value for x"; //x will be a string
$y = 1337;          //y will be numeric
$res = GET "http://myapi.com/v1"; // HTTP Request and response 
```