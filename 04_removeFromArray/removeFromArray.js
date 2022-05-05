const removeFromArray = function (arr1, ...theArgs) {
  for (let i = 0; i < theArgs.length; i++) {
    let index = arr1.indexOf(theArgs[i]);
    if (index >= 0) {
      arr1.splice(index, 1);
    }
  }
  return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
