var shoppingCart = {
  Book: 10,
  Pen: 20,
  Calculator: 5,
  Mobile: 2,
  Watch: 30,
10:['samsung','apple','google'],
computer:{
  procecer:'core i 7',
  ram:'16gb',
  rom:512,
  motherBorad:['msi','asus','gigabyte']
}
}

var propertiesName = 'Watch';
var propertiesValue = shoppingCart[propertiesName];
// console.log(propertiesName,propertiesValue);

var properties = Object.keys(shoppingCart);
var value = Object.values(shoppingCart);
// console.log(value);
// console.log(properties);
// console.log(shoppingCart.computer.motherBorad);
var penCount2 = shoppingCart['Watch'];
var mobile = shoppingCart[10];
// console.log(mobile);
var penCount = (shoppingCart.Pen);
// console.log(penCount);
// console.log(penCount2);
// console.log(shoppingCart);

// 3 vabe property value pauwa jai
shoppingCart.Watch = 40;
shoppingCart['Watch'] = 100;
shoppingCart[propertiesName] = 250;
console.log(shoppingCart);