console.log("START");
setTimeout(()=>{console.log("THIS RAN AFTER 2 SECONDS")},2000);
console.log("END");
let i=5;
interval=setInterval(()=>{console.log(i);
    i--;
    if (i==0)
{
    console.log("DONE");
 clearInterval(interval);
}
},1000)
