

/*const product = "Laptop";
const price = 55000;
const msg = `THE ${product} cost Rs.${price}`;
console.log(msg);
details={
    name:"SELVA",
    role:"CEO",
    company:"Google"
}
const detailDiv=`<div>
    <p>NAME:${details.name}</p>
    <p>ROLE:${details.role}</p>
    <p>Company:${details.company}</p>
</div>`;
console.log(detailDiv);
const inStock=false;
const isStock=`${inStock?"Instock":"OutOfStock"}`;
console.log(isStock);*/
let score=72;
const isPass=score>=60?"Pass":"Fail";
console.log(isPass);

const user = {
  name: "Selva",
  address: {
    city: "Chennai"
  }
};
console.log(user?.address?.city);
console.log(user?.phone?.number);
const user2=null;
console.log(user2?.name ?? "Guest");
const count=0;
console.log(count||"No count");
console.log(count??"No count");
// || TREATS ALL FALSY VALUE WHICH INCLUDES 0 AS NOTHING SO IT ASSINGNS RIGHT SIDE VALUE 
// ?? treats only null as undefined as nothing so  it displays left side which is zero