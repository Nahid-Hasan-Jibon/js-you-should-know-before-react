//1. array destructuring

const numbers = [42, 54];
// const x = numbers[0];
// const y = numbers[1];

const [x, y, z, a = 4, b = 0] = [42, 54, 44, 88];

console.log(x, y, z, a, b);

const [p, q] = numbers;
console.log(p, q);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
// const [first, second] = [2, 4];
const [first, second] = boxify(2, 4);

const student = {
  name: "sakib khan",
  age: 43,
  movies: ["king khan", "Dhakar Mastan"],
};

// const [firstMovie, secondMovie] = ["king khan", "Dhakar Mastan"];
const [firstMovie, secondMovie] = student.movies;

//object destructuring

const { name, age } = student

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "python", "JS", "c++"],
  specification: {
    height: 66,
    weight: 76,
    address: "dhaka",
    drink: "water",
  },
};

const {machine, ide, specification}= employee
console.log(specification.address)
const {weight,address}=employee.specification
console.log(weight,address)