/*const htag=document.querySelector("#title");
htag.textContent="selva";
htag.style.color="blue";
htag.style.fontSize="40px";
const ptag=document.querySelector(".description");
ptag.classList.add("highlight");
const btn=document.querySelector("#btn")
//btn.classList.add("hidden");
const allpara=document.querySelectorAll(".description")
allpara.forEach(tag=>tag.innerHTML="<strong>Learning JS IS FUN</strong>");
const h2tag=document.createElement("h2");
h2tag.textContent="Created by JS";
document.body.appendChild(h2tag);
const languages = ["HTML", "CSS", "JavaScript", "Python"];
const ulist=document.createElement("ul");
languages.forEach(lang=>{
    let litag=document.createElement("li");
    litag.textContent=lang;
    ulist.appendChild(litag);
})
document.body.appendChild(ulist);
btn.remove();
const divtag=document.createElement("div");
divtag.style.backgroundColor="Red";
const ptag2=document.createElement("p");
ptag2.textContent="HELO THERE";
divtag.appendChild(ptag2);
document.body.appendChild(divtag)*/
const btn=document.querySelector("#btn");
const inputtag=document.querySelector("#nameInput");
const h1tag=document.querySelector("#title");
ptag=document.querySelector("#output");
btn.addEventListener("click",()=>{
    
    h1tag.textContent="BUTTON WAS CLICKED";
});
inputtag.addEventListener("input",e=>{
    
    ptag.textContent="HI"+e.target.value;
})
btn.addEventListener("click",(e)=>{
    h1tag.classList.toggle("highlight");
    console.log(e.target.id);
})