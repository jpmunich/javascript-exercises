const reverseString = function(str) {
    let strArr = str.split("");
    let reverseStrArr = [];

    for (let i = (strArr.length - 1); i >= 0; i--) {
        reverseStrArr.push(strArr[i]);
    }

    let reverseStr = reverseStrArr.join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
