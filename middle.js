const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  return (array1.some((element, index) => (array2[index] !== element)) === false);

};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("\u{1F7E2}Assertion Passed\u{1F7E2}:", actual, "===", expected);
  } else {
    console.log("\u{1F534}Assertion Failed\u{1F534}:", actual, "!==", expected);
  }

};

const middle = function(array) {

  // Edge case: if array only contains one or two elements, return an empty array

  // If array contains an odd number of elements, return the middle element as an array

  // if array contains an even number of elements, return the two middle elements as an array
  let middleIndex = Math.floor(array.length / 2);
  
  if (array.length <= 2) {
    return [];
  }

  return array.length % 2 === 1
    ? [array[middleIndex]]
    : [array[middleIndex - 1], array[middleIndex]];
    
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);