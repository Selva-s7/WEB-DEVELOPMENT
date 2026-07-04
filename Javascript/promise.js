const promise1=new Promise((resolve,reject)=>{
    const s=true;
    setTimeout(()=>{ if (s)
        {
            resolve("LOGIN SUCCESSFUL");
        }
        else
        {
            reject("SORRY");
        }},5000);
})
promise1.then(msg=>{console.log(msg)}).catch(msg=>{console.log(msg)})
const num=2;
promise2=new Promise(
    (resolve,reject)=>
    {
        if(num%2==0)
            {
                resolve("even");
            } 
            else
            {
                reject("odd");
            }
    }
)
promise2.then(res=>{console.log(res)}).catch(err=>{console.log(err)});
promis3=new Promise(
    (resolve,reject)=>{
        resolve("SELVA");
    }
)
promis3.then(name=>name).then(name=>console.log(name));