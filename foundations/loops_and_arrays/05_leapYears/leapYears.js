const leapYears = function(year) {
    // my solution
    // year % 100 == 0 &&
    if ( year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }

    // from solution
    // const isYearDivisibleByFour = year % 4 === 0;
    // const isCentury = year % 100 === 0;
    // const isYearDivisibleByFourHundred = year % 400 === 0;

    // if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
    //     return true;
    // } else { 
    //     return false;
    // }
};

// Do not edit below this line
module.exports = leapYears;
