const fibonacci = function (num) {
  let number = parseInt(num, 10);
  if (number < 0) {
    return "OOPS";
  }

  let sequence = [];
  for (let i = 0; i < number; i++) {
    if (i === 0 || i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
