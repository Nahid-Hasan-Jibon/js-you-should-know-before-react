//false - '' , false,null,undefined
//truthy- 'as' 23 ' true, {}, []

// let myVar = 5;
// if (myVar) {
//   myVar = myVar * 100;
// } else {
//   myVar = 0;
// }

//check false

let myMoney = 50;
// you check negative or falsy anything
// if(!myMoney){
//     console.log()
// }
// else{

// }

const money = 80;
// let food;

// if(money>100){
//     food='kacchi'
// }
// else{
//     food='dal vat'
// }

// ternary

let food = money > 100 ? "kacchi" : "dal vat";

console.log(food);

// num to string
const num = 4;
console.log(num);
const numStr = num + "";
console.log(numStr);

//string to number
const input = "500";
const inputNum = +input;
console.log(inputNum);

//
let isActive = true;
const showUser = () => console.log("display User");
const hideUSer = () => console.log("hideUser");

isActive ? showUser() : hideUSer();
//use && if the left side is true then right side will be executed
isActive && showUser();
//use || if the left side is false then right side will be executed
isActive || hideUSer();

// toggle boolean

isActive = !isActive;
