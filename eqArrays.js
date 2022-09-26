const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  // Returns True if there is at least one element thst is not equal in both arrays
  let arraysNotEqual = (array1.some((element, index) => {
    if (Array.isArray(element)) {
      return !eqArrays(element, array2[index]);
    }
    return (array2[index] !== element);
  }));

  return !arraysNotEqual;

};

module.exports = eqArrays;
