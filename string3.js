let name = " vALue a  ";
let name2 = "ValUE     ";

let trimNameRegiser = name.trim();
let lowerCaseNameRegiser = trimNameRegiser.toLowerCase();


let trimNameLogin = name2.trim();
let lowerCaseNameLogin = trimNameLogin.toLowerCase();
console.log(lowerCaseNameRegiser === lowerCaseNameLogin)
if(lowerCaseNameRegiser === lowerCaseNameLogin){
    console.log("Login successfull!");
}else{
    console.log("invalid credentials!")
}
let creditNumber = "9685";
let padCreditNumber = creditNumber.padStart(12, "X");
padCreditNumber = creditNumber.padEnd(12, "X");
// console.log(name2[2])
// trimStart();
// trimEnd();
// console.log(lowerCaseName);
let charAtOn = name2.charAt(1);
console.log(charAtOn)
let stringValue = "Azad Aman Mayank Piyush";
console.log(stringValue)

let splitstring = stringValue.split(" ")
console.log(typeof(splitstring));
console.log(splitstring);
console.log(splitstring[1])
