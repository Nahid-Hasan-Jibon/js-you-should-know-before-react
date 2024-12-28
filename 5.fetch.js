// JSON

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

// obj to json
const employeeJSON = JSON.stringify(employee);

console.log(employee);
console.log(employeeJSON);

//json to obj
const employeeObj = JSON.parse(employeeJSON);
console.log(employeeObj);

//fetch
// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//  keys and values

const keys = Object.keys(employee);
const values = Object.values(employee);

// loop
const numbers = [23, 34, 456, 565, 45];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

//'for of' on array like object
//'for in' on object

//

const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "nokia", color: "gray" },
  { name: "camera", price: 332000, brand: "Nikon", color: "black" },
  { name: "watch", price: 3000, brand: "casio", color: "red" },
  { name: "Sun Glass", price: 2000, brand: "ray", color: "white" },
];

//add or remove from an array

const newProduct = {
  name: "WebCam",
  price: 4000,
  brand: "msi",
  color: "black",
};

//copy products array and then add newProduct

const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific item
// remove phone means create a new array with out the phone

const remaining = products.filter((product) => product.name !== "phone");
 
 console.log(remaining)