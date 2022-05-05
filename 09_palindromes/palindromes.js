const palindromes = function (phrase) {
  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[^\w]/g, "");
  let j = phrase.length - 1;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== phrase[j]) {
      return false;
    }
    if (j - 1 === i || i === j) {
      return true;
    }
    j--;
  }
};

// Do not edit below this line
module.exports = palindromes;
