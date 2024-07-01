---
layout: default
title: Asserts
parent: Language
nav_order: 50
---

# Asserts
The reason that this language is called Asserive is that it has a dedicated keyword to perform asserts. They are useful to test a condition. Assertive Script will send the result (success or failure) to the configured output writers.


## Syntax
```
assert [expression] string? ;
```

The expression should resolve to a boolean value. The optional string represents a description that will be written to the output when set.

## Example
```assertive
$res = GET "https://www.testuri.com/";
assert StatusCode($res) >= 200 and StatusCode($res) <= 299 "Status code succesful";
```