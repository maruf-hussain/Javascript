// function findeFactorial(numbers){
//   let factorial = 1;
//   for(let i = 1; i <= numbers; i++){
//     factorial = factorial * i;
//   } 
//   return factorial
// }

// const totalFactorial = findeFactorial(7);
// console.log(totalFactorial);



function findeFactorial(numbers){
  let factorial = 1;
  for(let i = numbers; i >= 1; i--){
    factorial = factorial * i;
  } 
  return factorial
}

const totalFactorial = findeFactorial(6);
console.log(totalFactorial);





// var arr = [1, 2, 3, 4, 5];
 
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

