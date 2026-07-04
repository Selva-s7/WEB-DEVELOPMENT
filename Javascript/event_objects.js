const ptag=document.querySelector(".coords");
const btntag=document.querySelector(".btn");
const dg=document.querySelector(".mbtn");
document.addEventListener("mousemove",e=>{
    ptag.textContent=`X:${e.clientX} Y:${e.clientY}`;
    
})
btntag.addEventListener("click",e=>{
    if (e.shiftKey)
    {
        console.log("SHIFT WAS PRESSED");
    }
    else
    {
        console.log("NORMAL CLICK");
    }
})
dg.addEventListener("mousedown",e=>{
    switch(e.button)
    {
        case 0:
            console.log("left");
            break;
        case 1:
            console.log("middle");
            break;
        case 2:
            console.log("right");
    }
})