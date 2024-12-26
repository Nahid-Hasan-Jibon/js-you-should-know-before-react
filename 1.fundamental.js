//How to declare a variable using let and const
const fatherName = "Abbu";
let season = "rainy";
season = "winter";

//6 basic condition >,<,===,!==, <=, =>
//multiple condition &&,||
if (fatherName === "abbu" || season === "rainy") {
} else if (fatherName === "Abbu") {
} else {
}

//3. Array
// index
// length,push

const numbers = [23, 45, 67, 78, 87];
numbers[0] = 56;

//4. loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//5.Function
function mult(a,b){
    const result =a*b
    return result
}
const r =mult(2,4)
console.log(r)
