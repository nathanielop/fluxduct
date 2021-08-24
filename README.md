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

#### Simple
> ADD (a) (b)

#### Nested
> ADD (MULTIPLY (a) (b)) (b)

<hr/>

### Subtraction

#### Simple
> SUBTRACT (a) (b)

#### Nested
> SUBTRACT (ADD (a) (b)) (b)

<hr/>

### Multiply

#### Simple
> MULTIPLY (a) (b)

#### Nested
> MULTIPLY (SUBTRACT (a) (b)) (b)

<hr/>

### Divide

#### Simple
> DIVIDE (a) (b)

#### Nested
> DIVIDE (ADD (a) (b)) (b)

**Any one of these variables can be substituted for a OR or IF condition, as shown below**

> ADD (OR (a) (b)) AND (IF (c) (d) (e)) -> A will be checked and used if non-null, if c is in [true, '1', 1] then d will be used, else e.

Parentheses are required in order for it to be checked

Any variable above can be further nested with any combination of the operators and IF/OR conditions

## Errors

#### Invalid Parse Arguments (str is not a string)

> "The second argument provided "{a json stringified version of the provided argument}", is not a string."

#### An expression does not start with a recognized conditional or operator

> "Invalid operator provided in expression "{provided expression}", expected one of "{string of available operators}"."

#### No key present in dictionary for a given expression

> "No key present in dictionary "{json stringified dictionary}" for variable key "{resolved variable key}"."

#### No key present in dictionary for an OR conditional

> "No keys present in dictionary "{json stringified dictionary}" for variable keys "{resolved variable key a}" or "{resolved variable key b}" in OR conditional "{provided expression}"."

#### No key present in dictionary for resolve variable key in IF conditional

> "No key present in dictionary "{json stringified dictionary}" for variable key "{resolved key to evaluate}" in IF conditional "{provided expression}"."
