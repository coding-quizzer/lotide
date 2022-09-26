const tail = function(array) {
  let copy = array;
  copy.shift();
  return copy;
};

module.exports = tail;