const divtag=document.querySelector("#box");
divtag.addEventListener("click",(e)=>{
    if(e.target.textContent==="PARA1")
    {
        console.log("1ST PARA CLICK");
    }
    else if(e.target.textContent==="PARA2")
    {
        console.log("PARA2 CLICKED");
    }
    else
    {
        console.log("PARA3 CLICKED");
    }
})