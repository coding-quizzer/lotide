const middle = function(array) {

  let middleIndex = Math.floor(array.length / 2);
  
  if (array.length <= 2) {
    return [];
  }

  return array.length % 2 === 1
    ? [array[middleIndex]]
    : [array[middleIndex - 1], array[middleIndex]];
    
};

module.exports = middle;
