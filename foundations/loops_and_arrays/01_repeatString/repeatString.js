// const repeatString = function(string, num) {
//     if(num < 0) {
//         return "ERROR";
//     } else if(num === 0) {
//         string = ""
//     } else {
//         let text = string;
//         for(let i = 0; i < num-1; i++) {
//             string += text;
//         }
//     }
//     return string
// };

// from solution
const repeatString = function (word, times){
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
}

// Do not edit below this line
module.exports = repeatString;
