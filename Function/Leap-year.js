function isLeapyear(year){
  const leap = year % 4;
  if(leap === 0){
return true;    
  }
  else{
  return false;
  }
 
}

const leapYear = 2029;
const herLeapyear = 2024;
let totalHerLeapyear = isLeapyear(herLeapyear);
let totalLeapyear = isLeapyear(leapYear);
console.log('my Leap Year',totalLeapyear);
console.log('her LeapYear', totalHerLeapyear);