# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @giordanotemple/lotide`

**Require it:**

`const _ = require('@giordanotemple/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Takes a string and returns an object of each letter present and how many times they appear.
* `countOnly(array, object)`: Accepts an array and an object as arguments. The first argument is an array of the total items. The second argument should be an object of the items that should be counted and items that will be ignored. Counted items should have a key-value of itemName: true, and items to be ignore should have a key-pair value of itemName: false. The return statement will be an object of each true item and how many times they are present in the inserted array.
* `findKey(object, callback)`: Accepts an object and callback function as arguments. The callback will determine the conditions to search for within the inserted object and return the first instance of it.
* `findKeyByValue(object, value)`: Accepts an object and value as objects. Will return the key of the first value that matches the insterted value.
* `flatten(array)`: Accept an array as a single argument. Will take arrays with nested arrays and flatten them to return an array with no nested elements.
* `head(array)`: Accepts an array as an argument and returns the element at the first index.
* `letterPositions(string)`: Accepts a string as an argument and returns an object of letters and their indexed positions.
* `map(...)`: Accepts an array and a callback function as arguments. A basic re-implenetation of Array.prototype.map() that modifies each element of an array based on the callback function's instruction.
* `middle(arr)`: Takes an array as an argument. If the length of the array is odd, it returns the middle element. If the array is even, it returns the middle two elements.
* `tail(arr)`: Accepts an array as an argument and returns the element at the last index.
* `takeUntil(array, callback)`: Accepts an array and callback function. Returns all elements of the array until an array's element causes the callback to return true.
* `without(array1, array2)`: Accepts two arrays as separate arguments. Will return all elements of the first array that are not present in the second array.