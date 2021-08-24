# Templator
A simple templating language for JS

## Overview

A compact, excel-esque, left-to-right, string parser with 4 basic operations (at the moment).

Expressions are delimited by a following expression or by nothing at all, there is no need for a delimiter.

## Usage

### Input

This package exports a single function, parse, which accepts two arguments; firstly, a dictionary of variables and their respective values, which will be expected to match the variable assignments passed in the string being parsed, secondly, the string to be parsed.

### Output

Parse returns a single value or an array of values providing there are multiple expressions provided.

## Examples

### Addition
> ADD (a) (b)
> ADD (MULTIPLY (a) (b)) (b)

### Subtraction
> SUBTRACT (a) (b)
> SUBTRACT (ADD (a) (b)) (b)

### Multiply
> MULTIPLY (a) (b)
> MULTIPLY (SUBTRACT (a) (b)) (b)

### Divide
> DIVIDE (a) (b)
> DIVIDE (ADD (a) (b)) (b)

**Any one of these variables can be substituted for a OR or IF condition, as shown below**

> ADD (a OR b) AND (IF c THEN d ELSE e) -> A will be checked and used if non-null, if c is in [true, '1', 1] then d will be used, else e.

Parentheses are required in order for it to be checked

Any variable above can be further nested with any combination of the operators and IF/OR conditions

## Errors

Any string that does not fit the format above or otherwise errors will throw an error, which will be in the following format:

> "String {a json stringified version of the string that threw the error} could not be parsed, variable {the variable in question} has no value in the provided dictionary."
