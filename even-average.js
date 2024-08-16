function evenAverage(numbers){
    const evens = [];
   for(const number of numbers){
    if(number % 2 === 0){
       evens.push(number);
    }
   }
//    console.log(evens)
let sum = 0;
for(const number of evens){
    sum = sum + number;
}
const count = evens.length;
console.log(sum,count)
const avg = sum / count;
return avg;
}
const numbers = [25,46,37,28,11,12];
const avg = evenAverage(numbers);
console.log("Average of the even numbers is : ", avg);