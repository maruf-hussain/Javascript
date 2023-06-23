// const laptops = [
//  {Name:'Dell',Procecer:'core i 5 13 gen', Ram:'32 gb',Storage:512, Color:'Black'},
//  {Name:'Samsung',Procecer:'core i 5 13 gen', Ram:'32 gb',Storage:512, Color:'Black'},
//  {Name:'Asus',Procecer:'core i 5 13 gen', Ram:'32 gb',Storage:512, Color:'Black'},
//  {Name:'Hp',Procecer:'core i 5 13 gen', Ram:'32 gb',Storage:512, Color:'Black'},
//  {Name:'Lenevo',Procecer:'core i 5 13 gen', Ram:'32 gb',Storage:512, Color:'Black'},

// ]

// function lowPriceLaptop(laptops){
//   for(let i = 0; i < laptops.length; i++){
//     const laptop = laptops[i];
//     console.log(laptop);
//   }
// }

// const cheapLaptop = lowPriceLaptop(laptops);
// // console.log(cheapLaptop);


const phones = [
  {name:'samsung',color:'black',camera:'32 mg',price: 95000},
  {name:'apple',color:'silver',camera:'48 mg',price: 122000},
  {name:'vivo',color:'black',camera:'64 mg',price:45000},
  {name:'samsung',color:'green',camera:'12 mg',price:75000}
];

function highPricePhones(phones){
  let hihest = phones[0];
  for(let i = 0; i < phones.length; i++){
    const phone = phones[i];
    if(phone.price > hihest.price){
     hihest = phone;
    }
    // console.log(phone);
  }
  return hihest;
}


const mobile = phones;
const hihPhone = highPricePhones(mobile);
console.log(hihPhone);



// // found phones lowest price here
// function highPricePhones(phones){
//   let lowest = phones[0];
//   for(let i = 0; i < phones.length; i++){
//     const phone = phones[i];
//     if(phone.price < lowest.price){
//      lowest = phone;
//     }
//     // console.log(phone);
//   }
//   return lowest;
// }


// const mobiles = phones;
// const lowPhone = highPricePhones(mobiles);
// console.log(lowPhone);