let message = "Hello 'azAd', How are you? Azad";
message = "Hello 'Azad', How are you? Azad dja;lkj adal Azad azad";
console.log(message);
// replace instring use replace() method
// /Azad/ --> regular expression 
let replaced_Message = message.replace(/Azad/, "Aman");
replaced_Message = message.replace(/Azad/gi, "Aman");
changed_message = message.toUpperCase();
changed_message = message.toLowerCase();


// console.log(replaced_Message)
console.log(changed_message)

//concatination of string 
// use concat() method or + symball between two string

let string1 = "Azad ";
let string2 = "Aman ";
let addstring = string1 + string2 + "Roghit " + " Amit";
console.log(addstring)
let concatstring = string1.concat(" ",string2, " Ramanujan sir");
console.log(concatstring)
