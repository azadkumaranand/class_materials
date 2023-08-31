let str = "Hello worldAzAd how are you";

//Regex 
let pattern = /azaD/i;

let result = pattern.test(str);
console.log(result)


let phone = "azsdads 84784754645634";
// azad978@ggmail.com
// support@mintrago.com

let phone_pattern = /(x|y)\d/;
phone_pattern = /[a-z]\s\d/;
result = phone_pattern.test(phone);

console.log(result)