const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
 
};

const tail = function(array) {
  let copy = array;
  copy.shift();
  return copy;
};

assertEqual(tail([1, 2, 3]).join(), [2, 3].join());
assertEqual(tail([3]).join(), [].join());
assertEqual(tail([]).join(), [].join());