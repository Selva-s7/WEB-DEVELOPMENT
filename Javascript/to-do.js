const intag=document.querySelector("#taskInput");
const btntag=document.querySelector("#btn");
const ultag=document.querySelector("#tasklists")
const inputTag=document.querySelector("#taskInput");
const form=document.querySelector("#taskForm");
const addtask=(e)=>{
    e?.preventDefault()
    let litag=document.createElement("li");
    let xbtn=document.createElement("button");
    xbtn.textContent="x";
    litag.textContent=intag.value;
    litag.addEventListener("click",()=>{
        litag.classList.toggle("completed");
    })
    xbtn.addEventListener("click",e=>{
        e.stopPropagation();
        litag.remove();
    })
    ultag.appendChild(litag);
    litag.appendChild(xbtn);
    intag.value="";
};
form.addEventListener("submit",addtask);

intag.addEventListener("focus",()=>{intag.classList.add("inputstyle")});
intag.addEventListener("blur",()=>{intag.classList.remove("inputstyle")});


