---
title: Getting started
layout: default
nav_order: 20
---

# Getting started
This page has a few step-by-step tutorials to help you get familiar with Assertive Script. We highly recommend to follow them in the prescribed order.

## Prerequisites
A VSCode extension has been published in order to support a smooth development experience for Assertive scripts. 
Follow the installation instructions on the [VSCode extension page]({% link VSCode extension.md %}) to get the extension.
Every tutorial on this page assumes that the Assertive VSCode extension is succesfully installed and that you have a running instance of VSCode.

## Hello world!
Learning a new language should always start with a decent 'Hello, world'. Assertive Script is no exception. 
- Create a new file called **helloworld.ass**
- Copy the following code to the file:
```assertive
out "Hello world!";
```
- Save the file.
- To run the script, press **ctrl+alt+a** on Windows and Linux or **shift+cmd+a** on macOS. This will invoke the 'Assertive: Run Script' command.
- Notice the appearance of an output window that says "Hello world!".

**Congratulations!** You executed your first Assertive script!

## Variables
We will now modify the code so we won't send a greeting to the entire world, but to someone special.
```assertive
$name = "John";
out "Hello, {% raw %}{{ $name }}{% endraw %}!";
```
- Run the script again to see how the variable is replaced inside the string.
- More information about variables can be found [here]({% link Language/Variables.md %}).

## Requests
The following steps will show how to perform a simple HTTP GET request and extract some data from it
We will demonstrate this with the publicly available [Starwars API](https://swapi.dev). 
- On top of the file, insert the following two variables:
```assertive
//declare a $host variable
$host = "https://swapi.dev/api/";
//here we set the id of the person we want to get
$id = 1;
```
- Next, add code that peforms an HTTP GET request and stores the response in a variable called `$person`.

```assertive
//perform GET request
$person = GET "{% raw %}{{ $host }}{% endraw %}/people/{% raw %}{{ $id }}{% endraw %}";
```
- Succesful responses contain a JSON response body with an object that has a key called 'name'. To get its value, we can use the built-in JsonPath function by adding this code:
```assertive
$name = JsonPath($person, "$.name");
```
So far, we should have the following code:
```assertive
//declare a $host variable
$host = "https://swapi.dev/api/";
//here we set the id of the person we want to get
$id = 1;
//perform GET request
$person = GET "{% raw %}{{ $host }}{% endraw %}/people/{% raw %}{{ $id }}{% endraw %}";
//extract the name
$name = JsonPath($person, "$.name");
//send name to the output window
out "Hello, {% raw %}{{ $name }}{% endraw %}!";
```
- Execute the code above and notice  the text **"Hello, Luke Skywalker!"**
- More information about HTTP requests can be found [here]({% link Language/Requests.md %}).

## Functions
To make the code above reusable, we can wrap it into a function. In Assertive script, a function always starts with the `def` keyword and is followed by a name. Parameters are enclosed in parenthesis.
- Consider the following code to see how the code we used earlier is now wrapped in a function called `getName`.

```assertive
//declare a $host variable
$host = "https://swapi.dev/api/";

//declare a function that gets the name of a Starwars person by its ID
def getName($id){
    //perform the GET request and store the response in the $person variable
    $person = GET "{% raw %}{{ $host }}{% endraw %}/people/{% raw %}{{ $id }}{% endraw %}";
    //return the name and send it to the output
    return JsonPath($person, "$.name"); 
}

//call the function and send the result to the output
out getName(2);
```

- More information about functions can be found [here]({% link Language/Functions.md %}).

## Asserts
Assertive supports a special `assert` keyword. This keyword can be used to test a certain condition and report whether or not the test passed or failed. We will modify the function above to assert if the response was 200 (OK).
```assertive
def getName($id){
    //perform the GET request and store the response in the $person variable
    $person = GET "{% raw %}{{ $host }}{% endraw %}/people/{% raw %}{{ $id }}{% endraw %}";
    //get the statuscode of the response
    
    //assert that it was ok
    assert StatusCode($person) = 200 "Starwars person fetched";

    //return the name and send it to the output
    return JsonPath($person, "$.name"); 
}
```
- More information about asserts can be found [here]({% link Language/Asserts.md %}).

## Loops
Assertive also supports control-flow statements like [conditional]({% link Language/Conditionals.md %}) and [loop]({% link Language/Loops.md %}) statements.
We will now demonstrate how we can show the name of the first 5 people by calling the function we created earlier.
```assertive
loop $id from 1 to 5
{
    out getName($id);
}
```
After executing this code, your output window should show something similar to this:

![](/assets/img/getting-started.jpeg)

---
You have made it until the end of our getting started tutorial! To explore all features of Assertive Script, visit the [language]({% link Language/index.md %}) page.

