const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  return (array1.some((element, index) => (array2[index] !== element)) === false);

};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !== ${expected}`);
  }

};

const flatten = function(array) {

  // itterate through the array elements
  let flattenedArray = [];

  for (let element of array) {

    
    if (Array.isArray(element)) {
      // if an element is an array, add the individual elements to the outer array instead of the array itself
      flattenedArray = flattenedArray.concat(element);

    } else {
      
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1]]), [1]);
