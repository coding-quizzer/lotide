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

const letterPositions = function(sentence) {

  const results = {};
  let letter;

  for (let letterIndex in sentence) {

    letter = sentence[letterIndex];

    if (letter !== " ") {
      
      if (results[letter] === undefined) {
        
        results[letter] = [];
      }
      
      results[letter].push(parseInt(letterIndex));
    }
  }

  return results;
};


let test1 = "hello";

assertArraysEqual(letterPositions(test1).h, [0]);
assertArraysEqual(letterPositions(test1).e, [1]);
assertArraysEqual(letterPositions(test1).l, [2, 3]);
assertArraysEqual(letterPositions(test1).o, [4]);

let test2 = "hello world";

assertArraysEqual(letterPositions(test2).h, [0]);
assertArraysEqual(letterPositions(test2).e, [1]);
assertArraysEqual(letterPositions(test2).l, [2, 3, 9]);
assertArraysEqual(letterPositions(test2).o, [4, 7]);
assertArraysEqual(letterPositions(test2).w, [6]);
assertArraysEqual(letterPositions(test2).r, [8]);
assertArraysEqual(letterPositions(test2).d, [10]);

console.log(letterPositions(test2));

module.exports = letterPositions;