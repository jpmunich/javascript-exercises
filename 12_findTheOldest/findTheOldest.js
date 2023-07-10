const findTheOldest = function(arr) {
    const newArr = arr.sort((a, b) => {
        if (a.yearOfBirth > b.yearOfBirth) {return 1;}
        else {return -1;}
    }).filter((item, i) => {return item.yearOfDeath !== undefined || i === 0})
    return newArr[0];
};

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]))
// Do not edit below this line
module.exports = findTheOldest;
