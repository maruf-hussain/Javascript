function add(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'Please write a Number';
  }
  return num1 + num2;
}

const number = add(20,'12');
console.log(number);