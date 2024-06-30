---
layout: default
title: Loops
parent: Language
nav_order: 60
---

# Loop statements
There are different loop statements within the Assertive scripting language. Each construct serves a different purpose.

## Basic loop
The simplest loop statement is meant to execute a block of statements for a fixed amount of times.

```assertive
loop variable? from [expression] to [expression] { [statement]* };
```
The from and to expressions should resolve to numeric values. The from and to values are inclusive bounds, so Assertive script will execute the following `POST` request 10 times: 
```assertive
loop from 1 to 10
{
    POST "https://www.testuri.com/";
}
```

When desired, a local loop variable can be set in the loop definition. The following code will output the numbers 1 to 10:
```assertive
loop $i from 1 to 10
{
    out $i;
}
```

## While loop
This kind of loop allows to execute a block of statements until as long as a certain condition is true.
```assertive
while ([expression]) { [statement]* }
```
The expression should resolve to a boolean value. 
Example that executes a request until the total response time exceeds 10 seconds:
```assertive
$total = 0;
while($total <= 10000){
    $res = POST "https://www.testuri.com";
    $total = $total + Duration($res);
}
```

## Each loop
The each loop allows iterating items in a list.
```assertive
each (variable in [expression]) { [statement]* }
```

Example:
```assertive
$days = ["mon", "tue", "wed", "thu", "sat", "sun"];
each($day in $days){
    out $day;
}
```

## Parallel loop 
{: .d-inline-block }

Experimental
{: .label .label-yellow }

The basic loop syntax can be extended with the `parallel` keyword. The complete syntax looks like this:
```assertive
loop variable? from [expression] to [expression] (parallel [expression])? { [statement]* };
```
The parallel expression should resolve to a numeric value. The number represents the _maximum_ number of parallel executions of the statement block. The actual number is dependent on system resources.

{: .warning }
Parallel loops usually execute code on different threads. It is not allowed to execute code that modifies shared state (e.g. variables) declared outside the parallel loop. Violating this constraint could introduce race conditions. When detected, Assertive Script will exit with a runtime error.

Example:
```assertive
loop from 1 to 200 parallel 5
{
    POST "https://www.testuri.com/";
}
```