const findTheOldest = function (people) {
  let age = 0;
  let oldest = {};
  let year = new Date().getFullYear();

  for (let i = 0; i < people.length; i++) {
    let calc = (people[i].yearOfDeath || year) - people[i].yearOfBirth;
    if (calc > age) {
      age = calc;
      oldest = people[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
