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
}

console.log(tail([]));

const result = tail([1, 2, 3]);
const expected = [2, 3];

assertEqual(tail([1, 2, 3]).join(), [2, 3].join());
assertEqual(tail([3]).join(), [].join());
assertEqual(tail([]).join(), [].join());