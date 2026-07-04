async function p1() {
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/invalidendpoint");
        if(!res.ok)
        {
            throw new Error("WRONG TRY AGAIN");
        }
        const data=await res.json();
        console.log(data);
    }
    catch(err)
    {
        console.log(err.message);
    }
}
p1()