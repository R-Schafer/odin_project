const caesar = function (phrase, num) {
  let letters = /[a-zA-Z]/;
  let cipher = "";

  for (let i = 0; i < phrase.length; i++) {
    if (letters.test(phrase[i])) {
      //  lowercase letters
      if (phrase[i] === phrase[i].toLowerCase()) {
        let code = phrase.charCodeAt(i);
        code += num;
        if (code > 122) {
          let diff = code - 122;
          let wrapLetter = 97 + diff - 1;
          let newLetter = String.fromCharCode(wrapLetter);
          cipher += newLetter;
        } else if (code < 97) {
          let diff = 97 - code;
          let wrapLetter = 122 - diff + 1;
          let newLetter = String.fromCharCode(wrapLetter);
          cipher += newLetter;
        } else {
          let newLetter = String.fromCharCode(code);
          cipher += newLetter;
        }
      } else {
        let code = phrase.charCodeAt(i);
        code += num;
        if (code > 90) {
          let diff = code - 90;
          let wrapLetter = 65 + diff - 1;
          let newLetter = String.fromCharCode(wrapLetter);
          cipher += newLetter;
        } else if (code < 65) {
          let diff = 65 - code;
          let wrapLetter = 90 - diff + 1;
          let newLetter = String.fromCharCode(wrapLetter);
          cipher += newLetter;
        } else {
          let newLetter = String.fromCharCode(code);
          cipher += newLetter;
        }
      }
    } else {
      cipher += phrase[i];
    }
  }
  return cipher;
};
// Do not edit below this line
module.exports = caesar;
