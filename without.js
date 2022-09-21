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

const without = function(source, itemsToRemove) {

  let newArray = source;
  for (let item of itemsToRemove) {
    newArray = removeItem(newArray, item);
  }

  return newArray;


};

const removeItem = function(source, item) {
  let newArray = [];

  for (let element of source) {
    if (element !== item) {
      newArray.push(element);
    }
  }

  return newArray;
};

assertArraysEqual(removeItem([1, 3, 4, 2, 3, 6], 3), [1, 4, 2, 6]);
assertArraysEqual(removeItem([1, 3, 4, 2, 3, 6], 5), [1, 3, 4, 2, 3, 6]);
assertArraysEqual(removeItem([1, 3, 4, 2, 3, 6], 2), [1, 3, 4, 3, 6]);
assertArraysEqual(without([1, 3, 4, 2, 3, 6], [2]), [1, 3, 4, 3, 6]);
assertArraysEqual(without([1, 3, 4, 2, 3, 6], [1, 3, 5]), [4, 2, 6]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
