# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kenoreference/lotide`

**Require it:**

`const _ = require('@kenoreference/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: takes in an array as input and returns the first element
* `tail(arr)`: takes in an array as input and returns an array that contains all the elements except for the first.
* `middle(arr)`: takes in an array as input and returns an array containing the middle element (or middle two if the length is even).
* `assertEqual(expected, actual)`: takes in two primitive values as inputs and prints a message on the console indicating whether the values are equal or not.
* `eqArrays(arr1, arr2)`:  takes in two arrays as inputs and returns true if the arrays are equal (does not currently support arrays containing objects).
* `assertArraysEqual(expected, actual)`: takes in two arrays as inputs and prints a message to the console indicating whether or not the arrays are equal (does not currently support arrays containing objects)
* `flatten(arr)`: flattens an array with one level of nesting to an unnested array.
* `without(source, itemsToRemove)`: takes in two arrays as inputs and returns the first array without any of the items in the second array 
* `countLetters(str)`: takes in a string as input and returns an object that records the count of each letter.
* `letterPositions(str)`: takes in a string and returns an object of arrays containing the positions of each letter.
* `countOnly(allItems, itemsToCount)`: takes in an array and an object of boolean values as inputs and returns the count of items in the array for which the callback function returns a truthy value.
* `eqObjects(obj1, obj2)`: takes in two objects as inputs and returns true if both objects are equal.
* `assertObjectsEqual(expected, actual)`: takes in two objects as inputs and prints a message to the console indicating whether the objects are equal.
* `findKey(object, callback`: takes in an object and a function as inputs and returns the key of the first value that returns a truthy value for the function.
* `findKeyByValue(object, value)`: takes in an object and a string as inputs and returns the key of the first value that equals the string
* `takeUntil(arr, callback)`: takes in an array and a callback function as inputs. Passes each array element into the callback function and returns an array that contains every element before the first element that returns a truthy value when passed into the callback function.
* `map(arr, callback)`: takes in an array and a callback function and returns another array that contains the outputs when each element of the original array are passed into the callback function.