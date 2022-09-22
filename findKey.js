const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
 
};
// itterates through the object values and returns the key, when the callback with the value for the input returns true
const findKey = function(object, callback) {

  const keys = Object.keys(object);

  for (let key of keys) {
    
    if (callback(object[key])) {
      return key;
    }
  }

  return;

};

const bestTVShowsByGenre = {
  sciFi: "The Expance",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const apple = {
  type: "granny smith",
  color: "lime green",
  sizeInInches: 5,
  species: "granny smith",
};

const numbers = {
  first : 1,
  second : 4,
  ninth: 6,
  PI: 3.1415,
};

assertEqual(findKey(bestTVShowsByGenre, value => value === "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, value => value === "The '70s Show"), undefined);
assertEqual(findKey(apple, value => value === "granny smith"), "type");
assertEqual(findKey(apple, value => value === 5), "sizeInInches");
assertEqual(findKey(apple, value => value === "paper thin"), undefined);
assertEqual(findKey(numbers, value => value < 4), "first");