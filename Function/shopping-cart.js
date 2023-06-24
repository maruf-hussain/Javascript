const shoppingCart = [
  {name: 'phone', price:25000, quanty: 15},
  {name : 'laptop', price:20000, quanty: 3},
  {name : 'watch', price:4000, quanty: 2},
  {name : 'headphone', price:500, quanty: 1},
]


// function totalConst(products){
//   let sum = 0;
//   for (let i = 0; i < products.length;  i++){
//     const product = products[i];
//  sum = sum + product.price;
// //  console.log(sum);
//   }
//   return sum;
// }




// function totalConst(products){
//   let sum = 0;
//   for (let i = 0; i < products.length;  i++){
//     const product = products[i];
//     totalQuantityPrice = product.price * product.quanty;
//  sum = sum + totalQuantityPrice;
// //  console.log(sum);
//   }
//   return sum;
// }


// const expence = totalConst(shoppingCart);
// console.log('Total product cost', expence);

// function totalCost(products){
//   let sum = 0;
//   for(let i = 0; i < products.length; i++){
//     const product = products[i];
//     productQuantityTotalPrice = product.price * product.quanty;
//     sum = sum + productQuantityTotalPrice;
//   }
//   return sum;
// }

// const expence = totalCost(shoppingCart);
// console.log(expence);

function totalPrice(products){
  let sum = 0;
  for(let i = 0; i < products.length; i++){
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}

const totalExpence = totalPrice(shoppingCart);
console.log(totalExpence);