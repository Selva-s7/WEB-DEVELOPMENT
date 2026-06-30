const add=(num1,num2)=>num1+num2;
const subtract=(num1,num2)=>num1-num2;
const multiply=(num1,num2)=>num1*num2;
const divide=(num1,num2)=>
{
    if(num2===0)
        {return "Cannot divide by zero";}
    else
    {
        return num1/num2;
    }
}
const calculate=(num1,operator,num2)=>
{   let res;
    switch(operator)
    {
        case "+":
            res=add(num1,num2);
            break;
        case "-":
            res=subtract(num1,num2);
            break;
        case "*":
            res=multiply(num1,num2);
            break;
        case "/":
            res=divide(num1,num2);
            break;
        default:
            res="Invalid Opeartion"
    }
    return res;
}
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 3));   // 7
console.log(calculate(4, "*", 6));    // 24
console.log(calculate(10, "/", 2));   // 5
console.log(calculate(10, "/", 0));   // Cannot divide by zero
console.log(calculate(10, "%", 5));   // Invalid operator