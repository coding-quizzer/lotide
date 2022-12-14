const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
 
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  return (array1.some((element, index) => (array2[index] !== element)) === false);

};

// Returns true if both objects have identicle keys with identicle values
// Otherwise, it returns false
const eqObjects = function(object1, object2) {

  //console.log("object1 keys:", Object.keys(object1), "object2 keys:", Object.keys(object2));

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  let keys;
  keys = Object.keys(object1);

  for (let key of keys) {

    if (Array.isArray(object1[key])) {

      if (eqArrays(object1[key], object2[key]) === false) {

        return false;
      }

      continue;

    }
    
    if (typeof(object1[key]) === "object") {
      
      if (eqObjects(object1[key], object2[key]) === false) {

        return false;
      }

      continue;

    }
    
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = {c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);

const cd2 = {c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: [2, 3, 5]}, { a: { z: 1 }, b: [2, 3, 5]}), true);
assertEqual(eqObjects({ a: { z: 1}, b: 2}, { a: { z: [1] }, b: 2}), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2}, { a: 1, b: 2}), false);

module.exports = eqObjects;