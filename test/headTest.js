const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([1, 3, 5]), 1);
assertEqual(head(["fairy", "time", "stories"]), "fairy");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);