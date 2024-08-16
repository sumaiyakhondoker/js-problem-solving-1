/**
const biryaniKhor =['abul','babul','abul','cabul','dabul','babul','kabul','cabul'];
function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)=== false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);


============================================================================
*/

const numbers = [5,84,6,1,5,25,98,25,41,32,98];
function noDuplicate(array){
    const unique = [];
   for(const item of array){
    if(unique.includes(item) === false){
        unique.push(item);
    }
   }
//    console.log(unique)
return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);