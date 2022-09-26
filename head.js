const assertEqual = require("./assertEqual");

const head = function(array) {
  return array[0];
};

assertEqual(head([1, 3, 5]), 1);
assertEqual(head(["fairy", "time", "stories"]), "fairy");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);