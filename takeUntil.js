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

const takeUntil = function(array, callback) {
  let subset = [];
  // Returns a subset of the array from the beginning to the index just before the index when the callback returns a truthy value
  for (let item of array) {
    if (callback(item)) {
      return subset;
    }

    subset.push(item);

    console.log(item);
  }

  return subset;
}

assertArraysEqual(takeUntil([1, 3, 5, 7, 9 ,11], number => number > 5), [1, 3, 5]);
assertArraysEqual(takeUntil(["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "s", "e", "n", "t", "e", "n", "c", "e", "."], letter => letter === " "), ["T", "h", "i", "s"]);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;