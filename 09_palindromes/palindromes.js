const palindromes = function (word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/ /g, "").toLowerCase().split('').reverse().join('') === word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g, "").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
