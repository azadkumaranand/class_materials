let str = "Azad Kumar";
let result = str.indexOf("Kumar")
console.log(result)
// let result_test = 5;
// console.log(result_test);
// result_test = 10;
// console.log(result_test)
// result = str.indexOf(/Kumar/i) --> regular expression is not allowed in indexof argument
//     /aajkljlk/--> regular expression
result = str.search("kumar");
result = str.search(/azad/i);
console.log(result)
str = "Hello Rajesh how are you? rajesh Rajesh kumar Rajesh";

result = str.match("Rajesh");
result = str.match(/Rajesh/gi);
console.log(result)