async function prac()
{   
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/user/1");
        if(!response.ok)
        {
            throw new Error("HEY WRONG ID");
        }
    const data=await response.json();
    console.log(data.name);
    console.log(data.email);
    console.log(data.address.city);
    }
    catch(err)
    {
        console.log(err.message);
    }
}
prac()
const prac2=async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json();
    data.splice(0,5).forEach(ob=>{console.log(ob.title)})
}
prac2()
async function createList() {
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const lists=await response.json();
    const ultag=document.createElement("ul");
    lists.forEach(ob=>{
        let litag=document.createElement("li");
        litag.textContent=ob.name;
        ultag.appendChild(litag);
    })
    document.body.appendChild(ultag);
}
createList()