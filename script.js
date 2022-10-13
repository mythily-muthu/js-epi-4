//reference data types

let a = {
  key: 10,
};
let b = a;
a.key = 20;

//
let user = {
  name: "mythu",
  age: 22,
  greeting() {
    console.log(`my name is ${name}and iam now ${age} years old)`);
  },
};
for (let key in user) console.log(user[key]);
for (let key of Object.keys(user)) console.log("key:" + key);
for (let key of Object.entries(user)) console.log("key:" + key);

//cloning the object

//js inbuild objects
console.log(Math.abs(-3));

// abs => turns (-) into (+) , ceil => gives 1 when given below 1
console.log(Math.ceil(0.6));

//Math

let marks = [47, 78, 90, 57];

let result = Math.min(...marks);
console.log(result);

//string object

let name1 = "muthu";
let name2 = "mani kandan ";

/* 
OBJECT / VARIABLE NAME + functions + (contents)
.concat 
.includes
.startswith
.endswith
.indexof
.repeat
.splice
.touppercase
.tolowercase
.trim
.trinstart
/trimend

escape notations
new line => \n
tab space => \t*/

//template literals...
let msg = `hi hello all
 "pls" welcome..
 please subscribe`;
console.log(msg);

//date object
let date = Date(); //string form
let nowDate = new Date("feb 18 2000"); // object form

console.log(date);
console.log(nowDate.getFullYear());

//adding an element to an array..

let number = [4, 5, 6];

console.log(number[1]);

number[3] = 7; //adding a number to an object

//push (add at end)
number.push(8);
console.log(number);

//unshift (add at front)
number.unshift(2);
console.log(number);

//splice (add in the middle) (index, dlt count, replace)
number.splice(0, 1, 3);
console.log(number);

//finding an element in an array (PRIMITIVE TYPES..)

let cart = ["apple", "orange", "mango"];

console.log(cart.indexOf("apple") !== -1);
console.log(cart.includes("apple")); //.includes

//finding an element in an array (REFERENCE TYPES..) => (find) method)

let orders = [
  //array of objects
  { id: 1, item: "smartphones", quantity: 1 },
  { id: 2, item: "laptop", quantity: 1 },
  { id: 3, item: "maggi", quantity: 1 },
  { id: 4, item: "iphone", quantity: 1 },
];

let result1 = orders.findIndex(function (order) {
  //call back function
  return order.item === "maggi";
});
console.log(result1);

//exercise

let veggies = [
  { no: 1, item1: "onion", quantity: 1 },
  { no: 2, item2: "tomato", quantity: 1 },
  { no: 3, item3: "ladies finger", quantity: 1 },
];
/*
(old style of coding..)
let result2 = veggies.find(function (veggie) {
  return veggie.item2 === "tomato";
});
console.log(result2);*/

let result2 = veggies.find((veggie) => veggie.item2 === "tomato");
console.log(result2); //modern call back function code
