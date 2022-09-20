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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
