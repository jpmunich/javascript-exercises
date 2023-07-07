const removeFromArray = function(arr, ...args) {
        args.forEach((arg) => {
            if (arr.indexOf(arg) !== -1) {
                arr.splice(arr.indexOf(arg), 1);
            }
        })
        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
