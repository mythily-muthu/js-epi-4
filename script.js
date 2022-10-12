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
