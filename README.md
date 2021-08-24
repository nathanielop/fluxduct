# Templator [![npm version](https://img.shields.io/npm/v/templatorjs.svg?style=flat)](https://www.npmjs.com/package/templatorjs)
A simple templating language for JS

## Overview

A compact object parser with 4 basic operations (at the moment).

## Use Case

Let's say you have an API, and you're looking for a method by which you can increase performance of your app via doing transformations of the data directly in the API. In this scenario, you would middleman the API returned data through a Templator parser in order to get the data in the format you would like. An important distinction to be made here is that you are *not* changing the raw output of your API, but rather defining explicit values which you would like back in the app. These values are much more versatile than a pure API response as well, as they can be compounded with operators and conditionals to return computed values not otherwise returned in your API. Even more, the number of fields is completely up to you! If you only want 3 fields, foo, bar, and baz, you can explicitly only request those fields back.

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

#### A final, resolved value as an argument in a operation does not have a path key

> "No path key present in argument "{a json stringified version of the provided argument}"."

#### No key present in dictionary for a given argument's path

> "No value present in dictionary "{json stringified dictionary}" for path "{json stringified path}"."

#### Resolved value in dictionary does not meet expected type

> "Expected {expectedType, defaulted to number} value at path "{json stringified path}" in dictionary "{json stringified dictionary}", received "{typeof resolvedValue}"."
