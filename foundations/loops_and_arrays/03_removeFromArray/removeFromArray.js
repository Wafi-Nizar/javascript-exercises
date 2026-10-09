const removeFromArray = function(numArr, ...argsArr) {
    // let newArr = [];
    // for (let i = 0; i < numArr.length; i++) {
    //     if (!argsArr.includes(numArr[i])){
    //         newArr.push(numArr[i]);
    //     }
    // }
    // return newArr;

    return numArr.filter(num => !argsArr.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
