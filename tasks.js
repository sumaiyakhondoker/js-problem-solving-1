/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */
//  °F = °C×(9/5)+32.

/**------------solution--------------------------
function celToFaren(cel){
   const fahrenheit = cel*(9/5)+32;
   return fahrenheit;



}
const Fahrenheit = celToFaren(98.4);
const Fahrenheit2 = celToFaren(144);
console.log("The fahrenheit temparature is:",Fahrenheit);
console.log("The fahrenheit temparature is:",Fahrenheit2);

 */

/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

*/

/**
 =============part 1 ============(system 1)
 function counter(array,findNumber){
let count = 0;
  for(const number of array){
   // console.log(number);
   if(number === findNumber){
    count = count + 1;
     
   }
  }
  return count;
}

const numbers = [5,6,11,12,98, 5];
const findNumber = 5;
const result = counter(numbers, findNumber);
console.log(result);

 */

/**
=============part 1 ============(system 2)
function counter(numbers,findNumber){
   const found = [];
   for(const number of numbers){
      if(number === findNumber){
         found.push(number);
      }
   }
   let count = found.length;
   return count;
}
const numbers = [5,6,11,12,98, 5];
const findNumber = 5;
const result = counter(numbers, findNumber);
console.log(result)

 */


/**=========part 2 ==============
 * sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

/** 
function findNumber(array, find){
   let count = 0;
for(const number of array){
   if(number === find){
      count++;
   }
}
return count;
}
const numbers = [5,6,11,12,98, 5];
const find = 25;
const result = findNumber(numbers, find);
console.log(result);

 */

/**
Task-3:
Write a function to count the number of vowels in a string.
 */

/**solution----------------------------------------------------------
function findingVowels(str,v){
   let count = 0;
   for(const char of str){
      if(v.includes(char)){
         count++;
      }
   }
   return count;
}
const str = "umbrellalagboi";
const vowels = "aeiou";
const result = findingVowels(str,vowels);
console.log("The number of vowel in the string is : " ,result);
 */

/**---------------Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */





/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

/**------------solution----------------

function findLongestWord(str){
      const arr =  str.split(" ");
   let maxLength = arr[0].length;
   for(let i = 0; i < arr.length; i++){
      // console.log(arr[i]);
      
      if(maxLength < arr[i].length){
         maxLength = arr[i].length;
        
      }
   } 
   // console.log(maxLength);
   let longestWord;
   for(const item of arr){
      
      if(item.length === maxLength){
         longestWord = item;
      }
   }
   return longestWord;
}
const str = "I am learning Programming to become a programmer";
const result = findLongestWord(str);
console.log("The longest word in the string is : ",result);
 */


/**
Task-5:
Generate a random number between 10 to 20.
 */

// ---------------generates 10 to 19 randomIntNumber ------------
/**
function findRndmNum(min,max){
   const result = Math.floor(Math.random()*(max-min))+ min;
   return result;
}
const result = findRndmNum(10,20);
console.log(result)

 */

// -------------generates 10 to 20 randomInt number ----------------(system 1)
/**
function findRndmNum(min,max){
   const result = Math.floor(Math.random()*(max-min))+ min+1;
   return result;
}
const result = findRndmNum(10,20);
console.log(result)

 */

// ----------------generates 10 to 20 randomInt Number ----------------(system 2 similar as system 1)

/*
function findRndmNum(min,max){
 const result = Math.floor(Math.random()*(max - min + 1)) + min;
 return result;
}
const result = findRndmNum(10,20);
console.log(result); */


/**---------------generates 0 to 100 randomInt Numbers----------------
function findRndmNum(min,max){
   const result = Math.floor(Math.random()*(max-min + 1))+ min;
   return result;
}
const result = findRndmNum(0,100);
console.log(result)

 */

