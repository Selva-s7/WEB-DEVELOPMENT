const details={
    name:"SELVA",
    age:21
};
localStorage.setItem("user_details",JSON.stringify(details));
const user_details=JSON.parse(localStorage.getItem("user_details"))
console.log(`MY NAME IS ${user_details.name} I AM ${user_details.age} old`)
const favplace=["RUDRASTALA","SRIRAJAGIRI","KARMANIYA"];
localStorage.setItem("favplaces",JSON.stringify(favplace));
JSON.parse(localStorage.getItem("favplaces")).forEach(place=>{console.log(place)});
let count=parseInt(localStorage.getItem("count"))||0;
const plusbtn=document.querySelector(".plus");
const negbtn=document.querySelector('.neg');
const disptag=document.querySelector(".countdisp");
disptag.textContent
plusbtn.addEventListener("click",()=>{
    count++;
    localStorage.setItem("count",count);
    disptag.textContent=count;
});
negbtn.addEventListener("click",()=>{
    count--;
    localStorage.setItem("count",count);
    disptag.textContent=count;
})