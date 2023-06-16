
// it is sum number.........................
// function getSum (numbers){
//   // console.log(numbers);
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     let index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(element, sum);
   
//   }
//   return sum;
// }

// let myNumbers = [78,90,34,53,87,24,345,];
// getSum(myNumbers);

// // ................it is odd Nember........................

// function getOddNumber(numbers){
//   // console.log(numbers);
//   for(let i = 0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element % 2 === 1){
//       console.log(index,element);

//     }
//   }
// }

// const myNumbers = [22,65,32,33,96,87,45];
// getOddNumber(myNumbers);

// // ..............it is even Number array....................
// function findEvenNumber(numbers){
//   let evenNumber = [];
//   for(let i = 0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element % 2 === 0){
//       // console.log(element);
//       evenNumber.push(element);
//     }
//   }
//   return evenNumber;
// }
// const myNumbers = [25,22,26,89,78,42,50,35,56];

// const total = findEvenNumber(myNumbers);
// console.log(total);

// it is odd numbre in array..........................
function findOddNumber(numbers){
  let oddNumber = [];
  for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 !== 0){
oddNumber.push(element);
    }
  }
  return oddNumber;
}
const myNumbers = [45,52,65,69,78,85,25,22,35];
const total = findOddNumber(myNumbers);
console.log(total);