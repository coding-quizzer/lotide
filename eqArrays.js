const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }


  // Returns True if there is at least one element thst is not equal in both arrays
  let arraysNotEqual = (array1.some((element, index) => {
    if (Array.isArray(element)) {
      return !eqArrays(element, array2[index]);
    }
    return (array2[index] !== element);
  }));

  return !arraysNotEqual;

};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
 
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, [3, 4], 5, [6]], [1, 2, [3, 4, 5], [6]]), false);
assertEqual(eqArrays([1, 2, [3, [4, 5]], [6]], [1, 2, [3, [4, 5]], [6]]), true);
