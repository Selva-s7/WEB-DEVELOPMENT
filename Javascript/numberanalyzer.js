let numbers = [4, 15, 7, 22, 9, 30, 13, 18, 5, 21];
let sum=0;
let max=0;
for(i=0;i<numbers.length;i++)
{   if(max<numbers[i])
    {
        max=numbers[i];
    }
    if(numbers[i]%2==0)
    {
        console.log("EVEN");
    }
    else
    {
        console.log("ODD");
    }
  if(numbers[i]%3==0 && numbers[i]%5==0)
  {
    console.log("fizzbuzz");
  }
  else if(numbers[i]%3==0)
  {
    console.log("buzz");
  }
  else
  {
    console.log("fizz");
  }
    
    sum+=numbers[i];
}
console.log(sum);
console.log(max);