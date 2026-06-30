let products = [
  { name: "Phone", price: 20000, inStock: true },
  { name: "Laptop", price: 55000, inStock: false },
  { name: "Tablet", price: 30000, inStock: true },
  { name: "Watch", price: 8000, inStock: true },
  { name: "Headphones", price: 3000, inStock: false }
];
products.forEach(product=>console.log(product["name"]))
const stock=products.filter(product=>product["inStock"])
console.log(stock)

const prod=products.find(product=>product.price>25000).name
console.log(prod)

const name=products.map(product=>product["name"])
console.log(name)
const prod_in_stock=products.filter(product=>product["inStock"]).map(names=>names["name"])
console.log(prod_in_stock)