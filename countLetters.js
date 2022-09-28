const assertEqual = require('./assertEqual');

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


module.exports = countLetters;