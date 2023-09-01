let str = "Hello worldAzAd how are you";

//Regex 
let pattern = /azaD/i;

let result = pattern.test(str);
console.log(result)


let phone = "adkkljlhjhklkj9978";
// azad978@ggmail.com
// support@mintrago.com

let phone_pattern = /(x|y)\d/;
phone_pattern = /[a-z]{4}\d/;
result = phone_pattern.test(phone);

console.log(result)

let email = document.getElementById('email');


// alert("hello")
//input event
// email.addEventListener("input", function(){
//     console.log(email.value)
// })
//azad98mintra748@gmail.com
const EmailError = document.getElementById('email-error');
email.addEventListener("change", function(){
    // console.log()
    const email_pattern = /[a-z.]+[0-9]+@[a-z]+\.[a-z]{2}/;
    let result = email_pattern.test(email.value);
    console.log(result)
    if(!result){
        console.log("please enter a valid email");
        EmailError.innerText = "please enter a valid email";
    }else{
        EmailError.innerText = "";
    }
    // if(result){

    // }
})