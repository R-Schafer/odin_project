const sumAll = function (numStart, numEnd) {
  if (typeof numStart != "number" || typeof numEnd != "number") {
    return "ERROR";
  }

  if (numStart < 0 || numEnd < 0) {
    return "ERROR";
  }

  if (numStart > numEnd) {
    let x = numStart;
    numStart = numEnd;
    numEnd = x;
  }

  let sum = 0;
  for (let i = 0; i <= numEnd; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
