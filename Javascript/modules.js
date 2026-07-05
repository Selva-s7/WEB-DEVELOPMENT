import { app_version,capitalize,clamp } from "./utils.js";
import formatPrice from "./utils.js";
console.log(app_version);
console.log(capitalize("selva"))
console.log(formatPrice(27000));
console.log(clamp(0,1,5));
console.log(clamp(5,2,10));