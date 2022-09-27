const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !== ${expected}`);
  }
 
};

const countOnly = function (allItems, itemsToCount) {

  const results  = {};

  for (const item of allItems) {
    console.log(item);
    
    if(itemsToCount[item]) {

      if(!results[item]) {
        results[item] = 0;
      }

      results[item]++;
    }

  }

  return results;

};

const firstNames = [

  "Karl",
 
  "Salima",

  "Agouhanna",

  "Fang",

  "Kavith",

  "Jason",

  "Salima",

  "Fang",

  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;