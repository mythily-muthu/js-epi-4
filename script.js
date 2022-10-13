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
