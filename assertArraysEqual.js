const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("\u{1F7E2}Assertion Passed\u{1F7E2}:", actual, "===", expected);
  } else {
    console.log("\u{1F534}Assertion Failed\u{1F534}:", actual, "!==", expected);
  }

};

module.exports = assertArraysEqual;