function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}
const isLipi = isLeapYear(2052);
// console.log(isLipi);



// type 2 -----------------
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }else{
        return false;
    }
}

const isLeap = isLeapYear(1900);
const isLeap2 = isLeapYear(1700);
const isLeap3 = isLeapYear(1800);
const isLeap4 = isLeapYear(2052);
console.log(isLeap,isLeap2, isLeap3, isLeap4);