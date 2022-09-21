const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
  
};

const findKeyByValue = function(object, value) {
  // loop through the object keys
  let keyValue;
  for (let key in object) {
    // if any keys have the inputted value, return the key
    // if no keys are found return false
    keyValue = object[key];
    console.log("key: ", key, "|", "keyValue:", keyValue);
    if (keyValue === value) {
      return key;
    }
  }

  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expance",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const apple = {
  type: "granny smith",
  color: "lime green",
  sizeInInches: 5,
  species: "granny smith",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The '70s Show"), undefined);
assertEqual(findKeyByValue(apple, "granny smith"), "type");
assertEqual(findKeyByValue(apple, 5), "sizeInInches");
assertEqual(findKeyByValue(apple, "paper thin"), undefined);