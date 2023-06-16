// function isEven (number){
//   const evenNumber = number % 2;
// // console.log(evenNumber);
// if(evenNumber === 0){
//   console.log('numver is even');

// }
// else{
//   console.log('number is odd');
// }
// }

// isEven(47);
// isEven(50);
// console.log(isEven);

function isOddEven(number){
  const oddEvenNumber = number % 2;
  if(oddEvenNumber === 0){
    return true;
  }
  else{
    return false;
  }
}

const myNumber = isOddEven(500);
const hisNumber =isOddEven(333);
console.log(myNumber);
console.log(hisNumber);