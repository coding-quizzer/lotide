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

const map = function(array, callback) {

  const results = [];

  for (let item of array) {

    results.push(callback(item));
  }
  
  return results;

};

const words = ["many", "more", "less", "spoon", "might"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["m", "m", "l", "s", "m"]);

const results2 = map([1, 4, 2, 3], number => number * number);

assertArraysEqual(results2, [1, 16, 4, 9]);
assertArraysEqual(map(["power", "light", "party", "tree", "boat"], word => word + "house"), ["powerhouse", "lighthouse", "partyhouse", "treehouse", "boathouse"]);
