const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F7E2}Assertion Passed\u{1F7E2}: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F534}Assertion Failed\u{1F534}: ${actual} !==   ${expected}`);
  }
 
};

const countLetters = function(string) {

  let letterCount = {};
  for (let char of string) {
    char = char.toLowerCase();

    if (char !== " ") {
   
      if (!letterCount[char]) {
        letterCount[char] = 0;
      }
      
      letterCount[char]++;
    }
  }
    
  return letterCount;

};

console.log(countLetters("This is a string"));
let test1 = "Here is a good Test";
let test2 = "The quick brown fox jumps over the lazy dogs";

assertEqual(countLetters(test1).h, 1);
assertEqual(countLetters(test1).e, 3);
assertEqual(countLetters(test1).r, 1);
assertEqual(countLetters(test1).i, 1);
assertEqual(countLetters(test1).s, 2);
assertEqual(countLetters(test1).a, 1);
assertEqual(countLetters(test1).g, 1);
assertEqual(countLetters(test1).o, 2);
assertEqual(countLetters(test1).d, 1);
assertEqual(countLetters(test1).t, 2);

console.log("test:", test1);

console.log(countLetters(test2));
