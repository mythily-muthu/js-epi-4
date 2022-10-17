let veggies = [
    { no: 1, item: "onion", quantity: 1 },
    { no: 2, item: "tomato", quantity: 1 },
    { no: 3, item: "ladies finger", quantity: 1 },
  ];

  let result2 = veggies.find((veggie) =>  veggie.item === "tomato");
console.log(result2)


let cart_1 = ["maggie" , "beans" , 'masala'];
let cart_2 = ["matchbox", "salt"];

let total_cart = [...cart_1,...cart_2];
console.log(total_cart);