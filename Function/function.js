// function startFun(){
//   console.log('start function');
//   console.log('it is a function');
//   console.log('amar function journey is a start');
// }
// startFun();


// Feet to Inchi convert any inch

function feetToinch(inch){
  const Feet = inch / 12;
  return Feet;
}

var dadaFeet = 144;
var dadiFeet = 120;
var dadiTotalFeet = feetToinch(dadiFeet);
var totalFeet = feetToinch(dadaFeet);
console.log(totalFeet);
console.log(dadiTotalFeet);