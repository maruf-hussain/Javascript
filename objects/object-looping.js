var shoppingCart = {
  book: 10,
  pen: 20,
  sunglass: 15,
  phone: 5,
  watch:35
}
console.log(shoppingCart);
const properties = Object.keys(shoppingCart);
console.log(properties);
const value = Object.values(shoppingCart);
console.log(value);
var keys = ['book','pen','sunglass','phone','watch'];
for(var i = 0; i < keys.length; i++){
  var propertiesName = keys[i];
  var propertiesValue = shoppingCart[propertiesName];
  console.log(propertiesName,propertiesValue);
}