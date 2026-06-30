const cities=["SriRajaGiri","vallaran","ulmia","nasca"];
console.log(cities[0])
console.log(cities[cities.length-1]);
cities.push("Rudrasthalam");
console.log(cities);
cities.shift()
console.log(cities);
for(let city=0;city<cities.length;city++)
{
    console.log(cities[city].toUpperCase());
}