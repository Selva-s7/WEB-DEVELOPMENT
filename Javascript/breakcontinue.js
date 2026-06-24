for(let i=1;i<21;i++)
{
    if(i%3==0 && i%7==0)
    {
        console.log("FOUND IT");
        break;
    }
    console.log(i);
}
for(let i=1;i<15;i++)
{
    if(i%5==0)
    {
        continue;
    }
    console.log(i);
}