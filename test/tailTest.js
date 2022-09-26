const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail([1, 2, 3]).join(), [2, 3].join());
assertEqual(tail([3]).join(), [].join());
assertEqual(tail([]).join(), [].join());