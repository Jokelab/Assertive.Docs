---
layout: default
title: Functions
parent: Language
nav_order: 45
---

# Functions
Assertive supports a list of built-in functions, but you can also define your own functions which we will refer to as user-defined functions.
This page is about user-defined functions. In it's most basic form, a function allows you to combine multiple statements together and assign a name to it. Whenever this name is called, the interpreter will execute all statements inside the function. Functions can also compute values and return them, so the caller can its result for subsequent computations.

## Syntax
```assertive
def ID "description string"? (parameter(, parameter)*)? { [statement]* }
```

## Basic function without arguments
Functions that don't need arguments can be defined and invoked as illustrated here:
```assertive
//function definition that performs two requests
def myFunction
{
  GET "http://www.testuri/id/1";
  GET "http://www.testuri/id/2";
}

//invoke the function like this:
myFunction;

//it is also possible to invoke the function with an empty argument list
```

## Function with arguments
```assertive
//function definition that uses the $id argument
def myFunction($id)
{
  GET "http://www.testuri/id/{{$id}}";
}

//invoke the function like this:
myFunction(1);
```

## Nested functions
Function definitions can be nested. Child functions can invoke their siblings and parent functions. 
It is not possible to invoke a child function declared inside a parent function. This is useful when writing reusable scripts that require some level of encapsulation.
```assertive
def parent
{
  //from here it is possible to invoke the functions defined in this parent (such as childA or parent).
  childA;

  def childA{
    //the child functions can call each other (such as childB or parent)
    childB;
  }

  def childB{
  }
}

//from here it's possible to invoke the parent. 
parent;
```

## Recursion
Functions can also call themselves. Here is an example of a recursive function.
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