const creatediv=async ()=>{
    const ptag=document.createElement("p");
    ptag.textContent="Loading";
    document.body.appendChild(ptag);
    try
    {
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok)
        {
            throw new Error("SORRY NETWORK ISSUE");
        }
        const data=await res.json();
        data.forEach(ob=>{
            let divtag=document.createElement("div");
            let nametag=document.createElement("p");
            let emailtag=document.createElement("p");
            let citytag=document.createElement("p");
            let compnametag=document.createElement("p");
            nametag.textContent=ob.name;
            emailtag.textContent=ob.email;
            citytag.textContent=ob.address.city;
            compnametag.textContent=ob.company.name;
            divtag.appendChild(nametag);
            divtag.appendChild(emailtag);
            divtag.appendChild(citytag);
            divtag.appendChild(compnametag);
            document.body.appendChild(divtag);
        })
    }
    catch(err)
    {
        console.log(err.message);
    }
    finally
    {
        ptag.remove();
    }
}
creatediv();