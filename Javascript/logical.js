let temp=35;
let isRaining=false;
let isMember=false;
let hasCoupon=true;
let isAdmin=false;
let age=16;
let hasPermission=true;
if(temp>30 && !isRaining)
{
    console.log("Hot and Sunny");
}
if(isMember || hasCoupon)
{
    console.log("Discount Applied");
}
if(!isAdmin)
{
    console.log("Access Denied");
}
if(age>18 || hasPermission)
{
    console.log("CAN ENTER");
}

var i = 5;

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);
const person = {
  firstName: "John",
  lastName: "Doe"
};

let result = "firstName" in person;
console.log(result)