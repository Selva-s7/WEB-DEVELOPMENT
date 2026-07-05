export const capitalize=(str)=>{
    return str[0].toUpperCase()+str.slice(1);
}
export const app_version="1.00";
const formatPrice=(price)=>`Rs.${price}`;
export default formatPrice;
export const clamp=(num,min,max)=>{
    if(num<min)
    {
        return min;
    }
    else if (num>max)
    {
        return max;
    }
    else
    {
        return num;
    }
}
