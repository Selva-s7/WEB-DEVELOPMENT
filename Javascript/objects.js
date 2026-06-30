/*const phone={
    brand:"Vivo",
    model:"Y20",
    price:13000,
    inStock:true,
    describe()
    {
        return this.brand+"Cost"+this.price;
    }
};
console.log(phone.brand);
console.log(phone.model);
console.log(phone.price);
console.log(phone.inStock);
console.log(phone.describe())
Object.keys(phone).forEach(details=>console.log(details+phone[details]))
const cart = [
  { item: "Book", price: 500 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 1200 }
];
let sum=0;
cart.forEach(cartItem=>sum+=cartItem["price"]);
console.log(sum);*/
const product = { name: "Laptop", price: 55000, inStock: true };
const {name,price}=product;
console.log(name);
console.log(price);
const scores = [95, 87, 76, 60];
const [first,second]=scores;
console.log(first);
console.log(second);
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node", "Express", "MongoDB"];
const fullStack=[...frontend,...backend]
console.log(fullStack)
const user = { name: "Selva", age: 20, city: "Chennai" };
console.log("BEFORE CHANGING:",user);
copy={...user};
copy.city="Mumbai";
console.log(copy)
console.log("AFTER CHANGING:",user);