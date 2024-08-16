// 12 feet 1 inch

function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}

const shuboHeight = inchToFeet(75);
console.log(shuboHeight);

// function inchToFeet2(inch){
//     const feetFraction = inch/12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch % 12;
//     const result = feetNumber + "ft " + inchRemaining + "inch.";
//     return result;
// }

// const height  =  inchToFeet2(75);
// console.log(height);


function inchToFeet(inch){
const feetFraction = inch / 12;
const feetNumber = parseInt(feetFraction);
const inchRemaining =inch % 12;
const result = feetNumber + " ft " + inchRemaining + " inch.";
return result;
}

// const height = inchToFeet(85);
// console.log(height);

// ==============================
function inchToFeet(inch){
    const feet = inch * 0.0833333;
    return feet;
}
console.log(inchToFeet(75));
// 1 mile = 1.60934 km------------
function mileToKilometer(mile){
    const kilo  = mile * 1.60934;
    return kilo;
}
// const result = mileToKilometer(5);
// console.log(result);

// kilometer to mile------------

function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
// const result = kilometerToMile(5);
// console.log(result);
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
// console.log(mileToKilometer(5))

function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

// console.log(kilometerToMile(5))


// gram to kilogram---------
function gramToKg(gram){
    const kg = gram * 0.001;
    return kg;
}
// console.log(gramToKg(1000));


// milimeter to cm---------
function milimeterToCm(mili){
    const cm = mili * 0.1;
    return cm;
}
console.log(milimeterToCm(15))