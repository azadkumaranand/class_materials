
let x = 'aadj"s';
let y = "azad' kumar%";
let z = "it's good";
let w = "";
let c = 468465;
let d = 454.564;
let e = true; //false;

// \' == '
// \" == "
// \\ == \
// function slice(a,b){
//     if()
// }
// let x;

let message = "Hello 'Azad', How are you?";
let message1 = "Hello \"Azad\", How are you?";
// typeof(y)
// console.log(typeof(y));
let len = y.length;
// console.log(len);
// console.log(x.length);
// console.log(message1);

// slice(start, end)
// substring(start, end) --> negative arrgument treat as zero
// substr(start, length)
let message_part = message.slice(6, 12);
message_part = message.slice(-6);
// console.log(message_part)
message_part = message.substring(-6, 6);
message_part = message.substr(6, 6);
console.log(message_part)
// let message_part1 = message.slice(-6, -12)