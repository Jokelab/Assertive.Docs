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
- To run the script, press ctrl+alt+a on Windows and Linux or shift+cmd+a on macOS. This will invoke the 'Assertive: Run Script' command.
- Notice the appearance of an output window that says "Hello world!".

**Congratulations!** You executed your first Assertive script!

## Variables
we will now modify the code so we won't send a greeting to the entire world, but to someone special.
```assertive
$name = "John";
out "Hello, {% raw %}{{ $name }}{% endraw %}!";
```
- Run the script again to see how the variable is replaced inside the string.
- More information about variables can be found [here]({% link Language/Variables.md %}).
