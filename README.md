# Templator
A simple templating language for JS

## Overview

A compact object parser with 4 basic operations (at the moment).

## Usage

### Input

This package exports a single function, parse, which accepts two arguments; firstly, a dictionary of variables and their respective values, which will be expected to match the paths passed in the object being parsed, secondly, the object to be parsed.

### Output

Parse returns a single value or an array of values providing there are multiple expressions provided.

## Examples

### Addition

#### Simple
> { add: [{ path: ['a'] }, { path: ['b'] }] }

#### Nested
> { add: [{ multiply: [{ path: ['a'] }, { path: ['b'] }] }, { path: ['b'] }] }

<hr/>

### Subtraction

#### Simple
> { subtract: [{ path: ['a'] }, { path: ['b'] }] }

#### Nested
> { subtract: [{ multiply: [{ path: ['a'] }, { path: ['b'] }] }, { path: ['b'] }] }

<hr/>

### Multiply

#### Simple
> { multiply: [{ path: ['a'] }, { path: ['b'] }] }

#### Nested
> { multiply: [{ add: [{ path: ['a'] }, { path: ['b'] }] }, { path: ['b'] }] }

<hr/>

### Divide

#### Simple
> { divide: [{ path: ['a'] }, { path: ['b'] }] }

#### Nested
> { divide: [{ add: [{ path: ['a'] }, { path: ['b'] }] }, { path: ['b'] }] }

**Any one of these variables can be substituted for a IF condition, as shown below**

> { add: [{ if: [{ path: ['a'] }, { path: ['b'] }, { path: ['c'] }] }, { path: ['d'] }] } -> If c is a boolean of value true then b will be used, else c.

Any variable above can be further nested with any combination of the operators and IF conditions

## Errors

#### Invalid Parse Arguments (obj is not an object)

> "The second argument provided "{a json stringified version of the provided argument}", is not an object."

<!-- #### An expression does not start with a recognized conditional or operator

> "Invalid operator provided in expression "{provided expression}", expected one of "{string of available operators}"."

#### No key present in dictionary for a given expression

> "No key present in dictionary "{json stringified dictionary}" for variable key "{resolved variable key}"."

#### No key present in dictionary for an OR conditional

> "No keys present in dictionary "{json stringified dictionary}" for variable keys "{resolved variable key a}" or "{resolved variable key b}" in OR conditional "{provided expression}"."

#### No key present in dictionary for resolve variable key in IF conditional

> "No key present in dictionary "{json stringified dictionary}" for variable key "{resolved key to evaluate}" in IF conditional "{provided expression}"." -->
