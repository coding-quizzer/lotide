const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
 
};

const head = function(array) {
  return array[0];
};

assertEqual(head([1, 3, 5]), 1);
assertEqual(head(["fairy", "time", "stories"]), "fairy");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);