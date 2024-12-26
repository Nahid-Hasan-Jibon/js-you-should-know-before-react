//template string

const numbers = [23, 45, 67, 78, 87];

const student = {
  name: "sakib khan",
  age: 43,
  movies: ["king khan", "Dhakar Mastan"],
};

const about = `My name is ${student.name} . I am ${student.age} years od old . My favorite number is ${numbers[2]} also liked movies '${student.movies[0]}' `;

console.log(about);

//2.arrow function

const funName = () => {};
const getFiftyFive = () => 55; //implicit return

const addSixtyFive = (num) => num + 65;

const isEven = (x) => x % 2 == 0;

const addThree = (a, b, c) => a + b + c;

const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};
const sum = doMath(1, 2);
console.log(sum);

// spread operator ... to create a new array of copy

const numbers2 = [23, 45, 67, 78, 87, 43, 56];
const newNumbers = [...numbers2];

//create a new array from an older array and add an element
const currentNumber = [...numbers2, 555];
console.log(currentNumber)

//
