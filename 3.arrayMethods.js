const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "nokia", color: "gray" },
  { name: "camera", price: 332000, brand: "Nikon", color: "black" },
  { name: "watch", price: 3000, brand: "casio", color: "red" },
  { name: "Sun Glass", price: 2000, brand: "ray", color: "white" },
];
//map returns an array
const brands = products.map((product) => product.brand);
// console.log(brands);
const prices = products.map((product) => product.price);
// console.log(prices);

//when we don't need any return forEach .. here we don't need any variable to store value

// products.forEach(product=>console.log(product))
// products.forEach(product=>console.log(product.color))


products.forEach(product=>{
    // multi line use
})

//filter under condition

const cheap =products.filter(product=>product.price< 5000)
console.log(cheap)

// containing specific name
const specificName=products.filter(product=>product.name.includes('n'))
console.log(specificName)


//find 
const special = products.find(p=>p.name.includes('n'))
console.log(special)

